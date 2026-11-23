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

export function getAdminAppsApproveKey() {
  return ['admin.apps.approve'] as const
}

export function getAdminAppsApprovedListKey() {
  return ['admin.apps.approved.list'] as const
}

export function getAdminAppsRequestsListKey() {
  return ['admin.apps.requests.list'] as const
}

export function getAdminAppsRestrictKey() {
  return ['admin.apps.restrict'] as const
}

export function getAdminAppsRestrictedListKey() {
  return ['admin.apps.restricted.list'] as const
}

export function getAdminConversationsArchiveKey() {
  return ['admin.conversations.archive'] as const
}

export function getAdminConversationsConvertToPrivateKey() {
  return ['admin.conversations.convertToPrivate'] as const
}

export function getAdminConversationsCreateKey() {
  return ['admin.conversations.create'] as const
}

export function getAdminConversationsDeleteKey() {
  return ['admin.conversations.delete'] as const
}

export function getAdminConversationsDisconnectSharedKey() {
  return ['admin.conversations.disconnectShared'] as const
}

export function getAdminConversationsEkmListOriginalConnectedChannelInfoKey() {
  return ['admin.conversations.ekm.listOriginalConnectedChannelInfo'] as const
}

export function getAdminConversationsGetConversationPrefsKey() {
  return ['admin.conversations.getConversationPrefs'] as const
}

export function getAdminConversationsGetTeamsKey() {
  return ['admin.conversations.getTeams'] as const
}

export function getAdminConversationsInviteKey() {
  return ['admin.conversations.invite'] as const
}

export function getAdminConversationsRenameKey() {
  return ['admin.conversations.rename'] as const
}

export function getAdminConversationsRestrictAccessAddGroupKey() {
  return ['admin.conversations.restrictAccess.addGroup'] as const
}

export function getAdminConversationsRestrictAccessListGroupsKey() {
  return ['admin.conversations.restrictAccess.listGroups'] as const
}

export function getAdminConversationsRestrictAccessRemoveGroupKey() {
  return ['admin.conversations.restrictAccess.removeGroup'] as const
}

export function getAdminConversationsSearchKey() {
  return ['admin.conversations.search'] as const
}

export function getAdminConversationsSetConversationPrefsKey() {
  return ['admin.conversations.setConversationPrefs'] as const
}

export function getAdminConversationsSetTeamsKey() {
  return ['admin.conversations.setTeams'] as const
}

export function getAdminConversationsUnarchiveKey() {
  return ['admin.conversations.unarchive'] as const
}

export function getAdminEmojiAddKey() {
  return ['admin.emoji.add'] as const
}

export function getAdminEmojiAddAliasKey() {
  return ['admin.emoji.addAlias'] as const
}

export function getAdminEmojiListKey() {
  return ['admin.emoji.list'] as const
}

export function getAdminEmojiRemoveKey() {
  return ['admin.emoji.remove'] as const
}

export function getAdminEmojiRenameKey() {
  return ['admin.emoji.rename'] as const
}

export function getAdminInviteRequestsApproveKey() {
  return ['admin.inviteRequests.approve'] as const
}

export function getAdminInviteRequestsApprovedListKey() {
  return ['admin.inviteRequests.approved.list'] as const
}

export function getAdminInviteRequestsDeniedListKey() {
  return ['admin.inviteRequests.denied.list'] as const
}

export function getAdminInviteRequestsDenyKey() {
  return ['admin.inviteRequests.deny'] as const
}

export function getAdminInviteRequestsListKey() {
  return ['admin.inviteRequests.list'] as const
}

export function getAdminTeamsAdminsListKey() {
  return ['admin.teams.admins.list'] as const
}

export function getAdminTeamsCreateKey() {
  return ['admin.teams.create'] as const
}

export function getAdminTeamsListKey() {
  return ['admin.teams.list'] as const
}

export function getAdminTeamsOwnersListKey() {
  return ['admin.teams.owners.list'] as const
}

export function getAdminTeamsSettingsInfoKey() {
  return ['admin.teams.settings.info'] as const
}

export function getAdminTeamsSettingsSetDefaultChannelsKey() {
  return ['admin.teams.settings.setDefaultChannels'] as const
}

export function getAdminTeamsSettingsSetDescriptionKey() {
  return ['admin.teams.settings.setDescription'] as const
}

export function getAdminTeamsSettingsSetDiscoverabilityKey() {
  return ['admin.teams.settings.setDiscoverability'] as const
}

export function getAdminTeamsSettingsSetIconKey() {
  return ['admin.teams.settings.setIcon'] as const
}

export function getAdminTeamsSettingsSetNameKey() {
  return ['admin.teams.settings.setName'] as const
}

export function getAdminUsergroupsAddChannelsKey() {
  return ['admin.usergroups.addChannels'] as const
}

export function getAdminUsergroupsAddTeamsKey() {
  return ['admin.usergroups.addTeams'] as const
}

export function getAdminUsergroupsListChannelsKey() {
  return ['admin.usergroups.listChannels'] as const
}

export function getAdminUsergroupsRemoveChannelsKey() {
  return ['admin.usergroups.removeChannels'] as const
}

export function getAdminUsersAssignKey() {
  return ['admin.users.assign'] as const
}

export function getAdminUsersInviteKey() {
  return ['admin.users.invite'] as const
}

export function getAdminUsersListKey() {
  return ['admin.users.list'] as const
}

export function getAdminUsersRemoveKey() {
  return ['admin.users.remove'] as const
}

export function getAdminUsersSessionInvalidateKey() {
  return ['admin.users.session.invalidate'] as const
}

export function getAdminUsersSessionResetKey() {
  return ['admin.users.session.reset'] as const
}

export function getAdminUsersSetAdminKey() {
  return ['admin.users.setAdmin'] as const
}

export function getAdminUsersSetExpirationKey() {
  return ['admin.users.setExpiration'] as const
}

export function getAdminUsersSetOwnerKey() {
  return ['admin.users.setOwner'] as const
}

export function getAdminUsersSetRegularKey() {
  return ['admin.users.setRegular'] as const
}

export function getApiTestKey() {
  return ['api.test'] as const
}

export function getAppsEventAuthorizationsListKey() {
  return ['apps.event.authorizations.list'] as const
}

export function getAppsPermissionsInfoKey() {
  return ['apps.permissions.info'] as const
}

export function getAppsPermissionsRequestKey() {
  return ['apps.permissions.request'] as const
}

export function getAppsPermissionsResourcesListKey() {
  return ['apps.permissions.resources.list'] as const
}

export function getAppsPermissionsScopesListKey() {
  return ['apps.permissions.scopes.list'] as const
}

export function getAppsPermissionsUsersListKey() {
  return ['apps.permissions.users.list'] as const
}

export function getAppsPermissionsUsersRequestKey() {
  return ['apps.permissions.users.request'] as const
}

export function getAppsUninstallKey() {
  return ['apps.uninstall'] as const
}

export function getAuthRevokeKey() {
  return ['auth.revoke'] as const
}

export function getAuthTestKey() {
  return ['auth.test'] as const
}

export function getBotsInfoKey() {
  return ['bots.info'] as const
}

export function getCallsAddKey() {
  return ['calls.add'] as const
}

export function getCallsEndKey() {
  return ['calls.end'] as const
}

export function getCallsInfoKey() {
  return ['calls.info'] as const
}

export function getCallsParticipantsAddKey() {
  return ['calls.participants.add'] as const
}

export function getCallsParticipantsRemoveKey() {
  return ['calls.participants.remove'] as const
}

export function getCallsUpdateKey() {
  return ['calls.update'] as const
}

export function getChatDeleteKey() {
  return ['chat.delete'] as const
}

export function getChatDeleteScheduledMessageKey() {
  return ['chat.deleteScheduledMessage'] as const
}

export function getChatGetPermalinkKey() {
  return ['chat.getPermalink'] as const
}

export function getChatMeMessageKey() {
  return ['chat.meMessage'] as const
}

export function getChatPostEphemeralKey() {
  return ['chat.postEphemeral'] as const
}

export function getChatPostMessageKey() {
  return ['chat.postMessage'] as const
}

export function getChatScheduleMessageKey() {
  return ['chat.scheduleMessage'] as const
}

export function getChatScheduledMessagesListKey() {
  return ['chat.scheduledMessages.list'] as const
}

export function getChatUnfurlKey() {
  return ['chat.unfurl'] as const
}

export function getChatUpdateKey() {
  return ['chat.update'] as const
}

export function getConversationsArchiveKey() {
  return ['conversations.archive'] as const
}

export function getConversationsCloseKey() {
  return ['conversations.close'] as const
}

export function getConversationsCreateKey() {
  return ['conversations.create'] as const
}

export function getConversationsHistoryKey() {
  return ['conversations.history'] as const
}

export function getConversationsInfoKey() {
  return ['conversations.info'] as const
}

export function getConversationsInviteKey() {
  return ['conversations.invite'] as const
}

export function getConversationsJoinKey() {
  return ['conversations.join'] as const
}

export function getConversationsKickKey() {
  return ['conversations.kick'] as const
}

export function getConversationsLeaveKey() {
  return ['conversations.leave'] as const
}

export function getConversationsListKey() {
  return ['conversations.list'] as const
}

export function getConversationsMarkKey() {
  return ['conversations.mark'] as const
}

export function getConversationsMembersKey() {
  return ['conversations.members'] as const
}

export function getConversationsOpenKey() {
  return ['conversations.open'] as const
}

export function getConversationsRenameKey() {
  return ['conversations.rename'] as const
}

export function getConversationsRepliesKey() {
  return ['conversations.replies'] as const
}

export function getConversationsSetPurposeKey() {
  return ['conversations.setPurpose'] as const
}

export function getConversationsSetTopicKey() {
  return ['conversations.setTopic'] as const
}

export function getConversationsUnarchiveKey() {
  return ['conversations.unarchive'] as const
}

export function getDialogOpenKey() {
  return ['dialog.open'] as const
}

export function getDndEndDndKey() {
  return ['dnd.endDnd'] as const
}

export function getDndEndSnoozeKey() {
  return ['dnd.endSnooze'] as const
}

export function getDndInfoKey() {
  return ['dnd.info'] as const
}

export function getDndSetSnoozeKey() {
  return ['dnd.setSnooze'] as const
}

export function getDndTeamInfoKey() {
  return ['dnd.teamInfo'] as const
}

export function getEmojiListKey() {
  return ['emoji.list'] as const
}

export function getFilesCommentsDeleteKey() {
  return ['files.comments.delete'] as const
}

export function getFilesDeleteKey() {
  return ['files.delete'] as const
}

export function getFilesInfoKey() {
  return ['files.info'] as const
}

export function getFilesListKey() {
  return ['files.list'] as const
}

export function getFilesRemoteAddKey() {
  return ['files.remote.add'] as const
}

export function getFilesRemoteInfoKey() {
  return ['files.remote.info'] as const
}

export function getFilesRemoteListKey() {
  return ['files.remote.list'] as const
}

export function getFilesRemoteRemoveKey() {
  return ['files.remote.remove'] as const
}

export function getFilesRemoteShareKey() {
  return ['files.remote.share'] as const
}

export function getFilesRemoteUpdateKey() {
  return ['files.remote.update'] as const
}

export function getFilesRevokePublicURLKey() {
  return ['files.revokePublicURL'] as const
}

export function getFilesSharedPublicURLKey() {
  return ['files.sharedPublicURL'] as const
}

export function getFilesUploadKey() {
  return ['files.upload'] as const
}

export function getMigrationExchangeKey() {
  return ['migration.exchange'] as const
}

export function getOauthAccessKey() {
  return ['oauth.access'] as const
}

export function getOauthTokenKey() {
  return ['oauth.token'] as const
}

export function getOauthV2AccessKey() {
  return ['oauth.v2.access'] as const
}

export function getPinsAddKey() {
  return ['pins.add'] as const
}

export function getPinsListKey() {
  return ['pins.list'] as const
}

export function getPinsRemoveKey() {
  return ['pins.remove'] as const
}

export function getReactionsAddKey() {
  return ['reactions.add'] as const
}

export function getReactionsGetKey() {
  return ['reactions.get'] as const
}

export function getReactionsListKey() {
  return ['reactions.list'] as const
}

export function getReactionsRemoveKey() {
  return ['reactions.remove'] as const
}

export function getRemindersAddKey() {
  return ['reminders.add'] as const
}

export function getRemindersCompleteKey() {
  return ['reminders.complete'] as const
}

export function getRemindersDeleteKey() {
  return ['reminders.delete'] as const
}

export function getRemindersInfoKey() {
  return ['reminders.info'] as const
}

export function getRemindersListKey() {
  return ['reminders.list'] as const
}

export function getRtmConnectKey() {
  return ['rtm.connect'] as const
}

export function getSearchMessagesKey() {
  return ['search.messages'] as const
}

export function getStarsAddKey() {
  return ['stars.add'] as const
}

export function getStarsListKey() {
  return ['stars.list'] as const
}

export function getStarsRemoveKey() {
  return ['stars.remove'] as const
}

export function getTeamAccessLogsKey() {
  return ['team.accessLogs'] as const
}

export function getTeamBillableInfoKey() {
  return ['team.billableInfo'] as const
}

export function getTeamInfoKey() {
  return ['team.info'] as const
}

export function getTeamIntegrationLogsKey() {
  return ['team.integrationLogs'] as const
}

export function getTeamProfileGetKey() {
  return ['team.profile.get'] as const
}

export function getUsergroupsCreateKey() {
  return ['usergroups.create'] as const
}

export function getUsergroupsDisableKey() {
  return ['usergroups.disable'] as const
}

export function getUsergroupsEnableKey() {
  return ['usergroups.enable'] as const
}

export function getUsergroupsListKey() {
  return ['usergroups.list'] as const
}

export function getUsergroupsUpdateKey() {
  return ['usergroups.update'] as const
}

export function getUsergroupsUsersListKey() {
  return ['usergroups.users.list'] as const
}

export function getUsergroupsUsersUpdateKey() {
  return ['usergroups.users.update'] as const
}

export function getUsersConversationsKey() {
  return ['users.conversations'] as const
}

export function getUsersDeletePhotoKey() {
  return ['users.deletePhoto'] as const
}

export function getUsersGetPresenceKey() {
  return ['users.getPresence'] as const
}

export function getUsersIdentityKey() {
  return ['users.identity'] as const
}

export function getUsersInfoKey() {
  return ['users.info'] as const
}

export function getUsersListKey() {
  return ['users.list'] as const
}

export function getUsersLookupByEmailKey() {
  return ['users.lookupByEmail'] as const
}

export function getUsersProfileGetKey() {
  return ['users.profile.get'] as const
}

export function getUsersProfileSetKey() {
  return ['users.profile.set'] as const
}

export function getUsersSetActiveKey() {
  return ['users.setActive'] as const
}

export function getUsersSetPhotoKey() {
  return ['users.setPhoto'] as const
}

export function getUsersSetPresenceKey() {
  return ['users.setPresence'] as const
}

export function getViewsOpenKey() {
  return ['views.open'] as const
}

export function getViewsPublishKey() {
  return ['views.publish'] as const
}

export function getViewsPushKey() {
  return ['views.push'] as const
}

export function getViewsUpdateKey() {
  return ['views.update'] as const
}

export function getWorkflowsStepCompletedKey() {
  return ['workflows.stepCompleted'] as const
}

export function getWorkflowsStepFailedKey() {
  return ['workflows.stepFailed'] as const
}

export function getWorkflowsUpdateStepKey() {
  return ['workflows.updateStep'] as const
}

export function getPostAdminAppsApproveMutationKey() {
  return ['admin.apps.approve', '/admin.apps.approve', 'POST'] as const
}

export function getPostAdminAppsApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.approve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.apps.approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminAppsApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.apps.approve']['$post']>) {
      return parseResponse(client['admin.apps.approve'].$post(args, options))
    },
  })
}

export function usePostAdminAppsApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.approve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.apps.approve']['$post']>,
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
  const mutationDefaults = getPostAdminAppsApproveMutationOptions<TError, TOnMutateResult>(
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

export function getAdminAppsApprovedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>>,
) {
  return ['admin.apps.approved.list', '/admin.apps.approved.list', toValue(args)] as const
}

export function getAdminAppsApprovedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminAppsApprovedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.apps.approved.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminAppsApprovedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminAppsApprovedListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminAppsApprovedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminAppsApprovedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.apps.approved.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminAppsRequestsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>>,
) {
  return ['admin.apps.requests.list', '/admin.apps.requests.list', toValue(args)] as const
}

export function getAdminAppsRequestsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminAppsRequestsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.apps.requests.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminAppsRequestsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminAppsRequestsListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminAppsRequestsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminAppsRequestsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.apps.requests.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminAppsRestrictMutationKey() {
  return ['admin.apps.restrict', '/admin.apps.restrict', 'POST'] as const
}

export function getPostAdminAppsRestrictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.restrict']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.apps.restrict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminAppsRestrictMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.apps.restrict']['$post']>) {
      return parseResponse(client['admin.apps.restrict'].$post(args, options))
    },
  })
}

export function usePostAdminAppsRestrict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.restrict']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.apps.restrict']['$post']>,
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
  const mutationDefaults = getPostAdminAppsRestrictMutationOptions<TError, TOnMutateResult>(
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

export function getAdminAppsRestrictedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>>,
) {
  return ['admin.apps.restricted.list', '/admin.apps.restricted.list', toValue(args)] as const
}

export function getAdminAppsRestrictedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminAppsRestrictedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.apps.restricted.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminAppsRestrictedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminAppsRestrictedListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminAppsRestrictedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminAppsRestrictedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.apps.restricted.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminConversationsArchiveMutationKey() {
  return ['admin.conversations.archive', '/admin.conversations.archive', 'POST'] as const
}

export function getPostAdminConversationsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.archive']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.archive'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.archive']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConversationsConvertToPrivateMutationKey() {
  return [
    'admin.conversations.convertToPrivate',
    '/admin.conversations.convertToPrivate',
    'POST',
  ] as const
}

export function getPostAdminConversationsConvertToPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.convertToPrivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsConvertToPrivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.convertToPrivate'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsConvertToPrivate<
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
                  ReturnType<(typeof client)['admin.conversations.convertToPrivate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsConvertToPrivateMutationOptions<
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

export function getPostAdminConversationsCreateMutationKey() {
  return ['admin.conversations.create', '/admin.conversations.create', 'POST'] as const
}

export function getPostAdminConversationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.create']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.create'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.create']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConversationsDeleteMutationKey() {
  return ['admin.conversations.delete', '/admin.conversations.delete', 'POST'] as const
}

export function getPostAdminConversationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.delete']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.delete'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.delete']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConversationsDisconnectSharedMutationKey() {
  return [
    'admin.conversations.disconnectShared',
    '/admin.conversations.disconnectShared',
    'POST',
  ] as const
}

export function getPostAdminConversationsDisconnectSharedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.disconnectShared']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsDisconnectSharedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.disconnectShared'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsDisconnectShared<
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
                  ReturnType<(typeof client)['admin.conversations.disconnectShared']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsDisconnectSharedMutationOptions<
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

export function getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
    >
  >,
) {
  return [
    'admin.conversations.ekm.listOriginalConnectedChannelInfo',
    '/admin.conversations.ekm.listOriginalConnectedChannelInfo',
    toValue(args),
  ] as const
}

export function getAdminConversationsEkmListOriginalConnectedChannelInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConversationsEkmListOriginalConnectedChannelInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
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
                    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
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
                    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey>
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
              (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminConversationsGetConversationPrefsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'admin.conversations.getConversationPrefs',
    '/admin.conversations.getConversationPrefs',
    keyArgs,
  ] as const
}

export function getAdminConversationsGetConversationPrefsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminConversationsGetConversationPrefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.conversations.getConversationPrefs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConversationsGetConversationPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>
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
                  ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminConversationsGetConversationPrefsQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConversationsGetConversationPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminConversationsGetConversationPrefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.conversations.getConversationPrefs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminConversationsGetTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.conversations.getTeams', '/admin.conversations.getTeams', keyArgs] as const
}

export function getAdminConversationsGetTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminConversationsGetTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.conversations.getTeams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConversationsGetTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminConversationsGetTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConversationsGetTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminConversationsGetTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.conversations.getTeams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminConversationsInviteMutationKey() {
  return ['admin.conversations.invite', '/admin.conversations.invite', 'POST'] as const
}

export function getPostAdminConversationsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.invite']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.invite'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.invite']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConversationsRenameMutationKey() {
  return ['admin.conversations.rename', '/admin.conversations.rename', 'POST'] as const
}

export function getPostAdminConversationsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.rename']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.rename'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.rename']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsRenameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminConversationsRestrictAccessAddGroupMutationKey() {
  return [
    'admin.conversations.restrictAccess.addGroup',
    '/admin.conversations.restrictAccess.addGroup',
    'POST',
  ] as const
}

export function getPostAdminConversationsRestrictAccessAddGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['admin.conversations.restrictAccess.addGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.addGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsRestrictAccessAddGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['admin.conversations.restrictAccess.addGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['admin.conversations.restrictAccess.addGroup'].$post(args, options),
      )
    },
  })
}

export function usePostAdminConversationsRestrictAccessAddGroup<
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
                    (typeof client)['admin.conversations.restrictAccess.addGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.restrictAccess.addGroup']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsRestrictAccessAddGroupMutationOptions<
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

export function getAdminConversationsRestrictAccessListGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
  >,
) {
  return [
    'admin.conversations.restrictAccess.listGroups',
    '/admin.conversations.restrictAccess.listGroups',
    toValue(args),
  ] as const
}

export function getAdminConversationsRestrictAccessListGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminConversationsRestrictAccessListGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.conversations.restrictAccess.listGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConversationsRestrictAccessListGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
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
                    (typeof client)['admin.conversations.restrictAccess.listGroups']['$get']
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
                    (typeof client)['admin.conversations.restrictAccess.listGroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminConversationsRestrictAccessListGroupsQueryKey>
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
            ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConversationsRestrictAccessListGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminConversationsRestrictAccessListGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.conversations.restrictAccess.listGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminConversationsRestrictAccessRemoveGroupMutationKey() {
  return [
    'admin.conversations.restrictAccess.removeGroup',
    '/admin.conversations.restrictAccess.removeGroup',
    'POST',
  ] as const
}

export function getPostAdminConversationsRestrictAccessRemoveGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsRestrictAccessRemoveGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['admin.conversations.restrictAccess.removeGroup'].$post(args, options),
      )
    },
  })
}

export function usePostAdminConversationsRestrictAccessRemoveGroup<
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
                    (typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']
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
  const mutationDefaults = getPostAdminConversationsRestrictAccessRemoveGroupMutationOptions<
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

export function getAdminConversationsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.search']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.conversations.search', '/admin.conversations.search', keyArgs] as const
}

export function getAdminConversationsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminConversationsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.conversations.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConversationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.conversations.search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminConversationsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConversationsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminConversationsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.conversations.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminConversationsSetConversationPrefsMutationKey() {
  return [
    'admin.conversations.setConversationPrefs',
    '/admin.conversations.setConversationPrefs',
    'POST',
  ] as const
}

export function getPostAdminConversationsSetConversationPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsSetConversationPrefsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.setConversationPrefs'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsSetConversationPrefs<
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
                  ReturnType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsSetConversationPrefsMutationOptions<
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

export function getPostAdminConversationsSetTeamsMutationKey() {
  return ['admin.conversations.setTeams', '/admin.conversations.setTeams', 'POST'] as const
}

export function getPostAdminConversationsSetTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.setTeams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsSetTeamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.setTeams'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsSetTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.conversations.setTeams']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsSetTeamsMutationOptions<
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

export function getPostAdminConversationsUnarchiveMutationKey() {
  return ['admin.conversations.unarchive', '/admin.conversations.unarchive', 'POST'] as const
}

export function getPostAdminConversationsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminConversationsUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']>,
    ) {
      return parseResponse(client['admin.conversations.unarchive'].$post(args, options))
    },
  })
}

export function usePostAdminConversationsUnarchive<
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
                Awaited<ReturnType<(typeof client)['admin.conversations.unarchive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']>,
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
  const mutationDefaults = getPostAdminConversationsUnarchiveMutationOptions<
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

export function getPostAdminEmojiAddMutationKey() {
  return ['admin.emoji.add', '/admin.emoji.add', 'POST'] as const
}

export function getPostAdminEmojiAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.add']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.emoji.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.emoji.add']['$post']>) {
      return parseResponse(client['admin.emoji.add'].$post(args, options))
    },
  })
}

export function usePostAdminEmojiAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.emoji.add']['$post']>,
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
  const mutationDefaults = getPostAdminEmojiAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminEmojiAddAliasMutationKey() {
  return ['admin.emoji.addAlias', '/admin.emoji.addAlias', 'POST'] as const
}

export function getPostAdminEmojiAddAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.addAlias']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiAddAliasMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']>) {
      return parseResponse(client['admin.emoji.addAlias'].$post(args, options))
    },
  })
}

export function usePostAdminEmojiAddAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.emoji.addAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']>,
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
  const mutationDefaults = getPostAdminEmojiAddAliasMutationOptions<TError, TOnMutateResult>(
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

export function getAdminEmojiListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.emoji.list']['$get']>>,
) {
  return ['admin.emoji.list', '/admin.emoji.list', toValue(args)] as const
}

export function getAdminEmojiListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.emoji.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminEmojiListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.emoji.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminEmojiList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.emoji.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminEmojiListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminEmojiListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminEmojiListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.emoji.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminEmojiRemoveMutationKey() {
  return ['admin.emoji.remove', '/admin.emoji.remove', 'POST'] as const
}

export function getPostAdminEmojiRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.remove']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.emoji.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.emoji.remove']['$post']>) {
      return parseResponse(client['admin.emoji.remove'].$post(args, options))
    },
  })
}

export function usePostAdminEmojiRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.emoji.remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.emoji.remove']['$post']>,
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
  const mutationDefaults = getPostAdminEmojiRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminEmojiRenameMutationKey() {
  return ['admin.emoji.rename', '/admin.emoji.rename', 'POST'] as const
}

export function getPostAdminEmojiRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.rename']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.emoji.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEmojiRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.emoji.rename']['$post']>) {
      return parseResponse(client['admin.emoji.rename'].$post(args, options))
    },
  })
}

export function usePostAdminEmojiRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.emoji.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.emoji.rename']['$post']>,
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
  const mutationDefaults = getPostAdminEmojiRenameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminInviteRequestsApproveMutationKey() {
  return ['admin.inviteRequests.approve', '/admin.inviteRequests.approve', 'POST'] as const
}

export function getPostAdminInviteRequestsApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInviteRequestsApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']>,
    ) {
      return parseResponse(client['admin.inviteRequests.approve'].$post(args, options))
    },
  })
}

export function usePostAdminInviteRequestsApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.approve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']>,
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
  const mutationDefaults = getPostAdminInviteRequestsApproveMutationOptions<
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

export function getAdminInviteRequestsApprovedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'admin.inviteRequests.approved.list',
    '/admin.inviteRequests.approved.list',
    keyArgs,
  ] as const
}

export function getAdminInviteRequestsApprovedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInviteRequestsApprovedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.inviteRequests.approved.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInviteRequestsApprovedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInviteRequestsApprovedListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInviteRequestsApprovedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInviteRequestsApprovedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.inviteRequests.approved.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminInviteRequestsDeniedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.inviteRequests.denied.list', '/admin.inviteRequests.denied.list', keyArgs] as const
}

export function getAdminInviteRequestsDeniedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInviteRequestsDeniedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.inviteRequests.denied.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInviteRequestsDeniedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInviteRequestsDeniedListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInviteRequestsDeniedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInviteRequestsDeniedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.inviteRequests.denied.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminInviteRequestsDenyMutationKey() {
  return ['admin.inviteRequests.deny', '/admin.inviteRequests.deny', 'POST'] as const
}

export function getPostAdminInviteRequestsDenyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.deny']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInviteRequestsDenyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']>,
    ) {
      return parseResponse(client['admin.inviteRequests.deny'].$post(args, options))
    },
  })
}

export function usePostAdminInviteRequestsDeny<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.deny']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']>,
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
  const mutationDefaults = getPostAdminInviteRequestsDenyMutationOptions<TError, TOnMutateResult>(
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

export function getAdminInviteRequestsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.inviteRequests.list', '/admin.inviteRequests.list', keyArgs] as const
}

export function getAdminInviteRequestsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInviteRequestsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.inviteRequests.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInviteRequestsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInviteRequestsListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInviteRequestsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInviteRequestsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.inviteRequests.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminTeamsAdminsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>>,
) {
  return ['admin.teams.admins.list', '/admin.teams.admins.list', toValue(args)] as const
}

export function getAdminTeamsAdminsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTeamsAdminsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.teams.admins.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTeamsAdminsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTeamsAdminsListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsAdminsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTeamsAdminsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.teams.admins.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTeamsCreateMutationKey() {
  return ['admin.teams.create', '/admin.teams.create', 'POST'] as const
}

export function getPostAdminTeamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.teams.create']['$post']>) {
      return parseResponse(client['admin.teams.create'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.create']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTeamsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.teams.list', '/admin.teams.list', keyArgs] as const
}

export function getAdminTeamsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTeamsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.teams.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTeamsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminTeamsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTeamsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.teams.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminTeamsOwnersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>>,
) {
  return ['admin.teams.owners.list', '/admin.teams.owners.list', toValue(args)] as const
}

export function getAdminTeamsOwnersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTeamsOwnersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.teams.owners.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTeamsOwnersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTeamsOwnersListQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsOwnersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTeamsOwnersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.teams.owners.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminTeamsSettingsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.teams.settings.info', '/admin.teams.settings.info', keyArgs] as const
}

export function getAdminTeamsSettingsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTeamsSettingsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.teams.settings.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTeamsSettingsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTeamsSettingsInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsSettingsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTeamsSettingsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.teams.settings.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTeamsSettingsSetDefaultChannelsMutationKey() {
  return [
    'admin.teams.settings.setDefaultChannels',
    '/admin.teams.settings.setDefaultChannels',
    'POST',
  ] as const
}

export function getPostAdminTeamsSettingsSetDefaultChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsSettingsSetDefaultChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>,
    ) {
      return parseResponse(client['admin.teams.settings.setDefaultChannels'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsSettingsSetDefaultChannels<
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
                  ReturnType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsSettingsSetDefaultChannelsMutationOptions<
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

export function getPostAdminTeamsSettingsSetDescriptionMutationKey() {
  return [
    'admin.teams.settings.setDescription',
    '/admin.teams.settings.setDescription',
    'POST',
  ] as const
}

export function getPostAdminTeamsSettingsSetDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsSettingsSetDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>,
    ) {
      return parseResponse(client['admin.teams.settings.setDescription'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsSettingsSetDescription<
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
                Awaited<ReturnType<(typeof client)['admin.teams.settings.setDescription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsSettingsSetDescriptionMutationOptions<
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

export function getPostAdminTeamsSettingsSetDiscoverabilityMutationKey() {
  return [
    'admin.teams.settings.setDiscoverability',
    '/admin.teams.settings.setDiscoverability',
    'POST',
  ] as const
}

export function getPostAdminTeamsSettingsSetDiscoverabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsSettingsSetDiscoverabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>,
    ) {
      return parseResponse(client['admin.teams.settings.setDiscoverability'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsSettingsSetDiscoverability<
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
                  ReturnType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsSettingsSetDiscoverabilityMutationOptions<
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

export function getPostAdminTeamsSettingsSetIconMutationKey() {
  return ['admin.teams.settings.setIcon', '/admin.teams.settings.setIcon', 'POST'] as const
}

export function getPostAdminTeamsSettingsSetIconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setIcon']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsSettingsSetIconMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']>,
    ) {
      return parseResponse(client['admin.teams.settings.setIcon'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsSettingsSetIcon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.settings.setIcon']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsSettingsSetIconMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminTeamsSettingsSetNameMutationKey() {
  return ['admin.teams.settings.setName', '/admin.teams.settings.setName', 'POST'] as const
}

export function getPostAdminTeamsSettingsSetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsSettingsSetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']>,
    ) {
      return parseResponse(client['admin.teams.settings.setName'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsSettingsSetName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.teams.settings.setName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']>,
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
  const mutationDefaults = getPostAdminTeamsSettingsSetNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsergroupsAddChannelsMutationKey() {
  return ['admin.usergroups.addChannels', '/admin.usergroups.addChannels', 'POST'] as const
}

export function getPostAdminUsergroupsAddChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.addChannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsergroupsAddChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']>,
    ) {
      return parseResponse(client['admin.usergroups.addChannels'].$post(args, options))
    },
  })
}

export function usePostAdminUsergroupsAddChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.usergroups.addChannels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']>,
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
  const mutationDefaults = getPostAdminUsergroupsAddChannelsMutationOptions<
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

export function getPostAdminUsergroupsAddTeamsMutationKey() {
  return ['admin.usergroups.addTeams', '/admin.usergroups.addTeams', 'POST'] as const
}

export function getPostAdminUsergroupsAddTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.addTeams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsergroupsAddTeamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']>,
    ) {
      return parseResponse(client['admin.usergroups.addTeams'].$post(args, options))
    },
  })
}

export function usePostAdminUsergroupsAddTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.usergroups.addTeams']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']>,
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
  const mutationDefaults = getPostAdminUsergroupsAddTeamsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsergroupsListChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.usergroups.listChannels', '/admin.usergroups.listChannels', keyArgs] as const
}

export function getAdminUsergroupsListChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsergroupsListChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.usergroups.listChannels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsergroupsListChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsergroupsListChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsergroupsListChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsergroupsListChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.usergroups.listChannels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsergroupsRemoveChannelsMutationKey() {
  return ['admin.usergroups.removeChannels', '/admin.usergroups.removeChannels', 'POST'] as const
}

export function getPostAdminUsergroupsRemoveChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.removeChannels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsergroupsRemoveChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']>,
    ) {
      return parseResponse(client['admin.usergroups.removeChannels'].$post(args, options))
    },
  })
}

export function usePostAdminUsergroupsRemoveChannels<
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
                Awaited<ReturnType<(typeof client)['admin.usergroups.removeChannels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']>,
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
  const mutationDefaults = getPostAdminUsergroupsRemoveChannelsMutationOptions<
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

export function getPostAdminUsersAssignMutationKey() {
  return ['admin.users.assign', '/admin.users.assign', 'POST'] as const
}

export function getPostAdminUsersAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.assign']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.assign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersAssignMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.assign']['$post']>) {
      return parseResponse(client['admin.users.assign'].$post(args, options))
    },
  })
}

export function usePostAdminUsersAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.assign']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.assign']['$post']>,
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
  const mutationDefaults = getPostAdminUsersAssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersInviteMutationKey() {
  return ['admin.users.invite', '/admin.users.invite', 'POST'] as const
}

export function getPostAdminUsersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.invite']['$post']>) {
      return parseResponse(client['admin.users.invite'].$post(args, options))
    },
  })
}

export function usePostAdminUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.invite']['$post']>,
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
  const mutationDefaults = getPostAdminUsersInviteMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.users.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['admin.users.list', '/admin.users.list', keyArgs] as const
}

export function getAdminUsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.users.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['admin.users.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['admin.users.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminUsersListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['admin.users.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersRemoveMutationKey() {
  return ['admin.users.remove', '/admin.users.remove', 'POST'] as const
}

export function getPostAdminUsersRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.remove']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.remove']['$post']>) {
      return parseResponse(client['admin.users.remove'].$post(args, options))
    },
  })
}

export function usePostAdminUsersRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.remove']['$post']>,
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
  const mutationDefaults = getPostAdminUsersRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersSessionInvalidateMutationKey() {
  return ['admin.users.session.invalidate', '/admin.users.session.invalidate', 'POST'] as const
}

export function getPostAdminUsersSessionInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.session.invalidate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSessionInvalidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']>,
    ) {
      return parseResponse(client['admin.users.session.invalidate'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSessionInvalidate<
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
                Awaited<ReturnType<(typeof client)['admin.users.session.invalidate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSessionInvalidateMutationOptions<
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

export function getPostAdminUsersSessionResetMutationKey() {
  return ['admin.users.session.reset', '/admin.users.session.reset', 'POST'] as const
}

export function getPostAdminUsersSessionResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.session.reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.session.reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSessionResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.users.session.reset']['$post']>,
    ) {
      return parseResponse(client['admin.users.session.reset'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSessionReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.session.reset']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.session.reset']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSessionResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersSetAdminMutationKey() {
  return ['admin.users.setAdmin', '/admin.users.setAdmin', 'POST'] as const
}

export function getPostAdminUsersSetAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.setAdmin']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.setAdmin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSetAdminMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.setAdmin']['$post']>) {
      return parseResponse(client['admin.users.setAdmin'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSetAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.setAdmin']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.setAdmin']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSetAdminMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersSetExpirationMutationKey() {
  return ['admin.users.setExpiration', '/admin.users.setExpiration', 'POST'] as const
}

export function getPostAdminUsersSetExpirationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.setExpiration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.setExpiration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSetExpirationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['admin.users.setExpiration']['$post']>,
    ) {
      return parseResponse(client['admin.users.setExpiration'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSetExpiration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.setExpiration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.setExpiration']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSetExpirationMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersSetOwnerMutationKey() {
  return ['admin.users.setOwner', '/admin.users.setOwner', 'POST'] as const
}

export function getPostAdminUsersSetOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.setOwner']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.setOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSetOwnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.setOwner']['$post']>) {
      return parseResponse(client['admin.users.setOwner'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSetOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.setOwner']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.setOwner']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSetOwnerMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersSetRegularMutationKey() {
  return ['admin.users.setRegular', '/admin.users.setRegular', 'POST'] as const
}

export function getPostAdminUsersSetRegularMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.setRegular']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['admin.users.setRegular']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersSetRegularMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['admin.users.setRegular']['$post']>) {
      return parseResponse(client['admin.users.setRegular'].$post(args, options))
    },
  })
}

export function usePostAdminUsersSetRegular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['admin.users.setRegular']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['admin.users.setRegular']['$post']>,
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
  const mutationDefaults = getPostAdminUsersSetRegularMutationOptions<TError, TOnMutateResult>(
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

export function getApiTestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api.test']['$get']>>,
) {
  return ['api.test', '/api.test', toValue(args)] as const
}

export function getApiTestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api.test']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api.test'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api.test']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api.test'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsEventAuthorizationsListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['apps.event.authorizations.list', '/apps.event.authorizations.list', keyArgs] as const
}

export function getAppsEventAuthorizationsListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsEventAuthorizationsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.event.authorizations.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsEventAuthorizationsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsEventAuthorizationsListQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsEventAuthorizationsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsEventAuthorizationsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.event.authorizations.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.info']['$get']>>,
) {
  return ['apps.permissions.info', '/apps.permissions.info', toValue(args)] as const
}

export function getAppsPermissionsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsRequestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.request']['$get']>>,
) {
  return ['apps.permissions.request', '/apps.permissions.request', toValue(args)] as const
}

export function getAppsPermissionsRequestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.request']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.request'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.request']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsRequestQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.request'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsResourcesListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>
  >,
) {
  return [
    'apps.permissions.resources.list',
    '/apps.permissions.resources.list',
    toValue(args),
  ] as const
}

export function getAppsPermissionsResourcesListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsResourcesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.resources.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsResourcesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsResourcesListQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsResourcesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsResourcesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.resources.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsScopesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>>,
) {
  return ['apps.permissions.scopes.list', '/apps.permissions.scopes.list', toValue(args)] as const
}

export function getAppsPermissionsScopesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsScopesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.scopes.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsScopesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsScopesListQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsScopesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsScopesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.scopes.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsUsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>>,
) {
  return ['apps.permissions.users.list', '/apps.permissions.users.list', toValue(args)] as const
}

export function getAppsPermissionsUsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsUsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.users.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsUsersListQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsUsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsUsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.users.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsPermissionsUsersRequestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>
  >,
) {
  return [
    'apps.permissions.users.request',
    '/apps.permissions.users.request',
    toValue(args),
  ] as const
}

export function getAppsPermissionsUsersRequestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsPermissionsUsersRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.permissions.users.request'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsPermissionsUsersRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsPermissionsUsersRequestQueryKey>
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
          Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsUsersRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsPermissionsUsersRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.permissions.users.request'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsUninstallQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.uninstall']['$get']>>,
) {
  return ['apps.uninstall', '/apps.uninstall', toValue(args)] as const
}

export function getAppsUninstallQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.uninstall']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsUninstallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['apps.uninstall'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsUninstall<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['apps.uninstall']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsUninstallQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsUninstallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsUninstallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['apps.uninstall'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthRevokeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.revoke']['$get']>>,
) {
  return ['auth.revoke', '/auth.revoke', toValue(args)] as const
}

export function getAuthRevokeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.revoke']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthRevokeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['auth.revoke'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthRevoke<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.revoke']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
            >
          >,
          ReturnType<typeof getAuthRevokeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthRevokeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthRevokeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['auth.revoke'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthTestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.test']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['auth.test', '/auth.test', keyArgs] as const
}

export function getAuthTestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.test']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['auth.test'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['auth.test']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>
            >
          >,
          ReturnType<typeof getAuthTestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['auth.test'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bots.info']['$get']>>,
) {
  return ['bots.info', '/bots.info', toValue(args)] as const
}

export function getBotsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bots.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bots.info'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBotsInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bots.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>
            >
          >,
          ReturnType<typeof getBotsInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bots.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallsAddMutationKey() {
  return ['calls.add', '/calls.add', 'POST'] as const
}

export function getPostCallsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.add']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['calls.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['calls.add']['$post']>) {
      return parseResponse(client['calls.add'].$post(args, options))
    },
  })
}

export function usePostCallsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['calls.add']['$post']>,
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
  const mutationDefaults = getPostCallsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCallsEndMutationKey() {
  return ['calls.end', '/calls.end', 'POST'] as const
}

export function getPostCallsEndMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.end']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['calls.end']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsEndMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['calls.end']['$post']>) {
      return parseResponse(client['calls.end'].$post(args, options))
    },
  })
}

export function usePostCallsEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.end']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['calls.end']['$post']>,
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
  const mutationDefaults = getPostCallsEndMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCallsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calls.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calls.info', '/calls.info', keyArgs] as const
}

export function getCallsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calls.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['calls.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCallsInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['calls.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>
            >
          >,
          ReturnType<typeof getCallsInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCallsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['calls.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallsParticipantsAddMutationKey() {
  return ['calls.participants.add', '/calls.participants.add', 'POST'] as const
}

export function getPostCallsParticipantsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calls.participants.add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['calls.participants.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsParticipantsAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['calls.participants.add']['$post']>) {
      return parseResponse(client['calls.participants.add'].$post(args, options))
    },
  })
}

export function usePostCallsParticipantsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['calls.participants.add']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['calls.participants.add']['$post']>,
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
  const mutationDefaults = getPostCallsParticipantsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostCallsParticipantsRemoveMutationKey() {
  return ['calls.participants.remove', '/calls.participants.remove', 'POST'] as const
}

export function getPostCallsParticipantsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calls.participants.remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['calls.participants.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsParticipantsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['calls.participants.remove']['$post']>,
    ) {
      return parseResponse(client['calls.participants.remove'].$post(args, options))
    },
  })
}

export function usePostCallsParticipantsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['calls.participants.remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['calls.participants.remove']['$post']>,
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
  const mutationDefaults = getPostCallsParticipantsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostCallsUpdateMutationKey() {
  return ['calls.update', '/calls.update', 'POST'] as const
}

export function getPostCallsUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['calls.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['calls.update']['$post']>) {
      return parseResponse(client['calls.update'].$post(args, options))
    },
  })
}

export function usePostCallsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.update']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['calls.update']['$post']>,
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
  const mutationDefaults = getPostCallsUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChatDeleteMutationKey() {
  return ['chat.delete', '/chat.delete', 'POST'] as const
}

export function getPostChatDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.delete']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['chat.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.delete']['$post']>) {
      return parseResponse(client['chat.delete'].$post(args, options))
    },
  })
}

export function usePostChatDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.delete']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.delete']['$post']>,
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
  const mutationDefaults = getPostChatDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChatDeleteScheduledMessageMutationKey() {
  return ['chat.deleteScheduledMessage', '/chat.deleteScheduledMessage', 'POST'] as const
}

export function getPostChatDeleteScheduledMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['chat.deleteScheduledMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatDeleteScheduledMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']>,
    ) {
      return parseResponse(client['chat.deleteScheduledMessage'].$post(args, options))
    },
  })
}

export function usePostChatDeleteScheduledMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.deleteScheduledMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']>,
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
  const mutationDefaults = getPostChatDeleteScheduledMessageMutationOptions<
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

export function getChatGetPermalinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.getPermalink']['$get']>>,
) {
  return ['chat.getPermalink', '/chat.getPermalink', toValue(args)] as const
}

export function getChatGetPermalinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.getPermalink']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatGetPermalinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['chat.getPermalink'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatGetPermalink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.getPermalink']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatGetPermalinkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatGetPermalinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatGetPermalinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['chat.getPermalink'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatMeMessageMutationKey() {
  return ['chat.meMessage', '/chat.meMessage', 'POST'] as const
}

export function getPostChatMeMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.meMessage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['chat.meMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatMeMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.meMessage']['$post']>) {
      return parseResponse(client['chat.meMessage'].$post(args, options))
    },
  })
}

export function usePostChatMeMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.meMessage']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.meMessage']['$post']>,
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
  const mutationDefaults = getPostChatMeMessageMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatPostEphemeralMutationKey() {
  return ['chat.postEphemeral', '/chat.postEphemeral', 'POST'] as const
}

export function getPostChatPostEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.postEphemeral']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['chat.postEphemeral']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatPostEphemeralMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.postEphemeral']['$post']>) {
      return parseResponse(client['chat.postEphemeral'].$post(args, options))
    },
  })
}

export function usePostChatPostEphemeral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.postEphemeral']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.postEphemeral']['$post']>,
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
  const mutationDefaults = getPostChatPostEphemeralMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatPostMessageMutationKey() {
  return ['chat.postMessage', '/chat.postMessage', 'POST'] as const
}

export function getPostChatPostMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.postMessage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['chat.postMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatPostMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.postMessage']['$post']>) {
      return parseResponse(client['chat.postMessage'].$post(args, options))
    },
  })
}

export function usePostChatPostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.postMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.postMessage']['$post']>,
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
  const mutationDefaults = getPostChatPostMessageMutationOptions<TError, TOnMutateResult>(
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

export function getPostChatScheduleMessageMutationKey() {
  return ['chat.scheduleMessage', '/chat.scheduleMessage', 'POST'] as const
}

export function getPostChatScheduleMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.scheduleMessage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['chat.scheduleMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatScheduleMessageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.scheduleMessage']['$post']>) {
      return parseResponse(client['chat.scheduleMessage'].$post(args, options))
    },
  })
}

export function usePostChatScheduleMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.scheduleMessage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.scheduleMessage']['$post']>,
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
  const mutationDefaults = getPostChatScheduleMessageMutationOptions<TError, TOnMutateResult>(
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

export function getChatScheduledMessagesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['chat.scheduledMessages.list', '/chat.scheduledMessages.list', keyArgs] as const
}

export function getChatScheduledMessagesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChatScheduledMessagesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['chat.scheduledMessages.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChatScheduledMessagesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChatScheduledMessagesListQueryKey>
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
          Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatScheduledMessagesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChatScheduledMessagesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['chat.scheduledMessages.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChatUnfurlMutationKey() {
  return ['chat.unfurl', '/chat.unfurl', 'POST'] as const
}

export function getPostChatUnfurlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.unfurl']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['chat.unfurl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatUnfurlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.unfurl']['$post']>) {
      return parseResponse(client['chat.unfurl'].$post(args, options))
    },
  })
}

export function usePostChatUnfurl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.unfurl']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.unfurl']['$post']>,
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
  const mutationDefaults = getPostChatUnfurlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChatUpdateMutationKey() {
  return ['chat.update', '/chat.update', 'POST'] as const
}

export function getPostChatUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.update']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['chat.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChatUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['chat.update']['$post']>) {
      return parseResponse(client['chat.update'].$post(args, options))
    },
  })
}

export function usePostChatUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.update']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['chat.update']['$post']>,
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
  const mutationDefaults = getPostChatUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConversationsArchiveMutationKey() {
  return ['conversations.archive', '/conversations.archive', 'POST'] as const
}

export function getPostConversationsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.archive']['$post']>) {
      return parseResponse(client['conversations.archive'].$post(args, options))
    },
  })
}

export function usePostConversationsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.archive']['$post']>,
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
  const mutationDefaults = getPostConversationsArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsCloseMutationKey() {
  return ['conversations.close', '/conversations.close', 'POST'] as const
}

export function getPostConversationsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.close']['$post']>) {
      return parseResponse(client['conversations.close'].$post(args, options))
    },
  })
}

export function usePostConversationsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.close']['$post']>,
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
  const mutationDefaults = getPostConversationsCloseMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsCreateMutationKey() {
  return ['conversations.create', '/conversations.create', 'POST'] as const
}

export function getPostConversationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.create']['$post']>) {
      return parseResponse(client['conversations.create'].$post(args, options))
    },
  })
}

export function usePostConversationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.create']['$post']>,
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
  const mutationDefaults = getPostConversationsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.history']['$get']>>,
) {
  return ['conversations.history', '/conversations.history', toValue(args)] as const
}

export function getConversationsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['conversations.history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['conversations.history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversationsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.info']['$get']>>,
) {
  return ['conversations.info', '/conversations.info', toValue(args)] as const
}

export function getConversationsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['conversations.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['conversations.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsInviteMutationKey() {
  return ['conversations.invite', '/conversations.invite', 'POST'] as const
}

export function getPostConversationsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.invite']['$post']>) {
      return parseResponse(client['conversations.invite'].$post(args, options))
    },
  })
}

export function usePostConversationsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.invite']['$post']>,
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
  const mutationDefaults = getPostConversationsInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsJoinMutationKey() {
  return ['conversations.join', '/conversations.join', 'POST'] as const
}

export function getPostConversationsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.join']['$post']>) {
      return parseResponse(client['conversations.join'].$post(args, options))
    },
  })
}

export function usePostConversationsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.join']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.join']['$post']>,
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
  const mutationDefaults = getPostConversationsJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsKickMutationKey() {
  return ['conversations.kick', '/conversations.kick', 'POST'] as const
}

export function getPostConversationsKickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.kick']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.kick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsKickMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.kick']['$post']>) {
      return parseResponse(client['conversations.kick'].$post(args, options))
    },
  })
}

export function usePostConversationsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.kick']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.kick']['$post']>,
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
  const mutationDefaults = getPostConversationsKickMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsLeaveMutationKey() {
  return ['conversations.leave', '/conversations.leave', 'POST'] as const
}

export function getPostConversationsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.leave']['$post']>) {
      return parseResponse(client['conversations.leave'].$post(args, options))
    },
  })
}

export function usePostConversationsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.leave']['$post']>,
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
  const mutationDefaults = getPostConversationsLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.list']['$get']>>,
) {
  return ['conversations.list', '/conversations.list', toValue(args)] as const
}

export function getConversationsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['conversations.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['conversations.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsMarkMutationKey() {
  return ['conversations.mark', '/conversations.mark', 'POST'] as const
}

export function getPostConversationsMarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.mark']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.mark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsMarkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.mark']['$post']>) {
      return parseResponse(client['conversations.mark'].$post(args, options))
    },
  })
}

export function usePostConversationsMark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.mark']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.mark']['$post']>,
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
  const mutationDefaults = getPostConversationsMarkMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.members']['$get']>>,
) {
  return ['conversations.members', '/conversations.members', toValue(args)] as const
}

export function getConversationsMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['conversations.members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['conversations.members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsOpenMutationKey() {
  return ['conversations.open', '/conversations.open', 'POST'] as const
}

export function getPostConversationsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.open']['$post']>) {
      return parseResponse(client['conversations.open'].$post(args, options))
    },
  })
}

export function usePostConversationsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.open']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.open']['$post']>,
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
  const mutationDefaults = getPostConversationsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsRenameMutationKey() {
  return ['conversations.rename', '/conversations.rename', 'POST'] as const
}

export function getPostConversationsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.rename']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.rename']['$post']>) {
      return parseResponse(client['conversations.rename'].$post(args, options))
    },
  })
}

export function usePostConversationsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.rename']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.rename']['$post']>,
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
  const mutationDefaults = getPostConversationsRenameMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsRepliesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.replies']['$get']>>,
) {
  return ['conversations.replies', '/conversations.replies', toValue(args)] as const
}

export function getConversationsRepliesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.replies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['conversations.replies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['conversations.replies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsRepliesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['conversations.replies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsSetPurposeMutationKey() {
  return ['conversations.setPurpose', '/conversations.setPurpose', 'POST'] as const
}

export function getPostConversationsSetPurposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.setPurpose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSetPurposeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.setPurpose']['$post']>) {
      return parseResponse(client['conversations.setPurpose'].$post(args, options))
    },
  })
}

export function usePostConversationsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.setPurpose']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.setPurpose']['$post']>,
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
  const mutationDefaults = getPostConversationsSetPurposeMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsSetTopicMutationKey() {
  return ['conversations.setTopic', '/conversations.setTopic', 'POST'] as const
}

export function getPostConversationsSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.setTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.setTopic']['$post']>) {
      return parseResponse(client['conversations.setTopic'].$post(args, options))
    },
  })
}

export function usePostConversationsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.setTopic']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.setTopic']['$post']>,
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
  const mutationDefaults = getPostConversationsSetTopicMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsUnarchiveMutationKey() {
  return ['conversations.unarchive', '/conversations.unarchive', 'POST'] as const
}

export function getPostConversationsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['conversations.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsUnarchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['conversations.unarchive']['$post']>) {
      return parseResponse(client['conversations.unarchive'].$post(args, options))
    },
  })
}

export function usePostConversationsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['conversations.unarchive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['conversations.unarchive']['$post']>,
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
  const mutationDefaults = getPostConversationsUnarchiveMutationOptions<TError, TOnMutateResult>(
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

export function getDialogOpenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dialog.open']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dialog.open', '/dialog.open', keyArgs] as const
}

export function getDialogOpenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dialog.open']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDialogOpenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dialog.open'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDialogOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dialog.open']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
            >
          >,
          ReturnType<typeof getDialogOpenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDialogOpenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDialogOpenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dialog.open'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDndEndDndMutationKey() {
  return ['dnd.endDnd', '/dnd.endDnd', 'POST'] as const
}

export function getPostDndEndDndMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endDnd']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['dnd.endDnd']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDndEndDndMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dnd.endDnd']['$post']>) {
      return parseResponse(client['dnd.endDnd'].$post(args, options))
    },
  })
}

export function usePostDndEndDnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endDnd']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['dnd.endDnd']['$post']>,
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
  const mutationDefaults = getPostDndEndDndMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDndEndSnoozeMutationKey() {
  return ['dnd.endSnooze', '/dnd.endSnooze', 'POST'] as const
}

export function getPostDndEndSnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endSnooze']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dnd.endSnooze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDndEndSnoozeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dnd.endSnooze']['$post']>) {
      return parseResponse(client['dnd.endSnooze'].$post(args, options))
    },
  })
}

export function usePostDndEndSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endSnooze']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['dnd.endSnooze']['$post']>,
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
  const mutationDefaults = getPostDndEndSnoozeMutationOptions<TError, TOnMutateResult>(
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

export function getDndInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.info']['$get']>>,
) {
  return ['dnd.info', '/dnd.info', toValue(args)] as const
}

export function getDndInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDndInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dnd.info'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDndInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>
            >
          >,
          ReturnType<typeof getDndInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDndInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDndInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dnd.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDndSetSnoozeMutationKey() {
  return ['dnd.setSnooze', '/dnd.setSnooze', 'POST'] as const
}

export function getPostDndSetSnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.setSnooze']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dnd.setSnooze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDndSetSnoozeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dnd.setSnooze']['$post']>) {
      return parseResponse(client['dnd.setSnooze'].$post(args, options))
    },
  })
}

export function usePostDndSetSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.setSnooze']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['dnd.setSnooze']['$post']>,
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
  const mutationDefaults = getPostDndSetSnoozeMutationOptions<TError, TOnMutateResult>(
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

export function getDndTeamInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.teamInfo']['$get']>>,
) {
  return ['dnd.teamInfo', '/dnd.teamInfo', toValue(args)] as const
}

export function getDndTeamInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.teamInfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDndTeamInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dnd.teamInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDndTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dnd.teamInfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
            >
          >,
          ReturnType<typeof getDndTeamInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDndTeamInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDndTeamInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dnd.teamInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmojiListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['emoji.list']['$get']>>,
) {
  return ['emoji.list', '/emoji.list', toValue(args)] as const
}

export function getEmojiListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['emoji.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmojiListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['emoji.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmojiList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['emoji.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>
            >
          >,
          ReturnType<typeof getEmojiListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmojiListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmojiListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['emoji.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesCommentsDeleteMutationKey() {
  return ['files.comments.delete', '/files.comments.delete', 'POST'] as const
}

export function getPostFilesCommentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.comments.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.comments.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesCommentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.comments.delete']['$post']>) {
      return parseResponse(client['files.comments.delete'].$post(args, options))
    },
  })
}

export function usePostFilesCommentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.comments.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.comments.delete']['$post']>,
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
  const mutationDefaults = getPostFilesCommentsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesDeleteMutationKey() {
  return ['files.delete', '/files.delete', 'POST'] as const
}

export function getPostFilesDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.delete']['$post']>) {
      return parseResponse(client['files.delete'].$post(args, options))
    },
  })
}

export function usePostFilesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.delete']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.delete']['$post']>,
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
  const mutationDefaults = getPostFilesDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.info']['$get']>>,
) {
  return ['files.info', '/files.info', toValue(args)] as const
}

export function getFilesInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['files.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['files.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.list']['$get']>>,
) {
  return ['files.list', '/files.list', toValue(args)] as const
}

export function getFilesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['files.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['files.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesRemoteAddMutationKey() {
  return ['files.remote.add', '/files.remote.add', 'POST'] as const
}

export function getPostFilesRemoteAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.add']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.remote.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesRemoteAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.remote.add']['$post']>) {
      return parseResponse(client['files.remote.add'].$post(args, options))
    },
  })
}

export function usePostFilesRemoteAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.add']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.remote.add']['$post']>,
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
  const mutationDefaults = getPostFilesRemoteAddMutationOptions<TError, TOnMutateResult>(
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

export function getFilesRemoteInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.info']['$get']>>,
) {
  return ['files.remote.info', '/files.remote.info', toValue(args)] as const
}

export function getFilesRemoteInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesRemoteInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['files.remote.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesRemoteInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesRemoteInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesRemoteInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['files.remote.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesRemoteListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.list']['$get']>>,
) {
  return ['files.remote.list', '/files.remote.list', toValue(args)] as const
}

export function getFilesRemoteListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesRemoteListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['files.remote.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesRemoteList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesRemoteListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesRemoteListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['files.remote.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesRemoteRemoveMutationKey() {
  return ['files.remote.remove', '/files.remote.remove', 'POST'] as const
}

export function getPostFilesRemoteRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.remove']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.remote.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesRemoteRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.remote.remove']['$post']>) {
      return parseResponse(client['files.remote.remove'].$post(args, options))
    },
  })
}

export function usePostFilesRemoteRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.remote.remove']['$post']>,
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
  const mutationDefaults = getPostFilesRemoteRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getFilesRemoteShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.share']['$get']>>,
) {
  return ['files.remote.share', '/files.remote.share', toValue(args)] as const
}

export function getFilesRemoteShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.share']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesRemoteShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['files.remote.share'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesRemoteShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['files.remote.share']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesRemoteShareQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesRemoteShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['files.remote.share'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesRemoteUpdateMutationKey() {
  return ['files.remote.update', '/files.remote.update', 'POST'] as const
}

export function getPostFilesRemoteUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.remote.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesRemoteUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.remote.update']['$post']>) {
      return parseResponse(client['files.remote.update'].$post(args, options))
    },
  })
}

export function usePostFilesRemoteUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.remote.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.remote.update']['$post']>,
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
  const mutationDefaults = getPostFilesRemoteUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesRevokePublicURLMutationKey() {
  return ['files.revokePublicURL', '/files.revokePublicURL', 'POST'] as const
}

export function getPostFilesRevokePublicURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.revokePublicURL']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.revokePublicURL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesRevokePublicURLMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.revokePublicURL']['$post']>) {
      return parseResponse(client['files.revokePublicURL'].$post(args, options))
    },
  })
}

export function usePostFilesRevokePublicURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.revokePublicURL']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.revokePublicURL']['$post']>,
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
  const mutationDefaults = getPostFilesRevokePublicURLMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesSharedPublicURLMutationKey() {
  return ['files.sharedPublicURL', '/files.sharedPublicURL', 'POST'] as const
}

export function getPostFilesSharedPublicURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.sharedPublicURL']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.sharedPublicURL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesSharedPublicURLMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.sharedPublicURL']['$post']>) {
      return parseResponse(client['files.sharedPublicURL'].$post(args, options))
    },
  })
}

export function usePostFilesSharedPublicURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['files.sharedPublicURL']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.sharedPublicURL']['$post']>,
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
  const mutationDefaults = getPostFilesSharedPublicURLMutationOptions<TError, TOnMutateResult>(
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

export function getPostFilesUploadMutationKey() {
  return ['files.upload', '/files.upload', 'POST'] as const
}

export function getPostFilesUploadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.upload']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['files.upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['files.upload']['$post']>) {
      return parseResponse(client['files.upload'].$post(args, options))
    },
  })
}

export function usePostFilesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['files.upload']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['files.upload']['$post']>,
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
  const mutationDefaults = getPostFilesUploadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMigrationExchangeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['migration.exchange']['$get']>>,
) {
  return ['migration.exchange', '/migration.exchange', toValue(args)] as const
}

export function getMigrationExchangeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['migration.exchange']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMigrationExchangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['migration.exchange'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMigrationExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['migration.exchange']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMigrationExchangeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMigrationExchangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMigrationExchangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['migration.exchange'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.access']['$get']>>,
) {
  return ['oauth.access', '/oauth.access', toValue(args)] as const
}

export function getOauthAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.access']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['oauth.access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAccess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.access']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
            >
          >,
          ReturnType<typeof getOauthAccessQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['oauth.access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.token']['$get']>>,
) {
  return ['oauth.token', '/oauth.token', toValue(args)] as const
}

export function getOauthTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['oauth.token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
            >
          >,
          ReturnType<typeof getOauthTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['oauth.token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthV2AccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.v2.access']['$get']>>,
) {
  return ['oauth.v2.access', '/oauth.v2.access', toValue(args)] as const
}

export function getOauthV2AccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.v2.access']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthV2AccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['oauth.v2.access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthV2Access<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['oauth.v2.access']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
            >
          >,
          ReturnType<typeof getOauthV2AccessQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthV2AccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthV2AccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['oauth.v2.access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPinsAddMutationKey() {
  return ['pins.add', '/pins.add', 'POST'] as const
}

export function getPostPinsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.add']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.add']['$post']>) {
      return parseResponse(client['pins.add'].$post(args, options))
    },
  })
}

export function usePostPinsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['pins.add']['$post']>,
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
  const mutationDefaults = getPostPinsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPinsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['pins.list']['$get']>>,
) {
  return ['pins.list', '/pins.list', toValue(args)] as const
}

export function getPinsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['pins.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['pins.list'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePinsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['pins.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>
            >
          >,
          ReturnType<typeof getPinsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['pins.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPinsRemoveMutationKey() {
  return ['pins.remove', '/pins.remove', 'POST'] as const
}

export function getPostPinsRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.remove']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.remove']['$post']>) {
      return parseResponse(client['pins.remove'].$post(args, options))
    },
  })
}

export function usePostPinsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.remove']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['pins.remove']['$post']>,
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
  const mutationDefaults = getPostPinsRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReactionsAddMutationKey() {
  return ['reactions.add', '/reactions.add', 'POST'] as const
}

export function getPostReactionsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.add']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reactions.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReactionsAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reactions.add']['$post']>) {
      return parseResponse(client['reactions.add'].$post(args, options))
    },
  })
}

export function usePostReactionsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['reactions.add']['$post']>,
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
  const mutationDefaults = getPostReactionsAddMutationOptions<TError, TOnMutateResult>(
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

export function getReactionsGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.get']['$get']>>,
) {
  return ['reactions.get', '/reactions.get', toValue(args)] as const
}

export function getReactionsGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReactionsGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reactions.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReactionsGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
            >
          >,
          ReturnType<typeof getReactionsGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReactionsGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReactionsGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reactions.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReactionsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.list']['$get']>>,
) {
  return ['reactions.list', '/reactions.list', toValue(args)] as const
}

export function getReactionsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReactionsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reactions.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReactionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reactions.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
            >
          >,
          ReturnType<typeof getReactionsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReactionsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReactionsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reactions.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReactionsRemoveMutationKey() {
  return ['reactions.remove', '/reactions.remove', 'POST'] as const
}

export function getPostReactionsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.remove']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reactions.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReactionsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reactions.remove']['$post']>) {
      return parseResponse(client['reactions.remove'].$post(args, options))
    },
  })
}

export function usePostReactionsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reactions.remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reactions.remove']['$post']>,
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
  const mutationDefaults = getPostReactionsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostRemindersAddMutationKey() {
  return ['reminders.add', '/reminders.add', 'POST'] as const
}

export function getPostRemindersAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.add']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reminders.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRemindersAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reminders.add']['$post']>) {
      return parseResponse(client['reminders.add'].$post(args, options))
    },
  })
}

export function usePostRemindersAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['reminders.add']['$post']>,
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
  const mutationDefaults = getPostRemindersAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostRemindersCompleteMutationKey() {
  return ['reminders.complete', '/reminders.complete', 'POST'] as const
}

export function getPostRemindersCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.complete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reminders.complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRemindersCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reminders.complete']['$post']>) {
      return parseResponse(client['reminders.complete'].$post(args, options))
    },
  })
}

export function usePostRemindersComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reminders.complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reminders.complete']['$post']>,
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
  const mutationDefaults = getPostRemindersCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostRemindersDeleteMutationKey() {
  return ['reminders.delete', '/reminders.delete', 'POST'] as const
}

export function getPostRemindersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reminders.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRemindersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reminders.delete']['$post']>) {
      return parseResponse(client['reminders.delete'].$post(args, options))
    },
  })
}

export function usePostRemindersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reminders.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['reminders.delete']['$post']>,
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
  const mutationDefaults = getPostRemindersDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getRemindersInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.info']['$get']>>,
) {
  return ['reminders.info', '/reminders.info', toValue(args)] as const
}

export function getRemindersInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRemindersInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reminders.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRemindersInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
            >
          >,
          ReturnType<typeof getRemindersInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemindersInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRemindersInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reminders.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRemindersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.list']['$get']>>,
) {
  return ['reminders.list', '/reminders.list', toValue(args)] as const
}

export function getRemindersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRemindersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reminders.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRemindersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reminders.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
            >
          >,
          ReturnType<typeof getRemindersListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemindersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRemindersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reminders.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRtmConnectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rtm.connect']['$get']>>,
) {
  return ['rtm.connect', '/rtm.connect', toValue(args)] as const
}

export function getRtmConnectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rtm.connect']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRtmConnectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['rtm.connect'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRtmConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['rtm.connect']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
            >
          >,
          ReturnType<typeof getRtmConnectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRtmConnectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRtmConnectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['rtm.connect'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.messages']['$get']>>,
) {
  return ['search.messages', '/search.messages', toValue(args)] as const
}

export function getSearchMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['search.messages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['search.messages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStarsAddMutationKey() {
  return ['stars.add', '/stars.add', 'POST'] as const
}

export function getPostStarsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.add']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['stars.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.add']['$post']>) {
      return parseResponse(client['stars.add'].$post(args, options))
    },
  })
}

export function usePostStarsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.add']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['stars.add']['$post']>,
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
  const mutationDefaults = getPostStarsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStarsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stars.list']['$get']>>,
) {
  return ['stars.list', '/stars.list', toValue(args)] as const
}

export function getStarsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stars.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStarsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stars.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStarsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stars.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>
            >
          >,
          ReturnType<typeof getStarsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStarsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStarsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stars.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStarsRemoveMutationKey() {
  return ['stars.remove', '/stars.remove', 'POST'] as const
}

export function getPostStarsRemoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.remove']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['stars.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.remove']['$post']>) {
      return parseResponse(client['stars.remove'].$post(args, options))
    },
  })
}

export function usePostStarsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.remove']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['stars.remove']['$post']>,
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
  const mutationDefaults = getPostStarsRemoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamAccessLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.accessLogs']['$get']>>,
) {
  return ['team.accessLogs', '/team.accessLogs', toValue(args)] as const
}

export function getTeamAccessLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.accessLogs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamAccessLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team.accessLogs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamAccessLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.accessLogs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamAccessLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamAccessLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamAccessLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team.accessLogs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamBillableInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.billableInfo']['$get']>>,
) {
  return ['team.billableInfo', '/team.billableInfo', toValue(args)] as const
}

export function getTeamBillableInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.billableInfo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamBillableInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team.billableInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamBillableInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.billableInfo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamBillableInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamBillableInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamBillableInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team.billableInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.info']['$get']>>,
) {
  return ['team.info', '/team.info', toValue(args)] as const
}

export function getTeamInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team.info'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamIntegrationLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.integrationLogs']['$get']>>,
) {
  return ['team.integrationLogs', '/team.integrationLogs', toValue(args)] as const
}

export function getTeamIntegrationLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.integrationLogs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamIntegrationLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team.integrationLogs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamIntegrationLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.integrationLogs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamIntegrationLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamIntegrationLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamIntegrationLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team.integrationLogs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamProfileGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.profile.get']['$get']>>,
) {
  return ['team.profile.get', '/team.profile.get', toValue(args)] as const
}

export function getTeamProfileGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.profile.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamProfileGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team.profile.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamProfileGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team.profile.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamProfileGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamProfileGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamProfileGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team.profile.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsergroupsCreateMutationKey() {
  return ['usergroups.create', '/usergroups.create', 'POST'] as const
}

export function getPostUsergroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['usergroups.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsergroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['usergroups.create']['$post']>) {
      return parseResponse(client['usergroups.create'].$post(args, options))
    },
  })
}

export function usePostUsergroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['usergroups.create']['$post']>,
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
  const mutationDefaults = getPostUsergroupsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsergroupsDisableMutationKey() {
  return ['usergroups.disable', '/usergroups.disable', 'POST'] as const
}

export function getPostUsergroupsDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.disable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['usergroups.disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsergroupsDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['usergroups.disable']['$post']>) {
      return parseResponse(client['usergroups.disable'].$post(args, options))
    },
  })
}

export function usePostUsergroupsDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.disable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['usergroups.disable']['$post']>,
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
  const mutationDefaults = getPostUsergroupsDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsergroupsEnableMutationKey() {
  return ['usergroups.enable', '/usergroups.enable', 'POST'] as const
}

export function getPostUsergroupsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.enable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['usergroups.enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsergroupsEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['usergroups.enable']['$post']>) {
      return parseResponse(client['usergroups.enable'].$post(args, options))
    },
  })
}

export function usePostUsergroupsEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['usergroups.enable']['$post']>,
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
  const mutationDefaults = getPostUsergroupsEnableMutationOptions<TError, TOnMutateResult>(
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

export function getUsergroupsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.list']['$get']>>,
) {
  return ['usergroups.list', '/usergroups.list', toValue(args)] as const
}

export function getUsergroupsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsergroupsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['usergroups.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsergroupsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
            >
          >,
          ReturnType<typeof getUsergroupsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsergroupsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsergroupsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['usergroups.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsergroupsUpdateMutationKey() {
  return ['usergroups.update', '/usergroups.update', 'POST'] as const
}

export function getPostUsergroupsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['usergroups.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsergroupsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['usergroups.update']['$post']>) {
      return parseResponse(client['usergroups.update'].$post(args, options))
    },
  })
}

export function usePostUsergroupsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['usergroups.update']['$post']>,
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
  const mutationDefaults = getPostUsergroupsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getUsergroupsUsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.users.list']['$get']>>,
) {
  return ['usergroups.users.list', '/usergroups.users.list', toValue(args)] as const
}

export function getUsergroupsUsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.users.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsergroupsUsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['usergroups.users.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsergroupsUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['usergroups.users.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsergroupsUsersListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsergroupsUsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsergroupsUsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['usergroups.users.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsergroupsUsersUpdateMutationKey() {
  return ['usergroups.users.update', '/usergroups.users.update', 'POST'] as const
}

export function getPostUsergroupsUsersUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['usergroups.users.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['usergroups.users.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsergroupsUsersUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['usergroups.users.update']['$post']>) {
      return parseResponse(client['usergroups.users.update'].$post(args, options))
    },
  })
}

export function usePostUsergroupsUsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['usergroups.users.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['usergroups.users.update']['$post']>,
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
  const mutationDefaults = getPostUsergroupsUsersUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getUsersConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.conversations']['$get']>>,
) {
  return ['users.conversations', '/users.conversations', toValue(args)] as const
}

export function getUsersConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.conversations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.conversations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.conversations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersConversationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.conversations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersDeletePhotoMutationKey() {
  return ['users.deletePhoto', '/users.deletePhoto', 'POST'] as const
}

export function getPostUsersDeletePhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.deletePhoto']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.deletePhoto']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersDeletePhotoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.deletePhoto']['$post']>) {
      return parseResponse(client['users.deletePhoto'].$post(args, options))
    },
  })
}

export function usePostUsersDeletePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.deletePhoto']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['users.deletePhoto']['$post']>,
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
  const mutationDefaults = getPostUsersDeletePhotoMutationOptions<TError, TOnMutateResult>(
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

export function getUsersGetPresenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.getPresence']['$get']>>,
) {
  return ['users.getPresence', '/users.getPresence', toValue(args)] as const
}

export function getUsersGetPresenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.getPresence']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersGetPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.getPresence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersGetPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.getPresence']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersGetPresenceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersGetPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersGetPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.getPresence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdentityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.identity']['$get']>>,
) {
  return ['users.identity', '/users.identity', toValue(args)] as const
}

export function getUsersIdentityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.identity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.identity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdentity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.identity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdentityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.identity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.info']['$get']>>,
) {
  return ['users.info', '/users.info', toValue(args)] as const
}

export function getUsersInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.list']['$get']>>,
) {
  return ['users.list', '/users.list', toValue(args)] as const
}

export function getUsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersLookupByEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.lookupByEmail']['$get']>>,
) {
  return ['users.lookupByEmail', '/users.lookupByEmail', toValue(args)] as const
}

export function getUsersLookupByEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.lookupByEmail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersLookupByEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.lookupByEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersLookupByEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.lookupByEmail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersLookupByEmailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersLookupByEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersLookupByEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.lookupByEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersProfileGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.profile.get']['$get']>>,
) {
  return ['users.profile.get', '/users.profile.get', toValue(args)] as const
}

export function getUsersProfileGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.profile.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersProfileGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['users.profile.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersProfileGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['users.profile.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersProfileGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersProfileGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersProfileGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['users.profile.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersProfileSetMutationKey() {
  return ['users.profile.set', '/users.profile.set', 'POST'] as const
}

export function getPostUsersProfileSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.set']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.profile.set']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersProfileSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.profile.set']['$post']>) {
      return parseResponse(client['users.profile.set'].$post(args, options))
    },
  })
}

export function usePostUsersProfileSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.profile.set']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['users.profile.set']['$post']>,
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
  const mutationDefaults = getPostUsersProfileSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersSetActiveMutationKey() {
  return ['users.setActive', '/users.setActive', 'POST'] as const
}

export function getPostUsersSetActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setActive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.setActive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSetActiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.setActive']['$post']>) {
      return parseResponse(client['users.setActive'].$post(args, options))
    },
  })
}

export function usePostUsersSetActive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setActive']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['users.setActive']['$post']>,
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
  const mutationDefaults = getPostUsersSetActiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersSetPhotoMutationKey() {
  return ['users.setPhoto', '/users.setPhoto', 'POST'] as const
}

export function getPostUsersSetPhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPhoto']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.setPhoto']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSetPhotoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.setPhoto']['$post']>) {
      return parseResponse(client['users.setPhoto'].$post(args, options))
    },
  })
}

export function usePostUsersSetPhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPhoto']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['users.setPhoto']['$post']>,
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
  const mutationDefaults = getPostUsersSetPhotoMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersSetPresenceMutationKey() {
  return ['users.setPresence', '/users.setPresence', 'POST'] as const
}

export function getPostUsersSetPresenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPresence']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.setPresence']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSetPresenceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.setPresence']['$post']>) {
      return parseResponse(client['users.setPresence'].$post(args, options))
    },
  })
}

export function usePostUsersSetPresence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['users.setPresence']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['users.setPresence']['$post']>,
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
  const mutationDefaults = getPostUsersSetPresenceMutationOptions<TError, TOnMutateResult>(
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

export function getViewsOpenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.open']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['views.open', '/views.open', keyArgs] as const
}

export function getViewsOpenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.open']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewsOpenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['views.open'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.open']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>
            >
          >,
          ReturnType<typeof getViewsOpenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsOpenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewsOpenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['views.open'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewsPublishQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.publish']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['views.publish', '/views.publish', keyArgs] as const
}

export function getViewsPublishQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.publish']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewsPublishQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['views.publish'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewsPublish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.publish']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
            >
          >,
          ReturnType<typeof getViewsPublishQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewsPublishQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewsPublishQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['views.publish'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewsPushQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.push']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['views.push', '/views.push', keyArgs] as const
}

export function getViewsPushQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.push']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewsPushQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['views.push'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewsPush<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.push']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>
            >
          >,
          ReturnType<typeof getViewsPushQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsPushQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewsPushQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['views.push'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewsUpdateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.update']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['views.update', '/views.update', keyArgs] as const
}

export function getViewsUpdateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.update']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewsUpdateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['views.update'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewsUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['views.update']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
            >
          >,
          ReturnType<typeof getViewsUpdateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewsUpdateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['views.update'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsStepCompletedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows.stepCompleted', '/workflows.stepCompleted', keyArgs] as const
}

export function getWorkflowsStepCompletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsStepCompletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['workflows.stepCompleted'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsStepCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsStepCompletedQueryKey>
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
          Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsStepCompletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsStepCompletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['workflows.stepCompleted'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsStepFailedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepFailed']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows.stepFailed', '/workflows.stepFailed', keyArgs] as const
}

export function getWorkflowsStepFailedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepFailed']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsStepFailedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['workflows.stepFailed'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsStepFailed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.stepFailed']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsStepFailedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsStepFailedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsStepFailedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['workflows.stepFailed'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkflowsUpdateStepQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.updateStep']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workflows.updateStep', '/workflows.updateStep', keyArgs] as const
}

export function getWorkflowsUpdateStepQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.updateStep']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsUpdateStepQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['workflows.updateStep'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsUpdateStep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['workflows.updateStep']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsUpdateStepQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsUpdateStepQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsUpdateStepQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['workflows.updateStep'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
