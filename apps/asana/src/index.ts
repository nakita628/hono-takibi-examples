import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllocationsAllocationGidRoute,
  deleteAttachmentsAttachmentGidRoute,
  deleteBudgetsBudgetGidRoute,
  deleteCustomFieldsCustomFieldGidRoute,
  deleteGoalsGoalGidRoute,
  deleteMembershipsMembershipGidRoute,
  deleteOooEntriesOooEntryGidRoute,
  deletePortfoliosPortfolioGidRoute,
  deleteProjectBriefsProjectBriefGidRoute,
  deleteProjectsProjectGidRoute,
  deleteProjectStatusesProjectStatusGidRoute,
  deleteProjectTemplatesProjectTemplateGidRoute,
  deleteRatesRateGidRoute,
  deleteRecordsRecordGidRoute,
  deleteRolesRoleGidRoute,
  deleteSectionsSectionGidRoute,
  deleteStatusUpdatesStatusUpdateGidRoute,
  deleteStoriesStoryGidRoute,
  deleteTablesTableGidRoute,
  deleteTagsTagGidRoute,
  deleteTasksTaskGidRoute,
  deleteTaskTemplatesTaskTemplateGidRoute,
  deleteTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  deleteTimeTrackingEntriesTimeTrackingEntryGidRoute,
  deleteWebhooksWebhookGidRoute,
  getAccessRequestsRoute,
  getAgentsAgentGidRoute,
  getAllocationsAllocationGidRoute,
  getAllocationsRoute,
  getAttachmentsAttachmentGidRoute,
  getAttachmentsRoute,
  getBudgetsBudgetGidRoute,
  getBudgetsRoute,
  getCustomFieldsCustomFieldGidRoute,
  getCustomTypesCustomTypeGidRoute,
  getCustomTypesRoute,
  getEventsRoute,
  getGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  getGoalsGoalGidCustomFieldSettingsRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsGoalGidStoriesRoute,
  getGoalsRoute,
  getJobsJobGidRoute,
  getMembershipsMembershipGidRoute,
  getMembershipsRoute,
  getOooEntriesOooEntryGidRoute,
  getOooEntriesRoute,
  getOrganizationExportsOrganizationExportGidRoute,
  getPortfolioMembershipsPortfolioMembershipGidRoute,
  getPortfolioMembershipsRoute,
  getPortfoliosPortfolioGidCustomFieldSettingsRoute,
  getPortfoliosPortfolioGidItemsRoute,
  getPortfoliosPortfolioGidPortfolioMembershipsRoute,
  getPortfoliosPortfolioGidProjectPortfolioSettingsRoute,
  getPortfoliosPortfolioGidRoute,
  getPortfoliosRoute,
  getProjectBriefsProjectBriefGidRoute,
  getProjectMembershipsProjectMembershipGidRoute,
  getProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
  getProjectsProjectGidProjectMembershipsRoute,
  getProjectsProjectGidProjectPortfolioSettingsRoute,
  getProjectsProjectGidProjectStatusesRoute,
  getProjectsProjectGidRoute,
  getProjectsProjectGidSectionsRoute,
  getProjectsProjectGidTaskCountsRoute,
  getProjectsProjectGidTasksRoute,
  getProjectsRoute,
  getProjectStatusesProjectStatusGidRoute,
  getProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  getRatesRateGidRoute,
  getRatesRoute,
  getReactionsRoute,
  getRecordsRecordGidRoute,
  getRecordsRecordGidStoriesRoute,
  getRolesRoleGidRoute,
  getRolesRoute,
  getSectionsSectionGidRoute,
  getSectionsSectionGidTasksRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusUpdateGidRoute,
  getStoriesStoryGidRoute,
  getTablesTableGidCustomFieldSettingsRoute,
  getTablesTableGidGetCustomFieldSettingsRoute,
  getTablesTableGidRecordsRoute,
  getTablesTableGidRoute,
  getTagsRoute,
  getTagsTagGidRoute,
  getTagsTagGidTasksRoute,
  getTasksRoute,
  getTasksTaskGidDependenciesRoute,
  getTasksTaskGidDependentsRoute,
  getTasksTaskGidProjectsRoute,
  getTasksTaskGidRoute,
  getTasksTaskGidStoriesRoute,
  getTasksTaskGidSubtasksRoute,
  getTasksTaskGidTagsRoute,
  getTasksTaskGidTimeTrackingEntriesRoute,
  getTaskTemplatesRoute,
  getTaskTemplatesTaskTemplateGidRoute,
  getTeamMembershipsRoute,
  getTeamMembershipsTeamMembershipGidRoute,
  getTeamsTeamGidCustomFieldSettingsRoute,
  getTeamsTeamGidProjectsRoute,
  getTeamsTeamGidProjectTemplatesRoute,
  getTeamsTeamGidRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getTeamsTeamGidUsersRoute,
  getTimePeriodsRoute,
  getTimePeriodsTimePeriodGidRoute,
  getTimesheetApprovalStatusesRoute,
  getTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
  getTimeTrackingCategoriesRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRoute,
  getTimeTrackingEntriesRoute,
  getTimeTrackingEntriesTimeTrackingEntryGidRoute,
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
  getUsersUserGidNotificationsRoute,
  getUsersUserGidRoute,
  getUsersUserGidTeamMembershipsRoute,
  getUsersUserGidTeamsRoute,
  getUsersUserGidUserTaskListRoute,
  getUsersUserGidWorkspaceMembershipsRoute,
  getUserTaskListsUserTaskListGidRoute,
  getUserTaskListsUserTaskListGidTasksRoute,
  getWebhooksRoute,
  getWebhooksWebhookGidRoute,
  getWorkspaceMembershipsWorkspaceMembershipGidRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceGidAgentsRoute,
  getWorkspacesWorkspaceGidAiStudioRunsRoute,
  getWorkspacesWorkspaceGidAiStudioSeatsRoute,
  getWorkspacesWorkspaceGidAuditLogEventsRoute,
  getWorkspacesWorkspaceGidCustomFieldsRoute,
  getWorkspacesWorkspaceGidEventsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  getWorkspacesWorkspaceGidProjectsSearchRoute,
  getWorkspacesWorkspaceGidRecordsSearchRoute,
  getWorkspacesWorkspaceGidRoute,
  getWorkspacesWorkspaceGidTablesRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  getWorkspacesWorkspaceGidTasksCustomIdCustomIdRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  getWorkspacesWorkspaceGidTypeaheadRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidUsersUserGidRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
  postAccessRequestsAccessRequestGidApproveRoute,
  postAccessRequestsAccessRequestGidRejectRoute,
  postAccessRequestsRoute,
  postAllocationsRoute,
  postAttachmentsRoute,
  postBatchRoute,
  postBudgetsRoute,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
  postCustomFieldsCustomFieldGidEnumOptionsRoute,
  postCustomFieldsRoute,
  postExportsGraphRoute,
  postExportsResourceRoute,
  postGoalsGoalGidAddCustomFieldSettingRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveCustomFieldSettingRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsGoalGidStoriesRoute,
  postGoalsRoute,
  postMembershipsRoute,
  postOooEntriesRoute,
  postOrganizationExportsRoute,
  postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
  postPortfoliosPortfolioGidAddItemRoute,
  postPortfoliosPortfolioGidAddMembersRoute,
  postPortfoliosPortfolioGidDuplicateRoute,
  postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute,
  postPortfoliosPortfolioGidRemoveItemRoute,
  postPortfoliosPortfolioGidRemoveMembersRoute,
  postPortfoliosRoute,
  postProjectsProjectGidAddCustomFieldSettingRoute,
  postProjectsProjectGidAddFollowersRoute,
  postProjectsProjectGidAddMembersRoute,
  postProjectsProjectGidDuplicateRoute,
  postProjectsProjectGidProjectBriefsRoute,
  postProjectsProjectGidProjectStatusesRoute,
  postProjectsProjectGidRemoveCustomFieldSettingRoute,
  postProjectsProjectGidRemoveFollowersRoute,
  postProjectsProjectGidRemoveMembersRoute,
  postProjectsProjectGidRollupRoute,
  postProjectsProjectGidSaveAsTemplateRoute,
  postProjectsProjectGidSectionsInsertRoute,
  postProjectsProjectGidSectionsRoute,
  postProjectsRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
  postRatesRoute,
  postRecordsRecordGidStoriesRoute,
  postRecordsRoute,
  postRolesRoute,
  postRuleTriggersRuleTriggerGidRunRoute,
  postSectionsSectionGidAddTaskRoute,
  postStatusUpdatesRoute,
  postTablesRoute,
  postTablesTableGidAddCustomFieldSettingRoute,
  postTablesTableGidRemoveCustomFieldSettingRoute,
  postTagsRoute,
  postTasksRoute,
  postTasksTaskGidAddDependenciesRoute,
  postTasksTaskGidAddDependentsRoute,
  postTasksTaskGidAddFollowersRoute,
  postTasksTaskGidAddProjectRoute,
  postTasksTaskGidAddTagRoute,
  postTasksTaskGidDuplicateRoute,
  postTasksTaskGidRemoveDependenciesRoute,
  postTasksTaskGidRemoveDependentsRoute,
  postTasksTaskGidRemoveFollowersRoute,
  postTasksTaskGidRemoveProjectRoute,
  postTasksTaskGidRemoveTagRoute,
  postTasksTaskGidRollupRoute,
  postTasksTaskGidSetParentRoute,
  postTasksTaskGidStoriesRoute,
  postTasksTaskGidSubtasksRoute,
  postTasksTaskGidTimeTrackingEntriesRoute,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRoute,
  postTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidProjectsRoute,
  postTeamsTeamGidRemoveUserRoute,
  postTimesheetApprovalStatusesRoute,
  postTimeTrackingCategoriesRoute,
  postUsersUserGidNotificationsMarkReadRoute,
  postUsersUserGidNotificationsMarkUnreadRoute,
  postWebhooksRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  putAllocationsAllocationGidRoute,
  putBudgetsBudgetGidRoute,
  putCustomFieldsCustomFieldGidRoute,
  putEnumOptionsEnumOptionGidRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
  putGoalsGoalGidRoute,
  putMembershipsMembershipGidRoute,
  putOooEntriesOooEntryGidRoute,
  putPortfoliosPortfolioGidRoute,
  putProjectBriefsProjectBriefGidRoute,
  putProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
  putProjectsProjectGidRoute,
  putRatesRateGidRoute,
  putRecordsRecordGidRoute,
  putRolesRoleGidRoute,
  putSectionsSectionGidRoute,
  putStoriesStoryGidRoute,
  putTablesTableGidRoute,
  putTagsTagGidRoute,
  putTasksTaskGidRoute,
  putTeamsTeamGidRoute,
  putTimesheetApprovalStatusesTimesheetApprovalStatusGidRoute,
  putTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  putTimeTrackingEntriesTimeTrackingEntryGidRoute,
  putUsersUserGidRoute,
  putWebhooksWebhookGidRoute,
  putWorkspacesWorkspaceGidRoute,
  putWorkspacesWorkspaceGidUsersUserGidRoute,
} from './routes'
import {
  deleteAllocationsAllocationGidRouteHandler,
  deleteAttachmentsAttachmentGidRouteHandler,
  deleteBudgetsBudgetGidRouteHandler,
  deleteCustomFieldsCustomFieldGidRouteHandler,
  deleteGoalsGoalGidRouteHandler,
  deleteMembershipsMembershipGidRouteHandler,
  deleteOooEntriesOooEntryGidRouteHandler,
  deletePortfoliosPortfolioGidRouteHandler,
  deleteProjectBriefsProjectBriefGidRouteHandler,
  deleteProjectsProjectGidRouteHandler,
  deleteProjectStatusesProjectStatusGidRouteHandler,
  deleteProjectTemplatesProjectTemplateGidRouteHandler,
  deleteRatesRateGidRouteHandler,
  deleteRecordsRecordGidRouteHandler,
  deleteRolesRoleGidRouteHandler,
  deleteSectionsSectionGidRouteHandler,
  deleteStatusUpdatesStatusUpdateGidRouteHandler,
  deleteStoriesStoryGidRouteHandler,
  deleteTablesTableGidRouteHandler,
  deleteTagsTagGidRouteHandler,
  deleteTasksTaskGidRouteHandler,
  deleteTaskTemplatesTaskTemplateGidRouteHandler,
  deleteTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  deleteTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  deleteWebhooksWebhookGidRouteHandler,
  getAccessRequestsRouteHandler,
  getAgentsAgentGidRouteHandler,
  getAllocationsAllocationGidRouteHandler,
  getAllocationsRouteHandler,
  getAttachmentsAttachmentGidRouteHandler,
  getAttachmentsRouteHandler,
  getBudgetsBudgetGidRouteHandler,
  getBudgetsRouteHandler,
  getCustomFieldsCustomFieldGidRouteHandler,
  getCustomTypesCustomTypeGidRouteHandler,
  getCustomTypesRouteHandler,
  getEventsRouteHandler,
  getGoalRelationshipsGoalRelationshipGidRouteHandler,
  getGoalRelationshipsRouteHandler,
  getGoalsGoalGidCustomFieldSettingsRouteHandler,
  getGoalsGoalGidParentGoalsRouteHandler,
  getGoalsGoalGidRouteHandler,
  getGoalsGoalGidStoriesRouteHandler,
  getGoalsRouteHandler,
  getJobsJobGidRouteHandler,
  getMembershipsMembershipGidRouteHandler,
  getMembershipsRouteHandler,
  getOooEntriesOooEntryGidRouteHandler,
  getOooEntriesRouteHandler,
  getOrganizationExportsOrganizationExportGidRouteHandler,
  getPortfolioMembershipsPortfolioMembershipGidRouteHandler,
  getPortfolioMembershipsRouteHandler,
  getPortfoliosPortfolioGidCustomFieldSettingsRouteHandler,
  getPortfoliosPortfolioGidItemsRouteHandler,
  getPortfoliosPortfolioGidPortfolioMembershipsRouteHandler,
  getPortfoliosPortfolioGidProjectPortfolioSettingsRouteHandler,
  getPortfoliosPortfolioGidRouteHandler,
  getPortfoliosRouteHandler,
  getProjectBriefsProjectBriefGidRouteHandler,
  getProjectMembershipsProjectMembershipGidRouteHandler,
  getProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  getProjectsProjectGidCustomFieldSettingsRouteHandler,
  getProjectsProjectGidProjectMembershipsRouteHandler,
  getProjectsProjectGidProjectPortfolioSettingsRouteHandler,
  getProjectsProjectGidProjectStatusesRouteHandler,
  getProjectsProjectGidRouteHandler,
  getProjectsProjectGidSectionsRouteHandler,
  getProjectsProjectGidTaskCountsRouteHandler,
  getProjectsProjectGidTasksRouteHandler,
  getProjectsRouteHandler,
  getProjectStatusesProjectStatusGidRouteHandler,
  getProjectTemplatesProjectTemplateGidRouteHandler,
  getProjectTemplatesRouteHandler,
  getRatesRateGidRouteHandler,
  getRatesRouteHandler,
  getReactionsRouteHandler,
  getRecordsRecordGidRouteHandler,
  getRecordsRecordGidStoriesRouteHandler,
  getRolesRoleGidRouteHandler,
  getRolesRouteHandler,
  getSectionsSectionGidRouteHandler,
  getSectionsSectionGidTasksRouteHandler,
  getStatusUpdatesRouteHandler,
  getStatusUpdatesStatusUpdateGidRouteHandler,
  getStoriesStoryGidRouteHandler,
  getTablesTableGidCustomFieldSettingsRouteHandler,
  getTablesTableGidGetCustomFieldSettingsRouteHandler,
  getTablesTableGidRecordsRouteHandler,
  getTablesTableGidRouteHandler,
  getTagsRouteHandler,
  getTagsTagGidRouteHandler,
  getTagsTagGidTasksRouteHandler,
  getTasksRouteHandler,
  getTasksTaskGidDependenciesRouteHandler,
  getTasksTaskGidDependentsRouteHandler,
  getTasksTaskGidProjectsRouteHandler,
  getTasksTaskGidRouteHandler,
  getTasksTaskGidStoriesRouteHandler,
  getTasksTaskGidSubtasksRouteHandler,
  getTasksTaskGidTagsRouteHandler,
  getTasksTaskGidTimeTrackingEntriesRouteHandler,
  getTaskTemplatesRouteHandler,
  getTaskTemplatesTaskTemplateGidRouteHandler,
  getTeamMembershipsRouteHandler,
  getTeamMembershipsTeamMembershipGidRouteHandler,
  getTeamsTeamGidCustomFieldSettingsRouteHandler,
  getTeamsTeamGidProjectsRouteHandler,
  getTeamsTeamGidProjectTemplatesRouteHandler,
  getTeamsTeamGidRouteHandler,
  getTeamsTeamGidTeamMembershipsRouteHandler,
  getTeamsTeamGidUsersRouteHandler,
  getTimePeriodsRouteHandler,
  getTimePeriodsTimePeriodGidRouteHandler,
  getTimesheetApprovalStatusesRouteHandler,
  getTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  getTimeTrackingCategoriesRouteHandler,
  getTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRouteHandler,
  getTimeTrackingEntriesRouteHandler,
  getTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  getUsersRouteHandler,
  getUsersUserGidFavoritesRouteHandler,
  getUsersUserGidNotificationsRouteHandler,
  getUsersUserGidRouteHandler,
  getUsersUserGidTeamMembershipsRouteHandler,
  getUsersUserGidTeamsRouteHandler,
  getUsersUserGidUserTaskListRouteHandler,
  getUsersUserGidWorkspaceMembershipsRouteHandler,
  getUserTaskListsUserTaskListGidRouteHandler,
  getUserTaskListsUserTaskListGidTasksRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookGidRouteHandler,
  getWorkspaceMembershipsWorkspaceMembershipGidRouteHandler,
  getWorkspacesRouteHandler,
  getWorkspacesWorkspaceGidAgentsRouteHandler,
  getWorkspacesWorkspaceGidAiStudioRunsRouteHandler,
  getWorkspacesWorkspaceGidAiStudioSeatsRouteHandler,
  getWorkspacesWorkspaceGidAuditLogEventsRouteHandler,
  getWorkspacesWorkspaceGidCustomFieldsRouteHandler,
  getWorkspacesWorkspaceGidEventsRouteHandler,
  getWorkspacesWorkspaceGidProjectsRouteHandler,
  getWorkspacesWorkspaceGidProjectsSearchRouteHandler,
  getWorkspacesWorkspaceGidRecordsSearchRouteHandler,
  getWorkspacesWorkspaceGidRouteHandler,
  getWorkspacesWorkspaceGidTablesRouteHandler,
  getWorkspacesWorkspaceGidTagsRouteHandler,
  getWorkspacesWorkspaceGidTasksCustomIdCustomIdRouteHandler,
  getWorkspacesWorkspaceGidTasksSearchRouteHandler,
  getWorkspacesWorkspaceGidTeamsRouteHandler,
  getWorkspacesWorkspaceGidTypeaheadRouteHandler,
  getWorkspacesWorkspaceGidUsersRouteHandler,
  getWorkspacesWorkspaceGidUsersUserGidRouteHandler,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRouteHandler,
  postAccessRequestsAccessRequestGidApproveRouteHandler,
  postAccessRequestsAccessRequestGidRejectRouteHandler,
  postAccessRequestsRouteHandler,
  postAllocationsRouteHandler,
  postAttachmentsRouteHandler,
  postBatchRouteHandler,
  postBudgetsRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsRouteHandler,
  postCustomFieldsRouteHandler,
  postExportsGraphRouteHandler,
  postExportsResourceRouteHandler,
  postGoalsGoalGidAddCustomFieldSettingRouteHandler,
  postGoalsGoalGidAddFollowersRouteHandler,
  postGoalsGoalGidAddSupportingRelationshipRouteHandler,
  postGoalsGoalGidRemoveCustomFieldSettingRouteHandler,
  postGoalsGoalGidRemoveFollowersRouteHandler,
  postGoalsGoalGidRemoveSupportingRelationshipRouteHandler,
  postGoalsGoalGidSetMetricCurrentValueRouteHandler,
  postGoalsGoalGidSetMetricRouteHandler,
  postGoalsGoalGidStoriesRouteHandler,
  postGoalsRouteHandler,
  postMembershipsRouteHandler,
  postOooEntriesRouteHandler,
  postOrganizationExportsRouteHandler,
  postPortfoliosPortfolioGidAddCustomFieldSettingRouteHandler,
  postPortfoliosPortfolioGidAddItemRouteHandler,
  postPortfoliosPortfolioGidAddMembersRouteHandler,
  postPortfoliosPortfolioGidDuplicateRouteHandler,
  postPortfoliosPortfolioGidRemoveCustomFieldSettingRouteHandler,
  postPortfoliosPortfolioGidRemoveItemRouteHandler,
  postPortfoliosPortfolioGidRemoveMembersRouteHandler,
  postPortfoliosRouteHandler,
  postProjectsProjectGidAddCustomFieldSettingRouteHandler,
  postProjectsProjectGidAddFollowersRouteHandler,
  postProjectsProjectGidAddMembersRouteHandler,
  postProjectsProjectGidDuplicateRouteHandler,
  postProjectsProjectGidProjectBriefsRouteHandler,
  postProjectsProjectGidProjectStatusesRouteHandler,
  postProjectsProjectGidRemoveCustomFieldSettingRouteHandler,
  postProjectsProjectGidRemoveFollowersRouteHandler,
  postProjectsProjectGidRemoveMembersRouteHandler,
  postProjectsProjectGidRollupRouteHandler,
  postProjectsProjectGidSaveAsTemplateRouteHandler,
  postProjectsProjectGidSectionsInsertRouteHandler,
  postProjectsProjectGidSectionsRouteHandler,
  postProjectsRouteHandler,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler,
  postRatesRouteHandler,
  postRecordsRecordGidStoriesRouteHandler,
  postRecordsRouteHandler,
  postRolesRouteHandler,
  postRuleTriggersRuleTriggerGidRunRouteHandler,
  postSectionsSectionGidAddTaskRouteHandler,
  postStatusUpdatesRouteHandler,
  postTablesRouteHandler,
  postTablesTableGidAddCustomFieldSettingRouteHandler,
  postTablesTableGidRemoveCustomFieldSettingRouteHandler,
  postTagsRouteHandler,
  postTasksRouteHandler,
  postTasksTaskGidAddDependenciesRouteHandler,
  postTasksTaskGidAddDependentsRouteHandler,
  postTasksTaskGidAddFollowersRouteHandler,
  postTasksTaskGidAddProjectRouteHandler,
  postTasksTaskGidAddTagRouteHandler,
  postTasksTaskGidDuplicateRouteHandler,
  postTasksTaskGidRemoveDependenciesRouteHandler,
  postTasksTaskGidRemoveDependentsRouteHandler,
  postTasksTaskGidRemoveFollowersRouteHandler,
  postTasksTaskGidRemoveProjectRouteHandler,
  postTasksTaskGidRemoveTagRouteHandler,
  postTasksTaskGidRollupRouteHandler,
  postTasksTaskGidSetParentRouteHandler,
  postTasksTaskGidStoriesRouteHandler,
  postTasksTaskGidSubtasksRouteHandler,
  postTasksTaskGidTimeTrackingEntriesRouteHandler,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRouteHandler,
  postTeamsRouteHandler,
  postTeamsTeamGidAddUserRouteHandler,
  postTeamsTeamGidProjectsRouteHandler,
  postTeamsTeamGidRemoveUserRouteHandler,
  postTimesheetApprovalStatusesRouteHandler,
  postTimeTrackingCategoriesRouteHandler,
  postUsersUserGidNotificationsMarkReadRouteHandler,
  postUsersUserGidNotificationsMarkUnreadRouteHandler,
  postWebhooksRouteHandler,
  postWorkspacesWorkspaceGidAddUserRouteHandler,
  postWorkspacesWorkspaceGidProjectsRouteHandler,
  postWorkspacesWorkspaceGidRemoveUserRouteHandler,
  postWorkspacesWorkspaceGidTagsRouteHandler,
  putAllocationsAllocationGidRouteHandler,
  putBudgetsBudgetGidRouteHandler,
  putCustomFieldsCustomFieldGidRouteHandler,
  putEnumOptionsEnumOptionGidRouteHandler,
  putGoalRelationshipsGoalRelationshipGidRouteHandler,
  putGoalsGoalGidRouteHandler,
  putMembershipsMembershipGidRouteHandler,
  putOooEntriesOooEntryGidRouteHandler,
  putPortfoliosPortfolioGidRouteHandler,
  putProjectBriefsProjectBriefGidRouteHandler,
  putProjectPortfolioSettingsProjectPortfolioSettingGidRouteHandler,
  putProjectsProjectGidRouteHandler,
  putRatesRateGidRouteHandler,
  putRecordsRecordGidRouteHandler,
  putRolesRoleGidRouteHandler,
  putSectionsSectionGidRouteHandler,
  putStoriesStoryGidRouteHandler,
  putTablesTableGidRouteHandler,
  putTagsTagGidRouteHandler,
  putTasksTaskGidRouteHandler,
  putTeamsTeamGidRouteHandler,
  putTimesheetApprovalStatusesTimesheetApprovalStatusGidRouteHandler,
  putTimeTrackingCategoriesTimeTrackingCategoryGidRouteHandler,
  putTimeTrackingEntriesTimeTrackingEntryGidRouteHandler,
  putUsersUserGidRouteHandler,
  putWebhooksWebhookGidRouteHandler,
  putWorkspacesWorkspaceGidRouteHandler,
  putWorkspacesWorkspaceGidUsersUserGidRouteHandler,
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
