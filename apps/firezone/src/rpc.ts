import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function getActorsActorIdExternalIdentities(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].external_identities.$get(args, options))
}

export async function getClientsId(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].$get(args, options))
}

export async function putClientsId(
  args: InferRequestType<(typeof client.clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].$put(args, options))
}

export async function deleteClientsId(
  args: InferRequestType<(typeof client.clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].$delete(args, options))
}

export async function patchClientsId(
  args: InferRequestType<(typeof client.clients)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].$patch(args, options))
}

export async function getSitesSiteIdGatewaysId(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways[':id'].$get(args, options))
}

export async function putSitesSiteIdGatewaysId(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways[':id'].$put(args, options))
}

export async function deleteSitesSiteIdGatewaysId(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways[':id'].$delete(args, options))
}

export async function patchSitesSiteIdGatewaysId(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways[':id'].$patch(args, options))
}

export async function getSantaPostureProviders(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_posture_providers.$get(args, options))
}

export async function getGithubAuthProvidersId(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github_auth_providers[':id'].$get(args, options))
}

export async function getPostureFields(
  args: InferRequestType<typeof client.posture_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posture_fields.$get(args, options))
}

export async function getOidcAuthProviders(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oidc_auth_providers.$get(args, options))
}

export async function deleteSitesSiteIdGatewayTokensId(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateway_tokens[':id'].$delete(args, options))
}

export async function getSentinelonePostureProviders(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_posture_providers.$get(args, options))
}

export async function getActorsId(
  args: InferRequestType<(typeof client.actors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':id'].$get(args, options))
}

export async function putActorsId(
  args: InferRequestType<(typeof client.actors)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':id'].$put(args, options))
}

export async function deleteActorsId(
  args: InferRequestType<(typeof client.actors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':id'].$delete(args, options))
}

export async function patchActorsId(
  args: InferRequestType<(typeof client.actors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':id'].$patch(args, options))
}

export async function putClientsIdVerify(
  args: InferRequestType<(typeof client.clients)[':id']['verify']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].verify.$put(args, options))
}

export async function getActorsActorIdClientTokens(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].client_tokens.$get(args, options))
}

export async function postActorsActorIdClientTokens(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].client_tokens.$post(args, options))
}

export async function deleteActorsActorIdClientTokens(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].client_tokens.$delete(args, options))
}

export async function getActorsActorIdClientTokensId(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].client_tokens[':id'].$get(args, options))
}

export async function deleteActorsActorIdClientTokensId(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors[':actor_id'].client_tokens[':id'].$delete(args, options))
}

export async function getEmailOtpAuthProviders(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_otp_auth_providers.$get(args, options))
}

export async function getEntraAuthProviders(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entra_auth_providers.$get(args, options))
}

export async function getIruPostureProvidersId(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_posture_providers[':id'].$get(args, options))
}

export async function putIruPostureProvidersId(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_posture_providers[':id'].$put(args, options))
}

export async function deleteIruPostureProvidersId(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_posture_providers[':id'].$delete(args, options))
}

export async function patchIruPostureProvidersId(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_posture_providers[':id'].$patch(args, options))
}

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function postSites(
  args: InferRequestType<typeof client.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$post(args, options))
}

export async function getSitesId(
  args: InferRequestType<(typeof client.sites)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':id'].$get(args, options))
}

export async function putSitesId(
  args: InferRequestType<(typeof client.sites)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':id'].$put(args, options))
}

export async function deleteSitesId(
  args: InferRequestType<(typeof client.sites)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':id'].$delete(args, options))
}

export async function patchSitesId(
  args: InferRequestType<(typeof client.sites)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':id'].$patch(args, options))
}

export async function getGoogleAuthProviders(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.google_auth_providers.$get(args, options))
}

export async function getPoliciesId(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':id'].$get(args, options))
}

export async function putPoliciesId(
  args: InferRequestType<(typeof client.policies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':id'].$put(args, options))
}

export async function deletePoliciesId(
  args: InferRequestType<(typeof client.policies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':id'].$delete(args, options))
}

export async function patchPoliciesId(
  args: InferRequestType<(typeof client.policies)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':id'].$patch(args, options))
}

export async function getIntunePostureProvidersId(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_posture_providers[':id'].$get(args, options))
}

export async function putIntunePostureProvidersId(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_posture_providers[':id'].$put(args, options))
}

export async function deleteIntunePostureProvidersId(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_posture_providers[':id'].$delete(args, options))
}

export async function patchIntunePostureProvidersId(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_posture_providers[':id'].$patch(args, options))
}

export async function getX509AuthProvider(options?: ClientRequestOptions) {
  return await parseResponse(client.x509_auth_provider.$get(undefined, options))
}

export async function getResources(
  args: InferRequestType<typeof client.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$get(args, options))
}

export async function postResources(
  args: InferRequestType<typeof client.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.$post(args, options))
}

export async function getActorsActorIdExternalIdentitiesId(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.actors[':actor_id'].external_identities[':id'].$get(args, options),
  )
}

export async function deleteActorsActorIdExternalIdentitiesId(
  args: InferRequestType<
    (typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.actors[':actor_id'].external_identities[':id'].$delete(args, options),
  )
}

export async function getSentineloneDevices(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_devices.$get(args, options))
}

export async function getOktaAuthProviders(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.okta_auth_providers.$get(args, options))
}

export async function getIntuneDevicesId(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_devices[':id'].$get(args, options))
}

export async function getSophosPostureProviders(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_posture_providers.$get(args, options))
}

export async function getDefenderPostureProvidersId(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_posture_providers[':id'].$get(args, options))
}

export async function putDefenderPostureProvidersId(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_posture_providers[':id'].$put(args, options))
}

export async function deleteDefenderPostureProvidersId(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_posture_providers[':id'].$delete(args, options))
}

export async function patchDefenderPostureProvidersId(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_posture_providers[':id'].$patch(args, options))
}

export async function getIntunePostureProviders(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_posture_providers.$get(args, options))
}

export async function getGroupsGroupIdMemberships(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].memberships.$get(args, options))
}

export async function putGroupsGroupIdMemberships(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].memberships.$put(args, options))
}

export async function patchGroupsGroupIdMemberships(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].memberships.$patch(args, options))
}

export async function getGoogleDirectories(
  args: InferRequestType<typeof client.google_directories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.google_directories.$get(args, options))
}

export async function getSentineloneDevicesSentineloneAgent(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_devices[':sentinelone_agent'].$get(args, options))
}

export async function getSantaPostureProvidersId(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_posture_providers[':id'].$get(args, options))
}

export async function putSantaPostureProvidersId(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_posture_providers[':id'].$put(args, options))
}

export async function deleteSantaPostureProvidersId(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_posture_providers[':id'].$delete(args, options))
}

export async function patchSantaPostureProvidersId(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_posture_providers[':id'].$patch(args, options))
}

export async function getGoogleDirectoriesId(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.google_directories[':id'].$get(args, options))
}

export async function getSantaDevices(
  args: InferRequestType<typeof client.santa_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_devices.$get(args, options))
}

export async function putClientsIdUnverify(
  args: InferRequestType<(typeof client.clients)[':id']['unverify']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].unverify.$put(args, options))
}

export async function getResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$get(args, options))
}

export async function putResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$put(args, options))
}

export async function deleteResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$delete(args, options))
}

export async function patchResourcesId(
  args: InferRequestType<(typeof client.resources)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':id'].$patch(args, options))
}

export async function getEntraDirectories(
  args: InferRequestType<typeof client.entra_directories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entra_directories.$get(args, options))
}

export async function getEntraAuthProvidersId(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entra_auth_providers[':id'].$get(args, options))
}

export async function getClients(
  args: InferRequestType<typeof client.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.$get(args, options))
}

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getSophosDevicesId(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_devices[':id'].$get(args, options))
}

export async function postSitesSiteIdGatewayTokens(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateway_tokens.$post(args, options))
}

export async function deleteSitesSiteIdGatewayTokens(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateway_tokens.$delete(args, options))
}

export async function getIruDevicesId(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_devices[':id'].$get(args, options))
}

export async function getIntuneDevices(
  args: InferRequestType<typeof client.intune_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intune_devices.$get(args, options))
}

export async function getResourcesResourceIdPoolMembers(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':resource_id'].pool_members.$get(args, options))
}

export async function putResourcesResourceIdPoolMembers(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':resource_id'].pool_members.$put(args, options))
}

export async function patchResourcesResourceIdPoolMembers(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources[':resource_id'].pool_members.$patch(args, options))
}

export async function getGithubAuthProviders(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github_auth_providers.$get(args, options))
}

export async function getEntraDirectoriesId(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entra_directories[':id'].$get(args, options))
}

export async function getSentinelonePostureProvidersId(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_posture_providers[':id'].$get(args, options))
}

export async function putSentinelonePostureProvidersId(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_posture_providers[':id'].$put(args, options))
}

export async function deleteSentinelonePostureProvidersId(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_posture_providers[':id'].$delete(args, options))
}

export async function patchSentinelonePostureProvidersId(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentinelone_posture_providers[':id'].$patch(args, options))
}

export async function getEmailOtpAuthProvidersId(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email_otp_auth_providers[':id'].$get(args, options))
}

export async function getOktaDirectoriesId(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.okta_directories[':id'].$get(args, options))
}

export async function getIruDevices(
  args: InferRequestType<typeof client.iru_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_devices.$get(args, options))
}

export async function getGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$get(args, options))
}

export async function putGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$put(args, options))
}

export async function deleteGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$delete(args, options))
}

export async function patchGroupsId(
  args: InferRequestType<(typeof client.groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':id'].$patch(args, options))
}

export async function getLogsLogId(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':log_id'].$get(args, options))
}

export async function getOidcAuthProvidersId(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oidc_auth_providers[':id'].$get(args, options))
}

export async function getSitesSiteIdGateways(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways.$get(args, options))
}

export async function postSitesSiteIdGateways(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':site_id'].gateways.$post(args, options))
}

export async function getDefenderDevices(
  args: InferRequestType<typeof client.defender_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_devices.$get(args, options))
}

export async function getPolicies(
  args: InferRequestType<typeof client.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$get(args, options))
}

export async function postPolicies(
  args: InferRequestType<typeof client.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$post(args, options))
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function getSophosDevices(
  args: InferRequestType<typeof client.sophos_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_devices.$get(args, options))
}

export async function getActors(
  args: InferRequestType<typeof client.actors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors.$get(args, options))
}

export async function postActors(
  args: InferRequestType<typeof client.actors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actors.$post(args, options))
}

export async function getOktaDirectories(
  args: InferRequestType<typeof client.okta_directories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.okta_directories.$get(args, options))
}

export async function getSantaDevicesId(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.santa_devices[':id'].$get(args, options))
}

export async function getIruPostureProviders(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iru_posture_providers.$get(args, options))
}

export async function getOktaAuthProvidersId(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.okta_auth_providers[':id'].$get(args, options))
}

export async function getDefenderDevicesDefenderDevice(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_devices[':defender_device'].$get(args, options))
}

export async function getSophosPostureProvidersId(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_posture_providers[':id'].$get(args, options))
}

export async function putSophosPostureProvidersId(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_posture_providers[':id'].$put(args, options))
}

export async function deleteSophosPostureProvidersId(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_posture_providers[':id'].$delete(args, options))
}

export async function patchSophosPostureProvidersId(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sophos_posture_providers[':id'].$patch(args, options))
}

export async function postSitesSiteIdGatewaysGatewayIdTokenRotate(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].gateways[':gateway_id'].token.rotate.$post(args, options),
  )
}

export async function postSitesSiteIdGatewaysGatewayIdToken(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':site_id'].gateways[':gateway_id'].token.$post(args, options),
  )
}

export async function getDefenderPostureProviders(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defender_posture_providers.$get(args, options))
}

export async function getGoogleAuthProvidersId(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.google_auth_providers[':id'].$get(args, options))
}
