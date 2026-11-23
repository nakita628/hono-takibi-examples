import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminsRemoveRoute,
  deleteAiContentImportSourcesSourceIdRoute,
  deleteAiExternalPagesExternalPageIdTagsIdRoute,
  deleteAiExternalPagesPageIdRoute,
  deleteArticlesArticleIdRoute,
  deleteArticlesArticleIdTagsIdRoute,
  deleteAudiencesIdRoute,
  deleteCompaniesCompanyIdRoute,
  deleteContactsContactIdCompaniesCompanyIdRoute,
  deleteContactsContactIdRoute,
  deleteContactsContactIdSubscriptionsSubscriptionIdRoute,
  deleteContactsContactIdTagsTagIdRoute,
  deleteContentSnippetsContentSnippetIdTagsIdRoute,
  deleteContentSnippetsIdRoute,
  deleteConversationsAttributesIdOptionsOptionIdRoute,
  deleteConversationsAttributesIdRoute,
  deleteConversationsConversationIdCustomersContactIdRoute,
  deleteConversationsConversationIdRoute,
  deleteConversationsConversationIdTagsTagIdRoute,
  deleteConversationsStreamTokenRoute,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  deleteDataConnectorsIdRoute,
  deleteDynamicContentsIdRoute,
  deleteFoldersIdRoute,
  deleteHelpCenterCollectionsCollectionIdRoute,
  deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  deleteInternalArticlesInternalArticleIdRoute,
  deleteInternalArticlesInternalArticleIdTagsIdRoute,
  deleteNewsNewsItemsNewsItemIdRoute,
  deleteNotesNoteIdRoute,
  deleteOfficeHoursSchedulesIdRoute,
  deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  deleteTagsTagIdRoute,
  deleteTicketsTicketIdLinkedConversationsIdRoute,
  deleteTicketsTicketIdRoute,
  deleteTicketsTicketIdTagsTagIdRoute,
  getAdminsActivityLogEventTypesRoute,
  getAdminsActivityLogsRoute,
  getAdminsAdminIdRoute,
  getAdminsRoute,
  getAiContentImportSourcesRoute,
  getAiContentImportSourcesSourceIdRoute,
  getAiExternalPagesPageIdRoute,
  getAiExternalPagesRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesIdDraftRoute,
  getArticlesRoute,
  getArticlesSearchRoute,
  getAudiencesIdRoute,
  getAudiencesRoute,
  getAwayStatusReasonsRoute,
  getBrandsIdRoute,
  getBrandsRoute,
  getCallsCallIdRecordingRoute,
  getCallsCallIdRoute,
  getCallsIdTranscriptRoute,
  getCallsRoute,
  getCompaniesCompanyIdContactsRoute,
  getCompaniesCompanyIdNotesRoute,
  getCompaniesCompanyIdRoute,
  getCompaniesCompanyIdSegmentsRoute,
  getCompaniesRoute,
  getCompaniesScrollRoute,
  getContactsActivitiesRoute,
  getContactsBulkIdRoute,
  getContactsContactIdCompaniesRoute,
  getContactsContactIdNotesRoute,
  getContactsContactIdRoute,
  getContactsContactIdSegmentsRoute,
  getContactsContactIdSubscriptionsRoute,
  getContactsContactIdTagsRoute,
  getContactsDeletedRoute,
  getContactsFindByExternalIdExternalIdRoute,
  getContactsIdBannersRoute,
  getContactsIdMergeHistoriesRoute,
  getContactsRoute,
  getContentSearchRoute,
  getContentSnippetsIdRoute,
  getContentSnippetsRoute,
  getConversationsAttributesIdRoute,
  getConversationsAttributesRoute,
  getConversationsConversationIdRoute,
  getConversationsDeletedRoute,
  getConversationsIdHandlingEventsRoute,
  getConversationsIdHitlEventsRoute,
  getConversationsIdSideConversationsRoute,
  getConversationsRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRoute,
  getCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  getDataAttributesRoute,
  getDataConnectorsDataConnectorIdExecutionResultsIdRoute,
  getDataConnectorsDataConnectorIdExecutionResultsRoute,
  getDataConnectorsIdRoute,
  getDataConnectorsIdVersionsRoute,
  getDataConnectorsIdVersionsVersionIdRoute,
  getDataConnectorsRoute,
  getDownloadContentDataJobIdentifierRoute,
  getDownloadReportingDataJobIdentifierRoute,
  getDynamicContentsIdRoute,
  getDynamicContentsRoute,
  getEmailsIdRoute,
  getEmailsRoute,
  getEventsRoute,
  getExportContentDataJobIdentifierRoute,
  getExportReportingDataGetDatasetsRoute,
  getExportReportingDataJobIdentifierRoute,
  getExportWorkflowsIdRoute,
  getFinVoiceCollectIdRoute,
  getFinVoiceConversationConversationIdRoute,
  getFinVoiceExternalIdExternalIdRoute,
  getFinVoicePhoneNumberPhoneNumberRoute,
  getFoldersIdRoute,
  getFoldersRoute,
  getHelpCenterCollectionsCollectionIdRoute,
  getHelpCenterCollectionsRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  getHelpCenterHelpCentersHelpCenterIdRoute,
  getHelpCenterHelpCentersRoute,
  getInternalArticlesInternalArticleIdRoute,
  getInternalArticlesRoute,
  getInternalArticlesSearchRoute,
  getIpAllowlistRoute,
  getJobsStatusJobIdRoute,
  getMacrosIdRoute,
  getMacrosRoute,
  getMeRoute,
  getMessagesStatusRoute,
  getMessagesWhatsappStatusRoute,
  getNewsNewsfeedsNewsfeedIdItemsRoute,
  getNewsNewsfeedsNewsfeedIdRoute,
  getNewsNewsfeedsRoute,
  getNewsNewsItemsNewsItemIdRoute,
  getNewsNewsItemsRoute,
  getNotesNoteIdRoute,
  getOfficeHoursSchedulesIdRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  getOfficeHoursSchedulesRoute,
  getSegmentsRoute,
  getSegmentsSegmentIdRoute,
  getSubscriptionTypesIdRoute,
  getSubscriptionTypesRoute,
  getTagsRoute,
  getTagsTagIdRoute,
  getTeamsRoute,
  getTeamsTeamIdMetricsRoute,
  getTeamsTeamIdRoute,
  getTicketStatesRoute,
  getTicketsTicketIdRoute,
  getTicketTypesRoute,
  getTicketTypesTicketTypeIdRoute,
  getVisitorsRoute,
  patchDataConnectorsIdRoute,
  patchDataConnectorsIdVersionsVersionIdRoute,
  postAdminsActivityLogsSearchRoute,
  postAiContentImportSourcesRoute,
  postAiExternalPagesExternalPageIdTagsRoute,
  postAiExternalPagesRoute,
  postArticlesArticleIdTagsRoute,
  postArticlesIdDraftPublishRoute,
  postArticlesRoute,
  postAudiencesRoute,
  postCallsSearchRoute,
  postCompaniesCompanyIdNotesRoute,
  postCompaniesListRoute,
  postCompaniesRoute,
  postCompaniesSearchRoute,
  postContactsBulkDeleteRoute,
  postContactsBulkRoute,
  postContactsContactIdArchiveRoute,
  postContactsContactIdBlockRoute,
  postContactsContactIdCompaniesRoute,
  postContactsContactIdNotesRoute,
  postContactsContactIdSubscriptionsRoute,
  postContactsContactIdTagsRoute,
  postContactsContactIdUnarchiveRoute,
  postContactsIdBannersViewIdDismissRoute,
  postContactsMergePreviewRoute,
  postContactsMergeRoute,
  postContactsRoute,
  postContactsSearchRoute,
  postContentBulkActionsRoute,
  postContentSnippetsContentSnippetIdTagsRoute,
  postContentSnippetsRoute,
  postConversationsAttributesIdOptionsRoute,
  postConversationsAttributesRoute,
  postConversationsConversationIdConvertRoute,
  postConversationsConversationIdCustomersRoute,
  postConversationsConversationIdPartsRoute,
  postConversationsConversationIdRatingRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdTagsRoute,
  postConversationsIdMergeRoute,
  postConversationsRedactRoute,
  postConversationsRoute,
  postConversationsSearchRoute,
  postConversationsStreamTokenRoute,
  postCustomObjectInstancesCustomObjectTypeIdentifierRoute,
  postDataAttributesRoute,
  postDataConnectorsRoute,
  postDynamicContentsRoute,
  postEventsRoute,
  postEventsSummariesRoute,
  postExportCancelJobIdentifierRoute,
  postExportContentDataRoute,
  postExportReportingDataEnqueueRoute,
  postFinAskRoute,
  postFinCapabilitiesRoute,
  postFinCsatRoute,
  postFinEscalateRoute,
  postFinProceduresProcedureIdRunRoute,
  postFinReplyRoute,
  postFinStartRoute,
  postFinVoiceRegisterRoute,
  postFoldersRoute,
  postHelpCenterCollectionsRoute,
  postHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  postInternalArticlesInternalArticleIdTagsRoute,
  postInternalArticlesRoute,
  postMessagesRoute,
  postNewsNewsItemsRoute,
  postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRoute,
  postOfficeHoursSchedulesRoute,
  postPhoneCallRedirectsRoute,
  postTagsRoute,
  postTicketsEnqueueRoute,
  postTicketsRoute,
  postTicketsSearchRoute,
  postTicketsTicketIdChangeTypeRoute,
  postTicketsTicketIdLinkedConversationsRoute,
  postTicketsTicketIdReplyRoute,
  postTicketsTicketIdTagsRoute,
  postTicketTypesRoute,
  postTicketTypesTicketTypeIdAttributesRoute,
  postVisitorsConvertRoute,
  putAdminsAdminIdAwayRoute,
  putAiContentImportSourcesSourceIdRoute,
  putAiExternalPagesPageIdRoute,
  putArticlesArticleIdRoute,
  putArticlesIdDraftRoute,
  putAudiencesIdRoute,
  putCompaniesCompanyIdRoute,
  putContactsBulkRoute,
  putContactsContactIdRoute,
  putContentSnippetsIdRoute,
  putConversationsAttributesIdOptionsOptionIdRoute,
  putConversationsAttributesIdRoute,
  putConversationsConversationIdRoute,
  putDataAttributesDataAttributeIdRoute,
  putDynamicContentsIdRoute,
  putFoldersIdRoute,
  putHelpCenterCollectionsCollectionIdRoute,
  putInternalArticlesInternalArticleIdRoute,
  putIpAllowlistRoute,
  putNewsNewsItemsNewsItemIdRoute,
  putOfficeHoursSchedulesIdRoute,
  putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRoute,
  putTicketsTicketIdRoute,
  putTicketTypesTicketTypeIdAttributesAttributeIdRoute,
  putTicketTypesTicketTypeIdRoute,
  putVisitorsRoute,
} from './routes'
import {
  deleteAdminsRemoveRouteHandler,
  deleteAiContentImportSourcesSourceIdRouteHandler,
  deleteAiExternalPagesExternalPageIdTagsIdRouteHandler,
  deleteAiExternalPagesPageIdRouteHandler,
  deleteArticlesArticleIdRouteHandler,
  deleteArticlesArticleIdTagsIdRouteHandler,
  deleteAudiencesIdRouteHandler,
  deleteCompaniesCompanyIdRouteHandler,
  deleteContactsContactIdCompaniesCompanyIdRouteHandler,
  deleteContactsContactIdRouteHandler,
  deleteContactsContactIdSubscriptionsSubscriptionIdRouteHandler,
  deleteContactsContactIdTagsTagIdRouteHandler,
  deleteContentSnippetsContentSnippetIdTagsIdRouteHandler,
  deleteContentSnippetsIdRouteHandler,
  deleteConversationsAttributesIdOptionsOptionIdRouteHandler,
  deleteConversationsAttributesIdRouteHandler,
  deleteConversationsConversationIdCustomersContactIdRouteHandler,
  deleteConversationsConversationIdRouteHandler,
  deleteConversationsConversationIdTagsTagIdRouteHandler,
  deleteConversationsStreamTokenRouteHandler,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  deleteCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  deleteDataConnectorsIdRouteHandler,
  deleteDynamicContentsIdRouteHandler,
  deleteFoldersIdRouteHandler,
  deleteHelpCenterCollectionsCollectionIdRouteHandler,
  deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  deleteInternalArticlesInternalArticleIdRouteHandler,
  deleteInternalArticlesInternalArticleIdTagsIdRouteHandler,
  deleteNewsNewsItemsNewsItemIdRouteHandler,
  deleteNotesNoteIdRouteHandler,
  deleteOfficeHoursSchedulesIdRouteHandler,
  deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  deleteTagsTagIdRouteHandler,
  deleteTicketsTicketIdLinkedConversationsIdRouteHandler,
  deleteTicketsTicketIdRouteHandler,
  deleteTicketsTicketIdTagsTagIdRouteHandler,
  getAdminsActivityLogEventTypesRouteHandler,
  getAdminsActivityLogsRouteHandler,
  getAdminsAdminIdRouteHandler,
  getAdminsRouteHandler,
  getAiContentImportSourcesRouteHandler,
  getAiContentImportSourcesSourceIdRouteHandler,
  getAiExternalPagesPageIdRouteHandler,
  getAiExternalPagesRouteHandler,
  getArticlesArticleIdRouteHandler,
  getArticlesArticleIdVersionsIdRouteHandler,
  getArticlesArticleIdVersionsRouteHandler,
  getArticlesIdDraftRouteHandler,
  getArticlesRouteHandler,
  getArticlesSearchRouteHandler,
  getAudiencesIdRouteHandler,
  getAudiencesRouteHandler,
  getAwayStatusReasonsRouteHandler,
  getBrandsIdRouteHandler,
  getBrandsRouteHandler,
  getCallsCallIdRecordingRouteHandler,
  getCallsCallIdRouteHandler,
  getCallsIdTranscriptRouteHandler,
  getCallsRouteHandler,
  getCompaniesCompanyIdContactsRouteHandler,
  getCompaniesCompanyIdNotesRouteHandler,
  getCompaniesCompanyIdRouteHandler,
  getCompaniesCompanyIdSegmentsRouteHandler,
  getCompaniesRouteHandler,
  getCompaniesScrollRouteHandler,
  getContactsActivitiesRouteHandler,
  getContactsBulkIdRouteHandler,
  getContactsContactIdCompaniesRouteHandler,
  getContactsContactIdNotesRouteHandler,
  getContactsContactIdRouteHandler,
  getContactsContactIdSegmentsRouteHandler,
  getContactsContactIdSubscriptionsRouteHandler,
  getContactsContactIdTagsRouteHandler,
  getContactsDeletedRouteHandler,
  getContactsFindByExternalIdExternalIdRouteHandler,
  getContactsIdBannersRouteHandler,
  getContactsIdMergeHistoriesRouteHandler,
  getContactsRouteHandler,
  getContentSearchRouteHandler,
  getContentSnippetsIdRouteHandler,
  getContentSnippetsRouteHandler,
  getConversationsAttributesIdRouteHandler,
  getConversationsAttributesRouteHandler,
  getConversationsConversationIdRouteHandler,
  getConversationsDeletedRouteHandler,
  getConversationsIdHandlingEventsRouteHandler,
  getConversationsIdHitlEventsRouteHandler,
  getConversationsIdSideConversationsRouteHandler,
  getConversationsRouteHandler,
  getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceIdRouteHandler,
  getCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  getDataAttributesRouteHandler,
  getDataConnectorsDataConnectorIdExecutionResultsIdRouteHandler,
  getDataConnectorsDataConnectorIdExecutionResultsRouteHandler,
  getDataConnectorsIdRouteHandler,
  getDataConnectorsIdVersionsRouteHandler,
  getDataConnectorsIdVersionsVersionIdRouteHandler,
  getDataConnectorsRouteHandler,
  getDownloadContentDataJobIdentifierRouteHandler,
  getDownloadReportingDataJobIdentifierRouteHandler,
  getDynamicContentsIdRouteHandler,
  getDynamicContentsRouteHandler,
  getEmailsIdRouteHandler,
  getEmailsRouteHandler,
  getEventsRouteHandler,
  getExportContentDataJobIdentifierRouteHandler,
  getExportReportingDataGetDatasetsRouteHandler,
  getExportReportingDataJobIdentifierRouteHandler,
  getExportWorkflowsIdRouteHandler,
  getFinVoiceCollectIdRouteHandler,
  getFinVoiceConversationConversationIdRouteHandler,
  getFinVoiceExternalIdExternalIdRouteHandler,
  getFinVoicePhoneNumberPhoneNumberRouteHandler,
  getFoldersIdRouteHandler,
  getFoldersRouteHandler,
  getHelpCenterCollectionsCollectionIdRouteHandler,
  getHelpCenterCollectionsRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRedirectsIdRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  getHelpCenterHelpCentersHelpCenterIdRouteHandler,
  getHelpCenterHelpCentersRouteHandler,
  getInternalArticlesInternalArticleIdRouteHandler,
  getInternalArticlesRouteHandler,
  getInternalArticlesSearchRouteHandler,
  getIpAllowlistRouteHandler,
  getJobsStatusJobIdRouteHandler,
  getMacrosIdRouteHandler,
  getMacrosRouteHandler,
  getMeRouteHandler,
  getMessagesStatusRouteHandler,
  getMessagesWhatsappStatusRouteHandler,
  getNewsNewsfeedsNewsfeedIdItemsRouteHandler,
  getNewsNewsfeedsNewsfeedIdRouteHandler,
  getNewsNewsfeedsRouteHandler,
  getNewsNewsItemsNewsItemIdRouteHandler,
  getNewsNewsItemsRouteHandler,
  getNotesNoteIdRouteHandler,
  getOfficeHoursSchedulesIdRouteHandler,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  getOfficeHoursSchedulesRouteHandler,
  getSegmentsRouteHandler,
  getSegmentsSegmentIdRouteHandler,
  getSubscriptionTypesIdRouteHandler,
  getSubscriptionTypesRouteHandler,
  getTagsRouteHandler,
  getTagsTagIdRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdMetricsRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTicketStatesRouteHandler,
  getTicketsTicketIdRouteHandler,
  getTicketTypesRouteHandler,
  getTicketTypesTicketTypeIdRouteHandler,
  getVisitorsRouteHandler,
  patchDataConnectorsIdRouteHandler,
  patchDataConnectorsIdVersionsVersionIdRouteHandler,
  postAdminsActivityLogsSearchRouteHandler,
  postAiContentImportSourcesRouteHandler,
  postAiExternalPagesExternalPageIdTagsRouteHandler,
  postAiExternalPagesRouteHandler,
  postArticlesArticleIdTagsRouteHandler,
  postArticlesIdDraftPublishRouteHandler,
  postArticlesRouteHandler,
  postAudiencesRouteHandler,
  postCallsSearchRouteHandler,
  postCompaniesCompanyIdNotesRouteHandler,
  postCompaniesListRouteHandler,
  postCompaniesRouteHandler,
  postCompaniesSearchRouteHandler,
  postContactsBulkDeleteRouteHandler,
  postContactsBulkRouteHandler,
  postContactsContactIdArchiveRouteHandler,
  postContactsContactIdBlockRouteHandler,
  postContactsContactIdCompaniesRouteHandler,
  postContactsContactIdNotesRouteHandler,
  postContactsContactIdSubscriptionsRouteHandler,
  postContactsContactIdTagsRouteHandler,
  postContactsContactIdUnarchiveRouteHandler,
  postContactsIdBannersViewIdDismissRouteHandler,
  postContactsMergePreviewRouteHandler,
  postContactsMergeRouteHandler,
  postContactsRouteHandler,
  postContactsSearchRouteHandler,
  postContentBulkActionsRouteHandler,
  postContentSnippetsContentSnippetIdTagsRouteHandler,
  postContentSnippetsRouteHandler,
  postConversationsAttributesIdOptionsRouteHandler,
  postConversationsAttributesRouteHandler,
  postConversationsConversationIdConvertRouteHandler,
  postConversationsConversationIdCustomersRouteHandler,
  postConversationsConversationIdPartsRouteHandler,
  postConversationsConversationIdRatingRouteHandler,
  postConversationsConversationIdReplyRouteHandler,
  postConversationsConversationIdTagsRouteHandler,
  postConversationsIdMergeRouteHandler,
  postConversationsRedactRouteHandler,
  postConversationsRouteHandler,
  postConversationsSearchRouteHandler,
  postConversationsStreamTokenRouteHandler,
  postCustomObjectInstancesCustomObjectTypeIdentifierRouteHandler,
  postDataAttributesRouteHandler,
  postDataConnectorsRouteHandler,
  postDynamicContentsRouteHandler,
  postEventsRouteHandler,
  postEventsSummariesRouteHandler,
  postExportCancelJobIdentifierRouteHandler,
  postExportContentDataRouteHandler,
  postExportReportingDataEnqueueRouteHandler,
  postFinAskRouteHandler,
  postFinCapabilitiesRouteHandler,
  postFinCsatRouteHandler,
  postFinEscalateRouteHandler,
  postFinProceduresProcedureIdRunRouteHandler,
  postFinReplyRouteHandler,
  postFinStartRouteHandler,
  postFinVoiceRegisterRouteHandler,
  postFoldersRouteHandler,
  postHelpCenterCollectionsRouteHandler,
  postHelpCenterHelpCentersHelpCenterIdRedirectsRouteHandler,
  postInternalArticlesInternalArticleIdTagsRouteHandler,
  postInternalArticlesRouteHandler,
  postMessagesRouteHandler,
  postNewsNewsItemsRouteHandler,
  postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsRouteHandler,
  postOfficeHoursSchedulesRouteHandler,
  postPhoneCallRedirectsRouteHandler,
  postTagsRouteHandler,
  postTicketsEnqueueRouteHandler,
  postTicketsRouteHandler,
  postTicketsSearchRouteHandler,
  postTicketsTicketIdChangeTypeRouteHandler,
  postTicketsTicketIdLinkedConversationsRouteHandler,
  postTicketsTicketIdReplyRouteHandler,
  postTicketsTicketIdTagsRouteHandler,
  postTicketTypesRouteHandler,
  postTicketTypesTicketTypeIdAttributesRouteHandler,
  postVisitorsConvertRouteHandler,
  putAdminsAdminIdAwayRouteHandler,
  putAiContentImportSourcesSourceIdRouteHandler,
  putAiExternalPagesPageIdRouteHandler,
  putArticlesArticleIdRouteHandler,
  putArticlesIdDraftRouteHandler,
  putAudiencesIdRouteHandler,
  putCompaniesCompanyIdRouteHandler,
  putContactsBulkRouteHandler,
  putContactsContactIdRouteHandler,
  putContentSnippetsIdRouteHandler,
  putConversationsAttributesIdOptionsOptionIdRouteHandler,
  putConversationsAttributesIdRouteHandler,
  putConversationsConversationIdRouteHandler,
  putDataAttributesDataAttributeIdRouteHandler,
  putDynamicContentsIdRouteHandler,
  putFoldersIdRouteHandler,
  putHelpCenterCollectionsCollectionIdRouteHandler,
  putInternalArticlesInternalArticleIdRouteHandler,
  putIpAllowlistRouteHandler,
  putNewsNewsItemsNewsItemIdRouteHandler,
  putOfficeHoursSchedulesIdRouteHandler,
  putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsIdRouteHandler,
  putTicketsTicketIdRouteHandler,
  putTicketTypesTicketTypeIdAttributesAttributeIdRouteHandler,
  putTicketTypesTicketTypeIdRouteHandler,
  putVisitorsRouteHandler,
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
