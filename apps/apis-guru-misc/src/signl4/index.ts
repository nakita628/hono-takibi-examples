import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesTeamIdCategoryIdRoute,
  deleteScriptsInstancesInstanceIdRoute,
  deleteTeamsTeamIdMembershipsUserIdRoute,
  deleteTeamsTeamIdSchedulesDutyIdRoute,
  deleteWebhooksWebhookIdRoute,
  getAlertsAlertIdAnnotationsRoute,
  getAlertsAlertIdAttachmentsAttachmentIdRoute,
  getAlertsAlertIdAttachmentsRoute,
  getAlertsAlertIdNotificationsRoute,
  getAlertsAlertIdOverviewRoute,
  getAlertsAlertIdRoute,
  getAlertsReportRoute,
  getCategoriesImagesRoute,
  getCategoriesTeamIdCategoryIdMetricsRoute,
  getCategoriesTeamIdCategoryIdRoute,
  getCategoriesTeamIdCategoryIdSubscriptionsRoute,
  getCategoriesTeamIdMetricsRoute,
  getCategoriesTeamIdRoute,
  getEventsEventIdOverviewRoute,
  getEventsEventIdParametersRoute,
  getPrepaidBalanceRoute,
  getPrepaidSettingsRoute,
  getPrepaidTransactionsRoute,
  getScriptsInstancesInstanceIdRoute,
  getScriptsInstancesRoute,
  getScriptsInventoryParsedRoute,
  getScriptsInventoryParsedScriptIdRoute,
  getScriptsInventoryRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdChannelPricesRoute,
  getSubscriptionsSubscriptionIdFeaturesRoute,
  getSubscriptionsSubscriptionIdPrepaidBalanceRoute,
  getSubscriptionsSubscriptionIdPrepaidSettingsRoute,
  getSubscriptionsSubscriptionIdPrepaidTransactionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdTeamsRoute,
  getSubscriptionsSubscriptionIdUserLicensesRoute,
  getTeamsRoute,
  getTeamsTeamIdAlertReportsFileNameRoute,
  getTeamsTeamIdAlertReportsRoute,
  getTeamsTeamIdAlertSettingsRoute,
  getTeamsTeamIdDutyReportsFileNameRoute,
  getTeamsTeamIdDutyReportsRoute,
  getTeamsTeamIdDutysummaryRoute,
  getTeamsTeamIdEventSourcesRoute,
  getTeamsTeamIdMembershipsRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdSchedulesRoute,
  getTeamsTeamIdSchedulesScheduleIdRoute,
  getTeamsTeamIdSetupProgressRoute,
  getUsersRoute,
  getUsersUserIdDutyStatusRoute,
  getUsersUserIdImageRoute,
  getUsersUserIdRoute,
  getUsersUserIdSetupProgressRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  postAlertsAcknowledgeAllRoute,
  postAlertsAcknowledgeMultipleRoute,
  postAlertsAlertIdAcknowledgeRoute,
  postAlertsAlertIdAnnotateRoute,
  postAlertsAlertIdCloseRoute,
  postAlertsAlertIdUndoAcknowledgeRoute,
  postAlertsAlertIdUndoCloseRoute,
  postAlertsCloseAllRoute,
  postAlertsCloseMultipleRoute,
  postAlertsPagedRoute,
  postAlertsRoute,
  postAlertsUndoAcknowledgeMultipleRoute,
  postAlertsUndoCloseMultipleRoute,
  postCategoriesTeamIdCategoryIdSubscriptionsRoute,
  postCategoriesTeamIdRoute,
  postEventsPagedRoute,
  postScriptsInstancesInstanceIdDisableRoute,
  postScriptsInstancesInstanceIdEnableRoute,
  postScriptsInstancesRoute,
  postTeamsTeamIdAlertSettingsRoute,
  postTeamsTeamIdMembershipsResendInviteMailRoute,
  postTeamsTeamIdMembershipsRoute,
  postTeamsTeamIdSchedulesDeleteRangeRoute,
  postTeamsTeamIdSchedulesMultipleRoute,
  postTeamsTeamIdSchedulesRoute,
  postUsersUserIdCheckPermissionsRoute,
  postUsersUserIdImageRoute,
  postUsersUserIdPunchInAsManagerRoute,
  postUsersUserIdPunchInRoute,
  postUsersUserIdPunchOutRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdDisableRoute,
  postWebhooksWebhookIdEnableRoute,
  putCategoriesTeamIdCategoryIdRoute,
  putPrepaidSettingsRoute,
  putScriptsInstancesInstanceIdDataRoute,
  putScriptsInstancesInstanceIdRoute,
  putSubscriptionsSubscriptionIdPrepaidSettingsRoute,
  putSubscriptionsSubscriptionIdProfileRoute,
  putTeamsTeamIdMembershipsUserIdRoute,
  putTeamsTeamIdProfileRoute,
  putUsersUserIdChangePasswordRoute,
  putUsersUserIdProfileRoute,
  putWebhooksWebhookIdRoute,
} from './routes'
import {
  deleteCategoriesTeamIdCategoryIdRouteHandler,
  deleteScriptsInstancesInstanceIdRouteHandler,
  deleteTeamsTeamIdMembershipsUserIdRouteHandler,
  deleteTeamsTeamIdSchedulesDutyIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  getAlertsAlertIdAnnotationsRouteHandler,
  getAlertsAlertIdAttachmentsAttachmentIdRouteHandler,
  getAlertsAlertIdAttachmentsRouteHandler,
  getAlertsAlertIdNotificationsRouteHandler,
  getAlertsAlertIdOverviewRouteHandler,
  getAlertsAlertIdRouteHandler,
  getAlertsReportRouteHandler,
  getCategoriesImagesRouteHandler,
  getCategoriesTeamIdCategoryIdMetricsRouteHandler,
  getCategoriesTeamIdCategoryIdRouteHandler,
  getCategoriesTeamIdCategoryIdSubscriptionsRouteHandler,
  getCategoriesTeamIdMetricsRouteHandler,
  getCategoriesTeamIdRouteHandler,
  getEventsEventIdOverviewRouteHandler,
  getEventsEventIdParametersRouteHandler,
  getPrepaidBalanceRouteHandler,
  getPrepaidSettingsRouteHandler,
  getPrepaidTransactionsRouteHandler,
  getScriptsInstancesInstanceIdRouteHandler,
  getScriptsInstancesRouteHandler,
  getScriptsInventoryParsedRouteHandler,
  getScriptsInventoryParsedScriptIdRouteHandler,
  getScriptsInventoryRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSubscriptionIdChannelPricesRouteHandler,
  getSubscriptionsSubscriptionIdFeaturesRouteHandler,
  getSubscriptionsSubscriptionIdPrepaidBalanceRouteHandler,
  getSubscriptionsSubscriptionIdPrepaidSettingsRouteHandler,
  getSubscriptionsSubscriptionIdPrepaidTransactionsRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  getSubscriptionsSubscriptionIdTeamsRouteHandler,
  getSubscriptionsSubscriptionIdUserLicensesRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdAlertReportsFileNameRouteHandler,
  getTeamsTeamIdAlertReportsRouteHandler,
  getTeamsTeamIdAlertSettingsRouteHandler,
  getTeamsTeamIdDutyReportsFileNameRouteHandler,
  getTeamsTeamIdDutyReportsRouteHandler,
  getTeamsTeamIdDutysummaryRouteHandler,
  getTeamsTeamIdEventSourcesRouteHandler,
  getTeamsTeamIdMembershipsRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTeamsTeamIdSchedulesRouteHandler,
  getTeamsTeamIdSchedulesScheduleIdRouteHandler,
  getTeamsTeamIdSetupProgressRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdDutyStatusRouteHandler,
  getUsersUserIdImageRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdSetupProgressRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  postAlertsAcknowledgeAllRouteHandler,
  postAlertsAcknowledgeMultipleRouteHandler,
  postAlertsAlertIdAcknowledgeRouteHandler,
  postAlertsAlertIdAnnotateRouteHandler,
  postAlertsAlertIdCloseRouteHandler,
  postAlertsAlertIdUndoAcknowledgeRouteHandler,
  postAlertsAlertIdUndoCloseRouteHandler,
  postAlertsCloseAllRouteHandler,
  postAlertsCloseMultipleRouteHandler,
  postAlertsPagedRouteHandler,
  postAlertsRouteHandler,
  postAlertsUndoAcknowledgeMultipleRouteHandler,
  postAlertsUndoCloseMultipleRouteHandler,
  postCategoriesTeamIdCategoryIdSubscriptionsRouteHandler,
  postCategoriesTeamIdRouteHandler,
  postEventsPagedRouteHandler,
  postScriptsInstancesInstanceIdDisableRouteHandler,
  postScriptsInstancesInstanceIdEnableRouteHandler,
  postScriptsInstancesRouteHandler,
  postTeamsTeamIdAlertSettingsRouteHandler,
  postTeamsTeamIdMembershipsResendInviteMailRouteHandler,
  postTeamsTeamIdMembershipsRouteHandler,
  postTeamsTeamIdSchedulesDeleteRangeRouteHandler,
  postTeamsTeamIdSchedulesMultipleRouteHandler,
  postTeamsTeamIdSchedulesRouteHandler,
  postUsersUserIdCheckPermissionsRouteHandler,
  postUsersUserIdImageRouteHandler,
  postUsersUserIdPunchInAsManagerRouteHandler,
  postUsersUserIdPunchInRouteHandler,
  postUsersUserIdPunchOutRouteHandler,
  postWebhooksRouteHandler,
  postWebhooksWebhookIdDisableRouteHandler,
  postWebhooksWebhookIdEnableRouteHandler,
  putCategoriesTeamIdCategoryIdRouteHandler,
  putPrepaidSettingsRouteHandler,
  putScriptsInstancesInstanceIdDataRouteHandler,
  putScriptsInstancesInstanceIdRouteHandler,
  putSubscriptionsSubscriptionIdPrepaidSettingsRouteHandler,
  putSubscriptionsSubscriptionIdProfileRouteHandler,
  putTeamsTeamIdMembershipsUserIdRouteHandler,
  putTeamsTeamIdProfileRouteHandler,
  putUsersUserIdChangePasswordRouteHandler,
  putUsersUserIdProfileRouteHandler,
  putWebhooksWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlertsRoute, postAlertsRouteHandler)
  .openapi(postAlertsAcknowledgeAllRoute, postAlertsAcknowledgeAllRouteHandler)
  .openapi(postAlertsAcknowledgeMultipleRoute, postAlertsAcknowledgeMultipleRouteHandler)
  .openapi(postAlertsCloseAllRoute, postAlertsCloseAllRouteHandler)
  .openapi(postAlertsCloseMultipleRoute, postAlertsCloseMultipleRouteHandler)
  .openapi(postAlertsPagedRoute, postAlertsPagedRouteHandler)
  .openapi(getAlertsReportRoute, getAlertsReportRouteHandler)
  .openapi(postAlertsUndoAcknowledgeMultipleRoute, postAlertsUndoAcknowledgeMultipleRouteHandler)
  .openapi(postAlertsUndoCloseMultipleRoute, postAlertsUndoCloseMultipleRouteHandler)
  .openapi(getAlertsAlertIdRoute, getAlertsAlertIdRouteHandler)
  .openapi(postAlertsAlertIdAcknowledgeRoute, postAlertsAlertIdAcknowledgeRouteHandler)
  .openapi(postAlertsAlertIdAnnotateRoute, postAlertsAlertIdAnnotateRouteHandler)
  .openapi(getAlertsAlertIdAnnotationsRoute, getAlertsAlertIdAnnotationsRouteHandler)
  .openapi(getAlertsAlertIdAttachmentsRoute, getAlertsAlertIdAttachmentsRouteHandler)
  .openapi(
    getAlertsAlertIdAttachmentsAttachmentIdRoute,
    getAlertsAlertIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(postAlertsAlertIdCloseRoute, postAlertsAlertIdCloseRouteHandler)
  .openapi(getAlertsAlertIdNotificationsRoute, getAlertsAlertIdNotificationsRouteHandler)
  .openapi(getAlertsAlertIdOverviewRoute, getAlertsAlertIdOverviewRouteHandler)
  .openapi(postAlertsAlertIdUndoAcknowledgeRoute, postAlertsAlertIdUndoAcknowledgeRouteHandler)
  .openapi(postAlertsAlertIdUndoCloseRoute, postAlertsAlertIdUndoCloseRouteHandler)
  .openapi(getCategoriesImagesRoute, getCategoriesImagesRouteHandler)
  .openapi(getCategoriesTeamIdRoute, getCategoriesTeamIdRouteHandler)
  .openapi(postCategoriesTeamIdRoute, postCategoriesTeamIdRouteHandler)
  .openapi(getCategoriesTeamIdMetricsRoute, getCategoriesTeamIdMetricsRouteHandler)
  .openapi(deleteCategoriesTeamIdCategoryIdRoute, deleteCategoriesTeamIdCategoryIdRouteHandler)
  .openapi(getCategoriesTeamIdCategoryIdRoute, getCategoriesTeamIdCategoryIdRouteHandler)
  .openapi(putCategoriesTeamIdCategoryIdRoute, putCategoriesTeamIdCategoryIdRouteHandler)
  .openapi(
    getCategoriesTeamIdCategoryIdMetricsRoute,
    getCategoriesTeamIdCategoryIdMetricsRouteHandler,
  )
  .openapi(
    getCategoriesTeamIdCategoryIdSubscriptionsRoute,
    getCategoriesTeamIdCategoryIdSubscriptionsRouteHandler,
  )
  .openapi(
    postCategoriesTeamIdCategoryIdSubscriptionsRoute,
    postCategoriesTeamIdCategoryIdSubscriptionsRouteHandler,
  )
  .openapi(postEventsPagedRoute, postEventsPagedRouteHandler)
  .openapi(getEventsEventIdOverviewRoute, getEventsEventIdOverviewRouteHandler)
  .openapi(getEventsEventIdParametersRoute, getEventsEventIdParametersRouteHandler)
  .openapi(getPrepaidBalanceRoute, getPrepaidBalanceRouteHandler)
  .openapi(getPrepaidSettingsRoute, getPrepaidSettingsRouteHandler)
  .openapi(putPrepaidSettingsRoute, putPrepaidSettingsRouteHandler)
  .openapi(getPrepaidTransactionsRoute, getPrepaidTransactionsRouteHandler)
  .openapi(getScriptsInstancesRoute, getScriptsInstancesRouteHandler)
  .openapi(postScriptsInstancesRoute, postScriptsInstancesRouteHandler)
  .openapi(deleteScriptsInstancesInstanceIdRoute, deleteScriptsInstancesInstanceIdRouteHandler)
  .openapi(getScriptsInstancesInstanceIdRoute, getScriptsInstancesInstanceIdRouteHandler)
  .openapi(putScriptsInstancesInstanceIdRoute, putScriptsInstancesInstanceIdRouteHandler)
  .openapi(putScriptsInstancesInstanceIdDataRoute, putScriptsInstancesInstanceIdDataRouteHandler)
  .openapi(
    postScriptsInstancesInstanceIdDisableRoute,
    postScriptsInstancesInstanceIdDisableRouteHandler,
  )
  .openapi(
    postScriptsInstancesInstanceIdEnableRoute,
    postScriptsInstancesInstanceIdEnableRouteHandler,
  )
  .openapi(getScriptsInventoryRoute, getScriptsInventoryRouteHandler)
  .openapi(getScriptsInventoryParsedRoute, getScriptsInventoryParsedRouteHandler)
  .openapi(getScriptsInventoryParsedScriptIdRoute, getScriptsInventoryParsedScriptIdRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    getSubscriptionsSubscriptionIdChannelPricesRoute,
    getSubscriptionsSubscriptionIdChannelPricesRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdFeaturesRoute,
    getSubscriptionsSubscriptionIdFeaturesRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdPrepaidBalanceRoute,
    getSubscriptionsSubscriptionIdPrepaidBalanceRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdPrepaidSettingsRoute,
    getSubscriptionsSubscriptionIdPrepaidSettingsRouteHandler,
  )
  .openapi(
    putSubscriptionsSubscriptionIdPrepaidSettingsRoute,
    putSubscriptionsSubscriptionIdPrepaidSettingsRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdPrepaidTransactionsRoute,
    getSubscriptionsSubscriptionIdPrepaidTransactionsRouteHandler,
  )
  .openapi(
    putSubscriptionsSubscriptionIdProfileRoute,
    putSubscriptionsSubscriptionIdProfileRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdTeamsRoute,
    getSubscriptionsSubscriptionIdTeamsRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdUserLicensesRoute,
    getSubscriptionsSubscriptionIdUserLicensesRouteHandler,
  )
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getTeamsTeamIdRoute, getTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdAlertReportsRoute, getTeamsTeamIdAlertReportsRouteHandler)
  .openapi(getTeamsTeamIdAlertReportsFileNameRoute, getTeamsTeamIdAlertReportsFileNameRouteHandler)
  .openapi(getTeamsTeamIdAlertSettingsRoute, getTeamsTeamIdAlertSettingsRouteHandler)
  .openapi(postTeamsTeamIdAlertSettingsRoute, postTeamsTeamIdAlertSettingsRouteHandler)
  .openapi(getTeamsTeamIdDutyReportsRoute, getTeamsTeamIdDutyReportsRouteHandler)
  .openapi(getTeamsTeamIdDutyReportsFileNameRoute, getTeamsTeamIdDutyReportsFileNameRouteHandler)
  .openapi(getTeamsTeamIdDutysummaryRoute, getTeamsTeamIdDutysummaryRouteHandler)
  .openapi(getTeamsTeamIdEventSourcesRoute, getTeamsTeamIdEventSourcesRouteHandler)
  .openapi(getTeamsTeamIdMembershipsRoute, getTeamsTeamIdMembershipsRouteHandler)
  .openapi(postTeamsTeamIdMembershipsRoute, postTeamsTeamIdMembershipsRouteHandler)
  .openapi(
    postTeamsTeamIdMembershipsResendInviteMailRoute,
    postTeamsTeamIdMembershipsResendInviteMailRouteHandler,
  )
  .openapi(deleteTeamsTeamIdMembershipsUserIdRoute, deleteTeamsTeamIdMembershipsUserIdRouteHandler)
  .openapi(putTeamsTeamIdMembershipsUserIdRoute, putTeamsTeamIdMembershipsUserIdRouteHandler)
  .openapi(putTeamsTeamIdProfileRoute, putTeamsTeamIdProfileRouteHandler)
  .openapi(getTeamsTeamIdSchedulesRoute, getTeamsTeamIdSchedulesRouteHandler)
  .openapi(postTeamsTeamIdSchedulesRoute, postTeamsTeamIdSchedulesRouteHandler)
  .openapi(
    postTeamsTeamIdSchedulesDeleteRangeRoute,
    postTeamsTeamIdSchedulesDeleteRangeRouteHandler,
  )
  .openapi(postTeamsTeamIdSchedulesMultipleRoute, postTeamsTeamIdSchedulesMultipleRouteHandler)
  .openapi(deleteTeamsTeamIdSchedulesDutyIdRoute, deleteTeamsTeamIdSchedulesDutyIdRouteHandler)
  .openapi(getTeamsTeamIdSchedulesScheduleIdRoute, getTeamsTeamIdSchedulesScheduleIdRouteHandler)
  .openapi(getTeamsTeamIdSetupProgressRoute, getTeamsTeamIdSetupProgressRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdChangePasswordRoute, putUsersUserIdChangePasswordRouteHandler)
  .openapi(postUsersUserIdCheckPermissionsRoute, postUsersUserIdCheckPermissionsRouteHandler)
  .openapi(getUsersUserIdDutyStatusRoute, getUsersUserIdDutyStatusRouteHandler)
  .openapi(getUsersUserIdImageRoute, getUsersUserIdImageRouteHandler)
  .openapi(postUsersUserIdImageRoute, postUsersUserIdImageRouteHandler)
  .openapi(putUsersUserIdProfileRoute, putUsersUserIdProfileRouteHandler)
  .openapi(postUsersUserIdPunchInRoute, postUsersUserIdPunchInRouteHandler)
  .openapi(postUsersUserIdPunchInAsManagerRoute, postUsersUserIdPunchInAsManagerRouteHandler)
  .openapi(postUsersUserIdPunchOutRoute, postUsersUserIdPunchOutRouteHandler)
  .openapi(getUsersUserIdSetupProgressRoute, getUsersUserIdSetupProgressRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(putWebhooksWebhookIdRoute, putWebhooksWebhookIdRouteHandler)
  .openapi(postWebhooksWebhookIdDisableRoute, postWebhooksWebhookIdDisableRouteHandler)
  .openapi(postWebhooksWebhookIdEnableRoute, postWebhooksWebhookIdEnableRouteHandler)

export default app
