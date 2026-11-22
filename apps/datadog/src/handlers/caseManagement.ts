import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CasesCaseIdCommentCellIdRoute,
  deleteApiV2CasesCaseIdCustomAttributesCustomAttributeKeyRoute,
  deleteApiV2CasesCaseIdInsightsRoute,
  deleteApiV2CasesCaseIdRelationshipsJiraIssuesRoute,
  deleteApiV2CasesCaseIdWatchersUserUuidRoute,
  deleteApiV2CasesLinkLinkIdRoute,
  deleteApiV2CasesProjectsProjectIdFavoritesRoute,
  deleteApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleIdRoute,
  deleteApiV2CasesProjectsProjectIdRoute,
  deleteApiV2CasesProjectsProjectIdRulesRuleIdRoute,
  deleteApiV2CasesViewsViewIdRoute,
  deleteApiV2MaintenanceWindowsMaintenanceWindowIdRoute,
  getApiV2CasesCaseIdRoute,
  getApiV2CasesCaseIdTimelinesRoute,
  getApiV2CasesCaseIdWatchersRoute,
  getApiV2CasesCountRoute,
  getApiV2CasesLinkRoute,
  getApiV2CasesProjectsFavoritesRoute,
  getApiV2CasesProjectsProjectIdNotificationRulesRoute,
  getApiV2CasesProjectsProjectIdRoute,
  getApiV2CasesProjectsProjectIdRulesRoute,
  getApiV2CasesProjectsProjectIdRulesRuleIdRoute,
  getApiV2CasesProjectsRoute,
  getApiV2CasesRoute,
  getApiV2CasesViewsRoute,
  getApiV2CasesViewsViewIdRoute,
  getApiV2MaintenanceWindowsRoute,
  patchApiV2CasesCaseIdRelationshipsJiraIssuesRoute,
  patchApiV2CasesCaseIdRelationshipsProjectRoute,
  patchApiV2CasesProjectsProjectIdRoute,
  postApiV2CasesAggregateRoute,
  postApiV2CasesBulkRoute,
  postApiV2CasesCaseIdArchiveRoute,
  postApiV2CasesCaseIdAssignRoute,
  postApiV2CasesCaseIdAttributesRoute,
  postApiV2CasesCaseIdCommentRoute,
  postApiV2CasesCaseIdCustomAttributesCustomAttributeKeyRoute,
  postApiV2CasesCaseIdDescriptionRoute,
  postApiV2CasesCaseIdDueDateRoute,
  postApiV2CasesCaseIdPriorityRoute,
  postApiV2CasesCaseIdRelationshipsIncidentsRoute,
  postApiV2CasesCaseIdRelationshipsJiraIssuesRoute,
  postApiV2CasesCaseIdRelationshipsNotebookRoute,
  postApiV2CasesCaseIdRelationshipsServicenowTicketsRoute,
  postApiV2CasesCaseIdResolvedReasonRoute,
  postApiV2CasesCaseIdStatusRoute,
  postApiV2CasesCaseIdTitleRoute,
  postApiV2CasesCaseIdUnarchiveRoute,
  postApiV2CasesCaseIdUnassignRoute,
  postApiV2CasesCaseIdWatchersUserUuidRoute,
  postApiV2CasesLinkRoute,
  postApiV2CasesProjectsProjectIdFavoritesRoute,
  postApiV2CasesProjectsProjectIdNotificationRulesRoute,
  postApiV2CasesProjectsProjectIdRulesRoute,
  postApiV2CasesProjectsProjectIdRulesRuleIdDisableRoute,
  postApiV2CasesProjectsProjectIdRulesRuleIdEnableRoute,
  postApiV2CasesProjectsRoute,
  postApiV2CasesRoute,
  postApiV2CasesViewsRoute,
  postApiV2MaintenanceWindowsRoute,
  putApiV2CasesCaseIdCommentCellIdRoute,
  putApiV2CasesCaseIdInsightsRoute,
  putApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleIdRoute,
  putApiV2CasesProjectsProjectIdRulesRuleIdRoute,
  putApiV2CasesViewsViewIdRoute,
  putApiV2MaintenanceWindowsMaintenanceWindowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseManagementHandler = app
  .openapi(getApiV2CasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CasesProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsProjectIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsProjectIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsProjectIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsProjectIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesProjectsProjectIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesProjectsProjectIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesProjectsProjectIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsProjectIdRulesRuleIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesProjectsProjectIdRulesRuleIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesCaseIdCommentCellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesCaseIdCommentCellIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesCaseIdCustomAttributesCustomAttributeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdCustomAttributesCustomAttributeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdDueDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesCaseIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesCaseIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdRelationshipsIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesCaseIdRelationshipsJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CasesCaseIdRelationshipsJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdRelationshipsJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdRelationshipsNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CasesCaseIdRelationshipsProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdRelationshipsServicenowTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdResolvedReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesCaseIdTimelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesCaseIdWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesCaseIdWatchersUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesCaseIdWatchersUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MaintenanceWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MaintenanceWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MaintenanceWindowsMaintenanceWindowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MaintenanceWindowsMaintenanceWindowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
