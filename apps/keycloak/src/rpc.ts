import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminRealms(
  args: InferRequestType<typeof client.admin.realms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms.$get(args, options))
}

export async function postAdminRealms(
  args: InferRequestType<typeof client.admin.realms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms.$post(args, options))
}

export async function getAdminRealmsRealm(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].$get(args, options))
}

export async function putAdminRealmsRealm(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].$put(args, options))
}

export async function deleteAdminRealmsRealm(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].$delete(args, options))
}

export async function getAdminRealmsRealmAdminEvents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['admin-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['admin-events'].$get(args, options))
}

export async function deleteAdminRealmsRealmAdminEvents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['admin-events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['admin-events'].$delete(args, options))
}

export async function deleteAdminRealmsRealmAttackDetectionBruteForceUsers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['attack-detection']['brute-force']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['attack-detection']['brute-force'].users.$delete(args, options),
  )
}

export async function getAdminRealmsRealmAttackDetectionBruteForceUsersUserId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['attack-detection']['brute-force'].users[':userId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['attack-detection']['brute-force'].users[':userId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationAuthenticatorProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['authenticator-providers'].$get(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationClientAuthenticatorProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['client-authenticator-providers'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmAuthenticationConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.config.$post(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationConfigDescriptionProviderId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['config-description'][':providerId'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationConfigId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['config'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.config[':id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmAuthenticationConfigId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['config'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.config[':id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmAuthenticationConfigId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['config'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.config[':id'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationExecutions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions.$post(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId'].$get(args, options),
  )
}

export async function deleteAdminRealmsRealmAuthenticationExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId'].config.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['config'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId'].config[':id'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriority(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId']['lower-priority'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriority(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.executions[':executionId']['raise-priority'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationFlows(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['authentication']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].authentication.flows.$get(args, options))
}

export async function postAdminRealmsRealmAuthenticationFlows(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows.$post(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationFlowsFlowAliasCopy(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':flowAlias'].copy.$post(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':flowAlias'].executions.$get(args, options),
  )
}

export async function putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':flowAlias'].executions.$put(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecution(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':flowAlias'].executions.execution.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlow(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':flowAlias'].executions.flow.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationFlowsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmAuthenticationFlowsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmAuthenticationFlowsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['flows'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication.flows[':id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationFormActionProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['form-action-providers'].$get(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationFormProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['form-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['form-providers'].$get(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationPerClientConfigDescription(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['per-client-config-description'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmAuthenticationRegisterRequiredAction(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['register-required-action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['register-required-action'].$post(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationRequiredActions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'].$get(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].$get(args, options),
  )
}

export async function putAdminRealmsRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmAuthenticationRequiredActionsAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationRequiredActionsAliasConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].config.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmAuthenticationRequiredActionsAliasConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].config.$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'].config.$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescription(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['config-description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'][
      'config-description'
    ].$get(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriority(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'][
      'lower-priority'
    ].$post(args, options),
  )
}

export async function postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriority(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['required-actions'][':alias'][
      'raise-priority'
    ].$post(args, options),
  )
}

export async function getAdminRealmsRealmAuthenticationUnregisteredRequiredActions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].authentication['unregistered-required-actions'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientDescriptionConverter(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-description-converter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-description-converter'].$post(args, options),
  )
}

export async function getAdminRealmsRealmClientPoliciesPolicies(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-policies']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-policies'].policies.$get(args, options),
  )
}

export async function putAdminRealmsRealmClientPoliciesPolicies(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-policies']['policies']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-policies'].policies.$put(args, options),
  )
}

export async function getAdminRealmsRealmClientPoliciesProfiles(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-policies']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-policies'].profiles.$get(args, options),
  )
}

export async function putAdminRealmsRealmClientPoliciesProfiles(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-policies']['profiles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-policies'].profiles.$put(args, options),
  )
}

export async function getAdminRealmsRealmClientRegistrationPolicyProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-registration-policy'].providers.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientScopes(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-scopes'].$get(args, options))
}

export async function postAdminRealmsRealmClientScopes(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-scopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-scopes'].$post(args, options))
}

export async function getAdminRealmsRealmClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['add-models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['protocol-mappers'][
      'add-models'
    ].$post(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'protocol-mappers'
    ].models.$get(args, options),
  )
}

export async function postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'protocol-mappers'
    ].models.$post(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['models'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['protocol-mappers'].models[
      ':id'
    ].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['models'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['protocol-mappers'].models[
      ':id'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['models'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['protocol-mappers'].models[
      ':id'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocol(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['protocol-mappers'].protocol[
      ':protocol'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id']['scope-mappings'].realm.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'scope-mappings'
    ].realm.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'scope-mappings'
    ].realm.$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'scope-mappings'
    ].realm.available.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-scopes'][':client-scope-id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-scopes'][':client-scope-id'][
      'scope-mappings'
    ].realm.composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientSessionStats(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-session-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-session-stats'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplates(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-templates'].$get(args, options))
}

export async function postAdminRealmsRealmClientTemplates(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-templates'].$post(args, options))
}

export async function getAdminRealmsRealmClientTemplatesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientTemplatesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientTemplatesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['add-models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['protocol-mappers'][
      'add-models'
    ].$post(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].models.$get(args, options),
  )
}

export async function postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].models.$post(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['models'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].models[':id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['models'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].models[':id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['models'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].models[':id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocol(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'protocol-mappers'
    ].protocol[':protocol'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id']['scope-mappings'].clients[
      ':client'
    ].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'scope-mappings'
    ].realm.$get(args, options),
  )
}

export async function postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'scope-mappings'
    ].realm.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'scope-mappings'
    ].realm.$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'scope-mappings'
    ].realm.available.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['client-templates'][':client-scope-id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['client-templates'][':client-scope-id'][
      'scope-mappings'
    ].realm.composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientTypes(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-types'].$get(args, options))
}

export async function putAdminRealmsRealmClientTypes(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['client-types']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['client-types'].$put(args, options))
}

export async function getAdminRealmsRealmClients(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].clients.$get(args, options))
}

export async function postAdminRealmsRealmClients(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].clients.$post(args, options))
}

export async function getAdminRealmsRealmClientsInitialAccess(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients-initial-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['clients-initial-access'].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientsInitialAccess(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients-initial-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['clients-initial-access'].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsInitialAccessId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients-initial-access'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['clients-initial-access'][':id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuid(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients'][':client-uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientsClientUuid(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['clients'][':client-uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuid(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServer(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmClientsClientUuidAuthzResourceServer(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].$put(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerImport(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].import.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['permission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].permission.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['permission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].permission.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluate(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['permission']['evaluate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].permission.evaluate.$post(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['permission']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].permission.providers.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearch(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['permission']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].permission.search.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].policy.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].policy.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluate(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['policy']['evaluate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].policy.evaluate.$post(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['policy']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].policy.providers.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearch(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['policy']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].policy.search.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResource(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerResource(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearch(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].resource.search.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].attributes.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].permissions.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['resource'][':resource-id']['scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].resource[
      ':resource-id'
    ].scopes.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerScope(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidAuthzResourceServerScope(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearch(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz[
      'resource-server'
    ].scope.search.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope'][':scope-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope[
      ':scope-id'
    ].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope'][':scope-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope[
      ':scope-id'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope'][':scope-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope[
      ':scope-id'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope'][':scope-id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope[
      ':scope-id'
    ].permissions.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResources(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['scope'][':scope-id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].scope[
      ':scope-id'
    ].resources.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['authz']['resource-server']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].authz['resource-server'].settings.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidCertificatesAttr(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidCertificatesAttrDownload(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'].download.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerate(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'].generate.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownload(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['generate-and-download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'][
      'generate-and-download'
    ].$post(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidCertificatesAttrUpload(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'].upload.$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificate(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['certificates'][':attr']['upload-certificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].certificates[':attr'][
      'upload-certificate'
    ].$post(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidClientSecret(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['client-secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['client-secret'].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidClientSecret(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['client-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['client-secret'].$post(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidClientSecretRotated(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['client-secret']['rotated']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['client-secret'].rotated.$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidClientSecretRotated(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['client-secret']['rotated']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['client-secret'].rotated.$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidDefaultClientScopes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['default-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['default-client-scopes'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['default-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['default-client-scopes'][
      ':clientScopeId'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['default-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['default-client-scopes'][
      ':clientScopeId'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessToken(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes'][
      'generate-example-access-token'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdToken(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['generate-example-id-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes'][
      'generate-example-id-token'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponse(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['generate-example-saml-response']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes'][
      'generate-example-saml-response'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfo(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['generate-example-userinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes'][
      'generate-example-userinfo'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes'][
      'protocol-mappers'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGranted(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes']['scope-mappings'][
      ':roleContainerId'
    ].granted.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGranted(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['evaluate-scopes']['scope-mappings'][
      ':roleContainerId'
    ]['not-granted'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['installation']['providers'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].installation.providers[
      ':providerId'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].management.permissions.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmClientsClientUuidManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].management.permissions.$put(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidNodes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['nodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].nodes.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidNodesNode(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['nodes'][':node']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].nodes[':node'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidOfflineSessionCount(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['offline-session-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['offline-session-count'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidOfflineSessions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['offline-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['offline-sessions'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidOptionalClientScopes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['optional-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['optional-client-scopes'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['optional-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['optional-client-scopes'][
      ':clientScopeId'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['optional-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['optional-client-scopes'][
      ':clientScopeId'
    ].$delete(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidProtocolMappersAddModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['add-models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers']['add-models'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].models.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidProtocolMappersModels(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['models']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].models.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['models'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].models[':id'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmClientsClientUuidProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['models'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].models[':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['models'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].models[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocol(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['protocol-mappers'].protocol[
      ':protocol'
    ].$get(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidPushRevocation(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['push-revocation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['push-revocation'].$post(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidRegistrationAccessToken(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['registration-access-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['registration-access-token'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRoles(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles.$get(args, options),
  )
}

export async function postAdminRealmsRealmClientsClientUuidRoles(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles.$post(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleName(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].$get(args, options),
  )
}

export async function putAdminRealmsRealmClientsClientUuidRolesRoleName(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidRolesRoleName(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].composites.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['composites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].composites.$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['composites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].composites.$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuid(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['composites']['clients'][':targetClientUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].composites.clients[
      ':targetClientUuid'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].composites.realm.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].groups.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[
      ':role-name'
    ].management.permissions.$get(args, options),
  )
}

export async function putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[
      ':role-name'
    ].management.permissions.$put(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidRolesRoleNameUsers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['roles'][':role-name']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid'].roles[':role-name'].users.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].clients[':client'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['clients'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].clients[
      ':client'
    ].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['clients'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].clients[
      ':client'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].clients[
      ':client'
    ].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].clients[
      ':client'
    ].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].realm.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmClientsClientUuidScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].realm.$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].realm.$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].realm.available.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidScopeMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['scope-mappings'].realm.composite.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidServiceAccountUser(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['service-account-user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['service-account-user'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidSessionCount(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['session-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['session-count'].$get(args, options),
  )
}

export async function getAdminRealmsRealmClientsClientUuidTestNodesAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['test-nodes-available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['test-nodes-available'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmClientsClientUuidUserSessions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['clients'][':client-uuid']['user-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].clients[':client-uuid']['user-sessions'].$get(args, options),
  )
}

export async function getAdminRealmsRealmComponents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].components.$get(args, options))
}

export async function postAdminRealmsRealmComponents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['components']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].components.$post(args, options))
}

export async function getAdminRealmsRealmComponentsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['components'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].components[':id'].$get(args, options))
}

export async function putAdminRealmsRealmComponentsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['components'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].components[':id'].$put(args, options))
}

export async function deleteAdminRealmsRealmComponentsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['components'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].components[':id'].$delete(args, options))
}

export async function getAdminRealmsRealmComponentsIdSubComponentTypes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].components[':id']['sub-component-types'].$get(args, options),
  )
}

export async function getAdminRealmsRealmCredentialRegistrators(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['credential-registrators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['credential-registrators'].$get(args, options),
  )
}

export async function getAdminRealmsRealmDefaultDefaultClientScopes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-default-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-default-client-scopes'].$get(args, options),
  )
}

export async function putAdminRealmsRealmDefaultDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-default-client-scopes'][':clientScopeId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-default-client-scopes'][':clientScopeId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmDefaultGroups(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['default-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['default-groups'].$get(args, options))
}

export async function putAdminRealmsRealmDefaultGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-groups'][':groupId'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmDefaultGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-groups'][':groupId'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmDefaultOptionalClientScopes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-optional-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-optional-client-scopes'].$get(args, options),
  )
}

export async function putAdminRealmsRealmDefaultOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-optional-client-scopes'][':clientScopeId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['default-optional-client-scopes'][':clientScopeId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmEvents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].events.$get(args, options))
}

export async function deleteAdminRealmsRealmEvents(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].events.$delete(args, options))
}

export async function getAdminRealmsRealmEventsConfig(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['events']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].events.config.$get(args, options))
}

export async function putAdminRealmsRealmEventsConfig(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['events']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].events.config.$put(args, options))
}

export async function getAdminRealmsRealmGroupByPathPath(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['group-by-path'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['group-by-path'][':path'].$get(args, options),
  )
}

export async function getAdminRealmsRealmGroups(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].groups.$get(args, options))
}

export async function postAdminRealmsRealmGroups(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].groups.$post(args, options))
}

export async function getAdminRealmsRealmGroupsCount(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].groups.count.$get(args, options))
}

export async function getAdminRealmsRealmGroupsGroupId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups'][':group-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].groups[':group-id'].$get(args, options))
}

export async function putAdminRealmsRealmGroupsGroupId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups'][':group-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].groups[':group-id'].$put(args, options))
}

export async function deleteAdminRealmsRealmGroupsGroupId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['groups'][':group-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdChildren(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['children']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].children.$get(args, options),
  )
}

export async function postAdminRealmsRealmGroupsGroupIdChildren(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['children']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].children.$post(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].management.permissions.$get(args, options),
  )
}

export async function putAdminRealmsRealmGroupsGroupIdManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].management.permissions.$put(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdMembers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id'].members.$get(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].$get(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].clients[':client-id'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].clients[':client-id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].clients[
      ':client-id'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['clients'][':client-id']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].clients[
      ':client-id'
    ].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['clients'][':client-id']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].clients[
      ':client-id'
    ].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].realm.$get(args, options),
  )
}

export async function postAdminRealmsRealmGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].realm.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].realm.$delete(args, options),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].realm.available.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['groups'][':group-id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].groups[':group-id']['role-mappings'].realm.composite.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmIdentityProviderImportConfig(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['import-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider']['import-config'].$post(args, options),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstances(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances.$get(args, options),
  )
}

export async function postAdminRealmsRealmIdentityProviderInstances(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances.$post(args, options),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].$get(args, options),
  )
}

export async function putAdminRealmsRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmIdentityProviderInstancesAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasExport(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].export.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[
      ':alias'
    ].management.permissions.$get(args, options),
  )
}

export async function putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[
      ':alias'
    ].management.permissions.$put(args, options),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasMappers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].mappers.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmIdentityProviderInstancesAliasMappers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].mappers.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeys(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['instances'][':alias']['reload-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].instances[':alias']['reload-keys'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmIdentityProviderProvidersProviderId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider'].providers[':provider_id'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmIdentityProviderUploadCertificate(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['identity-provider']['upload-certificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['identity-provider']['upload-certificate'].$post(args, options),
  )
}

export async function getAdminRealmsRealmKeys(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].keys.$get(args, options))
}

export async function getAdminRealmsRealmLocalization(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['localization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].localization.$get(args, options))
}

export async function getAdminRealmsRealmLocalizationLocale(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['localization'][':locale']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'].$get(args, options),
  )
}

export async function postAdminRealmsRealmLocalizationLocale(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['localization'][':locale']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmLocalizationLocale(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['localization'][':locale']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmLocalizationLocaleKey(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['localization'][':locale'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'][':key'].$get(args, options),
  )
}

export async function putAdminRealmsRealmLocalizationLocaleKey(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['localization'][':locale'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'][':key'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmLocalizationLocaleKey(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['localization'][':locale'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].localization[':locale'][':key'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmLogoutAll(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['logout-all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['logout-all'].$post(args, options))
}

export async function getAdminRealmsRealmOrganizations(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].organizations.$get(args, options))
}

export async function postAdminRealmsRealmOrganizations(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['organizations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].organizations.$post(args, options))
}

export async function getAdminRealmsRealmOrganizationsCount(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['organizations']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].organizations.count.$get(args, options))
}

export async function getAdminRealmsRealmOrganizationsMembersMemberIdOrganizations(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations']['members'][':member-id']['organizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations.members[':member-id'].organizations.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmOrganizationsOrgId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups.$get(args, options),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups.$post(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPath(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups']['group-by-path'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups['group-by-path'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmOrganizationsOrgIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildren(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['children']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].children.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildren(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['children']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].children.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].members.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['members'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].members[
      ':userId'
    ].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'].members[
      ':userId'
    ].$delete(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].clients[':client-id'].$get(args, options),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].clients[':client-id'].$post(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['clients'][':client-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].clients[':client-id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['clients'][':client-id']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].clients[':client-id'].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['clients'][':client-id']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].clients[':client-id'].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].realm.$get(args, options),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].realm.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].realm.$delete(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].realm.available.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['groups'][':group-id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].groups[':group-id'][
      'role-mappings'
    ].realm.composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdIdentityProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdIdentityProviders(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'][':alias'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers'][':alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'][':alias'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers'][':alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'][':alias'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['identity-providers'][':alias']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id']['identity-providers'][
      ':alias'
    ].groups.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdInvitations(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].invitations.$get(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdInvitationsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['invitations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].invitations[':id'].$get(args, options),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdInvitationsId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['invitations'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].invitations[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResend(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['invitations'][':id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].invitations[':id'].resend.$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdMembers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members.$get(args, options),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdMembers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members.$post(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdMembersCount(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members.count.$get(args, options),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUser(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members']['invite-existing-user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members['invite-existing-user'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmOrganizationsOrgIdMembersInviteUser(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members']['invite-user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members['invite-user'].$post(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdMembersMemberId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members'][':member-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members[':member-id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members'][':member-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members[':member-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members'][':member-id']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members[':member-id'].groups.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipType(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members'][':member-id']['membership-type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members[':member-id'][
      'membership-type'
    ].$put(args, options),
  )
}

export async function getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizations(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['organizations'][':org-id']['members'][':member-id']['organizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].organizations[':org-id'].members[':member-id'].organizations.$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmPartialExport(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['partial-export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['partial-export'].$post(args, options))
}

export async function postAdminRealmsRealmPartialImport(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['partialImport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].partialImport.$post(args, options))
}

export async function postAdminRealmsRealmPushRevocation(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['push-revocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm']['push-revocation'].$post(args, options))
}

export async function getAdminRealmsRealmRoles(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].roles.$get(args, options))
}

export async function postAdminRealmsRealmRoles(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].roles.$post(args, options))
}

export async function getAdminRealmsRealmRolesByIdRoleId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].$get(args, options),
  )
}

export async function putAdminRealmsRealmRolesByIdRoleId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmRolesByIdRoleId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].composites.$get(args, options),
  )
}

export async function postAdminRealmsRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['composites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].composites.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmRolesByIdRoleIdComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].composites.$delete(args, options),
  )
}

export async function getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuid(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':clientUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].composites.clients[':clientUuid'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmRolesByIdRoleIdCompositesRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].composites.realm.$get(args, options),
  )
}

export async function getAdminRealmsRealmRolesByIdRoleIdManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].management.permissions.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmRolesByIdRoleIdManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['roles-by-id'][':role-id'].management.permissions.$put(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmRolesRoleName(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles'][':role-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].roles[':role-name'].$get(args, options))
}

export async function putAdminRealmsRealmRolesRoleName(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles'][':role-name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].roles[':role-name'].$put(args, options))
}

export async function deleteAdminRealmsRealmRolesRoleName(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['roles'][':role-name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].composites.$get(args, options),
  )
}

export async function postAdminRealmsRealmRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['composites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].composites.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmRolesRoleNameComposites(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['composites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].composites.$delete(args, options),
  )
}

export async function getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuid(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['composites']['clients'][':targetClientUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].composites.clients[':targetClientUuid'].$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmRolesRoleNameCompositesRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].composites.realm.$get(args, options),
  )
}

export async function getAdminRealmsRealmRolesRoleNameGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].groups.$get(args, options),
  )
}

export async function getAdminRealmsRealmRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].management.permissions.$get(args, options),
  )
}

export async function putAdminRealmsRealmRolesRoleNameManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['management']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].management.permissions.$put(args, options),
  )
}

export async function getAdminRealmsRealmRolesRoleNameUsers(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['roles'][':role-name']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].roles[':role-name'].users.$get(args, options),
  )
}

export async function deleteAdminRealmsRealmSessionsSession(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['sessions'][':session']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].sessions[':session'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmTestSMTPConnection(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['testSMTPConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].testSMTPConnection.$post(args, options))
}

export async function getAdminRealmsRealmUsers(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users.$get(args, options))
}

export async function postAdminRealmsRealmUsers(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users.$post(args, options))
}

export async function getAdminRealmsRealmUsersManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users-management-permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['users-management-permissions'].$get(args, options),
  )
}

export async function putAdminRealmsRealmUsersManagementPermissions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users-management-permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm']['users-management-permissions'].$put(args, options),
  )
}

export async function getAdminRealmsRealmUsersCount(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users.count.$get(args, options))
}

export async function getAdminRealmsRealmUsersProfile(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users.profile.$get(args, options))
}

export async function putAdminRealmsRealmUsersProfile(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users']['profile']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users.profile.$put(args, options))
}

export async function getAdminRealmsRealmUsersProfileMetadata(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users']['profile']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users.profile.metadata.$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users'][':user-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users[':user-id'].$get(args, options))
}

export async function putAdminRealmsRealmUsersUserId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users'][':user-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users[':user-id'].$put(args, options))
}

export async function deleteAdminRealmsRealmUsersUserId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['users'][':user-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].users[':user-id'].$delete(args, options))
}

export async function getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['configured-user-storage-credential-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'][
      'configured-user-storage-credential-types'
    ].$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdConsents(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['consents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].consents.$get(args, options),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdConsentsClient(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['consents'][':client']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].consents[':client'].$delete(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdCredentials(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].credentials.$get(args, options),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['credentials'][':credentialId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].credentials[':credentialId'].$delete(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].credentials[':credentialId'].moveAfter[
      ':newPreviousCredentialId'
    ].$post(args, options),
  )
}

export async function postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirst(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['credentials'][':credentialId']['moveToFirst']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].credentials[':credentialId'].moveToFirst.$post(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabel(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['credentials'][':credentialId']['userLabel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].credentials[':credentialId'].userLabel.$put(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmUsersUserIdDisableCredentialTypes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['disable-credential-types']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['disable-credential-types'].$put(args, options),
  )
}

export async function putAdminRealmsRealmUsersUserIdExecuteActionsEmail(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['execute-actions-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['execute-actions-email'].$put(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdFederatedIdentity(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['federated-identity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['federated-identity'].$get(args, options),
  )
}

export async function postAdminRealmsRealmUsersUserIdFederatedIdentityProvider(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['federated-identity'][':provider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['federated-identity'][':provider'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdFederatedIdentityProvider(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['federated-identity'][':provider']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['federated-identity'][':provider'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmUsersUserIdGroups(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].groups.$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdGroupsCount(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['groups']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].groups.count.$get(args, options),
  )
}

export async function putAdminRealmsRealmUsersUserIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].groups[':groupId'].$put(args, options),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].groups[':groupId'].$delete(args, options),
  )
}

export async function postAdminRealmsRealmUsersUserIdImpersonation(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['impersonation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].impersonation.$post(args, options),
  )
}

export async function postAdminRealmsRealmUsersUserIdLogout(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['logout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].logout.$post(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuid(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['offline-sessions'][':clientUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['offline-sessions'][':clientUuid'].$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmUsersUserIdResetPassword(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['reset-password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['reset-password'].$put(args, options),
  )
}

export async function putAdminRealmsRealmUsersUserIdResetPasswordEmail(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['reset-password-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['reset-password-email'].$put(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappings(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['clients'][':client-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].clients[':client-id'].$get(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['clients'][':client-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].clients[':client-id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['clients'][':client-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].clients[':client-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['clients'][':client-id']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].clients[
      ':client-id'
    ].available.$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['clients'][':client-id']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].clients[
      ':client-id'
    ].composite.$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].realm.$get(args, options),
  )
}

export async function postAdminRealmsRealmUsersUserIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['realm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].realm.$post(args, options),
  )
}

export async function deleteAdminRealmsRealmUsersUserIdRoleMappingsRealm(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['realm']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].realm.$delete(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailable(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].realm.available.$get(
      args,
      options,
    ),
  )
}

export async function getAdminRealmsRealmUsersUserIdRoleMappingsRealmComposite(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['role-mappings'].realm.composite.$get(
      args,
      options,
    ),
  )
}

export async function putAdminRealmsRealmUsersUserIdSendVerifyEmail(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['send-verify-email']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id']['send-verify-email'].$put(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdSessions(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].sessions.$get(args, options),
  )
}

export async function getAdminRealmsRealmUsersUserIdUnmanagedAttributes(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['users'][':user-id']['unmanagedAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].users[':user-id'].unmanagedAttributes.$get(args, options),
  )
}

export async function getAdminRealmsRealmWorkflows(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows.$get(args, options))
}

export async function postAdminRealmsRealmWorkflows(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows.$post(args, options))
}

export async function postAdminRealmsRealmWorkflowsMigrate(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows']['migrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows.migrate.$post(args, options))
}

export async function getAdminRealmsRealmWorkflowsScheduledResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['workflows']['scheduled'][':resource-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].workflows.scheduled[':resource-id'].$get(args, options),
  )
}

export async function getAdminRealmsRealmWorkflowsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows[':id'].$get(args, options))
}

export async function putAdminRealmsRealmWorkflowsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows[':id'].$put(args, options))
}

export async function deleteAdminRealmsRealmWorkflowsId(
  args: InferRequestType<(typeof client.admin.realms)[':realm']['workflows'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.realms[':realm'].workflows[':id'].$delete(args, options))
}

export async function postAdminRealmsRealmWorkflowsIdActivateTypeResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['workflows'][':id']['activate'][':type'][':resourceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].workflows[':id'].activate[':type'][':resourceId'].$post(
      args,
      options,
    ),
  )
}

export async function postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceId(
  args: InferRequestType<
    (typeof client.admin.realms)[':realm']['workflows'][':id']['deactivate'][':type'][':resourceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.realms[':realm'].workflows[':id'].deactivate[':type'][':resourceId'].$post(
      args,
      options,
    ),
  )
}
