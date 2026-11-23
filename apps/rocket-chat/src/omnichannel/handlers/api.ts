import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1CannedResponsesIdRoute,
  deleteApiV1LivechatDepartmentIdRoute,
  deleteApiV1LivechatMessageIdRoute,
  deleteApiV1LivechatRoomRidPriorityRoute,
  deleteApiV1LivechatSlaSlaIdRoute,
  deleteApiV1LivechatTranscriptRidRoute,
  deleteApiV1LivechatTriggersIdRoute,
  deleteApiV1LivechatUnitsIdRoute,
  deleteApiV1LivechatUsersTypeIdRoute,
  deleteApiV1LivechatVisitorTokenRoute,
  getApiV1CannedResponsesGetRoute,
  getApiV1CannedResponsesIdRoute,
  getApiV1CannedResponsesRoute,
  getApiV1LivechatAgentInfoRidTokenRoute,
  getApiV1LivechatAgentNextTokenRoute,
  getApiV1LivechatAgentsAgentIdDepartmentsRoute,
  getApiV1LivechatAnalyticsAgentOverviewRoute,
  getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute,
  getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute,
  getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute,
  getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute,
  getApiV1LivechatAnalyticsDashboardsChartsChatsRoute,
  getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute,
  getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute,
  getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute,
  getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute,
  getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute,
  getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute,
  getApiV1LivechatAnalyticsOverviewRoute,
  getApiV1LivechatAppearanceRoute,
  getApiV1LivechatBusinessHourRoute,
  getApiV1LivechatBusinessHoursRoute,
  getApiV1LivechatConfigRoute,
  getApiV1LivechatConfigRoutingRoute,
  getApiV1LivechatCustomFields2Route,
  getApiV1LivechatCustomFieldsIdRoute,
  getApiV1LivechatDepartmentAutocompleteRoute,
  getApiV1LivechatDepartmentIdAgentsRoute,
  getApiV1LivechatDepartmentIdRoute,
  getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute,
  getApiV1LivechatDepartmentListByIdsRoute,
  getApiV1LivechatDepartmentRoute,
  getApiV1LivechatDepartmentsArchivedRoute,
  getApiV1LivechatInquiriesGetOneRoute,
  getApiV1LivechatInquiriesListRoute,
  getApiV1LivechatInquiriesQueuedForUserRoute,
  getApiV1LivechatIntegrationsSettingsRoute,
  getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute,
  getApiV1LivechatMessageIdRoute,
  getApiV1LivechatMessagesHistoryRidRoute,
  getApiV1LivechatMonitorsRoute,
  getApiV1LivechatMonitorsUsernameRoute,
  getApiV1LivechatPrioritiesPriorityIdRoute,
  getApiV1LivechatPrioritiesResetRoute,
  getApiV1LivechatPrioritiesRoute,
  getApiV1LivechatQueueRoute,
  getApiV1LivechatRidMessagesRoute,
  getApiV1LivechatRoomJoinRoute,
  getApiV1LivechatRoomRoute,
  getApiV1LivechatRoomsFiltersRoute,
  getApiV1LivechatRoomsRoute,
  getApiV1LivechatSlaRoute,
  getApiV1LivechatSlaSlaIdRoute,
  getApiV1LivechatTagsRoute,
  getApiV1LivechatTagsTagIdRoute,
  getApiV1LivechatTransferHistoryRidRoute,
  getApiV1LivechatTriggersIdRoute,
  getApiV1LivechatTriggersRoute,
  getApiV1LivechatUnitsIdRoute,
  getApiV1LivechatUnitsRoute,
  getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute,
  getApiV1LivechatUnitsUnitIdDepartmentsRoute,
  getApiV1LivechatUnitsUnitIdMonitorsRoute,
  getApiV1LivechatUsersTypeIdRoute,
  getApiV1LivechatUsersTypeRoute,
  getApiV1LivechatVisitorsAutocompleteRoute,
  getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute,
  getApiV1LivechatVisitorsInfoRoute,
  getApiV1LivechatVisitorsPagesVisitedRoomIdRoute,
  getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute,
  getApiV1LivechatVisitorsSearchRoute,
  getApiV1LivechatVisitorTokenRoomRoute,
  getApiV1LivechatVisitorTokenRoute,
  getApiV1OmnichannelContactRoute,
  getApiV1OmnichannelContactsChannelsRoute,
  getApiV1OmnichannelContactsCheckExistenceRoute,
  getApiV1OmnichannelContactSearchRoute,
  getApiV1OmnichannelContactsGetRoute,
  getApiV1OmnichannelContactsHistoryRoute,
  getApiV1OmnichannelContactsSearchRoute,
  postApiV1CannedResponsesRoute,
  postApiV1LivechatAgentsSaveInfoRoute,
  postApiV1LivechatAgentStatusRoute,
  postApiV1LivechatAppearanceRoute,
  postApiV1LivechatBusinessHoursRemoveRoute,
  postApiV1LivechatBusinessHoursSaveRoute,
  postApiV1LivechatCustomFieldRoute,
  postApiV1LivechatCustomFieldsDeleteRoute,
  postApiV1LivechatCustomFieldsRoute,
  postApiV1LivechatCustomFieldsSaveRoute,
  postApiV1LivechatDepartmentIdAgentsRoute,
  postApiV1LivechatDepartmentIdArchiveRoute,
  postApiV1LivechatDepartmentIdUnarchiveRoute,
  postApiV1LivechatDepartmentRoute,
  postApiV1LivechatInquiriesReturnAsInquiryRoute,
  postApiV1LivechatInquiriesTakeRoute,
  postApiV1LivechatMessageRoute,
  postApiV1LivechatMessagesRoute,
  postApiV1LivechatMonitorsCreateRoute,
  postApiV1LivechatMonitorsDeleteRoute,
  postApiV1LivechatOfflineMessageRoute,
  postApiV1LivechatPageVisitedRoute,
  postApiV1LivechatPrioritiesResetRoute,
  postApiV1LivechatRoomCloseByUserRoute,
  postApiV1LivechatRoomCloseRoute,
  postApiV1LivechatRoomForwardRoute,
  postApiV1LivechatRoomOnHoldRoute,
  postApiV1LivechatRoomResumeOnHoldRoute,
  postApiV1LivechatRoomRidPriorityRoute,
  postApiV1LivechatRoomSaveInfoRoute,
  postApiV1LivechatRoomsDeleteRoute,
  postApiV1LivechatRoomsRemoveAllClosedRoomsRoute,
  postApiV1LivechatRoomSurveyRoute,
  postApiV1LivechatSlaRoute,
  postApiV1LivechatSmsIncomingServiceRoute,
  postApiV1LivechatTagsDeleteRoute,
  postApiV1LivechatTagsSaveRoute,
  postApiV1LivechatTranscriptRidRoute,
  postApiV1LivechatTranscriptRoute,
  postApiV1LivechatTriggersExternalServiceTestRoute,
  postApiV1LivechatTriggersRoute,
  postApiV1LivechatUnitsIdRoute,
  postApiV1LivechatUnitsRoute,
  postApiV1LivechatUploadRidRoute,
  postApiV1LivechatUsersTypeRoute,
  postApiV1LivechatVisitorDepartmentTransferRoute,
  postApiV1LivechatVisitorRoute,
  postApiV1LivechatVisitorStatusRoute,
  postApiV1LivechatWebhookTestRoute,
  postApiV1OmnichannelContactRoute,
  postApiV1OmnichannelContactsBlockRoute,
  postApiV1OmnichannelContactsConflictsRoute,
  postApiV1OmnichannelContactsRoute,
  postApiV1OmnichannelContactsUnblockRoute,
  postApiV1OmnichannelContactsUpdateRoute,
  postApiV1OmnichannelIntegrationsRoute,
  postApiV1OmnichannelRidRequestTranscriptRoute,
  putApiV1LivechatDepartmentIdRoute,
  putApiV1LivechatInquirySetSLARoute,
  putApiV1LivechatMessageIdRoute,
  putApiV1LivechatPrioritiesPriorityIdRoute,
  putApiV1LivechatSlaSlaIdRoute,
} from '../routes'

export const postApiV1LivechatUsersTypeRouteHandler: RouteHandler<
  typeof postApiV1LivechatUsersTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUsersTypeRouteHandler: RouteHandler<
  typeof getApiV1LivechatUsersTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUsersTypeIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatUsersTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatUsersTypeIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatUsersTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAgentInfoRidTokenRouteHandler: RouteHandler<
  typeof getApiV1LivechatAgentInfoRidTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAgentNextTokenRouteHandler: RouteHandler<
  typeof getApiV1LivechatAgentNextTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatAgentsSaveInfoRouteHandler: RouteHandler<
  typeof postApiV1LivechatAgentsSaveInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatAgentStatusRouteHandler: RouteHandler<
  typeof postApiV1LivechatAgentStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactSearchRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactsRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactsUpdateRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactsConflictsRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactsConflictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactsGetRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactsSearchRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactsChannelsRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactsHistoryRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OmnichannelContactsCheckExistenceRouteHandler: RouteHandler<
  typeof getApiV1OmnichannelContactsCheckExistenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactsBlockRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactsBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelContactsUnblockRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelContactsUnblockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsAgentOverviewRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsAgentOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsOverviewRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatConfigRouteHandler: RouteHandler<
  typeof getApiV1LivechatConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatRoomsRouteHandler: RouteHandler<
  typeof getApiV1LivechatRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatRoomRouteHandler: RouteHandler<
  typeof getApiV1LivechatRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomCloseRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomCloseByUserRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomCloseByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatRoomJoinRouteHandler: RouteHandler<
  typeof getApiV1LivechatRoomJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomSaveInfoRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomSaveInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomForwardRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomForwardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatTransferHistoryRidRouteHandler: RouteHandler<
  typeof getApiV1LivechatTransferHistoryRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomSurveyRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomSurveyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomOnHoldRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomOnHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatUploadRidRouteHandler: RouteHandler<
  typeof postApiV1LivechatUploadRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomRidPriorityRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomRidPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatRoomRidPriorityRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatRoomRidPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomsRemoveAllClosedRoomsRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomsRemoveAllClosedRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomsDeleteRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatRoomResumeOnHoldRouteHandler: RouteHandler<
  typeof postApiV1LivechatRoomResumeOnHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatRoomsFiltersRouteHandler: RouteHandler<
  typeof getApiV1LivechatRoomsFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatVisitorDepartmentTransferRouteHandler: RouteHandler<
  typeof postApiV1LivechatVisitorDepartmentTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatDepartmentRouteHandler: RouteHandler<
  typeof postApiV1LivechatDepartmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LivechatDepartmentIdRouteHandler: RouteHandler<
  typeof putApiV1LivechatDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatDepartmentIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatDepartmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentAutocompleteRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentIdAgentsRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatDepartmentIdAgentsRouteHandler: RouteHandler<
  typeof postApiV1LivechatDepartmentIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentListByIdsRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentListByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentsArchivedRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentsArchivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatDepartmentIdArchiveRouteHandler: RouteHandler<
  typeof postApiV1LivechatDepartmentIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatDepartmentIdUnarchiveRouteHandler: RouteHandler<
  typeof postApiV1LivechatDepartmentIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatDepartmentIsDepartmentCreationAvailableRouteHandler: RouteHandler<
  typeof getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatCustomFieldsSaveRouteHandler: RouteHandler<
  typeof postApiV1LivechatCustomFieldsSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatCustomFieldRouteHandler: RouteHandler<
  typeof postApiV1LivechatCustomFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatCustomFieldsRouteHandler: RouteHandler<
  typeof postApiV1LivechatCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatCustomFields2RouteHandler: RouteHandler<
  typeof getApiV1LivechatCustomFields2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatCustomFieldsIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatCustomFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatCustomFieldsDeleteRouteHandler: RouteHandler<
  typeof postApiV1LivechatCustomFieldsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatPageVisitedRouteHandler: RouteHandler<
  typeof postApiV1LivechatPageVisitedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTranscriptRouteHandler: RouteHandler<
  typeof postApiV1LivechatTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTranscriptRidRouteHandler: RouteHandler<
  typeof postApiV1LivechatTranscriptRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatTranscriptRidRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatTranscriptRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelRidRequestTranscriptRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelRidRequestTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAgentsAgentIdDepartmentsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAgentsAgentIdDepartmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsAgentsAverageServiceTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsAgentsTotalServiceTimeRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAppearanceRouteHandler: RouteHandler<
  typeof getApiV1LivechatAppearanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatAppearanceRouteHandler: RouteHandler<
  typeof postApiV1LivechatAppearanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatBusinessHoursRouteHandler: RouteHandler<
  typeof getApiV1LivechatBusinessHoursRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatBusinessHourRouteHandler: RouteHandler<
  typeof getApiV1LivechatBusinessHourRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatBusinessHoursRemoveRouteHandler: RouteHandler<
  typeof postApiV1LivechatBusinessHoursRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatBusinessHoursSaveRouteHandler: RouteHandler<
  typeof postApiV1LivechatBusinessHoursSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationTotalizersRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChatsTotalizersRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChartsChatsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChartsChatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsChartsTimingsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRouteHandler: RouteHandler<
  typeof getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatInquiriesListRouteHandler: RouteHandler<
  typeof getApiV1LivechatInquiriesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatInquiriesTakeRouteHandler: RouteHandler<
  typeof postApiV1LivechatInquiriesTakeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatInquiriesQueuedForUserRouteHandler: RouteHandler<
  typeof getApiV1LivechatInquiriesQueuedForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatInquiriesGetOneRouteHandler: RouteHandler<
  typeof getApiV1LivechatInquiriesGetOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LivechatInquirySetSLARouteHandler: RouteHandler<
  typeof putApiV1LivechatInquirySetSLARoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatInquiriesReturnAsInquiryRouteHandler: RouteHandler<
  typeof postApiV1LivechatInquiriesReturnAsInquiryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatIntegrationsSettingsRouteHandler: RouteHandler<
  typeof getApiV1LivechatIntegrationsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatQueueRouteHandler: RouteHandler<
  typeof getApiV1LivechatQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatSmsIncomingServiceRouteHandler: RouteHandler<
  typeof postApiV1LivechatSmsIncomingServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatConfigRoutingRouteHandler: RouteHandler<
  typeof getApiV1LivechatConfigRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatTriggersRouteHandler: RouteHandler<
  typeof getApiV1LivechatTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTriggersRouteHandler: RouteHandler<
  typeof postApiV1LivechatTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatTriggersIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatTriggersIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTriggersExternalServiceTestRouteHandler: RouteHandler<
  typeof postApiV1LivechatTriggersExternalServiceTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatMonitorsRouteHandler: RouteHandler<
  typeof getApiV1LivechatMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatMonitorsUsernameRouteHandler: RouteHandler<
  typeof getApiV1LivechatMonitorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatMonitorsDeleteRouteHandler: RouteHandler<
  typeof postApiV1LivechatMonitorsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatMonitorsCreateRouteHandler: RouteHandler<
  typeof postApiV1LivechatMonitorsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatPrioritiesRouteHandler: RouteHandler<
  typeof getApiV1LivechatPrioritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatPrioritiesPriorityIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatPrioritiesPriorityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LivechatPrioritiesPriorityIdRouteHandler: RouteHandler<
  typeof putApiV1LivechatPrioritiesPriorityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatPrioritiesResetRouteHandler: RouteHandler<
  typeof postApiV1LivechatPrioritiesResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatPrioritiesResetRouteHandler: RouteHandler<
  typeof getApiV1LivechatPrioritiesResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatTagsRouteHandler: RouteHandler<
  typeof getApiV1LivechatTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatTagsTagIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatTagsTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTagsDeleteRouteHandler: RouteHandler<
  typeof postApiV1LivechatTagsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatTagsSaveRouteHandler: RouteHandler<
  typeof postApiV1LivechatTagsSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatUnitsRouteHandler: RouteHandler<
  typeof postApiV1LivechatUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUnitsRouteHandler: RouteHandler<
  typeof getApiV1LivechatUnitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatUnitsIdRouteHandler: RouteHandler<
  typeof postApiV1LivechatUnitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatUnitsIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatUnitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUnitsIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatUnitsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUnitsUnitIdMonitorsRouteHandler: RouteHandler<
  typeof getApiV1LivechatUnitsUnitIdMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUnitsUnitIdDepartmentsAvailableRouteHandler: RouteHandler<
  typeof getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatUnitsUnitIdDepartmentsRouteHandler: RouteHandler<
  typeof getApiV1LivechatUnitsUnitIdDepartmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationsByStatusRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationsByTagsRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationsByAgentRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatAnalyticsDashboardsConversationsBySourceRouteHandler: RouteHandler<
  typeof getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatSlaRouteHandler: RouteHandler<
  typeof getApiV1LivechatSlaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatSlaRouteHandler: RouteHandler<
  typeof postApiV1LivechatSlaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatSlaSlaIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatSlaSlaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LivechatSlaSlaIdRouteHandler: RouteHandler<
  typeof putApiV1LivechatSlaSlaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatSlaSlaIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatSlaSlaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatVisitorRouteHandler: RouteHandler<
  typeof postApiV1LivechatVisitorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorTokenRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatVisitorTokenRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatVisitorTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsInfoRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorTokenRoomRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorTokenRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsSearchRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsPagesVisitedRoomIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsPagesVisitedRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatVisitorsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV1LivechatVisitorsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatVisitorStatusRouteHandler: RouteHandler<
  typeof postApiV1LivechatVisitorStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CannedResponsesRouteHandler: RouteHandler<
  typeof postApiV1CannedResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CannedResponsesRouteHandler: RouteHandler<
  typeof getApiV1CannedResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CannedResponsesGetRouteHandler: RouteHandler<
  typeof getApiV1CannedResponsesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CannedResponsesIdRouteHandler: RouteHandler<
  typeof getApiV1CannedResponsesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CannedResponsesIdRouteHandler: RouteHandler<
  typeof deleteApiV1CannedResponsesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatMessageRouteHandler: RouteHandler<
  typeof postApiV1LivechatMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatMessagesRouteHandler: RouteHandler<
  typeof postApiV1LivechatMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LivechatMessageIdRouteHandler: RouteHandler<
  typeof putApiV1LivechatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatMessageIdRouteHandler: RouteHandler<
  typeof getApiV1LivechatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LivechatMessageIdRouteHandler: RouteHandler<
  typeof deleteApiV1LivechatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatMessagesHistoryRidRouteHandler: RouteHandler<
  typeof getApiV1LivechatMessagesHistoryRidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatOfflineMessageRouteHandler: RouteHandler<
  typeof postApiV1LivechatOfflineMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LivechatRidMessagesRouteHandler: RouteHandler<
  typeof getApiV1LivechatRidMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OmnichannelIntegrationsRouteHandler: RouteHandler<
  typeof postApiV1OmnichannelIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LivechatWebhookTestRouteHandler: RouteHandler<
  typeof postApiV1LivechatWebhookTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
