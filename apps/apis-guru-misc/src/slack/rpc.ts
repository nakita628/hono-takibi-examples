import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAdminAppsApprove(
  args: InferRequestType<(typeof client)['admin.apps.approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.apps.approve'].$post(args, options))
}

export async function getAdminAppsApprovedList(
  args: InferRequestType<(typeof client)['admin.apps.approved.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.apps.approved.list'].$get(args, options))
}

export async function getAdminAppsRequestsList(
  args: InferRequestType<(typeof client)['admin.apps.requests.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.apps.requests.list'].$get(args, options))
}

export async function postAdminAppsRestrict(
  args: InferRequestType<(typeof client)['admin.apps.restrict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.apps.restrict'].$post(args, options))
}

export async function getAdminAppsRestrictedList(
  args: InferRequestType<(typeof client)['admin.apps.restricted.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.apps.restricted.list'].$get(args, options))
}

export async function postAdminConversationsArchive(
  args: InferRequestType<(typeof client)['admin.conversations.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.archive'].$post(args, options))
}

export async function postAdminConversationsConvertToPrivate(
  args: InferRequestType<(typeof client)['admin.conversations.convertToPrivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.convertToPrivate'].$post(args, options))
}

export async function postAdminConversationsCreate(
  args: InferRequestType<(typeof client)['admin.conversations.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.create'].$post(args, options))
}

export async function postAdminConversationsDelete(
  args: InferRequestType<(typeof client)['admin.conversations.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.delete'].$post(args, options))
}

export async function postAdminConversationsDisconnectShared(
  args: InferRequestType<(typeof client)['admin.conversations.disconnectShared']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.disconnectShared'].$post(args, options))
}

export async function getAdminConversationsEkmListOriginalConnectedChannelInfo(
  args: InferRequestType<
    (typeof client)['admin.conversations.ekm.listOriginalConnectedChannelInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['admin.conversations.ekm.listOriginalConnectedChannelInfo'].$get(args, options),
  )
}

export async function getAdminConversationsGetConversationPrefs(
  args: InferRequestType<(typeof client)['admin.conversations.getConversationPrefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.getConversationPrefs'].$get(args, options))
}

export async function getAdminConversationsGetTeams(
  args: InferRequestType<(typeof client)['admin.conversations.getTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.getTeams'].$get(args, options))
}

export async function postAdminConversationsInvite(
  args: InferRequestType<(typeof client)['admin.conversations.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.invite'].$post(args, options))
}

export async function postAdminConversationsRename(
  args: InferRequestType<(typeof client)['admin.conversations.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.rename'].$post(args, options))
}

export async function postAdminConversationsRestrictAccessAddGroup(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.addGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['admin.conversations.restrictAccess.addGroup'].$post(args, options),
  )
}

export async function getAdminConversationsRestrictAccessListGroups(
  args: InferRequestType<(typeof client)['admin.conversations.restrictAccess.listGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['admin.conversations.restrictAccess.listGroups'].$get(args, options),
  )
}

export async function postAdminConversationsRestrictAccessRemoveGroup(
  args: InferRequestType<
    (typeof client)['admin.conversations.restrictAccess.removeGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['admin.conversations.restrictAccess.removeGroup'].$post(args, options),
  )
}

export async function getAdminConversationsSearch(
  args: InferRequestType<(typeof client)['admin.conversations.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.search'].$get(args, options))
}

export async function postAdminConversationsSetConversationPrefs(
  args: InferRequestType<(typeof client)['admin.conversations.setConversationPrefs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['admin.conversations.setConversationPrefs'].$post(args, options),
  )
}

export async function postAdminConversationsSetTeams(
  args: InferRequestType<(typeof client)['admin.conversations.setTeams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.setTeams'].$post(args, options))
}

export async function postAdminConversationsUnarchive(
  args: InferRequestType<(typeof client)['admin.conversations.unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.conversations.unarchive'].$post(args, options))
}

export async function postAdminEmojiAdd(
  args: InferRequestType<(typeof client)['admin.emoji.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.emoji.add'].$post(args, options))
}

export async function postAdminEmojiAddAlias(
  args: InferRequestType<(typeof client)['admin.emoji.addAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.emoji.addAlias'].$post(args, options))
}

export async function getAdminEmojiList(
  args: InferRequestType<(typeof client)['admin.emoji.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.emoji.list'].$get(args, options))
}

export async function postAdminEmojiRemove(
  args: InferRequestType<(typeof client)['admin.emoji.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.emoji.remove'].$post(args, options))
}

export async function postAdminEmojiRename(
  args: InferRequestType<(typeof client)['admin.emoji.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.emoji.rename'].$post(args, options))
}

export async function postAdminInviteRequestsApprove(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.inviteRequests.approve'].$post(args, options))
}

export async function getAdminInviteRequestsApprovedList(
  args: InferRequestType<(typeof client)['admin.inviteRequests.approved.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.inviteRequests.approved.list'].$get(args, options))
}

export async function getAdminInviteRequestsDeniedList(
  args: InferRequestType<(typeof client)['admin.inviteRequests.denied.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.inviteRequests.denied.list'].$get(args, options))
}

export async function postAdminInviteRequestsDeny(
  args: InferRequestType<(typeof client)['admin.inviteRequests.deny']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.inviteRequests.deny'].$post(args, options))
}

export async function getAdminInviteRequestsList(
  args: InferRequestType<(typeof client)['admin.inviteRequests.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.inviteRequests.list'].$get(args, options))
}

export async function getAdminTeamsAdminsList(
  args: InferRequestType<(typeof client)['admin.teams.admins.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.admins.list'].$get(args, options))
}

export async function postAdminTeamsCreate(
  args: InferRequestType<(typeof client)['admin.teams.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.create'].$post(args, options))
}

export async function getAdminTeamsList(
  args: InferRequestType<(typeof client)['admin.teams.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.list'].$get(args, options))
}

export async function getAdminTeamsOwnersList(
  args: InferRequestType<(typeof client)['admin.teams.owners.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.owners.list'].$get(args, options))
}

export async function getAdminTeamsSettingsInfo(
  args: InferRequestType<(typeof client)['admin.teams.settings.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.info'].$get(args, options))
}

export async function postAdminTeamsSettingsSetDefaultChannels(
  args: InferRequestType<(typeof client)['admin.teams.settings.setDefaultChannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.setDefaultChannels'].$post(args, options))
}

export async function postAdminTeamsSettingsSetDescription(
  args: InferRequestType<(typeof client)['admin.teams.settings.setDescription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.setDescription'].$post(args, options))
}

export async function postAdminTeamsSettingsSetDiscoverability(
  args: InferRequestType<(typeof client)['admin.teams.settings.setDiscoverability']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.setDiscoverability'].$post(args, options))
}

export async function postAdminTeamsSettingsSetIcon(
  args: InferRequestType<(typeof client)['admin.teams.settings.setIcon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.setIcon'].$post(args, options))
}

export async function postAdminTeamsSettingsSetName(
  args: InferRequestType<(typeof client)['admin.teams.settings.setName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.teams.settings.setName'].$post(args, options))
}

export async function postAdminUsergroupsAddChannels(
  args: InferRequestType<(typeof client)['admin.usergroups.addChannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.usergroups.addChannels'].$post(args, options))
}

export async function postAdminUsergroupsAddTeams(
  args: InferRequestType<(typeof client)['admin.usergroups.addTeams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.usergroups.addTeams'].$post(args, options))
}

export async function getAdminUsergroupsListChannels(
  args: InferRequestType<(typeof client)['admin.usergroups.listChannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.usergroups.listChannels'].$get(args, options))
}

export async function postAdminUsergroupsRemoveChannels(
  args: InferRequestType<(typeof client)['admin.usergroups.removeChannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.usergroups.removeChannels'].$post(args, options))
}

export async function postAdminUsersAssign(
  args: InferRequestType<(typeof client)['admin.users.assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.assign'].$post(args, options))
}

export async function postAdminUsersInvite(
  args: InferRequestType<(typeof client)['admin.users.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.invite'].$post(args, options))
}

export async function getAdminUsersList(
  args: InferRequestType<(typeof client)['admin.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.list'].$get(args, options))
}

export async function postAdminUsersRemove(
  args: InferRequestType<(typeof client)['admin.users.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.remove'].$post(args, options))
}

export async function postAdminUsersSessionInvalidate(
  args: InferRequestType<(typeof client)['admin.users.session.invalidate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.session.invalidate'].$post(args, options))
}

export async function postAdminUsersSessionReset(
  args: InferRequestType<(typeof client)['admin.users.session.reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.session.reset'].$post(args, options))
}

export async function postAdminUsersSetAdmin(
  args: InferRequestType<(typeof client)['admin.users.setAdmin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.setAdmin'].$post(args, options))
}

export async function postAdminUsersSetExpiration(
  args: InferRequestType<(typeof client)['admin.users.setExpiration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.setExpiration'].$post(args, options))
}

export async function postAdminUsersSetOwner(
  args: InferRequestType<(typeof client)['admin.users.setOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.setOwner'].$post(args, options))
}

export async function postAdminUsersSetRegular(
  args: InferRequestType<(typeof client)['admin.users.setRegular']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin.users.setRegular'].$post(args, options))
}

export async function getApiTest(
  args: InferRequestType<(typeof client)['api.test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api.test'].$get(args, options))
}

export async function getAppsEventAuthorizationsList(
  args: InferRequestType<(typeof client)['apps.event.authorizations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.event.authorizations.list'].$get(args, options))
}

export async function getAppsPermissionsInfo(
  args: InferRequestType<(typeof client)['apps.permissions.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.info'].$get(args, options))
}

export async function getAppsPermissionsRequest(
  args: InferRequestType<(typeof client)['apps.permissions.request']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.request'].$get(args, options))
}

export async function getAppsPermissionsResourcesList(
  args: InferRequestType<(typeof client)['apps.permissions.resources.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.resources.list'].$get(args, options))
}

export async function getAppsPermissionsScopesList(
  args: InferRequestType<(typeof client)['apps.permissions.scopes.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.scopes.list'].$get(args, options))
}

export async function getAppsPermissionsUsersList(
  args: InferRequestType<(typeof client)['apps.permissions.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.users.list'].$get(args, options))
}

export async function getAppsPermissionsUsersRequest(
  args: InferRequestType<(typeof client)['apps.permissions.users.request']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.permissions.users.request'].$get(args, options))
}

export async function getAppsUninstall(
  args: InferRequestType<(typeof client)['apps.uninstall']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apps.uninstall'].$get(args, options))
}

export async function getAuthRevoke(
  args: InferRequestType<(typeof client)['auth.revoke']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth.revoke'].$get(args, options))
}

export async function getAuthTest(
  args: InferRequestType<(typeof client)['auth.test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth.test'].$get(args, options))
}

export async function getBotsInfo(
  args: InferRequestType<(typeof client)['bots.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bots.info'].$get(args, options))
}

export async function postCallsAdd(
  args: InferRequestType<(typeof client)['calls.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.add'].$post(args, options))
}

export async function postCallsEnd(
  args: InferRequestType<(typeof client)['calls.end']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.end'].$post(args, options))
}

export async function getCallsInfo(
  args: InferRequestType<(typeof client)['calls.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.info'].$get(args, options))
}

export async function postCallsParticipantsAdd(
  args: InferRequestType<(typeof client)['calls.participants.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.participants.add'].$post(args, options))
}

export async function postCallsParticipantsRemove(
  args: InferRequestType<(typeof client)['calls.participants.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.participants.remove'].$post(args, options))
}

export async function postCallsUpdate(
  args: InferRequestType<(typeof client)['calls.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calls.update'].$post(args, options))
}

export async function postChatDelete(
  args: InferRequestType<(typeof client)['chat.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.delete'].$post(args, options))
}

export async function postChatDeleteScheduledMessage(
  args: InferRequestType<(typeof client)['chat.deleteScheduledMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.deleteScheduledMessage'].$post(args, options))
}

export async function getChatGetPermalink(
  args: InferRequestType<(typeof client)['chat.getPermalink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.getPermalink'].$get(args, options))
}

export async function postChatMeMessage(
  args: InferRequestType<(typeof client)['chat.meMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.meMessage'].$post(args, options))
}

export async function postChatPostEphemeral(
  args: InferRequestType<(typeof client)['chat.postEphemeral']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.postEphemeral'].$post(args, options))
}

export async function postChatPostMessage(
  args: InferRequestType<(typeof client)['chat.postMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.postMessage'].$post(args, options))
}

export async function postChatScheduleMessage(
  args: InferRequestType<(typeof client)['chat.scheduleMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.scheduleMessage'].$post(args, options))
}

export async function getChatScheduledMessagesList(
  args: InferRequestType<(typeof client)['chat.scheduledMessages.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.scheduledMessages.list'].$get(args, options))
}

export async function postChatUnfurl(
  args: InferRequestType<(typeof client)['chat.unfurl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.unfurl'].$post(args, options))
}

export async function postChatUpdate(
  args: InferRequestType<(typeof client)['chat.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['chat.update'].$post(args, options))
}

export async function postConversationsArchive(
  args: InferRequestType<(typeof client)['conversations.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.archive'].$post(args, options))
}

export async function postConversationsClose(
  args: InferRequestType<(typeof client)['conversations.close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.close'].$post(args, options))
}

export async function postConversationsCreate(
  args: InferRequestType<(typeof client)['conversations.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.create'].$post(args, options))
}

export async function getConversationsHistory(
  args: InferRequestType<(typeof client)['conversations.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.history'].$get(args, options))
}

export async function getConversationsInfo(
  args: InferRequestType<(typeof client)['conversations.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.info'].$get(args, options))
}

export async function postConversationsInvite(
  args: InferRequestType<(typeof client)['conversations.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.invite'].$post(args, options))
}

export async function postConversationsJoin(
  args: InferRequestType<(typeof client)['conversations.join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.join'].$post(args, options))
}

export async function postConversationsKick(
  args: InferRequestType<(typeof client)['conversations.kick']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.kick'].$post(args, options))
}

export async function postConversationsLeave(
  args: InferRequestType<(typeof client)['conversations.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.leave'].$post(args, options))
}

export async function getConversationsList(
  args: InferRequestType<(typeof client)['conversations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.list'].$get(args, options))
}

export async function postConversationsMark(
  args: InferRequestType<(typeof client)['conversations.mark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.mark'].$post(args, options))
}

export async function getConversationsMembers(
  args: InferRequestType<(typeof client)['conversations.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.members'].$get(args, options))
}

export async function postConversationsOpen(
  args: InferRequestType<(typeof client)['conversations.open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.open'].$post(args, options))
}

export async function postConversationsRename(
  args: InferRequestType<(typeof client)['conversations.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.rename'].$post(args, options))
}

export async function getConversationsReplies(
  args: InferRequestType<(typeof client)['conversations.replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.replies'].$get(args, options))
}

export async function postConversationsSetPurpose(
  args: InferRequestType<(typeof client)['conversations.setPurpose']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.setPurpose'].$post(args, options))
}

export async function postConversationsSetTopic(
  args: InferRequestType<(typeof client)['conversations.setTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.setTopic'].$post(args, options))
}

export async function postConversationsUnarchive(
  args: InferRequestType<(typeof client)['conversations.unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['conversations.unarchive'].$post(args, options))
}

export async function getDialogOpen(
  args: InferRequestType<(typeof client)['dialog.open']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dialog.open'].$get(args, options))
}

export async function postDndEndDnd(
  args: InferRequestType<(typeof client)['dnd.endDnd']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dnd.endDnd'].$post(args, options))
}

export async function postDndEndSnooze(
  args: InferRequestType<(typeof client)['dnd.endSnooze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dnd.endSnooze'].$post(args, options))
}

export async function getDndInfo(
  args: InferRequestType<(typeof client)['dnd.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dnd.info'].$get(args, options))
}

export async function postDndSetSnooze(
  args: InferRequestType<(typeof client)['dnd.setSnooze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dnd.setSnooze'].$post(args, options))
}

export async function getDndTeamInfo(
  args: InferRequestType<(typeof client)['dnd.teamInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dnd.teamInfo'].$get(args, options))
}

export async function getEmojiList(
  args: InferRequestType<(typeof client)['emoji.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['emoji.list'].$get(args, options))
}

export async function postFilesCommentsDelete(
  args: InferRequestType<(typeof client)['files.comments.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.comments.delete'].$post(args, options))
}

export async function postFilesDelete(
  args: InferRequestType<(typeof client)['files.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.delete'].$post(args, options))
}

export async function getFilesInfo(
  args: InferRequestType<(typeof client)['files.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.info'].$get(args, options))
}

export async function getFilesList(
  args: InferRequestType<(typeof client)['files.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.list'].$get(args, options))
}

export async function postFilesRemoteAdd(
  args: InferRequestType<(typeof client)['files.remote.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.add'].$post(args, options))
}

export async function getFilesRemoteInfo(
  args: InferRequestType<(typeof client)['files.remote.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.info'].$get(args, options))
}

export async function getFilesRemoteList(
  args: InferRequestType<(typeof client)['files.remote.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.list'].$get(args, options))
}

export async function postFilesRemoteRemove(
  args: InferRequestType<(typeof client)['files.remote.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.remove'].$post(args, options))
}

export async function getFilesRemoteShare(
  args: InferRequestType<(typeof client)['files.remote.share']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.share'].$get(args, options))
}

export async function postFilesRemoteUpdate(
  args: InferRequestType<(typeof client)['files.remote.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.remote.update'].$post(args, options))
}

export async function postFilesRevokePublicURL(
  args: InferRequestType<(typeof client)['files.revokePublicURL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.revokePublicURL'].$post(args, options))
}

export async function postFilesSharedPublicURL(
  args: InferRequestType<(typeof client)['files.sharedPublicURL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.sharedPublicURL'].$post(args, options))
}

export async function postFilesUpload(
  args: InferRequestType<(typeof client)['files.upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['files.upload'].$post(args, options))
}

export async function getMigrationExchange(
  args: InferRequestType<(typeof client)['migration.exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['migration.exchange'].$get(args, options))
}

export async function getOauthAccess(
  args: InferRequestType<(typeof client)['oauth.access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauth.access'].$get(args, options))
}

export async function getOauthToken(
  args: InferRequestType<(typeof client)['oauth.token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauth.token'].$get(args, options))
}

export async function getOauthV2Access(
  args: InferRequestType<(typeof client)['oauth.v2.access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauth.v2.access'].$get(args, options))
}

export async function postPinsAdd(
  args: InferRequestType<(typeof client)['pins.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.add'].$post(args, options))
}

export async function getPinsList(
  args: InferRequestType<(typeof client)['pins.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.list'].$get(args, options))
}

export async function postPinsRemove(
  args: InferRequestType<(typeof client)['pins.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.remove'].$post(args, options))
}

export async function postReactionsAdd(
  args: InferRequestType<(typeof client)['reactions.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reactions.add'].$post(args, options))
}

export async function getReactionsGet(
  args: InferRequestType<(typeof client)['reactions.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reactions.get'].$get(args, options))
}

export async function getReactionsList(
  args: InferRequestType<(typeof client)['reactions.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reactions.list'].$get(args, options))
}

export async function postReactionsRemove(
  args: InferRequestType<(typeof client)['reactions.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reactions.remove'].$post(args, options))
}

export async function postRemindersAdd(
  args: InferRequestType<(typeof client)['reminders.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reminders.add'].$post(args, options))
}

export async function postRemindersComplete(
  args: InferRequestType<(typeof client)['reminders.complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reminders.complete'].$post(args, options))
}

export async function postRemindersDelete(
  args: InferRequestType<(typeof client)['reminders.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reminders.delete'].$post(args, options))
}

export async function getRemindersInfo(
  args: InferRequestType<(typeof client)['reminders.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reminders.info'].$get(args, options))
}

export async function getRemindersList(
  args: InferRequestType<(typeof client)['reminders.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reminders.list'].$get(args, options))
}

export async function getRtmConnect(
  args: InferRequestType<(typeof client)['rtm.connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rtm.connect'].$get(args, options))
}

export async function getSearchMessages(
  args: InferRequestType<(typeof client)['search.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search.messages'].$get(args, options))
}

export async function postStarsAdd(
  args: InferRequestType<(typeof client)['stars.add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.add'].$post(args, options))
}

export async function getStarsList(
  args: InferRequestType<(typeof client)['stars.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.list'].$get(args, options))
}

export async function postStarsRemove(
  args: InferRequestType<(typeof client)['stars.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.remove'].$post(args, options))
}

export async function getTeamAccessLogs(
  args: InferRequestType<(typeof client)['team.accessLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team.accessLogs'].$get(args, options))
}

export async function getTeamBillableInfo(
  args: InferRequestType<(typeof client)['team.billableInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team.billableInfo'].$get(args, options))
}

export async function getTeamInfo(
  args: InferRequestType<(typeof client)['team.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team.info'].$get(args, options))
}

export async function getTeamIntegrationLogs(
  args: InferRequestType<(typeof client)['team.integrationLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team.integrationLogs'].$get(args, options))
}

export async function getTeamProfileGet(
  args: InferRequestType<(typeof client)['team.profile.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team.profile.get'].$get(args, options))
}

export async function postUsergroupsCreate(
  args: InferRequestType<(typeof client)['usergroups.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.create'].$post(args, options))
}

export async function postUsergroupsDisable(
  args: InferRequestType<(typeof client)['usergroups.disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.disable'].$post(args, options))
}

export async function postUsergroupsEnable(
  args: InferRequestType<(typeof client)['usergroups.enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.enable'].$post(args, options))
}

export async function getUsergroupsList(
  args: InferRequestType<(typeof client)['usergroups.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.list'].$get(args, options))
}

export async function postUsergroupsUpdate(
  args: InferRequestType<(typeof client)['usergroups.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.update'].$post(args, options))
}

export async function getUsergroupsUsersList(
  args: InferRequestType<(typeof client)['usergroups.users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.users.list'].$get(args, options))
}

export async function postUsergroupsUsersUpdate(
  args: InferRequestType<(typeof client)['usergroups.users.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usergroups.users.update'].$post(args, options))
}

export async function getUsersConversations(
  args: InferRequestType<(typeof client)['users.conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.conversations'].$get(args, options))
}

export async function postUsersDeletePhoto(
  args: InferRequestType<(typeof client)['users.deletePhoto']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.deletePhoto'].$post(args, options))
}

export async function getUsersGetPresence(
  args: InferRequestType<(typeof client)['users.getPresence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.getPresence'].$get(args, options))
}

export async function getUsersIdentity(
  args: InferRequestType<(typeof client)['users.identity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.identity'].$get(args, options))
}

export async function getUsersInfo(
  args: InferRequestType<(typeof client)['users.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.info'].$get(args, options))
}

export async function getUsersList(
  args: InferRequestType<(typeof client)['users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.list'].$get(args, options))
}

export async function getUsersLookupByEmail(
  args: InferRequestType<(typeof client)['users.lookupByEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.lookupByEmail'].$get(args, options))
}

export async function getUsersProfileGet(
  args: InferRequestType<(typeof client)['users.profile.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.profile.get'].$get(args, options))
}

export async function postUsersProfileSet(
  args: InferRequestType<(typeof client)['users.profile.set']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.profile.set'].$post(args, options))
}

export async function postUsersSetActive(
  args: InferRequestType<(typeof client)['users.setActive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.setActive'].$post(args, options))
}

export async function postUsersSetPhoto(
  args: InferRequestType<(typeof client)['users.setPhoto']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.setPhoto'].$post(args, options))
}

export async function postUsersSetPresence(
  args: InferRequestType<(typeof client)['users.setPresence']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.setPresence'].$post(args, options))
}

export async function getViewsOpen(
  args: InferRequestType<(typeof client)['views.open']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['views.open'].$get(args, options))
}

export async function getViewsPublish(
  args: InferRequestType<(typeof client)['views.publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['views.publish'].$get(args, options))
}

export async function getViewsPush(
  args: InferRequestType<(typeof client)['views.push']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['views.push'].$get(args, options))
}

export async function getViewsUpdate(
  args: InferRequestType<(typeof client)['views.update']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['views.update'].$get(args, options))
}

export async function getWorkflowsStepCompleted(
  args: InferRequestType<(typeof client)['workflows.stepCompleted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['workflows.stepCompleted'].$get(args, options))
}

export async function getWorkflowsStepFailed(
  args: InferRequestType<(typeof client)['workflows.stepFailed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['workflows.stepFailed'].$get(args, options))
}

export async function getWorkflowsUpdateStep(
  args: InferRequestType<(typeof client)['workflows.updateStep']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['workflows.updateStep'].$get(args, options))
}
