import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteApiV1CannedResponsesIdRouteHandler,
  deleteApiV1LivechatDepartmentIdRouteHandler,
  deleteApiV1LivechatMessageIdRouteHandler,
  deleteApiV1LivechatRoomRidPriorityRouteHandler,
  deleteApiV1LivechatSlaSlaIdRouteHandler,
  deleteApiV1LivechatTranscriptRidRouteHandler,
  deleteApiV1LivechatTriggersIdRouteHandler,
  deleteApiV1LivechatUnitsIdRouteHandler,
  deleteApiV1LivechatUsersTypeIdRouteHandler,
  deleteApiV1LivechatVisitorTokenRouteHandler,
  getApiV1CannedResponsesGetRouteHandler,
  getApiV1CannedResponsesIdRouteHandler,
  getApiV1CannedResponsesRouteHandler,
  getApiV1LivechatAgentInfoRidTokenRouteHandler,
  getApiV1LivechatAgentNextTokenRouteHandler,
  getApiV1LivechatAgentsAgentIdDepartmentsRouteHandler,
  getApiV1LivechatAnalyticsAgentOverviewRouteHandler,
  getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRouteHandler,
  getApiV1LivechatAnalyticsAgentsAverageServiceTimeRouteHandler,
  getApiV1LivechatAnalyticsAgentsTotalServiceTimeRouteHandler,
  getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChartsChatsRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChartsTimingsRouteHandler,
  getApiV1LivechatAnalyticsDashboardsChatsTotalizersRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationsByAgentRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationsBySourceRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationsByStatusRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationsByTagsRouteHandler,
  getApiV1LivechatAnalyticsDashboardsConversationTotalizersRouteHandler,
  getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRouteHandler,
  getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRouteHandler,
  getApiV1LivechatAnalyticsOverviewRouteHandler,
  getApiV1LivechatAppearanceRouteHandler,
  getApiV1LivechatBusinessHourRouteHandler,
  getApiV1LivechatBusinessHoursRouteHandler,
  getApiV1LivechatConfigRouteHandler,
  getApiV1LivechatConfigRoutingRouteHandler,
  getApiV1LivechatCustomFields2RouteHandler,
  getApiV1LivechatCustomFieldsIdRouteHandler,
  getApiV1LivechatDepartmentAutocompleteRouteHandler,
  getApiV1LivechatDepartmentIdAgentsRouteHandler,
  getApiV1LivechatDepartmentIdRouteHandler,
  getApiV1LivechatDepartmentIsDepartmentCreationAvailableRouteHandler,
  getApiV1LivechatDepartmentListByIdsRouteHandler,
  getApiV1LivechatDepartmentRouteHandler,
  getApiV1LivechatDepartmentsArchivedRouteHandler,
  getApiV1LivechatInquiriesGetOneRouteHandler,
  getApiV1LivechatInquiriesListRouteHandler,
  getApiV1LivechatInquiriesQueuedForUserRouteHandler,
  getApiV1LivechatIntegrationsSettingsRouteHandler,
  getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRouteHandler,
  getApiV1LivechatMessageIdRouteHandler,
  getApiV1LivechatMessagesHistoryRidRouteHandler,
  getApiV1LivechatMonitorsRouteHandler,
  getApiV1LivechatMonitorsUsernameRouteHandler,
  getApiV1LivechatPrioritiesPriorityIdRouteHandler,
  getApiV1LivechatPrioritiesResetRouteHandler,
  getApiV1LivechatPrioritiesRouteHandler,
  getApiV1LivechatQueueRouteHandler,
  getApiV1LivechatRidMessagesRouteHandler,
  getApiV1LivechatRoomJoinRouteHandler,
  getApiV1LivechatRoomRouteHandler,
  getApiV1LivechatRoomsFiltersRouteHandler,
  getApiV1LivechatRoomsRouteHandler,
  getApiV1LivechatSlaRouteHandler,
  getApiV1LivechatSlaSlaIdRouteHandler,
  getApiV1LivechatTagsRouteHandler,
  getApiV1LivechatTagsTagIdRouteHandler,
  getApiV1LivechatTransferHistoryRidRouteHandler,
  getApiV1LivechatTriggersIdRouteHandler,
  getApiV1LivechatTriggersRouteHandler,
  getApiV1LivechatUnitsIdRouteHandler,
  getApiV1LivechatUnitsRouteHandler,
  getApiV1LivechatUnitsUnitIdDepartmentsAvailableRouteHandler,
  getApiV1LivechatUnitsUnitIdDepartmentsRouteHandler,
  getApiV1LivechatUnitsUnitIdMonitorsRouteHandler,
  getApiV1LivechatUsersTypeIdRouteHandler,
  getApiV1LivechatUsersTypeRouteHandler,
  getApiV1LivechatVisitorsAutocompleteRouteHandler,
  getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRouteHandler,
  getApiV1LivechatVisitorsInfoRouteHandler,
  getApiV1LivechatVisitorsPagesVisitedRoomIdRouteHandler,
  getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRouteHandler,
  getApiV1LivechatVisitorsSearchRouteHandler,
  getApiV1LivechatVisitorTokenRoomRouteHandler,
  getApiV1LivechatVisitorTokenRouteHandler,
  getApiV1OmnichannelContactRouteHandler,
  getApiV1OmnichannelContactsChannelsRouteHandler,
  getApiV1OmnichannelContactsCheckExistenceRouteHandler,
  getApiV1OmnichannelContactSearchRouteHandler,
  getApiV1OmnichannelContactsGetRouteHandler,
  getApiV1OmnichannelContactsHistoryRouteHandler,
  getApiV1OmnichannelContactsSearchRouteHandler,
  postApiV1CannedResponsesRouteHandler,
  postApiV1LivechatAgentsSaveInfoRouteHandler,
  postApiV1LivechatAgentStatusRouteHandler,
  postApiV1LivechatAppearanceRouteHandler,
  postApiV1LivechatBusinessHoursRemoveRouteHandler,
  postApiV1LivechatBusinessHoursSaveRouteHandler,
  postApiV1LivechatCustomFieldRouteHandler,
  postApiV1LivechatCustomFieldsDeleteRouteHandler,
  postApiV1LivechatCustomFieldsRouteHandler,
  postApiV1LivechatCustomFieldsSaveRouteHandler,
  postApiV1LivechatDepartmentIdAgentsRouteHandler,
  postApiV1LivechatDepartmentIdArchiveRouteHandler,
  postApiV1LivechatDepartmentIdUnarchiveRouteHandler,
  postApiV1LivechatDepartmentRouteHandler,
  postApiV1LivechatInquiriesReturnAsInquiryRouteHandler,
  postApiV1LivechatInquiriesTakeRouteHandler,
  postApiV1LivechatMessageRouteHandler,
  postApiV1LivechatMessagesRouteHandler,
  postApiV1LivechatMonitorsCreateRouteHandler,
  postApiV1LivechatMonitorsDeleteRouteHandler,
  postApiV1LivechatOfflineMessageRouteHandler,
  postApiV1LivechatPageVisitedRouteHandler,
  postApiV1LivechatPrioritiesResetRouteHandler,
  postApiV1LivechatRoomCloseByUserRouteHandler,
  postApiV1LivechatRoomCloseRouteHandler,
  postApiV1LivechatRoomForwardRouteHandler,
  postApiV1LivechatRoomOnHoldRouteHandler,
  postApiV1LivechatRoomResumeOnHoldRouteHandler,
  postApiV1LivechatRoomRidPriorityRouteHandler,
  postApiV1LivechatRoomSaveInfoRouteHandler,
  postApiV1LivechatRoomsDeleteRouteHandler,
  postApiV1LivechatRoomsRemoveAllClosedRoomsRouteHandler,
  postApiV1LivechatRoomSurveyRouteHandler,
  postApiV1LivechatSlaRouteHandler,
  postApiV1LivechatSmsIncomingServiceRouteHandler,
  postApiV1LivechatTagsDeleteRouteHandler,
  postApiV1LivechatTagsSaveRouteHandler,
  postApiV1LivechatTranscriptRidRouteHandler,
  postApiV1LivechatTranscriptRouteHandler,
  postApiV1LivechatTriggersExternalServiceTestRouteHandler,
  postApiV1LivechatTriggersRouteHandler,
  postApiV1LivechatUnitsIdRouteHandler,
  postApiV1LivechatUnitsRouteHandler,
  postApiV1LivechatUploadRidRouteHandler,
  postApiV1LivechatUsersTypeRouteHandler,
  postApiV1LivechatVisitorDepartmentTransferRouteHandler,
  postApiV1LivechatVisitorRouteHandler,
  postApiV1LivechatVisitorStatusRouteHandler,
  postApiV1LivechatWebhookTestRouteHandler,
  postApiV1OmnichannelContactRouteHandler,
  postApiV1OmnichannelContactsBlockRouteHandler,
  postApiV1OmnichannelContactsConflictsRouteHandler,
  postApiV1OmnichannelContactsRouteHandler,
  postApiV1OmnichannelContactsUnblockRouteHandler,
  postApiV1OmnichannelContactsUpdateRouteHandler,
  postApiV1OmnichannelIntegrationsRouteHandler,
  postApiV1OmnichannelRidRequestTranscriptRouteHandler,
  putApiV1LivechatDepartmentIdRouteHandler,
  putApiV1LivechatInquirySetSLARouteHandler,
  putApiV1LivechatMessageIdRouteHandler,
  putApiV1LivechatPrioritiesPriorityIdRouteHandler,
  putApiV1LivechatSlaSlaIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1LivechatUsersTypeRoute, postApiV1LivechatUsersTypeRouteHandler)
  .openapi(getApiV1LivechatUsersTypeRoute, getApiV1LivechatUsersTypeRouteHandler)
  .openapi(getApiV1LivechatUsersTypeIdRoute, getApiV1LivechatUsersTypeIdRouteHandler)
  .openapi(deleteApiV1LivechatUsersTypeIdRoute, deleteApiV1LivechatUsersTypeIdRouteHandler)
  .openapi(getApiV1LivechatAgentInfoRidTokenRoute, getApiV1LivechatAgentInfoRidTokenRouteHandler)
  .openapi(getApiV1LivechatAgentNextTokenRoute, getApiV1LivechatAgentNextTokenRouteHandler)
  .openapi(postApiV1LivechatAgentsSaveInfoRoute, postApiV1LivechatAgentsSaveInfoRouteHandler)
  .openapi(postApiV1LivechatAgentStatusRoute, postApiV1LivechatAgentStatusRouteHandler)
  .openapi(postApiV1OmnichannelContactRoute, postApiV1OmnichannelContactRouteHandler)
  .openapi(getApiV1OmnichannelContactRoute, getApiV1OmnichannelContactRouteHandler)
  .openapi(getApiV1OmnichannelContactSearchRoute, getApiV1OmnichannelContactSearchRouteHandler)
  .openapi(postApiV1OmnichannelContactsRoute, postApiV1OmnichannelContactsRouteHandler)
  .openapi(postApiV1OmnichannelContactsUpdateRoute, postApiV1OmnichannelContactsUpdateRouteHandler)
  .openapi(
    postApiV1OmnichannelContactsConflictsRoute,
    postApiV1OmnichannelContactsConflictsRouteHandler,
  )
  .openapi(getApiV1OmnichannelContactsGetRoute, getApiV1OmnichannelContactsGetRouteHandler)
  .openapi(getApiV1OmnichannelContactsSearchRoute, getApiV1OmnichannelContactsSearchRouteHandler)
  .openapi(
    getApiV1OmnichannelContactsChannelsRoute,
    getApiV1OmnichannelContactsChannelsRouteHandler,
  )
  .openapi(getApiV1OmnichannelContactsHistoryRoute, getApiV1OmnichannelContactsHistoryRouteHandler)
  .openapi(
    getApiV1OmnichannelContactsCheckExistenceRoute,
    getApiV1OmnichannelContactsCheckExistenceRouteHandler,
  )
  .openapi(postApiV1OmnichannelContactsBlockRoute, postApiV1OmnichannelContactsBlockRouteHandler)
  .openapi(
    postApiV1OmnichannelContactsUnblockRoute,
    postApiV1OmnichannelContactsUnblockRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsAgentOverviewRoute,
    getApiV1LivechatAnalyticsAgentOverviewRouteHandler,
  )
  .openapi(getApiV1LivechatAnalyticsOverviewRoute, getApiV1LivechatAnalyticsOverviewRouteHandler)
  .openapi(getApiV1LivechatConfigRoute, getApiV1LivechatConfigRouteHandler)
  .openapi(getApiV1LivechatRoomsRoute, getApiV1LivechatRoomsRouteHandler)
  .openapi(getApiV1LivechatRoomRoute, getApiV1LivechatRoomRouteHandler)
  .openapi(postApiV1LivechatRoomCloseRoute, postApiV1LivechatRoomCloseRouteHandler)
  .openapi(postApiV1LivechatRoomCloseByUserRoute, postApiV1LivechatRoomCloseByUserRouteHandler)
  .openapi(getApiV1LivechatRoomJoinRoute, getApiV1LivechatRoomJoinRouteHandler)
  .openapi(postApiV1LivechatRoomSaveInfoRoute, postApiV1LivechatRoomSaveInfoRouteHandler)
  .openapi(postApiV1LivechatRoomForwardRoute, postApiV1LivechatRoomForwardRouteHandler)
  .openapi(getApiV1LivechatTransferHistoryRidRoute, getApiV1LivechatTransferHistoryRidRouteHandler)
  .openapi(postApiV1LivechatRoomSurveyRoute, postApiV1LivechatRoomSurveyRouteHandler)
  .openapi(postApiV1LivechatRoomOnHoldRoute, postApiV1LivechatRoomOnHoldRouteHandler)
  .openapi(postApiV1LivechatUploadRidRoute, postApiV1LivechatUploadRidRouteHandler)
  .openapi(postApiV1LivechatRoomRidPriorityRoute, postApiV1LivechatRoomRidPriorityRouteHandler)
  .openapi(deleteApiV1LivechatRoomRidPriorityRoute, deleteApiV1LivechatRoomRidPriorityRouteHandler)
  .openapi(
    postApiV1LivechatRoomsRemoveAllClosedRoomsRoute,
    postApiV1LivechatRoomsRemoveAllClosedRoomsRouteHandler,
  )
  .openapi(postApiV1LivechatRoomsDeleteRoute, postApiV1LivechatRoomsDeleteRouteHandler)
  .openapi(postApiV1LivechatRoomResumeOnHoldRoute, postApiV1LivechatRoomResumeOnHoldRouteHandler)
  .openapi(getApiV1LivechatRoomsFiltersRoute, getApiV1LivechatRoomsFiltersRouteHandler)
  .openapi(
    postApiV1LivechatVisitorDepartmentTransferRoute,
    postApiV1LivechatVisitorDepartmentTransferRouteHandler,
  )
  .openapi(getApiV1LivechatDepartmentRoute, getApiV1LivechatDepartmentRouteHandler)
  .openapi(postApiV1LivechatDepartmentRoute, postApiV1LivechatDepartmentRouteHandler)
  .openapi(getApiV1LivechatDepartmentIdRoute, getApiV1LivechatDepartmentIdRouteHandler)
  .openapi(putApiV1LivechatDepartmentIdRoute, putApiV1LivechatDepartmentIdRouteHandler)
  .openapi(deleteApiV1LivechatDepartmentIdRoute, deleteApiV1LivechatDepartmentIdRouteHandler)
  .openapi(
    getApiV1LivechatDepartmentAutocompleteRoute,
    getApiV1LivechatDepartmentAutocompleteRouteHandler,
  )
  .openapi(getApiV1LivechatDepartmentIdAgentsRoute, getApiV1LivechatDepartmentIdAgentsRouteHandler)
  .openapi(
    postApiV1LivechatDepartmentIdAgentsRoute,
    postApiV1LivechatDepartmentIdAgentsRouteHandler,
  )
  .openapi(
    getApiV1LivechatDepartmentListByIdsRoute,
    getApiV1LivechatDepartmentListByIdsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute,
    getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute,
    getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute,
    getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute,
    getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute,
    getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute,
    getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute,
    getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute,
    getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRouteHandler,
  )
  .openapi(
    getApiV1LivechatDepartmentsArchivedRoute,
    getApiV1LivechatDepartmentsArchivedRouteHandler,
  )
  .openapi(
    postApiV1LivechatDepartmentIdArchiveRoute,
    postApiV1LivechatDepartmentIdArchiveRouteHandler,
  )
  .openapi(
    postApiV1LivechatDepartmentIdUnarchiveRoute,
    postApiV1LivechatDepartmentIdUnarchiveRouteHandler,
  )
  .openapi(
    getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute,
    getApiV1LivechatDepartmentIsDepartmentCreationAvailableRouteHandler,
  )
  .openapi(postApiV1LivechatCustomFieldsSaveRoute, postApiV1LivechatCustomFieldsSaveRouteHandler)
  .openapi(postApiV1LivechatCustomFieldRoute, postApiV1LivechatCustomFieldRouteHandler)
  .openapi(postApiV1LivechatCustomFieldsRoute, postApiV1LivechatCustomFieldsRouteHandler)
  .openapi(getApiV1LivechatCustomFields2Route, getApiV1LivechatCustomFields2RouteHandler)
  .openapi(getApiV1LivechatCustomFieldsIdRoute, getApiV1LivechatCustomFieldsIdRouteHandler)
  .openapi(
    postApiV1LivechatCustomFieldsDeleteRoute,
    postApiV1LivechatCustomFieldsDeleteRouteHandler,
  )
  .openapi(postApiV1LivechatPageVisitedRoute, postApiV1LivechatPageVisitedRouteHandler)
  .openapi(postApiV1LivechatTranscriptRoute, postApiV1LivechatTranscriptRouteHandler)
  .openapi(postApiV1LivechatTranscriptRidRoute, postApiV1LivechatTranscriptRidRouteHandler)
  .openapi(deleteApiV1LivechatTranscriptRidRoute, deleteApiV1LivechatTranscriptRidRouteHandler)
  .openapi(
    postApiV1OmnichannelRidRequestTranscriptRoute,
    postApiV1OmnichannelRidRequestTranscriptRouteHandler,
  )
  .openapi(
    getApiV1LivechatAgentsAgentIdDepartmentsRoute,
    getApiV1LivechatAgentsAgentIdDepartmentsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute,
    getApiV1LivechatAnalyticsAgentsAverageServiceTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute,
    getApiV1LivechatAnalyticsAgentsTotalServiceTimeRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute,
    getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRouteHandler,
  )
  .openapi(getApiV1LivechatAppearanceRoute, getApiV1LivechatAppearanceRouteHandler)
  .openapi(postApiV1LivechatAppearanceRoute, postApiV1LivechatAppearanceRouteHandler)
  .openapi(getApiV1LivechatBusinessHoursRoute, getApiV1LivechatBusinessHoursRouteHandler)
  .openapi(getApiV1LivechatBusinessHourRoute, getApiV1LivechatBusinessHourRouteHandler)
  .openapi(
    postApiV1LivechatBusinessHoursRemoveRoute,
    postApiV1LivechatBusinessHoursRemoveRouteHandler,
  )
  .openapi(postApiV1LivechatBusinessHoursSaveRoute, postApiV1LivechatBusinessHoursSaveRouteHandler)
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute,
    getApiV1LivechatAnalyticsDashboardsConversationTotalizersRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute,
    getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute,
    getApiV1LivechatAnalyticsDashboardsChatsTotalizersRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute,
    getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChartsChatsRoute,
    getApiV1LivechatAnalyticsDashboardsChartsChatsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute,
    getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute,
    getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute,
    getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute,
    getApiV1LivechatAnalyticsDashboardsChartsTimingsRouteHandler,
  )
  .openapi(
    getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute,
    getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRouteHandler,
  )
  .openapi(getApiV1LivechatInquiriesListRoute, getApiV1LivechatInquiriesListRouteHandler)
  .openapi(postApiV1LivechatInquiriesTakeRoute, postApiV1LivechatInquiriesTakeRouteHandler)
  .openapi(
    getApiV1LivechatInquiriesQueuedForUserRoute,
    getApiV1LivechatInquiriesQueuedForUserRouteHandler,
  )
  .openapi(getApiV1LivechatInquiriesGetOneRoute, getApiV1LivechatInquiriesGetOneRouteHandler)
  .openapi(putApiV1LivechatInquirySetSLARoute, putApiV1LivechatInquirySetSLARouteHandler)
  .openapi(
    postApiV1LivechatInquiriesReturnAsInquiryRoute,
    postApiV1LivechatInquiriesReturnAsInquiryRouteHandler,
  )
  .openapi(
    getApiV1LivechatIntegrationsSettingsRoute,
    getApiV1LivechatIntegrationsSettingsRouteHandler,
  )
  .openapi(getApiV1LivechatQueueRoute, getApiV1LivechatQueueRouteHandler)
  .openapi(
    postApiV1LivechatSmsIncomingServiceRoute,
    postApiV1LivechatSmsIncomingServiceRouteHandler,
  )
  .openapi(getApiV1LivechatConfigRoutingRoute, getApiV1LivechatConfigRoutingRouteHandler)
  .openapi(getApiV1LivechatTriggersRoute, getApiV1LivechatTriggersRouteHandler)
  .openapi(postApiV1LivechatTriggersRoute, postApiV1LivechatTriggersRouteHandler)
  .openapi(getApiV1LivechatTriggersIdRoute, getApiV1LivechatTriggersIdRouteHandler)
  .openapi(deleteApiV1LivechatTriggersIdRoute, deleteApiV1LivechatTriggersIdRouteHandler)
  .openapi(
    postApiV1LivechatTriggersExternalServiceTestRoute,
    postApiV1LivechatTriggersExternalServiceTestRouteHandler,
  )
  .openapi(getApiV1LivechatMonitorsRoute, getApiV1LivechatMonitorsRouteHandler)
  .openapi(getApiV1LivechatMonitorsUsernameRoute, getApiV1LivechatMonitorsUsernameRouteHandler)
  .openapi(postApiV1LivechatMonitorsDeleteRoute, postApiV1LivechatMonitorsDeleteRouteHandler)
  .openapi(postApiV1LivechatMonitorsCreateRoute, postApiV1LivechatMonitorsCreateRouteHandler)
  .openapi(getApiV1LivechatPrioritiesRoute, getApiV1LivechatPrioritiesRouteHandler)
  .openapi(
    getApiV1LivechatPrioritiesPriorityIdRoute,
    getApiV1LivechatPrioritiesPriorityIdRouteHandler,
  )
  .openapi(
    putApiV1LivechatPrioritiesPriorityIdRoute,
    putApiV1LivechatPrioritiesPriorityIdRouteHandler,
  )
  .openapi(postApiV1LivechatPrioritiesResetRoute, postApiV1LivechatPrioritiesResetRouteHandler)
  .openapi(getApiV1LivechatPrioritiesResetRoute, getApiV1LivechatPrioritiesResetRouteHandler)
  .openapi(getApiV1LivechatTagsRoute, getApiV1LivechatTagsRouteHandler)
  .openapi(getApiV1LivechatTagsTagIdRoute, getApiV1LivechatTagsTagIdRouteHandler)
  .openapi(postApiV1LivechatTagsDeleteRoute, postApiV1LivechatTagsDeleteRouteHandler)
  .openapi(postApiV1LivechatTagsSaveRoute, postApiV1LivechatTagsSaveRouteHandler)
  .openapi(postApiV1LivechatUnitsRoute, postApiV1LivechatUnitsRouteHandler)
  .openapi(getApiV1LivechatUnitsRoute, getApiV1LivechatUnitsRouteHandler)
  .openapi(postApiV1LivechatUnitsIdRoute, postApiV1LivechatUnitsIdRouteHandler)
  .openapi(deleteApiV1LivechatUnitsIdRoute, deleteApiV1LivechatUnitsIdRouteHandler)
  .openapi(getApiV1LivechatUnitsIdRoute, getApiV1LivechatUnitsIdRouteHandler)
  .openapi(
    getApiV1LivechatUnitsUnitIdMonitorsRoute,
    getApiV1LivechatUnitsUnitIdMonitorsRouteHandler,
  )
  .openapi(
    getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute,
    getApiV1LivechatUnitsUnitIdDepartmentsAvailableRouteHandler,
  )
  .openapi(
    getApiV1LivechatUnitsUnitIdDepartmentsRoute,
    getApiV1LivechatUnitsUnitIdDepartmentsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute,
    getApiV1LivechatAnalyticsDashboardsConversationsByStatusRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute,
    getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute,
    getApiV1LivechatAnalyticsDashboardsConversationsByTagsRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute,
    getApiV1LivechatAnalyticsDashboardsConversationsByAgentRouteHandler,
  )
  .openapi(
    getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute,
    getApiV1LivechatAnalyticsDashboardsConversationsBySourceRouteHandler,
  )
  .openapi(getApiV1LivechatSlaRoute, getApiV1LivechatSlaRouteHandler)
  .openapi(postApiV1LivechatSlaRoute, postApiV1LivechatSlaRouteHandler)
  .openapi(getApiV1LivechatSlaSlaIdRoute, getApiV1LivechatSlaSlaIdRouteHandler)
  .openapi(putApiV1LivechatSlaSlaIdRoute, putApiV1LivechatSlaSlaIdRouteHandler)
  .openapi(deleteApiV1LivechatSlaSlaIdRoute, deleteApiV1LivechatSlaSlaIdRouteHandler)
  .openapi(postApiV1LivechatVisitorRoute, postApiV1LivechatVisitorRouteHandler)
  .openapi(getApiV1LivechatVisitorTokenRoute, getApiV1LivechatVisitorTokenRouteHandler)
  .openapi(deleteApiV1LivechatVisitorTokenRoute, deleteApiV1LivechatVisitorTokenRouteHandler)
  .openapi(getApiV1LivechatVisitorsInfoRoute, getApiV1LivechatVisitorsInfoRouteHandler)
  .openapi(getApiV1LivechatVisitorTokenRoomRoute, getApiV1LivechatVisitorTokenRoomRouteHandler)
  .openapi(getApiV1LivechatVisitorsSearchRoute, getApiV1LivechatVisitorsSearchRouteHandler)
  .openapi(
    getApiV1LivechatVisitorsPagesVisitedRoomIdRoute,
    getApiV1LivechatVisitorsPagesVisitedRoomIdRouteHandler,
  )
  .openapi(
    getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute,
    getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRouteHandler,
  )
  .openapi(
    getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute,
    getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRouteHandler,
  )
  .openapi(
    getApiV1LivechatVisitorsAutocompleteRoute,
    getApiV1LivechatVisitorsAutocompleteRouteHandler,
  )
  .openapi(postApiV1LivechatVisitorStatusRoute, postApiV1LivechatVisitorStatusRouteHandler)
  .openapi(postApiV1CannedResponsesRoute, postApiV1CannedResponsesRouteHandler)
  .openapi(getApiV1CannedResponsesRoute, getApiV1CannedResponsesRouteHandler)
  .openapi(getApiV1CannedResponsesGetRoute, getApiV1CannedResponsesGetRouteHandler)
  .openapi(getApiV1CannedResponsesIdRoute, getApiV1CannedResponsesIdRouteHandler)
  .openapi(deleteApiV1CannedResponsesIdRoute, deleteApiV1CannedResponsesIdRouteHandler)
  .openapi(postApiV1LivechatMessageRoute, postApiV1LivechatMessageRouteHandler)
  .openapi(postApiV1LivechatMessagesRoute, postApiV1LivechatMessagesRouteHandler)
  .openapi(putApiV1LivechatMessageIdRoute, putApiV1LivechatMessageIdRouteHandler)
  .openapi(getApiV1LivechatMessageIdRoute, getApiV1LivechatMessageIdRouteHandler)
  .openapi(deleteApiV1LivechatMessageIdRoute, deleteApiV1LivechatMessageIdRouteHandler)
  .openapi(getApiV1LivechatMessagesHistoryRidRoute, getApiV1LivechatMessagesHistoryRidRouteHandler)
  .openapi(postApiV1LivechatOfflineMessageRoute, postApiV1LivechatOfflineMessageRouteHandler)
  .openapi(getApiV1LivechatRidMessagesRoute, getApiV1LivechatRidMessagesRouteHandler)
  .openapi(postApiV1OmnichannelIntegrationsRoute, postApiV1OmnichannelIntegrationsRouteHandler)
  .openapi(postApiV1LivechatWebhookTestRoute, postApiV1LivechatWebhookTestRouteHandler)

export default app
