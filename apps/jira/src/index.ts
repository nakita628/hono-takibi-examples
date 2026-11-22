import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  announcementBannerHandler,
  appDataPoliciesHandler,
  applicationRolesHandler,
  appMigrationHandler,
  appPropertiesHandler,
  auditRecordsHandler,
  avatarsHandler,
  classificationLevelsHandler,
  dashboardsHandler,
  dynamicModulesHandler,
  fieldSchemesHandler,
  filtersHandler,
  filterSharingHandler,
  groupAndUserPickerHandler,
  groupsHandler,
  issueAttachmentsHandler,
  issueBulkOperationsHandler,
  issueCommentPropertiesHandler,
  issueCommentsHandler,
  issueCustomFieldAssociationsHandler,
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
  issuePanelsHandler,
  issuePrioritiesHandler,
  issuePropertiesHandler,
  issueRedactionHandler,
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
  jqlFunctionsAppsHandler,
  jqlHandler,
  labelsHandler,
  licenseMetricsHandler,
  migrationOfConnectModulesToForgeHandler,
  myselfHandler,
  permissionSchemesHandler,
  permissionsHandler,
  plansHandler,
  policiesHandler,
  prioritySchemesHandler,
  projectAvatarsHandler,
  projectCategoriesHandler,
  projectClassificationLevelsHandler,
  projectComponentsHandler,
  projectEmailHandler,
  projectFeaturesHandler,
  projectKeyAndNameValidationHandler,
  projectPermissionSchemesHandler,
  projectPropertiesHandler,
  projectRoleActorsHandler,
  projectRolesHandler,
  projectsHandler,
  projectTemplatesHandler,
  projectTypesHandler,
  projectVersionsHandler,
  restHandler,
  screenSchemesHandler,
  screensHandler,
  screenTabFieldsHandler,
  screenTabsHandler,
  serverInfoHandler,
  serviceRegistryHandler,
  statusHandler,
  tasksHandler,
  teamsInPlanHandler,
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
  workflowTransitionRulesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agentsHandler)
  .route('/', announcementBannerHandler)
  .route('/', issueCustomFieldConfigurationAppsHandler)
  .route('/', issueCustomFieldValuesAppsHandler)
  .route('/', jiraSettingsHandler)
  .route('/', applicationRolesHandler)
  .route('/', issueAttachmentsHandler)
  .route('/', auditRecordsHandler)
  .route('/', avatarsHandler)
  .route('/', issueBulkOperationsHandler)
  .route('/', issuesHandler)
  .route('/', classificationLevelsHandler)
  .route('/', issueCommentsHandler)
  .route('/', issueCommentPropertiesHandler)
  .route('/', projectComponentsHandler)
  .route('/', fieldSchemesHandler)
  .route('/', timeTrackingHandler)
  .route('/', issueCustomFieldOptionsHandler)
  .route('/', dashboardsHandler)
  .route('/', appDataPoliciesHandler)
  .route('/', jiraExpressionsHandler)
  .route('/', issueFieldsHandler)
  .route('/', issueCustomFieldAssociationsHandler)
  .route('/', issueCustomFieldContextsHandler)
  .route('/', screensHandler)
  .route('/', issueCustomFieldOptionsAppsHandler)
  .route('/', issueFieldConfigurationsHandler)
  .route('/', filtersHandler)
  .route('/', filterSharingHandler)
  .route('/', issuePanelsHandler)
  .route('/', groupsHandler)
  .route('/', groupAndUserPickerHandler)
  .route('/', licenseMetricsHandler)
  .route('/', jqlHandler)
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
  .route('/', jqlFunctionsAppsHandler)
  .route('/', labelsHandler)
  .route('/', permissionsHandler)
  .route('/', myselfHandler)
  .route('/', issueNotificationSchemesHandler)
  .route('/', permissionSchemesHandler)
  .route('/', plansHandler)
  .route('/', teamsInPlanHandler)
  .route('/', policiesHandler)
  .route('/', issuePrioritiesHandler)
  .route('/', prioritySchemesHandler)
  .route('/', projectsHandler)
  .route('/', projectTemplatesHandler)
  .route('/', projectTypesHandler)
  .route('/', projectAvatarsHandler)
  .route('/', projectClassificationLevelsHandler)
  .route('/', projectFeaturesHandler)
  .route('/', projectPropertiesHandler)
  .route('/', projectRolesHandler)
  .route('/', projectRoleActorsHandler)
  .route('/', projectVersionsHandler)
  .route('/', projectEmailHandler)
  .route('/', projectPermissionSchemesHandler)
  .route('/', projectCategoriesHandler)
  .route('/', projectKeyAndNameValidationHandler)
  .route('/', issueRedactionHandler)
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
  .route('/', workflowSchemesHandler)
  .route('/', workflowSchemeProjectAssociationsHandler)
  .route('/', workflowSchemeDraftsHandler)
  .route('/', appPropertiesHandler)
  .route('/', dynamicModulesHandler)
  .route('/', appMigrationHandler)
  .route('/', migrationOfConnectModulesToForgeHandler)
  .route('/', serviceRegistryHandler)
  .route('/', restHandler)

export default app
