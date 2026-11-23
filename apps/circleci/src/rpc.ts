import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getInsightsPagesProjectSlugSummary(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.pages[':project-slug'].summary.$get(args, options))
}

export async function postInsightsPagesProjectSlugSummary(
  args: InferRequestType<(typeof client.insights.pages)[':project-slug']['summary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.pages[':project-slug'].summary.$post(args, options))
}

export async function getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobs(
  args: InferRequestType<
    (typeof client.insights)['time-series'][':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights['time-series'][':project-slug'].workflows[':workflow-name'].jobs.$get(
      args,
      options,
    ),
  )
}

export async function getInsightsOrgSlugSummary(
  args: InferRequestType<(typeof client.insights)[':org-slug']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':org-slug'].summary.$get(args, options))
}

export async function getInsightsProjectSlugBranches(
  args: InferRequestType<(typeof client.insights)[':project-slug']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':project-slug'].branches.$get(args, options))
}

export async function getInsightsProjectSlugFlakyTests(
  args: InferRequestType<(typeof client.insights)[':project-slug']['flaky-tests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':project-slug']['flaky-tests'].$get(args, options))
}

export async function getInsightsProjectSlugWorkflows(
  args: InferRequestType<(typeof client.insights)[':project-slug']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':project-slug'].workflows.$get(args, options))
}

export async function getInsightsProjectSlugWorkflowsWorkflowName(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights[':project-slug'].workflows[':workflow-name'].$get(args, options),
  )
}

export async function getInsightsProjectSlugWorkflowsWorkflowNameJobs(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights[':project-slug'].workflows[':workflow-name'].jobs.$get(args, options),
  )
}

export async function getInsightsProjectSlugWorkflowsWorkflowNameSummary(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights[':project-slug'].workflows[':workflow-name'].summary.$get(args, options),
  )
}

export async function getInsightsProjectSlugWorkflowsWorkflowNameTestMetrics(
  args: InferRequestType<
    (typeof client.insights)[':project-slug']['workflows'][':workflow-name']['test-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights[':project-slug'].workflows[':workflow-name']['test-metrics'].$get(
      args,
      options,
    ),
  )
}

export async function postJobsJobIdCancel(
  args: InferRequestType<(typeof client.jobs)[':job-id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':job-id'].cancel.$post(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMeCollaborations(options?: ClientRequestOptions) {
  return await parseResponse(client.me.collaborations.$get(undefined, options))
}

export async function postOrganization(
  args: InferRequestType<typeof client.organization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.$post(args, options))
}

export async function getOrganizationOrgSlugOrId(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':org-slug-or-id'].$get(args, options))
}

export async function deleteOrganizationOrgSlugOrId(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':org-slug-or-id'].$delete(args, options))
}

export async function postOrganizationOrgSlugOrIdProject(
  args: InferRequestType<(typeof client.organization)[':org-slug-or-id']['project']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':org-slug-or-id'].project.$post(args, options))
}

export async function getOrganizationOrgSlugOrIdUrlOrbAllowList(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':org-slug-or-id']['url-orb-allow-list'].$get(args, options),
  )
}

export async function postOrganizationOrgSlugOrIdUrlOrbAllowList(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':org-slug-or-id']['url-orb-allow-list'].$post(args, options),
  )
}

export async function deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryId(
  args: InferRequestType<
    (typeof client.organization)[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization[':org-slug-or-id']['url-orb-allow-list'][':allow-list-entry-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPipeline(
  args: InferRequestType<typeof client.pipeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline.$get(args, options))
}

export async function postPipelineContinue(
  args: InferRequestType<typeof client.pipeline.continue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline.continue.$post(args, options))
}

export async function getPipelinePipelineId(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline[':pipeline-id'].$get(args, options))
}

export async function getPipelinePipelineIdConfig(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline[':pipeline-id'].config.$get(args, options))
}

export async function getPipelinePipelineIdWorkflow(
  args: InferRequestType<(typeof client.pipeline)[':pipeline-id']['workflow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline[':pipeline-id'].workflow.$get(args, options))
}

export async function getProjectProjectSlug(
  args: InferRequestType<(typeof client.project)[':project-slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].$get(args, options))
}

export async function deleteProjectProjectSlug(
  args: InferRequestType<(typeof client.project)[':project-slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].$delete(args, options))
}

export async function getProjectProjectSlugCheckoutKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug']['checkout-key'].$get(args, options))
}

export async function postProjectProjectSlugCheckoutKey(
  args: InferRequestType<(typeof client.project)[':project-slug']['checkout-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug']['checkout-key'].$post(args, options))
}

export async function getProjectProjectSlugCheckoutKeyFingerprint(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project-slug']['checkout-key'][':fingerprint'].$get(args, options),
  )
}

export async function deleteProjectProjectSlugCheckoutKeyFingerprint(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['checkout-key'][':fingerprint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project-slug']['checkout-key'][':fingerprint'].$delete(args, options),
  )
}

export async function getProjectProjectSlugEnvvar(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].envvar.$get(args, options))
}

export async function postProjectProjectSlugEnvvar(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].envvar.$post(args, options))
}

export async function getProjectProjectSlugEnvvarName(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].envvar[':name'].$get(args, options))
}

export async function deleteProjectProjectSlugEnvvarName(
  args: InferRequestType<(typeof client.project)[':project-slug']['envvar'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].envvar[':name'].$delete(args, options))
}

export async function postProjectProjectSlugJobJobNumberCancel(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['job'][':job-number']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project-slug'].job[':job-number'].cancel.$post(args, options),
  )
}

export async function getProjectProjectSlugPipeline(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].pipeline.$get(args, options))
}

export async function postProjectProjectSlugPipeline(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].pipeline.$post(args, options))
}

export async function getProjectProjectSlugPipelineMine(
  args: InferRequestType<(typeof client.project)[':project-slug']['pipeline']['mine']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].pipeline.mine.$get(args, options))
}

export async function getProjectProjectSlugPipelinePipelineNumber(
  args: InferRequestType<
    (typeof client.project)[':project-slug']['pipeline'][':pipeline-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':project-slug'].pipeline[':pipeline-number'].$get(args, options),
  )
}

export async function getProjectProjectSlugSchedule(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].schedule.$get(args, options))
}

export async function postProjectProjectSlugSchedule(
  args: InferRequestType<(typeof client.project)[':project-slug']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.project[':project-slug'].schedule.$post(args, options))
}

export async function getScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule-id'].$get(args, options))
}

export async function deleteScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule-id'].$delete(args, options))
}

export async function patchScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule-id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule-id'].$patch(args, options))
}

export async function getUserId(
  args: InferRequestType<(typeof client.user)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':id'].$get(args, options))
}

export async function postWorkflowIdApproveApprovalRequestId(
  args: InferRequestType<
    (typeof client.workflow)[':id']['approve'][':approval_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflow[':id'].approve[':approval_request_id'].$post(args, options),
  )
}

export async function postWorkflowIdCancel(
  args: InferRequestType<(typeof client.workflow)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflow[':id'].cancel.$post(args, options))
}

export async function getWorkflowIdJob(
  args: InferRequestType<(typeof client.workflow)[':id']['job']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflow[':id'].job.$get(args, options))
}

export async function postWorkflowIdRerun(
  args: InferRequestType<(typeof client.workflow)[':id']['rerun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflow[':id'].rerun.$post(args, options))
}

export async function getOrgOrgIDOidcCustomClaims(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgID']['oidc-custom-claims'].$get(args, options))
}

export async function deleteOrgOrgIDOidcCustomClaims(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgID']['oidc-custom-claims'].$delete(args, options))
}

export async function patchOrgOrgIDOidcCustomClaims(
  args: InferRequestType<(typeof client.org)[':orgID']['oidc-custom-claims']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':orgID']['oidc-custom-claims'].$patch(args, options))
}

export async function getOrgOrgIDProjectProjectIDOidcCustomClaims(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$get(args, options),
  )
}

export async function deleteOrgOrgIDProjectProjectIDOidcCustomClaims(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$delete(args, options),
  )
}

export async function patchOrgOrgIDProjectProjectIDOidcCustomClaims(
  args: InferRequestType<
    (typeof client.org)[':orgID']['project'][':projectID']['oidc-custom-claims']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.org[':orgID'].project[':projectID']['oidc-custom-claims'].$patch(args, options),
  )
}

export async function getOwnerOwnerIDContextContextDecision(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision.$get(args, options),
  )
}

export async function postOwnerOwnerIDContextContextDecision(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision.$post(args, options),
  )
}

export async function getOwnerOwnerIDContextContextDecisionSettings(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision.settings.$get(args, options),
  )
}

export async function patchOwnerOwnerIDContextContextDecisionSettings(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision.settings.$patch(args, options),
  )
}

export async function getOwnerOwnerIDContextContextDecisionDecisionID(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision[':decisionID'].$get(args, options),
  )
}

export async function getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundle(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['decision'][':decisionID']['policy-bundle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context'].decision[':decisionID']['policy-bundle'].$get(
      args,
      options,
    ),
  )
}

export async function getOwnerOwnerIDContextContextPolicyBundle(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context']['policy-bundle'].$get(args, options),
  )
}

export async function postOwnerOwnerIDContextContextPolicyBundle(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context']['policy-bundle'].$post(args, options),
  )
}

export async function getOwnerOwnerIDContextContextPolicyBundlePolicyName(
  args: InferRequestType<
    (typeof client.owner)[':ownerID']['context'][':context']['policy-bundle'][':policyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.owner[':ownerID'].context[':context']['policy-bundle'][':policyName'].$get(
      args,
      options,
    ),
  )
}

export async function getContext(
  args: InferRequestType<typeof client.context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context.$get(args, options))
}

export async function postContext(
  args: InferRequestType<typeof client.context.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context.$post(args, options))
}

export async function getContextContextId(
  args: InferRequestType<(typeof client.context)[':context_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context[':context_id'].$get(args, options))
}

export async function deleteContextContextId(
  args: InferRequestType<(typeof client.context)[':context_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context[':context_id'].$delete(args, options))
}

export async function getContextContextIdEnvironmentVariable(
  args: InferRequestType<(typeof client.context)[':context_id']['environment-variable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.context[':context_id']['environment-variable'].$get(args, options),
  )
}

export async function putContextContextIdEnvironmentVariableEnvVarName(
  args: InferRequestType<
    (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.context[':context_id']['environment-variable'][':env_var_name'].$put(args, options),
  )
}

export async function deleteContextContextIdEnvironmentVariableEnvVarName(
  args: InferRequestType<
    (typeof client.context)[':context_id']['environment-variable'][':env_var_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.context[':context_id']['environment-variable'][':env_var_name'].$delete(args, options),
  )
}

export async function getContextContextIdRestrictions(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context[':context_id'].restrictions.$get(args, options))
}

export async function postContextContextIdRestrictions(
  args: InferRequestType<(typeof client.context)[':context_id']['restrictions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.context[':context_id'].restrictions.$post(args, options))
}

export async function deleteContextContextIdRestrictionsRestrictionId(
  args: InferRequestType<
    (typeof client.context)[':context_id']['restrictions'][':restriction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.context[':context_id'].restrictions[':restriction_id'].$delete(args, options),
  )
}

export async function getProjectProviderOrganizationProjectSettings(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':provider'][':organization'][':project'].settings.$get(args, options),
  )
}

export async function patchProjectProviderOrganizationProjectSettings(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':provider'][':organization'][':project'].settings.$patch(args, options),
  )
}

export async function getOrganizationsOrgIdGroups(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].groups.$get(args, options))
}

export async function postOrganizationsOrgIdGroups(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].groups.$post(args, options))
}

export async function getOrganizationsOrgIdGroupsGroupId(
  args: InferRequestType<(typeof client.organizations)[':org_id']['groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].groups[':group_id'].$get(args, options),
  )
}

export async function deleteOrganizationsOrgIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].groups[':group_id'].$delete(args, options),
  )
}

export async function postOrganizationsOrgIdUsageExportJob(
  args: InferRequestType<(typeof client.organizations)[':org_id']['usage_export_job']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].usage_export_job.$post(args, options))
}

export async function getOrganizationsOrgIdUsageExportJobUsageExportJobId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['usage_export_job'][':usage_export_job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].usage_export_job[':usage_export_job_id'].$get(args, options),
  )
}

export async function postProjectProviderOrganizationProjectPipelineRun(
  args: InferRequestType<
    (typeof client.project)[':provider'][':organization'][':project']['pipeline']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.project[':provider'][':organization'][':project'].pipeline.run.$post(args, options),
  )
}

export async function getProjectsProjectIdPipelineDefinitions(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'].$get(args, options),
  )
}

export async function postProjectsProjectIdPipelineDefinitions(
  args: InferRequestType<(typeof client.projects)[':project_id']['pipeline-definitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'].$post(args, options),
  )
}

export async function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'][':pipeline_definition_id'].triggers.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggers(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['pipeline-definitions'][':pipeline_definition_id']['triggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['pipeline-definitions'][
      ':pipeline_definition_id'
    ].triggers.$post(args, options),
  )
}

export async function getProjectsProjectIdTriggersTriggerId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].triggers[':trigger_id'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdTriggersTriggerId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].triggers[':trigger_id'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdTriggersTriggerId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['triggers'][':trigger_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].triggers[':trigger_id'].$patch(args, options),
  )
}

export async function postProjectsProjectIdRollback(
  args: InferRequestType<(typeof client.projects)[':project_id']['rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].rollback.$post(args, options))
}

export async function getDeployEnvironments(
  args: InferRequestType<typeof client.deploy.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy.environments.$get(args, options))
}

export async function getDeployEnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.deploy.environments)[':environment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy.environments[':environment_id'].$get(args, options))
}

export async function getDeployComponents(
  args: InferRequestType<typeof client.deploy.components.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy.components.$get(args, options))
}

export async function getDeployComponentsComponentId(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy.components[':component_id'].$get(args, options))
}

export async function getDeployComponentsComponentIdVersions(
  args: InferRequestType<(typeof client.deploy.components)[':component_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploy.components[':component_id'].versions.$get(args, options))
}

export async function getWebhook(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.$get(args, options))
}

export async function postWebhook(
  args: InferRequestType<typeof client.webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.$post(args, options))
}

export async function getWebhookWebhookId(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook[':webhook_id'].$get(args, options))
}

export async function putWebhookWebhookId(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook[':webhook_id'].$put(args, options))
}

export async function deleteWebhookWebhookId(
  args: InferRequestType<(typeof client.webhook)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook[':webhook_id'].$delete(args, options))
}

export async function getOtelExporters(
  args: InferRequestType<typeof client.otel.exporters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otel.exporters.$get(args, options))
}

export async function postOtelExporters(
  args: InferRequestType<typeof client.otel.exporters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otel.exporters.$post(args, options))
}

export async function deleteOtelExportersOtelExporterId(
  args: InferRequestType<(typeof client.otel.exporters)[':otel_exporter_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otel.exporters[':otel_exporter_id'].$delete(args, options))
}

export async function getPipelinePipelineIdValues(
  args: InferRequestType<(typeof client.pipeline)[':pipeline_id']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pipeline[':pipeline_id'].values.$get(args, options))
}

export async function getWorkflowId(
  args: InferRequestType<(typeof client.workflow)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflow[':id'].$get(args, options))
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':job_id'].$get(args, options))
}
