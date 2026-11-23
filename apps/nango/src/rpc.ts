import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.providers.$get(undefined, options))
}

export async function getProvidersProvider(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':provider'].$get(args, options))
}

export async function getProvidersProviderTemplates(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':provider'].templates.$get(args, options))
}

export async function getIntegrations(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.$get(undefined, options))
}

export async function postIntegrations(
  args: InferRequestType<typeof client.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.$post(args, options))
}

export async function postIntegrationsQuickstart(
  args: InferRequestType<typeof client.integrations.quickstart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.quickstart.$post(args, options))
}

export async function getIntegrationsUniqueKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':uniqueKey'].$get(args, options))
}

export async function deleteIntegrationsUniqueKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':uniqueKey'].$delete(args, options))
}

export async function patchIntegrationsUniqueKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':uniqueKey'].$patch(args, options))
}

export async function getIntegrationsUniqueKeyFunctions(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':uniqueKey'].functions.$get(args, options))
}

export async function getIntegrationsUniqueKeyFunctionsName(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations[':uniqueKey'].functions[':name'].$get(args, options),
  )
}

export async function deleteIntegrationsUniqueKeyFunctionsName(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations[':uniqueKey'].functions[':name'].$delete(args, options),
  )
}

export async function getIntegrationsUniqueKeyFunctionsNameCode(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations[':uniqueKey'].functions[':name'].code.$get(args, options),
  )
}

export async function getConnection(
  args: InferRequestType<typeof client.connection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection.$get(args, options))
}

export async function postConnection(
  args: InferRequestType<typeof client.connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection.$post(args, options))
}

export async function getConnectionConnectionId(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection[':connectionId'].$get(args, options))
}

export async function deleteConnectionConnectionId(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection[':connectionId'].$delete(args, options))
}

export async function postConnectionMetadata(
  args: InferRequestType<typeof client.connection.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection.metadata.$post(args, options))
}

export async function patchConnectionMetadata(
  args: InferRequestType<typeof client.connection.metadata.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection.metadata.$patch(args, options))
}

export async function postConnectionConnectionIdMetadata(
  args: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection[':connectionId'].metadata.$post(args, options))
}

export async function patchConnectionConnectionIdMetadata(
  args: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connection[':connectionId'].metadata.$patch(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connectionId'].$get(args, options))
}

export async function deleteConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connectionId'].$delete(args, options))
}

export async function patchConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connectionId'].$patch(args, options))
}

export async function postConnectionsMetadata(
  args: InferRequestType<typeof client.connections.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.metadata.$post(args, options))
}

export async function patchConnectionsMetadata(
  args: InferRequestType<typeof client.connections.metadata.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.metadata.$patch(args, options))
}

export async function getScriptsConfig(
  args: InferRequestType<typeof client.scripts.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.config.$get(args, options))
}

export async function postFunctionsCompile(
  args: InferRequestType<typeof client.functions.compile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.compile.$post(args, options))
}

export async function postFunctionsDryruns(
  args: InferRequestType<typeof client.functions.dryruns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.dryruns.$post(args, options))
}

export async function getFunctionsDryrunsId(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.dryruns[':id'].$get(args, options))
}

export async function postFunctionsDeployments(
  args: InferRequestType<typeof client.functions.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.deployments.$post(args, options))
}

export async function getFunctionsDeploymentsId(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.deployments[':id'].$get(args, options))
}

export async function getRecords(
  args: InferRequestType<typeof client.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records.$get(args, options))
}

export async function patchRecordsPrune(
  args: InferRequestType<typeof client.records.prune.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records.prune.$patch(args, options))
}

export async function postSyncTrigger(
  args: InferRequestType<typeof client.sync.trigger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.trigger.$post(args, options))
}

export async function postSyncStart(
  args: InferRequestType<typeof client.sync.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.start.$post(args, options))
}

export async function postSyncPause(
  args: InferRequestType<typeof client.sync.pause.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.pause.$post(args, options))
}

export async function getSyncStatus(
  args: InferRequestType<typeof client.sync.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.status.$get(args, options))
}

export async function postSyncNameVariantVariant(
  args: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync[':name'].variant[':variant'].$post(args, options))
}

export async function deleteSyncNameVariantVariant(
  args: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync[':name'].variant[':variant'].$delete(args, options))
}

export async function getActionActionId(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action[':actionId'].$get(args, options))
}

export async function putSyncUpdateConnectionFrequency(
  args: InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync['update-connection-frequency'].$put(args, options))
}

export async function postConnectionsConnectionIdToolsNameCalls(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].tools[':name'].calls.$post(args, options),
  )
}

export async function postActionTrigger(
  args: InferRequestType<typeof client.action.trigger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.trigger.$post(args, options))
}

export async function getEnvironments(
  args: InferRequestType<typeof client.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$get(args, options))
}

export async function postEnvironments(
  args: InferRequestType<typeof client.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$post(args, options))
}

export async function getEnvironmentsEnvironmentUuid(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentUuid'].$get(args, options))
}

export async function deleteEnvironmentsEnvironmentUuid(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentUuid'].$delete(args, options))
}

export async function patchEnvironmentsEnvironmentUuid(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentUuid'].$patch(args, options))
}

export async function getEnvironmentsEnvironmentUuidApiKeys(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.environments[':environmentUuid']['api-keys'].$get(args, options),
  )
}

export async function postEnvironmentsEnvironmentUuidApiKeys(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.environments[':environmentUuid']['api-keys'].$post(args, options),
  )
}

export async function getEnvironmentsEnvironmentUuidApiKeysKeyUuid(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.environments[':environmentUuid']['api-keys'][':keyUuid'].$get(args, options),
  )
}

export async function deleteEnvironmentsEnvironmentUuidApiKeysKeyUuid(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.environments[':environmentUuid']['api-keys'][':keyUuid'].$delete(args, options),
  )
}

export async function patchEnvironmentsEnvironmentUuidApiKeysKeyUuid(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.environments[':environmentUuid']['api-keys'][':keyUuid'].$patch(args, options),
  )
}

export async function getEnvironmentVariables(options?: ClientRequestOptions) {
  return await parseResponse(client['environment-variables'].$get(undefined, options))
}

export async function postEnvironmentWebhookSigningKeyRotate(
  args: InferRequestType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment['webhook-signing-key'].rotate.$post(args, options))
}

export async function getProxyAnyPath(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy[':anyPath'].$get(args, options))
}

export async function putProxyAnyPath(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy[':anyPath'].$put(args, options))
}

export async function postProxyAnyPath(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy[':anyPath'].$post(args, options))
}

export async function deleteProxyAnyPath(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy[':anyPath'].$delete(args, options))
}

export async function patchProxyAnyPath(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.proxy[':anyPath'].$patch(args, options))
}

export async function postConnectSessions(
  args: InferRequestType<typeof client.connect.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.sessions.$post(args, options))
}

export async function postConnectSessionsReconnect(
  args: InferRequestType<typeof client.connect.sessions.reconnect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.sessions.reconnect.$post(args, options))
}

export async function getConnectSession(options?: ClientRequestOptions) {
  return await parseResponse(client.connect.session.$get(undefined, options))
}

export async function deleteConnectSession(options?: ClientRequestOptions) {
  return await parseResponse(client.connect.session.$delete(undefined, options))
}
