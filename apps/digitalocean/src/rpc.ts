import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2ActionGatewayActorsActorIdLimits(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['actors'][':actor_id']['limits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].actors[':actor_id'].limits.$get(args, options),
  )
}

export async function postV2ActionGatewayActorsActorIdLimitsClear(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['actors'][':actor_id']['limits:clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].actors[':actor_id']['limits:clear'].$post(args, options),
  )
}

export async function postV2ActionGatewayActorsActorIdLimitsSet(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['actors'][':actor_id']['limits:set']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].actors[':actor_id']['limits:set'].$post(args, options),
  )
}

export async function getV2ActionGatewayProviderCredentials(
  args: InferRequestType<(typeof client.v2)['action-gateway']['provider-credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['provider-credentials'].$get(args, options),
  )
}

export async function postV2ActionGatewayProviderCredentials(
  args: InferRequestType<(typeof client.v2)['action-gateway']['provider-credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['provider-credentials'].$post(args, options),
  )
}

export async function getV2ActionGatewayProviderCredentialsId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['provider-credentials'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['provider-credentials'][':id'].$get(args, options),
  )
}

export async function deleteV2ActionGatewayProviderCredentialsId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['provider-credentials'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['provider-credentials'][':id'].$delete(args, options),
  )
}

export async function patchV2ActionGatewayProviderCredentialsId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['provider-credentials'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['provider-credentials'][':id'].$patch(args, options),
  )
}

export async function getV2ActionGatewayConnections(
  args: InferRequestType<(typeof client.v2)['action-gateway']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].connections.$get(args, options))
}

export async function postV2ActionGatewayConnections(
  args: InferRequestType<(typeof client.v2)['action-gateway']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].connections.$post(args, options))
}

export async function getV2ActionGatewayConnectionsId(
  args: InferRequestType<(typeof client.v2)['action-gateway']['connections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].connections[':id'].$get(args, options))
}

export async function deleteV2ActionGatewayConnectionsId(
  args: InferRequestType<(typeof client.v2)['action-gateway']['connections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].connections[':id'].$delete(args, options))
}

export async function getV2ActionGatewayMcpServers(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['action-gateway']['mcp-servers'].$get(undefined, options))
}

export async function postV2ActionGatewayMcpServers(
  args: InferRequestType<(typeof client.v2)['action-gateway']['mcp-servers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway']['mcp-servers'].$post(args, options))
}

export async function getV2ActionGatewayMcpServersServerRef(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].$get(args, options),
  )
}

export async function deleteV2ActionGatewayMcpServersServerRef(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].$delete(args, options),
  )
}

export async function patchV2ActionGatewayMcpServersServerRef(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].$patch(args, options),
  )
}

export async function postV2ActionGatewayMcpServersServerRefResync(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['resync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].resync.$post(args, options),
  )
}

export async function getV2ActionGatewayMcpServersServerRefTools(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['tools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].tools.$get(args, options),
  )
}

export async function putV2ActionGatewayMcpServersServerRefTools(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['mcp-servers'][':server_ref']['tools']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['mcp-servers'][':server_ref'].tools.$put(args, options),
  )
}

export async function getV2ActionGatewayOutputViews(
  args: InferRequestType<(typeof client.v2)['action-gateway']['output-views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway']['output-views'].$get(args, options))
}

export async function postV2ActionGatewayOutputViews(
  args: InferRequestType<(typeof client.v2)['action-gateway']['output-views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway']['output-views'].$post(args, options))
}

export async function postV2ActionGatewayOutputViewsPreview(
  args: InferRequestType<(typeof client.v2)['action-gateway']['output-views']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['output-views'].preview.$post(args, options),
  )
}

export async function getV2ActionGatewayOutputViewsViewId(
  args: InferRequestType<(typeof client.v2)['action-gateway']['output-views'][':view_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['output-views'][':view_id'].$get(args, options),
  )
}

export async function deleteV2ActionGatewayOutputViewsViewId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['output-views'][':view_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['output-views'][':view_id'].$delete(args, options),
  )
}

export async function getV2ActionGatewayEndpoints(
  args: InferRequestType<(typeof client.v2)['action-gateway']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].endpoints.$get(args, options))
}

export async function postV2ActionGatewayEndpoints(
  args: InferRequestType<(typeof client.v2)['action-gateway']['endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].endpoints.$post(args, options))
}

export async function getV2ActionGatewayEndpointsSearch(
  args: InferRequestType<(typeof client.v2)['action-gateway']['endpoints']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].endpoints.search.$get(args, options))
}

export async function getV2ActionGatewayEndpointsEndpointId(
  args: InferRequestType<(typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id'].$get(args, options),
  )
}

export async function deleteV2ActionGatewayEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id'].$delete(args, options),
  )
}

export async function patchV2ActionGatewayEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id'].$patch(args, options),
  )
}

export async function getV2ActionGatewayEndpointsEndpointIdVersions(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id'].versions.$get(args, options),
  )
}

export async function postV2ActionGatewayEndpointsEndpointIdVersions(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id'].versions.$post(args, options),
  )
}

export async function postV2ActionGatewayEndpointsEndpointIdVersionsPromote(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoints'][':endpoint_id']['versions:promote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].endpoints[':endpoint_id']['versions:promote'].$post(args, options),
  )
}

export async function getV2ActionGatewayEndpointVersionsVersionId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoint-versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['endpoint-versions'][':version_id'].$get(args, options),
  )
}

export async function deleteV2ActionGatewayEndpointVersionsVersionId(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['endpoint-versions'][':version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway']['endpoint-versions'][':version_id'].$delete(args, options),
  )
}

export async function getV2ActionGatewaySessions(
  args: InferRequestType<(typeof client.v2)['action-gateway']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].sessions.$get(args, options))
}

export async function postV2ActionGatewaySessions(
  args: InferRequestType<(typeof client.v2)['action-gateway']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].sessions.$post(args, options))
}

export async function getV2ActionGatewaySessionsSearch(
  args: InferRequestType<(typeof client.v2)['action-gateway']['sessions']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].sessions.search.$get(args, options))
}

export async function deleteV2ActionGatewaySessionsSessionUrn(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['sessions'][':session_urn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].sessions[':session_urn'].$delete(args, options),
  )
}

export async function getV2ActionGatewayToolbelts(
  args: InferRequestType<(typeof client.v2)['action-gateway']['toolbelts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].toolbelts.$get(args, options))
}

export async function postV2ActionGatewayToolbelts(
  args: InferRequestType<(typeof client.v2)['action-gateway']['toolbelts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].toolbelts.$post(args, options))
}

export async function getV2ActionGatewayToolbeltsSearch(
  args: InferRequestType<(typeof client.v2)['action-gateway']['toolbelts']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].toolbelts.search.$get(args, options))
}

export async function getV2ActionGatewayToolbeltsName(
  args: InferRequestType<(typeof client.v2)['action-gateway']['toolbelts'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].toolbelts[':name'].$get(args, options))
}

export async function deleteV2ActionGatewayToolbeltsName(
  args: InferRequestType<(typeof client.v2)['action-gateway']['toolbelts'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].toolbelts[':name'].$delete(args, options))
}

export async function getV2ActionGatewayToolbeltsNameProviders(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['toolbelts'][':name']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].toolbelts[':name'].providers.$get(args, options),
  )
}

export async function getV2ActionGatewayToolbeltsNameProvidersProviderTools(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['toolbelts'][':name']['providers'][':provider']['tools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].toolbelts[':name'].providers[':provider'].tools.$get(args, options),
  )
}

export async function postV2ActionGatewayToolbeltsNameToolsAdd(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['toolbelts'][':name']['tools']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].toolbelts[':name'].tools.add.$post(args, options),
  )
}

export async function postV2ActionGatewayToolbeltsNameToolsRemove(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['toolbelts'][':name']['tools']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].toolbelts[':name'].tools.remove.$post(args, options),
  )
}

export async function getV2ActionGatewayTools(
  args: InferRequestType<(typeof client.v2)['action-gateway']['tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].tools.$get(args, options))
}

export async function getV2ActionGatewayToolsHealth(
  args: InferRequestType<(typeof client.v2)['action-gateway']['tools']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].tools.health.$get(args, options))
}

export async function getV2ActionGatewayToolsHealthProviders(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['tools']['health']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].tools.health.providers.$get(args, options))
}

export async function getV2ActionGatewayToolsHealthToolsToolSlug(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['tools']['health']['tools'][':tool_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].tools.health.tools[':tool_slug'].$get(args, options),
  )
}

export async function getV2ActionGatewayToolsToolSlugVersions(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['tools'][':tool_slug']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['action-gateway'].tools[':tool_slug'].versions.$get(args, options),
  )
}

export async function getV2ActionGatewayToolsProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['action-gateway'].tools.providers.$get(undefined, options))
}

export async function getV2ActionGatewayToolsProvidersSearch(
  args: InferRequestType<
    (typeof client.v2)['action-gateway']['tools']['providers']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].tools.providers.search.$get(args, options))
}

export async function getV2ActionGatewayToolsSearch(
  args: InferRequestType<(typeof client.v2)['action-gateway']['tools']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].tools.search.$get(args, options))
}

export async function getV2ActionGatewayToolsToolkits(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['action-gateway'].tools.toolkits.$get(undefined, options))
}

export async function getV2ActionGatewayUsers(
  args: InferRequestType<(typeof client.v2)['action-gateway']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].users.$get(args, options))
}

export async function getV2ActionGatewayUsersUserId(
  args: InferRequestType<(typeof client.v2)['action-gateway']['users'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['action-gateway'].users[':user_id'].$get(args, options))
}

export async function getTools(
  args: InferRequestType<typeof client.tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.$get(args, options))
}

export async function postToolsSearch(
  args: InferRequestType<typeof client.tools.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.search.$post(args, options))
}

export async function postToolsInvoke(
  args: InferRequestType<typeof client.tools.invoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.invoke.$post(args, options))
}

export async function postCodeExecute(
  args: InferRequestType<typeof client.code.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.code.execute.$post(args, options))
}

export async function postApprovalsSessionSessionIdApprovalId(
  args: InferRequestType<(typeof client.approvals.session)[':session_id'][':approval_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.approvals.session[':session_id'][':approval_id'].$post(args, options),
  )
}

export async function postApprovalsApprovalId(
  args: InferRequestType<(typeof client.approvals)[':approval_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.approvals[':approval_id'].$post(args, options))
}

export async function getV21Clicks(
  args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['1-clicks'].$get(args, options))
}

export async function postV21ClicksKubernetes(
  args: InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['1-clicks'].kubernetes.$post(args, options))
}

export async function getV2Account(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.account.$get(undefined, options))
}

export async function getV2AccountKeys(
  args: InferRequestType<typeof client.v2.account.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys.$get(args, options))
}

export async function postV2AccountKeys(
  args: InferRequestType<typeof client.v2.account.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys.$post(args, options))
}

export async function getV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$get(args, options))
}

export async function putV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$put(args, options))
}

export async function deleteV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$delete(args, options))
}

export async function getV2Actions(
  args: InferRequestType<typeof client.v2.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actions.$get(args, options))
}

export async function getV2ActionsActionId(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actions[':action_id'].$get(args, options))
}

export async function getV2AddOnsApps(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['add-ons'].apps.$get(undefined, options))
}

export async function getV2AddOnsAppsAppSlugMetadata(
  args: InferRequestType<(typeof client.v2)['add-ons']['apps'][':app_slug']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].apps[':app_slug'].metadata.$get(args, options))
}

export async function getV2AddOnsSaas(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['add-ons'].saas.$get(undefined, options))
}

export async function postV2AddOnsSaas(
  args: InferRequestType<(typeof client.v2)['add-ons']['saas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].saas.$post(args, options))
}

export async function getV2AddOnsSaasResourceUuid(
  args: InferRequestType<(typeof client.v2)['add-ons']['saas'][':resource_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].saas[':resource_uuid'].$get(args, options))
}

export async function deleteV2AddOnsSaasResourceUuid(
  args: InferRequestType<(typeof client.v2)['add-ons']['saas'][':resource_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].saas[':resource_uuid'].$delete(args, options))
}

export async function patchV2AddOnsSaasResourceUuid(
  args: InferRequestType<(typeof client.v2)['add-ons']['saas'][':resource_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].saas[':resource_uuid'].$patch(args, options))
}

export async function patchV2AddOnsSaasResourceUuidPlan(
  args: InferRequestType<(typeof client.v2)['add-ons']['saas'][':resource_uuid']['plan']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['add-ons'].saas[':resource_uuid'].plan.$patch(args, options))
}

export async function postV2HarnessRuntimeAuthProvider(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['auth'][':provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].auth[':provider'].$post(args, options))
}

export async function getV2HarnessRuntimeAuthProviderPoll(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['poll']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].poll.$get(args, options),
  )
}

export async function getV2HarnessRuntimeAuthProviderConnections(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].connections.$get(args, options),
  )
}

export async function postV2HarnessRuntimeAuthProviderConnections(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].connections.$post(args, options),
  )
}

export async function getV2HarnessRuntimeAuthProviderConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['connections'][':connection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].connections[':connection_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2HarnessRuntimeAuthProviderConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['connections'][':connection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].connections[':connection_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV2HarnessRuntimeAuthProviderConnectionsConnectionIdReconnect(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['auth'][':provider']['connections'][':connection_id']['reconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].auth[':provider'].connections[':connection_id'].reconnect.$post(
      args,
      options,
    ),
  )
}

export async function getV2HarnessRuntimeImageMessages(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['image-messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime']['image-messages'].$get(args, options))
}

export async function getV2HarnessRuntimeConfigs(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].configs.$get(args, options))
}

export async function postV2HarnessRuntimeConfigs(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].configs.$post(args, options))
}

export async function getV2HarnessRuntimeConfigsConfigId(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['configs'][':config_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].configs[':config_id'].$get(args, options))
}

export async function deleteV2HarnessRuntimeConfigsConfigId(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['configs'][':config_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].configs[':config_id'].$delete(args, options),
  )
}

export async function postV2HarnessRuntimeConfigsConfigIdClone(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['configs'][':config_id']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].configs[':config_id'].clone.$post(args, options),
  )
}

export async function getV2HarnessRuntimeConfigsConfigIdSessions(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['configs'][':config_id']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].configs[':config_id'].sessions.$get(args, options),
  )
}

export async function getV2HarnessRuntimeRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['harness-runtime'].regions.$get(undefined, options))
}

export async function getV2HarnessRuntimeSessions(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].sessions.$get(args, options))
}

export async function postV2HarnessRuntimeSessions(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].sessions.$post(args, options))
}

export async function postV2HarnessRuntimeSessionsPolicyValidate(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions']['policy']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions.policy.validate.$post(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSandboxSizes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions.sandbox.sizes.$get(undefined, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionId(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['sessions'][':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].$get(args, options),
  )
}

export async function deleteV2HarnessRuntimeSessionsSessionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].$delete(args, options),
  )
}

export async function patchV2HarnessRuntimeSessionsSessionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].$patch(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdCheckpoints(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints.$get(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdCheckpoints(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints.$post(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdCheckpointsCheckpointId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints'][':checkpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints[':checkpoint_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2HarnessRuntimeSessionsSessionIdCheckpointsCheckpointId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints'][':checkpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints[':checkpoint_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdCheckpointsCheckpointIdImageMessages(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints'][':checkpoint_id']['image-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints[':checkpoint_id'][
      'image-messages'
    ].$get(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdCheckpointsCheckpointIdRollback(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['checkpoints'][':checkpoint_id']['rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].checkpoints[
      ':checkpoint_id'
    ].rollback.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdFork(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['fork']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].fork.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdHitlRequestId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['hitl'][':request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].hitl[':request_id'].$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdCancel(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].cancel.$post(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdImageMessages(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['image-messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id']['image-messages'].$get(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdInput(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['input']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].input.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdPause(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].pause.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdResume(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].resume.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdSandboxExec(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['sandbox']['exec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].sandbox.exec.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdSandboxExecExecIdStdin(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['sandbox']['exec'][':exec_id']['stdin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].sandbox.exec[':exec_id'].stdin.$post(
      args,
      options,
    ),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdWorkspaceDownload(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.download.$get(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdWorkspaceTransfers(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['transfers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.transfers.$post(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdWorkspaceTransfersTransferId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['transfers'][':transfer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.transfers[':transfer_id'].$get(
      args,
      options,
    ),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdWorkspaceTransfersTransferIdCancel(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['transfers'][':transfer_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.transfers[
      ':transfer_id'
    ].cancel.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdWorkspaceTransfersTransferIdCommit(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['transfers'][':transfer_id']['commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.transfers[
      ':transfer_id'
    ].commit.$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdWorkspaceTransfersTransferIdPartUploadUrls(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['transfers'][':transfer_id']['part-upload-urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.transfers[':transfer_id'][
      'part-upload-urls'
    ].$post(args, options),
  )
}

export async function postV2HarnessRuntimeSessionsSessionIdWorkspaceUpload(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['workspace']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].workspace.upload.$post(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdEvents(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].events.$get(args, options),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdPortForwardPort(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['port-forward'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id']['port-forward'][':port'].$get(
      args,
      options,
    ),
  )
}

export async function getV2HarnessRuntimeSessionsSessionIdIngress(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['sessions'][':session_id']['ingress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].sessions[':session_id'].ingress.$get(args, options),
  )
}

export async function getV2HarnessRuntimeTemplates(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].templates.$get(args, options))
}

export async function postV2HarnessRuntimeTemplates(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].templates.$post(args, options))
}

export async function getV2HarnessRuntimeTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['templates'][':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].templates[':template_id'].$get(args, options),
  )
}

export async function putV2HarnessRuntimeTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['templates'][':template_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].templates[':template_id'].$put(args, options),
  )
}

export async function deleteV2HarnessRuntimeTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['templates'][':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].templates[':template_id'].$delete(args, options),
  )
}

export async function getV2HarnessRuntimeTemplatesTemplateIdBuilds(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['templates'][':template_id']['builds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].templates[':template_id'].builds.$get(args, options),
  )
}

export async function getV2HarnessRuntimeTemplatesTemplateIdBuildsBuildId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['templates'][':template_id']['builds'][':build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].templates[':template_id'].builds[':build_id'].$get(args, options),
  )
}

export async function getV2HarnessRuntimeTriggers(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].triggers.$get(args, options))
}

export async function postV2HarnessRuntimeTriggers(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].triggers.$post(args, options))
}

export async function getV2HarnessRuntimeTriggersBySessionSessionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers']['by-session'][':session_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers['by-session'][':session_id'].$get(args, options),
  )
}

export async function getV2HarnessRuntimeTriggersReusableSessions(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers']['reusable-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers['reusable-sessions'].$get(args, options),
  )
}

export async function getV2HarnessRuntimeTriggersTriggerId(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].$get(args, options),
  )
}

export async function deleteV2HarnessRuntimeTriggersTriggerId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].$delete(args, options),
  )
}

export async function patchV2HarnessRuntimeTriggersTriggerId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].$patch(args, options),
  )
}

export async function getV2HarnessRuntimeTriggersTriggerIdExecutions(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].executions.$get(args, options),
  )
}

export async function getV2HarnessRuntimeTriggersTriggerIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['executions'][':execution_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].executions[':execution_id'].$get(
      args,
      options,
    ),
  )
}

export async function postV2HarnessRuntimeTriggersTriggerIdExecutionsExecutionIdCancel(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['executions'][':execution_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].executions[':execution_id'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function postV2HarnessRuntimeTriggersTriggerIdRotateSecret(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['rotate-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id']['rotate-secret'].$post(args, options),
  )
}

export async function postV2HarnessRuntimeTriggersTriggerIdWebhook(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['triggers'][':trigger_id']['webhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].triggers[':trigger_id'].webhook.$post(args, options),
  )
}

export async function getV2HarnessRuntimeWebhookProviders(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2['harness-runtime']['webhook-providers'].$get(undefined, options),
  )
}

export async function getV2HarnessRuntimeWorkspaces(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].workspaces.$get(args, options))
}

export async function postV2HarnessRuntimeWorkspaces(
  args: InferRequestType<(typeof client.v2)['harness-runtime']['workspaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['harness-runtime'].workspaces.$post(args, options))
}

export async function getV2HarnessRuntimeWorkspacesWorkspaceId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['workspaces'][':workspace_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].workspaces[':workspace_id'].$get(args, options),
  )
}

export async function deleteV2HarnessRuntimeWorkspacesWorkspaceId(
  args: InferRequestType<
    (typeof client.v2)['harness-runtime']['workspaces'][':workspace_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['harness-runtime'].workspaces[':workspace_id'].$delete(args, options),
  )
}

export async function getV2Apps(
  args: InferRequestType<typeof client.v2.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.$get(args, options))
}

export async function postV2Apps(
  args: InferRequestType<typeof client.v2.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.$post(args, options))
}

export async function getV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$get(args, options))
}

export async function putV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$put(args, options))
}

export async function deleteV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$delete(args, options))
}

export async function postV2AppsAppIdRestart(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].restart.$post(args, options))
}

export async function getV2AppsAppIdComponentsComponentNameLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].components[':component_name'].logs.$get(args, options),
  )
}

export async function getV2AppsAppIdComponentsComponentNameExec(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['exec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].components[':component_name'].exec.$get(args, options),
  )
}

export async function getV2AppsAppIdInstances(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].instances.$get(args, options))
}

export async function getV2AppsAppIdDeployments(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].deployments.$get(args, options))
}

export async function postV2AppsAppIdDeployments(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].deployments.$post(args, options))
}

export async function getV2AppsAppIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].$get(args, options),
  )
}

export async function postV2AppsAppIdDeploymentsDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].cancel.$post(args, options),
  )
}

export async function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].components[':component_name'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getV2AppsAppIdDeploymentsDeploymentIdLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(args, options),
  )
}

export async function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameExec(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['exec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].components[':component_name'].exec.$get(
      args,
      options,
    ),
  )
}

export async function getV2AppsAppIdLogs(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].logs.$get(args, options))
}

export async function getV2AppsAppIdJobInvocations(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['job-invocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id']['job-invocations'].$get(args, options))
}

export async function getV2AppsAppIdJobInvocationsJobInvocationId(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['job-invocations'][':job_invocation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id']['job-invocations'][':job_invocation_id'].$get(args, options),
  )
}

export async function postV2AppsAppIdJobInvocationsJobInvocationIdCancel(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['job-invocations'][':job_invocation_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id']['job-invocations'][':job_invocation_id'].cancel.$post(args, options),
  )
}

export async function getV2AppsAppIdJobsJobNameInvocationsJobInvocationIdLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['jobs'][':job_name']['invocations'][':job_invocation_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].jobs[':job_name'].invocations[':job_invocation_id'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getV2AppsAppIdEvents(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].events.$get(args, options))
}

export async function getV2AppsAppIdEventsEventId(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].events[':event_id'].$get(args, options))
}

export async function postV2AppsAppIdEventsEventIdCancel(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['events'][':event_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].events[':event_id'].cancel.$post(args, options),
  )
}

export async function getV2AppsAppIdEventsEventIdLogs(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['events'][':event_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].events[':event_id'].logs.$get(args, options))
}

export async function getV2AppsTiersInstanceSizes(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apps.tiers.instance_sizes.$get(undefined, options))
}

export async function getV2AppsTiersInstanceSizesSlug(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.tiers.instance_sizes[':slug'].$get(args, options))
}

export async function getV2AppsRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apps.regions.$get(undefined, options))
}

export async function postV2AppsPropose(
  args: InferRequestType<typeof client.v2.apps.propose.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.propose.$post(args, options))
}

export async function getV2AppsAppIdAlerts(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].alerts.$get(args, options))
}

export async function postV2AppsAppIdAlertsAlertIdDestinations(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].alerts[':alert_id'].destinations.$post(args, options),
  )
}

export async function postV2AppsAppIdRollback(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.$post(args, options))
}

export async function postV2AppsAppIdRollbackValidate(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.validate.$post(args, options))
}

export async function postV2AppsAppIdRollbackCommit(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.commit.$post(args, options))
}

export async function postV2AppsAppIdRollbackRevert(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.revert.$post(args, options))
}

export async function getV2AppsAppIdMetricsBandwidthDaily(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(args, options))
}

export async function postV2AppsMetricsBandwidthDaily(
  args: InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.metrics.bandwidth_daily.$post(args, options))
}

export async function getV2AppsAppIdHealth(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].health.$get(args, options))
}

export async function getV2CdnEndpoints(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints.$get(args, options))
}

export async function postV2CdnEndpoints(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints.$post(args, options))
}

export async function getV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$get(args, options))
}

export async function putV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$put(args, options))
}

export async function deleteV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$delete(args, options))
}

export async function deleteV2CdnEndpointsCdnIdCache(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].cache.$delete(args, options))
}

export async function getV2Certificates(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.$get(args, options))
}

export async function postV2Certificates(
  args: InferRequestType<typeof client.v2.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.$post(args, options))
}

export async function getV2CertificatesCertificateId(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates[':certificate_id'].$get(args, options))
}

export async function deleteV2CertificatesCertificateId(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates[':certificate_id'].$delete(args, options))
}

export async function getV2CustomersMyBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.balance.$get(undefined, options))
}

export async function getV2CustomersMyPrepaymentConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.prepayment_config.$get(undefined, options))
}

export async function getV2CustomersMyPrepaymentStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.prepayment_status.$get(undefined, options))
}

export async function getV2CustomersMyBillingHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.billing_history.$get(undefined, options))
}

export async function getV2CustomersMyInvoices(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.my.invoices.$get(args, options))
}

export async function getV2CustomersMyInvoicesInvoiceUuid(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.my.invoices[':invoice_uuid'].$get(args, options))
}

export async function getV2CustomersMyInvoicesInvoiceUuidCsv(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(args, options),
  )
}

export async function getV2CustomersMyInvoicesInvoiceUuidPdf(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(args, options),
  )
}

export async function getV2CustomersMyInvoicesInvoiceUuidSummary(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(args, options),
  )
}

export async function getV2BillingAccountUrnInsightsStartDateEndDate(
  args: InferRequestType<
    (typeof client.v2.billing)[':account_urn']['insights'][':start_date'][':end_date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.billing[':account_urn'].insights[':start_date'][':end_date'].$get(args, options),
  )
}

export async function getV2DatabasesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.databases.options.$get(undefined, options))
}

export async function getV2Databases(
  args: InferRequestType<typeof client.v2.databases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases.$get(args, options))
}

export async function postV2Databases(
  args: InferRequestType<typeof client.v2.databases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases.$post(args, options))
}

export async function getV2DatabasesDatabaseClusterUuid(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].$get(args, options))
}

export async function deleteV2DatabasesDatabaseClusterUuid(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].$delete(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidConfig(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].config.$get(args, options),
  )
}

export async function patchV2DatabasesDatabaseClusterUuidConfig(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].config.$patch(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidCa(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].ca.$get(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidOnlineMigration(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidOnlineMigration(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationId(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'][':migration_id'].$delete(
      args,
      options,
    ),
  )
}

export async function putV2DatabasesDatabaseClusterUuidMigrate(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].migrate.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidResize(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].resize.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidFirewall(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].firewall.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidFirewall(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].firewall.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidDoSettings(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['do_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].do_settings.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidDoSettings(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['do_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].do_settings.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidMaintenance(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].maintenance.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidInstallUpdate(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['install_update']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].install_update.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidBackups(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].backups.$get(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidReplicas(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidReplicas(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidEvents(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].events.$get(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidReplicasReplicaName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidReplicasReplicaName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$delete(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromote(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].promote.$put(
      args,
      options,
    ),
  )
}

export async function getV2DatabasesDatabaseClusterUuidUsers(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidUsers(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidUsersUsername(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidUsersUsername(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidUsersUsername(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].$delete(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuth(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].reset_auth.$post(
      args,
      options,
    ),
  )
}

export async function getV2DatabasesDatabaseClusterUuidDbs(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$get(args, options))
}

export async function postV2DatabasesDatabaseClusterUuidDbs(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$post(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidDbsDatabaseName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidDbsDatabaseName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidPools(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidPools(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidEvictionPolicy(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidEvictionPolicy(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].eviction_policy.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSqlMode(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].sql_mode.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidSqlMode(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].sql_mode.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidUpgrade(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].upgrade.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidAutoscale(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['autoscale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].autoscale.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidAutoscale(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['autoscale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].autoscale.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidTopics(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].topics.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidTopics(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['topics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].topics.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidTopicsTopicName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['topics'][':topic_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].topics[':topic_name'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidTopicsTopicName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['topics'][':topic_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].topics[':topic_name'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidTopicsTopicName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['topics'][':topic_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].topics[':topic_name'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidLogsink(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['logsink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].logsink.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidLogsink(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['logsink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].logsink.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidLogsinkLogsinkId(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['logsink'][':logsink_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].logsink[':logsink_id'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidLogsinkLogsinkId(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['logsink'][':logsink_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].logsink[':logsink_id'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidLogsinkLogsinkId(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['logsink'][':logsink_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].logsink[':logsink_id'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSchemaRegistry(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidSchemaRegistry(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSchemaRegistrySubjectName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry'][':subject_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'][':subject_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidSchemaRegistrySubjectName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry'][':subject_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'][':subject_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSchemaRegistrySubjectNameVersionsVersion(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry'][':subject_name']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'][':subject_name'].versions[
      ':version'
    ].$get(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSchemaRegistryConfig(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].config.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidSchemaRegistryConfig(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].config.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSchemaRegistryConfigSubjectName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['config'][':subject_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].config[':subject_name'].$get(
      args,
      options,
    ),
  )
}

export async function putV2DatabasesDatabaseClusterUuidSchemaRegistryConfigSubjectName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['schema-registry']['config'][':subject_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['schema-registry'].config[':subject_name'].$put(
      args,
      options,
    ),
  )
}

export async function getV2DatabasesMetricsCredentials(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.databases.metrics.credentials.$get(undefined, options))
}

export async function putV2DatabasesMetricsCredentials(
  args: InferRequestType<typeof client.v2.databases.metrics.credentials.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases.metrics.credentials.$put(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidIndexes(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['indexes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].indexes.$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidIndexesIndexName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['indexes'][':index_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].indexes[':index_name'].$delete(args, options),
  )
}

export async function getV2DedicatedInferencesDedicatedInferenceId(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].$get(args, options),
  )
}

export async function deleteV2DedicatedInferencesDedicatedInferenceId(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].$delete(args, options),
  )
}

export async function patchV2DedicatedInferencesDedicatedInferenceId(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].$patch(args, options),
  )
}

export async function getV2DedicatedInferences(
  args: InferRequestType<(typeof client.v2)['dedicated-inferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['dedicated-inferences'].$get(args, options))
}

export async function postV2DedicatedInferences(
  args: InferRequestType<(typeof client.v2)['dedicated-inferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['dedicated-inferences'].$post(args, options))
}

export async function getV2DedicatedInferencesDedicatedInferenceIdAccelerators(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['accelerators']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].accelerators.$get(args, options),
  )
}

export async function getV2DedicatedInferencesDedicatedInferenceIdAcceleratorsAcceleratorId(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['accelerators'][':accelerator_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].accelerators[
      ':accelerator_id'
    ].$get(args, options),
  )
}

export async function getV2DedicatedInferencesDedicatedInferenceIdCa(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['ca']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].ca.$get(args, options),
  )
}

export async function getV2DedicatedInferencesDedicatedInferenceIdTokens(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].tokens.$get(args, options),
  )
}

export async function postV2DedicatedInferencesDedicatedInferenceIdTokens(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].tokens.$post(args, options),
  )
}

export async function deleteV2DedicatedInferencesDedicatedInferenceIdTokensTokenId(
  args: InferRequestType<
    (typeof client.v2)['dedicated-inferences'][':dedicated_inference_id']['tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['dedicated-inferences'][':dedicated_inference_id'].tokens[':token_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2DedicatedInferencesSizes(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['dedicated-inferences'].sizes.$get(undefined, options))
}

export async function getV2DedicatedInferencesGpuModelConfig(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2['dedicated-inferences']['gpu-model-config'].$get(undefined, options),
  )
}

export async function getV2Domains(
  args: InferRequestType<typeof client.v2.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.$get(args, options))
}

export async function postV2Domains(
  args: InferRequestType<typeof client.v2.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.$post(args, options))
}

export async function getV2DomainsDomainName(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].$get(args, options))
}

export async function deleteV2DomainsDomainName(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].$delete(args, options))
}

export async function getV2DomainsDomainNameRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].records.$get(args, options))
}

export async function postV2DomainsDomainNameRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].records.$post(args, options))
}

export async function getV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$get(args, options),
  )
}

export async function putV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$put(args, options),
  )
}

export async function deleteV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$delete(args, options),
  )
}

export async function patchV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$patch(args, options),
  )
}

export async function getV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$get(args, options))
}

export async function postV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$post(args, options))
}

export async function deleteV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$delete(args, options))
}

export async function getV2DropletsDropletId(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].$get(args, options))
}

export async function deleteV2DropletsDropletId(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].$delete(args, options))
}

export async function getV2DropletsDropletIdBackups(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].backups.$get(args, options))
}

export async function getV2DropletsDropletIdBackupsPolicy(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].backups.policy.$get(args, options))
}

export async function getV2DropletsBackupsPolicies(
  args: InferRequestType<typeof client.v2.droplets.backups.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.backups.policies.$get(args, options))
}

export async function getV2DropletsBackupsSupportedPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.droplets.backups.supported_policies.$get(undefined, options))
}

export async function getV2DropletsDropletIdSnapshots(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].snapshots.$get(args, options))
}

export async function getV2DropletsDropletIdActions(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].actions.$get(args, options))
}

export async function postV2DropletsDropletIdActions(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].actions.$post(args, options))
}

export async function postV2DropletsActions(
  args: InferRequestType<typeof client.v2.droplets.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.actions.$post(args, options))
}

export async function getV2DropletsDropletIdActionsActionId(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2DropletsDropletIdKernels(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].kernels.$get(args, options))
}

export async function getV2DropletsDropletIdFirewalls(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].firewalls.$get(args, options))
}

export async function getV2DropletsDropletIdNeighbors(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].neighbors.$get(args, options))
}

export async function getV2DropletsDropletIdDestroyWithAssociatedResources(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(args, options),
  )
}

export async function deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelective(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.selective.$delete(
      args,
      options,
    ),
  )
}

export async function deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerous(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.dangerous.$delete(
      args,
      options,
    ),
  )
}

export async function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatus(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(args, options),
  )
}

export async function postV2DropletsDropletIdDestroyWithAssociatedResourcesRetry(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.retry.$post(args, options),
  )
}

export async function getV2DropletsAutoscale(
  args: InferRequestType<typeof client.v2.droplets.autoscale.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.autoscale.$get(args, options))
}

export async function postV2DropletsAutoscale(
  args: InferRequestType<typeof client.v2.droplets.autoscale.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.autoscale.$post(args, options))
}

export async function getV2DropletsAutoscaleAutoscalePoolId(
  args: InferRequestType<(typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.autoscale[':autoscale_pool_id'].$get(args, options))
}

export async function putV2DropletsAutoscaleAutoscalePoolId(
  args: InferRequestType<(typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.autoscale[':autoscale_pool_id'].$put(args, options))
}

export async function deleteV2DropletsAutoscaleAutoscalePoolId(
  args: InferRequestType<(typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets.autoscale[':autoscale_pool_id'].$delete(args, options),
  )
}

export async function deleteV2DropletsAutoscaleAutoscalePoolIdDangerous(
  args: InferRequestType<
    (typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['dangerous']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets.autoscale[':autoscale_pool_id'].dangerous.$delete(args, options),
  )
}

export async function getV2DropletsAutoscaleAutoscalePoolIdMembers(
  args: InferRequestType<
    (typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets.autoscale[':autoscale_pool_id'].members.$get(args, options),
  )
}

export async function getV2DropletsAutoscaleAutoscalePoolIdHistory(
  args: InferRequestType<
    (typeof client.v2.droplets.autoscale)[':autoscale_pool_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets.autoscale[':autoscale_pool_id'].history.$get(args, options),
  )
}

export async function getV2Firewalls(
  args: InferRequestType<typeof client.v2.firewalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls.$get(args, options))
}

export async function postV2Firewalls(
  args: InferRequestType<typeof client.v2.firewalls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls.$post(args, options))
}

export async function getV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$get(args, options))
}

export async function putV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$put(args, options))
}

export async function deleteV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$delete(args, options))
}

export async function postV2FirewallsFirewallIdDroplets(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].droplets.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdDroplets(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].droplets.$delete(args, options))
}

export async function postV2FirewallsFirewallIdTags(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].tags.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdTags(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].tags.$delete(args, options))
}

export async function postV2FirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].rules.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].rules.$delete(args, options))
}

export async function getV2FloatingIps(
  args: InferRequestType<typeof client.v2.floating_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips.$get(args, options))
}

export async function postV2FloatingIps(
  args: InferRequestType<typeof client.v2.floating_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips.$post(args, options))
}

export async function getV2FloatingIpsFloatingIp(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].$get(args, options))
}

export async function deleteV2FloatingIpsFloatingIp(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].$delete(args, options))
}

export async function getV2FloatingIpsFloatingIpActions(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].actions.$get(args, options))
}

export async function postV2FloatingIpsFloatingIpActions(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].actions.$post(args, options))
}

export async function getV2FloatingIpsFloatingIpActionsActionId(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2FunctionsNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.functions.namespaces.$get(undefined, options))
}

export async function postV2FunctionsNamespaces(
  args: InferRequestType<typeof client.v2.functions.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces.$post(args, options))
}

export async function getV2FunctionsNamespacesNamespaceId(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces[':namespace_id'].$get(args, options))
}

export async function deleteV2FunctionsNamespacesNamespaceId(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces[':namespace_id'].$delete(args, options))
}

export async function getV2FunctionsNamespacesNamespaceIdTriggers(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers.$get(args, options),
  )
}

export async function postV2FunctionsNamespacesNamespaceIdTriggers(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers.$post(args, options),
  )
}

export async function getV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(args, options),
  )
}

export async function putV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$put(args, options),
  )
}

export async function deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2FunctionsNamespacesNamespaceIdKeys(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].keys.$get(args, options),
  )
}

export async function postV2FunctionsNamespacesNamespaceIdKeys(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].keys.$post(args, options),
  )
}

export async function putV2FunctionsNamespacesNamespaceIdKeysKeyId(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['keys'][':key_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].keys[':key_id'].$put(args, options),
  )
}

export async function deleteV2FunctionsNamespacesNamespaceIdKeysKeyId(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].keys[':key_id'].$delete(args, options),
  )
}

export async function getV2Images(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$get(args, options))
}

export async function postV2Images(
  args: InferRequestType<typeof client.v2.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$post(args, options))
}

export async function getV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$get(args, options))
}

export async function putV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$put(args, options))
}

export async function deleteV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$delete(args, options))
}

export async function postV2ImagesImageIdAccountTransfer(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['account_transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].account_transfer.$post(args, options))
}

export async function postV2ImagesImageIdAccountTransferAccept(
  args: InferRequestType<
    (typeof client.v2.images)[':image_id']['account_transfer']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.images[':image_id'].account_transfer.accept.$post(args, options),
  )
}

export async function postV2ImagesImageIdAccountTransferCancel(
  args: InferRequestType<
    (typeof client.v2.images)[':image_id']['account_transfer']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.images[':image_id'].account_transfer.cancel.$post(args, options),
  )
}

export async function postV2ImagesImageIdAccountTransferDecline(
  args: InferRequestType<
    (typeof client.v2.images)[':image_id']['account_transfer']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.images[':image_id'].account_transfer.decline.$post(args, options),
  )
}

export async function getV2ImagesImageIdActions(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].actions.$get(args, options))
}

export async function postV2ImagesImageIdActions(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].actions.$post(args, options))
}

export async function getV2ImagesImageIdActionsActionId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.images[':image_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2InsightsAlertInstances(
  args: InferRequestType<(typeof client.v2.insights)['alert-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-instances'].$get(args, options))
}

export async function getV2InsightsAlertInstancesId(
  args: InferRequestType<(typeof client.v2.insights)['alert-instances'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-instances'][':id'].$get(args, options))
}

export async function getV2InsightsAlertRules(
  args: InferRequestType<(typeof client.v2.insights)['alert-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-rules'].$get(args, options))
}

export async function postV2InsightsAlertRules(
  args: InferRequestType<(typeof client.v2.insights)['alert-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-rules'].$post(args, options))
}

export async function getV2InsightsAlertRulesId(
  args: InferRequestType<(typeof client.v2.insights)['alert-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-rules'][':id'].$get(args, options))
}

export async function putV2InsightsAlertRulesId(
  args: InferRequestType<(typeof client.v2.insights)['alert-rules'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-rules'][':id'].$put(args, options))
}

export async function deleteV2InsightsAlertRulesId(
  args: InferRequestType<(typeof client.v2.insights)['alert-rules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['alert-rules'][':id'].$delete(args, options))
}

export async function getV2InsightsDashboards(
  args: InferRequestType<typeof client.v2.insights.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.dashboards.$get(args, options))
}

export async function postV2InsightsDashboards(
  args: InferRequestType<typeof client.v2.insights.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.dashboards.$post(args, options))
}

export async function getV2InsightsDashboardsSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.insights.dashboards.schema.$get(undefined, options))
}

export async function getV2InsightsDashboardsUuid(
  args: InferRequestType<(typeof client.v2.insights.dashboards)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.dashboards[':uuid'].$get(args, options))
}

export async function putV2InsightsDashboardsUuid(
  args: InferRequestType<(typeof client.v2.insights.dashboards)[':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.dashboards[':uuid'].$put(args, options))
}

export async function deleteV2InsightsDashboardsUuid(
  args: InferRequestType<(typeof client.v2.insights.dashboards)[':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.dashboards[':uuid'].$delete(args, options))
}

export async function getV2InsightsNotificationChannels(
  args: InferRequestType<(typeof client.v2.insights)['notification-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['notification-channels'].$get(args, options))
}

export async function postV2InsightsNotificationChannels(
  args: InferRequestType<(typeof client.v2.insights)['notification-channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['notification-channels'].$post(args, options))
}

export async function getV2InsightsNotificationChannelsId(
  args: InferRequestType<(typeof client.v2.insights)['notification-channels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['notification-channels'][':id'].$get(args, options))
}

export async function putV2InsightsNotificationChannelsId(
  args: InferRequestType<(typeof client.v2.insights)['notification-channels'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights['notification-channels'][':id'].$put(args, options))
}

export async function deleteV2InsightsNotificationChannelsId(
  args: InferRequestType<(typeof client.v2.insights)['notification-channels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights['notification-channels'][':id'].$delete(args, options),
  )
}

export async function getV2InsightsQueryRegionPromApiV1Query(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.query.$get(args, options),
  )
}

export async function postV2InsightsQueryRegionPromApiV1Query(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.query.$post(args, options),
  )
}

export async function getV2InsightsQueryRegionPromApiV1QueryRange(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['query_range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.query_range.$get(args, options),
  )
}

export async function postV2InsightsQueryRegionPromApiV1QueryRange(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['query_range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.query_range.$post(args, options),
  )
}

export async function getV2InsightsQueryRegionPromApiV1Labels(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.labels.$get(args, options),
  )
}

export async function postV2InsightsQueryRegionPromApiV1Labels(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.labels.$post(args, options),
  )
}

export async function getV2InsightsQueryRegionPromApiV1LabelNameValues(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['label'][':name']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.label[':name'].values.$get(args, options),
  )
}

export async function getV2InsightsQueryRegionPromApiV1Series(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['series']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.series.$get(args, options),
  )
}

export async function postV2InsightsQueryRegionPromApiV1Series(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['prom']['api']['v1']['series']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].prom.api.v1.series.$post(args, options),
  )
}

export async function postV2InsightsQueryRegionLogsSearch(
  args: InferRequestType<(typeof client.v2.insights.query)[':region']['logs']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.query[':region'].logs.search.$post(args, options))
}

export async function postV2InsightsQueryRegionTracesSearch(
  args: InferRequestType<(typeof client.v2.insights.query)[':region']['traces']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.query[':region'].traces.search.$post(args, options))
}

export async function getV2InsightsQueryRegionTracesTraceId(
  args: InferRequestType<
    (typeof client.v2.insights.query)[':region']['traces'][':trace_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.query[':region'].traces[':trace_id'].$get(args, options),
  )
}

export async function postV2InsightsQueryRegionSpansSearch(
  args: InferRequestType<(typeof client.v2.insights.query)[':region']['spans']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.query[':region'].spans.search.$post(args, options))
}

export async function getV2InsightsResources(
  args: InferRequestType<typeof client.v2.insights.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.resources.$get(args, options))
}

export async function getV2InsightsResourcesResourceUrn(
  args: InferRequestType<(typeof client.v2.insights.resources)[':resource_urn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.insights.resources[':resource_urn'].$get(args, options))
}

export async function putV2InsightsResourcesResourceUrnSignals(
  args: InferRequestType<(typeof client.v2.insights.resources)[':resource_urn']['signals']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.insights.resources[':resource_urn'].signals.$put(args, options),
  )
}

export async function getV1Consent(
  args: InferRequestType<typeof client.v1.consent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consent.$get(args, options))
}

export async function putV1Consent(
  args: InferRequestType<typeof client.v1.consent.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consent.$put(args, options))
}

export async function getV1ConsentEnvironmentId(
  args: InferRequestType<(typeof client.v1.consent)[':environment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consent[':environment_id'].$get(args, options))
}

export async function putV1ConsentEnvironmentId(
  args: InferRequestType<(typeof client.v1.consent)[':environment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consent[':environment_id'].$put(args, options))
}

export async function getV1SignalsAgentsEnvironmentIdSessions(
  args: InferRequestType<(typeof client.v1.signals.agents)[':environment_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.signals.agents[':environment_id'].sessions.$get(args, options),
  )
}

export async function getV1SignalsSessionsSessionIdDialogues(
  args: InferRequestType<(typeof client.v1.signals.sessions)[':session_id']['dialogues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.signals.sessions[':session_id'].dialogues.$get(args, options),
  )
}

export async function getV1SignalsExports(
  args: InferRequestType<typeof client.v1.signals.exports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.exports.$get(args, options))
}

export async function postV1SignalsExports(
  args: InferRequestType<typeof client.v1.signals.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.exports.$post(args, options))
}

export async function getV1SignalsExportsOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.signals.exports.options.$get(undefined, options))
}

export async function getV1SignalsExportsExportId(
  args: InferRequestType<(typeof client.v1.signals.exports)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.exports[':export_id'].$get(args, options))
}

export async function getV1SignalsExportsExportIdDownload(
  args: InferRequestType<(typeof client.v1.signals.exports)[':export_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.exports[':export_id'].download.$get(args, options))
}

export async function getV1SignalsDeletions(
  args: InferRequestType<typeof client.v1.signals.deletions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.deletions.$get(args, options))
}

export async function postV1SignalsDeletions(
  args: InferRequestType<typeof client.v1.signals.deletions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.deletions.$post(args, options))
}

export async function getV1SignalsDeletionsDeletionId(
  args: InferRequestType<(typeof client.v1.signals.deletions)[':deletion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signals.deletions[':deletion_id'].$get(args, options))
}

export async function getV2KubernetesClusters(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters.$get(args, options))
}

export async function postV2KubernetesClusters(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters.$post(args, options))
}

export async function getV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$get(args, options))
}

export async function putV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$put(args, options))
}

export async function deleteV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$delete(args, options))
}

export async function getV2KubernetesClustersClusterIdDestroyWithAssociatedResources(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
      args,
      options,
    ),
  )
}

export async function deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelective(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[
      ':cluster_id'
    ].destroy_with_associated_resources.selective.$delete(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerous(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[
      ':cluster_id'
    ].destroy_with_associated_resources.dangerous.$delete(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdKubeconfig(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdCredentials(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdUpgrades(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdUpgrade(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].upgrade.$post(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools.$post(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(args, options),
  )
}

export async function putV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$put(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$delete(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].nodes[
      ':node_id'
    ].$delete(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycle(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].recycle.$post(
      args,
      options,
    ),
  )
}

export async function getV2KubernetesClustersClusterIdUser(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].user.$get(args, options))
}

export async function getV2KubernetesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.kubernetes.options.$get(undefined, options))
}

export async function getV2KubernetesClustersClusterIdClusterlint(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdClusterlint(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$post(args, options),
  )
}

export async function postV2KubernetesRegistry(
  args: InferRequestType<typeof client.v2.kubernetes.registry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registry.$post(args, options))
}

export async function deleteV2KubernetesRegistry(
  args: InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registry.$delete(args, options))
}

export async function postV2KubernetesRegistries(
  args: InferRequestType<typeof client.v2.kubernetes.registries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registries.$post(args, options))
}

export async function deleteV2KubernetesRegistries(
  args: InferRequestType<typeof client.v2.kubernetes.registries.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registries.$delete(args, options))
}

export async function getV2KubernetesClustersClusterIdStatusMessages(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['status_messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].status_messages.$get(args, options),
  )
}

export async function getV2LoadBalancers(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers.$get(args, options))
}

export async function postV2LoadBalancers(
  args: InferRequestType<typeof client.v2.load_balancers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers.$post(args, options))
}

export async function getV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$get(args, options))
}

export async function putV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$put(args, options))
}

export async function deleteV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$delete(args, options))
}

export async function deleteV2LoadBalancersLbIdCache(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['cache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].cache.$delete(args, options))
}

export async function postV2LoadBalancersLbIdDroplets(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].droplets.$post(args, options))
}

export async function deleteV2LoadBalancersLbIdDroplets(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].droplets.$delete(args, options))
}

export async function postV2LoadBalancersLbIdForwardingRules(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.load_balancers[':lb_id'].forwarding_rules.$post(args, options),
  )
}

export async function deleteV2LoadBalancersLbIdForwardingRules(
  args: InferRequestType<
    (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.load_balancers[':lb_id'].forwarding_rules.$delete(args, options),
  )
}

export async function getV2Microvms(
  args: InferRequestType<typeof client.v2.microvms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms.$get(args, options))
}

export async function postV2Microvms(
  args: InferRequestType<typeof client.v2.microvms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms.$post(args, options))
}

export async function getV2MicrovmsOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.microvms.options.$get(undefined, options))
}

export async function getV2MicrovmsCheckpoints(
  args: InferRequestType<typeof client.v2.microvms.checkpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms.checkpoints.$get(args, options))
}

export async function getV2MicrovmsCheckpointsCheckpointId(
  args: InferRequestType<(typeof client.v2.microvms.checkpoints)[':checkpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms.checkpoints[':checkpoint_id'].$get(args, options))
}

export async function deleteV2MicrovmsCheckpointsCheckpointId(
  args: InferRequestType<(typeof client.v2.microvms.checkpoints)[':checkpoint_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.microvms.checkpoints[':checkpoint_id'].$delete(args, options),
  )
}

export async function getV2MicrovmsMicrovmId(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].$get(args, options))
}

export async function deleteV2MicrovmsMicrovmId(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].$delete(args, options))
}

export async function patchV2MicrovmsMicrovmId(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].$patch(args, options))
}

export async function postV2MicrovmsMicrovmIdUrls(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].urls.$post(args, options))
}

export async function deleteV2MicrovmsMicrovmIdUrlsUrlId(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['urls'][':url_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.microvms[':microvm_id'].urls[':url_id'].$delete(args, options),
  )
}

export async function getV2MicrovmsMicrovmIdAccessTokens(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['access_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].access_tokens.$get(args, options))
}

export async function postV2MicrovmsMicrovmIdAccessTokens(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['access_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].access_tokens.$post(args, options))
}

export async function deleteV2MicrovmsMicrovmIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.v2.microvms)[':microvm_id']['access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.microvms[':microvm_id'].access_tokens[':token_id'].$delete(args, options),
  )
}

export async function postV2MicrovmsMicrovmIdPause(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].pause.$post(args, options))
}

export async function postV2MicrovmsMicrovmIdResume(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].resume.$post(args, options))
}

export async function postV2MicrovmsMicrovmIdExec(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['exec']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].exec.$post(args, options))
}

export async function getV2MicrovmsMicrovmIdConsole(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['console']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].console.$get(args, options))
}

export async function getV2MicrovmsMicrovmIdPortForward(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['port_forward']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].port_forward.$get(args, options))
}

export async function getV2MicrovmsMicrovmIdFiles(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].files.$get(args, options))
}

export async function putV2MicrovmsMicrovmIdFiles(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['files']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].files.$put(args, options))
}

export async function postV2MicrovmsMicrovmIdCheckpoints(
  args: InferRequestType<(typeof client.v2.microvms)[':microvm_id']['checkpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.microvms[':microvm_id'].checkpoints.$post(args, options))
}

export async function getV2MonitoringAlerts(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts.$get(args, options))
}

export async function postV2MonitoringAlerts(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts.$post(args, options))
}

export async function getV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$get(args, options))
}

export async function putV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$put(args, options))
}

export async function deleteV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$delete(args, options))
}

export async function getV2MonitoringMetricsDropletBandwidth(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.bandwidth.$get(args, options))
}

export async function getV2MonitoringMetricsDropletCpu(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.cpu.$get(args, options))
}

export async function getV2MonitoringMetricsDropletFilesystemFree(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.filesystem_free.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletFilesystemSize(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.filesystem_size.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletLoad1(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_1.$get(args, options))
}

export async function getV2MonitoringMetricsDropletLoad5(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_5.$get(args, options))
}

export async function getV2MonitoringMetricsDropletLoad15(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_15.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryCached(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_cached.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryFree(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_free.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryTotal(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_total.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryAvailable(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.memory_available.$get(args, options),
  )
}

export async function getV2MonitoringMetricsAppsMemoryPercentage(
  args: InferRequestType<typeof client.v2.monitoring.metrics.apps.memory_percentage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.apps.memory_percentage.$get(args, options),
  )
}

export async function getV2MonitoringMetricsAppsCpuPercentage(
  args: InferRequestType<typeof client.v2.monitoring.metrics.apps.cpu_percentage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.apps.cpu_percentage.$get(args, options))
}

export async function getV2MonitoringMetricsAppsRestartCount(
  args: InferRequestType<typeof client.v2.monitoring.metrics.apps.restart_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.apps.restart_count.$get(args, options))
}

export async function getV2MonitoringMetricsLoadBalancerFrontendConnectionsCurrent(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_connections_current.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_connections_current.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendConnectionsLimit(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_connections_limit.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_connections_limit.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendCpuUtilization(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_cpu_utilization.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_cpu_utilization.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedBytes(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_firewall_dropped_bytes.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_firewall_dropped_bytes.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendFirewallDroppedPackets(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_firewall_dropped_packets.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_firewall_dropped_packets.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendHttpResponses(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_http_responses.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_http_responses.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendHttpRequestsPerSecond(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_http_requests_per_second.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_http_requests_per_second.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputHttp(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_http.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_http.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputUdp(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_udp.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_udp.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendNetworkThroughputTcp(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_tcp.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_network_throughput_tcp.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendNlbTcpNetworkThroughput(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_nlb_tcp_network_throughput.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_nlb_tcp_network_throughput.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendNlbUdpNetworkThroughput(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_nlb_udp_network_throughput.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_nlb_udp_network_throughput.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsCurrent(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_current.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_current.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsLimit(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_limit.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_limit.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerFrontendTlsConnectionsExceedingRateLimit(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_exceeding_rate_limit.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.frontend_tls_connections_exceeding_rate_limit.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDurationAvg(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_avg.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_avg.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration50p(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_50p.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_50p.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpSessionDuration95p(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_95p.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_session_duration_95p.$get(
      args,
      options,
    ),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTimeAvg(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_avg.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_avg.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime50p(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_50p.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_50p.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime95p(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_95p.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_95p.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpResponseTime99p(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_99p.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_response_time_99p.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsQueueSize(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_queue_size.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_queue_size.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHttpResponses(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_http_responses.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_http_responses.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsConnections(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_connections.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_connections.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsHealthChecks(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.load_balancer.droplets_health_checks.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_health_checks.$get(args, options),
  )
}

export async function getV2MonitoringMetricsLoadBalancerDropletsDowntime(
  args: InferRequestType<typeof client.v2.monitoring.metrics.load_balancer.droplets_downtime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.load_balancer.droplets_downtime.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleCurrentInstances(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.current_instances.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.current_instances.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleTargetInstances(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.target_instances.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.target_instances.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleCurrentCpuUtilization(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.current_cpu_utilization.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.current_cpu_utilization.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleTargetCpuUtilization(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.target_cpu_utilization.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.target_cpu_utilization.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleCurrentMemoryUtilization(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.current_memory_utilization.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.current_memory_utilization.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletAutoscaleTargetMemoryUtilization(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.droplet_autoscale.target_memory_utilization.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet_autoscale.target_memory_utilization.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlCpuUsage(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.cpu_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.cpu_usage.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlLoad(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.load.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.database.mysql.load.$get(args, options))
}

export async function getV2MonitoringMetricsDatabaseMysqlMemoryUsage(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.memory_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.memory_usage.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlDiskUsage(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.disk_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.disk_usage.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlThreadsConnected(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.threads_connected.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.threads_connected.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlThreadsCreatedRate(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.database.mysql.threads_created_rate.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.threads_created_rate.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlThreadsActive(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.threads_active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.threads_active.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlIndexVsSequentialReads(
  args: InferRequestType<
    typeof client.v2.monitoring.metrics.database.mysql.index_vs_sequential_reads.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.index_vs_sequential_reads.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlOpRates(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.op_rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.op_rates.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlSchemaThroughput(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.schema_throughput.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.schema_throughput.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDatabaseMysqlSchemaLatency(
  args: InferRequestType<typeof client.v2.monitoring.metrics.database.mysql.schema_latency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.database.mysql.schema_latency.$get(args, options),
  )
}

export async function getV2MonitoringSinksDestinations(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.monitoring.sinks.destinations.$get(undefined, options))
}

export async function postV2MonitoringSinksDestinations(
  args: InferRequestType<typeof client.v2.monitoring.sinks.destinations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.sinks.destinations.$post(args, options))
}

export async function getV2MonitoringSinksDestinationsDestinationUuid(
  args: InferRequestType<
    (typeof client.v2.monitoring.sinks.destinations)[':destination_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.sinks.destinations[':destination_uuid'].$get(args, options),
  )
}

export async function postV2MonitoringSinksDestinationsDestinationUuid(
  args: InferRequestType<
    (typeof client.v2.monitoring.sinks.destinations)[':destination_uuid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.sinks.destinations[':destination_uuid'].$post(args, options),
  )
}

export async function deleteV2MonitoringSinksDestinationsDestinationUuid(
  args: InferRequestType<
    (typeof client.v2.monitoring.sinks.destinations)[':destination_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.sinks.destinations[':destination_uuid'].$delete(args, options),
  )
}

export async function getV2MonitoringSinks(
  args: InferRequestType<typeof client.v2.monitoring.sinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.sinks.$get(args, options))
}

export async function postV2MonitoringSinks(
  args: InferRequestType<typeof client.v2.monitoring.sinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.sinks.$post(args, options))
}

export async function getV2MonitoringSinksSinkUuid(
  args: InferRequestType<(typeof client.v2.monitoring.sinks)[':sink_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.sinks[':sink_uuid'].$get(args, options))
}

export async function deleteV2MonitoringSinksSinkUuid(
  args: InferRequestType<(typeof client.v2.monitoring.sinks)[':sink_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.sinks[':sink_uuid'].$delete(args, options))
}

export async function getV2Nfs(
  args: InferRequestType<typeof client.v2.nfs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.$get(args, options))
}

export async function postV2Nfs(
  args: InferRequestType<typeof client.v2.nfs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.$post(args, options))
}

export async function getV2NfsNfsId(
  args: InferRequestType<(typeof client.v2.nfs)[':nfs_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs[':nfs_id'].$get(args, options))
}

export async function deleteV2NfsNfsId(
  args: InferRequestType<(typeof client.v2.nfs)[':nfs_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs[':nfs_id'].$delete(args, options))
}

export async function postV2NfsNfsIdActions(
  args: InferRequestType<(typeof client.v2.nfs)[':nfs_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs[':nfs_id'].actions.$post(args, options))
}

export async function getV2NfsSnapshots(
  args: InferRequestType<typeof client.v2.nfs.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.snapshots.$get(args, options))
}

export async function getV2NfsSnapshotsNfsSnapshotId(
  args: InferRequestType<(typeof client.v2.nfs.snapshots)[':nfs_snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.snapshots[':nfs_snapshot_id'].$get(args, options))
}

export async function deleteV2NfsSnapshotsNfsSnapshotId(
  args: InferRequestType<(typeof client.v2.nfs.snapshots)[':nfs_snapshot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.snapshots[':nfs_snapshot_id'].$delete(args, options))
}

export async function getV2NfsSharesShareIdAccessPoints(
  args: InferRequestType<(typeof client.v2.nfs.shares)[':share_id']['access_points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.shares[':share_id'].access_points.$get(args, options))
}

export async function postV2NfsSharesShareIdAccessPoints(
  args: InferRequestType<(typeof client.v2.nfs.shares)[':share_id']['access_points']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.shares[':share_id'].access_points.$post(args, options))
}

export async function getV2NfsAccessPointsAccessPointId(
  args: InferRequestType<(typeof client.v2.nfs.access_points)[':access_point_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.access_points[':access_point_id'].$get(args, options))
}

export async function deleteV2NfsAccessPointsAccessPointId(
  args: InferRequestType<(typeof client.v2.nfs.access_points)[':access_point_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.nfs.access_points[':access_point_id'].$delete(args, options))
}

export async function postV2OrganizationsTeam(
  args: InferRequestType<typeof client.v2.organizations.team.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.organizations.team.$post(args, options))
}

export async function getV2OrganizationsTeams(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.organizations.teams.$get(undefined, options))
}

export async function getV2PartnerNetworkConnectAttachments(
  args: InferRequestType<typeof client.v2.partner_network_connect.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partner_network_connect.attachments.$get(args, options))
}

export async function postV2PartnerNetworkConnectAttachments(
  args: InferRequestType<typeof client.v2.partner_network_connect.attachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.partner_network_connect.attachments.$post(args, options))
}

export async function getV2PartnerNetworkConnectAttachmentsPaId(
  args: InferRequestType<(typeof client.v2.partner_network_connect.attachments)[':pa_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].$get(args, options),
  )
}

export async function deleteV2PartnerNetworkConnectAttachmentsPaId(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].$delete(args, options),
  )
}

export async function patchV2PartnerNetworkConnectAttachmentsPaId(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].$patch(args, options),
  )
}

export async function getV2PartnerNetworkConnectAttachmentsPaIdBgpAuthKey(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['bgp_auth_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].bgp_auth_key.$get(args, options),
  )
}

export async function getV2PartnerNetworkConnectAttachmentsPaIdRemoteRoutes(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['remote_routes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].remote_routes.$get(args, options),
  )
}

export async function getV2PartnerNetworkConnectAttachmentsPaIdServiceKey(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['service_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].service_key.$get(args, options),
  )
}

export async function postV2PartnerNetworkConnectAttachmentsPaIdServiceKey(
  args: InferRequestType<
    (typeof client.v2.partner_network_connect.attachments)[':pa_id']['service_key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.partner_network_connect.attachments[':pa_id'].service_key.$post(args, options),
  )
}

export async function getV2Projects(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$get(args, options))
}

export async function postV2Projects(
  args: InferRequestType<typeof client.v2.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$post(args, options))
}

export async function getV2ProjectsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.projects.default.$get(undefined, options))
}

export async function putV2ProjectsDefault(
  args: InferRequestType<typeof client.v2.projects.default.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.$put(args, options))
}

export async function patchV2ProjectsDefault(
  args: InferRequestType<typeof client.v2.projects.default.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.$patch(args, options))
}

export async function getV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$get(args, options))
}

export async function putV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$put(args, options))
}

export async function deleteV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$delete(args, options))
}

export async function patchV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$patch(args, options))
}

export async function getV2ProjectsProjectIdResources(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].resources.$get(args, options))
}

export async function postV2ProjectsProjectIdResources(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].resources.$post(args, options))
}

export async function getV2ProjectsDefaultResources(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.projects.default.resources.$get(undefined, options))
}

export async function postV2ProjectsDefaultResources(
  args: InferRequestType<typeof client.v2.projects.default.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.resources.$post(args, options))
}

export async function getV2Regions(
  args: InferRequestType<typeof client.v2.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.regions.$get(args, options))
}

export async function getV2Registries(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registries.$get(undefined, options))
}

export async function postV2Registries(
  args: InferRequestType<typeof client.v2.registries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registries.$post(args, options))
}

export async function getV2RegistriesRegistryName(
  args: InferRequestType<(typeof client.v2.registries)[':registry_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registries[':registry_name'].$get(args, options))
}

export async function deleteV2RegistriesRegistryName(
  args: InferRequestType<(typeof client.v2.registries)[':registry_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registries[':registry_name'].$delete(args, options))
}

export async function getV2RegistriesRegistryNameDockerCredentials(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['docker-credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name']['docker-credentials'].$get(args, options),
  )
}

export async function getV2RegistriesSubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registries.subscription.$get(undefined, options))
}

export async function postV2RegistriesSubscription(
  args: InferRequestType<typeof client.v2.registries.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registries.subscription.$post(args, options))
}

export async function getV2RegistriesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registries.options.$get(undefined, options))
}

export async function getV2RegistriesRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['garbage-collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name']['garbage-collection'].$get(args, options),
  )
}

export async function postV2RegistriesRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['garbage-collection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name']['garbage-collection'].$post(args, options),
  )
}

export async function getV2RegistriesRegistryNameGarbageCollections(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['garbage-collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name']['garbage-collections'].$get(args, options),
  )
}

export async function putV2RegistriesRegistryNameGarbageCollectionGarbageCollectionUuid(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name']['garbage-collection'][':garbage_collection_uuid'].$put(
      args,
      options,
    ),
  )
}

export async function getV2RegistriesRegistryNameRepositoriesV2(
  args: InferRequestType<(typeof client.v2.registries)[':registry_name']['repositoriesV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositoriesV2.$get(args, options),
  )
}

export async function deleteV2RegistriesRegistryNameRepositoriesRepositoryName(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['repositories'][':repository_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositories[':repository_name'].$delete(args, options),
  )
}

export async function getV2RegistriesRegistryNameRepositoriesRepositoryNameTags(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['repositories'][':repository_name']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositories[':repository_name'].tags.$get(
      args,
      options,
    ),
  )
}

export async function deleteV2RegistriesRegistryNameRepositoriesRepositoryNameTagsRepositoryTag(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['repositories'][':repository_name']['tags'][':repository_tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositories[':repository_name'].tags[
      ':repository_tag'
    ].$delete(args, options),
  )
}

export async function getV2RegistriesRegistryNameRepositoriesRepositoryNameDigests(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['repositories'][':repository_name']['digests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositories[':repository_name'].digests.$get(
      args,
      options,
    ),
  )
}

export async function deleteV2RegistriesRegistryNameRepositoriesRepositoryNameDigestsManifestDigest(
  args: InferRequestType<
    (typeof client.v2.registries)[':registry_name']['repositories'][':repository_name']['digests'][':manifest_digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registries[':registry_name'].repositories[':repository_name'].digests[
      ':manifest_digest'
    ].$delete(args, options),
  )
}

export async function postV2RegistriesValidateName(
  args: InferRequestType<(typeof client.v2.registries)['validate-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registries['validate-name'].$post(args, options))
}

export async function getV2Registry(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.$get(undefined, options))
}

export async function postV2Registry(
  args: InferRequestType<typeof client.v2.registry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry.$post(args, options))
}

export async function deleteV2Registry(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.$delete(undefined, options))
}

export async function getV2RegistrySubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.subscription.$get(undefined, options))
}

export async function postV2RegistrySubscription(
  args: InferRequestType<typeof client.v2.registry.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry.subscription.$post(args, options))
}

export async function getV2RegistryDockerCredentials(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry['docker-credentials'].$get(args, options))
}

export async function postV2RegistryValidateName(
  args: InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry['validate-name'].$post(args, options))
}

export async function getV2RegistryRegistryNameRepositories(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry[':registry_name'].repositories.$get(args, options))
}

export async function getV2RegistryRegistryNameRepositoriesV2(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositoriesV2.$get(args, options),
  )
}

export async function getV2RegistryRegistryNameRepositoriesRepositoryNameTags(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositories'][':repository_name']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositories[':repository_name'].tags.$get(args, options),
  )
}

export async function deleteV2RegistryRegistryNameRepositoriesRepositoryNameTagsRepositoryTag(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositories'][':repository_name']['tags'][':repository_tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositories[':repository_name'].tags[
      ':repository_tag'
    ].$delete(args, options),
  )
}

export async function getV2RegistryRegistryNameRepositoriesRepositoryNameDigests(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositories'][':repository_name']['digests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositories[':repository_name'].digests.$get(
      args,
      options,
    ),
  )
}

export async function deleteV2RegistryRegistryNameRepositoriesRepositoryNameDigestsManifestDigest(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositories'][':repository_name']['digests'][':manifest_digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositories[':repository_name'].digests[
      ':manifest_digest'
    ].$delete(args, options),
  )
}

export async function getV2RegistryRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'].$get(args, options),
  )
}

export async function postV2RegistryRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'].$post(args, options),
  )
}

export async function getV2RegistryRegistryNameGarbageCollections(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collections'].$get(args, options),
  )
}

export async function putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuid(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'][':garbage_collection_uuid'].$put(
      args,
      options,
    ),
  )
}

export async function getV2RegistryOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.options.$get(undefined, options))
}

export async function getV2ReportsDropletNeighborsIds(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.reports.droplet_neighbors_ids.$get(undefined, options))
}

export async function getV2ReservedIps(
  args: InferRequestType<typeof client.v2.reserved_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips.$get(args, options))
}

export async function postV2ReservedIps(
  args: InferRequestType<typeof client.v2.reserved_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips.$post(args, options))
}

export async function getV2ReservedIpsReservedIp(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].$get(args, options))
}

export async function deleteV2ReservedIpsReservedIp(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].$delete(args, options))
}

export async function getV2ReservedIpsReservedIpActions(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$get(args, options))
}

export async function postV2ReservedIpsReservedIpActions(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$post(args, options))
}

export async function getV2ReservedIpsReservedIpActionsActionId(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2ReservedIpv6(
  args: InferRequestType<typeof client.v2.reserved_ipv6.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ipv6.$get(args, options))
}

export async function postV2ReservedIpv6(
  args: InferRequestType<typeof client.v2.reserved_ipv6.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ipv6.$post(args, options))
}

export async function getV2ReservedIpv6ReservedIpv6(
  args: InferRequestType<(typeof client.v2.reserved_ipv6)[':reserved_ipv6']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ipv6[':reserved_ipv6'].$get(args, options))
}

export async function deleteV2ReservedIpv6ReservedIpv6(
  args: InferRequestType<(typeof client.v2.reserved_ipv6)[':reserved_ipv6']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ipv6[':reserved_ipv6'].$delete(args, options))
}

export async function postV2ReservedIpv6ReservedIpv6Actions(
  args: InferRequestType<(typeof client.v2.reserved_ipv6)[':reserved_ipv6']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ipv6[':reserved_ipv6'].actions.$post(args, options))
}

export async function getV2ByoipPrefixes(
  args: InferRequestType<typeof client.v2.byoip_prefixes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes.$get(args, options))
}

export async function postV2ByoipPrefixes(
  args: InferRequestType<typeof client.v2.byoip_prefixes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes.$post(args, options))
}

export async function getV2ByoipPrefixesByoipPrefixUuid(
  args: InferRequestType<(typeof client.v2.byoip_prefixes)[':byoip_prefix_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes[':byoip_prefix_uuid'].$get(args, options))
}

export async function deleteV2ByoipPrefixesByoipPrefixUuid(
  args: InferRequestType<(typeof client.v2.byoip_prefixes)[':byoip_prefix_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes[':byoip_prefix_uuid'].$delete(args, options))
}

export async function patchV2ByoipPrefixesByoipPrefixUuid(
  args: InferRequestType<(typeof client.v2.byoip_prefixes)[':byoip_prefix_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes[':byoip_prefix_uuid'].$patch(args, options))
}

export async function getV2ByoipPrefixesByoipPrefixUuidIps(
  args: InferRequestType<(typeof client.v2.byoip_prefixes)[':byoip_prefix_uuid']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.byoip_prefixes[':byoip_prefix_uuid'].ips.$get(args, options))
}

export async function getV2SecurityScans(
  args: InferRequestType<typeof client.v2.security.scans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.scans.$get(args, options))
}

export async function postV2SecurityScans(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.security.scans.$post(undefined, options))
}

export async function getV2SecurityScansScanId(
  args: InferRequestType<(typeof client.v2.security.scans)[':scan_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.scans[':scan_id'].$get(args, options))
}

export async function getV2SecurityScansLatest(
  args: InferRequestType<typeof client.v2.security.scans.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.scans.latest.$get(args, options))
}

export async function postV2SecurityScansRules(
  args: InferRequestType<typeof client.v2.security.scans.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.scans.rules.$post(args, options))
}

export async function getV2SecurityScansScanIdFindingsFindingUuidAffectedResources(
  args: InferRequestType<
    (typeof client.v2.security.scans)[':scan_id']['findings'][':finding_uuid']['affected_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.security.scans[':scan_id'].findings[':finding_uuid'].affected_resources.$get(
      args,
      options,
    ),
  )
}

export async function getV2SecuritySettings(
  args: InferRequestType<typeof client.v2.security.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.settings.$get(args, options))
}

export async function putV2SecuritySettingsPlan(
  args: InferRequestType<typeof client.v2.security.settings.plan.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.settings.plan.$put(args, options))
}

export async function postV2SecuritySettingsSuppressions(
  args: InferRequestType<typeof client.v2.security.settings.suppressions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.settings.suppressions.$post(args, options))
}

export async function deleteV2SecuritySettingsSuppressionsSuppressionUuid(
  args: InferRequestType<
    (typeof client.v2.security.settings.suppressions)[':suppression_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.security.settings.suppressions[':suppression_uuid'].$delete(args, options),
  )
}

export async function getV2SecuritySecrets(
  args: InferRequestType<typeof client.v2.security.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets.$get(args, options))
}

export async function postV2SecuritySecrets(
  args: InferRequestType<typeof client.v2.security.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets.$post(args, options))
}

export async function getV2SecuritySecretsSecret(
  args: InferRequestType<(typeof client.v2.security.secrets)[':secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets[':secret'].$get(args, options))
}

export async function putV2SecuritySecretsSecret(
  args: InferRequestType<(typeof client.v2.security.secrets)[':secret']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets[':secret'].$put(args, options))
}

export async function deleteV2SecuritySecretsSecret(
  args: InferRequestType<(typeof client.v2.security.secrets)[':secret']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets[':secret'].$delete(args, options))
}

export async function getV2SecuritySecretsSecretVersions(
  args: InferRequestType<(typeof client.v2.security.secrets)[':secret']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets[':secret'].versions.$get(args, options))
}

export async function postV2SecuritySecretsSecretRestore(
  args: InferRequestType<(typeof client.v2.security.secrets)[':secret']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.security.secrets[':secret'].restore.$post(args, options))
}

export async function getV2Sizes(
  args: InferRequestType<typeof client.v2.sizes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sizes.$get(args, options))
}

export async function getV2Snapshots(
  args: InferRequestType<typeof client.v2.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots.$get(args, options))
}

export async function getV2SnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots[':snapshot_id'].$get(args, options))
}

export async function deleteV2SnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots[':snapshot_id'].$delete(args, options))
}

export async function deleteV2SnapshotsSnapshotIdRegionsRegion(
  args: InferRequestType<
    (typeof client.v2.snapshots)[':snapshot_id']['regions'][':region']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshots[':snapshot_id'].regions[':region'].$delete(args, options),
  )
}

export async function getV2SpacesKeys(
  args: InferRequestType<typeof client.v2.spaces.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys.$get(args, options))
}

export async function postV2SpacesKeys(
  args: InferRequestType<typeof client.v2.spaces.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys.$post(args, options))
}

export async function getV2SpacesKeysAccessKey(
  args: InferRequestType<(typeof client.v2.spaces.keys)[':access_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys[':access_key'].$get(args, options))
}

export async function putV2SpacesKeysAccessKey(
  args: InferRequestType<(typeof client.v2.spaces.keys)[':access_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys[':access_key'].$put(args, options))
}

export async function deleteV2SpacesKeysAccessKey(
  args: InferRequestType<(typeof client.v2.spaces.keys)[':access_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys[':access_key'].$delete(args, options))
}

export async function patchV2SpacesKeysAccessKey(
  args: InferRequestType<(typeof client.v2.spaces.keys)[':access_key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.spaces.keys[':access_key'].$patch(args, options))
}

export async function getV2Tags(
  args: InferRequestType<typeof client.v2.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags.$get(args, options))
}

export async function postV2Tags(
  args: InferRequestType<typeof client.v2.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags.$post(args, options))
}

export async function getV2TagsTagId(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].$get(args, options))
}

export async function deleteV2TagsTagId(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].$delete(args, options))
}

export async function postV2TagsTagIdResources(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].resources.$post(args, options))
}

export async function deleteV2TagsTagIdResources(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].resources.$delete(args, options))
}

export async function getV2VectorDatabases(
  args: InferRequestType<(typeof client.v2)['vector-databases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'].$get(args, options))
}

export async function postV2VectorDatabases(
  args: InferRequestType<(typeof client.v2)['vector-databases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'].$post(args, options))
}

export async function getV2VectorDatabasesId(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].$get(args, options))
}

export async function putV2VectorDatabasesId(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].$put(args, options))
}

export async function deleteV2VectorDatabasesId(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].$delete(args, options))
}

export async function getV2VectorDatabasesIdBackups(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].backups.$get(args, options))
}

export async function getV2VectorDatabasesIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.v2)['vector-databases'][':id']['backups'][':backup_id']['restore']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['vector-databases'][':id'].backups[':backup_id'].restore.$get(args, options),
  )
}

export async function postV2VectorDatabasesIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.v2)['vector-databases'][':id']['backups'][':backup_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['vector-databases'][':id'].backups[':backup_id'].restore.$post(args, options),
  )
}

export async function getV2VectorDatabasesIdCredentials(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].credentials.$get(args, options))
}

export async function postV2VectorDatabasesIdResize(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].resize.$post(args, options))
}

export async function putV2VectorDatabasesIdTags(
  args: InferRequestType<(typeof client.v2)['vector-databases'][':id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['vector-databases'][':id'].tags.$put(args, options))
}

export async function getV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$get(args, options))
}

export async function postV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$post(args, options))
}

export async function deleteV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$delete(args, options))
}

export async function postV2VolumesActions(
  args: InferRequestType<typeof client.v2.volumes.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.actions.$post(args, options))
}

export async function getV2VolumesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$get(args, options))
}

export async function deleteV2VolumesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$delete(args, options))
}

export async function getV2VolumesVolumeId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].$get(args, options))
}

export async function deleteV2VolumesVolumeId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].$delete(args, options))
}

export async function getV2VolumesVolumeIdActions(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].actions.$get(args, options))
}

export async function postV2VolumesVolumeIdActions(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].actions.$post(args, options))
}

export async function getV2VolumesVolumeIdActionsActionId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.volumes[':volume_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2VolumesVolumeIdSnapshots(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].snapshots.$get(args, options))
}

export async function postV2VolumesVolumeIdSnapshots(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].snapshots.$post(args, options))
}

export async function getV2Vpcs(
  args: InferRequestType<typeof client.v2.vpcs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs.$get(args, options))
}

export async function postV2Vpcs(
  args: InferRequestType<typeof client.v2.vpcs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs.$post(args, options))
}

export async function getV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$get(args, options))
}

export async function putV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$put(args, options))
}

export async function deleteV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$delete(args, options))
}

export async function patchV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$patch(args, options))
}

export async function getV2VpcsVpcIdMembers(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].members.$get(args, options))
}

export async function getV2VpcsVpcIdPeerings(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['peerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].peerings.$get(args, options))
}

export async function postV2VpcsVpcIdPeerings(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['peerings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].peerings.$post(args, options))
}

export async function patchV2VpcsVpcIdPeeringsVpcPeeringId(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_id']['peerings'][':vpc_peering_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_id'].peerings[':vpc_peering_id'].$patch(args, options),
  )
}

export async function getV2VpcsVpcUuidRoutes(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_uuid']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_uuid'].routes.$get(args, options))
}

export async function getV2VpcsVpcUuidSubnets(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_uuid']['subnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_uuid'].subnets.$get(args, options))
}

export async function postV2VpcsVpcUuidSubnets(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_uuid']['subnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_uuid'].subnets.$post(args, options))
}

export async function getV2VpcsVpcUuidSubnetsSubnetUuid(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].$get(args, options),
  )
}

export async function deleteV2VpcsVpcUuidSubnetsSubnetUuid(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].$delete(args, options),
  )
}

export async function patchV2VpcsVpcUuidSubnetsSubnetUuid(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].$patch(args, options),
  )
}

export async function getV2VpcsVpcUuidSubnetsSubnetUuidMembers(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].members.$get(args, options),
  )
}

export async function getV2VpcsVpcUuidSubnetsSubnetUuidRoutes(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['routes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].routes.$get(args, options),
  )
}

export async function postV2VpcsVpcUuidSubnetsSubnetUuidRoutes(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['routes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].routes.$post(args, options),
  )
}

export async function deleteV2VpcsVpcUuidSubnetsSubnetUuidRoutesRouteUuid(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['routes'][':route_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].routes[':route_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV2VpcsVpcUuidSubnetsSubnetUuidRoutesRouteUuid(
  args: InferRequestType<
    (typeof client.v2.vpcs)[':vpc_uuid']['subnets'][':subnet_uuid']['routes'][':route_uuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.vpcs[':vpc_uuid'].subnets[':subnet_uuid'].routes[':route_uuid'].$patch(args, options),
  )
}

export async function getV2VpcPeerings(
  args: InferRequestType<typeof client.v2.vpc_peerings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_peerings.$get(args, options))
}

export async function postV2VpcPeerings(
  args: InferRequestType<typeof client.v2.vpc_peerings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_peerings.$post(args, options))
}

export async function getV2VpcPeeringsVpcPeeringId(
  args: InferRequestType<(typeof client.v2.vpc_peerings)[':vpc_peering_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_peerings[':vpc_peering_id'].$get(args, options))
}

export async function deleteV2VpcPeeringsVpcPeeringId(
  args: InferRequestType<(typeof client.v2.vpc_peerings)[':vpc_peering_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_peerings[':vpc_peering_id'].$delete(args, options))
}

export async function patchV2VpcPeeringsVpcPeeringId(
  args: InferRequestType<(typeof client.v2.vpc_peerings)[':vpc_peering_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_peerings[':vpc_peering_id'].$patch(args, options))
}

export async function getV2VpcNatGateways(
  args: InferRequestType<typeof client.v2.vpc_nat_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_nat_gateways.$get(args, options))
}

export async function postV2VpcNatGateways(
  args: InferRequestType<typeof client.v2.vpc_nat_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_nat_gateways.$post(args, options))
}

export async function getV2VpcNatGatewaysId(
  args: InferRequestType<(typeof client.v2.vpc_nat_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_nat_gateways[':id'].$get(args, options))
}

export async function putV2VpcNatGatewaysId(
  args: InferRequestType<(typeof client.v2.vpc_nat_gateways)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_nat_gateways[':id'].$put(args, options))
}

export async function deleteV2VpcNatGatewaysId(
  args: InferRequestType<(typeof client.v2.vpc_nat_gateways)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpc_nat_gateways[':id'].$delete(args, options))
}

export async function getV2UptimeChecks(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks.$get(args, options))
}

export async function postV2UptimeChecks(
  args: InferRequestType<typeof client.v2.uptime.checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks.$post(args, options))
}

export async function getV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$get(args, options))
}

export async function putV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$put(args, options))
}

export async function deleteV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$delete(args, options))
}

export async function getV2UptimeChecksCheckIdState(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].state.$get(args, options))
}

export async function getV2UptimeChecksCheckIdAlerts(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].alerts.$get(args, options))
}

export async function postV2UptimeChecksCheckIdAlerts(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].alerts.$post(args, options))
}

export async function getV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(args, options),
  )
}

export async function putV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$put(args, options),
  )
}

export async function deleteV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$delete(args, options),
  )
}

export async function getV2GenAiAgents(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents.$get(args, options))
}

export async function postV2GenAiAgents(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents.$post(args, options))
}

export async function getV2GenAiAgentsAgentUuidApiKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':agent_uuid']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':agent_uuid'].api_keys.$get(args, options))
}

export async function postV2GenAiAgentsAgentUuidApiKeys(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['api_keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].api_keys.$post(args, options),
  )
}

export async function putV2GenAiAgentsAgentUuidApiKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['api_keys'][':api_key_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].api_keys[':api_key_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiAgentsAgentUuidApiKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['api_keys'][':api_key_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].api_keys[':api_key_uuid'].$delete(args, options),
  )
}

export async function putV2GenAiAgentsAgentUuidApiKeysApiKeyUuidRegenerate(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['api_keys'][':api_key_uuid']['regenerate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].api_keys[':api_key_uuid'].regenerate.$put(
      args,
      options,
    ),
  )
}

export async function postV2GenAiAgentsAgentUuidFunctions(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['functions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].functions.$post(args, options),
  )
}

export async function putV2GenAiAgentsAgentUuidFunctionsFunctionUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['functions'][':function_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].functions[':function_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiAgentsAgentUuidFunctionsFunctionUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['functions'][':function_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].functions[':function_uuid'].$delete(args, options),
  )
}

export async function postV2GenAiAgentsAgentUuidGuardrails(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['guardrails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].guardrails.$post(args, options),
  )
}

export async function deleteV2GenAiAgentsAgentUuidGuardrailsGuardrailUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['guardrails'][':guardrail_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].guardrails[':guardrail_uuid'].$delete(args, options),
  )
}

export async function postV2GenAiAgentsAgentUuidKnowledgeBases(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['knowledge_bases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].knowledge_bases.$post(args, options),
  )
}

export async function postV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['knowledge_bases'][':knowledge_base_uuid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].knowledge_bases[':knowledge_base_uuid'].$post(
      args,
      options,
    ),
  )
}

export async function deleteV2GenAiAgentsAgentUuidKnowledgeBasesKnowledgeBaseUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':agent_uuid']['knowledge_bases'][':knowledge_base_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':agent_uuid'].knowledge_bases[':knowledge_base_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function putV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':parent_agent_uuid']['child_agents'][':child_agent_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':parent_agent_uuid'].child_agents[':child_agent_uuid'].$put(
      args,
      options,
    ),
  )
}

export async function postV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':parent_agent_uuid']['child_agents'][':child_agent_uuid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':parent_agent_uuid'].child_agents[':child_agent_uuid'].$post(
      args,
      options,
    ),
  )
}

export async function deleteV2GenAiAgentsParentAgentUuidChildAgentsChildAgentUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':parent_agent_uuid']['child_agents'][':child_agent_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':parent_agent_uuid'].child_agents[':child_agent_uuid'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2GenAiAgentsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].$get(args, options))
}

export async function putV2GenAiAgentsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].$put(args, options))
}

export async function deleteV2GenAiAgentsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].$delete(args, options))
}

export async function getV2GenAiAgentsUuidChildAgents(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['child_agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].child_agents.$get(args, options))
}

export async function putV2GenAiAgentsUuidDeploymentVisibility(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['agents'][':uuid']['deployment_visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].agents[':uuid'].deployment_visibility.$put(args, options),
  )
}

export async function getV2GenAiAgentsUuidUsage(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].usage.$get(args, options))
}

export async function getV2GenAiAgentsUuidVersions(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].versions.$get(args, options))
}

export async function putV2GenAiAgentsUuidVersions(
  args: InferRequestType<(typeof client.v2)['gen-ai']['agents'][':uuid']['versions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].agents[':uuid'].versions.$put(args, options))
}

export async function getV2GenAiAnthropicKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['anthropic']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].anthropic.keys.$get(args, options))
}

export async function postV2GenAiAnthropicKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['anthropic']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].anthropic.keys.$post(args, options))
}

export async function getV2GenAiAnthropicKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['anthropic']['keys'][':api_key_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].anthropic.keys[':api_key_uuid'].$get(args, options),
  )
}

export async function putV2GenAiAnthropicKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['anthropic']['keys'][':api_key_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].anthropic.keys[':api_key_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiAnthropicKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['anthropic']['keys'][':api_key_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].anthropic.keys[':api_key_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiAnthropicKeysUuidAgents(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['anthropic']['keys'][':uuid']['agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].anthropic.keys[':uuid'].agents.$get(args, options))
}

export async function getV2GenAiCustomModels(
  args: InferRequestType<(typeof client.v2)['gen-ai']['custom_models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].custom_models.$get(args, options))
}

export async function postV2GenAiCustomModelsImport(
  args: InferRequestType<(typeof client.v2)['gen-ai']['custom_models']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].custom_models.import.$post(args, options))
}

export async function getV2GenAiCustomModelsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['custom_models'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].custom_models[':uuid'].$get(args, options))
}

export async function deleteV2GenAiCustomModelsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['custom_models'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].custom_models[':uuid'].$delete(args, options))
}

export async function patchV2GenAiCustomModelsUuidMetadata(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['custom_models'][':uuid']['metadata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].custom_models[':uuid'].metadata.$patch(args, options),
  )
}

export async function getV2GenAiEvaluationDatasets(
  args: InferRequestType<(typeof client.v2)['gen-ai']['evaluation_datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].evaluation_datasets.$get(args, options))
}

export async function postV2GenAiEvaluationDatasets(
  args: InferRequestType<(typeof client.v2)['gen-ai']['evaluation_datasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].evaluation_datasets.$post(args, options))
}

export async function postV2GenAiEvaluationDatasetsFileUploadPresignedUrls(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_datasets']['file_upload_presigned_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_datasets.file_upload_presigned_urls.$post(args, options),
  )
}

export async function deleteV2GenAiEvaluationDatasetsDatasetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_datasets'][':dataset_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_datasets[':dataset_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiEvaluationDatasetsDatasetUuidDownloadUrl(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_datasets'][':dataset_uuid']['download_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_datasets[':dataset_uuid'].download_url.$get(args, options),
  )
}

export async function getV2GenAiEvaluationMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['gen-ai'].evaluation_metrics.$get(undefined, options))
}

export async function postV2GenAiCustomEvaluationMetrics(
  args: InferRequestType<(typeof client.v2)['gen-ai']['custom_evaluation_metrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].custom_evaluation_metrics.$post(args, options))
}

export async function putV2GenAiCustomEvaluationMetricsMetricUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['custom_evaluation_metrics'][':metric_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].custom_evaluation_metrics[':metric_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiCustomEvaluationMetricsMetricUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['custom_evaluation_metrics'][':metric_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].custom_evaluation_metrics[':metric_uuid'].$delete(args, options),
  )
}

export async function postV2GenAiEvaluationRuns(
  args: InferRequestType<(typeof client.v2)['gen-ai']['evaluation_runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].evaluation_runs.$post(args, options))
}

export async function getV2GenAiEvaluationRunsEvaluationRunUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_runs'][':evaluation_run_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_runs[':evaluation_run_uuid'].$get(args, options),
  )
}

export async function getV2GenAiEvaluationRunsEvaluationRunUuidResults(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_runs'][':evaluation_run_uuid']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_runs[':evaluation_run_uuid'].results.$get(args, options),
  )
}

export async function getV2GenAiEvaluationRunsEvaluationRunUuidResultsPromptId(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_runs'][':evaluation_run_uuid']['results'][':prompt_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_runs[':evaluation_run_uuid'].results[':prompt_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV2GenAiEvaluationTestCases(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['gen-ai'].evaluation_test_cases.$get(undefined, options))
}

export async function postV2GenAiEvaluationTestCases(
  args: InferRequestType<(typeof client.v2)['gen-ai']['evaluation_test_cases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].evaluation_test_cases.$post(args, options))
}

export async function getV2GenAiEvaluationTestCasesEvaluationTestCaseUuidEvaluationRuns(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_test_cases'][':evaluation_test_case_uuid']['evaluation_runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_test_cases[':evaluation_test_case_uuid'].evaluation_runs.$get(
      args,
      options,
    ),
  )
}

export async function getV2GenAiEvaluationTestCasesTestCaseUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_test_cases'][':test_case_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_test_cases[':test_case_uuid'].$get(args, options),
  )
}

export async function putV2GenAiEvaluationTestCasesTestCaseUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['evaluation_test_cases'][':test_case_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].evaluation_test_cases[':test_case_uuid'].$put(args, options),
  )
}

export async function getV2GenAiIndexingJobs(
  args: InferRequestType<(typeof client.v2)['gen-ai']['indexing_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].indexing_jobs.$get(args, options))
}

export async function postV2GenAiIndexingJobs(
  args: InferRequestType<(typeof client.v2)['gen-ai']['indexing_jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].indexing_jobs.$post(args, options))
}

export async function getV2GenAiIndexingJobsIndexingJobUuidDataSources(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['indexing_jobs'][':indexing_job_uuid']['data_sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].indexing_jobs[':indexing_job_uuid'].data_sources.$get(args, options),
  )
}

export async function getV2GenAiIndexingJobsIndexingJobUuidDetailsSignedUrl(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['indexing_jobs'][':indexing_job_uuid']['details_signed_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].indexing_jobs[':indexing_job_uuid'].details_signed_url.$get(args, options),
  )
}

export async function getV2GenAiIndexingJobsUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['indexing_jobs'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].indexing_jobs[':uuid'].$get(args, options))
}

export async function putV2GenAiIndexingJobsUuidCancel(
  args: InferRequestType<(typeof client.v2)['gen-ai']['indexing_jobs'][':uuid']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].indexing_jobs[':uuid'].cancel.$put(args, options))
}

export async function getV2GenAiKnowledgeBases(
  args: InferRequestType<(typeof client.v2)['gen-ai']['knowledge_bases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].knowledge_bases.$get(args, options))
}

export async function postV2GenAiKnowledgeBases(
  args: InferRequestType<(typeof client.v2)['gen-ai']['knowledge_bases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].knowledge_bases.$post(args, options))
}

export async function postV2GenAiKnowledgeBasesDataSourcesFileUploadPresignedUrls(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases']['data_sources']['file_upload_presigned_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases.data_sources.file_upload_presigned_urls.$post(
      args,
      options,
    ),
  )
}

export async function getV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSources(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases'][':knowledge_base_uuid']['data_sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases[':knowledge_base_uuid'].data_sources.$get(args, options),
  )
}

export async function postV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSources(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases'][':knowledge_base_uuid']['data_sources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases[':knowledge_base_uuid'].data_sources.$post(args, options),
  )
}

export async function putV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases'][':knowledge_base_uuid']['data_sources'][':data_source_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases[':knowledge_base_uuid'].data_sources[
      ':data_source_uuid'
    ].$put(args, options),
  )
}

export async function deleteV2GenAiKnowledgeBasesKnowledgeBaseUuidDataSourcesDataSourceUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases'][':knowledge_base_uuid']['data_sources'][':data_source_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases[':knowledge_base_uuid'].data_sources[
      ':data_source_uuid'
    ].$delete(args, options),
  )
}

export async function getV2GenAiKnowledgeBasesKnowledgeBaseUuidIndexingJobs(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['knowledge_bases'][':knowledge_base_uuid']['indexing_jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].knowledge_bases[':knowledge_base_uuid'].indexing_jobs.$get(args, options),
  )
}

export async function getV2GenAiKnowledgeBasesUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['knowledge_bases'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].knowledge_bases[':uuid'].$get(args, options))
}

export async function putV2GenAiKnowledgeBasesUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['knowledge_bases'][':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].knowledge_bases[':uuid'].$put(args, options))
}

export async function deleteV2GenAiKnowledgeBasesUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['knowledge_bases'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].knowledge_bases[':uuid'].$delete(args, options))
}

export async function postV2GenAiModelEvaluationDatasetsFileUploadPresignedUrls(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation']['datasets']['file_upload_presigned_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation.datasets.file_upload_presigned_urls.$post(args, options),
  )
}

export async function getV2GenAiModelEvaluationMetrics(
  args: InferRequestType<(typeof client.v2)['gen-ai']['model_evaluation_metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].model_evaluation_metrics.$get(args, options))
}

export async function getV2GenAiModelEvaluationPresets(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['gen-ai'].model_evaluation_presets.$get(undefined, options))
}

export async function getV2GenAiModelEvaluationPresetsEvalPresetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_presets'][':eval_preset_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_presets[':eval_preset_uuid'].$get(args, options),
  )
}

export async function deleteV2GenAiModelEvaluationPresetsEvalPresetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_presets'][':eval_preset_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_presets[':eval_preset_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiModelEvaluationRuns(
  args: InferRequestType<(typeof client.v2)['gen-ai']['model_evaluation_runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].model_evaluation_runs.$get(args, options))
}

export async function postV2GenAiModelEvaluationRuns(
  args: InferRequestType<(typeof client.v2)['gen-ai']['model_evaluation_runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].model_evaluation_runs.$post(args, options))
}

export async function getV2GenAiModelEvaluationRunsEvalRunUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_runs'][':eval_run_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_runs[':eval_run_uuid'].$get(args, options),
  )
}

export async function deleteV2GenAiModelEvaluationRunsEvalRunUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_runs'][':eval_run_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_runs[':eval_run_uuid'].$delete(args, options),
  )
}

export async function patchV2GenAiModelEvaluationRunsEvalRunUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_runs'][':eval_run_uuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_runs[':eval_run_uuid'].$patch(args, options),
  )
}

export async function putV2GenAiModelEvaluationRunsEvalRunUuidCancel(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_runs'][':eval_run_uuid']['cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_runs[':eval_run_uuid'].cancel.$put(args, options),
  )
}

export async function getV2GenAiModelEvaluationRunsEvalRunUuidResultsDownloadUrl(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['model_evaluation_runs'][':eval_run_uuid']['results']['download_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].model_evaluation_runs[':eval_run_uuid'].results.download_url.$get(
      args,
      options,
    ),
  )
}

export async function getV2GenAiModels(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.$get(args, options))
}

export async function getV2GenAiModelsApiKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.api_keys.$get(args, options))
}

export async function postV2GenAiModelsApiKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['api_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.api_keys.$post(args, options))
}

export async function putV2GenAiModelsApiKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['models']['api_keys'][':api_key_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].models.api_keys[':api_key_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiModelsApiKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['models']['api_keys'][':api_key_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].models.api_keys[':api_key_uuid'].$delete(args, options),
  )
}

export async function putV2GenAiModelsApiKeysApiKeyUuidRegenerate(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['models']['api_keys'][':api_key_uuid']['regenerate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].models.api_keys[':api_key_uuid'].regenerate.$put(args, options),
  )
}

export async function getV2GenAiModelsCatalog(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['catalog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.catalog.$get(args, options))
}

export async function getV2GenAiModelsCatalogId(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['catalog'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.catalog[':id'].$get(args, options))
}

export async function getV2GenAiModelsCatalogV2(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['catalog_v2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.catalog_v2.$get(args, options))
}

export async function getV2GenAiModelsCatalogV2Id(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['catalog_v2'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.catalog_v2[':id'].$get(args, options))
}

export async function getV2GenAiModelsRouters(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers.$get(args, options))
}

export async function postV2GenAiModelsRouters(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers.$post(args, options))
}

export async function getV2GenAiModelsRoutersPresets(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers.presets.$get(args, options))
}

export async function getV2GenAiModelsRoutersTasksPresets(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['models']['routers']['tasks']['presets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers.tasks.presets.$get(args, options))
}

export async function getV2GenAiModelsRoutersUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers[':uuid'].$get(args, options))
}

export async function putV2GenAiModelsRoutersUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers'][':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers[':uuid'].$put(args, options))
}

export async function deleteV2GenAiModelsRoutersUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['models']['routers'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].models.routers[':uuid'].$delete(args, options))
}

export async function postV2GenAiOauth2DropboxTokens(
  args: InferRequestType<(typeof client.v2)['gen-ai']['oauth2']['dropbox']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].oauth2.dropbox.tokens.$post(args, options))
}

export async function getV2GenAiOauth2Url(
  args: InferRequestType<(typeof client.v2)['gen-ai']['oauth2']['url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].oauth2.url.$get(args, options))
}

export async function getV2GenAiOpenaiKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['openai']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].openai.keys.$get(args, options))
}

export async function postV2GenAiOpenaiKeys(
  args: InferRequestType<(typeof client.v2)['gen-ai']['openai']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].openai.keys.$post(args, options))
}

export async function getV2GenAiOpenaiKeysApiKeyUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['openai']['keys'][':api_key_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].openai.keys[':api_key_uuid'].$get(args, options))
}

export async function putV2GenAiOpenaiKeysApiKeyUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['openai']['keys'][':api_key_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].openai.keys[':api_key_uuid'].$put(args, options))
}

export async function deleteV2GenAiOpenaiKeysApiKeyUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['openai']['keys'][':api_key_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].openai.keys[':api_key_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiOpenaiKeysUuidAgents(
  args: InferRequestType<(typeof client.v2)['gen-ai']['openai']['keys'][':uuid']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].openai.keys[':uuid'].agents.$get(args, options))
}

export async function getV2GenAiRegions(
  args: InferRequestType<(typeof client.v2)['gen-ai']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].regions.$get(args, options))
}

export async function getV2GenAiScenarioLibrary(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scenario_library']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].scenario_library.$get(args, options))
}

export async function postV2GenAiScenarioLibraryLibraryScenarioUuidCreateScenarioSet(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_library'][':library_scenario_uuid']['create_scenario_set']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_library[':library_scenario_uuid'].create_scenario_set.$post(
      args,
      options,
    ),
  )
}

export async function getV2GenAiScenarioLibraryLibraryScenarioUuidScenarios(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_library'][':library_scenario_uuid']['scenarios']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_library[':library_scenario_uuid'].scenarios.$get(args, options),
  )
}

export async function getV2GenAiScenarioSets(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scenario_sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].scenario_sets.$get(args, options))
}

export async function postV2GenAiScenarioSets(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scenario_sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].scenario_sets.$post(args, options))
}

export async function postV2GenAiScenarioSetsFileUploadPresignedUrls(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets']['file_upload_presigned_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets.file_upload_presigned_urls.$post(args, options),
  )
}

export async function postV2GenAiScenarioSetsGenerate(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scenario_sets']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].scenario_sets.generate.$post(args, options))
}

export async function getV2GenAiScenarioSetsScenarioSetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].$get(args, options),
  )
}

export async function putV2GenAiScenarioSetsScenarioSetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].$put(args, options),
  )
}

export async function deleteV2GenAiScenarioSetsScenarioSetUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiScenarioSetsScenarioSetUuidDownloadUrl(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['download_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].download_url.$get(args, options),
  )
}

export async function postV2GenAiScenarioSetsScenarioSetUuidDuplicate(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].duplicate.$post(args, options),
  )
}

export async function getV2GenAiScenarioSetsScenarioSetUuidScenarios(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scenario_sets'][':scenario_set_uuid']['scenarios']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].scenario_sets[':scenario_set_uuid'].scenarios.$get(args, options),
  )
}

export async function postV2GenAiScheduledIndexing(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scheduled-indexing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai']['scheduled-indexing'].$post(args, options))
}

export async function getV2GenAiScheduledIndexingKnowledgeBaseKnowledgeBaseUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['scheduled-indexing']['knowledge-base'][':knowledge_base_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai']['scheduled-indexing']['knowledge-base'][':knowledge_base_uuid'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2GenAiScheduledIndexingUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['scheduled-indexing'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai']['scheduled-indexing'][':uuid'].$delete(args, options),
  )
}

export async function getV2GenAiSimulationRuns(
  args: InferRequestType<(typeof client.v2)['gen-ai']['simulation_runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].simulation_runs.$get(args, options))
}

export async function postV2GenAiSimulationRuns(
  args: InferRequestType<(typeof client.v2)['gen-ai']['simulation_runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].simulation_runs.$post(args, options))
}

export async function getV2GenAiSimulationRunsRunUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].simulation_runs[':run_uuid'].$get(args, options))
}

export async function putV2GenAiSimulationRunsRunUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].simulation_runs[':run_uuid'].$put(args, options))
}

export async function deleteV2GenAiSimulationRunsRunUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].$delete(args, options),
  )
}

export async function patchV2GenAiSimulationRunsRunUuidCancel(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['cancel']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].cancel.$patch(args, options),
  )
}

export async function getV2GenAiSimulationRunsRunUuidEpisodes(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['episodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].episodes.$get(args, options),
  )
}

export async function getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuid(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['episodes'][':episode_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].episodes[':episode_uuid'].$get(args, options),
  )
}

export async function getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectory(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['episodes'][':episode_uuid']['trajectory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].episodes[':episode_uuid'].trajectory.$get(
      args,
      options,
    ),
  )
}

export async function getV2GenAiSimulationRunsRunUuidEpisodesEpisodeUuidTrajectoryUrl(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['simulation_runs'][':run_uuid']['episodes'][':episode_uuid']['trajectory_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].simulation_runs[':run_uuid'].episodes[':episode_uuid'].trajectory_url.$get(
      args,
      options,
    ),
  )
}

export async function getV2GenAiWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.v2['gen-ai'].workspaces.$get(undefined, options))
}

export async function postV2GenAiWorkspaces(
  args: InferRequestType<(typeof client.v2)['gen-ai']['workspaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].workspaces.$post(args, options))
}

export async function getV2GenAiWorkspacesWorkspaceUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].workspaces[':workspace_uuid'].$get(args, options))
}

export async function putV2GenAiWorkspacesWorkspaceUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gen-ai'].workspaces[':workspace_uuid'].$put(args, options))
}

export async function deleteV2GenAiWorkspacesWorkspaceUuid(
  args: InferRequestType<(typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].workspaces[':workspace_uuid'].$delete(args, options),
  )
}

export async function getV2GenAiWorkspacesWorkspaceUuidAgents(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['agents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].workspaces[':workspace_uuid'].agents.$get(args, options),
  )
}

export async function putV2GenAiWorkspacesWorkspaceUuidAgents(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['agents']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].workspaces[':workspace_uuid'].agents.$put(args, options),
  )
}

export async function getV2GenAiWorkspacesWorkspaceUuidEvaluationTestCases(
  args: InferRequestType<
    (typeof client.v2)['gen-ai']['workspaces'][':workspace_uuid']['evaluation_test_cases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gen-ai'].workspaces[':workspace_uuid'].evaluation_test_cases.$get(args, options),
  )
}

export async function postV1ChatCompletions(
  args: InferRequestType<typeof client.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.completions.$post(args, options))
}

export async function postV1Messages(
  args: InferRequestType<typeof client.v1.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.$post(args, options))
}

export async function postV1Embeddings(
  args: InferRequestType<typeof client.v1.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embeddings.$post(args, options))
}

export async function postApiV1ChatCompletions(
  args: InferRequestType<typeof client.api.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chat.completions.$post(args, options))
}

export async function postV1ImagesGenerations(
  args: InferRequestType<typeof client.v1.images.generations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.images.generations.$post(args, options))
}

export async function getV1Models(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.models.$get(undefined, options))
}

export async function postV1Systemone(
  args: InferRequestType<typeof client.v1.systemone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.systemone.$post(args, options))
}

export async function postV1Responses(
  args: InferRequestType<typeof client.v1.responses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.responses.$post(args, options))
}

export async function postV1AsyncInvoke(
  args: InferRequestType<(typeof client.v1)['async-invoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['async-invoke'].$post(args, options))
}

export async function postV1AudioSpeech(
  args: InferRequestType<typeof client.v1.audio.speech.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audio.speech.$post(args, options))
}

export async function postV1Videos(
  args: InferRequestType<typeof client.v1.videos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.videos.$post(args, options))
}

export async function getV1VideosVideoId(
  args: InferRequestType<(typeof client.v1.videos)[':video_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.videos[':video_id'].$get(args, options))
}

export async function getV1VideosVideoIdContent(
  args: InferRequestType<(typeof client.v1.videos)[':video_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.videos[':video_id'].content.$get(args, options))
}

export async function postV1BatchesFiles(
  args: InferRequestType<typeof client.v1.batches.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.files.$post(args, options))
}

export async function putUploadUrl(
  args: InferRequestType<(typeof client)['<upload_url>']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['<upload_url>'].$put(args, options))
}

export async function getV1Batches(
  args: InferRequestType<typeof client.v1.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$get(args, options))
}

export async function postV1Batches(
  args: InferRequestType<typeof client.v1.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$post(args, options))
}

export async function getV1BatchesBatchId(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].$get(args, options))
}

export async function getV1BatchesBatchIdResults(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].results.$get(args, options))
}

export async function postV1BatchesBatchIdCancel(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].cancel.$post(args, options))
}
