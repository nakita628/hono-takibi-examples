import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1LivechatUsersType(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.users[':type'].$get(args, options))
}

export async function postApiV1LivechatUsersType(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.users[':type'].$post(args, options))
}

export async function getApiV1LivechatUsersTypeId(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.users[':type'][':_id'].$get(args, options))
}

export async function deleteApiV1LivechatUsersTypeId(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.users[':type'][':_id'].$delete(args, options))
}

export async function getApiV1LivechatAgentInfoRidToken(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['agent.info'][':rid'][':token'].$get(args, options),
  )
}

export async function getApiV1LivechatAgentNextToken(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['agent.next'][':token'].$get(args, options))
}

export async function postApiV1LivechatAgentsSaveInfo(
  args: InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['agents.saveInfo'].$post(args, options))
}

export async function postApiV1LivechatAgentStatus(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['agent.status'].$post(args, options))
}

export async function getApiV1OmnichannelContact(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel.contact.$get(args, options))
}

export async function postApiV1OmnichannelContact(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel.contact.$post(args, options))
}

export async function getApiV1OmnichannelContactSearch(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contact.search'].$get(args, options))
}

export async function postApiV1OmnichannelContacts(
  args: InferRequestType<typeof client.api.v1.omnichannel.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel.contacts.$post(args, options))
}

export async function postApiV1OmnichannelContactsUpdate(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.update'].$post(args, options))
}

export async function postApiV1OmnichannelContactsConflicts(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.conflicts'].$post(args, options))
}

export async function getApiV1OmnichannelContactsGet(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.get'].$get(args, options))
}

export async function getApiV1OmnichannelContactsSearch(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.search'].$get(args, options))
}

export async function getApiV1OmnichannelContactsChannels(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.channels'].$get(args, options))
}

export async function getApiV1OmnichannelContactsHistory(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.history'].$get(args, options))
}

export async function getApiV1OmnichannelContactsCheckExistence(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.omnichannel['contacts.checkExistence'].$get(args, options),
  )
}

export async function postApiV1OmnichannelContactsBlock(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.block'].$post(args, options))
}

export async function postApiV1OmnichannelContactsUnblock(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel['contacts.unblock'].$post(args, options))
}

export async function getApiV1LivechatAnalyticsAgentOverview(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.analytics['agent-overview'].$get(args, options))
}

export async function getApiV1LivechatAnalyticsOverview(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.analytics.overview.$get(args, options))
}

export async function getApiV1LivechatConfig(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.config.$get(args, options))
}

export async function getApiV1LivechatRooms(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.rooms.$get(args, options))
}

export async function getApiV1LivechatRoom(
  args: InferRequestType<typeof client.api.v1.livechat.room.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.room.$get(args, options))
}

export async function postApiV1LivechatRoomClose(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.close'].$post(args, options))
}

export async function postApiV1LivechatRoomCloseByUser(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.closeByUser'].$post(args, options))
}

export async function getApiV1LivechatRoomJoin(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.join'].$get(args, options))
}

export async function postApiV1LivechatRoomSaveInfo(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.saveInfo'].$post(args, options))
}

export async function postApiV1LivechatRoomForward(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.forward'].$post(args, options))
}

export async function getApiV1LivechatTransferHistoryRid(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['transfer.history'][':rid'].$get(args, options))
}

export async function postApiV1LivechatRoomSurvey(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.survey'].$post(args, options))
}

export async function postApiV1LivechatRoomOnHold(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.onHold'].$post(args, options))
}

export async function postApiV1LivechatUploadRid(
  args: InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.upload[':rid'].$post(args, options))
}

export async function postApiV1LivechatRoomRidPriority(
  args: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.room[':rid'].priority.$post(args, options))
}

export async function deleteApiV1LivechatRoomRidPriority(
  args: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.room[':rid'].priority.$delete(args, options))
}

export async function postApiV1LivechatRoomsRemoveAllClosedRooms(
  args: InferRequestType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['rooms.removeAllClosedRooms'].$post(args, options),
  )
}

export async function postApiV1LivechatRoomsDelete(
  args: InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['rooms.delete'].$post(args, options))
}

export async function postApiV1LivechatRoomResumeOnHold(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['room.resumeOnHold'].$post(args, options))
}

export async function getApiV1LivechatRoomsFilters(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.rooms.filters.$get(args, options))
}

export async function postApiV1LivechatVisitorDepartmentTransfer(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.visitor['department.transfer'].$post(args, options),
  )
}

export async function getApiV1LivechatDepartment(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department.$get(args, options))
}

export async function postApiV1LivechatDepartment(
  args: InferRequestType<typeof client.api.v1.livechat.department.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department.$post(args, options))
}

export async function getApiV1LivechatDepartmentId(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].$get(args, options))
}

export async function putApiV1LivechatDepartmentId(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].$put(args, options))
}

export async function deleteApiV1LivechatDepartmentId(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].$delete(args, options))
}

export async function getApiV1LivechatDepartmentAutocomplete(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['department.autocomplete'].$get(args, options))
}

export async function getApiV1LivechatDepartmentIdAgents(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].agents.$get(args, options))
}

export async function postApiV1LivechatDepartmentIdAgents(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].agents.$post(args, options))
}

export async function getApiV1LivechatDepartmentListByIds(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['department.listByIds'].$get(args, options))
}

export async function getApiV1LivechatAnalyticsDepartmentsAmountOfChats(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsAverageServiceTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['average-service-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsTotalServiceTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['total-service-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsAverageWaitingTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsTotalTransferredChats(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChats(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChats(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(args, options),
  )
}

export async function getApiV1LivechatDepartmentsArchived(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.departments.archived.$get(args, options))
}

export async function postApiV1LivechatDepartmentIdArchive(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.department[':_id'].archive.$post(args, options))
}

export async function postApiV1LivechatDepartmentIdUnarchive(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.department[':_id'].unarchive.$post(args, options),
  )
}

export async function getApiV1LivechatDepartmentIsDepartmentCreationAvailable(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(args, options),
  )
}

export async function postApiV1LivechatCustomFieldsSave(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom-fields.save'].$post(args, options))
}

export async function postApiV1LivechatCustomField(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom.field'].$post(args, options))
}

export async function postApiV1LivechatCustomFields(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom.fields'].$post(args, options))
}

export async function getApiV1LivechatCustomFields2(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom-fields'].$get(args, options))
}

export async function getApiV1LivechatCustomFieldsId(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom-fields'][':_id'].$get(args, options))
}

export async function postApiV1LivechatCustomFieldsDelete(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['custom-fields.delete'].$post(args, options))
}

export async function postApiV1LivechatPageVisited(
  args: InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['page.visited'].$post(args, options))
}

export async function postApiV1LivechatTranscript(
  args: InferRequestType<typeof client.api.v1.livechat.transcript.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.transcript.$post(args, options))
}

export async function postApiV1LivechatTranscriptRid(
  args: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.transcript[':rid'].$post(args, options))
}

export async function deleteApiV1LivechatTranscriptRid(
  args: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.transcript[':rid'].$delete(args, options))
}

export async function postApiV1OmnichannelRidRequestTranscript(
  args: InferRequestType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.omnichannel[':rid']['request-transcript'].$post(args, options),
  )
}

export async function getApiV1LivechatAgentsAgentIdDepartments(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.agents[':agentId'].departments.$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsAgentsAverageServiceTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.agents['average-service-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsAgentsTotalServiceTime(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.agents['total-service-time'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsAgentsAvailableForServiceHistory(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(args, options),
  )
}

export async function getApiV1LivechatAppearance(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.appearance.$get(args, options))
}

export async function postApiV1LivechatAppearance(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.appearance.$post(args, options))
}

export async function getApiV1LivechatBusinessHours(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['business-hours'].$get(args, options))
}

export async function getApiV1LivechatBusinessHour(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['business-hour'].$get(args, options))
}

export async function postApiV1LivechatBusinessHoursRemove(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['business-hours.remove'].$post(args, options))
}

export async function postApiV1LivechatBusinessHoursSave(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['business-hours.save'].$post(args, options))
}

export async function getApiV1LivechatAnalyticsDashboardsConversationTotalizers(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizers(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChatsTotalizers(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsProductivityTotalizers(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChartsChats(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards.charts.chats.$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgent(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChartsAgentsStatus(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartment(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsChartsTimings(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards.charts.timings.$get(args, options),
  )
}

export async function getApiV1LivechatLivechatAnalyticsDashboardsChartsData(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(args, options),
  )
}

export async function getApiV1LivechatInquiriesList(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['inquiries.list'].$get(args, options))
}

export async function postApiV1LivechatInquiriesTake(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['inquiries.take'].$post(args, options))
}

export async function getApiV1LivechatInquiriesQueuedForUser(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['inquiries.queuedForUser'].$get(args, options))
}

export async function getApiV1LivechatInquiriesGetOne(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['inquiries.getOne'].$get(args, options))
}

export async function putApiV1LivechatInquirySetSLA(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['inquiry.setSLA'].$put(args, options))
}

export async function postApiV1LivechatInquiriesReturnAsInquiry(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['inquiries.returnAsInquiry'].$post(args, options),
  )
}

export async function getApiV1LivechatIntegrationsSettings(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['integrations.settings'].$get(args, options))
}

export async function getApiV1LivechatQueue(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.queue.$get(args, options))
}

export async function postApiV1LivechatSmsIncomingService(
  args: InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['sms-incoming'][':service'].$post(args, options),
  )
}

export async function getApiV1LivechatConfigRouting(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.config.routing.$get(args, options))
}

export async function getApiV1LivechatTriggers(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.triggers.$get(args, options))
}

export async function postApiV1LivechatTriggers(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.triggers.$post(args, options))
}

export async function getApiV1LivechatTriggersId(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.triggers[':_id'].$get(args, options))
}

export async function deleteApiV1LivechatTriggersId(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.triggers[':_id'].$delete(args, options))
}

export async function postApiV1LivechatTriggersExternalServiceTest(
  args: InferRequestType<
    (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.triggers['external-service'].test.$post(args, options),
  )
}

export async function getApiV1LivechatMonitors(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.monitors.$get(args, options))
}

export async function getApiV1LivechatMonitorsUsername(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.monitors[':username'].$get(args, options))
}

export async function postApiV1LivechatMonitorsDelete(
  args: InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['monitors.delete'].$post(args, options))
}

export async function postApiV1LivechatMonitorsCreate(
  args: InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['monitors.create'].$post(args, options))
}

export async function getApiV1LivechatPriorities(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.priorities.$get(args, options))
}

export async function getApiV1LivechatPrioritiesPriorityId(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.priorities[':priorityId'].$get(args, options))
}

export async function putApiV1LivechatPrioritiesPriorityId(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.priorities[':priorityId'].$put(args, options))
}

export async function getApiV1LivechatPrioritiesReset(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['priorities.reset'].$get(args, options))
}

export async function postApiV1LivechatPrioritiesReset(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['priorities.reset'].$post(args, options))
}

export async function getApiV1LivechatTags(
  args: InferRequestType<typeof client.api.v1.livechat.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.tags.$get(args, options))
}

export async function getApiV1LivechatTagsTagId(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.tags[':tagId'].$get(args, options))
}

export async function postApiV1LivechatTagsDelete(
  args: InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['tags.delete'].$post(args, options))
}

export async function postApiV1LivechatTagsSave(
  args: InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['tags.save'].$post(args, options))
}

export async function getApiV1LivechatUnits(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units.$get(args, options))
}

export async function postApiV1LivechatUnits(
  args: InferRequestType<typeof client.api.v1.livechat.units.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units.$post(args, options))
}

export async function getApiV1LivechatUnitsId(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units[':id'].$get(args, options))
}

export async function postApiV1LivechatUnitsId(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units[':id'].$post(args, options))
}

export async function deleteApiV1LivechatUnitsId(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units[':id'].$delete(args, options))
}

export async function getApiV1LivechatUnitsUnitIdMonitors(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.units[':unitId'].monitors.$get(args, options))
}

export async function getApiV1LivechatUnitsUnitIdDepartmentsAvailable(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.units[':unitId'].departments.available.$get(args, options),
  )
}

export async function getApiV1LivechatUnitsUnitIdDepartments(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.units[':unitId'].departments.$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsConversationsByStatus(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsConversationsByDepartment(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsConversationsByTags(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsConversationsByAgent(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(args, options),
  )
}

export async function getApiV1LivechatAnalyticsDashboardsConversationsBySource(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(args, options),
  )
}

export async function getApiV1LivechatSla(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.sla.$get(args, options))
}

export async function postApiV1LivechatSla(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.sla.$post(args, options))
}

export async function getApiV1LivechatSlaSlaId(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.sla[':slaId'].$get(args, options))
}

export async function putApiV1LivechatSlaSlaId(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.sla[':slaId'].$put(args, options))
}

export async function deleteApiV1LivechatSlaSlaId(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.sla[':slaId'].$delete(args, options))
}

export async function postApiV1LivechatVisitor(
  args: InferRequestType<typeof client.api.v1.livechat.visitor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.visitor.$post(args, options))
}

export async function getApiV1LivechatVisitorToken(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.visitor[':token'].$get(args, options))
}

export async function deleteApiV1LivechatVisitorToken(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.visitor[':token'].$delete(args, options))
}

export async function getApiV1LivechatVisitorsInfo(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['visitors.info'].$get(args, options))
}

export async function getApiV1LivechatVisitorTokenRoom(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.visitor[':token'].room.$get(args, options))
}

export async function getApiV1LivechatVisitorsSearch(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['visitors.search'].$get(args, options))
}

export async function getApiV1LivechatVisitorsPagesVisitedRoomId(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(args, options),
  )
}

export async function getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorId(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorId(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1LivechatVisitorsAutocomplete(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['visitors.autocomplete'].$get(args, options))
}

export async function postApiV1LivechatVisitorStatus(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['visitor.status'].$post(args, options))
}

export async function getApiV1CannedResponses(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['canned-responses'].$get(args, options))
}

export async function postApiV1CannedResponses(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['canned-responses'].$post(args, options))
}

export async function getApiV1CannedResponsesGet(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['canned-responses.get'].$get(args, options))
}

export async function getApiV1CannedResponsesId(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['canned-responses'][':_id'].$get(args, options))
}

export async function deleteApiV1CannedResponsesId(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['canned-responses'][':_id'].$delete(args, options))
}

export async function postApiV1LivechatMessage(
  args: InferRequestType<typeof client.api.v1.livechat.message.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.message.$post(args, options))
}

export async function postApiV1LivechatMessages(
  args: InferRequestType<typeof client.api.v1.livechat.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.messages.$post(args, options))
}

export async function getApiV1LivechatMessageId(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.message[':_id'].$get(args, options))
}

export async function putApiV1LivechatMessageId(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.message[':_id'].$put(args, options))
}

export async function deleteApiV1LivechatMessageId(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat.message[':_id'].$delete(args, options))
}

export async function getApiV1LivechatMessagesHistoryRid(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['messages.history'][':rid'].$get(args, options))
}

export async function postApiV1LivechatOfflineMessage(
  args: InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['offline.message'].$post(args, options))
}

export async function getApiV1LivechatRidMessages(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat[':rid'].messages.$get(args, options))
}

export async function postApiV1OmnichannelIntegrations(
  args: InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.omnichannel.integrations.$post(args, options))
}

export async function postApiV1LivechatWebhookTest(
  args: InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.livechat['webhook.test'].$post(args, options))
}
