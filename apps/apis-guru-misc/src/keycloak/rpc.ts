import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getIdName(
  args: InferRequestType<(typeof client)[':id']['name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].name.$get(args, options))
}

export async function getRealm(
  args: InferRequestType<(typeof client)[':realm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].$get(args, options))
}

export async function putRealm(
  args: InferRequestType<(typeof client)[':realm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].$put(args, options))
}

export async function deleteRealm(
  args: InferRequestType<(typeof client)[':realm']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].$delete(args, options))
}

export async function getRealmAdminEvents(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['admin-events'].$get(args, options))
}

export async function deleteRealmAdminEvents(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['admin-events'].$delete(args, options))
}

export async function deleteRealmAttackDetectionBruteForceUsers(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['attack-detection']['brute-force'].users.$delete(args, options),
  )
}

export async function getRealmAttackDetectionBruteForceUsersUserId(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(args, options),
  )
}

export async function deleteRealmAttackDetectionBruteForceUsersUserId(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['attack-detection']['brute-force'].users[':userId'].$delete(args, options),
  )
}

export async function getRealmAuthenticationAuthenticatorProviders(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['authenticator-providers'].$get(args, options),
  )
}

export async function getRealmAuthenticationClientAuthenticatorProviders(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['client-authenticator-providers'].$get(args, options),
  )
}

export async function getRealmAuthenticationConfigDescriptionProviderId(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['config-description'][':providerId'].$get(args, options),
  )
}

export async function getRealmAuthenticationConfigId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.config[':id'].$get(args, options))
}

export async function putRealmAuthenticationConfigId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.config[':id'].$put(args, options))
}

export async function deleteRealmAuthenticationConfigId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.config[':id'].$delete(args, options))
}

export async function postRealmAuthenticationExecutions(
  args: InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.executions.$post(args, options))
}

export async function getRealmAuthenticationExecutionsExecutionId(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.executions[':executionId'].$get(args, options),
  )
}

export async function deleteRealmAuthenticationExecutionsExecutionId(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.executions[':executionId'].$delete(args, options),
  )
}

export async function postRealmAuthenticationExecutionsExecutionIdConfig(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.executions[':executionId'].config.$post(args, options),
  )
}

export async function postRealmAuthenticationExecutionsExecutionIdLowerPriority(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.executions[':executionId']['lower-priority'].$post(
      args,
      options,
    ),
  )
}

export async function postRealmAuthenticationExecutionsExecutionIdRaisePriority(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.executions[':executionId']['raise-priority'].$post(
      args,
      options,
    ),
  )
}

export async function getRealmAuthenticationFlows(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.flows.$get(args, options))
}

export async function postRealmAuthenticationFlows(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.flows.$post(args, options))
}

export async function postRealmAuthenticationFlowsFlowAliasCopy(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.flows[':flowAlias'].copy.$post(args, options),
  )
}

export async function getRealmAuthenticationFlowsFlowAliasExecutions(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.flows[':flowAlias'].executions.$get(args, options),
  )
}

export async function putRealmAuthenticationFlowsFlowAliasExecutions(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.flows[':flowAlias'].executions.$put(args, options),
  )
}

export async function postRealmAuthenticationFlowsFlowAliasExecutionsExecution(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.flows[':flowAlias'].executions.execution.$post(args, options),
  )
}

export async function postRealmAuthenticationFlowsFlowAliasExecutionsFlow(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication.flows[':flowAlias'].executions.flow.$post(args, options),
  )
}

export async function getRealmAuthenticationFlowsId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.flows[':id'].$get(args, options))
}

export async function putRealmAuthenticationFlowsId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.flows[':id'].$put(args, options))
}

export async function deleteRealmAuthenticationFlowsId(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication.flows[':id'].$delete(args, options))
}

export async function getRealmAuthenticationFormActionProviders(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['form-action-providers'].$get(args, options),
  )
}

export async function getRealmAuthenticationFormProviders(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].authentication['form-providers'].$get(args, options))
}

export async function getRealmAuthenticationPerClientConfigDescription(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['per-client-config-description'].$get(args, options),
  )
}

export async function postRealmAuthenticationRegisterRequiredAction(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['register-required-action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['register-required-action'].$post(args, options),
  )
}

export async function getRealmAuthenticationRequiredActions(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'].$get(args, options),
  )
}

export async function getRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'][':alias'].$get(args, options),
  )
}

export async function putRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'][':alias'].$put(args, options),
  )
}

export async function deleteRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'][':alias'].$delete(args, options),
  )
}

export async function postRealmAuthenticationRequiredActionsAliasLowerPriority(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'][':alias']['lower-priority'].$post(
      args,
      options,
    ),
  )
}

export async function postRealmAuthenticationRequiredActionsAliasRaisePriority(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['required-actions'][':alias']['raise-priority'].$post(
      args,
      options,
    ),
  )
}

export async function getRealmAuthenticationUnregisteredRequiredActions(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].authentication['unregistered-required-actions'].$get(args, options),
  )
}

export async function postRealmClearKeysCache(
  args: InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['clear-keys-cache'].$post(args, options))
}

export async function postRealmClearRealmCache(
  args: InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['clear-realm-cache'].$post(args, options))
}

export async function postRealmClearUserCache(
  args: InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['clear-user-cache'].$post(args, options))
}

export async function postRealmClientDescriptionConverter(
  args: InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-description-converter'].$post(args, options))
}

export async function getRealmClientRegistrationPolicyProviders(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-registration-policy'].providers.$get(args, options),
  )
}

export async function getRealmClientScopes(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-scopes'].$get(args, options))
}

export async function postRealmClientScopes(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-scopes'].$post(args, options))
}

export async function getRealmClientScopesId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(
      args,
      options,
    ),
  )
}

export async function putRealmClientScopesId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRealmClientScopesId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$delete(
      args,
      options,
    ),
  )
}

export async function getRealmClientScopesId(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-scopes'][':id'].$get(args, options))
}

export async function putRealmClientScopesId(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-scopes'][':id'].$put(args, options))
}

export async function deleteRealmClientScopesId(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-scopes'][':id'].$delete(args, options))
}

export async function postRealmClientScopesIdProtocolMappersAddModels(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['protocol-mappers']['add-models'].$post(args, options),
  )
}

export async function getRealmClientScopesIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(args, options),
  )
}

export async function postRealmClientScopesIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$post(args, options),
  )
}

export async function getRealmClientScopesIdProtocolMappersProtocolProtocol(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientScopesIdScopeMappings(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].$get(args, options),
  )
}

export async function getRealmClientScopesIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(
      args,
      options,
    ),
  )
}

export async function postRealmClientScopesIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$post(
      args,
      options,
    ),
  )
}

export async function deleteRealmClientScopesIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$delete(
      args,
      options,
    ),
  )
}

export async function getRealmClientScopesIdScopeMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].available.$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientScopesIdScopeMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].composite.$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientScopesIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(args, options),
  )
}

export async function postRealmClientScopesIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$post(args, options),
  )
}

export async function deleteRealmClientScopesIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$delete(args, options),
  )
}

export async function getRealmClientScopesIdScopeMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(args, options),
  )
}

export async function getRealmClientScopesIdScopeMappingsRealmComposite(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(args, options),
  )
}

export async function getRealmClientSessionStats(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['client-session-stats'].$get(args, options))
}

export async function getRealmClients(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients.$get(args, options))
}

export async function postRealmClients(
  args: InferRequestType<(typeof client)[':realm']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients.$post(args, options))
}

export async function getRealmClientsInitialAccess(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['clients-initial-access'].$get(args, options))
}

export async function postRealmClientsInitialAccess(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['clients-initial-access'].$post(args, options))
}

export async function deleteRealmClientsInitialAccessId(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['clients-initial-access'][':id'].$delete(args, options),
  )
}

export async function getRealmClientsId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(args, options),
  )
}

export async function putRealmClientsId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$put(args, options),
  )
}

export async function deleteRealmClientsId1ProtocolMappersModelsId2(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$delete(args, options),
  )
}

export async function getRealmClientsId(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].$get(args, options))
}

export async function putRealmClientsId(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].$put(args, options))
}

export async function deleteRealmClientsId(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].$delete(args, options))
}

export async function getRealmClientsIdCertificatesAttr(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr'].$get(args, options),
  )
}

export async function postRealmClientsIdCertificatesAttrDownload(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr'].download.$post(args, options),
  )
}

export async function postRealmClientsIdCertificatesAttrGenerate(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr'].generate.$post(args, options),
  )
}

export async function postRealmClientsIdCertificatesAttrGenerateAndDownload(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr']['generate-and-download'].$post(
      args,
      options,
    ),
  )
}

export async function postRealmClientsIdCertificatesAttrUpload(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr'].upload.$post(args, options),
  )
}

export async function postRealmClientsIdCertificatesAttrUploadCertificate(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].certificates[':attr']['upload-certificate'].$post(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdClientSecret(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id']['client-secret'].$get(args, options))
}

export async function postRealmClientsIdClientSecret(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id']['client-secret'].$post(args, options))
}

export async function getRealmClientsIdDefaultClientScopes(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['default-client-scopes'].$get(args, options),
  )
}

export async function putRealmClientsIdDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$put(args, options),
  )
}

export async function deleteRealmClientsIdDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$delete(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdEvaluateScopesGenerateExampleAccessToken(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdEvaluateScopesProtocolMappers(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(args, options),
  )
}

export async function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
      ':roleContainerId'
    ].granted.$get(args, options),
  )
}

export async function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
      'not-granted'
    ].$get(args, options),
  )
}

export async function getRealmClientsIdInstallationProvidersProviderId(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].installation.providers[':providerId'].$get(args, options),
  )
}

export async function getRealmClientsIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].management.permissions.$get(args, options),
  )
}

export async function putRealmClientsIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].management.permissions.$put(args, options),
  )
}

export async function postRealmClientsIdNodes(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].nodes.$post(args, options))
}

export async function deleteRealmClientsIdNodesNode(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].nodes[':node'].$delete(args, options))
}

export async function getRealmClientsIdOfflineSessionCount(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['offline-session-count'].$get(args, options),
  )
}

export async function getRealmClientsIdOfflineSessions(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['offline-sessions'].$get(args, options),
  )
}

export async function getRealmClientsIdOptionalClientScopes(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['optional-client-scopes'].$get(args, options),
  )
}

export async function putRealmClientsIdOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$put(args, options),
  )
}

export async function deleteRealmClientsIdOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$delete(
      args,
      options,
    ),
  )
}

export async function postRealmClientsIdProtocolMappersAddModels(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['protocol-mappers']['add-models'].$post(args, options),
  )
}

export async function getRealmClientsIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['protocol-mappers'].models.$get(args, options),
  )
}

export async function postRealmClientsIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['protocol-mappers'].models.$post(args, options),
  )
}

export async function getRealmClientsIdProtocolMappersProtocolProtocol(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(args, options),
  )
}

export async function postRealmClientsIdPushRevocation(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['push-revocation'].$post(args, options),
  )
}

export async function postRealmClientsIdRegistrationAccessToken(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['registration-access-token'].$post(args, options),
  )
}

export async function getRealmClientsIdRoles(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].roles.$get(args, options))
}

export async function postRealmClientsIdRoles(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id'].roles.$post(args, options))
}

export async function getRealmClientsIdRolesRoleName(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].$get(args, options),
  )
}

export async function putRealmClientsIdRolesRoleName(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].$put(args, options),
  )
}

export async function deleteRealmClientsIdRolesRoleName(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].$delete(args, options),
  )
}

export async function getRealmClientsIdRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].composites.$get(args, options),
  )
}

export async function postRealmClientsIdRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].composites.$post(args, options),
  )
}

export async function deleteRealmClientsIdRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].composites.$delete(args, options),
  )
}

export async function getRealmClientsIdRolesRoleNameCompositesClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdRolesRoleNameCompositesRealm(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(args, options),
  )
}

export async function getRealmClientsIdRolesRoleNameGroups(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].groups.$get(args, options),
  )
}

export async function getRealmClientsIdRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(args, options),
  )
}

export async function putRealmClientsIdRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$put(args, options),
  )
}

export async function getRealmClientsIdRolesRoleNameUsers(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id'].roles[':role-name'].users.$get(args, options),
  )
}

export async function getRealmClientsIdScopeMappings(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id']['scope-mappings'].$get(args, options))
}

export async function getRealmClientsIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(args, options),
  )
}

export async function postRealmClientsIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$post(args, options),
  )
}

export async function deleteRealmClientsIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$delete(args, options),
  )
}

export async function getRealmClientsIdScopeMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdScopeMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(
      args,
      options,
    ),
  )
}

export async function getRealmClientsIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].realm.$get(args, options),
  )
}

export async function postRealmClientsIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].realm.$post(args, options),
  )
}

export async function deleteRealmClientsIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].realm.$delete(args, options),
  )
}

export async function getRealmClientsIdScopeMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(args, options),
  )
}

export async function getRealmClientsIdScopeMappingsRealmComposite(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(args, options),
  )
}

export async function getRealmClientsIdServiceAccountUser(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['service-account-user'].$get(args, options),
  )
}

export async function getRealmClientsIdSessionCount(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id']['session-count'].$get(args, options))
}

export async function getRealmClientsIdTestNodesAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].clients[':id']['test-nodes-available'].$get(args, options),
  )
}

export async function getRealmClientsIdUserSessions(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].clients[':id']['user-sessions'].$get(args, options))
}

export async function getRealmComponents(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].components.$get(args, options))
}

export async function postRealmComponents(
  args: InferRequestType<(typeof client)[':realm']['components']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].components.$post(args, options))
}

export async function getRealmComponentsId(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].components[':id'].$get(args, options))
}

export async function putRealmComponentsId(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].components[':id'].$put(args, options))
}

export async function deleteRealmComponentsId(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].components[':id'].$delete(args, options))
}

export async function getRealmComponentsIdSubComponentTypes(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].components[':id']['sub-component-types'].$get(args, options),
  )
}

export async function getRealmCredentialRegistrators(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['credential-registrators'].$get(args, options))
}

export async function getRealmDefaultDefaultClientScopes(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['default-default-client-scopes'].$get(args, options))
}

export async function putRealmDefaultDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['default-default-client-scopes'][':clientScopeId'].$put(args, options),
  )
}

export async function deleteRealmDefaultDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['default-default-client-scopes'][':clientScopeId'].$delete(args, options),
  )
}

export async function getRealmDefaultGroups(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['default-groups'].$get(args, options))
}

export async function putRealmDefaultGroupsGroupId(
  args: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['default-groups'][':groupId'].$put(args, options))
}

export async function deleteRealmDefaultGroupsGroupId(
  args: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['default-groups'][':groupId'].$delete(args, options))
}

export async function getRealmDefaultOptionalClientScopes(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['default-optional-client-scopes'].$get(args, options))
}

export async function putRealmDefaultOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['default-optional-client-scopes'][':clientScopeId'].$put(args, options),
  )
}

export async function deleteRealmDefaultOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['default-optional-client-scopes'][':clientScopeId'].$delete(args, options),
  )
}

export async function getRealmEvents(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].events.$get(args, options))
}

export async function deleteRealmEvents(
  args: InferRequestType<(typeof client)[':realm']['events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].events.$delete(args, options))
}

export async function getRealmEventsConfig(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].events.config.$get(args, options))
}

export async function putRealmEventsConfig(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].events.config.$put(args, options))
}

export async function getRealmGroupByPathPath(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['group-by-path'][':path'].$get(args, options))
}

export async function getRealmGroups(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups.$get(args, options))
}

export async function postRealmGroups(
  args: InferRequestType<(typeof client)[':realm']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups.$post(args, options))
}

export async function getRealmGroupsCount(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups.count.$get(args, options))
}

export async function getRealmGroupsId(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id'].$get(args, options))
}

export async function putRealmGroupsId(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id'].$put(args, options))
}

export async function deleteRealmGroupsId(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id'].$delete(args, options))
}

export async function postRealmGroupsIdChildren(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id'].children.$post(args, options))
}

export async function getRealmGroupsIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id'].management.permissions.$get(args, options),
  )
}

export async function putRealmGroupsIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id'].management.permissions.$put(args, options),
  )
}

export async function getRealmGroupsIdMembers(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id'].members.$get(args, options))
}

export async function getRealmGroupsIdRoleMappings(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].groups[':id']['role-mappings'].$get(args, options))
}

export async function getRealmGroupsIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(args, options),
  )
}

export async function postRealmGroupsIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].clients[':client'].$post(args, options),
  )
}

export async function deleteRealmGroupsIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].clients[':client'].$delete(args, options),
  )
}

export async function getRealmGroupsIdRoleMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(
      args,
      options,
    ),
  )
}

export async function getRealmGroupsIdRoleMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(
      args,
      options,
    ),
  )
}

export async function getRealmGroupsIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].realm.$get(args, options),
  )
}

export async function postRealmGroupsIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].realm.$post(args, options),
  )
}

export async function deleteRealmGroupsIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].realm.$delete(args, options),
  )
}

export async function getRealmGroupsIdRoleMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].realm.available.$get(args, options),
  )
}

export async function getRealmGroupsIdRoleMappingsRealmComposite(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(args, options),
  )
}

export async function postRealmIdentityProviderImportConfig(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider']['import-config'].$post(args, options),
  )
}

export async function getRealmIdentityProviderInstances(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['identity-provider'].instances.$get(args, options))
}

export async function postRealmIdentityProviderInstances(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['identity-provider'].instances.$post(args, options))
}

export async function getRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].$get(args, options),
  )
}

export async function putRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].$put(args, options),
  )
}

export async function deleteRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].$delete(args, options),
  )
}

export async function getRealmIdentityProviderInstancesAliasExport(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].export.$get(args, options),
  )
}

export async function getRealmIdentityProviderInstancesAliasManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
      args,
      options,
    ),
  )
}

export async function putRealmIdentityProviderInstancesAliasManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].management.permissions.$put(
      args,
      options,
    ),
  )
}

export async function getRealmIdentityProviderInstancesAliasMapperTypes(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(args, options),
  )
}

export async function getRealmIdentityProviderInstancesAliasMappers(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].mappers.$get(args, options),
  )
}

export async function postRealmIdentityProviderInstancesAliasMappers(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].mappers.$post(args, options),
  )
}

export async function getRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(args, options),
  )
}

export async function putRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$put(args, options),
  )
}

export async function deleteRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$delete(args, options),
  )
}

export async function getRealmIdentityProviderProvidersProviderId(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['identity-provider'].providers[':provider_id'].$get(args, options),
  )
}

export async function getRealmKeys(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].keys.$get(args, options))
}

export async function postRealmLogoutAll(
  args: InferRequestType<(typeof client)[':realm']['logout-all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['logout-all'].$post(args, options))
}

export async function postRealmPartialExport(
  args: InferRequestType<(typeof client)[':realm']['partial-export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['partial-export'].$post(args, options))
}

export async function postRealmPartialImport(
  args: InferRequestType<(typeof client)[':realm']['partialImport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].partialImport.$post(args, options))
}

export async function postRealmPushRevocation(
  args: InferRequestType<(typeof client)[':realm']['push-revocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['push-revocation'].$post(args, options))
}

export async function getRealmRoles(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles.$get(args, options))
}

export async function postRealmRoles(
  args: InferRequestType<(typeof client)[':realm']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles.$post(args, options))
}

export async function getRealmRolesByIdRoleId(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['roles-by-id'][':role-id'].$get(args, options))
}

export async function putRealmRolesByIdRoleId(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['roles-by-id'][':role-id'].$put(args, options))
}

export async function deleteRealmRolesByIdRoleId(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['roles-by-id'][':role-id'].$delete(args, options))
}

export async function getRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].composites.$get(args, options),
  )
}

export async function postRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].composites.$post(args, options),
  )
}

export async function deleteRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].composites.$delete(args, options),
  )
}

export async function getRealmRolesByIdRoleIdCompositesClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(args, options),
  )
}

export async function getRealmRolesByIdRoleIdCompositesRealm(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(args, options),
  )
}

export async function getRealmRolesByIdRoleIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(args, options),
  )
}

export async function putRealmRolesByIdRoleIdManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['roles-by-id'][':role-id'].management.permissions.$put(args, options),
  )
}

export async function getRealmRolesRoleName(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].$get(args, options))
}

export async function putRealmRolesRoleName(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].$put(args, options))
}

export async function deleteRealmRolesRoleName(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].$delete(args, options))
}

export async function getRealmRolesRoleNameComposites(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].composites.$get(args, options))
}

export async function postRealmRolesRoleNameComposites(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].composites.$post(args, options))
}

export async function deleteRealmRolesRoleNameComposites(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].composites.$delete(args, options))
}

export async function getRealmRolesRoleNameCompositesClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].roles[':role-name'].composites.clients[':client'].$get(args, options),
  )
}

export async function getRealmRolesRoleNameCompositesRealm(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].roles[':role-name'].composites.realm.$get(args, options),
  )
}

export async function getRealmRolesRoleNameGroups(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].groups.$get(args, options))
}

export async function getRealmRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].roles[':role-name'].management.permissions.$get(args, options),
  )
}

export async function putRealmRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].roles[':role-name'].management.permissions.$put(args, options),
  )
}

export async function getRealmRolesRoleNameUsers(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].roles[':role-name'].users.$get(args, options))
}

export async function deleteRealmSessionsSession(
  args: InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].sessions[':session'].$delete(args, options))
}

export async function postRealmTestLDAPConnection(
  args: InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].testLDAPConnection.$post(args, options))
}

export async function postRealmTestSMTPConnection(
  args: InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].testSMTPConnection.$post(args, options))
}

export async function getRealmUserStorageIdName(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['user-storage'][':id'].name.$get(args, options))
}

export async function postRealmUserStorageIdRemoveImportedUsers(
  args: InferRequestType<
    (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['user-storage'][':id']['remove-imported-users'].$post(args, options),
  )
}

export async function postRealmUserStorageIdSync(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['user-storage'][':id'].sync.$post(args, options))
}

export async function postRealmUserStorageIdUnlinkUsers(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['user-storage'][':id']['unlink-users'].$post(args, options),
  )
}

export async function postRealmUserStorageParentIdMappersIdSync(
  args: InferRequestType<
    (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm']['user-storage'][':parentId'].mappers[':id'].sync.$post(args, options),
  )
}

export async function getRealmUsers(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users.$get(args, options))
}

export async function postRealmUsers(
  args: InferRequestType<(typeof client)[':realm']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users.$post(args, options))
}

export async function getRealmUsersManagementPermissions(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['users-management-permissions'].$get(args, options))
}

export async function putRealmUsersManagementPermissions(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm']['users-management-permissions'].$put(args, options))
}

export async function getRealmUsersCount(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users.count.$get(args, options))
}

export async function getRealmUsersId(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].$get(args, options))
}

export async function putRealmUsersId(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].$put(args, options))
}

export async function deleteRealmUsersId(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].$delete(args, options))
}

export async function getRealmUsersIdConfiguredUserStorageCredentialTypes(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(args, options),
  )
}

export async function getRealmUsersIdConsents(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].consents.$get(args, options))
}

export async function deleteRealmUsersIdConsentsClient(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].consents[':client'].$delete(args, options),
  )
}

export async function getRealmUsersIdCredentials(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].credentials.$get(args, options))
}

export async function deleteRealmUsersIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].credentials[':credentialId'].$delete(args, options),
  )
}

export async function postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].credentials[':credentialId'].moveAfter[
      ':newPreviousCredentialId'
    ].$post(args, options),
  )
}

export async function postRealmUsersIdCredentialsCredentialIdMoveToFirst(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].credentials[':credentialId'].moveToFirst.$post(args, options),
  )
}

export async function putRealmUsersIdCredentialsCredentialIdUserLabel(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].credentials[':credentialId'].userLabel.$put(args, options),
  )
}

export async function putRealmUsersIdDisableCredentialTypes(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['disable-credential-types'].$put(args, options),
  )
}

export async function putRealmUsersIdExecuteActionsEmail(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['execute-actions-email'].$put(args, options),
  )
}

export async function getRealmUsersIdFederatedIdentity(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['federated-identity'].$get(args, options),
  )
}

export async function postRealmUsersIdFederatedIdentityProvider(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['federated-identity'][':provider'].$post(args, options),
  )
}

export async function deleteRealmUsersIdFederatedIdentityProvider(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['federated-identity'][':provider'].$delete(args, options),
  )
}

export async function getRealmUsersIdGroups(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].groups.$get(args, options))
}

export async function getRealmUsersIdGroupsCount(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].groups.count.$get(args, options))
}

export async function putRealmUsersIdGroupsGroupId(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].groups[':groupId'].$put(args, options))
}

export async function deleteRealmUsersIdGroupsGroupId(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id'].groups[':groupId'].$delete(args, options),
  )
}

export async function postRealmUsersIdImpersonation(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].impersonation.$post(args, options))
}

export async function postRealmUsersIdLogout(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].logout.$post(args, options))
}

export async function getRealmUsersIdOfflineSessionsClientId(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(args, options),
  )
}

export async function putRealmUsersIdResetPassword(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id']['reset-password'].$put(args, options))
}

export async function getRealmUsersIdRoleMappings(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id']['role-mappings'].$get(args, options))
}

export async function getRealmUsersIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(args, options),
  )
}

export async function postRealmUsersIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].clients[':client'].$post(args, options),
  )
}

export async function deleteRealmUsersIdRoleMappingsClientsClient(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].clients[':client'].$delete(args, options),
  )
}

export async function getRealmUsersIdRoleMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(args, options),
  )
}

export async function getRealmUsersIdRoleMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(args, options),
  )
}

export async function getRealmUsersIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].realm.$get(args, options),
  )
}

export async function postRealmUsersIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].realm.$post(args, options),
  )
}

export async function deleteRealmUsersIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].realm.$delete(args, options),
  )
}

export async function getRealmUsersIdRoleMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].realm.available.$get(args, options),
  )
}

export async function getRealmUsersIdRoleMappingsRealmComposite(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':realm'].users[':id']['role-mappings'].realm.composite.$get(args, options),
  )
}

export async function putRealmUsersIdSendVerifyEmail(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id']['send-verify-email'].$put(args, options))
}

export async function getRealmUsersIdSessions(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':realm'].users[':id'].sessions.$get(args, options))
}
