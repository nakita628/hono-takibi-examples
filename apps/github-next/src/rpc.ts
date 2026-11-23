import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAdvisories(
  args: InferRequestType<typeof client.advisories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advisories.$get(args, options))
}

export async function getAdvisoriesGhsaId(
  args: InferRequestType<(typeof client.advisories)[':ghsa_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advisories[':ghsa_id'].$get(args, options))
}

export async function getAgentsAutomations(
  args: InferRequestType<typeof client.agents.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.automations.$get(args, options))
}

export async function getAgentsReposOwnerRepoAutomations(
  args: InferRequestType<(typeof client.agents.repos)[':owner'][':repo']['automations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.repos[':owner'][':repo'].automations.$get(args, options))
}

export async function postAgentsReposOwnerRepoAutomations(
  args: InferRequestType<(typeof client.agents.repos)[':owner'][':repo']['automations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations.$post(args, options),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAvailableTools(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations']['available-tools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations['available-tools'].$get(args, options),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAvailableTriggers(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations']['available-triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations['available-triggers'].$get(args, options),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAutomationId(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].$get(args, options),
  )
}

export async function deleteAgentsReposOwnerRepoAutomationsAutomationId(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].$delete(args, options),
  )
}

export async function patchAgentsReposOwnerRepoAutomationsAutomationId(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].$patch(args, options),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAutomationIdRevisions(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].revisions.$get(
      args,
      options,
    ),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['revisions'][':revision_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].revisions[
      ':revision_id'
    ].$get(args, options),
  )
}

export async function getAgentsReposOwnerRepoAutomationsAutomationIdTasks(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].tasks.$get(args, options),
  )
}

export async function postAgentsReposOwnerRepoAutomationsAutomationIdTasks(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['automations'][':automation_id']['tasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].automations[':automation_id'].tasks.$post(args, options),
  )
}

export async function getAgentsReposOwnerRepoPullsPullNumberAgentMerge(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['pulls'][':pull_number']['agent-merge']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].pulls[':pull_number']['agent-merge'].$get(args, options),
  )
}

export async function putAgentsReposOwnerRepoPullsPullNumberAgentMerge(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['pulls'][':pull_number']['agent-merge']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].pulls[':pull_number']['agent-merge'].$put(args, options),
  )
}

export async function deleteAgentsReposOwnerRepoPullsPullNumberAgentMerge(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['pulls'][':pull_number']['agent-merge']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].pulls[':pull_number']['agent-merge'].$delete(
      args,
      options,
    ),
  )
}

export async function getAgentsReposOwnerRepoTasks(
  args: InferRequestType<(typeof client.agents.repos)[':owner'][':repo']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.repos[':owner'][':repo'].tasks.$get(args, options))
}

export async function postAgentsReposOwnerRepoTasks(
  args: InferRequestType<(typeof client.agents.repos)[':owner'][':repo']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.repos[':owner'][':repo'].tasks.$post(args, options))
}

export async function getAgentsReposOwnerRepoTasksTaskId(
  args: InferRequestType<
    (typeof client.agents.repos)[':owner'][':repo']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.repos[':owner'][':repo'].tasks[':task_id'].$get(args, options),
  )
}

export async function getAgentsTasks(
  args: InferRequestType<typeof client.agents.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.tasks.$get(args, options))
}

export async function getAgentsTasksTaskId(
  args: InferRequestType<(typeof client.agents.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.tasks[':task_id'].$get(args, options))
}

export async function getApp(options?: ClientRequestOptions) {
  return await parseResponse(client.app.$get(undefined, options))
}

export async function postAppManifestsCodeConversions(
  args: InferRequestType<(typeof client)['app-manifests'][':code']['conversions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-manifests'][':code'].conversions.$post(args, options))
}

export async function getAppHookConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.app.hook.config.$get(undefined, options))
}

export async function patchAppHookConfig(
  args: InferRequestType<typeof client.app.hook.config.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.hook.config.$patch(args, options))
}

export async function getAppHookDeliveries(
  args: InferRequestType<typeof client.app.hook.deliveries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.hook.deliveries.$get(args, options))
}

export async function getAppHookDeliveriesDeliveryId(
  args: InferRequestType<(typeof client.app.hook.deliveries)[':delivery_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.hook.deliveries[':delivery_id'].$get(args, options))
}

export async function postAppHookDeliveriesDeliveryIdAttempts(
  args: InferRequestType<(typeof client.app.hook.deliveries)[':delivery_id']['attempts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.app.hook.deliveries[':delivery_id'].attempts.$post(args, options),
  )
}

export async function getAppInstallationRequests(
  args: InferRequestType<(typeof client.app)['installation-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app['installation-requests'].$get(args, options))
}

export async function getAppInstallations(
  args: InferRequestType<typeof client.app.installations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.installations.$get(args, options))
}

export async function getAppInstallationsInstallationId(
  args: InferRequestType<(typeof client.app.installations)[':installation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.installations[':installation_id'].$get(args, options))
}

export async function deleteAppInstallationsInstallationId(
  args: InferRequestType<(typeof client.app.installations)[':installation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app.installations[':installation_id'].$delete(args, options))
}

export async function postAppInstallationsInstallationIdAccessTokens(
  args: InferRequestType<
    (typeof client.app.installations)[':installation_id']['access_tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.app.installations[':installation_id'].access_tokens.$post(args, options),
  )
}

export async function putAppInstallationsInstallationIdSuspended(
  args: InferRequestType<
    (typeof client.app.installations)[':installation_id']['suspended']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.app.installations[':installation_id'].suspended.$put(args, options),
  )
}

export async function deleteAppInstallationsInstallationIdSuspended(
  args: InferRequestType<
    (typeof client.app.installations)[':installation_id']['suspended']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.app.installations[':installation_id'].suspended.$delete(args, options),
  )
}

export async function deleteApplicationsClientIdGrant(
  args: InferRequestType<(typeof client.applications)[':client_id']['grant']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':client_id'].grant.$delete(args, options))
}

export async function postApplicationsClientIdToken(
  args: InferRequestType<(typeof client.applications)[':client_id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':client_id'].token.$post(args, options))
}

export async function deleteApplicationsClientIdToken(
  args: InferRequestType<(typeof client.applications)[':client_id']['token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':client_id'].token.$delete(args, options))
}

export async function patchApplicationsClientIdToken(
  args: InferRequestType<(typeof client.applications)[':client_id']['token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':client_id'].token.$patch(args, options))
}

export async function postApplicationsClientIdTokenScoped(
  args: InferRequestType<(typeof client.applications)[':client_id']['token']['scoped']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':client_id'].token.scoped.$post(args, options))
}

export async function getAppsAppSlug(
  args: InferRequestType<(typeof client.apps)[':app_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':app_slug'].$get(args, options))
}

export async function getAssignmentsAssignmentId(
  args: InferRequestType<(typeof client.assignments)[':assignment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assignments[':assignment_id'].$get(args, options))
}

export async function getAssignmentsAssignmentIdAcceptedAssignments(
  args: InferRequestType<
    (typeof client.assignments)[':assignment_id']['accepted_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assignments[':assignment_id'].accepted_assignments.$get(args, options),
  )
}

export async function getAssignmentsAssignmentIdGrades(
  args: InferRequestType<(typeof client.assignments)[':assignment_id']['grades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assignments[':assignment_id'].grades.$get(args, options))
}

export async function getClassrooms(options?: ClientRequestOptions) {
  return await parseResponse(client.classrooms.$get(undefined, options))
}

export async function getClassroomsClassroomId(
  args: InferRequestType<(typeof client.classrooms)[':classroom_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classrooms[':classroom_id'].$get(args, options))
}

export async function getClassroomsClassroomIdAssignments(
  args: InferRequestType<(typeof client.classrooms)[':classroom_id']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classrooms[':classroom_id'].assignments.$get(args, options))
}

export async function getCodesOfConduct(options?: ClientRequestOptions) {
  return await parseResponse(client.codes_of_conduct.$get(undefined, options))
}

export async function getCodesOfConductKey(
  args: InferRequestType<(typeof client.codes_of_conduct)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.codes_of_conduct[':key'].$get(args, options))
}

export async function postCredentialsRevoke(
  args: InferRequestType<typeof client.credentials.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.revoke.$post(args, options))
}

export async function getEmojis(options?: ClientRequestOptions) {
  return await parseResponse(client.emojis.$get(undefined, options))
}

export async function getEnterprisesEnterpriseActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['cache']['retention-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.cache['retention-limit'].$get(args, options),
  )
}

export async function putEnterprisesEnterpriseActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['cache']['retention-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.cache['retention-limit'].$put(args, options),
  )
}

export async function getEnterprisesEnterpriseActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['cache']['storage-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.cache['storage-limit'].$get(args, options),
  )
}

export async function putEnterprisesEnterpriseActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['cache']['storage-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.cache['storage-limit'].$put(args, options),
  )
}

export async function getEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepo(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['oidc']['customization']['properties']['repo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.oidc.customization.properties.repo.$get(
      args,
      options,
    ),
  )
}

export async function postEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepo(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['oidc']['customization']['properties']['repo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.oidc.customization.properties.repo.$post(
      args,
      options,
    ),
  )
}

export async function deleteEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoCustomPropertyName(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['actions']['oidc']['customization']['properties']['repo'][':custom_property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].actions.oidc.customization.properties.repo[
      ':custom_property_name'
    ].$delete(args, options),
  )
}

export async function getEnterprisesEnterpriseCodeSecurityConfigurations(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations.$get(args, options),
  )
}

export async function postEnterprisesEnterpriseCodeSecurityConfigurations(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations.$post(args, options),
  )
}

export async function getEnterprisesEnterpriseCodeSecurityConfigurationsDefaults(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations']['defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations.defaults.$get(args, options),
  )
}

export async function getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[':configuration_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[':configuration_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[':configuration_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdAttach(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['attach']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[
      ':configuration_id'
    ].attach.$post(args, options),
  )
}

export async function putEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdDefaults(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['defaults']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[
      ':configuration_id'
    ].defaults.$put(args, options),
  )
}

export async function getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRepositories(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['code-security']['configurations'][':configuration_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise']['code-security'].configurations[
      ':configuration_id'
    ].repositories.$get(args, options),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsEnterprise1Day(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['enterprise-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['enterprise-1-day'].$get(
      args,
      options,
    ),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsEnterprise28DayLatest(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['enterprise-28-day']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['enterprise-28-day'].latest.$get(
      args,
      options,
    ),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsRepos1Day(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['repos-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['repos-1-day'].$get(args, options),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsUserTeams1Day(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['user-teams-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['user-teams-1-day'].$get(
      args,
      options,
    ),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsUsers1Day(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['users-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['users-1-day'].$get(args, options),
  )
}

export async function getEnterprisesEnterpriseCopilotMetricsReportsUsers28DayLatest(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['metrics']['reports']['users-28-day']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.metrics.reports['users-28-day'].latest.$get(
      args,
      options,
    ),
  )
}

export async function getEnterprisesEnterpriseCopilotPoliciesCodeReview(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['policies']['code-review']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.policies['code-review'].$get(args, options),
  )
}

export async function putEnterprisesEnterpriseCopilotPoliciesCodeReview(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['policies']['code-review']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.policies['code-review'].$put(args, options),
  )
}

export async function putEnterprisesEnterpriseCopilotPoliciesCodingAgent(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['policies']['coding_agent']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.policies.coding_agent.$put(args, options),
  )
}

export async function postEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizations(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['policies']['coding_agent']['organizations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.policies.coding_agent.organizations.$post(
      args,
      options,
    ),
  )
}

export async function deleteEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizations(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['copilot']['policies']['coding_agent']['organizations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].copilot.policies.coding_agent.organizations.$delete(
      args,
      options,
    ),
  )
}

export async function getEnterprisesEnterpriseDependabotAlerts(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['dependabot']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].dependabot.alerts.$get(args, options),
  )
}

export async function getEnterprisesEnterpriseDependabotRepositoryAccess(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['dependabot']['repository-access']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].dependabot['repository-access'].$get(args, options),
  )
}

export async function patchEnterprisesEnterpriseDependabotRepositoryAccess(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['dependabot']['repository-access']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].dependabot['repository-access'].$patch(args, options),
  )
}

export async function putEnterprisesEnterpriseDependabotRepositoryAccessDefaultLevel(
  args: InferRequestType<
    (typeof client.enterprises)[':enterprise']['dependabot']['repository-access']['default-level']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise'].dependabot['repository-access']['default-level'].$put(
      args,
      options,
    ),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getFeeds(options?: ClientRequestOptions) {
  return await parseResponse(client.feeds.$get(undefined, options))
}

export async function getGists(
  args: InferRequestType<typeof client.gists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists.$get(args, options))
}

export async function postGists(
  args: InferRequestType<typeof client.gists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists.$post(args, options))
}

export async function getGistsPublic(
  args: InferRequestType<typeof client.gists.public.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists.public.$get(args, options))
}

export async function getGistsStarred(
  args: InferRequestType<typeof client.gists.starred.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists.starred.$get(args, options))
}

export async function getGistsGistId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].$get(args, options))
}

export async function deleteGistsGistId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].$delete(args, options))
}

export async function patchGistsGistId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].$patch(args, options))
}

export async function getGistsGistIdComments(
  args: InferRequestType<(typeof client.gists)[':gist_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].comments.$get(args, options))
}

export async function postGistsGistIdComments(
  args: InferRequestType<(typeof client.gists)[':gist_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].comments.$post(args, options))
}

export async function getGistsGistIdCommentsCommentId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['comments'][':comment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].comments[':comment_id'].$get(args, options))
}

export async function deleteGistsGistIdCommentsCommentId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['comments'][':comment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gists[':gist_id'].comments[':comment_id'].$delete(args, options),
  )
}

export async function patchGistsGistIdCommentsCommentId(
  args: InferRequestType<(typeof client.gists)[':gist_id']['comments'][':comment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].comments[':comment_id'].$patch(args, options))
}

export async function getGistsGistIdCommits(
  args: InferRequestType<(typeof client.gists)[':gist_id']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].commits.$get(args, options))
}

export async function getGistsGistIdForks(
  args: InferRequestType<(typeof client.gists)[':gist_id']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].forks.$get(args, options))
}

export async function postGistsGistIdForks(
  args: InferRequestType<(typeof client.gists)[':gist_id']['forks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].forks.$post(args, options))
}

export async function getGistsGistIdStar(
  args: InferRequestType<(typeof client.gists)[':gist_id']['star']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].star.$get(args, options))
}

export async function putGistsGistIdStar(
  args: InferRequestType<(typeof client.gists)[':gist_id']['star']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].star.$put(args, options))
}

export async function deleteGistsGistIdStar(
  args: InferRequestType<(typeof client.gists)[':gist_id']['star']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'].star.$delete(args, options))
}

export async function getGistsGistIdSha(
  args: InferRequestType<(typeof client.gists)[':gist_id'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gists[':gist_id'][':sha'].$get(args, options))
}

export async function getGitignoreTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.gitignore.templates.$get(undefined, options))
}

export async function getGitignoreTemplatesName(
  args: InferRequestType<(typeof client.gitignore.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitignore.templates[':name'].$get(args, options))
}

export async function getInstallationRepositories(
  args: InferRequestType<typeof client.installation.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.installation.repositories.$get(args, options))
}

export async function deleteInstallationToken(options?: ClientRequestOptions) {
  return await parseResponse(client.installation.token.$delete(undefined, options))
}

export async function getIssues(
  args: InferRequestType<typeof client.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues.$get(args, options))
}

export async function getLicenses(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses.$get(args, options))
}

export async function getLicensesLicense(
  args: InferRequestType<(typeof client.licenses)[':license']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses[':license'].$get(args, options))
}

export async function postMarkdown(
  args: InferRequestType<typeof client.markdown.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markdown.$post(args, options))
}

export async function postMarkdownRaw(
  args: InferRequestType<typeof client.markdown.raw.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markdown.raw.$post(args, options))
}

export async function getMarketplaceListingAccountsAccountId(
  args: InferRequestType<(typeof client.marketplace_listing.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketplace_listing.accounts[':account_id'].$get(args, options))
}

export async function getMarketplaceListingPlans(
  args: InferRequestType<typeof client.marketplace_listing.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketplace_listing.plans.$get(args, options))
}

export async function getMarketplaceListingPlansPlanIdAccounts(
  args: InferRequestType<(typeof client.marketplace_listing.plans)[':plan_id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace_listing.plans[':plan_id'].accounts.$get(args, options),
  )
}

export async function getMarketplaceListingStubbedAccountsAccountId(
  args: InferRequestType<
    (typeof client.marketplace_listing.stubbed.accounts)[':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace_listing.stubbed.accounts[':account_id'].$get(args, options),
  )
}

export async function getMarketplaceListingStubbedPlans(
  args: InferRequestType<typeof client.marketplace_listing.stubbed.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.marketplace_listing.stubbed.plans.$get(args, options))
}

export async function getMarketplaceListingStubbedPlansPlanIdAccounts(
  args: InferRequestType<
    (typeof client.marketplace_listing.stubbed.plans)[':plan_id']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace_listing.stubbed.plans[':plan_id'].accounts.$get(args, options),
  )
}

export async function getMeta(options?: ClientRequestOptions) {
  return await parseResponse(client.meta.$get(undefined, options))
}

export async function getNetworksOwnerRepoEvents(
  args: InferRequestType<(typeof client.networks)[':owner'][':repo']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':owner'][':repo'].events.$get(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function putNotifications(
  args: InferRequestType<typeof client.notifications.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$put(args, options))
}

export async function getNotificationsThreadsThreadId(
  args: InferRequestType<(typeof client.notifications.threads)[':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.threads[':thread_id'].$get(args, options))
}

export async function deleteNotificationsThreadsThreadId(
  args: InferRequestType<(typeof client.notifications.threads)[':thread_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.threads[':thread_id'].$delete(args, options))
}

export async function patchNotificationsThreadsThreadId(
  args: InferRequestType<(typeof client.notifications.threads)[':thread_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.threads[':thread_id'].$patch(args, options))
}

export async function getNotificationsThreadsThreadIdSubscription(
  args: InferRequestType<
    (typeof client.notifications.threads)[':thread_id']['subscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.threads[':thread_id'].subscription.$get(args, options),
  )
}

export async function putNotificationsThreadsThreadIdSubscription(
  args: InferRequestType<
    (typeof client.notifications.threads)[':thread_id']['subscription']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.threads[':thread_id'].subscription.$put(args, options),
  )
}

export async function deleteNotificationsThreadsThreadIdSubscription(
  args: InferRequestType<
    (typeof client.notifications.threads)[':thread_id']['subscription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications.threads[':thread_id'].subscription.$delete(args, options),
  )
}

export async function getOctocat(
  args: InferRequestType<typeof client.octocat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.octocat.$get(args, options))
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function getOrganizationsOrgActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.organizations)[':org']['actions']['cache']['retention-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].actions.cache['retention-limit'].$get(args, options),
  )
}

export async function putOrganizationsOrgActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.organizations)[':org']['actions']['cache']['retention-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].actions.cache['retention-limit'].$put(args, options),
  )
}

export async function getOrganizationsOrgActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.organizations)[':org']['actions']['cache']['storage-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].actions.cache['storage-limit'].$get(args, options),
  )
}

export async function putOrganizationsOrgActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.organizations)[':org']['actions']['cache']['storage-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].actions.cache['storage-limit'].$put(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingAiCreditUsage(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['ai_credit']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.ai_credit.usage.$get(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingBudgets(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['budgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.budgets.$get(args, options),
  )
}

export async function postOrganizationsOrgSettingsBillingBudgets(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['budgets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.budgets.$post(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingBudgetsBudgetId(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['budgets'][':budget_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.budgets[':budget_id'].$get(args, options),
  )
}

export async function deleteOrganizationsOrgSettingsBillingBudgetsBudgetId(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['budgets'][':budget_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.budgets[':budget_id'].$delete(args, options),
  )
}

export async function patchOrganizationsOrgSettingsBillingBudgetsBudgetId(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['budgets'][':budget_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.budgets[':budget_id'].$patch(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingPremiumRequestUsage(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['premium_request']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.premium_request.usage.$get(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingUsage(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.usage.$get(args, options),
  )
}

export async function getOrganizationsOrgSettingsBillingUsageSummary(
  args: InferRequestType<
    (typeof client.organizations)[':org']['settings']['billing']['usage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org'].settings.billing.usage.summary.$get(args, options),
  )
}

export async function getOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$get(args, options))
}

export async function deleteOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$delete(args, options))
}

export async function patchOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$patch(args, options))
}

export async function getOrgsOrgActionsCacheUsage(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['cache']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.cache.usage.$get(args, options))
}

export async function getOrgsOrgActionsCacheUsageByRepository(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['cache']['usage-by-repository']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.cache['usage-by-repository'].$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunners(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['hosted-runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions['hosted-runners'].$get(args, options))
}

export async function postOrgsOrgActionsHostedRunners(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['hosted-runners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions['hosted-runners'].$post(args, options))
}

export async function getOrgsOrgActionsHostedRunnersImagesCustom(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom.$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom'][':image_definition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom[':image_definition_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom'][':image_definition_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom[':image_definition_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom'][':image_definition_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom[
      ':image_definition_id'
    ].versions.$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersion(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom'][':image_definition_id']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom[':image_definition_id'].versions[
      ':version'
    ].$get(args, options),
  )
}

export async function deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersion(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['custom'][':image_definition_id']['versions'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.custom[':image_definition_id'].versions[
      ':version'
    ].$delete(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersImagesGithubOwned(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['github-owned']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images['github-owned'].$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersImagesPartner(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['images']['partner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].images.partner.$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersLimits(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['limits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].limits.$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersMachineSizes(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['machine-sizes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners']['machine-sizes'].$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersPlatforms(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners']['platforms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'].platforms.$get(args, options),
  )
}

export async function getOrgsOrgActionsHostedRunnersHostedRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners'][':hosted_runner_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'][':hosted_runner_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgActionsHostedRunnersHostedRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners'][':hosted_runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'][':hosted_runner_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgActionsHostedRunnersHostedRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['hosted-runners'][':hosted_runner_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['hosted-runners'][':hosted_runner_id'].$patch(args, options),
  )
}

export async function getOrgsOrgActionsOidcCustomizationPropertiesRepo(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['oidc']['customization']['properties']['repo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.oidc.customization.properties.repo.$get(args, options),
  )
}

export async function postOrgsOrgActionsOidcCustomizationPropertiesRepo(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['oidc']['customization']['properties']['repo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.oidc.customization.properties.repo.$post(args, options),
  )
}

export async function deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['oidc']['customization']['properties']['repo'][':custom_property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.oidc.customization.properties.repo[':custom_property_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgActionsOidcCustomizationSub(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['oidc']['customization']['sub']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.oidc.customization.sub.$get(args, options))
}

export async function putOrgsOrgActionsOidcCustomizationSub(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['oidc']['customization']['sub']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.oidc.customization.sub.$put(args, options))
}

export async function getOrgsOrgActionsPermissions(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.permissions.$get(args, options))
}

export async function putOrgsOrgActionsPermissions(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.permissions.$put(args, options))
}

export async function getOrgsOrgActionsPermissionsArtifactAndLogRetention(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['artifact-and-log-retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['artifact-and-log-retention'].$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsArtifactAndLogRetention(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['artifact-and-log-retention']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['artifact-and-log-retention'].$put(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsForkPrContributorApproval(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['fork-pr-contributor-approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['fork-pr-contributor-approval'].$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsForkPrContributorApproval(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['fork-pr-contributor-approval']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['fork-pr-contributor-approval'].$put(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateRepos(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['fork-pr-workflows-private-repos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['fork-pr-workflows-private-repos'].$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateRepos(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['fork-pr-workflows-private-repos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['fork-pr-workflows-private-repos'].$put(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions.repositories.$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions.repositories.$put(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions.repositories[':repository_id'].$put(args, options),
  )
}

export async function deleteOrgsOrgActionsPermissionsRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions.repositories[':repository_id'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsSelectedActions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['selected-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['selected-actions'].$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsSelectedActions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['selected-actions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['selected-actions'].$put(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsSelfHostedRunners(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsSelfHostedRunners(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].$put(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsSelfHostedRunnersRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsSelfHostedRunnersRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].repositories[
      ':repository_id'
    ].$put(args, options),
  )
}

export async function deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['self-hosted-runners']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.permissions['self-hosted-runners'].repositories[
      ':repository_id'
    ].$delete(args, options),
  )
}

export async function getOrgsOrgActionsPermissionsWorkflow(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.permissions.workflow.$get(args, options))
}

export async function putOrgsOrgActionsPermissionsWorkflow(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['permissions']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.permissions.workflow.$put(args, options))
}

export async function getOrgsOrgActionsPolicies(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.policies.$get(args, options))
}

export async function postOrgsOrgActionsPolicies(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.policies.$post(args, options))
}

export async function getOrgsOrgActionsPoliciesPolicyId(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['policies'][':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.policies[':policy_id'].$get(args, options))
}

export async function putOrgsOrgActionsPoliciesPolicyId(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['policies'][':policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.policies[':policy_id'].$put(args, options))
}

export async function deleteOrgsOrgActionsPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['policies'][':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.policies[':policy_id'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsRunnerGroups(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runner-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions['runner-groups'].$get(args, options))
}

export async function postOrgsOrgActionsRunnerGroups(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runner-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions['runner-groups'].$post(args, options))
}

export async function getOrgsOrgActionsRunnerGroupsRunnerGroupId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgActionsRunnerGroupsRunnerGroupId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgActionsRunnerGroupsRunnerGroupId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].$patch(args, options),
  )
}

export async function getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunners(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['hosted-runners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id']['hosted-runners'].$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].repositories.$get(
      args,
      options,
    ),
  )
}

export async function putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].repositories.$put(
      args,
      options,
    ),
  )
}

export async function putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].repositories[
      ':repository_id'
    ].$put(args, options),
  )
}

export async function deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].repositories[
      ':repository_id'
    ].$delete(args, options),
  )
}

export async function getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunners(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['runners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].runners.$get(args, options),
  )
}

export async function putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunners(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['runners']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].runners.$put(args, options),
  )
}

export async function putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['runners'][':runner_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].runners[':runner_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runner-groups'][':runner_group_id']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions['runner-groups'][':runner_group_id'].runners[':runner_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgActionsRunners(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runners.$get(args, options))
}

export async function getOrgsOrgActionsRunnersDeprecationsVersion(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners']['deprecations'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners.deprecations[':version'].$get(args, options),
  )
}

export async function getOrgsOrgActionsRunnersDownloads(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runners']['downloads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runners.downloads.$get(args, options))
}

export async function postOrgsOrgActionsRunnersGenerateJitconfig(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners']['generate-jitconfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners['generate-jitconfig'].$post(args, options),
  )
}

export async function postOrgsOrgActionsRunnersRegistrationToken(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners']['registration-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners['registration-token'].$post(args, options),
  )
}

export async function postOrgsOrgActionsRunnersRemoveToken(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners']['remove-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners['remove-token'].$post(args, options),
  )
}

export async function getOrgsOrgActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runners'][':runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runners[':runner_id'].$get(args, options))
}

export async function deleteOrgsOrgActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].labels.$get(args, options),
  )
}

export async function putOrgsOrgActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].labels.$put(args, options),
  )
}

export async function postOrgsOrgActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].labels.$post(args, options),
  )
}

export async function deleteOrgsOrgActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].labels.$delete(args, options),
  )
}

export async function deleteOrgsOrgActionsRunnersRunnerIdLabelsName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['labels'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].labels[':name'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsSecrets(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.secrets.$get(args, options))
}

export async function getOrgsOrgActionsSecretsPublicKey(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['secrets']['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.secrets['public-key'].$get(args, options))
}

export async function getOrgsOrgActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].$get(args, options),
  )
}

export async function putOrgsOrgActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteOrgsOrgActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgActionsSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secret_name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secret_name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgActionsVariables(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables.$get(args, options))
}

export async function postOrgsOrgActionsVariables(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables.$post(args, options))
}

export async function getOrgsOrgActionsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables[':name'].$get(args, options))
}

export async function deleteOrgsOrgActionsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables[':name'].$delete(args, options))
}

export async function patchOrgsOrgActionsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables'][':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables[':name'].$patch(args, options))
}

export async function getOrgsOrgActionsVariablesNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgActionsVariablesNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgActionsVariablesNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgAgentsSecrets(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.secrets.$get(args, options))
}

export async function getOrgsOrgAgentsSecretsPublicKey(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['secrets']['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.secrets['public-key'].$get(args, options))
}

export async function getOrgsOrgAgentsSecretsSecretName(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.secrets[':secret_name'].$get(args, options))
}

export async function putOrgsOrgAgentsSecretsSecretName(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.secrets[':secret_name'].$put(args, options))
}

export async function deleteOrgsOrgAgentsSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getOrgsOrgAgentsSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.secrets[':secret_name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgAgentsSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.secrets[':secret_name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.secrets[':secret_name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['secrets'][':secret_name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.secrets[':secret_name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgAgentsVariables(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.variables.$get(args, options))
}

export async function postOrgsOrgAgentsVariables(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.variables.$post(args, options))
}

export async function getOrgsOrgAgentsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['variables'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.variables[':name'].$get(args, options))
}

export async function deleteOrgsOrgAgentsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['variables'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.variables[':name'].$delete(args, options))
}

export async function patchOrgsOrgAgentsVariablesName(
  args: InferRequestType<(typeof client.orgs)[':org']['agents']['variables'][':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].agents.variables[':name'].$patch(args, options))
}

export async function getOrgsOrgAgentsVariablesNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['variables'][':name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.variables[':name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgAgentsVariablesNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['variables'][':name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.variables[':name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgAgentsVariablesNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['variables'][':name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.variables[':name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['agents']['variables'][':name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].agents.variables[':name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postOrgsOrgArtifactsMetadataDeploymentRecord(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts']['metadata']['deployment-record']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts.metadata['deployment-record'].$post(args, options),
  )
}

export async function postOrgsOrgArtifactsMetadataDeploymentRecordClusterCluster(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts']['metadata']['deployment-record']['cluster'][':cluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts.metadata['deployment-record'].cluster[':cluster'].$post(
      args,
      options,
    ),
  )
}

export async function postOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobs(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts']['metadata']['deployment-record']['cluster'][':cluster']['jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts.metadata['deployment-record'].cluster[':cluster'].jobs.$post(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgArtifactsMetadataDeploymentRecordClusterClusterJobsJobId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts']['metadata']['deployment-record']['cluster'][':cluster']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts.metadata['deployment-record'].cluster[':cluster'].jobs[
      ':job_id'
    ].$get(args, options),
  )
}

export async function postOrgsOrgArtifactsMetadataStorageRecord(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts']['metadata']['storage-record']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts.metadata['storage-record'].$post(args, options),
  )
}

export async function getOrgsOrgArtifactsSubjectDigestMetadataDeploymentRecords(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts'][':subject_digest']['metadata']['deployment-records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts[':subject_digest'].metadata['deployment-records'].$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgArtifactsSubjectDigestMetadataStorageRecords(
  args: InferRequestType<
    (typeof client.orgs)[':org']['artifacts'][':subject_digest']['metadata']['storage-records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].artifacts[':subject_digest'].metadata['storage-records'].$get(
      args,
      options,
    ),
  )
}

export async function postOrgsOrgAttestationsBulkList(
  args: InferRequestType<(typeof client.orgs)[':org']['attestations']['bulk-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].attestations['bulk-list'].$post(args, options))
}

export async function postOrgsOrgAttestationsDeleteRequest(
  args: InferRequestType<(typeof client.orgs)[':org']['attestations']['delete-request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].attestations['delete-request'].$post(args, options),
  )
}

export async function deleteOrgsOrgAttestationsDigestSubjectDigest(
  args: InferRequestType<
    (typeof client.orgs)[':org']['attestations']['digest'][':subject_digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].attestations.digest[':subject_digest'].$delete(args, options),
  )
}

export async function getOrgsOrgAttestationsRepositories(
  args: InferRequestType<(typeof client.orgs)[':org']['attestations']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].attestations.repositories.$get(args, options))
}

export async function deleteOrgsOrgAttestationsAttestationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['attestations'][':attestation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].attestations[':attestation_id'].$delete(args, options),
  )
}

export async function getOrgsOrgAttestationsSubjectDigest(
  args: InferRequestType<(typeof client.orgs)[':org']['attestations'][':subject_digest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].attestations[':subject_digest'].$get(args, options),
  )
}

export async function getOrgsOrgBlocks(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks.$get(args, options))
}

export async function getOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$get(args, options))
}

export async function putOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$put(args, options))
}

export async function deleteOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$delete(args, options))
}

export async function getOrgsOrgCampaigns(
  args: InferRequestType<(typeof client.orgs)[':org']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].campaigns.$get(args, options))
}

export async function postOrgsOrgCampaigns(
  args: InferRequestType<(typeof client.orgs)[':org']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].campaigns.$post(args, options))
}

export async function getOrgsOrgCampaignsCampaignNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['campaigns'][':campaign_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].campaigns[':campaign_number'].$get(args, options))
}

export async function deleteOrgsOrgCampaignsCampaignNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['campaigns'][':campaign_number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].campaigns[':campaign_number'].$delete(args, options),
  )
}

export async function patchOrgsOrgCampaignsCampaignNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['campaigns'][':campaign_number']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].campaigns[':campaign_number'].$patch(args, options),
  )
}

export async function getOrgsOrgCodeScanningAiScan(
  args: InferRequestType<(typeof client.orgs)[':org']['code-scanning']['ai-scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['code-scanning']['ai-scan'].$get(args, options))
}

export async function patchOrgsOrgCodeScanningAiScan(
  args: InferRequestType<(typeof client.orgs)[':org']['code-scanning']['ai-scan']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['code-scanning']['ai-scan'].$patch(args, options))
}

export async function getOrgsOrgCodeScanningAlerts(
  args: InferRequestType<(typeof client.orgs)[':org']['code-scanning']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['code-scanning'].alerts.$get(args, options))
}

export async function getOrgsOrgCodeSecurityConfigurations(
  args: InferRequestType<(typeof client.orgs)[':org']['code-security']['configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations.$get(args, options),
  )
}

export async function postOrgsOrgCodeSecurityConfigurations(
  args: InferRequestType<(typeof client.orgs)[':org']['code-security']['configurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations.$post(args, options),
  )
}

export async function getOrgsOrgCodeSecurityConfigurationsDefaults(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations']['defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations.defaults.$get(args, options),
  )
}

export async function deleteOrgsOrgCodeSecurityConfigurationsDetach(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations']['detach']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations.detach.$delete(args, options),
  )
}

export async function getOrgsOrgCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgCodeSecurityConfigurationsConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].$patch(args, options),
  )
}

export async function postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttach(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['attach']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].attach.$post(
      args,
      options,
    ),
  )
}

export async function putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaults(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['defaults']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].defaults.$put(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['code-security']['configurations'][':configuration_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['code-security'].configurations[':configuration_id'].repositories.$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgCodespaces(
  args: InferRequestType<(typeof client.orgs)[':org']['codespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].codespaces.$get(args, options))
}

export async function putOrgsOrgCodespacesAccess(
  args: InferRequestType<(typeof client.orgs)[':org']['codespaces']['access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].codespaces.access.$put(args, options))
}

export async function postOrgsOrgCodespacesAccessSelectedUsers(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['access']['selected_users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.access.selected_users.$post(args, options),
  )
}

export async function deleteOrgsOrgCodespacesAccessSelectedUsers(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['access']['selected_users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.access.selected_users.$delete(args, options),
  )
}

export async function getOrgsOrgCodespacesSecrets(
  args: InferRequestType<(typeof client.orgs)[':org']['codespaces']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].codespaces.secrets.$get(args, options))
}

export async function getOrgsOrgCodespacesSecretsPublicKey(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets['public-key'].$get(args, options),
  )
}

export async function getOrgsOrgCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].$get(args, options),
  )
}

export async function putOrgsOrgCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteOrgsOrgCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getOrgsOrgCodespacesSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgCodespacesSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['codespaces']['secrets'][':secret_name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].codespaces.secrets[':secret_name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgCopilotSpaces(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot-spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['copilot-spaces'].$get(args, options))
}

export async function postOrgsOrgCopilotSpaces(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot-spaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['copilot-spaces'].$post(args, options))
}

export async function getOrgsOrgCopilotSpacesSpaceNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot-spaces'][':space_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].$get(args, options),
  )
}

export async function putOrgsOrgCopilotSpacesSpaceNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot-spaces'][':space_number']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].$put(args, options),
  )
}

export async function deleteOrgsOrgCopilotSpacesSpaceNumber(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].$delete(args, options),
  )
}

export async function getOrgsOrgCopilotSpacesSpaceNumberCollaborators(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['collaborators']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].collaborators.$get(args, options),
  )
}

export async function postOrgsOrgCopilotSpacesSpaceNumberCollaborators(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['collaborators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].collaborators.$post(args, options),
  )
}

export async function putOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifier(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['collaborators'][':actor_type'][':actor_identifier']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].collaborators[':actor_type'][
      ':actor_identifier'
    ].$put(args, options),
  )
}

export async function deleteOrgsOrgCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifier(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['collaborators'][':actor_type'][':actor_identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].collaborators[':actor_type'][
      ':actor_identifier'
    ].$delete(args, options),
  )
}

export async function getOrgsOrgCopilotSpacesSpaceNumberResources(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].resources.$get(args, options),
  )
}

export async function postOrgsOrgCopilotSpacesSpaceNumberResources(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].resources.$post(args, options),
  )
}

export async function getOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].resources[':space_resource_id'].$get(
      args,
      options,
    ),
  )
}

export async function putOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].resources[':space_resource_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['copilot-spaces'][':space_number'].resources[':space_resource_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgCopilotBilling(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['billing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot.billing.$get(args, options))
}

export async function getOrgsOrgCopilotBillingSeats(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['billing']['seats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot.billing.seats.$get(args, options))
}

export async function postOrgsOrgCopilotBillingSelectedTeams(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['billing']['selected_teams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.billing.selected_teams.$post(args, options),
  )
}

export async function deleteOrgsOrgCopilotBillingSelectedTeams(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['billing']['selected_teams']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.billing.selected_teams.$delete(args, options),
  )
}

export async function postOrgsOrgCopilotBillingSelectedUsers(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['billing']['selected_users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.billing.selected_users.$post(args, options),
  )
}

export async function deleteOrgsOrgCopilotBillingSelectedUsers(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['billing']['selected_users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.billing.selected_users.$delete(args, options),
  )
}

export async function getOrgsOrgCopilotCodeReviewRunner(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['code-review']['runner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot['code-review'].runner.$get(args, options))
}

export async function putOrgsOrgCopilotCodeReviewRunner(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['code-review']['runner']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot['code-review'].runner.$put(args, options))
}

export async function getOrgsOrgCopilotCodeReviewSettings(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['code-review']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['code-review'].settings.$get(args, options),
  )
}

export async function patchOrgsOrgCopilotCodeReviewSettings(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['code-review']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['code-review'].settings.$patch(args, options),
  )
}

export async function getOrgsOrgCopilotCodingAgentPermissions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.$get(args, options),
  )
}

export async function putOrgsOrgCopilotCodingAgentPermissions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.$put(args, options),
  )
}

export async function getOrgsOrgCopilotCodingAgentPermissionsRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.repositories.$get(args, options),
  )
}

export async function putOrgsOrgCopilotCodingAgentPermissionsRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.repositories.$put(args, options),
  )
}

export async function putOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgCopilotCodingAgentPermissionsRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['coding-agent']['permissions']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot['coding-agent'].permissions.repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgCopilotContentExclusion(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['content_exclusion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot.content_exclusion.$get(args, options))
}

export async function putOrgsOrgCopilotContentExclusion(
  args: InferRequestType<(typeof client.orgs)[':org']['copilot']['content_exclusion']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].copilot.content_exclusion.$put(args, options))
}

export async function getOrgsOrgCopilotMetricsReportsOrganization1Day(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['organization-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['organization-1-day'].$get(args, options),
  )
}

export async function getOrgsOrgCopilotMetricsReportsOrganization28DayLatest(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['organization-28-day']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['organization-28-day'].latest.$get(args, options),
  )
}

export async function getOrgsOrgCopilotMetricsReportsRepos1Day(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['repos-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['repos-1-day'].$get(args, options),
  )
}

export async function getOrgsOrgCopilotMetricsReportsUserTeams1Day(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['user-teams-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['user-teams-1-day'].$get(args, options),
  )
}

export async function getOrgsOrgCopilotMetricsReportsUsers1Day(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['users-1-day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['users-1-day'].$get(args, options),
  )
}

export async function getOrgsOrgCopilotMetricsReportsUsers28DayLatest(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['metrics']['reports']['users-28-day']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.metrics.reports['users-28-day'].latest.$get(args, options),
  )
}

export async function getOrgsOrgCopilotPoliciesCodeReview(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['policies']['code-review']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.policies['code-review'].$get(args, options),
  )
}

export async function putOrgsOrgCopilotPoliciesCodeReview(
  args: InferRequestType<
    (typeof client.orgs)[':org']['copilot']['policies']['code-review']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].copilot.policies['code-review'].$put(args, options),
  )
}

export async function getOrgsOrgDependabotAlerts(
  args: InferRequestType<(typeof client.orgs)[':org']['dependabot']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].dependabot.alerts.$get(args, options))
}

export async function getOrgsOrgDependabotRepositoryAccess(
  args: InferRequestType<(typeof client.orgs)[':org']['dependabot']['repository-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot['repository-access'].$get(args, options),
  )
}

export async function patchOrgsOrgDependabotRepositoryAccess(
  args: InferRequestType<(typeof client.orgs)[':org']['dependabot']['repository-access']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot['repository-access'].$patch(args, options),
  )
}

export async function putOrgsOrgDependabotRepositoryAccessDefaultLevel(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['repository-access']['default-level']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot['repository-access']['default-level'].$put(args, options),
  )
}

export async function getOrgsOrgDependabotSecrets(
  args: InferRequestType<(typeof client.orgs)[':org']['dependabot']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].dependabot.secrets.$get(args, options))
}

export async function getOrgsOrgDependabotSecretsPublicKey(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets['public-key'].$get(args, options),
  )
}

export async function getOrgsOrgDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].$get(args, options),
  )
}

export async function putOrgsOrgDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteOrgsOrgDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getOrgsOrgDependabotSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgDependabotSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['dependabot']['secrets'][':secret_name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].dependabot.secrets[':secret_name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgDockerConflicts(
  args: InferRequestType<(typeof client.orgs)[':org']['docker']['conflicts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].docker.conflicts.$get(args, options))
}

export async function getOrgsOrgEvents(
  args: InferRequestType<(typeof client.orgs)[':org']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].events.$get(args, options))
}

export async function getOrgsOrgFailedInvitations(
  args: InferRequestType<(typeof client.orgs)[':org']['failed_invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].failed_invitations.$get(args, options))
}

export async function getOrgsOrgHooks(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks.$get(args, options))
}

export async function postOrgsOrgHooks(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks.$post(args, options))
}

export async function getOrgsOrgHooksHookId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].$get(args, options))
}

export async function deleteOrgsOrgHooksHookId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].$delete(args, options))
}

export async function patchOrgsOrgHooksHookId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].$patch(args, options))
}

export async function getOrgsOrgHooksHookIdConfig(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].config.$get(args, options))
}

export async function patchOrgsOrgHooksHookIdConfig(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['config']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].config.$patch(args, options))
}

export async function getOrgsOrgHooksHookIdDeliveries(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['deliveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].deliveries.$get(args, options))
}

export async function getOrgsOrgHooksHookIdDeliveriesDeliveryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['hooks'][':hook_id']['deliveries'][':delivery_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].hooks[':hook_id'].deliveries[':delivery_id'].$get(args, options),
  )
}

export async function postOrgsOrgHooksHookIdDeliveriesDeliveryIdAttempts(
  args: InferRequestType<
    (typeof client.orgs)[':org']['hooks'][':hook_id']['deliveries'][':delivery_id']['attempts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].hooks[':hook_id'].deliveries[':delivery_id'].attempts.$post(args, options),
  )
}

export async function postOrgsOrgHooksHookIdPings(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':hook_id']['pings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':hook_id'].pings.$post(args, options))
}

export async function getOrgsOrgInsightsApiRouteStatsActorTypeActorId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['route-stats'][':actor_type'][':actor_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['route-stats'][':actor_type'][':actor_id'].$get(args, options),
  )
}

export async function getOrgsOrgInsightsApiSubjectStats(
  args: InferRequestType<(typeof client.orgs)[':org']['insights']['api']['subject-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].insights.api['subject-stats'].$get(args, options))
}

export async function getOrgsOrgInsightsApiSummaryStats(
  args: InferRequestType<(typeof client.orgs)[':org']['insights']['api']['summary-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].insights.api['summary-stats'].$get(args, options))
}

export async function getOrgsOrgInsightsApiSummaryStatsUsersUserId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['summary-stats']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['summary-stats'].users[':user_id'].$get(args, options),
  )
}

export async function getOrgsOrgInsightsApiSummaryStatsActorTypeActorId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['summary-stats'][':actor_type'][':actor_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['summary-stats'][':actor_type'][':actor_id'].$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgInsightsApiTimeStats(
  args: InferRequestType<(typeof client.orgs)[':org']['insights']['api']['time-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].insights.api['time-stats'].$get(args, options))
}

export async function getOrgsOrgInsightsApiTimeStatsUsersUserId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['time-stats']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['time-stats'].users[':user_id'].$get(args, options),
  )
}

export async function getOrgsOrgInsightsApiTimeStatsActorTypeActorId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['time-stats'][':actor_type'][':actor_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['time-stats'][':actor_type'][':actor_id'].$get(args, options),
  )
}

export async function getOrgsOrgInsightsApiUserStatsUserId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['insights']['api']['user-stats'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].insights.api['user-stats'][':user_id'].$get(args, options),
  )
}

export async function getOrgsOrgInstallation(
  args: InferRequestType<(typeof client.orgs)[':org']['installation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].installation.$get(args, options))
}

export async function getOrgsOrgInstallations(
  args: InferRequestType<(typeof client.orgs)[':org']['installations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].installations.$get(args, options))
}

export async function getOrgsOrgInteractionLimits(
  args: InferRequestType<(typeof client.orgs)[':org']['interaction-limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['interaction-limits'].$get(args, options))
}

export async function putOrgsOrgInteractionLimits(
  args: InferRequestType<(typeof client.orgs)[':org']['interaction-limits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['interaction-limits'].$put(args, options))
}

export async function deleteOrgsOrgInteractionLimits(
  args: InferRequestType<(typeof client.orgs)[':org']['interaction-limits']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['interaction-limits'].$delete(args, options))
}

export async function getOrgsOrgInteractionLimitsPullsCreationCap(
  args: InferRequestType<
    (typeof client.orgs)[':org']['interaction-limits']['pulls']['creation-cap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['interaction-limits'].pulls['creation-cap'].$get(args, options),
  )
}

export async function patchOrgsOrgInteractionLimitsPullsCreationCap(
  args: InferRequestType<
    (typeof client.orgs)[':org']['interaction-limits']['pulls']['creation-cap']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['interaction-limits'].pulls['creation-cap'].$patch(args, options),
  )
}

export async function getOrgsOrgInvitations(
  args: InferRequestType<(typeof client.orgs)[':org']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].invitations.$get(args, options))
}

export async function postOrgsOrgInvitations(
  args: InferRequestType<(typeof client.orgs)[':org']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].invitations.$post(args, options))
}

export async function deleteOrgsOrgInvitationsInvitationId(
  args: InferRequestType<(typeof client.orgs)[':org']['invitations'][':invitation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].invitations[':invitation_id'].$delete(args, options),
  )
}

export async function getOrgsOrgInvitationsInvitationIdTeams(
  args: InferRequestType<
    (typeof client.orgs)[':org']['invitations'][':invitation_id']['teams']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].invitations[':invitation_id'].teams.$get(args, options),
  )
}

export async function getOrgsOrgIssueFields(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['issue-fields'].$get(args, options))
}

export async function postOrgsOrgIssueFields(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['issue-fields'].$post(args, options))
}

export async function deleteOrgsOrgIssueFieldsIssueFieldId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['issue-fields'][':issue_field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['issue-fields'][':issue_field_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgIssueFieldsIssueFieldId(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-fields'][':issue_field_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['issue-fields'][':issue_field_id'].$patch(args, options),
  )
}

export async function getOrgsOrgIssueTypes(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['issue-types'].$get(args, options))
}

export async function postOrgsOrgIssueTypes(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['issue-types'].$post(args, options))
}

export async function putOrgsOrgIssueTypesIssueTypeId(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-types'][':issue_type_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['issue-types'][':issue_type_id'].$put(args, options),
  )
}

export async function deleteOrgsOrgIssueTypesIssueTypeId(
  args: InferRequestType<(typeof client.orgs)[':org']['issue-types'][':issue_type_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['issue-types'][':issue_type_id'].$delete(args, options),
  )
}

export async function getOrgsOrgIssues(
  args: InferRequestType<(typeof client.orgs)[':org']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].issues.$get(args, options))
}

export async function getOrgsOrgMembers(
  args: InferRequestType<(typeof client.orgs)[':org']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members.$get(args, options))
}

export async function getOrgsOrgMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members[':username'].$get(args, options))
}

export async function deleteOrgsOrgMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members[':username'].$delete(args, options))
}

export async function getOrgsOrgMembersUsernameCodespaces(
  args: InferRequestType<
    (typeof client.orgs)[':org']['members'][':username']['codespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].members[':username'].codespaces.$get(args, options),
  )
}

export async function deleteOrgsOrgMembersUsernameCodespacesCodespaceName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['members'][':username']['codespaces'][':codespace_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].members[':username'].codespaces[':codespace_name'].$delete(args, options),
  )
}

export async function postOrgsOrgMembersUsernameCodespacesCodespaceNameStop(
  args: InferRequestType<
    (typeof client.orgs)[':org']['members'][':username']['codespaces'][':codespace_name']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].members[':username'].codespaces[':codespace_name'].stop.$post(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgMembersUsernameCopilot(
  args: InferRequestType<(typeof client.orgs)[':org']['members'][':username']['copilot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members[':username'].copilot.$get(args, options))
}

export async function getOrgsOrgMembershipsUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['memberships'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].memberships[':username'].$get(args, options))
}

export async function putOrgsOrgMembershipsUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['memberships'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].memberships[':username'].$put(args, options))
}

export async function deleteOrgsOrgMembershipsUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['memberships'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].memberships[':username'].$delete(args, options))
}

export async function getOrgsOrgMigrations(
  args: InferRequestType<(typeof client.orgs)[':org']['migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].migrations.$get(args, options))
}

export async function postOrgsOrgMigrations(
  args: InferRequestType<(typeof client.orgs)[':org']['migrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].migrations.$post(args, options))
}

export async function getOrgsOrgMigrationsMigrationId(
  args: InferRequestType<(typeof client.orgs)[':org']['migrations'][':migration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].migrations[':migration_id'].$get(args, options))
}

export async function getOrgsOrgMigrationsMigrationIdArchive(
  args: InferRequestType<
    (typeof client.orgs)[':org']['migrations'][':migration_id']['archive']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].migrations[':migration_id'].archive.$get(args, options),
  )
}

export async function deleteOrgsOrgMigrationsMigrationIdArchive(
  args: InferRequestType<
    (typeof client.orgs)[':org']['migrations'][':migration_id']['archive']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].migrations[':migration_id'].archive.$delete(args, options),
  )
}

export async function deleteOrgsOrgMigrationsMigrationIdReposRepoNameLock(
  args: InferRequestType<
    (typeof client.orgs)[':org']['migrations'][':migration_id']['repos'][':repo_name']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].migrations[':migration_id'].repos[':repo_name'].lock.$delete(args, options),
  )
}

export async function getOrgsOrgMigrationsMigrationIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['migrations'][':migration_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].migrations[':migration_id'].repositories.$get(args, options),
  )
}

export async function getOrgsOrgOrganizationRoles(
  args: InferRequestType<(typeof client.orgs)[':org']['organization-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['organization-roles'].$get(args, options))
}

export async function deleteOrgsOrgOrganizationRolesTeamsTeamSlug(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['teams'][':team_slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].teams[':team_slug'].$delete(args, options),
  )
}

export async function putOrgsOrgOrganizationRolesTeamsTeamSlugRoleId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['teams'][':team_slug'][':role_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].teams[':team_slug'][':role_id'].$put(args, options),
  )
}

export async function deleteOrgsOrgOrganizationRolesTeamsTeamSlugRoleId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['teams'][':team_slug'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].teams[':team_slug'][':role_id'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgOrganizationRolesUsersUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].users[':username'].$delete(args, options),
  )
}

export async function putOrgsOrgOrganizationRolesUsersUsernameRoleId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['users'][':username'][':role_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].users[':username'][':role_id'].$put(args, options),
  )
}

export async function deleteOrgsOrgOrganizationRolesUsersUsernameRoleId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles']['users'][':username'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'].users[':username'][':role_id'].$delete(args, options),
  )
}

export async function getOrgsOrgOrganizationRolesRoleId(
  args: InferRequestType<(typeof client.orgs)[':org']['organization-roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'][':role_id'].$get(args, options),
  )
}

export async function getOrgsOrgOrganizationRolesRoleIdTeams(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles'][':role_id']['teams']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'][':role_id'].teams.$get(args, options),
  )
}

export async function getOrgsOrgOrganizationRolesRoleIdUsers(
  args: InferRequestType<
    (typeof client.orgs)[':org']['organization-roles'][':role_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['organization-roles'][':role_id'].users.$get(args, options),
  )
}

export async function getOrgsOrgOutsideCollaborators(
  args: InferRequestType<(typeof client.orgs)[':org']['outside_collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].outside_collaborators.$get(args, options))
}

export async function putOrgsOrgOutsideCollaboratorsUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['outside_collaborators'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].outside_collaborators[':username'].$put(args, options),
  )
}

export async function deleteOrgsOrgOutsideCollaboratorsUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['outside_collaborators'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].outside_collaborators[':username'].$delete(args, options),
  )
}

export async function getOrgsOrgPackages(
  args: InferRequestType<(typeof client.orgs)[':org']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].packages.$get(args, options))
}

export async function getOrgsOrgPackagesPackageTypePackageName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].$get(args, options),
  )
}

export async function deleteOrgsOrgPackagesPackageTypePackageName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].$delete(args, options),
  )
}

export async function postOrgsOrgPackagesPackageTypePackageNameRestore(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].restore.$post(args, options),
  )
}

export async function getOrgsOrgPackagesPackageTypePackageNameVersions(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].versions.$get(args, options),
  )
}

export async function getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].$get(args, options),
  )
}

export async function deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].$delete(args, options),
  )
}

export async function postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestore(
  args: InferRequestType<
    (typeof client.orgs)[':org']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].restore.$post(args, options),
  )
}

export async function getOrgsOrgPersonalAccessTokenRequests(
  args: InferRequestType<(typeof client.orgs)[':org']['personal-access-token-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-token-requests'].$get(args, options),
  )
}

export async function postOrgsOrgPersonalAccessTokenRequests(
  args: InferRequestType<(typeof client.orgs)[':org']['personal-access-token-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-token-requests'].$post(args, options),
  )
}

export async function postOrgsOrgPersonalAccessTokenRequestsPatRequestId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['personal-access-token-requests'][':pat_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-token-requests'][':pat_request_id'].$post(args, options),
  )
}

export async function getOrgsOrgPersonalAccessTokenRequestsPatRequestIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['personal-access-token-requests'][':pat_request_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-token-requests'][':pat_request_id'].repositories.$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgPersonalAccessTokens(
  args: InferRequestType<(typeof client.orgs)[':org']['personal-access-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['personal-access-tokens'].$get(args, options))
}

export async function postOrgsOrgPersonalAccessTokens(
  args: InferRequestType<(typeof client.orgs)[':org']['personal-access-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['personal-access-tokens'].$post(args, options))
}

export async function postOrgsOrgPersonalAccessTokensPatId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['personal-access-tokens'][':pat_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-tokens'][':pat_id'].$post(args, options),
  )
}

export async function getOrgsOrgPersonalAccessTokensPatIdRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['personal-access-tokens'][':pat_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['personal-access-tokens'][':pat_id'].repositories.$get(args, options),
  )
}

export async function getOrgsOrgPrivateRegistries(
  args: InferRequestType<(typeof client.orgs)[':org']['private-registries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['private-registries'].$get(args, options))
}

export async function postOrgsOrgPrivateRegistries(
  args: InferRequestType<(typeof client.orgs)[':org']['private-registries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['private-registries'].$post(args, options))
}

export async function getOrgsOrgPrivateRegistriesPublicKey(
  args: InferRequestType<(typeof client.orgs)[':org']['private-registries']['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['private-registries']['public-key'].$get(args, options),
  )
}

export async function getOrgsOrgPrivateRegistriesSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['private-registries'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['private-registries'][':secret_name'].$get(args, options),
  )
}

export async function deleteOrgsOrgPrivateRegistriesSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['private-registries'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['private-registries'][':secret_name'].$delete(args, options),
  )
}

export async function patchOrgsOrgPrivateRegistriesSecretName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['private-registries'][':secret_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['private-registries'][':secret_name'].$patch(args, options),
  )
}

export async function getOrgsOrgProjectsV2(
  args: InferRequestType<(typeof client.orgs)[':org']['projectsV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projectsV2.$get(args, options))
}

export async function getOrgsOrgProjectsV2ProjectNumber(
  args: InferRequestType<(typeof client.orgs)[':org']['projectsV2'][':project_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projectsV2[':project_number'].$get(args, options))
}

export async function postOrgsOrgProjectsV2ProjectNumberDrafts(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['drafts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].drafts.$post(args, options),
  )
}

export async function getOrgsOrgProjectsV2ProjectNumberFields(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].fields.$get(args, options),
  )
}

export async function postOrgsOrgProjectsV2ProjectNumberFields(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].fields.$post(args, options),
  )
}

export async function getOrgsOrgProjectsV2ProjectNumberFieldsFieldId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['fields'][':field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].fields[':field_id'].$get(args, options),
  )
}

export async function getOrgsOrgProjectsV2ProjectNumberItems(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].items.$get(args, options),
  )
}

export async function postOrgsOrgProjectsV2ProjectNumberItems(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].items.$post(args, options),
  )
}

export async function getOrgsOrgProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['items'][':item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].items[':item_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['items'][':item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].items[':item_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['items'][':item_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].items[':item_id'].$patch(args, options),
  )
}

export async function postOrgsOrgProjectsV2ProjectNumberViews(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['views']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].views.$post(args, options),
  )
}

export async function getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItems(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projectsV2'][':project_number']['views'][':view_number']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projectsV2[':project_number'].views[':view_number'].items.$get(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgPropertiesInstallations(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['installations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.installations.$get(args, options))
}

export async function postOrgsOrgPropertiesInstallations(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['installations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.installations.$post(args, options))
}

export async function getOrgsOrgPropertiesInstallationsSchema(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['installations']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.installations.schema.$get(args, options),
  )
}

export async function patchOrgsOrgPropertiesInstallationsValues(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['installations']['values']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.installations.values.$patch(args, options),
  )
}

export async function deleteOrgsOrgPropertiesInstallationsValuesPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['installations']['values'][':property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.installations.values[':property_name'].$delete(args, options),
  )
}

export async function patchOrgsOrgPropertiesInstallationsValuesPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['installations']['values'][':property_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.installations.values[':property_name'].$patch(args, options),
  )
}

export async function getOrgsOrgPropertiesSchema(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.schema.$get(args, options))
}

export async function patchOrgsOrgPropertiesSchema(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['schema']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.schema.$patch(args, options))
}

export async function getOrgsOrgPropertiesSchemaCustomPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['schema'][':custom_property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.schema[':custom_property_name'].$get(args, options),
  )
}

export async function putOrgsOrgPropertiesSchemaCustomPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['schema'][':custom_property_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.schema[':custom_property_name'].$put(args, options),
  )
}

export async function deleteOrgsOrgPropertiesSchemaCustomPropertyName(
  args: InferRequestType<
    (typeof client.orgs)[':org']['properties']['schema'][':custom_property_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].properties.schema[':custom_property_name'].$delete(args, options),
  )
}

export async function getOrgsOrgPropertiesValues(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.values.$get(args, options))
}

export async function patchOrgsOrgPropertiesValues(
  args: InferRequestType<(typeof client.orgs)[':org']['properties']['values']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].properties.values.$patch(args, options))
}

export async function getOrgsOrgPublicMembers(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members.$get(args, options))
}

export async function getOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$get(args, options))
}

export async function putOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$put(args, options))
}

export async function deleteOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$delete(args, options))
}

export async function getOrgsOrgRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].repos.$get(args, options))
}

export async function postOrgsOrgRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].repos.$post(args, options))
}

export async function getOrgsOrgRulesets(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets.$get(args, options))
}

export async function postOrgsOrgRulesets(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets.$post(args, options))
}

export async function getOrgsOrgRulesetsRuleSuites(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets']['rule-suites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets['rule-suites'].$get(args, options))
}

export async function getOrgsOrgRulesetsRuleSuitesRuleSuiteId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['rulesets']['rule-suites'][':rule_suite_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].rulesets['rule-suites'][':rule_suite_id'].$get(args, options),
  )
}

export async function getOrgsOrgRulesetsRulesetId(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets'][':ruleset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets[':ruleset_id'].$get(args, options))
}

export async function putOrgsOrgRulesetsRulesetId(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets'][':ruleset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets[':ruleset_id'].$put(args, options))
}

export async function deleteOrgsOrgRulesetsRulesetId(
  args: InferRequestType<(typeof client.orgs)[':org']['rulesets'][':ruleset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rulesets[':ruleset_id'].$delete(args, options))
}

export async function getOrgsOrgRulesetsRulesetIdHistory(
  args: InferRequestType<
    (typeof client.orgs)[':org']['rulesets'][':ruleset_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].rulesets[':ruleset_id'].history.$get(args, options),
  )
}

export async function getOrgsOrgRulesetsRulesetIdHistoryVersionId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['rulesets'][':ruleset_id']['history'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].rulesets[':ruleset_id'].history[':version_id'].$get(args, options),
  )
}

export async function getOrgsOrgSecretScanningAlerts(
  args: InferRequestType<(typeof client.orgs)[':org']['secret-scanning']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['secret-scanning'].alerts.$get(args, options))
}

export async function getOrgsOrgSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['custom-patterns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['custom-patterns'].$get(args, options),
  )
}

export async function postOrgsOrgSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['custom-patterns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['custom-patterns'].$post(args, options),
  )
}

export async function deleteOrgsOrgSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['custom-patterns']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['custom-patterns'].$delete(args, options),
  )
}

export async function patchOrgsOrgSecretScanningCustomPatternsPatternId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['custom-patterns'][':pattern_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['custom-patterns'][':pattern_id'].$patch(args, options),
  )
}

export async function getOrgsOrgSecretScanningPatternConfigurations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['pattern-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['pattern-configurations'].$get(args, options),
  )
}

export async function patchOrgsOrgSecretScanningPatternConfigurations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['secret-scanning']['pattern-configurations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['secret-scanning']['pattern-configurations'].$patch(args, options),
  )
}

export async function getOrgsOrgSecurityAdvisories(
  args: InferRequestType<(typeof client.orgs)[':org']['security-advisories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['security-advisories'].$get(args, options))
}

export async function getOrgsOrgSecurityManagers(
  args: InferRequestType<(typeof client.orgs)[':org']['security-managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org']['security-managers'].$get(args, options))
}

export async function putOrgsOrgSecurityManagersTeamsTeamSlug(
  args: InferRequestType<
    (typeof client.orgs)[':org']['security-managers']['teams'][':team_slug']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['security-managers'].teams[':team_slug'].$put(args, options),
  )
}

export async function deleteOrgsOrgSecurityManagersTeamsTeamSlug(
  args: InferRequestType<
    (typeof client.orgs)[':org']['security-managers']['teams'][':team_slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org']['security-managers'].teams[':team_slug'].$delete(args, options),
  )
}

export async function getOrgsOrgSettingsImmutableReleases(
  args: InferRequestType<(typeof client.orgs)[':org']['settings']['immutable-releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].settings['immutable-releases'].$get(args, options))
}

export async function putOrgsOrgSettingsImmutableReleases(
  args: InferRequestType<(typeof client.orgs)[':org']['settings']['immutable-releases']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].settings['immutable-releases'].$put(args, options))
}

export async function getOrgsOrgSettingsImmutableReleasesRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['immutable-releases']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['immutable-releases'].repositories.$get(args, options),
  )
}

export async function putOrgsOrgSettingsImmutableReleasesRepositories(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['immutable-releases']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['immutable-releases'].repositories.$put(args, options),
  )
}

export async function putOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['immutable-releases']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['immutable-releases'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgSettingsImmutableReleasesRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['immutable-releases']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['immutable-releases'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgSettingsNetworkConfigurations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-configurations'].$get(args, options),
  )
}

export async function postOrgsOrgSettingsNetworkConfigurations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-configurations'].$post(args, options),
  )
}

export async function getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-configurations'][':network_configuration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-configurations'][':network_configuration_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-configurations'][':network_configuration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-configurations'][':network_configuration_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-configurations'][':network_configuration_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-configurations'][':network_configuration_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getOrgsOrgSettingsNetworkSettingsNetworkSettingsId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['settings']['network-settings'][':network_settings_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].settings['network-settings'][':network_settings_id'].$get(args, options),
  )
}

export async function getOrgsOrgTeams(
  args: InferRequestType<(typeof client.orgs)[':org']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams.$get(args, options))
}

export async function postOrgsOrgTeams(
  args: InferRequestType<(typeof client.orgs)[':org']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams.$post(args, options))
}

export async function getOrgsOrgTeamsTeamSlug(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].$get(args, options))
}

export async function deleteOrgsOrgTeamsTeamSlug(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].$delete(args, options))
}

export async function patchOrgsOrgTeamsTeamSlug(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].$patch(args, options))
}

export async function getOrgsOrgTeamsTeamSlugCopilotCustomizations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['copilot']['customizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].copilot.customizations.$get(args, options),
  )
}

export async function putOrgsOrgTeamsTeamSlugCopilotCustomizations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['copilot']['customizations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].copilot.customizations.$put(args, options),
  )
}

export async function deleteOrgsOrgTeamsTeamSlugCopilotCustomizations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['copilot']['customizations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].copilot.customizations.$delete(args, options),
  )
}

export async function getOrgsOrgTeamsTeamSlugInvitations(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].invitations.$get(args, options),
  )
}

export async function getOrgsOrgTeamsTeamSlugMembers(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].members.$get(args, options))
}

export async function getOrgsOrgTeamsTeamSlugMembershipsUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['memberships'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].memberships[':username'].$get(args, options),
  )
}

export async function putOrgsOrgTeamsTeamSlugMembershipsUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['memberships'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].memberships[':username'].$put(args, options),
  )
}

export async function deleteOrgsOrgTeamsTeamSlugMembershipsUsername(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['memberships'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].memberships[':username'].$delete(args, options),
  )
}

export async function getOrgsOrgTeamsTeamSlugRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].repos.$get(args, options))
}

export async function getOrgsOrgTeamsTeamSlugReposOwnerRepo(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['repos'][':owner'][':repo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].repos[':owner'][':repo'].$get(args, options),
  )
}

export async function putOrgsOrgTeamsTeamSlugReposOwnerRepo(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['repos'][':owner'][':repo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].repos[':owner'][':repo'].$put(args, options),
  )
}

export async function deleteOrgsOrgTeamsTeamSlugReposOwnerRepo(
  args: InferRequestType<
    (typeof client.orgs)[':org']['teams'][':team_slug']['repos'][':owner'][':repo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].teams[':team_slug'].repos[':owner'][':repo'].$delete(args, options),
  )
}

export async function getOrgsOrgTeamsTeamSlugTeams(
  args: InferRequestType<(typeof client.orgs)[':org']['teams'][':team_slug']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams[':team_slug'].teams.$get(args, options))
}

export async function postOrgsOrgSecurityProductEnablement(
  args: InferRequestType<(typeof client.orgs)[':org'][':security_product'][':enablement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'][':security_product'][':enablement'].$post(args, options),
  )
}

export async function getRateLimit(options?: ClientRequestOptions) {
  return await parseResponse(client.rate_limit.$get(undefined, options))
}

export async function getReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$get(args, options))
}

export async function deleteReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$delete(args, options))
}

export async function patchReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$patch(args, options))
}

export async function getReposOwnerRepoActionsArtifacts(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.artifacts.$get(args, options))
}

export async function getReposOwnerRepoActionsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormat(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id'][':archive_format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'][':archive_format'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['cache']['retention-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.cache['retention-limit'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsCacheRetentionLimit(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['cache']['retention-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.cache['retention-limit'].$put(args, options),
  )
}

export async function getReposOwnerRepoActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['cache']['storage-limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.cache['storage-limit'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsCacheStorageLimit(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['cache']['storage-limit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.cache['storage-limit'].$put(args, options),
  )
}

export async function getReposOwnerRepoActionsCacheUsage(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['cache']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.cache.usage.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsCaches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['caches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.caches.$get(args, options))
}

export async function deleteReposOwnerRepoActionsCaches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['caches']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.caches.$delete(args, options))
}

export async function deleteReposOwnerRepoActionsCachesCacheId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['caches'][':cache_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.caches[':cache_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsConcurrencyGroups(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['concurrency_groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.concurrency_groups.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['concurrency_groups'][':concurrency_group_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.concurrency_groups[':concurrency_group_name'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsJobsJobId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsJobsJobIdLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].logs.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsJobsJobIdRerun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].rerun.$post(args, options),
  )
}

export async function getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['steps'][':step_number']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].steps[':step_number'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsOidcCustomizationSub(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['oidc']['customization']['sub']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.oidc.customization.sub.$get(args, options),
  )
}

export async function putReposOwnerRepoActionsOidcCustomizationSub(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['oidc']['customization']['sub']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.oidc.customization.sub.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsOrganizationSecrets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['organization-secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions['organization-secrets'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsOrganizationVariables(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['organization-variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions['organization-variables'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsPermissions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.$get(args, options),
  )
}

export async function putReposOwnerRepoActionsPermissions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsPermissionsAccess(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['access']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.access.$get(args, options),
  )
}

export async function putReposOwnerRepoActionsPermissionsAccess(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.access.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsPermissionsArtifactAndLogRetention(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['artifact-and-log-retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['artifact-and-log-retention'].$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoActionsPermissionsArtifactAndLogRetention(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['artifact-and-log-retention']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['artifact-and-log-retention'].$put(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsPermissionsForkPrContributorApproval(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['fork-pr-contributor-approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['fork-pr-contributor-approval'].$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoActionsPermissionsForkPrContributorApproval(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['fork-pr-contributor-approval']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['fork-pr-contributor-approval'].$put(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateRepos(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['fork-pr-workflows-private-repos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['fork-pr-workflows-private-repos'].$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateRepos(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['fork-pr-workflows-private-repos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['fork-pr-workflows-private-repos'].$put(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsPermissionsSelectedActions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['selected-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['selected-actions'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsPermissionsSelectedActions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['selected-actions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions['selected-actions'].$put(args, options),
  )
}

export async function getReposOwnerRepoActionsPermissionsWorkflow(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.workflow.$get(args, options),
  )
}

export async function putReposOwnerRepoActionsPermissionsWorkflow(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['permissions']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.permissions.workflow.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsPolicies(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.policies.$get(args, options))
}

export async function postReposOwnerRepoActionsPolicies(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.policies.$post(args, options))
}

export async function getReposOwnerRepoActionsPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['policies'][':policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.policies[':policy_id'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['policies'][':policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.policies[':policy_id'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoActionsPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['policies'][':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.policies[':policy_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsRunners(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.runners.$get(args, options))
}

export async function getReposOwnerRepoActionsRunnersDeprecationsVersion(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['deprecations'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners.deprecations[':version'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunnersDownloads(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['downloads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners.downloads.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunnersGenerateJitconfig(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['generate-jitconfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners['generate-jitconfig'].$post(args, options),
  )
}

export async function postReposOwnerRepoActionsRunnersRegistrationToken(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['registration-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners['registration-token'].$post(args, options),
  )
}

export async function postReposOwnerRepoActionsRunnersRemoveToken(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['remove-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners['remove-token'].$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].labels.$get(args, options),
  )
}

export async function putReposOwnerRepoActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].labels.$put(args, options),
  )
}

export async function postReposOwnerRepoActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].labels.$post(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunnersRunnerIdLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].labels.$delete(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunnersRunnerIdLabelsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['labels'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].labels[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsRuns(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.runs.$get(args, options))
}

export async function getReposOwnerRepoActionsRunsRunId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunsRunId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdApprovals(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['approvals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].approvals.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdApprove(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].approve.$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdArtifacts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].artifacts.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['attempts'][':attempt_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].attempts[':attempt_number'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['attempts'][':attempt_number']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].attempts[':attempt_number'].jobs.$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['attempts'][':attempt_number']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].attempts[':attempt_number'].logs.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdCancel(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].cancel.$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdConcurrencyGroups(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['concurrency_groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].concurrency_groups.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRule(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['deployment_protection_rule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].deployment_protection_rule.$post(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdForceCancel(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['force-cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id']['force-cancel'].$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].jobs.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].logs.$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunsRunIdLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['logs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].logs.$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdPendingDeployments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['pending_deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].pending_deployments.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdPendingDeployments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['pending_deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].pending_deployments.$post(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdRerun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].rerun.$post(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunIdRerunFailedJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['rerun-failed-jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id']['rerun-failed-jobs'].$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoActionsRunsRunIdTiming(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run_id']['timing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run_id'].timing.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsSecrets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.secrets.$get(args, options))
}

export async function getReposOwnerRepoActionsSecretsPublicKey(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets['public-key'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets[':secret_name'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoActionsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsVariables(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.variables.$get(args, options))
}

export async function postReposOwnerRepoActionsVariables(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.variables.$post(args, options))
}

export async function getReposOwnerRepoActionsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':name'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':name'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoActionsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':name'].$patch(args, options),
  )
}

export async function getReposOwnerRepoActionsWorkflows(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.workflows.$get(args, options))
}

export async function getReposOwnerRepoActionsWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsWorkflowsWorkflowIdDisable(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['disable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].disable.$put(args, options),
  )
}

export async function postReposOwnerRepoActionsWorkflowsWorkflowIdDispatches(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['dispatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].dispatches.$post(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoActionsWorkflowsWorkflowIdEnable(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['enable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].enable.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsWorkflowsWorkflowIdRuns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].runs.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsWorkflowsWorkflowIdTiming(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['timing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].timing.$get(args, options),
  )
}

export async function getReposOwnerRepoActivity(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].activity.$get(args, options))
}

export async function getReposOwnerRepoAgentsOrganizationSecrets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['organization-secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents['organization-secrets'].$get(args, options),
  )
}

export async function getReposOwnerRepoAgentsOrganizationVariables(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['organization-variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents['organization-variables'].$get(args, options),
  )
}

export async function getReposOwnerRepoAgentsSecrets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['agents']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].agents.secrets.$get(args, options))
}

export async function getReposOwnerRepoAgentsSecretsPublicKey(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.secrets['public-key'].$get(args, options),
  )
}

export async function getReposOwnerRepoAgentsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.secrets[':secret_name'].$get(args, options),
  )
}

export async function putReposOwnerRepoAgentsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoAgentsSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoAgentsVariables(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['agents']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].agents.variables.$get(args, options))
}

export async function postReposOwnerRepoAgentsVariables(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['agents']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].agents.variables.$post(args, options))
}

export async function getReposOwnerRepoAgentsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['variables'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.variables[':name'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoAgentsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['variables'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.variables[':name'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoAgentsVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['agents']['variables'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].agents.variables[':name'].$patch(args, options),
  )
}

export async function getReposOwnerRepoAssignees(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['assignees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].assignees.$get(args, options))
}

export async function getReposOwnerRepoAssigneesAssignee(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['assignees'][':assignee']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].assignees[':assignee'].$get(args, options),
  )
}

export async function postReposOwnerRepoAttestations(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['attestations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].attestations.$post(args, options))
}

export async function getReposOwnerRepoAttestationsSubjectDigest(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['attestations'][':subject_digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].attestations[':subject_digest'].$get(args, options),
  )
}

export async function getReposOwnerRepoAutolinks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['autolinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].autolinks.$get(args, options))
}

export async function postReposOwnerRepoAutolinks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['autolinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].autolinks.$post(args, options))
}

export async function getReposOwnerRepoAutolinksAutolinkId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['autolinks'][':autolink_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].autolinks[':autolink_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoAutolinksAutolinkId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['autolinks'][':autolink_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].autolinks[':autolink_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoAutomatedSecurityFixes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['automated-security-fixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['automated-security-fixes'].$get(args, options),
  )
}

export async function putReposOwnerRepoAutomatedSecurityFixes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['automated-security-fixes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['automated-security-fixes'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoAutomatedSecurityFixes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['automated-security-fixes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['automated-security-fixes'].$delete(args, options),
  )
}

export async function getReposOwnerRepoBranches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].branches.$get(args, options))
}

export async function getReposOwnerRepoBranchesBranch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches'][':branch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].$get(args, options),
  )
}

export async function getReposOwnerRepoBranchesBranchProtection(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.$get(args, options),
  )
}

export async function putReposOwnerRepoBranchesBranchProtection(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.$put(args, options),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtection(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.$delete(args, options),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionEnforceAdmins(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['enforce_admins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.enforce_admins.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionEnforceAdmins(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['enforce_admins']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.enforce_admins.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionEnforceAdmins(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['enforce_admins']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.enforce_admins.$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_pull_request_reviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_pull_request_reviews.$get(args, options),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_pull_request_reviews']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_pull_request_reviews.$delete(args, options),
  )
}

export async function patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_pull_request_reviews']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_pull_request_reviews.$patch(args, options),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRequiredSignatures(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_signatures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_signatures.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionRequiredSignatures(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_signatures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_signatures.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRequiredSignatures(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_signatures']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_signatures.$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_status_checks.$get(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_status_checks.$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.required_status_checks.$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContexts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['contexts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_status_checks.contexts.$get(args, options),
  )
}

export async function putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContexts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['contexts']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_status_checks.contexts.$put(args, options),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContexts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['contexts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_status_checks.contexts.$post(args, options),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContexts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['required_status_checks']['contexts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[
      ':branch'
    ].protection.required_status_checks.contexts.$delete(args, options),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRestrictions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.$get(args, options),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRestrictions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRestrictionsApps(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.apps.$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoBranchesBranchProtectionRestrictionsApps(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['apps']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.apps.$put(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionRestrictionsApps(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['apps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.apps.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRestrictionsApps(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['apps']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.apps.$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRestrictionsTeams(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['teams']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.teams.$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoBranchesBranchProtectionRestrictionsTeams(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.teams.$put(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionRestrictionsTeams(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['teams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.teams.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRestrictionsTeams(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['teams']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.teams.$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoBranchesBranchProtectionRestrictionsUsers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.users.$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoBranchesBranchProtectionRestrictionsUsers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.users.$put(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchProtectionRestrictionsUsers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.users.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoBranchesBranchProtectionRestrictionsUsers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['protection']['restrictions']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].protection.restrictions.users.$delete(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoBranchesBranchRename(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['rename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].rename.$post(args, options),
  )
}

export async function postReposOwnerRepoCheckRuns(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['check-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['check-runs'].$post(args, options))
}

export async function getReposOwnerRepoCheckRunsCheckRunId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-runs'][':check_run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-runs'][':check_run_id'].$get(args, options),
  )
}

export async function patchReposOwnerRepoCheckRunsCheckRunId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-runs'][':check_run_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-runs'][':check_run_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoCheckRunsCheckRunIdAnnotations(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-runs'][':check_run_id']['annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-runs'][':check_run_id'].annotations.$get(args, options),
  )
}

export async function postReposOwnerRepoCheckRunsCheckRunIdRerequest(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-runs'][':check_run_id']['rerequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-runs'][':check_run_id'].rerequest.$post(args, options),
  )
}

export async function postReposOwnerRepoCheckSuites(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['check-suites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['check-suites'].$post(args, options))
}

export async function patchReposOwnerRepoCheckSuitesPreferences(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-suites']['preferences']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-suites'].preferences.$patch(args, options),
  )
}

export async function getReposOwnerRepoCheckSuitesCheckSuiteId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-suites'][':check_suite_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-suites'][':check_suite_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRuns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-suites'][':check_suite_id']['check-runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-suites'][':check_suite_id']['check-runs'].$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoCheckSuitesCheckSuiteIdRerequest(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['check-suites'][':check_suite_id']['rerequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['check-suites'][':check_suite_id'].rerequest.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCodeQualityFindings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-quality']['findings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-quality'].findings.$get(args, options),
  )
}

export async function getReposOwnerRepoCodeQualityFindingsFindingNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-quality']['findings'][':finding_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-quality'].findings[':finding_number'].$get(args, options),
  )
}

export async function getReposOwnerRepoCodeQualitySetup(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['code-quality']['setup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-quality'].setup.$get(args, options),
  )
}

export async function patchReposOwnerRepoCodeQualitySetup(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-quality']['setup']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-quality'].setup.$patch(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningAiScan(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['ai-scan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning']['ai-scan'].$get(args, options),
  )
}

export async function patchReposOwnerRepoCodeScanningAiScan(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['ai-scan']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning']['ai-scan'].$patch(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningAlerts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts.$get(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].$get(args, options),
  )
}

export async function patchReposOwnerRepoCodeScanningAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].$patch(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningAlertsAlertNumberAutofix(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['autofix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].autofix.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoCodeScanningAlertsAlertNumberAutofix(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['autofix']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].autofix.$post(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommits(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['autofix']['commits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].autofix.commits.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCodeScanningAlertsAlertNumberInstances(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['alerts'][':alert_number']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].alerts[':alert_number'].instances.$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCodeScanningAnalyses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['analyses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].analyses.$get(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['analyses'][':analysis_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].analyses[':analysis_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoCodeScanningAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['analyses'][':analysis_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].analyses[':analysis_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCodeScanningCodeqlDatabases(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql.databases.$get(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningCodeqlDatabasesLanguage(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['databases'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql.databases[':language'].$get(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguage(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['databases'][':language']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql.databases[':language'].$delete(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoCodeScanningCodeqlVariantAnalyses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['variant-analyses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql['variant-analyses'].$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['variant-analyses'][':codeql_variant_analysis_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql['variant-analyses'][
      ':codeql_variant_analysis_id'
    ].$get(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['codeql']['variant-analyses'][':codeql_variant_analysis_id']['repos'][':repo_owner'][':repo_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].codeql['variant-analyses'][
      ':codeql_variant_analysis_id'
    ].repos[':repo_owner'][':repo_name'].$get(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningDefaultSetup(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['default-setup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning']['default-setup'].$get(args, options),
  )
}

export async function patchReposOwnerRepoCodeScanningDefaultSetup(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['default-setup']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning']['default-setup'].$patch(args, options),
  )
}

export async function postReposOwnerRepoCodeScanningSarifs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['sarifs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].sarifs.$post(args, options),
  )
}

export async function getReposOwnerRepoCodeScanningSarifsSarifId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-scanning']['sarifs'][':sarif_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-scanning'].sarifs[':sarif_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoCodeSecurityConfiguration(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['code-security-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['code-security-configuration'].$get(args, options),
  )
}

export async function getReposOwnerRepoCodeownersErrors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['codeowners']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].codeowners.errors.$get(args, options))
}

export async function getReposOwnerRepoCodespaces(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['codespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].codespaces.$get(args, options))
}

export async function postReposOwnerRepoCodespaces(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['codespaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].codespaces.$post(args, options))
}

export async function getReposOwnerRepoCodespacesDevcontainers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['devcontainers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.devcontainers.$get(args, options),
  )
}

export async function getReposOwnerRepoCodespacesMachines(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['machines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.machines.$get(args, options),
  )
}

export async function getReposOwnerRepoCodespacesNew(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['codespaces']['new']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].codespaces.new.$get(args, options))
}

export async function getReposOwnerRepoCodespacesPermissionsCheck(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['permissions_check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.permissions_check.$get(args, options),
  )
}

export async function getReposOwnerRepoCodespacesSecrets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['codespaces']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].codespaces.secrets.$get(args, options))
}

export async function getReposOwnerRepoCodespacesSecretsPublicKey(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.secrets['public-key'].$get(args, options),
  )
}

export async function getReposOwnerRepoCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.secrets[':secret_name'].$get(args, options),
  )
}

export async function putReposOwnerRepoCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoCodespacesSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['codespaces']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].codespaces.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoCollaborators(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].collaborators.$get(args, options))
}

export async function getReposOwnerRepoCollaboratorsUsername(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':username'].$get(args, options),
  )
}

export async function putReposOwnerRepoCollaboratorsUsername(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':username'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoCollaboratorsUsername(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':username'].$delete(args, options),
  )
}

export async function getReposOwnerRepoCollaboratorsUsernamePermission(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':username']['permission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':username'].permission.$get(args, options),
  )
}

export async function getReposOwnerRepoComments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].comments.$get(args, options))
}

export async function getReposOwnerRepoCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoCommentsCommentIdReactionsReactionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['comments'][':comment_id']['reactions'][':reaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].comments[':comment_id'].reactions[':reaction_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCommits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].commits.$get(args, options))
}

export async function getReposOwnerRepoCommitsCommitShaBranchesWhereHead(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':commit_sha']['branches-where-head']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':commit_sha']['branches-where-head'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoCommitsCommitShaComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':commit_sha']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':commit_sha'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoCommitsCommitShaComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':commit_sha']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':commit_sha'].comments.$post(args, options),
  )
}

export async function getReposOwnerRepoCommitsCommitShaPulls(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':commit_sha']['pulls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':commit_sha'].pulls.$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['commits'][':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].commits[':ref'].$get(args, options))
}

export async function getReposOwnerRepoCommitsRefCheckRuns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['check-runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref']['check-runs'].$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsRefCheckSuites(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['check-suites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref']['check-suites'].$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsRefStatus(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref'].status.$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsRefStatuses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref'].statuses.$get(args, options),
  )
}

export async function getReposOwnerRepoCommunityProfile(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['community']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].community.profile.$get(args, options))
}

export async function getReposOwnerRepoCompareBasehead(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['compare'][':basehead']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].compare[':basehead'].$get(args, options),
  )
}

export async function getReposOwnerRepoContentsPath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].contents[':path'].$get(args, options))
}

export async function putReposOwnerRepoContentsPath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents'][':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].contents[':path'].$put(args, options))
}

export async function deleteReposOwnerRepoContentsPath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].contents[':path'].$delete(args, options),
  )
}

export async function getReposOwnerRepoContributors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contributors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].contributors.$get(args, options))
}

export async function getReposOwnerRepoCopilotCloudAgentConfiguration(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['copilot']['cloud-agent']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].copilot['cloud-agent'].configuration.$get(args, options),
  )
}

export async function getReposOwnerRepoCopilotCodeReviewSettings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['copilot']['code-review']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].copilot['code-review'].settings.$get(args, options),
  )
}

export async function patchReposOwnerRepoCopilotCodeReviewSettings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['copilot']['code-review']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].copilot['code-review'].settings.$patch(args, options),
  )
}

export async function getReposOwnerRepoDependabotAlerts(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['dependabot']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].dependabot.alerts.$get(args, options))
}

export async function getReposOwnerRepoDependabotAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['alerts'][':alert_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.alerts[':alert_number'].$get(args, options),
  )
}

export async function patchReposOwnerRepoDependabotAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['alerts'][':alert_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.alerts[':alert_number'].$patch(args, options),
  )
}

export async function getReposOwnerRepoDependabotRunnerSettings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['runner-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot['runner-settings'].$get(args, options),
  )
}

export async function putReposOwnerRepoDependabotRunnerSettings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['runner-settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot['runner-settings'].$put(args, options),
  )
}

export async function getReposOwnerRepoDependabotSecrets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['dependabot']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].dependabot.secrets.$get(args, options))
}

export async function getReposOwnerRepoDependabotSecretsPublicKey(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.secrets['public-key'].$get(args, options),
  )
}

export async function getReposOwnerRepoDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.secrets[':secret_name'].$get(args, options),
  )
}

export async function putReposOwnerRepoDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.secrets[':secret_name'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoDependabotSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependabot']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].dependabot.secrets[':secret_name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoDependencyGraphCompareBasehead(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependency-graph']['compare'][':basehead']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['dependency-graph'].compare[':basehead'].$get(args, options),
  )
}

export async function getReposOwnerRepoDependencyGraphSbom(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependency-graph']['sbom']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['dependency-graph'].sbom.$get(args, options),
  )
}

export async function getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuid(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependency-graph']['sbom']['fetch-report'][':sbom_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['dependency-graph'].sbom['fetch-report'][':sbom_uuid'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoDependencyGraphSbomGenerateReport(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependency-graph']['sbom']['generate-report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['dependency-graph'].sbom['generate-report'].$get(args, options),
  )
}

export async function postReposOwnerRepoDependencyGraphSnapshots(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['dependency-graph']['snapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['dependency-graph'].snapshots.$post(args, options),
  )
}

export async function getReposOwnerRepoDeployments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].deployments.$get(args, options))
}

export async function postReposOwnerRepoDeployments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].deployments.$post(args, options))
}

export async function getReposOwnerRepoDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].deployments[':deployment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['deployments'][':deployment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].deployments[':deployment_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoDeploymentsDeploymentIdStatuses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['deployments'][':deployment_id']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].deployments[':deployment_id'].statuses.$get(args, options),
  )
}

export async function postReposOwnerRepoDeploymentsDeploymentIdStatuses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['deployments'][':deployment_id']['statuses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].deployments[':deployment_id'].statuses.$post(args, options),
  )
}

export async function getReposOwnerRepoDeploymentsDeploymentIdStatusesStatusId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['deployments'][':deployment_id']['statuses'][':status_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].deployments[':deployment_id'].statuses[':status_id'].$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoDispatches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['dispatches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].dispatches.$post(args, options))
}

export async function getReposOwnerRepoEnvironments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].environments.$get(args, options))
}

export async function getReposOwnerRepoEnvironmentsEnvironmentName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].$get(args, options),
  )
}

export async function putReposOwnerRepoEnvironmentsEnvironmentName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoEnvironmentsEnvironmentName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPolicies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment-branch-policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'][
      'deployment-branch-policies'
    ].$get(args, options),
  )
}

export async function postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPolicies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment-branch-policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'][
      'deployment-branch-policies'
    ].$post(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment-branch-policies'][':branch_policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name']['deployment-branch-policies'][
      ':branch_policy_id'
    ].$get(args, options),
  )
}

export async function putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment-branch-policies'][':branch_policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name']['deployment-branch-policies'][
      ':branch_policy_id'
    ].$put(args, options),
  )
}

export async function deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment-branch-policies'][':branch_policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name']['deployment-branch-policies'][
      ':branch_policy_id'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRules(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment_protection_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[
      ':environment_name'
    ].deployment_protection_rules.$get(args, options),
  )
}

export async function postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRules(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment_protection_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[
      ':environment_name'
    ].deployment_protection_rules.$post(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesApps(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment_protection_rules']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[
      ':environment_name'
    ].deployment_protection_rules.apps.$get(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment_protection_rules'][':protection_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].deployment_protection_rules[
      ':protection_rule_id'
    ].$get(args, options),
  )
}

export async function deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['deployment_protection_rules'][':protection_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].deployment_protection_rules[
      ':protection_rule_id'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameSecrets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].secrets.$get(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKey(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['secrets']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].secrets['public-key'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['secrets'][':secret_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].secrets[':secret_name'].$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['secrets'][':secret_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].secrets[':secret_name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['secrets'][':secret_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].secrets[
      ':secret_name'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameVariables(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].variables.$get(args, options),
  )
}

export async function postReposOwnerRepoEnvironmentsEnvironmentNameVariables(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['variables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].variables.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoEnvironmentsEnvironmentNameVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['variables'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].variables[':name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['variables'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].variables[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['environments'][':environment_name']['variables'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].environments[':environment_name'].variables[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoEvents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].events.$get(args, options))
}

export async function getReposOwnerRepoForks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].forks.$get(args, options))
}

export async function postReposOwnerRepoForks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['forks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].forks.$post(args, options))
}

export async function postReposOwnerRepoGitBlobs(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['blobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.blobs.$post(args, options))
}

export async function getReposOwnerRepoGitBlobsFileSha(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['blobs'][':file_sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.blobs[':file_sha'].$get(args, options),
  )
}

export async function postReposOwnerRepoGitCommits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['commits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.commits.$post(args, options))
}

export async function getReposOwnerRepoGitCommitsCommitSha(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['commits'][':commit_sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.commits[':commit_sha'].$get(args, options),
  )
}

export async function getReposOwnerRepoGitMatchingRefsRef(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['matching-refs'][':ref']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git['matching-refs'][':ref'].$get(args, options),
  )
}

export async function getReposOwnerRepoGitRefRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['ref'][':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.ref[':ref'].$get(args, options))
}

export async function postReposOwnerRepoGitRefs(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['refs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.refs.$post(args, options))
}

export async function deleteReposOwnerRepoGitRefsRef(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['refs'][':ref']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.refs[':ref'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoGitRefsRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['refs'][':ref']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.refs[':ref'].$patch(args, options))
}

export async function postReposOwnerRepoGitTags(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.tags.$post(args, options))
}

export async function getReposOwnerRepoGitTagsTagSha(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['tags'][':tag_sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.tags[':tag_sha'].$get(args, options),
  )
}

export async function postReposOwnerRepoGitTrees(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['trees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.trees.$post(args, options))
}

export async function getReposOwnerRepoGitTreesTreeSha(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['trees'][':tree_sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.trees[':tree_sha'].$get(args, options),
  )
}

export async function getReposOwnerRepoHashAlgorithm(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hash-algorithm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['hash-algorithm'].$get(args, options))
}

export async function getReposOwnerRepoHooks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.$get(args, options))
}

export async function postReposOwnerRepoHooks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.$post(args, options))
}

export async function getReposOwnerRepoHooksHookId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks[':hook_id'].$get(args, options))
}

export async function deleteReposOwnerRepoHooksHookId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoHooksHookId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoHooksHookIdConfig(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].config.$get(args, options),
  )
}

export async function patchReposOwnerRepoHooksHookIdConfig(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].config.$patch(args, options),
  )
}

export async function getReposOwnerRepoHooksHookIdDeliveries(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['deliveries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].deliveries.$get(args, options),
  )
}

export async function getReposOwnerRepoHooksHookIdDeliveriesDeliveryId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['deliveries'][':delivery_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].deliveries[':delivery_id'].$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttempts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['deliveries'][':delivery_id']['attempts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].deliveries[':delivery_id'].attempts.$post(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoHooksHookIdPings(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['pings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].pings.$post(args, options),
  )
}

export async function postReposOwnerRepoHooksHookIdTests(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':hook_id']['tests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':hook_id'].tests.$post(args, options),
  )
}

export async function getReposOwnerRepoImmutableReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['immutable-releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['immutable-releases'].$get(args, options),
  )
}

export async function putReposOwnerRepoImmutableReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['immutable-releases']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['immutable-releases'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoImmutableReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['immutable-releases']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['immutable-releases'].$delete(args, options),
  )
}

export async function getReposOwnerRepoImport(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.$get(args, options))
}

export async function putReposOwnerRepoImport(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.$put(args, options))
}

export async function deleteReposOwnerRepoImport(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.$delete(args, options))
}

export async function patchReposOwnerRepoImport(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.$patch(args, options))
}

export async function getReposOwnerRepoImportAuthors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.authors.$get(args, options))
}

export async function patchReposOwnerRepoImportAuthorsAuthorId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['import']['authors'][':author_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].import.authors[':author_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoImportLargeFiles(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['large_files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.large_files.$get(args, options))
}

export async function patchReposOwnerRepoImportLfs(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['import']['lfs']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].import.lfs.$patch(args, options))
}

export async function getReposOwnerRepoInstallation(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['installation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].installation.$get(args, options))
}

export async function getReposOwnerRepoInteractionLimits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['interaction-limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].$get(args, options),
  )
}

export async function putReposOwnerRepoInteractionLimits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['interaction-limits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoInteractionLimits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['interaction-limits']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].$delete(args, options),
  )
}

export async function getReposOwnerRepoInteractionLimitsPullsBypassList(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['interaction-limits']['pulls']['bypass-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].pulls['bypass-list'].$get(args, options),
  )
}

export async function putReposOwnerRepoInteractionLimitsPullsBypassList(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['interaction-limits']['pulls']['bypass-list']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].pulls['bypass-list'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoInteractionLimitsPullsBypassList(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['interaction-limits']['pulls']['bypass-list']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].pulls['bypass-list'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoInteractionLimitsPullsCreationCap(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['interaction-limits']['pulls']['creation-cap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].pulls['creation-cap'].$get(args, options),
  )
}

export async function patchReposOwnerRepoInteractionLimitsPullsCreationCap(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['interaction-limits']['pulls']['creation-cap']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['interaction-limits'].pulls['creation-cap'].$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoInvitations(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].invitations.$get(args, options))
}

export async function deleteReposOwnerRepoInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['invitations'][':invitation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].invitations[':invitation_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['invitations'][':invitation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].invitations[':invitation_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoIssueTypes(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issue-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['issue-types'].$get(args, options))
}

export async function getReposOwnerRepoIssues(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.$get(args, options))
}

export async function postReposOwnerRepoIssues(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.$post(args, options))
}

export async function getReposOwnerRepoIssuesComments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.comments.$get(args, options))
}

export async function getReposOwnerRepoIssuesCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoIssuesCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].$patch(args, options),
  )
}

export async function putReposOwnerRepoIssuesCommentsCommentIdPin(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['pin']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].pin.$put(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsCommentIdPin(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['pin']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].pin.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':comment_id']['reactions'][':reaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':comment_id'].reactions[
      ':reaction_id'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesEvents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.events.$get(args, options))
}

export async function getReposOwnerRepoIssuesEventsEventId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.events[':event_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].$get(args, options),
  )
}

export async function patchReposOwnerRepoIssuesIssueNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].$patch(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberArtifacts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].artifacts.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberArtifacts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['artifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].artifacts.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['artifacts'][':artifact_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].artifacts[':artifact_number'].$get(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['artifacts'][':artifact_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].artifacts[':artifact_number'].$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['artifacts'][':artifact_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].artifacts[':artifact_number'].$patch(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberAssignees(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['assignees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].assignees.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberAssignees(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['assignees']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].assignees.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberAssigneesAssignee(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['assignees'][':assignee']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].assignees[':assignee'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].comments.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberDependenciesBlockedBy(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['dependencies']['blocked_by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].dependencies.blocked_by.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberDependenciesBlockedBy(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['dependencies']['blocked_by']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].dependencies.blocked_by.$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['dependencies']['blocked_by'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].dependencies.blocked_by[
      ':issue_id'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberDependenciesBlocking(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['dependencies']['blocking']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].dependencies.blocking.$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberEvents(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].events.$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberIssueFieldValues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['issue-field-values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number']['issue-field-values'].$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoIssuesIssueNumberIssueFieldValues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['issue-field-values']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number']['issue-field-values'].$put(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberIssueFieldValues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['issue-field-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number']['issue-field-values'].$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['issue-field-values'][':issue_field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number']['issue-field-values'][
      ':issue_field_id'
    ].$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].labels.$get(args, options),
  )
}

export async function putReposOwnerRepoIssuesIssueNumberLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].labels.$put(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].labels.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].labels.$delete(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberLabelsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['labels'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].labels[':name'].$delete(args, options),
  )
}

export async function putReposOwnerRepoIssuesIssueNumberLock(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].lock.$put(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberLock(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].lock.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberParent(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['parent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].parent.$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberReactionsReactionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['reactions'][':reaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].reactions[':reaction_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberRelatesTo(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['relates_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].relates_to.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberRelatesTo(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['relates_to']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].relates_to.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['relates_to'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].relates_to[':issue_id'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoIssuesIssueNumberSubIssue(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['sub_issue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].sub_issue.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberSubIssues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['sub_issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].sub_issues.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberSubIssues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['sub_issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].sub_issues.$post(args, options),
  )
}

export async function patchReposOwnerRepoIssuesIssueNumberSubIssuesPriority(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['sub_issues']['priority']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].sub_issues.priority.$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberSuggestions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['suggestions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].suggestions.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApprove(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['suggestions'][':suggestion_id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].suggestions[
      ':suggestion_id'
    ].approve.$post(args, options),
  )
}

export async function postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismiss(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['suggestions'][':suggestion_id']['dismiss']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].suggestions[
      ':suggestion_id'
    ].dismiss.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIssueNumberTimeline(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':issue_number']['timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':issue_number'].timeline.$get(args, options),
  )
}

export async function getReposOwnerRepoKeys(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys.$get(args, options))
}

export async function postReposOwnerRepoKeys(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys.$post(args, options))
}

export async function getReposOwnerRepoKeysKeyId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys[':key_id'].$get(args, options))
}

export async function deleteReposOwnerRepoKeysKeyId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys[':key_id'].$delete(args, options))
}

export async function getReposOwnerRepoLabels(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels.$get(args, options))
}

export async function postReposOwnerRepoLabels(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels.$post(args, options))
}

export async function getReposOwnerRepoLabelsName(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':name'].$get(args, options))
}

export async function deleteReposOwnerRepoLabelsName(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':name'].$delete(args, options))
}

export async function patchReposOwnerRepoLabelsName(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':name'].$patch(args, options))
}

export async function getReposOwnerRepoLanguages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].languages.$get(args, options))
}

export async function getReposOwnerRepoLicense(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['license']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].license.$get(args, options))
}

export async function postReposOwnerRepoMergeUpstream(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['merge-upstream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['merge-upstream'].$post(args, options))
}

export async function postReposOwnerRepoMerges(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['merges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].merges.$post(args, options))
}

export async function getReposOwnerRepoMilestones(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].milestones.$get(args, options))
}

export async function postReposOwnerRepoMilestones(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].milestones.$post(args, options))
}

export async function getReposOwnerRepoMilestonesMilestoneNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['milestones'][':milestone_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':milestone_number'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoMilestonesMilestoneNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['milestones'][':milestone_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':milestone_number'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoMilestonesMilestoneNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['milestones'][':milestone_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':milestone_number'].$patch(args, options),
  )
}

export async function getReposOwnerRepoMilestonesMilestoneNumberLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['milestones'][':milestone_number']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':milestone_number'].labels.$get(args, options),
  )
}

export async function getReposOwnerRepoNotifications(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].notifications.$get(args, options))
}

export async function putReposOwnerRepoNotifications(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['notifications']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].notifications.$put(args, options))
}

export async function getReposOwnerRepoPages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.$get(args, options))
}

export async function putReposOwnerRepoPages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.$put(args, options))
}

export async function postReposOwnerRepoPages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.$post(args, options))
}

export async function deleteReposOwnerRepoPages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.$delete(args, options))
}

export async function getReposOwnerRepoPagesBuilds(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.builds.$get(args, options))
}

export async function postReposOwnerRepoPagesBuilds(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.builds.$post(args, options))
}

export async function getReposOwnerRepoPagesBuildsLatest(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pages']['builds']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pages.builds.latest.$get(args, options),
  )
}

export async function getReposOwnerRepoPagesBuildsBuildId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pages']['builds'][':build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pages.builds[':build_id'].$get(args, options),
  )
}

export async function postReposOwnerRepoPagesDeployments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.deployments.$post(args, options))
}

export async function getReposOwnerRepoPagesDeploymentsPagesDeploymentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pages']['deployments'][':pages_deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pages.deployments[':pages_deployment_id'].$get(args, options),
  )
}

export async function postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pages']['deployments'][':pages_deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pages.deployments[':pages_deployment_id'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPagesHealth(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pages']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pages.health.$get(args, options))
}

export async function getReposOwnerRepoPlanningStatuses(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['planning-statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['planning-statuses'].$get(args, options),
  )
}

export async function getReposOwnerRepoPrivateVulnerabilityReporting(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['private-vulnerability-reporting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['private-vulnerability-reporting'].$get(args, options),
  )
}

export async function putReposOwnerRepoPrivateVulnerabilityReporting(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['private-vulnerability-reporting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['private-vulnerability-reporting'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoPrivateVulnerabilityReporting(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['private-vulnerability-reporting']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['private-vulnerability-reporting'].$delete(args, options),
  )
}

export async function getReposOwnerRepoPropertiesValues(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['properties']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].properties.values.$get(args, options))
}

export async function patchReposOwnerRepoPropertiesValues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['properties']['values']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].properties.values.$patch(args, options),
  )
}

export async function getReposOwnerRepoPulls(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.$get(args, options))
}

export async function postReposOwnerRepoPulls(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.$post(args, options))
}

export async function getReposOwnerRepoPullsComments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.comments.$get(args, options))
}

export async function getReposOwnerRepoPullsCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoPullsCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoPullsCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoPullsCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsCommentsCommentIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':comment_id']['reactions'][':reaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':comment_id'].reactions[':reaction_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumber(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].$get(args, options),
  )
}

export async function patchReposOwnerRepoPullsPullNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].$patch(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberCodespaces(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['codespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].codespaces.$post(args, options),
  )
}

export async function getReposOwnerRepoPullsPullNumberComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].comments.$post(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberCommentsCommentIdReplies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['comments'][':comment_id']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].comments[':comment_id'].replies.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumberCommits(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].commits.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberCopilotCodeReview(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['copilot-code-review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number']['copilot-code-review'].$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumberFiles(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].files.$get(args, options),
  )
}

export async function getReposOwnerRepoPullsPullNumberMerge(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['merge']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].merge.$get(args, options),
  )
}

export async function putReposOwnerRepoPullsPullNumberMerge(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['merge']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].merge.$put(args, options),
  )
}

export async function putReposOwnerRepoPullsPullNumberMergeAsync(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['merge-async']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number']['merge-async'].$put(args, options),
  )
}

export async function getReposOwnerRepoPullsPullNumberMergeAsyncUuid(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['merge-async'][':uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number']['merge-async'][':uuid'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumberRequestedReviewers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['requested_reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].requested_reviewers.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberRequestedReviewers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['requested_reviewers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].requested_reviewers.$post(args, options),
  )
}

export async function deleteReposOwnerRepoPullsPullNumberRequestedReviewers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['requested_reviewers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].requested_reviewers.$delete(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoPullsPullNumberRequestedReviewersRerequest(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['requested_reviewers']['rerequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].requested_reviewers.rerequest.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumberReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsPullNumberReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews.$post(args, options),
  )
}

export async function getReposOwnerRepoPullsPullNumberReviewsReviewId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].$get(args, options),
  )
}

export async function putReposOwnerRepoPullsPullNumberReviewsReviewId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoPullsPullNumberReviewsReviewId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoPullsPullNumberReviewsReviewIdComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].comments.$get(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissals(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['dismissals']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].dismissals.$put(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoPullsPullNumberReviewsReviewIdEvents(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['reviews'][':review_id']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number'].reviews[':review_id'].events.$post(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoPullsPullNumberUpdateBranch(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':pull_number']['update-branch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':pull_number']['update-branch'].$put(args, options),
  )
}

export async function getReposOwnerRepoReadme(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['readme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].readme.$get(args, options))
}

export async function getReposOwnerRepoReadmeDir(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['readme'][':dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].readme[':dir'].$get(args, options))
}

export async function getReposOwnerRepoReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.$get(args, options))
}

export async function postReposOwnerRepoReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.$post(args, options))
}

export async function getReposOwnerRepoReleasesAssetsAssetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['assets'][':asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.assets[':asset_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoReleasesAssetsAssetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['assets'][':asset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.assets[':asset_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoReleasesAssetsAssetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['assets'][':asset_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.assets[':asset_id'].$patch(args, options),
  )
}

export async function postReposOwnerRepoReleasesGenerateNotes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['generate-notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases['generate-notes'].$post(args, options),
  )
}

export async function getReposOwnerRepoReleasesLatest(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.latest.$get(args, options))
}

export async function getReposOwnerRepoReleasesTagsTag(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['tags'][':tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.tags[':tag'].$get(args, options),
  )
}

export async function getReposOwnerRepoReleasesReleaseId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoReleasesReleaseId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoReleasesReleaseId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoReleasesReleaseIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].assets.$get(args, options),
  )
}

export async function postReposOwnerRepoReleasesReleaseIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].assets.$post(args, options),
  )
}

export async function getReposOwnerRepoReleasesReleaseIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoReleasesReleaseIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoReleasesReleaseIdReactionsReactionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':release_id']['reactions'][':reaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':release_id'].reactions[':reaction_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoRulesBranchesBranch(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rules']['branches'][':branch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rules.branches[':branch'].$get(args, options),
  )
}

export async function getReposOwnerRepoRulesets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['rulesets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].rulesets.$get(args, options))
}

export async function postReposOwnerRepoRulesets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['rulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].rulesets.$post(args, options))
}

export async function getReposOwnerRepoRulesetsRuleSuites(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets']['rule-suites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets['rule-suites'].$get(args, options),
  )
}

export async function getReposOwnerRepoRulesetsRuleSuitesRuleSuiteId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets']['rule-suites'][':rule_suite_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets['rule-suites'][':rule_suite_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoRulesetsRulesetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets'][':ruleset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets[':ruleset_id'].$get(args, options),
  )
}

export async function putReposOwnerRepoRulesetsRulesetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets'][':ruleset_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets[':ruleset_id'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoRulesetsRulesetId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets'][':ruleset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets[':ruleset_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoRulesetsRulesetIdHistory(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets'][':ruleset_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets[':ruleset_id'].history.$get(args, options),
  )
}

export async function getReposOwnerRepoRulesetsRulesetIdHistoryVersionId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['rulesets'][':ruleset_id']['history'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].rulesets[':ruleset_id'].history[':version_id'].$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoSecretScanningAlerts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning'].alerts.$get(args, options),
  )
}

export async function getReposOwnerRepoSecretScanningAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['alerts'][':alert_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning'].alerts[':alert_number'].$get(args, options),
  )
}

export async function patchReposOwnerRepoSecretScanningAlertsAlertNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['alerts'][':alert_number']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning'].alerts[':alert_number'].$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoSecretScanningAlertsAlertNumberLocations(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['alerts'][':alert_number']['locations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning'].alerts[':alert_number'].locations.$get(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['custom-patterns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['custom-patterns'].$get(args, options),
  )
}

export async function postReposOwnerRepoSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['custom-patterns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['custom-patterns'].$post(args, options),
  )
}

export async function deleteReposOwnerRepoSecretScanningCustomPatterns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['custom-patterns']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['custom-patterns'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoSecretScanningCustomPatternsPatternId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['custom-patterns'][':pattern_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['custom-patterns'][':pattern_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoSecretScanningPushProtectionBypasses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['push-protection-bypasses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['push-protection-bypasses'].$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoSecretScanningScanHistory(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['secret-scanning']['scan-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['secret-scanning']['scan-history'].$get(args, options),
  )
}

export async function getReposOwnerRepoSecurityAdvisories(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['security-advisories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'].$get(args, options),
  )
}

export async function postReposOwnerRepoSecurityAdvisories(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['security-advisories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'].$post(args, options),
  )
}

export async function postReposOwnerRepoSecurityAdvisoriesReports(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories']['reports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'].reports.$post(args, options),
  )
}

export async function getReposOwnerRepoSecurityAdvisoriesGhsaId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].$get(args, options),
  )
}

export async function patchReposOwnerRepoSecurityAdvisoriesGhsaId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoSecurityAdvisoriesGhsaIdComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoSecurityAdvisoriesGhsaIdComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].comments.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].comments[':comment_id'].$get(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['comments'][':comment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].comments[
      ':comment_id'
    ].$patch(args, options),
  )
}

export async function postReposOwnerRepoSecurityAdvisoriesGhsaIdCve(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['cve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].cve.$post(args, options),
  )
}

export async function postReposOwnerRepoSecurityAdvisoriesGhsaIdForks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['security-advisories'][':ghsa_id']['forks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['security-advisories'][':ghsa_id'].forks.$post(args, options),
  )
}

export async function getReposOwnerRepoStacks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stacks.$get(args, options))
}

export async function postReposOwnerRepoStacks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stacks.$post(args, options))
}

export async function getReposOwnerRepoStacksStackNumber(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stacks'][':stack_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stacks[':stack_number'].$get(args, options),
  )
}

export async function postReposOwnerRepoStacksStackNumberAdd(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stacks'][':stack_number']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stacks[':stack_number'].add.$post(args, options),
  )
}

export async function postReposOwnerRepoStacksStackNumberUnstack(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stacks'][':stack_number']['unstack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stacks[':stack_number'].unstack.$post(args, options),
  )
}

export async function getReposOwnerRepoStargazers(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stargazers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stargazers.$get(args, options))
}

export async function getReposOwnerRepoStargazersCount(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stargazers']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stargazers.count.$get(args, options))
}

export async function getReposOwnerRepoStargazersHistory(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stargazers']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stargazers.history.$get(args, options))
}

export async function getReposOwnerRepoStatsCodeFrequency(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stats']['code_frequency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stats.code_frequency.$get(args, options),
  )
}

export async function getReposOwnerRepoStatsCommitActivity(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stats']['commit_activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stats.commit_activity.$get(args, options),
  )
}

export async function getReposOwnerRepoStatsContributors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stats']['contributors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stats.contributors.$get(args, options))
}

export async function getReposOwnerRepoStatsParticipation(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['stats']['participation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].stats.participation.$get(args, options),
  )
}

export async function getReposOwnerRepoStatsPunchCard(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stats']['punch_card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stats.punch_card.$get(args, options))
}

export async function postReposOwnerRepoStatusesSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['statuses'][':sha']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].statuses[':sha'].$post(args, options))
}

export async function getReposOwnerRepoSubscribers(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscribers.$get(args, options))
}

export async function getReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$get(args, options))
}

export async function putReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$put(args, options))
}

export async function deleteReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$delete(args, options))
}

export async function getReposOwnerRepoTags(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tags.$get(args, options))
}

export async function getReposOwnerRepoTarballRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tarball'][':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tarball[':ref'].$get(args, options))
}

export async function getReposOwnerRepoTeams(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].teams.$get(args, options))
}

export async function getReposOwnerRepoTopics(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].topics.$get(args, options))
}

export async function putReposOwnerRepoTopics(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].topics.$put(args, options))
}

export async function getReposOwnerRepoTrafficClones(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['traffic']['clones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].traffic.clones.$get(args, options))
}

export async function getReposOwnerRepoTrafficPopularPaths(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['traffic']['popular']['paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].traffic.popular.paths.$get(args, options),
  )
}

export async function getReposOwnerRepoTrafficPopularReferrers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['traffic']['popular']['referrers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].traffic.popular.referrers.$get(args, options),
  )
}

export async function getReposOwnerRepoTrafficViews(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['traffic']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].traffic.views.$get(args, options))
}

export async function postReposOwnerRepoTransfer(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].transfer.$post(args, options))
}

export async function getReposOwnerRepoVulnerabilityAlerts(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['vulnerability-alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['vulnerability-alerts'].$get(args, options),
  )
}

export async function putReposOwnerRepoVulnerabilityAlerts(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['vulnerability-alerts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['vulnerability-alerts'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoVulnerabilityAlerts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['vulnerability-alerts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['vulnerability-alerts'].$delete(args, options),
  )
}

export async function getReposOwnerRepoZipballRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['zipball'][':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].zipball[':ref'].$get(args, options))
}

export async function postReposTemplateOwnerTemplateRepoGenerate(
  args: InferRequestType<
    (typeof client.repos)[':template_owner'][':template_repo']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':template_owner'][':template_repo'].generate.$post(args, options),
  )
}

export async function getRepositories(
  args: InferRequestType<typeof client.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories.$get(args, options))
}

export async function getSearchCode(
  args: InferRequestType<typeof client.search.code.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.code.$get(args, options))
}

export async function getSearchCommits(
  args: InferRequestType<typeof client.search.commits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.commits.$get(args, options))
}

export async function getSearchIssues(
  args: InferRequestType<typeof client.search.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.issues.$get(args, options))
}

export async function getSearchLabels(
  args: InferRequestType<typeof client.search.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.labels.$get(args, options))
}

export async function getSearchRepositories(
  args: InferRequestType<typeof client.search.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.repositories.$get(args, options))
}

export async function getSearchTopics(
  args: InferRequestType<typeof client.search.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.topics.$get(args, options))
}

export async function getSearchUsers(
  args: InferRequestType<typeof client.search.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.users.$get(args, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$get(args, options))
}

export async function deleteTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$delete(args, options))
}

export async function patchTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$patch(args, options))
}

export async function getTeamsTeamIdInvitations(
  args: InferRequestType<(typeof client.teams)[':team_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].invitations.$get(args, options))
}

export async function getTeamsTeamIdMembers(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members.$get(args, options))
}

export async function getTeamsTeamIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members[':username'].$get(args, options))
}

export async function putTeamsTeamIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['members'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members[':username'].$put(args, options))
}

export async function deleteTeamsTeamIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].members[':username'].$delete(args, options))
}

export async function getTeamsTeamIdMembershipsUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['memberships'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].memberships[':username'].$get(args, options))
}

export async function putTeamsTeamIdMembershipsUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['memberships'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].memberships[':username'].$put(args, options))
}

export async function deleteTeamsTeamIdMembershipsUsername(
  args: InferRequestType<(typeof client.teams)[':team_id']['memberships'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':team_id'].memberships[':username'].$delete(args, options),
  )
}

export async function getTeamsTeamIdRepos(
  args: InferRequestType<(typeof client.teams)[':team_id']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].repos.$get(args, options))
}

export async function getTeamsTeamIdReposOwnerRepo(
  args: InferRequestType<(typeof client.teams)[':team_id']['repos'][':owner'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].repos[':owner'][':repo'].$get(args, options))
}

export async function putTeamsTeamIdReposOwnerRepo(
  args: InferRequestType<(typeof client.teams)[':team_id']['repos'][':owner'][':repo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].repos[':owner'][':repo'].$put(args, options))
}

export async function deleteTeamsTeamIdReposOwnerRepo(
  args: InferRequestType<(typeof client.teams)[':team_id']['repos'][':owner'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':team_id'].repos[':owner'][':repo'].$delete(args, options),
  )
}

export async function getTeamsTeamIdTeams(
  args: InferRequestType<(typeof client.teams)[':team_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].teams.$get(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function patchUser(
  args: InferRequestType<typeof client.user.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$patch(args, options))
}

export async function getUserBlocks(
  args: InferRequestType<typeof client.user.blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks.$get(args, options))
}

export async function getUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$get(args, options))
}

export async function putUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$put(args, options))
}

export async function deleteUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$delete(args, options))
}

export async function getUserCodespaces(
  args: InferRequestType<typeof client.user.codespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.$get(args, options))
}

export async function postUserCodespaces(
  args: InferRequestType<typeof client.user.codespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.$post(args, options))
}

export async function getUserCodespacesSecrets(
  args: InferRequestType<typeof client.user.codespaces.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.secrets.$get(args, options))
}

export async function getUserCodespacesSecretsPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.user.codespaces.secrets['public-key'].$get(undefined, options))
}

export async function getUserCodespacesSecretsSecretName(
  args: InferRequestType<(typeof client.user.codespaces.secrets)[':secret_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.secrets[':secret_name'].$get(args, options))
}

export async function putUserCodespacesSecretsSecretName(
  args: InferRequestType<(typeof client.user.codespaces.secrets)[':secret_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.secrets[':secret_name'].$put(args, options))
}

export async function deleteUserCodespacesSecretsSecretName(
  args: InferRequestType<(typeof client.user.codespaces.secrets)[':secret_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces.secrets[':secret_name'].$delete(args, options))
}

export async function getUserCodespacesSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.user.codespaces.secrets)[':secret_name']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.codespaces.secrets[':secret_name'].repositories.$get(args, options),
  )
}

export async function putUserCodespacesSecretsSecretNameRepositories(
  args: InferRequestType<
    (typeof client.user.codespaces.secrets)[':secret_name']['repositories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.codespaces.secrets[':secret_name'].repositories.$put(args, options),
  )
}

export async function putUserCodespacesSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.user.codespaces.secrets)[':secret_name']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.codespaces.secrets[':secret_name'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.user.codespaces.secrets)[':secret_name']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.codespaces.secrets[':secret_name'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserCodespacesCodespaceName(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].$get(args, options))
}

export async function deleteUserCodespacesCodespaceName(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].$delete(args, options))
}

export async function patchUserCodespacesCodespaceName(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].$patch(args, options))
}

export async function postUserCodespacesCodespaceNameExports(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].exports.$post(args, options))
}

export async function getUserCodespacesCodespaceNameExportsExportId(
  args: InferRequestType<
    (typeof client.user.codespaces)[':codespace_name']['exports'][':export_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.codespaces[':codespace_name'].exports[':export_id'].$get(args, options),
  )
}

export async function getUserCodespacesCodespaceNameMachines(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['machines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].machines.$get(args, options))
}

export async function postUserCodespacesCodespaceNamePublish(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].publish.$post(args, options))
}

export async function postUserCodespacesCodespaceNameStart(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].start.$post(args, options))
}

export async function postUserCodespacesCodespaceNameStop(
  args: InferRequestType<(typeof client.user.codespaces)[':codespace_name']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.codespaces[':codespace_name'].stop.$post(args, options))
}

export async function getUserDockerConflicts(options?: ClientRequestOptions) {
  return await parseResponse(client.user.docker.conflicts.$get(undefined, options))
}

export async function patchUserEmailVisibility(
  args: InferRequestType<typeof client.user.email.visibility.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.email.visibility.$patch(args, options))
}

export async function getUserEmails(
  args: InferRequestType<typeof client.user.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails.$get(args, options))
}

export async function postUserEmails(
  args: InferRequestType<typeof client.user.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails.$post(args, options))
}

export async function deleteUserEmails(
  args: InferRequestType<typeof client.user.emails.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails.$delete(args, options))
}

export async function getUserFollowers(
  args: InferRequestType<typeof client.user.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.followers.$get(args, options))
}

export async function getUserFollowing(
  args: InferRequestType<typeof client.user.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following.$get(args, options))
}

export async function getUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$get(args, options))
}

export async function putUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$put(args, options))
}

export async function deleteUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$delete(args, options))
}

export async function getUserGpgKeys(
  args: InferRequestType<typeof client.user.gpg_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys.$get(args, options))
}

export async function postUserGpgKeys(
  args: InferRequestType<typeof client.user.gpg_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys.$post(args, options))
}

export async function getUserGpgKeysGpgKeyId(
  args: InferRequestType<(typeof client.user.gpg_keys)[':gpg_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys[':gpg_key_id'].$get(args, options))
}

export async function deleteUserGpgKeysGpgKeyId(
  args: InferRequestType<(typeof client.user.gpg_keys)[':gpg_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys[':gpg_key_id'].$delete(args, options))
}

export async function getUserInstallations(
  args: InferRequestType<typeof client.user.installations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.installations.$get(args, options))
}

export async function getUserInstallationsInstallationIdRepositories(
  args: InferRequestType<
    (typeof client.user.installations)[':installation_id']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.installations[':installation_id'].repositories.$get(args, options),
  )
}

export async function putUserInstallationsInstallationIdRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.user.installations)[':installation_id']['repositories'][':repository_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.installations[':installation_id'].repositories[':repository_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteUserInstallationsInstallationIdRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.user.installations)[':installation_id']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.installations[':installation_id'].repositories[':repository_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserInteractionLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.user['interaction-limits'].$get(undefined, options))
}

export async function putUserInteractionLimits(
  args: InferRequestType<(typeof client.user)['interaction-limits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['interaction-limits'].$put(args, options))
}

export async function deleteUserInteractionLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.user['interaction-limits'].$delete(undefined, options))
}

export async function getUserIssueFields(options?: ClientRequestOptions) {
  return await parseResponse(client.user['issue-fields'].$get(undefined, options))
}

export async function postUserIssueFields(
  args: InferRequestType<(typeof client.user)['issue-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-fields'].$post(args, options))
}

export async function deleteUserIssueFieldsIssueFieldId(
  args: InferRequestType<(typeof client.user)['issue-fields'][':issue_field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-fields'][':issue_field_id'].$delete(args, options))
}

export async function patchUserIssueFieldsIssueFieldId(
  args: InferRequestType<(typeof client.user)['issue-fields'][':issue_field_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-fields'][':issue_field_id'].$patch(args, options))
}

export async function getUserIssueTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.user['issue-types'].$get(undefined, options))
}

export async function postUserIssueTypes(
  args: InferRequestType<(typeof client.user)['issue-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-types'].$post(args, options))
}

export async function putUserIssueTypesIssueTypeId(
  args: InferRequestType<(typeof client.user)['issue-types'][':issue_type_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-types'][':issue_type_id'].$put(args, options))
}

export async function deleteUserIssueTypesIssueTypeId(
  args: InferRequestType<(typeof client.user)['issue-types'][':issue_type_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['issue-types'][':issue_type_id'].$delete(args, options))
}

export async function getUserIssues(
  args: InferRequestType<typeof client.user.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.issues.$get(args, options))
}

export async function getUserKeys(
  args: InferRequestType<typeof client.user.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys.$get(args, options))
}

export async function postUserKeys(
  args: InferRequestType<typeof client.user.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys.$post(args, options))
}

export async function getUserKeysKeyId(
  args: InferRequestType<(typeof client.user.keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys[':key_id'].$get(args, options))
}

export async function deleteUserKeysKeyId(
  args: InferRequestType<(typeof client.user.keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys[':key_id'].$delete(args, options))
}

export async function getUserMarketplacePurchases(
  args: InferRequestType<typeof client.user.marketplace_purchases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.marketplace_purchases.$get(args, options))
}

export async function getUserMarketplacePurchasesStubbed(
  args: InferRequestType<typeof client.user.marketplace_purchases.stubbed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.marketplace_purchases.stubbed.$get(args, options))
}

export async function getUserMembershipsOrgs(
  args: InferRequestType<typeof client.user.memberships.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.memberships.orgs.$get(args, options))
}

export async function getUserMembershipsOrgsOrg(
  args: InferRequestType<(typeof client.user.memberships.orgs)[':org']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.memberships.orgs[':org'].$get(args, options))
}

export async function patchUserMembershipsOrgsOrg(
  args: InferRequestType<(typeof client.user.memberships.orgs)[':org']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.memberships.orgs[':org'].$patch(args, options))
}

export async function getUserMigrations(
  args: InferRequestType<typeof client.user.migrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.migrations.$get(args, options))
}

export async function postUserMigrations(
  args: InferRequestType<typeof client.user.migrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.migrations.$post(args, options))
}

export async function getUserMigrationsMigrationId(
  args: InferRequestType<(typeof client.user.migrations)[':migration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.migrations[':migration_id'].$get(args, options))
}

export async function getUserMigrationsMigrationIdArchive(
  args: InferRequestType<(typeof client.user.migrations)[':migration_id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.migrations[':migration_id'].archive.$get(args, options))
}

export async function deleteUserMigrationsMigrationIdArchive(
  args: InferRequestType<(typeof client.user.migrations)[':migration_id']['archive']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.migrations[':migration_id'].archive.$delete(args, options))
}

export async function deleteUserMigrationsMigrationIdReposRepoNameLock(
  args: InferRequestType<
    (typeof client.user.migrations)[':migration_id']['repos'][':repo_name']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.migrations[':migration_id'].repos[':repo_name'].lock.$delete(args, options),
  )
}

export async function getUserMigrationsMigrationIdRepositories(
  args: InferRequestType<(typeof client.user.migrations)[':migration_id']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.migrations[':migration_id'].repositories.$get(args, options),
  )
}

export async function getUserOrgs(
  args: InferRequestType<typeof client.user.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.orgs.$get(args, options))
}

export async function getUserPackages(
  args: InferRequestType<typeof client.user.packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.packages.$get(args, options))
}

export async function getUserPackagesPackageTypePackageName(
  args: InferRequestType<(typeof client.user.packages)[':package_type'][':package_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].$get(args, options),
  )
}

export async function deleteUserPackagesPackageTypePackageName(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].$delete(args, options),
  )
}

export async function postUserPackagesPackageTypePackageNameRestore(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].restore.$post(args, options),
  )
}

export async function getUserPackagesPackageTypePackageNameVersions(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].versions.$get(args, options),
  )
}

export async function getUserPackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['versions'][':package_version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].versions[':package_version_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteUserPackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['versions'][':package_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].versions[':package_version_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestore(
  args: InferRequestType<
    (typeof client.user.packages)[':package_type'][':package_name']['versions'][':package_version_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].restore.$post(args, options),
  )
}

export async function getUserPublicEmails(
  args: InferRequestType<typeof client.user.public_emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.public_emails.$get(args, options))
}

export async function getUserRepos(
  args: InferRequestType<typeof client.user.repos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.repos.$get(args, options))
}

export async function postUserRepos(
  args: InferRequestType<typeof client.user.repos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.repos.$post(args, options))
}

export async function getUserRepositoryInvitations(
  args: InferRequestType<typeof client.user.repository_invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.repository_invitations.$get(args, options))
}

export async function deleteUserRepositoryInvitationsInvitationId(
  args: InferRequestType<(typeof client.user.repository_invitations)[':invitation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.repository_invitations[':invitation_id'].$delete(args, options),
  )
}

export async function patchUserRepositoryInvitationsInvitationId(
  args: InferRequestType<(typeof client.user.repository_invitations)[':invitation_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.repository_invitations[':invitation_id'].$patch(args, options),
  )
}

export async function getUserSocialAccounts(
  args: InferRequestType<typeof client.user.social_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.social_accounts.$get(args, options))
}

export async function postUserSocialAccounts(
  args: InferRequestType<typeof client.user.social_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.social_accounts.$post(args, options))
}

export async function deleteUserSocialAccounts(
  args: InferRequestType<typeof client.user.social_accounts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.social_accounts.$delete(args, options))
}

export async function getUserSshSigningKeys(
  args: InferRequestType<typeof client.user.ssh_signing_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.ssh_signing_keys.$get(args, options))
}

export async function postUserSshSigningKeys(
  args: InferRequestType<typeof client.user.ssh_signing_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.ssh_signing_keys.$post(args, options))
}

export async function getUserSshSigningKeysSshSigningKeyId(
  args: InferRequestType<(typeof client.user.ssh_signing_keys)[':ssh_signing_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.ssh_signing_keys[':ssh_signing_key_id'].$get(args, options),
  )
}

export async function deleteUserSshSigningKeysSshSigningKeyId(
  args: InferRequestType<(typeof client.user.ssh_signing_keys)[':ssh_signing_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.ssh_signing_keys[':ssh_signing_key_id'].$delete(args, options),
  )
}

export async function getUserStarred(
  args: InferRequestType<typeof client.user.starred.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred.$get(args, options))
}

export async function getUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$get(args, options))
}

export async function putUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$put(args, options))
}

export async function deleteUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$delete(args, options))
}

export async function getUserSubscriptions(
  args: InferRequestType<typeof client.user.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.subscriptions.$get(args, options))
}

export async function getUserTeams(
  args: InferRequestType<typeof client.user.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.teams.$get(args, options))
}

export async function getUserAccountId(
  args: InferRequestType<(typeof client.user)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':account_id'].$get(args, options))
}

export async function postUserUserIdProjectsV2ProjectNumberDrafts(
  args: InferRequestType<
    (typeof client.user)[':user_id']['projectsV2'][':project_number']['drafts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':user_id'].projectsV2[':project_number'].drafts.$post(args, options),
  )
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsersUserIdProjectsV2ProjectNumberViews(
  args: InferRequestType<
    (typeof client.users)[':user_id']['projectsV2'][':project_number']['views']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].projectsV2[':project_number'].views.$post(args, options),
  )
}

export async function getUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$get(args, options))
}

export async function postUsersUsernameAttestationsBulkList(
  args: InferRequestType<(typeof client.users)[':username']['attestations']['bulk-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].attestations['bulk-list'].$post(args, options),
  )
}

export async function postUsersUsernameAttestationsDeleteRequest(
  args: InferRequestType<
    (typeof client.users)[':username']['attestations']['delete-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].attestations['delete-request'].$post(args, options),
  )
}

export async function deleteUsersUsernameAttestationsDigestSubjectDigest(
  args: InferRequestType<
    (typeof client.users)[':username']['attestations']['digest'][':subject_digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].attestations.digest[':subject_digest'].$delete(args, options),
  )
}

export async function deleteUsersUsernameAttestationsAttestationId(
  args: InferRequestType<
    (typeof client.users)[':username']['attestations'][':attestation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].attestations[':attestation_id'].$delete(args, options),
  )
}

export async function getUsersUsernameAttestationsSubjectDigest(
  args: InferRequestType<
    (typeof client.users)[':username']['attestations'][':subject_digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].attestations[':subject_digest'].$get(args, options),
  )
}

export async function getUsersUsernameCopilotSpaces(
  args: InferRequestType<(typeof client.users)[':username']['copilot-spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username']['copilot-spaces'].$get(args, options))
}

export async function postUsersUsernameCopilotSpaces(
  args: InferRequestType<(typeof client.users)[':username']['copilot-spaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username']['copilot-spaces'].$post(args, options))
}

export async function getUsersUsernameCopilotSpacesSpaceNumber(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].$get(args, options),
  )
}

export async function putUsersUsernameCopilotSpacesSpaceNumber(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].$put(args, options),
  )
}

export async function deleteUsersUsernameCopilotSpacesSpaceNumber(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].$delete(args, options),
  )
}

export async function getUsersUsernameCopilotSpacesSpaceNumberCollaborators(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['collaborators']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].collaborators.$get(args, options),
  )
}

export async function postUsersUsernameCopilotSpacesSpaceNumberCollaborators(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['collaborators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].collaborators.$post(args, options),
  )
}

export async function putUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifier(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['collaborators'][':actor_type'][':actor_identifier']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].collaborators[':actor_type'][
      ':actor_identifier'
    ].$put(args, options),
  )
}

export async function deleteUsersUsernameCopilotSpacesSpaceNumberCollaboratorsActorTypeActorIdentifier(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['collaborators'][':actor_type'][':actor_identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].collaborators[':actor_type'][
      ':actor_identifier'
    ].$delete(args, options),
  )
}

export async function getUsersUsernameCopilotSpacesSpaceNumberResources(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].resources.$get(args, options),
  )
}

export async function postUsersUsernameCopilotSpacesSpaceNumberResources(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].resources.$post(args, options),
  )
}

export async function getUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].resources[
      ':space_resource_id'
    ].$get(args, options),
  )
}

export async function putUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].resources[
      ':space_resource_id'
    ].$put(args, options),
  )
}

export async function deleteUsersUsernameCopilotSpacesSpaceNumberResourcesSpaceResourceId(
  args: InferRequestType<
    (typeof client.users)[':username']['copilot-spaces'][':space_number']['resources'][':space_resource_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username']['copilot-spaces'][':space_number'].resources[
      ':space_resource_id'
    ].$delete(args, options),
  )
}

export async function getUsersUsernameDockerConflicts(
  args: InferRequestType<(typeof client.users)[':username']['docker']['conflicts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].docker.conflicts.$get(args, options))
}

export async function getUsersUsernameEvents(
  args: InferRequestType<(typeof client.users)[':username']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].events.$get(args, options))
}

export async function getUsersUsernameEventsOrgsOrg(
  args: InferRequestType<(typeof client.users)[':username']['events']['orgs'][':org']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].events.orgs[':org'].$get(args, options))
}

export async function getUsersUsernameEventsPublic(
  args: InferRequestType<(typeof client.users)[':username']['events']['public']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].events.public.$get(args, options))
}

export async function getUsersUsernameFollowers(
  args: InferRequestType<(typeof client.users)[':username']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].followers.$get(args, options))
}

export async function getUsersUsernameFollowing(
  args: InferRequestType<(typeof client.users)[':username']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].following.$get(args, options))
}

export async function getUsersUsernameFollowingTargetUser(
  args: InferRequestType<(typeof client.users)[':username']['following'][':target_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].following[':target_user'].$get(args, options),
  )
}

export async function getUsersUsernameGists(
  args: InferRequestType<(typeof client.users)[':username']['gists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].gists.$get(args, options))
}

export async function getUsersUsernameGpgKeys(
  args: InferRequestType<(typeof client.users)[':username']['gpg_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].gpg_keys.$get(args, options))
}

export async function getUsersUsernameHovercard(
  args: InferRequestType<(typeof client.users)[':username']['hovercard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].hovercard.$get(args, options))
}

export async function getUsersUsernameInstallation(
  args: InferRequestType<(typeof client.users)[':username']['installation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].installation.$get(args, options))
}

export async function getUsersUsernameKeys(
  args: InferRequestType<(typeof client.users)[':username']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].keys.$get(args, options))
}

export async function getUsersUsernameOrgs(
  args: InferRequestType<(typeof client.users)[':username']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].orgs.$get(args, options))
}

export async function getUsersUsernamePackages(
  args: InferRequestType<(typeof client.users)[':username']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].packages.$get(args, options))
}

export async function getUsersUsernamePackagesPackageTypePackageName(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].$get(args, options),
  )
}

export async function deleteUsersUsernamePackagesPackageTypePackageName(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].$delete(args, options),
  )
}

export async function postUsersUsernamePackagesPackageTypePackageNameRestore(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getUsersUsernamePackagesPackageTypePackageNameVersions(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].versions.$get(
      args,
      options,
    ),
  )
}

export async function getUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].$get(args, options),
  )
}

export async function deleteUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionId(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].$delete(args, options),
  )
}

export async function postUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRestore(
  args: InferRequestType<
    (typeof client.users)[':username']['packages'][':package_type'][':package_name']['versions'][':package_version_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].packages[':package_type'][':package_name'].versions[
      ':package_version_id'
    ].restore.$post(args, options),
  )
}

export async function getUsersUsernameProjectsV2(
  args: InferRequestType<(typeof client.users)[':username']['projectsV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].projectsV2.$get(args, options))
}

export async function getUsersUsernameProjectsV2ProjectNumber(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].$get(args, options),
  )
}

export async function getUsersUsernameProjectsV2ProjectNumberFields(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].fields.$get(args, options),
  )
}

export async function postUsersUsernameProjectsV2ProjectNumberFields(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].fields.$post(args, options),
  )
}

export async function getUsersUsernameProjectsV2ProjectNumberFieldsFieldId(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['fields'][':field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].fields[':field_id'].$get(args, options),
  )
}

export async function getUsersUsernameProjectsV2ProjectNumberItems(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].items.$get(args, options),
  )
}

export async function postUsersUsernameProjectsV2ProjectNumberItems(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].items.$post(args, options),
  )
}

export async function getUsersUsernameProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['items'][':item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].items[':item_id'].$get(args, options),
  )
}

export async function deleteUsersUsernameProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['items'][':item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].items[':item_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchUsersUsernameProjectsV2ProjectNumberItemsItemId(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['items'][':item_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].items[':item_id'].$patch(args, options),
  )
}

export async function getUsersUsernameProjectsV2ProjectNumberViewsViewNumberItems(
  args: InferRequestType<
    (typeof client.users)[':username']['projectsV2'][':project_number']['views'][':view_number']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].projectsV2[':project_number'].views[':view_number'].items.$get(
      args,
      options,
    ),
  )
}

export async function getUsersUsernameReceivedEvents(
  args: InferRequestType<(typeof client.users)[':username']['received_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].received_events.$get(args, options))
}

export async function getUsersUsernameReceivedEventsPublic(
  args: InferRequestType<(typeof client.users)[':username']['received_events']['public']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].received_events.public.$get(args, options))
}

export async function getUsersUsernameRepos(
  args: InferRequestType<(typeof client.users)[':username']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].repos.$get(args, options))
}

export async function getUsersUsernameSettingsBillingAiCreditUsage(
  args: InferRequestType<
    (typeof client.users)[':username']['settings']['billing']['ai_credit']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].settings.billing.ai_credit.usage.$get(args, options),
  )
}

export async function getUsersUsernameSettingsBillingPremiumRequestUsage(
  args: InferRequestType<
    (typeof client.users)[':username']['settings']['billing']['premium_request']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].settings.billing.premium_request.usage.$get(args, options),
  )
}

export async function getUsersUsernameSettingsBillingUsage(
  args: InferRequestType<
    (typeof client.users)[':username']['settings']['billing']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].settings.billing.usage.$get(args, options))
}

export async function getUsersUsernameSettingsBillingUsageSummary(
  args: InferRequestType<
    (typeof client.users)[':username']['settings']['billing']['usage']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':username'].settings.billing.usage.summary.$get(args, options),
  )
}

export async function getUsersUsernameSocialAccounts(
  args: InferRequestType<(typeof client.users)[':username']['social_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].social_accounts.$get(args, options))
}

export async function getUsersUsernameSshSigningKeys(
  args: InferRequestType<(typeof client.users)[':username']['ssh_signing_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].ssh_signing_keys.$get(args, options))
}

export async function getUsersUsernameStarred(
  args: InferRequestType<(typeof client.users)[':username']['starred']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].starred.$get(args, options))
}

export async function getUsersUsernameSubscriptions(
  args: InferRequestType<(typeof client.users)[':username']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].subscriptions.$get(args, options))
}

export async function getVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.versions.$get(undefined, options))
}

export async function getZen(options?: ClientRequestOptions) {
  return await parseResponse(client.zen.$get(undefined, options))
}
