import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AgentSettingsThinkModels(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.agent.settings.think.models.$get(undefined, options))
}

export async function getV1ProjectsProjectIdAgents(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].agents.$get(args, options))
}

export async function postV1ProjectsProjectIdAgents(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].agents.$post(args, options))
}

export async function getV1ProjectsProjectIdAgentsAgentId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].agents[':agent_id'].$get(args, options),
  )
}

export async function putV1ProjectsProjectIdAgentsAgentId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].agents[':agent_id'].$put(args, options),
  )
}

export async function deleteV1ProjectsProjectIdAgentsAgentId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agents'][':agent_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].agents[':agent_id'].$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdAgentVariables(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['agent-variables'].$get(args, options),
  )
}

export async function postV1ProjectsProjectIdAgentVariables(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['agent-variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['agent-variables'].$post(args, options),
  )
}

export async function getV1ProjectsProjectIdAgentVariablesVariableId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['agent-variables'][':variable_id'].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdAgentVariablesVariableId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['agent-variables'][':variable_id'].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectIdAgentVariablesVariableId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['agent-variables'][':variable_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['agent-variables'][':variable_id'].$patch(args, options),
  )
}

export async function postV1Listen(
  args: InferRequestType<typeof client.v1.listen.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.listen.$post(args, options))
}

export async function postV1Speak(
  args: InferRequestType<typeof client.v1.speak.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.speak.$post(args, options))
}

export async function postV1Read(
  args: InferRequestType<typeof client.v1.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.read.$post(args, options))
}

export async function getV1Projects(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.projects.$get(undefined, options))
}

export async function getV1ProjectsProjectId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].$get(args, options))
}

export async function deleteV1ProjectsProjectId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].$delete(args, options))
}

export async function patchV1ProjectsProjectId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].$patch(args, options))
}

export async function deleteV1ProjectsProjectIdLeave(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['leave']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].leave.$delete(args, options))
}

export async function getV1ProjectsProjectIdModels(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].models.$get(args, options))
}

export async function getV1ProjectsProjectIdModelsModelId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['models'][':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].models[':model_id'].$get(args, options),
  )
}

export async function getV1Models(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models.$get(args, options))
}

export async function getV1ModelsModelId(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.models[':model_id'].$get(args, options))
}

export async function getV1ProjectsProjectIdKeys(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].keys.$get(args, options))
}

export async function postV1ProjectsProjectIdKeys(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].keys.$post(args, options))
}

export async function getV1ProjectsProjectIdKeysKeyId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].keys[':key_id'].$get(args, options))
}

export async function deleteV1ProjectsProjectIdKeysKeyId(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['keys'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].keys[':key_id'].$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdMembers(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].members.$get(args, options))
}

export async function deleteV1ProjectsProjectIdMembersMemberId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].members[':member_id'].$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdMembersMemberIdScopes(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].members[':member_id'].scopes.$get(args, options),
  )
}

export async function putV1ProjectsProjectIdMembersMemberIdScopes(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['members'][':member_id']['scopes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].members[':member_id'].scopes.$put(args, options),
  )
}

export async function getV1ProjectsProjectIdInvites(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].invites.$get(args, options))
}

export async function postV1ProjectsProjectIdInvites(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].invites.$post(args, options))
}

export async function deleteV1ProjectsProjectIdInvitesEmail(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['invites'][':email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].invites[':email'].$delete(args, options),
  )
}

export async function getV1ProjectsProjectIdRequests(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].requests.$get(args, options))
}

export async function getV1ProjectsProjectIdRequestsRequestId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].requests[':request_id'].$get(args, options),
  )
}

export async function getV1ProjectsProjectIdUsage(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].usage.$get(args, options))
}

export async function getV1ProjectsProjectIdUsageFields(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].usage.fields.$get(args, options))
}

export async function getV1ProjectsProjectIdUsageBreakdown(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['usage']['breakdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].usage.breakdown.$get(args, options))
}

export async function getV1ProjectsProjectIdBalances(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].balances.$get(args, options))
}

export async function getV1ProjectsProjectIdBalancesBalanceId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['balances'][':balance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].balances[':balance_id'].$get(args, options),
  )
}

export async function getV1ProjectsProjectIdBillingBreakdown(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['billing']['breakdown']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id'].billing.breakdown.$get(args, options),
  )
}

export async function getV1ProjectsProjectIdBillingFields(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['billing']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].billing.fields.$get(args, options))
}

export async function getV1ProjectsProjectIdPurchases(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project_id'].purchases.$get(args, options))
}

export async function getV1ProjectsProjectIdSelfHostedDistributionCredentials(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$get(args, options),
  )
}

export async function postV1ProjectsProjectIdSelfHostedDistributionCredentials(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['self-hosted'].distribution.credentials.$post(args, options),
  )
}

export async function getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
      ':distribution_credentials_id'
    ].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_id']['self-hosted']['distribution']['credentials'][':distribution_credentials_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project_id']['self-hosted'].distribution.credentials[
      ':distribution_credentials_id'
    ].$delete(args, options),
  )
}

export async function postV1AuthGrant(
  args: InferRequestType<typeof client.v1.auth.grant.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.grant.$post(args, options))
}

export async function postV2Speak(
  args: InferRequestType<typeof client.v2.speak.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.speak.$post(args, options))
}
