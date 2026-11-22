import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConversations(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$get(args, options))
}

export async function getConversationsByIds(
  args: InferRequestType<typeof client.conversations.byIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.byIds.$get(args, options))
}

export async function getConversationsCommunity(
  args: InferRequestType<typeof client.conversations.community.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.community.$get(args, options))
}

export async function postConversationsCommunity(
  args: InferRequestType<typeof client.conversations.community.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.community.$post(args, options))
}

export async function putConversationsCommunityConvId(
  args: InferRequestType<(typeof client.conversations.community)[':convId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.community[':convId'].$put(args, options))
}

export async function postConversationsCommunityConvIdJoin(
  args: InferRequestType<(typeof client.conversations.community)[':convId']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.community[':convId'].join.$post(args, options))
}

export async function postConversationsCommunityConvIdParticipants(
  args: InferRequestType<
    (typeof client.conversations.community)[':convId']['participants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.community[':convId'].participants.$post(args, options),
  )
}

export async function deleteConversationsCommunityConvIdParticipants(
  args: InferRequestType<
    (typeof client.conversations.community)[':convId']['participants']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.community[':convId'].participants.$delete(args, options),
  )
}

export async function getConversationsConversationdetails(
  args: InferRequestType<typeof client.conversations.conversationdetails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.conversationdetails.$get(args, options))
}

export async function getConversationsDirect(
  args: InferRequestType<typeof client.conversations.direct.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.direct.$get(args, options))
}

export async function postConversationsDirect(
  args: InferRequestType<typeof client.conversations.direct.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.direct.$post(args, options))
}

export async function getConversationsFavorite(options?: ClientRequestOptions) {
  return await parseResponse(client.conversations.favorite.$get(undefined, options))
}

export async function postConversationsGroup(
  args: InferRequestType<typeof client.conversations.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.group.$post(args, options))
}

export async function putConversationsGroupConvId(
  args: InferRequestType<(typeof client.conversations.group)[':convId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.group[':convId'].$put(args, options))
}

export async function postConversationsGroupConvIdParticipants(
  args: InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.group[':convId'].participants.$post(args, options),
  )
}

export async function deleteConversationsGroupConvIdParticipants(
  args: InferRequestType<(typeof client.conversations.group)[':convId']['participants']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.group[':convId'].participants.$delete(args, options),
  )
}

export async function getConversationsLabelLabelId(
  args: InferRequestType<(typeof client.conversations.label)[':labelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.label[':labelId'].$get(args, options))
}

export async function getConversationsMessagesFlag(options?: ClientRequestOptions) {
  return await parseResponse(client.conversations.messages.flag.$get(undefined, options))
}

export async function getConversationsMessagesItemId(
  args: InferRequestType<(typeof client.conversations.messages)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.messages[':itemId'].$get(args, options))
}

export async function postConversationsModerateConvId(
  args: InferRequestType<(typeof client.conversations.moderate)[':convId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.moderate[':convId'].$post(args, options))
}

export async function getConversationsResolveinvitetoken(
  args: InferRequestType<typeof client.conversations.resolveinvitetoken.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.resolveinvitetoken.$get(args, options))
}

export async function getConversationsSearch(
  args: InferRequestType<typeof client.conversations.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.search.$get(args, options))
}

export async function postConversationsUnmoderateConvId(
  args: InferRequestType<(typeof client.conversations.unmoderate)[':convId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.unmoderate[':convId'].$post(args, options))
}

export async function getConversationsConvId(
  args: InferRequestType<(typeof client.conversations)[':convId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].$get(args, options))
}

export async function postConversationsConvIdArchive(
  args: InferRequestType<(typeof client.conversations)[':convId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].archive.$post(args, options))
}

export async function deleteConversationsConvIdArchive(
  args: InferRequestType<(typeof client.conversations)[':convId']['archive']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].archive.$delete(args, options))
}

export async function getConversationsConvIdConversationdetails(
  args: InferRequestType<(typeof client.conversations)[':convId']['conversationdetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].conversationdetails.$get(args, options),
  )
}

export async function postConversationsConvIdFavorite(
  args: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].favorite.$post(args, options))
}

export async function deleteConversationsConvIdFavorite(
  args: InferRequestType<(typeof client.conversations)[':convId']['favorite']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].favorite.$delete(args, options))
}

export async function getConversationsConvIdItems(
  args: InferRequestType<(typeof client.conversations)[':convId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].items.$get(args, options))
}

export async function postConversationsConvIdLabel(
  args: InferRequestType<(typeof client.conversations)[':convId']['label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].label.$post(args, options))
}

export async function deleteConversationsConvIdLabelLabelId(
  args: InferRequestType<(typeof client.conversations)[':convId']['label'][':labelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].label[':labelId'].$delete(args, options),
  )
}

export async function postConversationsConvIdMessages(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].messages.$post(args, options))
}

export async function getConversationsConvIdMessagesFlag(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages']['flag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].messages.flag.$get(args, options))
}

export async function putConversationsConvIdMessagesItemId(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].$put(args, options),
  )
}

export async function postConversationsConvIdMessagesItemId(
  args: InferRequestType<(typeof client.conversations)[':convId']['messages'][':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].$post(args, options),
  )
}

export async function deleteConversationsConvIdMessagesItemId(
  args: InferRequestType<
    (typeof client.conversations)[':convId']['messages'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].$delete(args, options),
  )
}

export async function postConversationsConvIdMessagesItemIdFlag(
  args: InferRequestType<
    (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].flag.$post(args, options),
  )
}

export async function deleteConversationsConvIdMessagesItemIdFlag(
  args: InferRequestType<
    (typeof client.conversations)[':convId']['messages'][':itemId']['flag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].flag.$delete(args, options),
  )
}

export async function postConversationsConvIdMessagesItemIdLike(
  args: InferRequestType<
    (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].like.$post(args, options),
  )
}

export async function deleteConversationsConvIdMessagesItemIdLike(
  args: InferRequestType<
    (typeof client.conversations)[':convId']['messages'][':itemId']['like']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':convId'].messages[':itemId'].like.$delete(args, options),
  )
}

export async function postConversationsConvIdModerators(
  args: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].moderators.$post(args, options))
}

export async function deleteConversationsConvIdModerators(
  args: InferRequestType<(typeof client.conversations)[':convId']['moderators']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].moderators.$delete(args, options))
}

export async function getConversationsConvIdParticipants(
  args: InferRequestType<(typeof client.conversations)[':convId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].participants.$get(args, options))
}

export async function getConversationsConvIdPins(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].pins.$get(args, options))
}

export async function postConversationsConvIdPinsItemId(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].pins[':itemId'].$post(args, options))
}

export async function deleteConversationsConvIdPinsItemId(
  args: InferRequestType<(typeof client.conversations)[':convId']['pins'][':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':convId'].pins[':itemId'].$delete(args, options))
}

export async function getRtcSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.rtc.sessions.$get(undefined, options))
}

export async function getSpaces(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.$get(args, options))
}

export async function postSpacesCreate(
  args: InferRequestType<typeof client.spaces.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.create.$post(args, options))
}

export async function getSpacesDirectory(
  args: InferRequestType<typeof client.spaces.directory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.directory.$get(args, options))
}

export async function getSpacesExistsName(
  args: InferRequestType<(typeof client.spaces.exists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.exists[':name'].$get(args, options))
}

export async function putSpacesFlagItemId(
  args: InferRequestType<(typeof client.spaces.flag)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.flag[':itemId'].$put(args, options))
}

export async function getSpacesFlagged(
  args: InferRequestType<typeof client.spaces.flagged.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.flagged.$get(args, options))
}

export async function getSpacesIds(
  args: InferRequestType<typeof client.spaces.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.ids.$get(args, options))
}

export async function deleteSpacesItemItemId(
  args: InferRequestType<(typeof client.spaces.item)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.item[':itemId'].$delete(args, options))
}

export async function putSpacesLikeItemId(
  args: InferRequestType<(typeof client.spaces.like)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.like[':itemId'].$put(args, options))
}

export async function getSpacesLikesItemId(
  args: InferRequestType<(typeof client.spaces.likes)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.likes[':itemId'].$get(args, options))
}

export async function putSpacesSearchAddRecent(
  args: InferRequestType<typeof client.spaces.search.add.recent.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.search.add.recent.$put(args, options))
}

export async function putSpacesSearchCancelSearchId(
  args: InferRequestType<(typeof client.spaces.search.cancel)[':searchId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.search.cancel[':searchId'].$put(args, options))
}

export async function getSpacesSearchRecent(options?: ClientRequestOptions) {
  return await parseResponse(client.spaces.search.recent.$get(undefined, options))
}

export async function getSpacesSearchStartBasic(
  args: InferRequestType<typeof client.spaces.search.startBasic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.search.startBasic.$get(args, options))
}

export async function getSpacesSearchStartDetailed(
  args: InferRequestType<typeof client.spaces.search.startDetailed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.search.startDetailed.$get(args, options))
}

export async function putSpacesTopicTopicIdUpdateTags(
  args: InferRequestType<(typeof client.spaces.topic)[':topicId']['updateTags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.topic[':topicId'].updateTags.$put(args, options))
}

export async function putSpacesUnflagItemId(
  args: InferRequestType<(typeof client.spaces.unflag)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.unflag[':itemId'].$put(args, options))
}

export async function putSpacesUnlikeItemId(
  args: InferRequestType<(typeof client.spaces.unlike)[':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.unlike[':itemId'].$put(args, options))
}

export async function putSpacesId(
  args: InferRequestType<(typeof client.spaces)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].$put(args, options))
}

export async function deleteSpacesId(
  args: InferRequestType<(typeof client.spaces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].$delete(args, options))
}

export async function postSpacesIdJoin(
  args: InferRequestType<(typeof client.spaces)[':id']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].join.$post(args, options))
}

export async function postSpacesIdLabelsAssign(
  args: InferRequestType<(typeof client.spaces)[':id']['labels']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].labels.assign.$post(args, options))
}

export async function deleteSpacesIdLabelsUnassign(
  args: InferRequestType<(typeof client.spaces)[':id']['labels']['unassign']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].labels.unassign.$delete(args, options))
}

export async function postSpacesIdLeave(
  args: InferRequestType<(typeof client.spaces)[':id']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].leave.$post(args, options))
}

export async function postSpacesIdParticipant(
  args: InferRequestType<(typeof client.spaces)[':id']['participant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].participant.$post(args, options))
}

export async function postSpacesIdParticipantRemove(
  args: InferRequestType<(typeof client.spaces)[':id']['participant']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].participant.remove.$post(args, options))
}

export async function getSpacesIdParticipants(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].participants.$get(args, options))
}

export async function getSpacesIdParticipantsPending(
  args: InferRequestType<(typeof client.spaces)[':id']['participants']['pending']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].participants.pending.$get(args, options))
}

export async function getSpacesIdPinnedTopics(
  args: InferRequestType<(typeof client.spaces)[':id']['pinnedTopics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].pinnedTopics.$get(args, options))
}

export async function getSpacesIdSearchParticipantsToAdd(
  args: InferRequestType<(typeof client.spaces)[':id']['searchParticipantsToAdd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].searchParticipantsToAdd.$get(args, options))
}

export async function getSpacesIdSearchSpaceParticipants(
  args: InferRequestType<(typeof client.spaces)[':id']['searchSpaceParticipants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].searchSpaceParticipants.$get(args, options))
}

export async function putSpacesIdUpdateTimestamp(
  args: InferRequestType<(typeof client.spaces)[':id']['updateTimestamp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].updateTimestamp.$put(args, options))
}

export async function putSpacesSpaceIdParticipant(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['participant']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].participant.$put(args, options))
}

export async function getSpacesSpaceIdParticipantImportIndex(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant']['import']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].participant.import.index.$get(args, options))
}

export async function postSpacesSpaceIdParticipantRequest(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['participant']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].participant.request.$post(args, options))
}

export async function postSpacesSpaceIdParticipantParticipantIdDeny(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant'][':participantId']['deny']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].participant[':participantId'].deny.$post(args, options),
  )
}

export async function postSpacesSpaceIdParticipantParticipantIdGrant(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['participant'][':participantId']['grant']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].participant[':participantId'].grant.$post(args, options),
  )
}

export async function postSpacesSpaceIdTopic(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topic.$post(args, options))
}

export async function getSpacesSpaceIdTopicTopicId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topic[':topicId'].$get(args, options))
}

export async function putSpacesSpaceIdTopicTopicId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topic[':topicId'].$put(args, options))
}

export async function getSpacesSpaceIdTopicTopicIdReply(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$get(args, options))
}

export async function postSpacesSpaceIdTopicTopicIdReply(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topic'][':topicId']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topic[':topicId'].reply.$post(args, options))
}

export async function putSpacesSpaceIdTopicTopicIdReplyReplyId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['topic'][':topicId']['reply'][':replyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].topic[':topicId'].reply[':replyId'].$put(args, options),
  )
}

export async function getSpacesSpaceIdTopics(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].topics.$get(args, options))
}

export async function putSpacesSpaceIdWelcomeboxContent(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['welcomebox'][':content']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].welcomebox[':content'].$put(args, options))
}

export async function putSpacesTopicIdPin(
  args: InferRequestType<(typeof client.spaces)[':topicId']['pin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':topicId'].pin.$put(args, options))
}

export async function putSpacesTopicIdUnpin(
  args: InferRequestType<(typeof client.spaces)[':topicId']['unpin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':topicId'].unpin.$put(args, options))
}

export async function getTelephonyDeviceInfos(options?: ClientRequestOptions) {
  return await parseResponse(client.telephony.deviceInfos.$get(undefined, options))
}

export async function getTelephonyTelephonyConversationId(options?: ClientRequestOptions) {
  return await parseResponse(client.telephony.telephonyConversationId.$get(undefined, options))
}

export async function getTelephonyTelephonyConversationIdJournal(
  args: InferRequestType<(typeof client.telephony)[':telephonyConversationId']['journal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telephony[':telephonyConversationId'].journal.$get(args, options),
  )
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersLabels(options?: ClientRequestOptions) {
  return await parseResponse(client.users.labels.$get(undefined, options))
}

export async function postUsersLabels(
  args: InferRequestType<typeof client.users.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.labels.$post(args, options))
}

export async function deleteUsersLabelsLabelId(
  args: InferRequestType<(typeof client.users.labels)[':labelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.labels[':labelId'].$delete(args, options))
}

export async function getUsersList(
  args: InferRequestType<typeof client.users.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.list.$get(args, options))
}

export async function getUsersPresence(
  args: InferRequestType<typeof client.users.presence.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.presence.$get(args, options))
}

export async function putUsersPresence(
  args: InferRequestType<typeof client.users.presence.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.presence.$put(args, options))
}

export async function getUsersProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.users.profile.$get(undefined, options))
}

export async function putUsersProfile(
  args: InferRequestType<typeof client.users.profile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.profile.$put(args, options))
}

export async function getUsersSupportinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.users.supportinfo.$get(undefined, options))
}

export async function getUsersEmailAddressGetUserByEmail(
  args: InferRequestType<(typeof client.users)[':emailAddress']['getUserByEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':emailAddress'].getUserByEmail.$get(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function getUsersIdPresence(
  args: InferRequestType<(typeof client.users)[':id']['presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].presence.$get(args, options))
}

export async function getWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.$get(undefined, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function deleteWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.$delete(undefined, options))
}

export async function postWebhooksIncomingCreateConversationId(
  args: InferRequestType<(typeof client.webhooks.incoming.create)[':conversationId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks.incoming.create[':conversationId'].$post(args, options),
  )
}

export async function getWebhooksIncomingUserUserId(
  args: InferRequestType<(typeof client.webhooks.incoming.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.incoming.user[':userId'].$get(args, options))
}

export async function postWebhooksIncomingWebhookId(
  args: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.incoming[':webhookId'].$post(args, options))
}

export async function deleteWebhooksIncomingWebhookId(
  args: InferRequestType<(typeof client.webhooks.incoming)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.incoming[':webhookId'].$delete(args, options))
}

export async function postWebhooksPresence(
  args: InferRequestType<typeof client.webhooks.presence.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.presence.$post(args, options))
}

export async function putWebhooksPresenceId(
  args: InferRequestType<(typeof client.webhooks.presence)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.presence[':id'].$put(args, options))
}

export async function getWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$get(args, options))
}

export async function putWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$put(args, options))
}

export async function deleteWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$delete(args, options))
}
