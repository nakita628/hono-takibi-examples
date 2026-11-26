import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Folders(
  args: InferRequestType<typeof client.v1.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders.$get(args, options))
}

export async function postV1Folders(
  args: InferRequestType<typeof client.v1.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders.$post(args, options))
}

export async function getV1FoldersId(
  args: InferRequestType<(typeof client.v1.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':id'].$get(args, options))
}

export async function postV1FoldersId(
  args: InferRequestType<(typeof client.v1.folders)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':id'].$post(args, options))
}

export async function deleteV1FoldersId(
  args: InferRequestType<(typeof client.v1.folders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.folders[':id'].$delete(args, options))
}

export async function getV1Flows(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.$get(args, options))
}

export async function postV1Flows(
  args: InferRequestType<typeof client.v1.flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.$post(args, options))
}

export async function getV1FlowsId(
  args: InferRequestType<(typeof client.v1.flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':id'].$get(args, options))
}

export async function postV1FlowsId(
  args: InferRequestType<(typeof client.v1.flows)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':id'].$post(args, options))
}

export async function deleteV1FlowsId(
  args: InferRequestType<(typeof client.v1.flows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':id'].$delete(args, options))
}

export async function getV1FlowsIdTemplate(
  args: InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':id'].template.$get(args, options))
}

export async function postV1SampleDataTestStep(
  args: InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sample-data']['test-step'].$post(args, options))
}

export async function getV1SampleData(
  args: InferRequestType<(typeof client.v1)['sample-data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sample-data'].$get(args, options))
}

export async function getV1FlowRuns(
  args: InferRequestType<(typeof client.v1)['flow-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['flow-runs'].$get(args, options))
}

export async function getV1FlowRunsCountByStatus(
  args: InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['flow-runs']['count-by-status'].$get(args, options))
}

export async function getV1FlowRunsId(
  args: InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['flow-runs'][':id'].$get(args, options))
}

export async function postV1FlowRunsCancel(
  args: InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['flow-runs'].cancel.$post(args, options))
}

export async function getV1AppConnections(
  args: InferRequestType<(typeof client.v1)['app-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'].$get(args, options))
}

export async function postV1AppConnections(
  args: InferRequestType<(typeof client.v1)['app-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'].$post(args, options))
}

export async function getV1AppConnectionsId(
  args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'][':id'].$get(args, options))
}

export async function postV1AppConnectionsId(
  args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'][':id'].$post(args, options))
}

export async function deleteV1AppConnectionsId(
  args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'][':id'].$delete(args, options))
}

export async function getV1AppConnectionsOwners(
  args: InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'].owners.$get(args, options))
}

export async function postV1AppConnectionsReplace(
  args: InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['app-connections'].replace.$post(args, options))
}

export async function postV1AppConnectionsOauth2AuthorizationUrl(
  args: InferRequestType<
    (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['app-connections'].oauth2['authorization-url'].$post(args, options),
  )
}

export async function getV1Variables(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables.$get(args, options))
}

export async function postV1Variables(
  args: InferRequestType<typeof client.v1.variables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables.$post(args, options))
}

export async function postV1VariablesId(
  args: InferRequestType<(typeof client.v1.variables)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables[':id'].$post(args, options))
}

export async function deleteV1VariablesId(
  args: InferRequestType<(typeof client.v1.variables)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables[':id'].$delete(args, options))
}

export async function getV1PlatformsId(
  args: InferRequestType<(typeof client.v1.platforms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.platforms[':id'].$get(args, options))
}

export async function getV1ProjectsProjectIdMcpServer(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId']['mcp-server'].$get(args, options))
}

export async function postV1ProjectsProjectIdMcpServer(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId']['mcp-server'].$post(args, options))
}

export async function postV1ProjectsProjectIdMcpServerRotate(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId']['mcp-server'].rotate.$post(args, options),
  )
}

export async function getV1McpServer(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['mcp-server'].$get(undefined, options))
}

export async function postV1McpServer(
  args: InferRequestType<(typeof client.v1)['mcp-server']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['mcp-server'].$post(args, options))
}

export async function postV1McpServerRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['mcp-server'].rotate.$post(undefined, options))
}

export async function postV1McpOauthApprove(
  args: InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['mcp-oauth'].approve.$post(args, options))
}

export async function postV1ProjectsProjectIdAgentToolsMcpValidate(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId']['agent-tools'].mcp.validate.$post(args, options),
  )
}

export async function getV1Users(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$get(args, options))
}

export async function getV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$get(args, options))
}

export async function postV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$post(args, options))
}

export async function deleteV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$delete(args, options))
}

export async function getV1UserInvitations(
  args: InferRequestType<(typeof client.v1)['user-invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['user-invitations'].$get(args, options))
}

export async function postV1UserInvitations(
  args: InferRequestType<(typeof client.v1)['user-invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['user-invitations'].$post(args, options))
}

export async function deleteV1UserInvitationsId(
  args: InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['user-invitations'][':id'].$delete(args, options))
}

export async function getV1WorkerMachinesQueueMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['worker-machines']['queue-metrics'].$get(undefined, options))
}

export async function getV1TablesId(
  args: InferRequestType<(typeof client.v1.tables)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].$get(args, options))
}

export async function postV1TablesId(
  args: InferRequestType<(typeof client.v1.tables)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].$post(args, options))
}

export async function deleteV1TablesId(
  args: InferRequestType<(typeof client.v1.tables)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].$delete(args, options))
}

export async function getV1Tables(
  args: InferRequestType<typeof client.v1.tables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables.$get(args, options))
}

export async function getV1TablesIdTemplate(
  args: InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].template.$get(args, options))
}

export async function getV1TablesCount(
  args: InferRequestType<typeof client.v1.tables.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables.count.$get(args, options))
}

export async function getV1TablesIdExport(
  args: InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].export.$get(args, options))
}

export async function postV1TablesIdWebhooks(
  args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].webhooks.$post(args, options))
}

export async function deleteV1TablesIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].webhooks[':webhookId'].$delete(args, options))
}

export async function postV1TablesIdClear(
  args: InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tables[':id'].clear.$post(args, options))
}

export async function postV1RecordsId(
  args: InferRequestType<(typeof client.v1.records)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.records[':id'].$post(args, options))
}

export async function getV1Records(
  args: InferRequestType<typeof client.v1.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.records.$get(args, options))
}

export async function deleteV1Records(
  args: InferRequestType<typeof client.v1.records.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.records.$delete(args, options))
}

export async function getV1KnowledgeBaseFiles(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files.$get(args, options))
}

export async function postV1KnowledgeBaseFiles(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files.$post(args, options))
}

export async function postV1KnowledgeBaseFilesUpload(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files.upload.$post(args, options))
}

export async function deleteV1KnowledgeBaseFilesId(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files[':id'].$delete(args, options))
}

export async function getV1KnowledgeBaseFilesIdChunksCount(
  args: InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['knowledge-base'].files[':id'].chunks.count.$get(args, options),
  )
}

export async function postV1KnowledgeBaseFilesIdExtractChunks(
  args: InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['knowledge-base'].files[':id']['extract-chunks'].$post(args, options),
  )
}

export async function postV1KnowledgeBaseFilesIdStoreChunks(
  args: InferRequestType<
    (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['knowledge-base'].files[':id']['store-chunks'].$post(args, options),
  )
}

export async function getV1KnowledgeBaseFilesIdChunks(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files[':id'].chunks.$get(args, options))
}

export async function postV1KnowledgeBaseFilesSearch(
  args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['knowledge-base'].files.search.$post(args, options))
}

export async function getV1TemplatesId(
  args: InferRequestType<(typeof client.v1.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':id'].$get(args, options))
}

export async function postV1TemplatesId(
  args: InferRequestType<(typeof client.v1.templates)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':id'].$post(args, options))
}

export async function deleteV1TemplatesId(
  args: InferRequestType<(typeof client.v1.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':id'].$delete(args, options))
}

export async function getV1TemplatesCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.templates.categories.$get(undefined, options))
}

export async function getV1Templates(
  args: InferRequestType<typeof client.v1.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates.$get(args, options))
}

export async function postV1Templates(
  args: InferRequestType<typeof client.v1.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates.$post(args, options))
}

export async function getV1Projects(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$get(args, options))
}

export async function postV1Projects(
  args: InferRequestType<typeof client.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$post(args, options))
}

export async function postV1ProjectsId(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':id'].$post(args, options))
}

export async function deleteV1ProjectsId(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':id'].$delete(args, options))
}

export async function getV1ProjectMembers(
  args: InferRequestType<(typeof client.v1)['project-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['project-members'].$get(args, options))
}

export async function deleteV1ProjectMembersId(
  args: InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['project-members'][':id'].$delete(args, options))
}

export async function postV1Pieces(
  args: InferRequestType<typeof client.v1.pieces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pieces.$post(args, options))
}

export async function postV1GitRepos(
  args: InferRequestType<(typeof client.v1)['git-repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['git-repos'].$post(args, options))
}

export async function getV1EventDestinations(
  args: InferRequestType<(typeof client.v1)['event-destinations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['event-destinations'].$get(args, options))
}

export async function getV1ProjectRolesIdProjectMembers(
  args: InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['project-roles'][':id']['project-members'].$get(args, options),
  )
}

export async function postV1ProjectReleases(
  args: InferRequestType<(typeof client.v1)['project-releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['project-releases'].$post(args, options))
}

export async function getV1GlobalConnections(
  args: InferRequestType<(typeof client.v1)['global-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-connections'].$get(args, options))
}

export async function postV1GlobalConnections(
  args: InferRequestType<(typeof client.v1)['global-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-connections'].$post(args, options))
}

export async function postV1GlobalConnectionsId(
  args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-connections'][':id'].$post(args, options))
}

export async function deleteV1GlobalConnectionsId(
  args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-connections'][':id'].$delete(args, options))
}

export async function postV1EmbedSubdomainAllowedEmbedOrigins(
  args: InferRequestType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['embed-subdomain']['allowed-embed-origins'].$post(args, options),
  )
}

export async function getV1AgentsConversations(
  args: InferRequestType<typeof client.v1.agents.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations.$get(args, options))
}

export async function postV1AgentsConversations(
  args: InferRequestType<typeof client.v1.agents.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations.$post(args, options))
}

export async function getV1AgentsConversationsId(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations[':id'].$get(args, options))
}

export async function postV1AgentsConversationsId(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations[':id'].$post(args, options))
}

export async function deleteV1AgentsConversationsId(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations[':id'].$delete(args, options))
}

export async function getV1AgentsConversationsIdMessages(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations[':id'].messages.$get(args, options))
}

export async function postV1AgentsConversationsIdMessages(
  args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents.conversations[':id'].messages.$post(args, options))
}

export async function postV1AgentsToolApprovalsGateId(
  args: InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agents['tool-approvals'][':gateId'].$post(args, options))
}

export async function postV1PlatformConfigurations(
  args: InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['platform-configurations'].$post(args, options))
}

export async function getV1AiProvidersConfigs(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['ai-providers'].configs.$get(undefined, options))
}

export async function getV1AiProvidersConfigsIdModels(
  args: InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-providers'].configs[':id'].models.$get(args, options))
}

export async function getV1AiProvidersConfigsIdSuggestedModels(
  args: InferRequestType<
    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ai-providers'].configs[':id']['suggested-models'].$get(args, options),
  )
}

export async function getV1AiProvidersModelOptionsPlatform(
  args: InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['ai-providers']['model-options'].platform.$get(args, options),
  )
}

export async function postV1AiProviders(
  args: InferRequestType<(typeof client.v1)['ai-providers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-providers'].$post(args, options))
}

export async function postV1AiProvidersIdRecheck(
  args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-providers'][':id'].recheck.$post(args, options))
}

export async function postV1AiProvidersId(
  args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-providers'][':id'].$post(args, options))
}

export async function deleteV1AiProvidersId(
  args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-providers'][':id'].$delete(args, options))
}

export async function getV1PlatformModelTiersAdmin(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['platform-model-tiers'].admin.$get(undefined, options))
}

export async function postV1PlatformModelTiers(
  args: InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['platform-model-tiers'].$post(args, options))
}

export async function postV1PlatformModelTiersReorder(
  args: InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['platform-model-tiers'].reorder.$post(args, options))
}

export async function postV1PlatformModelTiersId(
  args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['platform-model-tiers'][':id'].$post(args, options))
}

export async function deleteV1PlatformModelTiersId(
  args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['platform-model-tiers'][':id'].$delete(args, options))
}

export async function getV1AiTools(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['ai-tools'].$get(undefined, options))
}

export async function postV1AiTools(
  args: InferRequestType<(typeof client.v1)['ai-tools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-tools'].$post(args, options))
}

export async function postV1AiToolsId(
  args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-tools'][':id'].$post(args, options))
}

export async function deleteV1AiToolsId(
  args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-tools'][':id'].$delete(args, options))
}

export async function getV1AiUsageOverview(
  args: InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-usage'].overview.$get(args, options))
}

export async function getV1AiUsageItems(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-usage'].items.$get(args, options))
}

export async function getV1AiUsageItemsDimensionId(
  args: InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-usage'].items[':dimension'][':id'].$get(args, options))
}
