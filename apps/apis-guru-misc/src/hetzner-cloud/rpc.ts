import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActions(
  args: InferRequestType<typeof client.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.$get(args, options))
}

export async function getActionsId(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].$get(args, options))
}

export async function getCertificates(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$get(args, options))
}

export async function postCertificates(
  args: InferRequestType<typeof client.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$post(args, options))
}

export async function getCertificatesId(
  args: InferRequestType<(typeof client.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].$get(args, options))
}

export async function putCertificatesId(
  args: InferRequestType<(typeof client.certificates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].$put(args, options))
}

export async function deleteCertificatesId(
  args: InferRequestType<(typeof client.certificates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].$delete(args, options))
}

export async function getCertificatesIdActions(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].actions.$get(args, options))
}

export async function postCertificatesIdActionsRetry(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].actions.retry.$post(args, options))
}

export async function getCertificatesIdActionsActionId(
  args: InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':id'].actions[':action_id'].$get(args, options))
}

export async function getDatacenters(
  args: InferRequestType<typeof client.datacenters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datacenters.$get(args, options))
}

export async function getDatacentersId(
  args: InferRequestType<(typeof client.datacenters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datacenters[':id'].$get(args, options))
}

export async function getFirewalls(
  args: InferRequestType<typeof client.firewalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls.$get(args, options))
}

export async function postFirewalls(
  args: InferRequestType<typeof client.firewalls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls.$post(args, options))
}

export async function getFirewallsId(
  args: InferRequestType<(typeof client.firewalls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].$get(args, options))
}

export async function putFirewallsId(
  args: InferRequestType<(typeof client.firewalls)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].$put(args, options))
}

export async function deleteFirewallsId(
  args: InferRequestType<(typeof client.firewalls)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].$delete(args, options))
}

export async function getFirewallsIdActions(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].actions.$get(args, options))
}

export async function postFirewallsIdActionsApplyToResources(
  args: InferRequestType<
    (typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.firewalls[':id'].actions.apply_to_resources.$post(args, options),
  )
}

export async function postFirewallsIdActionsRemoveFromResources(
  args: InferRequestType<
    (typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.firewalls[':id'].actions.remove_from_resources.$post(args, options),
  )
}

export async function postFirewallsIdActionsSetRules(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].actions.set_rules.$post(args, options))
}

export async function getFirewallsIdActionsActionId(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.firewalls[':id'].actions[':action_id'].$get(args, options))
}

export async function getFloatingIps(
  args: InferRequestType<typeof client.floating_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips.$get(args, options))
}

export async function postFloatingIps(
  args: InferRequestType<typeof client.floating_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips.$post(args, options))
}

export async function getFloatingIpsId(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].$get(args, options))
}

export async function putFloatingIpsId(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].$put(args, options))
}

export async function deleteFloatingIpsId(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].$delete(args, options))
}

export async function getFloatingIpsIdActions(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].actions.$get(args, options))
}

export async function postFloatingIpsIdActionsAssign(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].actions.assign.$post(args, options))
}

export async function postFloatingIpsIdActionsChangeDnsPtr(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].actions.change_dns_ptr.$post(args, options))
}

export async function postFloatingIpsIdActionsChangeProtection(
  args: InferRequestType<
    (typeof client.floating_ips)[':id']['actions']['change_protection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.floating_ips[':id'].actions.change_protection.$post(args, options),
  )
}

export async function postFloatingIpsIdActionsUnassign(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].actions.unassign.$post(args, options))
}

export async function getFloatingIpsIdActionsActionId(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floating_ips[':id'].actions[':action_id'].$get(args, options))
}

export async function getImages(
  args: InferRequestType<typeof client.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$get(args, options))
}

export async function getImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$get(args, options))
}

export async function putImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$put(args, options))
}

export async function deleteImagesId(
  args: InferRequestType<(typeof client.images)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].$delete(args, options))
}

export async function getImagesIdActions(
  args: InferRequestType<(typeof client.images)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].actions.$get(args, options))
}

export async function postImagesIdActionsChangeProtection(
  args: InferRequestType<(typeof client.images)[':id']['actions']['change_protection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].actions.change_protection.$post(args, options))
}

export async function getImagesIdActionsActionId(
  args: InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':id'].actions[':action_id'].$get(args, options))
}

export async function getIsos(
  args: InferRequestType<typeof client.isos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.isos.$get(args, options))
}

export async function getIsosId(
  args: InferRequestType<(typeof client.isos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.isos[':id'].$get(args, options))
}

export async function getLoadBalancerTypes(
  args: InferRequestType<typeof client.load_balancer_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancer_types.$get(args, options))
}

export async function getLoadBalancerTypesId(
  args: InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancer_types[':id'].$get(args, options))
}

export async function getLoadBalancers(
  args: InferRequestType<typeof client.load_balancers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers.$get(args, options))
}

export async function postLoadBalancers(
  args: InferRequestType<typeof client.load_balancers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers.$post(args, options))
}

export async function getLoadBalancersId(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].$get(args, options))
}

export async function putLoadBalancersId(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].$put(args, options))
}

export async function deleteLoadBalancersId(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].$delete(args, options))
}

export async function getLoadBalancersIdActions(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].actions.$get(args, options))
}

export async function postLoadBalancersIdActionsAddService(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].actions.add_service.$post(args, options))
}

export async function postLoadBalancersIdActionsAddTarget(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].actions.add_target.$post(args, options))
}

export async function postLoadBalancersIdActionsAttachToNetwork(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.attach_to_network.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsChangeAlgorithm(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.change_algorithm.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsChangeDnsPtr(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.change_dns_ptr.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsChangeProtection(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.change_protection.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsChangeType(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['change_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].actions.change_type.$post(args, options))
}

export async function postLoadBalancersIdActionsDeleteService(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['delete_service']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.delete_service.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsDetachFromNetwork(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.detach_from_network.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsDisablePublicInterface(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.disable_public_interface.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsEnablePublicInterface(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.enable_public_interface.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsRemoveTarget(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['remove_target']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.remove_target.$post(args, options),
  )
}

export async function postLoadBalancersIdActionsUpdateService(
  args: InferRequestType<
    (typeof client.load_balancers)[':id']['actions']['update_service']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.load_balancers[':id'].actions.update_service.$post(args, options),
  )
}

export async function getLoadBalancersIdActionsActionId(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].actions[':action_id'].$get(args, options))
}

export async function getLoadBalancersIdMetrics(
  args: InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load_balancers[':id'].metrics.$get(args, options))
}

export async function getLocations(
  args: InferRequestType<typeof client.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.$get(args, options))
}

export async function getLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$get(args, options))
}

export async function getNetworks(
  args: InferRequestType<typeof client.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$get(args, options))
}

export async function postNetworks(
  args: InferRequestType<typeof client.networks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$post(args, options))
}

export async function getNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$get(args, options))
}

export async function putNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$put(args, options))
}

export async function deleteNetworksId(
  args: InferRequestType<(typeof client.networks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].$delete(args, options))
}

export async function getNetworksIdActions(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.$get(args, options))
}

export async function postNetworksIdActionsAddRoute(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['add_route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.add_route.$post(args, options))
}

export async function postNetworksIdActionsAddSubnet(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.add_subnet.$post(args, options))
}

export async function postNetworksIdActionsChangeIpRange(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['change_ip_range']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.change_ip_range.$post(args, options))
}

export async function postNetworksIdActionsChangeProtection(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['change_protection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.change_protection.$post(args, options))
}

export async function postNetworksIdActionsDeleteRoute(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.delete_route.$post(args, options))
}

export async function postNetworksIdActionsDeleteSubnet(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions.delete_subnet.$post(args, options))
}

export async function getNetworksIdActionsActionId(
  args: InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':id'].actions[':action_id'].$get(args, options))
}

export async function getPlacementGroups(
  args: InferRequestType<typeof client.placement_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.placement_groups.$get(args, options))
}

export async function postPlacementGroups(
  args: InferRequestType<typeof client.placement_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.placement_groups.$post(args, options))
}

export async function getPlacementGroupsId(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.placement_groups[':id'].$get(args, options))
}

export async function putPlacementGroupsId(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.placement_groups[':id'].$put(args, options))
}

export async function deletePlacementGroupsId(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.placement_groups[':id'].$delete(args, options))
}

export async function getPricing(options?: ClientRequestOptions) {
  return await parseResponse(client.pricing.$get(undefined, options))
}

export async function getPrimaryIps(
  args: InferRequestType<typeof client.primary_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips.$get(args, options))
}

export async function postPrimaryIps(
  args: InferRequestType<typeof client.primary_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips.$post(args, options))
}

export async function getPrimaryIpsId(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].$get(args, options))
}

export async function putPrimaryIpsId(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].$put(args, options))
}

export async function deletePrimaryIpsId(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].$delete(args, options))
}

export async function postPrimaryIpsIdActionsAssign(
  args: InferRequestType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].actions.assign.$post(args, options))
}

export async function postPrimaryIpsIdActionsChangeDnsPtr(
  args: InferRequestType<(typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].actions.change_dns_ptr.$post(args, options))
}

export async function postPrimaryIpsIdActionsChangeProtection(
  args: InferRequestType<
    (typeof client.primary_ips)[':id']['actions']['change_protection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.primary_ips[':id'].actions.change_protection.$post(args, options),
  )
}

export async function postPrimaryIpsIdActionsUnassign(
  args: InferRequestType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.primary_ips[':id'].actions.unassign.$post(args, options))
}

export async function getServerTypes(
  args: InferRequestType<typeof client.server_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.server_types.$get(args, options))
}

export async function getServerTypesId(
  args: InferRequestType<(typeof client.server_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.server_types[':id'].$get(args, options))
}

export async function getServers(
  args: InferRequestType<typeof client.servers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.$get(args, options))
}

export async function postServers(
  args: InferRequestType<typeof client.servers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.$post(args, options))
}

export async function getServersId(
  args: InferRequestType<(typeof client.servers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].$get(args, options))
}

export async function putServersId(
  args: InferRequestType<(typeof client.servers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].$put(args, options))
}

export async function deleteServersId(
  args: InferRequestType<(typeof client.servers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].$delete(args, options))
}

export async function getServersIdActions(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.$get(args, options))
}

export async function postServersIdActionsAddToPlacementGroup(
  args: InferRequestType<
    (typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.servers[':id'].actions.add_to_placement_group.$post(args, options),
  )
}

export async function postServersIdActionsAttachIso(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.attach_iso.$post(args, options))
}

export async function postServersIdActionsAttachToNetwork(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.attach_to_network.$post(args, options))
}

export async function postServersIdActionsChangeAliasIps(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['change_alias_ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.change_alias_ips.$post(args, options))
}

export async function postServersIdActionsChangeDnsPtr(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.change_dns_ptr.$post(args, options))
}

export async function postServersIdActionsChangeProtection(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.change_protection.$post(args, options))
}

export async function postServersIdActionsChangeType(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['change_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.change_type.$post(args, options))
}

export async function postServersIdActionsCreateImage(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['create_image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.create_image.$post(args, options))
}

export async function postServersIdActionsDetachFromNetwork(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['detach_from_network']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.detach_from_network.$post(args, options))
}

export async function postServersIdActionsDetachIso(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.detach_iso.$post(args, options))
}

export async function postServersIdActionsDisableBackup(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.disable_backup.$post(args, options))
}

export async function postServersIdActionsDisableRescue(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.disable_rescue.$post(args, options))
}

export async function postServersIdActionsEnableBackup(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.enable_backup.$post(args, options))
}

export async function postServersIdActionsEnableRescue(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.enable_rescue.$post(args, options))
}

export async function postServersIdActionsPoweroff(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.poweroff.$post(args, options))
}

export async function postServersIdActionsPoweron(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['poweron']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.poweron.$post(args, options))
}

export async function postServersIdActionsReboot(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['reboot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.reboot.$post(args, options))
}

export async function postServersIdActionsRebuild(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.rebuild.$post(args, options))
}

export async function postServersIdActionsRemoveFromPlacementGroup(
  args: InferRequestType<
    (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.servers[':id'].actions.remove_from_placement_group.$post(args, options),
  )
}

export async function postServersIdActionsRequestConsole(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['request_console']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.request_console.$post(args, options))
}

export async function postServersIdActionsReset(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.reset.$post(args, options))
}

export async function postServersIdActionsResetPassword(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.reset_password.$post(args, options))
}

export async function postServersIdActionsShutdown(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions.shutdown.$post(args, options))
}

export async function getServersIdActionsActionId(
  args: InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].actions[':action_id'].$get(args, options))
}

export async function getServersIdMetrics(
  args: InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':id'].metrics.$get(args, options))
}

export async function getSshKeys(
  args: InferRequestType<typeof client.ssh_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh_keys.$get(args, options))
}

export async function postSshKeys(
  args: InferRequestType<typeof client.ssh_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh_keys.$post(args, options))
}

export async function getSshKeysId(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh_keys[':id'].$get(args, options))
}

export async function putSshKeysId(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh_keys[':id'].$put(args, options))
}

export async function deleteSshKeysId(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh_keys[':id'].$delete(args, options))
}

export async function getVolumes(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$get(args, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesId(
  args: InferRequestType<(typeof client.volumes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].$get(args, options))
}

export async function putVolumesId(
  args: InferRequestType<(typeof client.volumes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].$put(args, options))
}

export async function deleteVolumesId(
  args: InferRequestType<(typeof client.volumes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].$delete(args, options))
}

export async function getVolumesIdActions(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions.$get(args, options))
}

export async function postVolumesIdActionsAttach(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions.attach.$post(args, options))
}

export async function postVolumesIdActionsChangeProtection(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions.change_protection.$post(args, options))
}

export async function postVolumesIdActionsDetach(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['detach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions.detach.$post(args, options))
}

export async function postVolumesIdActionsResize(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions.resize.$post(args, options))
}

export async function getVolumesIdActionsActionId(
  args: InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':id'].actions[':action_id'].$get(args, options))
}
