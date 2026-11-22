import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLocationsGlobalFirewallPolicies(
  args: InferRequestType<typeof client.locations.global.firewallPolicies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.global.firewallPolicies.$get(args, options))
}

export async function postLocationsGlobalFirewallPolicies(
  args: InferRequestType<typeof client.locations.global.firewallPolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.global.firewallPolicies.$post(args, options))
}

export async function getLocationsGlobalFirewallPoliciesListAssociations(
  args: InferRequestType<typeof client.locations.global.firewallPolicies.listAssociations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies.listAssociations.$get(args, options),
  )
}

export async function getLocationsGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].$get(args, options),
  )
}

export async function deleteLocationsGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].$delete(args, options),
  )
}

export async function patchLocationsGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].$patch(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyAddAssociation(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['addAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].addAssociation.$post(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyAddRule(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['addRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].addRule.$post(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyCloneRules(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['cloneRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].cloneRules.$post(args, options),
  )
}

export async function getLocationsGlobalFirewallPoliciesFirewallPolicyGetAssociation(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['getAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].getAssociation.$get(args, options),
  )
}

export async function getLocationsGlobalFirewallPoliciesFirewallPolicyGetRule(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['getRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].getRule.$get(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyMove(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].move.$post(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyPatchRule(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['patchRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].patchRule.$post(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveAssociation(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['removeAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].removeAssociation.$post(
      args,
      options,
    ),
  )
}

export async function postLocationsGlobalFirewallPoliciesFirewallPolicyRemoveRule(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':firewallPolicy']['removeRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':firewallPolicy'].removeRule.$post(args, options),
  )
}

export async function getLocationsGlobalFirewallPoliciesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postLocationsGlobalFirewallPoliciesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.locations.global.firewallPolicies)[':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.firewallPolicies[':resource'].testIamPermissions.$post(args, options),
  )
}

export async function getLocationsGlobalOperations(
  args: InferRequestType<typeof client.locations.global.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.global.operations.$get(args, options))
}

export async function getLocationsGlobalOperationsOperation(
  args: InferRequestType<(typeof client.locations.global.operations)[':operation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.global.operations[':operation'].$get(args, options))
}

export async function deleteLocationsGlobalOperationsOperation(
  args: InferRequestType<(typeof client.locations.global.operations)[':operation']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.locations.global.operations[':operation'].$delete(args, options),
  )
}

export async function getProjectsProject(
  args: InferRequestType<(typeof client.projects)[':project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].$get(args, options))
}

export async function getProjectsProjectAggregatedAcceleratorTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['acceleratorTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.acceleratorTypes.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedAddresses(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.addresses.$get(args, options))
}

export async function getProjectsProjectAggregatedAutoscalers(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['autoscalers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.autoscalers.$get(args, options))
}

export async function getProjectsProjectAggregatedBackendServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['backendServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.backendServices.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedCommitments(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['commitments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.commitments.$get(args, options))
}

export async function getProjectsProjectAggregatedDiskTypes(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['diskTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.diskTypes.$get(args, options))
}

export async function getProjectsProjectAggregatedDisks(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['disks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.disks.$get(args, options))
}

export async function getProjectsProjectAggregatedForwardingRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['forwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.forwardingRules.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['healthChecks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.healthChecks.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedInstanceGroupManagers(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['instanceGroupManagers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.instanceGroupManagers.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedInstanceGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['instanceGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.instanceGroups.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedInstanceTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['instanceTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.instanceTemplates.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedInstances(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.instances.$get(args, options))
}

export async function getProjectsProjectAggregatedInstantSnapshots(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['instantSnapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.instantSnapshots.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedInterconnectAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['interconnectAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.interconnectAttachments.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedMachineTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['machineTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.machineTypes.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedNetworkAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['networkAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.networkAttachments.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedNetworkEdgeSecurityServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['networkEdgeSecurityServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.networkEdgeSecurityServices.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['networkEndpointGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.networkEndpointGroups.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedNodeGroups(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['nodeGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.nodeGroups.$get(args, options))
}

export async function getProjectsProjectAggregatedNodeTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['nodeTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.nodeTemplates.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedNodeTypes(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['nodeTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.nodeTypes.$get(args, options))
}

export async function getProjectsProjectAggregatedOperations(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.operations.$get(args, options))
}

export async function getProjectsProjectAggregatedPacketMirrorings(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['packetMirrorings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.packetMirrorings.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedPublicDelegatedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['publicDelegatedPrefixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.publicDelegatedPrefixes.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedReservations(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['reservations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.reservations.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['resourcePolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.resourcePolicies.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedRouters(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['routers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.routers.$get(args, options))
}

export async function getProjectsProjectAggregatedSecurityPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['securityPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.securityPolicies.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedServiceAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['serviceAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.serviceAttachments.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['sslCertificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.sslCertificates.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedSslPolicies(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['sslPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.sslPolicies.$get(args, options))
}

export async function getProjectsProjectAggregatedSubnetworks(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['subnetworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.subnetworks.$get(args, options))
}

export async function getProjectsProjectAggregatedSubnetworksListUsable(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['subnetworks']['listUsable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.subnetworks.listUsable.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedTargetHttpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['targetHttpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.targetHttpProxies.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedTargetHttpsProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['targetHttpsProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.targetHttpsProxies.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedTargetInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['targetInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.targetInstances.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedTargetPools(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['targetPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.targetPools.$get(args, options))
}

export async function getProjectsProjectAggregatedTargetTcpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['targetTcpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.targetTcpProxies.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedTargetVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['aggregated']['targetVpnGateways']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].aggregated.targetVpnGateways.$get(args, options),
  )
}

export async function getProjectsProjectAggregatedUrlMaps(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['urlMaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.urlMaps.$get(args, options))
}

export async function getProjectsProjectAggregatedVpnGateways(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['vpnGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.vpnGateways.$get(args, options))
}

export async function getProjectsProjectAggregatedVpnTunnels(
  args: InferRequestType<(typeof client.projects)[':project']['aggregated']['vpnTunnels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].aggregated.vpnTunnels.$get(args, options))
}

export async function postProjectsProjectDisableXpnHost(
  args: InferRequestType<(typeof client.projects)[':project']['disableXpnHost']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].disableXpnHost.$post(args, options))
}

export async function postProjectsProjectDisableXpnResource(
  args: InferRequestType<(typeof client.projects)[':project']['disableXpnResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].disableXpnResource.$post(args, options))
}

export async function postProjectsProjectEnableXpnHost(
  args: InferRequestType<(typeof client.projects)[':project']['enableXpnHost']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].enableXpnHost.$post(args, options))
}

export async function postProjectsProjectEnableXpnResource(
  args: InferRequestType<(typeof client.projects)[':project']['enableXpnResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].enableXpnResource.$post(args, options))
}

export async function getProjectsProjectGetXpnHost(
  args: InferRequestType<(typeof client.projects)[':project']['getXpnHost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].getXpnHost.$get(args, options))
}

export async function getProjectsProjectGetXpnResources(
  args: InferRequestType<(typeof client.projects)[':project']['getXpnResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].getXpnResources.$get(args, options))
}

export async function getProjectsProjectGlobalAddresses(
  args: InferRequestType<(typeof client.projects)[':project']['global']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.addresses.$get(args, options))
}

export async function postProjectsProjectGlobalAddresses(
  args: InferRequestType<(typeof client.projects)[':project']['global']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.addresses.$post(args, options))
}

export async function getProjectsProjectGlobalAddressesAddress(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['addresses'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.addresses[':address'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalAddressesAddress(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['addresses'][':address']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.addresses[':address'].$delete(args, options),
  )
}

export async function postProjectsProjectGlobalAddressesAddressMove(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['addresses'][':address']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.addresses[':address'].move.$post(args, options),
  )
}

export async function postProjectsProjectGlobalAddressesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['addresses'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.addresses[':resource'].setLabels.$post(args, options),
  )
}

export async function getProjectsProjectGlobalBackendBuckets(
  args: InferRequestType<(typeof client.projects)[':project']['global']['backendBuckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.backendBuckets.$get(args, options))
}

export async function postProjectsProjectGlobalBackendBuckets(
  args: InferRequestType<(typeof client.projects)[':project']['global']['backendBuckets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.backendBuckets.$post(args, options))
}

export async function getProjectsProjectGlobalBackendBucketsBackendBucket(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalBackendBucketsBackendBucket(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalBackendBucketsBackendBucket(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalBackendBucketsBackendBucket(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalBackendBucketsBackendBucketAddSignedUrlKey(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['addSignedUrlKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].addSignedUrlKey.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendBucketsBackendBucketDeleteSignedUrlKey(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['deleteSignedUrlKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].deleteSignedUrlKey.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendBucketsBackendBucketSetEdgeSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':backendBucket']['setEdgeSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':backendBucket'].setEdgeSecurityPolicy.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalBackendBucketsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectGlobalBackendBucketsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendBucketsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendBuckets'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendBuckets[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalBackendServices(
  args: InferRequestType<(typeof client.projects)[':project']['global']['backendServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.backendServices.$get(args, options))
}

export async function postProjectsProjectGlobalBackendServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices.$post(args, options),
  )
}

export async function getProjectsProjectGlobalBackendServicesListUsable(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices']['listUsable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices.listUsable.$get(args, options),
  )
}

export async function getProjectsProjectGlobalBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalBackendServicesBackendServiceAddSignedUrlKey(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['addSignedUrlKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].addSignedUrlKey.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendServicesBackendServiceDeleteSignedUrlKey(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['deleteSignedUrlKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].deleteSignedUrlKey.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendServicesBackendServiceGetHealth(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['getHealth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].getHealth.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendServicesBackendServiceSetEdgeSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['setEdgeSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[
      ':backendService'
    ].setEdgeSecurityPolicy.$post(args, options),
  )
}

export async function postProjectsProjectGlobalBackendServicesBackendServiceSetSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':backendService']['setSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':backendService'].setSecurityPolicy.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalBackendServicesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendServicesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalBackendServicesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['backendServices'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.backendServices[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalExternalVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways.$get(args, options),
  )
}

export async function postProjectsProjectGlobalExternalVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways.$post(args, options),
  )
}

export async function getProjectsProjectGlobalExternalVpnGatewaysExternalVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways'][':externalVpnGateway']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways[':externalVpnGateway'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectGlobalExternalVpnGatewaysExternalVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways'][':externalVpnGateway']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways[':externalVpnGateway'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalExternalVpnGatewaysResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalExternalVpnGatewaysResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['externalVpnGateways'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.externalVpnGateways[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalFirewallPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalFirewallPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['addAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].addAssociation.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyAddRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['addRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].addRule.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyCloneRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['cloneRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].cloneRules.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['getAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].getAssociation.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalFirewallPoliciesFirewallPolicyGetRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['getRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].getRule.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyPatchRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['patchRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].patchRule.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['removeAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].removeAssociation.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesFirewallPolicyRemoveRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':firewallPolicy']['removeRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':firewallPolicy'].removeRule.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalFirewallPoliciesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalFirewallPoliciesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewallPolicies'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewallPolicies[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalFirewalls(
  args: InferRequestType<(typeof client.projects)[':project']['global']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.firewalls.$get(args, options))
}

export async function postProjectsProjectGlobalFirewalls(
  args: InferRequestType<(typeof client.projects)[':project']['global']['firewalls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.firewalls.$post(args, options))
}

export async function getProjectsProjectGlobalFirewallsFirewall(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewalls'][':firewall']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewalls[':firewall'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalFirewallsFirewall(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewalls'][':firewall']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewalls[':firewall'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalFirewallsFirewall(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewalls'][':firewall']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewalls[':firewall'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalFirewallsFirewall(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['firewalls'][':firewall']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.firewalls[':firewall'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalForwardingRules(
  args: InferRequestType<(typeof client.projects)[':project']['global']['forwardingRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.forwardingRules.$get(args, options))
}

export async function postProjectsProjectGlobalForwardingRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules.$post(args, options),
  )
}

export async function getProjectsProjectGlobalForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules'][':forwardingRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules[':forwardingRule'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules'][':forwardingRule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules[':forwardingRule'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules'][':forwardingRule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules[':forwardingRule'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalForwardingRulesForwardingRuleSetTarget(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules'][':forwardingRule']['setTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules[':forwardingRule'].setTarget.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalForwardingRulesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['forwardingRules'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.forwardingRules[':resource'].setLabels.$post(args, options),
  )
}

export async function getProjectsProjectGlobalHealthChecks(
  args: InferRequestType<(typeof client.projects)[':project']['global']['healthChecks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.healthChecks.$get(args, options))
}

export async function postProjectsProjectGlobalHealthChecks(
  args: InferRequestType<(typeof client.projects)[':project']['global']['healthChecks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.healthChecks.$post(args, options))
}

export async function getProjectsProjectGlobalHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['healthChecks'][':healthCheck']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.healthChecks[':healthCheck'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['healthChecks'][':healthCheck']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.healthChecks[':healthCheck'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['healthChecks'][':healthCheck']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.healthChecks[':healthCheck'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['healthChecks'][':healthCheck']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.healthChecks[':healthCheck'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalHttpHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks.$get(args, options),
  )
}

export async function postProjectsProjectGlobalHttpHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks.$post(args, options),
  )
}

export async function getProjectsProjectGlobalHttpHealthChecksHttpHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks'][':httpHealthCheck']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks[':httpHealthCheck'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalHttpHealthChecksHttpHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks'][':httpHealthCheck']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks[':httpHealthCheck'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalHttpHealthChecksHttpHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks'][':httpHealthCheck']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks[':httpHealthCheck'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalHttpHealthChecksHttpHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpHealthChecks'][':httpHealthCheck']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpHealthChecks[':httpHealthCheck'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalHttpsHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks.$get(args, options),
  )
}

export async function postProjectsProjectGlobalHttpsHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks.$post(args, options),
  )
}

export async function getProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks'][':httpsHealthCheck']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks[':httpsHealthCheck'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks'][':httpsHealthCheck']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks[':httpsHealthCheck'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks'][':httpsHealthCheck']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks[':httpsHealthCheck'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['httpsHealthChecks'][':httpsHealthCheck']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.httpsHealthChecks[':httpsHealthCheck'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalImages(
  args: InferRequestType<(typeof client.projects)[':project']['global']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.images.$get(args, options))
}

export async function postProjectsProjectGlobalImages(
  args: InferRequestType<(typeof client.projects)[':project']['global']['images']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.images.$post(args, options))
}

export async function getProjectsProjectGlobalImagesFamilyFamily(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images']['family'][':family']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images.family[':family'].$get(args, options),
  )
}

export async function getProjectsProjectGlobalImagesImage(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':image'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalImagesImage(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':image']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':image'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalImagesImage(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':image']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':image'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalImagesImageDeprecate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':image']['deprecate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':image'].deprecate.$post(args, options),
  )
}

export async function getProjectsProjectGlobalImagesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectGlobalImagesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectGlobalImagesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':resource'].setLabels.$post(args, options),
  )
}

export async function postProjectsProjectGlobalImagesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['images'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.images[':resource'].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectGlobalInstanceTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates.$get(args, options),
  )
}

export async function postProjectsProjectGlobalInstanceTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates.$post(args, options),
  )
}

export async function getProjectsProjectGlobalInstanceTemplatesInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates'][':instanceTemplate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates[':instanceTemplate'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalInstanceTemplatesInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates'][':instanceTemplate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates[':instanceTemplate'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalInstanceTemplatesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalInstanceTemplatesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalInstanceTemplatesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['instanceTemplates'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.instanceTemplates[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalInterconnectLocations(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnectLocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnectLocations.$get(args, options),
  )
}

export async function getProjectsProjectGlobalInterconnectLocationsInterconnectLocation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnectLocations'][':interconnectLocation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnectLocations[':interconnectLocation'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalInterconnectRemoteLocations(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnectRemoteLocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnectRemoteLocations.$get(args, options),
  )
}

export async function getProjectsProjectGlobalInterconnectRemoteLocationsInterconnectRemoteLocation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnectRemoteLocations'][':interconnectRemoteLocation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnectRemoteLocations[
      ':interconnectRemoteLocation'
    ].$get(args, options),
  )
}

export async function getProjectsProjectGlobalInterconnects(
  args: InferRequestType<(typeof client.projects)[':project']['global']['interconnects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.interconnects.$get(args, options))
}

export async function postProjectsProjectGlobalInterconnects(
  args: InferRequestType<(typeof client.projects)[':project']['global']['interconnects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.interconnects.$post(args, options))
}

export async function getProjectsProjectGlobalInterconnectsInterconnect(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':interconnect']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':interconnect'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalInterconnectsInterconnect(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':interconnect']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':interconnect'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalInterconnectsInterconnect(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':interconnect']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':interconnect'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalInterconnectsInterconnectGetDiagnostics(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':interconnect']['getDiagnostics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':interconnect'].getDiagnostics.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalInterconnectsInterconnectGetMacsecConfig(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':interconnect']['getMacsecConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':interconnect'].getMacsecConfig.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalInterconnectsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['interconnects'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.interconnects[':resource'].setLabels.$post(args, options),
  )
}

export async function getProjectsProjectGlobalLicenseCodesLicenseCode(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenseCodes'][':licenseCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenseCodes[':licenseCode'].$get(args, options),
  )
}

export async function postProjectsProjectGlobalLicenseCodesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenseCodes'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenseCodes[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalLicenses(
  args: InferRequestType<(typeof client.projects)[':project']['global']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.licenses.$get(args, options))
}

export async function postProjectsProjectGlobalLicenses(
  args: InferRequestType<(typeof client.projects)[':project']['global']['licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.licenses.$post(args, options))
}

export async function getProjectsProjectGlobalLicensesLicense(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenses'][':license']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenses[':license'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalLicensesLicense(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenses'][':license']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenses[':license'].$delete(args, options),
  )
}

export async function getProjectsProjectGlobalLicensesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenses'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenses[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectGlobalLicensesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenses'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenses[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectGlobalLicensesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['licenses'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.licenses[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalMachineImages(
  args: InferRequestType<(typeof client.projects)[':project']['global']['machineImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.machineImages.$get(args, options))
}

export async function postProjectsProjectGlobalMachineImages(
  args: InferRequestType<(typeof client.projects)[':project']['global']['machineImages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.machineImages.$post(args, options))
}

export async function getProjectsProjectGlobalMachineImagesMachineImage(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['machineImages'][':machineImage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.machineImages[':machineImage'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalMachineImagesMachineImage(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['machineImages'][':machineImage']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.machineImages[':machineImage'].$delete(args, options),
  )
}

export async function getProjectsProjectGlobalMachineImagesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['machineImages'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.machineImages[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectGlobalMachineImagesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['machineImages'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.machineImages[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectGlobalMachineImagesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['machineImages'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.machineImages[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups.$get(args, options),
  )
}

export async function postProjectsProjectGlobalNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups.$post(args, options),
  )
}

export async function getProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups'][':networkEndpointGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups[':networkEndpointGroup'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups'][':networkEndpointGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups[':networkEndpointGroup'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups'][':networkEndpointGroup']['attachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups[
      ':networkEndpointGroup'
    ].attachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups'][':networkEndpointGroup']['detachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups[
      ':networkEndpointGroup'
    ].detachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networkEndpointGroups'][':networkEndpointGroup']['listNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networkEndpointGroups[
      ':networkEndpointGroup'
    ].listNetworkEndpoints.$post(args, options),
  )
}

export async function getProjectsProjectGlobalNetworks(
  args: InferRequestType<(typeof client.projects)[':project']['global']['networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.networks.$get(args, options))
}

export async function postProjectsProjectGlobalNetworks(
  args: InferRequestType<(typeof client.projects)[':project']['global']['networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.networks.$post(args, options))
}

export async function getProjectsProjectGlobalNetworksNetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalNetworksNetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalNetworksNetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalNetworksNetworkAddPeering(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['addPeering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].addPeering.$post(args, options),
  )
}

export async function getProjectsProjectGlobalNetworksNetworkGetEffectiveFirewalls(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['getEffectiveFirewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].getEffectiveFirewalls.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalNetworksNetworkListPeeringRoutes(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['listPeeringRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].listPeeringRoutes.$get(args, options),
  )
}

export async function postProjectsProjectGlobalNetworksNetworkRemovePeering(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['removePeering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].removePeering.$post(args, options),
  )
}

export async function postProjectsProjectGlobalNetworksNetworkSwitchToCustomMode(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['switchToCustomMode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].switchToCustomMode.$post(args, options),
  )
}

export async function patchProjectsProjectGlobalNetworksNetworkUpdatePeering(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['networks'][':network']['updatePeering']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.networks[':network'].updatePeering.$patch(args, options),
  )
}

export async function getProjectsProjectGlobalOperations(
  args: InferRequestType<(typeof client.projects)[':project']['global']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.operations.$get(args, options))
}

export async function getProjectsProjectGlobalOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.operations[':operation'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['operations'][':operation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.operations[':operation'].$delete(args, options),
  )
}

export async function postProjectsProjectGlobalOperationsOperationWait(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['operations'][':operation']['wait']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.operations[':operation'].wait.$post(args, options),
  )
}

export async function getProjectsProjectGlobalPublicAdvertisedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes.$get(args, options),
  )
}

export async function postProjectsProjectGlobalPublicAdvertisedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes.$post(args, options),
  )
}

export async function getProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes'][':publicAdvertisedPrefix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes[':publicAdvertisedPrefix'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes'][':publicAdvertisedPrefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes[':publicAdvertisedPrefix'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes'][':publicAdvertisedPrefix']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes[':publicAdvertisedPrefix'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixAnnounce(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes'][':publicAdvertisedPrefix']['announce']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes[
      ':publicAdvertisedPrefix'
    ].announce.$post(args, options),
  )
}

export async function postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixWithdraw(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicAdvertisedPrefixes'][':publicAdvertisedPrefix']['withdraw']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicAdvertisedPrefixes[
      ':publicAdvertisedPrefix'
    ].withdraw.$post(args, options),
  )
}

export async function getProjectsProjectGlobalPublicDelegatedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicDelegatedPrefixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicDelegatedPrefixes.$get(args, options),
  )
}

export async function postProjectsProjectGlobalPublicDelegatedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicDelegatedPrefixes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicDelegatedPrefixes.$post(args, options),
  )
}

export async function getProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicDelegatedPrefixes[':publicDelegatedPrefix'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicDelegatedPrefixes[':publicDelegatedPrefix'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.publicDelegatedPrefixes[':publicDelegatedPrefix'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalRoutes(
  args: InferRequestType<(typeof client.projects)[':project']['global']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.routes.$get(args, options))
}

export async function postProjectsProjectGlobalRoutes(
  args: InferRequestType<(typeof client.projects)[':project']['global']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.routes.$post(args, options))
}

export async function getProjectsProjectGlobalRoutesRoute(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['routes'][':route']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.routes[':route'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalRoutesRoute(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['routes'][':route']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.routes[':route'].$delete(args, options),
  )
}

export async function getProjectsProjectGlobalSecurityPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalSecurityPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalSecurityPoliciesListPreconfiguredExpressionSets(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies']['listPreconfiguredExpressionSets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies.listPreconfiguredExpressionSets.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalSecurityPoliciesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':resource'].setLabels.$post(args, options),
  )
}

export async function getProjectsProjectGlobalSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalSecurityPoliciesSecurityPolicyAddRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['addRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].addRule.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalSecurityPoliciesSecurityPolicyGetRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['getRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].getRule.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalSecurityPoliciesSecurityPolicyPatchRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['patchRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].patchRule.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalSecurityPoliciesSecurityPolicyRemoveRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['securityPolicies'][':securityPolicy']['removeRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.securityPolicies[':securityPolicy'].removeRule.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalSnapshotSettings(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshotSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshotSettings.$get(args, options),
  )
}

export async function patchProjectsProjectGlobalSnapshotSettings(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshotSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshotSettings.$patch(args, options),
  )
}

export async function getProjectsProjectGlobalSnapshots(
  args: InferRequestType<(typeof client.projects)[':project']['global']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.snapshots.$get(args, options))
}

export async function postProjectsProjectGlobalSnapshots(
  args: InferRequestType<(typeof client.projects)[':project']['global']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.snapshots.$post(args, options))
}

export async function getProjectsProjectGlobalSnapshotsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectGlobalSnapshotsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectGlobalSnapshotsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':resource'].setLabels.$post(args, options),
  )
}

export async function postProjectsProjectGlobalSnapshotsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalSnapshotsSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':snapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':snapshot'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalSnapshotsSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['snapshots'][':snapshot']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.snapshots[':snapshot'].$delete(args, options),
  )
}

export async function getProjectsProjectGlobalSslCertificates(
  args: InferRequestType<(typeof client.projects)[':project']['global']['sslCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.sslCertificates.$get(args, options))
}

export async function postProjectsProjectGlobalSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslCertificates.$post(args, options),
  )
}

export async function getProjectsProjectGlobalSslCertificatesSslCertificate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslCertificates'][':sslCertificate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslCertificates[':sslCertificate'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalSslCertificatesSslCertificate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslCertificates'][':sslCertificate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslCertificates[':sslCertificate'].$delete(args, options),
  )
}

export async function getProjectsProjectGlobalSslPolicies(
  args: InferRequestType<(typeof client.projects)[':project']['global']['sslPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.sslPolicies.$get(args, options))
}

export async function postProjectsProjectGlobalSslPolicies(
  args: InferRequestType<(typeof client.projects)[':project']['global']['sslPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.sslPolicies.$post(args, options))
}

export async function getProjectsProjectGlobalSslPoliciesListAvailableFeatures(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslPolicies']['listAvailableFeatures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslPolicies.listAvailableFeatures.$get(args, options),
  )
}

export async function getProjectsProjectGlobalSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslPolicies'][':sslPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslPolicies[':sslPolicy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslPolicies'][':sslPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslPolicies[':sslPolicy'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['sslPolicies'][':sslPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.sslPolicies[':sslPolicy'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalTargetGrpcProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetGrpcProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetGrpcProxies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalTargetGrpcProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetGrpcProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetGrpcProxies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetGrpcProxies'][':targetGrpcProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetGrpcProxies[':targetGrpcProxy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetGrpcProxies'][':targetGrpcProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetGrpcProxies[':targetGrpcProxy'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalTargetGrpcProxiesTargetGrpcProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetGrpcProxies'][':targetGrpcProxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetGrpcProxies[':targetGrpcProxy'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalTargetHttpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpProxies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalTargetHttpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpProxies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalTargetHttpProxiesTargetHttpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpProxies'][':targetHttpProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpProxies[':targetHttpProxy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalTargetHttpProxiesTargetHttpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpProxies'][':targetHttpProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpProxies[':targetHttpProxy'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalTargetHttpProxiesTargetHttpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpProxies'][':targetHttpProxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpProxies[':targetHttpProxy'].$patch(args, options),
  )
}

export async function getProjectsProjectGlobalTargetHttpsProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalTargetHttpsProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[':targetHttpsProxy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[':targetHttpsProxy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[':targetHttpsProxy'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetCertificateMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['setCertificateMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[
      ':targetHttpsProxy'
    ].setCertificateMap.$post(args, options),
  )
}

export async function postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetQuicOverride(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['setQuicOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[
      ':targetHttpsProxy'
    ].setQuicOverride.$post(args, options),
  )
}

export async function postProjectsProjectGlobalTargetHttpsProxiesTargetHttpsProxySetSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetHttpsProxies'][':targetHttpsProxy']['setSslPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetHttpsProxies[':targetHttpsProxy'].setSslPolicy.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalTargetSslProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalTargetSslProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalTargetSslProxiesTargetSslProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalTargetSslProxiesTargetSslProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].$delete(args, options),
  )
}

export async function postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['setBackendService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].setBackendService.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetCertificateMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['setCertificateMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].setCertificateMap.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetProxyHeader(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['setProxyHeader']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].setProxyHeader.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['setSslCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].setSslCertificates.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetSslProxiesTargetSslProxySetSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetSslProxies'][':targetSslProxy']['setSslPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetSslProxies[':targetSslProxy'].setSslPolicy.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalTargetTcpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies.$get(args, options),
  )
}

export async function postProjectsProjectGlobalTargetTcpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies.$post(args, options),
  )
}

export async function getProjectsProjectGlobalTargetTcpProxiesTargetTcpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies'][':targetTcpProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies[':targetTcpProxy'].$get(args, options),
  )
}

export async function deleteProjectsProjectGlobalTargetTcpProxiesTargetTcpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies'][':targetTcpProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies[':targetTcpProxy'].$delete(args, options),
  )
}

export async function postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies'][':targetTcpProxy']['setBackendService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies[':targetTcpProxy'].setBackendService.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectGlobalTargetTcpProxiesTargetTcpProxySetProxyHeader(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['targetTcpProxies'][':targetTcpProxy']['setProxyHeader']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.targetTcpProxies[':targetTcpProxy'].setProxyHeader.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectGlobalUrlMaps(
  args: InferRequestType<(typeof client.projects)[':project']['global']['urlMaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.urlMaps.$get(args, options))
}

export async function postProjectsProjectGlobalUrlMaps(
  args: InferRequestType<(typeof client.projects)[':project']['global']['urlMaps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].global.urlMaps.$post(args, options))
}

export async function getProjectsProjectGlobalUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].$get(args, options),
  )
}

export async function putProjectsProjectGlobalUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].$put(args, options),
  )
}

export async function deleteProjectsProjectGlobalUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].$delete(args, options),
  )
}

export async function patchProjectsProjectGlobalUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].$patch(args, options),
  )
}

export async function postProjectsProjectGlobalUrlMapsUrlMapInvalidateCache(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['invalidateCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].invalidateCache.$post(args, options),
  )
}

export async function postProjectsProjectGlobalUrlMapsUrlMapValidate(
  args: InferRequestType<
    (typeof client.projects)[':project']['global']['urlMaps'][':urlMap']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].global.urlMaps[':urlMap'].validate.$post(args, options),
  )
}

export async function postProjectsProjectListXpnHosts(
  args: InferRequestType<(typeof client.projects)[':project']['listXpnHosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].listXpnHosts.$post(args, options))
}

export async function postProjectsProjectMoveDisk(
  args: InferRequestType<(typeof client.projects)[':project']['moveDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].moveDisk.$post(args, options))
}

export async function postProjectsProjectMoveInstance(
  args: InferRequestType<(typeof client.projects)[':project']['moveInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].moveInstance.$post(args, options))
}

export async function getProjectsProjectRegions(
  args: InferRequestType<(typeof client.projects)[':project']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].regions.$get(args, options))
}

export async function getProjectsProjectRegionsRegion(
  args: InferRequestType<(typeof client.projects)[':project']['regions'][':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].regions[':region'].$get(args, options))
}

export async function getProjectsProjectRegionsRegionAddresses(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionAddresses(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionAddressesAddress(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses[':address'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionAddressesAddress(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses'][':address']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses[':address'].$delete(args, options),
  )
}

export async function postProjectsProjectRegionsRegionAddressesAddressMove(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses'][':address']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses[':address'].move.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionAddressesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['addresses'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].addresses[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers.$get(args, options),
  )
}

export async function putProjectsProjectRegionsRegionAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers.$put(args, options),
  )
}

export async function postProjectsProjectRegionsRegionAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers.$post(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers.$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionAutoscalersAutoscaler(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers'][':autoscaler']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers[':autoscaler'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionAutoscalersAutoscaler(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['autoscalers'][':autoscaler']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].autoscalers[':autoscaler'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionBackendServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionBackendServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionBackendServicesListUsable(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices']['listUsable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices.listUsable.$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':backendService'].$get(
      args,
      options,
    ),
  )
}

export async function putProjectsProjectRegionsRegionBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':backendService'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':backendService'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionBackendServicesBackendService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':backendService'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionBackendServicesBackendServiceGetHealth(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['getHealth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[
      ':backendService'
    ].getHealth.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionBackendServicesBackendServiceSetSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':backendService']['setSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[
      ':backendService'
    ].setSecurityPolicy.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionBackendServicesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionBackendServicesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionBackendServicesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['backendServices'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].backendServices[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionCommitments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['commitments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].commitments.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionCommitments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['commitments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].commitments.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionCommitmentsCommitment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['commitments'][':commitment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].commitments[':commitment'].$get(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionCommitmentsCommitment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['commitments'][':commitment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].commitments[':commitment'].$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionDiskTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['diskTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].diskTypes.$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionDiskTypesDiskType(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['diskTypes'][':diskType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].diskTypes[':diskType'].$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionDisks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionDisks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionDisksBulkInsert(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks']['bulkInsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks.bulkInsert.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionDisksStopGroupAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks']['stopGroupAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks.stopGroupAsyncReplication.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskAddResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['addResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].addResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskCreateSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['createSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].createSnapshot.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskRemoveResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['removeResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].removeResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskResize(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].resize.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskStartAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['startAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].startAsyncReplication.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksDiskStopAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':disk']['stopAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':disk'].stopAsyncReplication.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionDisksResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionDisksResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['disks'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].disks[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPoliciesGetEffectiveFirewalls(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies']['getEffectiveFirewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies.getEffectiveFirewalls.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':firewallPolicy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':firewallPolicy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':firewallPolicy'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['addAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].addAssociation.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyAddRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['addRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].addRule.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyCloneRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['cloneRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].cloneRules.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['getAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].getAssociation.$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyGetRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['getRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':firewallPolicy'].getRule.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyPatchRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['patchRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].patchRule.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveAssociation(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['removeAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].removeAssociation.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesFirewallPolicyRemoveRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':firewallPolicy']['removeRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':firewallPolicy'
    ].removeRule.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionFirewallPoliciesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionFirewallPoliciesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['firewallPolicies'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].firewallPolicies[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionForwardingRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionForwardingRules(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules'][':forwardingRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules[':forwardingRule'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules'][':forwardingRule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules[':forwardingRule'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionForwardingRulesForwardingRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules'][':forwardingRule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules[':forwardingRule'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionForwardingRulesForwardingRuleSetTarget(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules'][':forwardingRule']['setTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules[
      ':forwardingRule'
    ].setTarget.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionForwardingRulesResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['forwardingRules'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].forwardingRules[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionHealthCheckServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthCheckServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthCheckServices.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionHealthCheckServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthCheckServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthCheckServices.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionHealthCheckServicesHealthCheckService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthCheckServices'][':healthCheckService']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthCheckServices[':healthCheckService'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionHealthCheckServicesHealthCheckService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthCheckServices'][':healthCheckService']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthCheckServices[
      ':healthCheckService'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionHealthCheckServicesHealthCheckService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthCheckServices'][':healthCheckService']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthCheckServices[
      ':healthCheckService'
    ].$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionHealthChecks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks'][':healthCheck']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks[':healthCheck'].$get(args, options),
  )
}

export async function putProjectsProjectRegionsRegionHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks'][':healthCheck']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks[':healthCheck'].$put(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks'][':healthCheck']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks[':healthCheck'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionHealthChecksHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['healthChecks'][':healthCheck']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].healthChecks[':healthCheck'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionInstanceGroupManagers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagers(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerAbandonInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['abandonInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].abandonInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['applyUpdatesToInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].applyUpdatesToInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerCreateInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['createInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].createInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeleteInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['deleteInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].deleteInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['deletePerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].deletePerInstanceConfigs.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListErrors(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['listErrors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listErrors.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListManagedInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['listManagedInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listManagedInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['listPerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listPerInstanceConfigs.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['patchPerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].patchPerInstanceConfigs.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerRecreateInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['recreateInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].recreateInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerResize(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].resize.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['setInstanceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].setInstanceTemplate.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerSetTargetPools(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['setTargetPools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].setTargetPools.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroupManagers'][':instanceGroupManager']['updatePerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroupManagers[
      ':instanceGroupManager'
    ].updatePerInstanceConfigs.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroups.$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceGroupsInstanceGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroups'][':instanceGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroups[':instanceGroup'].$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupListInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroups'][':instanceGroup']['listInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroups[
      ':instanceGroup'
    ].listInstances.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupSetNamedPorts(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceGroups'][':instanceGroup']['setNamedPorts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceGroups[
      ':instanceGroup'
    ].setNamedPorts.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceTemplates.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstanceTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceTemplates.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceTemplates'][':instanceTemplate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceTemplates[':instanceTemplate'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instanceTemplates'][':instanceTemplate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instanceTemplates[':instanceTemplate'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionInstancesBulkInsert(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instances']['bulkInsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instances.bulkInsert.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstantSnapshots(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInstantSnapshots(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':instantSnapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[':instantSnapshot'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':instantSnapshot']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[':instantSnapshot'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionInstantSnapshotsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionInstantSnapshotsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionInstantSnapshotsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionInstantSnapshotsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['instantSnapshots'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].instantSnapshots[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInterconnectAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInterconnectAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments'][':interconnectAttachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments[
      ':interconnectAttachment'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments'][':interconnectAttachment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments[
      ':interconnectAttachment'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionInterconnectAttachmentsInterconnectAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments'][':interconnectAttachment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments[
      ':interconnectAttachment'
    ].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionInterconnectAttachmentsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['interconnectAttachments'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].interconnectAttachments[
      ':resource'
    ].setLabels.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNetworkAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':networkAttachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[':networkAttachment'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':networkAttachment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[':networkAttachment'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionNetworkAttachmentsNetworkAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':networkAttachment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[':networkAttachment'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionNetworkAttachmentsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[
      ':resource'
    ].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkAttachmentsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[
      ':resource'
    ].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkAttachmentsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkAttachments'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkAttachments[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkEdgeSecurityServices(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEdgeSecurityServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEdgeSecurityServices.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEdgeSecurityServices'][':networkEdgeSecurityService']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEdgeSecurityServices[
      ':networkEdgeSecurityService'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEdgeSecurityServices'][':networkEdgeSecurityService']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEdgeSecurityServices[
      ':networkEdgeSecurityService'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityService(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEdgeSecurityServices'][':networkEdgeSecurityService']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEdgeSecurityServices[
      ':networkEdgeSecurityService'
    ].$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups'][':networkEndpointGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups'][':networkEndpointGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].$delete(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups'][':networkEndpointGroup']['attachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].attachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups'][':networkEndpointGroup']['detachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].detachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['networkEndpointGroups'][':networkEndpointGroup']['listNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].listNetworkEndpoints.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNodeTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNodeTemplates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNodeTemplatesNodeTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates'][':nodeTemplate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates[':nodeTemplate'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionNodeTemplatesNodeTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates'][':nodeTemplate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates[':nodeTemplate'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionNodeTemplatesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionNodeTemplatesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionNodeTemplatesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['nodeTemplates'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].nodeTemplates[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNotificationEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['notificationEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].notificationEndpoints.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionNotificationEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['notificationEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].notificationEndpoints.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpoint(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['notificationEndpoints'][':notificationEndpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].notificationEndpoints[
      ':notificationEndpoint'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpoint(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['notificationEndpoints'][':notificationEndpoint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].notificationEndpoints[
      ':notificationEndpoint'
    ].$delete(args, options),
  )
}

export async function getProjectsProjectRegionsRegionOperations(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].operations.$get(args, options),
  )
}

export async function getProjectsProjectRegionsRegionOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].operations[':operation'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['operations'][':operation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].operations[':operation'].$delete(args, options),
  )
}

export async function postProjectsProjectRegionsRegionOperationsOperationWait(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['operations'][':operation']['wait']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].operations[':operation'].wait.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionPacketMirrorings(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionPacketMirrorings(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionPacketMirroringsPacketMirroring(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings'][':packetMirroring']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings[':packetMirroring'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionPacketMirroringsPacketMirroring(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings'][':packetMirroring']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings[':packetMirroring'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionPacketMirroringsPacketMirroring(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings'][':packetMirroring']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings[':packetMirroring'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionPacketMirroringsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['packetMirrorings'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].packetMirrorings[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionPublicDelegatedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionPublicDelegatedPrefixes(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes[
      ':publicDelegatedPrefix'
    ].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes[
      ':publicDelegatedPrefix'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefix(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes[
      ':publicDelegatedPrefix'
    ].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixAnnounce(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['announce']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes[
      ':publicDelegatedPrefix'
    ].announce.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixWithdraw(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['publicDelegatedPrefixes'][':publicDelegatedPrefix']['withdraw']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].publicDelegatedPrefixes[
      ':publicDelegatedPrefix'
    ].withdraw.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionResourcePoliciesResourcePolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resourcePolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[':resourcePolicy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionResourcePoliciesResourcePolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resourcePolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[':resourcePolicy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionResourcePoliciesResourcePolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resourcePolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[':resourcePolicy'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionResourcePoliciesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionResourcePoliciesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionResourcePoliciesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['resourcePolicies'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].resourcePolicies[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionRouters(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionRouters(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionRoutersRouter(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].$get(args, options),
  )
}

export async function putProjectsProjectRegionsRegionRoutersRouter(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].$put(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionRoutersRouter(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionRoutersRouter(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionRoutersRouterGetNatIpInfo(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['getNatIpInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].getNatIpInfo.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionRoutersRouterGetNatMappingInfo(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['getNatMappingInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].getNatMappingInfo.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionRoutersRouterGetRouterStatus(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['getRouterStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].getRouterStatus.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionRoutersRouterPreview(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['routers'][':router']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].routers[':router'].preview.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSecurityPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSecurityPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[':securityPolicy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[':securityPolicy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[':securityPolicy'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyAddRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['addRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[
      ':securityPolicy'
    ].addRule.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyGetRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['getRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[':securityPolicy'].getRule.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyPatchRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['patchRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[
      ':securityPolicy'
    ].patchRule.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSecurityPoliciesSecurityPolicyRemoveRule(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['securityPolicies'][':securityPolicy']['removeRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].securityPolicies[
      ':securityPolicy'
    ].removeRule.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionServiceAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionServiceAttachments(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionServiceAttachmentsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[
      ':resource'
    ].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionServiceAttachmentsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[
      ':resource'
    ].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionServiceAttachmentsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionServiceAttachmentsServiceAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':serviceAttachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[':serviceAttachment'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionServiceAttachmentsServiceAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':serviceAttachment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[':serviceAttachment'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionServiceAttachmentsServiceAttachment(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['serviceAttachments'][':serviceAttachment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].serviceAttachments[':serviceAttachment'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslCertificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslCertificates.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslCertificates.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSslCertificatesSslCertificate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslCertificates'][':sslCertificate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslCertificates[':sslCertificate'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionSslCertificatesSslCertificate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslCertificates'][':sslCertificate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslCertificates[':sslCertificate'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionSslPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSslPolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSslPoliciesListAvailableFeatures(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies']['listAvailableFeatures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies.listAvailableFeatures.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies'][':sslPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies[':sslPolicy'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies'][':sslPolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies[':sslPolicy'].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionSslPoliciesSslPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['sslPolicies'][':sslPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].sslPolicies[':sslPolicy'].$patch(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSubnetworks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSubnetworks(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSubnetworksResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionSubnetworksResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionSubnetworksResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionSubnetworksSubnetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':subnetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[':subnetwork'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionSubnetworksSubnetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':subnetwork']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[':subnetwork'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionSubnetworksSubnetwork(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':subnetwork']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[':subnetwork'].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSubnetworksSubnetworkExpandIpCidrRange(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':subnetwork']['expandIpCidrRange']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[
      ':subnetwork'
    ].expandIpCidrRange.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionSubnetworksSubnetworkSetPrivateIpGoogleAccess(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['subnetworks'][':subnetwork']['setPrivateIpGoogleAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].subnetworks[
      ':subnetwork'
    ].setPrivateIpGoogleAccess.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetHttpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpProxies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetHttpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpProxies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpProxies'][':targetHttpProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpProxies[':targetHttpProxy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpProxies'][':targetHttpProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpProxies[':targetHttpProxy'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetHttpProxiesTargetHttpProxySetUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpProxies'][':targetHttpProxy']['setUrlMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpProxies[
      ':targetHttpProxy'
    ].setUrlMap.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetHttpsProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetHttpsProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies'][':targetHttpsProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies[':targetHttpsProxy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies'][':targetHttpsProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies[':targetHttpsProxy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies'][':targetHttpsProxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies[':targetHttpsProxy'].$patch(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies'][':targetHttpsProxy']['setSslCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies[
      ':targetHttpsProxy'
    ].setSslCertificates.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetHttpsProxiesTargetHttpsProxySetUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetHttpsProxies'][':targetHttpsProxy']['setUrlMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetHttpsProxies[
      ':targetHttpsProxy'
    ].setUrlMap.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetPools(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetPools(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetPoolsTargetPool(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionTargetPoolsTargetPool(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['addHealthCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].addHealthCheck.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolAddInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['addInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].addInstance.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolGetHealth(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['getHealth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].getHealth.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveHealthCheck(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['removeHealthCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[
      ':targetPool'
    ].removeHealthCheck.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolRemoveInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['removeInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].removeInstance.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetBackup(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['setBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[':targetPool'].setBackup.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionTargetPoolsTargetPoolSetSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetPools'][':targetPool']['setSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetPools[
      ':targetPool'
    ].setSecurityPolicy.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetTcpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetTcpProxies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetTcpProxies.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetTcpProxies(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetTcpProxies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetTcpProxies.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetTcpProxies'][':targetTcpProxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetTcpProxies[':targetTcpProxy'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionTargetTcpProxiesTargetTcpProxy(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetTcpProxies'][':targetTcpProxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetTcpProxies[':targetTcpProxy'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionTargetVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetVpnGateways']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetVpnGateways.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetVpnGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetVpnGateways.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionTargetVpnGatewaysResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetVpnGateways'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetVpnGateways[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetVpnGateways'][':targetVpnGateway']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetVpnGateways[':targetVpnGateway'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['targetVpnGateways'][':targetVpnGateway']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].targetVpnGateways[':targetVpnGateway'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionUrlMaps(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionUrlMaps(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps'][':urlMap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps[':urlMap'].$get(args, options),
  )
}

export async function putProjectsProjectRegionsRegionUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps'][':urlMap']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps[':urlMap'].$put(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps'][':urlMap']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps[':urlMap'].$delete(args, options),
  )
}

export async function patchProjectsProjectRegionsRegionUrlMapsUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps'][':urlMap']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps[':urlMap'].$patch(args, options),
  )
}

export async function postProjectsProjectRegionsRegionUrlMapsUrlMapValidate(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['urlMaps'][':urlMap']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].urlMaps[':urlMap'].validate.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionVpnGateways(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionVpnGatewaysResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectRegionsRegionVpnGatewaysResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectRegionsRegionVpnGatewaysVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways'][':vpnGateway']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways[':vpnGateway'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionVpnGatewaysVpnGateway(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways'][':vpnGateway']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways[':vpnGateway'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionVpnGatewaysVpnGatewayGetStatus(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnGateways'][':vpnGateway']['getStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnGateways[':vpnGateway'].getStatus.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionVpnTunnels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnTunnels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnTunnels.$get(args, options),
  )
}

export async function postProjectsProjectRegionsRegionVpnTunnels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnTunnels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnTunnels.$post(args, options),
  )
}

export async function postProjectsProjectRegionsRegionVpnTunnelsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnTunnels'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnTunnels[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectRegionsRegionVpnTunnelsVpnTunnel(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnTunnels'][':vpnTunnel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnTunnels[':vpnTunnel'].$get(args, options),
  )
}

export async function deleteProjectsProjectRegionsRegionVpnTunnelsVpnTunnel(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['vpnTunnels'][':vpnTunnel']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].vpnTunnels[':vpnTunnel'].$delete(args, options),
  )
}

export async function getProjectsProjectRegionsRegionZones(
  args: InferRequestType<
    (typeof client.projects)[':project']['regions'][':region']['zones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].regions[':region'].zones.$get(args, options),
  )
}

export async function postProjectsProjectSetCloudArmorTier(
  args: InferRequestType<(typeof client.projects)[':project']['setCloudArmorTier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].setCloudArmorTier.$post(args, options))
}

export async function postProjectsProjectSetCommonInstanceMetadata(
  args: InferRequestType<
    (typeof client.projects)[':project']['setCommonInstanceMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].setCommonInstanceMetadata.$post(args, options),
  )
}

export async function postProjectsProjectSetDefaultNetworkTier(
  args: InferRequestType<(typeof client.projects)[':project']['setDefaultNetworkTier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].setDefaultNetworkTier.$post(args, options))
}

export async function postProjectsProjectSetUsageExportBucket(
  args: InferRequestType<(typeof client.projects)[':project']['setUsageExportBucket']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].setUsageExportBucket.$post(args, options))
}

export async function postProjectsProjectTargetHttpProxiesTargetHttpProxySetUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['targetHttpProxies'][':targetHttpProxy']['setUrlMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].targetHttpProxies[':targetHttpProxy'].setUrlMap.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetSslCertificates(
  args: InferRequestType<
    (typeof client.projects)[':project']['targetHttpsProxies'][':targetHttpsProxy']['setSslCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].targetHttpsProxies[':targetHttpsProxy'].setSslCertificates.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectTargetHttpsProxiesTargetHttpsProxySetUrlMap(
  args: InferRequestType<
    (typeof client.projects)[':project']['targetHttpsProxies'][':targetHttpsProxy']['setUrlMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].targetHttpsProxies[':targetHttpsProxy'].setUrlMap.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZones(
  args: InferRequestType<(typeof client.projects)[':project']['zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].zones.$get(args, options))
}

export async function getProjectsProjectZonesZone(
  args: InferRequestType<(typeof client.projects)[':project']['zones'][':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].zones[':zone'].$get(args, options))
}

export async function getProjectsProjectZonesZoneAcceleratorTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['acceleratorTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].acceleratorTypes.$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneAcceleratorTypesAcceleratorType(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['acceleratorTypes'][':acceleratorType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].acceleratorTypes[':acceleratorType'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers.$get(args, options),
  )
}

export async function putProjectsProjectZonesZoneAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers.$put(args, options),
  )
}

export async function postProjectsProjectZonesZoneAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers.$post(args, options),
  )
}

export async function patchProjectsProjectZonesZoneAutoscalers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers.$patch(args, options),
  )
}

export async function getProjectsProjectZonesZoneAutoscalersAutoscaler(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers'][':autoscaler']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers[':autoscaler'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneAutoscalersAutoscaler(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['autoscalers'][':autoscaler']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].autoscalers[':autoscaler'].$delete(args, options),
  )
}

export async function getProjectsProjectZonesZoneDiskTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['diskTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].diskTypes.$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneDiskTypesDiskType(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['diskTypes'][':diskType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].diskTypes[':diskType'].$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneDisks(
  args: InferRequestType<(typeof client.projects)[':project']['zones'][':zone']['disks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].zones[':zone'].disks.$get(args, options))
}

export async function postProjectsProjectZonesZoneDisks(
  args: InferRequestType<(typeof client.projects)[':project']['zones'][':zone']['disks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project'].zones[':zone'].disks.$post(args, options))
}

export async function postProjectsProjectZonesZoneDisksBulkInsert(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks']['bulkInsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks.bulkInsert.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksStopGroupAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks']['stopGroupAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks.stopGroupAsyncReplication.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].$delete(args, options),
  )
}

export async function patchProjectsProjectZonesZoneDisksDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].$patch(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskAddResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['addResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].addResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskCreateSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['createSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].createSnapshot.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskRemoveResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['removeResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].removeResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskResize(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].resize.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskStartAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['startAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].startAsyncReplication.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneDisksDiskStopAsyncReplication(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':disk']['stopAsyncReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':disk'].stopAsyncReplication.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneDisksResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':resource'].getIamPolicy.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':resource'].setIamPolicy.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':resource'].setLabels.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneDisksResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['disks'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].disks[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneImageFamilyViewsFamily(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['imageFamilyViews'][':family']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].imageFamilyViews[':family'].$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstanceGroupManagers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[':instanceGroupManager'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].$delete(args, options),
  )
}

export async function patchProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManager(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].$patch(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerAbandonInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['abandonInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].abandonInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerApplyUpdatesToInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['applyUpdatesToInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].applyUpdatesToInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerCreateInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['createInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].createInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeleteInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['deleteInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].deleteInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerDeletePerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['deletePerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].deletePerInstanceConfigs.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListErrors(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['listErrors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listErrors.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListManagedInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['listManagedInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listManagedInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerListPerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['listPerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].listPerInstanceConfigs.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerPatchPerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['patchPerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].patchPerInstanceConfigs.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerRecreateInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['recreateInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].recreateInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerResize(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].resize.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetInstanceTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['setInstanceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].setInstanceTemplate.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerSetTargetPools(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['setTargetPools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].setTargetPools.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupManagersInstanceGroupManagerUpdatePerInstanceConfigs(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroupManagers'][':instanceGroupManager']['updatePerInstanceConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroupManagers[
      ':instanceGroupManager'
    ].updatePerInstanceConfigs.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstanceGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstanceGroupsInstanceGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[':instanceGroup'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneInstanceGroupsInstanceGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[':instanceGroup'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupsInstanceGroupAddInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['addInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[':instanceGroup'].addInstances.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupsInstanceGroupListInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['listInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[':instanceGroup'].listInstances.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupsInstanceGroupRemoveInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['removeInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[
      ':instanceGroup'
    ].removeInstances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstanceGroupsInstanceGroupSetNamedPorts(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instanceGroups'][':instanceGroup']['setNamedPorts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instanceGroups[':instanceGroup'].setNamedPorts.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesBulkInsert(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances']['bulkInsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances.bulkInsert.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].$get(args, options),
  )
}

export async function putProjectsProjectZonesZoneInstancesInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].$put(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneInstancesInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].$delete(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceAddAccessConfig(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['addAccessConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].addAccessConfig.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceAddResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['addResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].addResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceAttachDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['attachDisk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].attachDisk.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceDeleteAccessConfig(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['deleteAccessConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].deleteAccessConfig.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceDetachDisk(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['detachDisk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].detachDisk.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceGetEffectiveFirewalls(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['getEffectiveFirewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].getEffectiveFirewalls.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceGetGuestAttributes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['getGuestAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].getGuestAttributes.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceGetShieldedInstanceIdentity(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['getShieldedInstanceIdentity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[
      ':instance'
    ].getShieldedInstanceIdentity.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstancePerformMaintenance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['performMaintenance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].performMaintenance.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceReferrers(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['referrers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].referrers.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceRemoveResourcePolicies(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['removeResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].removeResourcePolicies.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceReset(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].reset.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceResume(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].resume.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceScreenshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['screenshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].screenshot.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSendDiagnosticInterrupt(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['sendDiagnosticInterrupt']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].sendDiagnosticInterrupt.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstancesInstanceSerialPort(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['serialPort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].serialPort.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetDiskAutoDelete(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setDiskAutoDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setDiskAutoDelete.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetMachineResources(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setMachineResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setMachineResources.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetMachineType(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setMachineType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setMachineType.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetMetadata(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setMetadata.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetMinCpuPlatform(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setMinCpuPlatform']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setMinCpuPlatform.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetName(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setName.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetScheduling(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setScheduling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setScheduling.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setSecurityPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetServiceAccount(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setServiceAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setServiceAccount.$post(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectZonesZoneInstancesInstanceSetShieldedInstanceIntegrityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setShieldedInstanceIntegrityPolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[
      ':instance'
    ].setShieldedInstanceIntegrityPolicy.$patch(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSetTags(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['setTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].setTags.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSimulateMaintenanceEvent(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['simulateMaintenanceEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[
      ':instance'
    ].simulateMaintenanceEvent.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceStart(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].start.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceStartWithEncryptionKey(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['startWithEncryptionKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].startWithEncryptionKey.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceStop(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].stop.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceSuspend(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].suspend.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstancesInstanceUpdateAccessConfig(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['updateAccessConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].updateAccessConfig.$post(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectZonesZoneInstancesInstanceUpdateDisplayDevice(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['updateDisplayDevice']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].updateDisplayDevice.$patch(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectZonesZoneInstancesInstanceUpdateNetworkInterface(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['updateNetworkInterface']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':instance'].updateNetworkInterface.$patch(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectZonesZoneInstancesInstanceUpdateShieldedInstanceConfig(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':instance']['updateShieldedInstanceConfig']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[
      ':instance'
    ].updateShieldedInstanceConfig.$patch(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstancesResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesResourceSetDeletionProtection(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':resource']['setDeletionProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':resource'].setDeletionProtection.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstancesResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instances'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instances[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstantSnapshots(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneInstantSnapshots(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneInstantSnapshotsInstantSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':instantSnapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[':instantSnapshot'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectZonesZoneInstantSnapshotsInstantSnapshot(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':instantSnapshot']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[':instantSnapshot'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneInstantSnapshotsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstantSnapshotsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstantSnapshotsResourceSetLabels(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':resource']['setLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[':resource'].setLabels.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneInstantSnapshotsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['instantSnapshots'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].instantSnapshots[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneMachineTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['machineTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].machineTypes.$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneMachineTypesMachineType(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['machineTypes'][':machineType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].machineTypes[':machineType'].$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneNetworkEndpointGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':networkEndpointGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[':networkEndpointGroup'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':networkEndpointGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].$delete(args, options),
  )
}

export async function postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':networkEndpointGroup']['attachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].attachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':networkEndpointGroup']['detachNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].detachNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':networkEndpointGroup']['listNetworkEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[
      ':networkEndpointGroup'
    ].listNetworkEndpoints.$post(args, options),
  )
}

export async function postProjectsProjectZonesZoneNetworkEndpointGroupsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['networkEndpointGroups'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].networkEndpointGroups[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneNodeGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneNodeGroups(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneNodeGroupsNodeGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneNodeGroupsNodeGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].$delete(args, options),
  )
}

export async function patchProjectsProjectZonesZoneNodeGroupsNodeGroup(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].$patch(args, options),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsNodeGroupAddNodes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['addNodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].addNodes.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsNodeGroupDeleteNodes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['deleteNodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].deleteNodes.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsNodeGroupListNodes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['listNodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].listNodes.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsNodeGroupSetNodeTemplate(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['setNodeTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':nodeGroup'].setNodeTemplate.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsNodeGroupSimulateMaintenanceEvent(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':nodeGroup']['simulateMaintenanceEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[
      ':nodeGroup'
    ].simulateMaintenanceEvent.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneNodeGroupsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneNodeGroupsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeGroups'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeGroups[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneNodeTypes(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeTypes.$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneNodeTypesNodeType(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['nodeTypes'][':nodeType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].nodeTypes[':nodeType'].$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneOperations(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].operations.$get(args, options),
  )
}

export async function getProjectsProjectZonesZoneOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].operations[':operation'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneOperationsOperation(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['operations'][':operation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].operations[':operation'].$delete(args, options),
  )
}

export async function postProjectsProjectZonesZoneOperationsOperationWait(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['operations'][':operation']['wait']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].operations[':operation'].wait.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneReservations(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneReservations(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneReservationsReservation(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':reservation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':reservation'].$get(args, options),
  )
}

export async function deleteProjectsProjectZonesZoneReservationsReservation(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':reservation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':reservation'].$delete(args, options),
  )
}

export async function patchProjectsProjectZonesZoneReservationsReservation(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':reservation']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':reservation'].$patch(args, options),
  )
}

export async function postProjectsProjectZonesZoneReservationsReservationResize(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':reservation']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':reservation'].resize.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneReservationsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':resource'].getIamPolicy.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneReservationsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':resource'].setIamPolicy.$post(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneReservationsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['reservations'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].reservations[':resource'].testIamPermissions.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectZonesZoneTargetInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['targetInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].targetInstances.$get(args, options),
  )
}

export async function postProjectsProjectZonesZoneTargetInstances(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['targetInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].targetInstances.$post(args, options),
  )
}

export async function getProjectsProjectZonesZoneTargetInstancesTargetInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['targetInstances'][':targetInstance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].targetInstances[':targetInstance'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectZonesZoneTargetInstancesTargetInstance(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['targetInstances'][':targetInstance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].targetInstances[':targetInstance'].$delete(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectZonesZoneTargetInstancesTargetInstanceSetSecurityPolicy(
  args: InferRequestType<
    (typeof client.projects)[':project']['zones'][':zone']['targetInstances'][':targetInstance']['setSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project'].zones[':zone'].targetInstances[
      ':targetInstance'
    ].setSecurityPolicy.$post(args, options),
  )
}
