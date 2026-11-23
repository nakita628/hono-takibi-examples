import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApp(options?: ClientRequestOptions) {
  return await parseResponse(client.app.$get(undefined, options))
}

export async function patchApp(
  args: InferRequestType<typeof client.app.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.$patch(args, options))
}

export async function getBlocklists(options?: ClientRequestOptions) {
  return await parseResponse(client.blocklists.$get(undefined, options))
}

export async function postBlocklists(
  args: InferRequestType<typeof client.blocklists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists.$post(args, options))
}

export async function getBlocklistsName(
  args: InferRequestType<(typeof client.blocklists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':name'].$get(args, options))
}

export async function putBlocklistsName(
  args: InferRequestType<(typeof client.blocklists)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':name'].$put(args, options))
}

export async function deleteBlocklistsName(
  args: InferRequestType<(typeof client.blocklists)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':name'].$delete(args, options))
}

export async function postCallsIndex(
  args: InferRequestType<typeof client.calls.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.index.$post(args, options))
}

export async function postCallsCallId(
  args: InferRequestType<(typeof client.calls)[':call_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_id'].$post(args, options))
}

export async function getCampaigns(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$get(args, options))
}

export async function postCampaigns(
  args: InferRequestType<typeof client.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$post(args, options))
}

export async function putCampaignsId(
  args: InferRequestType<(typeof client.campaigns)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].$put(args, options))
}

export async function deleteCampaignsId(
  args: InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].$delete(args, options))
}

export async function patchCampaignsIdResume(
  args: InferRequestType<(typeof client.campaigns)[':id']['resume']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].resume.$patch(args, options))
}

export async function patchCampaignsIdSchedule(
  args: InferRequestType<(typeof client.campaigns)[':id']['schedule']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].schedule.$patch(args, options))
}

export async function patchCampaignsIdStop(
  args: InferRequestType<(typeof client.campaigns)[':id']['stop']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].stop.$patch(args, options))
}

export async function postCampaignsIdTest(
  args: InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].test.$post(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function postChannelsDelete(
  args: InferRequestType<typeof client.channels.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.delete.$post(args, options))
}

export async function postChannelsRead(
  args: InferRequestType<typeof client.channels.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.read.$post(args, options))
}

export async function postChannelsTypeQuery(
  args: InferRequestType<(typeof client.channels)[':type']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'].query.$post(args, options))
}

export async function postChannelsTypeId(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].$post(args, options))
}

export async function deleteChannelsTypeId(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].$delete(args, options))
}

export async function patchChannelsTypeId(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].$patch(args, options))
}

export async function postChannelsTypeIdCall(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].call.$post(args, options))
}

export async function postChannelsTypeIdEvent(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['event']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].event.$post(args, options))
}

export async function postChannelsTypeIdFile(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].file.$post(args, options))
}

export async function deleteChannelsTypeIdFile(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['file']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].file.$delete(args, options))
}

export async function postChannelsTypeIdHide(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].hide.$post(args, options))
}

export async function postChannelsTypeIdImage(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].image.$post(args, options))
}

export async function deleteChannelsTypeIdImage(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['image']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].image.$delete(args, options))
}

export async function postChannelsTypeIdMessage(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].message.$post(args, options))
}

export async function getChannelsTypeIdMessages(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].messages.$get(args, options))
}

export async function postChannelsTypeIdQuery(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].query.$post(args, options))
}

export async function postChannelsTypeIdRead(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].read.$post(args, options))
}

export async function postChannelsTypeIdShow(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['show']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].show.$post(args, options))
}

export async function postChannelsTypeIdStopWatching(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id']['stop-watching'].$post(args, options))
}

export async function postChannelsTypeIdTruncate(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['truncate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].truncate.$post(args, options))
}

export async function postChannelsTypeIdUnread(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':type'][':id'].unread.$post(args, options))
}

export async function getChanneltypes(options?: ClientRequestOptions) {
  return await parseResponse(client.channeltypes.$get(undefined, options))
}

export async function postChanneltypes(
  args: InferRequestType<typeof client.channeltypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channeltypes.$post(args, options))
}

export async function getChanneltypesName(
  args: InferRequestType<(typeof client.channeltypes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channeltypes[':name'].$get(args, options))
}

export async function putChanneltypesName(
  args: InferRequestType<(typeof client.channeltypes)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channeltypes[':name'].$put(args, options))
}

export async function deleteChanneltypesName(
  args: InferRequestType<(typeof client.channeltypes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channeltypes[':name'].$delete(args, options))
}

export async function postCheckPush(
  args: InferRequestType<typeof client.check_push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_push.$post(args, options))
}

export async function postCheckSqs(
  args: InferRequestType<typeof client.check_sqs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_sqs.$post(args, options))
}

export async function getCommands(options?: ClientRequestOptions) {
  return await parseResponse(client.commands.$get(undefined, options))
}

export async function postCommands(
  args: InferRequestType<typeof client.commands.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands.$post(args, options))
}

export async function getCommandsName(
  args: InferRequestType<(typeof client.commands)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands[':name'].$get(args, options))
}

export async function putCommandsName(
  args: InferRequestType<(typeof client.commands)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands[':name'].$put(args, options))
}

export async function deleteCommandsName(
  args: InferRequestType<(typeof client.commands)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commands[':name'].$delete(args, options))
}

export async function getConnect(
  args: InferRequestType<typeof client.connect.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.$get(args, options))
}

export async function getDevices(
  args: InferRequestType<typeof client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$get(args, options))
}

export async function postDevices(
  args: InferRequestType<typeof client.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$post(args, options))
}

export async function deleteDevices(
  args: InferRequestType<typeof client.devices.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$delete(args, options))
}

export async function postExportUsers(
  args: InferRequestType<typeof client.export.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.users.$post(args, options))
}

export async function postExportChannels(
  args: InferRequestType<typeof client.export_channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export_channels.$post(args, options))
}

export async function getExportChannelsId(
  args: InferRequestType<(typeof client.export_channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export_channels[':id'].$get(args, options))
}

export async function postGuest(
  args: InferRequestType<typeof client.guest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guest.$post(args, options))
}

export async function postImportUrls(
  args: InferRequestType<typeof client.import_urls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import_urls.$post(args, options))
}

export async function getImports(options?: ClientRequestOptions) {
  return await parseResponse(client.imports.$get(undefined, options))
}

export async function postImports(
  args: InferRequestType<typeof client.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.$post(args, options))
}

export async function getImportsId(
  args: InferRequestType<(typeof client.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports[':id'].$get(args, options))
}

export async function getLongpoll(
  args: InferRequestType<typeof client.longpoll.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longpoll.$get(args, options))
}

export async function getMembers(
  args: InferRequestType<typeof client.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.$get(args, options))
}

export async function getMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$get(args, options))
}

export async function putMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$put(args, options))
}

export async function postMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$post(args, options))
}

export async function deleteMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$delete(args, options))
}

export async function postMessagesIdAction(
  args: InferRequestType<(typeof client.messages)[':id']['action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].action.$post(args, options))
}

export async function postMessagesIdCommit(
  args: InferRequestType<(typeof client.messages)[':id']['commit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].commit.$post(args, options))
}

export async function postMessagesIdReaction(
  args: InferRequestType<(typeof client.messages)[':id']['reaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].reaction.$post(args, options))
}

export async function deleteMessagesIdReactionType(
  args: InferRequestType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].reaction[':type'].$delete(args, options))
}

export async function getMessagesIdReactions(
  args: InferRequestType<(typeof client.messages)[':id']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].reactions.$get(args, options))
}

export async function postMessagesIdTranslate(
  args: InferRequestType<(typeof client.messages)[':id']['translate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].translate.$post(args, options))
}

export async function getMessagesParentIdReplies(
  args: InferRequestType<(typeof client.messages)[':parent_id']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':parent_id'].replies.$get(args, options))
}

export async function postModerationBan(
  args: InferRequestType<typeof client.moderation.ban.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.ban.$post(args, options))
}

export async function deleteModerationBan(
  args: InferRequestType<typeof client.moderation.ban.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.ban.$delete(args, options))
}

export async function postModerationFlag(
  args: InferRequestType<typeof client.moderation.flag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.flag.$post(args, options))
}

export async function getModerationFlagsMessage(
  args: InferRequestType<typeof client.moderation.flags.message.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.flags.message.$get(args, options))
}

export async function postModerationMute(
  args: InferRequestType<typeof client.moderation.mute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.mute.$post(args, options))
}

export async function postModerationMuteChannel(
  args: InferRequestType<typeof client.moderation.mute.channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.mute.channel.$post(args, options))
}

export async function postModerationUnflag(
  args: InferRequestType<typeof client.moderation.unflag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.unflag.$post(args, options))
}

export async function postModerationUnmute(
  args: InferRequestType<typeof client.moderation.unmute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.unmute.$post(args, options))
}

export async function postModerationUnmuteChannel(
  args: InferRequestType<typeof client.moderation.unmute.channel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.unmute.channel.$post(args, options))
}

export async function getOg(
  args: InferRequestType<typeof client.og.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.og.$get(args, options))
}

export async function getPermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.permissions.$get(undefined, options))
}

export async function getPermissionsId(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions[':id'].$get(args, options))
}

export async function getPushProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.push_providers.$get(undefined, options))
}

export async function postPushProviders(
  args: InferRequestType<typeof client.push_providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_providers.$post(args, options))
}

export async function deletePushProvidersTypeName(
  args: InferRequestType<(typeof client.push_providers)[':type'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_providers[':type'][':name'].$delete(args, options))
}

export async function getQueryBannedUsers(
  args: InferRequestType<typeof client.query_banned_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query_banned_users.$get(args, options))
}

export async function getRateLimits(
  args: InferRequestType<typeof client.rate_limits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rate_limits.$get(args, options))
}

export async function getRecipients(
  args: InferRequestType<typeof client.recipients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipients.$get(args, options))
}

export async function getRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.roles.$get(undefined, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function deleteRolesName(
  args: InferRequestType<(typeof client.roles)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':name'].$delete(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSegments(
  args: InferRequestType<typeof client.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.$get(args, options))
}

export async function postSegments(
  args: InferRequestType<typeof client.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.$post(args, options))
}

export async function putSegmentsId(
  args: InferRequestType<(typeof client.segments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].$put(args, options))
}

export async function deleteSegmentsId(
  args: InferRequestType<(typeof client.segments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].$delete(args, options))
}

export async function postSync(
  args: InferRequestType<typeof client.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.$post(args, options))
}

export async function getTasksId(
  args: InferRequestType<(typeof client.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function patchUsers(
  args: InferRequestType<typeof client.users.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$patch(args, options))
}

export async function postUsersDeactivate(
  args: InferRequestType<typeof client.users.deactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.deactivate.$post(args, options))
}

export async function postUsersDelete(
  args: InferRequestType<typeof client.users.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.delete.$post(args, options))
}

export async function postUsersReactivate(
  args: InferRequestType<typeof client.users.reactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.reactivate.$post(args, options))
}

export async function postUsersRestore(
  args: InferRequestType<typeof client.users.restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.restore.$post(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function postUsersUserIdDeactivate(
  args: InferRequestType<(typeof client.users)[':user_id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].deactivate.$post(args, options))
}

export async function postUsersUserIdEvent(
  args: InferRequestType<(typeof client.users)[':user_id']['event']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].event.$post(args, options))
}

export async function getUsersUserIdExport(
  args: InferRequestType<(typeof client.users)[':user_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].export.$get(args, options))
}

export async function postUsersUserIdReactivate(
  args: InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].reactivate.$post(args, options))
}
