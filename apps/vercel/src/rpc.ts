import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AccessGroupsIdOrName(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'][':idOrName'].$get(args, options))
}

export async function postV1AccessGroupsIdOrName(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'][':idOrName'].$post(args, options))
}

export async function deleteV1AccessGroupsIdOrName(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'][':idOrName'].$delete(args, options))
}

export async function getV1AccessGroupsIdOrNameMembers(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'][':idOrName'].members.$get(args, options))
}

export async function getV1AccessGroups(
  args: InferRequestType<(typeof client.v1)['access-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'].$get(args, options))
}

export async function postV1AccessGroups(
  args: InferRequestType<(typeof client.v1)['access-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'].$post(args, options))
}

export async function getV1AccessGroupsIdOrNameProjects(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['access-groups'][':idOrName'].projects.$get(args, options))
}

export async function postV1AccessGroupsAccessGroupIdOrNameProjects(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['access-groups'][':accessGroupIdOrName'].projects.$post(args, options),
  )
}

export async function getV1AccessGroupsAccessGroupIdOrNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$get(args, options),
  )
}

export async function deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$patch(args, options),
  )
}

export async function postAiGatewayByokCredentials(
  args: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['byok-credentials'].$post(args, options))
}

export async function getAiGatewayByokCredentialsList(
  args: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['byok-credentials'].list.$get(args, options))
}

export async function getAiGatewayByokCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['byok-credentials'][':credentialId'].$get(args, options),
  )
}

export async function deleteAiGatewayByokCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['byok-credentials'][':credentialId'].$delete(args, options),
  )
}

export async function patchAiGatewayByokCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['byok-credentials'][':credentialId'].$patch(args, options),
  )
}

export async function getAiGatewayVirtualModelConfigs(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['virtual-model-configs'].$get(args, options))
}

export async function postAiGatewayVirtualModelConfigs(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['virtual-model-configs'].$post(args, options))
}

export async function deleteAiGatewayVirtualModelConfigs(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['virtual-model-configs'].$delete(args, options))
}

export async function patchAiGatewayVirtualModelConfigs(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['virtual-model-configs'].$patch(args, options))
}

export async function getAiGatewayVirtualModelConfigsList(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway']['virtual-model-configs'].list.$get(args, options))
}

export async function getAiGatewayVirtualModelConfigsVmcSlug(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$get(args, options),
  )
}

export async function deleteAiGatewayVirtualModelConfigsVmcSlug(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$delete(args, options),
  )
}

export async function patchAiGatewayVirtualModelConfigsVmcSlug(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$patch(args, options),
  )
}

export async function getV1AiGatewayRouters(
  args: InferRequestType<(typeof client.v1)['ai-gateway']['routers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['ai-gateway'].routers.$get(args, options))
}

export async function getAiGatewayRules(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].rules.$get(args, options))
}

export async function postAiGatewayRules(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].rules.$post(args, options))
}

export async function deleteAiGatewayRules(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].rules.$delete(args, options))
}

export async function patchAiGatewayRules(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].rules.$patch(args, options))
}

export async function getAiGatewayBudgetsList(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.list.$get(args, options))
}

export async function putAiGatewayBudgets(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.$put(args, options))
}

export async function deleteAiGatewayBudgets(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.$delete(args, options))
}

export async function getAiGatewayBudgetsDefaultsList(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.defaults.list.$get(args, options))
}

export async function putAiGatewayBudgetsDefaults(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.defaults.$put(args, options))
}

export async function deleteAiGatewayBudgetsDefaults(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ai-gateway'].budgets.defaults.$delete(args, options))
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

export async function postV8Artifacts(
  args: InferRequestType<typeof client.v8.artifacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts.$post(args, options))
}

export async function deleteV8Artifacts(
  args: InferRequestType<typeof client.v8.artifacts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.artifacts.$delete(args, options))
}

export async function getV1BillingCharges(
  args: InferRequestType<typeof client.v1.billing.charges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.charges.$get(args, options))
}

export async function postV1BillingBuy(
  args: InferRequestType<typeof client.v1.billing.buy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.buy.$post(args, options))
}

export async function getV1BulkRedirects(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].$get(args, options))
}

export async function putV1BulkRedirects(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].$put(args, options))
}

export async function deleteV1BulkRedirects(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].$delete(args, options))
}

export async function patchV1BulkRedirects(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].$patch(args, options))
}

export async function postV1BulkRedirectsRestore(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].restore.$post(args, options))
}

export async function getV1BulkRedirectsVersions(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].versions.$get(args, options))
}

export async function postV1BulkRedirectsVersions(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bulk-redirects'].versions.$post(args, options))
}

export async function getV2ProjectsProjectIdOrNameChecks(
  args: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectIdOrName'].checks.$get(args, options))
}

export async function postV2ProjectsProjectIdOrNameChecks(
  args: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectIdOrName'].checks.$post(args, options))
}

export async function getV2ProjectsProjectIdOrNameChecksCheckId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectIdOrName'].checks[':checkId'].$get(args, options),
  )
}

export async function deleteV2ProjectsProjectIdOrNameChecksCheckId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectIdOrName'].checks[':checkId'].$delete(args, options),
  )
}

export async function patchV2ProjectsProjectIdOrNameChecksCheckId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectIdOrName'].checks[':checkId'].$patch(args, options),
  )
}

export async function getV2ProjectsProjectIdOrNameChecksCheckIdRuns(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectIdOrName'].checks[':checkId'].runs.$get(args, options),
  )
}

export async function getV2DeploymentsDeploymentIdCheckRuns(
  args: InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.deployments[':deploymentId']['check-runs'].$get(args, options),
  )
}

export async function postV2DeploymentsDeploymentIdCheckRuns(
  args: InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.deployments[':deploymentId']['check-runs'].$post(args, options),
  )
}

export async function getV2DeploymentsDeploymentIdCheckRunsCheckRunId(
  args: InferRequestType<
    (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.deployments[':deploymentId']['check-runs'][':checkRunId'].$get(args, options),
  )
}

export async function patchV2DeploymentsDeploymentIdCheckRunsCheckRunId(
  args: InferRequestType<
    (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.deployments[':deploymentId']['check-runs'][':checkRunId'].$patch(args, options),
  )
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

export async function getV1ConnectNetworks(
  args: InferRequestType<typeof client.v1.connect.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.networks.$get(args, options))
}

export async function postV1ConnectNetworks(
  args: InferRequestType<typeof client.v1.connect.networks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.networks.$post(args, options))
}

export async function getV1ConnectNetworksNetworkId(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.networks[':networkId'].$get(args, options))
}

export async function deleteV1ConnectNetworksNetworkId(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.networks[':networkId'].$delete(args, options))
}

export async function patchV1ConnectNetworksNetworkId(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.networks[':networkId'].$patch(args, options))
}

export async function getV1NetworkingPrivatelinkEndpoints(
  args: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.networking.privatelink.endpoints.$get(args, options))
}

export async function postV1NetworkingPrivatelinkEndpoints(
  args: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.networking.privatelink.endpoints.$post(args, options))
}

export async function getV1NetworkingPrivatelinkEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.networking.privatelink.endpoints[':endpointId'].$get(args, options),
  )
}

export async function deleteV1NetworkingPrivatelinkEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.networking.privatelink.endpoints[':endpointId'].$delete(args, options),
  )
}

export async function patchV1NetworkingPrivatelinkEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.networking.privatelink.endpoints[':endpointId'].$patch(args, options),
  )
}

export async function getV2ConnectConnectors(
  args: InferRequestType<typeof client.v2.connect.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.connect.connectors.$get(args, options))
}

export async function getV1ConnectConnectorsConnector(
  args: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.connectors[':connector'].$get(args, options))
}

export async function deleteV1ConnectConnectorsConnector(
  args: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.connectors[':connector'].$delete(args, options))
}

export async function postV1ConnectConnectors(
  args: InferRequestType<typeof client.v1.connect.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.connectors.$post(args, options))
}

export async function patchV2ConnectConnectorsConnector(
  args: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.connect.connectors[':connector'].$patch(args, options))
}

export async function patchV1ConnectConnectorsConnectorTriggerDestinations(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['trigger-destinations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector']['trigger-destinations'].$patch(args, options),
  )
}

export async function postV1ConnectConnectorsConnectorManagedEject(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['managed']['eject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector'].managed.eject.$post(args, options),
  )
}

export async function getV2ConnectConnectorsConnectorProjects(
  args: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.connect.connectors[':connector'].projects.$get(args, options),
  )
}

export async function getV1ConnectConnectorsConnectorProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector'].projects[':projectId'].$get(args, options),
  )
}

export async function postV1ConnectConnectorsConnectorProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector'].projects[':projectId'].$post(args, options),
  )
}

export async function deleteV1ConnectConnectorsConnectorProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector'].projects[':projectId'].$delete(args, options),
  )
}

export async function deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironment(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['environments'][':environment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connect.connectors[':connector'].projects[':projectId'].environments[
      ':environment'
    ].$delete(args, options),
  )
}

export async function getV2ConnectProjectsProjectIdConnectors(
  args: InferRequestType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.connect.projects[':projectId'].connectors.$get(args, options),
  )
}

export async function postV1ConnectTokenConnector(
  args: InferRequestType<(typeof client.v1.connect.token)[':connector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.token[':connector'].$post(args, options))
}

export async function postV1ConnectAuthorizeConnector(
  args: InferRequestType<(typeof client.v1.connect.authorize)[':connector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connect.authorize[':connector'].$post(args, options))
}

export async function getV1ProjectsIdOrNameDaemons(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].daemons.$get(args, options))
}

export async function putV1ProjectsIdOrNameDaemonsDaemonNameInstances(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName'].daemons[':daemonName'].instances.$put(args, options),
  )
}

export async function postV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestart(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances'][':instanceId']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName'].daemons[':daemonName'].instances[':instanceId'].restart.$post(
      args,
      options,
    ),
  )
}

export async function getV3DeploymentsIdOrUrlEvents(
  args: InferRequestType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.deployments[':idOrUrl'].events.$get(args, options))
}

export async function patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsAction(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['integrations'][':integrationConfigurationId']['resources'][':resourceId']['actions'][':action']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.deployments[':deploymentId'].integrations[':integrationConfigurationId'].resources[
      ':resourceId'
    ].actions[':action'].$patch(args, options),
  )
}

export async function getV13DeploymentsIdOrUrl(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments[':idOrUrl'].$get(args, options))
}

export async function postV13Deployments(
  args: InferRequestType<typeof client.v13.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments.$post(args, options))
}

export async function patchV12DeploymentsIdCancel(
  args: InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v12.deployments[':id'].cancel.$patch(args, options))
}

export async function getV5DomainsDomainRecords(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.domains[':domain'].records.$get(args, options))
}

export async function postV2DomainsDomainRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain'].records.$post(args, options))
}

export async function patchV1DomainsRecordsRecordId(
  args: InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.records[':recordId'].$patch(args, options))
}

export async function putDomainsDomainRecords(
  args: InferRequestType<(typeof client.domains)[':domain']['records']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain'].records.$put(args, options))
}

export async function getDomainsRecordsRecordId(
  args: InferRequestType<(typeof client.domains.records)[':recordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.records[':recordId'].$get(args, options))
}

export async function deleteV2DomainsDomainRecordsRecordId(
  args: InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain'].records[':recordId'].$delete(args, options),
  )
}

export async function postV1RegistrarDomainsSearch(
  args: InferRequestType<typeof client.v1.registrar.domains.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains.search.$post(args, options))
}

export async function getV1RegistrarTldsSupported(
  args: InferRequestType<typeof client.v1.registrar.tlds.supported.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.tlds.supported.$get(args, options))
}

export async function getV1RegistrarTldsTld(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.tlds[':tld'].$get(args, options))
}

export async function getV1RegistrarTldsTldPrice(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.tlds[':tld'].price.$get(args, options))
}

export async function getV1RegistrarDomainsDomainAvailability(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain'].availability.$get(args, options),
  )
}

export async function getV1RegistrarDomainsDomainPrice(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains[':domain'].price.$get(args, options))
}

export async function postV1RegistrarDomainsPrice(
  args: InferRequestType<typeof client.v1.registrar.domains.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains.price.$post(args, options))
}

export async function postV1RegistrarDomainsAvailability(
  args: InferRequestType<typeof client.v1.registrar.domains.availability.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains.availability.$post(args, options))
}

export async function getV1RegistrarDomainsDomainContactInfoSchema(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain']['contact-info'].schema.$get(args, options),
  )
}

export async function getV1RegistrarDomainsDomainAuthCode(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain']['auth-code'].$get(args, options),
  )
}

export async function postV1RegistrarDomainsDomainBuy(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['buy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains[':domain'].buy.$post(args, options))
}

export async function postV1RegistrarDomainsBuy(
  args: InferRequestType<typeof client.v1.registrar.domains.buy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains.buy.$post(args, options))
}

export async function getV1RegistrarDomainsDomainTransfer(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains[':domain'].transfer.$get(args, options))
}

export async function postV1RegistrarDomainsDomainTransfer(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains[':domain'].transfer.$post(args, options))
}

export async function postV1RegistrarDomainsDomainRenew(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['renew']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.domains[':domain'].renew.$post(args, options))
}

export async function patchV1RegistrarDomainsDomainAutoRenew(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auto-renew']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain']['auto-renew'].$patch(args, options),
  )
}

export async function patchV1RegistrarDomainsDomainNameservers(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['nameservers']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain'].nameservers.$patch(args, options),
  )
}

export async function getV1RegistrarDomainsDomainContactVerification(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registrar.domains[':domain']['contact-verification'].$get(args, options),
  )
}

export async function getV1RegistrarOrdersOrderId(
  args: InferRequestType<(typeof client.v1.registrar.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrar.orders[':orderId'].$get(args, options))
}

export async function getV6DomainsDomainConfig(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.domains[':domain'].config.$get(args, options))
}

export async function getV9DomainsDomainVerification(
  args: InferRequestType<(typeof client.v9.domains)[':domain']['verification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.domains[':domain'].verification.$get(args, options))
}

export async function postV9DomainsDomainClaim(
  args: InferRequestType<(typeof client.v9.domains)[':domain']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.domains[':domain'].claim.$post(args, options))
}

export async function getV1DomainsDomainProjectDomains(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains[':domain']['project-domains'].$get(args, options))
}

export async function getV5DomainsDomain(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.domains[':domain'].$get(args, options))
}

export async function getV5Domains(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.domains.$get(args, options))
}

export async function postV7Domains(
  args: InferRequestType<typeof client.v7.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.domains.$post(args, options))
}

export async function patchV3DomainsDomain(
  args: InferRequestType<(typeof client.v3.domains)[':domain']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.domains[':domain'].$patch(args, options))
}

export async function deleteV6DomainsDomain(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.domains[':domain'].$delete(args, options))
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

export async function getV1Drains(
  args: InferRequestType<typeof client.v1.drains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains.$get(args, options))
}

export async function postV1Drains(
  args: InferRequestType<typeof client.v1.drains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains.$post(args, options))
}

export async function getV1DrainsId(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains[':id'].$get(args, options))
}

export async function deleteV1DrainsId(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains[':id'].$delete(args, options))
}

export async function patchV1DrainsId(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains[':id'].$patch(args, options))
}

export async function postV1DrainsTest(
  args: InferRequestType<typeof client.v1.drains.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drains.test.$post(args, options))
}

export async function getV1Drives(
  args: InferRequestType<typeof client.v1.drives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drives.$get(args, options))
}

export async function getV1DrivesNameOrId(
  args: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drives[':nameOrId'].$get(args, options))
}

export async function deleteV1DrivesNameOrId(
  args: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drives[':nameOrId'].$delete(args, options))
}

export async function postV1DrivesName(
  args: InferRequestType<(typeof client.v1.drives)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drives[':name'].$post(args, options))
}

export async function postV1DrivesNameFork(
  args: InferRequestType<(typeof client.v1.drives)[':name']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drives[':name'].fork.$post(args, options))
}

export async function postV1EdgeCacheInvalidateByTags(
  args: InferRequestType<(typeof client.v1)['edge-cache']['invalidate-by-tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['edge-cache']['invalidate-by-tags'].$post(args, options))
}

export async function postV1EdgeCacheDangerouslyDeleteByTags(
  args: InferRequestType<(typeof client.v1)['edge-cache']['dangerously-delete-by-tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['edge-cache']['dangerously-delete-by-tags'].$post(args, options),
  )
}

export async function postV1EdgeCacheInvalidateBySrcImages(
  args: InferRequestType<(typeof client.v1)['edge-cache']['invalidate-by-src-images']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['edge-cache']['invalidate-by-src-images'].$post(args, options),
  )
}

export async function postV1EdgeCacheDangerouslyDeleteBySrcImages(
  args: InferRequestType<
    (typeof client.v1)['edge-cache']['dangerously-delete-by-src-images']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['edge-cache']['dangerously-delete-by-src-images'].$post(args, options),
  )
}

export async function getV1GlobalConfig(
  args: InferRequestType<(typeof client.v1)['global-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'].$get(args, options))
}

export async function postV1GlobalConfig(
  args: InferRequestType<(typeof client.v1)['global-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'].$post(args, options))
}

export async function getV1GlobalConfigEdgeConfigId(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].$get(args, options))
}

export async function putV1GlobalConfigEdgeConfigId(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].$put(args, options))
}

export async function deleteV1GlobalConfigEdgeConfigId(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].$delete(args, options))
}

export async function getV1GlobalConfigEdgeConfigIdItems(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].items.$get(args, options))
}

export async function patchV1GlobalConfigEdgeConfigIdItems(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].items.$patch(args, options),
  )
}

export async function getV1GlobalConfigEdgeConfigIdSchema(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].schema.$get(args, options))
}

export async function postV1GlobalConfigEdgeConfigIdSchema(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].schema.$post(args, options),
  )
}

export async function deleteV1GlobalConfigEdgeConfigIdSchema(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].schema.$delete(args, options),
  )
}

export async function getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKey(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(args, options),
  )
}

export async function getV1GlobalConfigEdgeConfigIdTokens(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].tokens.$get(args, options))
}

export async function deleteV1GlobalConfigEdgeConfigIdTokens(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].tokens.$delete(args, options),
  )
}

export async function getV1GlobalConfigEdgeConfigIdTokenToken(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].token[':token'].$get(args, options),
  )
}

export async function postV1GlobalConfigEdgeConfigIdToken(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['global-config'][':edgeConfigId'].token.$post(args, options))
}

export async function getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionId(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].backups[':edgeConfigBackupVersionId'].$get(
      args,
      options,
    ),
  )
}

export async function postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestore(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].backups[':edgeConfigBackupVersionId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getV1GlobalConfigEdgeConfigIdBackups(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['global-config'][':edgeConfigId'].backups.$get(args, options),
  )
}

export async function getV1Env(
  args: InferRequestType<typeof client.v1.env.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env.$get(args, options))
}

export async function postV1Env(
  args: InferRequestType<typeof client.v1.env.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env.$post(args, options))
}

export async function deleteV1Env(
  args: InferRequestType<typeof client.v1.env.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env.$delete(args, options))
}

export async function patchV1Env(
  args: InferRequestType<typeof client.v1.env.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env.$patch(args, options))
}

export async function getV1EnvId(
  args: InferRequestType<(typeof client.v1.env)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env[':id'].$get(args, options))
}

export async function patchV1EnvIdUnlinkProjectId(
  args: InferRequestType<(typeof client.v1.env)[':id']['unlink'][':projectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.env[':id'].unlink[':projectId'].$patch(args, options))
}

export async function getV3Events(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.events.$get(args, options))
}

export async function getV1EventsTypes(
  args: InferRequestType<typeof client.v1.events.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.types.$get(args, options))
}

export async function postV1ProjectsProjectIdOrNameFeatureFlagsOverridesSign(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['overrides']['sign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].overrides.sign.$post(args, options),
  )
}

export async function getV2ProjectsProjectIdOrNameFeatureFlagsFlags(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectIdOrName']['feature-flags'].flags.$get(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsFlags(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags.$get(args, options),
  )
}

export async function putV1ProjectsProjectIdOrNameFeatureFlagsFlags(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags.$put(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersions(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].versions.$get(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsSettings(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].settings.$get(args, options),
  )
}

export async function patchV1ProjectsProjectIdOrNameFeatureFlagsSettings(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].settings.$patch(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsLabels(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].labels.$get(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsLabelsCounts(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].labels.counts.$get(args, options),
  )
}

export async function postV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookup(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['lookup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].labels.lookup.$post(args, options),
  )
}

export async function getV1TeamsTeamIdFeatureFlagsSettings(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.teams[':teamId']['feature-flags'].settings.$get(args, options),
  )
}

export async function getV2TeamsTeamIdFeatureFlagsFlags(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':teamId']['feature-flags'].flags.$get(args, options))
}

export async function getV1TeamsTeamIdFeatureFlagsFlags(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId']['feature-flags'].flags.$get(args, options))
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsSegments(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].segments.$get(args, options),
  )
}

export async function putV1ProjectsProjectIdOrNameFeatureFlagsSegments(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].segments.$put(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].segments[':segmentIdOrSlug'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].segments[':segmentIdOrSlug'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].segments[':segmentIdOrSlug'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1DeploymentsDeploymentIdFeatureFlags(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.deployments[':deploymentId']['feature-flags'].$get(args, options),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsSdkKeys(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'].$get(args, options),
  )
}

export async function putV1ProjectsProjectIdOrNameFeatureFlagsSdkKeys(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'].$put(args, options),
  )
}

export async function deleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectIdOrNameFeatureFlagsConnections(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].connections.$get(args, options),
  )
}

export async function putV1ProjectsProjectIdOrNameFeatureFlagsConnections(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].connections.$put(args, options),
  )
}

export async function deleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections'][':consumerProjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectIdOrName']['feature-flags'].connections[
      ':consumerProjectId'
    ].$delete(args, options),
  )
}

export async function getV1IntegrationsGitNamespaces(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['git-namespaces'].$get(args, options))
}

export async function getV1IntegrationsSearchRepo(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['search-repo'].$get(args, options))
}

export async function getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans(
  args: InferRequestType<
    (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations.integration[':integrationIdOrSlug'].products[
      ':productIdOrSlug'
    ].plans.$get(args, options),
  )
}

export async function postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnections(
  args: InferRequestType<
    (typeof client.v1.integrations.installations)[':integrationConfigurationId']['resources'][':resourceId']['connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations.installations[':integrationConfigurationId'].resources[
      ':resourceId'
    ].connections.$post(args, options),
  )
}

export async function patchV1InstallationsIntegrationConfigurationId(
  args: InferRequestType<(typeof client.v1.installations)[':integrationConfigurationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].$patch(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdAccount(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].account.$get(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdMemberMemberId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].member[':memberId'].$get(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdCredentialsRotate(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].credentials.rotate.$post(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdCredentialsRevoke(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].credentials.revoke.$post(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdEvents(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].events.$post(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdResources(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources.$get(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$get(
      args,
      options,
    ),
  )
}

export async function putV1InstallationsIntegrationConfigurationIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1InstallationsIntegrationConfigurationIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1InstallationsIntegrationConfigurationIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdBilling(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.$post(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdBillingInvoices(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.invoices.$post(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdBillingFinalize(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.finalize.$post(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.invoices[':invoiceId'].$get(
      args,
      options,
    ),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActions(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.invoices[
      ':invoiceId'
    ].actions.$post(args, options),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdBillingBalance(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['balance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].billing.balance.$post(args, options),
  )
}

export async function putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecrets(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['products'][':integrationProductIdOrSlug']['resources'][':resourceId']['secrets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].products[
      ':integrationProductIdOrSlug'
    ].resources[':resourceId'].secrets.$put(args, options),
  )
}

export async function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecrets(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['secrets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].secrets.$put(
      args,
      options,
    ),
  )
}

export async function getV1IntegrationsConfigurations(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.configurations.$get(args, options))
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

export async function getV1IntegrationsConfigurationIdProducts(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations.configuration[':id'].products.$get(args, options),
  )
}

export async function postV1IntegrationsSsoToken(
  args: InferRequestType<typeof client.v1.integrations.sso.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations.sso.token.$post(args, options))
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

export async function deleteV1IntegrationsLogDrainsId(
  args: InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.integrations['log-drains'][':id'].$delete(args, options))
}

export async function postApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$post(args, options))
}

export async function patchApiKeysApiKeyIDQuota(
  args: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['quota']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':apiKeyID'].quota.$patch(args, options))
}

export async function postV1KmsIssuersIssuerIdSignMessage(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].sign.message.$post(args, options))
}

export async function postV1KmsIssuersIssuerIdSignToken(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].sign.token.$post(args, options))
}

export async function getV1KmsIssuers(
  args: InferRequestType<typeof client.v1.kms.issuers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers.$get(args, options))
}

export async function postV1KmsIssuers(
  args: InferRequestType<typeof client.v1.kms.issuers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers.$post(args, options))
}

export async function postV1KmsIssuersIssuerIdKeys(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].keys.$post(args, options))
}

export async function postV1KmsIssuersIssuerIdKeysKeyIdActivate(
  args: InferRequestType<
    (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.kms.issuers[':issuerId'].keys[':keyId'].activate.$post(args, options),
  )
}

export async function postV1KmsIssuersIssuerIdKeysKeyIdRevoke(
  args: InferRequestType<
    (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.kms.issuers[':issuerId'].keys[':keyId'].revoke.$post(args, options),
  )
}

export async function getV1KmsIssuersIssuerId(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].$get(args, options))
}

export async function deleteV1KmsIssuersIssuerId(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].$delete(args, options))
}

export async function patchV1KmsIssuersIssuerId(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].$patch(args, options))
}

export async function postV1KmsIssuersIssuerIdPolicies(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.kms.issuers[':issuerId'].policies.$post(args, options))
}

export async function deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKey(
  args: InferRequestType<
    (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.kms.issuers[':issuerId'].policies[':kind'][':policyKey'].$delete(args, options),
  )
}

export async function patchV1KmsIssuersIssuerIdPoliciesKindPolicyKey(
  args: InferRequestType<
    (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.kms.issuers[':issuerId'].policies[':kind'][':policyKey'].$patch(args, options),
  )
}

export async function getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogs(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].deployments[':deploymentId']['runtime-logs'].$get(
      args,
      options,
    ),
  )
}

export async function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItems(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[
      ':resourceId'
    ].experimentation.items.$post(args, options),
  )
}

export async function deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[
      ':resourceId'
    ].experimentation.items[':itemId'].$delete(args, options),
  )
}

export async function patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemId(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[
      ':resourceId'
    ].experimentation.items[':itemId'].$patch(args, options),
  )
}

export async function getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].experimentation[
      'global-config'
    ].$get(args, options),
  )
}

export async function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].experimentation[
      'global-config'
    ].$put(args, options),
  )
}

export async function headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].experimentation[
      'global-config'
    ].$head(args, options),
  )
}

export async function getV1MicrofrontendsGroups(
  args: InferRequestType<typeof client.v1.microfrontends.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.microfrontends.groups.$get(args, options))
}

export async function getV1MicrofrontendsGroupsGroupIdProjects(
  args: InferRequestType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.microfrontends.groups[':groupId'].projects.$get(args, options),
  )
}

export async function getV1MicrofrontendsDeploymentIdConfig(
  args: InferRequestType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.microfrontends[':deploymentId'].config.$get(args, options))
}

export async function getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfig(
  args: InferRequestType<
    (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.microfrontends.projects[':projectIdOrName']['production-mfe-config'].$get(
      args,
      options,
    ),
  )
}

export async function postV1MicrofrontendsGroup(
  args: InferRequestType<typeof client.v1.microfrontends.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.microfrontends.group.$post(args, options))
}

export async function getV1ObservabilityManageConfigurationProjects(
  args: InferRequestType<typeof client.v1.observability.manage.configuration.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.manage.configuration.projects.$get(args, options),
  )
}

export async function putV1ObservabilityManageConfigurationProjectsProjectIdOrName(
  args: InferRequestType<
    (typeof client.v1.observability.manage.configuration.projects)[':projectIdOrName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.observability.manage.configuration.projects[':projectIdOrName'].$put(args, options),
  )
}

export async function postV2ObservabilityQuery(
  args: InferRequestType<typeof client.v2.observability.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.observability.query.$post(args, options))
}

export async function getV2ObservabilitySchema(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.observability.schema.$get(undefined, options))
}

export async function getV2ObservabilitySchemaMetricId(
  args: InferRequestType<(typeof client.v2.observability.schema)[':metricId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.observability.schema[':metricId'].$get(args, options))
}

export async function getV1Organizations(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.organizations.$get(undefined, options))
}

export async function postV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$post(args, options))
}

export async function getV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].$get(args, options))
}

export async function patchV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].$patch(args, options))
}

export async function getV1OrganizationsOrganizationIdTeams(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].teams.$get(args, options))
}

export async function postV1OrganizationsOrganizationIdTeams(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].teams.$post(args, options))
}

export async function deleteV1OrganizationsOrganizationIdTeamsTargetTeamId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].teams[':targetTeamId'].$delete(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdTeamsTargetTeamIdDsync(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['dsync']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].teams[':targetTeamId'].dsync.$put(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdDsyncGroups(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].dsync.groups.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdDsyncGroupsGroupId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdDsyncGroupsGroupId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdDsyncGroupsGroupId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$delete(args, options),
  )
}

export async function getV1ProjectsIdOrNameMembers(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].members.$get(args, options))
}

export async function postV1ProjectsIdOrNameMembers(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].members.$post(args, options))
}

export async function deleteV1ProjectsIdOrNameMembersUid(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members'][':uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].members[':uid'].$delete(args, options))
}

export async function getV1ProjectsProjectIdRoutes(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.$get(args, options))
}

export async function putV1ProjectsProjectIdRoutes(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.$put(args, options))
}

export async function postV1ProjectsProjectIdRoutes(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.$post(args, options))
}

export async function deleteV1ProjectsProjectIdRoutes(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.$delete(args, options))
}

export async function patchV1ProjectsProjectIdRoutesRouteId(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes'][':routeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].routes[':routeId'].$patch(args, options),
  )
}

export async function postV1ProjectsProjectIdRoutesGenerate(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.generate.$post(args, options))
}

export async function getV1ProjectsProjectIdRoutesVersions(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.versions.$get(args, options))
}

export async function postV1ProjectsProjectIdRoutesVersions(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].routes.versions.$post(args, options))
}

export async function getV10Projects(
  args: InferRequestType<typeof client.v10.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v10.projects.$get(args, options))
}

export async function getV1ProjectsTraces(
  args: InferRequestType<typeof client.v1.projects.traces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.traces.$get(args, options))
}

export async function postV11Projects(
  args: InferRequestType<typeof client.v11.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v11.projects.$post(args, options))
}

export async function postV1ProjectsIdOrNameToken(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].token.$post(args, options))
}

export async function postV1ProjectsTracesSession(
  args: InferRequestType<typeof client.v1.projects.traces.session.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.traces.session.$post(args, options))
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

export async function postV1ProjectsIdOrNameAvatar(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].avatar.$post(args, options))
}

export async function deleteV1ProjectsIdOrNameAvatar(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].avatar.$delete(args, options))
}

export async function patchV1ProjectsIdOrNameSharedConnectLinks(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['shared-connect-links']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['shared-connect-links'].$patch(args, options),
  )
}

export async function getV9ProjectsIdOrNameCustomEnvironments(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName']['custom-environments'].$get(args, options),
  )
}

export async function postV9ProjectsIdOrNameCustomEnvironments(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName']['custom-environments'].$post(args, options),
  )
}

export async function getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV9ProjectsIdOrNameDomains(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v9.projects[':idOrName'].domains.$get(args, options))
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

export async function postV10ProjectsIdOrNameDomains(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v10.projects[':idOrName'].domains.$post(args, options))
}

export async function postV1ProjectsIdOrNameDomainsDomainMove(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['domains'][':domain']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName'].domains[':domain'].move.$post(args, options),
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

export async function getV10ProjectsIdOrNameEnv(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v10.projects[':idOrName'].env.$get(args, options))
}

export async function postV10ProjectsIdOrNameEnv(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v10.projects[':idOrName'].env.$post(args, options))
}

export async function getV1ProjectsIdOrNameEnvId(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, options))
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

export async function deleteV1ProjectsIdOrNameEnv(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName'].env.$delete(args, options))
}

export async function getV1ProjectsIdOrNameRollingReleaseBilling(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].billing.$get(args, options),
  )
}

export async function getV1ProjectsIdOrNameRollingReleaseConfig(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].config.$get(args, options),
  )
}

export async function deleteV1ProjectsIdOrNameRollingReleaseConfig(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].config.$delete(args, options),
  )
}

export async function patchV1ProjectsIdOrNameRollingReleaseConfig(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].config.$patch(args, options),
  )
}

export async function getV1ProjectsIdOrNameRollingRelease(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':idOrName']['rolling-release'].$get(args, options))
}

export async function postV1ProjectsIdOrNameRollingReleaseApproveStage(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['approve-stage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release']['approve-stage'].$post(args, options),
  )
}

export async function postV1ProjectsIdOrNameRollingReleaseStart(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].start.$post(args, options),
  )
}

export async function postV1ProjectsIdOrNameRollingReleaseComplete(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['rolling-release'].complete.$post(args, options),
  )
}

export async function postProjectsIdOrNameTransferRequest(
  args: InferRequestType<(typeof client.projects)[':idOrName']['transfer-request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':idOrName']['transfer-request'].$post(args, options))
}

export async function putProjectsTransferRequestCode(
  args: InferRequestType<(typeof client.projects)['transfer-request'][':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects['transfer-request'][':code'].$put(args, options))
}

export async function patchV1ProjectsIdOrNameProtectionBypass(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['protection-bypass']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':idOrName']['protection-bypass'].$patch(args, options),
  )
}

export async function postV1ProjectsProjectIdRollbackDeploymentId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].rollback[':deploymentId'].$post(args, options),
  )
}

export async function patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['update-description']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].rollback[':deploymentId']['update-description'].$patch(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectIdMicrofrontends(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['microfrontends']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].microfrontends.$patch(args, options))
}

export async function postV10ProjectsProjectIdPromoteDeploymentId(
  args: InferRequestType<
    (typeof client.v10.projects)[':projectId']['promote'][':deploymentId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v10.projects[':projectId'].promote[':deploymentId'].$post(args, options),
  )
}

export async function getV1ProjectsProjectIdPromoteAliases(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].promote.aliases.$get(args, options))
}

export async function postV1ProjectsProjectIdPause(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].pause.$post(args, options))
}

export async function postV1ProjectsProjectIdUnpause(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['unpause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].unpause.$post(args, options))
}

export async function getV2Sandboxes(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.$get(args, options))
}

export async function postV2Sandboxes(
  args: InferRequestType<typeof client.v2.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.$post(args, options))
}

export async function getV2SandboxesDrives(
  args: InferRequestType<typeof client.v2.sandboxes.drives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.drives.$get(args, options))
}

export async function getV2SandboxesDrivesNameOrId(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.drives[':nameOrId'].$get(args, options))
}

export async function deleteV2SandboxesDrivesNameOrId(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.drives[':nameOrId'].$delete(args, options))
}

export async function postV2SandboxesDrivesName(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.drives[':name'].$post(args, options))
}

export async function postV2SandboxesDrivesNameFork(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.drives[':name'].fork.$post(args, options))
}

export async function getV2SandboxesSnapshots(
  args: InferRequestType<typeof client.v2.sandboxes.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.snapshots.$get(args, options))
}

export async function getV2SandboxesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.snapshots[':snapshotId'].$get(args, options))
}

export async function deleteV2SandboxesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.snapshots[':snapshotId'].$delete(args, options))
}

export async function getV2SandboxesSessions(
  args: InferRequestType<typeof client.v2.sandboxes.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.sessions.$get(args, options))
}

export async function getV2SandboxesSessionsSessionId(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.sessions[':sessionId'].$get(args, options))
}

export async function getV2SandboxesName(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':name'].$get(args, options))
}

export async function deleteV2SandboxesName(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':name'].$delete(args, options))
}

export async function patchV2SandboxesName(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':name'].$patch(args, options))
}

export async function getV2SandboxesSessionsSessionIdCmd(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.sessions[':sessionId'].cmd.$get(args, options))
}

export async function postV2SandboxesSessionsSessionIdCmd(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.sessions[':sessionId'].cmd.$post(args, options))
}

export async function getV2SandboxesSessionsSessionIdCmdCmdId(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].$get(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdCmdCmdIdKill(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['kill']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].kill.$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdCmdCmdIdStdin(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['stdin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].stdin.$post(args, options),
  )
}

export async function getV2SandboxesSessionsSessionIdCmdCmdIdLogs(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].logs.$get(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdStop(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes.sessions[':sessionId'].stop.$post(args, options))
}

export async function postV2SandboxesSessionsSessionIdExtendTimeout(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['extend-timeout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId']['extend-timeout'].$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdNetworkPolicy(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['network-policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId']['network-policy'].$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdFsRead(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].fs.read.$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdFsMkdir(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['mkdir']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].fs.mkdir.$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdFsWrite(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['write']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].fs.write.$post(args, options),
  )
}

export async function postV2SandboxesSessionsSessionIdSnapshot(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.sandboxes.sessions[':sessionId'].snapshot.$post(args, options),
  )
}

export async function postV2SandboxesNameFork(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sandboxes[':name'].fork.$post(args, options))
}

export async function postV3Sandboxes(
  args: InferRequestType<typeof client.v3.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sandboxes.$post(args, options))
}

export async function postV3SandboxesSessionsSessionIdSnapshot(
  args: InferRequestType<(typeof client.v3.sandboxes.sessions)[':sessionId']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.sandboxes.sessions[':sessionId'].snapshot.$post(args, options),
  )
}

export async function postV3SandboxesNameFork(
  args: InferRequestType<(typeof client.v3.sandboxes)[':name']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sandboxes[':name'].fork.$post(args, options))
}

export async function postV4Sandboxes(
  args: InferRequestType<typeof client.v4.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.sandboxes.$post(args, options))
}

export async function postV1SecurityAttackMode(
  args: InferRequestType<(typeof client.v1.security)['attack-mode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security['attack-mode'].$post(args, options))
}

export async function getV1SecurityFirewallConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.security.firewall.config.$get(undefined, options))
}

export async function putV1SecurityFirewallConfig(
  args: InferRequestType<typeof client.v1.security.firewall.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.config.$put(args, options))
}

export async function patchV1SecurityFirewallConfig(
  args: InferRequestType<typeof client.v1.security.firewall.config.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.config.$patch(args, options))
}

export async function getV1SecurityFirewallConfigConfigVersion(
  args: InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.security.firewall.config[':configVersion'].$get(args, options),
  )
}

export async function deleteV1SecurityFirewallConfigConfigVersion(
  args: InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.security.firewall.config[':configVersion'].$delete(args, options),
  )
}

export async function postV1SecurityFirewallConfigConfigVersionActivate(
  args: InferRequestType<
    (typeof client.v1.security.firewall.config)[':configVersion']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.security.firewall.config[':configVersion'].activate.$post(args, options),
  )
}

export async function getV1SecurityFirewallAttackStatus(
  args: InferRequestType<(typeof client.v1.security.firewall)['attack-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall['attack-status'].$get(args, options))
}

export async function getV1SecurityFirewallBypass(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.$get(args, options))
}

export async function postV1SecurityFirewallBypass(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.$post(args, options))
}

export async function deleteV1SecurityFirewallBypass(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.$delete(args, options))
}

export async function getV1SecurityFirewallBypassRules(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.rules.$get(args, options))
}

export async function putV1SecurityFirewallBypassRules(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.rules.$put(args, options))
}

export async function postV1SecurityFirewallBypassRules(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.rules.$post(args, options))
}

export async function deleteV1SecurityFirewallBypassRules(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.bypass.rules.$delete(args, options))
}

export async function getV1SecurityFirewallEvents(
  args: InferRequestType<typeof client.v1.security.firewall.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.events.$get(args, options))
}

export async function getV1SecurityFirewallEventsSummary(
  args: InferRequestType<typeof client.v1.security.firewall.events.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.security.firewall.events.summary.$get(args, options))
}

export async function postV1SecurityFirewallConfigGenerateRule(
  args: InferRequestType<(typeof client.v1.security.firewall.config)['generate-rule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.security.firewall.config['generate-rule'].$post(args, options),
  )
}

export async function postSpeedInsightsToggle(
  args: InferRequestType<(typeof client)['speed-insights']['toggle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['speed-insights'].toggle.$post(args, options))
}

export async function getStorageStoresId(
  args: InferRequestType<(typeof client.storage.stores)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.stores[':id'].$get(args, options))
}

export async function postStorageStoresBlob(
  args: InferRequestType<typeof client.storage.stores.blob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.stores.blob.$post(args, options))
}

export async function deleteStorageStoresBlobId(
  args: InferRequestType<(typeof client.storage.stores.blob)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.stores.blob[':id'].$delete(args, options))
}

export async function postV1StorageStoresIntegrationDirect(
  args: InferRequestType<typeof client.v1.storage.stores.integration.direct.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.storage.stores.integration.direct.$post(args, options))
}

export async function getV3TeamsTeamIdMembers(
  args: InferRequestType<(typeof client.v3.teams)[':teamId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.teams[':teamId'].members.$get(args, options))
}

export async function postV2TeamsTeamIdMembers(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams[':teamId'].members.$post(args, options))
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

export async function getV2Teams(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.teams.$get(args, options))
}

export async function postV1Teams(
  args: InferRequestType<typeof client.v1.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams.$post(args, options))
}

export async function postV1TeamsTeamIdDsyncRoles(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['dsync-roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.teams[':teamId']['dsync-roles'].$post(args, options))
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

export async function deleteV1TeamsTeamIdMicrofrontendsGroupId(
  args: InferRequestType<
    (typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.teams[':teamId'].microfrontends[':groupId'].$delete(args, options),
  )
}

export async function patchV1TeamsTeamIdMicrofrontendsGroupId(
  args: InferRequestType<
    (typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.teams[':teamId'].microfrontends[':groupId'].$patch(args, options),
  )
}

export async function postV2Files(
  args: InferRequestType<typeof client.v2.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.files.$post(args, options))
}

export async function getV6UserTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.v6.user.tokens.$get(undefined, options))
}

export async function postV3UserTokens(
  args: InferRequestType<typeof client.v3.user.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.user.tokens.$post(args, options))
}

export async function getV5UserTokensTokenId(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v5.user.tokens[':tokenId'].$get(args, options))
}

export async function deleteV3UserTokensTokenId(
  args: InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.user.tokens[':tokenId'].$delete(args, options))
}

export async function getV2User(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.$get(undefined, options))
}

export async function deleteV1User(
  args: InferRequestType<typeof client.v1.user.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user.$delete(args, options))
}

export async function getV1VcrRepository(
  args: InferRequestType<typeof client.v1.vcr.repository.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository.$get(args, options))
}

export async function postV1VcrRepository(
  args: InferRequestType<typeof client.v1.vcr.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository.$post(args, options))
}

export async function getV1VcrRepositoryIdOrName(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].$get(args, options))
}

export async function deleteV1VcrRepositoryIdOrName(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].$delete(args, options))
}

export async function getV1VcrRepositoryIdOrNameImages(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].images.$get(args, options))
}

export async function getV1VcrRepositoryIdOrNamePermissions(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].permissions.$get(args, options))
}

export async function postV1VcrRepositoryIdOrNamePermissions(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].permissions.$post(args, options))
}

export async function deleteV1VcrRepositoryIdOrNamePermissions(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.vcr.repository[':idOrName'].permissions.$delete(args, options),
  )
}

export async function deleteV1VcrRepositoryIdOrNamePermissionsAll(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['permissions']['all']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.vcr.repository[':idOrName'].permissions.all.$delete(args, options),
  )
}

export async function getV1VcrRepositoryIdOrNameTags(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].tags.$get(args, options))
}

export async function getV1VcrRepositoryIdOrNameTagsTag(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vcr.repository[':idOrName'].tags[':tag'].$get(args, options))
}

export async function getV1VcrRepositoryIdOrNameImagesImageIdOrDigest(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.vcr.repository[':idOrName'].images[':imageIdOrDigest'].$get(args, options),
  )
}

export async function deleteV1VcrRepositoryIdOrNameImagesImageId(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.vcr.repository[':idOrName'].images[':imageId'].$delete(args, options),
  )
}

export async function getV2Index(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.index.$get(undefined, options))
}

export async function getV2TeamSlugProjectSlugRepositoryNameBlobsDigest(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$get(args, options),
  )
}

export async function deleteV2TeamSlugProjectSlugRepositoryNameBlobsDigest(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$delete(
      args,
      options,
    ),
  )
}

export async function headV2TeamSlugProjectSlugRepositoryNameBlobsDigest(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$head(args, options),
  )
}

export async function getV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$get(
      args,
      options,
    ),
  )
}

export async function putV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$patch(
      args,
      options,
    ),
  )
}

export async function postV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndex(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads.index.$post(
      args,
      options,
    ),
  )
}

export async function getV2TeamSlugProjectSlugRepositoryNameManifestsReference(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$get(
      args,
      options,
    ),
  )
}

export async function putV2TeamSlugProjectSlugRepositoryNameManifestsReference(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV2TeamSlugProjectSlugRepositoryNameManifestsReference(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$delete(
      args,
      options,
    ),
  )
}

export async function headV2TeamSlugProjectSlugRepositoryNameManifestsReference(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$head(
      args,
      options,
    ),
  )
}

export async function getV2TeamSlugProjectSlugRepositoryNameTagsList(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2[':teamSlug'][':projectSlug'][':repositoryName'].tags.list.$get(args, options),
  )
}

export async function getV1VercelCiRepositorySettings(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vercel-ci']['repository-settings'].$get(args, options))
}

export async function patchV1VercelCiRepositorySettings(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vercel-ci']['repository-settings'].$patch(args, options))
}

export async function getV2VercelCiInvocations(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['invocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vercel-ci'].invocations.$get(args, options))
}

export async function getV2VercelCiBranches(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vercel-ci'].branches.$get(args, options))
}

export async function postV1VercelCiTaskAnalyses(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vercel-ci']['task-analyses'].$post(args, options))
}

export async function getV1VercelCiTaskAnalysesAnalysisId(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci']['task-analyses'][':analysisId'].$get(args, options),
  )
}

export async function postV1VercelCiTaskAnalysesAnalysisIdPullRequest(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['pull-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci']['task-analyses'][':analysisId']['pull-request'].$post(args, options),
  )
}

export async function getV1VercelCiTaskAnalysesAnalysisIdTasks(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci']['task-analyses'][':analysisId'].tasks.$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttempts(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts.$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdTree(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].tree.$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttempt(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].$get(args, options),
  )
}

export async function postV1VercelCiInvocationsInvocationIdAttemptsAttemptRetry(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].retry.$post(
      args,
      options,
    ),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitions(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
      'job-definitions'
    ].$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionId(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRuns(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs.$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttempt(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs[':runAttempt'].$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitions(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs[':runAttempt']['task-definitions'].$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRuns(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs[':runAttempt']['task-runs'].$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptLogs(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogs(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['task-logs'].$get(
      args,
      options,
    ),
  )
}

export async function getV1VercelCiLogSearch(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['log-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vercel-ci']['log-search'].$get(args, options))
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogs(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs[':runAttempt'].logs.$get(args, options),
  )
}

export async function getV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogs(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt']['job-definitions'][
      ':jobDefinitionId'
    ].runs[':runAttempt']['task-definitions'][':taskDefinitionId'].runs[
      ':taskRunAttempt'
    ].logs.$get(args, options),
  )
}

export async function postWebInsightsToggle(
  args: InferRequestType<typeof client.web.insights.toggle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web.insights.toggle.$post(args, options))
}

export async function getV1QueryWebAnalyticsVisitsAggregate(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query['web-analytics'].visits.aggregate.$get(args, options))
}

export async function getV1QueryWebAnalyticsEventsAggregate(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query['web-analytics'].events.aggregate.$get(args, options))
}

export async function getV1QueryWebAnalyticsVisitsCount(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query['web-analytics'].visits.count.$get(args, options))
}

export async function getV1QueryWebAnalyticsEventsCount(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query['web-analytics'].events.count.$get(args, options))
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

export async function deleteV2AliasesAliasId(
  args: InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aliases[':aliasId'].$delete(args, options))
}

export async function patchAliasesIdProtectionBypass(
  args: InferRequestType<(typeof client.aliases)[':id']['protection-bypass']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':id']['protection-bypass'].$patch(args, options))
}

export async function getV8CertsId(
  args: InferRequestType<(typeof client.v8.certs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.certs[':id'].$get(args, options))
}

export async function deleteV8CertsId(
  args: InferRequestType<(typeof client.v8.certs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.certs[':id'].$delete(args, options))
}

export async function getV8Certs(
  args: InferRequestType<typeof client.v8.certs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.certs.$get(args, options))
}

export async function putV8Certs(
  args: InferRequestType<typeof client.v8.certs.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.certs.$put(args, options))
}

export async function postV8Certs(
  args: InferRequestType<typeof client.v8.certs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.certs.$post(args, options))
}

export async function getV6DeploymentsIdFiles(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v6.deployments[':id'].files.$get(args, options))
}

export async function getV8DeploymentsIdFilesFileId(
  args: InferRequestType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v8.deployments[':id'].files[':fileId'].$get(args, options))
}

export async function getV7Deployments(
  args: InferRequestType<typeof client.v7.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v7.deployments.$get(args, options))
}

export async function deleteV13DeploymentsId(
  args: InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v13.deployments[':id'].$delete(args, options))
}
