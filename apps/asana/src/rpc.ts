import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccessRequests(
  args: InferRequestType<typeof client.access_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_requests.$get(args, options))
}

export async function postAccessRequests(
  args: InferRequestType<typeof client.access_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.access_requests.$post(args, options))
}

export async function postAccessRequestsAccessRequestGidApprove(
  args: InferRequestType<
    (typeof client.access_requests)[':access_request_gid']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.access_requests[':access_request_gid'].approve.$post(args, options),
  )
}

export async function postAccessRequestsAccessRequestGidReject(
  args: InferRequestType<(typeof client.access_requests)[':access_request_gid']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.access_requests[':access_request_gid'].reject.$post(args, options),
  )
}

export async function getWorkspacesWorkspaceGidAgents(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].agents.$get(args, options))
}

export async function getAgentsAgentGid(
  args: InferRequestType<(typeof client.agents)[':agent_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents[':agent_gid'].$get(args, options))
}

export async function getWorkspacesWorkspaceGidAiStudioRuns(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['ai_studio']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].ai_studio.runs.$get(args, options))
}

export async function getWorkspacesWorkspaceGidAiStudioSeats(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['ai_studio']['seats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].ai_studio.seats.$get(args, options),
  )
}

export async function getAllocationsAllocationGid(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations[':allocation_gid'].$get(args, options))
}

export async function putAllocationsAllocationGid(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations[':allocation_gid'].$put(args, options))
}

export async function deleteAllocationsAllocationGid(
  args: InferRequestType<(typeof client.allocations)[':allocation_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations[':allocation_gid'].$delete(args, options))
}

export async function getAllocations(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations.$get(args, options))
}

export async function postAllocations(
  args: InferRequestType<typeof client.allocations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations.$post(args, options))
}

export async function getAttachmentsAttachmentGid(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachment_gid'].$get(args, options))
}

export async function deleteAttachmentsAttachmentGid(
  args: InferRequestType<(typeof client.attachments)[':attachment_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachment_gid'].$delete(args, options))
}

export async function getAttachments(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments.$get(args, options))
}

export async function postAttachments(
  args: InferRequestType<typeof client.attachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments.$post(args, options))
}

export async function getWorkspacesWorkspaceGidAuditLogEvents(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['audit_log_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].audit_log_events.$get(args, options),
  )
}

export async function postBatch(
  args: InferRequestType<typeof client.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$post(args, options))
}

export async function getBudgets(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets.$get(args, options))
}

export async function postBudgets(
  args: InferRequestType<typeof client.budgets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets.$post(args, options))
}

export async function getBudgetsBudgetGid(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_gid'].$get(args, options))
}

export async function putBudgetsBudgetGid(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_gid'].$put(args, options))
}

export async function deleteBudgetsBudgetGid(
  args: InferRequestType<(typeof client.budgets)[':budget_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_gid'].$delete(args, options))
}

export async function getProjectsProjectGidCustomFieldSettings(
  args: InferRequestType<(typeof client.projects)[':project_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_gid'].custom_field_settings.$get(args, options),
  )
}

export async function getPortfoliosPortfolioGidCustomFieldSettings(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['custom_field_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolios[':portfolio_gid'].custom_field_settings.$get(args, options),
  )
}

export async function getGoalsGoalGidCustomFieldSettings(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].custom_field_settings.$get(args, options))
}

export async function getTeamsTeamGidCustomFieldSettings(
  args: InferRequestType<(typeof client.teams)[':team_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].custom_field_settings.$get(args, options))
}

export async function postCustomFields(
  args: InferRequestType<typeof client.custom_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_fields.$post(args, options))
}

export async function getCustomFieldsCustomFieldGid(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_fields[':custom_field_gid'].$get(args, options))
}

export async function putCustomFieldsCustomFieldGid(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_fields[':custom_field_gid'].$put(args, options))
}

export async function deleteCustomFieldsCustomFieldGid(
  args: InferRequestType<(typeof client.custom_fields)[':custom_field_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_fields[':custom_field_gid'].$delete(args, options))
}

export async function getWorkspacesWorkspaceGidCustomFields(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['custom_fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].custom_fields.$get(args, options))
}

export async function postCustomFieldsCustomFieldGidEnumOptions(
  args: InferRequestType<
    (typeof client.custom_fields)[':custom_field_gid']['enum_options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_fields[':custom_field_gid'].enum_options.$post(args, options),
  )
}

export async function postCustomFieldsCustomFieldGidEnumOptionsInsert(
  args: InferRequestType<
    (typeof client.custom_fields)[':custom_field_gid']['enum_options']['insert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_fields[':custom_field_gid'].enum_options.insert.$post(args, options),
  )
}

export async function putEnumOptionsEnumOptionGid(
  args: InferRequestType<(typeof client.enum_options)[':enum_option_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enum_options[':enum_option_gid'].$put(args, options))
}

export async function getCustomTypes(
  args: InferRequestType<typeof client.custom_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_types.$get(args, options))
}

export async function getCustomTypesCustomTypeGid(
  args: InferRequestType<(typeof client.custom_types)[':custom_type_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_types[':custom_type_gid'].$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function postExportsGraph(
  args: InferRequestType<typeof client.exports.graph.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.graph.$post(args, options))
}

export async function postExportsResource(
  args: InferRequestType<typeof client.exports.resource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.resource.$post(args, options))
}

export async function getGoalRelationshipsGoalRelationshipGid(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.goal_relationships[':goal_relationship_gid'].$get(args, options),
  )
}

export async function putGoalRelationshipsGoalRelationshipGid(
  args: InferRequestType<(typeof client.goal_relationships)[':goal_relationship_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.goal_relationships[':goal_relationship_gid'].$put(args, options),
  )
}

export async function getGoalRelationships(
  args: InferRequestType<typeof client.goal_relationships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goal_relationships.$get(args, options))
}

export async function postGoalsGoalGidAddSupportingRelationship(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['addSupportingRelationship']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.goals[':goal_gid'].addSupportingRelationship.$post(args, options),
  )
}

export async function postGoalsGoalGidRemoveSupportingRelationship(
  args: InferRequestType<
    (typeof client.goals)[':goal_gid']['removeSupportingRelationship']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.goals[':goal_gid'].removeSupportingRelationship.$post(args, options),
  )
}

export async function getGoalsGoalGid(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].$get(args, options))
}

export async function putGoalsGoalGid(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].$put(args, options))
}

export async function deleteGoalsGoalGid(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].$delete(args, options))
}

export async function getGoals(
  args: InferRequestType<typeof client.goals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals.$get(args, options))
}

export async function postGoals(
  args: InferRequestType<typeof client.goals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals.$post(args, options))
}

export async function postGoalsGoalGidSetMetric(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['setMetric']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].setMetric.$post(args, options))
}

export async function postGoalsGoalGidSetMetricCurrentValue(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['setMetricCurrentValue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].setMetricCurrentValue.$post(args, options))
}

export async function postGoalsGoalGidAddFollowers(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['addFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].addFollowers.$post(args, options))
}

export async function postGoalsGoalGidRemoveFollowers(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['removeFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].removeFollowers.$post(args, options))
}

export async function getGoalsGoalGidParentGoals(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['parentGoals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].parentGoals.$get(args, options))
}

export async function postGoalsGoalGidAddCustomFieldSetting(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['addCustomFieldSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].addCustomFieldSetting.$post(args, options))
}

export async function postGoalsGoalGidRemoveCustomFieldSetting(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['removeCustomFieldSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.goals[':goal_gid'].removeCustomFieldSetting.$post(args, options),
  )
}

export async function getJobsJobGid(
  args: InferRequestType<(typeof client.jobs)[':job_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':job_gid'].$get(args, options))
}

export async function getMemberships(
  args: InferRequestType<typeof client.memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships.$get(args, options))
}

export async function postMemberships(
  args: InferRequestType<typeof client.memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships.$post(args, options))
}

export async function getMembershipsMembershipGid(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':membership_gid'].$get(args, options))
}

export async function putMembershipsMembershipGid(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':membership_gid'].$put(args, options))
}

export async function deleteMembershipsMembershipGid(
  args: InferRequestType<(typeof client.memberships)[':membership_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':membership_gid'].$delete(args, options))
}

export async function getUsersUserGidNotifications(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].notifications.$get(args, options))
}

export async function postUsersUserGidNotificationsMarkRead(
  args: InferRequestType<(typeof client.users)[':user_gid']['notifications']['markRead']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].notifications.markRead.$post(args, options))
}

export async function postUsersUserGidNotificationsMarkUnread(
  args: InferRequestType<
    (typeof client.users)[':user_gid']['notifications']['markUnread']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_gid'].notifications.markUnread.$post(args, options),
  )
}

export async function getOooEntriesOooEntryGid(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ooo_entries[':ooo_entry_gid'].$get(args, options))
}

export async function putOooEntriesOooEntryGid(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ooo_entries[':ooo_entry_gid'].$put(args, options))
}

export async function deleteOooEntriesOooEntryGid(
  args: InferRequestType<(typeof client.ooo_entries)[':ooo_entry_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ooo_entries[':ooo_entry_gid'].$delete(args, options))
}

export async function getOooEntries(
  args: InferRequestType<typeof client.ooo_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ooo_entries.$get(args, options))
}

export async function postOooEntries(
  args: InferRequestType<typeof client.ooo_entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ooo_entries.$post(args, options))
}

export async function postOrganizationExports(
  args: InferRequestType<typeof client.organization_exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_exports.$post(args, options))
}

export async function getOrganizationExportsOrganizationExportGid(
  args: InferRequestType<(typeof client.organization_exports)[':organization_export_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_exports[':organization_export_gid'].$get(args, options),
  )
}

export async function getPortfolioMemberships(
  args: InferRequestType<typeof client.portfolio_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio_memberships.$get(args, options))
}

export async function getPortfolioMembershipsPortfolioMembershipGid(
  args: InferRequestType<
    (typeof client.portfolio_memberships)[':portfolio_membership_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolio_memberships[':portfolio_membership_gid'].$get(args, options),
  )
}

export async function getPortfoliosPortfolioGidPortfolioMemberships(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['portfolio_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolios[':portfolio_gid'].portfolio_memberships.$get(args, options),
  )
}

export async function getPortfolios(
  args: InferRequestType<typeof client.portfolios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios.$get(args, options))
}

export async function postPortfolios(
  args: InferRequestType<typeof client.portfolios.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios.$post(args, options))
}

export async function getPortfoliosPortfolioGid(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].$get(args, options))
}

export async function putPortfoliosPortfolioGid(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].$put(args, options))
}

export async function deletePortfoliosPortfolioGid(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].$delete(args, options))
}

export async function getPortfoliosPortfolioGidItems(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].items.$get(args, options))
}

export async function postPortfoliosPortfolioGidAddItem(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].addItem.$post(args, options))
}

export async function postPortfoliosPortfolioGidRemoveItem(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].removeItem.$post(args, options))
}

export async function postPortfoliosPortfolioGidAddCustomFieldSetting(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['addCustomFieldSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolios[':portfolio_gid'].addCustomFieldSetting.$post(args, options),
  )
}

export async function postPortfoliosPortfolioGidRemoveCustomFieldSetting(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['removeCustomFieldSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolios[':portfolio_gid'].removeCustomFieldSetting.$post(args, options),
  )
}

export async function postPortfoliosPortfolioGidAddMembers(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['addMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].addMembers.$post(args, options))
}

export async function postPortfoliosPortfolioGidRemoveMembers(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['removeMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].removeMembers.$post(args, options))
}

export async function postPortfoliosPortfolioGidDuplicate(
  args: InferRequestType<(typeof client.portfolios)[':portfolio_gid']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolios[':portfolio_gid'].duplicate.$post(args, options))
}

export async function getProjectBriefsProjectBriefGid(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_briefs[':project_brief_gid'].$get(args, options))
}

export async function putProjectBriefsProjectBriefGid(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_briefs[':project_brief_gid'].$put(args, options))
}

export async function deleteProjectBriefsProjectBriefGid(
  args: InferRequestType<(typeof client.project_briefs)[':project_brief_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_briefs[':project_brief_gid'].$delete(args, options))
}

export async function postProjectsProjectGidProjectBriefs(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_briefs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].project_briefs.$post(args, options))
}

export async function getProjectMembershipsProjectMembershipGid(
  args: InferRequestType<(typeof client.project_memberships)[':project_membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project_memberships[':project_membership_gid'].$get(args, options),
  )
}

export async function getProjectsProjectGidProjectMemberships(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_gid'].project_memberships.$get(args, options),
  )
}

export async function getProjectPortfolioSettingsProjectPortfolioSettingGid(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project_portfolio_settings[':project_portfolio_setting_gid'].$get(args, options),
  )
}

export async function putProjectPortfolioSettingsProjectPortfolioSettingGid(
  args: InferRequestType<
    (typeof client.project_portfolio_settings)[':project_portfolio_setting_gid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project_portfolio_settings[':project_portfolio_setting_gid'].$put(args, options),
  )
}

export async function getProjectsProjectGidProjectPortfolioSettings(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['project_portfolio_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_gid'].project_portfolio_settings.$get(args, options),
  )
}

export async function getPortfoliosPortfolioGidProjectPortfolioSettings(
  args: InferRequestType<
    (typeof client.portfolios)[':portfolio_gid']['project_portfolio_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portfolios[':portfolio_gid'].project_portfolio_settings.$get(args, options),
  )
}

export async function getProjectStatusesProjectStatusGid(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_statuses[':project_status_gid'].$get(args, options))
}

export async function deleteProjectStatusesProjectStatusGid(
  args: InferRequestType<(typeof client.project_statuses)[':project_status_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_statuses[':project_status_gid'].$delete(args, options))
}

export async function getProjectsProjectGidProjectStatuses(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].project_statuses.$get(args, options))
}

export async function postProjectsProjectGidProjectStatuses(
  args: InferRequestType<(typeof client.projects)[':project_gid']['project_statuses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].project_statuses.$post(args, options))
}

export async function getProjectTemplatesProjectTemplateGid(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_templates[':project_template_gid'].$get(args, options))
}

export async function deleteProjectTemplatesProjectTemplateGid(
  args: InferRequestType<(typeof client.project_templates)[':project_template_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project_templates[':project_template_gid'].$delete(args, options),
  )
}

export async function getProjectTemplates(
  args: InferRequestType<typeof client.project_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project_templates.$get(args, options))
}

export async function getTeamsTeamGidProjectTemplates(
  args: InferRequestType<(typeof client.teams)[':team_gid']['project_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].project_templates.$get(args, options))
}

export async function postProjectTemplatesProjectTemplateGidInstantiateProject(
  args: InferRequestType<
    (typeof client.project_templates)[':project_template_gid']['instantiateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project_templates[':project_template_gid'].instantiateProject.$post(args, options),
  )
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsProjectGid(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].$get(args, options))
}

export async function putProjectsProjectGid(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].$put(args, options))
}

export async function deleteProjectsProjectGid(
  args: InferRequestType<(typeof client.projects)[':project_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].$delete(args, options))
}

export async function postProjectsProjectGidDuplicate(
  args: InferRequestType<(typeof client.projects)[':project_gid']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].duplicate.$post(args, options))
}

export async function getTasksTaskGidProjects(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].projects.$get(args, options))
}

export async function getTeamsTeamGidProjects(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].projects.$get(args, options))
}

export async function postTeamsTeamGidProjects(
  args: InferRequestType<(typeof client.teams)[':team_gid']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].projects.$post(args, options))
}

export async function getWorkspacesWorkspaceGidProjects(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].projects.$get(args, options))
}

export async function postWorkspacesWorkspaceGidProjects(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].projects.$post(args, options))
}

export async function getWorkspacesWorkspaceGidProjectsSearch(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['projects']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].projects.search.$get(args, options),
  )
}

export async function postProjectsProjectGidAddCustomFieldSetting(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['addCustomFieldSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_gid'].addCustomFieldSetting.$post(args, options),
  )
}

export async function postProjectsProjectGidRemoveCustomFieldSetting(
  args: InferRequestType<
    (typeof client.projects)[':project_gid']['removeCustomFieldSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_gid'].removeCustomFieldSetting.$post(args, options),
  )
}

export async function getProjectsProjectGidTaskCounts(
  args: InferRequestType<(typeof client.projects)[':project_gid']['task_counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].task_counts.$get(args, options))
}

export async function postProjectsProjectGidAddMembers(
  args: InferRequestType<(typeof client.projects)[':project_gid']['addMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].addMembers.$post(args, options))
}

export async function postProjectsProjectGidRemoveMembers(
  args: InferRequestType<(typeof client.projects)[':project_gid']['removeMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].removeMembers.$post(args, options))
}

export async function postProjectsProjectGidAddFollowers(
  args: InferRequestType<(typeof client.projects)[':project_gid']['addFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].addFollowers.$post(args, options))
}

export async function postProjectsProjectGidRemoveFollowers(
  args: InferRequestType<(typeof client.projects)[':project_gid']['removeFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].removeFollowers.$post(args, options))
}

export async function postProjectsProjectGidSaveAsTemplate(
  args: InferRequestType<(typeof client.projects)[':project_gid']['saveAsTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].saveAsTemplate.$post(args, options))
}

export async function postProjectsProjectGidRollup(
  args: InferRequestType<(typeof client.projects)[':project_gid']['rollup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].rollup.$post(args, options))
}

export async function getRates(
  args: InferRequestType<typeof client.rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates.$get(args, options))
}

export async function postRates(
  args: InferRequestType<typeof client.rates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates.$post(args, options))
}

export async function getRatesRateGid(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates[':rate_gid'].$get(args, options))
}

export async function putRatesRateGid(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates[':rate_gid'].$put(args, options))
}

export async function deleteRatesRateGid(
  args: InferRequestType<(typeof client.rates)[':rate_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rates[':rate_gid'].$delete(args, options))
}

export async function getReactions(
  args: InferRequestType<typeof client.reactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reactions.$get(args, options))
}

export async function getTablesTableGidRecords(
  args: InferRequestType<(typeof client.tables)[':table_gid']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].records.$get(args, options))
}

export async function getWorkspacesWorkspaceGidRecordsSearch(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['records']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].records.search.$get(args, options))
}

export async function postRecords(
  args: InferRequestType<typeof client.records.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records.$post(args, options))
}

export async function getRecordsRecordGid(
  args: InferRequestType<(typeof client.records)[':record_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_gid'].$get(args, options))
}

export async function putRecordsRecordGid(
  args: InferRequestType<(typeof client.records)[':record_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_gid'].$put(args, options))
}

export async function deleteRecordsRecordGid(
  args: InferRequestType<(typeof client.records)[':record_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_gid'].$delete(args, options))
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function getRolesRoleGid(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_gid'].$get(args, options))
}

export async function putRolesRoleGid(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_gid'].$put(args, options))
}

export async function deleteRolesRoleGid(
  args: InferRequestType<(typeof client.roles)[':role_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_gid'].$delete(args, options))
}

export async function postRuleTriggersRuleTriggerGidRun(
  args: InferRequestType<(typeof client.rule_triggers)[':rule_trigger_gid']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_triggers[':rule_trigger_gid'].run.$post(args, options))
}

export async function getSectionsSectionGid(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':section_gid'].$get(args, options))
}

export async function putSectionsSectionGid(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':section_gid'].$put(args, options))
}

export async function deleteSectionsSectionGid(
  args: InferRequestType<(typeof client.sections)[':section_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':section_gid'].$delete(args, options))
}

export async function getProjectsProjectGidSections(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].sections.$get(args, options))
}

export async function postProjectsProjectGidSections(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].sections.$post(args, options))
}

export async function postSectionsSectionGidAddTask(
  args: InferRequestType<(typeof client.sections)[':section_gid']['addTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':section_gid'].addTask.$post(args, options))
}

export async function postProjectsProjectGidSectionsInsert(
  args: InferRequestType<(typeof client.projects)[':project_gid']['sections']['insert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].sections.insert.$post(args, options))
}

export async function getStatusUpdatesStatusUpdateGid(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_updates[':status_update_gid'].$get(args, options))
}

export async function deleteStatusUpdatesStatusUpdateGid(
  args: InferRequestType<(typeof client.status_updates)[':status_update_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_updates[':status_update_gid'].$delete(args, options))
}

export async function getStatusUpdates(
  args: InferRequestType<typeof client.status_updates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_updates.$get(args, options))
}

export async function postStatusUpdates(
  args: InferRequestType<typeof client.status_updates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_updates.$post(args, options))
}

export async function getStoriesStoryGid(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_gid'].$get(args, options))
}

export async function putStoriesStoryGid(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_gid'].$put(args, options))
}

export async function deleteStoriesStoryGid(
  args: InferRequestType<(typeof client.stories)[':story_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stories[':story_gid'].$delete(args, options))
}

export async function getTasksTaskGidStories(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].stories.$get(args, options))
}

export async function postTasksTaskGidStories(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['stories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].stories.$post(args, options))
}

export async function getRecordsRecordGidStories(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_gid'].stories.$get(args, options))
}

export async function postRecordsRecordGidStories(
  args: InferRequestType<(typeof client.records)[':record_gid']['stories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_gid'].stories.$post(args, options))
}

export async function getGoalsGoalGidStories(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].stories.$get(args, options))
}

export async function postGoalsGoalGidStories(
  args: InferRequestType<(typeof client.goals)[':goal_gid']['stories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.goals[':goal_gid'].stories.$post(args, options))
}

export async function getWorkspacesWorkspaceGidTables(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].tables.$get(args, options))
}

export async function postTables(
  args: InferRequestType<typeof client.tables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables.$post(args, options))
}

export async function getTablesTableGid(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].$get(args, options))
}

export async function putTablesTableGid(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].$put(args, options))
}

export async function deleteTablesTableGid(
  args: InferRequestType<(typeof client.tables)[':table_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].$delete(args, options))
}

export async function postTablesTableGidAddCustomFieldSetting(
  args: InferRequestType<(typeof client.tables)[':table_gid']['addCustomFieldSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].addCustomFieldSetting.$post(args, options))
}

export async function postTablesTableGidRemoveCustomFieldSetting(
  args: InferRequestType<(typeof client.tables)[':table_gid']['removeCustomFieldSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tables[':table_gid'].removeCustomFieldSetting.$post(args, options),
  )
}

export async function getTablesTableGidGetCustomFieldSettings(
  args: InferRequestType<(typeof client.tables)[':table_gid']['getCustomFieldSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].getCustomFieldSettings.$get(args, options))
}

export async function getTablesTableGidCustomFieldSettings(
  args: InferRequestType<(typeof client.tables)[':table_gid']['custom_field_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':table_gid'].custom_field_settings.$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsTagGid(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_gid'].$get(args, options))
}

export async function putTagsTagGid(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_gid'].$put(args, options))
}

export async function deleteTagsTagGid(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_gid'].$delete(args, options))
}

export async function getTasksTaskGidTags(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].tags.$get(args, options))
}

export async function getWorkspacesWorkspaceGidTags(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].tags.$get(args, options))
}

export async function postWorkspacesWorkspaceGidTags(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].tags.$post(args, options))
}

export async function getTaskTemplates(
  args: InferRequestType<typeof client.task_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_templates.$get(args, options))
}

export async function getTaskTemplatesTaskTemplateGid(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_templates[':task_template_gid'].$get(args, options))
}

export async function deleteTaskTemplatesTaskTemplateGid(
  args: InferRequestType<(typeof client.task_templates)[':task_template_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_templates[':task_template_gid'].$delete(args, options))
}

export async function postTaskTemplatesTaskTemplateGidInstantiateTask(
  args: InferRequestType<
    (typeof client.task_templates)[':task_template_gid']['instantiateTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.task_templates[':task_template_gid'].instantiateTask.$post(args, options),
  )
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function postTasks(
  args: InferRequestType<typeof client.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$post(args, options))
}

export async function getTasksTaskGid(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].$get(args, options))
}

export async function putTasksTaskGid(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].$put(args, options))
}

export async function deleteTasksTaskGid(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].$delete(args, options))
}

export async function postTasksTaskGidDuplicate(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].duplicate.$post(args, options))
}

export async function getProjectsProjectGidTasks(
  args: InferRequestType<(typeof client.projects)[':project_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_gid'].tasks.$get(args, options))
}

export async function getSectionsSectionGidTasks(
  args: InferRequestType<(typeof client.sections)[':section_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':section_gid'].tasks.$get(args, options))
}

export async function getTagsTagGidTasks(
  args: InferRequestType<(typeof client.tags)[':tag_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_gid'].tasks.$get(args, options))
}

export async function getUserTaskListsUserTaskListGidTasks(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_task_lists[':user_task_list_gid'].tasks.$get(args, options),
  )
}

export async function getTasksTaskGidSubtasks(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].subtasks.$get(args, options))
}

export async function postTasksTaskGidSubtasks(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['subtasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].subtasks.$post(args, options))
}

export async function postTasksTaskGidSetParent(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['setParent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].setParent.$post(args, options))
}

export async function getTasksTaskGidDependencies(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].dependencies.$get(args, options))
}

export async function postTasksTaskGidAddDependencies(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['addDependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].addDependencies.$post(args, options))
}

export async function postTasksTaskGidRemoveDependencies(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].removeDependencies.$post(args, options))
}

export async function getTasksTaskGidDependents(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['dependents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].dependents.$get(args, options))
}

export async function postTasksTaskGidAddDependents(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['addDependents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].addDependents.$post(args, options))
}

export async function postTasksTaskGidRemoveDependents(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['removeDependents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].removeDependents.$post(args, options))
}

export async function postTasksTaskGidAddProject(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['addProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].addProject.$post(args, options))
}

export async function postTasksTaskGidRemoveProject(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['removeProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].removeProject.$post(args, options))
}

export async function postTasksTaskGidAddTag(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['addTag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].addTag.$post(args, options))
}

export async function postTasksTaskGidRemoveTag(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['removeTag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].removeTag.$post(args, options))
}

export async function postTasksTaskGidAddFollowers(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['addFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].addFollowers.$post(args, options))
}

export async function postTasksTaskGidRemoveFollowers(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['removeFollowers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].removeFollowers.$post(args, options))
}

export async function postTasksTaskGidRollup(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['rollup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].rollup.$post(args, options))
}

export async function getWorkspacesWorkspaceGidTasksCustomIdCustomId(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['tasks']['custom_id'][':custom_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].tasks.custom_id[':custom_id'].$get(args, options),
  )
}

export async function getWorkspacesWorkspaceGidTasksSearch(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['tasks']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].tasks.search.$get(args, options))
}

export async function getTeamMembershipsTeamMembershipGid(
  args: InferRequestType<(typeof client.team_memberships)[':team_membership_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team_memberships[':team_membership_gid'].$get(args, options))
}

export async function getTeamMemberships(
  args: InferRequestType<typeof client.team_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team_memberships.$get(args, options))
}

export async function getTeamsTeamGidTeamMemberships(
  args: InferRequestType<(typeof client.teams)[':team_gid']['team_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].team_memberships.$get(args, options))
}

export async function getUsersUserGidTeamMemberships(
  args: InferRequestType<(typeof client.users)[':user_gid']['team_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].team_memberships.$get(args, options))
}

export async function postTeams(
  args: InferRequestType<typeof client.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$post(args, options))
}

export async function getTeamsTeamGid(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].$get(args, options))
}

export async function putTeamsTeamGid(
  args: InferRequestType<(typeof client.teams)[':team_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].$put(args, options))
}

export async function getWorkspacesWorkspaceGidTeams(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].teams.$get(args, options))
}

export async function getUsersUserGidTeams(
  args: InferRequestType<(typeof client.users)[':user_gid']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].teams.$get(args, options))
}

export async function postTeamsTeamGidAddUser(
  args: InferRequestType<(typeof client.teams)[':team_gid']['addUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].addUser.$post(args, options))
}

export async function postTeamsTeamGidRemoveUser(
  args: InferRequestType<(typeof client.teams)[':team_gid']['removeUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].removeUser.$post(args, options))
}

export async function getTimePeriodsTimePeriodGid(
  args: InferRequestType<(typeof client.time_periods)[':time_period_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_periods[':time_period_gid'].$get(args, options))
}

export async function getTimePeriods(
  args: InferRequestType<typeof client.time_periods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_periods.$get(args, options))
}

export async function getTimeTrackingCategoriesTimeTrackingCategoryGid(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_categories[':time_tracking_category_gid'].$get(args, options),
  )
}

export async function putTimeTrackingCategoriesTimeTrackingCategoryGid(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_categories[':time_tracking_category_gid'].$put(args, options),
  )
}

export async function deleteTimeTrackingCategoriesTimeTrackingCategoryGid(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_categories[':time_tracking_category_gid'].$delete(args, options),
  )
}

export async function getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntries(
  args: InferRequestType<
    (typeof client.time_tracking_categories)[':time_tracking_category_gid']['time_tracking_entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_categories[':time_tracking_category_gid'].time_tracking_entries.$get(
      args,
      options,
    ),
  )
}

export async function getTimeTrackingCategories(
  args: InferRequestType<typeof client.time_tracking_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_tracking_categories.$get(args, options))
}

export async function postTimeTrackingCategories(
  args: InferRequestType<typeof client.time_tracking_categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_tracking_categories.$post(args, options))
}

export async function getTasksTaskGidTimeTrackingEntries(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].time_tracking_entries.$get(args, options))
}

export async function postTasksTaskGidTimeTrackingEntries(
  args: InferRequestType<(typeof client.tasks)[':task_gid']['time_tracking_entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_gid'].time_tracking_entries.$post(args, options))
}

export async function getTimeTrackingEntriesTimeTrackingEntryGid(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_entries[':time_tracking_entry_gid'].$get(args, options),
  )
}

export async function putTimeTrackingEntriesTimeTrackingEntryGid(
  args: InferRequestType<(typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_entries[':time_tracking_entry_gid'].$put(args, options),
  )
}

export async function deleteTimeTrackingEntriesTimeTrackingEntryGid(
  args: InferRequestType<
    (typeof client.time_tracking_entries)[':time_tracking_entry_gid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_tracking_entries[':time_tracking_entry_gid'].$delete(args, options),
  )
}

export async function getTimeTrackingEntries(
  args: InferRequestType<typeof client.time_tracking_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_tracking_entries.$get(args, options))
}

export async function getTimesheetApprovalStatusesTimesheetApprovalStatusGid(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timesheet_approval_statuses[':timesheet_approval_status_gid'].$get(args, options),
  )
}

export async function putTimesheetApprovalStatusesTimesheetApprovalStatusGid(
  args: InferRequestType<
    (typeof client.timesheet_approval_statuses)[':timesheet_approval_status_gid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timesheet_approval_statuses[':timesheet_approval_status_gid'].$put(args, options),
  )
}

export async function getTimesheetApprovalStatuses(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timesheet_approval_statuses.$get(args, options))
}

export async function postTimesheetApprovalStatuses(
  args: InferRequestType<typeof client.timesheet_approval_statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timesheet_approval_statuses.$post(args, options))
}

export async function getWorkspacesWorkspaceGidTypeahead(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['typeahead']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].typeahead.$get(args, options))
}

export async function getUserTaskListsUserTaskListGid(
  args: InferRequestType<(typeof client.user_task_lists)[':user_task_list_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_task_lists[':user_task_list_gid'].$get(args, options))
}

export async function getUsersUserGidUserTaskList(
  args: InferRequestType<(typeof client.users)[':user_gid']['user_task_list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].user_task_list.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersUserGid(
  args: InferRequestType<(typeof client.users)[':user_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].$get(args, options))
}

export async function putUsersUserGid(
  args: InferRequestType<(typeof client.users)[':user_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].$put(args, options))
}

export async function getUsersUserGidFavorites(
  args: InferRequestType<(typeof client.users)[':user_gid']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].favorites.$get(args, options))
}

export async function getTeamsTeamGidUsers(
  args: InferRequestType<(typeof client.teams)[':team_gid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_gid'].users.$get(args, options))
}

export async function getWorkspacesWorkspaceGidUsers(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].users.$get(args, options))
}

export async function getWorkspacesWorkspaceGidUsersUserGid(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].users[':user_gid'].$get(args, options),
  )
}

export async function putWorkspacesWorkspaceGidUsersUserGid(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['users'][':user_gid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].users[':user_gid'].$put(args, options),
  )
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookGid(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_gid'].$get(args, options))
}

export async function putWebhooksWebhookGid(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_gid'].$put(args, options))
}

export async function deleteWebhooksWebhookGid(
  args: InferRequestType<(typeof client.webhooks)[':webhook_gid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_gid'].$delete(args, options))
}

export async function getWorkspaceMembershipsWorkspaceMembershipGid(
  args: InferRequestType<
    (typeof client.workspace_memberships)[':workspace_membership_gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspace_memberships[':workspace_membership_gid'].$get(args, options),
  )
}

export async function getUsersUserGidWorkspaceMemberships(
  args: InferRequestType<(typeof client.users)[':user_gid']['workspace_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_gid'].workspace_memberships.$get(args, options))
}

export async function getWorkspacesWorkspaceGidWorkspaceMemberships(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace_gid']['workspace_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspace_gid'].workspace_memberships.$get(args, options),
  )
}

export async function getWorkspaces(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$get(args, options))
}

export async function getWorkspacesWorkspaceGid(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].$get(args, options))
}

export async function putWorkspacesWorkspaceGid(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].$put(args, options))
}

export async function postWorkspacesWorkspaceGidAddUser(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['addUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].addUser.$post(args, options))
}

export async function postWorkspacesWorkspaceGidRemoveUser(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['removeUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].removeUser.$post(args, options))
}

export async function getWorkspacesWorkspaceGidEvents(
  args: InferRequestType<(typeof client.workspaces)[':workspace_gid']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_gid'].events.$get(args, options))
}
