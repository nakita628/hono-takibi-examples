import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$get(args, options))
}

export async function putAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$put(args, options))
}

export async function deleteAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$delete(args, options))
}

export async function patchAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$patch(args, options))
}

export async function postAuthRefresh(
  args: InferRequestType<typeof client.auth.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.refresh.$post(args, options))
}

export async function postAuthToken(
  args: InferRequestType<typeof client.auth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.$post(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function getConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$get(args, options))
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$get(args, options))
}

export async function putContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$put(args, options))
}

export async function deleteContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$delete(args, options))
}

export async function patchContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$patch(args, options))
}

export async function getDevices(
  args: InferRequestType<typeof client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$get(args, options))
}

export async function getDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$get(args, options))
}

export async function getFacilities(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities.$get(args, options))
}

export async function getFacilitiesId(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities[':id'].$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getImplementation(options?: ClientRequestOptions) {
  return await parseResponse(client.implementation.$get(undefined, options))
}

export async function getIps(
  args: InferRequestType<typeof client.ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$get(args, options))
}

export async function postIps(
  args: InferRequestType<typeof client.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$post(args, options))
}

export async function getIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$get(args, options))
}

export async function putIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$put(args, options))
}

export async function patchIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$patch(args, options))
}

export async function getMacs(
  args: InferRequestType<typeof client.macs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macs.$get(args, options))
}

export async function postMacs(
  args: InferRequestType<typeof client.macs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macs.$post(args, options))
}

export async function getMacsId(
  args: InferRequestType<(typeof client.macs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macs[':id'].$get(args, options))
}

export async function deleteMacsId(
  args: InferRequestType<(typeof client.macs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macs[':id'].$delete(args, options))
}

export async function getMemberJoiningRules(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'].$get(args, options))
}

export async function postMemberJoiningRules(
  args: InferRequestType<(typeof client)['member-joining-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'].$post(args, options))
}

export async function getMemberJoiningRulesId(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'][':id'].$get(args, options))
}

export async function putMemberJoiningRulesId(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'][':id'].$put(args, options))
}

export async function deleteMemberJoiningRulesId(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'][':id'].$delete(args, options))
}

export async function patchMemberJoiningRulesId(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['member-joining-rules'][':id'].$patch(args, options))
}

export async function getMetroAreaNetworks(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metro-area-networks'].$get(args, options))
}

export async function getMetroAreaNetworksId(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metro-area-networks'][':id'].$get(args, options))
}

export async function getMetroAreas(
  args: InferRequestType<(typeof client)['metro-areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metro-areas'].$get(args, options))
}

export async function getMetroAreasId(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metro-areas'][':id'].$get(args, options))
}

export async function getNetworkFeatureConfigs(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'].$get(args, options))
}

export async function postNetworkFeatureConfigs(
  args: InferRequestType<(typeof client)['network-feature-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'].$post(args, options))
}

export async function getNetworkFeatureConfigsId(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'][':id'].$get(args, options))
}

export async function putNetworkFeatureConfigsId(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'][':id'].$put(args, options))
}

export async function deleteNetworkFeatureConfigsId(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'][':id'].$delete(args, options))
}

export async function patchNetworkFeatureConfigsId(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-feature-configs'][':id'].$patch(args, options))
}

export async function getNetworkFeatures(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-features'].$get(args, options))
}

export async function getNetworkFeaturesId(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-features'][':id'].$get(args, options))
}

export async function getNetworkServiceConfigs(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'].$get(args, options))
}

export async function postNetworkServiceConfigs(
  args: InferRequestType<(typeof client)['network-service-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'].$post(args, options))
}

export async function getNetworkServiceConfigsId(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'][':id'].$get(args, options))
}

export async function putNetworkServiceConfigsId(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'][':id'].$put(args, options))
}

export async function deleteNetworkServiceConfigsId(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'][':id'].$delete(args, options))
}

export async function patchNetworkServiceConfigsId(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-service-configs'][':id'].$patch(args, options))
}

export async function getNetworkServiceConfigsIdCancellationPolicy(
  args: InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-service-configs'][':id']['cancellation-policy'].$get(args, options),
  )
}

export async function getNetworkServices(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'].$get(args, options))
}

export async function postNetworkServices(
  args: InferRequestType<(typeof client)['network-services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'].$post(args, options))
}

export async function getNetworkServicesId(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'][':id'].$get(args, options))
}

export async function putNetworkServicesId(
  args: InferRequestType<(typeof client)['network-services'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'][':id'].$put(args, options))
}

export async function deleteNetworkServicesId(
  args: InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'][':id'].$delete(args, options))
}

export async function patchNetworkServicesId(
  args: InferRequestType<(typeof client)['network-services'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-services'][':id'].$patch(args, options))
}

export async function getNetworkServicesIdCancellationPolicy(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-services'][':id']['cancellation-policy'].$get(args, options),
  )
}

export async function getNetworkServicesIdChangeRequest(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-services'][':id']['change-request'].$get(args, options),
  )
}

export async function postNetworkServicesIdChangeRequest(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-services'][':id']['change-request'].$post(args, options),
  )
}

export async function deleteNetworkServicesIdChangeRequest(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['network-services'][':id']['change-request'].$delete(args, options),
  )
}

export async function getPops(
  args: InferRequestType<typeof client.pops.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pops.$get(args, options))
}

export async function getPopsId(
  args: InferRequestType<(typeof client.pops)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pops[':id'].$get(args, options))
}

export async function getPorts(
  args: InferRequestType<typeof client.ports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports.$get(args, options))
}

export async function getPortsId(
  args: InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].$get(args, options))
}

export async function getProductOfferings(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product-offerings'].$get(args, options))
}

export async function getProductOfferingsId(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product-offerings'][':id'].$get(args, options))
}

export async function getRoleAssignments(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-assignments'].$get(args, options))
}

export async function postRoleAssignments(
  args: InferRequestType<(typeof client)['role-assignments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-assignments'].$post(args, options))
}

export async function getRoleAssignmentsAssignmentId(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-assignments'][':assignment_id'].$get(args, options))
}

export async function deleteRoleAssignmentsAssignmentId(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['role-assignments'][':assignment_id'].$delete(args, options))
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function getRolesId(
  args: InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':id'].$get(args, options))
}
