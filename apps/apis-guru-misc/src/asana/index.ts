import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentGidRoute,
  deleteCustomFieldsCustomFieldGidRoute,
  deleteGoalsGoalGidRoute,
  deletePortfoliosPortfolioGidRoute,
  deleteProjectBriefsProjectBriefGidRoute,
  deleteProjectsProjectGidRoute,
  deleteProjectStatusesProjectStatusGidRoute,
  deleteSectionsSectionGidRoute,
  deleteStatusUpdatesStatusGidRoute,
  deleteStoriesStoryGidRoute,
  deleteTagsTagGidRoute,
  deleteTasksTaskGidRoute,
  deleteWebhooksWebhookGidRoute,
  getAttachmentsAttachmentGidRoute,
  getAttachmentsRoute,
  getCustomFieldsCustomFieldGidRoute,
  getEventsRoute,
  getGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsRoute,
  getJobsJobGidRoute,
  getOrganizationExportsOrganizationExportGidRoute,
  getPortfolioMembershipsPortfolioMembershipGidRoute,
  getPortfolioMembershipsRoute,
  getPortfoliosPortfolioGidCustomFieldSettingsRoute,
  getPortfoliosPortfolioGidItemsRoute,
  getPortfoliosPortfolioGidPortfolioMembershipsRoute,
  getPortfoliosPortfolioGidRoute,
  getPortfoliosRoute,
  getProjectBriefsProjectBriefGidRoute,
  getProjectMembershipsProjectMembershipGidRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
  getProjectsProjectGidProjectMembershipsRoute,
  getProjectsProjectGidProjectStatusesRoute,
  getProjectsProjectGidRoute,
  getProjectsProjectGidSectionsRoute,
  getProjectsProjectGidTaskCountsRoute,
  getProjectsProjectGidTasksRoute,
  getProjectsRoute,
  getProjectStatusesProjectStatusGidRoute,
  getProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  getSectionsSectionGidRoute,
  getSectionsSectionGidTasksRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusGidRoute,
  getStoriesStoryGidRoute,
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
  getTeamMembershipsRoute,
  getTeamMembershipsTeamMembershipGidRoute,
  getTeamsTeamGidProjectsRoute,
  getTeamsTeamGidProjectTemplatesRoute,
  getTeamsTeamGidRoute,
  getTeamsTeamGidTeamMembershipsRoute,
  getTeamsTeamGidUsersRoute,
  getTimePeriodsRoute,
  getTimePeriodsTimePeriodGidRoute,
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
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
  getWorkspacesWorkspaceGidAuditLogEventsRoute,
  getWorkspacesWorkspaceGidCustomFieldsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  getWorkspacesWorkspaceGidRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  getWorkspacesWorkspaceGidTypeaheadRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
  postAttachmentsRoute,
  postBatchRoute,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
  postCustomFieldsCustomFieldGidEnumOptionsRoute,
  postCustomFieldsRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsRoute,
  postOrganizationExportsRoute,
  postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
  postPortfoliosPortfolioGidAddItemRoute,
  postPortfoliosPortfolioGidAddMembersRoute,
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
  postProjectsProjectGidSaveAsTemplateRoute,
  postProjectsProjectGidSectionsInsertRoute,
  postProjectsProjectGidSectionsRoute,
  postProjectsRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
  postSectionsSectionGidAddTaskRoute,
  postStatusUpdatesRoute,
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
  postTasksTaskGidSetParentRoute,
  postTasksTaskGidStoriesRoute,
  postTasksTaskGidSubtasksRoute,
  postTeamsRoute,
  postTeamsTeamGidAddUserRoute,
  postTeamsTeamGidProjectsRoute,
  postTeamsTeamGidRemoveUserRoute,
  postWebhooksRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  putCustomFieldsCustomFieldGidRoute,
  putEnumOptionsEnumOptionGidRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
  putGoalsGoalGidRoute,
  putPortfoliosPortfolioGidRoute,
  putProjectBriefsProjectBriefGidRoute,
  putProjectsProjectGidRoute,
  putSectionsSectionGidRoute,
  putStoriesStoryGidRoute,
  putTagsTagGidRoute,
  putTasksTaskGidRoute,
  putTeamsRoute,
  putWebhooksWebhookGidRoute,
  putWorkspacesWorkspaceGidRoute,
} from './routes'
import {
  deleteAttachmentsAttachmentGidRouteHandler,
  deleteCustomFieldsCustomFieldGidRouteHandler,
  deleteGoalsGoalGidRouteHandler,
  deletePortfoliosPortfolioGidRouteHandler,
  deleteProjectBriefsProjectBriefGidRouteHandler,
  deleteProjectsProjectGidRouteHandler,
  deleteProjectStatusesProjectStatusGidRouteHandler,
  deleteSectionsSectionGidRouteHandler,
  deleteStatusUpdatesStatusGidRouteHandler,
  deleteStoriesStoryGidRouteHandler,
  deleteTagsTagGidRouteHandler,
  deleteTasksTaskGidRouteHandler,
  deleteWebhooksWebhookGidRouteHandler,
  getAttachmentsAttachmentGidRouteHandler,
  getAttachmentsRouteHandler,
  getCustomFieldsCustomFieldGidRouteHandler,
  getEventsRouteHandler,
  getGoalRelationshipsGoalRelationshipGidRouteHandler,
  getGoalRelationshipsRouteHandler,
  getGoalsGoalGidParentGoalsRouteHandler,
  getGoalsGoalGidRouteHandler,
  getGoalsRouteHandler,
  getJobsJobGidRouteHandler,
  getOrganizationExportsOrganizationExportGidRouteHandler,
  getPortfolioMembershipsPortfolioMembershipGidRouteHandler,
  getPortfolioMembershipsRouteHandler,
  getPortfoliosPortfolioGidCustomFieldSettingsRouteHandler,
  getPortfoliosPortfolioGidItemsRouteHandler,
  getPortfoliosPortfolioGidPortfolioMembershipsRouteHandler,
  getPortfoliosPortfolioGidRouteHandler,
  getPortfoliosRouteHandler,
  getProjectBriefsProjectBriefGidRouteHandler,
  getProjectMembershipsProjectMembershipGidRouteHandler,
  getProjectsProjectGidCustomFieldSettingsRouteHandler,
  getProjectsProjectGidProjectMembershipsRouteHandler,
  getProjectsProjectGidProjectStatusesRouteHandler,
  getProjectsProjectGidRouteHandler,
  getProjectsProjectGidSectionsRouteHandler,
  getProjectsProjectGidTaskCountsRouteHandler,
  getProjectsProjectGidTasksRouteHandler,
  getProjectsRouteHandler,
  getProjectStatusesProjectStatusGidRouteHandler,
  getProjectTemplatesProjectTemplateGidRouteHandler,
  getProjectTemplatesRouteHandler,
  getSectionsSectionGidRouteHandler,
  getSectionsSectionGidTasksRouteHandler,
  getStatusUpdatesRouteHandler,
  getStatusUpdatesStatusGidRouteHandler,
  getStoriesStoryGidRouteHandler,
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
  getTeamMembershipsRouteHandler,
  getTeamMembershipsTeamMembershipGidRouteHandler,
  getTeamsTeamGidProjectsRouteHandler,
  getTeamsTeamGidProjectTemplatesRouteHandler,
  getTeamsTeamGidRouteHandler,
  getTeamsTeamGidTeamMembershipsRouteHandler,
  getTeamsTeamGidUsersRouteHandler,
  getTimePeriodsRouteHandler,
  getTimePeriodsTimePeriodGidRouteHandler,
  getUsersRouteHandler,
  getUsersUserGidFavoritesRouteHandler,
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
  getWorkspacesWorkspaceGidAuditLogEventsRouteHandler,
  getWorkspacesWorkspaceGidCustomFieldsRouteHandler,
  getWorkspacesWorkspaceGidProjectsRouteHandler,
  getWorkspacesWorkspaceGidRouteHandler,
  getWorkspacesWorkspaceGidTagsRouteHandler,
  getWorkspacesWorkspaceGidTasksSearchRouteHandler,
  getWorkspacesWorkspaceGidTeamsRouteHandler,
  getWorkspacesWorkspaceGidTypeaheadRouteHandler,
  getWorkspacesWorkspaceGidUsersRouteHandler,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRouteHandler,
  postAttachmentsRouteHandler,
  postBatchRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler,
  postCustomFieldsCustomFieldGidEnumOptionsRouteHandler,
  postCustomFieldsRouteHandler,
  postGoalsGoalGidAddFollowersRouteHandler,
  postGoalsGoalGidAddSupportingRelationshipRouteHandler,
  postGoalsGoalGidRemoveFollowersRouteHandler,
  postGoalsGoalGidRemoveSupportingRelationshipRouteHandler,
  postGoalsGoalGidSetMetricCurrentValueRouteHandler,
  postGoalsGoalGidSetMetricRouteHandler,
  postGoalsRouteHandler,
  postOrganizationExportsRouteHandler,
  postPortfoliosPortfolioGidAddCustomFieldSettingRouteHandler,
  postPortfoliosPortfolioGidAddItemRouteHandler,
  postPortfoliosPortfolioGidAddMembersRouteHandler,
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
  postProjectsProjectGidSaveAsTemplateRouteHandler,
  postProjectsProjectGidSectionsInsertRouteHandler,
  postProjectsProjectGidSectionsRouteHandler,
  postProjectsRouteHandler,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler,
  postSectionsSectionGidAddTaskRouteHandler,
  postStatusUpdatesRouteHandler,
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
  postTasksTaskGidSetParentRouteHandler,
  postTasksTaskGidStoriesRouteHandler,
  postTasksTaskGidSubtasksRouteHandler,
  postTeamsRouteHandler,
  postTeamsTeamGidAddUserRouteHandler,
  postTeamsTeamGidProjectsRouteHandler,
  postTeamsTeamGidRemoveUserRouteHandler,
  postWebhooksRouteHandler,
  postWorkspacesWorkspaceGidAddUserRouteHandler,
  postWorkspacesWorkspaceGidProjectsRouteHandler,
  postWorkspacesWorkspaceGidRemoveUserRouteHandler,
  postWorkspacesWorkspaceGidTagsRouteHandler,
  putCustomFieldsCustomFieldGidRouteHandler,
  putEnumOptionsEnumOptionGidRouteHandler,
  putGoalRelationshipsGoalRelationshipGidRouteHandler,
  putGoalsGoalGidRouteHandler,
  putPortfoliosPortfolioGidRouteHandler,
  putProjectBriefsProjectBriefGidRouteHandler,
  putProjectsProjectGidRouteHandler,
  putSectionsSectionGidRouteHandler,
  putStoriesStoryGidRouteHandler,
  putTagsTagGidRouteHandler,
  putTasksTaskGidRouteHandler,
  putTeamsRouteHandler,
  putWebhooksWebhookGidRouteHandler,
  putWorkspacesWorkspaceGidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAttachmentsRoute, getAttachmentsRouteHandler)
  .openapi(postAttachmentsRoute, postAttachmentsRouteHandler)
  .openapi(deleteAttachmentsAttachmentGidRoute, deleteAttachmentsAttachmentGidRouteHandler)
  .openapi(getAttachmentsAttachmentGidRoute, getAttachmentsAttachmentGidRouteHandler)
  .openapi(postBatchRoute, postBatchRouteHandler)
  .openapi(postCustomFieldsRoute, postCustomFieldsRouteHandler)
  .openapi(deleteCustomFieldsCustomFieldGidRoute, deleteCustomFieldsCustomFieldGidRouteHandler)
  .openapi(getCustomFieldsCustomFieldGidRoute, getCustomFieldsCustomFieldGidRouteHandler)
  .openapi(putCustomFieldsCustomFieldGidRoute, putCustomFieldsCustomFieldGidRouteHandler)
  .openapi(
    postCustomFieldsCustomFieldGidEnumOptionsRoute,
    postCustomFieldsCustomFieldGidEnumOptionsRouteHandler,
  )
  .openapi(
    postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
    postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler,
  )
  .openapi(putEnumOptionsEnumOptionGidRoute, putEnumOptionsEnumOptionGidRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getGoalRelationshipsRoute, getGoalRelationshipsRouteHandler)
  .openapi(
    getGoalRelationshipsGoalRelationshipGidRoute,
    getGoalRelationshipsGoalRelationshipGidRouteHandler,
  )
  .openapi(
    putGoalRelationshipsGoalRelationshipGidRoute,
    putGoalRelationshipsGoalRelationshipGidRouteHandler,
  )
  .openapi(getGoalsRoute, getGoalsRouteHandler)
  .openapi(postGoalsRoute, postGoalsRouteHandler)
  .openapi(deleteGoalsGoalGidRoute, deleteGoalsGoalGidRouteHandler)
  .openapi(getGoalsGoalGidRoute, getGoalsGoalGidRouteHandler)
  .openapi(putGoalsGoalGidRoute, putGoalsGoalGidRouteHandler)
  .openapi(postGoalsGoalGidAddFollowersRoute, postGoalsGoalGidAddFollowersRouteHandler)
  .openapi(
    postGoalsGoalGidAddSupportingRelationshipRoute,
    postGoalsGoalGidAddSupportingRelationshipRouteHandler,
  )
  .openapi(getGoalsGoalGidParentGoalsRoute, getGoalsGoalGidParentGoalsRouteHandler)
  .openapi(postGoalsGoalGidRemoveFollowersRoute, postGoalsGoalGidRemoveFollowersRouteHandler)
  .openapi(
    postGoalsGoalGidRemoveSupportingRelationshipRoute,
    postGoalsGoalGidRemoveSupportingRelationshipRouteHandler,
  )
  .openapi(postGoalsGoalGidSetMetricRoute, postGoalsGoalGidSetMetricRouteHandler)
  .openapi(
    postGoalsGoalGidSetMetricCurrentValueRoute,
    postGoalsGoalGidSetMetricCurrentValueRouteHandler,
  )
  .openapi(getJobsJobGidRoute, getJobsJobGidRouteHandler)
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
  .openapi(getPortfoliosRoute, getPortfoliosRouteHandler)
  .openapi(postPortfoliosRoute, postPortfoliosRouteHandler)
  .openapi(deletePortfoliosPortfolioGidRoute, deletePortfoliosPortfolioGidRouteHandler)
  .openapi(getPortfoliosPortfolioGidRoute, getPortfoliosPortfolioGidRouteHandler)
  .openapi(putPortfoliosPortfolioGidRoute, putPortfoliosPortfolioGidRouteHandler)
  .openapi(
    postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
    postPortfoliosPortfolioGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(postPortfoliosPortfolioGidAddItemRoute, postPortfoliosPortfolioGidAddItemRouteHandler)
  .openapi(
    postPortfoliosPortfolioGidAddMembersRoute,
    postPortfoliosPortfolioGidAddMembersRouteHandler,
  )
  .openapi(
    getPortfoliosPortfolioGidCustomFieldSettingsRoute,
    getPortfoliosPortfolioGidCustomFieldSettingsRouteHandler,
  )
  .openapi(getPortfoliosPortfolioGidItemsRoute, getPortfoliosPortfolioGidItemsRouteHandler)
  .openapi(
    getPortfoliosPortfolioGidPortfolioMembershipsRoute,
    getPortfoliosPortfolioGidPortfolioMembershipsRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute,
    postPortfoliosPortfolioGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidRemoveItemRoute,
    postPortfoliosPortfolioGidRemoveItemRouteHandler,
  )
  .openapi(
    postPortfoliosPortfolioGidRemoveMembersRoute,
    postPortfoliosPortfolioGidRemoveMembersRouteHandler,
  )
  .openapi(deleteProjectBriefsProjectBriefGidRoute, deleteProjectBriefsProjectBriefGidRouteHandler)
  .openapi(getProjectBriefsProjectBriefGidRoute, getProjectBriefsProjectBriefGidRouteHandler)
  .openapi(putProjectBriefsProjectBriefGidRoute, putProjectBriefsProjectBriefGidRouteHandler)
  .openapi(
    getProjectMembershipsProjectMembershipGidRoute,
    getProjectMembershipsProjectMembershipGidRouteHandler,
  )
  .openapi(
    deleteProjectStatusesProjectStatusGidRoute,
    deleteProjectStatusesProjectStatusGidRouteHandler,
  )
  .openapi(getProjectStatusesProjectStatusGidRoute, getProjectStatusesProjectStatusGidRouteHandler)
  .openapi(getProjectTemplatesRoute, getProjectTemplatesRouteHandler)
  .openapi(
    getProjectTemplatesProjectTemplateGidRoute,
    getProjectTemplatesProjectTemplateGidRouteHandler,
  )
  .openapi(
    postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
    postProjectTemplatesProjectTemplateGidInstantiateProjectRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteProjectsProjectGidRoute, deleteProjectsProjectGidRouteHandler)
  .openapi(getProjectsProjectGidRoute, getProjectsProjectGidRouteHandler)
  .openapi(putProjectsProjectGidRoute, putProjectsProjectGidRouteHandler)
  .openapi(
    postProjectsProjectGidAddCustomFieldSettingRoute,
    postProjectsProjectGidAddCustomFieldSettingRouteHandler,
  )
  .openapi(postProjectsProjectGidAddFollowersRoute, postProjectsProjectGidAddFollowersRouteHandler)
  .openapi(postProjectsProjectGidAddMembersRoute, postProjectsProjectGidAddMembersRouteHandler)
  .openapi(
    getProjectsProjectGidCustomFieldSettingsRoute,
    getProjectsProjectGidCustomFieldSettingsRouteHandler,
  )
  .openapi(postProjectsProjectGidDuplicateRoute, postProjectsProjectGidDuplicateRouteHandler)
  .openapi(
    postProjectsProjectGidProjectBriefsRoute,
    postProjectsProjectGidProjectBriefsRouteHandler,
  )
  .openapi(
    getProjectsProjectGidProjectMembershipsRoute,
    getProjectsProjectGidProjectMembershipsRouteHandler,
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
    postProjectsProjectGidRemoveCustomFieldSettingRoute,
    postProjectsProjectGidRemoveCustomFieldSettingRouteHandler,
  )
  .openapi(
    postProjectsProjectGidRemoveFollowersRoute,
    postProjectsProjectGidRemoveFollowersRouteHandler,
  )
  .openapi(
    postProjectsProjectGidRemoveMembersRoute,
    postProjectsProjectGidRemoveMembersRouteHandler,
  )
  .openapi(
    postProjectsProjectGidSaveAsTemplateRoute,
    postProjectsProjectGidSaveAsTemplateRouteHandler,
  )
  .openapi(getProjectsProjectGidSectionsRoute, getProjectsProjectGidSectionsRouteHandler)
  .openapi(postProjectsProjectGidSectionsRoute, postProjectsProjectGidSectionsRouteHandler)
  .openapi(
    postProjectsProjectGidSectionsInsertRoute,
    postProjectsProjectGidSectionsInsertRouteHandler,
  )
  .openapi(getProjectsProjectGidTaskCountsRoute, getProjectsProjectGidTaskCountsRouteHandler)
  .openapi(getProjectsProjectGidTasksRoute, getProjectsProjectGidTasksRouteHandler)
  .openapi(deleteSectionsSectionGidRoute, deleteSectionsSectionGidRouteHandler)
  .openapi(getSectionsSectionGidRoute, getSectionsSectionGidRouteHandler)
  .openapi(putSectionsSectionGidRoute, putSectionsSectionGidRouteHandler)
  .openapi(postSectionsSectionGidAddTaskRoute, postSectionsSectionGidAddTaskRouteHandler)
  .openapi(getSectionsSectionGidTasksRoute, getSectionsSectionGidTasksRouteHandler)
  .openapi(getStatusUpdatesRoute, getStatusUpdatesRouteHandler)
  .openapi(postStatusUpdatesRoute, postStatusUpdatesRouteHandler)
  .openapi(deleteStatusUpdatesStatusGidRoute, deleteStatusUpdatesStatusGidRouteHandler)
  .openapi(getStatusUpdatesStatusGidRoute, getStatusUpdatesStatusGidRouteHandler)
  .openapi(deleteStoriesStoryGidRoute, deleteStoriesStoryGidRouteHandler)
  .openapi(getStoriesStoryGidRoute, getStoriesStoryGidRouteHandler)
  .openapi(putStoriesStoryGidRoute, putStoriesStoryGidRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(deleteTagsTagGidRoute, deleteTagsTagGidRouteHandler)
  .openapi(getTagsTagGidRoute, getTagsTagGidRouteHandler)
  .openapi(putTagsTagGidRoute, putTagsTagGidRouteHandler)
  .openapi(getTagsTagGidTasksRoute, getTagsTagGidTasksRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(deleteTasksTaskGidRoute, deleteTasksTaskGidRouteHandler)
  .openapi(getTasksTaskGidRoute, getTasksTaskGidRouteHandler)
  .openapi(putTasksTaskGidRoute, putTasksTaskGidRouteHandler)
  .openapi(postTasksTaskGidAddDependenciesRoute, postTasksTaskGidAddDependenciesRouteHandler)
  .openapi(postTasksTaskGidAddDependentsRoute, postTasksTaskGidAddDependentsRouteHandler)
  .openapi(postTasksTaskGidAddFollowersRoute, postTasksTaskGidAddFollowersRouteHandler)
  .openapi(postTasksTaskGidAddProjectRoute, postTasksTaskGidAddProjectRouteHandler)
  .openapi(postTasksTaskGidAddTagRoute, postTasksTaskGidAddTagRouteHandler)
  .openapi(getTasksTaskGidDependenciesRoute, getTasksTaskGidDependenciesRouteHandler)
  .openapi(getTasksTaskGidDependentsRoute, getTasksTaskGidDependentsRouteHandler)
  .openapi(postTasksTaskGidDuplicateRoute, postTasksTaskGidDuplicateRouteHandler)
  .openapi(getTasksTaskGidProjectsRoute, getTasksTaskGidProjectsRouteHandler)
  .openapi(postTasksTaskGidRemoveDependenciesRoute, postTasksTaskGidRemoveDependenciesRouteHandler)
  .openapi(postTasksTaskGidRemoveDependentsRoute, postTasksTaskGidRemoveDependentsRouteHandler)
  .openapi(postTasksTaskGidRemoveFollowersRoute, postTasksTaskGidRemoveFollowersRouteHandler)
  .openapi(postTasksTaskGidRemoveProjectRoute, postTasksTaskGidRemoveProjectRouteHandler)
  .openapi(postTasksTaskGidRemoveTagRoute, postTasksTaskGidRemoveTagRouteHandler)
  .openapi(postTasksTaskGidSetParentRoute, postTasksTaskGidSetParentRouteHandler)
  .openapi(getTasksTaskGidStoriesRoute, getTasksTaskGidStoriesRouteHandler)
  .openapi(postTasksTaskGidStoriesRoute, postTasksTaskGidStoriesRouteHandler)
  .openapi(getTasksTaskGidSubtasksRoute, getTasksTaskGidSubtasksRouteHandler)
  .openapi(postTasksTaskGidSubtasksRoute, postTasksTaskGidSubtasksRouteHandler)
  .openapi(getTasksTaskGidTagsRoute, getTasksTaskGidTagsRouteHandler)
  .openapi(getTeamMembershipsRoute, getTeamMembershipsRouteHandler)
  .openapi(
    getTeamMembershipsTeamMembershipGidRoute,
    getTeamMembershipsTeamMembershipGidRouteHandler,
  )
  .openapi(postTeamsRoute, postTeamsRouteHandler)
  .openapi(putTeamsRoute, putTeamsRouteHandler)
  .openapi(getTeamsTeamGidRoute, getTeamsTeamGidRouteHandler)
  .openapi(postTeamsTeamGidAddUserRoute, postTeamsTeamGidAddUserRouteHandler)
  .openapi(getTeamsTeamGidProjectTemplatesRoute, getTeamsTeamGidProjectTemplatesRouteHandler)
  .openapi(getTeamsTeamGidProjectsRoute, getTeamsTeamGidProjectsRouteHandler)
  .openapi(postTeamsTeamGidProjectsRoute, postTeamsTeamGidProjectsRouteHandler)
  .openapi(postTeamsTeamGidRemoveUserRoute, postTeamsTeamGidRemoveUserRouteHandler)
  .openapi(getTeamsTeamGidTeamMembershipsRoute, getTeamsTeamGidTeamMembershipsRouteHandler)
  .openapi(getTeamsTeamGidUsersRoute, getTeamsTeamGidUsersRouteHandler)
  .openapi(getTimePeriodsRoute, getTimePeriodsRouteHandler)
  .openapi(getTimePeriodsTimePeriodGidRoute, getTimePeriodsTimePeriodGidRouteHandler)
  .openapi(getUserTaskListsUserTaskListGidRoute, getUserTaskListsUserTaskListGidRouteHandler)
  .openapi(
    getUserTaskListsUserTaskListGidTasksRoute,
    getUserTaskListsUserTaskListGidTasksRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserGidRoute, getUsersUserGidRouteHandler)
  .openapi(getUsersUserGidFavoritesRoute, getUsersUserGidFavoritesRouteHandler)
  .openapi(getUsersUserGidTeamMembershipsRoute, getUsersUserGidTeamMembershipsRouteHandler)
  .openapi(getUsersUserGidTeamsRoute, getUsersUserGidTeamsRouteHandler)
  .openapi(getUsersUserGidUserTaskListRoute, getUsersUserGidUserTaskListRouteHandler)
  .openapi(
    getUsersUserGidWorkspaceMembershipsRoute,
    getUsersUserGidWorkspaceMembershipsRouteHandler,
  )
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksWebhookGidRoute, deleteWebhooksWebhookGidRouteHandler)
  .openapi(getWebhooksWebhookGidRoute, getWebhooksWebhookGidRouteHandler)
  .openapi(putWebhooksWebhookGidRoute, putWebhooksWebhookGidRouteHandler)
  .openapi(
    getWorkspaceMembershipsWorkspaceMembershipGidRoute,
    getWorkspaceMembershipsWorkspaceMembershipGidRouteHandler,
  )
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(getWorkspacesWorkspaceGidRoute, getWorkspacesWorkspaceGidRouteHandler)
  .openapi(putWorkspacesWorkspaceGidRoute, putWorkspacesWorkspaceGidRouteHandler)
  .openapi(postWorkspacesWorkspaceGidAddUserRoute, postWorkspacesWorkspaceGidAddUserRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidAuditLogEventsRoute,
    getWorkspacesWorkspaceGidAuditLogEventsRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceGidCustomFieldsRoute,
    getWorkspacesWorkspaceGidCustomFieldsRouteHandler,
  )
  .openapi(getWorkspacesWorkspaceGidProjectsRoute, getWorkspacesWorkspaceGidProjectsRouteHandler)
  .openapi(postWorkspacesWorkspaceGidProjectsRoute, postWorkspacesWorkspaceGidProjectsRouteHandler)
  .openapi(
    postWorkspacesWorkspaceGidRemoveUserRoute,
    postWorkspacesWorkspaceGidRemoveUserRouteHandler,
  )
  .openapi(getWorkspacesWorkspaceGidTagsRoute, getWorkspacesWorkspaceGidTagsRouteHandler)
  .openapi(postWorkspacesWorkspaceGidTagsRoute, postWorkspacesWorkspaceGidTagsRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidTasksSearchRoute,
    getWorkspacesWorkspaceGidTasksSearchRouteHandler,
  )
  .openapi(getWorkspacesWorkspaceGidTeamsRoute, getWorkspacesWorkspaceGidTeamsRouteHandler)
  .openapi(getWorkspacesWorkspaceGidTypeaheadRoute, getWorkspacesWorkspaceGidTypeaheadRouteHandler)
  .openapi(getWorkspacesWorkspaceGidUsersRoute, getWorkspacesWorkspaceGidUsersRouteHandler)
  .openapi(
    getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
    getWorkspacesWorkspaceGidWorkspaceMembershipsRouteHandler,
  )

export default app
