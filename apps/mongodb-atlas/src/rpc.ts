import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAtlasV2(
  args: InferRequestType<typeof client.api.atlas.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.$get(args, options))
}

export async function getApiAtlasV2AlertConfigsMatchersFieldNames(
  args: InferRequestType<typeof client.api.atlas.v2.alertConfigs.matchers.fieldNames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.alertConfigs.matchers.fieldNames.$get(args, options),
  )
}

export async function getApiAtlasV2Clusters(
  args: InferRequestType<typeof client.api.atlas.v2.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.clusters.$get(args, options))
}

export async function getApiAtlasV2DefaultGroupLimits(
  args: InferRequestType<typeof client.api.atlas.v2.defaultGroupLimits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.defaultGroupLimits.$get(args, options))
}

export async function getApiAtlasV2DefaultGroupLimitsLimitName(
  args: InferRequestType<(typeof client.api.atlas.v2.defaultGroupLimits)[':limitName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.defaultGroupLimits[':limitName'].$get(args, options),
  )
}

export async function getApiAtlasV2EventTypes(
  args: InferRequestType<typeof client.api.atlas.v2.eventTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.eventTypes.$get(args, options))
}

export async function deleteApiAtlasV2FederationSettingsFederationSettingsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].$delete(args, options),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['roleMappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].roleMappings.$get(args, options),
  )
}

export async function postApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['roleMappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].roleMappings.$post(args, options),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['roleMappings'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].roleMappings[':id'].$get(args, options),
  )
}

export async function putApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['roleMappings'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].roleMappings[':id'].$put(args, options),
  )
}

export async function deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['connectedOrgConfigs'][':orgId']['roleMappings'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].connectedOrgConfigs[
      ':orgId'
    ].roleMappings[':id'].$delete(args, options),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProviders(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2FederationSettingsFederationSettingsIdIdentityProviders(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders'][':identityProviderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders[
      ':identityProviderId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders'][':identityProviderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders[
      ':identityProviderId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders'][':identityProviderId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders[
      ':identityProviderId'
    ].$patch(args, options),
  )
}

export async function deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdJwks(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders'][':identityProviderId']['jwks']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders[
      ':identityProviderId'
    ].jwks.$delete(args, options),
  )
}

export async function getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdMetadataXml(
  args: InferRequestType<
    (typeof client.api.atlas.v2.federationSettings)[':federationSettingsId']['identityProviders'][':identityProviderId']['metadata.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.federationSettings[':federationSettingsId'].identityProviders[
      ':identityProviderId'
    ]['metadata.xml'].$get(args, options),
  )
}

export async function getApiAtlasV2Groups(
  args: InferRequestType<typeof client.api.atlas.v2.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups.$get(args, options))
}

export async function postApiAtlasV2Groups(
  args: InferRequestType<typeof client.api.atlas.v2.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].$get(args, options))
}

export async function deleteApiAtlasV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].$delete(args, options))
}

export async function patchApiAtlasV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].$patch(args, options))
}

export async function postApiAtlasV2GroupsGroupIdAccess(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].access.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdAccessList(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['accessList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].accessList.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdAccessList(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['accessList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].accessList.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdAccessListEntryValue(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['accessList'][':entryValue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].accessList[':entryValue'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdAccessListEntryValue(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['accessList'][':entryValue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].accessList[':entryValue'].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAccessListEntryValueStatus(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['accessList'][':entryValue']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].accessList[':entryValue'].status.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdActivityFeed(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['activityFeed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].activityFeed.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiClouds'][':cloud']['geographies'][':geography']['modelGroupNames'][':modelGroupName']['rateLimits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiClouds[':cloud'].geographies[
      ':geography'
    ].modelGroupNames[':modelGroupName'].rateLimits.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiClouds'][':cloud']['geographies'][':geography']['modelGroupNames'][':modelGroupName']['rateLimits']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiClouds[':cloud'].geographies[
      ':geography'
    ].modelGroupNames[':modelGroupName'].rateLimits.$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsReset(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiClouds'][':cloud']['geographies'][':geography']['modelGroupNames'][':modelGroupName']['rateLimits:reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiClouds[':cloud'].geographies[
      ':geography'
    ].modelGroupNames[':modelGroupName']['rateLimits:reset'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAiModelApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiKeys.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdAiModelApiKeys(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiKeys.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiKeys'][':apiKeyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiKeys[':apiKeyId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiKeys'][':apiKeyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiKeys[':apiKeyId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiKeys'][':apiKeyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiKeys[':apiKeyId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAiModelApiRateLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiRateLimits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].aiModelApiRateLimits.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdAiModelApiRateLimitsReset(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['aiModelApiRateLimits:reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId']['aiModelApiRateLimits:reset'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAlertConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdAlertConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs'][':alertConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs[':alertConfigId'].$get(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs'][':alertConfigId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs[':alertConfigId'].$put(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs'][':alertConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs[':alertConfigId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs'][':alertConfigId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs[':alertConfigId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdAlerts(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alertConfigs'][':alertConfigId']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alertConfigs[':alertConfigId'].alerts.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdAlerts(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].alerts.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alerts'][':alertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alerts[':alertId'].$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alerts'][':alertId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alerts[':alertId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAlertsAlertIdAlertConfigs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['alerts'][':alertId']['alertConfigs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].alerts[':alertId'].alertConfigs.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['apiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].apiKeys.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['apiKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].apiKeys.$post(args, options))
}

export async function postApiAtlasV2GroupsGroupIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['apiKeys'][':apiUserId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].apiKeys[':apiUserId'].$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['apiKeys'][':apiUserId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].apiKeys[':apiUserId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['apiKeys'][':apiUserId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].apiKeys[':apiUserId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdAuditLog(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['auditLog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].auditLog.$get(args, options))
}

export async function patchApiAtlasV2GroupsGroupIdAuditLog(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['auditLog']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].auditLog.$patch(args, options))
}

export async function getApiAtlasV2GroupsGroupIdAwsCustomDNS(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['awsCustomDNS']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].awsCustomDNS.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdAwsCustomDNS(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['awsCustomDNS']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].awsCustomDNS.$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup'][':cloudProvider']['privateEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup[':cloudProvider'].privateEndpoints.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup'][':cloudProvider']['privateEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup[':cloudProvider'].privateEndpoints.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup'][':cloudProvider']['privateEndpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup[':cloudProvider'].privateEndpoints[
      ':endpointId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup'][':cloudProvider']['privateEndpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup[':cloudProvider'].privateEndpoints[
      ':endpointId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdBackupExportBuckets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup']['exportBuckets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup.exportBuckets.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdBackupExportBuckets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup']['exportBuckets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup.exportBuckets.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup']['exportBuckets'][':exportBucketId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup.exportBuckets[':exportBucketId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup']['exportBuckets'][':exportBucketId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup.exportBuckets[':exportBucketId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backup']['exportBuckets'][':exportBucketId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backup.exportBuckets[':exportBucketId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdBackupCompliancePolicy(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backupCompliancePolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backupCompliancePolicy.$get(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdBackupCompliancePolicy(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backupCompliancePolicy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backupCompliancePolicy.$put(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdBackupCompliancePolicy(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['backupCompliancePolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].backupCompliancePolicy.$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdCloudProviderAccess(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['cloudProviderAccess']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].cloudProviderAccess.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdCloudProviderAccess(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['cloudProviderAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].cloudProviderAccess.$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdCloudProviderAccessCloudProviderRoleId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['cloudProviderAccess'][':cloudProvider'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].cloudProviderAccess[':cloudProvider'][':roleId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdCloudProviderAccessRoleId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['cloudProviderAccess'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].cloudProviderAccess[':roleId'].$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdCloudProviderAccessRoleId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['cloudProviderAccess'][':roleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].cloudProviderAccess[':roleId'].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClusterConfigurationsValidate(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusterConfigurations:validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId']['clusterConfigurations:validate'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClusters(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].clusters.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdClusters(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['clusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].clusters.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewDatabaseNameCollectionNameCollStatsMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName'][':clusterView'][':databaseName'][':collectionName']['collStats']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'][':clusterView'][
      ':databaseName'
    ][':collectionName'].collStats.measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewCollStatsNamespaces(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName'][':clusterView']['collStats']['namespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'][
      ':clusterView'
    ].collStats.namespaces.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameAdaptiveSettings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['adaptiveSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].adaptiveSettings.$get(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameAdaptiveSettings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['adaptiveSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].adaptiveSettings.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameAutoEmbeddingInference(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoEmbeddingInference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].autoEmbeddingInference.$get(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameAutoEmbeddingInference(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoEmbeddingInference']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].autoEmbeddingInference.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameAutoEmbeddingInferenceOperations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoEmbeddingInference']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].autoEmbeddingInference.operations.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameAutoEmbeddingInferenceOperationsOperationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoEmbeddingInference']['operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].autoEmbeddingInference.operations[':operationId'].$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameAutoEmbeddingInferenceReset(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoEmbeddingInference:reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'][
      'autoEmbeddingInference:reset'
    ].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameAutoScalingConfiguration(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['autoScalingConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].autoScalingConfiguration.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExports(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['exports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.exports.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameBackupExports(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.exports.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsExportId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['exports'][':exportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.exports[
      ':exportId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['restoreJobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.restoreJobs.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['restoreJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.restoreJobs.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['restoreJobs'][':restoreJobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.restoreJobs[
      ':restoreJobId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['restoreJobs'][':restoreJobId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.restoreJobs[
      ':restoreJobId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSchedule(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.schedule.$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSchedule(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['schedule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.schedule.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupSchedule(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['schedule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.schedule.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshots(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshots(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabases(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].databases.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['databases'][':databaseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].databases[':databaseName'].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['databases'][':databaseName']['collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].databases[':databaseName'].collections.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollectionsCollectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots'][':snapshotId']['databases'][':databaseName']['collections'][':collectionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots[
      ':snapshotId'
    ].databases[':databaseName'].collections[':collectionName'].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots']['shardedCluster'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots.shardedCluster[
      ':snapshotId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots']['shardedCluster'][':snapshotId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backup.snapshots.shardedCluster[
      ':snapshotId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusters(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backup']['snapshots']['shardedClusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].backup.snapshots.shardedClusters.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backupCheckpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backupCheckpoints.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameBackupCheckpointsCheckpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['backupCheckpoints'][':checkpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].backupCheckpoints[
      ':checkpointId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinned(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collStats']['pinned']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collStats.pinned.$get(
      args,
      options,
    ),
  )
}

export async function putApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinned(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collStats']['pinned']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collStats.pinned.$put(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinned(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collStats']['pinned']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collStats.pinned.$patch(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsUnpin(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collStats']['unpin']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collStats.unpin.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collectionRestoreJobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collectionRestoreJobs.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collectionRestoreJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collectionRestoreJobs.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collectionRestoreJobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collectionRestoreJobs[
      ':jobId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collectionRestoreJobs'][':jobId']['collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collectionRestoreJobs[
      ':jobId'
    ].collections.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollectionsSourceNamespace(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['collectionRestoreJobs'][':jobId']['collections'][':sourceNamespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].collectionRestoreJobs[
      ':jobId'
    ].collections[':sourceNamespace'].$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['fts']['indexes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].fts.indexes.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesDatabaseNameCollectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['fts']['indexes'][':databaseName'][':collectionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].fts.indexes[':databaseName'][
      ':collectionName'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['fts']['indexes'][':indexId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].fts.indexes[':indexId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['fts']['indexes'][':indexId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].fts.indexes[':indexId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameFtsIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['fts']['indexes'][':indexId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].fts.indexes[':indexId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWrites(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['globalWrites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].globalWrites.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMapping(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['globalWrites']['customZoneMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].globalWrites.customZoneMapping.$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMapping(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['globalWrites']['customZoneMapping']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].globalWrites.customZoneMapping.$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespaces(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['globalWrites']['managedNamespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].globalWrites.managedNamespaces.$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespaces(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['globalWrites']['managedNamespaces']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].globalWrites.managedNamespaces.$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameIndex(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].index.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchives(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchives(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives'][':archiveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives[
      ':archiveId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives'][':archiveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives[
      ':archiveId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesArchiveId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives'][':archiveId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives[
      ':archiveId'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOnlineArchivesQueryLogsGz(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['onlineArchives']['queryLogs.gz']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].onlineArchives[
      'queryLogs.gz'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulation(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['outageSimulation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].outageSimulation.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulation(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['outageSimulation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].outageSimulation.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulation(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['outageSimulation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].outageSimulation.$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['overloadSimulations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].overloadSimulations.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['overloadSimulations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].overloadSimulations.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['overloadSimulations'][':simulationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].overloadSimulations[
      ':simulationId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['overloadSimulations'][':simulationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].overloadSimulations[
      ':simulationId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorDropIndexSuggestions(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['performanceAdvisor']['dropIndexSuggestions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].performanceAdvisor.dropIndexSuggestions.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSchemaAdvice(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['performanceAdvisor']['schemaAdvice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].performanceAdvisor.schemaAdvice.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSuggestedIndexes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['performanceAdvisor']['suggestedIndexes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].performanceAdvisor.suggestedIndexes.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNamePrivateEndpointConnectionStrings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['privateEndpointConnectionStrings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].privateEndpointConnectionStrings.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNamePrivateEndpointConnectionStrings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['privateEndpointConnectionStrings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].privateEndpointConnectionStrings.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNamePrivateEndpointConnectionStringsConnectionStringId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['privateEndpointConnectionStrings'][':connectionStringId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].privateEndpointConnectionStrings[':connectionStringId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNamePrivateEndpointConnectionStringsConnectionStringId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['privateEndpointConnectionStrings'][':connectionStringId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].privateEndpointConnectionStrings[':connectionStringId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNamePrivateEndpointConnectionStringsConnectionStringId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['privateEndpointConnectionStrings'][':connectionStringId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].privateEndpointConnectionStrings[':connectionStringId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameProcessArgs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['processArgs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].processArgs.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameProcessArgs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['processArgs']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].processArgs.$patch(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameQuerySampling(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['querySampling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].querySampling.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespace(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['querySampling'][':namespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].querySampling[
      ':namespace'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespace(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['querySampling'][':namespace']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].querySampling[
      ':namespace'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsQueryShapeHashDetails(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['queryShapeInsights'][':queryShapeHash']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].queryShapeInsights[
      ':queryShapeHash'
    ].details.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsSummaries(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['queryShapeInsights']['summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].queryShapeInsights.summaries.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['queryShapes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].queryShapes.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHash(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['queryShapes'][':queryShapeHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].queryShapes[
      ':queryShapeHash'
    ].$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHash(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['queryShapes'][':queryShapeHash']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].queryShapes[
      ':queryShapeHash'
    ].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameRestartPrimaries(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['restartPrimaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].restartPrimaries.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['restoreJobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].restoreJobs.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['restoreJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].restoreJobs.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameRestoreJobsJobId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['restoreJobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].restoreJobs[':jobId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeployment(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.deployment.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeployment(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['deployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.deployment.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeployment(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['deployment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.deployment.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchDeployment(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['deployment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.deployment.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':databaseName'][':collectionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[':databaseName'][
      ':collectionName'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':databaseName'][':collectionName'][':indexName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[':databaseName'][
      ':collectionName'
    ][':indexName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':databaseName'][':collectionName'][':indexName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[':databaseName'][
      ':collectionName'
    ][':indexName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesDatabaseNameCollectionNameIndexName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':databaseName'][':collectionName'][':indexName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[':databaseName'][
      ':collectionName'
    ][':indexName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':indexId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[':indexId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':indexId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[
      ':indexId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSearchIndexesIndexId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['search']['indexes'][':indexId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].search.indexes[
      ':indexId'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalyses(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardKeyAnalyses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardKeyAnalyses.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalyses(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardKeyAnalyses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardKeyAnalyses.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesAnalysisId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardKeyAnalyses'][':analysisId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardKeyAnalyses[
      ':analysisId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardKeyAnalyses']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName'
    ].shardKeyAnalyses.operations.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperationsOperationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardKeyAnalyses']['operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardKeyAnalyses.operations[
      ':operationId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetrics(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardMetrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardMetrics.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardMetrics'][':replicaSetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardMetrics[
      ':replicaSetName'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetNameMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardMetrics'][':replicaSetName']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardMetrics[
      ':replicaSetName'
    ].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsListMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardMetrics:listMeasurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'][
      'shardMetrics:listMeasurements'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardingInsights(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardingInsights']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardingInsights.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameShardingRecommendations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['shardingRecommendations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].shardingRecommendations.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotSchedule(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshotSchedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshotSchedule.$get(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotSchedule(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshotSchedule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshotSchedule.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshots(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshots.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshots[':snapshotId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshots'][':snapshotId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshots[
      ':snapshotId'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['snapshots'][':snapshotId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].snapshots[':snapshotId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameSqlInterface(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['sqlInterface']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].sqlInterface.$get(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdClustersClusterNameSqlInterface(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['sqlInterface']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].sqlInterface.$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersClusterNameStatus(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':clusterName'].status.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameGrantMongoDBEmployeeAccess(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName:grantMongoDBEmployeeAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName:grantMongoDBEmployeeAccess'
    ].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNamePinFeatureCompatibilityVersion(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName:pinFeatureCompatibilityVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName:pinFeatureCompatibilityVersion'
    ].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameRevokeMongoDBEmployeeAccess(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName:revokeMongoDBEmployeeAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName:revokeMongoDBEmployeeAccess'
    ].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersClusterNameUnpinFeatureCompatibilityVersion(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':clusterName:unpinFeatureCompatibilityVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[
      ':clusterName:unpinFeatureCompatibilityVersion'
    ].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersHostNameLogsLogNameGz(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters'][':hostName']['logs'][':logName.gz']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters[':hostName'].logs[':logName.gz'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdClustersProviderRegions(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters']['provider']['regions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters.provider.regions.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersTenantUpgrade(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters']['tenantUpgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters.tenantUpgrade.$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdClustersTenantUpgradeToServerless(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['clusters']['tenantUpgradeToServerless']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].clusters.tenantUpgradeToServerless.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdCollStatsMetrics(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['collStats']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].collStats.metrics.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdContainers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['containers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].containers.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdContainers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['containers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].containers.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdContainersContainerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['containers'][':containerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].containers[':containerId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdContainersContainerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['containers'][':containerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].containers[':containerId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdContainersContainerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['containers'][':containerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].containers[':containerId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdContainersAll(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['containers']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].containers.all.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdCustomDBRolesRoles(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['customDBRoles']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].customDBRoles.roles.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdCustomDBRolesRoles(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['customDBRoles']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].customDBRoles.roles.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['customDBRoles']['roles'][':roleName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].customDBRoles.roles[':roleName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['customDBRoles']['roles'][':roleName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].customDBRoles.roles[':roleName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['customDBRoles']['roles'][':roleName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].customDBRoles.roles[':roleName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDataFederation(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['dataFederation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdDataFederation(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDataFederationTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdDataFederationTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdDataFederationTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['limits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].limits.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['limits'][':limitName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].limits[':limitName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['limits'][':limitName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].limits[
      ':limitName'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['limits'][':limitName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName'].limits[
      ':limitName'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDataFederationTenantNameQueryLogsGz(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dataFederation'][':tenantName']['queryLogs.gz']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dataFederation[':tenantName']['queryLogs.gz'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdDatabaseUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdDatabaseUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsername(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers'][':databaseName'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers[':databaseName'][':username'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsername(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers'][':databaseName'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers[':databaseName'][':username'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsername(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers'][':databaseName'][':username']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers[':databaseName'][':username'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCerts(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers'][':username']['certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers[':username'].certs.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCerts(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['databaseUsers'][':username']['certs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].databaseUsers[':username'].certs.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdDbAccessHistoryClustersClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dbAccessHistory']['clusters'][':clusterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dbAccessHistory.clusters[':clusterName'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdDbAccessHistoryProcessesHostname(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['dbAccessHistory']['processes'][':hostname']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].dbAccessHistory.processes[':hostname'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdEncryptionAtRest(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdEncryptionAtRest(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest.$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest'][':cloudProvider']['privateEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest[':cloudProvider'].privateEndpoints.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest'][':cloudProvider']['privateEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest[
      ':cloudProvider'
    ].privateEndpoints.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest'][':cloudProvider']['privateEndpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest[':cloudProvider'].privateEndpoints[
      ':endpointId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['encryptionAtRest'][':cloudProvider']['privateEndpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].encryptionAtRest[':cloudProvider'].privateEndpoints[
      ':endpointId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdEvents(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].events.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdEventsEventId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['events'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].events[':eventId'].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClusters(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['flexClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdFlexClusters(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['flexClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClustersName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdFlexClustersName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdFlexClustersName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdFlexClustersNameBackupDownload(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.download.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['restoreJobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.restoreJobs.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['restoreJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.restoreJobs.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClustersNameBackupRestoreJobsRestoreJobId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['restoreJobs'][':restoreJobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.restoreJobs[
      ':restoreJobId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshots(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.snapshots.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdFlexClustersNameBackupSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters'][':name']['backup']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].flexClusters[':name'].backup.snapshots[
      ':snapshotId'
    ].$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdFlexClustersTenantUpgrade(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['flexClusters:tenantUpgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId']['flexClusters:tenantUpgrade'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetrics(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['hosts'][':processId']['fts']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].hosts[':processId'].fts.metrics.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameIndexNameMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['hosts'][':processId']['fts']['metrics']['indexes'][':databaseName'][':collectionName'][':indexName']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].hosts[':processId'].fts.metrics.indexes[':databaseName'][
      ':collectionName'
    ][':indexName'].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['hosts'][':processId']['fts']['metrics']['indexes'][':databaseName'][':collectionName']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].hosts[':processId'].fts.metrics.indexes[':databaseName'][
      ':collectionName'
    ].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['hosts'][':processId']['fts']['metrics']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].hosts[':processId'].fts.metrics.measurements.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdIntegrations(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].integrations.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdIntegrationsIntegrationType(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['integrations'][':integrationType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].integrations[':integrationType'].$get(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdIntegrationsIntegrationType(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['integrations'][':integrationType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].integrations[':integrationType'].$put(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdIntegrationsIntegrationType(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['integrations'][':integrationType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].integrations[':integrationType'].$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdIntegrationsIntegrationType(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['integrations'][':integrationType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].integrations[':integrationType'].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].invites.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].invites.$post(args, options))
}

export async function patchApiAtlasV2GroupsGroupIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['invites']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].invites.$patch(args, options))
}

export async function getApiAtlasV2GroupsGroupIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['invites'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].invites[':invitationId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['invites'][':invitationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].invites[':invitationId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['invites'][':invitationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].invites[':invitationId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdIpAddresses(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['ipAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].ipAddresses.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdLimits(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].limits.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['limits'][':limitName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].limits[':limitName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['limits'][':limitName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].limits[':limitName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdLimitsLimitName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['limits'][':limitName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].limits[':limitName'].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdLiveMigrations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['liveMigrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].liveMigrations.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['liveMigrations'][':liveMigrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].liveMigrations[':liveMigrationId'].$get(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationIdCutover(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['liveMigrations'][':liveMigrationId']['cutover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].liveMigrations[':liveMigrationId'].cutover.$put(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdLiveMigrationsValidate(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['liveMigrations']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].liveMigrations.validate.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdLiveMigrationsValidateValidationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['liveMigrations']['validate'][':validationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].liveMigrations.validate[':validationId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdLogIntegrations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['logIntegrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].logIntegrations.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdLogIntegrations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['logIntegrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].logIntegrations.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdLogIntegrationsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['logIntegrations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].logIntegrations[':id'].$get(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdLogIntegrationsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['logIntegrations'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].logIntegrations[':id'].$put(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdLogIntegrationsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['logIntegrations'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].logIntegrations[':id'].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMaintenanceWindow(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['maintenanceWindow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].maintenanceWindow.$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdMaintenanceWindow(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['maintenanceWindow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].maintenanceWindow.$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdMaintenanceWindow(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['maintenanceWindow']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].maintenanceWindow.$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMaintenanceWindowAutoDefer(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['maintenanceWindow']['autoDefer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].maintenanceWindow.autoDefer.$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMaintenanceWindowDefer(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['maintenanceWindow']['defer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].maintenanceWindow.defer.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdManagedSlowMs(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['managedSlowMs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].managedSlowMs.$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdManagedSlowMsDisable(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['managedSlowMs']['disable']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].managedSlowMs.disable.$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdManagedSlowMsEnable(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['managedSlowMs']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].managedSlowMs.enable.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMcpConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].mcpConfigs.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdMcpConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].mcpConfigs.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].secrets.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].secrets.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['secrets'][':secretId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].secrets[':secretId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mcpConfigs'][':mcpConfigId']['secrets'][':secretId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mcpConfigs[':mcpConfigId'].secrets[':secretId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdMetricIntegrations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['metricIntegrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].metricIntegrations.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMetricIntegrations(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['metricIntegrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].metricIntegrations.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['metricIntegrations'][':metricIntegrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].metricIntegrations[':metricIntegrationId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['metricIntegrations'][':metricIntegrationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].metricIntegrations[':metricIntegrationId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdMetricIntegrationsMetricIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['metricIntegrations'][':metricIntegrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].metricIntegrations[':metricIntegrationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdMongoDBVersions(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongoDBVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongoDBVersions.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMongosTopologies(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongosTopologies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongosTopologies.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMongosTopologies(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongosTopologies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongosTopologies.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdMongosTopologiesClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongosTopologies'][':clusterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongosTopologies[':clusterName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdMongosTopologiesClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongosTopologies'][':clusterName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongosTopologies[':clusterName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdMongosTopologiesClusterName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['mongosTopologies'][':clusterName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].mongosTopologies[':clusterName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPeers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['peers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].peers.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdPeers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['peers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].peers.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdPeersPeerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['peers'][':peerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].peers[':peerId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPeersPeerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['peers'][':peerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].peers[':peerId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPeersPeerId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['peers'][':peerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].peers[':peerId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointService(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService'][':endpointServiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService[
      ':endpointServiceId'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService'][':endpointServiceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService[
      ':endpointServiceId'
    ].$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpoint(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService'][':endpointServiceId']['endpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService[
      ':endpointServiceId'
    ].endpoint.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService'][':endpointServiceId']['endpoint'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService[
      ':endpointServiceId'
    ].endpoint[':endpointId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint'][':cloudProvider']['endpointService'][':endpointServiceId']['endpoint'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint[':cloudProvider'].endpointService[
      ':endpointServiceId'
    ].endpoint[':endpointId'].$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdPrivateEndpointEndpointService(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['endpointService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.endpointService.$post(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPrivateEndpointEndpointServiceEndpointServiceId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['endpointService'][':endpointServiceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.endpointService[
      ':endpointServiceId'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointRegionalMode(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['regionalMode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.regionalMode.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPrivateEndpointRegionalMode(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['regionalMode']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.regionalMode.$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpoint(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['serverless']['instance'][':instanceName']['endpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.serverless.instance[
      ':instanceName'
    ].endpoint.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpoint(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['serverless']['instance'][':instanceName']['endpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.serverless.instance[
      ':instanceName'
    ].endpoint.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['serverless']['instance'][':instanceName']['endpoint'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.serverless.instance[
      ':instanceName'
    ].endpoint[':endpointId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['serverless']['instance'][':instanceName']['endpoint'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.serverless.instance[
      ':instanceName'
    ].endpoint[':endpointId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateEndpoint']['serverless']['instance'][':instanceName']['endpoint'][':endpointId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateEndpoint.serverless.instance[
      ':instanceName'
    ].endpoint[':endpointId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateIpMode(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['privateIpMode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateIpMode.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPrivateIpMode(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateIpMode']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateIpMode.$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIds(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateNetworkSettings']['endpointIds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateNetworkSettings.endpointIds.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIds(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateNetworkSettings']['endpointIds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateNetworkSettings.endpointIds.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateNetworkSettings']['endpointIds'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateNetworkSettings.endpointIds[':endpointId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['privateNetworkSettings']['endpointIds'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].privateNetworkSettings.endpointIds[
      ':endpointId'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcesses(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['processes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].processes.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabaseNameCollectionNameCollStatsMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId'][':databaseName'][':collectionName']['collStats']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'][':databaseName'][
      ':collectionName'
    ].collStats.measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdCollStatsNamespaces(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['collStats']['namespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].collStats.namespaces.$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabases(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].databases.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['databases'][':databaseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].databases[':databaseName'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseNameMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['databases'][':databaseName']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].databases[
      ':databaseName'
    ].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDisks(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['disks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].disks.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['disks'][':partitionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].disks[':partitionName'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionNameMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['disks'][':partitionName']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].disks[
      ':partitionName'
    ].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdMeasurements(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['measurements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[':processId'].measurements.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorNamespaces(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['performanceAdvisor']['namespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[
      ':processId'
    ].performanceAdvisor.namespaces.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSlowQueryLogs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['performanceAdvisor']['slowQueryLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[
      ':processId'
    ].performanceAdvisor.slowQueryLogs.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSuggestedIndexes(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['processes'][':processId']['performanceAdvisor']['suggestedIndexes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].processes[
      ':processId'
    ].performanceAdvisor.suggestedIndexes.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdPushBasedLogExport(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['pushBasedLogExport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].pushBasedLogExport.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdPushBasedLogExport(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['pushBasedLogExport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].pushBasedLogExport.$post(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdPushBasedLogExport(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['pushBasedLogExport']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].pushBasedLogExport.$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdPushBasedLogExport(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['pushBasedLogExport']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].pushBasedLogExport.$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdSampleDatasetLoadName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['sampleDatasetLoad'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].sampleDatasetLoad[':name'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdSampleDatasetLoadSampleDatasetId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['sampleDatasetLoad'][':sampleDatasetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].sampleDatasetLoad[':sampleDatasetId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdSandboxSandboxConfigIdGenerateClusterDescription(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['sandbox'][':sandboxConfigId:generateClusterDescription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].sandbox[
      ':sandboxConfigId:generateClusterDescription'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdServerless(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['serverless']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].serverless.$get(args, options))
}

export async function getApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexing(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serverless'][':clusterName']['performanceAdvisor']['autoIndexing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serverless[
      ':clusterName'
    ].performanceAdvisor.autoIndexing.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexing(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serverless'][':clusterName']['performanceAdvisor']['autoIndexing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serverless[
      ':clusterName'
    ].performanceAdvisor.autoIndexing.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdServerlessName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serverless'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serverless[':name'].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdServiceAccounts(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdServiceAccounts(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['accessList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].accessList.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['accessList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].accessList.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListIpAddress(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['accessList'][':ipAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].accessList[
      ':ipAddress'
    ].$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].secrets.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId']['secrets'][':secretId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId'].secrets[
      ':secretId'
    ].$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdServiceAccountsClientIdInvite(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['serviceAccounts'][':clientId:invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].serviceAccounts[':clientId:invite'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].settings.$get(args, options))
}

export async function patchApiAtlasV2GroupsGroupIdSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].settings.$patch(args, options))
}

export async function getApiAtlasV2GroupsGroupIdStandbyLinks(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStandbyLinks(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[':standbyLinkId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[':standbyLinkId'].$delete(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailovers(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId']['failovers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[':standbyLinkId'].failovers.$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailovers(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId']['failovers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[':standbyLinkId'].failovers.$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversFailoverId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId']['failovers'][':failoverId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[':standbyLinkId'].failovers[
      ':failoverId'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdInspectFailoverReadiness(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['standbyLinks'][':standbyLinkId:inspectFailoverReadiness']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].standbyLinks[
      ':standbyLinkId:inspectFailoverReadiness'
    ].$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreams(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].streams.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdStreams(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['streams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].streams.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdStreamsTenantName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameAuditLogs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['auditLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].auditLogs.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['failoverConnections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].failoverConnections.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['failoverConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].failoverConnections.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['failoverConnections'][':failoverConnectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].failoverConnections[':failoverConnectionId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['failoverConnections'][':failoverConnectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].failoverConnections[':failoverConnectionId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['connections'][':connectionName']['failoverConnections'][':failoverConnectionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].connections[
      ':connectionName'
    ].failoverConnections[':failoverConnectionId'].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessor(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[':processorName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[
      ':processorName'
    ].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[
      ':processorName'
    ].$patch(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStart(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName:start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[
      ':processorName:start'
    ].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStartWith(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName:startWith']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[
      ':processorName:startWith'
    ].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStop(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processor'][':processorName:stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processor[
      ':processorName:stop'
    ].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessors(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName']['processors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName'].processors.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsTenantNameDownloadOperationalLogs(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams'][':tenantName:downloadOperationalLogs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams[':tenantName:downloadOperationalLogs'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsAccountDetails(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['accountDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.accountDetails.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsActiveVpcPeeringConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['activeVpcPeeringConnections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.activeVpcPeeringConnections.$get(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['privateLinkConnections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.privateLinkConnections.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['privateLinkConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.privateLinkConnections.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['privateLinkConnections'][':connectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.privateLinkConnections[':connectionId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['privateLinkConnections'][':connectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.privateLinkConnections[':connectionId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['privateLinkConnections'][':connectionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.privateLinkConnections[':connectionId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['vpcPeeringConnections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.vpcPeeringConnections.$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['vpcPeeringConnections'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.vpcPeeringConnections[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdAccept(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['vpcPeeringConnections'][':id:accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.vpcPeeringConnections[':id:accept'].$post(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdReject(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams']['vpcPeeringConnections'][':id:reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streams.vpcPeeringConnections[':id:reject'].$post(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsWithSampleConnections(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streams:withSampleConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId']['streams:withSampleConnections'].$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streamsWorkspacePrivateEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streamsWorkspacePrivateEndpoints.$get(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpoints(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streamsWorkspacePrivateEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streamsWorkspacePrivateEndpoints.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streamsWorkspacePrivateEndpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streamsWorkspacePrivateEndpoints[':endpointId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['streamsWorkspacePrivateEndpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].streamsWorkspacePrivateEndpoints[':endpointId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdTeams(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].teams.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdTeams(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].teams.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['teams'][':teamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].teams[':teamId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['teams'][':teamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].teams[':teamId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['teams'][':teamId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].teams[':teamId'].$patch(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdUserSecurity(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.$get(args, options),
  )
}

export async function patchApiAtlasV2GroupsGroupIdUserSecurity(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.$patch(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdUserSecurityCustomerX509(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['customerX509']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.customerX509.$delete(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdUserSecurityLdapUserToDNMapping(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['ldap']['userToDNMapping']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.ldap.userToDNMapping.$delete(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdUserSecurityLdapVerify(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['ldap']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.ldap.verify.$post(args, options),
  )
}

export async function getApiAtlasV2GroupsGroupIdUserSecurityLdapVerifyRequestId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['userSecurity']['ldap']['verify'][':requestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].userSecurity.ldap.verify[':requestId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].users.$get(args, options))
}

export async function postApiAtlasV2GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId'].users.$post(args, options))
}

export async function getApiAtlasV2GroupsGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].users[':userId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2GroupsGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].users[':userId'].$delete(args, options),
  )
}

export async function putApiAtlasV2GroupsGroupIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['users'][':userId']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].users[':userId'].roles.$put(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdUsersUserIdAddRole(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['users'][':userId:addRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].users[':userId:addRole'].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdUsersUserIdRemoveRole(
  args: InferRequestType<
    (typeof client.api.atlas.v2.groups)[':groupId']['users'][':userId:removeRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.groups[':groupId'].users[':userId:removeRole'].$post(args, options),
  )
}

export async function postApiAtlasV2GroupsGroupIdMigrate(
  args: InferRequestType<(typeof client.api.atlas.v2.groups)[':groupId:migrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups[':groupId:migrate'].$post(args, options))
}

export async function getApiAtlasV2GroupsByNameGroupName(
  args: InferRequestType<(typeof client.api.atlas.v2.groups.byName)[':groupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.groups.byName[':groupName'].$get(args, options))
}

export async function getApiAtlasV2Orgs(
  args: InferRequestType<typeof client.api.atlas.v2.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs.$get(args, options))
}

export async function postApiAtlasV2Orgs(
  args: InferRequestType<typeof client.api.atlas.v2.orgs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].$get(args, options))
}

export async function deleteApiAtlasV2OrgsOrgId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].$delete(args, options))
}

export async function patchApiAtlasV2OrgsOrgId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].$patch(args, options))
}

export async function getApiAtlasV2OrgsOrgIdActivityFeed(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['activityFeed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].activityFeed.$get(args, options))
}

export async function getApiAtlasV2OrgsOrgIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['aiModelApiClouds'][':cloud']['geographies'][':geography']['modelGroupNames'][':modelGroupName']['rateLimits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].aiModelApiClouds[':cloud'].geographies[
      ':geography'
    ].modelGroupNames[':modelGroupName'].rateLimits.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdAiModelApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['aiModelApiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].aiModelApiKeys.$get(args, options))
}

export async function getApiAtlasV2OrgsOrgIdAiModelApiKeysApiKeyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['aiModelApiKeys'][':apiKeyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].aiModelApiKeys[':apiKeyId'].$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdAiModelApiRateLimits(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['aiModelApiRateLimits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].aiModelApiRateLimits.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].apiKeys.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdApiKeys(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].apiKeys.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdApiKeysApiUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['accessList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].accessList.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['accessList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].accessList.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddress(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['accessList'][':ipAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].accessList[':ipAddress'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddress(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['apiKeys'][':apiUserId']['accessList'][':ipAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].apiKeys[':apiUserId'].accessList[':ipAddress'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2OrgsOrgIdAssociatedInvoices(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['associatedInvoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].associatedInvoices.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdBillingCostExplorerUsage(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['billing']['costExplorer']['usage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].billing.costExplorer.usage.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdBillingCostExplorerUsageToken(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['billing']['costExplorer']['usage'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].billing.costExplorer.usage[':token'].$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdDelegationSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['delegationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].delegationSettings.$get(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdDelegationSettings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['delegationSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].delegationSettings.$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdEvents(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].events.$get(args, options))
}

export async function getApiAtlasV2OrgsOrgIdEventsEventId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].events[':eventId'].$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdFederationSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['federationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].federationSettings.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdGroups(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].groups.$get(args, options))
}

export async function getApiAtlasV2OrgsOrgIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].invites.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].invites.$post(args, options))
}

export async function patchApiAtlasV2OrgsOrgIdInvites(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['invites']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].invites.$patch(args, options))
}

export async function getApiAtlasV2OrgsOrgIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invites'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invites[':invitationId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invites'][':invitationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invites[':invitationId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdInvitesInvitationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invites'][':invitationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invites[':invitationId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoices(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].invoices.$get(args, options))
}

export async function getApiAtlasV2OrgsOrgIdInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId'].$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdCsv(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId'].csv.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdLineItemsSearch(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['lineItems:search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId']['lineItems:search'].$get(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReports(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId'].reports.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReports(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['reports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId'].reports.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsReportId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId']['reports'][':reportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId'].reports[':reportId'].$get(
      args,
      options,
    ),
  )
}

export async function postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdGenerateAndDownloadReport(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices'][':invoiceId:generateAndDownloadReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices[':invoiceId:generateAndDownloadReport'].$post(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2OrgsOrgIdInvoicesPending(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['invoices']['pending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].invoices.pending.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdLiveMigrationsAvailableProjects(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['liveMigrations']['availableProjects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].liveMigrations.availableProjects.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokens(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['liveMigrations']['linkTokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].liveMigrations.linkTokens.$post(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokens(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['liveMigrations']['linkTokens']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].liveMigrations.linkTokens.$delete(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdLogIntegrations(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['logIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].logIntegrations.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdLogIntegrations(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['logIntegrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].logIntegrations.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['logIntegrations'][':logIntegrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].logIntegrations[':logIntegrationId'].$get(args, options),
  )
}

export async function putApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['logIntegrations'][':logIntegrationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].logIntegrations[':logIntegrationId'].$put(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['logIntegrations'][':logIntegrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].logIntegrations[':logIntegrationId'].$delete(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdMaintenanceSettings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['maintenanceSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].maintenanceSettings.$get(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdMaintenanceSettings(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['maintenanceSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].maintenanceSettings.$patch(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdMaintenanceSettingsReset(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['maintenanceSettings:reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId']['maintenanceSettings:reset'].$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdMcpConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].mcpConfigs.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdMcpConfigs(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].mcpConfigs.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].secrets.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].secrets.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['secrets'][':secretId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].secrets[':secretId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['mcpConfigs'][':mcpConfigId']['secrets'][':secretId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].mcpConfigs[':mcpConfigId'].secrets[':secretId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2OrgsOrgIdNonCompliantResources(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['nonCompliantResources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].nonCompliantResources.$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdResourcePolicies(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].resourcePolicies.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdResourcePolicies(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].resourcePolicies.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies'][':resourcePolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].resourcePolicies[':resourcePolicyId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies'][':resourcePolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].resourcePolicies[':resourcePolicyId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies'][':resourcePolicyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].resourcePolicies[':resourcePolicyId'].$patch(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdResourcePoliciesValidate(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['resourcePolicies:validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId']['resourcePolicies:validate'].$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdSandboxConfig(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['sandboxConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].sandboxConfig.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdSandboxConfig(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['sandboxConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].sandboxConfig.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['sandboxConfig'][':sandboxConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].sandboxConfig[':sandboxConfigId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['sandboxConfig'][':sandboxConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].sandboxConfig[':sandboxConfigId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['sandboxConfig'][':sandboxConfigId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].sandboxConfig[':sandboxConfigId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdServiceAccounts(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].serviceAccounts.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdServiceAccounts(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts.$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdServiceAccountsClientId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['accessList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].accessList.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessList(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['accessList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].accessList.$post(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListIpAddress(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['accessList'][':ipAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].accessList[
      ':ipAddress'
    ].$delete(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdServiceAccountsClientIdGroups(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].groups.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecrets(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].secrets.$post(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecretsSecretId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['serviceAccounts'][':clientId']['secrets'][':secretId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].serviceAccounts[':clientId'].secrets[':secretId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiAtlasV2OrgsOrgIdSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].settings.$get(args, options))
}

export async function patchApiAtlasV2OrgsOrgIdSettings(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].settings.$patch(args, options))
}

export async function getApiAtlasV2OrgsOrgIdTeams(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].teams.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdTeams(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].teams.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgIdTeamsTeamId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdTeamsTeamId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].$patch(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdTeamsTeamIdUsers(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].users.$get(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdTeamsTeamIdUsers(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].users.$post(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdTeamsTeamIdUsersUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId'].users[':userId'].$delete(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdTeamsTeamIdAddUser(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId:addUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId:addUser'].$post(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdTeamsTeamIdRemoveUser(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams'][':teamId:removeUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams[':teamId:removeUser'].$post(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdTeamsByNameTeamName(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['teams']['byName'][':teamName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].teams.byName[':teamName'].$get(args, options),
  )
}

export async function getApiAtlasV2OrgsOrgIdUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].users.$get(args, options))
}

export async function postApiAtlasV2OrgsOrgIdUsers(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.orgs[':orgId'].users.$post(args, options))
}

export async function getApiAtlasV2OrgsOrgIdUsersUserId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId'].$get(args, options),
  )
}

export async function deleteApiAtlasV2OrgsOrgIdUsersUserId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId'].$delete(args, options),
  )
}

export async function patchApiAtlasV2OrgsOrgIdUsersUserId(
  args: InferRequestType<(typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId'].$patch(args, options),
  )
}

export async function putApiAtlasV2OrgsOrgIdUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId'].roles.$put(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdUsersUserIdAddRole(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId:addRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId:addRole'].$post(args, options),
  )
}

export async function postApiAtlasV2OrgsOrgIdUsersUserIdRemoveRole(
  args: InferRequestType<
    (typeof client.api.atlas.v2.orgs)[':orgId']['users'][':userId:removeRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.orgs[':orgId'].users[':userId:removeRole'].$post(args, options),
  )
}

export async function getApiAtlasV2RateLimits(
  args: InferRequestType<typeof client.api.atlas.v2.rateLimits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.rateLimits.$get(args, options))
}

export async function getApiAtlasV2RateLimitsEndpointSetId(
  args: InferRequestType<(typeof client.api.atlas.v2.rateLimits)[':endpointSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.rateLimits[':endpointSetId'].$get(args, options))
}

export async function getApiAtlasV2SkuServices(
  args: InferRequestType<typeof client.api.atlas.v2.skuServices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.skuServices.$get(args, options))
}

export async function getApiAtlasV2Skus(
  args: InferRequestType<typeof client.api.atlas.v2.skus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.skus.$get(args, options))
}

export async function getApiAtlasV2SkusSkuId(
  args: InferRequestType<(typeof client.api.atlas.v2.skus)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.skus[':skuId'].$get(args, options))
}

export async function getApiAtlasV2UnauthControlPlaneIPAddresses(
  args: InferRequestType<typeof client.api.atlas.v2.unauth.controlPlaneIPAddresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.unauth.controlPlaneIPAddresses.$get(args, options))
}

export async function getApiAtlasV2UnauthEphemeralClustersClusterId(
  args: InferRequestType<
    (typeof client.api.atlas.v2.unauth.ephemeralClusters)[':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.unauth.ephemeralClusters[':clusterId'].$get(args, options),
  )
}

export async function postApiAtlasV2UnauthEphemeralClustersCreate(
  args: InferRequestType<(typeof client.api.atlas.v2.unauth)['ephemeralClusters:create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.atlas.v2.unauth['ephemeralClusters:create'].$post(args, options),
  )
}

export async function postApiAtlasV2Users(
  args: InferRequestType<typeof client.api.atlas.v2.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.users.$post(args, options))
}

export async function getApiAtlasV2UsersUserId(
  args: InferRequestType<(typeof client.api.atlas.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.users[':userId'].$get(args, options))
}

export async function getApiAtlasV2UsersByNameUserName(
  args: InferRequestType<(typeof client.api.atlas.v2.users.byName)[':userName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.atlas.v2.users.byName[':userName'].$get(args, options))
}
