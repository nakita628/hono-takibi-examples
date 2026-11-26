import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccessRequestsRoute,
  postAccessRequestsRoute,
  postAccessRequestsAccessRequestGidApproveRoute,
  postAccessRequestsAccessRequestGidRejectRoute,
  getWorkspacesWorkspaceGidAgentsRoute,
  getAgentsAgentGidRoute,
  getWorkspacesWorkspaceGidAiStudioRunsRoute,
  getWorkspacesWorkspaceGidAiStudioSeatsRoute,
  getAllocationsAllocationGidRoute,
  putAllocationsAllocationGidRoute,
  deleteAllocationsAllocationGidRoute,
  getAllocationsRoute,
  postAllocationsRoute,
  getAttachmentsAttachmentGidRoute,
  deleteAttachmentsAttachmentGidRoute,
  getAttachmentsRoute,
  postAttachmentsRoute,
  getWorkspacesWorkspaceGidAuditLogEventsRoute,
  postBatchRoute,
  getBudgetsRoute,
  postBudgetsRoute,
  getBudgetsBudgetGidRoute,
  putBudgetsBudgetGidRoute,
  deleteBudgetsBudgetGidRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
  getPortfoliosPortfolioGidCustomFieldSettingsRoute,
  getGoalsGoalGidCustomFieldSettingsRoute,
  getTeamsTeamGidCustomFieldSettingsRoute,
  postCustomFieldsRoute,
  getCustomFieldsCustomFieldGidRoute,
  putCustomFieldsCustomFieldGidRoute,
  deleteCustomFieldsCustomFieldGidRoute,
  getWorkspacesWorkspaceGidCustomFieldsRoute,
  postCustomFieldsCustomFieldGidEnumOptionsRoute,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
  putEnumOptionsEnumOptionGidRoute,
  getCustomTypesRoute,
  getCustomTypesCustomTypeGidRoute,
  getEventsRoute,
  postExportsGraphRoute,
  postExportsResourceRoute,
  getGoalRelationshipsGoalRelationshipGidRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  getGoalsGoalGidRoute,
  putGoalsGoalGidRoute,
  deleteGoalsGoalGidRoute,
  getGoalsRoute,
  postGoalsRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  getGoalsGoalGidParentGoalsRoute,
  postGoalsGoalGidAddCustomFieldSettingRoute,
  postGoalsGoalGidRemoveCustomFieldSettingRoute,
  getJobsJobGidRoute,
  getMembershipsRoute,
  postMembershipsRoute,
  getMembershipsMembershipGidRoute,
  putMembershipsMembershipGidRoute,
  deleteMembershipsMembershipGidRoute,
  getUsersUserGidNotificationsRoute,
  postUsersUserGidNotificationsMarkReadRoute,
  postUsersUserGidNotificationsMarkUnreadRoute,
  getOooEntriesOooEntryGidRoute,
  putOooEntriesOooEntryGidRoute,
  deleteOooEntriesOooEntryGidRoute,
  getOooEntriesRoute,
  postOooEntriesRoute,
  postOrganizationExportsRoute,
  getOrganizationExportsOrganizationExportGidRoute,
  getPortfolioMembershipsRoute,
  getPortfolioMembershipsPortfolioMembershipGidRoute,
  getPortfoliosPortfolioGidPortfolioMembershipsRoute,
  getPortfoliosRoute,
  postPortfoliosRoute,
  getPortfoliosPortfolioGidRoute,
  putPortfoliosPortfolioGidRoute,
  deletePortfoliosPortfolioGidRoute,
  getPortfoliosPortfolioGidItemsRoute,
  postPortfoliosPortfolioGidAddItemRoute,
  postPortfoliosPortfolioGidRemoveItemRoute,
  postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
  postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute,
  postPortfoliosPortfolioGidAddMembersRoute,
  postPortfoliosPortfolioGidRemoveMembersRoute,
  postPortfoliosPortfolioGidDuplicateRoute,
  getProjectBriefsProjectBriefGidRoute,
  putProjectBriefsProjectBriefGidRoute,
  deleteProjectBriefsProjectBriefGidRoute,
  postProjectsProjectGidProjectBriefsRoute,
  getProjectMembershipsProjectMembershipGidRoute,
  getProjectsProjectGidProjectMembershipsRoute,
  getProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
  putProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
  getProjectsProjectGidProjectPortfolioSettingsRoute,
  getPortfoliosPortfolioGidProjectPortfolioSettingsRoute,
  getProjectStatusesProjectStatusGidRoute,
  deleteProjectStatusesProjectStatusGidRoute,
  getProjectsProjectGidProjectStatusesRoute,
  postProjectsProjectGidProjectStatusesRoute,
  getProjectTemplatesProjectTemplateGidRoute,
  deleteProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  getTeamsTeamGidProjectTemplatesRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
  getProjectsRoute,
  postProjectsRoute,
  getProjectsProjectGidRoute,
  putProjectsProjectGidRoute,
  deleteProjectsProjectGidRoute,
  postProjectsProjectGidDuplicateRoute,
  getTasksTaskGidProjectsRoute,
  getTeamsTeamGidProjectsRoute,
  postTeamsTeamGidProjectsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  getWorkspacesWorkspaceGidProjectsSearchRoute,
  postProjectsProjectGidAddCustomFieldSettingRoute,
  postProjectsProjectGidRemoveCustomFieldSettingRoute,
  getProjectsProjectGidTaskCountsRoute,
  postProjectsProjectGidAddMembersRoute,
  postProjectsProjectGidRemoveMembersRoute,
  postProjectsProjectGidAddFollowersRoute,
  postProjectsProjectGidRemoveFollowersRoute,
  postProjectsProjectGidSaveAsTemplateRoute,
  postProjectsProjectGidRollupRoute,
  getRatesRoute,
  postRatesRoute,
  getRatesRateGidRoute,
  putRatesRateGidRoute,
  deleteRatesRateGidRoute,
  getReactionsRoute,
  getTablesTableGidRecordsRoute,
  getWorkspacesWorkspaceGidRecordsSearchRoute,
  postRecordsRoute,
  getRecordsRecordGidRoute,
  putRecordsRecordGidRoute,
  deleteRecordsRecordGidRoute,
  getRolesRoute,
  postRolesRoute,
  getRolesRoleGidRoute,
  putRolesRoleGidRoute,
  deleteRolesRoleGidRoute,
  postRuleTriggersRuleTriggerGidRunRoute,
  getSectionsSectionGidRoute,
  putSectionsSectionGidRoute,
  deleteSectionsSectionGidRoute,
  getProjectsProjectGidSectionsRoute,
  postProjectsProjectGidSectionsRoute,
  postSectionsSectionGidAddTaskRoute,
  postProjectsProjectGidSectionsInsertRoute,
  getStatusUpdatesStatusUpdateGidRoute,
  deleteStatusUpdatesStatusUpdateGidRoute,
  getStatusUpdatesRoute,
  postStatusUpdatesRoute,
  getStoriesStoryGidRoute,
  putStoriesStoryGidRoute,
  deleteStoriesStoryGidRoute,
  getTasksTaskGidStoriesRoute,
  postTasksTaskGidStoriesRoute,
  getRecordsRecordGidStoriesRoute,
  postRecordsRecordGidStoriesRoute,
  getGoalsGoalGidStoriesRoute,
  postGoalsGoalGidStoriesRoute,
  getWorkspacesWorkspaceGidTablesRoute,
  postTablesRoute,
  getTablesTableGidRoute,
  putTablesTableGidRoute,
  deleteTablesTableGidRoute,
  postTablesTableGidAddCustomFieldSettingRoute,
  postTablesTableGidRemoveCustomFieldSettingRoute,
  getTablesTableGidGetCustomFieldSettingsRoute,
  getTablesTableGidCustomFieldSettingsRoute,
  getTagsRoute,
  postTagsRoute,
  getTagsTagGidRoute,
  putTagsTagGidRoute,
  deleteTagsTagGidRoute,
  getTasksTaskGidTagsRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  getTaskTemplatesRoute,
  getTaskTemplatesTaskTemplateGidRoute,
  deleteTaskTemplatesTaskTemplateGidRoute,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRoute,
  getTasksRoute,
  postTasksRoute,
  getTasksTaskGidRoute,
  putTasksTaskGidRoute,
  deleteTasksTaskGidRoute,
  postTasksTaskGidDuplicateRoute,
  getProjectsProjectGidTasksRoute,
  getSectionsSectionGidTasksRoute,
  getTagsTagGidTasksRoute,
  getUserTaskListsUserTaskListGidTasksRoute,
  getTasksTaskGidSubtasksRoute,
  postTasksTaskGidSubtasksRoute,
  postTasksTaskGidSetParentRoute,
  getTasksTaskGidDependenciesRoute,
  postTasksTaskGidAddDependenciesRoute,
  postTasksTaskGidRemoveDependenciesRoute,
  getTasksTaskGidDependentsRoute,
  postTasksTaskGidAddDependentsRoute,
  postTasksTaskGidRemoveDependentsRoute,
  postTasksTaskGidAddProjectRoute,
  postTasksTaskGidRemoveProjectRoute,
  postTasksTaskGidAddTagRoute,
  postTasksTaskGidRemoveTagRoute,
  postTasksTaskGidAddFollowersRoute,
  postTasksTaskGidRemoveFollowersRoute,
  postTasksTaskGidRollupRoute,
  getWorkspacesWorkspaceGidTasksCustomIdCustomIdRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  getTeamMembershipsTeamMembershipGidRoute,
  getTeamMembershipsRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getUsersUserGidTeamMembershipsRoute,
  postTeamsRoute,
  getTeamsTeamGidRoute,
  putTeamsTeamGidRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  getUsersUserGidTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidRemoveUserRoute,
  getTimePeriodsTimePeriodGidRoute,
  getTimePeriodsRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  putTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  deleteTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRoute,
  getTimeTrackingCategoriesRoute,
  postTimeTrackingCategoriesRoute,
  getTasksTaskGidTimeTrackingEntriesRoute,
  postTasksTaskGidTimeTrackingEntriesRoute,
  getTimeTrackingEntriesTimeTrackingEntryGidRoute,
  putTimeTrackingEntriesTimeTrackingEntryGidRoute,
  deleteTimeTrackingEntriesTimeTrackingEntryGidRoute,
  getTimeTrackingEntriesRoute,
  getTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
  putTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
  getTimesheetApprovalStatusesRoute,
  postTimesheetApprovalStatusesRoute,
  getWorkspacesWorkspaceGidTypeaheadRoute,
  getUserTaskListsUserTaskListGidRoute,
  getUsersUserGidUserTaskListRoute,
  getUsersRoute,
  getUsersUserGidRoute,
  putUsersUserGidRoute,
  getUsersUserGidFavoritesRoute,
  getTeamsTeamGidUsersRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidUsersUserGidRoute,
  putWorkspacesWorkspaceGidUsersUserGidRoute,
  getWebhooksRoute,
  postWebhooksRoute,
  getWebhooksWebhookGidRoute,
  putWebhooksWebhookGidRoute,
  deleteWebhooksWebhookGidRoute,
  getWorkspaceMembershipsWorkspaceMembershipGidRoute,
  getUsersUserGidWorkspaceMembershipsRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceGidRoute,
  putWorkspacesWorkspaceGidRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  getWorkspacesWorkspaceGidEventsRoute,
} from './routes'
import {
  getAccessRequestsRouteHandler,
  postAccessRequestsRouteHandler,
  postAccessRequestsAccessRequestGidApproveRouteHandler,
  postAccessRequestsAccessRequestGidRejectRouteHandler,
  getWorkspacesWorkspaceGidAgentsRouteHandler,
  getAgentsAgentGidRouteHandler,
  getWorkspacesWorkspaceGidAiStudioRunsRouteHandler,
  getWorkspacesWorkspaceGidAiStudioSeatsRouteHandler,
  getAllocationsAllocationGidRouteHandler,
  putAllocationsAllocationGidRouteHandler,
  deleteAllocationsAllocationGidRouteHandler,
  getAllocationsRouteHandler,
  postAllocationsRouteHandler,
  getAttachmentsAttachmentGidRouteHandler,
  deleteAttachmentsAttachmentGidRouteHandler,
  getAttachmentsRouteHandler,
  postAttachmentsRouteHandler,
  getWorkspacesWorkspaceGidAuditLogEventsRouteHandler,
  postBatchRouteHandler,
  getBudgetsRouteHandler,
  postBudgetsRouteHandler,
  getBudgetsBudgetGidRouteHandler,
  putBudgetsBudgetGidRouteHandler,
  deleteBudgetsBudgetGidRouteHandler,
  getProjectsProjectGidCustomFieldSettingsRouteHandler,
  getPortfoliosPortfolioGidCustomFieldSettingsRouteHandler,
  getGoalsGoalGidCustomFieldSettingsRouteHandler,
  getTeamsTeamGidCustomFieldSettingsRouteHandler,
  postCustomFieldsRouteHandler,
  getCustomFieldsCustomFieldGidRouteHandler,
  putCustomFieldsCustomFieldGidRouteHandler,
  deleteCustomFieldsCustomFieldGidRouteHandler,
  getWorkspacesWorkspaceGidCustomFieldsRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler,
  putEnumOptionsEnumOptionGidRouteHandler,
  getCustomTypesRouteHandler,
  getCustomTypesCustomTypeGidRouteHandler,
  getEventsRouteHandler,
  postExportsGraphRouteHandler,
  postExportsResourceRouteHandler,
  getGoalRelationshipsGoalRelationshipGidRouteHandler,
  putGoalRelationshipsGoalRelationshipGidRouteHandler,
  getGoalRelationshipsRouteHandler,
  postGoalsGoalGidAddSupportingRelationshipRouteHandler,
  postGoalsGoalGidRemoveSupportingRelationshipRouteHandler,
  getGoalsGoalGidRouteHandler,
  putGoalsGoalGidRouteHandler,
  deleteGoalsGoalGidRouteHandler,
  getGoalsRouteHandler,
  postGoalsRouteHandler,
  postGoalsGoalGidSetMetricRouteHandler,
  postGoalsGoalGidSetMetricCurrentValueRouteHandler,
  postGoalsGoalGidAddFollowersRouteHandler,
  postGoalsGoalGidRemoveFollowersRouteHandler,
  getGoalsGoalGidParentGoalsRouteHandler,
  postGoalsGoalGidAddCustomFieldSettingRouteHandler,
  postGoalsGoalGidRemoveCustomFieldSettingRouteHandler,
  getJobsJobGidRouteHandler,
  getMembershipsRouteHandler,
  postMembershipsRouteHandler,
  getMembershipsMembershipGidRouteHandler,
  putMembershipsMembershipGidRouteHandler,
  deleteMembershipsMembershipGidRouteHandler,
  getUsersUserGidNotificationsRouteHandler,
  postUsersUserGidNotificationsMarkReadRouteHandler,
  postUsersUserGidNotificationsMarkUnreadRouteHandler,
  getOooEntriesOooEntryGidRouteHandler,
  putOooEntriesOooEntryGidRouteHandler,
  deleteOooEntriesOooEntryGidRouteHandler,
  getOooEntriesRouteHandler,
  postOooEntriesRouteHandler,
  postOrganizationExportsRouteHandler,
  getOrganizationExportsOrganizationExportGidRouteHandler,
  getPortfolioMembershipsRouteHandler,
  getPortfolioMembershipsPortfolioMembershipGidRouteHandler,
  getPortfoliosPortfolioGidPortfolioMembershipsRouteHandler,
  getPortfoliosRouteHandler,
  postPortfoliosRouteHandler,
  getPortfoliosPortfolioGidRouteHandler,
  putPortfoliosPortfolioGidRouteHandler,
  deletePortfoliosPortfolioGidRouteHandler,
  getPortfoliosPortfolioGidItemsRouteHandler,
  postPortfoliosPortfolioGidAddItemRouteHandler,
  postPortfoliosPortfolioGidRemoveItemRouteHandler,
  postPortfoliosPortfolioGidAddCustomFieldSettingRouteHandler,
  postPortfoliosPortfolioGidRemoveCustomFieldSettingRouteHandler,
  postPortfoliosPortfolioGidAddMembersRouteHandler,
  postPortfoliosPortfolioGidRemoveMembersRouteHandler,
  postPortfoliosPortfolioGidDuplicateRouteHandler,
  getProjectBriefsProjectBriefGidRouteHandler,
  putProjectBriefsProjectBriefGidRouteHandler,
  deleteProjectBriefsProjectBriefGidRouteHandler,
  postProjectsProjectGidProjectBriefsRouteHandler,
  getProjectMembershipsProjectMembershipGidRouteHandler,
  getProjectsProjectGidProjectMembershipsRouteHandler,
  getProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  putProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  getProjectsProjectGidProjectPortfolioSettingsRouteHandler,
  getPortfoliosPortfolioGidProjectPortfolioSettingsRouteHandler,
  getProjectStatusesProjectStatusGidRouteHandler,
  deleteProjectStatusesProjectStatusGidRouteHandler,
  getProjectsProjectGidProjectStatusesRouteHandler,
  postProjectsProjectGidProjectStatusesRouteHandler,
  getProjectTemplatesProjectTemplateGidRouteHandler,
  deleteProjectTemplatesProjectTemplateGidRouteHandler,
  getProjectTemplatesRouteHandler,
  getTeamsTeamGidProjectTemplatesRouteHandler,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler,
  getProjectsRouteHandler,
  postProjectsRouteHandler,
  getProjectsProjectGidRouteHandler,
  putProjectsProjectGidRouteHandler,
  deleteProjectsProjectGidRouteHandler,
  postProjectsProjectGidDuplicateRouteHandler,
  getTasksTaskGidProjectsRouteHandler,
  getTeamsTeamGidProjectsRouteHandler,
  postTeamsTeamGidProjectsRouteHandler,
  getWorkspacesWorkspaceGidProjectsRouteHandler,
  postWorkspacesWorkspaceGidProjectsRouteHandler,
  getWorkspacesWorkspaceGidProjectsSearchRouteHandler,
  postProjectsProjectGidAddCustomFieldSettingRouteHandler,
  postProjectsProjectGidRemoveCustomFieldSettingRouteHandler,
  getProjectsProjectGidTaskCountsRouteHandler,
  postProjectsProjectGidAddMembersRouteHandler,
  postProjectsProjectGidRemoveMembersRouteHandler,
  postProjectsProjectGidAddFollowersRouteHandler,
  postProjectsProjectGidRemoveFollowersRouteHandler,
  postProjectsProjectGidSaveAsTemplateRouteHandler,
  postProjectsProjectGidRollupRouteHandler,
  getRatesRouteHandler,
  postRatesRouteHandler,
  getRatesRateGidRouteHandler,
  putRatesRateGidRouteHandler,
  deleteRatesRateGidRouteHandler,
  getReactionsRouteHandler,
  getTablesTableGidRecordsRouteHandler,
  getWorkspacesWorkspaceGidRecordsSearchRouteHandler,
  postRecordsRouteHandler,
  getRecordsRecordGidRouteHandler,
  putRecordsRecordGidRouteHandler,
  deleteRecordsRecordGidRouteHandler,
  getRolesRouteHandler,
  postRolesRouteHandler,
  getRolesRoleGidRouteHandler,
  putRolesRoleGidRouteHandler,
  deleteRolesRoleGidRouteHandler,
  postRuleTriggersRuleTriggerGidRunRouteHandler,
  getSectionsSectionGidRouteHandler,
  putSectionsSectionGidRouteHandler,
  deleteSectionsSectionGidRouteHandler,
  getProjectsProjectGidSectionsRouteHandler,
  postProjectsProjectGidSectionsRouteHandler,
  postSectionsSectionGidAddTaskRouteHandler,
  postProjectsProjectGidSectionsInsertRouteHandler,
  getStatusUpdatesStatusUpdateGidRouteHandler,
  deleteStatusUpdatesStatusUpdateGidRouteHandler,
  getStatusUpdatesRouteHandler,
  postStatusUpdatesRouteHandler,
  getStoriesStoryGidRouteHandler,
  putStoriesStoryGidRouteHandler,
  deleteStoriesStoryGidRouteHandler,
  getTasksTaskGidStoriesRouteHandler,
  postTasksTaskGidStoriesRouteHandler,
  getRecordsRecordGidStoriesRouteHandler,
  postRecordsRecordGidStoriesRouteHandler,
  getGoalsGoalGidStoriesRouteHandler,
  postGoalsGoalGidStoriesRouteHandler,
  getWorkspacesWorkspaceGidTablesRouteHandler,
  postTablesRouteHandler,
  getTablesTableGidRouteHandler,
  putTablesTableGidRouteHandler,
  deleteTablesTableGidRouteHandler,
  postTablesTableGidAddCustomFieldSettingRouteHandler,
  postTablesTableGidRemoveCustomFieldSettingRouteHandler,
  getTablesTableGidGetCustomFieldSettingsRouteHandler,
  getTablesTableGidCustomFieldSettingsRouteHandler,
  getTagsRouteHandler,
  postTagsRouteHandler,
  getTagsTagGidRouteHandler,
  putTagsTagGidRouteHandler,
  deleteTagsTagGidRouteHandler,
  getTasksTaskGidTagsRouteHandler,
  getWorkspacesWorkspaceGidTagsRouteHandler,
  postWorkspacesWorkspaceGidTagsRouteHandler,
  getTaskTemplatesRouteHandler,
  getTaskTemplatesTaskTemplateGidRouteHandler,
  deleteTaskTemplatesTaskTemplateGidRouteHandler,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRouteHandler,
  getTasksRouteHandler,
  postTasksRouteHandler,
  getTasksTaskGidRouteHandler,
  putTasksTaskGidRouteHandler,
  deleteTasksTaskGidRouteHandler,
  postTasksTaskGidDuplicateRouteHandler,
  getProjectsProjectGidTasksRouteHandler,
  getSectionsSectionGidTasksRouteHandler,
  getTagsTagGidTasksRouteHandler,
  getUserTaskListsUserTaskListGidTasksRouteHandler,
  getTasksTaskGidSubtasksRouteHandler,
  postTasksTaskGidSubtasksRouteHandler,
  postTasksTaskGidSetParentRouteHandler,
  getTasksTaskGidDependenciesRouteHandler,
  postTasksTaskGidAddDependenciesRouteHandler,
  postTasksTaskGidRemoveDependenciesRouteHandler,
  getTasksTaskGidDependentsRouteHandler,
  postTasksTaskGidAddDependentsRouteHandler,
  postTasksTaskGidRemoveDependentsRouteHandler,
  postTasksTaskGidAddProjectRouteHandler,
  postTasksTaskGidRemoveProjectRouteHandler,
  postTasksTaskGidAddTagRouteHandler,
  postTasksTaskGidRemoveTagRouteHandler,
  postTasksTaskGidAddFollowersRouteHandler,
  postTasksTaskGidRemoveFollowersRouteHandler,
  postTasksTaskGidRollupRouteHandler,
  getWorkspacesWorkspaceGidTasksCustomIdCustomIdRouteHandler,
  getWorkspacesWorkspaceGidTasksSearchRouteHandler,
  getTeamMembershipsTeamMembershipGidRouteHandler,
  getTeamMembershipsRouteHandler,
  getTeamsTeamGidTeamMembershipsRouteHandler,
  getUsersUserGidTeamMembershipsRouteHandler,
  postTeamsRouteHandler,
  getTeamsTeamGidRouteHandler,
  putTeamsTeamGidRouteHandler,
  getWorkspacesWorkspaceGidTeamsRouteHandler,
  getUsersUserGidTeamsRouteHandler,
  postTeamsTeamGidAddUserRouteHandler,
  postTeamsTeamGidRemoveUserRouteHandler,
  getTimePeriodsTimePeriodGidRouteHandler,
  getTimePeriodsRouteHandler,
  getTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  putTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  deleteTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRouteHandler,
  getTimeTrackingCategoriesRouteHandler,
  postTimeTrackingCategoriesRouteHandler,
  getTasksTaskGidTimeTrackingEntriesRouteHandler,
  postTasksTaskGidTimeTrackingEntriesRouteHandler,
  getTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  putTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  deleteTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  getTimeTrackingEntriesRouteHandler,
  getTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  putTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  getTimesheetApprovalStatusesRouteHandler,
  postTimesheetApprovalStatusesRouteHandler,
  getWorkspacesWorkspaceGidTypeaheadRouteHandler,
  getUserTaskListsUserTaskListGidRouteHandler,
  getUsersUserGidUserTaskListRouteHandler,
  getUsersRouteHandler,
  getUsersUserGidRouteHandler,
  putUsersUserGidRouteHandler,
  getUsersUserGidFavoritesRouteHandler,
  getTeamsTeamGidUsersRouteHandler,
  getWorkspacesWorkspaceGidUsersRouteHandler,
  getWorkspacesWorkspaceGidUsersUserGidRouteHandler,
  putWorkspacesWorkspaceGidUsersUserGidRouteHandler,
  getWebhooksRouteHandler,
  postWebhooksRouteHandler,
  getWebhooksWebhookGidRouteHandler,
  putWebhooksWebhookGidRouteHandler,
  deleteWebhooksWebhookGidRouteHandler,
  getWorkspaceMembershipsWorkspaceMembershipGidRouteHandler,
  getUsersUserGidWorkspaceMembershipsRouteHandler,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRouteHandler,
  getWorkspacesRouteHandler,
  getWorkspacesWorkspaceGidRouteHandler,
  putWorkspacesWorkspaceGidRouteHandler,
  postWorkspacesWorkspaceGidAddUserRouteHandler,
  postWorkspacesWorkspaceGidRemoveUserRouteHandler,
  getWorkspacesWorkspaceGidEventsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccessRequestsRoute, getAccessRequestsRouteHandler)
  .openapi(postAccessRequestsRoute, postAccessRequestsRouteHandler)
  .openapi(
    postAccessRequestsAccessRequestGidApproveRoute,
    postAccessRequestsAccessRequestGidApproveRouteHandler,
  )
  .openapi(
    postAccessRequestsAccessRequestGidRejectRoute,
    postAccessRequestsAccessRequestGidRejectRouteHandler,
  )
  .openapi(getWorkspacesWorkspaceGidAgentsRoute, getWorkspacesWorkspaceGidAgentsRouteHandler)
  .openapi(getAgentsAgentGidRoute, getAgentsAgentGidRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidAiStudioRunsRoute,
    getWorkspacesWorkspaceGidAiStudioRunsRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceGidAiStudioSeatsRoute,
    getWorkspacesWorkspaceGidAiStudioSeatsRouteHandler,
  )
  .openapi(getAllocationsAllocationGidRoute, getAllocationsAllocationGidRouteHandler)
  .openapi(putAllocationsAllocationGidRoute, putAllocationsAllocationGidRouteHandler)
  .openapi(deleteAllocationsAllocationGidRoute, deleteAllocationsAllocationGidRouteHandler)
  .openapi(getAllocationsRoute, getAllocationsRouteHandler)
  .openapi(postAllocationsRoute, postAllocationsRouteHandler)
  .openapi(getAttachmentsAttachmentGidRoute, getAttachmentsAttachmentGidRouteHandler)
  .openapi(deleteAttachmentsAttachmentGidRoute, deleteAttachmentsAttachmentGidRouteHandler)
  .openapi(getAttachmentsRoute, getAttachmentsRouteHandler)
  .openapi(postAttachmentsRoute, postAttachmentsRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidAuditLogEventsRoute,
    getWorkspacesWorkspaceGidAuditLogEventsRouteHandler,
  )
  .openapi(postBatchRoute, postBatchRouteHandler)
  .openapi(getBudgetsRoute, getBudgetsRouteHandler)
  .openapi(postBudgetsRoute, postBudgetsRouteHandler)
  .openapi(getBudgetsBudgetGidRoute, getBudgetsBudgetGidRouteHandler)
  .openapi(putBudgetsBudgetGidRoute, putBudgetsBudgetGidRouteHandler)
  .openapi(deleteBudgetsBudgetGidRoute, deleteBudgetsBudgetGidRouteHandler)
  .openapi(
    getProjectsProjectGidCustomFieldSettingsRoute,
    getProjectsProjectGidCustomFieldSettingsRouteHandler,
  )
  .openapi(
    getPortfoliosPortfolioGidCustomFieldSettingsRoute,
    getPortfoliosPortfolioGidCustomFieldSettingsRouteHandler,
  )
  .openapi(getGoalsGoalGidCustomFieldSettingsRoute, getGoalsGoalGidCustomFieldSettingsRouteHandler)
  .openapi(getTeamsTeamGidCustomFieldSettingsRoute, getTeamsTeamGidCustomFieldSettingsRouteHandler)
  .openapi(postCustomFieldsRoute, postCustomFieldsRouteHandler)
  .openapi(getCustomFieldsCustomFieldGidRoute, getCustomFieldsCustomFieldGidRouteHandler)
  .openapi(putCustomFieldsCustomFieldGidRoute, putCustomFieldsCustomFieldGidRouteHandler)
  .openapi(deleteCustomFieldsCustomFieldGidRoute, deleteCustomFieldsCustomFieldGidRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidCustomFieldsRoute,
    getWorkspacesWorkspaceGidCustomFieldsRouteHandler,
  )
  .openapi(
    postCustomFieldsCustomFieldGidEnumOptionsRoute,
    postCustomFieldsCustomFieldGidEnumOptionsRouteHandler,
  )
  .openapi(
    postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
    postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler,
  )
  .openapi(putEnumOptionsEnumOptionGidRoute, putEnumOptionsEnumOptionGidRouteHandler)
  .openapi(getCustomTypesRoute, getCustomTypesRouteHandler)
  .openapi(getCustomTypesCustomTypeGidRoute, getCustomTypesCustomTypeGidRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postExportsGraphRoute, postExportsGraphRouteHandler)
  .openapi(postExportsResourceRoute, postExportsResourceRouteHandler)
  .openapi(
    getGoalRelationshipsGoalRelationshipGidRoute,
    getGoalRelationshipsGoalRelationshipGidRouteHandler,
  )
  .openapi(
    putGoalRelationshipsGoalRelationshipGidRoute,
    putGoalRelationshipsGoalRelationshipGidRouteHandler,
  )
  .openapi(getGoalRelationshipsRoute, getGoalRelationshipsRouteHandler)
  .openapi(
    postGoalsGoalGidAddSupportingRelationshipRoute,
    postGoalsGoalGidAddSupportingRelationshipRouteHandler,
  )
  .openapi(
    postGoalsGoalGidRemoveSupportingRelationshipRoute,
    postGoalsGoalGidRemoveSupportingRelationshipRouteHandler,
  )
  .openapi(getGoalsGoalGidRoute, getGoalsGoalGidRouteHandler)
  .openapi(putGoalsGoalGidRoute, putGoalsGoalGidRouteHandler)
  .openapi(deleteGoalsGoalGidRoute, deleteGoalsGoalGidRouteHandler)
  .openapi(getGoalsRoute, getGoalsRouteHandler)
  .openapi(postGoalsRoute, postGoalsRouteHandler)
  .openapi(postGoalsGoalGidSetMetricRoute, postGoalsGoalGidSetMetricRouteHandler)
  .openapi(
    postGoalsGoalGidSetMetricCurrentValueRoute,
    postGoalsGoalGidSetMetricCurrentValueRouteHandler,
  )
  .openapi(postGoalsGoalGidAddFollowersRoute, postGoalsGoalGidAddFollowersRouteHandler)
  .openapi(postGoalsGoalGidRemoveFollowersRoute, postGoalsGoalGidRemoveFollowersRouteHandler)
  .openapi(getGoalsGoalGidParentGoalsRoute, getGoalsGoalGidParentGoalsRouteHandler)
  .openapi(
    postGoalsGoalGidAddCustomFieldSettingRoute,
    postGoalsGoalGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(
    postGoalsGoalGidRemoveCustomFieldSettingRoute,
    postGoalsGoalGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(getJobsJobGidRoute, getJobsJobGidRouteHandler)
  .openapi(getMembershipsRoute, getMembershipsRouteHandler)
  .openapi(postMembershipsRoute, postMembershipsRouteHandler)
  .openapi(getMembershipsMembershipGidRoute, getMembershipsMembershipGidRouteHandler)
  .openapi(putMembershipsMembershipGidRoute, putMembershipsMembershipGidRouteHandler)
  .openapi(deleteMembershipsMembershipGidRoute, deleteMembershipsMembershipGidRouteHandler)
  .openapi(getUsersUserGidNotificationsRoute, getUsersUserGidNotificationsRouteHandler)
  .openapi(
    postUsersUserGidNotificationsMarkReadRoute,
    postUsersUserGidNotificationsMarkReadRouteHandler,
  )
  .openapi(
    postUsersUserGidNotificationsMarkUnreadRoute,
    postUsersUserGidNotificationsMarkUnreadRouteHandler,
  )
  .openapi(getOooEntriesOooEntryGidRoute, getOooEntriesOooEntryGidRouteHandler)
  .openapi(putOooEntriesOooEntryGidRoute, putOooEntriesOooEntryGidRouteHandler)
  .openapi(deleteOooEntriesOooEntryGidRoute, deleteOooEntriesOooEntryGidRouteHandler)
  .openapi(getOooEntriesRoute, getOooEntriesRouteHandler)
  .openapi(postOooEntriesRoute, postOooEntriesRouteHandler)
  .openapi(postOrganizationExportsRoute, postOrganizationExportsRouteHandler)
  .openapi(
    getOrganizationExportsOrganizationExportGidRoute,
    getOrganizationExportsOrganizationExportGidRouteHandler,
  )
  .openapi(getPortfolioMembershipsRoute, getPortfolioMembershipsRouteHandler)
  .openapi(
    getPortfolioMembershipsPortfolioMembershipGidRoute,
    getPortfolioMembershipsPortfolioMembershipGidRouteHandler,
  )
  .openapi(
    getPortfoliosPortfolioGidPortfolioMembershipsRoute,
    getPortfoliosPortfolioGidPortfolioMembershipsRouteHandler,
  )
  .openapi(getPortfoliosRoute, getPortfoliosRouteHandler)
  .openapi(postPortfoliosRoute, postPortfoliosRouteHandler)
  .openapi(getPortfoliosPortfolioGidRoute, getPortfoliosPortfolioGidRouteHandler)
  .openapi(putPortfoliosPortfolioGidRoute, putPortfoliosPortfolioGidRouteHandler)
  .openapi(deletePortfoliosPortfolioGidRoute, deletePortfoliosPortfolioGidRouteHandler)
  .openapi(getPortfoliosPortfolioGidItemsRoute, getPortfoliosPortfolioGidItemsRouteHandler)
  .openapi(postPortfoliosPortfolioGidAddItemRoute, postPortfoliosPortfolioGidAddItemRouteHandler)
  .openapi(
    postPortfoliosPortfolioGidRemoveItemRoute,
    postPortfoliosPortfolioGidRemoveItemRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
    postPortfoliosPortfolioGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute,
    postPortfoliosPortfolioGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidAddMembersRoute,
    postPortfoliosPortfolioGidAddMembersRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidRemoveMembersRoute,
    postPortfoliosPortfolioGidRemoveMembersRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidDuplicateRoute,
    postPortfoliosPortfolioGidDuplicateRouteHandler,
  )
  .openapi(getProjectBriefsProjectBriefGidRoute, getProjectBriefsProjectBriefGidRouteHandler)
  .openapi(putProjectBriefsProjectBriefGidRoute, putProjectBriefsProjectBriefGidRouteHandler)
  .openapi(deleteProjectBriefsProjectBriefGidRoute, deleteProjectBriefsProjectBriefGidRouteHandler)
  .openapi(
    postProjectsProjectGidProjectBriefsRoute,
    postProjectsProjectGidProjectBriefsRouteHandler,
  )
  .openapi(
    getProjectMembershipsProjectMembershipGidRoute,
    getProjectMembershipsProjectMembershipGidRouteHandler,
  )
  .openapi(
    getProjectsProjectGidProjectMembershipsRoute,
    getProjectsProjectGidProjectMembershipsRouteHandler,
  )
  .openapi(
    getProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
    getProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  )
  .openapi(
    putProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
    putProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  )
  .openapi(
    getProjectsProjectGidProjectPortfolioSettingsRoute,
    getProjectsProjectGidProjectPortfolioSettingsRouteHandler,
  )
  .openapi(
    getPortfoliosPortfolioGidProjectPortfolioSettingsRoute,
    getPortfoliosPortfolioGidProjectPortfolioSettingsRouteHandler,
  )
  .openapi(getProjectStatusesProjectStatusGidRoute, getProjectStatusesProjectStatusGidRouteHandler)
  .openapi(
    deleteProjectStatusesProjectStatusGidRoute,
    deleteProjectStatusesProjectStatusGidRouteHandler,
  )
  .openapi(
    getProjectsProjectGidProjectStatusesRoute,
    getProjectsProjectGidProjectStatusesRouteHandler,
  )
  .openapi(
    postProjectsProjectGidProjectStatusesRoute,
    postProjectsProjectGidProjectStatusesRouteHandler,
  )
  .openapi(
    getProjectTemplatesProjectTemplateGidRoute,
    getProjectTemplatesProjectTemplateGidRouteHandler,
  )
  .openapi(
    deleteProjectTemplatesProjectTemplateGidRoute,
    deleteProjectTemplatesProjectTemplateGidRouteHandler,
  )
  .openapi(getProjectTemplatesRoute, getProjectTemplatesRouteHandler)
  .openapi(getTeamsTeamGidProjectTemplatesRoute, getTeamsTeamGidProjectTemplatesRouteHandler)
  .openapi(
    postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
    postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsProjectGidRoute, getProjectsProjectGidRouteHandler)
  .openapi(putProjectsProjectGidRoute, putProjectsProjectGidRouteHandler)
  .openapi(deleteProjectsProjectGidRoute, deleteProjectsProjectGidRouteHandler)
  .openapi(postProjectsProjectGidDuplicateRoute, postProjectsProjectGidDuplicateRouteHandler)
  .openapi(getTasksTaskGidProjectsRoute, getTasksTaskGidProjectsRouteHandler)
  .openapi(getTeamsTeamGidProjectsRoute, getTeamsTeamGidProjectsRouteHandler)
  .openapi(postTeamsTeamGidProjectsRoute, postTeamsTeamGidProjectsRouteHandler)
  .openapi(getWorkspacesWorkspaceGidProjectsRoute, getWorkspacesWorkspaceGidProjectsRouteHandler)
  .openapi(postWorkspacesWorkspaceGidProjectsRoute, postWorkspacesWorkspaceGidProjectsRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidProjectsSearchRoute,
    getWorkspacesWorkspaceGidProjectsSearchRouteHandler,
  )
  .openapi(
    postProjectsProjectGidAddCustomFieldSettingRoute,
    postProjectsProjectGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(
    postProjectsProjectGidRemoveCustomFieldSettingRoute,
    postProjectsProjectGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(getProjectsProjectGidTaskCountsRoute, getProjectsProjectGidTaskCountsRouteHandler)
  .openapi(postProjectsProjectGidAddMembersRoute, postProjectsProjectGidAddMembersRouteHandler)
  .openapi(
    postProjectsProjectGidRemoveMembersRoute,
    postProjectsProjectGidRemoveMembersRouteHandler,
  )
  .openapi(postProjectsProjectGidAddFollowersRoute, postProjectsProjectGidAddFollowersRouteHandler)
  .openapi(
    postProjectsProjectGidRemoveFollowersRoute,
    postProjectsProjectGidRemoveFollowersRouteHandler,
  )
  .openapi(
    postProjectsProjectGidSaveAsTemplateRoute,
    postProjectsProjectGidSaveAsTemplateRouteHandler,
  )
  .openapi(postProjectsProjectGidRollupRoute, postProjectsProjectGidRollupRouteHandler)
  .openapi(getRatesRoute, getRatesRouteHandler)
  .openapi(postRatesRoute, postRatesRouteHandler)
  .openapi(getRatesRateGidRoute, getRatesRateGidRouteHandler)
  .openapi(putRatesRateGidRoute, putRatesRateGidRouteHandler)
  .openapi(deleteRatesRateGidRoute, deleteRatesRateGidRouteHandler)
  .openapi(getReactionsRoute, getReactionsRouteHandler)
  .openapi(getTablesTableGidRecordsRoute, getTablesTableGidRecordsRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidRecordsSearchRoute,
    getWorkspacesWorkspaceGidRecordsSearchRouteHandler,
  )
  .openapi(postRecordsRoute, postRecordsRouteHandler)
  .openapi(getRecordsRecordGidRoute, getRecordsRecordGidRouteHandler)
  .openapi(putRecordsRecordGidRoute, putRecordsRecordGidRouteHandler)
  .openapi(deleteRecordsRecordGidRoute, deleteRecordsRecordGidRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(getRolesRoleGidRoute, getRolesRoleGidRouteHandler)
  .openapi(putRolesRoleGidRoute, putRolesRoleGidRouteHandler)
  .openapi(deleteRolesRoleGidRoute, deleteRolesRoleGidRouteHandler)
  .openapi(postRuleTriggersRuleTriggerGidRunRoute, postRuleTriggersRuleTriggerGidRunRouteHandler)
  .openapi(getSectionsSectionGidRoute, getSectionsSectionGidRouteHandler)
  .openapi(putSectionsSectionGidRoute, putSectionsSectionGidRouteHandler)
  .openapi(deleteSectionsSectionGidRoute, deleteSectionsSectionGidRouteHandler)
  .openapi(getProjectsProjectGidSectionsRoute, getProjectsProjectGidSectionsRouteHandler)
  .openapi(postProjectsProjectGidSectionsRoute, postProjectsProjectGidSectionsRouteHandler)
  .openapi(postSectionsSectionGidAddTaskRoute, postSectionsSectionGidAddTaskRouteHandler)
  .openapi(
    postProjectsProjectGidSectionsInsertRoute,
    postProjectsProjectGidSectionsInsertRouteHandler,
  )
  .openapi(getStatusUpdatesStatusUpdateGidRoute, getStatusUpdatesStatusUpdateGidRouteHandler)
  .openapi(deleteStatusUpdatesStatusUpdateGidRoute, deleteStatusUpdatesStatusUpdateGidRouteHandler)
  .openapi(getStatusUpdatesRoute, getStatusUpdatesRouteHandler)
  .openapi(postStatusUpdatesRoute, postStatusUpdatesRouteHandler)
  .openapi(getStoriesStoryGidRoute, getStoriesStoryGidRouteHandler)
  .openapi(putStoriesStoryGidRoute, putStoriesStoryGidRouteHandler)
  .openapi(deleteStoriesStoryGidRoute, deleteStoriesStoryGidRouteHandler)
  .openapi(getTasksTaskGidStoriesRoute, getTasksTaskGidStoriesRouteHandler)
  .openapi(postTasksTaskGidStoriesRoute, postTasksTaskGidStoriesRouteHandler)
  .openapi(getRecordsRecordGidStoriesRoute, getRecordsRecordGidStoriesRouteHandler)
  .openapi(postRecordsRecordGidStoriesRoute, postRecordsRecordGidStoriesRouteHandler)
  .openapi(getGoalsGoalGidStoriesRoute, getGoalsGoalGidStoriesRouteHandler)
  .openapi(postGoalsGoalGidStoriesRoute, postGoalsGoalGidStoriesRouteHandler)
  .openapi(getWorkspacesWorkspaceGidTablesRoute, getWorkspacesWorkspaceGidTablesRouteHandler)
  .openapi(postTablesRoute, postTablesRouteHandler)
  .openapi(getTablesTableGidRoute, getTablesTableGidRouteHandler)
  .openapi(putTablesTableGidRoute, putTablesTableGidRouteHandler)
  .openapi(deleteTablesTableGidRoute, deleteTablesTableGidRouteHandler)
  .openapi(
    postTablesTableGidAddCustomFieldSettingRoute,
    postTablesTableGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(
    postTablesTableGidRemoveCustomFieldSettingRoute,
    postTablesTableGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(
    getTablesTableGidGetCustomFieldSettingsRoute,
    getTablesTableGidGetCustomFieldSettingsRouteHandler,
  )
  .openapi(
    getTablesTableGidCustomFieldSettingsRoute,
    getTablesTableGidCustomFieldSettingsRouteHandler,
  )
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(getTagsTagGidRoute, getTagsTagGidRouteHandler)
  .openapi(putTagsTagGidRoute, putTagsTagGidRouteHandler)
  .openapi(deleteTagsTagGidRoute, deleteTagsTagGidRouteHandler)
  .openapi(getTasksTaskGidTagsRoute, getTasksTaskGidTagsRouteHandler)
  .openapi(getWorkspacesWorkspaceGidTagsRoute, getWorkspacesWorkspaceGidTagsRouteHandler)
  .openapi(postWorkspacesWorkspaceGidTagsRoute, postWorkspacesWorkspaceGidTagsRouteHandler)
  .openapi(getTaskTemplatesRoute, getTaskTemplatesRouteHandler)
  .openapi(getTaskTemplatesTaskTemplateGidRoute, getTaskTemplatesTaskTemplateGidRouteHandler)
  .openapi(deleteTaskTemplatesTaskTemplateGidRoute, deleteTaskTemplatesTaskTemplateGidRouteHandler)
  .openapi(
    postTaskTemplatesTaskTemplateGidInstantiateTaskRoute,
    postTaskTemplatesTaskTemplateGidInstantiateTaskRouteHandler,
  )
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(getTasksTaskGidRoute, getTasksTaskGidRouteHandler)
  .openapi(putTasksTaskGidRoute, putTasksTaskGidRouteHandler)
  .openapi(deleteTasksTaskGidRoute, deleteTasksTaskGidRouteHandler)
  .openapi(postTasksTaskGidDuplicateRoute, postTasksTaskGidDuplicateRouteHandler)
  .openapi(getProjectsProjectGidTasksRoute, getProjectsProjectGidTasksRouteHandler)
  .openapi(getSectionsSectionGidTasksRoute, getSectionsSectionGidTasksRouteHandler)
  .openapi(getTagsTagGidTasksRoute, getTagsTagGidTasksRouteHandler)
  .openapi(
    getUserTaskListsUserTaskListGidTasksRoute,
    getUserTaskListsUserTaskListGidTasksRouteHandler,
  )
  .openapi(getTasksTaskGidSubtasksRoute, getTasksTaskGidSubtasksRouteHandler)
  .openapi(postTasksTaskGidSubtasksRoute, postTasksTaskGidSubtasksRouteHandler)
  .openapi(postTasksTaskGidSetParentRoute, postTasksTaskGidSetParentRouteHandler)
  .openapi(getTasksTaskGidDependenciesRoute, getTasksTaskGidDependenciesRouteHandler)
  .openapi(postTasksTaskGidAddDependenciesRoute, postTasksTaskGidAddDependenciesRouteHandler)
  .openapi(postTasksTaskGidRemoveDependenciesRoute, postTasksTaskGidRemoveDependenciesRouteHandler)
  .openapi(getTasksTaskGidDependentsRoute, getTasksTaskGidDependentsRouteHandler)
  .openapi(postTasksTaskGidAddDependentsRoute, postTasksTaskGidAddDependentsRouteHandler)
  .openapi(postTasksTaskGidRemoveDependentsRoute, postTasksTaskGidRemoveDependentsRouteHandler)
  .openapi(postTasksTaskGidAddProjectRoute, postTasksTaskGidAddProjectRouteHandler)
  .openapi(postTasksTaskGidRemoveProjectRoute, postTasksTaskGidRemoveProjectRouteHandler)
  .openapi(postTasksTaskGidAddTagRoute, postTasksTaskGidAddTagRouteHandler)
  .openapi(postTasksTaskGidRemoveTagRoute, postTasksTaskGidRemoveTagRouteHandler)
  .openapi(postTasksTaskGidAddFollowersRoute, postTasksTaskGidAddFollowersRouteHandler)
  .openapi(postTasksTaskGidRemoveFollowersRoute, postTasksTaskGidRemoveFollowersRouteHandler)
  .openapi(postTasksTaskGidRollupRoute, postTasksTaskGidRollupRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidTasksCustomIdCustomIdRoute,
    getWorkspacesWorkspaceGidTasksCustomIdCustomIdRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceGidTasksSearchRoute,
    getWorkspacesWorkspaceGidTasksSearchRouteHandler,
  )
  .openapi(
    getTeamMembershipsTeamMembershipGidRoute,
    getTeamMembershipsTeamMembershipGidRouteHandler,
  )
  .openapi(getTeamMembershipsRoute, getTeamMembershipsRouteHandler)
  .openapi(getTeamsTeamGidTeamMembershipsRoute, getTeamsTeamGidTeamMembershipsRouteHandler)
  .openapi(getUsersUserGidTeamMembershipsRoute, getUsersUserGidTeamMembershipsRouteHandler)
  .openapi(postTeamsRoute, postTeamsRouteHandler)
  .openapi(getTeamsTeamGidRoute, getTeamsTeamGidRouteHandler)
  .openapi(putTeamsTeamGidRoute, putTeamsTeamGidRouteHandler)
  .openapi(getWorkspacesWorkspaceGidTeamsRoute, getWorkspacesWorkspaceGidTeamsRouteHandler)
  .openapi(getUsersUserGidTeamsRoute, getUsersUserGidTeamsRouteHandler)
  .openapi(postTeamsTeamGidAddUserRoute, postTeamsTeamGidAddUserRouteHandler)
  .openapi(postTeamsTeamGidRemoveUserRoute, postTeamsTeamGidRemoveUserRouteHandler)
  .openapi(getTimePeriodsTimePeriodGidRoute, getTimePeriodsTimePeriodGidRouteHandler)
  .openapi(getTimePeriodsRoute, getTimePeriodsRouteHandler)
  .openapi(
    getTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
    getTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  )
  .openapi(
    putTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
    putTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  )
  .openapi(
    deleteTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
    deleteTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  )
  .openapi(
    getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRoute,
    getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRouteHandler,
  )
  .openapi(getTimeTrackingCategoriesRoute, getTimeTrackingCategoriesRouteHandler)
  .openapi(postTimeTrackingCategoriesRoute, postTimeTrackingCategoriesRouteHandler)
  .openapi(getTasksTaskGidTimeTrackingEntriesRoute, getTasksTaskGidTimeTrackingEntriesRouteHandler)
  .openapi(
    postTasksTaskGidTimeTrackingEntriesRoute,
    postTasksTaskGidTimeTrackingEntriesRouteHandler,
  )
  .openapi(
    getTimeTrackingEntriesTimeTrackingEntryGidRoute,
    getTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  )
  .openapi(
    putTimeTrackingEntriesTimeTrackingEntryGidRoute,
    putTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  )
  .openapi(
    deleteTimeTrackingEntriesTimeTrackingEntryGidRoute,
    deleteTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  )
  .openapi(getTimeTrackingEntriesRoute, getTimeTrackingEntriesRouteHandler)
  .openapi(
    getTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
    getTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  )
  .openapi(
    putTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
    putTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  )
  .openapi(getTimesheetApprovalStatusesRoute, getTimesheetApprovalStatusesRouteHandler)
  .openapi(postTimesheetApprovalStatusesRoute, postTimesheetApprovalStatusesRouteHandler)
  .openapi(getWorkspacesWorkspaceGidTypeaheadRoute, getWorkspacesWorkspaceGidTypeaheadRouteHandler)
  .openapi(getUserTaskListsUserTaskListGidRoute, getUserTaskListsUserTaskListGidRouteHandler)
  .openapi(getUsersUserGidUserTaskListRoute, getUsersUserGidUserTaskListRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserGidRoute, getUsersUserGidRouteHandler)
  .openapi(putUsersUserGidRoute, putUsersUserGidRouteHandler)
  .openapi(getUsersUserGidFavoritesRoute, getUsersUserGidFavoritesRouteHandler)
  .openapi(getTeamsTeamGidUsersRoute, getTeamsTeamGidUsersRouteHandler)
  .openapi(getWorkspacesWorkspaceGidUsersRoute, getWorkspacesWorkspaceGidUsersRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidUsersUserGidRoute,
    getWorkspacesWorkspaceGidUsersUserGidRouteHandler,
  )
  .openapi(
    putWorkspacesWorkspaceGidUsersUserGidRoute,
    putWorkspacesWorkspaceGidUsersUserGidRouteHandler,
  )
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWebhooksWebhookGidRoute, getWebhooksWebhookGidRouteHandler)
  .openapi(putWebhooksWebhookGidRoute, putWebhooksWebhookGidRouteHandler)
  .openapi(deleteWebhooksWebhookGidRoute, deleteWebhooksWebhookGidRouteHandler)
  .openapi(
    getWorkspaceMembershipsWorkspaceMembershipGidRoute,
    getWorkspaceMembershipsWorkspaceMembershipGidRouteHandler,
  )
  .openapi(
    getUsersUserGidWorkspaceMembershipsRoute,
    getUsersUserGidWorkspaceMembershipsRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
    getWorkspacesWorkspaceGidWorkspaceMembershipsRouteHandler,
  )
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(getWorkspacesWorkspaceGidRoute, getWorkspacesWorkspaceGidRouteHandler)
  .openapi(putWorkspacesWorkspaceGidRoute, putWorkspacesWorkspaceGidRouteHandler)
  .openapi(postWorkspacesWorkspaceGidAddUserRoute, postWorkspacesWorkspaceGidAddUserRouteHandler)
  .openapi(
    postWorkspacesWorkspaceGidRemoveUserRoute,
    postWorkspacesWorkspaceGidRemoveUserRouteHandler,
  )
  .openapi(getWorkspacesWorkspaceGidEventsRoute, getWorkspacesWorkspaceGidEventsRouteHandler)

export default app
