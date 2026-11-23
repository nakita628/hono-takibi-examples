import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAdminAppsApproveKey() {
  return ['admin.apps.approve', '/admin.apps.approve', 'POST'] as const
}

export function usePostAdminAppsApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.approve']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.apps.approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminAppsApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.apps.approve']['$post']> },
      ) => parseResponse(client['admin.apps.approve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminAppsApprovedListKey(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
) {
  return ['admin.apps.approved.list', '/admin.apps.approved.list', args] as const
}

export function useGetAdminAppsApprovedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
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
        ? getGetAdminAppsApprovedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.approved.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAppsApprovedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
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
        ? getGetAdminAppsApprovedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.approved.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.approved.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminAppsRequestsListKey(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
) {
  return ['admin.apps.requests.list', '/admin.apps.requests.list', args] as const
}

export function useGetAdminAppsRequestsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
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
        ? getGetAdminAppsRequestsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.requests.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAppsRequestsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
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
        ? getGetAdminAppsRequestsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.requests.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.requests.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminAppsRestrictKey() {
  return ['admin.apps.restrict', '/admin.apps.restrict', 'POST'] as const
}

export function usePostAdminAppsRestrict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.apps.restrict']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.apps.restrict']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminAppsRestrictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.apps.restrict']['$post']> },
      ) => parseResponse(client['admin.apps.restrict'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminAppsRestrictedListKey(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
) {
  return ['admin.apps.restricted.list', '/admin.apps.restricted.list', args] as const
}

export function useGetAdminAppsRestrictedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
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
        ? getGetAdminAppsRestrictedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.restricted.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminAppsRestrictedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
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
        ? getGetAdminAppsRestrictedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.apps.restricted.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.apps.restricted.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminConversationsArchiveKey() {
  return ['admin.conversations.archive', '/admin.conversations.archive', 'POST'] as const
}

export function usePostAdminConversationsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.conversations.archive']['$post']> },
      ) => parseResponse(client['admin.conversations.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsConvertToPrivateKey() {
  return [
    'admin.conversations.convertToPrivate',
    '/admin.conversations.convertToPrivate',
    'POST',
  ] as const
}

export function usePostAdminConversationsConvertToPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.convertToPrivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsConvertToPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>
        },
      ) => parseResponse(client['admin.conversations.convertToPrivate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsCreateKey() {
  return ['admin.conversations.create', '/admin.conversations.create', 'POST'] as const
}

export function usePostAdminConversationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.conversations.create']['$post']> },
      ) => parseResponse(client['admin.conversations.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsDeleteKey() {
  return ['admin.conversations.delete', '/admin.conversations.delete', 'POST'] as const
}

export function usePostAdminConversationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.conversations.delete']['$post']> },
      ) => parseResponse(client['admin.conversations.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsDisconnectSharedKey() {
  return [
    'admin.conversations.disconnectShared',
    '/admin.conversations.disconnectShared',
    'POST',
  ] as const
}

export function usePostAdminConversationsDisconnectShared<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.disconnectShared']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsDisconnectSharedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>
        },
      ) => parseResponse(client['admin.conversations.disconnectShared'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminConversationsEkmListOriginalConnectedChannelInfoKey(
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

export function useGetAdminConversationsEkmListOriginalConnectedChannelInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAdminConversationsEkmListOriginalConnectedChannelInfoKey(args)
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
                (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
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
          client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConversationsEkmListOriginalConnectedChannelInfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAdminConversationsEkmListOriginalConnectedChannelInfoKey(args)
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
                (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
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
          client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminConversationsGetConversationPrefsKey(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'admin.conversations.getConversationPrefs',
    '/admin.conversations.getConversationPrefs',
    keyArgs,
  ] as const
}

export function useGetAdminConversationsGetConversationPrefs<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
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
        ? getGetAdminConversationsGetConversationPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.conversations.getConversationPrefs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConversationsGetConversationPrefs<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
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
        ? getGetAdminConversationsGetConversationPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.conversations.getConversationPrefs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminConversationsGetTeamsKey(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.conversations.getTeams', '/admin.conversations.getTeams', keyArgs] as const
}

export function useGetAdminConversationsGetTeams<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
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
        ? getGetAdminConversationsGetTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.conversations.getTeams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConversationsGetTeams<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
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
        ? getGetAdminConversationsGetTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.getTeams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.conversations.getTeams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminConversationsInviteKey() {
  return ['admin.conversations.invite', '/admin.conversations.invite', 'POST'] as const
}

export function usePostAdminConversationsInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.conversations.invite']['$post']> },
      ) => parseResponse(client['admin.conversations.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsRenameKey() {
  return ['admin.conversations.rename', '/admin.conversations.rename', 'POST'] as const
}

export function usePostAdminConversationsRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.rename']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.conversations.rename']['$post']> },
      ) => parseResponse(client['admin.conversations.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsRestrictAccessAddGroupKey() {
  return [
    'admin.conversations.restrictAccess.addGroup',
    '/admin.conversations.restrictAccess.addGroup',
    'POST',
  ] as const
}

export function usePostAdminConversationsRestrictAccessAddGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.addGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsRestrictAccessAddGroupKey()
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
            (typeof client)['admin.conversations.restrictAccess.addGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['admin.conversations.restrictAccess.addGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminConversationsRestrictAccessListGroupsKey(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
) {
  return [
    'admin.conversations.restrictAccess.listGroups',
    '/admin.conversations.restrictAccess.listGroups',
    args,
  ] as const
}

export function useGetAdminConversationsRestrictAccessListGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
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
        ? getGetAdminConversationsRestrictAccessListGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['admin.conversations.restrictAccess.listGroups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConversationsRestrictAccessListGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
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
        ? getGetAdminConversationsRestrictAccessListGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['admin.conversations.restrictAccess.listGroups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminConversationsRestrictAccessRemoveGroupKey() {
  return [
    'admin.conversations.restrictAccess.removeGroup',
    '/admin.conversations.restrictAccess.removeGroup',
    'POST',
  ] as const
}

export function usePostAdminConversationsRestrictAccessRemoveGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsRestrictAccessRemoveGroupKey()
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
            (typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['admin.conversations.restrictAccess.removeGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminConversationsSearchKey(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.conversations.search', '/admin.conversations.search', keyArgs] as const
}

export function useGetAdminConversationsSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
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
        ? getGetAdminConversationsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.conversations.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConversationsSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
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
        ? getGetAdminConversationsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.conversations.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.conversations.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminConversationsSetConversationPrefsKey() {
  return [
    'admin.conversations.setConversationPrefs',
    '/admin.conversations.setConversationPrefs',
    'POST',
  ] as const
}

export function usePostAdminConversationsSetConversationPrefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsSetConversationPrefsKey()
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
            (typeof client)['admin.conversations.setConversationPrefs']['$post']
          >
        },
      ) =>
        parseResponse(client['admin.conversations.setConversationPrefs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsSetTeamsKey() {
  return ['admin.conversations.setTeams', '/admin.conversations.setTeams', 'POST'] as const
}

export function usePostAdminConversationsSetTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.setTeams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsSetTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']> },
      ) => parseResponse(client['admin.conversations.setTeams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminConversationsUnarchiveKey() {
  return ['admin.conversations.unarchive', '/admin.conversations.unarchive', 'POST'] as const
}

export function usePostAdminConversationsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.conversations.unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminConversationsUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']> },
      ) => parseResponse(client['admin.conversations.unarchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEmojiAddKey() {
  return ['admin.emoji.add', '/admin.emoji.add', 'POST'] as const
}

export function usePostAdminEmojiAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.add']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.emoji.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.emoji.add']['$post']> },
      ) => parseResponse(client['admin.emoji.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEmojiAddAliasKey() {
  return ['admin.emoji.addAlias', '/admin.emoji.addAlias', 'POST'] as const
}

export function usePostAdminEmojiAddAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.addAlias']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiAddAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']> },
      ) => parseResponse(client['admin.emoji.addAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminEmojiListKey(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
) {
  return ['admin.emoji.list', '/admin.emoji.list', args] as const
}

export function useGetAdminEmojiList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminEmojiListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.emoji.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminEmojiList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminEmojiListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.emoji.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminEmojiRemoveKey() {
  return ['admin.emoji.remove', '/admin.emoji.remove', 'POST'] as const
}

export function usePostAdminEmojiRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.emoji.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.emoji.remove']['$post']> },
      ) => parseResponse(client['admin.emoji.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEmojiRenameKey() {
  return ['admin.emoji.rename', '/admin.emoji.rename', 'POST'] as const
}

export function usePostAdminEmojiRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.emoji.rename']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.emoji.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEmojiRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.emoji.rename']['$post']> },
      ) => parseResponse(client['admin.emoji.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInviteRequestsApproveKey() {
  return ['admin.inviteRequests.approve', '/admin.inviteRequests.approve', 'POST'] as const
}

export function usePostAdminInviteRequestsApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInviteRequestsApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']> },
      ) => parseResponse(client['admin.inviteRequests.approve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInviteRequestsApprovedListKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'admin.inviteRequests.approved.list',
    '/admin.inviteRequests.approved.list',
    keyArgs,
  ] as const
}

export function useGetAdminInviteRequestsApprovedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
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
        ? getGetAdminInviteRequestsApprovedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.inviteRequests.approved.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInviteRequestsApprovedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
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
        ? getGetAdminInviteRequestsApprovedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.approved.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.inviteRequests.approved.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminInviteRequestsDeniedListKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.inviteRequests.denied.list', '/admin.inviteRequests.denied.list', keyArgs] as const
}

export function useGetAdminInviteRequestsDeniedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
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
        ? getGetAdminInviteRequestsDeniedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.inviteRequests.denied.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInviteRequestsDeniedList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
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
        ? getGetAdminInviteRequestsDeniedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.denied.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['admin.inviteRequests.denied.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminInviteRequestsDenyKey() {
  return ['admin.inviteRequests.deny', '/admin.inviteRequests.deny', 'POST'] as const
}

export function usePostAdminInviteRequestsDeny<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.inviteRequests.deny']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInviteRequestsDenyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']> },
      ) => parseResponse(client['admin.inviteRequests.deny'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInviteRequestsListKey(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.inviteRequests.list', '/admin.inviteRequests.list', keyArgs] as const
}

export function useGetAdminInviteRequestsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
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
        ? getGetAdminInviteRequestsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.inviteRequests.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInviteRequestsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
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
        ? getGetAdminInviteRequestsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.inviteRequests.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.inviteRequests.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminTeamsAdminsListKey(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
) {
  return ['admin.teams.admins.list', '/admin.teams.admins.list', args] as const
}

export function useGetAdminTeamsAdminsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
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
        ? getGetAdminTeamsAdminsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.admins.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTeamsAdminsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
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
        ? getGetAdminTeamsAdminsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.admins.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.admins.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTeamsCreateKey() {
  return ['admin.teams.create', '/admin.teams.create', 'POST'] as const
}

export function usePostAdminTeamsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.teams.create']['$post']> },
      ) => parseResponse(client['admin.teams.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTeamsListKey(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.teams.list', '/admin.teams.list', keyArgs] as const
}

export function useGetAdminTeamsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminTeamsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTeamsList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminTeamsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.teams.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminTeamsOwnersListKey(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
) {
  return ['admin.teams.owners.list', '/admin.teams.owners.list', args] as const
}

export function useGetAdminTeamsOwnersList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
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
        ? getGetAdminTeamsOwnersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.owners.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTeamsOwnersList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
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
        ? getGetAdminTeamsOwnersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.owners.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.owners.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminTeamsSettingsInfoKey(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.teams.settings.info', '/admin.teams.settings.info', keyArgs] as const
}

export function useGetAdminTeamsSettingsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
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
        ? getGetAdminTeamsSettingsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.settings.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTeamsSettingsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
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
        ? getGetAdminTeamsSettingsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.teams.settings.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.teams.settings.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTeamsSettingsSetDefaultChannelsKey() {
  return [
    'admin.teams.settings.setDefaultChannels',
    '/admin.teams.settings.setDefaultChannels',
    'POST',
  ] as const
}

export function usePostAdminTeamsSettingsSetDefaultChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsSettingsSetDefaultChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>
        },
      ) =>
        parseResponse(client['admin.teams.settings.setDefaultChannels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTeamsSettingsSetDescriptionKey() {
  return [
    'admin.teams.settings.setDescription',
    '/admin.teams.settings.setDescription',
    'POST',
  ] as const
}

export function usePostAdminTeamsSettingsSetDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDescription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsSettingsSetDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>
        },
      ) => parseResponse(client['admin.teams.settings.setDescription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTeamsSettingsSetDiscoverabilityKey() {
  return [
    'admin.teams.settings.setDiscoverability',
    '/admin.teams.settings.setDiscoverability',
    'POST',
  ] as const
}

export function usePostAdminTeamsSettingsSetDiscoverability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsSettingsSetDiscoverabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>
        },
      ) =>
        parseResponse(client['admin.teams.settings.setDiscoverability'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTeamsSettingsSetIconKey() {
  return ['admin.teams.settings.setIcon', '/admin.teams.settings.setIcon', 'POST'] as const
}

export function usePostAdminTeamsSettingsSetIcon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setIcon']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsSettingsSetIconKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']> },
      ) => parseResponse(client['admin.teams.settings.setIcon'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTeamsSettingsSetNameKey() {
  return ['admin.teams.settings.setName', '/admin.teams.settings.setName', 'POST'] as const
}

export function usePostAdminTeamsSettingsSetName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.teams.settings.setName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTeamsSettingsSetNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']> },
      ) => parseResponse(client['admin.teams.settings.setName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsergroupsAddChannelsKey() {
  return ['admin.usergroups.addChannels', '/admin.usergroups.addChannels', 'POST'] as const
}

export function usePostAdminUsergroupsAddChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.addChannels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsergroupsAddChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']> },
      ) => parseResponse(client['admin.usergroups.addChannels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsergroupsAddTeamsKey() {
  return ['admin.usergroups.addTeams', '/admin.usergroups.addTeams', 'POST'] as const
}

export function usePostAdminUsergroupsAddTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.addTeams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsergroupsAddTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']> },
      ) => parseResponse(client['admin.usergroups.addTeams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsergroupsListChannelsKey(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.usergroups.listChannels', '/admin.usergroups.listChannels', keyArgs] as const
}

export function useGetAdminUsergroupsListChannels<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
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
        ? getGetAdminUsergroupsListChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.usergroups.listChannels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsergroupsListChannels<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
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
        ? getGetAdminUsergroupsListChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['admin.usergroups.listChannels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.usergroups.listChannels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsergroupsRemoveChannelsKey() {
  return ['admin.usergroups.removeChannels', '/admin.usergroups.removeChannels', 'POST'] as const
}

export function usePostAdminUsergroupsRemoveChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.usergroups.removeChannels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsergroupsRemoveChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']> },
      ) => parseResponse(client['admin.usergroups.removeChannels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersAssignKey() {
  return ['admin.users.assign', '/admin.users.assign', 'POST'] as const
}

export function usePostAdminUsersAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.assign']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.assign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.assign']['$post']> },
      ) => parseResponse(client['admin.users.assign'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersInviteKey() {
  return ['admin.users.invite', '/admin.users.invite', 'POST'] as const
}

export function usePostAdminUsersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.invite']['$post']> },
      ) => parseResponse(client['admin.users.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersListKey(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['admin.users.list', '/admin.users.list', keyArgs] as const
}

export function useGetAdminUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['admin.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersRemoveKey() {
  return ['admin.users.remove', '/admin.users.remove', 'POST'] as const
}

export function usePostAdminUsersRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.remove']['$post']> },
      ) => parseResponse(client['admin.users.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSessionInvalidateKey() {
  return ['admin.users.session.invalidate', '/admin.users.session.invalidate', 'POST'] as const
}

export function usePostAdminUsersSessionInvalidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.session.invalidate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSessionInvalidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']> },
      ) => parseResponse(client['admin.users.session.invalidate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSessionResetKey() {
  return ['admin.users.session.reset', '/admin.users.session.reset', 'POST'] as const
}

export function usePostAdminUsersSessionReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.session.reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.session.reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSessionResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.session.reset']['$post']> },
      ) => parseResponse(client['admin.users.session.reset'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSetAdminKey() {
  return ['admin.users.setAdmin', '/admin.users.setAdmin', 'POST'] as const
}

export function usePostAdminUsersSetAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.setAdmin']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.setAdmin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSetAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.setAdmin']['$post']> },
      ) => parseResponse(client['admin.users.setAdmin'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSetExpirationKey() {
  return ['admin.users.setExpiration', '/admin.users.setExpiration', 'POST'] as const
}

export function usePostAdminUsersSetExpiration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.setExpiration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.setExpiration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSetExpirationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.setExpiration']['$post']> },
      ) => parseResponse(client['admin.users.setExpiration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSetOwnerKey() {
  return ['admin.users.setOwner', '/admin.users.setOwner', 'POST'] as const
}

export function usePostAdminUsersSetOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['admin.users.setOwner']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.setOwner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSetOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.setOwner']['$post']> },
      ) => parseResponse(client['admin.users.setOwner'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersSetRegularKey() {
  return ['admin.users.setRegular', '/admin.users.setRegular', 'POST'] as const
}

export function usePostAdminUsersSetRegular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['admin.users.setRegular']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['admin.users.setRegular']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersSetRegularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['admin.users.setRegular']['$post']> },
      ) => parseResponse(client['admin.users.setRegular'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTestKey(args: InferRequestType<(typeof client)['api.test']['$get']>) {
  return ['api.test', '/api.test', args] as const
}

export function useGetApiTest<TError = unknown>(
  args: InferRequestType<(typeof client)['api.test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api.test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTest<TError = unknown>(
  args: InferRequestType<(typeof client)['api.test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api.test']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api.test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsEventAuthorizationsListKey(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['apps.event.authorizations.list', '/apps.event.authorizations.list', keyArgs] as const
}

export function useGetAppsEventAuthorizationsList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
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
        ? getGetAppsEventAuthorizationsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.event.authorizations.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsEventAuthorizationsList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
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
        ? getGetAppsEventAuthorizationsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.event.authorizations.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.event.authorizations.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsInfoKey(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
) {
  return ['apps.permissions.info', '/apps.permissions.info', args] as const
}

export function useGetAppsPermissionsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
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
        ? getGetAppsPermissionsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
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
        ? getGetAppsPermissionsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsRequestKey(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
) {
  return ['apps.permissions.request', '/apps.permissions.request', args] as const
}

export function useGetAppsPermissionsRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
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
        ? getGetAppsPermissionsRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.request'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
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
        ? getGetAppsPermissionsRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.request']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.request'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsResourcesListKey(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
) {
  return ['apps.permissions.resources.list', '/apps.permissions.resources.list', args] as const
}

export function useGetAppsPermissionsResourcesList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
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
        ? getGetAppsPermissionsResourcesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['apps.permissions.resources.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsResourcesList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
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
        ? getGetAppsPermissionsResourcesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.resources.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['apps.permissions.resources.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsScopesListKey(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
) {
  return ['apps.permissions.scopes.list', '/apps.permissions.scopes.list', args] as const
}

export function useGetAppsPermissionsScopesList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
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
        ? getGetAppsPermissionsScopesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.scopes.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsScopesList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
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
        ? getGetAppsPermissionsScopesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.scopes.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.scopes.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsUsersListKey(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
) {
  return ['apps.permissions.users.list', '/apps.permissions.users.list', args] as const
}

export function useGetAppsPermissionsUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
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
        ? getGetAppsPermissionsUsersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
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
        ? getGetAppsPermissionsUsersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsPermissionsUsersRequestKey(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
) {
  return ['apps.permissions.users.request', '/apps.permissions.users.request', args] as const
}

export function useGetAppsPermissionsUsersRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
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
        ? getGetAppsPermissionsUsersRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.users.request'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsPermissionsUsersRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
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
        ? getGetAppsPermissionsUsersRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['apps.permissions.users.request']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.permissions.users.request'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppsUninstallKey(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
) {
  return ['apps.uninstall', '/apps.uninstall', args] as const
}

export function useGetAppsUninstall<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsUninstallKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.uninstall'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsUninstall<TError = unknown>(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsUninstallKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['apps.uninstall']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['apps.uninstall'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthRevokeKey(
  args: InferRequestType<(typeof client)['auth.revoke']['$get']>,
) {
  return ['auth.revoke', '/auth.revoke', args] as const
}

export function useGetAuthRevoke<TError = unknown>(
  args: InferRequestType<(typeof client)['auth.revoke']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAuthRevokeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['auth.revoke'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthRevoke<TError = unknown>(
  args: InferRequestType<(typeof client)['auth.revoke']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAuthRevokeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.revoke']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['auth.revoke'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthTestKey(args: InferRequestType<(typeof client)['auth.test']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['auth.test', '/auth.test', keyArgs] as const
}

export function useGetAuthTest<TError = unknown>(
  args: InferRequestType<(typeof client)['auth.test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthTestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['auth.test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthTest<TError = unknown>(
  args: InferRequestType<(typeof client)['auth.test']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthTestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.test']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['auth.test'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBotsInfoKey(args: InferRequestType<(typeof client)['bots.info']['$get']>) {
  return ['bots.info', '/bots.info', args] as const
}

export function useGetBotsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['bots.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bots.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['bots.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bots.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bots.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsAddKey() {
  return ['calls.add', '/calls.add', 'POST'] as const
}

export function usePostCallsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.add']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['calls.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['calls.add']['$post']> }) =>
        parseResponse(client['calls.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsEndKey() {
  return ['calls.end', '/calls.end', 'POST'] as const
}

export function usePostCallsEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.end']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['calls.end']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsEndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['calls.end']['$post']> }) =>
        parseResponse(client['calls.end'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCallsInfoKey(args: InferRequestType<(typeof client)['calls.info']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['calls.info', '/calls.info', keyArgs] as const
}

export function useGetCallsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['calls.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calls.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCallsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['calls.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCallsInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['calls.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCallsParticipantsAddKey() {
  return ['calls.participants.add', '/calls.participants.add', 'POST'] as const
}

export function usePostCallsParticipantsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calls.participants.add']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['calls.participants.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsParticipantsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['calls.participants.add']['$post']> },
      ) => parseResponse(client['calls.participants.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsParticipantsRemoveKey() {
  return ['calls.participants.remove', '/calls.participants.remove', 'POST'] as const
}

export function usePostCallsParticipantsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['calls.participants.remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['calls.participants.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsParticipantsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['calls.participants.remove']['$post']> },
      ) => parseResponse(client['calls.participants.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCallsUpdateKey() {
  return ['calls.update', '/calls.update', 'POST'] as const
}

export function usePostCallsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['calls.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['calls.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCallsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['calls.update']['$post']> },
      ) => parseResponse(client['calls.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatDeleteKey() {
  return ['chat.delete', '/chat.delete', 'POST'] as const
}

export function usePostChatDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.delete']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['chat.delete']['$post']> }) =>
        parseResponse(client['chat.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatDeleteScheduledMessageKey() {
  return ['chat.deleteScheduledMessage', '/chat.deleteScheduledMessage', 'POST'] as const
}

export function usePostChatDeleteScheduledMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['chat.deleteScheduledMessage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatDeleteScheduledMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']> },
      ) => parseResponse(client['chat.deleteScheduledMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatGetPermalinkKey(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
) {
  return ['chat.getPermalink', '/chat.getPermalink', args] as const
}

export function useGetChatGetPermalink<TError = unknown>(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
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
        ? getGetChatGetPermalinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['chat.getPermalink'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatGetPermalink<TError = unknown>(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
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
        ? getGetChatGetPermalinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.getPermalink']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['chat.getPermalink'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatMeMessageKey() {
  return ['chat.meMessage', '/chat.meMessage', 'POST'] as const
}

export function usePostChatMeMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.meMessage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.meMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatMeMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['chat.meMessage']['$post']> },
      ) => parseResponse(client['chat.meMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatPostEphemeralKey() {
  return ['chat.postEphemeral', '/chat.postEphemeral', 'POST'] as const
}

export function usePostChatPostEphemeral<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.postEphemeral']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.postEphemeral']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatPostEphemeralKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['chat.postEphemeral']['$post']> },
      ) => parseResponse(client['chat.postEphemeral'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatPostMessageKey() {
  return ['chat.postMessage', '/chat.postMessage', 'POST'] as const
}

export function usePostChatPostMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.postMessage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.postMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatPostMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['chat.postMessage']['$post']> },
      ) => parseResponse(client['chat.postMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatScheduleMessageKey() {
  return ['chat.scheduleMessage', '/chat.scheduleMessage', 'POST'] as const
}

export function usePostChatScheduleMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.scheduleMessage']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.scheduleMessage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatScheduleMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['chat.scheduleMessage']['$post']> },
      ) => parseResponse(client['chat.scheduleMessage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatScheduledMessagesListKey(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['chat.scheduledMessages.list', '/chat.scheduledMessages.list', keyArgs] as const
}

export function useGetChatScheduledMessagesList<TError = unknown>(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
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
        ? getGetChatScheduledMessagesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['chat.scheduledMessages.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatScheduledMessagesList<TError = unknown>(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
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
        ? getGetChatScheduledMessagesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['chat.scheduledMessages.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['chat.scheduledMessages.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatUnfurlKey() {
  return ['chat.unfurl', '/chat.unfurl', 'POST'] as const
}

export function usePostChatUnfurl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.unfurl']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.unfurl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUnfurlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['chat.unfurl']['$post']> }) =>
        parseResponse(client['chat.unfurl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatUpdateKey() {
  return ['chat.update', '/chat.update', 'POST'] as const
}

export function usePostChatUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['chat.update']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['chat.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['chat.update']['$post']> }) =>
        parseResponse(client['chat.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsArchiveKey() {
  return ['conversations.archive', '/conversations.archive', 'POST'] as const
}

export function usePostConversationsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.archive']['$post']> },
      ) => parseResponse(client['conversations.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsCloseKey() {
  return ['conversations.close', '/conversations.close', 'POST'] as const
}

export function usePostConversationsClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.close']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.close']['$post']> },
      ) => parseResponse(client['conversations.close'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsCreateKey() {
  return ['conversations.create', '/conversations.create', 'POST'] as const
}

export function usePostConversationsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.create']['$post']> },
      ) => parseResponse(client['conversations.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsHistoryKey(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
) {
  return ['conversations.history', '/conversations.history', args] as const
}

export function useGetConversationsHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
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
        ? getGetConversationsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
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
        ? getGetConversationsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsInfoKey(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
) {
  return ['conversations.info', '/conversations.info', args] as const
}

export function useGetConversationsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
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
        ? getGetConversationsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
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
        ? getGetConversationsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsInviteKey() {
  return ['conversations.invite', '/conversations.invite', 'POST'] as const
}

export function usePostConversationsInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.invite']['$post']> },
      ) => parseResponse(client['conversations.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsJoinKey() {
  return ['conversations.join', '/conversations.join', 'POST'] as const
}

export function usePostConversationsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.join']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.join']['$post']> },
      ) => parseResponse(client['conversations.join'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsKickKey() {
  return ['conversations.kick', '/conversations.kick', 'POST'] as const
}

export function usePostConversationsKick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.kick']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.kick']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsKickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.kick']['$post']> },
      ) => parseResponse(client['conversations.kick'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsLeaveKey() {
  return ['conversations.leave', '/conversations.leave', 'POST'] as const
}

export function usePostConversationsLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.leave']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.leave']['$post']> },
      ) => parseResponse(client['conversations.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsListKey(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
) {
  return ['conversations.list', '/conversations.list', args] as const
}

export function useGetConversationsList<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
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
        ? getGetConversationsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsList<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
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
        ? getGetConversationsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsMarkKey() {
  return ['conversations.mark', '/conversations.mark', 'POST'] as const
}

export function usePostConversationsMark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.mark']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.mark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsMarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.mark']['$post']> },
      ) => parseResponse(client['conversations.mark'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsMembersKey(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
) {
  return ['conversations.members', '/conversations.members', args] as const
}

export function useGetConversationsMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
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
        ? getGetConversationsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
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
        ? getGetConversationsMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsOpenKey() {
  return ['conversations.open', '/conversations.open', 'POST'] as const
}

export function usePostConversationsOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.open']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.open']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsOpenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.open']['$post']> },
      ) => parseResponse(client['conversations.open'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsRenameKey() {
  return ['conversations.rename', '/conversations.rename', 'POST'] as const
}

export function usePostConversationsRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['conversations.rename']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.rename']['$post']> },
      ) => parseResponse(client['conversations.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsRepliesKey(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
) {
  return ['conversations.replies', '/conversations.replies', args] as const
}

export function useGetConversationsReplies<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
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
        ? getGetConversationsRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.replies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsReplies<TError = unknown>(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
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
        ? getGetConversationsRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['conversations.replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['conversations.replies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsSetPurposeKey() {
  return ['conversations.setPurpose', '/conversations.setPurpose', 'POST'] as const
}

export function usePostConversationsSetPurpose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.setPurpose']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSetPurposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.setPurpose']['$post']> },
      ) => parseResponse(client['conversations.setPurpose'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsSetTopicKey() {
  return ['conversations.setTopic', '/conversations.setTopic', 'POST'] as const
}

export function usePostConversationsSetTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.setTopic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.setTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSetTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.setTopic']['$post']> },
      ) => parseResponse(client['conversations.setTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsUnarchiveKey() {
  return ['conversations.unarchive', '/conversations.unarchive', 'POST'] as const
}

export function usePostConversationsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['conversations.unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['conversations.unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['conversations.unarchive']['$post']> },
      ) => parseResponse(client['conversations.unarchive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDialogOpenKey(
  args: InferRequestType<(typeof client)['dialog.open']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dialog.open', '/dialog.open', keyArgs] as const
}

export function useGetDialogOpen<TError = unknown>(
  args: InferRequestType<(typeof client)['dialog.open']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDialogOpenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dialog.open'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDialogOpen<TError = unknown>(
  args: InferRequestType<(typeof client)['dialog.open']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDialogOpenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dialog.open']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dialog.open'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDndEndDndKey() {
  return ['dnd.endDnd', '/dnd.endDnd', 'POST'] as const
}

export function usePostDndEndDnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endDnd']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dnd.endDnd']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDndEndDndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['dnd.endDnd']['$post']> }) =>
        parseResponse(client['dnd.endDnd'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDndEndSnoozeKey() {
  return ['dnd.endSnooze', '/dnd.endSnooze', 'POST'] as const
}

export function usePostDndEndSnooze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.endSnooze']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dnd.endSnooze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDndEndSnoozeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dnd.endSnooze']['$post']> },
      ) => parseResponse(client['dnd.endSnooze'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDndInfoKey(args: InferRequestType<(typeof client)['dnd.info']['$get']>) {
  return ['dnd.info', '/dnd.info', args] as const
}

export function useGetDndInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['dnd.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDndInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dnd.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDndInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['dnd.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDndInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dnd.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDndSetSnoozeKey() {
  return ['dnd.setSnooze', '/dnd.setSnooze', 'POST'] as const
}

export function usePostDndSetSnooze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.setSnooze']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dnd.setSnooze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDndSetSnoozeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dnd.setSnooze']['$post']> },
      ) => parseResponse(client['dnd.setSnooze'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDndTeamInfoKey(
  args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
) {
  return ['dnd.teamInfo', '/dnd.teamInfo', args] as const
}

export function useGetDndTeamInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDndTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dnd.teamInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDndTeamInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDndTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dnd.teamInfo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dnd.teamInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmojiListKey(args: InferRequestType<(typeof client)['emoji.list']['$get']>) {
  return ['emoji.list', '/emoji.list', args] as const
}

export function useGetEmojiList<TError = unknown>(
  args: InferRequestType<(typeof client)['emoji.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmojiListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['emoji.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmojiList<TError = unknown>(
  args: InferRequestType<(typeof client)['emoji.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmojiListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['emoji.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['emoji.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesCommentsDeleteKey() {
  return ['files.comments.delete', '/files.comments.delete', 'POST'] as const
}

export function usePostFilesCommentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.comments.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.comments.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesCommentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.comments.delete']['$post']> },
      ) => parseResponse(client['files.comments.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesDeleteKey() {
  return ['files.delete', '/files.delete', 'POST'] as const
}

export function usePostFilesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.delete']['$post']> },
      ) => parseResponse(client['files.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesInfoKey(args: InferRequestType<(typeof client)['files.info']['$get']>) {
  return ['files.info', '/files.info', args] as const
}

export function useGetFilesInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['files.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['files.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesListKey(args: InferRequestType<(typeof client)['files.list']['$get']>) {
  return ['files.list', '/files.list', args] as const
}

export function useGetFilesList<TError = unknown>(
  args: InferRequestType<(typeof client)['files.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesList<TError = unknown>(
  args: InferRequestType<(typeof client)['files.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['files.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesRemoteAddKey() {
  return ['files.remote.add', '/files.remote.add', 'POST'] as const
}

export function usePostFilesRemoteAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.add']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.remote.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesRemoteAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.remote.add']['$post']> },
      ) => parseResponse(client['files.remote.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesRemoteInfoKey(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
) {
  return ['files.remote.info', '/files.remote.info', args] as const
}

export function useGetFilesRemoteInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
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
        ? getGetFilesRemoteInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesRemoteInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
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
        ? getGetFilesRemoteInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesRemoteListKey(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
) {
  return ['files.remote.list', '/files.remote.list', args] as const
}

export function useGetFilesRemoteList<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
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
        ? getGetFilesRemoteListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesRemoteList<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
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
        ? getGetFilesRemoteListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesRemoteRemoveKey() {
  return ['files.remote.remove', '/files.remote.remove', 'POST'] as const
}

export function usePostFilesRemoteRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.remote.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesRemoteRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.remote.remove']['$post']> },
      ) => parseResponse(client['files.remote.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesRemoteShareKey(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
) {
  return ['files.remote.share', '/files.remote.share', args] as const
}

export function useGetFilesRemoteShare<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
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
        ? getGetFilesRemoteShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.share'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesRemoteShare<TError = unknown>(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
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
        ? getGetFilesRemoteShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.share']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['files.remote.share'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesRemoteUpdateKey() {
  return ['files.remote.update', '/files.remote.update', 'POST'] as const
}

export function usePostFilesRemoteUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.remote.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.remote.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesRemoteUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.remote.update']['$post']> },
      ) => parseResponse(client['files.remote.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesRevokePublicURLKey() {
  return ['files.revokePublicURL', '/files.revokePublicURL', 'POST'] as const
}

export function usePostFilesRevokePublicURL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.revokePublicURL']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.revokePublicURL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesRevokePublicURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.revokePublicURL']['$post']> },
      ) => parseResponse(client['files.revokePublicURL'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesSharedPublicURLKey() {
  return ['files.sharedPublicURL', '/files.sharedPublicURL', 'POST'] as const
}

export function usePostFilesSharedPublicURL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.sharedPublicURL']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.sharedPublicURL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesSharedPublicURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.sharedPublicURL']['$post']> },
      ) => parseResponse(client['files.sharedPublicURL'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesUploadKey() {
  return ['files.upload', '/files.upload', 'POST'] as const
}

export function usePostFilesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['files.upload']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['files.upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['files.upload']['$post']> },
      ) => parseResponse(client['files.upload'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMigrationExchangeKey(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
) {
  return ['migration.exchange', '/migration.exchange', args] as const
}

export function useGetMigrationExchange<TError = unknown>(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
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
        ? getGetMigrationExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['migration.exchange'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMigrationExchange<TError = unknown>(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
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
        ? getGetMigrationExchangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['migration.exchange']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['migration.exchange'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthAccessKey(
  args: InferRequestType<(typeof client)['oauth.access']['$get']>,
) {
  return ['oauth.access', '/oauth.access', args] as const
}

export function useGetOauthAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthAccessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAccess<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthAccessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.access']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthTokenKey(
  args: InferRequestType<(typeof client)['oauth.token']['$get']>,
) {
  return ['oauth.token', '/oauth.token', args] as const
}

export function useGetOauthToken<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthToken<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauthV2AccessKey(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
) {
  return ['oauth.v2.access', '/oauth.v2.access', args] as const
}

export function useGetOauthV2Access<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthV2AccessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.v2.access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthV2Access<TError = unknown>(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOauthV2AccessKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['oauth.v2.access']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['oauth.v2.access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPinsAddKey() {
  return ['pins.add', '/pins.add', 'POST'] as const
}

export function usePostPinsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.add']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.add']['$post']> }) =>
        parseResponse(client['pins.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPinsListKey(args: InferRequestType<(typeof client)['pins.list']['$get']>) {
  return ['pins.list', '/pins.list', args] as const
}

export function useGetPinsList<TError = unknown>(
  args: InferRequestType<(typeof client)['pins.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['pins.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPinsList<TError = unknown>(
  args: InferRequestType<(typeof client)['pins.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPinsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['pins.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPinsRemoveKey() {
  return ['pins.remove', '/pins.remove', 'POST'] as const
}

export function usePostPinsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.remove']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.remove']['$post']> }) =>
        parseResponse(client['pins.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReactionsAddKey() {
  return ['reactions.add', '/reactions.add', 'POST'] as const
}

export function usePostReactionsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.add']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reactions.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReactionsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reactions.add']['$post']> },
      ) => parseResponse(client['reactions.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReactionsGetKey(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
) {
  return ['reactions.get', '/reactions.get', args] as const
}

export function useGetReactionsGet<TError = unknown>(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReactionsGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reactions.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReactionsGet<TError = unknown>(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReactionsGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reactions.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReactionsListKey(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
) {
  return ['reactions.list', '/reactions.list', args] as const
}

export function useGetReactionsList<TError = unknown>(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReactionsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reactions.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReactionsList<TError = unknown>(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReactionsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reactions.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReactionsRemoveKey() {
  return ['reactions.remove', '/reactions.remove', 'POST'] as const
}

export function usePostReactionsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reactions.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReactionsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reactions.remove']['$post']> },
      ) => parseResponse(client['reactions.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemindersAddKey() {
  return ['reminders.add', '/reminders.add', 'POST'] as const
}

export function usePostRemindersAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.add']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reminders.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemindersAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reminders.add']['$post']> },
      ) => parseResponse(client['reminders.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemindersCompleteKey() {
  return ['reminders.complete', '/reminders.complete', 'POST'] as const
}

export function usePostRemindersComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.complete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reminders.complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemindersCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reminders.complete']['$post']> },
      ) => parseResponse(client['reminders.complete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemindersDeleteKey() {
  return ['reminders.delete', '/reminders.delete', 'POST'] as const
}

export function usePostRemindersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reminders.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemindersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reminders.delete']['$post']> },
      ) => parseResponse(client['reminders.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRemindersInfoKey(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
) {
  return ['reminders.info', '/reminders.info', args] as const
}

export function useGetRemindersInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRemindersInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reminders.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemindersInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRemindersInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reminders.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRemindersListKey(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
) {
  return ['reminders.list', '/reminders.list', args] as const
}

export function useGetRemindersList<TError = unknown>(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRemindersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reminders.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemindersList<TError = unknown>(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRemindersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reminders.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['reminders.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRtmConnectKey(
  args: InferRequestType<(typeof client)['rtm.connect']['$get']>,
) {
  return ['rtm.connect', '/rtm.connect', args] as const
}

export function useGetRtmConnect<TError = unknown>(
  args: InferRequestType<(typeof client)['rtm.connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRtmConnectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rtm.connect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRtmConnect<TError = unknown>(
  args: InferRequestType<(typeof client)['rtm.connect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRtmConnectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['rtm.connect']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['rtm.connect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchMessagesKey(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
) {
  return ['search.messages', '/search.messages', args] as const
}

export function useGetSearchMessages<TError = unknown>(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMessages<TError = unknown>(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.messages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.messages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStarsAddKey() {
  return ['stars.add', '/stars.add', 'POST'] as const
}

export function usePostStarsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.add']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['stars.add']['$post']> }) =>
        parseResponse(client['stars.add'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStarsListKey(args: InferRequestType<(typeof client)['stars.list']['$get']>) {
  return ['stars.list', '/stars.list', args] as const
}

export function useGetStarsList<TError = unknown>(
  args: InferRequestType<(typeof client)['stars.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStarsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stars.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStarsList<TError = unknown>(
  args: InferRequestType<(typeof client)['stars.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStarsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stars.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStarsRemoveKey() {
  return ['stars.remove', '/stars.remove', 'POST'] as const
}

export function usePostStarsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['stars.remove']['$post']> },
      ) => parseResponse(client['stars.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamAccessLogsKey(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
) {
  return ['team.accessLogs', '/team.accessLogs', args] as const
}

export function useGetTeamAccessLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamAccessLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.accessLogs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamAccessLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamAccessLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.accessLogs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.accessLogs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamBillableInfoKey(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
) {
  return ['team.billableInfo', '/team.billableInfo', args] as const
}

export function useGetTeamBillableInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
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
        ? getGetTeamBillableInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.billableInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamBillableInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
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
        ? getGetTeamBillableInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.billableInfo']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.billableInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamInfoKey(args: InferRequestType<(typeof client)['team.info']['$get']>) {
  return ['team.info', '/team.info', args] as const
}

export function useGetTeamInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['team.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['team.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamIntegrationLogsKey(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
) {
  return ['team.integrationLogs', '/team.integrationLogs', args] as const
}

export function useGetTeamIntegrationLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
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
        ? getGetTeamIntegrationLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.integrationLogs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamIntegrationLogs<TError = unknown>(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
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
        ? getGetTeamIntegrationLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.integrationLogs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.integrationLogs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamProfileGetKey(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
) {
  return ['team.profile.get', '/team.profile.get', args] as const
}

export function useGetTeamProfileGet<TError = unknown>(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamProfileGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.profile.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamProfileGet<TError = unknown>(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTeamProfileGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team.profile.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team.profile.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsergroupsCreateKey() {
  return ['usergroups.create', '/usergroups.create', 'POST'] as const
}

export function usePostUsergroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['usergroups.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsergroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['usergroups.create']['$post']> },
      ) => parseResponse(client['usergroups.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsergroupsDisableKey() {
  return ['usergroups.disable', '/usergroups.disable', 'POST'] as const
}

export function usePostUsergroupsDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.disable']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['usergroups.disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsergroupsDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['usergroups.disable']['$post']> },
      ) => parseResponse(client['usergroups.disable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsergroupsEnableKey() {
  return ['usergroups.enable', '/usergroups.enable', 'POST'] as const
}

export function usePostUsergroupsEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.enable']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['usergroups.enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsergroupsEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['usergroups.enable']['$post']> },
      ) => parseResponse(client['usergroups.enable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsergroupsListKey(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
) {
  return ['usergroups.list', '/usergroups.list', args] as const
}

export function useGetUsergroupsList<TError = unknown>(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsergroupsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usergroups.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsergroupsList<TError = unknown>(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsergroupsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usergroups.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsergroupsUpdateKey() {
  return ['usergroups.update', '/usergroups.update', 'POST'] as const
}

export function usePostUsergroupsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['usergroups.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['usergroups.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsergroupsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['usergroups.update']['$post']> },
      ) => parseResponse(client['usergroups.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsergroupsUsersListKey(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
) {
  return ['usergroups.users.list', '/usergroups.users.list', args] as const
}

export function useGetUsergroupsUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
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
        ? getGetUsergroupsUsersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usergroups.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsergroupsUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
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
        ? getGetUsergroupsUsersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['usergroups.users.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['usergroups.users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsergroupsUsersUpdateKey() {
  return ['usergroups.users.update', '/usergroups.users.update', 'POST'] as const
}

export function usePostUsergroupsUsersUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['usergroups.users.update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['usergroups.users.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsergroupsUsersUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['usergroups.users.update']['$post']> },
      ) => parseResponse(client['usergroups.users.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersConversationsKey(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
) {
  return ['users.conversations', '/users.conversations', args] as const
}

export function useGetUsersConversations<TError = unknown>(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
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
        ? getGetUsersConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.conversations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersConversations<TError = unknown>(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
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
        ? getGetUsersConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.conversations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.conversations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersDeletePhotoKey() {
  return ['users.deletePhoto', '/users.deletePhoto', 'POST'] as const
}

export function usePostUsersDeletePhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.deletePhoto']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.deletePhoto']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersDeletePhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.deletePhoto']['$post']> },
      ) => parseResponse(client['users.deletePhoto'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersGetPresenceKey(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
) {
  return ['users.getPresence', '/users.getPresence', args] as const
}

export function useGetUsersGetPresence<TError = unknown>(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
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
        ? getGetUsersGetPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.getPresence'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersGetPresence<TError = unknown>(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
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
        ? getGetUsersGetPresenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.getPresence']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.getPresence'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdentityKey(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
) {
  return ['users.identity', '/users.identity', args] as const
}

export function useGetUsersIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdentityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.identity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdentity<TError = unknown>(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdentityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.identity']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.identity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersInfoKey(args: InferRequestType<(typeof client)['users.info']['$get']>) {
  return ['users.info', '/users.info', args] as const
}

export function useGetUsersInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['users.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['users.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersListKey(args: InferRequestType<(typeof client)['users.list']['$get']>) {
  return ['users.list', '/users.list', args] as const
}

export function useGetUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersList<TError = unknown>(
  args: InferRequestType<(typeof client)['users.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersLookupByEmailKey(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
) {
  return ['users.lookupByEmail', '/users.lookupByEmail', args] as const
}

export function useGetUsersLookupByEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
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
        ? getGetUsersLookupByEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.lookupByEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersLookupByEmail<TError = unknown>(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
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
        ? getGetUsersLookupByEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.lookupByEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.lookupByEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersProfileGetKey(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
) {
  return ['users.profile.get', '/users.profile.get', args] as const
}

export function useGetUsersProfileGet<TError = unknown>(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
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
        ? getGetUsersProfileGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.profile.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersProfileGet<TError = unknown>(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
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
        ? getGetUsersProfileGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['users.profile.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersProfileSetKey() {
  return ['users.profile.set', '/users.profile.set', 'POST'] as const
}

export function usePostUsersProfileSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.profile.set']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.profile.set']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersProfileSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.profile.set']['$post']> },
      ) => parseResponse(client['users.profile.set'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSetActiveKey() {
  return ['users.setActive', '/users.setActive', 'POST'] as const
}

export function usePostUsersSetActive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setActive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.setActive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSetActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.setActive']['$post']> },
      ) => parseResponse(client['users.setActive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSetPhotoKey() {
  return ['users.setPhoto', '/users.setPhoto', 'POST'] as const
}

export function usePostUsersSetPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPhoto']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.setPhoto']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSetPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.setPhoto']['$post']> },
      ) => parseResponse(client['users.setPhoto'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSetPresenceKey() {
  return ['users.setPresence', '/users.setPresence', 'POST'] as const
}

export function usePostUsersSetPresence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.setPresence']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.setPresence']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSetPresenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.setPresence']['$post']> },
      ) => parseResponse(client['users.setPresence'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetViewsOpenKey(args: InferRequestType<(typeof client)['views.open']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['views.open', '/views.open', keyArgs] as const
}

export function useGetViewsOpen<TError = unknown>(
  args: InferRequestType<(typeof client)['views.open']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetViewsOpenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.open'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewsOpen<TError = unknown>(
  args: InferRequestType<(typeof client)['views.open']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetViewsOpenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.open']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.open'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetViewsPublishKey(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.publish', '/views.publish', keyArgs] as const
}

export function useGetViewsPublish<TError = unknown>(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsPublishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.publish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewsPublish<TError = unknown>(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsPublishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.publish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.publish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetViewsPushKey(args: InferRequestType<(typeof client)['views.push']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['views.push', '/views.push', keyArgs] as const
}

export function useGetViewsPush<TError = unknown>(
  args: InferRequestType<(typeof client)['views.push']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetViewsPushKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.push'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewsPush<TError = unknown>(
  args: InferRequestType<(typeof client)['views.push']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetViewsPushKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.push']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.push'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetViewsUpdateKey(
  args: InferRequestType<(typeof client)['views.update']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views.update', '/views.update', keyArgs] as const
}

export function useGetViewsUpdate<TError = unknown>(
  args: InferRequestType<(typeof client)['views.update']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsUpdateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.update'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewsUpdate<TError = unknown>(
  args: InferRequestType<(typeof client)['views.update']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsUpdateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['views.update']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['views.update'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsStepCompletedKey(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.stepCompleted', '/workflows.stepCompleted', keyArgs] as const
}

export function useGetWorkflowsStepCompleted<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
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
        ? getGetWorkflowsStepCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.stepCompleted'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsStepCompleted<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
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
        ? getGetWorkflowsStepCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['workflows.stepCompleted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.stepCompleted'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsStepFailedKey(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.stepFailed', '/workflows.stepFailed', keyArgs] as const
}

export function useGetWorkflowsStepFailed<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
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
        ? getGetWorkflowsStepFailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.stepFailed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsStepFailed<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
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
        ? getGetWorkflowsStepFailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.stepFailed']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.stepFailed'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkflowsUpdateStepKey(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workflows.updateStep', '/workflows.updateStep', keyArgs] as const
}

export function useGetWorkflowsUpdateStep<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
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
        ? getGetWorkflowsUpdateStepKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.updateStep'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsUpdateStep<TError = unknown>(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
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
        ? getGetWorkflowsUpdateStepKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['workflows.updateStep']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['workflows.updateStep'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
