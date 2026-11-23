import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAttachmentsAttachmentIdAccept(
  args: InferRequestType<(typeof client.attachments)[':attachmentId']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachmentId'].accept.$post(args, options))
}

export async function getGlobalNetworksGlobalNetworkIdConnectPeerAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['connect-peer-associations'].$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdConnectPeerAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['connect-peer-associations'].$post(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$get(
      args,
      options,
    ),
  )
}

export async function postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['customer-gateway-associations'].$post(
      args,
      options,
    ),
  )
}

export async function getGlobalNetworksGlobalNetworkIdLinkAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['link-associations'].$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdLinkAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['link-associations'].$post(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'].$get(
      args,
      options,
    ),
  )
}

export async function postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'][
      'transit-gateway-connect-peer-associations'
    ].$post(args, options),
  )
}

export async function postConnectAttachments(
  args: InferRequestType<(typeof client)['connect-attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-attachments'].$post(args, options))
}

export async function getConnectPeers(
  args: InferRequestType<(typeof client)['connect-peers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-peers'].$get(args, options))
}

export async function postConnectPeers(
  args: InferRequestType<(typeof client)['connect-peers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-peers'].$post(args, options))
}

export async function getGlobalNetworksGlobalNetworkIdConnections(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].connections.$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdConnections(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].connections.$post(args, options),
  )
}

export async function getCoreNetworks(
  args: InferRequestType<(typeof client)['core-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['core-networks'].$get(args, options))
}

export async function postCoreNetworks(
  args: InferRequestType<(typeof client)['core-networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['core-networks'].$post(args, options))
}

export async function getGlobalNetworksGlobalNetworkIdDevices(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].devices.$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdDevices(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['devices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].devices.$post(args, options),
  )
}

export async function getGlobalNetworks(
  args: InferRequestType<(typeof client)['global-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-networks'].$get(args, options))
}

export async function postGlobalNetworks(
  args: InferRequestType<(typeof client)['global-networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-networks'].$post(args, options))
}

export async function getGlobalNetworksGlobalNetworkIdLinks(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].links.$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdLinks(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].links.$post(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdSites(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].sites.$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdSites(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['sites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].sites.$post(args, options),
  )
}

export async function postSiteToSiteVpnAttachments(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['site-to-site-vpn-attachments'].$post(args, options))
}

export async function postTransitGatewayPeerings(
  args: InferRequestType<(typeof client)['transit-gateway-peerings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transit-gateway-peerings'].$post(args, options))
}

export async function postTransitGatewayRouteTableAttachments(
  args: InferRequestType<(typeof client)['transit-gateway-route-table-attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transit-gateway-route-table-attachments'].$post(args, options))
}

export async function postVpcAttachments(
  args: InferRequestType<(typeof client)['vpc-attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vpc-attachments'].$post(args, options))
}

export async function deleteAttachmentsAttachmentId(
  args: InferRequestType<(typeof client.attachments)[':attachmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachmentId'].$delete(args, options))
}

export async function getConnectPeersConnectPeerId(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-peers'][':connectPeerId'].$get(args, options))
}

export async function deleteConnectPeersConnectPeerId(
  args: InferRequestType<(typeof client)['connect-peers'][':connectPeerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-peers'][':connectPeerId'].$delete(args, options))
}

export async function deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].connections[':connectionId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchGlobalNetworksGlobalNetworkIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connections'][':connectionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].connections[':connectionId'].$patch(
      args,
      options,
    ),
  )
}

export async function getCoreNetworksCoreNetworkId(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['core-networks'][':coreNetworkId'].$get(args, options))
}

export async function deleteCoreNetworksCoreNetworkId(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['core-networks'][':coreNetworkId'].$delete(args, options))
}

export async function patchCoreNetworksCoreNetworkId(
  args: InferRequestType<(typeof client)['core-networks'][':coreNetworkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['core-networks'][':coreNetworkId'].$patch(args, options))
}

export async function deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionId(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
      ':policyVersionId'
    ].$delete(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].devices[':deviceId'].$delete(args, options),
  )
}

export async function patchGlobalNetworksGlobalNetworkIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['devices'][':deviceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].devices[':deviceId'].$patch(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkId(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-networks'][':globalNetworkId'].$delete(args, options))
}

export async function patchGlobalNetworksGlobalNetworkId(
  args: InferRequestType<(typeof client)['global-networks'][':globalNetworkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-networks'][':globalNetworkId'].$patch(args, options))
}

export async function deleteGlobalNetworksGlobalNetworkIdLinksLinkId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].links[':linkId'].$delete(args, options),
  )
}

export async function patchGlobalNetworksGlobalNetworkIdLinksLinkId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['links'][':linkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].links[':linkId'].$patch(args, options),
  )
}

export async function deletePeeringsPeeringId(
  args: InferRequestType<(typeof client.peerings)[':peeringId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peerings[':peeringId'].$delete(args, options))
}

export async function getResourcePolicyResourceArn(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-policy'][':resourceArn'].$get(args, options))
}

export async function postResourcePolicyResourceArn(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-policy'][':resourceArn'].$post(args, options))
}

export async function deleteResourcePolicyResourceArn(
  args: InferRequestType<(typeof client)['resource-policy'][':resourceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-policy'][':resourceArn'].$delete(args, options))
}

export async function deleteGlobalNetworksGlobalNetworkIdSitesSiteId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].sites[':siteId'].$delete(args, options),
  )
}

export async function patchGlobalNetworksGlobalNetworkIdSitesSiteId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['sites'][':siteId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId'].sites[':siteId'].$patch(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArn(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations'][':transitGatewayArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['transit-gateway-registrations'][
      ':transitGatewayArn'
    ].$delete(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['connect-peer-associations'][':connectPeerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['connect-peer-associations'][
      ':connectPeerId'
    ].$delete(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArn(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['customer-gateway-associations'][':customerGatewayArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['customer-gateway-associations'][
      ':customerGatewayArn'
    ].$delete(args, options),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['link-associations#deviceId&linkId'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArn(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][':transitGatewayConnectPeerArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['transit-gateway-connect-peer-associations'][
      ':transitGatewayConnectPeerArn'
    ].$delete(args, options),
  )
}

export async function postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecute(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['execute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-change-sets'][
      ':policyVersionId'
    ].execute.$post(args, options),
  )
}

export async function getConnectAttachmentsAttachmentId(
  args: InferRequestType<(typeof client)['connect-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['connect-attachments'][':attachmentId'].$get(args, options))
}

export async function getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionId(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-events'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-change-events'][
      ':policyVersionId'
    ].$get(args, options),
  )
}

export async function getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionId(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-change-sets'][':policyVersionId'].$get(
      args,
      options,
    ),
  )
}

export async function getCoreNetworksCoreNetworkIdCoreNetworkPolicy(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-policy'].$get(args, options),
  )
}

export async function postCoreNetworksCoreNetworkIdCoreNetworkPolicy(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-policy'].$post(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdNetworkResourceCount(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-resource-count'].$get(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdNetworkResourceRelationships(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resource-relationships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-resource-relationships'].$get(
      args,
      options,
    ),
  )
}

export async function getGlobalNetworksGlobalNetworkIdNetworkResources(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-resources'].$get(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdNetworkRoutes(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-routes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-routes'].$post(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdNetworkTelemetry(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-telemetry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-telemetry'].$get(args, options),
  )
}

export async function getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisId(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['route-analyses'][':routeAnalysisId'].$get(
      args,
      options,
    ),
  )
}

export async function getSiteToSiteVpnAttachmentsAttachmentId(
  args: InferRequestType<(typeof client)['site-to-site-vpn-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['site-to-site-vpn-attachments'][':attachmentId'].$get(args, options),
  )
}

export async function getTransitGatewayPeeringsPeeringId(
  args: InferRequestType<(typeof client)['transit-gateway-peerings'][':peeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transit-gateway-peerings'][':peeringId'].$get(args, options))
}

export async function getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$get(
      args,
      options,
    ),
  )
}

export async function postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrations(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['transit-gateway-registrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['transit-gateway-registrations'].$post(
      args,
      options,
    ),
  )
}

export async function getTransitGatewayRouteTableAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client)['transit-gateway-route-table-attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['transit-gateway-route-table-attachments'][':attachmentId'].$get(args, options),
  )
}

export async function getVpcAttachmentsAttachmentId(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vpc-attachments'][':attachmentId'].$get(args, options))
}

export async function patchVpcAttachmentsAttachmentId(
  args: InferRequestType<(typeof client)['vpc-attachments'][':attachmentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['vpc-attachments'][':attachmentId'].$patch(args, options))
}

export async function getAttachments(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments.$get(args, options))
}

export async function getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersions(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-policy-versions'].$get(args, options),
  )
}

export async function getOrganizationsServiceAccess(
  args: InferRequestType<(typeof client.organizations)['service-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations['service-access'].$get(args, options))
}

export async function postOrganizationsServiceAccess(
  args: InferRequestType<(typeof client.organizations)['service-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations['service-access'].$post(args, options))
}

export async function getPeerings(
  args: InferRequestType<typeof client.peerings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peerings.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postAttachmentsAttachmentIdReject(
  args: InferRequestType<(typeof client.attachments)[':attachmentId']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':attachmentId'].reject.$post(args, options))
}

export async function postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestore(
  args: InferRequestType<
    (typeof client)['core-networks'][':coreNetworkId']['core-network-policy-versions'][':policyVersionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['core-networks'][':coreNetworkId']['core-network-policy-versions'][
      ':policyVersionId'
    ].restore.$post(args, options),
  )
}

export async function postGlobalNetworksGlobalNetworkIdRouteAnalyses(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['route-analyses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['route-analyses'].$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadata(
  args: InferRequestType<
    (typeof client)['global-networks'][':globalNetworkId']['network-resources'][':resourceArn']['metadata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['global-networks'][':globalNetworkId']['network-resources'][
      ':resourceArn'
    ].metadata.$patch(args, options),
  )
}
