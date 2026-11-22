import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1ChannelsCreate(
  args: InferRequestType<(typeof client.api.v1)['channels.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.create'].$post(args, options))
}

export async function postApiV1ChannelsAddAll(
  args: InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.addAll'].$post(args, options))
}

export async function postApiV1ChannelsAddLeader(
  args: InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.addLeader'].$post(args, options))
}

export async function postApiV1ChannelsAddModerator(
  args: InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.addModerator'].$post(args, options))
}

export async function postApiV1ChannelsAddOwner(
  args: InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.addOwner'].$post(args, options))
}

export async function getApiV1ChannelsAnonymousread(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.anonymousread'].$get(args, options))
}

export async function postApiV1ChannelsArchive(
  args: InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.archive'].$post(args, options))
}

export async function postApiV1ChannelsClose(
  args: InferRequestType<(typeof client.api.v1)['channels.close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.close'].$post(args, options))
}

export async function getApiV1ChannelsCounters(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.counters'].$get(args, options))
}

export async function postApiV1ChannelsDelete(
  args: InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.delete'].$post(args, options))
}

export async function getApiV1ChannelsFiles(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.files'].$get(args, options))
}

export async function getApiV1ChannelsHistory(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.history'].$get(args, options))
}

export async function getApiV1ChannelsInfo(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.info'].$get(args, options))
}

export async function postApiV1ChannelsInvite(
  args: InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.invite'].$post(args, options))
}

export async function postApiV1ChannelsJoin(
  args: InferRequestType<(typeof client.api.v1)['channels.join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.join'].$post(args, options))
}

export async function postApiV1ChannelsKick(
  args: InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.kick'].$post(args, options))
}

export async function postApiV1ChannelsLeave(
  args: InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.leave'].$post(args, options))
}

export async function getApiV1ChannelsListJoined(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.list.joined'].$get(args, options))
}

export async function getApiV1ChannelsList(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.list'].$get(args, options))
}

export async function getApiV1ChannelsMembers(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.members'].$get(args, options))
}

export async function getApiV1ChannelsMessages(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.messages'].$get(args, options))
}

export async function getApiV1ChannelsModerators(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.moderators'].$get(args, options))
}

export async function getApiV1ChannelsOnline(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.online'].$get(args, options))
}

export async function postApiV1ChannelsOpen(
  args: InferRequestType<(typeof client.api.v1)['channels.open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.open'].$post(args, options))
}

export async function postApiV1ChannelsRemoveLeader(
  args: InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.removeLeader'].$post(args, options))
}

export async function postApiV1ChannelsRemoveModerator(
  args: InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.removeModerator'].$post(args, options))
}

export async function postApiV1ChannelsRemoveOwner(
  args: InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.removeOwner'].$post(args, options))
}

export async function postApiV1ChannelsRename(
  args: InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.rename'].$post(args, options))
}

export async function getApiV1ChannelsRoles(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.roles'].$get(args, options))
}

export async function postApiV1ChannelsSetAnnouncement(
  args: InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setAnnouncement'].$post(args, options))
}

export async function postApiV1ChannelsSetCustomFields(
  args: InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setCustomFields'].$post(args, options))
}

export async function postApiV1ChannelsSetDefault(
  args: InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setDefault'].$post(args, options))
}

export async function postApiV1ChannelsSetDescription(
  args: InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setDescription'].$post(args, options))
}

export async function postApiV1ChannelsSetJoinCode(
  args: InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setJoinCode'].$post(args, options))
}

export async function postApiV1ChannelsSetPurpose(
  args: InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setPurpose'].$post(args, options))
}

export async function postApiV1ChannelsSetReadOnly(
  args: InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setReadOnly'].$post(args, options))
}

export async function postApiV1ChannelsSetTopic(
  args: InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setTopic'].$post(args, options))
}

export async function postApiV1ChannelsSetType(
  args: InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.setType'].$post(args, options))
}

export async function postApiV1ChannelsUnarchive(
  args: InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.unarchive'].$post(args, options))
}

export async function getApiV1ChannelsGetAllUserMentionsByChannel(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['channels.getAllUserMentionsByChannel'].$get(args, options),
  )
}

export async function getApiV1ChannelsGetIntegrations(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.getIntegrations'].$get(args, options))
}

export async function postApiV1ChannelsConvertToTeam(
  args: InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['channels.convertToTeam'].$post(args, options))
}

export async function postApiV1RoomsSaveNotification(
  args: InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.saveNotification'].$post(args, options))
}

export async function postApiV1RoomsSaveDraft(
  args: InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.saveDraft'].$post(args, options))
}

export async function getApiV1RoomsAdminRooms(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.adminRooms'].$get(args, options))
}

export async function postApiV1RoomsCleanHistory(
  args: InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.cleanHistory'].$post(args, options))
}

export async function getApiV1RoomsHistory(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.history'].$get(args, options))
}

export async function getApiV1RoomsInfo(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.info'].$get(args, options))
}

export async function getApiV1RoomsGetDiscussions(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.getDiscussions'].$get(args, options))
}

export async function getApiV1RoomsGet(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.get'].$get(args, options))
}

export async function postApiV1RoomsJoin(
  args: InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.join'].$post(args, options))
}

export async function postApiV1RoomsLeave(
  args: InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.leave'].$post(args, options))
}

export async function postApiV1RoomsDelete(
  args: InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.delete'].$post(args, options))
}

export async function postApiV1RoomsFavorite(
  args: InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.favorite'].$post(args, options))
}

export async function getApiV1RoomsAutocompleteAvailableForTeams(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['rooms.autocomplete.availableForTeams'].$get(args, options),
  )
}

export async function getApiV1RoomsAutocompleteChannelAndPrivate(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(args, options),
  )
}

export async function getApiV1RoomsAutocompleteAdminRooms(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.autocomplete.adminRooms'].$get(args, options))
}

export async function getApiV1RoomsAdminRoomsGetRoom(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.adminRooms.getRoom'].$get(args, options))
}

export async function postApiV1RoomsSaveRoomSettings(
  args: InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.saveRoomSettings'].$post(args, options))
}

export async function getApiV1RoomsNameExists(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.nameExists'].$get(args, options))
}

export async function postApiV1RoomsChangeArchivationState(
  args: InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.changeArchivationState'].$post(args, options))
}

export async function postApiV1RoomsExport(
  args: InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.export'].$post(args, options))
}

export async function postApiV1RoomsMuteUser(
  args: InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.muteUser'].$post(args, options))
}

export async function postApiV1RoomsUnmuteUser(
  args: InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.unmuteUser'].$post(args, options))
}

export async function postApiV1RoomsCreateDiscussion(
  args: InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.createDiscussion'].$post(args, options))
}

export async function getApiV1RoomsImages(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.images'].$get(args, options))
}

export async function getApiV1AuditRoomsMembers(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.audit['rooms.members'].$get(args, options))
}

export async function getApiV1RoomsMembersOrderedByRole(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.membersOrderedByRole'].$get(args, options))
}

export async function postApiV1TeamsCreate(
  args: InferRequestType<(typeof client.api.v1)['teams.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.create'].$post(args, options))
}

export async function getApiV1TeamsListAll(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.listAll'].$get(args, options))
}

export async function getApiV1TeamsList(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.list'].$get(args, options))
}

export async function getApiV1TeamsInfo(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.info'].$get(args, options))
}

export async function postApiV1TeamsUpdate(
  args: InferRequestType<(typeof client.api.v1)['teams.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.update'].$post(args, options))
}

export async function postApiV1TeamsAddMembers(
  args: InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.addMembers'].$post(args, options))
}

export async function postApiV1TeamsUpdateMember(
  args: InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.updateMember'].$post(args, options))
}

export async function getApiV1TeamsMembers(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.members'].$get(args, options))
}

export async function postApiV1TeamsLeave(
  args: InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.leave'].$post(args, options))
}

export async function postApiV1TeamsRemoveMember(
  args: InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.removeMember'].$post(args, options))
}

export async function postApiV1TeamsDelete(
  args: InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.delete'].$post(args, options))
}

export async function getApiV1TeamsAutocomplete(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.autocomplete'].$get(args, options))
}

export async function postApiV1TeamsConvertToChannel(
  args: InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.convertToChannel'].$post(args, options))
}

export async function postApiV1TeamsAddRooms(
  args: InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.addRooms'].$post(args, options))
}

export async function postApiV1TeamsRemoveRoom(
  args: InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.removeRoom'].$post(args, options))
}

export async function postApiV1TeamsUpdateRoom(
  args: InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.updateRoom'].$post(args, options))
}

export async function getApiV1TeamsListRooms(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.listRooms'].$get(args, options))
}

export async function getApiV1TeamsListRoomsOfUser(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.listRoomsOfUser'].$get(args, options))
}

export async function getApiV1TeamsListChildren(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['teams.listChildren'].$get(args, options))
}

export async function getApiV1GroupsOnline(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.online'].$get(args, options))
}

export async function getApiV1GroupsGetIntegrations(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.getIntegrations'].$get(args, options))
}

export async function postApiV1GroupsAddAll(
  args: InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.addAll'].$post(args, options))
}

export async function postApiV1GroupsAddLeader(
  args: InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.addLeader'].$post(args, options))
}

export async function postApiV1GroupsAddModerator(
  args: InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.addModerator'].$post(args, options))
}

export async function postApiV1GroupsAddOwner(
  args: InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.addOwner'].$post(args, options))
}

export async function postApiV1GroupsArchive(
  args: InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.archive'].$post(args, options))
}

export async function postApiV1GroupsClose(
  args: InferRequestType<(typeof client.api.v1)['groups.close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.close'].$post(args, options))
}

export async function getApiV1GroupsCounters(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.counters'].$get(args, options))
}

export async function postApiV1GroupsCreate(
  args: InferRequestType<(typeof client.api.v1)['groups.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.create'].$post(args, options))
}

export async function postApiV1GroupsDelete(
  args: InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.delete'].$post(args, options))
}

export async function getApiV1GroupsHistory(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.history'].$get(args, options))
}

export async function getApiV1GroupsInfo(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.info'].$get(args, options))
}

export async function postApiV1GroupsInvite(
  args: InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.invite'].$post(args, options))
}

export async function postApiV1GroupsKick(
  args: InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.kick'].$post(args, options))
}

export async function postApiV1GroupsLeave(
  args: InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.leave'].$post(args, options))
}

export async function getApiV1GroupsListAll(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.listAll'].$get(args, options))
}

export async function getApiV1GroupsList(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.list'].$get(args, options))
}

export async function getApiV1GroupsMembers(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.members'].$get(args, options))
}

export async function getApiV1GroupsMessages(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.messages'].$get(args, options))
}

export async function getApiV1GroupsModerators(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.moderators'].$get(args, options))
}

export async function postApiV1GroupsOpen(
  args: InferRequestType<(typeof client.api.v1)['groups.open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.open'].$post(args, options))
}

export async function postApiV1GroupsRemoveLeader(
  args: InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.removeLeader'].$post(args, options))
}

export async function postApiV1GroupsRemoveModerator(
  args: InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.removeModerator'].$post(args, options))
}

export async function postApiV1GroupsRemoveOwner(
  args: InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.removeOwner'].$post(args, options))
}

export async function postApiV1GroupsRename(
  args: InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.rename'].$post(args, options))
}

export async function postApiV1GroupsSetAnnouncement(
  args: InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setAnnouncement'].$post(args, options))
}

export async function postApiV1GroupsSetCustomFields(
  args: InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setCustomFields'].$post(args, options))
}

export async function postApiV1GroupsSetDescription(
  args: InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setDescription'].$post(args, options))
}

export async function postApiV1GroupsSetPurpose(
  args: InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setPurpose'].$post(args, options))
}

export async function postApiV1GroupsSetReadOnly(
  args: InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setReadOnly'].$post(args, options))
}

export async function postApiV1GroupsSetTopic(
  args: InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setTopic'].$post(args, options))
}

export async function postApiV1GroupsSetType(
  args: InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setType'].$post(args, options))
}

export async function postApiV1GroupsUnarchive(
  args: InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.unarchive'].$post(args, options))
}

export async function getApiV1GroupsFiles(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.files'].$get(args, options))
}

export async function postApiV1GroupsSetEncrypted(
  args: InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.setEncrypted'].$post(args, options))
}

export async function postApiV1GroupsConvertToTeam(
  args: InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.convertToTeam'].$post(args, options))
}

export async function getApiV1GroupsRoles(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups.roles'].$get(args, options))
}

export async function getApiV1Directory(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.directory.$get(args, options))
}

export async function postApiV1RoomsOpen(
  args: InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.open'].$post(args, options))
}

export async function postApiV1RoomsHide(
  args: InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.hide'].$post(args, options))
}

export async function postApiV1FindOrCreateInvite(
  args: InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.findOrCreateInvite.$post(args, options))
}

export async function getApiV1RoomsRoles(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.roles'].$get(args, options))
}

export async function getApiV1RoomsIsMember(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.isMember'].$get(args, options))
}

export async function getApiV1RoomsAutocompleteChannelAndPrivateWithPagination(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(args, options),
  )
}

export async function postApiV1RoomsMediaRid(
  args: InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['rooms.media'][':rid'].$post(args, options))
}

export async function postApiV1RoomsMediaConfirmRidFileId(
  args: InferRequestType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['rooms.mediaConfirm'][':rid'][':fileId'].$post(args, options),
  )
}

export async function postApiV1UploadsDelete(
  args: InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['uploads.delete'].$post(args, options))
}

export async function getApiV1ListInvites(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.listInvites.$get(undefined, options))
}

export async function deleteApiV1RemoveInviteId(
  args: InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.removeInvite[':_id'].$delete(args, options))
}

export async function postApiV1UseInviteToken(
  args: InferRequestType<typeof client.api.v1.useInviteToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.useInviteToken.$post(args, options))
}

export async function postApiV1AbacRoomsRidAttributes(
  args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$post(args, options))
}

export async function deleteApiV1AbacRoomsRidAttributes(
  args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$delete(args, options))
}

export async function putApiV1AbacRoomsRidAttributesKey(
  args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.abac.rooms[':rid'].attributes[':key'].$put(args, options),
  )
}

export async function postApiV1AbacRoomsRidAttributesKey(
  args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.abac.rooms[':rid'].attributes[':key'].$post(args, options),
  )
}

export async function deleteApiV1AbacRoomsRidAttributesKey(
  args: InferRequestType<
    (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.abac.rooms[':rid'].attributes[':key'].$delete(args, options),
  )
}

export async function getApiV1AbacAttributes(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes.$get(args, options))
}

export async function postApiV1AbacAttributes(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes.$post(args, options))
}

export async function postApiV1AbacUsersSync(
  args: InferRequestType<typeof client.api.v1.abac.users.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.users.sync.$post(args, options))
}

export async function getApiV1AbacAttributesId(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes[':_id'].$get(args, options))
}

export async function putApiV1AbacAttributesId(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes[':_id'].$put(args, options))
}

export async function deleteApiV1AbacAttributesId(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes[':_id'].$delete(args, options))
}

export async function getApiV1AbacAttributesKeyIsInUse(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.attributes[':key']['is-in-use'].$get(args, options))
}

export async function getApiV1AbacAttributesListKeys(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac['attributes.listKeys'].$get(args, options))
}

export async function getApiV1AbacAttributesListAssignable(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac['attributes.listAssignable'].$get(args, options))
}

export async function getApiV1AbacRooms(
  args: InferRequestType<typeof client.api.v1.abac.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.rooms.$get(args, options))
}

export async function postApiV1AbacRoomsEvaluateMembership(
  args: InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac['rooms.evaluateMembership'].$post(args, options))
}

export async function getApiV1AbacAudit(
  args: InferRequestType<typeof client.api.v1.abac.audit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.audit.$get(args, options))
}

export async function getApiV1AbacPdpHealth(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.abac.pdp.health.$get(args, options))
}

export async function getApiV1SubscriptionsGet(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['subscriptions.get'].$get(args, options))
}

export async function getApiV1SubscriptionsGetOne(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['subscriptions.getOne'].$get(args, options))
}

export async function postApiV1SubscriptionsRead(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['subscriptions.read'].$post(args, options))
}

export async function postApiV1SubscriptionsUnread(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['subscriptions.unread'].$post(args, options))
}
