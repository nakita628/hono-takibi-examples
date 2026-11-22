import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1AgentTelemetry(
  args: InferRequestType<typeof client.api.v1.AgentTelemetry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.AgentTelemetry.$post(args, options))
}

export async function postApiV1AgentTelemetryStandalone(
  args: InferRequestType<typeof client.api.v1.AgentTelemetry.standalone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.AgentTelemetry.standalone.$post(args, options))
}

export async function getApiV1AgentsFamily(
  args: InferRequestType<(typeof client.api.v1.Agents)[':family']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Agents[':family'].$get(args, options))
}

export async function getApiV1Environments(
  args: InferRequestType<typeof client.api.v1.Environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments.$get(args, options))
}

export async function postApiV1Environments(
  args: InferRequestType<typeof client.api.v1.Environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments.$post(args, options))
}

export async function getApiV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments[':environmentId'].$get(args, options))
}

export async function deleteApiV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments[':environmentId'].$delete(args, options))
}

export async function patchApiV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments[':environmentId'].$patch(args, options))
}

export async function postApiV1EnvironmentsEnvironmentIdCallback(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['_callback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId']._callback.$post(args, options),
  )
}

export async function getApiV1EnvironmentsEnvironmentIdArchive(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].archive.$get(args, options),
  )
}

export async function postApiV1EnvironmentsEnvironmentIdArchive(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].archive.$post(args, options),
  )
}

export async function postApiV1EnvironmentsEnvironmentIdExport(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].export.$post(args, options),
  )
}

export async function patchApiV1EnvironmentsEnvironmentIdFolder(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['folder']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].folder.$patch(args, options),
  )
}

export async function getApiV1EnvironmentsEnvironmentIdHeartbeattoken(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['heartbeattoken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].heartbeattoken.$get(args, options),
  )
}

export async function postApiV1EnvironmentsEnvironmentIdNotify(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].notify.$post(args, options),
  )
}

export async function putApiV1EnvironmentsEnvironmentIdPortsPort(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].ports[':port'].$put(args, options),
  )
}

export async function deleteApiV1EnvironmentsEnvironmentIdPortsPort(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['ports'][':port']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].ports[':port'].$delete(args, options),
  )
}

export async function patchApiV1EnvironmentsEnvironmentIdRestore(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['restore']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].restore.$patch(args, options),
  )
}

export async function putApiV1EnvironmentsEnvironmentIdSecrets(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['secrets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].secrets.$put(args, options),
  )
}

export async function postApiV1EnvironmentsEnvironmentIdShutdown(
  args: InferRequestType<
    (typeof client.api.v1.Environments)[':environmentId']['shutdown']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].shutdown.$post(args, options),
  )
}

export async function postApiV1EnvironmentsEnvironmentIdStart(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].start.$post(args, options),
  )
}

export async function getApiV1EnvironmentsEnvironmentIdState(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Environments[':environmentId'].state.$get(args, options))
}

export async function getApiV1EnvironmentsEnvironmentIdUpdates(
  args: InferRequestType<(typeof client.api.v1.Environments)[':environmentId']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Environments[':environmentId'].updates.$get(args, options),
  )
}

export async function postApiV1GenevaActionsBillingResend(
  args: InferRequestType<typeof client.api.v1.GenevaActions.Billing.resend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.GenevaActions.Billing.resend.$post(args, options))
}

export async function getApiV1GenevaActionsBillingEnvironmentId(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Billing)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Billing[':environmentId'].$get(args, options),
  )
}

export async function getApiV1GenevaActionsBillingEnvironmentIdStateChanges(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$get(args, options),
  )
}

export async function postApiV1GenevaActionsBillingEnvironmentIdStateChanges(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Billing)[':environmentId']['state-changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Billing[':environmentId']['state-changes'].$post(args, options),
  )
}

export async function postApiV1GenevaActionsConfigurationTarget(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Configuration)[':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Configuration[':target'].$post(args, options),
  )
}

export async function getApiV1GenevaActionsConfigurationTargetKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Configuration[':target'][':key'].$get(args, options),
  )
}

export async function deleteApiV1GenevaActionsConfigurationTargetKey(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Configuration)[':target'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Configuration[':target'][':key'].$delete(args, options),
  )
}

export async function getApiV1GenevaActionsEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].$get(args, options),
  )
}

export async function deleteApiV1GenevaActionsEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].$delete(args, options),
  )
}

export async function putApiV1GenevaActionsEnvironmentsEnvironmentIdArchive(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].archive.$put(args, options),
  )
}

export async function getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlob(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['archived_storage_sas'][':targetBlob']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].archived_storage_sas[
      ':targetBlob'
    ].$get(args, options),
  )
}

export async function putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdown(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['shutdown']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].shutdown.$put(args, options),
  )
}

export async function postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogs(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Environments)[':environmentId']['upload']['running']['vm']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Environments[':environmentId'].upload.running.vm.logs.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1GenevaActionsPoolsChangeResourceDeletionSetting(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Pools)['change-resource-deletion-setting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Pools['change-resource-deletion-setting'].$post(args, options),
  )
}

export async function postApiV1GenevaActionsPoolsPoolCodeRotatePool(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Pools)[':poolCode']['rotate-pool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Pools[':poolCode']['rotate-pool'].$post(args, options),
  )
}

export async function postApiV1GenevaActionsPoolsTarget(
  args: InferRequestType<(typeof client.api.v1.GenevaActions.Pools)[':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.GenevaActions.Pools[':target'].$post(args, options))
}

export async function postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettings(
  args: InferRequestType<
    typeof client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Prebuilds.pools.createorupdatesettings.$post(args, options),
  )
}

export async function postApiV1GenevaActionsPrebuildsPoolsDelete(
  args: InferRequestType<typeof client.api.v1.GenevaActions.Prebuilds.pools.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Prebuilds.pools.delete.$post(args, options),
  )
}

export async function postApiV1GenevaActionsPrivacyRefreshProfileTelemetryProperties(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Privacy)['refresh-profile-telemetry-properties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Privacy['refresh-profile-telemetry-properties'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV1GenevaActionsResourcesResourceIdUnderInvestigation(
  args: InferRequestType<
    (typeof client.api.v1.GenevaActions.Resources)[':resourceId']['under-investigation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.GenevaActions.Resources[':resourceId']['under-investigation'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV1GenevaActionsVnetPoolDefinitions(
  args: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$post(args, options))
}

export async function deleteApiV1GenevaActionsVnetPoolDefinitions(
  args: InferRequestType<typeof client.api.v1.GenevaActions.VnetPoolDefinitions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.GenevaActions.VnetPoolDefinitions.$delete(args, options))
}

export async function postApiV1HeartBeat(
  args: InferRequestType<typeof client.api.v1.HeartBeat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.HeartBeat.$post(args, options))
}

export async function getApiV1Locations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Locations.$get(undefined, options))
}

export async function getApiV1LocationsLocation(
  args: InferRequestType<(typeof client.api.v1.Locations)[':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Locations[':location'].$get(args, options))
}

export async function putApiV1PrebuildsPoolsPoolIdInstances(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Prebuilds.pools[':poolId'].instances.$put(args, options))
}

export async function postApiV1PrebuildsPoolsPoolIdInstances(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.pools)[':poolId']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Prebuilds.pools[':poolId'].instances.$post(args, options),
  )
}

export async function getApiV1PrebuildsTemplateEnvironmentId(
  args: InferRequestType<(typeof client.api.v1.Prebuilds.template)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Prebuilds.template[':environmentId'].$get(args, options))
}

export async function getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkus(
  args: InferRequestType<
    (typeof client.api.v1.Prebuilds.templates.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['skus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Prebuilds.templates.repo[':repoId'].branch[':branchName'].hash[
      ':prebuildHash'
    ].location[':location'].skus.$get(args, options),
  )
}

export async function getApiV1Sas(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Sas.$get(undefined, options))
}

export async function getApiV1Secrets(
  args: InferRequestType<typeof client.api.v1.Secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Secrets.$get(args, options))
}

export async function postApiV1Secrets(
  args: InferRequestType<typeof client.api.v1.Secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Secrets.$post(args, options))
}

export async function putApiV1SecretsSecretId(
  args: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Secrets[':secretId'].$put(args, options))
}

export async function deleteApiV1SecretsSecretId(
  args: InferRequestType<(typeof client.api.v1.Secrets)[':secretId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Secrets[':secretId'].$delete(args, options))
}

export async function getApiV1TenantTenantId(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Tenant[':tenantId'].$get(args, options))
}

export async function putApiV1TenantTenantId(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Tenant[':tenantId'].$put(args, options))
}

export async function deleteApiV1TenantTenantId(
  args: InferRequestType<(typeof client.api.v1.Tenant)[':tenantId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Tenant[':tenantId'].$delete(args, options))
}

export async function postApiV1TokensPlansPlanNameDeleteAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.plans)[':planName']['deleteAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.plans[':planName'].deleteAllCodespaces.$post(args, options),
  )
}

export async function postApiV1TokensPlansPlanNameReadAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.plans)[':planName']['readAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.plans[':planName'].readAllCodespaces.$post(args, options),
  )
}

export async function postApiV1TokensPlansPlanNameWriteCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.plans)[':planName']['writeCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.plans[':planName'].writeCodespaces.$post(args, options),
  )
}

export async function postApiV1TokensPlansPlanNameWriteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.plans)[':planName']['writeDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.plans[':planName'].writeDelegates.$post(args, options),
  )
}

export async function putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceName(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].$put(args, options),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].deleteAllCodespaces.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['deleteAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].deleteAllEnvironments.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].readAllCodespaces.$post(args, options),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['readAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].readAllEnvironments.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].writeCodespaces.$post(args, options),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].writeDelegates.$post(args, options),
  )
}

export async function postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.Tokens.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers'][':providerNamespace']['plans'][':resourceName']['writeEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.Tokens.subscriptions[':subscriptionId'].resourceGroups[
      ':resourceGroup'
    ].providers[':providerNamespace'].plans[':resourceName'].writeEnvironments.$post(args, options),
  )
}

export async function getApiV1TunnelEnvironmentIdPortInfo(
  args: InferRequestType<(typeof client.api.v1.Tunnel)[':environmentId']['portInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Tunnel[':environmentId'].portInfo.$get(args, options))
}

export async function postApiV1UserSubscriptions(
  args: InferRequestType<typeof client.api.v1.UserSubscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.UserSubscriptions.$post(args, options))
}

export async function deleteApiV1UserSubscriptions(
  args: InferRequestType<typeof client.api.v1.UserSubscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.UserSubscriptions.$delete(args, options))
}

export async function getApiV1PoolsDefault(
  args: InferRequestType<typeof client.api.v1.pools.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.pools.default.$get(args, options))
}

export async function putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotification(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['SubscriptionLifeCycleNotification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
      ':resourceType'
    ].SubscriptionLifeCycleNotification.$put(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers['GitHub.Network'][
      ':resourceType'
    ].resourceReadBegin.$post(args, options),
  )
}

export async function putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotification(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['SubscriptionLifeCycleNotification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers[
      'Microsoft.Codespaces'
    ].plans.SubscriptionLifeCycleNotification.$put(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers[
      'Microsoft.Codespaces'
    ].plans.resourceReadBegin.$post(args, options),
  )
}

export async function putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotification(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['SubscriptionLifeCycleNotification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers[
      'Microsoft.VSOnline'
    ].plans.SubscriptionLifeCycleNotification.$put(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].providers[
      'Microsoft.VSOnline'
    ].plans.resourceReadBegin.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'].resourceReadBegin.$post(args, options),
  )
}

export async function putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].$put(args, options),
  )
}

export async function deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].$delete(args, options),
  )
}

export async function patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceName(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].$patch(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourceCreationCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceCreationValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourceCreationValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourceDeletionCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceDeletionValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourceDeletionValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourcePatchCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourcePatchValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourcePatchValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['GitHub.Network'][':resourceType'][':resourceName']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'GitHub.Network'
    ][':resourceType'][':resourceName'].resourceReadBegin.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans.resourceReadBegin.$post(args, options),
  )
}

export async function putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceName(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].$put(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].deleteAllCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].deleteAllEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].readAllCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].readAllEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['readDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].readDelegates.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourceCreationCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceCreationValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourceCreationValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceDeletionValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourceDeletionValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourcePatchCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourcePatchValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourcePatchValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].resourceReadBegin.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].writeCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].writeDelegates.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['writeEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].writeEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans.resourceReadBegin.$post(args, options),
  )
}

export async function putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceName(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].$put(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].deleteAllCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].deleteAllEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].readAllCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readAllEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].readAllEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['readDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].readDelegates.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourceCreationCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceCreationValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourceCreationValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceDeletionValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourceDeletionValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompleted(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourcePatchCompleted.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourcePatchValidate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourcePatchValidate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBegin(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['resourceReadBegin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].resourceReadBegin.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespaces(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeCodespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].writeCodespaces.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].writeDelegates.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironments(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['resourceGroups'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['writeEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].resourceGroups[':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].writeEnvironments.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.Codespaces']['plans'][':resourceName']['deleteDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
      'Microsoft.Codespaces'
    ].plans[':resourceName'].deleteDelegates.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegates(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId'][':resourceGroup']['providers']['Microsoft.VSOnline']['plans'][':resourceName']['deleteDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'][':resourceGroup'].providers[
      'Microsoft.VSOnline'
    ].plans[':resourceName'].deleteDelegates.$post(args, options),
  )
}

export async function getApiV1TenantTenantIdPoolPoolName(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].Pool[':poolName'].$get(args, options),
  )
}

export async function putApiV1TenantTenantIdPoolPoolName(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].Pool[':poolName'].$put(args, options),
  )
}

export async function deleteApiV1TenantTenantIdPoolPoolName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].Pool[':poolName'].$delete(args, options),
  )
}

export async function patchApiV1TenantTenantIdPoolPoolName(
  args: InferRequestType<(typeof client.api.v1.tenant)[':tenantId']['Pool'][':poolName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].Pool[':poolName'].$patch(args, options),
  )
}

export async function getApiV1TenantTenantIdPoolGroupPoolGroupName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$get(args, options),
  )
}

export async function putApiV1TenantTenantIdPoolGroupPoolGroupName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$put(args, options),
  )
}

export async function deleteApiV1TenantTenantIdPoolGroupPoolGroupName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$delete(args, options),
  )
}

export async function patchApiV1TenantTenantIdPoolGroupPoolGroupName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['PoolGroup'][':poolGroupName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].PoolGroup[':poolGroupName'].$patch(args, options),
  )
}

export async function getApiV1TenantTenantIdPoolPoolNameVm(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm.$get(args, options),
  )
}

export async function getApiV1TenantTenantIdPoolPoolNameVmVmName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$get(args, options),
  )
}

export async function putApiV1TenantTenantIdPoolPoolNameVmVmName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$put(args, options),
  )
}

export async function deleteApiV1TenantTenantIdPoolPoolNameVmVmName(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].$delete(args, options),
  )
}

export async function postApiV1TenantTenantIdPoolPoolNameVmVmNameStart(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].start.$post(args, options),
  )
}

export async function postApiV1TenantTenantIdPoolPoolNameVmVmNameStop(
  args: InferRequestType<
    (typeof client.api.v1.tenant)[':tenantId']['pool'][':poolName']['Vm'][':vmName']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tenant[':tenantId'].pool[':poolName'].Vm[':vmName'].stop.$post(args, options),
  )
}

export async function postApiV2PrebuildsDelete(
  args: InferRequestType<typeof client.api.v2.prebuilds.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.prebuilds.delete.$post(args, options))
}

export async function deleteApiV2PrebuildsRepositoryRepoIdBranchBranchName(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.repository)[':repoId']['branch'][':branchName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.prebuilds.repository[':repoId'].branch[':branchName'].$delete(args, options),
  )
}

export async function postApiV2PrebuildsTemplates(
  args: InferRequestType<typeof client.api.v2.prebuilds.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.prebuilds.templates.$post(args, options))
}

export async function getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPath(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates.skus.repo)[':repoId']['branch'][':branchName']['hash'][':prebuildHash']['location'][':location']['devcontainerpath'][':devContainerPath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.prebuilds.templates.skus.repo[':repoId'].branch[':branchName'].hash[
      ':prebuildHash'
    ].location[':location'].devcontainerpath[':devContainerPath'].$get(args, options),
  )
}

export async function postApiV2PrebuildsTemplatesUpdatemaxversions(
  args: InferRequestType<typeof client.api.v2.prebuilds.templates.updatemaxversions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.prebuilds.templates.updatemaxversions.$post(args, options),
  )
}

export async function postApiV2PrebuildsTemplatesTemplateIdUpdatestatus(
  args: InferRequestType<
    (typeof client.api.v2.prebuilds.templates)[':templateId']['updatestatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.prebuilds.templates[':templateId'].updatestatus.$post(args, options),
  )
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInternalNetmonCorrelation(
  args: InferRequestType<typeof client.internal.Netmon.correlation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal.Netmon.correlation.$get(args, options))
}

export async function getTunnelauth(
  args: InferRequestType<typeof client.tunnelauth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnelauth.$get(args, options))
}

export async function postTunnelauth(
  args: InferRequestType<typeof client.tunnelauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tunnelauth.$post(args, options))
}

export async function getWarmup(options?: ClientRequestOptions) {
  return await parseResponse(client.warmup.$get(undefined, options))
}
