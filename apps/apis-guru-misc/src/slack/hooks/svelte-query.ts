import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostAdminAppsApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminAppsApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminAppsApprovedListQueryKey(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
) {
  return ['admin.apps.approved.list', '/admin.apps.approved.list', args] as const
}

export function getAdminAppsApprovedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminAppsApprovedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.apps.approved.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminAppsApprovedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminAppsApprovedListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdminAppsRequestsListQueryKey(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
) {
  return ['admin.apps.requests.list', '/admin.apps.requests.list', args] as const
}

export function getAdminAppsRequestsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminAppsRequestsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.apps.requests.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminAppsRequestsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminAppsRequestsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminAppsRestrict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminAppsRestrictMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminAppsRestrictedListQueryKey(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
) {
  return ['admin.apps.restricted.list', '/admin.apps.restricted.list', args] as const
}

export function getAdminAppsRestrictedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminAppsRestrictedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.apps.restricted.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminAppsRestrictedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminAppsRestrictedListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminConversationsArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsConvertToPrivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsConvertToPrivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsDisconnectShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsDisconnectSharedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey(
  args: InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
) {
  return [
    'admin.conversations.ekm.listOriginalConnectedChannelInfo',
    '/admin.conversations.ekm.listOriginalConnectedChannelInfo',
    args,
  ] as const
}

export function getAdminConversationsEkmListOriginalConnectedChannelInfoQueryOptions<
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
  args: InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConversationsEkmListOriginalConnectedChannelInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminConversationsEkmListOriginalConnectedChannelInfo<
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
  args: () => InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminConversationsEkmListOriginalConnectedChannelInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdminConversationsGetConversationPrefsQueryKey(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'admin.conversations.getConversationPrefs',
    '/admin.conversations.getConversationPrefs',
    keyArgs,
  ] as const
}

export function getAdminConversationsGetConversationPrefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConversationsGetConversationPrefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.conversations.getConversationPrefs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminConversationsGetConversationPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAdminConversationsGetConversationPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminConversationsGetConversationPrefsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdminConversationsGetTeamsQueryKey(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.conversations.getTeams', '/admin.conversations.getTeams', keyArgs] as const
}

export function getAdminConversationsGetTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConversationsGetTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.conversations.getTeams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminConversationsGetTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminConversationsGetTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminConversationsInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsInviteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsRename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsRenameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsRestrictAccessAddGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsRestrictAccessAddGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminConversationsRestrictAccessListGroupsQueryKey(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
) {
  return [
    'admin.conversations.restrictAccess.listGroups',
    '/admin.conversations.restrictAccess.listGroups',
    args,
  ] as const
}

export function getAdminConversationsRestrictAccessListGroupsQueryOptions<
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
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConversationsRestrictAccessListGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.conversations.restrictAccess.listGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminConversationsRestrictAccessListGroups<
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
  args: () => InferRequestType<
    (typeof client)['admin.conversations.restrictAccess.listGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminConversationsRestrictAccessListGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminConversationsRestrictAccessRemoveGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsRestrictAccessRemoveGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminConversationsSearchQueryKey(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.conversations.search', '/admin.conversations.search', keyArgs] as const
}

export function getAdminConversationsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConversationsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.conversations.search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminConversationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminConversationsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminConversationsSetConversationPrefs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsSetConversationPrefsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsSetTeams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsSetTeamsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminConversationsUnarchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminConversationsUnarchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminEmojiAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['admin.emoji.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminEmojiAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminEmojiAddAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminEmojiAddAliasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminEmojiListQueryKey(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
) {
  return ['admin.emoji.list', '/admin.emoji.list', args] as const
}

export function getAdminEmojiListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminEmojiListQueryKey>
  >({
    queryKey: getAdminEmojiListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.emoji.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminEmojiList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminEmojiListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminEmojiListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAdminEmojiRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminEmojiRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminEmojiRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminEmojiRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminInviteRequestsApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminInviteRequestsApproveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminInviteRequestsApprovedListQueryKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'admin.inviteRequests.approved.list',
    '/admin.inviteRequests.approved.list',
    keyArgs,
  ] as const
}

export function getAdminInviteRequestsApprovedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminInviteRequestsApprovedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.inviteRequests.approved.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminInviteRequestsApprovedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminInviteRequestsApprovedListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdminInviteRequestsDeniedListQueryKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.inviteRequests.denied.list', '/admin.inviteRequests.denied.list', keyArgs] as const
}

export function getAdminInviteRequestsDeniedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminInviteRequestsDeniedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.inviteRequests.denied.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminInviteRequestsDeniedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminInviteRequestsDeniedListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminInviteRequestsDeny<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminInviteRequestsDenyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminInviteRequestsListQueryKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.inviteRequests.list', '/admin.inviteRequests.list', keyArgs] as const
}

export function getAdminInviteRequestsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminInviteRequestsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.inviteRequests.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminInviteRequestsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminInviteRequestsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdminTeamsAdminsListQueryKey(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
) {
  return ['admin.teams.admins.list', '/admin.teams.admins.list', args] as const
}

export function getAdminTeamsAdminsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminTeamsAdminsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.teams.admins.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminTeamsAdminsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminTeamsAdminsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminTeamsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminTeamsListQueryKey(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.teams.list', '/admin.teams.list', keyArgs] as const
}

export function getAdminTeamsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsListQueryKey>
  >({
    queryKey: getAdminTeamsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.teams.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminTeamsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.teams.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTeamsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminTeamsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAdminTeamsOwnersListQueryKey(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
) {
  return ['admin.teams.owners.list', '/admin.teams.owners.list', args] as const
}

export function getAdminTeamsOwnersListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminTeamsOwnersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.teams.owners.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminTeamsOwnersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminTeamsOwnersListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdminTeamsSettingsInfoQueryKey(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.teams.settings.info', '/admin.teams.settings.info', keyArgs] as const
}

export function getAdminTeamsSettingsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminTeamsSettingsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.teams.settings.info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminTeamsSettingsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminTeamsSettingsInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminTeamsSettingsSetDefaultChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsSettingsSetDefaultChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTeamsSettingsSetDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsSettingsSetDescriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTeamsSettingsSetDiscoverability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsSettingsSetDiscoverabilityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTeamsSettingsSetIcon<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsSettingsSetIconMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTeamsSettingsSetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTeamsSettingsSetNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsergroupsAddChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsergroupsAddChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsergroupsAddTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsergroupsAddTeamsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminUsergroupsListChannelsQueryKey(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.usergroups.listChannels', '/admin.usergroups.listChannels', keyArgs] as const
}

export function getAdminUsergroupsListChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminUsergroupsListChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.usergroups.listChannels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminUsergroupsListChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminUsergroupsListChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAdminUsergroupsRemoveChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsergroupsRemoveChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminUsersListQueryKey(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.users.list', '/admin.users.list', keyArgs] as const
}

export function getAdminUsersListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersListQueryKey>
  >({
    queryKey: getAdminUsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['admin.users.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['admin.users.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminUsersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAdminUsersRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSessionInvalidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSessionInvalidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSessionReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSessionResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSetAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSetAdminMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSetExpiration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSetExpirationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSetOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSetOwnerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminUsersSetRegular<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersSetRegularMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTestQueryKey(args: InferRequestType<(typeof client)['api.test']['$get']>) {
  return ['api.test', '/api.test', args] as const
}

export function getApiTestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['api.test']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTestQueryKey>
  >({
    queryKey: getApiTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api.test'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api.test']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsEventAuthorizationsListQueryKey(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['apps.event.authorizations.list', '/apps.event.authorizations.list', keyArgs] as const
}

export function getAppsEventAuthorizationsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsEventAuthorizationsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.event.authorizations.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsEventAuthorizationsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsEventAuthorizationsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsPermissionsInfoQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
) {
  return ['apps.permissions.info', '/apps.permissions.info', args] as const
}

export function getAppsPermissionsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsPermissionsInfoQueryKey>
  >({
    queryKey: getAppsPermissionsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsPermissionsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsPermissionsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAppsPermissionsRequestQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
) {
  return ['apps.permissions.request', '/apps.permissions.request', args] as const
}

export function getAppsPermissionsRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsPermissionsRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.request'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsPermissionsRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsPermissionsResourcesListQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
) {
  return ['apps.permissions.resources.list', '/apps.permissions.resources.list', args] as const
}

export function getAppsPermissionsResourcesListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsPermissionsResourcesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.resources.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsResourcesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsPermissionsResourcesListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsPermissionsScopesListQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
) {
  return ['apps.permissions.scopes.list', '/apps.permissions.scopes.list', args] as const
}

export function getAppsPermissionsScopesListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsPermissionsScopesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.scopes.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsScopesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsPermissionsScopesListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsPermissionsUsersListQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
) {
  return ['apps.permissions.users.list', '/apps.permissions.users.list', args] as const
}

export function getAppsPermissionsUsersListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsPermissionsUsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.users.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsPermissionsUsersListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsPermissionsUsersRequestQueryKey(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
) {
  return ['apps.permissions.users.request', '/apps.permissions.users.request', args] as const
}

export function getAppsPermissionsUsersRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppsPermissionsUsersRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.permissions.users.request'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsPermissionsUsersRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppsPermissionsUsersRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppsUninstallQueryKey(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
) {
  return ['apps.uninstall', '/apps.uninstall', args] as const
}

export function getAppsUninstallQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsUninstallQueryKey>
  >({
    queryKey: getAppsUninstallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['apps.uninstall'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAppsUninstall<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['apps.uninstall']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsUninstallQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppsUninstallQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuthRevokeQueryKey(
  args: InferRequestType<(typeof client)['auth.revoke']['$get']>,
) {
  return ['auth.revoke', '/auth.revoke', args] as const
}

export function getAuthRevokeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['auth.revoke']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthRevokeQueryKey>
  >({
    queryKey: getAuthRevokeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['auth.revoke'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthRevoke<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['auth.revoke']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthRevokeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthRevokeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAuthTestQueryKey(args: InferRequestType<(typeof client)['auth.test']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['auth.test', '/auth.test', keyArgs] as const
}

export function getAuthTestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['auth.test']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTestQueryKey>
  >({
    queryKey: getAuthTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['auth.test'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['auth.test']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthTestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBotsInfoQueryKey(args: InferRequestType<(typeof client)['bots.info']['$get']>) {
  return ['bots.info', '/bots.info', args] as const
}

export function getBotsInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['bots.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsInfoQueryKey>
  >({
    queryKey: getBotsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bots.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBotsInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bots.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCallsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['calls.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCallsEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.end']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['calls.end']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsEndMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCallsInfoQueryKey(
  args: InferRequestType<(typeof client)['calls.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calls.info', '/calls.info', keyArgs] as const
}

export function getCallsInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['calls.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCallsInfoQueryKey>
  >({
    queryKey: getCallsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['calls.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCallsInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['calls.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCallsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCallsParticipantsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsParticipantsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCallsParticipantsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsParticipantsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCallsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['calls.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['chat.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatDeleteScheduledMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatDeleteScheduledMessageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChatGetPermalinkQueryKey(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
) {
  return ['chat.getPermalink', '/chat.getPermalink', args] as const
}

export function getChatGetPermalinkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChatGetPermalinkQueryKey>
  >({
    queryKey: getChatGetPermalinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['chat.getPermalink'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChatGetPermalink<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChatGetPermalinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatGetPermalinkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChatMeMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.meMessage']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['chat.meMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatMeMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatPostEphemeral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatPostEphemeralMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatPostMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.postMessage']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['chat.postMessage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatPostMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatScheduleMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatScheduleMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChatScheduledMessagesListQueryKey(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['chat.scheduledMessages.list', '/chat.scheduledMessages.list', keyArgs] as const
}

export function getChatScheduledMessagesListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChatScheduledMessagesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['chat.scheduledMessages.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChatScheduledMessagesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChatScheduledMessagesListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostChatUnfurl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.unfurl']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['chat.unfurl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatUnfurlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChatUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['chat.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsHistoryQueryKey(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
) {
  return ['conversations.history', '/conversations.history', args] as const
}

export function getConversationsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsHistoryQueryKey>
  >({
    queryKey: getConversationsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['conversations.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['conversations.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConversationsInfoQueryKey(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
) {
  return ['conversations.info', '/conversations.info', args] as const
}

export function getConversationsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsInfoQueryKey>
  >({
    queryKey: getConversationsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['conversations.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversationsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['conversations.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConversationsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostConversationsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsKickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsListQueryKey(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
) {
  return ['conversations.list', '/conversations.list', args] as const
}

export function getConversationsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsListQueryKey>
  >({
    queryKey: getConversationsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['conversations.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConversationsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['conversations.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConversationsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostConversationsMark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsMarkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsMembersQueryKey(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
) {
  return ['conversations.members', '/conversations.members', args] as const
}

export function getConversationsMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMembersQueryKey>
  >({
    queryKey: getConversationsMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['conversations.members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['conversations.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConversationsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConversationsRepliesQueryKey(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
) {
  return ['conversations.replies', '/conversations.replies', args] as const
}

export function getConversationsRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsRepliesQueryKey>
  >({
    queryKey: getConversationsRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['conversations.replies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConversationsReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['conversations.replies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversationsRepliesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConversationsRepliesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConversationsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsSetPurposeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsSetTopicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConversationsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConversationsUnarchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDialogOpenQueryKey(
  args: InferRequestType<(typeof client)['dialog.open']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dialog.open', '/dialog.open', keyArgs] as const
}

export function getDialogOpenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['dialog.open']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDialogOpenQueryKey>
  >({
    queryKey: getDialogOpenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dialog.open'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDialogOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dialog.open']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDialogOpenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDialogOpenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDndEndDnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endDnd']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['dnd.endDnd']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDndEndDndMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDndEndSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endSnooze']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['dnd.endSnooze']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDndEndSnoozeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDndInfoQueryKey(args: InferRequestType<(typeof client)['dnd.info']['$get']>) {
  return ['dnd.info', '/dnd.info', args] as const
}

export function getDndInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['dnd.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDndInfoQueryKey>
  >({
    queryKey: getDndInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dnd.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDndInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dnd.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDndInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDndInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDndSetSnooze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.setSnooze']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['dnd.setSnooze']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDndSetSnoozeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDndTeamInfoQueryKey(
  args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
) {
  return ['dnd.teamInfo', '/dnd.teamInfo', args] as const
}

export function getDndTeamInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDndTeamInfoQueryKey>
  >({
    queryKey: getDndTeamInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dnd.teamInfo'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDndTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDndTeamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDndTeamInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEmojiListQueryKey(
  args: InferRequestType<(typeof client)['emoji.list']['$get']>,
) {
  return ['emoji.list', '/emoji.list', args] as const
}

export function getEmojiListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['emoji.list']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmojiListQueryKey>
  >({
    queryKey: getEmojiListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['emoji.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmojiList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['emoji.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmojiListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmojiListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesCommentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesCommentsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFilesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['files.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesInfoQueryKey(
  args: InferRequestType<(typeof client)['files.info']['$get']>,
) {
  return ['files.info', '/files.info', args] as const
}

export function getFilesInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['files.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesInfoQueryKey>
  >({
    queryKey: getFilesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['files.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['files.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesListQueryKey(
  args: InferRequestType<(typeof client)['files.list']['$get']>,
) {
  return ['files.list', '/files.list', args] as const
}

export function getFilesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['files.list']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesListQueryKey>
  >({
    queryKey: getFilesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['files.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['files.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesRemoteAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['files.remote.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesRemoteAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesRemoteInfoQueryKey(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
) {
  return ['files.remote.info', '/files.remote.info', args] as const
}

export function getFilesRemoteInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteInfoQueryKey>
  >({
    queryKey: getFilesRemoteInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['files.remote.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesRemoteInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['files.remote.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesRemoteInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesRemoteInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesRemoteListQueryKey(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
) {
  return ['files.remote.list', '/files.remote.list', args] as const
}

export function getFilesRemoteListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteListQueryKey>
  >({
    queryKey: getFilesRemoteListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['files.remote.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesRemoteList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['files.remote.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesRemoteListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesRemoteListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesRemoteRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesRemoteRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesRemoteShareQueryKey(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
) {
  return ['files.remote.share', '/files.remote.share', args] as const
}

export function getFilesRemoteShareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesRemoteShareQueryKey>
  >({
    queryKey: getFilesRemoteShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['files.remote.share'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesRemoteShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['files.remote.share']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesRemoteShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesRemoteShareQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesRemoteUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesRemoteUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFilesRevokePublicURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesRevokePublicURLMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFilesSharedPublicURL<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesSharedPublicURLMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFilesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['files.upload']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['files.upload']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMigrationExchangeQueryKey(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
) {
  return ['migration.exchange', '/migration.exchange', args] as const
}

export function getMigrationExchangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMigrationExchangeQueryKey>
  >({
    queryKey: getMigrationExchangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['migration.exchange'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMigrationExchange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['migration.exchange']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMigrationExchangeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMigrationExchangeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOauthAccessQueryKey(
  args: InferRequestType<(typeof client)['oauth.access']['$get']>,
) {
  return ['oauth.access', '/oauth.access', args] as const
}

export function getOauthAccessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['oauth.access']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAccessQueryKey>
  >({
    queryKey: getOauthAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['oauth.access'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauthAccess<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['oauth.access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthAccessQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOauthTokenQueryKey(
  args: InferRequestType<(typeof client)['oauth.token']['$get']>,
) {
  return ['oauth.token', '/oauth.token', args] as const
}

export function getOauthTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['oauth.token']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthTokenQueryKey>
  >({
    queryKey: getOauthTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['oauth.token'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauthToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['oauth.token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOauthV2AccessQueryKey(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
) {
  return ['oauth.v2.access', '/oauth.v2.access', args] as const
}

export function getOauthV2AccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthV2AccessQueryKey>
  >({
    queryKey: getOauthV2AccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['oauth.v2.access'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOauthV2Access<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOauthV2AccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthV2AccessQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPinsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPinsListQueryKey(args: InferRequestType<(typeof client)['pins.list']['$get']>) {
  return ['pins.list', '/pins.list', args] as const
}

export function getPinsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['pins.list']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsListQueryKey>
  >({
    queryKey: getPinsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['pins.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPinsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['pins.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPinsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPinsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPinsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.remove']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostReactionsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reactions.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReactionsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReactionsGetQueryKey(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
) {
  return ['reactions.get', '/reactions.get', args] as const
}

export function getReactionsGetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReactionsGetQueryKey>
  >({
    queryKey: getReactionsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reactions.get'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReactionsGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reactions.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReactionsGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReactionsGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReactionsListQueryKey(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
) {
  return ['reactions.list', '/reactions.list', args] as const
}

export function getReactionsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReactionsListQueryKey>
  >({
    queryKey: getReactionsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reactions.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReactionsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reactions.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReactionsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReactionsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostReactionsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.remove']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reactions.remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReactionsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRemindersAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reminders.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemindersAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRemindersComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemindersCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRemindersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reminders.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemindersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRemindersInfoQueryKey(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
) {
  return ['reminders.info', '/reminders.info', args] as const
}

export function getRemindersInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemindersInfoQueryKey>
  >({
    queryKey: getRemindersInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reminders.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemindersInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reminders.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemindersInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemindersInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRemindersListQueryKey(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
) {
  return ['reminders.list', '/reminders.list', args] as const
}

export function getRemindersListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemindersListQueryKey>
  >({
    queryKey: getRemindersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reminders.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemindersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reminders.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemindersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemindersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRtmConnectQueryKey(
  args: InferRequestType<(typeof client)['rtm.connect']['$get']>,
) {
  return ['rtm.connect', '/rtm.connect', args] as const
}

export function getRtmConnectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['rtm.connect']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRtmConnectQueryKey>
  >({
    queryKey: getRtmConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['rtm.connect'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRtmConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['rtm.connect']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRtmConnectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRtmConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchMessagesQueryKey(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
) {
  return ['search.messages', '/search.messages', args] as const
}

export function getSearchMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMessagesQueryKey>
  >({
    queryKey: getSearchMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search.messages'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['search.messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStarsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.add']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.add']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStarsListQueryKey(
  args: InferRequestType<(typeof client)['stars.list']['$get']>,
) {
  return ['stars.list', '/stars.list', args] as const
}

export function getStarsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['stars.list']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStarsListQueryKey>
  >({
    queryKey: getStarsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stars.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStarsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['stars.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStarsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStarsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStarsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.remove']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamAccessLogsQueryKey(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
) {
  return ['team.accessLogs', '/team.accessLogs', args] as const
}

export function getTeamAccessLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamAccessLogsQueryKey>
  >({
    queryKey: getTeamAccessLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team.accessLogs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamAccessLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team.accessLogs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamAccessLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamAccessLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamBillableInfoQueryKey(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
) {
  return ['team.billableInfo', '/team.billableInfo', args] as const
}

export function getTeamBillableInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamBillableInfoQueryKey>
  >({
    queryKey: getTeamBillableInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team.billableInfo'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamBillableInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team.billableInfo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamBillableInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamBillableInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamInfoQueryKey(args: InferRequestType<(typeof client)['team.info']['$get']>) {
  return ['team.info', '/team.info', args] as const
}

export function getTeamInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['team.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamInfoQueryKey>
  >({
    queryKey: getTeamInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamIntegrationLogsQueryKey(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
) {
  return ['team.integrationLogs', '/team.integrationLogs', args] as const
}

export function getTeamIntegrationLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamIntegrationLogsQueryKey>
  >({
    queryKey: getTeamIntegrationLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team.integrationLogs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamIntegrationLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamIntegrationLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamIntegrationLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamProfileGetQueryKey(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
) {
  return ['team.profile.get', '/team.profile.get', args] as const
}

export function getTeamProfileGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamProfileGetQueryKey>
  >({
    queryKey: getTeamProfileGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team.profile.get'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamProfileGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team.profile.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamProfileGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamProfileGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsergroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['usergroups.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsergroupsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsergroupsDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsergroupsDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsergroupsEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.enable']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['usergroups.enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsergroupsEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsergroupsListQueryKey(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
) {
  return ['usergroups.list', '/usergroups.list', args] as const
}

export function getUsergroupsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsergroupsListQueryKey>
  >({
    queryKey: getUsergroupsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['usergroups.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsergroupsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['usergroups.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsergroupsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsergroupsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsergroupsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['usergroups.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsergroupsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsergroupsUsersListQueryKey(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
) {
  return ['usergroups.users.list', '/usergroups.users.list', args] as const
}

export function getUsergroupsUsersListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsergroupsUsersListQueryKey>
  >({
    queryKey: getUsergroupsUsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['usergroups.users.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsergroupsUsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsergroupsUsersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsergroupsUsersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsergroupsUsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsergroupsUsersUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersConversationsQueryKey(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
) {
  return ['users.conversations', '/users.conversations', args] as const
}

export function getUsersConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersConversationsQueryKey>
  >({
    queryKey: getUsersConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.conversations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.conversations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersConversationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersDeletePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.deletePhoto']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.deletePhoto']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersDeletePhotoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersGetPresenceQueryKey(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
) {
  return ['users.getPresence', '/users.getPresence', args] as const
}

export function getUsersGetPresenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersGetPresenceQueryKey>
  >({
    queryKey: getUsersGetPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.getPresence'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersGetPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.getPresence']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersGetPresenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersGetPresenceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersIdentityQueryKey(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
) {
  return ['users.identity', '/users.identity', args] as const
}

export function getUsersIdentityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdentityQueryKey>
  >({
    queryKey: getUsersIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.identity'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIdentity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.identity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdentityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdentityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersInfoQueryKey(
  args: InferRequestType<(typeof client)['users.info']['$get']>,
) {
  return ['users.info', '/users.info', args] as const
}

export function getUsersInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['users.info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersInfoQueryKey>
  >({
    queryKey: getUsersInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersListQueryKey(
  args: InferRequestType<(typeof client)['users.list']['$get']>,
) {
  return ['users.list', '/users.list', args] as const
}

export function getUsersListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['users.list']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersListQueryKey>
  >({
    queryKey: getUsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersLookupByEmailQueryKey(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
) {
  return ['users.lookupByEmail', '/users.lookupByEmail', args] as const
}

export function getUsersLookupByEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersLookupByEmailQueryKey>
  >({
    queryKey: getUsersLookupByEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.lookupByEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersLookupByEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersLookupByEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersLookupByEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersProfileGetQueryKey(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
) {
  return ['users.profile.get', '/users.profile.get', args] as const
}

export function getUsersProfileGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersProfileGetQueryKey>
  >({
    queryKey: getUsersProfileGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['users.profile.get'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersProfileGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['users.profile.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersProfileGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersProfileGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersProfileSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.set']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.profile.set']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersProfileSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersSetActive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setActive']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.setActive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersSetActiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersSetPhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPhoto']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.setPhoto']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersSetPhotoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersSetPresence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPresence']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.setPresence']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersSetPresenceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getViewsOpenQueryKey(
  args: InferRequestType<(typeof client)['views.open']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.open', '/views.open', keyArgs] as const
}

export function getViewsOpenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['views.open']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsOpenQueryKey>
  >({
    queryKey: getViewsOpenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['views.open'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createViewsOpen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['views.open']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsOpenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getViewsOpenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getViewsPublishQueryKey(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.publish', '/views.publish', keyArgs] as const
}

export function getViewsPublishQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewsPublishQueryKey>
  >({
    queryKey: getViewsPublishQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['views.publish'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createViewsPublish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['views.publish']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsPublishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getViewsPublishQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getViewsPushQueryKey(
  args: InferRequestType<(typeof client)['views.push']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.push', '/views.push', keyArgs] as const
}

export function getViewsPushQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['views.push']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsPushQueryKey>
  >({
    queryKey: getViewsPushQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['views.push'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createViewsPush<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['views.push']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsPushQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getViewsPushQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getViewsUpdateQueryKey(
  args: InferRequestType<(typeof client)['views.update']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.update', '/views.update', keyArgs] as const
}

export function getViewsUpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['views.update']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getViewsUpdateQueryKey>
  >({
    queryKey: getViewsUpdateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['views.update'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createViewsUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['views.update']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsUpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getViewsUpdateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWorkflowsStepCompletedQueryKey(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.stepCompleted', '/workflows.stepCompleted', keyArgs] as const
}

export function getWorkflowsStepCompletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkflowsStepCompletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['workflows.stepCompleted'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsStepCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWorkflowsStepCompletedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkflowsStepFailedQueryKey(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.stepFailed', '/workflows.stepFailed', keyArgs] as const
}

export function getWorkflowsStepFailedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsStepFailedQueryKey>
  >({
    queryKey: getWorkflowsStepFailedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['workflows.stepFailed'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsStepFailed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsStepFailedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsStepFailedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWorkflowsUpdateStepQueryKey(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.updateStep', '/workflows.updateStep', keyArgs] as const
}

export function getWorkflowsUpdateStepQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsUpdateStepQueryKey>
  >({
    queryKey: getWorkflowsUpdateStepQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['workflows.updateStep'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkflowsUpdateStep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsUpdateStepQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsUpdateStepQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
