import { OpenAPIHono } from '@hono/zod-openapi'
import {
  announcementBannerHandler,
  applicationRolesHandler,
  appMigrationHandler,
  appPropertiesHandler,
  auditRecordsHandler,
  avatarsHandler,
  dashboardsHandler,
  dynamicModulesHandler,
  filtersHandler,
  filterSharingHandler,
  groupAndUserPickerHandler,
  groupsHandler,
  instanceInformationHandler,
  issueAttachmentsHandler,
  issueCommentPropertiesHandler,
  issueCommentsHandler,
  issueCustomFieldConfigurationAppsHandler,
  issueCustomFieldContextsHandler,
  issueCustomFieldOptionsAppsHandler,
  issueCustomFieldOptionsHandler,
  issueCustomFieldValuesAppsHandler,
  issueFieldConfigurationsHandler,
  issueFieldsHandler,
  issueLinksHandler,
  issueLinkTypesHandler,
  issueNavigatorSettingsHandler,
  issueNotificationSchemesHandler,
  issuePrioritiesHandler,
  issuePropertiesHandler,
  issueRemoteLinksHandler,
  issueResolutionsHandler,
  issueSearchHandler,
  issueSecurityLevelHandler,
  issueSecuritySchemesHandler,
  issuesHandler,
  issueTypePropertiesHandler,
  issueTypeSchemesHandler,
  issueTypeScreenSchemesHandler,
  issueTypesHandler,
  issueVotesHandler,
  issueWatchersHandler,
  issueWorklogPropertiesHandler,
  issueWorklogsHandler,
  jiraExpressionsHandler,
  jiraSettingsHandler,
  jqlHandler,
  labelsHandler,
  licenseMetricsHandler,
  myselfHandler,
  permissionSchemesHandler,
  permissionsHandler,
  projectAvatarsHandler,
  projectCategoriesHandler,
  projectComponentsHandler,
  projectEmailHandler,
  projectFeaturesHandler,
  projectKeyAndNameValidationHandler,
  projectPermissionSchemesHandler,
  projectPropertiesHandler,
  projectRoleActorsHandler,
  projectRolesHandler,
  projectsHandler,
  projectTypesHandler,
  projectVersionsHandler,
  restHandler,
  screenSchemesHandler,
  screensHandler,
  screenTabFieldsHandler,
  screenTabsHandler,
  serverInfoHandler,
  statusHandler,
  tasksHandler,
  timeTrackingHandler,
  uiModificationsAppsHandler,
  userPropertiesHandler,
  userSearchHandler,
  usersHandler,
  webhooksHandler,
  workflowSchemeDraftsHandler,
  workflowSchemeProjectAssociationsHandler,
  workflowSchemesHandler,
  workflowsHandler,
  workflowStatusCategoriesHandler,
  workflowStatusesHandler,
  workflowTransitionPropertiesHandler,
  workflowTransitionRulesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', announcementBannerHandler)
  .route('/', issueCustomFieldValuesAppsHandler)
  .route('/', issueCustomFieldConfigurationAppsHandler)
  .route('/', jiraSettingsHandler)
  .route('/', applicationRolesHandler)
  .route('/', issueAttachmentsHandler)
  .route('/', auditRecordsHandler)
  .route('/', avatarsHandler)
  .route('/', issueCommentsHandler)
  .route('/', issueCommentPropertiesHandler)
  .route('/', projectComponentsHandler)
  .route('/', timeTrackingHandler)
  .route('/', issueCustomFieldOptionsHandler)
  .route('/', dashboardsHandler)
  .route('/', issuesHandler)
  .route('/', jiraExpressionsHandler)
  .route('/', issueFieldsHandler)
  .route('/', issueCustomFieldContextsHandler)
  .route('/', screensHandler)
  .route('/', issueCustomFieldOptionsAppsHandler)
  .route('/', issueFieldConfigurationsHandler)
  .route('/', filtersHandler)
  .route('/', filterSharingHandler)
  .route('/', groupsHandler)
  .route('/', groupAndUserPickerHandler)
  .route('/', instanceInformationHandler)
  .route('/', issueSearchHandler)
  .route('/', issuePropertiesHandler)
  .route('/', issueWatchersHandler)
  .route('/', issueRemoteLinksHandler)
  .route('/', issueVotesHandler)
  .route('/', issueWorklogsHandler)
  .route('/', issueWorklogPropertiesHandler)
  .route('/', issueLinksHandler)
  .route('/', issueLinkTypesHandler)
  .route('/', issueSecuritySchemesHandler)
  .route('/', issueSecurityLevelHandler)
  .route('/', issueTypesHandler)
  .route('/', issueTypePropertiesHandler)
  .route('/', issueTypeSchemesHandler)
  .route('/', issueTypeScreenSchemesHandler)
  .route('/', jqlHandler)
  .route('/', restHandler)
  .route('/', labelsHandler)
  .route('/', licenseMetricsHandler)
  .route('/', permissionsHandler)
  .route('/', myselfHandler)
  .route('/', issueNotificationSchemesHandler)
  .route('/', permissionSchemesHandler)
  .route('/', issuePrioritiesHandler)
  .route('/', projectsHandler)
  .route('/', projectTypesHandler)
  .route('/', projectAvatarsHandler)
  .route('/', projectFeaturesHandler)
  .route('/', projectPropertiesHandler)
  .route('/', projectRolesHandler)
  .route('/', projectRoleActorsHandler)
  .route('/', projectVersionsHandler)
  .route('/', projectEmailHandler)
  .route('/', projectPermissionSchemesHandler)
  .route('/', projectCategoriesHandler)
  .route('/', projectKeyAndNameValidationHandler)
  .route('/', issueResolutionsHandler)
  .route('/', screenTabsHandler)
  .route('/', screenTabFieldsHandler)
  .route('/', screenSchemesHandler)
  .route('/', serverInfoHandler)
  .route('/', issueNavigatorSettingsHandler)
  .route('/', workflowStatusesHandler)
  .route('/', workflowStatusCategoriesHandler)
  .route('/', statusHandler)
  .route('/', tasksHandler)
  .route('/', uiModificationsAppsHandler)
  .route('/', usersHandler)
  .route('/', userSearchHandler)
  .route('/', userPropertiesHandler)
  .route('/', webhooksHandler)
  .route('/', workflowsHandler)
  .route('/', workflowTransitionRulesHandler)
  .route('/', workflowTransitionPropertiesHandler)
  .route('/', workflowSchemesHandler)
  .route('/', workflowSchemeProjectAssociationsHandler)
  .route('/', workflowSchemeDraftsHandler)
  .route('/', appPropertiesHandler)
  .route('/', dynamicModulesHandler)
  .route('/', appMigrationHandler)

export default app
