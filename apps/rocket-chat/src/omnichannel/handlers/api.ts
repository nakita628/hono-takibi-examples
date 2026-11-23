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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1LivechatUsersTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUsersTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUsersTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatUsersTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAgentInfoRidTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAgentNextTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAgentsSaveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAgentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OmnichannelContactsCheckExistenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelContactsUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomCloseByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomSaveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTransferHistoryRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomSurveyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatUploadRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomRidPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatRoomRidPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomsRemoveAllClosedRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomResumeOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatVisitorDepartmentTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentListByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentsArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatCustomFields2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatCustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatPageVisitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTranscriptRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatTranscriptRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelRidRequestTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAgentsAgentIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatBusinessHoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatBusinessHourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatBusinessHoursRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatBusinessHoursSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatInquiriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatInquiriesTakeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatInquiriesQueuedForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatInquiriesGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatInquirySetSLARoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatInquiriesReturnAsInquiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatIntegrationsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatSmsIncomingServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatConfigRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTriggersExternalServiceTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMonitorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMonitorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMonitorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatPrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatPrioritiesPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatPrioritiesPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatPrioritiesResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatPrioritiesResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTagsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatSlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatSlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatVisitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatVisitorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorTokenRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsPagesVisitedRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatVisitorStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMessagesHistoryRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatOfflineMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRidMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OmnichannelIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatWebhookTestRoute, (c) => {
    throw new Error('Not implemented')
  })
