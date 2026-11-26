import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeRoute,
  getMacrosIdRoute,
  getMacrosRoute,
  putAdminsAdminIdAwayRoute,
  getAdminsActivityLogsRoute,
  postAdminsActivityLogsSearchRoute,
  getAdminsActivityLogEventTypesRoute,
  getAdminsRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  getOfficeHoursSchedulesIdRoute,
  putOfficeHoursSchedulesIdRoute,
  deleteOfficeHoursSchedulesIdRoute,
  getOfficeHoursSchedulesRoute,
  postOfficeHoursSchedulesRoute,
  getAdminsAdminIdRoute,
  deleteAdminsRemoveRoute,
  getAiContentImportSourcesRoute,
  postAiContentImportSourcesRoute,
  deleteAiContentImportSourcesSourceIdRoute,
  getAiContentImportSourcesSourceIdRoute,
  putAiContentImportSourcesSourceIdRoute,
  getAiExternalPagesRoute,
  postAiExternalPagesRoute,
  deleteAiExternalPagesPageIdRoute,
  getAiExternalPagesPageIdRoute,
  putAiExternalPagesPageIdRoute,
  postAiExternalPagesExternalPageIdTagsRoute,
  deleteAiExternalPagesExternalPageIdTagsIdRoute,
  getArticlesRoute,
  postArticlesRoute,
  getArticlesArticleIdRoute,
  putArticlesArticleIdRoute,
  deleteArticlesArticleIdRoute,
  getArticlesIdDraftRoute,
  putArticlesIdDraftRoute,
  postArticlesIdDraftPublishRoute,
  postArticlesArticleIdTagsRoute,
  deleteArticlesArticleIdTagsIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesArticleIdVersionsIdRoute,
  getArticlesSearchRoute,
  getAwayStatusReasonsRoute,
  getAudiencesRoute,
  postAudiencesRoute,
  getAudiencesIdRoute,
  putAudiencesIdRoute,
  deleteAudiencesIdRoute,
  postExportReportingDataEnqueueRoute,
  getExportReportingDataJobIdentifierRoute,
  getExportReportingDataGetDatasetsRoute,
  getDownloadReportingDataJobIdentifierRoute,
  postFinStartRoute,
  postFinReplyRoute,
  postFinCsatRoute,
  postFinCapabilitiesRoute,
  postFinAskRoute,
  postFinProceduresProcedureIdRunRoute,
  postFinEscalateRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  postHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  getHelpCenterCollectionsRoute,
  postHelpCenterCollectionsRoute,
  getHelpCenterCollectionsCollectionIdRoute,
  putHelpCenterCollectionsCollectionIdRoute,
  deleteHelpCenterCollectionsCollectionIdRoute,
  getHelpCenterHelpCentersHelpCenterIdRoute,
  getHelpCenterHelpCentersRoute,
  getInternalArticlesRoute,
  postInternalArticlesRoute,
  getInternalArticlesInternalArticleIdRoute,
  putInternalArticlesInternalArticleIdRoute,
  deleteInternalArticlesInternalArticleIdRoute,
  postInternalArticlesInternalArticleIdTagsRoute,
  deleteInternalArticlesInternalArticleIdTagsIdRoute,
  getInternalArticlesSearchRoute,
  getFoldersRoute,
  postFoldersRoute,
  getFoldersIdRoute,
  putFoldersIdRoute,
  deleteFoldersIdRoute,
  getIpAllowlistRoute,
  putIpAllowlistRoute,
  postCompaniesRoute,
  getCompaniesRoute,
  getCompaniesCompanyIdRoute,
  putCompaniesCompanyIdRoute,
  deleteCompaniesCompanyIdRoute,
  getCompaniesCompanyIdContactsRoute,
  getCompaniesCompanyIdSegmentsRoute,
  getCompaniesCompanyIdNotesRoute,
  postCompaniesCompanyIdNotesRoute,
  postCompaniesSearchRoute,
  postCompaniesListRoute,
  getCompaniesScrollRoute,
  postContactsContactIdCompaniesRoute,
  getContactsContactIdCompaniesRoute,
  deleteContactsContactIdCompaniesCompanyIdRoute,
  getContactsContactIdNotesRoute,
  postContactsContactIdNotesRoute,
  getContactsContactIdSegmentsRoute,
  getContactsContactIdSubscriptionsRoute,
  postContactsContactIdSubscriptionsRoute,
  deleteContactsContactIdSubscriptionsSubscriptionIdRoute,
  getContactsContactIdTagsRoute,
  postContactsContactIdTagsRoute,
  deleteContactsContactIdTagsTagIdRoute,
  getContactsDeletedRoute,
  putContactsContactIdRoute,
  getContactsContactIdRoute,
  deleteContactsContactIdRoute,
  postContactsMergeRoute,
  postContactsMergePreviewRoute,
  postContactsSearchRoute,
  getContactsActivitiesRoute,
  getContactsRoute,
  postContactsRoute,
  getContactsFindByExternalIdExternalIdRoute,
  postContactsContactIdArchiveRoute,
  postContactsContactIdUnarchiveRoute,
  getContactsIdBannersRoute,
  postContactsIdBannersViewIdDismissRoute,
  postContactsContactIdBlockRoute,
  getContactsIdMergeHistoriesRoute,
  postContactsBulkRoute,
  putContactsBulkRoute,
  postContactsBulkDeleteRoute,
  getContactsBulkIdRoute,
  postContentBulkActionsRoute,
  getContentSearchRoute,
  getContentSnippetsRoute,
  postContentSnippetsRoute,
  getContentSnippetsIdRoute,
  putContentSnippetsIdRoute,
  deleteContentSnippetsIdRoute,
  postContentSnippetsContentSnippetIdTagsRoute,
  deleteContentSnippetsContentSnippetIdTagsIdRoute,
  getDynamicContentsRoute,
  postDynamicContentsRoute,
  getDynamicContentsIdRoute,
  putDynamicContentsIdRoute,
  deleteDynamicContentsIdRoute,
  postConversationsConversationIdTagsRoute,
  deleteConversationsConversationIdTagsTagIdRoute,
  getConversationsRoute,
  postConversationsRoute,
  getConversationsConversationIdRoute,
  putConversationsConversationIdRoute,
  deleteConversationsConversationIdRoute,
  postConversationsSearchRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdPartsRoute,
  postConversationsConversationIdCustomersRoute,
  deleteConversationsConversationIdCustomersContactIdRoute,
  getConversationsIdHandlingEventsRoute,
  getConversationsIdHitlEventsRoute,
  getConversationsIdSideConversationsRoute,
  postConversationsConversationIdRatingRoute,
  postConversationsRedactRoute,
  postConversationsIdMergeRoute,
  postConversationsConversationIdConvertRoute,
  getConversationsDeletedRoute,
  postConversationsStreamTokenRoute,
  deleteConversationsStreamTokenRoute,
  getConversationsAttributesRoute,
  postConversationsAttributesRoute,
  getConversationsAttributesIdRoute,
  putConversationsAttributesIdRoute,
  deleteConversationsAttributesIdRoute,
  postConversationsAttributesIdOptionsRoute,
  putConversationsAttributesIdOptionsOptionIdRoute,
  deleteConversationsAttributesIdOptionsOptionIdRoute,
  postCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  getDataAttributesRoute,
  postDataAttributesRoute,
  putDataAttributesDataAttributeIdRoute,
  getDataConnectorsRoute,
  postDataConnectorsRoute,
  getDataConnectorsIdRoute,
  deleteDataConnectorsIdRoute,
  patchDataConnectorsIdRoute,
  getDataConnectorsDataConnectorIdExecutionResultsRoute,
  getDataConnectorsDataConnectorIdExecutionResultsIdRoute,
  getDataConnectorsIdVersionsRoute,
  getDataConnectorsIdVersionsVersionIdRoute,
  patchDataConnectorsIdVersionsVersionIdRoute,
  postEventsRoute,
  getEventsRoute,
  postEventsSummariesRoute,
  postExportContentDataRoute,
  getExportContentDataJobIdentifierRoute,
  postExportCancelJobIdentifierRoute,
  getDownloadContentDataJobIdentifierRoute,
  getJobsStatusJobIdRoute,
  postMessagesRoute,
  getMessagesWhatsappStatusRoute,
  getMessagesStatusRoute,
  getNewsNewsItemsRoute,
  postNewsNewsItemsRoute,
  getNewsNewsItemsNewsItemIdRoute,
  putNewsNewsItemsNewsItemIdRoute,
  deleteNewsNewsItemsNewsItemIdRoute,
  getNewsNewsfeedsNewsfeedIdItemsRoute,
  getNewsNewsfeedsRoute,
  getNewsNewsfeedsNewsfeedIdRoute,
  getNotesNoteIdRoute,
  deleteNotesNoteIdRoute,
  getSegmentsRoute,
  getSegmentsSegmentIdRoute,
  getSubscriptionTypesRoute,
  getSubscriptionTypesIdRoute,
  postPhoneCallRedirectsRoute,
  getCallsRoute,
  getCallsCallIdRoute,
  getCallsCallIdRecordingRoute,
  getCallsIdTranscriptRoute,
  postCallsSearchRoute,
  getTagsRoute,
  postTagsRoute,
  getTagsTagIdRoute,
  deleteTagsTagIdRoute,
  getTeamsRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdMetricsRoute,
  getTicketStatesRoute,
  postTicketTypesTicketTypeIdAttributesRoute,
  putTicketTypesTicketTypeIdAttributesAttributeIdRoute,
  getTicketTypesRoute,
  postTicketTypesRoute,
  getTicketTypesTicketTypeIdRoute,
  putTicketTypesTicketTypeIdRoute,
  postTicketsTicketIdReplyRoute,
  postTicketsTicketIdTagsRoute,
  deleteTicketsTicketIdTagsTagIdRoute,
  postTicketsTicketIdLinkedConversationsRoute,
  deleteTicketsTicketIdLinkedConversationsIdRoute,
  postTicketsRoute,
  postTicketsEnqueueRoute,
  putTicketsTicketIdRoute,
  getTicketsTicketIdRoute,
  deleteTicketsTicketIdRoute,
  postTicketsTicketIdChangeTypeRoute,
  postTicketsSearchRoute,
  putVisitorsRoute,
  getVisitorsRoute,
  postVisitorsConvertRoute,
  getBrandsRoute,
  getBrandsIdRoute,
  getEmailsRoute,
  getEmailsIdRoute,
  postFinVoiceRegisterRoute,
  getFinVoiceCollectIdRoute,
  getFinVoiceExternalIdExternalIdRoute,
  getFinVoicePhoneNumberPhoneNumberRoute,
  getFinVoiceConversationConversationIdRoute,
  getExportWorkflowsIdRoute,
} from './routes'
import {
  getMeRouteHandler,
  getMacrosIdRouteHandler,
  getMacrosRouteHandler,
  putAdminsAdminIdAwayRouteHandler,
  getAdminsActivityLogsRouteHandler,
  postAdminsActivityLogsSearchRouteHandler,
  getAdminsActivityLogEventTypesRouteHandler,
  getAdminsRouteHandler,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  getOfficeHoursSchedulesIdRouteHandler,
  putOfficeHoursSchedulesIdRouteHandler,
  deleteOfficeHoursSchedulesIdRouteHandler,
  getOfficeHoursSchedulesRouteHandler,
  postOfficeHoursSchedulesRouteHandler,
  getAdminsAdminIdRouteHandler,
  deleteAdminsRemoveRouteHandler,
  getAiContentImportSourcesRouteHandler,
  postAiContentImportSourcesRouteHandler,
  deleteAiContentImportSourcesSourceIdRouteHandler,
  getAiContentImportSourcesSourceIdRouteHandler,
  putAiContentImportSourcesSourceIdRouteHandler,
  getAiExternalPagesRouteHandler,
  postAiExternalPagesRouteHandler,
  deleteAiExternalPagesPageIdRouteHandler,
  getAiExternalPagesPageIdRouteHandler,
  putAiExternalPagesPageIdRouteHandler,
  postAiExternalPagesExternalPageIdTagsRouteHandler,
  deleteAiExternalPagesExternalPageIdTagsIdRouteHandler,
  getArticlesRouteHandler,
  postArticlesRouteHandler,
  getArticlesArticleIdRouteHandler,
  putArticlesArticleIdRouteHandler,
  deleteArticlesArticleIdRouteHandler,
  getArticlesIdDraftRouteHandler,
  putArticlesIdDraftRouteHandler,
  postArticlesIdDraftPublishRouteHandler,
  postArticlesArticleIdTagsRouteHandler,
  deleteArticlesArticleIdTagsIdRouteHandler,
  getArticlesArticleIdVersionsRouteHandler,
  getArticlesArticleIdVersionsIdRouteHandler,
  getArticlesSearchRouteHandler,
  getAwayStatusReasonsRouteHandler,
  getAudiencesRouteHandler,
  postAudiencesRouteHandler,
  getAudiencesIdRouteHandler,
  putAudiencesIdRouteHandler,
  deleteAudiencesIdRouteHandler,
  postExportReportingDataEnqueueRouteHandler,
  getExportReportingDataJobIdentifierRouteHandler,
  getExportReportingDataGetDatasetsRouteHandler,
  getDownloadReportingDataJobIdentifierRouteHandler,
  postFinStartRouteHandler,
  postFinReplyRouteHandler,
  postFinCsatRouteHandler,
  postFinCapabilitiesRouteHandler,
  postFinAskRouteHandler,
  postFinProceduresProcedureIdRunRouteHandler,
  postFinEscalateRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  postHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  getHelpCenterCollectionsRouteHandler,
  postHelpCenterCollectionsRouteHandler,
  getHelpCenterCollectionsCollectionIdRouteHandler,
  putHelpCenterCollectionsCollectionIdRouteHandler,
  deleteHelpCenterCollectionsCollectionIdRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRouteHandler,
  getHelpCenterHelpCentersRouteHandler,
  getInternalArticlesRouteHandler,
  postInternalArticlesRouteHandler,
  getInternalArticlesInternalArticleIdRouteHandler,
  putInternalArticlesInternalArticleIdRouteHandler,
  deleteInternalArticlesInternalArticleIdRouteHandler,
  postInternalArticlesInternalArticleIdTagsRouteHandler,
  deleteInternalArticlesInternalArticleIdTagsIdRouteHandler,
  getInternalArticlesSearchRouteHandler,
  getFoldersRouteHandler,
  postFoldersRouteHandler,
  getFoldersIdRouteHandler,
  putFoldersIdRouteHandler,
  deleteFoldersIdRouteHandler,
  getIpAllowlistRouteHandler,
  putIpAllowlistRouteHandler,
  postCompaniesRouteHandler,
  getCompaniesRouteHandler,
  getCompaniesCompanyIdRouteHandler,
  putCompaniesCompanyIdRouteHandler,
  deleteCompaniesCompanyIdRouteHandler,
  getCompaniesCompanyIdContactsRouteHandler,
  getCompaniesCompanyIdSegmentsRouteHandler,
  getCompaniesCompanyIdNotesRouteHandler,
  postCompaniesCompanyIdNotesRouteHandler,
  postCompaniesSearchRouteHandler,
  postCompaniesListRouteHandler,
  getCompaniesScrollRouteHandler,
  postContactsContactIdCompaniesRouteHandler,
  getContactsContactIdCompaniesRouteHandler,
  deleteContactsContactIdCompaniesCompanyIdRouteHandler,
  getContactsContactIdNotesRouteHandler,
  postContactsContactIdNotesRouteHandler,
  getContactsContactIdSegmentsRouteHandler,
  getContactsContactIdSubscriptionsRouteHandler,
  postContactsContactIdSubscriptionsRouteHandler,
  deleteContactsContactIdSubscriptionsSubscriptionIdRouteHandler,
  getContactsContactIdTagsRouteHandler,
  postContactsContactIdTagsRouteHandler,
  deleteContactsContactIdTagsTagIdRouteHandler,
  getContactsDeletedRouteHandler,
  putContactsContactIdRouteHandler,
  getContactsContactIdRouteHandler,
  deleteContactsContactIdRouteHandler,
  postContactsMergeRouteHandler,
  postContactsMergePreviewRouteHandler,
  postContactsSearchRouteHandler,
  getContactsActivitiesRouteHandler,
  getContactsRouteHandler,
  postContactsRouteHandler,
  getContactsFindByExternalIdExternalIdRouteHandler,
  postContactsContactIdArchiveRouteHandler,
  postContactsContactIdUnarchiveRouteHandler,
  getContactsIdBannersRouteHandler,
  postContactsIdBannersViewIdDismissRouteHandler,
  postContactsContactIdBlockRouteHandler,
  getContactsIdMergeHistoriesRouteHandler,
  postContactsBulkRouteHandler,
  putContactsBulkRouteHandler,
  postContactsBulkDeleteRouteHandler,
  getContactsBulkIdRouteHandler,
  postContentBulkActionsRouteHandler,
  getContentSearchRouteHandler,
  getContentSnippetsRouteHandler,
  postContentSnippetsRouteHandler,
  getContentSnippetsIdRouteHandler,
  putContentSnippetsIdRouteHandler,
  deleteContentSnippetsIdRouteHandler,
  postContentSnippetsContentSnippetIdTagsRouteHandler,
  deleteContentSnippetsContentSnippetIdTagsIdRouteHandler,
  getDynamicContentsRouteHandler,
  postDynamicContentsRouteHandler,
  getDynamicContentsIdRouteHandler,
  putDynamicContentsIdRouteHandler,
  deleteDynamicContentsIdRouteHandler,
  postConversationsConversationIdTagsRouteHandler,
  deleteConversationsConversationIdTagsTagIdRouteHandler,
  getConversationsRouteHandler,
  postConversationsRouteHandler,
  getConversationsConversationIdRouteHandler,
  putConversationsConversationIdRouteHandler,
  deleteConversationsConversationIdRouteHandler,
  postConversationsSearchRouteHandler,
  postConversationsConversationIdReplyRouteHandler,
  postConversationsConversationIdPartsRouteHandler,
  postConversationsConversationIdCustomersRouteHandler,
  deleteConversationsConversationIdCustomersContactIdRouteHandler,
  getConversationsIdHandlingEventsRouteHandler,
  getConversationsIdHitlEventsRouteHandler,
  getConversationsIdSideConversationsRouteHandler,
  postConversationsConversationIdRatingRouteHandler,
  postConversationsRedactRouteHandler,
  postConversationsIdMergeRouteHandler,
  postConversationsConversationIdConvertRouteHandler,
  getConversationsDeletedRouteHandler,
  postConversationsStreamTokenRouteHandler,
  deleteConversationsStreamTokenRouteHandler,
  getConversationsAttributesRouteHandler,
  postConversationsAttributesRouteHandler,
  getConversationsAttributesIdRouteHandler,
  putConversationsAttributesIdRouteHandler,
  deleteConversationsAttributesIdRouteHandler,
  postConversationsAttributesIdOptionsRouteHandler,
  putConversationsAttributesIdOptionsOptionIdRouteHandler,
  deleteConversationsAttributesIdOptionsOptionIdRouteHandler,
  postCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  getCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  getDataAttributesRouteHandler,
  postDataAttributesRouteHandler,
  putDataAttributesDataAttributeIdRouteHandler,
  getDataConnectorsRouteHandler,
  postDataConnectorsRouteHandler,
  getDataConnectorsIdRouteHandler,
  deleteDataConnectorsIdRouteHandler,
  patchDataConnectorsIdRouteHandler,
  getDataConnectorsDataConnectorIdExecutionResultsRouteHandler,
  getDataConnectorsDataConnectorIdExecutionResultsIdRouteHandler,
  getDataConnectorsIdVersionsRouteHandler,
  getDataConnectorsIdVersionsVersionIdRouteHandler,
  patchDataConnectorsIdVersionsVersionIdRouteHandler,
  postEventsRouteHandler,
  getEventsRouteHandler,
  postEventsSummariesRouteHandler,
  postExportContentDataRouteHandler,
  getExportContentDataJobIdentifierRouteHandler,
  postExportCancelJobIdentifierRouteHandler,
  getDownloadContentDataJobIdentifierRouteHandler,
  getJobsStatusJobIdRouteHandler,
  postMessagesRouteHandler,
  getMessagesWhatsappStatusRouteHandler,
  getMessagesStatusRouteHandler,
  getNewsNewsItemsRouteHandler,
  postNewsNewsItemsRouteHandler,
  getNewsNewsItemsNewsItemIdRouteHandler,
  putNewsNewsItemsNewsItemIdRouteHandler,
  deleteNewsNewsItemsNewsItemIdRouteHandler,
  getNewsNewsfeedsNewsfeedIdItemsRouteHandler,
  getNewsNewsfeedsRouteHandler,
  getNewsNewsfeedsNewsfeedIdRouteHandler,
  getNotesNoteIdRouteHandler,
  deleteNotesNoteIdRouteHandler,
  getSegmentsRouteHandler,
  getSegmentsSegmentIdRouteHandler,
  getSubscriptionTypesRouteHandler,
  getSubscriptionTypesIdRouteHandler,
  postPhoneCallRedirectsRouteHandler,
  getCallsRouteHandler,
  getCallsCallIdRouteHandler,
  getCallsCallIdRecordingRouteHandler,
  getCallsIdTranscriptRouteHandler,
  postCallsSearchRouteHandler,
  getTagsRouteHandler,
  postTagsRouteHandler,
  getTagsTagIdRouteHandler,
  deleteTagsTagIdRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTeamsTeamIdMetricsRouteHandler,
  getTicketStatesRouteHandler,
  postTicketTypesTicketTypeIdAttributesRouteHandler,
  putTicketTypesTicketTypeIdAttributesAttributeIdRouteHandler,
  getTicketTypesRouteHandler,
  postTicketTypesRouteHandler,
  getTicketTypesTicketTypeIdRouteHandler,
  putTicketTypesTicketTypeIdRouteHandler,
  postTicketsTicketIdReplyRouteHandler,
  postTicketsTicketIdTagsRouteHandler,
  deleteTicketsTicketIdTagsTagIdRouteHandler,
  postTicketsTicketIdLinkedConversationsRouteHandler,
  deleteTicketsTicketIdLinkedConversationsIdRouteHandler,
  postTicketsRouteHandler,
  postTicketsEnqueueRouteHandler,
  putTicketsTicketIdRouteHandler,
  getTicketsTicketIdRouteHandler,
  deleteTicketsTicketIdRouteHandler,
  postTicketsTicketIdChangeTypeRouteHandler,
  postTicketsSearchRouteHandler,
  putVisitorsRouteHandler,
  getVisitorsRouteHandler,
  postVisitorsConvertRouteHandler,
  getBrandsRouteHandler,
  getBrandsIdRouteHandler,
  getEmailsRouteHandler,
  getEmailsIdRouteHandler,
  postFinVoiceRegisterRouteHandler,
  getFinVoiceCollectIdRouteHandler,
  getFinVoiceExternalIdExternalIdRouteHandler,
  getFinVoicePhoneNumberPhoneNumberRouteHandler,
  getFinVoiceConversationConversationIdRouteHandler,
  getExportWorkflowsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMacrosIdRoute, getMacrosIdRouteHandler)
  .openapi(getMacrosRoute, getMacrosRouteHandler)
  .openapi(putAdminsAdminIdAwayRoute, putAdminsAdminIdAwayRouteHandler)
  .openapi(getAdminsActivityLogsRoute, getAdminsActivityLogsRouteHandler)
  .openapi(postAdminsActivityLogsSearchRoute, postAdminsActivityLogsSearchRouteHandler)
  .openapi(getAdminsActivityLogEventTypesRoute, getAdminsActivityLogEventTypesRouteHandler)
  .openapi(getAdminsRoute, getAdminsRouteHandler)
  .openapi(
    getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
    getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  )
  .openapi(
    putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
    putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  )
  .openapi(
    deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
    deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  )
  .openapi(
    getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
    getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  )
  .openapi(
    postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
    postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  )
  .openapi(getOfficeHoursSchedulesIdRoute, getOfficeHoursSchedulesIdRouteHandler)
  .openapi(putOfficeHoursSchedulesIdRoute, putOfficeHoursSchedulesIdRouteHandler)
  .openapi(deleteOfficeHoursSchedulesIdRoute, deleteOfficeHoursSchedulesIdRouteHandler)
  .openapi(getOfficeHoursSchedulesRoute, getOfficeHoursSchedulesRouteHandler)
  .openapi(postOfficeHoursSchedulesRoute, postOfficeHoursSchedulesRouteHandler)
  .openapi(getAdminsAdminIdRoute, getAdminsAdminIdRouteHandler)
  .openapi(deleteAdminsRemoveRoute, deleteAdminsRemoveRouteHandler)
  .openapi(getAiContentImportSourcesRoute, getAiContentImportSourcesRouteHandler)
  .openapi(postAiContentImportSourcesRoute, postAiContentImportSourcesRouteHandler)
  .openapi(
    deleteAiContentImportSourcesSourceIdRoute,
    deleteAiContentImportSourcesSourceIdRouteHandler,
  )
  .openapi(getAiContentImportSourcesSourceIdRoute, getAiContentImportSourcesSourceIdRouteHandler)
  .openapi(putAiContentImportSourcesSourceIdRoute, putAiContentImportSourcesSourceIdRouteHandler)
  .openapi(getAiExternalPagesRoute, getAiExternalPagesRouteHandler)
  .openapi(postAiExternalPagesRoute, postAiExternalPagesRouteHandler)
  .openapi(deleteAiExternalPagesPageIdRoute, deleteAiExternalPagesPageIdRouteHandler)
  .openapi(getAiExternalPagesPageIdRoute, getAiExternalPagesPageIdRouteHandler)
  .openapi(putAiExternalPagesPageIdRoute, putAiExternalPagesPageIdRouteHandler)
  .openapi(
    postAiExternalPagesExternalPageIdTagsRoute,
    postAiExternalPagesExternalPageIdTagsRouteHandler,
  )
  .openapi(
    deleteAiExternalPagesExternalPageIdTagsIdRoute,
    deleteAiExternalPagesExternalPageIdTagsIdRouteHandler,
  )
  .openapi(getArticlesRoute, getArticlesRouteHandler)
  .openapi(postArticlesRoute, postArticlesRouteHandler)
  .openapi(getArticlesArticleIdRoute, getArticlesArticleIdRouteHandler)
  .openapi(putArticlesArticleIdRoute, putArticlesArticleIdRouteHandler)
  .openapi(deleteArticlesArticleIdRoute, deleteArticlesArticleIdRouteHandler)
  .openapi(getArticlesIdDraftRoute, getArticlesIdDraftRouteHandler)
  .openapi(putArticlesIdDraftRoute, putArticlesIdDraftRouteHandler)
  .openapi(postArticlesIdDraftPublishRoute, postArticlesIdDraftPublishRouteHandler)
  .openapi(postArticlesArticleIdTagsRoute, postArticlesArticleIdTagsRouteHandler)
  .openapi(deleteArticlesArticleIdTagsIdRoute, deleteArticlesArticleIdTagsIdRouteHandler)
  .openapi(getArticlesArticleIdVersionsRoute, getArticlesArticleIdVersionsRouteHandler)
  .openapi(getArticlesArticleIdVersionsIdRoute, getArticlesArticleIdVersionsIdRouteHandler)
  .openapi(getArticlesSearchRoute, getArticlesSearchRouteHandler)
  .openapi(getAwayStatusReasonsRoute, getAwayStatusReasonsRouteHandler)
  .openapi(getAudiencesRoute, getAudiencesRouteHandler)
  .openapi(postAudiencesRoute, postAudiencesRouteHandler)
  .openapi(getAudiencesIdRoute, getAudiencesIdRouteHandler)
  .openapi(putAudiencesIdRoute, putAudiencesIdRouteHandler)
  .openapi(deleteAudiencesIdRoute, deleteAudiencesIdRouteHandler)
  .openapi(postExportReportingDataEnqueueRoute, postExportReportingDataEnqueueRouteHandler)
  .openapi(
    getExportReportingDataJobIdentifierRoute,
    getExportReportingDataJobIdentifierRouteHandler,
  )
  .openapi(getExportReportingDataGetDatasetsRoute, getExportReportingDataGetDatasetsRouteHandler)
  .openapi(
    getDownloadReportingDataJobIdentifierRoute,
    getDownloadReportingDataJobIdentifierRouteHandler,
  )
  .openapi(postFinStartRoute, postFinStartRouteHandler)
  .openapi(postFinReplyRoute, postFinReplyRouteHandler)
  .openapi(postFinCsatRoute, postFinCsatRouteHandler)
  .openapi(postFinCapabilitiesRoute, postFinCapabilitiesRouteHandler)
  .openapi(postFinAskRoute, postFinAskRouteHandler)
  .openapi(postFinProceduresProcedureIdRunRoute, postFinProceduresProcedureIdRunRouteHandler)
  .openapi(postFinEscalateRoute, postFinEscalateRouteHandler)
  .openapi(
    getHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
    getHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  )
  .openapi(
    postHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
    postHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  )
  .openapi(
    getHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
    getHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  )
  .openapi(
    deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
    deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  )
  .openapi(getHelpCenterCollectionsRoute, getHelpCenterCollectionsRouteHandler)
  .openapi(postHelpCenterCollectionsRoute, postHelpCenterCollectionsRouteHandler)
  .openapi(
    getHelpCenterCollectionsCollectionIdRoute,
    getHelpCenterCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    putHelpCenterCollectionsCollectionIdRoute,
    putHelpCenterCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    deleteHelpCenterCollectionsCollectionIdRoute,
    deleteHelpCenterCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    getHelpCenterHelpCentersHelpCenterIdRoute,
    getHelpCenterHelpCentersHelpCenterIdRouteHandler,
  )
  .openapi(getHelpCenterHelpCentersRoute, getHelpCenterHelpCentersRouteHandler)
  .openapi(getInternalArticlesRoute, getInternalArticlesRouteHandler)
  .openapi(postInternalArticlesRoute, postInternalArticlesRouteHandler)
  .openapi(
    getInternalArticlesInternalArticleIdRoute,
    getInternalArticlesInternalArticleIdRouteHandler,
  )
  .openapi(
    putInternalArticlesInternalArticleIdRoute,
    putInternalArticlesInternalArticleIdRouteHandler,
  )
  .openapi(
    deleteInternalArticlesInternalArticleIdRoute,
    deleteInternalArticlesInternalArticleIdRouteHandler,
  )
  .openapi(
    postInternalArticlesInternalArticleIdTagsRoute,
    postInternalArticlesInternalArticleIdTagsRouteHandler,
  )
  .openapi(
    deleteInternalArticlesInternalArticleIdTagsIdRoute,
    deleteInternalArticlesInternalArticleIdTagsIdRouteHandler,
  )
  .openapi(getInternalArticlesSearchRoute, getInternalArticlesSearchRouteHandler)
  .openapi(getFoldersRoute, getFoldersRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(getFoldersIdRoute, getFoldersIdRouteHandler)
  .openapi(putFoldersIdRoute, putFoldersIdRouteHandler)
  .openapi(deleteFoldersIdRoute, deleteFoldersIdRouteHandler)
  .openapi(getIpAllowlistRoute, getIpAllowlistRouteHandler)
  .openapi(putIpAllowlistRoute, putIpAllowlistRouteHandler)
  .openapi(postCompaniesRoute, postCompaniesRouteHandler)
  .openapi(getCompaniesRoute, getCompaniesRouteHandler)
  .openapi(getCompaniesCompanyIdRoute, getCompaniesCompanyIdRouteHandler)
  .openapi(putCompaniesCompanyIdRoute, putCompaniesCompanyIdRouteHandler)
  .openapi(deleteCompaniesCompanyIdRoute, deleteCompaniesCompanyIdRouteHandler)
  .openapi(getCompaniesCompanyIdContactsRoute, getCompaniesCompanyIdContactsRouteHandler)
  .openapi(getCompaniesCompanyIdSegmentsRoute, getCompaniesCompanyIdSegmentsRouteHandler)
  .openapi(getCompaniesCompanyIdNotesRoute, getCompaniesCompanyIdNotesRouteHandler)
  .openapi(postCompaniesCompanyIdNotesRoute, postCompaniesCompanyIdNotesRouteHandler)
  .openapi(postCompaniesSearchRoute, postCompaniesSearchRouteHandler)
  .openapi(postCompaniesListRoute, postCompaniesListRouteHandler)
  .openapi(getCompaniesScrollRoute, getCompaniesScrollRouteHandler)
  .openapi(postContactsContactIdCompaniesRoute, postContactsContactIdCompaniesRouteHandler)
  .openapi(getContactsContactIdCompaniesRoute, getContactsContactIdCompaniesRouteHandler)
  .openapi(
    deleteContactsContactIdCompaniesCompanyIdRoute,
    deleteContactsContactIdCompaniesCompanyIdRouteHandler,
  )
  .openapi(getContactsContactIdNotesRoute, getContactsContactIdNotesRouteHandler)
  .openapi(postContactsContactIdNotesRoute, postContactsContactIdNotesRouteHandler)
  .openapi(getContactsContactIdSegmentsRoute, getContactsContactIdSegmentsRouteHandler)
  .openapi(getContactsContactIdSubscriptionsRoute, getContactsContactIdSubscriptionsRouteHandler)
  .openapi(postContactsContactIdSubscriptionsRoute, postContactsContactIdSubscriptionsRouteHandler)
  .openapi(
    deleteContactsContactIdSubscriptionsSubscriptionIdRoute,
    deleteContactsContactIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getContactsContactIdTagsRoute, getContactsContactIdTagsRouteHandler)
  .openapi(postContactsContactIdTagsRoute, postContactsContactIdTagsRouteHandler)
  .openapi(deleteContactsContactIdTagsTagIdRoute, deleteContactsContactIdTagsTagIdRouteHandler)
  .openapi(getContactsDeletedRoute, getContactsDeletedRouteHandler)
  .openapi(putContactsContactIdRoute, putContactsContactIdRouteHandler)
  .openapi(getContactsContactIdRoute, getContactsContactIdRouteHandler)
  .openapi(deleteContactsContactIdRoute, deleteContactsContactIdRouteHandler)
  .openapi(postContactsMergeRoute, postContactsMergeRouteHandler)
  .openapi(postContactsMergePreviewRoute, postContactsMergePreviewRouteHandler)
  .openapi(postContactsSearchRoute, postContactsSearchRouteHandler)
  .openapi(getContactsActivitiesRoute, getContactsActivitiesRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(
    getContactsFindByExternalIdExternalIdRoute,
    getContactsFindByExternalIdExternalIdRouteHandler,
  )
  .openapi(postContactsContactIdArchiveRoute, postContactsContactIdArchiveRouteHandler)
  .openapi(postContactsContactIdUnarchiveRoute, postContactsContactIdUnarchiveRouteHandler)
  .openapi(getContactsIdBannersRoute, getContactsIdBannersRouteHandler)
  .openapi(postContactsIdBannersViewIdDismissRoute, postContactsIdBannersViewIdDismissRouteHandler)
  .openapi(postContactsContactIdBlockRoute, postContactsContactIdBlockRouteHandler)
  .openapi(getContactsIdMergeHistoriesRoute, getContactsIdMergeHistoriesRouteHandler)
  .openapi(postContactsBulkRoute, postContactsBulkRouteHandler)
  .openapi(putContactsBulkRoute, putContactsBulkRouteHandler)
  .openapi(postContactsBulkDeleteRoute, postContactsBulkDeleteRouteHandler)
  .openapi(getContactsBulkIdRoute, getContactsBulkIdRouteHandler)
  .openapi(postContentBulkActionsRoute, postContentBulkActionsRouteHandler)
  .openapi(getContentSearchRoute, getContentSearchRouteHandler)
  .openapi(getContentSnippetsRoute, getContentSnippetsRouteHandler)
  .openapi(postContentSnippetsRoute, postContentSnippetsRouteHandler)
  .openapi(getContentSnippetsIdRoute, getContentSnippetsIdRouteHandler)
  .openapi(putContentSnippetsIdRoute, putContentSnippetsIdRouteHandler)
  .openapi(deleteContentSnippetsIdRoute, deleteContentSnippetsIdRouteHandler)
  .openapi(
    postContentSnippetsContentSnippetIdTagsRoute,
    postContentSnippetsContentSnippetIdTagsRouteHandler,
  )
  .openapi(
    deleteContentSnippetsContentSnippetIdTagsIdRoute,
    deleteContentSnippetsContentSnippetIdTagsIdRouteHandler,
  )
  .openapi(getDynamicContentsRoute, getDynamicContentsRouteHandler)
  .openapi(postDynamicContentsRoute, postDynamicContentsRouteHandler)
  .openapi(getDynamicContentsIdRoute, getDynamicContentsIdRouteHandler)
  .openapi(putDynamicContentsIdRoute, putDynamicContentsIdRouteHandler)
  .openapi(deleteDynamicContentsIdRoute, deleteDynamicContentsIdRouteHandler)
  .openapi(
    postConversationsConversationIdTagsRoute,
    postConversationsConversationIdTagsRouteHandler,
  )
  .openapi(
    deleteConversationsConversationIdTagsTagIdRoute,
    deleteConversationsConversationIdTagsTagIdRouteHandler,
  )
  .openapi(getConversationsRoute, getConversationsRouteHandler)
  .openapi(postConversationsRoute, postConversationsRouteHandler)
  .openapi(getConversationsConversationIdRoute, getConversationsConversationIdRouteHandler)
  .openapi(putConversationsConversationIdRoute, putConversationsConversationIdRouteHandler)
  .openapi(deleteConversationsConversationIdRoute, deleteConversationsConversationIdRouteHandler)
  .openapi(postConversationsSearchRoute, postConversationsSearchRouteHandler)
  .openapi(
    postConversationsConversationIdReplyRoute,
    postConversationsConversationIdReplyRouteHandler,
  )
  .openapi(
    postConversationsConversationIdPartsRoute,
    postConversationsConversationIdPartsRouteHandler,
  )
  .openapi(
    postConversationsConversationIdCustomersRoute,
    postConversationsConversationIdCustomersRouteHandler,
  )
  .openapi(
    deleteConversationsConversationIdCustomersContactIdRoute,
    deleteConversationsConversationIdCustomersContactIdRouteHandler,
  )
  .openapi(getConversationsIdHandlingEventsRoute, getConversationsIdHandlingEventsRouteHandler)
  .openapi(getConversationsIdHitlEventsRoute, getConversationsIdHitlEventsRouteHandler)
  .openapi(
    getConversationsIdSideConversationsRoute,
    getConversationsIdSideConversationsRouteHandler,
  )
  .openapi(
    postConversationsConversationIdRatingRoute,
    postConversationsConversationIdRatingRouteHandler,
  )
  .openapi(postConversationsRedactRoute, postConversationsRedactRouteHandler)
  .openapi(postConversationsIdMergeRoute, postConversationsIdMergeRouteHandler)
  .openapi(
    postConversationsConversationIdConvertRoute,
    postConversationsConversationIdConvertRouteHandler,
  )
  .openapi(getConversationsDeletedRoute, getConversationsDeletedRouteHandler)
  .openapi(postConversationsStreamTokenRoute, postConversationsStreamTokenRouteHandler)
  .openapi(deleteConversationsStreamTokenRoute, deleteConversationsStreamTokenRouteHandler)
  .openapi(getConversationsAttributesRoute, getConversationsAttributesRouteHandler)
  .openapi(postConversationsAttributesRoute, postConversationsAttributesRouteHandler)
  .openapi(getConversationsAttributesIdRoute, getConversationsAttributesIdRouteHandler)
  .openapi(putConversationsAttributesIdRoute, putConversationsAttributesIdRouteHandler)
  .openapi(deleteConversationsAttributesIdRoute, deleteConversationsAttributesIdRouteHandler)
  .openapi(
    postConversationsAttributesIdOptionsRoute,
    postConversationsAttributesIdOptionsRouteHandler,
  )
  .openapi(
    putConversationsAttributesIdOptionsOptionIdRoute,
    putConversationsAttributesIdOptionsOptionIdRouteHandler,
  )
  .openapi(
    deleteConversationsAttributesIdOptionsOptionIdRoute,
    deleteConversationsAttributesIdOptionsOptionIdRouteHandler,
  )
  .openapi(
    postCustomObjectInstancesCustomObjectTypeIdentifierRoute,
    postCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  )
  .openapi(
    getCustomObjectInstancesCustomObjectTypeIdentifierRoute,
    getCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  )
  .openapi(
    deleteCustomObjectInstancesCustomObjectTypeIdentifierRoute,
    deleteCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  )
  .openapi(
    getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
    getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  )
  .openapi(
    deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
    deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  )
  .openapi(getDataAttributesRoute, getDataAttributesRouteHandler)
  .openapi(postDataAttributesRoute, postDataAttributesRouteHandler)
  .openapi(putDataAttributesDataAttributeIdRoute, putDataAttributesDataAttributeIdRouteHandler)
  .openapi(getDataConnectorsRoute, getDataConnectorsRouteHandler)
  .openapi(postDataConnectorsRoute, postDataConnectorsRouteHandler)
  .openapi(getDataConnectorsIdRoute, getDataConnectorsIdRouteHandler)
  .openapi(deleteDataConnectorsIdRoute, deleteDataConnectorsIdRouteHandler)
  .openapi(patchDataConnectorsIdRoute, patchDataConnectorsIdRouteHandler)
  .openapi(
    getDataConnectorsDataConnectorIdExecutionResultsRoute,
    getDataConnectorsDataConnectorIdExecutionResultsRouteHandler,
  )
  .openapi(
    getDataConnectorsDataConnectorIdExecutionResultsIdRoute,
    getDataConnectorsDataConnectorIdExecutionResultsIdRouteHandler,
  )
  .openapi(getDataConnectorsIdVersionsRoute, getDataConnectorsIdVersionsRouteHandler)
  .openapi(
    getDataConnectorsIdVersionsVersionIdRoute,
    getDataConnectorsIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    patchDataConnectorsIdVersionsVersionIdRoute,
    patchDataConnectorsIdVersionsVersionIdRouteHandler,
  )
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsSummariesRoute, postEventsSummariesRouteHandler)
  .openapi(postExportContentDataRoute, postExportContentDataRouteHandler)
  .openapi(getExportContentDataJobIdentifierRoute, getExportContentDataJobIdentifierRouteHandler)
  .openapi(postExportCancelJobIdentifierRoute, postExportCancelJobIdentifierRouteHandler)
  .openapi(
    getDownloadContentDataJobIdentifierRoute,
    getDownloadContentDataJobIdentifierRouteHandler,
  )
  .openapi(getJobsStatusJobIdRoute, getJobsStatusJobIdRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(getMessagesWhatsappStatusRoute, getMessagesWhatsappStatusRouteHandler)
  .openapi(getMessagesStatusRoute, getMessagesStatusRouteHandler)
  .openapi(getNewsNewsItemsRoute, getNewsNewsItemsRouteHandler)
  .openapi(postNewsNewsItemsRoute, postNewsNewsItemsRouteHandler)
  .openapi(getNewsNewsItemsNewsItemIdRoute, getNewsNewsItemsNewsItemIdRouteHandler)
  .openapi(putNewsNewsItemsNewsItemIdRoute, putNewsNewsItemsNewsItemIdRouteHandler)
  .openapi(deleteNewsNewsItemsNewsItemIdRoute, deleteNewsNewsItemsNewsItemIdRouteHandler)
  .openapi(getNewsNewsfeedsNewsfeedIdItemsRoute, getNewsNewsfeedsNewsfeedIdItemsRouteHandler)
  .openapi(getNewsNewsfeedsRoute, getNewsNewsfeedsRouteHandler)
  .openapi(getNewsNewsfeedsNewsfeedIdRoute, getNewsNewsfeedsNewsfeedIdRouteHandler)
  .openapi(getNotesNoteIdRoute, getNotesNoteIdRouteHandler)
  .openapi(deleteNotesNoteIdRoute, deleteNotesNoteIdRouteHandler)
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(getSegmentsSegmentIdRoute, getSegmentsSegmentIdRouteHandler)
  .openapi(getSubscriptionTypesRoute, getSubscriptionTypesRouteHandler)
  .openapi(getSubscriptionTypesIdRoute, getSubscriptionTypesIdRouteHandler)
  .openapi(postPhoneCallRedirectsRoute, postPhoneCallRedirectsRouteHandler)
  .openapi(getCallsRoute, getCallsRouteHandler)
  .openapi(getCallsCallIdRoute, getCallsCallIdRouteHandler)
  .openapi(getCallsCallIdRecordingRoute, getCallsCallIdRecordingRouteHandler)
  .openapi(getCallsIdTranscriptRoute, getCallsIdTranscriptRouteHandler)
  .openapi(postCallsSearchRoute, postCallsSearchRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(getTagsTagIdRoute, getTagsTagIdRouteHandler)
  .openapi(deleteTagsTagIdRoute, deleteTagsTagIdRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getTeamsTeamIdRoute, getTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdMetricsRoute, getTeamsTeamIdMetricsRouteHandler)
  .openapi(getTicketStatesRoute, getTicketStatesRouteHandler)
  .openapi(
    postTicketTypesTicketTypeIdAttributesRoute,
    postTicketTypesTicketTypeIdAttributesRouteHandler,
  )
  .openapi(
    putTicketTypesTicketTypeIdAttributesAttributeIdRoute,
    putTicketTypesTicketTypeIdAttributesAttributeIdRouteHandler,
  )
  .openapi(getTicketTypesRoute, getTicketTypesRouteHandler)
  .openapi(postTicketTypesRoute, postTicketTypesRouteHandler)
  .openapi(getTicketTypesTicketTypeIdRoute, getTicketTypesTicketTypeIdRouteHandler)
  .openapi(putTicketTypesTicketTypeIdRoute, putTicketTypesTicketTypeIdRouteHandler)
  .openapi(postTicketsTicketIdReplyRoute, postTicketsTicketIdReplyRouteHandler)
  .openapi(postTicketsTicketIdTagsRoute, postTicketsTicketIdTagsRouteHandler)
  .openapi(deleteTicketsTicketIdTagsTagIdRoute, deleteTicketsTicketIdTagsTagIdRouteHandler)
  .openapi(
    postTicketsTicketIdLinkedConversationsRoute,
    postTicketsTicketIdLinkedConversationsRouteHandler,
  )
  .openapi(
    deleteTicketsTicketIdLinkedConversationsIdRoute,
    deleteTicketsTicketIdLinkedConversationsIdRouteHandler,
  )
  .openapi(postTicketsRoute, postTicketsRouteHandler)
  .openapi(postTicketsEnqueueRoute, postTicketsEnqueueRouteHandler)
  .openapi(putTicketsTicketIdRoute, putTicketsTicketIdRouteHandler)
  .openapi(getTicketsTicketIdRoute, getTicketsTicketIdRouteHandler)
  .openapi(deleteTicketsTicketIdRoute, deleteTicketsTicketIdRouteHandler)
  .openapi(postTicketsTicketIdChangeTypeRoute, postTicketsTicketIdChangeTypeRouteHandler)
  .openapi(postTicketsSearchRoute, postTicketsSearchRouteHandler)
  .openapi(putVisitorsRoute, putVisitorsRouteHandler)
  .openapi(getVisitorsRoute, getVisitorsRouteHandler)
  .openapi(postVisitorsConvertRoute, postVisitorsConvertRouteHandler)
  .openapi(getBrandsRoute, getBrandsRouteHandler)
  .openapi(getBrandsIdRoute, getBrandsIdRouteHandler)
  .openapi(getEmailsRoute, getEmailsRouteHandler)
  .openapi(getEmailsIdRoute, getEmailsIdRouteHandler)
  .openapi(postFinVoiceRegisterRoute, postFinVoiceRegisterRouteHandler)
  .openapi(getFinVoiceCollectIdRoute, getFinVoiceCollectIdRouteHandler)
  .openapi(getFinVoiceExternalIdExternalIdRoute, getFinVoiceExternalIdExternalIdRouteHandler)
  .openapi(getFinVoicePhoneNumberPhoneNumberRoute, getFinVoicePhoneNumberPhoneNumberRouteHandler)
  .openapi(
    getFinVoiceConversationConversationIdRoute,
    getFinVoiceConversationConversationIdRouteHandler,
  )
  .openapi(getExportWorkflowsIdRoute, getExportWorkflowsIdRouteHandler)

export default app
