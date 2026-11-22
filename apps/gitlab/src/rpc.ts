import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV4RolloutsId(
  args: InferRequestType<(typeof client.api.v4.rollouts)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.rollouts[':id'].$post(args, options))
}

export async function postApiV4OrbitQuery(
  args: InferRequestType<typeof client.api.v4.orbit.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.orbit.query.$post(args, options))
}

export async function postApiV4OrbitQueryName(
  args: InferRequestType<(typeof client.api.v4.orbit.query)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.orbit.query[':name'].$post(args, options))
}

export async function postApiV4OrbitContext(
  args: InferRequestType<typeof client.api.v4.orbit.context.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.orbit.context.$post(args, options))
}

export async function getApiV4OrbitSkills(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.orbit.skills.$get(undefined, options))
}

export async function getApiV4OrbitSkillsName(
  args: InferRequestType<(typeof client.api.v4.orbit.skills)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.orbit.skills[':name'].$get(args, options))
}

export async function getApiV4OrbitSkillsNamePath(
  args: InferRequestType<(typeof client.api.v4.orbit.skills)[':name'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.orbit.skills[':name'][':path'].$get(args, options))
}

export async function postApiV4JobsIdSbomScansAuthorize(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['sbom_scans']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].sbom_scans.authorize.$post(args, options))
}

export async function postApiV4JobsIdSbomScans(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['sbom_scans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].sbom_scans.$post(args, options))
}

export async function getApiV4JobsIdSbomScansSbomDigest(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['sbom_scans'][':sbom_digest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.jobs[':id'].sbom_scans[':sbom_digest'].$get(args, options),
  )
}

export async function postApiV4JobsIdSbomScansSbomDigest(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['sbom_scans'][':sbom_digest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.jobs[':id'].sbom_scans[':sbom_digest'].$post(args, options),
  )
}

export async function patchApiV4ProjectsIdComplianceExternalControlsControlIdStatus(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['compliance_external_controls'][':control_id']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].compliance_external_controls[':control_id'].status.$patch(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdSecurityScansSastSastEndpoint(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['security_scans']['sast'][':sast_endpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].security_scans.sast[':sast_endpoint'].$post(args, options),
  )
}

export async function postApiV4DuoCodeReviewEvaluations(
  args: InferRequestType<typeof client.api.v4.duo_code_review.evaluations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.duo_code_review.evaluations.$post(args, options))
}

export async function postApiV4ChatCompletions(
  args: InferRequestType<typeof client.api.v4.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.chat.completions.$post(args, options))
}

export async function postApiV4TokenExchange(
  args: InferRequestType<typeof client.api.v4.token_exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.token_exchange.$post(args, options))
}

export async function postApiV4CodeSuggestionsCompletions(
  args: InferRequestType<typeof client.api.v4.code_suggestions.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.code_suggestions.completions.$post(args, options))
}

export async function postApiV4CodeSuggestionsDirectAccess(
  args: InferRequestType<typeof client.api.v4.code_suggestions.direct_access.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.code_suggestions.direct_access.$post(args, options))
}

export async function postApiV4CodeSuggestionsEnabled(
  args: InferRequestType<typeof client.api.v4.code_suggestions.enabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.code_suggestions.enabled.$post(args, options))
}

export async function postApiV4CodeSuggestionsConnectionDetails(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.code_suggestions.connection_details.$post(undefined, options),
  )
}

export async function getApiV4ProjectsIdU28DashSearchSemantic(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['(-'][')search']['semantic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id']['(-'][')search'].semantic.$get(args, options),
  )
}

export async function postApiV4AiThirdPartyAgentsDirectAccess(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.ai.third_party_agents.direct_access.$post(undefined, options),
  )
}

export async function getApiV4ProjectsIdAiAgentSessions(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['ai_agent']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].ai_agent.sessions.$get(args, options))
}

export async function postApiV4ProjectsIdAiAgentSessions(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['ai_agent']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].ai_agent.sessions.$post(args, options))
}

export async function patchApiV4ProjectsIdAiAgentSessionsSessionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ai_agent']['sessions'][':session_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ai_agent.sessions[':session_id'].$patch(args, options),
  )
}

export async function postApiV4ProjectsIdAiAgentIdentities(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['ai_agent']['identities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].ai_agent.identities.$post(args, options))
}

export async function postApiV4ProjectsIdAiAgentAuditEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ai_agent']['audit_events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ai_agent.audit_events.$post(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsIdAuditEvents(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['audit_events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].audit_events.$post(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsToolsRiskAssessmentResults(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.tools.risk_assessment.results.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.tools.risk_assessment.results.$post(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsCodeReviewAddComments(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.code_review.add_comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.code_review.add_comments.$post(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsCodeReviewCustomInstructions(
  args: InferRequestType<
    typeof client.api.v4.ai.duo_workflows.code_review.custom_instructions.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.code_review.custom_instructions.$get(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsAgentWorkflows(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.agent_workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.agent_workflows.$post(args, options))
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['capsules']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].capsules.authorize.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsules(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['capsules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].capsules.$get(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsules(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['capsules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].capsules.$post(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesCapsuleIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['capsules'][':capsule_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].capsules[':capsule_id'].download.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4AiDuoWorkflowsRevokeToken(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.revoke_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.revoke_token.$post(args, options))
}

export async function getApiV4AiDuoWorkflowsWorkflowsId(
  args: InferRequestType<(typeof client.api.v4.ai.duo_workflows.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.workflows[':id'].$get(args, options))
}

export async function patchApiV4AiDuoWorkflowsWorkflowsId(
  args: InferRequestType<(typeof client.api.v4.ai.duo_workflows.workflows)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.workflows[':id'].$patch(args, options))
}

export async function getApiV4AiDuoWorkflowsWorkflowsIdCatalogItems(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['catalog_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].catalog_items.$get(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsIdCheckpoints(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].checkpoints.$get(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsIdCheckpoints(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['checkpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].checkpoints.$post(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsByThreadTs(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['checkpoints']['by_thread_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].checkpoints.by_thread_ts.$get(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsCheckpointId(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['checkpoints'][':checkpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].checkpoints[':checkpoint_id'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsIdCheckpointWritesBatch(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['checkpoint_writes_batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].checkpoint_writes_batch.$post(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsIdEvents(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].events.$get(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsIdEvents(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].events.$post(args, options),
  )
}

export async function putApiV4AiDuoWorkflowsWorkflowsIdEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':id']['events'][':event_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':id'].events[':event_id'].$put(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsDirectAccess(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.direct_access.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.direct_access.$post(args, options))
}

export async function getApiV4AiDuoWorkflowsListTools(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.list_tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.list_tools.$get(args, options))
}

export async function getApiV4AiDuoWorkflowsWs(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.ws.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.ws.$get(args, options))
}

export async function getApiV4AiDuoWorkflowsWorkflowsWorkflowIdTraceJsonl(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['trace.jsonl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id']['trace.jsonl'].$get(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflows(
  args: InferRequestType<typeof client.api.v4.ai.duo_workflows.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.duo_workflows.workflows.$post(args, options))
}

export async function getApiV4AiDuoWorkflowsWorkflowsAgentPrivileges(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows.agent_privileges.$get(undefined, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdExecute(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['execute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].execute.$post(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['session_files']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].session_files.authorize.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFiles(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['session_files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].session_files.$post(args, options),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileId(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['session_files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].session_files[':file_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileIdRaw(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['session_files'][':file_id']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].session_files[':file_id'].raw.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdResume(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].resume.$post(args, options),
  )
}

export async function postApiV4AiDuoWorkflowsWorkflowsWorkflowIdRestart(
  args: InferRequestType<
    (typeof client.api.v4.ai.duo_workflows.workflows)[':workflow_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.ai.duo_workflows.workflows[':workflow_id'].restart.$post(args, options),
  )
}

export async function postApiV4AiLlmGitCommand(
  args: InferRequestType<typeof client.api.v4.ai.llm.git_command.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ai.llm.git_command.$post(args, options))
}

export async function getApiV4GroupsIdEnterpriseUsers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['enterprise_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].enterprise_users.$get(args, options))
}

export async function getApiV4GroupsIdEnterpriseUsersUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['enterprise_users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].enterprise_users[':user_id'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdEnterpriseUsersUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['enterprise_users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].enterprise_users[':user_id'].$delete(args, options),
  )
}

export async function patchApiV4GroupsIdEnterpriseUsersUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['enterprise_users'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].enterprise_users[':user_id'].$patch(args, options),
  )
}

export async function patchApiV4GroupsIdEnterpriseUsersUserIdDisableTwoFactor(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['enterprise_users'][':user_id']['disable_two_factor']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].enterprise_users[':user_id'].disable_two_factor.$patch(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdDependencyListExports(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['dependency_list_exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].dependency_list_exports.$post(args, options),
  )
}

export async function postApiV4GroupsIdDependencyListExports(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['dependency_list_exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].dependency_list_exports.$post(args, options),
  )
}

export async function postApiV4PipelinesIdDependencyListExports(
  args: InferRequestType<
    (typeof client.api.v4.pipelines)[':id']['dependency_list_exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.pipelines[':id'].dependency_list_exports.$post(args, options),
  )
}

export async function getApiV4DependencyListExportsExportId(
  args: InferRequestType<(typeof client.api.v4.dependency_list_exports)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.dependency_list_exports[':export_id'].$get(args, options),
  )
}

export async function getApiV4DependencyListExportsExportIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.dependency_list_exports)[':export_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.dependency_list_exports[':export_id'].download.$get(args, options),
  )
}

export async function getApiV4GroupsIdProtectedBranches(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['protected_branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].protected_branches.$get(args, options))
}

export async function postApiV4GroupsIdProtectedBranches(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['protected_branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].protected_branches.$post(args, options))
}

export async function getApiV4GroupsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_branches'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_branches[':name'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_branches'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_branches[':name'].$delete(args, options),
  )
}

export async function patchApiV4GroupsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_branches'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_branches[':name'].$patch(args, options),
  )
}

export async function getApiV4GroupRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.group_repository_storage_moves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.group_repository_storage_moves.$get(args, options))
}

export async function postApiV4GroupRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.group_repository_storage_moves.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.group_repository_storage_moves.$post(args, options))
}

export async function getApiV4GroupRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.group_repository_storage_moves)[':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.group_repository_storage_moves[':repository_storage_move_id'].$get(args, options),
  )
}

export async function getApiV4GroupsIdRepositoryStorageMoves(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['repository_storage_moves']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].repository_storage_moves.$get(args, options),
  )
}

export async function postApiV4GroupsIdRepositoryStorageMoves(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['repository_storage_moves']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].repository_storage_moves.$post(args, options),
  )
}

export async function getApiV4GroupsIdRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['repository_storage_moves'][':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].repository_storage_moves[':repository_storage_move_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIterations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['iterations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].iterations.$get(args, options))
}

export async function getApiV4GroupsIdIterations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['iterations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].iterations.$get(args, options))
}

export async function getApiV4OccurrencesVulnerabilities(
  args: InferRequestType<typeof client.api.v4.occurrences.vulnerabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.occurrences.vulnerabilities.$get(args, options))
}

export async function getApiV4GroupsIdSamlGroupLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml_group_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml_group_links.$get(args, options))
}

export async function postApiV4GroupsIdSamlGroupLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml_group_links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml_group_links.$post(args, options))
}

export async function getApiV4GroupsIdSamlGroupLinksSamlGroupName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['saml_group_links'][':saml_group_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].saml_group_links[':saml_group_name'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdSamlGroupLinksSamlGroupName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['saml_group_links'][':saml_group_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].saml_group_links[':saml_group_name'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceIterationEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_iteration_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_iteration_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceIterationEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_iteration_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_iteration_events[
      ':event_id'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceWeightEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_weight_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_weight_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceWeightEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_weight_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_weight_events[':event_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdProtectedEnvironments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_environments.$get(args, options),
  )
}

export async function postApiV4ProjectsIdProtectedEnvironments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_environments.$post(args, options),
  )
}

export async function getApiV4ProjectsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_environments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_environments[':name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_environments'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_environments[':name'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_environments'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_environments[':name'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdProtectedEnvironments(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['protected_environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].protected_environments.$get(args, options))
}

export async function postApiV4GroupsIdProtectedEnvironments(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['protected_environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_environments.$post(args, options),
  )
}

export async function getApiV4GroupsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_environments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_environments[':name'].$get(args, options),
  )
}

export async function putApiV4GroupsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_environments'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_environments[':name'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdProtectedEnvironmentsName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['protected_environments'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].protected_environments[':name'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdAnalyticsDeploymentFrequency(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['analytics']['deployment_frequency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].analytics.deployment_frequency.$get(args, options),
  )
}

export async function getApiV4AnalyticsGroupActivityIssuesCount(
  args: InferRequestType<typeof client.api.v4.analytics.group_activity.issues_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.analytics.group_activity.issues_count.$get(args, options),
  )
}

export async function getApiV4AnalyticsGroupActivityMergeRequestsCount(
  args: InferRequestType<typeof client.api.v4.analytics.group_activity.merge_requests_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.analytics.group_activity.merge_requests_count.$get(args, options),
  )
}

export async function getApiV4AnalyticsGroupActivityNewMembersCount(
  args: InferRequestType<typeof client.api.v4.analytics.group_activity.new_members_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.analytics.group_activity.new_members_count.$get(args, options),
  )
}

export async function getApiV4AnalyticsCodeReview(
  args: InferRequestType<typeof client.api.v4.analytics.code_review.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.analytics.code_review.$get(args, options))
}

export async function getApiV4ProjectsIdDependencies(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].dependencies.$get(args, options))
}

export async function getApiV4ProjectAliases(
  args: InferRequestType<typeof client.api.v4.project_aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_aliases.$get(args, options))
}

export async function postApiV4ProjectAliases(
  args: InferRequestType<typeof client.api.v4.project_aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_aliases.$post(args, options))
}

export async function getApiV4ProjectAliasesName(
  args: InferRequestType<(typeof client.api.v4.project_aliases)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_aliases[':name'].$get(args, options))
}

export async function deleteApiV4ProjectAliasesName(
  args: InferRequestType<(typeof client.api.v4.project_aliases)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_aliases[':name'].$delete(args, options))
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_rules.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_rules.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_rules'][':approval_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_rules[
      ':approval_rule_id'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_rules'][':approval_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_rules[
      ':approval_rule_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_rules'][':approval_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_rules[
      ':approval_rule_id'
    ].$delete(args, options),
  )
}

export async function postApiV4SecurityProjectsIdVulnerabilityExports(
  args: InferRequestType<
    (typeof client.api.v4.security.projects)[':id']['vulnerability_exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.projects[':id'].vulnerability_exports.$post(args, options),
  )
}

export async function postApiV4SecurityGroupsIdVulnerabilityExports(
  args: InferRequestType<
    (typeof client.api.v4.security.groups)[':id']['vulnerability_exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.groups[':id'].vulnerability_exports.$post(args, options),
  )
}

export async function postApiV4SecurityVulnerabilityExports(
  args: InferRequestType<typeof client.api.v4.security.vulnerability_exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.security.vulnerability_exports.$post(args, options))
}

export async function getApiV4SecurityVulnerabilityExportsId(
  args: InferRequestType<(typeof client.api.v4.security.vulnerability_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.vulnerability_exports[':id'].$get(args, options),
  )
}

export async function getApiV4SecurityVulnerabilityExportsIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.security.vulnerability_exports)[':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.vulnerability_exports[':id'].download.$get(args, options),
  )
}

export async function postApiV4SecurityProjectsIdVulnerabilityArchiveExports(
  args: InferRequestType<
    (typeof client.api.v4.security.projects)[':id']['vulnerability_archive_exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.projects[':id'].vulnerability_archive_exports.$post(args, options),
  )
}

export async function getApiV4SecurityVulnerabilityArchiveExportsId(
  args: InferRequestType<
    (typeof client.api.v4.security.vulnerability_archive_exports)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.vulnerability_archive_exports[':id'].$get(args, options),
  )
}

export async function getApiV4SecurityVulnerabilityArchiveExportsIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.security.vulnerability_archive_exports)[':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.security.vulnerability_archive_exports[':id'].download.$get(args, options),
  )
}

export async function getApiV4VulnerabilitiesIdIssueLinks(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['issue_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].issue_links.$get(args, options))
}

export async function postApiV4VulnerabilitiesIdIssueLinks(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['issue_links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].issue_links.$post(args, options))
}

export async function deleteApiV4VulnerabilitiesIdIssueLinksIssueLinkId(
  args: InferRequestType<
    (typeof client.api.v4.vulnerabilities)[':id']['issue_links'][':issue_link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vulnerabilities[':id'].issue_links[':issue_link_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdVulnerabilityFindings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['vulnerability_findings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerability_findings.$get(args, options),
  )
}

export async function postApiV4VulnerabilitiesVulnerabilityIdFlagsAiDetection(
  args: InferRequestType<
    (typeof client.api.v4.vulnerabilities)[':vulnerability_id']['flags']['ai_detection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vulnerabilities[':vulnerability_id'].flags.ai_detection.$post(args, options),
  )
}

export async function getApiV4VulnerabilitiesId(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].$get(args, options))
}

export async function postApiV4VulnerabilitiesIdResolve(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].resolve.$post(args, options))
}

export async function postApiV4VulnerabilitiesIdDismiss(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].dismiss.$post(args, options))
}

export async function postApiV4VulnerabilitiesIdConfirm(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].confirm.$post(args, options))
}

export async function postApiV4VulnerabilitiesIdRevert(
  args: InferRequestType<(typeof client.api.v4.vulnerabilities)[':id']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.vulnerabilities[':id'].revert.$post(args, options))
}

export async function getApiV4ProjectsIdVulnerabilities(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['vulnerabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].vulnerabilities.$get(args, options))
}

export async function postApiV4ProjectsIdVulnerabilities(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['vulnerabilities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].vulnerabilities.$post(args, options))
}

export async function getApiV4ProjectsIdGoogleCloudSetupIntegrationsSh(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['google_cloud']['setup']['integrations.sh']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].google_cloud.setup['integrations.sh'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdGoogleCloudSetupRunnerDeploymentProjectSh(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['google_cloud']['setup']['runner_deployment_project.sh']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].google_cloud.setup['runner_deployment_project.sh'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdApprovals(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].approvals.$get(args, options))
}

export async function postApiV4ProjectsIdApprovals(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['approvals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].approvals.$post(args, options))
}

export async function getApiV4ProjectsIdManagedLicenses(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['managed_licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].managed_licenses.$get(args, options))
}

export async function postApiV4ProjectsIdManagedLicenses(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['managed_licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].managed_licenses.$post(args, options))
}

export async function getApiV4ProjectsIdManagedLicensesManagedLicenseId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['managed_licenses'][':managed_license_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].managed_licenses[':managed_license_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdManagedLicensesManagedLicenseId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['managed_licenses'][':managed_license_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].managed_licenses[':managed_license_id'].$delete(args, options),
  )
}

export async function patchApiV4ProjectsIdManagedLicensesManagedLicenseId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['managed_licenses'][':managed_license_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].managed_licenses[':managed_license_id'].$patch(args, options),
  )
}

export async function getApiV4GroupsIdManagePersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['personal_access_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.personal_access_tokens.$get(args, options),
  )
}

export async function deleteApiV4GroupsIdManagePersonalAccessTokensPatId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['personal_access_tokens'][':pat_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.personal_access_tokens[':pat_id'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdManagePersonalAccessTokensPatIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['personal_access_tokens'][':pat_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.personal_access_tokens[':pat_id'].rotate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdManageResourceAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['resource_access_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.resource_access_tokens.$get(args, options),
  )
}

export async function deleteApiV4GroupsIdManageResourceAccessTokensPratId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['resource_access_tokens'][':prat_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.resource_access_tokens[':prat_id'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdManageResourceAccessTokensPratIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['resource_access_tokens'][':prat_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.resource_access_tokens[':prat_id'].rotate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdManageSshKeys(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['manage']['ssh_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].manage.ssh_keys.$get(args, options))
}

export async function deleteApiV4GroupsIdManageSshKeysKeyId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['manage']['ssh_keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].manage.ssh_keys[':key_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['blocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].blocks.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidBlocks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['blocks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].blocks.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['blocks'][':block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].blocks[':block_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidBlocksBlockId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['blocks'][':block_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].blocks[':block_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidBlockees(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['blockees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].blockees.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestApprovalSetting(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_request_approval_setting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_request_approval_setting.$get(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestApprovalSetting(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_request_approval_setting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_request_approval_setting.$put(args, options),
  )
}

export async function getApiV4GroupsIdMergeRequestApprovalSetting(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['merge_request_approval_setting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].merge_request_approval_setting.$get(args, options),
  )
}

export async function putApiV4GroupsIdMergeRequestApprovalSetting(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['merge_request_approval_setting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].merge_request_approval_setting.$put(args, options),
  )
}

export async function getApiV4GroupsIdHooks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].hooks.$get(args, options))
}

export async function postApiV4GroupsIdHooks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].hooks.$post(args, options))
}

export async function getApiV4GroupsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].hooks[':hook_id'].$get(args, options))
}

export async function putApiV4GroupsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].hooks[':hook_id'].$put(args, options))
}

export async function deleteApiV4GroupsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].hooks[':hook_id'].$delete(args, options))
}

export async function getApiV4GroupsIdHooksHookIdEvents(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].events.$get(args, options),
  )
}

export async function putApiV4GroupsIdHooksHookIdUrlVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['url_variables'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].url_variables[':key'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdHooksHookIdUrlVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['url_variables'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].url_variables[':key'].$delete(args, options),
  )
}

export async function putApiV4GroupsIdHooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['custom_headers'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].custom_headers[':key'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdHooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['custom_headers'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].custom_headers[':key'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdHooksHookIdTestTrigger(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['test'][':trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].test[':trigger'].$post(args, options),
  )
}

export async function postApiV4GroupsIdHooksHookIdEventsHookLogIdResend(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['hooks'][':hook_id']['events'][':hook_log_id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].hooks[':hook_id'].events[':hook_log_id'].resend.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdSamlIdentities(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml.identities.$get(args, options))
}

export async function getApiV4GroupsIdSamlUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml[':uid'].$get(args, options))
}

export async function deleteApiV4GroupsIdSamlUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml[':uid'].$delete(args, options))
}

export async function patchApiV4GroupsIdSamlUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml'][':uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml[':uid'].$patch(args, options))
}

export async function getApiV4GroupsIdScimIdentities(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['scim']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].scim.identities.$get(args, options))
}

export async function getApiV4GroupsIdScimUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['scim'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].scim[':uid'].$get(args, options))
}

export async function deleteApiV4GroupsIdScimUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['scim'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].scim[':uid'].$delete(args, options))
}

export async function patchApiV4GroupsIdScimUid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['scim'][':uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].scim[':uid'].$patch(args, options))
}

export async function getApiV4GroupsIdMemberRoles(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['member_roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].member_roles.$get(args, options))
}

export async function postApiV4GroupsIdMemberRoles(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['member_roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].member_roles.$post(args, options))
}

export async function deleteApiV4GroupsIdMemberRolesMemberRoleId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['member_roles'][':member_role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].member_roles[':member_role_id'].$delete(args, options),
  )
}

export async function getApiV4MemberRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.member_roles.$get(undefined, options))
}

export async function postApiV4MemberRoles(
  args: InferRequestType<typeof client.api.v4.member_roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.member_roles.$post(args, options))
}

export async function deleteApiV4MemberRolesMemberRoleId(
  args: InferRequestType<(typeof client.api.v4.member_roles)[':member_role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.member_roles[':member_role_id'].$delete(args, options))
}

export async function getApiV4ProjectsIdMergeTrains(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['merge_trains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].merge_trains.$get(args, options))
}

export async function getApiV4ProjectsIdMergeTrainsTargetBranch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_trains'][':target_branch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_trains[':target_branch'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_trains']['merge_requests'][':merge_request_iid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_trains.merge_requests[':merge_request_iid'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeTrainsMergeRequestsMergeRequestIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_trains']['merge_requests'][':merge_request_iid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_trains.merge_requests[':merge_request_iid'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['push_rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].push_rule.$get(args, options))
}

export async function putApiV4GroupsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['push_rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].push_rule.$put(args, options))
}

export async function postApiV4GroupsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['push_rule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].push_rule.$post(args, options))
}

export async function deleteApiV4GroupsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['push_rule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].push_rule.$delete(args, options))
}

export async function getApiV4ProjectsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['push_rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].push_rule.$get(args, options))
}

export async function putApiV4ProjectsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['push_rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].push_rule.$put(args, options))
}

export async function postApiV4ProjectsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['push_rule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].push_rule.$post(args, options))
}

export async function deleteApiV4ProjectsIdPushRule(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['push_rule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].push_rule.$delete(args, options))
}

export async function getApiV4ProjectsIdMirrorPull(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['mirror']['pull']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].mirror.pull.$get(args, options))
}

export async function putApiV4ProjectsIdMirrorPull(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['mirror']['pull']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].mirror.pull.$put(args, options))
}

export async function postApiV4ProjectsIdMirrorPull(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['mirror']['pull']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].mirror.pull.$post(args, options))
}

export async function getApiV4License(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.license.$get(undefined, options))
}

export async function postApiV4License(
  args: InferRequestType<typeof client.api.v4.license.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.license.$post(args, options))
}

export async function getApiV4LicenseUsageExport(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.license.usage_export.$get(undefined, options))
}

export async function getApiV4LicenseId(
  args: InferRequestType<(typeof client.api.v4.license)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.license[':id'].$get(args, options))
}

export async function deleteApiV4LicenseId(
  args: InferRequestType<(typeof client.api.v4.license)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.license[':id'].$delete(args, options))
}

export async function putApiV4LicenseIdRefreshBillableUsers(
  args: InferRequestType<(typeof client.api.v4.license)[':id']['refresh_billable_users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.license[':id'].refresh_billable_users.$put(args, options),
  )
}

export async function getApiV4Licenses(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.licenses.$get(undefined, options))
}

export async function getApiV4GroupsIdLdapGroupLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ldap_group_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ldap_group_links.$get(args, options))
}

export async function postApiV4GroupsIdLdapGroupLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ldap_group_links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ldap_group_links.$post(args, options))
}

export async function deleteApiV4GroupsIdLdapGroupLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ldap_group_links']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ldap_group_links.$delete(args, options))
}

export async function deleteApiV4GroupsIdLdapGroupLinksCn(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['ldap_group_links'][':cn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].ldap_group_links[':cn'].$delete(args, options),
  )
}

export async function deleteApiV4GroupsIdLdapGroupLinksProviderCn(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['ldap_group_links'][':provider'][':cn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].ldap_group_links[':provider'][':cn'].$delete(args, options),
  )
}

export async function getApiV4LdapGroups(
  args: InferRequestType<typeof client.api.v4.ldap.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ldap.groups.$get(args, options))
}

export async function getApiV4LdapProviderGroups(
  args: InferRequestType<(typeof client.api.v4.ldap)[':provider']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.ldap[':provider'].groups.$get(args, options))
}

export async function getApiV4GeoSites(
  args: InferRequestType<typeof client.api.v4.geo_sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites.$get(args, options))
}

export async function postApiV4GeoSites(
  args: InferRequestType<typeof client.api.v4.geo_sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites.$post(args, options))
}

export async function getApiV4GeoSitesStatus(
  args: InferRequestType<typeof client.api.v4.geo_sites.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites.status.$get(args, options))
}

export async function getApiV4GeoSitesId(
  args: InferRequestType<(typeof client.api.v4.geo_sites)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites[':id'].$get(args, options))
}

export async function putApiV4GeoSitesId(
  args: InferRequestType<(typeof client.api.v4.geo_sites)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites[':id'].$put(args, options))
}

export async function deleteApiV4GeoSitesId(
  args: InferRequestType<(typeof client.api.v4.geo_sites)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites[':id'].$delete(args, options))
}

export async function getApiV4GeoSitesIdStatus(
  args: InferRequestType<(typeof client.api.v4.geo_sites)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites[':id'].status.$get(args, options))
}

export async function postApiV4GeoSitesIdRepair(
  args: InferRequestType<(typeof client.api.v4.geo_sites)[':id']['repair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_sites[':id'].repair.$post(args, options))
}

export async function getApiV4GeoNodes(
  args: InferRequestType<typeof client.api.v4.geo_nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes.$get(args, options))
}

export async function postApiV4GeoNodes(
  args: InferRequestType<typeof client.api.v4.geo_nodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes.$post(args, options))
}

export async function getApiV4GeoNodesStatus(
  args: InferRequestType<typeof client.api.v4.geo_nodes.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes.status.$get(args, options))
}

export async function getApiV4GeoNodesId(
  args: InferRequestType<(typeof client.api.v4.geo_nodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes[':id'].$get(args, options))
}

export async function putApiV4GeoNodesId(
  args: InferRequestType<(typeof client.api.v4.geo_nodes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes[':id'].$put(args, options))
}

export async function deleteApiV4GeoNodesId(
  args: InferRequestType<(typeof client.api.v4.geo_nodes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes[':id'].$delete(args, options))
}

export async function getApiV4GeoNodesIdStatus(
  args: InferRequestType<(typeof client.api.v4.geo_nodes)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes[':id'].status.$get(args, options))
}

export async function postApiV4GeoNodesIdRepair(
  args: InferRequestType<(typeof client.api.v4.geo_nodes)[':id']['repair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo_nodes[':id'].repair.$post(args, options))
}

export async function getApiV4Experiments(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.experiments.$get(undefined, options))
}

export async function deleteApiV4ExperimentsNameCache(
  args: InferRequestType<(typeof client.api.v4.experiments)[':name']['cache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.experiments[':name'].cache.$delete(args, options))
}

export async function getApiV4ExperimentsExperimentNameAssignments(
  args: InferRequestType<
    (typeof client.api.v4.experiments)[':experiment_name']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.experiments[':experiment_name'].assignments.$get(args, options),
  )
}

export async function postApiV4ExperimentsExperimentNameAssignments(
  args: InferRequestType<
    (typeof client.api.v4.experiments)[':experiment_name']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.experiments[':experiment_name'].assignments.$post(args, options),
  )
}

export async function deleteApiV4ExperimentsExperimentNameAssignments(
  args: InferRequestType<
    (typeof client.api.v4.experiments)[':experiment_name']['assignments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.experiments[':experiment_name'].assignments.$delete(args, options),
  )
}

export async function putApiV4ElasticsearchIndexedNamespacesRollout(
  args: InferRequestType<typeof client.api.v4.elasticsearch_indexed_namespaces.rollout.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.elasticsearch_indexed_namespaces.rollout.$put(args, options),
  )
}

export async function putApiV4ElasticsearchIndexedNamespacesRollback(
  args: InferRequestType<typeof client.api.v4.elasticsearch_indexed_namespaces.rollback.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.elasticsearch_indexed_namespaces.rollback.$put(args, options),
  )
}

export async function getApiV4GroupsIdRelatedEpicLinks(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['related_epic_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].related_epic_links.$get(args, options))
}

export async function getApiV4GroupsIdEpicsEpicIidRelatedEpics(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['related_epics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].related_epics.$get(args, options),
  )
}

export async function postApiV4GroupsIdEpicsEpicIidRelatedEpics(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['related_epics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].related_epics.$post(args, options),
  )
}

export async function deleteApiV4GroupsIdEpicsEpicIidRelatedEpicsRelatedEpicLinkId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['related_epics'][':related_epic_link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].related_epics[':related_epic_link_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdDependencyProxyPackagesNpmPackageNameDashFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['dependency_proxy']['packages']['npm'][':package_name']['-'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].dependency_proxy.packages.npm[':package_name']['-'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdDependencyProxyPackagesMavenPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['dependency_proxy']['packages']['maven'][':path'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].dependency_proxy.packages.maven[':path'][':file_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicBoards(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['epic_boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].epic_boards.$get(args, options))
}

export async function getApiV4GroupsIdEpicBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['epic_boards'][':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epic_boards[':board_id'].$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicBoardsBoardIdLists(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epic_boards'][':board_id']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epic_boards[':board_id'].lists.$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epic_boards'][':board_id']['lists'][':list_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epic_boards[':board_id'].lists[':list_id'].$get(args, options),
  )
}

export async function getApiV4GroupsIdEpics(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['epics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].epics.$get(args, options))
}

export async function getApiV4GroupsIdDashEpics(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['-']['epics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id']['-'].epics.$get(args, options))
}

export async function getApiV4GroupsIdEpicsEpicIid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].epics[':epic_iid'].$get(args, options))
}

export async function getApiV4GroupsIdDashEpicsEpicIid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['-']['epics'][':epic_iid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].epics[':epic_iid'].$get(args, options),
  )
}

export async function postApiV4GroupsIdU28DashEpics(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['(-'][')epics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id']['(-'][')epics'].$post(args, options))
}

export async function putApiV4GroupsIdU28DashEpicsEpicIid(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdU28DashEpicsEpicIid(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdU28DashEpicsEpicIidEpics(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['epics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].epics.$get(args, options),
  )
}

export async function postApiV4GroupsIdU28DashEpicsEpicIidEpics(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['epics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].epics.$post(args, options),
  )
}

export async function putApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['epics'][':child_epic_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].epics[':child_epic_id'].$put(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['epics'][':child_epic_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].epics[':child_epic_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['epics'][':child_epic_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].epics[':child_epic_id'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['issues'][':epic_issue_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].issues[':epic_issue_id'].$put(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['issues'][':epic_issue_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].issues[':epic_issue_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['(-'][')epics'][':epic_iid']['issues'][':epic_issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['(-'][')epics'][':epic_iid'].issues[':epic_issue_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicsEpicIidIssues(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].issues.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashEpicsEpicIidIssues(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['epics'][':epic_iid']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].epics[':epic_iid'].issues.$get(args, options),
  )
}

export async function getApiV4ProjectsIdDoraMetrics(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['dora']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].dora.metrics.$get(args, options))
}

export async function getApiV4GroupsIdDoraMetrics(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['dora']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].dora.metrics.$get(args, options))
}

export async function getApiV4ProjectsIdApprovalSettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['approval_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].approval_settings.$get(args, options))
}

export async function postApiV4ProjectsIdApprovalSettingsRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_settings']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_settings.rules.$post(args, options),
  )
}

export async function putApiV4ProjectsIdApprovalSettingsRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_settings']['rules'][':approval_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_settings.rules[':approval_rule_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdApprovalSettingsRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_settings']['rules'][':approval_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_settings.rules[':approval_rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdExternalStatusChecks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['external_status_checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].external_status_checks.$get(args, options),
  )
}

export async function postApiV4ProjectsIdExternalStatusChecks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['external_status_checks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].external_status_checks.$post(args, options),
  )
}

export async function putApiV4ProjectsIdExternalStatusChecksCheckId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['external_status_checks'][':check_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].external_status_checks[':check_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdExternalStatusChecksCheckId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['external_status_checks'][':check_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].external_status_checks[':check_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusCheckResponses(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['status_check_responses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].status_check_responses.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['status_checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].status_checks.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecksExternalStatusCheckIdRetry(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['status_checks'][':external_status_check_id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].status_checks[
      ':external_status_check_id'
    ].retry.$post(args, options),
  )
}

export async function getApiV4GroupsIdApprovalRules(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['approval_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].approval_rules.$get(args, options))
}

export async function postApiV4GroupsIdApprovalRules(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['approval_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].approval_rules.$post(args, options))
}

export async function putApiV4GroupsIdApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['approval_rules'][':approval_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].approval_rules[':approval_rule_id'].$put(args, options),
  )
}

export async function putApiV4GroupsIdSecuritySettings(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['security_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].security_settings.$put(args, options))
}

export async function getApiV4ProjectsIdSecuritySettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['security_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].security_settings.$get(args, options))
}

export async function putApiV4ProjectsIdSecuritySettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['security_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].security_settings.$put(args, options))
}

export async function getApiV4ProjectsIdApprovalRules(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['approval_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].approval_rules.$get(args, options))
}

export async function postApiV4ProjectsIdApprovalRules(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['approval_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].approval_rules.$post(args, options))
}

export async function getApiV4ProjectsIdApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_rules'][':approval_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_rules[':approval_rule_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_rules'][':approval_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_rules[':approval_rule_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdApprovalRulesApprovalRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['approval_rules'][':approval_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].approval_rules[':approval_rule_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurations(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['url_configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].url_configurations.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurations(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['url_configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].url_configurations.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['url_configurations'][':url_configuration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].url_configurations[
      ':url_configuration_id'
    ].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdClusterAgentsAgentIdUrlConfigurationsUrlConfigurationId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['url_configurations'][':url_configuration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].url_configurations[
      ':url_configuration_id'
    ].$delete(args, options),
  )
}

export async function getApiV4RunnerControllersRunnerControllerIdTokens(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':runner_controller_id']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':runner_controller_id'].tokens.$get(args, options),
  )
}

export async function postApiV4RunnerControllersRunnerControllerIdTokens(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':runner_controller_id']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':runner_controller_id'].tokens.$post(args, options),
  )
}

export async function getApiV4RunnerControllersRunnerControllerIdTokensId(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':runner_controller_id']['tokens'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':runner_controller_id'].tokens[':id'].$get(args, options),
  )
}

export async function deleteApiV4RunnerControllersRunnerControllerIdTokensId(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':runner_controller_id']['tokens'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':runner_controller_id'].tokens[':id'].$delete(args, options),
  )
}

export async function postApiV4RunnerControllersRunnerControllerIdTokensIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':runner_controller_id']['tokens'][':id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':runner_controller_id'].tokens[':id'].rotate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4RunnerControllersIdScopes(
  args: InferRequestType<(typeof client.api.v4.runner_controllers)[':id']['scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers[':id'].scopes.$get(args, options))
}

export async function postApiV4RunnerControllersIdScopesInstance(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':id']['scopes']['instance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':id'].scopes.instance.$post(args, options),
  )
}

export async function deleteApiV4RunnerControllersIdScopesInstance(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':id']['scopes']['instance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':id'].scopes.instance.$delete(args, options),
  )
}

export async function postApiV4RunnerControllersIdScopesRunnersRunnerId(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':id']['scopes']['runners'][':runner_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':id'].scopes.runners[':runner_id'].$post(args, options),
  )
}

export async function deleteApiV4RunnerControllersIdScopesRunnersRunnerId(
  args: InferRequestType<
    (typeof client.api.v4.runner_controllers)[':id']['scopes']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runner_controllers[':id'].scopes.runners[':runner_id'].$delete(args, options),
  )
}

export async function getApiV4RunnerControllers(
  args: InferRequestType<typeof client.api.v4.runner_controllers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers.$get(args, options))
}

export async function postApiV4RunnerControllers(
  args: InferRequestType<typeof client.api.v4.runner_controllers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers.$post(args, options))
}

export async function getApiV4RunnerControllersId(
  args: InferRequestType<(typeof client.api.v4.runner_controllers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers[':id'].$get(args, options))
}

export async function putApiV4RunnerControllersId(
  args: InferRequestType<(typeof client.api.v4.runner_controllers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers[':id'].$put(args, options))
}

export async function deleteApiV4RunnerControllersId(
  args: InferRequestType<(typeof client.api.v4.runner_controllers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runner_controllers[':id'].$delete(args, options))
}

export async function getApiV4AuditEvents(
  args: InferRequestType<typeof client.api.v4.audit_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.audit_events.$get(args, options))
}

export async function getApiV4AuditEventsId(
  args: InferRequestType<(typeof client.api.v4.audit_events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.audit_events[':id'].$get(args, options))
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidSuggestedReviewers(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['suggested_reviewers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].suggested_reviewers.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4AdminDataManagementModelNameRecordIdentifier(
  args: InferRequestType<
    (typeof client.api.v4.admin.data_management)[':model_name'][':record_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.data_management[':model_name'][':record_identifier'].$get(args, options),
  )
}

export async function putApiV4AdminDataManagementModelNameRecordIdentifierChecksum(
  args: InferRequestType<
    (typeof client.api.v4.admin.data_management)[':model_name'][':record_identifier']['checksum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.data_management[':model_name'][':record_identifier'].checksum.$put(
      args,
      options,
    ),
  )
}

export async function getApiV4AdminDataManagementModelName(
  args: InferRequestType<(typeof client.api.v4.admin.data_management)[':model_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.data_management[':model_name'].$get(args, options))
}

export async function putApiV4AdminDataManagementModelNameChecksum(
  args: InferRequestType<
    (typeof client.api.v4.admin.data_management)[':model_name']['checksum']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.data_management[':model_name'].checksum.$put(args, options),
  )
}

export async function getApiV4AdminSecurityCompliancePolicySettings(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.security.compliance_policy_settings.$get(undefined, options),
  )
}

export async function putApiV4AdminSecurityCompliancePolicySettings(
  args: InferRequestType<typeof client.api.v4.admin.security.compliance_policy_settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.security.compliance_policy_settings.$put(args, options),
  )
}

export async function getApiV4AdminKnowledgeGraphNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.admin.knowledge_graph.namespaces.$get(undefined, options),
  )
}

export async function putApiV4AdminKnowledgeGraphNamespacesId(
  args: InferRequestType<(typeof client.api.v4.admin.knowledge_graph.namespaces)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.knowledge_graph.namespaces[':id'].$put(args, options),
  )
}

export async function deleteApiV4AdminKnowledgeGraphNamespacesId(
  args: InferRequestType<(typeof client.api.v4.admin.knowledge_graph.namespaces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.knowledge_graph.namespaces[':id'].$delete(args, options),
  )
}

export async function getApiV4AdminSearchMigrations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.admin.search.migrations.$get(undefined, options))
}

export async function getApiV4AdminSearchMigrationsMigrationId(
  args: InferRequestType<(typeof client.api.v4.admin.search.migrations)[':migration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.search.migrations[':migration_id'].$get(args, options),
  )
}

export async function putApiV4AdminZoektProjectsProjectIdIndex(
  args: InferRequestType<
    (typeof client.api.v4.admin.zoekt.projects)[':project_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.zoekt.projects[':project_id'].index.$put(args, options),
  )
}

export async function patchApiV4AdminZoektNamespacesId(
  args: InferRequestType<(typeof client.api.v4.admin.zoekt.namespaces)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.zoekt.namespaces[':id'].$patch(args, options))
}

export async function getApiV4AdminZoektShards(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.admin.zoekt.shards.$get(undefined, options))
}

export async function getApiV4AdminZoektShardsNodeIdIndexedNamespaces(
  args: InferRequestType<
    (typeof client.api.v4.admin.zoekt.shards)[':node_id']['indexed_namespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.zoekt.shards[':node_id'].indexed_namespaces.$get(args, options),
  )
}

export async function putApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceId(
  args: InferRequestType<
    (typeof client.api.v4.admin.zoekt.shards)[':node_id']['indexed_namespaces'][':namespace_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.zoekt.shards[':node_id'].indexed_namespaces[':namespace_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4AdminZoektShardsNodeIdIndexedNamespacesNamespaceId(
  args: InferRequestType<
    (typeof client.api.v4.admin.zoekt.shards)[':node_id']['indexed_namespaces'][':namespace_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.zoekt.shards[':node_id'].indexed_namespaces[':namespace_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4AdminActiveContextConnections(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.admin.active_context.connections.$get(undefined, options),
  )
}

export async function putApiV4AdminActiveContextConnectionsActivate(
  args: InferRequestType<typeof client.api.v4.admin.active_context.connections.activate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.active_context.connections.activate.$put(args, options),
  )
}

export async function putApiV4AdminActiveContextConnectionsDeactivate(
  args: InferRequestType<typeof client.api.v4.admin.active_context.connections.deactivate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.active_context.connections.deactivate.$put(args, options),
  )
}

export async function putApiV4AdminActiveContextCollectionsId(
  args: InferRequestType<(typeof client.api.v4.admin.active_context.collections)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.active_context.collections[':id'].$put(args, options),
  )
}

export async function deleteApiV4AdminActiveContextDeadQueue(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.admin.active_context.dead_queue.$delete(undefined, options),
  )
}

export async function postApiV4AdminActiveContextDeadQueueReplay(
  args: InferRequestType<typeof client.api.v4.admin.active_context.dead_queue.replay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.active_context.dead_queue.replay.$post(args, options),
  )
}

export async function putApiV4AdminActiveContextCodeEnabledNamespaces(
  args: InferRequestType<typeof client.api.v4.admin.active_context.code.enabled_namespaces.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.active_context.code.enabled_namespaces.$put(args, options),
  )
}

export async function getApiV4AdminMemberRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.admin_member_roles.$get(undefined, options))
}

export async function postApiV4AdminMemberRoles(
  args: InferRequestType<typeof client.api.v4.admin_member_roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin_member_roles.$post(args, options))
}

export async function deleteApiV4AdminMemberRolesMemberRoleId(
  args: InferRequestType<(typeof client.api.v4.admin_member_roles)[':member_role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin_member_roles[':member_role_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdBoards(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].boards.$get(args, options))
}

export async function postApiV4GroupsIdBoards(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['boards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].boards.$post(args, options))
}

export async function getApiV4GroupsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['boards'][':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].boards[':board_id'].$get(args, options))
}

export async function putApiV4GroupsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['boards'][':board_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].boards[':board_id'].$put(args, options))
}

export async function deleteApiV4GroupsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['boards'][':board_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].boards[':board_id'].$delete(args, options))
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifacts(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow-artifacts']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0']['mlflow-artifacts'].artifacts.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowArtifactsArtifactsModelVersionFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow-artifacts']['artifacts'][':model_version'][':file_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0']['mlflow-artifacts'].artifacts[
      ':model_version'
    ][':file_path'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsCreate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].create.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGet(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].get.$get(
      args,
      options,
    ),
  )
}

export async function patchApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsUpdate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['update']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].update.$patch(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsGetLatestVersions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['get-latest-versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'][
      'get-latest-versions'
    ].$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsDelete(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].delete.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].search.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowRegisteredModelsAlias(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['registered-models']['alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['registered-models'].alias.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsCreate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs.create.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowRunsGet(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs.get.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs.search.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsUpdate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs.update.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogMetric(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['log-metric']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs['log-metric'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogParameter(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['log-parameter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs['log-parameter'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsSetTag(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['set-tag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs['set-tag'].$post(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsLogBatch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['log-batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs['log-batch'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowRunsDelete(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['runs']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.runs.delete.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsCreate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['model-versions']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['model-versions'].create.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGetDownloadUri(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['model-versions']['get-download-uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['model-versions'][
      'get-download-uri'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsGet(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['model-versions']['get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['model-versions'].get.$get(
      args,
      options,
    ),
  )
}

export async function patchApiV4ProjectsIdMlMlflowApi20MlflowModelVersionsUpdate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['model-versions']['update']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow['model-versions'].update.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowMetricsGetHistory(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['metrics']['get-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.metrics['get-history'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGet(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments.get.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsGetByName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['get-by-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments['get-by-name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMlMlflowApi20MlflowExperimentsList(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments.list.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments.search.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsCreate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments.create.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsSetExperimentTag(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['set-experiment-tag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments[
      'set-experiment-tag'
    ].$post(args, options),
  )
}

export async function postApiV4ProjectsIdMlMlflowApi20MlflowExperimentsDelete(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ml']['mlflow']['api']['2.0']['mlflow']['experiments']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ml.mlflow.api['2.0'].mlflow.experiments.delete.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4VscodeSettingsSyncV1Manifest(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync.v1.manifest.$get(undefined, options),
  )
}

export async function getApiV4VscodeSettingsSyncSettingsContextHashV1Manifest(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync)[':settings_context_hash']['v1']['manifest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync[':settings_context_hash'].v1.manifest.$get(args, options),
  )
}

export async function getApiV4VscodeSettingsSyncV1ResourceResourceNameId(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync.v1.resource)[':resource_name'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync.v1.resource[':resource_name'][':id'].$get(args, options),
  )
}

export async function getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameId(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync)[':settings_context_hash']['v1']['resource'][':resource_name'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync[':settings_context_hash'].v1.resource[':resource_name'][
      ':id'
    ].$get(args, options),
  )
}

export async function getApiV4VscodeSettingsSyncV1ResourceResourceName(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync.v1.resource)[':resource_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync.v1.resource[':resource_name'].$get(args, options),
  )
}

export async function postApiV4VscodeSettingsSyncV1ResourceResourceName(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync.v1.resource)[':resource_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync.v1.resource[':resource_name'].$post(args, options),
  )
}

export async function getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceName(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync)[':settings_context_hash']['v1']['resource'][':resource_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync[':settings_context_hash'].v1.resource[':resource_name'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceName(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync)[':settings_context_hash']['v1']['resource'][':resource_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync[':settings_context_hash'].v1.resource[
      ':resource_name'
    ].$post(args, options),
  )
}

export async function deleteApiV4VscodeSettingsSyncV1Collection(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync.v1.collection.$delete(undefined, options),
  )
}

export async function deleteApiV4VscodeSettingsSyncSettingsContextHashV1Collection(
  args: InferRequestType<
    (typeof client.api.v4.vscode.settings_sync)[':settings_context_hash']['v1']['collection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.vscode.settings_sync[':settings_context_hash'].v1.collection.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4UsersIdCustomAttributes(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['custom_attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].custom_attributes.$get(args, options))
}

export async function getApiV4UsersIdCustomAttributesKey(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['custom_attributes'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':id'].custom_attributes[':key'].$get(args, options),
  )
}

export async function putApiV4UsersIdCustomAttributesKey(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['custom_attributes'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':id'].custom_attributes[':key'].$put(args, options),
  )
}

export async function deleteApiV4UsersIdCustomAttributesKey(
  args: InferRequestType<
    (typeof client.api.v4.users)[':id']['custom_attributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':id'].custom_attributes[':key'].$delete(args, options),
  )
}

export async function getApiV4UsersIdSupportPin(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['support_pin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].support_pin.$get(args, options))
}

export async function postApiV4UsersIdSupportPinRevoke(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['support_pin']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].support_pin.revoke.$post(args, options))
}

export async function getApiV4Users(
  args: InferRequestType<typeof client.api.v4.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users.$get(args, options))
}

export async function postApiV4Users(
  args: InferRequestType<typeof client.api.v4.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users.$post(args, options))
}

export async function getApiV4UsersId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].$get(args, options))
}

export async function putApiV4UsersId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].$put(args, options))
}

export async function deleteApiV4UsersId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].$delete(args, options))
}

export async function getApiV4UsersUserIdStatus(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].status.$get(args, options))
}

export async function postApiV4UsersIdFollow(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['follow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].follow.$post(args, options))
}

export async function postApiV4UsersIdUnfollow(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['unfollow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].unfollow.$post(args, options))
}

export async function getApiV4UsersIdFollowing(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].following.$get(args, options))
}

export async function getApiV4UsersIdFollowers(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].followers.$get(args, options))
}

export async function patchApiV4UsersIdDisableTwoFactor(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['disable_two_factor']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].disable_two_factor.$patch(args, options))
}

export async function deleteApiV4UsersIdIdentitiesProvider(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['identities'][':provider']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':id'].identities[':provider'].$delete(args, options),
  )
}

export async function getApiV4UsersUserIdProjectDeployKeys(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['project_deploy_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].project_deploy_keys.$get(args, options),
  )
}

export async function getApiV4UsersUserIdKeys(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].keys.$get(args, options))
}

export async function postApiV4UsersUserIdKeys(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].keys.$post(args, options))
}

export async function getApiV4UsersIdKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].keys[':key_id'].$get(args, options))
}

export async function deleteApiV4UsersIdKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].keys[':key_id'].$delete(args, options))
}

export async function getApiV4UsersIdGpgKeys(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['gpg_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].gpg_keys.$get(args, options))
}

export async function postApiV4UsersIdGpgKeys(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['gpg_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].gpg_keys.$post(args, options))
}

export async function getApiV4UsersIdGpgKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['gpg_keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].gpg_keys[':key_id'].$get(args, options))
}

export async function deleteApiV4UsersIdGpgKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['gpg_keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].gpg_keys[':key_id'].$delete(args, options))
}

export async function postApiV4UsersIdGpgKeysKeyIdRevoke(
  args: InferRequestType<
    (typeof client.api.v4.users)[':id']['gpg_keys'][':key_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':id'].gpg_keys[':key_id'].revoke.$post(args, options),
  )
}

export async function getApiV4UsersIdEmails(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['emails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].emails.$get(args, options))
}

export async function postApiV4UsersIdEmails(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].emails.$post(args, options))
}

export async function deleteApiV4UsersIdEmailsEmailId(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['emails'][':email_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].emails[':email_id'].$delete(args, options))
}

export async function postApiV4UsersIdActivate(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].activate.$post(args, options))
}

export async function postApiV4UsersIdApprove(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].approve.$post(args, options))
}

export async function postApiV4UsersIdReject(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].reject.$post(args, options))
}

export async function postApiV4UsersIdDeactivate(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].deactivate.$post(args, options))
}

export async function postApiV4UsersIdBlock(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].block.$post(args, options))
}

export async function postApiV4UsersIdUnblock(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].unblock.$post(args, options))
}

export async function postApiV4UsersIdBan(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['ban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].ban.$post(args, options))
}

export async function postApiV4UsersIdUnban(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['unban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].unban.$post(args, options))
}

export async function getApiV4UsersUserIdMemberships(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].memberships.$get(args, options))
}

export async function getApiV4UsersIdAssociationsCount(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['associations_count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].associations_count.$get(args, options))
}

export async function getApiV4UsersUserIdImpersonationTokens(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['impersonation_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].impersonation_tokens.$get(args, options),
  )
}

export async function postApiV4UsersUserIdImpersonationTokens(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['impersonation_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].impersonation_tokens.$post(args, options),
  )
}

export async function getApiV4UsersUserIdImpersonationTokensImpersonationTokenId(
  args: InferRequestType<
    (typeof client.api.v4.users)[':user_id']['impersonation_tokens'][':impersonation_token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].impersonation_tokens[':impersonation_token_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4UsersUserIdImpersonationTokensImpersonationTokenId(
  args: InferRequestType<
    (typeof client.api.v4.users)[':user_id']['impersonation_tokens'][':impersonation_token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].impersonation_tokens[':impersonation_token_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV4UsersUserIdPersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.users)[':user_id']['personal_access_tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].personal_access_tokens.$post(args, options),
  )
}

export async function getApiV4User(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.$get(undefined, options))
}

export async function getApiV4UserKeys(
  args: InferRequestType<typeof client.api.v4.user.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.keys.$get(args, options))
}

export async function postApiV4UserKeys(
  args: InferRequestType<typeof client.api.v4.user.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.keys.$post(args, options))
}

export async function getApiV4UserKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.user.keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.keys[':key_id'].$get(args, options))
}

export async function deleteApiV4UserKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.user.keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.keys[':key_id'].$delete(args, options))
}

export async function getApiV4UserGpgKeys(
  args: InferRequestType<typeof client.api.v4.user.gpg_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.gpg_keys.$get(args, options))
}

export async function postApiV4UserGpgKeys(
  args: InferRequestType<typeof client.api.v4.user.gpg_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.gpg_keys.$post(args, options))
}

export async function getApiV4UserGpgKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.user.gpg_keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.gpg_keys[':key_id'].$get(args, options))
}

export async function deleteApiV4UserGpgKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.user.gpg_keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.gpg_keys[':key_id'].$delete(args, options))
}

export async function postApiV4UserGpgKeysKeyIdRevoke(
  args: InferRequestType<(typeof client.api.v4.user.gpg_keys)[':key_id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.gpg_keys[':key_id'].revoke.$post(args, options))
}

export async function getApiV4UserEmails(
  args: InferRequestType<typeof client.api.v4.user.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.emails.$get(args, options))
}

export async function postApiV4UserEmails(
  args: InferRequestType<typeof client.api.v4.user.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.emails.$post(args, options))
}

export async function putApiV4UserUserIdCreditCardValidation(
  args: InferRequestType<(typeof client.api.v4.user)[':user_id']['credit_card_validation']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.user[':user_id'].credit_card_validation.$put(args, options),
  )
}

export async function getApiV4UserSupportPin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.support_pin.$get(undefined, options))
}

export async function postApiV4UserSupportPin(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.support_pin.$post(undefined, options))
}

export async function getApiV4UserPreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.preferences.$get(undefined, options))
}

export async function putApiV4UserPreferences(
  args: InferRequestType<typeof client.api.v4.user.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.preferences.$put(args, options))
}

export async function getApiV4UserEmailsEmailId(
  args: InferRequestType<(typeof client.api.v4.user.emails)[':email_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.emails[':email_id'].$get(args, options))
}

export async function deleteApiV4UserEmailsEmailId(
  args: InferRequestType<(typeof client.api.v4.user.emails)[':email_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.emails[':email_id'].$delete(args, options))
}

export async function getApiV4UserActivities(
  args: InferRequestType<typeof client.api.v4.user.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.activities.$get(args, options))
}

export async function getApiV4UserStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.status.$get(undefined, options))
}

export async function putApiV4UserStatus(
  args: InferRequestType<typeof client.api.v4.user.status.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.status.$put(args, options))
}

export async function patchApiV4UserStatus(
  args: InferRequestType<typeof client.api.v4.user.status.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.status.$patch(args, options))
}

export async function putApiV4UserAvatar(
  args: InferRequestType<typeof client.api.v4.user.avatar.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.avatar.$put(args, options))
}

export async function postApiV4UserPersonalAccessTokens(
  args: InferRequestType<typeof client.api.v4.user.personal_access_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.personal_access_tokens.$post(args, options))
}

export async function getApiV4UserApplications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user.applications.$get(undefined, options))
}

export async function postApiV4UserApplications(
  args: InferRequestType<typeof client.api.v4.user.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.applications.$post(args, options))
}

export async function getApiV4UserApplicationsId(
  args: InferRequestType<(typeof client.api.v4.user.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.applications[':id'].$get(args, options))
}

export async function putApiV4UserApplicationsId(
  args: InferRequestType<(typeof client.api.v4.user.applications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.applications[':id'].$put(args, options))
}

export async function deleteApiV4UserApplicationsId(
  args: InferRequestType<(typeof client.api.v4.user.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.applications[':id'].$delete(args, options))
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidTodo(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['todo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].todo.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidTodo(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['todo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].todo.$post(args, options),
  )
}

export async function getApiV4Todos(
  args: InferRequestType<typeof client.api.v4.todos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.todos.$get(args, options))
}

export async function postApiV4TodosIdMarkAsDone(
  args: InferRequestType<(typeof client.api.v4.todos)[':id']['mark_as_done']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.todos[':id'].mark_as_done.$post(args, options))
}

export async function postApiV4TodosMarkAsDone(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.todos.mark_as_done.$post(undefined, options))
}

export async function postApiV4GroupsIdEpicsEpicIidTodo(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['todo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].todo.$post(args, options),
  )
}

export async function getApiV4TemplatesLicenses(
  args: InferRequestType<typeof client.api.v4.templates.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.licenses.$get(args, options))
}

export async function getApiV4TemplatesLicensesName(
  args: InferRequestType<(typeof client.api.v4.templates.licenses)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.licenses[':name'].$get(args, options))
}

export async function getApiV4TemplatesGitignores(
  args: InferRequestType<typeof client.api.v4.templates.gitignores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.gitignores.$get(args, options))
}

export async function getApiV4TemplatesGitignoresName(
  args: InferRequestType<(typeof client.api.v4.templates.gitignores)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.gitignores[':name'].$get(args, options))
}

export async function getApiV4TemplatesGitlabCiYmls(
  args: InferRequestType<typeof client.api.v4.templates.gitlab_ci_ymls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.gitlab_ci_ymls.$get(args, options))
}

export async function getApiV4TemplatesGitlabCiYmlsName(
  args: InferRequestType<(typeof client.api.v4.templates.gitlab_ci_ymls)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.gitlab_ci_ymls[':name'].$get(args, options))
}

export async function getApiV4TemplatesDockerfiles(
  args: InferRequestType<typeof client.api.v4.templates.dockerfiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.dockerfiles.$get(args, options))
}

export async function getApiV4TemplatesDockerfilesName(
  args: InferRequestType<(typeof client.api.v4.templates.dockerfiles)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.templates.dockerfiles[':name'].$get(args, options))
}

export async function postApiV4ProjectsIdMergeRequestsSubscribableIdSubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':subscribable_id']['subscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':subscribable_id'].subscribe.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsSubscribableIdUnsubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':subscribable_id']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':subscribable_id'].unsubscribe.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdIssuesSubscribableIdSubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':subscribable_id']['subscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':subscribable_id'].subscribe.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesSubscribableIdUnsubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':subscribable_id']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':subscribable_id'].unsubscribe.$post(args, options),
  )
}

export async function postApiV4ProjectsIdLabelsSubscribableIdSubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['labels'][':subscribable_id']['subscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].labels[':subscribable_id'].subscribe.$post(args, options),
  )
}

export async function postApiV4ProjectsIdLabelsSubscribableIdUnsubscribe(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['labels'][':subscribable_id']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].labels[':subscribable_id'].unsubscribe.$post(args, options),
  )
}

export async function postApiV4GroupsIdLabelsSubscribableIdSubscribe(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['labels'][':subscribable_id']['subscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].labels[':subscribable_id'].subscribe.$post(args, options),
  )
}

export async function postApiV4GroupsIdLabelsSubscribableIdUnsubscribe(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['labels'][':subscribable_id']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].labels[':subscribable_id'].unsubscribe.$post(args, options),
  )
}

export async function getApiV4SnippetRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.snippet_repository_storage_moves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippet_repository_storage_moves.$get(args, options))
}

export async function postApiV4SnippetRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.snippet_repository_storage_moves.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippet_repository_storage_moves.$post(args, options))
}

export async function getApiV4SnippetRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.snippet_repository_storage_moves)[':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.snippet_repository_storage_moves[':repository_storage_move_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4SnippetsIdRepositoryStorageMoves(
  args: InferRequestType<
    (typeof client.api.v4.snippets)[':id']['repository_storage_moves']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.snippets[':id'].repository_storage_moves.$get(args, options),
  )
}

export async function postApiV4SnippetsIdRepositoryStorageMoves(
  args: InferRequestType<
    (typeof client.api.v4.snippets)[':id']['repository_storage_moves']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.snippets[':id'].repository_storage_moves.$post(args, options),
  )
}

export async function getApiV4SnippetsIdRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.snippets)[':id']['repository_storage_moves'][':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.snippets[':id'].repository_storage_moves[':repository_storage_move_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4SidekiqQueueMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.sidekiq.queue_metrics.$get(undefined, options))
}

export async function getApiV4SidekiqProcessMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.sidekiq.process_metrics.$get(undefined, options))
}

export async function getApiV4SidekiqJobStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.sidekiq.job_stats.$get(undefined, options))
}

export async function getApiV4SidekiqCompoundMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.sidekiq.compound_metrics.$get(undefined, options))
}

export async function getApiV4ApplicationSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.application.settings.$get(undefined, options))
}

export async function putApiV4ApplicationSettings(
  args: InferRequestType<typeof client.api.v4.application.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.application.settings.$put(args, options))
}

export async function getApiV4ServiceAccounts(
  args: InferRequestType<typeof client.api.v4.service_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.service_accounts.$get(args, options))
}

export async function postApiV4ServiceAccounts(
  args: InferRequestType<typeof client.api.v4.service_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.service_accounts.$post(args, options))
}

export async function patchApiV4ServiceAccountsUserId(
  args: InferRequestType<(typeof client.api.v4.service_accounts)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.service_accounts[':user_id'].$patch(args, options))
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceStateEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_state_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_state_events.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceStateEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_state_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_state_events[':event_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_state_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_state_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_state_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_state_events[
      ':event_id'
    ].$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEventableIdResourceStateEvents(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':eventable_id']['resource_state_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':eventable_id'].resource_state_events.$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEventableIdResourceStateEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':eventable_id']['resource_state_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':eventable_id'].resource_state_events[':event_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceLabelEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_label_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_label_events.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceLabelEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_label_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_label_events[':event_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_label_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_label_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_label_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_label_events[
      ':event_id'
    ].$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEventableIdResourceLabelEvents(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':eventable_id']['resource_label_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':eventable_id'].resource_label_events.$get(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEventableIdResourceLabelEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':eventable_id']['resource_label_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':eventable_id'].resource_label_events[':event_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdServiceAccounts(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['service_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].service_accounts.$get(args, options))
}

export async function postApiV4ProjectsIdServiceAccounts(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['service_accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].service_accounts.$post(args, options))
}

export async function getApiV4ProjectsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].$delete(args, options),
  )
}

export async function patchApiV4ProjectsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].$patch(args, options),
  )
}

export async function getApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['personal_access_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].personal_access_tokens.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['personal_access_tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].personal_access_tokens.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['personal_access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].personal_access_tokens[
      ':token_id'
    ].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['service_accounts'][':user_id']['personal_access_tokens'][':token_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].service_accounts[':user_id'].personal_access_tokens[
      ':token_id'
    ].rotate.$post(args, options),
  )
}

export async function getApiV4ProjectRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.project_repository_storage_moves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_repository_storage_moves.$get(args, options))
}

export async function postApiV4ProjectRepositoryStorageMoves(
  args: InferRequestType<typeof client.api.v4.project_repository_storage_moves.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.project_repository_storage_moves.$post(args, options))
}

export async function getApiV4ProjectRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.project_repository_storage_moves)[':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.project_repository_storage_moves[':repository_storage_move_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdRepositoryStorageMoves(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository_storage_moves']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository_storage_moves.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryStorageMoves(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository_storage_moves']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository_storage_moves.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryStorageMovesRepositoryStorageMoveId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository_storage_moves'][':repository_storage_move_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository_storage_moves[':repository_storage_move_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMilestones(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['milestones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].milestones.$get(args, options))
}

export async function postApiV4ProjectsIdMilestones(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['milestones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].milestones.$post(args, options))
}

export async function getApiV4ProjectsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMilestonesMilestoneIdIssues(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].issues.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMilestonesMilestoneIdMergeRequests(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['merge_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].merge_requests.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMilestonesMilestoneIdPromote(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['promote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].promote.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMilestonesMilestoneIdBurndownEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['milestones'][':milestone_id']['burndown_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].milestones[':milestone_id'].burndown_events.$get(args, options),
  )
}

export async function getApiV4NotificationSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.notification_settings.$get(undefined, options))
}

export async function putApiV4NotificationSettings(
  args: InferRequestType<typeof client.api.v4.notification_settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.notification_settings.$put(args, options))
}

export async function getApiV4GroupsIdNotificationSettings(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['notification_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].notification_settings.$get(args, options))
}

export async function putApiV4GroupsIdNotificationSettings(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['notification_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].notification_settings.$put(args, options))
}

export async function getApiV4ProjectsIdNotificationSettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['notification_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].notification_settings.$get(args, options),
  )
}

export async function putApiV4ProjectsIdNotificationSettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['notification_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].notification_settings.$put(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdIssuesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdIssuesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].notes[':note_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdMergeRequestsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].notes[':note_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].notes[':note_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdSnippetsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdSnippetsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdSnippetsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdWikiPagesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['wiki_pages'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].wiki_pages[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdWikiPagesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['wiki_pages'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].wiki_pages[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4GroupsIdEpicsNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdEpicsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdEpicsNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdVulnerabilitiesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['vulnerabilities'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerabilities[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdVulnerabilitiesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['vulnerabilities'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerabilities[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdVulnerabilitiesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['vulnerabilities'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerabilities[':noteable_id'].notes[':note_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdVulnerabilitiesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['vulnerabilities'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerabilities[':noteable_id'].notes[':note_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdVulnerabilitiesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['vulnerabilities'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].vulnerabilities[':noteable_id'].notes[':note_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdWikiPagesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['wiki_pages'][':noteable_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].wiki_pages[':noteable_id'].notes.$get(args, options),
  )
}

export async function postApiV4GroupsIdWikiPagesNoteableIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['wiki_pages'][':noteable_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].wiki_pages[':noteable_id'].notes.$post(args, options),
  )
}

export async function getApiV4GroupsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdWikiPagesNoteableIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['wiki_pages'][':noteable_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].wiki_pages[':noteable_id'].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4Mcp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.mcp.$get(undefined, options))
}

export async function postApiV4Mcp(
  args: InferRequestType<typeof client.api.v4.mcp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.mcp.$post(args, options))
}

export async function getApiV4GroupsIdServiceAccounts(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['service_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].service_accounts.$get(args, options))
}

export async function postApiV4GroupsIdServiceAccounts(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['service_accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].service_accounts.$post(args, options))
}

export async function getApiV4GroupsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].$delete(args, options),
  )
}

export async function patchApiV4GroupsIdServiceAccountsUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].$patch(args, options),
  )
}

export async function getApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['personal_access_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].personal_access_tokens.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokens(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['personal_access_tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].personal_access_tokens.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['personal_access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].personal_access_tokens[
      ':token_id'
    ].$delete(args, options),
  )
}

export async function postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['service_accounts'][':user_id']['personal_access_tokens'][':token_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].service_accounts[':user_id'].personal_access_tokens[
      ':token_id'
    ].rotate.$post(args, options),
  )
}

export async function getApiV4GroupsIdMilestones(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['milestones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].milestones.$get(args, options))
}

export async function postApiV4GroupsIdMilestones(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['milestones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].milestones.$post(args, options))
}

export async function getApiV4GroupsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdMilestonesMilestoneId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdMilestonesMilestoneIdIssues(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].issues.$get(args, options),
  )
}

export async function getApiV4GroupsIdMilestonesMilestoneIdMergeRequests(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['merge_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].merge_requests.$get(args, options),
  )
}

export async function getApiV4GroupsIdMilestonesMilestoneIdBurndownEvents(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['milestones'][':milestone_id']['burndown_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].milestones[':milestone_id'].burndown_events.$get(args, options),
  )
}

export async function getApiV4ProjectsIdLabels(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels.$get(args, options))
}

export async function putApiV4ProjectsIdLabels(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels.$put(args, options))
}

export async function postApiV4ProjectsIdLabels(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels.$post(args, options))
}

export async function deleteApiV4ProjectsIdLabels(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels.$delete(args, options))
}

export async function getApiV4ProjectsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels[':name'].$get(args, options))
}

export async function putApiV4ProjectsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels[':name'].$put(args, options))
}

export async function deleteApiV4ProjectsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels[':name'].$delete(args, options))
}

export async function putApiV4ProjectsIdLabelsPromote(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['labels']['promote']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].labels.promote.$put(args, options))
}

export async function putApiV4ProjectsIdLabelsNamePromote(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['labels'][':name']['promote']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].labels[':name'].promote.$put(args, options),
  )
}

export async function getApiV4GroupsIdLabels(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels.$get(args, options))
}

export async function putApiV4GroupsIdLabels(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels.$put(args, options))
}

export async function postApiV4GroupsIdLabels(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels.$post(args, options))
}

export async function deleteApiV4GroupsIdLabels(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels.$delete(args, options))
}

export async function getApiV4GroupsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels[':name'].$get(args, options))
}

export async function putApiV4GroupsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels[':name'].$put(args, options))
}

export async function deleteApiV4GroupsIdLabelsName(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['labels'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].labels[':name'].$delete(args, options))
}

export async function getApiV4GroupsIdBoardsBoardIdLists(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['boards'][':board_id']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].boards[':board_id'].lists.$get(args, options),
  )
}

export async function postApiV4GroupsIdBoardsBoardIdLists(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['boards'][':board_id']['lists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].boards[':board_id'].lists.$post(args, options),
  )
}

export async function getApiV4GroupsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['boards'][':board_id']['lists'][':list_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].boards[':board_id'].lists[':list_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['boards'][':board_id']['lists'][':list_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].boards[':board_id'].lists[':list_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['boards'][':board_id']['lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].boards[':board_id'].lists[':list_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].notes.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].notes.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdIssuesNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions.$get(args, options),
  )
}

export async function postApiV4ProjectsIdSnippetsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions.$post(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[':discussion_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[':discussion_id'].notes.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[
      ':discussion_id'
    ].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdSnippetsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[':discussion_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[':discussion_id'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[
      ':discussion_id'
    ].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[
      ':discussion_id'
    ].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].notes.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].notes.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdRepositoryCommitsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':noteable_id'].discussions[
      ':discussion_id'
    ].notes[':note_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions.$get(args, options),
  )
}

export async function postApiV4GroupsIdEpicsNoteableIdDiscussions(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions.$post(args, options),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].notes.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotes(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].notes.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$get(args, options),
  )
}

export async function putApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdEpicsNoteableIdDiscussionsDiscussionIdNotesNoteId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':noteable_id']['discussions'][':discussion_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':noteable_id'].discussions[':discussion_id'].notes[
      ':note_id'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdBoards(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].boards.$get(args, options))
}

export async function postApiV4ProjectsIdBoards(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['boards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].boards.$post(args, options))
}

export async function getApiV4ProjectsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['boards'][':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].boards[':board_id'].$get(args, options))
}

export async function putApiV4ProjectsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['boards'][':board_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].boards[':board_id'].$put(args, options))
}

export async function deleteApiV4ProjectsIdBoardsBoardId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['boards'][':board_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdBoardsBoardIdLists(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['boards'][':board_id']['lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].lists.$get(args, options),
  )
}

export async function postApiV4ProjectsIdBoardsBoardIdLists(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['boards'][':board_id']['lists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].lists.$post(args, options),
  )
}

export async function getApiV4ProjectsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['boards'][':board_id']['lists'][':list_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].lists[':list_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['boards'][':board_id']['lists'][':list_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].lists[':list_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdBoardsBoardIdListsListId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['boards'][':board_id']['lists'][':list_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].boards[':board_id'].lists[':list_id'].$delete(args, options),
  )
}

export async function getApiV4AdminSidekiqConcurrencyLimitsWorkerClass(
  args: InferRequestType<
    (typeof client.api.v4.admin.sidekiq.concurrency_limits)[':worker_class']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.sidekiq.concurrency_limits[':worker_class'].$get(args, options),
  )
}

export async function putApiV4AdminSidekiqConcurrencyLimitsWorkerClass(
  args: InferRequestType<
    (typeof client.api.v4.admin.sidekiq.concurrency_limits)[':worker_class']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.sidekiq.concurrency_limits[':worker_class'].$put(args, options),
  )
}

export async function deleteApiV4AdminSidekiqConcurrencyLimitsWorkerClass(
  args: InferRequestType<
    (typeof client.api.v4.admin.sidekiq.concurrency_limits)[':worker_class']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.sidekiq.concurrency_limits[':worker_class'].$delete(args, options),
  )
}

export async function deleteApiV4AdminSidekiqQueuesQueueName(
  args: InferRequestType<(typeof client.api.v4.admin.sidekiq.queues)[':queue_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.sidekiq.queues[':queue_name'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdWikis(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis.$get(args, options))
}

export async function postApiV4GroupsIdWikis(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis.$post(args, options))
}

export async function getApiV4GroupsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis[':slug'].$get(args, options))
}

export async function putApiV4GroupsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis'][':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis[':slug'].$put(args, options))
}

export async function deleteApiV4GroupsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis'][':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis[':slug'].$delete(args, options))
}

export async function postApiV4GroupsIdWikisAttachments(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['wikis']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].wikis.attachments.$post(args, options))
}

export async function getApiV4ProjectsIdWikis(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis.$get(args, options))
}

export async function postApiV4ProjectsIdWikis(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis.$post(args, options))
}

export async function getApiV4ProjectsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis[':slug'].$get(args, options))
}

export async function putApiV4ProjectsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis'][':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis[':slug'].$put(args, options))
}

export async function deleteApiV4ProjectsIdWikisSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis'][':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis[':slug'].$delete(args, options))
}

export async function postApiV4ProjectsIdWikisAttachments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['wikis']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].wikis.attachments.$post(args, options))
}

export async function getApiV4WebCommitsPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.web_commits.public_key.$get(undefined, options))
}

export async function postApiV4UserRunners(
  args: InferRequestType<typeof client.api.v4.user.runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.runners.$post(args, options))
}

export async function getApiV4UserCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.user_counts.$get(undefined, options))
}

export async function getApiV4UsageDataQueries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.usage_data.queries.$get(undefined, options))
}

export async function getApiV4UsageDataNonSqlMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.usage_data.non_sql_metrics.$get(undefined, options))
}

export async function postApiV4UsageDataIncrementCounter(
  args: InferRequestType<typeof client.api.v4.usage_data.increment_counter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.usage_data.increment_counter.$post(args, options))
}

export async function postApiV4UsageDataIncrementUniqueUsers(
  args: InferRequestType<typeof client.api.v4.usage_data.increment_unique_users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.usage_data.increment_unique_users.$post(args, options))
}

export async function postApiV4UsageDataTrackEvents(
  args: InferRequestType<typeof client.api.v4.usage_data.track_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.usage_data.track_events.$post(args, options))
}

export async function getApiV4UsageDataMetricDefinitions(
  args: InferRequestType<typeof client.api.v4.usage_data.metric_definitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.usage_data.metric_definitions.$get(args, options))
}

export async function getApiV4FeatureFlagsUnleashProjectId(
  args: InferRequestType<(typeof client.api.v4.feature_flags.unleash)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.feature_flags.unleash[':project_id'].$get(args, options))
}

export async function getApiV4FeatureFlagsUnleashProjectIdFeatures(
  args: InferRequestType<
    (typeof client.api.v4.feature_flags.unleash)[':project_id']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.feature_flags.unleash[':project_id'].features.$get(args, options),
  )
}

export async function getApiV4FeatureFlagsUnleashProjectIdClientFeatures(
  args: InferRequestType<
    (typeof client.api.v4.feature_flags.unleash)[':project_id']['client']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.feature_flags.unleash[':project_id'].client.features.$get(args, options),
  )
}

export async function postApiV4FeatureFlagsUnleashProjectIdClientRegister(
  args: InferRequestType<
    (typeof client.api.v4.feature_flags.unleash)[':project_id']['client']['register']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.feature_flags.unleash[':project_id'].client.register.$post(args, options),
  )
}

export async function postApiV4FeatureFlagsUnleashProjectIdClientMetrics(
  args: InferRequestType<
    (typeof client.api.v4.feature_flags.unleash)[':project_id']['client']['metrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.feature_flags.unleash[':project_id'].client.metrics.$post(args, options),
  )
}

export async function getApiV4Topics(
  args: InferRequestType<typeof client.api.v4.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics.$get(args, options))
}

export async function postApiV4Topics(
  args: InferRequestType<typeof client.api.v4.topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics.$post(args, options))
}

export async function getApiV4TopicsId(
  args: InferRequestType<(typeof client.api.v4.topics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics[':id'].$get(args, options))
}

export async function putApiV4TopicsId(
  args: InferRequestType<(typeof client.api.v4.topics)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics[':id'].$put(args, options))
}

export async function deleteApiV4TopicsId(
  args: InferRequestType<(typeof client.api.v4.topics)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics[':id'].$delete(args, options))
}

export async function postApiV4TopicsMerge(
  args: InferRequestType<typeof client.api.v4.topics.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.topics.merge.$post(args, options))
}

export async function getApiV4ProjectsIdTerraformStateNameVersionsSerial(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['versions'][':serial']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].versions[':serial'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdTerraformStateNameVersionsSerial(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['versions'][':serial']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].versions[':serial'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdTerraformStateProtectionRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state_protection_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state_protection_rules.$get(args, options),
  )
}

export async function postApiV4ProjectsIdTerraformStateProtectionRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state_protection_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state_protection_rules.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state_protection_rules'][':terraform_state_protection_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state_protection_rules[
      ':terraform_state_protection_rule_id'
    ].$delete(args, options),
  )
}

export async function patchApiV4ProjectsIdTerraformStateProtectionRulesTerraformStateProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state_protection_rules'][':terraform_state_protection_rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state_protection_rules[
      ':terraform_state_protection_rule_id'
    ].$patch(args, options),
  )
}

export async function getApiV4ProjectsIdTerraformStateName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdTerraformStateName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdTerraformStateName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdTerraformStateNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].authorize.$post(args, options),
  )
}

export async function postApiV4ProjectsIdTerraformStateNameLock(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['lock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].lock.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdTerraformStateNameLock(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['terraform']['state'][':name']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].terraform.state[':name'].lock.$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['terraform']['modules'][':module_name'][':module_system']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.terraform.modules[':module_name'][':module_system'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersion(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['terraform']['modules'][':module_name'][':module_system'][':module_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.terraform.modules[':module_name'][':module_system'][
      ':module_version'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFileAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['terraform']['modules'][':module_name'][':module_system'][':module_version']['file']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.terraform.modules[':module_name'][':module_system'][
      ':module_version'
    ].file.authorize.$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFile(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['terraform']['modules'][':module_name'][':module_system'][':module_version']['file']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.terraform.modules[':module_name'][':module_system'][
      ':module_version'
    ].file.$put(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemVersions(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ].versions.$get(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemDownload(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ].download.$get(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystem(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ].$get(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionDownload(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system'][':module_version']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ][':module_version'].download.$get(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionFile(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system'][':module_version']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ][':module_version'].file.$get(args, options),
  )
}

export async function getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersion(
  args: InferRequestType<
    (typeof client.api.v4.packages.terraform.modules.v1)[':module_namespace'][':module_name'][':module_system'][':module_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.terraform.modules.v1[':module_namespace'][':module_name'][
      ':module_system'
    ][':module_version'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryTags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.tags.$get(args, options))
}

export async function postApiV4ProjectsIdRepositoryTags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.tags.$post(args, options))
}

export async function getApiV4ProjectsIdRepositoryTagsTagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['tags'][':tag_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.tags[':tag_name'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdRepositoryTagsTagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['tags'][':tag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.tags[':tag_name'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryTagsTagNameSignature(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['tags'][':tag_name']['signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.tags[':tag_name'].signature.$get(args, options),
  )
}

export async function putApiV4HooksHookIdUrlVariablesKey(
  args: InferRequestType<(typeof client.api.v4.hooks)[':hook_id']['url_variables'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.hooks[':hook_id'].url_variables[':key'].$put(args, options),
  )
}

export async function deleteApiV4HooksHookIdUrlVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.hooks)[':hook_id']['url_variables'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.hooks[':hook_id'].url_variables[':key'].$delete(args, options),
  )
}

export async function putApiV4HooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.hooks)[':hook_id']['custom_headers'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.hooks[':hook_id'].custom_headers[':key'].$put(args, options),
  )
}

export async function deleteApiV4HooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.hooks)[':hook_id']['custom_headers'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.hooks[':hook_id'].custom_headers[':key'].$delete(args, options),
  )
}

export async function getApiV4Hooks(
  args: InferRequestType<typeof client.api.v4.hooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks.$get(args, options))
}

export async function postApiV4Hooks(
  args: InferRequestType<typeof client.api.v4.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks.$post(args, options))
}

export async function getApiV4HooksHookId(
  args: InferRequestType<(typeof client.api.v4.hooks)[':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks[':hook_id'].$get(args, options))
}

export async function putApiV4HooksHookId(
  args: InferRequestType<(typeof client.api.v4.hooks)[':hook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks[':hook_id'].$put(args, options))
}

export async function postApiV4HooksHookId(
  args: InferRequestType<(typeof client.api.v4.hooks)[':hook_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks[':hook_id'].$post(args, options))
}

export async function deleteApiV4HooksHookId(
  args: InferRequestType<(typeof client.api.v4.hooks)[':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.hooks[':hook_id'].$delete(args, options))
}

export async function getApiV4ProjectsIdAttestationsSigningCertificates(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['attestations']['signing_certificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].attestations.signing_certificates.$get(args, options),
  )
}

export async function getApiV4ProjectsIdAttestationsSubjectDigest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['attestations'][':subject_digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].attestations[':subject_digest'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdAttestationsAttestationIidDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['attestations'][':attestation_iid']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].attestations[':attestation_iid'].download.$get(args, options),
  )
}

export async function putApiV4SuggestionsIdApply(
  args: InferRequestType<(typeof client.api.v4.suggestions)[':id']['apply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.suggestions[':id'].apply.$put(args, options))
}

export async function putApiV4SuggestionsBatchApply(
  args: InferRequestType<typeof client.api.v4.suggestions.batch_apply.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.suggestions.batch_apply.$put(args, options))
}

export async function putApiV4ProjectsIdRepositorySubmodulesSubmodule(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['submodules'][':submodule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.submodules[':submodule'].$put(args, options),
  )
}

export async function getApiV4ApplicationStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.application.statistics.$get(undefined, options))
}

export async function getApiV4Snippets(
  args: InferRequestType<typeof client.api.v4.snippets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets.$get(args, options))
}

export async function postApiV4Snippets(
  args: InferRequestType<typeof client.api.v4.snippets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets.$post(args, options))
}

export async function getApiV4SnippetsPublic(
  args: InferRequestType<typeof client.api.v4.snippets.public.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets.public.$get(args, options))
}

export async function getApiV4SnippetsAll(
  args: InferRequestType<typeof client.api.v4.snippets.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets.all.$get(args, options))
}

export async function getApiV4SnippetsId(
  args: InferRequestType<(typeof client.api.v4.snippets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets[':id'].$get(args, options))
}

export async function putApiV4SnippetsId(
  args: InferRequestType<(typeof client.api.v4.snippets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets[':id'].$put(args, options))
}

export async function deleteApiV4SnippetsId(
  args: InferRequestType<(typeof client.api.v4.snippets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets[':id'].$delete(args, options))
}

export async function getApiV4SnippetsIdRaw(
  args: InferRequestType<(typeof client.api.v4.snippets)[':id']['raw']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets[':id'].raw.$get(args, options))
}

export async function getApiV4SnippetsIdFilesRefFilePathRaw(
  args: InferRequestType<
    (typeof client.api.v4.snippets)[':id']['files'][':ref'][':file_path']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.snippets[':id'].files[':ref'][':file_path'].raw.$get(args, options),
  )
}

export async function getApiV4SnippetsIdUserAgentDetail(
  args: InferRequestType<(typeof client.api.v4.snippets)[':id']['user_agent_detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.snippets[':id'].user_agent_detail.$get(args, options))
}

export async function getApiV4Search(
  args: InferRequestType<typeof client.api.v4.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.search.$get(args, options))
}

export async function getApiV4GroupsIdU28DashSearch(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['(-'][')search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id']['(-'][')search'].$get(args, options))
}

export async function getApiV4ProjectsIdU28DashSearch(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['(-'][')search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id']['(-'][')search'].$get(args, options))
}

export async function getApiV4ProjectsIdPackagesRubygemsFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems[':file_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesRubygemsQuickMarshal48FileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems']['quick']['Marshal.4.8'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems.quick['Marshal.4.8'][':file_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesRubygemsGemsFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems']['gems'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems.gems[':file_name'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesRubygemsApiV1GemsAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems']['api']['v1']['gems']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems.api.v1.gems.authorize.$post(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesRubygemsApiV1Gems(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems']['api']['v1']['gems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems.api.v1.gems.$post(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesRubygemsApiV1Dependencies(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rubygems']['api']['v1']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rubygems.api.v1.dependencies.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesRpmRepodataFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rpm']['repodata'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rpm.repodata[':file_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesRpmPackageFileIdFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rpm'][':package_file_id'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rpm[':package_file_id'][':file_name'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPackagesRpm(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['rpm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.rpm.$post(args, options))
}

export async function postApiV4ProjectsIdPackagesRpmAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['rpm']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.rpm.authorize.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_milestone_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_milestone_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':eventable_id']['resource_milestone_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':eventable_id'].resource_milestone_events[
      ':event_id'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_milestone_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_milestone_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':eventable_id']['resource_milestone_events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':eventable_id'].resource_milestone_events[
      ':event_id'
    ].$get(args, options),
  )
}

export async function postApiV4ProjectsIdAccessTokensSelfRotate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_tokens']['self']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_tokens.self.rotate.$post(args, options),
  )
}

export async function postApiV4GroupsIdAccessTokensSelfRotate(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_tokens']['self']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_tokens.self.rotate.$post(args, options),
  )
}

export async function getApiV4ProjectsIdAccessTokens(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['access_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].access_tokens.$get(args, options))
}

export async function postApiV4ProjectsIdAccessTokens(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['access_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].access_tokens.$post(args, options))
}

export async function getApiV4ProjectsIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_tokens[':token_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_tokens[':token_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdAccessTokensTokenIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_tokens'][':token_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_tokens[':token_id'].rotate.$post(args, options),
  )
}

export async function getApiV4GroupsIdAccessTokens(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['access_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].access_tokens.$get(args, options))
}

export async function postApiV4GroupsIdAccessTokens(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['access_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].access_tokens.$post(args, options))
}

export async function getApiV4GroupsIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_tokens[':token_id'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_tokens[':token_id'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdAccessTokensTokenIdRotate(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_tokens'][':token_id']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_tokens[':token_id'].rotate.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryTree(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['tree']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.tree.$get(args, options))
}

export async function getApiV4ProjectsIdRepositoryBlobsShaRaw(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['blobs'][':sha']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.blobs[':sha'].raw.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryBlobsSha(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['blobs'][':sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.blobs[':sha'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryArchive(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.archive.$get(args, options))
}

export async function getApiV4ProjectsIdRepositoryCompare(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['compare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.compare.$get(args, options))
}

export async function getApiV4ProjectsIdRepositoryHealth(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.health.$get(args, options))
}

export async function getApiV4ProjectsIdRepositoryContributors(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['contributors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.contributors.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryMergeBase(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['merge_base']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.merge_base.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryBlobsBatch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['blobs']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.blobs.batch.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryChangedPaths(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['changed_paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.changed_paths.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryDivergingCommits(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['diverging_commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.diverging_commits.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryDiffStats(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['diff_stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.diff_stats.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryChangelog(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['changelog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.changelog.$get(args, options))
}

export async function postApiV4ProjectsIdRepositoryChangelog(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['changelog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.changelog.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRemoteMirrors(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['remote_mirrors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].remote_mirrors.$get(args, options))
}

export async function postApiV4ProjectsIdRemoteMirrors(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['remote_mirrors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].remote_mirrors.$post(args, options))
}

export async function getApiV4ProjectsIdRemoteMirrorsMirrorId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['remote_mirrors'][':mirror_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].remote_mirrors[':mirror_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdRemoteMirrorsMirrorId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['remote_mirrors'][':mirror_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].remote_mirrors[':mirror_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdRemoteMirrorsMirrorId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['remote_mirrors'][':mirror_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].remote_mirrors[':mirror_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdRemoteMirrorsMirrorIdSync(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['remote_mirrors'][':mirror_id']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].remote_mirrors[':mirror_id'].sync.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRemoteMirrorsMirrorIdPublicKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['remote_mirrors'][':mirror_id']['public_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].remote_mirrors[':mirror_id'].public_key.$get(args, options),
  )
}

export async function getApiV4ProjectsIdReleasesTagNameAssetsLinks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['assets']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].assets.links.$get(args, options),
  )
}

export async function postApiV4ProjectsIdReleasesTagNameAssetsLinks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['assets']['links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].assets.links.$post(args, options),
  )
}

export async function getApiV4ProjectsIdReleasesTagNameAssetsLinksLinkId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['assets']['links'][':link_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].assets.links[':link_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdReleasesTagNameAssetsLinksLinkId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['assets']['links'][':link_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].assets.links[':link_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdReleasesTagNameAssetsLinksLinkId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['assets']['links'][':link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].assets.links[':link_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdReleases(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].releases.$get(args, options))
}

export async function getApiV4ProjectsIdReleases(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].releases.$get(args, options))
}

export async function postApiV4ProjectsIdReleases(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].releases.$post(args, options))
}

export async function getApiV4ProjectsIdReleasesTagName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['releases'][':tag_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdReleasesTagName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['releases'][':tag_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdReleasesTagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdReleasesTagNameDownloadsDirectAssetPath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['downloads'][':direct_asset_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].downloads[':direct_asset_path'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdReleasesPermalinkLatest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases']['permalink']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases.permalink.latest.$get(args, options),
  )
}

export async function getApiV4ProjectsIdReleasesPermalinkLatestSuffixPath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases']['permalink']['latest'][':suffix_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases.permalink.latest[':suffix_path'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdReleasesTagNameEvidence(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['releases'][':tag_name']['evidence']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].releases[':tag_name'].evidence.$post(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesPypiFilesSha256FileIdentifier(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['pypi']['files'][':sha256'][':file_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.pypi.files[':sha256'][':file_identifier'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesPypiSimple(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['pypi']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.pypi.simple.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesPypiSimplePackageName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['pypi']['simple'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.pypi.simple[':package_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesPypiFilesSha256FileIdentifier(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['pypi']['files'][':sha256'][':file_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.pypi.files[':sha256'][':file_identifier'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesPypiSimple(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['pypi']['simple']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.pypi.simple.$get(args, options))
}

export async function getApiV4ProjectsIdPackagesPypiSimplePackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['pypi']['simple'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.pypi.simple[':package_name'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesPypi(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['pypi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.pypi.$post(args, options))
}

export async function postApiV4ProjectsIdPackagesPypiAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['pypi']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.pypi.authorize.$post(args, options),
  )
}

export async function getApiV4ProjectsIdProtectedTags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].protected_tags.$get(args, options))
}

export async function postApiV4ProjectsIdProtectedTags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].protected_tags.$post(args, options))
}

export async function getApiV4ProjectsIdProtectedTagsName(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_tags'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_tags[':name'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdProtectedTagsName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_tags'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_tags[':name'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdProtectedBranches(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].protected_branches.$get(args, options))
}

export async function postApiV4ProjectsIdProtectedBranches(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['protected_branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].protected_branches.$post(args, options))
}

export async function getApiV4ProjectsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_branches'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_branches[':name'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_branches'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_branches[':name'].$delete(args, options),
  )
}

export async function patchApiV4ProjectsIdProtectedBranchesName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['protected_branches'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].protected_branches[':name'].$patch(args, options),
  )
}

export async function getApiV4UsersUserIdProjects(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].projects.$get(args, options))
}

export async function getApiV4UsersUserIdContributedProjects(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['contributed_projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.users[':user_id'].contributed_projects.$get(args, options),
  )
}

export async function getApiV4UsersUserIdStarredProjects(
  args: InferRequestType<(typeof client.api.v4.users)[':user_id']['starred_projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':user_id'].starred_projects.$get(args, options))
}

export async function getApiV4ProjectsIdCustomAttributes(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['custom_attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].custom_attributes.$get(args, options))
}

export async function getApiV4ProjectsIdCustomAttributesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['custom_attributes'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].custom_attributes[':key'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdCustomAttributesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['custom_attributes'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].custom_attributes[':key'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdCustomAttributesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['custom_attributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].custom_attributes[':key'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdRestore(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].restore.$post(args, options))
}

export async function getApiV4Projects(
  args: InferRequestType<typeof client.api.v4.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects.$get(args, options))
}

export async function postApiV4Projects(
  args: InferRequestType<typeof client.api.v4.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects.$post(args, options))
}

export async function postApiV4ProjectsUserUserId(
  args: InferRequestType<(typeof client.api.v4.projects.user)[':user_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects.user[':user_id'].$post(args, options))
}

export async function getApiV4ProjectsIdShareLocations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['share_locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].share_locations.$get(args, options))
}

export async function getApiV4ProjectsId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].$get(args, options))
}

export async function putApiV4ProjectsId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].$put(args, options))
}

export async function deleteApiV4ProjectsId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].$delete(args, options))
}

export async function postApiV4ProjectsIdFork(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].fork.$post(args, options))
}

export async function deleteApiV4ProjectsIdFork(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['fork']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].fork.$delete(args, options))
}

export async function getApiV4ProjectsIdForks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].forks.$get(args, options))
}

export async function getApiV4ProjectsIdPagesAccess(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages_access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages_access.$get(args, options))
}

export async function postApiV4ProjectsIdArchive(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].archive.$post(args, options))
}

export async function postApiV4ProjectsIdUnarchive(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].unarchive.$post(args, options))
}

export async function postApiV4ProjectsIdStar(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['star']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].star.$post(args, options))
}

export async function postApiV4ProjectsIdUnstar(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['unstar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].unstar.$post(args, options))
}

export async function getApiV4ProjectsIdStarrers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['starrers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].starrers.$get(args, options))
}

export async function getApiV4ProjectsIdLanguages(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].languages.$get(args, options))
}

export async function postApiV4ProjectsIdForkForkedFromId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['fork'][':forked_from_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].fork[':forked_from_id'].$post(args, options),
  )
}

export async function postApiV4ProjectsIdShare(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].share.$post(args, options))
}

export async function deleteApiV4ProjectsIdShareGroupId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['share'][':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].share[':group_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdImportProjectMembersProjectId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['import_project_members'][':project_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].import_project_members[':project_id'].$post(args, options),
  )
}

export async function getApiV4ProjectsIdUsers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].users.$get(args, options))
}

export async function getApiV4ProjectsIdGroups(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].groups.$get(args, options))
}

export async function getApiV4ProjectsIdInvitedGroups(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['invited_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].invited_groups.$get(args, options))
}

export async function postApiV4ProjectsIdHousekeeping(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['housekeeping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].housekeeping.$post(args, options))
}

export async function postApiV4ProjectsIdRepositorySize(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository_size']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository_size.$post(args, options))
}

export async function putApiV4ProjectsIdTransfer(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['transfer']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].transfer.$put(args, options))
}

export async function getApiV4ProjectsIdTransferLocations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['transfer_locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].transfer_locations.$get(args, options))
}

export async function getApiV4ProjectsIdStorage(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['storage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].storage.$get(args, options))
}

export async function getApiV4ProjectsIdAuditEvents(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['audit_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].audit_events.$get(args, options))
}

export async function getApiV4ProjectsIdAuditEventsAuditEventId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['audit_events'][':audit_event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].audit_events[':audit_event_id'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdTemplatesType(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['templates'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].templates[':type'].$get(args, options))
}

export async function getApiV4ProjectsIdTemplatesTypeName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['templates'][':type'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].templates[':type'][':name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdStatistics(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].statistics.$get(args, options))
}

export async function getApiV4ProjectsIdSnippets(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['snippets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].snippets.$get(args, options))
}

export async function postApiV4ProjectsIdSnippets(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['snippets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].snippets.$post(args, options))
}

export async function getApiV4ProjectsIdSnippetsSnippetId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdSnippetsSnippetId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdSnippetsSnippetId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdRaw(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].raw.$get(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdFilesRefFilePathRaw(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['files'][':ref'][':file_path']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].files[':ref'][':file_path'].raw.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdUserAgentDetail(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['user_agent_detail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].user_agent_detail.$get(args, options),
  )
}

export async function getApiV4ProjectsIdSnapshot(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['snapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].snapshot.$get(args, options))
}

export async function getApiV4ProjectsIdPackagesProtectionRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['protection']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.protection.rules.$get(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesProtectionRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['protection']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.protection.rules.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['protection']['rules'][':package_protection_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.protection.rules[':package_protection_rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV4ProjectsIdPackagesProtectionRulesPackageProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['protection']['rules'][':package_protection_rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.protection.rules[':package_protection_rule_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackages(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.$get(args, options))
}

export async function getApiV4ProjectsIdPackagesPackageId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages'][':package_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesPackageId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages'][':package_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesPackageIdPipelines(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages'][':package_id']['pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].pipelines.$get(args, options),
  )
}

export async function getApiV4ProjectsIdJobTokenScope(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['job_token_scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].job_token_scope.$get(args, options))
}

export async function patchApiV4ProjectsIdJobTokenScope(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['job_token_scope']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].job_token_scope.$patch(args, options))
}

export async function getApiV4ProjectsIdJobTokenScopeAllowlist(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['allowlist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.allowlist.$get(args, options),
  )
}

export async function postApiV4ProjectsIdJobTokenScopeAllowlist(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['allowlist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.allowlist.$post(args, options),
  )
}

export async function getApiV4ProjectsIdJobTokenScopeGroupsAllowlist(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['groups_allowlist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.groups_allowlist.$get(args, options),
  )
}

export async function postApiV4ProjectsIdJobTokenScopeGroupsAllowlist(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['groups_allowlist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.groups_allowlist.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdJobTokenScopeGroupsAllowlistTargetGroupId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['groups_allowlist'][':target_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.groups_allowlist[':target_group_id'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdJobTokenScopeAllowlistTargetProjectId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['job_token_scope']['allowlist'][':target_project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].job_token_scope.allowlist[':target_project_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsImportAuthorize(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.projects.import.authorize.$post(undefined, options))
}

export async function postApiV4ProjectsImport(
  args: InferRequestType<typeof client.api.v4.projects.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects.import.$post(args, options))
}

export async function getApiV4ProjectsIdImport(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['import']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].import.$get(args, options))
}

export async function postApiV4ProjectsIdImportGit(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['import']['git']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].import.git.$post(args, options))
}

export async function postApiV4ProjectsRemoteImport(
  args: InferRequestType<(typeof client.api.v4.projects)['remote-import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects['remote-import'].$post(args, options))
}

export async function postApiV4ProjectsImportRelationAuthorize(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.projects['import-relation'].authorize.$post(undefined, options),
  )
}

export async function postApiV4ProjectsImportRelation(
  args: InferRequestType<(typeof client.api.v4.projects)['import-relation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects['import-relation'].$post(args, options))
}

export async function getApiV4ProjectsIdRelationImports(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['relation-imports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id']['relation-imports'].$get(args, options))
}

export async function postApiV4ProjectsRemoteImportS3(
  args: InferRequestType<(typeof client.api.v4.projects)['remote-import-s3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects['remote-import-s3'].$post(args, options))
}

export async function putApiV4ProjectsIdHooksHookIdUrlVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['url_variables'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].url_variables[':key'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdHooksHookIdUrlVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['url_variables'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].url_variables[':key'].$delete(args, options),
  )
}

export async function putApiV4ProjectsIdHooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['custom_headers'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].custom_headers[':key'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdHooksHookIdCustomHeadersKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['custom_headers'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].custom_headers[':key'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdHooks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].hooks.$get(args, options))
}

export async function postApiV4ProjectsIdHooks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].hooks.$post(args, options))
}

export async function getApiV4ProjectsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].hooks[':hook_id'].$get(args, options))
}

export async function putApiV4ProjectsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].hooks[':hook_id'].$put(args, options))
}

export async function deleteApiV4ProjectsIdHooksHookId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].hooks[':hook_id'].$delete(args, options))
}

export async function getApiV4ProjectsIdHooksHookIdEvents(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].events.$get(args, options),
  )
}

export async function postApiV4ProjectsIdHooksHookIdTestTrigger(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['test'][':trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].test[':trigger'].$post(args, options),
  )
}

export async function postApiV4ProjectsIdHooksHookIdEventsHookLogIdResend(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['hooks'][':hook_id']['events'][':hook_log_id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].hooks[':hook_id'].events[':hook_log_id'].resend.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdExport(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].export.$get(args, options))
}

export async function postApiV4ProjectsIdExport(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].export.$post(args, options))
}

export async function getApiV4ProjectsIdExportDownload(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['export']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].export.download.$get(args, options))
}

export async function postApiV4ProjectsIdExportRelations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['export_relations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].export_relations.$post(args, options))
}

export async function getApiV4ProjectsIdExportRelationsDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['export_relations']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].export_relations.download.$get(args, options),
  )
}

export async function getApiV4ProjectsIdExportRelationsStatus(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['export_relations']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].export_relations.status.$get(args, options),
  )
}

export async function getApiV4ProjectsIdEvents(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].events.$get(args, options))
}

export async function getApiV4ProjectsIdDebianDistributions(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['debian_distributions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].debian_distributions.$get(args, options))
}

export async function postApiV4ProjectsIdDebianDistributions(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['debian_distributions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].debian_distributions.$post(args, options),
  )
}

export async function getApiV4ProjectsIdDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['debian_distributions'][':codename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].debian_distributions[':codename'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['debian_distributions'][':codename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].debian_distributions[':codename'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['debian_distributions'][':codename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].debian_distributions[':codename'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdDebianDistributionsCodenameKeyAsc(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['debian_distributions'][':codename']['key.asc']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].debian_distributions[':codename']['key.asc'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRegistryProtectionTagRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['tag']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.tag.rules.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRegistryProtectionTagRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['tag']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.tag.rules.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['tag']['rules'][':protection_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.tag.rules[':protection_rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV4ProjectsIdRegistryProtectionTagRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['tag']['rules'][':protection_rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.tag.rules[':protection_rule_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdRegistryProtectionRepositoryRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['repository']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.repository.rules.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRegistryProtectionRepositoryRules(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['repository']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.repository.rules.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['repository']['rules'][':protection_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.repository.rules[
      ':protection_rule_id'
    ].$delete(args, options),
  )
}

export async function patchApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['protection']['repository']['rules'][':protection_rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.protection.repository.rules[
      ':protection_rule_id'
    ].$patch(args, options),
  )
}

export async function getApiV4ProjectsIdRegistryRepositories(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdRegistryRepositoriesRepositoryId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories'][':repository_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories[':repository_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTags(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories'][':repository_id']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories[':repository_id'].tags.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTags(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories'][':repository_id']['tags']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories[':repository_id'].tags.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories'][':repository_id']['tags'][':tag_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories[':repository_id'].tags[':tag_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['registry']['repositories'][':repository_id']['tags'][':tag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].registry.repositories[':repository_id'].tags[':tag_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdClusters(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].clusters.$get(args, options))
}

export async function getApiV4ProjectsIdClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['clusters'][':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].clusters[':cluster_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['clusters'][':cluster_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].clusters[':cluster_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdClustersClusterId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['clusters'][':cluster_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].clusters[':cluster_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdClustersUser(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['clusters']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].clusters.user.$post(args, options))
}

export async function getApiV4ProjectsIdAvatar(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].avatar.$get(args, options))
}

export async function postApiV4PersonalAccessTokensSelfRotate(
  args: InferRequestType<typeof client.api.v4.personal_access_tokens.self.rotate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.personal_access_tokens.self.rotate.$post(args, options))
}

export async function getApiV4PersonalAccessTokensSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.personal_access_tokens.self.$get(undefined, options))
}

export async function deleteApiV4PersonalAccessTokensSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.personal_access_tokens.self.$delete(undefined, options))
}

export async function getApiV4PersonalAccessTokensSelfAssociations(
  args: InferRequestType<typeof client.api.v4.personal_access_tokens.self.associations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.personal_access_tokens.self.associations.$get(args, options),
  )
}

export async function getApiV4PersonalAccessTokens(
  args: InferRequestType<typeof client.api.v4.personal_access_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.personal_access_tokens.$get(args, options))
}

export async function getApiV4PersonalAccessTokensId(
  args: InferRequestType<(typeof client.api.v4.personal_access_tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.personal_access_tokens[':id'].$get(args, options))
}

export async function deleteApiV4PersonalAccessTokensId(
  args: InferRequestType<(typeof client.api.v4.personal_access_tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.personal_access_tokens[':id'].$delete(args, options))
}

export async function postApiV4PersonalAccessTokensIdRotate(
  args: InferRequestType<(typeof client.api.v4.personal_access_tokens)[':id']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.personal_access_tokens[':id'].rotate.$post(args, options),
  )
}

export async function getApiV4PagesDomains(
  args: InferRequestType<typeof client.api.v4.pages.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.pages.domains.$get(args, options))
}

export async function getApiV4ProjectsIdPagesDomains(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages.domains.$get(args, options))
}

export async function postApiV4ProjectsIdPagesDomains(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages.domains.$post(args, options))
}

export async function getApiV4ProjectsIdPagesDomainsDomain(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pages']['domains'][':domain']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pages.domains[':domain'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPagesDomainsDomain(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pages']['domains'][':domain']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pages.domains[':domain'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdPagesDomainsDomain(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pages']['domains'][':domain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pages.domains[':domain'].$delete(args, options),
  )
}

export async function putApiV4ProjectsIdPagesDomainsDomainVerify(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pages']['domains'][':domain']['verify']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pages.domains[':domain'].verify.$put(args, options),
  )
}

export async function getApiV4ProjectsIdPages(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages.$get(args, options))
}

export async function deleteApiV4ProjectsIdPages(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages.$delete(args, options))
}

export async function patchApiV4ProjectsIdPages(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pages']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pages.$patch(args, options))
}

export async function getApiV4ProjectsIdPackagesPackageIdPackageFiles(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages'][':package_id']['package_files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].package_files.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages'][':package_id']['package_files'][':package_file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].package_files[':package_file_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages'][':package_id']['package_files'][':package_file_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages[':package_id'].package_files[
      ':package_file_id'
    ].download.$get(args, options),
  )
}

export async function postApiV4Organizations(
  args: InferRequestType<typeof client.api.v4.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations.$post(args, options))
}

export async function deleteApiV4OrganizationsId(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations[':id'].$delete(args, options))
}

export async function postApiV4OrganizationsIdRestore(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations[':id'].restore.$post(args, options))
}

export async function postApiV4OrganizationsIdTransferUsers(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['transfer_users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations[':id'].transfer_users.$post(args, options))
}

export async function getApiV4OrganizationsIdUsers(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations[':id'].users.$get(args, options))
}

export async function postApiV4OrganizationsIdUsers(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.organizations[':id'].users.$post(args, options))
}

export async function putApiV4OrganizationsIdUsersUserId(
  args: InferRequestType<(typeof client.api.v4.organizations)[':id']['users'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.organizations[':id'].users[':user_id'].$put(args, options),
  )
}

export async function deleteApiV4OrganizationsIdUsersUserId(
  args: InferRequestType<
    (typeof client.api.v4.organizations)[':id']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.organizations[':id'].users[':user_id'].$delete(args, options),
  )
}

export async function getApiV4OfflineExports(
  args: InferRequestType<typeof client.api.v4.offline_exports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.offline_exports.$get(args, options))
}

export async function postApiV4OfflineExports(
  args: InferRequestType<typeof client.api.v4.offline_exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.offline_exports.$post(args, options))
}

export async function getApiV4OfflineExportsId(
  args: InferRequestType<(typeof client.api.v4.offline_exports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.offline_exports[':id'].$get(args, options))
}

export async function postApiV4OfflineImports(
  args: InferRequestType<typeof client.api.v4.offline_imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.offline_imports.$post(args, options))
}

export async function getApiV4ProjectsIdPackagesNugetIndex(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.nuget.index.$get(args, options))
}

export async function getApiV4ProjectsIdPackagesNugetSymbolfilesFileNameSignatureSameFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['symbolfiles'][':file_name'][':signature'][':same_file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.symbolfiles[':file_name'][':signature'][
      ':same_file_name'
    ].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesNugetV2(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['nuget']['v2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.nuget.v2.$get(args, options))
}

export async function putApiV4ProjectsIdPackagesNugetV2(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['nuget']['v2']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.nuget.v2.$put(args, options))
}

export async function getApiV4ProjectsIdPackagesNugetV2Metadata(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['v2']['$metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.v2.$metadata.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesNugetMetadataPackageNameIndex(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['metadata'][':package_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.metadata[':package_name'].index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesNugetMetadataPackageNamePackageVersion(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['metadata'][':package_name'][':package_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.metadata[':package_name'][':package_version'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesNugetQuery(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.nuget.query.$get(args, options))
}

export async function getApiV4ProjectsIdPackagesNugetDownloadPackageNameIndex(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['download'][':package_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.download[':package_name'].index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesNugetDownloadPackageNamePackageVersionPackageFilename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['download'][':package_name'][':package_version'][':package_filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.download[':package_name'][':package_version'][
      ':package_filename'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesNuget(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['nuget']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.nuget.$put(args, options))
}

export async function putApiV4ProjectsIdPackagesNugetAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.authorize.$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesNugetSymbolpackage(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['symbolpackage']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.symbolpackage.$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesNugetSymbolpackageAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['symbolpackage']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.symbolpackage.authorize.$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesNugetPackageNamePackageVersion(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget'][':package_name'][':package_version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget[':package_name'][':package_version'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdPackagesNugetV2Authorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['nuget']['v2']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.nuget.v2.authorize.$put(args, options),
  )
}

export async function getApiV4ProjectsProjectIdPackagesNugetV2FindPackagesById(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':project_id']['packages']['nuget']['v2']['FindPackagesById()']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':project_id'].packages.nuget.v2['FindPackagesById()'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsProjectIdPackagesNugetV2Packages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':project_id']['packages']['nuget']['v2']['Packages()']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':project_id'].packages.nuget.v2['Packages()'].$get(args, options),
  )
}

export async function getApiV4ProjectsProjectIdPackagesNugetV2PackagesIdPackageNameVersionPackageVersion(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':project_id']['packages']['nuget']['v2']["Packages(Id=':package_name',Version=':package_version')"]['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':project_id'].packages.nuget.v2[
      "Packages(Id=':package_name',Version=':package_version')"
    ].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetIndex(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.index.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetSymbolfilesFileNameSignatureSameFileName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['symbolfiles'][':file_name'][':signature'][':same_file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.symbolfiles[':file_name'][':signature'][
      ':same_file_name'
    ].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetV2(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id']['-'].packages.nuget.v2.$get(args, options))
}

export async function getApiV4GroupsIdDashPackagesNugetV2Metadata(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['v2']['$metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.v2.$metadata.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetMetadataPackageNameIndex(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['metadata'][':package_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.metadata[':package_name'].index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetMetadataPackageNamePackageVersion(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['metadata'][':package_name'][':package_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.metadata[':package_name'][
      ':package_version'
    ].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesNugetQuery(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['nuget']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.nuget.query.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTags(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm']['-']['package'][':package_name']['dist-tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm['-'].package[':package_name']['dist-tags'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm']['-']['package'][':package_name']['dist-tags'][':tag']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm['-'].package[':package_name']['dist-tags'][
      ':tag'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm']['-']['package'][':package_name']['dist-tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm['-'].package[':package_name']['dist-tags'][
      ':tag'
    ].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAdvisoriesBulk(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm']['-']['npm']['v1']['security']['advisories']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm['-'].npm.v1.security.advisories.bulk.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAuditsQuick(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm']['-']['npm']['v1']['security']['audits']['quick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm['-'].npm.v1.security.audits.quick.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesNpmPackageNameDashFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm'][':package_name']['-'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm[':package_name']['-'][':file_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesNpmPackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm[':package_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesNpmPackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['npm'][':package_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.npm[':package_name'].$put(args, options),
  )
}

export async function getApiV4PackagesNpmDashPackagePackageNameDistTags(
  args: InferRequestType<
    (typeof client.api.v4.packages.npm)['-']['package'][':package_name']['dist-tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.npm['-'].package[':package_name']['dist-tags'].$get(args, options),
  )
}

export async function putApiV4PackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.packages.npm)['-']['package'][':package_name']['dist-tags'][':tag']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.npm['-'].package[':package_name']['dist-tags'][':tag'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4PackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.packages.npm)['-']['package'][':package_name']['dist-tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.npm['-'].package[':package_name']['dist-tags'][':tag'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV4PackagesNpmDashNpmV1SecurityAdvisoriesBulk(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.npm['-'].npm.v1.security.advisories.bulk.$post(undefined, options),
  )
}

export async function postApiV4PackagesNpmDashNpmV1SecurityAuditsQuick(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.npm['-'].npm.v1.security.audits.quick.$post(undefined, options),
  )
}

export async function getApiV4PackagesNpmPackageName(
  args: InferRequestType<(typeof client.api.v4.packages.npm)[':package_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.packages.npm[':package_name'].$get(args, options))
}

export async function getApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTags(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm']['-']['package'][':package_name']['dist-tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm['-'].package[':package_name']['dist-tags'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm']['-']['package'][':package_name']['dist-tags'][':tag']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm['-'].package[':package_name']['dist-tags'][
      ':tag'
    ].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTag(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm']['-']['package'][':package_name']['dist-tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm['-'].package[':package_name']['dist-tags'][
      ':tag'
    ].$delete(args, options),
  )
}

export async function postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAdvisoriesBulk(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm']['-']['npm']['v1']['security']['advisories']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm['-'].npm.v1.security.advisories.bulk.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAuditsQuick(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm']['-']['npm']['v1']['security']['audits']['quick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm['-'].npm.v1.security.audits.quick.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesNpmPackageName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['npm'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.npm[':package_name'].$get(args, options),
  )
}

export async function getApiV4NamespacesId(
  args: InferRequestType<(typeof client.api.v4.namespaces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.namespaces[':id'].$get(args, options))
}

export async function putApiV4NamespacesId(
  args: InferRequestType<(typeof client.api.v4.namespaces)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.namespaces[':id'].$put(args, options))
}

export async function getApiV4NamespacesIdGitlabSubscription(
  args: InferRequestType<(typeof client.api.v4.namespaces)[':id']['gitlab_subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.namespaces[':id'].gitlab_subscription.$get(args, options),
  )
}

export async function postApiV4NamespacesIdStorageLimitExclusion(
  args: InferRequestType<
    (typeof client.api.v4.namespaces)[':id']['storage']['limit_exclusion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.namespaces[':id'].storage.limit_exclusion.$post(args, options),
  )
}

export async function deleteApiV4NamespacesIdStorageLimitExclusion(
  args: InferRequestType<
    (typeof client.api.v4.namespaces)[':id']['storage']['limit_exclusion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.namespaces[':id'].storage.limit_exclusion.$delete(args, options),
  )
}

export async function getApiV4NamespacesStorageLimitExclusions(
  args: InferRequestType<typeof client.api.v4.namespaces.storage.limit_exclusions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.namespaces.storage.limit_exclusions.$get(args, options))
}

export async function getApiV4Namespaces(
  args: InferRequestType<typeof client.api.v4.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.namespaces.$get(args, options))
}

export async function getApiV4NamespacesIdExists(
  args: InferRequestType<(typeof client.api.v4.namespaces)[':id']['exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.namespaces[':id'].exists.$get(args, options))
}

export async function postApiV4UserPushSubscriptions(
  args: InferRequestType<typeof client.api.v4.user.push_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.push_subscriptions.$post(args, options))
}

export async function deleteApiV4UserPushSubscriptions(
  args: InferRequestType<typeof client.api.v4.user.push_subscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.user.push_subscriptions.$delete(args, options))
}

export async function putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[
      ':file_name'
    ].authorize.$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':path'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[':path'][
      ':file_name'
    ].authorize.$put(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[':file_name'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[':file_name'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':path'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[':path'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['ml_models'][':model_version_id']['files'][':path'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.ml_models[':model_version_id'].files[':path'][
      ':file_name'
    ].$put(args, options),
  )
}

export async function getApiV4Metadata(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.metadata.$get(undefined, options))
}

export async function getApiV4Version(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.version.$get(undefined, options))
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidVersions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].versions.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].versions[':version_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approvals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approvals.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidApprovals(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approvals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approvals.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidApprove(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approve.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidUnapprove(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['unapprove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].unapprove.$post(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidResetApprovals(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['reset_approvals']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].reset_approvals.$put(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidApprovalState(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['approval_state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].approval_state.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdCreateCiConfig(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['create_ci_config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].create_ci_config.$post(args, options))
}

export async function getApiV4MergeRequests(
  args: InferRequestType<typeof client.api.v4.merge_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.merge_requests.$get(args, options))
}

export async function getApiV4GroupsIdMergeRequests(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['merge_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].merge_requests.$get(args, options))
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidTimeEstimate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['time_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].time_estimate.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidResetTimeEstimate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['reset_time_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].reset_time_estimate.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidAddSpentTime(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['add_spent_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].add_spent_time.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidResetSpentTime(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['reset_spent_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].reset_spent_time.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidTimeStats(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['time_stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].time_stats.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequests(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['merge_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].merge_requests.$get(args, options))
}

export async function postApiV4ProjectsIdMergeRequests(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['merge_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].merge_requests.$post(args, options))
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidParticipants(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].participants.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidReviewers(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].reviewers.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidCommits(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].commits.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['context_commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].context_commits.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['context_commits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].context_commits.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['context_commits']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].context_commits.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidChanges(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].changes.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidDiffs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['diffs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].diffs.$get(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidRawDiffs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['raw_diffs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].raw_diffs.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidPipelines(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].pipelines.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidPipelines(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['pipelines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].pipelines.$post(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidMerge(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['merge']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].merge.$put(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRef(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['merge_ref']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].merge_ref.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelMergeWhenPipelineSucceeds(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['cancel_merge_when_pipeline_succeeds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[
      ':merge_request_iid'
    ].cancel_merge_when_pipeline_succeeds.$post(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidCancelAutoMerge(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['cancel_auto_merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].cancel_auto_merge.$post(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidRebase(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['rebase']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].rebase.$put(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidClosesIssues(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['closes_issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].closes_issues.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidRelatedIssues(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['related_issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].related_issues.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdMembers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members.$get(args, options))
}

export async function postApiV4GroupsIdMembers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members.$post(args, options))
}

export async function getApiV4GroupsIdMembersAll(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members.all.$get(args, options))
}

export async function getApiV4GroupsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members[':user_id'].$get(args, options))
}

export async function putApiV4GroupsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members[':user_id'].$put(args, options))
}

export async function deleteApiV4GroupsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members[':user_id'].$delete(args, options))
}

export async function getApiV4GroupsIdMembersAllUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['members']['all'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].members.all[':user_id'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdMembers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].members.$get(args, options))
}

export async function postApiV4ProjectsIdMembers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].members.$post(args, options))
}

export async function getApiV4ProjectsIdMembersAll(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].members.all.$get(args, options))
}

export async function getApiV4ProjectsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].members[':user_id'].$get(args, options))
}

export async function putApiV4ProjectsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].members[':user_id'].$put(args, options))
}

export async function deleteApiV4ProjectsIdMembersUserId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].members[':user_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMembersAllUserId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['members']['all'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].members.all[':user_id'].$get(args, options),
  )
}

export async function postApiV4GroupsIdMembersUserIdOverride(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['members'][':user_id']['override']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].members[':user_id'].override.$post(args, options),
  )
}

export async function deleteApiV4GroupsIdMembersUserIdOverride(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['members'][':user_id']['override']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].members[':user_id'].override.$delete(args, options),
  )
}

export async function putApiV4GroupsIdMembersMemberIdApprove(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['members'][':member_id']['approve']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].members[':member_id'].approve.$put(args, options),
  )
}

export async function postApiV4GroupsIdMembersApproveAll(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['members']['approve_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].members.approve_all.$post(args, options))
}

export async function getApiV4GroupsIdPendingMembers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['pending_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].pending_members.$get(args, options))
}

export async function getApiV4GroupsIdBillableMembers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['billable_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].billable_members.$get(args, options))
}

export async function putApiV4GroupsIdMembersUserIdState(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['members'][':user_id']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].members[':user_id'].state.$put(args, options),
  )
}

export async function getApiV4GroupsIdBillableMembersUserIdMemberships(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['billable_members'][':user_id']['memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].billable_members[':user_id'].memberships.$get(args, options),
  )
}

export async function getApiV4GroupsIdBillableMembersUserIdIndirect(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['billable_members'][':user_id']['indirect']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].billable_members[':user_id'].indirect.$get(args, options),
  )
}

export async function deleteApiV4GroupsIdBillableMembersUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['billable_members'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].billable_members[':user_id'].$delete(args, options),
  )
}

export async function getApiV4PackagesMavenPathFileName(
  args: InferRequestType<(typeof client.api.v4.packages.maven)[':path'][':file_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.maven[':path'][':file_name'].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesMavenPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['maven'][':path'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.maven[':path'][':file_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesMavenPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['maven'][':path'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.maven[':path'][':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesMavenPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['maven'][':path'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.maven[':path'][':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesMavenPathFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['maven'][':path'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.maven[':path'][':file_name'].authorize.$put(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdUploadsAuthorize(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['uploads']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].uploads.authorize.$post(args, options))
}

export async function getApiV4ProjectsIdUploads(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].uploads.$get(args, options))
}

export async function postApiV4ProjectsIdUploads(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].uploads.$post(args, options))
}

export async function getApiV4ProjectsIdUploadsUploadId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['uploads'][':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].uploads[':upload_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdUploadsUploadId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['uploads'][':upload_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].uploads[':upload_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdUploadsSecretFilename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['uploads'][':secret'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].uploads[':secret'][':filename'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdUploadsSecretFilename(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['uploads'][':secret'][':filename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].uploads[':secret'][':filename'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdUploadsAuthorize(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['uploads']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].uploads.authorize.$post(args, options))
}

export async function getApiV4GroupsIdUploads(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].uploads.$get(args, options))
}

export async function postApiV4GroupsIdUploads(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].uploads.$post(args, options))
}

export async function getApiV4GroupsIdUploadsUploadId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['uploads'][':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].uploads[':upload_id'].$get(args, options))
}

export async function deleteApiV4GroupsIdUploadsUploadId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['uploads'][':upload_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].uploads[':upload_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdUploadsSecretFilename(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['uploads'][':secret'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].uploads[':secret'][':filename'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdUploadsSecretFilename(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['uploads'][':secret'][':filename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].uploads[':secret'][':filename'].$delete(args, options),
  )
}

export async function postApiV4Markdown(
  args: InferRequestType<typeof client.api.v4.markdown.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.markdown.$post(args, options))
}

export async function getApiV4ProjectsIdCiLint(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['ci']['lint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].ci.lint.$get(args, options))
}

export async function postApiV4ProjectsIdCiLint(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['ci']['lint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].ci.lint.$post(args, options))
}

export async function getApiV4KeysId(
  args: InferRequestType<(typeof client.api.v4.keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.keys[':id'].$get(args, options))
}

export async function getApiV4Keys(
  args: InferRequestType<typeof client.api.v4.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.keys.$get(args, options))
}

export async function getApiV4IssuesStatistics(
  args: InferRequestType<typeof client.api.v4.issues_statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.issues_statistics.$get(args, options))
}

export async function getApiV4Issues(
  args: InferRequestType<typeof client.api.v4.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.issues.$get(args, options))
}

export async function getApiV4IssuesId(
  args: InferRequestType<(typeof client.api.v4.issues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.issues[':id'].$get(args, options))
}

export async function getApiV4GroupsIdIssues(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].issues.$get(args, options))
}

export async function getApiV4GroupsIdIssuesStatistics(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['issues_statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].issues_statistics.$get(args, options))
}

export async function postApiV4ProjectsIdIssuesIssueIidTimeEstimate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['time_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].time_estimate.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidResetTimeEstimate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['reset_time_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].reset_time_estimate.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidAddSpentTime(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['add_spent_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].add_spent_time.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidResetSpentTime(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['reset_spent_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].reset_spent_time.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidTimeStats(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['time_stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].time_stats.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssues(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].issues.$get(args, options))
}

export async function postApiV4ProjectsIdIssues(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].issues.$post(args, options))
}

export async function getApiV4ProjectsIdIssuesStatistics(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues_statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].issues_statistics.$get(args, options))
}

export async function getApiV4ProjectsIdIssuesIssueIid(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].issues[':issue_iid'].$get(args, options))
}

export async function putApiV4ProjectsIdIssuesIssueIid(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].issues[':issue_iid'].$put(args, options))
}

export async function deleteApiV4ProjectsIdIssuesIssueIid(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].$delete(args, options),
  )
}

export async function putApiV4ProjectsIdIssuesIssueIidReorder(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['reorder']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].reorder.$put(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidMove(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].move.$post(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidClone(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].clone.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidRelatedMergeRequests(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['related_merge_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].related_merge_requests.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidClosedBy(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['closed_by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].closed_by.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidParticipants(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].participants.$get(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidUserAgentDetail(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['user_agent_detail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].user_agent_detail.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidMetricImagesAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['metric_images']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].metric_images.authorize.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidMetricImages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['metric_images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].metric_images.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidMetricImages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['metric_images']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].metric_images.$post(args, options),
  )
}

export async function putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['metric_images'][':metric_image_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].metric_images[':metric_image_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['metric_images'][':metric_image_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].metric_images[':metric_image_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidLinks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].links.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidLinks(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].links.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidLinksIssueLinkId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['links'][':issue_link_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].links[':issue_link_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdIssuesIssueIidLinksIssueLinkId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['links'][':issue_link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].links[':issue_link_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdInvitations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].invitations.$get(args, options))
}

export async function postApiV4GroupsIdInvitations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].invitations.$post(args, options))
}

export async function putApiV4GroupsIdInvitationsEmail(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['invitations'][':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].invitations[':email'].$put(args, options))
}

export async function deleteApiV4GroupsIdInvitationsEmail(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['invitations'][':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].invitations[':email'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdInvitations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].invitations.$get(args, options))
}

export async function postApiV4ProjectsIdInvitations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].invitations.$post(args, options))
}

export async function putApiV4ProjectsIdInvitationsEmail(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['invitations'][':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].invitations[':email'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdInvitationsEmail(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['invitations'][':email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].invitations[':email'].$delete(args, options),
  )
}

export async function getApiV4IntegrationsJiraForgeSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.subscriptions.$get(undefined, options),
  )
}

export async function postApiV4IntegrationsJiraForgeSubscriptions(
  args: InferRequestType<typeof client.api.v4.integrations.jira_forge.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.subscriptions.$post(args, options),
  )
}

export async function deleteApiV4IntegrationsJiraForgeSubscriptionsId(
  args: InferRequestType<
    (typeof client.api.v4.integrations.jira_forge.subscriptions)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.subscriptions[':id'].$delete(args, options),
  )
}

export async function postApiV4IntegrationsJiraForgeUserDelegation(
  args: InferRequestType<typeof client.api.v4.integrations.jira_forge.user_delegation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.user_delegation.$post(args, options),
  )
}

export async function putApiV4IntegrationsJiraForgeInstallation(
  args: InferRequestType<typeof client.api.v4.integrations.jira_forge.installation.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.integrations.jira_forge.installation.$put(args, options))
}

export async function deleteApiV4IntegrationsJiraForgeInstallation(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.installation.$delete(undefined, options),
  )
}

export async function postApiV4IntegrationsJiraForgeInstallationForgeToken(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.integrations.jira_forge.installation.forge_token.$post(undefined, options),
  )
}

export async function postApiV4IntegrationsJiraConnectSubscriptions(
  args: InferRequestType<typeof client.api.v4.integrations.jira_connect.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.integrations.jira_connect.subscriptions.$post(args, options),
  )
}

export async function postApiV4IntegrationsSlackOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.integrations.slack.options.$post(undefined, options))
}

export async function postApiV4IntegrationsSlackInteractions(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.integrations.slack.interactions.$post(undefined, options),
  )
}

export async function postApiV4IntegrationsSlackEvents(
  args: InferRequestType<typeof client.api.v4.integrations.slack.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.integrations.slack.events.$post(args, options))
}

export async function getApiV4ProjectsIdServices(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.$get(args, options))
}

export async function putApiV4ProjectsIdServicesAppleAppStore(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['apple-app-store']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['apple-app-store'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesAsana(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['asana']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.asana.$put(args, options))
}

export async function putApiV4ProjectsIdServicesAssembla(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['assembla']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.assembla.$put(args, options))
}

export async function putApiV4ProjectsIdServicesBamboo(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['bamboo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.bamboo.$put(args, options))
}

export async function putApiV4ProjectsIdServicesBugzilla(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['bugzilla']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.bugzilla.$put(args, options))
}

export async function putApiV4ProjectsIdServicesBuildkite(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['buildkite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.buildkite.$put(args, options))
}

export async function putApiV4ProjectsIdServicesCampfire(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['campfire']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.campfire.$put(args, options))
}

export async function putApiV4ProjectsIdServicesConfluence(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['confluence']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.confluence.$put(args, options))
}

export async function putApiV4ProjectsIdServicesCustomIssueTracker(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['custom-issue-tracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['custom-issue-tracker'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesDatadog(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['datadog']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.datadog.$put(args, options))
}

export async function putApiV4ProjectsIdServicesDiffblueCover(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['diffblue-cover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['diffblue-cover'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesDiscord(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['discord']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.discord.$put(args, options))
}

export async function putApiV4ProjectsIdServicesDroneCi(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['drone-ci']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services['drone-ci'].$put(args, options))
}

export async function putApiV4ProjectsIdServicesEmailsOnPush(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['emails-on-push']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['emails-on-push'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesExternalWiki(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['external-wiki']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['external-wiki'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesGitlabSlackApplication(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['gitlab-slack-application']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['gitlab-slack-application'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesGooglePlay(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['google-play']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['google-play'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesHangoutsChat(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['hangouts-chat']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['hangouts-chat'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesHarbor(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['harbor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.harbor.$put(args, options))
}

export async function putApiV4ProjectsIdServicesIrker(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['irker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.irker.$put(args, options))
}

export async function putApiV4ProjectsIdServicesJenkins(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['jenkins']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.jenkins.$put(args, options))
}

export async function putApiV4ProjectsIdServicesJira(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['jira']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.jira.$put(args, options))
}

export async function putApiV4ProjectsIdServicesJiraCloudApp(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['jira-cloud-app']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['jira-cloud-app'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesLinear(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['linear']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.linear.$put(args, options))
}

export async function putApiV4ProjectsIdServicesMatrix(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['matrix']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.matrix.$put(args, options))
}

export async function putApiV4ProjectsIdServicesMattermostSlashCommands(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['mattermost-slash-commands']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['mattermost-slash-commands'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesPackagist(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['packagist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.packagist.$put(args, options))
}

export async function putApiV4ProjectsIdServicesPhorge(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['phorge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.phorge.$put(args, options))
}

export async function putApiV4ProjectsIdServicesPipelinesEmail(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['pipelines-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['pipelines-email'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesPivotaltracker(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['pivotaltracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services.pivotaltracker.$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesPumble(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['pumble']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.pumble.$put(args, options))
}

export async function putApiV4ProjectsIdServicesPushover(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['pushover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.pushover.$put(args, options))
}

export async function putApiV4ProjectsIdServicesRedmine(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['redmine']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.redmine.$put(args, options))
}

export async function putApiV4ProjectsIdServicesEwm(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['ewm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.ewm.$put(args, options))
}

export async function putApiV4ProjectsIdServicesYoutrack(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['youtrack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.youtrack.$put(args, options))
}

export async function putApiV4ProjectsIdServicesClickup(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['clickup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.clickup.$put(args, options))
}

export async function putApiV4ProjectsIdServicesSlack(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['slack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.slack.$put(args, options))
}

export async function putApiV4ProjectsIdServicesMicrosoftTeams(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['microsoft-teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['microsoft-teams'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesMattermost(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['mattermost']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.mattermost.$put(args, options))
}

export async function putApiV4ProjectsIdServicesTeamcity(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['teamcity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.teamcity.$put(args, options))
}

export async function putApiV4ProjectsIdServicesTelegram(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['telegram']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.telegram.$put(args, options))
}

export async function putApiV4ProjectsIdServicesUnifyCircuit(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['unify-circuit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['unify-circuit'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesWebexTeams(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['webex-teams']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['webex-teams'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesZentao(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['zentao']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.zentao.$put(args, options))
}

export async function putApiV4ProjectsIdServicesSquashTm(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['squash-tm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['squash-tm'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesGithub(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['github']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services.github.$put(args, options))
}

export async function putApiV4ProjectsIdServicesGitGuardian(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['git-guardian']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['git-guardian'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesGoogleCloudPlatformArtifactRegistry(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['google-cloud-platform-artifact-registry']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['google-cloud-platform-artifact-registry'].$put(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdServicesGoogleCloudPlatformWorkloadIdentityFederation(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['google-cloud-platform-workload-identity-federation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services[
      'google-cloud-platform-workload-identity-federation'
    ].$put(args, options),
  )
}

export async function putApiV4ProjectsIdServicesMockCi(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services']['mock-ci']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services['mock-ci'].$put(args, options))
}

export async function putApiV4ProjectsIdServicesMockMonitoring(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['mock-monitoring']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services['mock-monitoring'].$put(args, options),
  )
}

export async function getApiV4ProjectsIdServicesSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services[':slug'].$get(args, options))
}

export async function deleteApiV4ProjectsIdServicesSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['services'][':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].services[':slug'].$delete(args, options))
}

export async function postApiV4ProjectsIdServicesMattermostSlashCommandsTrigger(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['services']['mattermost_slash_commands']['trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].services.mattermost_slash_commands.trigger.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIntegrations(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.$get(args, options))
}

export async function putApiV4ProjectsIdIntegrationsAppleAppStore(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['apple-app-store']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['apple-app-store'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsAsana(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['asana']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.asana.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsAssembla(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['assembla']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.assembla.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsBamboo(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['bamboo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.bamboo.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsBugzilla(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['bugzilla']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.bugzilla.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsBuildkite(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['buildkite']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.buildkite.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsCampfire(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['campfire']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.campfire.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsConfluence(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['confluence']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.confluence.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsCustomIssueTracker(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['custom-issue-tracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['custom-issue-tracker'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsDatadog(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['datadog']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.datadog.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsDiffblueCover(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['diffblue-cover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['diffblue-cover'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsDiscord(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['discord']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.discord.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsDroneCi(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['drone-ci']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['drone-ci'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsEmailsOnPush(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['emails-on-push']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['emails-on-push'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsExternalWiki(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['external-wiki']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['external-wiki'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsGitlabSlackApplication(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['gitlab-slack-application']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['gitlab-slack-application'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsGooglePlay(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['google-play']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['google-play'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsHangoutsChat(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['hangouts-chat']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['hangouts-chat'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsHarbor(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['harbor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.harbor.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsIrker(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['irker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.irker.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsJenkins(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['jenkins']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.jenkins.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsJira(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['jira']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.jira.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsJiraCloudApp(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['jira-cloud-app']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['jira-cloud-app'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsLinear(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['linear']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.linear.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsMatrix(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['matrix']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.matrix.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsMattermostSlashCommands(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['mattermost-slash-commands']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['mattermost-slash-commands'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsPackagist(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['packagist']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.packagist.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsPhorge(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['phorge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.phorge.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsPipelinesEmail(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['pipelines-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['pipelines-email'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsPivotaltracker(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['pivotaltracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.pivotaltracker.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsPumble(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['pumble']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.pumble.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsPushover(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['pushover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.pushover.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsRedmine(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['redmine']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.redmine.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsEwm(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['ewm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.ewm.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsYoutrack(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['youtrack']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.youtrack.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsClickup(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['clickup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.clickup.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsSlack(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['slack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.slack.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsMicrosoftTeams(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['microsoft-teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['microsoft-teams'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsMattermost(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['mattermost']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.mattermost.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsTeamcity(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['teamcity']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.teamcity.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsTelegram(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['telegram']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.telegram.$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsUnifyCircuit(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['unify-circuit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['unify-circuit'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsWebexTeams(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['webex-teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['webex-teams'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsZentao(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['zentao']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.zentao.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsSquashTm(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['squash-tm']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['squash-tm'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsGithub(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['github']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].integrations.github.$put(args, options))
}

export async function putApiV4ProjectsIdIntegrationsGitGuardian(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['git-guardian']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['git-guardian'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsGoogleCloudPlatformArtifactRegistry(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['google-cloud-platform-artifact-registry']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['google-cloud-platform-artifact-registry'].$put(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederation(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['google-cloud-platform-workload-identity-federation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations[
      'google-cloud-platform-workload-identity-federation'
    ].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsMockCi(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations']['mock-ci']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['mock-ci'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdIntegrationsMockMonitoring(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['mock-monitoring']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations['mock-monitoring'].$put(args, options),
  )
}

export async function getApiV4ProjectsIdIntegrationsSlug(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['integrations'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations[':slug'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdIntegrationsSlug(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations'][':slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations[':slug'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTrigger(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['integrations']['mattermost_slash_commands']['trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].integrations.mattermost_slash_commands.trigger.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdIntegrations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.$get(args, options))
}

export async function putApiV4GroupsIdIntegrationsAppleAppStore(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['apple-app-store']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['apple-app-store'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsAsana(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['asana']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.asana.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsAssembla(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['assembla']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.assembla.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsBamboo(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['bamboo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.bamboo.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsBugzilla(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['bugzilla']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.bugzilla.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsBuildkite(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['buildkite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.buildkite.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsCampfire(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['campfire']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.campfire.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsConfluence(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['confluence']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations.confluence.$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsCustomIssueTracker(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['custom-issue-tracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['custom-issue-tracker'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsDatadog(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['datadog']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.datadog.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsDiffblueCover(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['diffblue-cover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['diffblue-cover'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsDiscord(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['discord']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.discord.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsDroneCi(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['drone-ci']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['drone-ci'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsEmailsOnPush(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['emails-on-push']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['emails-on-push'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsExternalWiki(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['external-wiki']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['external-wiki'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsGitlabSlackApplication(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['gitlab-slack-application']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['gitlab-slack-application'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsGooglePlay(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['google-play']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['google-play'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsHangoutsChat(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['hangouts-chat']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['hangouts-chat'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsHarbor(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['harbor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.harbor.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsIrker(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['irker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.irker.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsJenkins(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['jenkins']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.jenkins.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsJira(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['jira']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.jira.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsJiraCloudApp(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['jira-cloud-app']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['jira-cloud-app'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsLinear(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['linear']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.linear.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsMatrix(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['matrix']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.matrix.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsMattermostSlashCommands(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['mattermost-slash-commands']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['mattermost-slash-commands'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsPackagist(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['packagist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.packagist.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsPhorge(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['phorge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.phorge.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsPipelinesEmail(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['pipelines-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['pipelines-email'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsPivotaltracker(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['pivotaltracker']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations.pivotaltracker.$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsPumble(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['pumble']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.pumble.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsPushover(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['pushover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.pushover.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsRedmine(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['redmine']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.redmine.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsEwm(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['ewm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.ewm.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsYoutrack(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['youtrack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.youtrack.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsClickup(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['clickup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.clickup.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsSlack(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['slack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.slack.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsMicrosoftTeams(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['microsoft-teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['microsoft-teams'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsMattermost(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['mattermost']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations.mattermost.$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsTeamcity(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['teamcity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.teamcity.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsTelegram(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['telegram']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.telegram.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsUnifyCircuit(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['unify-circuit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['unify-circuit'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsWebexTeams(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['webex-teams']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['webex-teams'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsZentao(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['zentao']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.zentao.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsSquashTm(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['squash-tm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['squash-tm'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsGithub(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['github']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations.github.$put(args, options))
}

export async function putApiV4GroupsIdIntegrationsGitGuardian(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['git-guardian']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['git-guardian'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsGoogleCloudPlatformArtifactRegistry(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['google-cloud-platform-artifact-registry']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['google-cloud-platform-artifact-registry'].$put(
      args,
      options,
    ),
  )
}

export async function putApiV4GroupsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederation(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['google-cloud-platform-workload-identity-federation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations[
      'google-cloud-platform-workload-identity-federation'
    ].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsMockCi(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations']['mock-ci']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['mock-ci'].$put(args, options),
  )
}

export async function putApiV4GroupsIdIntegrationsMockMonitoring(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['integrations']['mock-monitoring']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations['mock-monitoring'].$put(args, options),
  )
}

export async function getApiV4GroupsIdIntegrationsSlug(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].integrations[':slug'].$get(args, options))
}

export async function deleteApiV4GroupsIdIntegrationsSlug(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['integrations'][':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].integrations[':slug'].$delete(args, options),
  )
}

export async function postApiV4SlackTrigger(
  args: InferRequestType<typeof client.api.v4.slack.trigger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.slack.trigger.$post(args, options))
}

export async function postApiV4ProjectsIdGithubWebhooks(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['github']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].github.webhooks.$post(args, options))
}

export async function postApiV4ImportGithub(
  args: InferRequestType<typeof client.api.v4.import.github.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.import.github.$post(args, options))
}

export async function postApiV4ImportGithubCancel(
  args: InferRequestType<typeof client.api.v4.import.github.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.import.github.cancel.$post(args, options))
}

export async function postApiV4ImportGithubGists(
  args: InferRequestType<typeof client.api.v4.import.github.gists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.import.github.gists.$post(args, options))
}

export async function postApiV4ProjectsIdImportGithubSyncRestore(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['import']['github']['sync']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].import.github.sync.restore.$post(args, options),
  )
}

export async function postApiV4ImportBitbucketServer(
  args: InferRequestType<typeof client.api.v4.import.bitbucket_server.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.import.bitbucket_server.$post(args, options))
}

export async function postApiV4ImportBitbucket(
  args: InferRequestType<typeof client.api.v4.import.bitbucket.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.import.bitbucket.$post(args, options))
}

export async function getApiV4ProjectsIdPackagesHelmChannelIndexYaml(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['helm'][':channel']['index.yaml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.helm[':channel']['index.yaml'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesHelmChannelChartsFileNameTgz(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['helm'][':channel']['charts'][':file_name.tgz']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.helm[':channel'].charts[':file_name.tgz'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPackagesHelmApiChannelChartsAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['helm']['api'][':channel']['charts']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.helm.api[':channel'].charts.authorize.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPackagesHelmApiChannelCharts(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['helm']['api'][':channel']['charts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.helm.api[':channel'].charts.$post(args, options),
  )
}

export async function postApiV4Glql(
  args: InferRequestType<typeof client.api.v4.glql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.glql.$post(args, options))
}

export async function getApiV4GlqlSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.glql.schema.$get(undefined, options))
}

export async function getApiV4GroupsIdVariables(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].variables.$get(args, options))
}

export async function postApiV4GroupsIdVariables(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].variables.$post(args, options))
}

export async function getApiV4GroupsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['variables'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].variables[':key'].$get(args, options))
}

export async function putApiV4GroupsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['variables'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].variables[':key'].$put(args, options))
}

export async function deleteApiV4GroupsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['variables'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].variables[':key'].$delete(args, options))
}

export async function getApiV4GroupsIdPlaceholderReassignments(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['placeholder_reassignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].placeholder_reassignments.$get(args, options),
  )
}

export async function postApiV4GroupsIdPlaceholderReassignments(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['placeholder_reassignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].placeholder_reassignments.$post(args, options),
  )
}

export async function postApiV4GroupsIdPlaceholderReassignmentsAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['placeholder_reassignments']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].placeholder_reassignments.authorize.$post(args, options),
  )
}

export async function getApiV4GroupsIdPackages(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].packages.$get(args, options))
}

export async function postApiV4GroupsImportAuthorize(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.groups.import.authorize.$post(undefined, options))
}

export async function postApiV4GroupsImport(
  args: InferRequestType<typeof client.api.v4.groups.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups.import.$post(args, options))
}

export async function getApiV4GroupsIdExportDownload(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['export']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].export.download.$get(args, options))
}

export async function postApiV4GroupsIdExport(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].export.$post(args, options))
}

export async function postApiV4GroupsIdExportRelations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['export_relations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].export_relations.$post(args, options))
}

export async function getApiV4GroupsIdExportRelationsDownload(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['export_relations']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].export_relations.download.$get(args, options),
  )
}

export async function getApiV4GroupsIdExportRelationsStatus(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['export_relations']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].export_relations.status.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashDebianDistributions(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['-']['debian_distributions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions.$get(args, options),
  )
}

export async function postApiV4GroupsIdDashDebianDistributions(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['debian_distributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions.$post(args, options),
  )
}

export async function getApiV4GroupsIdDashDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['debian_distributions'][':codename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions[':codename'].$get(args, options),
  )
}

export async function putApiV4GroupsIdDashDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['debian_distributions'][':codename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions[':codename'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdDashDebianDistributionsCodename(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['debian_distributions'][':codename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions[':codename'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdDashDebianDistributionsCodenameKeyAsc(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['debian_distributions'][':codename']['key.asc']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].debian_distributions[':codename']['key.asc'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdRegistryRepositories(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['registry']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].registry.repositories.$get(args, options))
}

export async function getApiV4GroupsIdClusters(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].clusters.$get(args, options))
}

export async function getApiV4GroupsIdClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['clusters'][':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].clusters[':cluster_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['clusters'][':cluster_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].clusters[':cluster_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdClustersClusterId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['clusters'][':cluster_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].clusters[':cluster_id'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdClustersUser(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['clusters']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].clusters.user.$post(args, options))
}

export async function getApiV4GroupsIdAvatar(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].avatar.$get(args, options))
}

export async function getApiV4GroupsIdApplications(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].applications.$get(args, options))
}

export async function postApiV4GroupsIdApplications(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].applications.$post(args, options))
}

export async function getApiV4GroupsIdApplicationsApplicationId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['applications'][':application_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].applications[':application_id'].$get(args, options),
  )
}

export async function putApiV4GroupsIdApplicationsApplicationId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['applications'][':application_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].applications[':application_id'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdApplicationsApplicationId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['applications'][':application_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].applications[':application_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesGoModuleNameVList(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['go'][':module_name']['@v']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.go[':module_name']['@v'].list.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionInfo(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['go'][':module_name']['@v'][':module_version.info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.go[':module_name']['@v'][':module_version.info'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionMod(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['go'][':module_name']['@v'][':module_version.mod']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.go[':module_name']['@v'][':module_version.mod'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionZip(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['go'][':module_name']['@v'][':module_version.zip']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.go[':module_name']['@v'][':module_version.zip'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GeoProxy(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.geo.proxy.$get(undefined, options))
}

export async function getApiV4GeoRetrieveReplicableNameReplicableId(
  args: InferRequestType<
    (typeof client.api.v4.geo.retrieve)[':replicable_name'][':replicable_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.geo.retrieve[':replicable_name'][':replicable_id'].$get(args, options),
  )
}

export async function getApiV4GeoRepositoriesGlRepositoryPipelineRefs(
  args: InferRequestType<
    (typeof client.api.v4.geo.repositories)[':gl_repository']['pipeline_refs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.geo.repositories[':gl_repository'].pipeline_refs.$get(args, options),
  )
}

export async function postApiV4GeoStatus(
  args: InferRequestType<typeof client.api.v4.geo.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo.status.$post(args, options))
}

export async function postApiV4GeoFailures(
  args: InferRequestType<typeof client.api.v4.geo.failures.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo.failures.$post(args, options))
}

export async function postApiV4GeoProxyGitSshInfoRefsUploadPack(
  args: InferRequestType<typeof client.api.v4.geo.proxy_git_ssh.info_refs_upload_pack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.geo.proxy_git_ssh.info_refs_upload_pack.$post(args, options),
  )
}

export async function postApiV4GeoProxyGitSshUploadPack(
  args: InferRequestType<typeof client.api.v4.geo.proxy_git_ssh.upload_pack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo.proxy_git_ssh.upload_pack.$post(args, options))
}

export async function postApiV4GeoProxyGitSshInfoRefsReceivePack(
  args: InferRequestType<typeof client.api.v4.geo.proxy_git_ssh.info_refs_receive_pack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.geo.proxy_git_ssh.info_refs_receive_pack.$post(args, options),
  )
}

export async function postApiV4GeoProxyGitSshReceivePack(
  args: InferRequestType<typeof client.api.v4.geo.proxy_git_ssh.receive_pack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo.proxy_git_ssh.receive_pack.$post(args, options))
}

export async function postApiV4GeoNodeProxyIdGraphql(
  args: InferRequestType<(typeof client.api.v4.geo.node_proxy)[':id']['graphql']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.geo.node_proxy[':id'].graphql.$post(args, options))
}

export async function putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][
      ':file_name'
    ].authorize.$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':path'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][':path'][
      ':file_name'
    ].authorize.$put(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][
      ':file_name'
    ].$put(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':path'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][':path'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['generic'][':package_name'][':package_version'][':path'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.generic[':package_name'][':package_version'][':path'][
      ':file_name'
    ].$put(args, options),
  )
}

export async function getApiV4ProjectsIdFreezePeriods(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['freeze_periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].freeze_periods.$get(args, options))
}

export async function postApiV4ProjectsIdFreezePeriods(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['freeze_periods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].freeze_periods.$post(args, options))
}

export async function getApiV4ProjectsIdFreezePeriodsFreezePeriodId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['freeze_periods'][':freeze_period_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].freeze_periods[':freeze_period_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdFreezePeriodsFreezePeriodId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['freeze_periods'][':freeze_period_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].freeze_periods[':freeze_period_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdFreezePeriodsFreezePeriodId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['freeze_periods'][':freeze_period_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].freeze_periods[':freeze_period_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryFilesFilePathBlame(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['blame']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].blame.$get(args, options),
  )
}

export async function headApiV4ProjectsIdRepositoryFilesFilePathBlame(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['blame']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].blame.$head(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryFilesFilePathRaw(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].raw.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryFilesFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdRepositoryFilesFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].$put(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryFilesFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdRepositoryFilesFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].$delete(args, options),
  )
}

export async function headApiV4ProjectsIdRepositoryFilesFilePath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['files'][':file_path']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.files[':file_path'].$head(args, options),
  )
}

export async function getApiV4Features(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.features.$get(undefined, options))
}

export async function getApiV4FeaturesDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.features.definitions.$get(undefined, options))
}

export async function postApiV4FeaturesName(
  args: InferRequestType<(typeof client.api.v4.features)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.features[':name'].$post(args, options))
}

export async function deleteApiV4FeaturesName(
  args: InferRequestType<(typeof client.api.v4.features)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.features[':name'].$delete(args, options))
}

export async function getApiV4ProjectsIdFeatureFlagsUserLists(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags_user_lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_user_lists.$get(args, options),
  )
}

export async function postApiV4ProjectsIdFeatureFlagsUserLists(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags_user_lists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_user_lists.$post(args, options),
  )
}

export async function getApiV4ProjectsIdFeatureFlagsUserListsIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags_user_lists'][':iid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_user_lists[':iid'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdFeatureFlagsUserListsIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags_user_lists'][':iid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_user_lists[':iid'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdFeatureFlagsUserListsIid(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags_user_lists'][':iid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_user_lists[':iid'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdFeatureFlags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['feature_flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].feature_flags.$get(args, options))
}

export async function postApiV4ProjectsIdFeatureFlags(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['feature_flags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].feature_flags.$post(args, options))
}

export async function getApiV4ProjectsIdFeatureFlagsSettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['feature_flags_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_settings.$get(args, options),
  )
}

export async function putApiV4ProjectsIdFeatureFlagsSettings(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['feature_flags_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags_settings.$put(args, options),
  )
}

export async function getApiV4ProjectsIdFeatureFlagsFeatureFlagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags'][':feature_flag_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags[':feature_flag_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdFeatureFlagsFeatureFlagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags'][':feature_flag_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags[':feature_flag_name'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdFeatureFlagsFeatureFlagName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['feature_flags'][':feature_flag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].feature_flags[':feature_flag_name'].$delete(args, options),
  )
}

export async function getApiV4Events(
  args: InferRequestType<typeof client.api.v4.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.events.$get(args, options))
}

export async function getApiV4UsersIdEvents(
  args: InferRequestType<(typeof client.api.v4.users)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.users[':id'].events.$get(args, options))
}

export async function getApiV4ProjectsIdErrorTrackingSettings(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.settings.$get(args, options),
  )
}

export async function putApiV4ProjectsIdErrorTrackingSettings(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.settings.$put(args, options),
  )
}

export async function patchApiV4ProjectsIdErrorTrackingSettings(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.settings.$patch(args, options),
  )
}

export async function getApiV4ProjectsIdErrorTrackingClientKeys(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['client_keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.client_keys.$get(args, options),
  )
}

export async function postApiV4ProjectsIdErrorTrackingClientKeys(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['client_keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.client_keys.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdErrorTrackingClientKeysKeyId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['error_tracking']['client_keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].error_tracking.client_keys[':key_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdEnvironments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].environments.$get(args, options))
}

export async function postApiV4ProjectsIdEnvironments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].environments.$post(args, options))
}

export async function getApiV4ProjectsIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments'][':environment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments[':environment_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments'][':environment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments[':environment_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments'][':environment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments[':environment_id'].$delete(args, options),
  )
}

export async function deleteApiV4ProjectsIdEnvironmentsReviewApps(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments']['review_apps']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments.review_apps.$delete(args, options),
  )
}

export async function postApiV4ProjectsIdEnvironmentsEnvironmentIdStop(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments'][':environment_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments[':environment_id'].stop.$post(args, options),
  )
}

export async function postApiV4ProjectsIdEnvironmentsStopStale(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['environments']['stop_stale']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].environments.stop_stale.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes'][':draft_note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes[
      ':draft_note_id'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes'][':draft_note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes[
      ':draft_note_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes'][':draft_note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes[
      ':draft_note_id'
    ].$delete(args, options),
  )
}

export async function putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdPublish(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes'][':draft_note_id']['publish']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].draft_notes[
      ':draft_note_id'
    ].publish.$put(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesBulkPublish(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['draft_notes']['bulk_publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[
      ':merge_request_iid'
    ].draft_notes.bulk_publish.$post(args, options),
  )
}

export async function getApiV4ProjectsIdDeployments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deployments.$get(args, options))
}

export async function postApiV4ProjectsIdDeployments(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deployments.$post(args, options))
}

export async function getApiV4ProjectsIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deployments[':deployment_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deployments'][':deployment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deployments[':deployment_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deployments'][':deployment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deployments[':deployment_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdDeploymentsDeploymentIdMergeRequests(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deployments'][':deployment_id']['merge_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deployments[':deployment_id'].merge_requests.$get(args, options),
  )
}

export async function postApiV4ProjectsIdDeploymentsDeploymentIdApproval(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deployments'][':deployment_id']['approval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deployments[':deployment_id'].approval.$post(args, options),
  )
}

export async function getApiV4DeployTokens(
  args: InferRequestType<typeof client.api.v4.deploy_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.deploy_tokens.$get(args, options))
}

export async function getApiV4ProjectsIdDeployTokens(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deploy_tokens.$get(args, options))
}

export async function postApiV4ProjectsIdDeployTokens(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deploy_tokens.$post(args, options))
}

export async function getApiV4ProjectsIdDeployTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deploy_tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_tokens[':token_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdDeployTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deploy_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_tokens[':token_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdDeployTokens(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['deploy_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].deploy_tokens.$get(args, options))
}

export async function postApiV4GroupsIdDeployTokens(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['deploy_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].deploy_tokens.$post(args, options))
}

export async function getApiV4GroupsIdDeployTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['deploy_tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].deploy_tokens[':token_id'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdDeployTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['deploy_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].deploy_tokens[':token_id'].$delete(args, options),
  )
}

export async function getApiV4DeployKeys(
  args: InferRequestType<typeof client.api.v4.deploy_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.deploy_keys.$get(args, options))
}

export async function postApiV4DeployKeys(
  args: InferRequestType<typeof client.api.v4.deploy_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.deploy_keys.$post(args, options))
}

export async function getApiV4ProjectsIdDeployKeys(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deploy_keys.$get(args, options))
}

export async function postApiV4ProjectsIdDeployKeys(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].deploy_keys.$post(args, options))
}

export async function getApiV4ProjectsIdDeployKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_keys[':key_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdDeployKeysKeyId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['deploy_keys'][':key_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_keys[':key_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdDeployKeysKeyId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deploy_keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_keys[':key_id'].$delete(args, options),
  )
}

export async function postApiV4ProjectsIdDeployKeysKeyIdEnable(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['deploy_keys'][':key_id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].deploy_keys[':key_id'].enable.$post(args, options),
  )
}

export async function deleteApiV4GroupsIdDependencyProxyCache(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['dependency_proxy']['cache']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].dependency_proxy.cache.$delete(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionReleaseGpg(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution']['Release.gpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution']['Release.gpg'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionRelease(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution']['Release']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'].Release.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionInRelease(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution']['InRelease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'].InRelease.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackages(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['debian-installer']['binary-:architecture']['Packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][':component'][
      'debian-installer'
    ]['binary-:architecture'].Packages.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['debian-installer']['binary-:architecture']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][':component'][
      'debian-installer'
    ]['binary-:architecture']['by-hash'].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceSources(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['source']['Sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][
      ':component'
    ].source.Sources.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['source']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][':component'].source[
      'by-hash'
    ].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitecturePackages(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['binary-:architecture']['Packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][':component'][
      'binary-:architecture'
    ].Packages.$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['dists'][':distribution'][':component']['binary-:architecture']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.dists[':distribution'][':component'][
      'binary-:architecture'
    ]['by-hash'].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4GroupsIdDashPackagesDebianPoolDistributionProjectIdLetterPackageNamePackageVersionFileName(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['-']['packages']['debian']['pool'][':distribution'][':project_id'][':letter'][':package_name'][':package_version'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id']['-'].packages.debian.pool[':distribution'][':project_id'][
      ':letter'
    ][':package_name'][':package_version'][':file_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionReleaseGpg(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution']['Release.gpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution']['Release.gpg'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionRelease(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution']['Release']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'].Release.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionInRelease(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution']['InRelease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'].InRelease.$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['debian-installer']['binary-:architecture']['Packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][':component'][
      'debian-installer'
    ]['binary-:architecture'].Packages.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['debian-installer']['binary-:architecture']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][':component'][
      'debian-installer'
    ]['binary-:architecture']['by-hash'].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceSources(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['source']['Sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][
      ':component'
    ].source.Sources.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['source']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][':component'].source[
      'by-hash'
    ].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitecturePackages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['binary-:architecture']['Packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][':component'][
      'binary-:architecture'
    ].Packages.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['dists'][':distribution'][':component']['binary-:architecture']['by-hash']['SHA256'][':file_sha256']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.dists[':distribution'][':component'][
      'binary-:architecture'
    ]['by-hash'].SHA256[':file_sha256'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesDebianPoolDistributionLetterPackageNamePackageVersionFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian']['pool'][':distribution'][':letter'][':package_name'][':package_version'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian.pool[':distribution'][':letter'][':package_name'][
      ':package_version'
    ][':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesDebianFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian[':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesDebianFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['debian'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.debian[':file_name'].authorize.$put(args, options),
  )
}

export async function getApiV4DatabasesDatabaseNameDictionaryTables(
  args: InferRequestType<
    (typeof client.api.v4.databases)[':database_name']['dictionary']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.databases[':database_name'].dictionary.tables.$get(args, options),
  )
}

export async function getApiV4RegistryRepositoriesId(
  args: InferRequestType<(typeof client.api.v4.registry.repositories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.registry.repositories[':id'].$get(args, options))
}

export async function postApiV4ContainerRegistryEventEvents(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.container_registry_event.events.$post(undefined, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2UsersAuthenticate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['users']['authenticate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.users.authenticate.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2UsersCheckCredentials(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['users']['check_credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.users.check_credentials.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans.search.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].search.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelLatest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].latest.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevision(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFiles(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].files.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['files'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].files[':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['files'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].files[':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFilesFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['files'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].files[':file_name'].authorize.$put(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].search.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceLatest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].latest.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisions(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevision(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions'][':package_revision']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions[':package_revision'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFiles(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions'][':package_revision']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions[':package_revision'].files.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions'][':package_revision']['files'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions[':package_revision'].files[':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions'][':package_revision']['files'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions[':package_revision'].files[':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFilesFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v2']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['revisions'][':recipe_revision']['packages'][':conan_package_reference']['revisions'][':package_revision']['files'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v2.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].revisions[':recipe_revision'].packages[
      ':conan_package_reference'
    ].revisions[':package_revision'].files[':file_name'].authorize.$put(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1UsersAuthenticate(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['users']['authenticate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.users.authenticate.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1UsersCheckCredentials(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['users']['check_credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.users.check_credentials.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans.search.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].search.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1Ping(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['ping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.ping.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReference(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].digest.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigest(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].digest.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrls(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['download_urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].download_urls.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrls(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['download_urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].download_urls.$get(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrls(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['upload_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].upload_urls.$post(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrls(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['conans'][':package_name'][':package_version'][':package_username'][':package_channel']['upload_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].upload_urls.$post(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].export[':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].export[':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].export[':file_name'].authorize.$put(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].package[':conan_package_reference'][
      ':package_revision'
    ][':file_name'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].package[':conan_package_reference'][
      ':package_revision'
    ][':file_name'].$put(args, options),
  )
}

export async function putApiV4ProjectsIdPackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['conan']['v1']['files'][':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.conan.v1.files[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'][':recipe_revision'].package[':conan_package_reference'][
      ':package_revision'
    ][':file_name'].authorize.$put(args, options),
  )
}

export async function getApiV4PackagesConanV1UsersAuthenticate(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.users.authenticate.$get(undefined, options),
  )
}

export async function getApiV4PackagesConanV1UsersCheckCredentials(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.users.check_credentials.$get(undefined, options),
  )
}

export async function getApiV4PackagesConanV1ConansSearch(
  args: InferRequestType<typeof client.api.v4.packages.conan.v1.conans.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.packages.conan.v1.conans.search.$get(args, options))
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelSearch(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].search.$get(args, options),
  )
}

export async function getApiV4PackagesConanV1Ping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.packages.conan.v1.ping.$get(undefined, options))
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReference(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].$get(args, options),
  )
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].$get(args, options),
  )
}

export async function deleteApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].$delete(args, options),
  )
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDigest(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].digest.$get(args, options),
  )
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigest(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].digest.$get(args, options),
  )
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceDownloadUrls(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['download_urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].download_urls.$get(args, options),
  )
}

export async function getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrls(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['download_urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].download_urls.$get(args, options),
  )
}

export async function postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrls(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['packages'][':conan_package_reference']['upload_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].packages[':conan_package_reference'].upload_urls.$post(args, options),
  )
}

export async function postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrls(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.conans)[':package_name'][':package_version'][':package_username'][':package_channel']['upload_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.conans[':package_name'][':package_version'][
      ':package_username'
    ][':package_channel'].upload_urls.$post(args, options),
  )
}

export async function getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileName(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].export[':file_name'].$get(args, options),
  )
}

export async function putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileName(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].export[':file_name'].$put(args, options),
  )
}

export async function putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionExportFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['export'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].export[':file_name'].authorize.$put(args, options),
  )
}

export async function getApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileName(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].package[':conan_package_reference'][':package_revision'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileName(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].package[':conan_package_reference'][':package_revision'][
      ':file_name'
    ].$put(args, options),
  )
}

export async function putApiV4PackagesConanV1FilesPackageNamePackageVersionPackageUsernamePackageChannelRecipeRevisionPackageConanPackageReferencePackageRevisionFileNameAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.packages.conan.v1.files)[':package_name'][':package_version'][':package_username'][':package_channel'][':recipe_revision']['package'][':conan_package_reference'][':package_revision'][':file_name']['authorize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.packages.conan.v1.files[':package_name'][':package_version'][':package_username'][
      ':package_channel'
    ][':recipe_revision'].package[':conan_package_reference'][':package_revision'][
      ':file_name'
    ].authorize.$put(args, options),
  )
}

export async function getApiV4GroupIdDashPackagesComposerPackages(
  args: InferRequestType<
    (typeof client.api.v4.group)[':id']['-']['packages']['composer']['packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.group[':id']['-'].packages.composer.packages.$get(args, options),
  )
}

export async function getApiV4GroupIdDashPackagesComposerPSha(
  args: InferRequestType<
    (typeof client.api.v4.group)[':id']['-']['packages']['composer']['p'][':sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.group[':id']['-'].packages.composer.p[':sha'].$get(args, options),
  )
}

export async function getApiV4GroupIdDashPackagesComposerP2PackageName(
  args: InferRequestType<
    (typeof client.api.v4.group)[':id']['-']['packages']['composer']['p2'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.group[':id']['-'].packages.composer.p2[':package_name'].$get(args, options),
  )
}

export async function getApiV4GroupIdDashPackagesComposerPackageName(
  args: InferRequestType<
    (typeof client.api.v4.group)[':id']['-']['packages']['composer'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.group[':id']['-'].packages.composer[':package_name'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdPackagesComposer(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['packages']['composer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].packages.composer.$post(args, options))
}

export async function getApiV4ProjectsIdPackagesComposerArchivesPackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['composer']['archives'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.composer.archives[':package_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaStatuses(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].statuses.$get(args, options),
  )
}

export async function postApiV4ProjectsIdStatusesSha(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['statuses'][':sha']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].statuses[':sha'].$post(args, options))
}

export async function getApiV4ProjectsIdRepositoryCommits(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.commits.$get(args, options))
}

export async function postApiV4ProjectsIdRepositoryCommits(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['commits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.commits.$post(args, options))
}

export async function getApiV4ProjectsIdRepositoryCommitsSha(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaDiff(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].diff.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaComments(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].comments.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryCommitsShaComments(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].comments.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaSequence(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['sequence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].sequence.$get(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryCommitsShaCherryPick(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['cherry_pick']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].cherry_pick.$post(args, options),
  )
}

export async function postApiV4ProjectsIdRepositoryCommitsShaRevert(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].revert.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaRefs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['refs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].refs.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaMergeRequests(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['merge_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].merge_requests.$get(args, options),
  )
}

export async function getApiV4ProjectsIdRepositoryCommitsShaSignature(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['commits'][':sha']['signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.commits[':sha'].signature.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesCargoConfigJson(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo']['config.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo['config.json'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesCargo1PackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo']['1'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo['1'][':package_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesCargo2PackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo']['2'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo['2'][':package_name'].$get(args, options),
  )
}

export async function getApiV4ProjectsIdPackagesCargo3FirstCharPackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo']['3'][':first_char'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo['3'][':first_char'][':package_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesCargoPrefix1Prefix2PackageName(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo'][':prefix_1'][':prefix_2'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo[':prefix_1'][':prefix_2'][':package_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPackagesCargoPackageNamePackageVersionDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo'][':package_name'][':package_version']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo[':package_name'][':package_version'].download.$get(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdPackagesCargoApiV1CratesNew(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['packages']['cargo']['api']['v1']['crates']['new']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].packages.cargo.api.v1.crates.new.$put(args, options),
  )
}

export async function getApiV4ProjectsIdClusterAgents(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['cluster_agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].cluster_agents.$get(args, options))
}

export async function postApiV4ProjectsIdClusterAgents(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['cluster_agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].cluster_agents.$post(args, options))
}

export async function getApiV4ProjectsIdClusterAgentsAgentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdClusterAgentsAgentId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdClusterAgentsAgentIdTokens(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].tokens.$get(args, options),
  )
}

export async function postApiV4ProjectsIdClusterAgentsAgentIdTokens(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].tokens.$post(args, options),
  )
}

export async function getApiV4ProjectsIdClusterAgentsAgentIdTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].tokens[':token_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdClusterAgentsAgentIdTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['cluster_agents'][':agent_id']['tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].cluster_agents[':agent_id'].tokens[':token_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4DiscoverCertBasedClusters(
  args: InferRequestType<(typeof client.api.v4)['discover-cert-based-clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4['discover-cert-based-clusters'].$get(args, options))
}

export async function getApiV4ProjectsIdVariables(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].variables.$get(args, options))
}

export async function postApiV4ProjectsIdVariables(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].variables.$post(args, options))
}

export async function getApiV4ProjectsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['variables'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].variables[':key'].$get(args, options))
}

export async function putApiV4ProjectsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['variables'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].variables[':key'].$put(args, options))
}

export async function deleteApiV4ProjectsIdVariablesKey(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['variables'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].variables[':key'].$delete(args, options))
}

export async function postApiV4ProjectsIdTriggerPipeline(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['trigger']['pipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].trigger.pipeline.$post(args, options))
}

export async function postApiV4ProjectsIdRefRefTriggerPipeline(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['ref'][':ref']['trigger']['pipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].ref[':ref'].trigger.pipeline.$post(args, options),
  )
}

export async function getApiV4ProjectsIdTriggers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].triggers.$get(args, options))
}

export async function postApiV4ProjectsIdTriggers(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].triggers.$post(args, options))
}

export async function getApiV4ProjectsIdTriggersTriggerId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['triggers'][':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].triggers[':trigger_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdTriggersTriggerId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['triggers'][':trigger_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].triggers[':trigger_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdTriggersTriggerId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['triggers'][':trigger_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].triggers[':trigger_id'].$delete(args, options),
  )
}

export async function getApiV4Pipelines(
  args: InferRequestType<typeof client.api.v4.pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.pipelines.$get(args, options))
}

export async function getApiV4ProjectsIdPipelineSchedules(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pipeline_schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pipeline_schedules.$get(args, options))
}

export async function postApiV4ProjectsIdPipelineSchedules(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pipeline_schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pipeline_schedules.$post(args, options))
}

export async function getApiV4ProjectsIdPipelineSchedulesPipelineScheduleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPipelineSchedulesPipelineScheduleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPipelines(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].pipelines.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdTakeOwnership(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['take_ownership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].take_ownership.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPlay(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['play']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].play.$post(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariables(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['variables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].variables.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['variables'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].variables[
      ':key'
    ].$get(args, options),
  )
}

export async function putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['variables'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].variables[
      ':key'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKey(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipeline_schedules'][':pipeline_schedule_id']['variables'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipeline_schedules[':pipeline_schedule_id'].variables[
      ':key'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPipelines(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pipelines.$get(args, options))
}

export async function postApiV4ProjectsIdPipeline(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pipeline.$post(args, options))
}

export async function getApiV4ProjectsIdPipelinesLatest(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['pipelines']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].pipelines.latest.$get(args, options))
}

export async function getApiV4ProjectsIdPipelinesPipelineId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdPipelinesPipelineId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdJobs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].jobs.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdBridges(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['bridges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].bridges.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdTriggerJobs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['trigger_jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].trigger_jobs.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdVariables(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].variables.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdTestReport(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['test_report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].test_report.$get(args, options),
  )
}

export async function getApiV4ProjectsIdPipelinesPipelineIdTestReportSummary(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['test_report_summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].test_report_summary.$get(args, options),
  )
}

export async function putApiV4ProjectsIdPipelinesPipelineIdMetadata(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].metadata.$put(args, options),
  )
}

export async function postApiV4ProjectsIdPipelinesPipelineIdRetry(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].retry.$post(args, options),
  )
}

export async function postApiV4ProjectsIdPipelinesPipelineIdCancel(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['pipelines'][':pipeline_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].pipelines[':pipeline_id'].cancel.$post(args, options),
  )
}

export async function getApiV4ProjectsIdSecureFiles(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['secure_files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].secure_files.$get(args, options))
}

export async function postApiV4ProjectsIdSecureFiles(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['secure_files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].secure_files.$post(args, options))
}

export async function getApiV4ProjectsIdSecureFilesSecureFileId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['secure_files'][':secure_file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].secure_files[':secure_file_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdSecureFilesSecureFileId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['secure_files'][':secure_file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].secure_files[':secure_file_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdSecureFilesSecureFileIdDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['secure_files'][':secure_file_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].secure_files[':secure_file_id'].download.$get(args, options),
  )
}

export async function getApiV4Runners(
  args: InferRequestType<typeof client.api.v4.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.$get(args, options))
}

export async function postApiV4Runners(
  args: InferRequestType<typeof client.api.v4.runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.$post(args, options))
}

export async function deleteApiV4Runners(
  args: InferRequestType<typeof client.api.v4.runners.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.$delete(args, options))
}

export async function getApiV4RunnersAll(
  args: InferRequestType<typeof client.api.v4.runners.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.all.$get(args, options))
}

export async function getApiV4RunnersId(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].$get(args, options))
}

export async function putApiV4RunnersId(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].$put(args, options))
}

export async function deleteApiV4RunnersId(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].$delete(args, options))
}

export async function getApiV4RunnersIdManagers(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['managers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].managers.$get(args, options))
}

export async function getApiV4RunnersIdProjects(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].projects.$get(args, options))
}

export async function getApiV4RunnersIdJobs(
  args: InferRequestType<(typeof client.api.v4.runners)[':id']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners[':id'].jobs.$get(args, options))
}

export async function postApiV4RunnersIdResetAuthenticationToken(
  args: InferRequestType<
    (typeof client.api.v4.runners)[':id']['reset_authentication_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.runners[':id'].reset_authentication_token.$post(args, options),
  )
}

export async function getApiV4ProjectsIdRunners(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].runners.$get(args, options))
}

export async function postApiV4ProjectsIdRunners(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['runners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].runners.$post(args, options))
}

export async function deleteApiV4ProjectsIdRunnersRunnerId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].runners[':runner_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdRunners(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].runners.$get(args, options))
}

export async function postApiV4RunnersResetRegistrationToken(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v4.runners.reset_registration_token.$post(undefined, options),
  )
}

export async function postApiV4ProjectsIdRunnersResetRegistrationToken(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['runners']['reset_registration_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].runners.reset_registration_token.$post(args, options),
  )
}

export async function postApiV4GroupsIdRunnersResetRegistrationToken(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['runners']['reset_registration_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].runners.reset_registration_token.$post(args, options),
  )
}

export async function deleteApiV4RunnersManagers(
  args: InferRequestType<typeof client.api.v4.runners.managers.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.managers.$delete(args, options))
}

export async function postApiV4RunnersVerify(
  args: InferRequestType<typeof client.api.v4.runners.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.verify.$post(args, options))
}

export async function postApiV4RunnersResetAuthenticationToken(
  args: InferRequestType<typeof client.api.v4.runners.reset_authentication_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.runners.reset_authentication_token.$post(args, options))
}

export async function getApiV4RunnersRouterDiscovery(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.runners.router.discovery.$get(undefined, options))
}

export async function postApiV4JobsRequest(
  args: InferRequestType<typeof client.api.v4.jobs.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs.request.$post(args, options))
}

export async function putApiV4JobsId(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].$put(args, options))
}

export async function getApiV4JobsIdRuntimeEnvironmentKey(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['runtime_environment_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].runtime_environment_key.$get(args, options))
}

export async function patchApiV4JobsIdTrace(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['trace']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].trace.$patch(args, options))
}

export async function postApiV4JobsIdArtifactsAuthorize(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['artifacts']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].artifacts.authorize.$post(args, options))
}

export async function getApiV4JobsIdArtifacts(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].artifacts.$get(args, options))
}

export async function postApiV4JobsIdArtifacts(
  args: InferRequestType<(typeof client.api.v4.jobs)[':id']['artifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.jobs[':id'].artifacts.$post(args, options))
}

export async function getApiV4ProjectsIdResourceGroups(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['resource_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].resource_groups.$get(args, options))
}

export async function getApiV4ProjectsIdResourceGroupsKey(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['resource_groups'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].resource_groups[':key'].$get(args, options),
  )
}

export async function putApiV4ProjectsIdResourceGroupsKey(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['resource_groups'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].resource_groups[':key'].$put(args, options),
  )
}

export async function getApiV4ProjectsIdResourceGroupsKeyCurrentJob(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['resource_groups'][':key']['current_job']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].resource_groups[':key'].current_job.$get(args, options),
  )
}

export async function getApiV4ProjectsIdResourceGroupsKeyUpcomingJobs(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['resource_groups'][':key']['upcoming_jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].resource_groups[':key'].upcoming_jobs.$get(args, options),
  )
}

export async function getApiV4ProjectsIdJobs(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].jobs.$get(args, options))
}

export async function getApiV4ProjectsIdJobsJobId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['jobs'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].jobs[':job_id'].$get(args, options))
}

export async function getApiV4ProjectsIdJobsJobIdTrace(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].trace.$get(args, options),
  )
}

export async function postApiV4ProjectsIdJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].cancel.$post(args, options),
  )
}

export async function postApiV4ProjectsIdJobsJobIdRetry(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].retry.$post(args, options),
  )
}

export async function postApiV4ProjectsIdJobsJobIdErase(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['erase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].erase.$post(args, options),
  )
}

export async function postApiV4ProjectsIdJobsJobIdPlay(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['play']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].play.$post(args, options),
  )
}

export async function getApiV4Job(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.job.$get(undefined, options))
}

export async function getApiV4JobAllowedAgents(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.job.allowed_agents.$get(undefined, options))
}

export async function getApiV4GroupsIdCustomAttributes(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['custom_attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].custom_attributes.$get(args, options))
}

export async function getApiV4GroupsIdCustomAttributesKey(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['custom_attributes'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].custom_attributes[':key'].$get(args, options),
  )
}

export async function putApiV4GroupsIdCustomAttributesKey(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['custom_attributes'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].custom_attributes[':key'].$put(args, options),
  )
}

export async function deleteApiV4GroupsIdCustomAttributesKey(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['custom_attributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].custom_attributes[':key'].$delete(args, options),
  )
}

export async function getApiV4Groups(
  args: InferRequestType<typeof client.api.v4.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups.$get(args, options))
}

export async function postApiV4Groups(
  args: InferRequestType<typeof client.api.v4.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups.$post(args, options))
}

export async function getApiV4GroupsId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].$get(args, options))
}

export async function putApiV4GroupsId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].$put(args, options))
}

export async function deleteApiV4GroupsId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].$delete(args, options))
}

export async function postApiV4GroupsIdArchive(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].archive.$post(args, options))
}

export async function postApiV4GroupsIdUnarchive(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].unarchive.$post(args, options))
}

export async function postApiV4GroupsIdRestore(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].restore.$post(args, options))
}

export async function getApiV4GroupsIdGroupsShared(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['groups']['shared']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].groups.shared.$get(args, options))
}

export async function getApiV4GroupsIdInvitedGroups(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['invited_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].invited_groups.$get(args, options))
}

export async function getApiV4GroupsIdProjects(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].projects.$get(args, options))
}

export async function getApiV4GroupsIdProjectsShared(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['projects']['shared']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].projects.shared.$get(args, options))
}

export async function getApiV4GroupsIdSubgroups(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['subgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].subgroups.$get(args, options))
}

export async function getApiV4GroupsIdDescendantGroups(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['descendant_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].descendant_groups.$get(args, options))
}

export async function postApiV4GroupsIdProjectsProjectId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['projects'][':project_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].projects[':project_id'].$post(args, options),
  )
}

export async function getApiV4GroupsIdTransferLocations(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['transfer_locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].transfer_locations.$get(args, options))
}

export async function postApiV4GroupsIdTransfer(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].transfer.$post(args, options))
}

export async function postApiV4GroupsIdTransferToOrganization(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['transfer_to_organization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].transfer_to_organization.$post(args, options),
  )
}

export async function postApiV4GroupsIdShare(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].share.$post(args, options))
}

export async function deleteApiV4GroupsIdShareGroupId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['share'][':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].share[':group_id'].$delete(args, options))
}

export async function deleteApiV4GroupsIdSharedProjectsProjectId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['shared_projects'][':project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].shared_projects[':project_id'].$delete(args, options),
  )
}

export async function postApiV4GroupsIdLdapSync(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ldap_sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ldap_sync.$post(args, options))
}

export async function getApiV4GroupsIdAuditEvents(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['audit_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].audit_events.$get(args, options))
}

export async function getApiV4GroupsIdAuditEventsAuditEventId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['audit_events'][':audit_event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].audit_events[':audit_event_id'].$get(args, options),
  )
}

export async function getApiV4GroupsIdSamlUsers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['saml_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].saml_users.$get(args, options))
}

export async function getApiV4GroupsIdProvisionedUsers(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['provisioned_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].provisioned_users.$get(args, options))
}

export async function getApiV4GroupsIdSshCertificates(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ssh_certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ssh_certificates.$get(args, options))
}

export async function postApiV4GroupsIdSshCertificates(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['ssh_certificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].ssh_certificates.$post(args, options))
}

export async function deleteApiV4GroupsIdSshCertificatesSshCertificatesId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['ssh_certificates'][':ssh_certificates_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].ssh_certificates[':ssh_certificates_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdJobsArtifactsRefNameDownload(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs']['artifacts'][':ref_name']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs.artifacts[':ref_name'].download.$get(args, options),
  )
}

export async function getApiV4ProjectsIdJobsArtifactsRefNameRawArtifactPath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs']['artifacts'][':ref_name']['raw'][':artifact_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs.artifacts[':ref_name'].raw[':artifact_path'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdJobsJobIdArtifacts(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].artifacts.$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdJobsJobIdArtifacts(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['artifacts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].artifacts.$delete(args, options),
  )
}

export async function getApiV4ProjectsIdJobsJobIdArtifactsTree(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['artifacts']['tree']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].artifacts.tree.$get(args, options),
  )
}

export async function getApiV4ProjectsIdJobsJobIdArtifactsArtifactPath(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['artifacts'][':artifact_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].artifacts[':artifact_path'].$get(args, options),
  )
}

export async function postApiV4ProjectsIdJobsJobIdArtifactsKeep(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['jobs'][':job_id']['artifacts']['keep']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].jobs[':job_id'].artifacts.keep.$post(args, options),
  )
}

export async function deleteApiV4ProjectsIdArtifacts(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['artifacts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].artifacts.$delete(args, options))
}

export async function postApiV4ProjectsIdCatalogPublish(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['catalog']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].catalog.publish.$post(args, options))
}

export async function getApiV4BulkImports(
  args: InferRequestType<typeof client.api.v4.bulk_imports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports.$get(args, options))
}

export async function postApiV4BulkImports(
  args: InferRequestType<typeof client.api.v4.bulk_imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports.$post(args, options))
}

export async function getApiV4BulkImportsEntities(
  args: InferRequestType<typeof client.api.v4.bulk_imports.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports.entities.$get(args, options))
}

export async function getApiV4BulkImportsImportId(
  args: InferRequestType<(typeof client.api.v4.bulk_imports)[':import_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports[':import_id'].$get(args, options))
}

export async function getApiV4BulkImportsImportIdEntities(
  args: InferRequestType<(typeof client.api.v4.bulk_imports)[':import_id']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports[':import_id'].entities.$get(args, options))
}

export async function getApiV4BulkImportsImportIdEntitiesEntityId(
  args: InferRequestType<
    (typeof client.api.v4.bulk_imports)[':import_id']['entities'][':entity_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.bulk_imports[':import_id'].entities[':entity_id'].$get(args, options),
  )
}

export async function getApiV4BulkImportsImportIdEntitiesEntityIdFailures(
  args: InferRequestType<
    (typeof client.api.v4.bulk_imports)[':import_id']['entities'][':entity_id']['failures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.bulk_imports[':import_id'].entities[':entity_id'].failures.$get(args, options),
  )
}

export async function postApiV4BulkImportsImportIdCancel(
  args: InferRequestType<(typeof client.api.v4.bulk_imports)[':import_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.bulk_imports[':import_id'].cancel.$post(args, options))
}

export async function getApiV4ProjectsIdRepositoryBranches(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.branches.$get(args, options))
}

export async function postApiV4ProjectsIdRepositoryBranches(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['repository']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].repository.branches.$post(args, options))
}

export async function getApiV4ProjectsIdRepositoryBranchesBranch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['branches'][':branch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.branches[':branch'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdRepositoryBranchesBranch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['branches'][':branch']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.branches[':branch'].$delete(args, options),
  )
}

export async function headApiV4ProjectsIdRepositoryBranchesBranch(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['branches'][':branch']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.branches[':branch'].$head(args, options),
  )
}

export async function putApiV4ProjectsIdRepositoryBranchesBranchProtect(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['branches'][':branch']['protect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.branches[':branch'].protect.$put(args, options),
  )
}

export async function putApiV4ProjectsIdRepositoryBranchesBranchUnprotect(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['branches'][':branch']['unprotect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.branches[':branch'].unprotect.$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdRepositoryMergedBranches(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['repository']['merged_branches']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].repository.merged_branches.$delete(args, options),
  )
}

export async function getApiV4GroupsIdBadges(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges.$get(args, options))
}

export async function postApiV4GroupsIdBadges(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges.$post(args, options))
}

export async function getApiV4GroupsIdBadgesRender(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges']['render']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges.render.$get(args, options))
}

export async function getApiV4GroupsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges'][':badge_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges[':badge_id'].$get(args, options))
}

export async function putApiV4GroupsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges'][':badge_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges[':badge_id'].$put(args, options))
}

export async function deleteApiV4GroupsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['badges'][':badge_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].badges[':badge_id'].$delete(args, options))
}

export async function getApiV4ProjectsIdBadges(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].badges.$get(args, options))
}

export async function postApiV4ProjectsIdBadges(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].badges.$post(args, options))
}

export async function getApiV4ProjectsIdBadgesRender(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges']['render']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].badges.render.$get(args, options))
}

export async function getApiV4ProjectsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges'][':badge_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].badges[':badge_id'].$get(args, options))
}

export async function putApiV4ProjectsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges'][':badge_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].badges[':badge_id'].$put(args, options))
}

export async function deleteApiV4ProjectsIdBadgesBadgeId(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['badges'][':badge_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].badges[':badge_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].award_emoji.$get(args, options),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].award_emoji.$post(args, options),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].award_emoji[':award_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdIssuesIssueIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].award_emoji[':award_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['notes'][':note_id']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].notes[':note_id'].award_emoji.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['notes'][':note_id']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].notes[':note_id'].award_emoji.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['notes'][':note_id']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].notes[':note_id'].award_emoji[
      ':award_id'
    ].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdIssuesIssueIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['issues'][':issue_iid']['notes'][':note_id']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].issues[':issue_iid'].notes[':note_id'].award_emoji[
      ':award_id'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].award_emoji.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].award_emoji.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].award_emoji[
      ':award_id'
    ].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].award_emoji[
      ':award_id'
    ].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['notes'][':note_id']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].notes[
      ':note_id'
    ].award_emoji.$get(args, options),
  )
}

export async function postApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['notes'][':note_id']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].notes[
      ':note_id'
    ].award_emoji.$post(args, options),
  )
}

export async function getApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['notes'][':note_id']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].notes[
      ':note_id'
    ].award_emoji[':award_id'].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdMergeRequestsMergeRequestIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['merge_requests'][':merge_request_iid']['notes'][':note_id']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].merge_requests[':merge_request_iid'].notes[
      ':note_id'
    ].award_emoji[':award_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].award_emoji.$get(args, options),
  )
}

export async function postApiV4ProjectsIdSnippetsSnippetIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].award_emoji.$post(args, options),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].award_emoji[':award_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].award_emoji[':award_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['notes'][':note_id']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].notes[':note_id'].award_emoji.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['notes'][':note_id']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].notes[':note_id'].award_emoji.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['notes'][':note_id']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].notes[':note_id'].award_emoji[
      ':award_id'
    ].$get(args, options),
  )
}

export async function deleteApiV4ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['snippets'][':snippet_id']['notes'][':note_id']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].snippets[':snippet_id'].notes[':note_id'].award_emoji[
      ':award_id'
    ].$delete(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEpicIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].award_emoji.$get(args, options),
  )
}

export async function postApiV4GroupsIdEpicsEpicIidAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].award_emoji.$post(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEpicIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].award_emoji[':award_id'].$get(args, options),
  )
}

export async function deleteApiV4GroupsIdEpicsEpicIidAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].award_emoji[':award_id'].$delete(args, options),
  )
}

export async function getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['notes'][':note_id']['award_emoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].notes[':note_id'].award_emoji.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmoji(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['notes'][':note_id']['award_emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].notes[':note_id'].award_emoji.$post(
      args,
      options,
    ),
  )
}

export async function getApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['notes'][':note_id']['award_emoji'][':award_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].notes[':note_id'].award_emoji[':award_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV4GroupsIdEpicsEpicIidNotesNoteIdAwardEmojiAwardId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['epics'][':epic_iid']['notes'][':note_id']['award_emoji'][':award_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].epics[':epic_iid'].notes[':note_id'].award_emoji[
      ':award_id'
    ].$delete(args, options),
  )
}

export async function getApiV4Avatar(
  args: InferRequestType<typeof client.api.v4.avatar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.avatar.$get(args, options))
}

export async function getApiV4IamUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.iam.userinfo.$get(undefined, options))
}

export async function getApiV4Applications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.applications.$get(undefined, options))
}

export async function postApiV4Applications(
  args: InferRequestType<typeof client.api.v4.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.applications.$post(args, options))
}

export async function deleteApiV4ApplicationsId(
  args: InferRequestType<(typeof client.api.v4.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.applications[':id'].$delete(args, options))
}

export async function postApiV4ApplicationsIdRenewSecret(
  args: InferRequestType<(typeof client.api.v4.applications)[':id']['renew-secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.applications[':id']['renew-secret'].$post(args, options))
}

export async function getApiV4ApplicationAppearance(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.application.appearance.$get(undefined, options))
}

export async function putApiV4ApplicationAppearance(
  args: InferRequestType<typeof client.api.v4.application.appearance.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.application.appearance.$put(args, options))
}

export async function postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesAuthorize(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['alert_management_alerts'][':alert_iid']['metric_images']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].alert_management_alerts[
      ':alert_iid'
    ].metric_images.authorize.$post(args, options),
  )
}

export async function getApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['alert_management_alerts'][':alert_iid']['metric_images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].alert_management_alerts[':alert_iid'].metric_images.$get(
      args,
      options,
    ),
  )
}

export async function postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImages(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['alert_management_alerts'][':alert_iid']['metric_images']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].alert_management_alerts[':alert_iid'].metric_images.$post(
      args,
      options,
    ),
  )
}

export async function putApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['alert_management_alerts'][':alert_iid']['metric_images'][':metric_image_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].alert_management_alerts[':alert_iid'].metric_images[
      ':metric_image_id'
    ].$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['alert_management_alerts'][':alert_iid']['metric_images'][':metric_image_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].alert_management_alerts[':alert_iid'].metric_images[
      ':metric_image_id'
    ].$delete(args, options),
  )
}

export async function postApiV4AdminToken(
  args: InferRequestType<typeof client.api.v4.admin.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.token.$post(args, options))
}

export async function deleteApiV4AdminToken(
  args: InferRequestType<typeof client.api.v4.admin.token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.token.$delete(args, options))
}

export async function getApiV4ApplicationPlanLimits(
  args: InferRequestType<typeof client.api.v4.application.plan_limits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.application.plan_limits.$get(args, options))
}

export async function putApiV4ApplicationPlanLimits(
  args: InferRequestType<typeof client.api.v4.application.plan_limits.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.application.plan_limits.$put(args, options))
}

export async function getApiV4AdminMigrationsPending(
  args: InferRequestType<typeof client.api.v4.admin.migrations.pending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.migrations.pending.$get(args, options))
}

export async function postApiV4AdminMigrationsTimestampMark(
  args: InferRequestType<(typeof client.api.v4.admin.migrations)[':timestamp']['mark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.migrations[':timestamp'].mark.$post(args, options))
}

export async function getApiV4AdminClusters(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.admin.clusters.$get(undefined, options))
}

export async function getApiV4AdminClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.admin.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.clusters[':cluster_id'].$get(args, options))
}

export async function putApiV4AdminClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.admin.clusters)[':cluster_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.clusters[':cluster_id'].$put(args, options))
}

export async function deleteApiV4AdminClustersClusterId(
  args: InferRequestType<(typeof client.api.v4.admin.clusters)[':cluster_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.clusters[':cluster_id'].$delete(args, options))
}

export async function postApiV4AdminClustersAdd(
  args: InferRequestType<typeof client.api.v4.admin.clusters.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.clusters.add.$post(args, options))
}

export async function getApiV4AdminDatabasesDatabaseNameDictionaryTablesTableName(
  args: InferRequestType<
    (typeof client.api.v4.admin.databases)[':database_name']['dictionary']['tables'][':table_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.databases[':database_name'].dictionary.tables[':table_name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV4AdminCiVariables(
  args: InferRequestType<typeof client.api.v4.admin.ci.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.ci.variables.$get(args, options))
}

export async function postApiV4AdminCiVariables(
  args: InferRequestType<typeof client.api.v4.admin.ci.variables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.ci.variables.$post(args, options))
}

export async function getApiV4AdminCiVariablesKey(
  args: InferRequestType<(typeof client.api.v4.admin.ci.variables)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.ci.variables[':key'].$get(args, options))
}

export async function putApiV4AdminCiVariablesKey(
  args: InferRequestType<(typeof client.api.v4.admin.ci.variables)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.ci.variables[':key'].$put(args, options))
}

export async function deleteApiV4AdminCiVariablesKey(
  args: InferRequestType<(typeof client.api.v4.admin.ci.variables)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.ci.variables[':key'].$delete(args, options))
}

export async function getApiV4BroadcastMessages(
  args: InferRequestType<typeof client.api.v4.broadcast_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.broadcast_messages.$get(args, options))
}

export async function postApiV4BroadcastMessages(
  args: InferRequestType<typeof client.api.v4.broadcast_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.broadcast_messages.$post(args, options))
}

export async function getApiV4BroadcastMessagesId(
  args: InferRequestType<(typeof client.api.v4.broadcast_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.broadcast_messages[':id'].$get(args, options))
}

export async function putApiV4BroadcastMessagesId(
  args: InferRequestType<(typeof client.api.v4.broadcast_messages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.broadcast_messages[':id'].$put(args, options))
}

export async function deleteApiV4BroadcastMessagesId(
  args: InferRequestType<(typeof client.api.v4.broadcast_messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.broadcast_messages[':id'].$delete(args, options))
}

export async function getApiV4AdminBatchedBackgroundOperations(
  args: InferRequestType<typeof client.api.v4.admin.batched_background_operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.batched_background_operations.$get(args, options))
}

export async function getApiV4AdminBatchedBackgroundOperationsId(
  args: InferRequestType<(typeof client.api.v4.admin.batched_background_operations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_operations[':id'].$get(args, options),
  )
}

export async function putApiV4AdminBatchedBackgroundOperationsIdStop(
  args: InferRequestType<
    (typeof client.api.v4.admin.batched_background_operations)[':id']['stop']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_operations[':id'].stop.$put(args, options),
  )
}

export async function putApiV4AdminBatchedBackgroundOperationsIdRestart(
  args: InferRequestType<
    (typeof client.api.v4.admin.batched_background_operations)[':id']['restart']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_operations[':id'].restart.$put(args, options),
  )
}

export async function getApiV4AdminBatchedBackgroundMigrationsId(
  args: InferRequestType<(typeof client.api.v4.admin.batched_background_migrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_migrations[':id'].$get(args, options),
  )
}

export async function getApiV4AdminBatchedBackgroundMigrations(
  args: InferRequestType<typeof client.api.v4.admin.batched_background_migrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.admin.batched_background_migrations.$get(args, options))
}

export async function putApiV4AdminBatchedBackgroundMigrationsIdResume(
  args: InferRequestType<
    (typeof client.api.v4.admin.batched_background_migrations)[':id']['resume']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_migrations[':id'].resume.$put(args, options),
  )
}

export async function putApiV4AdminBatchedBackgroundMigrationsIdPause(
  args: InferRequestType<
    (typeof client.api.v4.admin.batched_background_migrations)[':id']['pause']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.admin.batched_background_migrations[':id'].pause.$put(args, options),
  )
}

export async function getApiV4GroupsIdAccessRequests(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['access_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].access_requests.$get(args, options))
}

export async function postApiV4GroupsIdAccessRequests(
  args: InferRequestType<(typeof client.api.v4.groups)[':id']['access_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.groups[':id'].access_requests.$post(args, options))
}

export async function putApiV4GroupsIdAccessRequestsUserIdApprove(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_requests'][':user_id']['approve']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_requests[':user_id'].approve.$put(args, options),
  )
}

export async function deleteApiV4GroupsIdAccessRequestsUserId(
  args: InferRequestType<
    (typeof client.api.v4.groups)[':id']['access_requests'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.groups[':id'].access_requests[':user_id'].$delete(args, options),
  )
}

export async function getApiV4ProjectsIdAccessRequests(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['access_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].access_requests.$get(args, options))
}

export async function postApiV4ProjectsIdAccessRequests(
  args: InferRequestType<(typeof client.api.v4.projects)[':id']['access_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.projects[':id'].access_requests.$post(args, options))
}

export async function putApiV4ProjectsIdAccessRequestsUserIdApprove(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_requests'][':user_id']['approve']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_requests[':user_id'].approve.$put(args, options),
  )
}

export async function deleteApiV4ProjectsIdAccessRequestsUserId(
  args: InferRequestType<
    (typeof client.api.v4.projects)[':id']['access_requests'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v4.projects[':id'].access_requests[':user_id'].$delete(args, options),
  )
}

export async function postApiV4UsageDataTrackEvent(
  args: InferRequestType<typeof client.api.v4.usage_data.track_event.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v4.usage_data.track_event.$post(args, options))
}

export async function getApiV4UsageDataServicePing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v4.usage_data.service_ping.$get(undefined, options))
}
