import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEdgeConfig(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'].$get(args, options))
}

export async function postEdgeConfig(
  args: InferRequestType<(typeof client)['edge-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'].$post(args, options))
}

export async function getEdgeConfigEdgeConfigId(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].$get(args, options))
}

export async function putEdgeConfigEdgeConfigId(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].$put(args, options))
}

export async function deleteEdgeConfigEdgeConfigId(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].$delete(args, options))
}

export async function getEdgeConfigEdgeConfigIdItemEdgeConfigItemKey(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(args, options),
  )
}

export async function getEdgeConfigEdgeConfigIdItems(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].items.$get(args, options))
}

export async function patchEdgeConfigEdgeConfigIdItems(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].items.$patch(args, options))
}

export async function postEdgeConfigEdgeConfigIdToken(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].token.$post(args, options))
}

export async function getEdgeConfigEdgeConfigIdTokenToken(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['edge-config'][':edgeConfigId'].token[':token'].$get(args, options),
  )
}

export async function getEdgeConfigEdgeConfigIdTokens(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].tokens.$get(args, options))
}

export async function deleteEdgeConfigEdgeConfigIdTokens(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['edge-config'][':edgeConfigId'].tokens.$delete(args, options))
}

export async function postRegistration(
  args: InferRequestType<typeof client.registration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registration.$post(args, options))
}

export async function getRegistrationVerify(
  args: InferRequestType<typeof client.registration.verify.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registration.verify.$get(args, options))
}

export async function getV1DeploymentsDeploymentIdChecks(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deployments[':deploymentId'].checks.$get(args, options))
}

export async function postV1DeploymentsDeploymentIdChecks(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deployments[':deploymentId'].checks.$post(args, options))
}

export async function getV1DeploymentsDeploymentIdChecksCheckId(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, options),
  )
}

export async function patchV1DeploymentsDeploymentIdChecksCheckId(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.deployments[':deploymentId'].checks[':checkId'].$patch(args, options),
  )
}

export async function postV1DeploymentsDeploymentIdChecksCheckIdRerequest(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.deployments[':deploymentId'].checks[':checkId'].rerequest.$post(args, options),
  )
}

export async function patchV1DomainsRecordsRecordId(
  args: InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.records[':recordId'].$patch(args, options))
}

export async function getV1IntegrationsConfigurationId(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.configuration[':id'].$get(args, options))
}

export async function deleteV1IntegrationsConfigurationId(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.configuration[':id'].$delete(args, options))
}

export async function getV1IntegrationsConfigurations(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.configurations.$get(args, options))
}

export async function getV1IntegrationsGitNamespaces(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['git-namespaces'].$get(args, options))
}

export async function deleteV1IntegrationsLogDrainsId(
  args: InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['log-drains'][':id'].$delete(args, options))
}

export async function getV1IntegrationsSearchRepo(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['search-repo'].$get(args, options))
}

export async function getV1LogDrains(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['log-drains'].$get(args, options))
}

export async function postV1LogDrains(
  args: InferRequestType<(typeof client.v1)['log-drains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['log-drains'].$post(args, options))
}

export async function getV1LogDrainsId(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['log-drains'][':id'].$get(args, options))
}

export async function deleteV1LogDrainsId(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['log-drains'][':id'].$delete(args, options))
}

export async function getV1ProjectsIdOrNameEnvId(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, options))
}

export async function postV1Teams(
  args: InferRequestType<typeof client.v1.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams.$post(args, options))
}

export async function deleteV1TeamsTeamId(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].$delete(args, options))
}

export async function deleteV1TeamsTeamIdInvitesInviteId(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].invites[':inviteId'].$delete(args, options))
}

export async function postV1TeamsTeamIdMembers(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].members.$post(args, options))
}

export async function postV1TeamsTeamIdMembersTeamsJoin(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].members.teams.join.$post(args, options))
}

export async function deleteV1TeamsTeamIdMembersUid(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].members[':uid'].$delete(args, options))
}

export async function patchV1TeamsTeamIdMembersUid(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].members[':uid'].$patch(args, options))
}

export async function postV1TeamsTeamIdRequest(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].request.$post(args, options))
}

export async function getV1TeamsTeamIdRequestUserId(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId'].request[':userId'].$get(args, options))
}

export async function deleteV1User(
  args: InferRequestType<typeof client.v1.user.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.$delete(args, options))
}

export async function getV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$get(args, options))
}

export async function postV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$post(args, options))
}

export async function getV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$get(args, options))
}

export async function deleteV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$delete(args, options))
}

export async function postV10ProjectsIdOrNameEnv(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v10.projects[':idOrName'].env.$post(args, options))
}

export async function getV11DeploymentsDeploymentIdBuilds(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v11.deployments[':deploymentId'].builds.$get(args, options))
}

export async function patchV12DeploymentsIdCancel(
  args: InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v12.deployments[':id'].cancel.$patch(args, options))
}

export async function postV13Deployments(
  args: InferRequestType<typeof client.v13.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments.$post(args, options))
}

export async function getV13DeploymentsIdOrUrl(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments[':idOrUrl'].$get(args, options))
}

export async function deleteV13DeploymentsId(
  args: InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments[':id'].$delete(args, options))
}

export async function deleteV2AliasesAliasId(
  args: InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aliases[':aliasId'].$delete(args, options))
}

export async function getV2DeploymentsIdOrUrlEvents(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.deployments[':idOrUrl'].events.$get(args, options))
}

export async function getV2DeploymentsIdAliases(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.deployments[':id'].aliases.$get(args, options))
}

export async function postV2DeploymentsIdAliases(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.deployments[':id'].aliases.$post(args, options))
}

export async function postV2DomainsDomainRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain'].records.$post(args, options))
}

export async function deleteV2DomainsDomainRecordsRecordId(
  args: InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain'].records[':recordId'].$delete(args, options),
  )
}

export async function postV2Files(
  args: InferRequestType<typeof client.v2.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.files.$post(args, options))
}

export async function getV2IntegrationsLogDrains(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.integrations['log-drains'].$get(args, options))
}

export async function postV2IntegrationsLogDrains(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.integrations['log-drains'].$post(args, options))
}

export async function deleteV2SecretsIdOrName(
  args: InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.secrets[':idOrName'].$delete(args, options))
}

export async function postV2SecretsName(
  args: InferRequestType<(typeof client.v2.secrets)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.secrets[':name'].$post(args, options))
}

export async function patchV2SecretsName(
  args: InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.secrets[':name'].$patch(args, options))
}

export async function getV2Teams(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams.$get(args, options))
}

export async function getV2TeamsTeamId(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':teamId'].$get(args, options))
}

export async function patchV2TeamsTeamId(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':teamId'].$patch(args, options))
}

export async function getV2TeamsTeamIdMembers(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':teamId'].members.$get(args, options))
}

export async function getV2User(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.$get(undefined, options))
}

export async function getV3Events(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.events.$get(args, options))
}

export async function getV3Secrets(
  args: InferRequestType<typeof client.v3.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.secrets.$get(args, options))
}

export async function getV3SecretsIdOrName(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.secrets[':idOrName'].$get(args, options))
}

export async function postV3UserTokens(
  args: InferRequestType<typeof client.v3.user.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.user.tokens.$post(args, options))
}

export async function deleteV3UserTokensTokenId(
  args: InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.user.tokens[':tokenId'].$delete(args, options))
}

export async function getV4Aliases(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.aliases.$get(args, options))
}

export async function getV4AliasesIdOrAlias(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.aliases[':idOrAlias'].$get(args, options))
}

export async function postV4Domains(
  args: InferRequestType<typeof client.v4.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains.$post(args, options))
}

export async function postV4DomainsBuy(
  args: InferRequestType<typeof client.v4.domains.buy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains.buy.$post(args, options))
}

export async function getV4DomainsPrice(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains.price.$get(args, options))
}

export async function getV4DomainsStatus(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains.status.$get(args, options))
}

export async function getV4DomainsDomainRecords(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.domains[':domain'].records.$get(args, options))
}

export async function getV5Domains(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.domains.$get(args, options))
}

export async function getV5DomainsDomain(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.domains[':domain'].$get(args, options))
}

export async function getV5UserTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.v5.user.tokens.$get(undefined, options))
}

export async function getV5UserTokensTokenId(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.user.tokens[':tokenId'].$get(args, options))
}

export async function getV6Deployments(
  args: InferRequestType<typeof client.v6.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.deployments.$get(args, options))
}

export async function getV6DeploymentsIdFiles(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.deployments[':id'].files.$get(args, options))
}

export async function getV6DeploymentsIdFilesFileId(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.deployments[':id'].files[':fileId'].$get(args, options))
}

export async function deleteV6DomainsDomain(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.domains[':domain'].$delete(args, options))
}

export async function getV6DomainsDomainConfig(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.domains[':domain'].config.$get(args, options))
}

export async function putV7Certs(
  args: InferRequestType<typeof client.v7.certs.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.certs.$put(args, options))
}

export async function postV7Certs(
  args: InferRequestType<typeof client.v7.certs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.certs.$post(args, options))
}

export async function getV7CertsId(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.certs[':id'].$get(args, options))
}

export async function deleteV7CertsId(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.certs[':id'].$delete(args, options))
}

export async function postV8Artifacts(
  args: InferRequestType<typeof client.v8.artifacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts.$post(args, options))
}

export async function postV8ArtifactsEvents(
  args: InferRequestType<typeof client.v8.artifacts.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts.events.$post(args, options))
}

export async function getV8ArtifactsStatus(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts.status.$get(args, options))
}

export async function getV8ArtifactsHash(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts[':hash'].$get(args, options))
}

export async function putV8ArtifactsHash(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts[':hash'].$put(args, options))
}

export async function headV8ArtifactsHash(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts[':hash'].$head(args, options))
}

export async function getV9Projects(
  args: InferRequestType<typeof client.v9.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects.$get(args, options))
}

export async function postV9Projects(
  args: InferRequestType<typeof client.v9.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects.$post(args, options))
}

export async function getV9ProjectsIdOrName(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].$get(args, options))
}

export async function deleteV9ProjectsIdOrName(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].$delete(args, options))
}

export async function patchV9ProjectsIdOrName(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].$patch(args, options))
}

export async function getV9ProjectsIdOrNameDomains(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].domains.$get(args, options))
}

export async function postV9ProjectsIdOrNameDomains(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].domains.$post(args, options))
}

export async function getV9ProjectsIdOrNameDomainsDomain(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$get(args, options))
}

export async function deleteV9ProjectsIdOrNameDomainsDomain(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName'].domains[':domain'].$delete(args, options),
  )
}

export async function patchV9ProjectsIdOrNameDomainsDomain(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName'].domains[':domain'].$patch(args, options),
  )
}

export async function postV9ProjectsIdOrNameDomainsDomainVerify(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName'].domains[':domain'].verify.$post(args, options),
  )
}

export async function getV9ProjectsIdOrNameEnv(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].env.$get(args, options))
}

export async function deleteV9ProjectsIdOrNameEnvId(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].env[':id'].$delete(args, options))
}

export async function patchV9ProjectsIdOrNameEnvId(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].env[':id'].$patch(args, options))
}
