import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAcceptAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=AcceptAddressTransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptAddressTransfer'].$get(args, options))
}

export async function postActionAcceptAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=AcceptAddressTransfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptAddressTransfer'].$post(args, options))
}

export async function getActionAcceptReservedInstancesExchangeQuote(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedInstancesExchangeQuote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptReservedInstancesExchangeQuote'].$get(args, options),
  )
}

export async function postActionAcceptReservedInstancesExchangeQuote(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedInstancesExchangeQuote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptReservedInstancesExchangeQuote'].$post(args, options),
  )
}

export async function getActionAcceptTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=AcceptTransitGatewayMulticastDomainAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayMulticastDomainAssociations'].$get(args, options),
  )
}

export async function postActionAcceptTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=AcceptTransitGatewayMulticastDomainAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayMulticastDomainAssociations'].$post(args, options),
  )
}

export async function getActionAcceptTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=AcceptTransitGatewayPeeringAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayPeeringAttachment'].$get(args, options),
  )
}

export async function postActionAcceptTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=AcceptTransitGatewayPeeringAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayPeeringAttachment'].$post(args, options),
  )
}

export async function getActionAcceptTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=AcceptTransitGatewayVpcAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayVpcAttachment'].$get(args, options),
  )
}

export async function postActionAcceptTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=AcceptTransitGatewayVpcAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AcceptTransitGatewayVpcAttachment'].$post(args, options),
  )
}

export async function getActionAcceptVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=AcceptVpcEndpointConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptVpcEndpointConnections'].$get(args, options))
}

export async function postActionAcceptVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=AcceptVpcEndpointConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptVpcEndpointConnections'].$post(args, options))
}

export async function getActionAcceptVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=AcceptVpcPeeringConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptVpcPeeringConnection'].$get(args, options))
}

export async function postActionAcceptVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=AcceptVpcPeeringConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptVpcPeeringConnection'].$post(args, options))
}

export async function getActionAdvertiseByoipCidr(
  args: InferRequestType<(typeof client)['#Action=AdvertiseByoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AdvertiseByoipCidr'].$get(args, options))
}

export async function postActionAdvertiseByoipCidr(
  args: InferRequestType<(typeof client)['#Action=AdvertiseByoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AdvertiseByoipCidr'].$post(args, options))
}

export async function getActionAllocateAddress(
  args: InferRequestType<(typeof client)['#Action=AllocateAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateAddress'].$get(args, options))
}

export async function postActionAllocateAddress(
  args: InferRequestType<(typeof client)['#Action=AllocateAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateAddress'].$post(args, options))
}

export async function getActionAllocateHosts(
  args: InferRequestType<(typeof client)['#Action=AllocateHosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateHosts'].$get(args, options))
}

export async function postActionAllocateHosts(
  args: InferRequestType<(typeof client)['#Action=AllocateHosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateHosts'].$post(args, options))
}

export async function getActionAllocateIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=AllocateIpamPoolCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateIpamPoolCidr'].$get(args, options))
}

export async function postActionAllocateIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=AllocateIpamPoolCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AllocateIpamPoolCidr'].$post(args, options))
}

export async function getActionApplySecurityGroupsToClientVpnTargetNetwork(
  args: InferRequestType<
    (typeof client)['#Action=ApplySecurityGroupsToClientVpnTargetNetwork']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ApplySecurityGroupsToClientVpnTargetNetwork'].$get(args, options),
  )
}

export async function postActionApplySecurityGroupsToClientVpnTargetNetwork(
  args: InferRequestType<
    (typeof client)['#Action=ApplySecurityGroupsToClientVpnTargetNetwork']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ApplySecurityGroupsToClientVpnTargetNetwork'].$post(args, options),
  )
}

export async function getActionAssignIpv6Addresses(
  args: InferRequestType<(typeof client)['#Action=AssignIpv6Addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignIpv6Addresses'].$get(args, options))
}

export async function postActionAssignIpv6Addresses(
  args: InferRequestType<(typeof client)['#Action=AssignIpv6Addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignIpv6Addresses'].$post(args, options))
}

export async function getActionAssignPrivateIpAddresses(
  args: InferRequestType<(typeof client)['#Action=AssignPrivateIpAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignPrivateIpAddresses'].$get(args, options))
}

export async function postActionAssignPrivateIpAddresses(
  args: InferRequestType<(typeof client)['#Action=AssignPrivateIpAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignPrivateIpAddresses'].$post(args, options))
}

export async function getActionAssignPrivateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=AssignPrivateNatGatewayAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignPrivateNatGatewayAddress'].$get(args, options))
}

export async function postActionAssignPrivateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=AssignPrivateNatGatewayAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssignPrivateNatGatewayAddress'].$post(args, options))
}

export async function getActionAssociateAddress(
  args: InferRequestType<(typeof client)['#Action=AssociateAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateAddress'].$get(args, options))
}

export async function postActionAssociateAddress(
  args: InferRequestType<(typeof client)['#Action=AssociateAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateAddress'].$post(args, options))
}

export async function getActionAssociateClientVpnTargetNetwork(
  args: InferRequestType<(typeof client)['#Action=AssociateClientVpnTargetNetwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateClientVpnTargetNetwork'].$get(args, options))
}

export async function postActionAssociateClientVpnTargetNetwork(
  args: InferRequestType<(typeof client)['#Action=AssociateClientVpnTargetNetwork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateClientVpnTargetNetwork'].$post(args, options))
}

export async function getActionAssociateDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=AssociateDhcpOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateDhcpOptions'].$get(args, options))
}

export async function postActionAssociateDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=AssociateDhcpOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateDhcpOptions'].$post(args, options))
}

export async function getActionAssociateEnclaveCertificateIamRole(
  args: InferRequestType<(typeof client)['#Action=AssociateEnclaveCertificateIamRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateEnclaveCertificateIamRole'].$get(args, options),
  )
}

export async function postActionAssociateEnclaveCertificateIamRole(
  args: InferRequestType<(typeof client)['#Action=AssociateEnclaveCertificateIamRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateEnclaveCertificateIamRole'].$post(args, options),
  )
}

export async function getActionAssociateIamInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=AssociateIamInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateIamInstanceProfile'].$get(args, options))
}

export async function postActionAssociateIamInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=AssociateIamInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateIamInstanceProfile'].$post(args, options))
}

export async function getActionAssociateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=AssociateInstanceEventWindow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateInstanceEventWindow'].$get(args, options))
}

export async function postActionAssociateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=AssociateInstanceEventWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateInstanceEventWindow'].$post(args, options))
}

export async function getActionAssociateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=AssociateIpamResourceDiscovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateIpamResourceDiscovery'].$get(args, options))
}

export async function postActionAssociateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=AssociateIpamResourceDiscovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateIpamResourceDiscovery'].$post(args, options))
}

export async function getActionAssociateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=AssociateNatGatewayAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateNatGatewayAddress'].$get(args, options))
}

export async function postActionAssociateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=AssociateNatGatewayAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateNatGatewayAddress'].$post(args, options))
}

export async function getActionAssociateRouteTable(
  args: InferRequestType<(typeof client)['#Action=AssociateRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateRouteTable'].$get(args, options))
}

export async function postActionAssociateRouteTable(
  args: InferRequestType<(typeof client)['#Action=AssociateRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateRouteTable'].$post(args, options))
}

export async function getActionAssociateSubnetCidrBlock(
  args: InferRequestType<(typeof client)['#Action=AssociateSubnetCidrBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateSubnetCidrBlock'].$get(args, options))
}

export async function postActionAssociateSubnetCidrBlock(
  args: InferRequestType<(typeof client)['#Action=AssociateSubnetCidrBlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateSubnetCidrBlock'].$post(args, options))
}

export async function getActionAssociateTransitGatewayMulticastDomain(
  args: InferRequestType<(typeof client)['#Action=AssociateTransitGatewayMulticastDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayMulticastDomain'].$get(args, options),
  )
}

export async function postActionAssociateTransitGatewayMulticastDomain(
  args: InferRequestType<
    (typeof client)['#Action=AssociateTransitGatewayMulticastDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayMulticastDomain'].$post(args, options),
  )
}

export async function getActionAssociateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=AssociateTransitGatewayPolicyTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayPolicyTable'].$get(args, options),
  )
}

export async function postActionAssociateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=AssociateTransitGatewayPolicyTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayPolicyTable'].$post(args, options),
  )
}

export async function getActionAssociateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=AssociateTransitGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayRouteTable'].$get(args, options),
  )
}

export async function postActionAssociateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=AssociateTransitGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateTransitGatewayRouteTable'].$post(args, options),
  )
}

export async function getActionAssociateTrunkInterface(
  args: InferRequestType<(typeof client)['#Action=AssociateTrunkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateTrunkInterface'].$get(args, options))
}

export async function postActionAssociateTrunkInterface(
  args: InferRequestType<(typeof client)['#Action=AssociateTrunkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateTrunkInterface'].$post(args, options))
}

export async function getActionAssociateVpcCidrBlock(
  args: InferRequestType<(typeof client)['#Action=AssociateVpcCidrBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateVpcCidrBlock'].$get(args, options))
}

export async function postActionAssociateVpcCidrBlock(
  args: InferRequestType<(typeof client)['#Action=AssociateVpcCidrBlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateVpcCidrBlock'].$post(args, options))
}

export async function getActionAttachClassicLinkVpc(
  args: InferRequestType<(typeof client)['#Action=AttachClassicLinkVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachClassicLinkVpc'].$get(args, options))
}

export async function postActionAttachClassicLinkVpc(
  args: InferRequestType<(typeof client)['#Action=AttachClassicLinkVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachClassicLinkVpc'].$post(args, options))
}

export async function getActionAttachInternetGateway(
  args: InferRequestType<(typeof client)['#Action=AttachInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachInternetGateway'].$get(args, options))
}

export async function postActionAttachInternetGateway(
  args: InferRequestType<(typeof client)['#Action=AttachInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachInternetGateway'].$post(args, options))
}

export async function getActionAttachNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=AttachNetworkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachNetworkInterface'].$get(args, options))
}

export async function postActionAttachNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=AttachNetworkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachNetworkInterface'].$post(args, options))
}

export async function getActionAttachVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=AttachVerifiedAccessTrustProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AttachVerifiedAccessTrustProvider'].$get(args, options),
  )
}

export async function postActionAttachVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=AttachVerifiedAccessTrustProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AttachVerifiedAccessTrustProvider'].$post(args, options),
  )
}

export async function getActionAttachVolume(
  args: InferRequestType<(typeof client)['#Action=AttachVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachVolume'].$get(args, options))
}

export async function postActionAttachVolume(
  args: InferRequestType<(typeof client)['#Action=AttachVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachVolume'].$post(args, options))
}

export async function getActionAttachVpnGateway(
  args: InferRequestType<(typeof client)['#Action=AttachVpnGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachVpnGateway'].$get(args, options))
}

export async function postActionAttachVpnGateway(
  args: InferRequestType<(typeof client)['#Action=AttachVpnGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachVpnGateway'].$post(args, options))
}

export async function getActionAuthorizeClientVpnIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClientVpnIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeClientVpnIngress'].$get(args, options))
}

export async function postActionAuthorizeClientVpnIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClientVpnIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeClientVpnIngress'].$post(args, options))
}

export async function getActionAuthorizeSecurityGroupEgress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSecurityGroupEgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSecurityGroupEgress'].$get(args, options))
}

export async function postActionAuthorizeSecurityGroupEgress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSecurityGroupEgress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSecurityGroupEgress'].$post(args, options))
}

export async function getActionAuthorizeSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSecurityGroupIngress'].$get(args, options))
}

export async function postActionAuthorizeSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSecurityGroupIngress'].$post(args, options))
}

export async function getActionBundleInstance(
  args: InferRequestType<(typeof client)['#Action=BundleInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BundleInstance'].$get(args, options))
}

export async function postActionBundleInstance(
  args: InferRequestType<(typeof client)['#Action=BundleInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BundleInstance'].$post(args, options))
}

export async function getActionCancelBundleTask(
  args: InferRequestType<(typeof client)['#Action=CancelBundleTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelBundleTask'].$get(args, options))
}

export async function postActionCancelBundleTask(
  args: InferRequestType<(typeof client)['#Action=CancelBundleTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelBundleTask'].$post(args, options))
}

export async function getActionCancelCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=CancelCapacityReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelCapacityReservation'].$get(args, options))
}

export async function postActionCancelCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=CancelCapacityReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelCapacityReservation'].$post(args, options))
}

export async function getActionCancelCapacityReservationFleets(
  args: InferRequestType<(typeof client)['#Action=CancelCapacityReservationFleets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelCapacityReservationFleets'].$get(args, options))
}

export async function postActionCancelCapacityReservationFleets(
  args: InferRequestType<(typeof client)['#Action=CancelCapacityReservationFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelCapacityReservationFleets'].$post(args, options))
}

export async function getActionCancelConversionTask(
  args: InferRequestType<(typeof client)['#Action=CancelConversionTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelConversionTask'].$get(args, options))
}

export async function postActionCancelConversionTask(
  args: InferRequestType<(typeof client)['#Action=CancelConversionTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelConversionTask'].$post(args, options))
}

export async function getActionCancelExportTask(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelExportTask'].$get(args, options))
}

export async function postActionCancelExportTask(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelExportTask'].$post(args, options))
}

export async function getActionCancelImageLaunchPermission(
  args: InferRequestType<(typeof client)['#Action=CancelImageLaunchPermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelImageLaunchPermission'].$get(args, options))
}

export async function postActionCancelImageLaunchPermission(
  args: InferRequestType<(typeof client)['#Action=CancelImageLaunchPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelImageLaunchPermission'].$post(args, options))
}

export async function getActionCancelImportTask(
  args: InferRequestType<(typeof client)['#Action=CancelImportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelImportTask'].$get(args, options))
}

export async function postActionCancelImportTask(
  args: InferRequestType<(typeof client)['#Action=CancelImportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelImportTask'].$post(args, options))
}

export async function getActionCancelReservedInstancesListing(
  args: InferRequestType<(typeof client)['#Action=CancelReservedInstancesListing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelReservedInstancesListing'].$get(args, options))
}

export async function postActionCancelReservedInstancesListing(
  args: InferRequestType<(typeof client)['#Action=CancelReservedInstancesListing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelReservedInstancesListing'].$post(args, options))
}

export async function getActionCancelSpotFleetRequests(
  args: InferRequestType<(typeof client)['#Action=CancelSpotFleetRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelSpotFleetRequests'].$get(args, options))
}

export async function postActionCancelSpotFleetRequests(
  args: InferRequestType<(typeof client)['#Action=CancelSpotFleetRequests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelSpotFleetRequests'].$post(args, options))
}

export async function getActionCancelSpotInstanceRequests(
  args: InferRequestType<(typeof client)['#Action=CancelSpotInstanceRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelSpotInstanceRequests'].$get(args, options))
}

export async function postActionCancelSpotInstanceRequests(
  args: InferRequestType<(typeof client)['#Action=CancelSpotInstanceRequests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelSpotInstanceRequests'].$post(args, options))
}

export async function getActionConfirmProductInstance(
  args: InferRequestType<(typeof client)['#Action=ConfirmProductInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfirmProductInstance'].$get(args, options))
}

export async function postActionConfirmProductInstance(
  args: InferRequestType<(typeof client)['#Action=ConfirmProductInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfirmProductInstance'].$post(args, options))
}

export async function getActionCopyFpgaImage(
  args: InferRequestType<(typeof client)['#Action=CopyFpgaImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyFpgaImage'].$get(args, options))
}

export async function postActionCopyFpgaImage(
  args: InferRequestType<(typeof client)['#Action=CopyFpgaImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyFpgaImage'].$post(args, options))
}

export async function getActionCopyImage(
  args: InferRequestType<(typeof client)['#Action=CopyImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyImage'].$get(args, options))
}

export async function postActionCopyImage(
  args: InferRequestType<(typeof client)['#Action=CopyImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyImage'].$post(args, options))
}

export async function getActionCopySnapshot(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopySnapshot'].$get(args, options))
}

export async function postActionCopySnapshot(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopySnapshot'].$post(args, options))
}

export async function getActionCreateCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=CreateCapacityReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCapacityReservation'].$get(args, options))
}

export async function postActionCreateCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=CreateCapacityReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCapacityReservation'].$post(args, options))
}

export async function getActionCreateCapacityReservationFleet(
  args: InferRequestType<(typeof client)['#Action=CreateCapacityReservationFleet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCapacityReservationFleet'].$get(args, options))
}

export async function postActionCreateCapacityReservationFleet(
  args: InferRequestType<(typeof client)['#Action=CreateCapacityReservationFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCapacityReservationFleet'].$post(args, options))
}

export async function getActionCreateCarrierGateway(
  args: InferRequestType<(typeof client)['#Action=CreateCarrierGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCarrierGateway'].$get(args, options))
}

export async function postActionCreateCarrierGateway(
  args: InferRequestType<(typeof client)['#Action=CreateCarrierGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCarrierGateway'].$post(args, options))
}

export async function getActionCreateClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateClientVpnEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClientVpnEndpoint'].$get(args, options))
}

export async function postActionCreateClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateClientVpnEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClientVpnEndpoint'].$post(args, options))
}

export async function getActionCreateClientVpnRoute(
  args: InferRequestType<(typeof client)['#Action=CreateClientVpnRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClientVpnRoute'].$get(args, options))
}

export async function postActionCreateClientVpnRoute(
  args: InferRequestType<(typeof client)['#Action=CreateClientVpnRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClientVpnRoute'].$post(args, options))
}

export async function getActionCreateCoipCidr(
  args: InferRequestType<(typeof client)['#Action=CreateCoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCoipCidr'].$get(args, options))
}

export async function postActionCreateCoipCidr(
  args: InferRequestType<(typeof client)['#Action=CreateCoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCoipCidr'].$post(args, options))
}

export async function getActionCreateCoipPool(
  args: InferRequestType<(typeof client)['#Action=CreateCoipPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCoipPool'].$get(args, options))
}

export async function postActionCreateCoipPool(
  args: InferRequestType<(typeof client)['#Action=CreateCoipPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCoipPool'].$post(args, options))
}

export async function getActionCreateCustomerGateway(
  args: InferRequestType<(typeof client)['#Action=CreateCustomerGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCustomerGateway'].$get(args, options))
}

export async function postActionCreateCustomerGateway(
  args: InferRequestType<(typeof client)['#Action=CreateCustomerGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCustomerGateway'].$post(args, options))
}

export async function getActionCreateDefaultSubnet(
  args: InferRequestType<(typeof client)['#Action=CreateDefaultSubnet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDefaultSubnet'].$get(args, options))
}

export async function postActionCreateDefaultSubnet(
  args: InferRequestType<(typeof client)['#Action=CreateDefaultSubnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDefaultSubnet'].$post(args, options))
}

export async function getActionCreateDefaultVpc(
  args: InferRequestType<(typeof client)['#Action=CreateDefaultVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDefaultVpc'].$get(args, options))
}

export async function postActionCreateDefaultVpc(
  args: InferRequestType<(typeof client)['#Action=CreateDefaultVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDefaultVpc'].$post(args, options))
}

export async function getActionCreateDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=CreateDhcpOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDhcpOptions'].$get(args, options))
}

export async function postActionCreateDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=CreateDhcpOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDhcpOptions'].$post(args, options))
}

export async function getActionCreateEgressOnlyInternetGateway(
  args: InferRequestType<(typeof client)['#Action=CreateEgressOnlyInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEgressOnlyInternetGateway'].$get(args, options))
}

export async function postActionCreateEgressOnlyInternetGateway(
  args: InferRequestType<(typeof client)['#Action=CreateEgressOnlyInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEgressOnlyInternetGateway'].$post(args, options))
}

export async function getActionCreateFleet(
  args: InferRequestType<(typeof client)['#Action=CreateFleet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFleet'].$get(args, options))
}

export async function postActionCreateFleet(
  args: InferRequestType<(typeof client)['#Action=CreateFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFleet'].$post(args, options))
}

export async function getActionCreateFlowLogs(
  args: InferRequestType<(typeof client)['#Action=CreateFlowLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFlowLogs'].$get(args, options))
}

export async function postActionCreateFlowLogs(
  args: InferRequestType<(typeof client)['#Action=CreateFlowLogs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFlowLogs'].$post(args, options))
}

export async function getActionCreateFpgaImage(
  args: InferRequestType<(typeof client)['#Action=CreateFpgaImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFpgaImage'].$get(args, options))
}

export async function postActionCreateFpgaImage(
  args: InferRequestType<(typeof client)['#Action=CreateFpgaImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateFpgaImage'].$post(args, options))
}

export async function getActionCreateImage(
  args: InferRequestType<(typeof client)['#Action=CreateImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateImage'].$get(args, options))
}

export async function postActionCreateImage(
  args: InferRequestType<(typeof client)['#Action=CreateImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateImage'].$post(args, options))
}

export async function getActionCreateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceEventWindow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceEventWindow'].$get(args, options))
}

export async function postActionCreateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceEventWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceEventWindow'].$post(args, options))
}

export async function getActionCreateInstanceExportTask(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceExportTask'].$get(args, options))
}

export async function postActionCreateInstanceExportTask(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceExportTask'].$post(args, options))
}

export async function getActionCreateInternetGateway(
  args: InferRequestType<(typeof client)['#Action=CreateInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInternetGateway'].$get(args, options))
}

export async function postActionCreateInternetGateway(
  args: InferRequestType<(typeof client)['#Action=CreateInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInternetGateway'].$post(args, options))
}

export async function getActionCreateIpam(
  args: InferRequestType<(typeof client)['#Action=CreateIpam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpam'].$get(args, options))
}

export async function postActionCreateIpam(
  args: InferRequestType<(typeof client)['#Action=CreateIpam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpam'].$post(args, options))
}

export async function getActionCreateIpamPool(
  args: InferRequestType<(typeof client)['#Action=CreateIpamPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamPool'].$get(args, options))
}

export async function postActionCreateIpamPool(
  args: InferRequestType<(typeof client)['#Action=CreateIpamPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamPool'].$post(args, options))
}

export async function getActionCreateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=CreateIpamResourceDiscovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamResourceDiscovery'].$get(args, options))
}

export async function postActionCreateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=CreateIpamResourceDiscovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamResourceDiscovery'].$post(args, options))
}

export async function getActionCreateIpamScope(
  args: InferRequestType<(typeof client)['#Action=CreateIpamScope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamScope'].$get(args, options))
}

export async function postActionCreateIpamScope(
  args: InferRequestType<(typeof client)['#Action=CreateIpamScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateIpamScope'].$post(args, options))
}

export async function getActionCreateKeyPair(
  args: InferRequestType<(typeof client)['#Action=CreateKeyPair']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateKeyPair'].$get(args, options))
}

export async function postActionCreateKeyPair(
  args: InferRequestType<(typeof client)['#Action=CreateKeyPair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateKeyPair'].$post(args, options))
}

export async function getActionCreateLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchTemplate'].$get(args, options))
}

export async function postActionCreateLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchTemplate'].$post(args, options))
}

export async function getActionCreateLaunchTemplateVersion(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchTemplateVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchTemplateVersion'].$get(args, options))
}

export async function postActionCreateLaunchTemplateVersion(
  args: InferRequestType<(typeof client)['#Action=CreateLaunchTemplateVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLaunchTemplateVersion'].$post(args, options))
}

export async function getActionCreateLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=CreateLocalGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLocalGatewayRoute'].$get(args, options))
}

export async function postActionCreateLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=CreateLocalGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLocalGatewayRoute'].$post(args, options))
}

export async function getActionCreateLocalGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateLocalGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLocalGatewayRouteTable'].$get(args, options))
}

export async function postActionCreateLocalGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateLocalGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLocalGatewayRouteTable'].$post(args, options))
}

export async function getActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
  args: InferRequestType<
    (typeof client)['#Action=CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation'].$get(
      args,
      options,
    ),
  )
}

export async function postActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
  args: InferRequestType<
    (typeof client)['#Action=CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function getActionCreateLocalGatewayRouteTableVpcAssociation(
  args: InferRequestType<
    (typeof client)['#Action=CreateLocalGatewayRouteTableVpcAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateLocalGatewayRouteTableVpcAssociation'].$get(args, options),
  )
}

export async function postActionCreateLocalGatewayRouteTableVpcAssociation(
  args: InferRequestType<
    (typeof client)['#Action=CreateLocalGatewayRouteTableVpcAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateLocalGatewayRouteTableVpcAssociation'].$post(args, options),
  )
}

export async function getActionCreateManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=CreateManagedPrefixList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateManagedPrefixList'].$get(args, options))
}

export async function postActionCreateManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=CreateManagedPrefixList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateManagedPrefixList'].$post(args, options))
}

export async function getActionCreateNatGateway(
  args: InferRequestType<(typeof client)['#Action=CreateNatGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNatGateway'].$get(args, options))
}

export async function postActionCreateNatGateway(
  args: InferRequestType<(typeof client)['#Action=CreateNatGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNatGateway'].$post(args, options))
}

export async function getActionCreateNetworkAcl(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkAcl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkAcl'].$get(args, options))
}

export async function postActionCreateNetworkAcl(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkAcl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkAcl'].$post(args, options))
}

export async function getActionCreateNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkAclEntry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkAclEntry'].$get(args, options))
}

export async function postActionCreateNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkAclEntry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkAclEntry'].$post(args, options))
}

export async function getActionCreateNetworkInsightsAccessScope(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInsightsAccessScope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInsightsAccessScope'].$get(args, options))
}

export async function postActionCreateNetworkInsightsAccessScope(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInsightsAccessScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateNetworkInsightsAccessScope'].$post(args, options),
  )
}

export async function getActionCreateNetworkInsightsPath(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInsightsPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInsightsPath'].$get(args, options))
}

export async function postActionCreateNetworkInsightsPath(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInsightsPath']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInsightsPath'].$post(args, options))
}

export async function getActionCreateNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInterface'].$get(args, options))
}

export async function postActionCreateNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInterface'].$post(args, options))
}

export async function getActionCreateNetworkInterfacePermission(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInterfacePermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateNetworkInterfacePermission'].$get(args, options))
}

export async function postActionCreateNetworkInterfacePermission(
  args: InferRequestType<(typeof client)['#Action=CreateNetworkInterfacePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateNetworkInterfacePermission'].$post(args, options),
  )
}

export async function getActionCreatePlacementGroup(
  args: InferRequestType<(typeof client)['#Action=CreatePlacementGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlacementGroup'].$get(args, options))
}

export async function postActionCreatePlacementGroup(
  args: InferRequestType<(typeof client)['#Action=CreatePlacementGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlacementGroup'].$post(args, options))
}

export async function getActionCreatePublicIpv4Pool(
  args: InferRequestType<(typeof client)['#Action=CreatePublicIpv4Pool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePublicIpv4Pool'].$get(args, options))
}

export async function postActionCreatePublicIpv4Pool(
  args: InferRequestType<(typeof client)['#Action=CreatePublicIpv4Pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePublicIpv4Pool'].$post(args, options))
}

export async function getActionCreateReplaceRootVolumeTask(
  args: InferRequestType<(typeof client)['#Action=CreateReplaceRootVolumeTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReplaceRootVolumeTask'].$get(args, options))
}

export async function postActionCreateReplaceRootVolumeTask(
  args: InferRequestType<(typeof client)['#Action=CreateReplaceRootVolumeTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReplaceRootVolumeTask'].$post(args, options))
}

export async function getActionCreateReservedInstancesListing(
  args: InferRequestType<(typeof client)['#Action=CreateReservedInstancesListing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReservedInstancesListing'].$get(args, options))
}

export async function postActionCreateReservedInstancesListing(
  args: InferRequestType<(typeof client)['#Action=CreateReservedInstancesListing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReservedInstancesListing'].$post(args, options))
}

export async function getActionCreateRestoreImageTask(
  args: InferRequestType<(typeof client)['#Action=CreateRestoreImageTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRestoreImageTask'].$get(args, options))
}

export async function postActionCreateRestoreImageTask(
  args: InferRequestType<(typeof client)['#Action=CreateRestoreImageTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRestoreImageTask'].$post(args, options))
}

export async function getActionCreateRoute(
  args: InferRequestType<(typeof client)['#Action=CreateRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRoute'].$get(args, options))
}

export async function postActionCreateRoute(
  args: InferRequestType<(typeof client)['#Action=CreateRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRoute'].$post(args, options))
}

export async function getActionCreateRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRouteTable'].$get(args, options))
}

export async function postActionCreateRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRouteTable'].$post(args, options))
}

export async function getActionCreateSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSecurityGroup'].$get(args, options))
}

export async function postActionCreateSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSecurityGroup'].$post(args, options))
}

export async function getActionCreateSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshot'].$get(args, options))
}

export async function postActionCreateSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshot'].$post(args, options))
}

export async function getActionCreateSnapshots(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshots'].$get(args, options))
}

export async function postActionCreateSnapshots(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshots'].$post(args, options))
}

export async function getActionCreateSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateSpotDatafeedSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSpotDatafeedSubscription'].$get(args, options))
}

export async function postActionCreateSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateSpotDatafeedSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSpotDatafeedSubscription'].$post(args, options))
}

export async function getActionCreateStoreImageTask(
  args: InferRequestType<(typeof client)['#Action=CreateStoreImageTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStoreImageTask'].$get(args, options))
}

export async function postActionCreateStoreImageTask(
  args: InferRequestType<(typeof client)['#Action=CreateStoreImageTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStoreImageTask'].$post(args, options))
}

export async function getActionCreateSubnet(
  args: InferRequestType<(typeof client)['#Action=CreateSubnet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSubnet'].$get(args, options))
}

export async function postActionCreateSubnet(
  args: InferRequestType<(typeof client)['#Action=CreateSubnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSubnet'].$post(args, options))
}

export async function getActionCreateSubnetCidrReservation(
  args: InferRequestType<(typeof client)['#Action=CreateSubnetCidrReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSubnetCidrReservation'].$get(args, options))
}

export async function postActionCreateSubnetCidrReservation(
  args: InferRequestType<(typeof client)['#Action=CreateSubnetCidrReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSubnetCidrReservation'].$post(args, options))
}

export async function getActionCreateTags(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTags'].$get(args, options))
}

export async function postActionCreateTags(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTags'].$post(args, options))
}

export async function getActionCreateTrafficMirrorFilter(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorFilter'].$get(args, options))
}

export async function postActionCreateTrafficMirrorFilter(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorFilter'].$post(args, options))
}

export async function getActionCreateTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorFilterRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorFilterRule'].$get(args, options))
}

export async function postActionCreateTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorFilterRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorFilterRule'].$post(args, options))
}

export async function getActionCreateTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorSession']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorSession'].$get(args, options))
}

export async function postActionCreateTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorSession'].$post(args, options))
}

export async function getActionCreateTrafficMirrorTarget(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorTarget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorTarget'].$get(args, options))
}

export async function postActionCreateTrafficMirrorTarget(
  args: InferRequestType<(typeof client)['#Action=CreateTrafficMirrorTarget']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTrafficMirrorTarget'].$post(args, options))
}

export async function getActionCreateTransitGateway(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGateway'].$get(args, options))
}

export async function postActionCreateTransitGateway(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGateway'].$post(args, options))
}

export async function getActionCreateTransitGatewayConnect(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayConnect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayConnect'].$get(args, options))
}

export async function postActionCreateTransitGatewayConnect(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayConnect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayConnect'].$post(args, options))
}

export async function getActionCreateTransitGatewayConnectPeer(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayConnectPeer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayConnectPeer'].$get(args, options))
}

export async function postActionCreateTransitGatewayConnectPeer(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayConnectPeer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayConnectPeer'].$post(args, options))
}

export async function getActionCreateTransitGatewayMulticastDomain(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayMulticastDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayMulticastDomain'].$get(args, options),
  )
}

export async function postActionCreateTransitGatewayMulticastDomain(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayMulticastDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayMulticastDomain'].$post(args, options),
  )
}

export async function getActionCreateTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayPeeringAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayPeeringAttachment'].$get(args, options),
  )
}

export async function postActionCreateTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayPeeringAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayPeeringAttachment'].$post(args, options),
  )
}

export async function getActionCreateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayPolicyTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayPolicyTable'].$get(args, options))
}

export async function postActionCreateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayPolicyTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayPolicyTable'].$post(args, options))
}

export async function getActionCreateTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=CreateTransitGatewayPrefixListReference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayPrefixListReference'].$get(args, options),
  )
}

export async function postActionCreateTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=CreateTransitGatewayPrefixListReference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayPrefixListReference'].$post(args, options),
  )
}

export async function getActionCreateTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayRoute'].$get(args, options))
}

export async function postActionCreateTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayRoute'].$post(args, options))
}

export async function getActionCreateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayRouteTable'].$get(args, options))
}

export async function postActionCreateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTransitGatewayRouteTable'].$post(args, options))
}

export async function getActionCreateTransitGatewayRouteTableAnnouncement(
  args: InferRequestType<
    (typeof client)['#Action=CreateTransitGatewayRouteTableAnnouncement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayRouteTableAnnouncement'].$get(args, options),
  )
}

export async function postActionCreateTransitGatewayRouteTableAnnouncement(
  args: InferRequestType<
    (typeof client)['#Action=CreateTransitGatewayRouteTableAnnouncement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayRouteTableAnnouncement'].$post(args, options),
  )
}

export async function getActionCreateTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayVpcAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayVpcAttachment'].$get(args, options),
  )
}

export async function postActionCreateTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=CreateTransitGatewayVpcAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateTransitGatewayVpcAttachment'].$post(args, options),
  )
}

export async function getActionCreateVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessEndpoint'].$get(args, options))
}

export async function postActionCreateVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessEndpoint'].$post(args, options))
}

export async function getActionCreateVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessGroup'].$get(args, options))
}

export async function postActionCreateVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessGroup'].$post(args, options))
}

export async function getActionCreateVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessInstance'].$get(args, options))
}

export async function postActionCreateVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVerifiedAccessInstance'].$post(args, options))
}

export async function getActionCreateVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessTrustProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVerifiedAccessTrustProvider'].$get(args, options),
  )
}

export async function postActionCreateVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=CreateVerifiedAccessTrustProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVerifiedAccessTrustProvider'].$post(args, options),
  )
}

export async function getActionCreateVolume(
  args: InferRequestType<(typeof client)['#Action=CreateVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVolume'].$get(args, options))
}

export async function postActionCreateVolume(
  args: InferRequestType<(typeof client)['#Action=CreateVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVolume'].$post(args, options))
}

export async function getActionCreateVpc(
  args: InferRequestType<(typeof client)['#Action=CreateVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpc'].$get(args, options))
}

export async function postActionCreateVpc(
  args: InferRequestType<(typeof client)['#Action=CreateVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpc'].$post(args, options))
}

export async function getActionCreateVpcEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateVpcEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpcEndpoint'].$get(args, options))
}

export async function postActionCreateVpcEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateVpcEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpcEndpoint'].$post(args, options))
}

export async function getActionCreateVpcEndpointConnectionNotification(
  args: InferRequestType<
    (typeof client)['#Action=CreateVpcEndpointConnectionNotification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVpcEndpointConnectionNotification'].$get(args, options),
  )
}

export async function postActionCreateVpcEndpointConnectionNotification(
  args: InferRequestType<
    (typeof client)['#Action=CreateVpcEndpointConnectionNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVpcEndpointConnectionNotification'].$post(args, options),
  )
}

export async function getActionCreateVpcEndpointServiceConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateVpcEndpointServiceConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVpcEndpointServiceConfiguration'].$get(args, options),
  )
}

export async function postActionCreateVpcEndpointServiceConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateVpcEndpointServiceConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateVpcEndpointServiceConfiguration'].$post(args, options),
  )
}

export async function getActionCreateVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=CreateVpcPeeringConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpcPeeringConnection'].$get(args, options))
}

export async function postActionCreateVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=CreateVpcPeeringConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpcPeeringConnection'].$post(args, options))
}

export async function getActionCreateVpnConnection(
  args: InferRequestType<(typeof client)['#Action=CreateVpnConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnConnection'].$get(args, options))
}

export async function postActionCreateVpnConnection(
  args: InferRequestType<(typeof client)['#Action=CreateVpnConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnConnection'].$post(args, options))
}

export async function getActionCreateVpnConnectionRoute(
  args: InferRequestType<(typeof client)['#Action=CreateVpnConnectionRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnConnectionRoute'].$get(args, options))
}

export async function postActionCreateVpnConnectionRoute(
  args: InferRequestType<(typeof client)['#Action=CreateVpnConnectionRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnConnectionRoute'].$post(args, options))
}

export async function getActionCreateVpnGateway(
  args: InferRequestType<(typeof client)['#Action=CreateVpnGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnGateway'].$get(args, options))
}

export async function postActionCreateVpnGateway(
  args: InferRequestType<(typeof client)['#Action=CreateVpnGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVpnGateway'].$post(args, options))
}

export async function getActionDeleteCarrierGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteCarrierGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCarrierGateway'].$get(args, options))
}

export async function postActionDeleteCarrierGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteCarrierGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCarrierGateway'].$post(args, options))
}

export async function getActionDeleteClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteClientVpnEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClientVpnEndpoint'].$get(args, options))
}

export async function postActionDeleteClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteClientVpnEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClientVpnEndpoint'].$post(args, options))
}

export async function getActionDeleteClientVpnRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteClientVpnRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClientVpnRoute'].$get(args, options))
}

export async function postActionDeleteClientVpnRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteClientVpnRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClientVpnRoute'].$post(args, options))
}

export async function getActionDeleteCoipCidr(
  args: InferRequestType<(typeof client)['#Action=DeleteCoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCoipCidr'].$get(args, options))
}

export async function postActionDeleteCoipCidr(
  args: InferRequestType<(typeof client)['#Action=DeleteCoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCoipCidr'].$post(args, options))
}

export async function getActionDeleteCoipPool(
  args: InferRequestType<(typeof client)['#Action=DeleteCoipPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCoipPool'].$get(args, options))
}

export async function postActionDeleteCoipPool(
  args: InferRequestType<(typeof client)['#Action=DeleteCoipPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCoipPool'].$post(args, options))
}

export async function getActionDeleteCustomerGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomerGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCustomerGateway'].$get(args, options))
}

export async function postActionDeleteCustomerGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomerGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCustomerGateway'].$post(args, options))
}

export async function getActionDeleteDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=DeleteDhcpOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDhcpOptions'].$get(args, options))
}

export async function postActionDeleteDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=DeleteDhcpOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDhcpOptions'].$post(args, options))
}

export async function getActionDeleteEgressOnlyInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteEgressOnlyInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEgressOnlyInternetGateway'].$get(args, options))
}

export async function postActionDeleteEgressOnlyInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteEgressOnlyInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEgressOnlyInternetGateway'].$post(args, options))
}

export async function getActionDeleteFleets(
  args: InferRequestType<(typeof client)['#Action=DeleteFleets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFleets'].$get(args, options))
}

export async function postActionDeleteFleets(
  args: InferRequestType<(typeof client)['#Action=DeleteFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFleets'].$post(args, options))
}

export async function getActionDeleteFlowLogs(
  args: InferRequestType<(typeof client)['#Action=DeleteFlowLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFlowLogs'].$get(args, options))
}

export async function postActionDeleteFlowLogs(
  args: InferRequestType<(typeof client)['#Action=DeleteFlowLogs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFlowLogs'].$post(args, options))
}

export async function getActionDeleteFpgaImage(
  args: InferRequestType<(typeof client)['#Action=DeleteFpgaImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFpgaImage'].$get(args, options))
}

export async function postActionDeleteFpgaImage(
  args: InferRequestType<(typeof client)['#Action=DeleteFpgaImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteFpgaImage'].$post(args, options))
}

export async function getActionDeleteInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceEventWindow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInstanceEventWindow'].$get(args, options))
}

export async function postActionDeleteInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceEventWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInstanceEventWindow'].$post(args, options))
}

export async function getActionDeleteInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInternetGateway'].$get(args, options))
}

export async function postActionDeleteInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInternetGateway'].$post(args, options))
}

export async function getActionDeleteIpam(
  args: InferRequestType<(typeof client)['#Action=DeleteIpam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpam'].$get(args, options))
}

export async function postActionDeleteIpam(
  args: InferRequestType<(typeof client)['#Action=DeleteIpam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpam'].$post(args, options))
}

export async function getActionDeleteIpamPool(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamPool'].$get(args, options))
}

export async function postActionDeleteIpamPool(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamPool'].$post(args, options))
}

export async function getActionDeleteIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamResourceDiscovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamResourceDiscovery'].$get(args, options))
}

export async function postActionDeleteIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamResourceDiscovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamResourceDiscovery'].$post(args, options))
}

export async function getActionDeleteIpamScope(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamScope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamScope'].$get(args, options))
}

export async function postActionDeleteIpamScope(
  args: InferRequestType<(typeof client)['#Action=DeleteIpamScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIpamScope'].$post(args, options))
}

export async function getActionDeleteKeyPair(
  args: InferRequestType<(typeof client)['#Action=DeleteKeyPair']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteKeyPair'].$get(args, options))
}

export async function postActionDeleteKeyPair(
  args: InferRequestType<(typeof client)['#Action=DeleteKeyPair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteKeyPair'].$post(args, options))
}

export async function getActionDeleteLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchTemplate'].$get(args, options))
}

export async function postActionDeleteLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchTemplate'].$post(args, options))
}

export async function getActionDeleteLaunchTemplateVersions(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchTemplateVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchTemplateVersions'].$get(args, options))
}

export async function postActionDeleteLaunchTemplateVersions(
  args: InferRequestType<(typeof client)['#Action=DeleteLaunchTemplateVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLaunchTemplateVersions'].$post(args, options))
}

export async function getActionDeleteLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteLocalGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLocalGatewayRoute'].$get(args, options))
}

export async function postActionDeleteLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteLocalGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLocalGatewayRoute'].$post(args, options))
}

export async function getActionDeleteLocalGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteLocalGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLocalGatewayRouteTable'].$get(args, options))
}

export async function postActionDeleteLocalGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteLocalGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLocalGatewayRouteTable'].$post(args, options))
}

export async function getActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
  args: InferRequestType<
    (typeof client)['#Action=DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation'].$get(
      args,
      options,
    ),
  )
}

export async function postActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
  args: InferRequestType<
    (typeof client)['#Action=DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function getActionDeleteLocalGatewayRouteTableVpcAssociation(
  args: InferRequestType<
    (typeof client)['#Action=DeleteLocalGatewayRouteTableVpcAssociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteLocalGatewayRouteTableVpcAssociation'].$get(args, options),
  )
}

export async function postActionDeleteLocalGatewayRouteTableVpcAssociation(
  args: InferRequestType<
    (typeof client)['#Action=DeleteLocalGatewayRouteTableVpcAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteLocalGatewayRouteTableVpcAssociation'].$post(args, options),
  )
}

export async function getActionDeleteManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=DeleteManagedPrefixList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteManagedPrefixList'].$get(args, options))
}

export async function postActionDeleteManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=DeleteManagedPrefixList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteManagedPrefixList'].$post(args, options))
}

export async function getActionDeleteNatGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteNatGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNatGateway'].$get(args, options))
}

export async function postActionDeleteNatGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteNatGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNatGateway'].$post(args, options))
}

export async function getActionDeleteNetworkAcl(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkAcl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkAcl'].$get(args, options))
}

export async function postActionDeleteNetworkAcl(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkAcl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkAcl'].$post(args, options))
}

export async function getActionDeleteNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkAclEntry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkAclEntry'].$get(args, options))
}

export async function postActionDeleteNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkAclEntry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkAclEntry'].$post(args, options))
}

export async function getActionDeleteNetworkInsightsAccessScope(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsAccessScope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInsightsAccessScope'].$get(args, options))
}

export async function postActionDeleteNetworkInsightsAccessScope(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsAccessScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteNetworkInsightsAccessScope'].$post(args, options),
  )
}

export async function getActionDeleteNetworkInsightsAccessScopeAnalysis(
  args: InferRequestType<
    (typeof client)['#Action=DeleteNetworkInsightsAccessScopeAnalysis']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteNetworkInsightsAccessScopeAnalysis'].$get(args, options),
  )
}

export async function postActionDeleteNetworkInsightsAccessScopeAnalysis(
  args: InferRequestType<
    (typeof client)['#Action=DeleteNetworkInsightsAccessScopeAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteNetworkInsightsAccessScopeAnalysis'].$post(args, options),
  )
}

export async function getActionDeleteNetworkInsightsAnalysis(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsAnalysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInsightsAnalysis'].$get(args, options))
}

export async function postActionDeleteNetworkInsightsAnalysis(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInsightsAnalysis'].$post(args, options))
}

export async function getActionDeleteNetworkInsightsPath(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInsightsPath'].$get(args, options))
}

export async function postActionDeleteNetworkInsightsPath(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInsightsPath']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInsightsPath'].$post(args, options))
}

export async function getActionDeleteNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInterface'].$get(args, options))
}

export async function postActionDeleteNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInterface'].$post(args, options))
}

export async function getActionDeleteNetworkInterfacePermission(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInterfacePermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteNetworkInterfacePermission'].$get(args, options))
}

export async function postActionDeleteNetworkInterfacePermission(
  args: InferRequestType<(typeof client)['#Action=DeleteNetworkInterfacePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteNetworkInterfacePermission'].$post(args, options),
  )
}

export async function getActionDeletePlacementGroup(
  args: InferRequestType<(typeof client)['#Action=DeletePlacementGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlacementGroup'].$get(args, options))
}

export async function postActionDeletePlacementGroup(
  args: InferRequestType<(typeof client)['#Action=DeletePlacementGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlacementGroup'].$post(args, options))
}

export async function getActionDeletePublicIpv4Pool(
  args: InferRequestType<(typeof client)['#Action=DeletePublicIpv4Pool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePublicIpv4Pool'].$get(args, options))
}

export async function postActionDeletePublicIpv4Pool(
  args: InferRequestType<(typeof client)['#Action=DeletePublicIpv4Pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePublicIpv4Pool'].$post(args, options))
}

export async function getActionDeleteQueuedReservedInstances(
  args: InferRequestType<(typeof client)['#Action=DeleteQueuedReservedInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteQueuedReservedInstances'].$get(args, options))
}

export async function postActionDeleteQueuedReservedInstances(
  args: InferRequestType<(typeof client)['#Action=DeleteQueuedReservedInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteQueuedReservedInstances'].$post(args, options))
}

export async function getActionDeleteRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRoute'].$get(args, options))
}

export async function postActionDeleteRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRoute'].$post(args, options))
}

export async function getActionDeleteRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRouteTable'].$get(args, options))
}

export async function postActionDeleteRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRouteTable'].$post(args, options))
}

export async function getActionDeleteSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSecurityGroup'].$get(args, options))
}

export async function postActionDeleteSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSecurityGroup'].$post(args, options))
}

export async function getActionDeleteSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshot'].$get(args, options))
}

export async function postActionDeleteSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshot'].$post(args, options))
}

export async function getActionDeleteSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteSpotDatafeedSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSpotDatafeedSubscription'].$get(args, options))
}

export async function postActionDeleteSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteSpotDatafeedSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSpotDatafeedSubscription'].$post(args, options))
}

export async function getActionDeleteSubnet(
  args: InferRequestType<(typeof client)['#Action=DeleteSubnet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSubnet'].$get(args, options))
}

export async function postActionDeleteSubnet(
  args: InferRequestType<(typeof client)['#Action=DeleteSubnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSubnet'].$post(args, options))
}

export async function getActionDeleteSubnetCidrReservation(
  args: InferRequestType<(typeof client)['#Action=DeleteSubnetCidrReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSubnetCidrReservation'].$get(args, options))
}

export async function postActionDeleteSubnetCidrReservation(
  args: InferRequestType<(typeof client)['#Action=DeleteSubnetCidrReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSubnetCidrReservation'].$post(args, options))
}

export async function getActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$get(args, options))
}

export async function postActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$post(args, options))
}

export async function getActionDeleteTrafficMirrorFilter(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorFilter'].$get(args, options))
}

export async function postActionDeleteTrafficMirrorFilter(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorFilter'].$post(args, options))
}

export async function getActionDeleteTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorFilterRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorFilterRule'].$get(args, options))
}

export async function postActionDeleteTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorFilterRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorFilterRule'].$post(args, options))
}

export async function getActionDeleteTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorSession']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorSession'].$get(args, options))
}

export async function postActionDeleteTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorSession'].$post(args, options))
}

export async function getActionDeleteTrafficMirrorTarget(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorTarget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorTarget'].$get(args, options))
}

export async function postActionDeleteTrafficMirrorTarget(
  args: InferRequestType<(typeof client)['#Action=DeleteTrafficMirrorTarget']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTrafficMirrorTarget'].$post(args, options))
}

export async function getActionDeleteTransitGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGateway'].$get(args, options))
}

export async function postActionDeleteTransitGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGateway'].$post(args, options))
}

export async function getActionDeleteTransitGatewayConnect(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayConnect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayConnect'].$get(args, options))
}

export async function postActionDeleteTransitGatewayConnect(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayConnect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayConnect'].$post(args, options))
}

export async function getActionDeleteTransitGatewayConnectPeer(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayConnectPeer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayConnectPeer'].$get(args, options))
}

export async function postActionDeleteTransitGatewayConnectPeer(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayConnectPeer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayConnectPeer'].$post(args, options))
}

export async function getActionDeleteTransitGatewayMulticastDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayMulticastDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayMulticastDomain'].$get(args, options),
  )
}

export async function postActionDeleteTransitGatewayMulticastDomain(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayMulticastDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayMulticastDomain'].$post(args, options),
  )
}

export async function getActionDeleteTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayPeeringAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayPeeringAttachment'].$get(args, options),
  )
}

export async function postActionDeleteTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayPeeringAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayPeeringAttachment'].$post(args, options),
  )
}

export async function getActionDeleteTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayPolicyTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayPolicyTable'].$get(args, options))
}

export async function postActionDeleteTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayPolicyTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayPolicyTable'].$post(args, options))
}

export async function getActionDeleteTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=DeleteTransitGatewayPrefixListReference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayPrefixListReference'].$get(args, options),
  )
}

export async function postActionDeleteTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=DeleteTransitGatewayPrefixListReference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayPrefixListReference'].$post(args, options),
  )
}

export async function getActionDeleteTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayRoute'].$get(args, options))
}

export async function postActionDeleteTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayRoute'].$post(args, options))
}

export async function getActionDeleteTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayRouteTable'].$get(args, options))
}

export async function postActionDeleteTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTransitGatewayRouteTable'].$post(args, options))
}

export async function getActionDeleteTransitGatewayRouteTableAnnouncement(
  args: InferRequestType<
    (typeof client)['#Action=DeleteTransitGatewayRouteTableAnnouncement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayRouteTableAnnouncement'].$get(args, options),
  )
}

export async function postActionDeleteTransitGatewayRouteTableAnnouncement(
  args: InferRequestType<
    (typeof client)['#Action=DeleteTransitGatewayRouteTableAnnouncement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayRouteTableAnnouncement'].$post(args, options),
  )
}

export async function getActionDeleteTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayVpcAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayVpcAttachment'].$get(args, options),
  )
}

export async function postActionDeleteTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=DeleteTransitGatewayVpcAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteTransitGatewayVpcAttachment'].$post(args, options),
  )
}

export async function getActionDeleteVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessEndpoint'].$get(args, options))
}

export async function postActionDeleteVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessEndpoint'].$post(args, options))
}

export async function getActionDeleteVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessGroup'].$get(args, options))
}

export async function postActionDeleteVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessGroup'].$post(args, options))
}

export async function getActionDeleteVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessInstance'].$get(args, options))
}

export async function postActionDeleteVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedAccessInstance'].$post(args, options))
}

export async function getActionDeleteVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessTrustProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVerifiedAccessTrustProvider'].$get(args, options),
  )
}

export async function postActionDeleteVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedAccessTrustProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVerifiedAccessTrustProvider'].$post(args, options),
  )
}

export async function getActionDeleteVolume(
  args: InferRequestType<(typeof client)['#Action=DeleteVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVolume'].$get(args, options))
}

export async function postActionDeleteVolume(
  args: InferRequestType<(typeof client)['#Action=DeleteVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVolume'].$post(args, options))
}

export async function getActionDeleteVpc(
  args: InferRequestType<(typeof client)['#Action=DeleteVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpc'].$get(args, options))
}

export async function postActionDeleteVpc(
  args: InferRequestType<(typeof client)['#Action=DeleteVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpc'].$post(args, options))
}

export async function getActionDeleteVpcEndpointConnectionNotifications(
  args: InferRequestType<
    (typeof client)['#Action=DeleteVpcEndpointConnectionNotifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVpcEndpointConnectionNotifications'].$get(args, options),
  )
}

export async function postActionDeleteVpcEndpointConnectionNotifications(
  args: InferRequestType<
    (typeof client)['#Action=DeleteVpcEndpointConnectionNotifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVpcEndpointConnectionNotifications'].$post(args, options),
  )
}

export async function getActionDeleteVpcEndpointServiceConfigurations(
  args: InferRequestType<(typeof client)['#Action=DeleteVpcEndpointServiceConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVpcEndpointServiceConfigurations'].$get(args, options),
  )
}

export async function postActionDeleteVpcEndpointServiceConfigurations(
  args: InferRequestType<
    (typeof client)['#Action=DeleteVpcEndpointServiceConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteVpcEndpointServiceConfigurations'].$post(args, options),
  )
}

export async function getActionDeleteVpcEndpoints(
  args: InferRequestType<(typeof client)['#Action=DeleteVpcEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpcEndpoints'].$get(args, options))
}

export async function postActionDeleteVpcEndpoints(
  args: InferRequestType<(typeof client)['#Action=DeleteVpcEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpcEndpoints'].$post(args, options))
}

export async function getActionDeleteVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=DeleteVpcPeeringConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpcPeeringConnection'].$get(args, options))
}

export async function postActionDeleteVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=DeleteVpcPeeringConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpcPeeringConnection'].$post(args, options))
}

export async function getActionDeleteVpnConnection(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnConnection'].$get(args, options))
}

export async function postActionDeleteVpnConnection(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnConnection'].$post(args, options))
}

export async function getActionDeleteVpnConnectionRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnConnectionRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnConnectionRoute'].$get(args, options))
}

export async function postActionDeleteVpnConnectionRoute(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnConnectionRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnConnectionRoute'].$post(args, options))
}

export async function getActionDeleteVpnGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnGateway'].$get(args, options))
}

export async function postActionDeleteVpnGateway(
  args: InferRequestType<(typeof client)['#Action=DeleteVpnGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVpnGateway'].$post(args, options))
}

export async function getActionDeprovisionByoipCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionByoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionByoipCidr'].$get(args, options))
}

export async function postActionDeprovisionByoipCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionByoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionByoipCidr'].$post(args, options))
}

export async function getActionDeprovisionIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionIpamPoolCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionIpamPoolCidr'].$get(args, options))
}

export async function postActionDeprovisionIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionIpamPoolCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionIpamPoolCidr'].$post(args, options))
}

export async function getActionDeprovisionPublicIpv4PoolCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionPublicIpv4PoolCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionPublicIpv4PoolCidr'].$get(args, options))
}

export async function postActionDeprovisionPublicIpv4PoolCidr(
  args: InferRequestType<(typeof client)['#Action=DeprovisionPublicIpv4PoolCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeprovisionPublicIpv4PoolCidr'].$post(args, options))
}

export async function getActionDeregisterImage(
  args: InferRequestType<(typeof client)['#Action=DeregisterImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterImage'].$get(args, options))
}

export async function postActionDeregisterImage(
  args: InferRequestType<(typeof client)['#Action=DeregisterImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterImage'].$post(args, options))
}

export async function getActionDeregisterInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterInstanceEventNotificationAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterInstanceEventNotificationAttributes'].$get(args, options),
  )
}

export async function postActionDeregisterInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterInstanceEventNotificationAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterInstanceEventNotificationAttributes'].$post(args, options),
  )
}

export async function getActionDeregisterTransitGatewayMulticastGroupMembers(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterTransitGatewayMulticastGroupMembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterTransitGatewayMulticastGroupMembers'].$get(args, options),
  )
}

export async function postActionDeregisterTransitGatewayMulticastGroupMembers(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterTransitGatewayMulticastGroupMembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterTransitGatewayMulticastGroupMembers'].$post(args, options),
  )
}

export async function getActionDeregisterTransitGatewayMulticastGroupSources(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterTransitGatewayMulticastGroupSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterTransitGatewayMulticastGroupSources'].$get(args, options),
  )
}

export async function postActionDeregisterTransitGatewayMulticastGroupSources(
  args: InferRequestType<
    (typeof client)['#Action=DeregisterTransitGatewayMulticastGroupSources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterTransitGatewayMulticastGroupSources'].$post(args, options),
  )
}

export async function getActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, options))
}

export async function postActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
}

export async function getActionDescribeAddressTransfers(
  args: InferRequestType<(typeof client)['#Action=DescribeAddressTransfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddressTransfers'].$get(args, options))
}

export async function postActionDescribeAddressTransfers(
  args: InferRequestType<(typeof client)['#Action=DescribeAddressTransfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddressTransfers'].$post(args, options))
}

export async function getActionDescribeAddresses(
  args: InferRequestType<(typeof client)['#Action=DescribeAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddresses'].$get(args, options))
}

export async function postActionDescribeAddresses(
  args: InferRequestType<(typeof client)['#Action=DescribeAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddresses'].$post(args, options))
}

export async function getActionDescribeAddressesAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeAddressesAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddressesAttribute'].$get(args, options))
}

export async function postActionDescribeAddressesAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeAddressesAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAddressesAttribute'].$post(args, options))
}

export async function getActionDescribeAggregateIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeAggregateIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAggregateIdFormat'].$get(args, options))
}

export async function postActionDescribeAggregateIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeAggregateIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAggregateIdFormat'].$post(args, options))
}

export async function getActionDescribeAvailabilityZones(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityZones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAvailabilityZones'].$get(args, options))
}

export async function postActionDescribeAvailabilityZones(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityZones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAvailabilityZones'].$post(args, options))
}

export async function getActionDescribeAwsNetworkPerformanceMetricSubscriptions(
  args: InferRequestType<
    (typeof client)['#Action=DescribeAwsNetworkPerformanceMetricSubscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeAwsNetworkPerformanceMetricSubscriptions'].$get(args, options),
  )
}

export async function postActionDescribeAwsNetworkPerformanceMetricSubscriptions(
  args: InferRequestType<
    (typeof client)['#Action=DescribeAwsNetworkPerformanceMetricSubscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeAwsNetworkPerformanceMetricSubscriptions'].$post(args, options),
  )
}

export async function getActionDescribeBundleTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeBundleTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeBundleTasks'].$get(args, options))
}

export async function postActionDescribeBundleTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeBundleTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeBundleTasks'].$post(args, options))
}

export async function getActionDescribeByoipCidrs(
  args: InferRequestType<(typeof client)['#Action=DescribeByoipCidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeByoipCidrs'].$get(args, options))
}

export async function postActionDescribeByoipCidrs(
  args: InferRequestType<(typeof client)['#Action=DescribeByoipCidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeByoipCidrs'].$post(args, options))
}

export async function getActionDescribeCapacityReservationFleets(
  args: InferRequestType<(typeof client)['#Action=DescribeCapacityReservationFleets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeCapacityReservationFleets'].$get(args, options),
  )
}

export async function postActionDescribeCapacityReservationFleets(
  args: InferRequestType<(typeof client)['#Action=DescribeCapacityReservationFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeCapacityReservationFleets'].$post(args, options),
  )
}

export async function getActionDescribeCapacityReservations(
  args: InferRequestType<(typeof client)['#Action=DescribeCapacityReservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCapacityReservations'].$get(args, options))
}

export async function postActionDescribeCapacityReservations(
  args: InferRequestType<(typeof client)['#Action=DescribeCapacityReservations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCapacityReservations'].$post(args, options))
}

export async function getActionDescribeCarrierGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeCarrierGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCarrierGateways'].$get(args, options))
}

export async function postActionDescribeCarrierGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeCarrierGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCarrierGateways'].$post(args, options))
}

export async function getActionDescribeClassicLinkInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeClassicLinkInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClassicLinkInstances'].$get(args, options))
}

export async function postActionDescribeClassicLinkInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeClassicLinkInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClassicLinkInstances'].$post(args, options))
}

export async function getActionDescribeClientVpnAuthorizationRules(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnAuthorizationRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeClientVpnAuthorizationRules'].$get(args, options),
  )
}

export async function postActionDescribeClientVpnAuthorizationRules(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnAuthorizationRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeClientVpnAuthorizationRules'].$post(args, options),
  )
}

export async function getActionDescribeClientVpnConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnConnections'].$get(args, options))
}

export async function postActionDescribeClientVpnConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnConnections'].$post(args, options))
}

export async function getActionDescribeClientVpnEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnEndpoints'].$get(args, options))
}

export async function postActionDescribeClientVpnEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnEndpoints'].$post(args, options))
}

export async function getActionDescribeClientVpnRoutes(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnRoutes'].$get(args, options))
}

export async function postActionDescribeClientVpnRoutes(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnRoutes'].$post(args, options))
}

export async function getActionDescribeClientVpnTargetNetworks(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnTargetNetworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnTargetNetworks'].$get(args, options))
}

export async function postActionDescribeClientVpnTargetNetworks(
  args: InferRequestType<(typeof client)['#Action=DescribeClientVpnTargetNetworks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClientVpnTargetNetworks'].$post(args, options))
}

export async function getActionDescribeCoipPools(
  args: InferRequestType<(typeof client)['#Action=DescribeCoipPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCoipPools'].$get(args, options))
}

export async function postActionDescribeCoipPools(
  args: InferRequestType<(typeof client)['#Action=DescribeCoipPools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCoipPools'].$post(args, options))
}

export async function getActionDescribeConversionTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeConversionTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConversionTasks'].$get(args, options))
}

export async function postActionDescribeConversionTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeConversionTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConversionTasks'].$post(args, options))
}

export async function getActionDescribeCustomerGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeCustomerGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCustomerGateways'].$get(args, options))
}

export async function postActionDescribeCustomerGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeCustomerGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCustomerGateways'].$post(args, options))
}

export async function getActionDescribeDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeDhcpOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDhcpOptions'].$get(args, options))
}

export async function postActionDescribeDhcpOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeDhcpOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDhcpOptions'].$post(args, options))
}

export async function getActionDescribeEgressOnlyInternetGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeEgressOnlyInternetGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEgressOnlyInternetGateways'].$get(args, options),
  )
}

export async function postActionDescribeEgressOnlyInternetGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeEgressOnlyInternetGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEgressOnlyInternetGateways'].$post(args, options),
  )
}

export async function getActionDescribeElasticGpus(
  args: InferRequestType<(typeof client)['#Action=DescribeElasticGpus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeElasticGpus'].$get(args, options))
}

export async function postActionDescribeElasticGpus(
  args: InferRequestType<(typeof client)['#Action=DescribeElasticGpus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeElasticGpus'].$post(args, options))
}

export async function getActionDescribeExportImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportImageTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportImageTasks'].$get(args, options))
}

export async function postActionDescribeExportImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportImageTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportImageTasks'].$post(args, options))
}

export async function getActionDescribeExportTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportTasks'].$get(args, options))
}

export async function postActionDescribeExportTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportTasks'].$post(args, options))
}

export async function getActionDescribeFastLaunchImages(
  args: InferRequestType<(typeof client)['#Action=DescribeFastLaunchImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFastLaunchImages'].$get(args, options))
}

export async function postActionDescribeFastLaunchImages(
  args: InferRequestType<(typeof client)['#Action=DescribeFastLaunchImages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFastLaunchImages'].$post(args, options))
}

export async function getActionDescribeFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=DescribeFastSnapshotRestores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFastSnapshotRestores'].$get(args, options))
}

export async function postActionDescribeFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=DescribeFastSnapshotRestores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFastSnapshotRestores'].$post(args, options))
}

export async function getActionDescribeFleetHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeFleetHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleetHistory'].$get(args, options))
}

export async function postActionDescribeFleetHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeFleetHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleetHistory'].$post(args, options))
}

export async function getActionDescribeFleetInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeFleetInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleetInstances'].$get(args, options))
}

export async function postActionDescribeFleetInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeFleetInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleetInstances'].$post(args, options))
}

export async function getActionDescribeFleets(
  args: InferRequestType<(typeof client)['#Action=DescribeFleets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleets'].$get(args, options))
}

export async function postActionDescribeFleets(
  args: InferRequestType<(typeof client)['#Action=DescribeFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFleets'].$post(args, options))
}

export async function getActionDescribeFlowLogs(
  args: InferRequestType<(typeof client)['#Action=DescribeFlowLogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFlowLogs'].$get(args, options))
}

export async function postActionDescribeFlowLogs(
  args: InferRequestType<(typeof client)['#Action=DescribeFlowLogs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFlowLogs'].$post(args, options))
}

export async function getActionDescribeFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeFpgaImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFpgaImageAttribute'].$get(args, options))
}

export async function postActionDescribeFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeFpgaImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFpgaImageAttribute'].$post(args, options))
}

export async function getActionDescribeFpgaImages(
  args: InferRequestType<(typeof client)['#Action=DescribeFpgaImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFpgaImages'].$get(args, options))
}

export async function postActionDescribeFpgaImages(
  args: InferRequestType<(typeof client)['#Action=DescribeFpgaImages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeFpgaImages'].$post(args, options))
}

export async function getActionDescribeHostReservationOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeHostReservationOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHostReservationOfferings'].$get(args, options))
}

export async function postActionDescribeHostReservationOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeHostReservationOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeHostReservationOfferings'].$post(args, options),
  )
}

export async function getActionDescribeHostReservations(
  args: InferRequestType<(typeof client)['#Action=DescribeHostReservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHostReservations'].$get(args, options))
}

export async function postActionDescribeHostReservations(
  args: InferRequestType<(typeof client)['#Action=DescribeHostReservations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHostReservations'].$post(args, options))
}

export async function getActionDescribeHosts(
  args: InferRequestType<(typeof client)['#Action=DescribeHosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHosts'].$get(args, options))
}

export async function postActionDescribeHosts(
  args: InferRequestType<(typeof client)['#Action=DescribeHosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHosts'].$post(args, options))
}

export async function getActionDescribeIamInstanceProfileAssociations(
  args: InferRequestType<(typeof client)['#Action=DescribeIamInstanceProfileAssociations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeIamInstanceProfileAssociations'].$get(args, options),
  )
}

export async function postActionDescribeIamInstanceProfileAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeIamInstanceProfileAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeIamInstanceProfileAssociations'].$post(args, options),
  )
}

export async function getActionDescribeIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIdFormat'].$get(args, options))
}

export async function postActionDescribeIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIdFormat'].$post(args, options))
}

export async function getActionDescribeIdentityIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeIdentityIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIdentityIdFormat'].$get(args, options))
}

export async function postActionDescribeIdentityIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribeIdentityIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIdentityIdFormat'].$post(args, options))
}

export async function getActionDescribeImageAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImageAttribute'].$get(args, options))
}

export async function postActionDescribeImageAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImageAttribute'].$post(args, options))
}

export async function getActionDescribeImages(
  args: InferRequestType<(typeof client)['#Action=DescribeImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImages'].$get(args, options))
}

export async function postActionDescribeImages(
  args: InferRequestType<(typeof client)['#Action=DescribeImages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImages'].$post(args, options))
}

export async function getActionDescribeImportImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeImportImageTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImportImageTasks'].$get(args, options))
}

export async function postActionDescribeImportImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeImportImageTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImportImageTasks'].$post(args, options))
}

export async function getActionDescribeImportSnapshotTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeImportSnapshotTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImportSnapshotTasks'].$get(args, options))
}

export async function postActionDescribeImportSnapshotTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeImportSnapshotTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeImportSnapshotTasks'].$post(args, options))
}

export async function getActionDescribeInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceAttribute'].$get(args, options))
}

export async function postActionDescribeInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceAttribute'].$post(args, options))
}

export async function getActionDescribeInstanceCreditSpecifications(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceCreditSpecifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeInstanceCreditSpecifications'].$get(args, options),
  )
}

export async function postActionDescribeInstanceCreditSpecifications(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceCreditSpecifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeInstanceCreditSpecifications'].$post(args, options),
  )
}

export async function getActionDescribeInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=DescribeInstanceEventNotificationAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeInstanceEventNotificationAttributes'].$get(args, options),
  )
}

export async function postActionDescribeInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=DescribeInstanceEventNotificationAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeInstanceEventNotificationAttributes'].$post(args, options),
  )
}

export async function getActionDescribeInstanceEventWindows(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceEventWindows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceEventWindows'].$get(args, options))
}

export async function postActionDescribeInstanceEventWindows(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceEventWindows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceEventWindows'].$post(args, options))
}

export async function getActionDescribeInstanceStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceStatus'].$get(args, options))
}

export async function postActionDescribeInstanceStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceStatus'].$post(args, options))
}

export async function getActionDescribeInstanceTypeOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceTypeOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceTypeOfferings'].$get(args, options))
}

export async function postActionDescribeInstanceTypeOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceTypeOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceTypeOfferings'].$post(args, options))
}

export async function getActionDescribeInstanceTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceTypes'].$get(args, options))
}

export async function postActionDescribeInstanceTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceTypes'].$post(args, options))
}

export async function getActionDescribeInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstances'].$get(args, options))
}

export async function postActionDescribeInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstances'].$post(args, options))
}

export async function getActionDescribeInternetGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeInternetGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInternetGateways'].$get(args, options))
}

export async function postActionDescribeInternetGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeInternetGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInternetGateways'].$post(args, options))
}

export async function getActionDescribeIpamPools(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamPools'].$get(args, options))
}

export async function postActionDescribeIpamPools(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamPools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamPools'].$post(args, options))
}

export async function getActionDescribeIpamResourceDiscoveries(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamResourceDiscoveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamResourceDiscoveries'].$get(args, options))
}

export async function postActionDescribeIpamResourceDiscoveries(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamResourceDiscoveries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamResourceDiscoveries'].$post(args, options))
}

export async function getActionDescribeIpamResourceDiscoveryAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeIpamResourceDiscoveryAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeIpamResourceDiscoveryAssociations'].$get(args, options),
  )
}

export async function postActionDescribeIpamResourceDiscoveryAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeIpamResourceDiscoveryAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeIpamResourceDiscoveryAssociations'].$post(args, options),
  )
}

export async function getActionDescribeIpamScopes(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamScopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamScopes'].$get(args, options))
}

export async function postActionDescribeIpamScopes(
  args: InferRequestType<(typeof client)['#Action=DescribeIpamScopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpamScopes'].$post(args, options))
}

export async function getActionDescribeIpams(
  args: InferRequestType<(typeof client)['#Action=DescribeIpams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpams'].$get(args, options))
}

export async function postActionDescribeIpams(
  args: InferRequestType<(typeof client)['#Action=DescribeIpams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpams'].$post(args, options))
}

export async function getActionDescribeIpv6Pools(
  args: InferRequestType<(typeof client)['#Action=DescribeIpv6Pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpv6Pools'].$get(args, options))
}

export async function postActionDescribeIpv6Pools(
  args: InferRequestType<(typeof client)['#Action=DescribeIpv6Pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeIpv6Pools'].$post(args, options))
}

export async function getActionDescribeKeyPairs(
  args: InferRequestType<(typeof client)['#Action=DescribeKeyPairs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeKeyPairs'].$get(args, options))
}

export async function postActionDescribeKeyPairs(
  args: InferRequestType<(typeof client)['#Action=DescribeKeyPairs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeKeyPairs'].$post(args, options))
}

export async function getActionDescribeLaunchTemplateVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchTemplateVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchTemplateVersions'].$get(args, options))
}

export async function postActionDescribeLaunchTemplateVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchTemplateVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchTemplateVersions'].$post(args, options))
}

export async function getActionDescribeLaunchTemplates(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchTemplates'].$get(args, options))
}

export async function postActionDescribeLaunchTemplates(
  args: InferRequestType<(typeof client)['#Action=DescribeLaunchTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLaunchTemplates'].$post(args, options))
}

export async function getActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'].$get(
      args,
      options,
    ),
  )
}

export async function postActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function getActionDescribeLocalGatewayRouteTableVpcAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayRouteTableVpcAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayRouteTableVpcAssociations'].$get(args, options),
  )
}

export async function postActionDescribeLocalGatewayRouteTableVpcAssociations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayRouteTableVpcAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayRouteTableVpcAssociations'].$post(args, options),
  )
}

export async function getActionDescribeLocalGatewayRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGatewayRouteTables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLocalGatewayRouteTables'].$get(args, options))
}

export async function postActionDescribeLocalGatewayRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGatewayRouteTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLocalGatewayRouteTables'].$post(args, options))
}

export async function getActionDescribeLocalGatewayVirtualInterfaceGroups(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayVirtualInterfaceGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayVirtualInterfaceGroups'].$get(args, options),
  )
}

export async function postActionDescribeLocalGatewayVirtualInterfaceGroups(
  args: InferRequestType<
    (typeof client)['#Action=DescribeLocalGatewayVirtualInterfaceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayVirtualInterfaceGroups'].$post(args, options),
  )
}

export async function getActionDescribeLocalGatewayVirtualInterfaces(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGatewayVirtualInterfaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayVirtualInterfaces'].$get(args, options),
  )
}

export async function postActionDescribeLocalGatewayVirtualInterfaces(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGatewayVirtualInterfaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeLocalGatewayVirtualInterfaces'].$post(args, options),
  )
}

export async function getActionDescribeLocalGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLocalGateways'].$get(args, options))
}

export async function postActionDescribeLocalGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeLocalGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLocalGateways'].$post(args, options))
}

export async function getActionDescribeManagedPrefixLists(
  args: InferRequestType<(typeof client)['#Action=DescribeManagedPrefixLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeManagedPrefixLists'].$get(args, options))
}

export async function postActionDescribeManagedPrefixLists(
  args: InferRequestType<(typeof client)['#Action=DescribeManagedPrefixLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeManagedPrefixLists'].$post(args, options))
}

export async function getActionDescribeMovingAddresses(
  args: InferRequestType<(typeof client)['#Action=DescribeMovingAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeMovingAddresses'].$get(args, options))
}

export async function postActionDescribeMovingAddresses(
  args: InferRequestType<(typeof client)['#Action=DescribeMovingAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeMovingAddresses'].$post(args, options))
}

export async function getActionDescribeNatGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeNatGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNatGateways'].$get(args, options))
}

export async function postActionDescribeNatGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeNatGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNatGateways'].$post(args, options))
}

export async function getActionDescribeNetworkAcls(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkAcls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkAcls'].$get(args, options))
}

export async function postActionDescribeNetworkAcls(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkAcls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkAcls'].$post(args, options))
}

export async function getActionDescribeNetworkInsightsAccessScopeAnalyses(
  args: InferRequestType<
    (typeof client)['#Action=DescribeNetworkInsightsAccessScopeAnalyses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInsightsAccessScopeAnalyses'].$get(args, options),
  )
}

export async function postActionDescribeNetworkInsightsAccessScopeAnalyses(
  args: InferRequestType<
    (typeof client)['#Action=DescribeNetworkInsightsAccessScopeAnalyses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInsightsAccessScopeAnalyses'].$post(args, options),
  )
}

export async function getActionDescribeNetworkInsightsAccessScopes(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsAccessScopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInsightsAccessScopes'].$get(args, options),
  )
}

export async function postActionDescribeNetworkInsightsAccessScopes(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsAccessScopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInsightsAccessScopes'].$post(args, options),
  )
}

export async function getActionDescribeNetworkInsightsAnalyses(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsAnalyses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInsightsAnalyses'].$get(args, options))
}

export async function postActionDescribeNetworkInsightsAnalyses(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsAnalyses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInsightsAnalyses'].$post(args, options))
}

export async function getActionDescribeNetworkInsightsPaths(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsPaths']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInsightsPaths'].$get(args, options))
}

export async function postActionDescribeNetworkInsightsPaths(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInsightsPaths']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInsightsPaths'].$post(args, options))
}

export async function getActionDescribeNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfaceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInterfaceAttribute'].$get(args, options),
  )
}

export async function postActionDescribeNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfaceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInterfaceAttribute'].$post(args, options),
  )
}

export async function getActionDescribeNetworkInterfacePermissions(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfacePermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInterfacePermissions'].$get(args, options),
  )
}

export async function postActionDescribeNetworkInterfacePermissions(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfacePermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNetworkInterfacePermissions'].$post(args, options),
  )
}

export async function getActionDescribeNetworkInterfaces(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInterfaces'].$get(args, options))
}

export async function postActionDescribeNetworkInterfaces(
  args: InferRequestType<(typeof client)['#Action=DescribeNetworkInterfaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNetworkInterfaces'].$post(args, options))
}

export async function getActionDescribePlacementGroups(
  args: InferRequestType<(typeof client)['#Action=DescribePlacementGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePlacementGroups'].$get(args, options))
}

export async function postActionDescribePlacementGroups(
  args: InferRequestType<(typeof client)['#Action=DescribePlacementGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePlacementGroups'].$post(args, options))
}

export async function getActionDescribePrefixLists(
  args: InferRequestType<(typeof client)['#Action=DescribePrefixLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePrefixLists'].$get(args, options))
}

export async function postActionDescribePrefixLists(
  args: InferRequestType<(typeof client)['#Action=DescribePrefixLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePrefixLists'].$post(args, options))
}

export async function getActionDescribePrincipalIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribePrincipalIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePrincipalIdFormat'].$get(args, options))
}

export async function postActionDescribePrincipalIdFormat(
  args: InferRequestType<(typeof client)['#Action=DescribePrincipalIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePrincipalIdFormat'].$post(args, options))
}

export async function getActionDescribePublicIpv4Pools(
  args: InferRequestType<(typeof client)['#Action=DescribePublicIpv4Pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePublicIpv4Pools'].$get(args, options))
}

export async function postActionDescribePublicIpv4Pools(
  args: InferRequestType<(typeof client)['#Action=DescribePublicIpv4Pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePublicIpv4Pools'].$post(args, options))
}

export async function getActionDescribeRegions(
  args: InferRequestType<(typeof client)['#Action=DescribeRegions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRegions'].$get(args, options))
}

export async function postActionDescribeRegions(
  args: InferRequestType<(typeof client)['#Action=DescribeRegions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRegions'].$post(args, options))
}

export async function getActionDescribeReplaceRootVolumeTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeReplaceRootVolumeTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReplaceRootVolumeTasks'].$get(args, options))
}

export async function postActionDescribeReplaceRootVolumeTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeReplaceRootVolumeTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReplaceRootVolumeTasks'].$post(args, options))
}

export async function getActionDescribeReservedInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedInstances'].$get(args, options))
}

export async function postActionDescribeReservedInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedInstances'].$post(args, options))
}

export async function getActionDescribeReservedInstancesListings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstancesListings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesListings'].$get(args, options),
  )
}

export async function postActionDescribeReservedInstancesListings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstancesListings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesListings'].$post(args, options),
  )
}

export async function getActionDescribeReservedInstancesModifications(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstancesModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesModifications'].$get(args, options),
  )
}

export async function postActionDescribeReservedInstancesModifications(
  args: InferRequestType<
    (typeof client)['#Action=DescribeReservedInstancesModifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesModifications'].$post(args, options),
  )
}

export async function getActionDescribeReservedInstancesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstancesOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesOfferings'].$get(args, options),
  )
}

export async function postActionDescribeReservedInstancesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedInstancesOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedInstancesOfferings'].$post(args, options),
  )
}

export async function getActionDescribeRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeRouteTables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRouteTables'].$get(args, options))
}

export async function postActionDescribeRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeRouteTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRouteTables'].$post(args, options))
}

export async function getActionDescribeScheduledInstanceAvailability(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledInstanceAvailability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeScheduledInstanceAvailability'].$get(args, options),
  )
}

export async function postActionDescribeScheduledInstanceAvailability(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledInstanceAvailability']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeScheduledInstanceAvailability'].$post(args, options),
  )
}

export async function getActionDescribeScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledInstances'].$get(args, options))
}

export async function postActionDescribeScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledInstances'].$post(args, options))
}

export async function getActionDescribeSecurityGroupReferences(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroupReferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroupReferences'].$get(args, options))
}

export async function postActionDescribeSecurityGroupReferences(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroupReferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroupReferences'].$post(args, options))
}

export async function getActionDescribeSecurityGroupRules(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroupRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroupRules'].$get(args, options))
}

export async function postActionDescribeSecurityGroupRules(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroupRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroupRules'].$post(args, options))
}

export async function getActionDescribeSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroups'].$get(args, options))
}

export async function postActionDescribeSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSecurityGroups'].$post(args, options))
}

export async function getActionDescribeSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotAttribute'].$get(args, options))
}

export async function postActionDescribeSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotAttribute'].$post(args, options))
}

export async function getActionDescribeSnapshotTierStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotTierStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotTierStatus'].$get(args, options))
}

export async function postActionDescribeSnapshotTierStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotTierStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotTierStatus'].$post(args, options))
}

export async function getActionDescribeSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshots'].$get(args, options))
}

export async function postActionDescribeSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshots'].$post(args, options))
}

export async function getActionDescribeSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotDatafeedSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotDatafeedSubscription'].$get(args, options))
}

export async function postActionDescribeSpotDatafeedSubscription(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotDatafeedSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeSpotDatafeedSubscription'].$post(args, options),
  )
}

export async function getActionDescribeSpotFleetInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetInstances'].$get(args, options))
}

export async function postActionDescribeSpotFleetInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetInstances'].$post(args, options))
}

export async function getActionDescribeSpotFleetRequestHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetRequestHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetRequestHistory'].$get(args, options))
}

export async function postActionDescribeSpotFleetRequestHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetRequestHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetRequestHistory'].$post(args, options))
}

export async function getActionDescribeSpotFleetRequests(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetRequests'].$get(args, options))
}

export async function postActionDescribeSpotFleetRequests(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotFleetRequests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotFleetRequests'].$post(args, options))
}

export async function getActionDescribeSpotInstanceRequests(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotInstanceRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotInstanceRequests'].$get(args, options))
}

export async function postActionDescribeSpotInstanceRequests(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotInstanceRequests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotInstanceRequests'].$post(args, options))
}

export async function getActionDescribeSpotPriceHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotPriceHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotPriceHistory'].$get(args, options))
}

export async function postActionDescribeSpotPriceHistory(
  args: InferRequestType<(typeof client)['#Action=DescribeSpotPriceHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSpotPriceHistory'].$post(args, options))
}

export async function getActionDescribeStaleSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeStaleSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStaleSecurityGroups'].$get(args, options))
}

export async function postActionDescribeStaleSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeStaleSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStaleSecurityGroups'].$post(args, options))
}

export async function getActionDescribeStoreImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeStoreImageTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStoreImageTasks'].$get(args, options))
}

export async function postActionDescribeStoreImageTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeStoreImageTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStoreImageTasks'].$post(args, options))
}

export async function getActionDescribeSubnets(
  args: InferRequestType<(typeof client)['#Action=DescribeSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSubnets'].$get(args, options))
}

export async function postActionDescribeSubnets(
  args: InferRequestType<(typeof client)['#Action=DescribeSubnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSubnets'].$post(args, options))
}

export async function getActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$get(args, options))
}

export async function postActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$post(args, options))
}

export async function getActionDescribeTrafficMirrorFilters(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorFilters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorFilters'].$get(args, options))
}

export async function postActionDescribeTrafficMirrorFilters(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorFilters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorFilters'].$post(args, options))
}

export async function getActionDescribeTrafficMirrorSessions(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorSessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorSessions'].$get(args, options))
}

export async function postActionDescribeTrafficMirrorSessions(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorSessions'].$post(args, options))
}

export async function getActionDescribeTrafficMirrorTargets(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorTargets'].$get(args, options))
}

export async function postActionDescribeTrafficMirrorTargets(
  args: InferRequestType<(typeof client)['#Action=DescribeTrafficMirrorTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTrafficMirrorTargets'].$post(args, options))
}

export async function getActionDescribeTransitGatewayAttachments(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayAttachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayAttachments'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayAttachments(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayAttachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayAttachments'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayConnectPeers(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayConnectPeers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayConnectPeers'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayConnectPeers(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayConnectPeers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayConnectPeers'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayConnects(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayConnects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTransitGatewayConnects'].$get(args, options))
}

export async function postActionDescribeTransitGatewayConnects(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayConnects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTransitGatewayConnects'].$post(args, options))
}

export async function getActionDescribeTransitGatewayMulticastDomains(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayMulticastDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayMulticastDomains'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayMulticastDomains(
  args: InferRequestType<
    (typeof client)['#Action=DescribeTransitGatewayMulticastDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayMulticastDomains'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayPeeringAttachments(
  args: InferRequestType<
    (typeof client)['#Action=DescribeTransitGatewayPeeringAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayPeeringAttachments'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayPeeringAttachments(
  args: InferRequestType<
    (typeof client)['#Action=DescribeTransitGatewayPeeringAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayPeeringAttachments'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayPolicyTables(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayPolicyTables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayPolicyTables'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayPolicyTables(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayPolicyTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayPolicyTables'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayRouteTableAnnouncements(
  args: InferRequestType<
    (typeof client)['#Action=DescribeTransitGatewayRouteTableAnnouncements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayRouteTableAnnouncements'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayRouteTableAnnouncements(
  args: InferRequestType<
    (typeof client)['#Action=DescribeTransitGatewayRouteTableAnnouncements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayRouteTableAnnouncements'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayRouteTables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayRouteTables'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayRouteTables(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayRouteTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayRouteTables'].$post(args, options),
  )
}

export async function getActionDescribeTransitGatewayVpcAttachments(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayVpcAttachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayVpcAttachments'].$get(args, options),
  )
}

export async function postActionDescribeTransitGatewayVpcAttachments(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGatewayVpcAttachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTransitGatewayVpcAttachments'].$post(args, options),
  )
}

export async function getActionDescribeTransitGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTransitGateways'].$get(args, options))
}

export async function postActionDescribeTransitGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeTransitGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTransitGateways'].$post(args, options))
}

export async function getActionDescribeTrunkInterfaceAssociations(
  args: InferRequestType<(typeof client)['#Action=DescribeTrunkInterfaceAssociations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTrunkInterfaceAssociations'].$get(args, options),
  )
}

export async function postActionDescribeTrunkInterfaceAssociations(
  args: InferRequestType<(typeof client)['#Action=DescribeTrunkInterfaceAssociations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeTrunkInterfaceAssociations'].$post(args, options),
  )
}

export async function getActionDescribeVerifiedAccessEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessEndpoints'].$get(args, options))
}

export async function postActionDescribeVerifiedAccessEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessEndpoints'].$post(args, options))
}

export async function getActionDescribeVerifiedAccessGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessGroups'].$get(args, options))
}

export async function postActionDescribeVerifiedAccessGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessGroups'].$post(args, options))
}

export async function getActionDescribeVerifiedAccessInstanceLoggingConfigurations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVerifiedAccessInstanceLoggingConfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVerifiedAccessInstanceLoggingConfigurations'].$get(args, options),
  )
}

export async function postActionDescribeVerifiedAccessInstanceLoggingConfigurations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVerifiedAccessInstanceLoggingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVerifiedAccessInstanceLoggingConfigurations'].$post(args, options),
  )
}

export async function getActionDescribeVerifiedAccessInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessInstances'].$get(args, options))
}

export async function postActionDescribeVerifiedAccessInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVerifiedAccessInstances'].$post(args, options))
}

export async function getActionDescribeVerifiedAccessTrustProviders(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessTrustProviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVerifiedAccessTrustProviders'].$get(args, options),
  )
}

export async function postActionDescribeVerifiedAccessTrustProviders(
  args: InferRequestType<(typeof client)['#Action=DescribeVerifiedAccessTrustProviders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVerifiedAccessTrustProviders'].$post(args, options),
  )
}

export async function getActionDescribeVolumeAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumeAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumeAttribute'].$get(args, options))
}

export async function postActionDescribeVolumeAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumeAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumeAttribute'].$post(args, options))
}

export async function getActionDescribeVolumeStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumeStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumeStatus'].$get(args, options))
}

export async function postActionDescribeVolumeStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumeStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumeStatus'].$post(args, options))
}

export async function getActionDescribeVolumes(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumes'].$get(args, options))
}

export async function postActionDescribeVolumes(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumes'].$post(args, options))
}

export async function getActionDescribeVolumesModifications(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumesModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumesModifications'].$get(args, options))
}

export async function postActionDescribeVolumesModifications(
  args: InferRequestType<(typeof client)['#Action=DescribeVolumesModifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVolumesModifications'].$post(args, options))
}

export async function getActionDescribeVpcAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcAttribute'].$get(args, options))
}

export async function postActionDescribeVpcAttribute(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcAttribute'].$post(args, options))
}

export async function getActionDescribeVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcClassicLink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcClassicLink'].$get(args, options))
}

export async function postActionDescribeVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcClassicLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcClassicLink'].$post(args, options))
}

export async function getActionDescribeVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcClassicLinkDnsSupport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcClassicLinkDnsSupport'].$get(args, options))
}

export async function postActionDescribeVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcClassicLinkDnsSupport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcClassicLinkDnsSupport'].$post(args, options),
  )
}

export async function getActionDescribeVpcEndpointConnectionNotifications(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVpcEndpointConnectionNotifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointConnectionNotifications'].$get(args, options),
  )
}

export async function postActionDescribeVpcEndpointConnectionNotifications(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVpcEndpointConnectionNotifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointConnectionNotifications'].$post(args, options),
  )
}

export async function getActionDescribeVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpointConnections'].$get(args, options))
}

export async function postActionDescribeVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpointConnections'].$post(args, options))
}

export async function getActionDescribeVpcEndpointServiceConfigurations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVpcEndpointServiceConfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointServiceConfigurations'].$get(args, options),
  )
}

export async function postActionDescribeVpcEndpointServiceConfigurations(
  args: InferRequestType<
    (typeof client)['#Action=DescribeVpcEndpointServiceConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointServiceConfigurations'].$post(args, options),
  )
}

export async function getActionDescribeVpcEndpointServicePermissions(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointServicePermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointServicePermissions'].$get(args, options),
  )
}

export async function postActionDescribeVpcEndpointServicePermissions(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointServicePermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeVpcEndpointServicePermissions'].$post(args, options),
  )
}

export async function getActionDescribeVpcEndpointServices(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpointServices'].$get(args, options))
}

export async function postActionDescribeVpcEndpointServices(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpointServices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpointServices'].$post(args, options))
}

export async function getActionDescribeVpcEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpoints'].$get(args, options))
}

export async function postActionDescribeVpcEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcEndpoints'].$post(args, options))
}

export async function getActionDescribeVpcPeeringConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcPeeringConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcPeeringConnections'].$get(args, options))
}

export async function postActionDescribeVpcPeeringConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcPeeringConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcPeeringConnections'].$post(args, options))
}

export async function getActionDescribeVpcs(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcs'].$get(args, options))
}

export async function postActionDescribeVpcs(
  args: InferRequestType<(typeof client)['#Action=DescribeVpcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpcs'].$post(args, options))
}

export async function getActionDescribeVpnConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpnConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpnConnections'].$get(args, options))
}

export async function postActionDescribeVpnConnections(
  args: InferRequestType<(typeof client)['#Action=DescribeVpnConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpnConnections'].$post(args, options))
}

export async function getActionDescribeVpnGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeVpnGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpnGateways'].$get(args, options))
}

export async function postActionDescribeVpnGateways(
  args: InferRequestType<(typeof client)['#Action=DescribeVpnGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeVpnGateways'].$post(args, options))
}

export async function getActionDetachClassicLinkVpc(
  args: InferRequestType<(typeof client)['#Action=DetachClassicLinkVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachClassicLinkVpc'].$get(args, options))
}

export async function postActionDetachClassicLinkVpc(
  args: InferRequestType<(typeof client)['#Action=DetachClassicLinkVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachClassicLinkVpc'].$post(args, options))
}

export async function getActionDetachInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DetachInternetGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachInternetGateway'].$get(args, options))
}

export async function postActionDetachInternetGateway(
  args: InferRequestType<(typeof client)['#Action=DetachInternetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachInternetGateway'].$post(args, options))
}

export async function getActionDetachNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=DetachNetworkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachNetworkInterface'].$get(args, options))
}

export async function postActionDetachNetworkInterface(
  args: InferRequestType<(typeof client)['#Action=DetachNetworkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachNetworkInterface'].$post(args, options))
}

export async function getActionDetachVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=DetachVerifiedAccessTrustProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DetachVerifiedAccessTrustProvider'].$get(args, options),
  )
}

export async function postActionDetachVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=DetachVerifiedAccessTrustProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DetachVerifiedAccessTrustProvider'].$post(args, options),
  )
}

export async function getActionDetachVolume(
  args: InferRequestType<(typeof client)['#Action=DetachVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachVolume'].$get(args, options))
}

export async function postActionDetachVolume(
  args: InferRequestType<(typeof client)['#Action=DetachVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachVolume'].$post(args, options))
}

export async function getActionDetachVpnGateway(
  args: InferRequestType<(typeof client)['#Action=DetachVpnGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachVpnGateway'].$get(args, options))
}

export async function postActionDetachVpnGateway(
  args: InferRequestType<(typeof client)['#Action=DetachVpnGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachVpnGateway'].$post(args, options))
}

export async function getActionDisableAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=DisableAddressTransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableAddressTransfer'].$get(args, options))
}

export async function postActionDisableAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=DisableAddressTransfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableAddressTransfer'].$post(args, options))
}

export async function getActionDisableAwsNetworkPerformanceMetricSubscription(
  args: InferRequestType<
    (typeof client)['#Action=DisableAwsNetworkPerformanceMetricSubscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableAwsNetworkPerformanceMetricSubscription'].$get(args, options),
  )
}

export async function postActionDisableAwsNetworkPerformanceMetricSubscription(
  args: InferRequestType<
    (typeof client)['#Action=DisableAwsNetworkPerformanceMetricSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableAwsNetworkPerformanceMetricSubscription'].$post(args, options),
  )
}

export async function getActionDisableEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=DisableEbsEncryptionByDefault']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableEbsEncryptionByDefault'].$get(args, options))
}

export async function postActionDisableEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=DisableEbsEncryptionByDefault']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableEbsEncryptionByDefault'].$post(args, options))
}

export async function getActionDisableFastLaunch(
  args: InferRequestType<(typeof client)['#Action=DisableFastLaunch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableFastLaunch'].$get(args, options))
}

export async function postActionDisableFastLaunch(
  args: InferRequestType<(typeof client)['#Action=DisableFastLaunch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableFastLaunch'].$post(args, options))
}

export async function getActionDisableFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=DisableFastSnapshotRestores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableFastSnapshotRestores'].$get(args, options))
}

export async function postActionDisableFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=DisableFastSnapshotRestores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableFastSnapshotRestores'].$post(args, options))
}

export async function getActionDisableImageDeprecation(
  args: InferRequestType<(typeof client)['#Action=DisableImageDeprecation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableImageDeprecation'].$get(args, options))
}

export async function postActionDisableImageDeprecation(
  args: InferRequestType<(typeof client)['#Action=DisableImageDeprecation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableImageDeprecation'].$post(args, options))
}

export async function getActionDisableIpamOrganizationAdminAccount(
  args: InferRequestType<(typeof client)['#Action=DisableIpamOrganizationAdminAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableIpamOrganizationAdminAccount'].$get(args, options),
  )
}

export async function postActionDisableIpamOrganizationAdminAccount(
  args: InferRequestType<(typeof client)['#Action=DisableIpamOrganizationAdminAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableIpamOrganizationAdminAccount'].$post(args, options),
  )
}

export async function getActionDisableSerialConsoleAccess(
  args: InferRequestType<(typeof client)['#Action=DisableSerialConsoleAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableSerialConsoleAccess'].$get(args, options))
}

export async function postActionDisableSerialConsoleAccess(
  args: InferRequestType<(typeof client)['#Action=DisableSerialConsoleAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableSerialConsoleAccess'].$post(args, options))
}

export async function getActionDisableTransitGatewayRouteTablePropagation(
  args: InferRequestType<
    (typeof client)['#Action=DisableTransitGatewayRouteTablePropagation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableTransitGatewayRouteTablePropagation'].$get(args, options),
  )
}

export async function postActionDisableTransitGatewayRouteTablePropagation(
  args: InferRequestType<
    (typeof client)['#Action=DisableTransitGatewayRouteTablePropagation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableTransitGatewayRouteTablePropagation'].$post(args, options),
  )
}

export async function getActionDisableVgwRoutePropagation(
  args: InferRequestType<(typeof client)['#Action=DisableVgwRoutePropagation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVgwRoutePropagation'].$get(args, options))
}

export async function postActionDisableVgwRoutePropagation(
  args: InferRequestType<(typeof client)['#Action=DisableVgwRoutePropagation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVgwRoutePropagation'].$post(args, options))
}

export async function getActionDisableVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=DisableVpcClassicLink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVpcClassicLink'].$get(args, options))
}

export async function postActionDisableVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=DisableVpcClassicLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVpcClassicLink'].$post(args, options))
}

export async function getActionDisableVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=DisableVpcClassicLinkDnsSupport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVpcClassicLinkDnsSupport'].$get(args, options))
}

export async function postActionDisableVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=DisableVpcClassicLinkDnsSupport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableVpcClassicLinkDnsSupport'].$post(args, options))
}

export async function getActionDisassociateAddress(
  args: InferRequestType<(typeof client)['#Action=DisassociateAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateAddress'].$get(args, options))
}

export async function postActionDisassociateAddress(
  args: InferRequestType<(typeof client)['#Action=DisassociateAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateAddress'].$post(args, options))
}

export async function getActionDisassociateClientVpnTargetNetwork(
  args: InferRequestType<(typeof client)['#Action=DisassociateClientVpnTargetNetwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateClientVpnTargetNetwork'].$get(args, options),
  )
}

export async function postActionDisassociateClientVpnTargetNetwork(
  args: InferRequestType<(typeof client)['#Action=DisassociateClientVpnTargetNetwork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateClientVpnTargetNetwork'].$post(args, options),
  )
}

export async function getActionDisassociateEnclaveCertificateIamRole(
  args: InferRequestType<(typeof client)['#Action=DisassociateEnclaveCertificateIamRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateEnclaveCertificateIamRole'].$get(args, options),
  )
}

export async function postActionDisassociateEnclaveCertificateIamRole(
  args: InferRequestType<(typeof client)['#Action=DisassociateEnclaveCertificateIamRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateEnclaveCertificateIamRole'].$post(args, options),
  )
}

export async function getActionDisassociateIamInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=DisassociateIamInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateIamInstanceProfile'].$get(args, options))
}

export async function postActionDisassociateIamInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=DisassociateIamInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateIamInstanceProfile'].$post(args, options))
}

export async function getActionDisassociateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=DisassociateInstanceEventWindow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateInstanceEventWindow'].$get(args, options))
}

export async function postActionDisassociateInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=DisassociateInstanceEventWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateInstanceEventWindow'].$post(args, options))
}

export async function getActionDisassociateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=DisassociateIpamResourceDiscovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateIpamResourceDiscovery'].$get(args, options),
  )
}

export async function postActionDisassociateIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=DisassociateIpamResourceDiscovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateIpamResourceDiscovery'].$post(args, options),
  )
}

export async function getActionDisassociateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=DisassociateNatGatewayAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateNatGatewayAddress'].$get(args, options))
}

export async function postActionDisassociateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=DisassociateNatGatewayAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateNatGatewayAddress'].$post(args, options))
}

export async function getActionDisassociateRouteTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateRouteTable'].$get(args, options))
}

export async function postActionDisassociateRouteTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateRouteTable'].$post(args, options))
}

export async function getActionDisassociateSubnetCidrBlock(
  args: InferRequestType<(typeof client)['#Action=DisassociateSubnetCidrBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateSubnetCidrBlock'].$get(args, options))
}

export async function postActionDisassociateSubnetCidrBlock(
  args: InferRequestType<(typeof client)['#Action=DisassociateSubnetCidrBlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateSubnetCidrBlock'].$post(args, options))
}

export async function getActionDisassociateTransitGatewayMulticastDomain(
  args: InferRequestType<
    (typeof client)['#Action=DisassociateTransitGatewayMulticastDomain']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayMulticastDomain'].$get(args, options),
  )
}

export async function postActionDisassociateTransitGatewayMulticastDomain(
  args: InferRequestType<
    (typeof client)['#Action=DisassociateTransitGatewayMulticastDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayMulticastDomain'].$post(args, options),
  )
}

export async function getActionDisassociateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateTransitGatewayPolicyTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayPolicyTable'].$get(args, options),
  )
}

export async function postActionDisassociateTransitGatewayPolicyTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateTransitGatewayPolicyTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayPolicyTable'].$post(args, options),
  )
}

export async function getActionDisassociateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateTransitGatewayRouteTable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayRouteTable'].$get(args, options),
  )
}

export async function postActionDisassociateTransitGatewayRouteTable(
  args: InferRequestType<(typeof client)['#Action=DisassociateTransitGatewayRouteTable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateTransitGatewayRouteTable'].$post(args, options),
  )
}

export async function getActionDisassociateTrunkInterface(
  args: InferRequestType<(typeof client)['#Action=DisassociateTrunkInterface']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateTrunkInterface'].$get(args, options))
}

export async function postActionDisassociateTrunkInterface(
  args: InferRequestType<(typeof client)['#Action=DisassociateTrunkInterface']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateTrunkInterface'].$post(args, options))
}

export async function getActionDisassociateVpcCidrBlock(
  args: InferRequestType<(typeof client)['#Action=DisassociateVpcCidrBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateVpcCidrBlock'].$get(args, options))
}

export async function postActionDisassociateVpcCidrBlock(
  args: InferRequestType<(typeof client)['#Action=DisassociateVpcCidrBlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateVpcCidrBlock'].$post(args, options))
}

export async function getActionEnableAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=EnableAddressTransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableAddressTransfer'].$get(args, options))
}

export async function postActionEnableAddressTransfer(
  args: InferRequestType<(typeof client)['#Action=EnableAddressTransfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableAddressTransfer'].$post(args, options))
}

export async function getActionEnableAwsNetworkPerformanceMetricSubscription(
  args: InferRequestType<
    (typeof client)['#Action=EnableAwsNetworkPerformanceMetricSubscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableAwsNetworkPerformanceMetricSubscription'].$get(args, options),
  )
}

export async function postActionEnableAwsNetworkPerformanceMetricSubscription(
  args: InferRequestType<
    (typeof client)['#Action=EnableAwsNetworkPerformanceMetricSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableAwsNetworkPerformanceMetricSubscription'].$post(args, options),
  )
}

export async function getActionEnableEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=EnableEbsEncryptionByDefault']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableEbsEncryptionByDefault'].$get(args, options))
}

export async function postActionEnableEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=EnableEbsEncryptionByDefault']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableEbsEncryptionByDefault'].$post(args, options))
}

export async function getActionEnableFastLaunch(
  args: InferRequestType<(typeof client)['#Action=EnableFastLaunch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableFastLaunch'].$get(args, options))
}

export async function postActionEnableFastLaunch(
  args: InferRequestType<(typeof client)['#Action=EnableFastLaunch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableFastLaunch'].$post(args, options))
}

export async function getActionEnableFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=EnableFastSnapshotRestores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableFastSnapshotRestores'].$get(args, options))
}

export async function postActionEnableFastSnapshotRestores(
  args: InferRequestType<(typeof client)['#Action=EnableFastSnapshotRestores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableFastSnapshotRestores'].$post(args, options))
}

export async function getActionEnableImageDeprecation(
  args: InferRequestType<(typeof client)['#Action=EnableImageDeprecation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableImageDeprecation'].$get(args, options))
}

export async function postActionEnableImageDeprecation(
  args: InferRequestType<(typeof client)['#Action=EnableImageDeprecation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableImageDeprecation'].$post(args, options))
}

export async function getActionEnableIpamOrganizationAdminAccount(
  args: InferRequestType<(typeof client)['#Action=EnableIpamOrganizationAdminAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableIpamOrganizationAdminAccount'].$get(args, options),
  )
}

export async function postActionEnableIpamOrganizationAdminAccount(
  args: InferRequestType<(typeof client)['#Action=EnableIpamOrganizationAdminAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableIpamOrganizationAdminAccount'].$post(args, options),
  )
}

export async function getActionEnableReachabilityAnalyzerOrganizationSharing(
  args: InferRequestType<
    (typeof client)['#Action=EnableReachabilityAnalyzerOrganizationSharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableReachabilityAnalyzerOrganizationSharing'].$get(args, options),
  )
}

export async function postActionEnableReachabilityAnalyzerOrganizationSharing(
  args: InferRequestType<
    (typeof client)['#Action=EnableReachabilityAnalyzerOrganizationSharing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableReachabilityAnalyzerOrganizationSharing'].$post(args, options),
  )
}

export async function getActionEnableSerialConsoleAccess(
  args: InferRequestType<(typeof client)['#Action=EnableSerialConsoleAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableSerialConsoleAccess'].$get(args, options))
}

export async function postActionEnableSerialConsoleAccess(
  args: InferRequestType<(typeof client)['#Action=EnableSerialConsoleAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableSerialConsoleAccess'].$post(args, options))
}

export async function getActionEnableTransitGatewayRouteTablePropagation(
  args: InferRequestType<
    (typeof client)['#Action=EnableTransitGatewayRouteTablePropagation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableTransitGatewayRouteTablePropagation'].$get(args, options),
  )
}

export async function postActionEnableTransitGatewayRouteTablePropagation(
  args: InferRequestType<
    (typeof client)['#Action=EnableTransitGatewayRouteTablePropagation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableTransitGatewayRouteTablePropagation'].$post(args, options),
  )
}

export async function getActionEnableVgwRoutePropagation(
  args: InferRequestType<(typeof client)['#Action=EnableVgwRoutePropagation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVgwRoutePropagation'].$get(args, options))
}

export async function postActionEnableVgwRoutePropagation(
  args: InferRequestType<(typeof client)['#Action=EnableVgwRoutePropagation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVgwRoutePropagation'].$post(args, options))
}

export async function getActionEnableVolumeIO(
  args: InferRequestType<(typeof client)['#Action=EnableVolumeIO']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVolumeIO'].$get(args, options))
}

export async function postActionEnableVolumeIO(
  args: InferRequestType<(typeof client)['#Action=EnableVolumeIO']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVolumeIO'].$post(args, options))
}

export async function getActionEnableVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=EnableVpcClassicLink']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVpcClassicLink'].$get(args, options))
}

export async function postActionEnableVpcClassicLink(
  args: InferRequestType<(typeof client)['#Action=EnableVpcClassicLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVpcClassicLink'].$post(args, options))
}

export async function getActionEnableVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=EnableVpcClassicLinkDnsSupport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVpcClassicLinkDnsSupport'].$get(args, options))
}

export async function postActionEnableVpcClassicLinkDnsSupport(
  args: InferRequestType<(typeof client)['#Action=EnableVpcClassicLinkDnsSupport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableVpcClassicLinkDnsSupport'].$post(args, options))
}

export async function getActionExportClientVpnClientCertificateRevocationList(
  args: InferRequestType<
    (typeof client)['#Action=ExportClientVpnClientCertificateRevocationList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ExportClientVpnClientCertificateRevocationList'].$get(args, options),
  )
}

export async function postActionExportClientVpnClientCertificateRevocationList(
  args: InferRequestType<
    (typeof client)['#Action=ExportClientVpnClientCertificateRevocationList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ExportClientVpnClientCertificateRevocationList'].$post(args, options),
  )
}

export async function getActionExportClientVpnClientConfiguration(
  args: InferRequestType<(typeof client)['#Action=ExportClientVpnClientConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ExportClientVpnClientConfiguration'].$get(args, options),
  )
}

export async function postActionExportClientVpnClientConfiguration(
  args: InferRequestType<(typeof client)['#Action=ExportClientVpnClientConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ExportClientVpnClientConfiguration'].$post(args, options),
  )
}

export async function getActionExportImage(
  args: InferRequestType<(typeof client)['#Action=ExportImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExportImage'].$get(args, options))
}

export async function postActionExportImage(
  args: InferRequestType<(typeof client)['#Action=ExportImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExportImage'].$post(args, options))
}

export async function getActionExportTransitGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=ExportTransitGatewayRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExportTransitGatewayRoutes'].$get(args, options))
}

export async function postActionExportTransitGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=ExportTransitGatewayRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExportTransitGatewayRoutes'].$post(args, options))
}

export async function getActionGetAssociatedEnclaveCertificateIamRoles(
  args: InferRequestType<
    (typeof client)['#Action=GetAssociatedEnclaveCertificateIamRoles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetAssociatedEnclaveCertificateIamRoles'].$get(args, options),
  )
}

export async function postActionGetAssociatedEnclaveCertificateIamRoles(
  args: InferRequestType<
    (typeof client)['#Action=GetAssociatedEnclaveCertificateIamRoles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetAssociatedEnclaveCertificateIamRoles'].$post(args, options),
  )
}

export async function getActionGetAssociatedIpv6PoolCidrs(
  args: InferRequestType<(typeof client)['#Action=GetAssociatedIpv6PoolCidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAssociatedIpv6PoolCidrs'].$get(args, options))
}

export async function postActionGetAssociatedIpv6PoolCidrs(
  args: InferRequestType<(typeof client)['#Action=GetAssociatedIpv6PoolCidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAssociatedIpv6PoolCidrs'].$post(args, options))
}

export async function getActionGetAwsNetworkPerformanceData(
  args: InferRequestType<(typeof client)['#Action=GetAwsNetworkPerformanceData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAwsNetworkPerformanceData'].$get(args, options))
}

export async function postActionGetAwsNetworkPerformanceData(
  args: InferRequestType<(typeof client)['#Action=GetAwsNetworkPerformanceData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAwsNetworkPerformanceData'].$post(args, options))
}

export async function getActionGetCapacityReservationUsage(
  args: InferRequestType<(typeof client)['#Action=GetCapacityReservationUsage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCapacityReservationUsage'].$get(args, options))
}

export async function postActionGetCapacityReservationUsage(
  args: InferRequestType<(typeof client)['#Action=GetCapacityReservationUsage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCapacityReservationUsage'].$post(args, options))
}

export async function getActionGetCoipPoolUsage(
  args: InferRequestType<(typeof client)['#Action=GetCoipPoolUsage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCoipPoolUsage'].$get(args, options))
}

export async function postActionGetCoipPoolUsage(
  args: InferRequestType<(typeof client)['#Action=GetCoipPoolUsage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCoipPoolUsage'].$post(args, options))
}

export async function getActionGetConsoleOutput(
  args: InferRequestType<(typeof client)['#Action=GetConsoleOutput']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetConsoleOutput'].$get(args, options))
}

export async function postActionGetConsoleOutput(
  args: InferRequestType<(typeof client)['#Action=GetConsoleOutput']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetConsoleOutput'].$post(args, options))
}

export async function getActionGetConsoleScreenshot(
  args: InferRequestType<(typeof client)['#Action=GetConsoleScreenshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetConsoleScreenshot'].$get(args, options))
}

export async function postActionGetConsoleScreenshot(
  args: InferRequestType<(typeof client)['#Action=GetConsoleScreenshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetConsoleScreenshot'].$post(args, options))
}

export async function getActionGetDefaultCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=GetDefaultCreditSpecification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDefaultCreditSpecification'].$get(args, options))
}

export async function postActionGetDefaultCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=GetDefaultCreditSpecification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDefaultCreditSpecification'].$post(args, options))
}

export async function getActionGetEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=GetEbsDefaultKmsKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEbsDefaultKmsKeyId'].$get(args, options))
}

export async function postActionGetEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=GetEbsDefaultKmsKeyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEbsDefaultKmsKeyId'].$post(args, options))
}

export async function getActionGetEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=GetEbsEncryptionByDefault']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEbsEncryptionByDefault'].$get(args, options))
}

export async function postActionGetEbsEncryptionByDefault(
  args: InferRequestType<(typeof client)['#Action=GetEbsEncryptionByDefault']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEbsEncryptionByDefault'].$post(args, options))
}

export async function getActionGetFlowLogsIntegrationTemplate(
  args: InferRequestType<(typeof client)['#Action=GetFlowLogsIntegrationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetFlowLogsIntegrationTemplate'].$get(args, options))
}

export async function postActionGetFlowLogsIntegrationTemplate(
  args: InferRequestType<(typeof client)['#Action=GetFlowLogsIntegrationTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetFlowLogsIntegrationTemplate'].$post(args, options))
}

export async function getActionGetGroupsForCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=GetGroupsForCapacityReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroupsForCapacityReservation'].$get(args, options))
}

export async function postActionGetGroupsForCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=GetGroupsForCapacityReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroupsForCapacityReservation'].$post(args, options))
}

export async function getActionGetHostReservationPurchasePreview(
  args: InferRequestType<(typeof client)['#Action=GetHostReservationPurchasePreview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetHostReservationPurchasePreview'].$get(args, options),
  )
}

export async function postActionGetHostReservationPurchasePreview(
  args: InferRequestType<(typeof client)['#Action=GetHostReservationPurchasePreview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetHostReservationPurchasePreview'].$post(args, options),
  )
}

export async function getActionGetInstanceTypesFromInstanceRequirements(
  args: InferRequestType<
    (typeof client)['#Action=GetInstanceTypesFromInstanceRequirements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetInstanceTypesFromInstanceRequirements'].$get(args, options),
  )
}

export async function postActionGetInstanceTypesFromInstanceRequirements(
  args: InferRequestType<
    (typeof client)['#Action=GetInstanceTypesFromInstanceRequirements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetInstanceTypesFromInstanceRequirements'].$post(args, options),
  )
}

export async function getActionGetInstanceUefiData(
  args: InferRequestType<(typeof client)['#Action=GetInstanceUefiData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInstanceUefiData'].$get(args, options))
}

export async function postActionGetInstanceUefiData(
  args: InferRequestType<(typeof client)['#Action=GetInstanceUefiData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInstanceUefiData'].$post(args, options))
}

export async function getActionGetIpamAddressHistory(
  args: InferRequestType<(typeof client)['#Action=GetIpamAddressHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamAddressHistory'].$get(args, options))
}

export async function postActionGetIpamAddressHistory(
  args: InferRequestType<(typeof client)['#Action=GetIpamAddressHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamAddressHistory'].$post(args, options))
}

export async function getActionGetIpamDiscoveredAccounts(
  args: InferRequestType<(typeof client)['#Action=GetIpamDiscoveredAccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamDiscoveredAccounts'].$get(args, options))
}

export async function postActionGetIpamDiscoveredAccounts(
  args: InferRequestType<(typeof client)['#Action=GetIpamDiscoveredAccounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamDiscoveredAccounts'].$post(args, options))
}

export async function getActionGetIpamDiscoveredResourceCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamDiscoveredResourceCidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamDiscoveredResourceCidrs'].$get(args, options))
}

export async function postActionGetIpamDiscoveredResourceCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamDiscoveredResourceCidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamDiscoveredResourceCidrs'].$post(args, options))
}

export async function getActionGetIpamPoolAllocations(
  args: InferRequestType<(typeof client)['#Action=GetIpamPoolAllocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamPoolAllocations'].$get(args, options))
}

export async function postActionGetIpamPoolAllocations(
  args: InferRequestType<(typeof client)['#Action=GetIpamPoolAllocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamPoolAllocations'].$post(args, options))
}

export async function getActionGetIpamPoolCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamPoolCidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamPoolCidrs'].$get(args, options))
}

export async function postActionGetIpamPoolCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamPoolCidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamPoolCidrs'].$post(args, options))
}

export async function getActionGetIpamResourceCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamResourceCidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamResourceCidrs'].$get(args, options))
}

export async function postActionGetIpamResourceCidrs(
  args: InferRequestType<(typeof client)['#Action=GetIpamResourceCidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIpamResourceCidrs'].$post(args, options))
}

export async function getActionGetLaunchTemplateData(
  args: InferRequestType<(typeof client)['#Action=GetLaunchTemplateData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetLaunchTemplateData'].$get(args, options))
}

export async function postActionGetLaunchTemplateData(
  args: InferRequestType<(typeof client)['#Action=GetLaunchTemplateData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetLaunchTemplateData'].$post(args, options))
}

export async function getActionGetManagedPrefixListAssociations(
  args: InferRequestType<(typeof client)['#Action=GetManagedPrefixListAssociations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetManagedPrefixListAssociations'].$get(args, options))
}

export async function postActionGetManagedPrefixListAssociations(
  args: InferRequestType<(typeof client)['#Action=GetManagedPrefixListAssociations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetManagedPrefixListAssociations'].$post(args, options),
  )
}

export async function getActionGetManagedPrefixListEntries(
  args: InferRequestType<(typeof client)['#Action=GetManagedPrefixListEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetManagedPrefixListEntries'].$get(args, options))
}

export async function postActionGetManagedPrefixListEntries(
  args: InferRequestType<(typeof client)['#Action=GetManagedPrefixListEntries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetManagedPrefixListEntries'].$post(args, options))
}

export async function getActionGetNetworkInsightsAccessScopeAnalysisFindings(
  args: InferRequestType<
    (typeof client)['#Action=GetNetworkInsightsAccessScopeAnalysisFindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetNetworkInsightsAccessScopeAnalysisFindings'].$get(args, options),
  )
}

export async function postActionGetNetworkInsightsAccessScopeAnalysisFindings(
  args: InferRequestType<
    (typeof client)['#Action=GetNetworkInsightsAccessScopeAnalysisFindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetNetworkInsightsAccessScopeAnalysisFindings'].$post(args, options),
  )
}

export async function getActionGetNetworkInsightsAccessScopeContent(
  args: InferRequestType<(typeof client)['#Action=GetNetworkInsightsAccessScopeContent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetNetworkInsightsAccessScopeContent'].$get(args, options),
  )
}

export async function postActionGetNetworkInsightsAccessScopeContent(
  args: InferRequestType<(typeof client)['#Action=GetNetworkInsightsAccessScopeContent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetNetworkInsightsAccessScopeContent'].$post(args, options),
  )
}

export async function getActionGetPasswordData(
  args: InferRequestType<(typeof client)['#Action=GetPasswordData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPasswordData'].$get(args, options))
}

export async function postActionGetPasswordData(
  args: InferRequestType<(typeof client)['#Action=GetPasswordData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPasswordData'].$post(args, options))
}

export async function getActionGetReservedInstancesExchangeQuote(
  args: InferRequestType<(typeof client)['#Action=GetReservedInstancesExchangeQuote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetReservedInstancesExchangeQuote'].$get(args, options),
  )
}

export async function postActionGetReservedInstancesExchangeQuote(
  args: InferRequestType<(typeof client)['#Action=GetReservedInstancesExchangeQuote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetReservedInstancesExchangeQuote'].$post(args, options),
  )
}

export async function getActionGetSerialConsoleAccessStatus(
  args: InferRequestType<(typeof client)['#Action=GetSerialConsoleAccessStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSerialConsoleAccessStatus'].$get(args, options))
}

export async function postActionGetSerialConsoleAccessStatus(
  args: InferRequestType<(typeof client)['#Action=GetSerialConsoleAccessStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSerialConsoleAccessStatus'].$post(args, options))
}

export async function getActionGetSpotPlacementScores(
  args: InferRequestType<(typeof client)['#Action=GetSpotPlacementScores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSpotPlacementScores'].$get(args, options))
}

export async function postActionGetSpotPlacementScores(
  args: InferRequestType<(typeof client)['#Action=GetSpotPlacementScores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSpotPlacementScores'].$post(args, options))
}

export async function getActionGetSubnetCidrReservations(
  args: InferRequestType<(typeof client)['#Action=GetSubnetCidrReservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSubnetCidrReservations'].$get(args, options))
}

export async function postActionGetSubnetCidrReservations(
  args: InferRequestType<(typeof client)['#Action=GetSubnetCidrReservations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSubnetCidrReservations'].$post(args, options))
}

export async function getActionGetTransitGatewayAttachmentPropagations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayAttachmentPropagations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayAttachmentPropagations'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayAttachmentPropagations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayAttachmentPropagations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayAttachmentPropagations'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayMulticastDomainAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayMulticastDomainAssociations'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayMulticastDomainAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayMulticastDomainAssociations'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayPolicyTableAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayPolicyTableAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPolicyTableAssociations'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayPolicyTableAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayPolicyTableAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPolicyTableAssociations'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayPolicyTableEntries(
  args: InferRequestType<(typeof client)['#Action=GetTransitGatewayPolicyTableEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPolicyTableEntries'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayPolicyTableEntries(
  args: InferRequestType<(typeof client)['#Action=GetTransitGatewayPolicyTableEntries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPolicyTableEntries'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayPrefixListReferences(
  args: InferRequestType<(typeof client)['#Action=GetTransitGatewayPrefixListReferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPrefixListReferences'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayPrefixListReferences(
  args: InferRequestType<(typeof client)['#Action=GetTransitGatewayPrefixListReferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayPrefixListReferences'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayRouteTableAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayRouteTableAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayRouteTableAssociations'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayRouteTableAssociations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayRouteTableAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayRouteTableAssociations'].$post(args, options),
  )
}

export async function getActionGetTransitGatewayRouteTablePropagations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayRouteTablePropagations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayRouteTablePropagations'].$get(args, options),
  )
}

export async function postActionGetTransitGatewayRouteTablePropagations(
  args: InferRequestType<
    (typeof client)['#Action=GetTransitGatewayRouteTablePropagations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetTransitGatewayRouteTablePropagations'].$post(args, options),
  )
}

export async function getActionGetVerifiedAccessEndpointPolicy(
  args: InferRequestType<(typeof client)['#Action=GetVerifiedAccessEndpointPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVerifiedAccessEndpointPolicy'].$get(args, options))
}

export async function postActionGetVerifiedAccessEndpointPolicy(
  args: InferRequestType<(typeof client)['#Action=GetVerifiedAccessEndpointPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVerifiedAccessEndpointPolicy'].$post(args, options))
}

export async function getActionGetVerifiedAccessGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=GetVerifiedAccessGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVerifiedAccessGroupPolicy'].$get(args, options))
}

export async function postActionGetVerifiedAccessGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=GetVerifiedAccessGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVerifiedAccessGroupPolicy'].$post(args, options))
}

export async function getActionGetVpnConnectionDeviceSampleConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=GetVpnConnectionDeviceSampleConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetVpnConnectionDeviceSampleConfiguration'].$get(args, options),
  )
}

export async function postActionGetVpnConnectionDeviceSampleConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=GetVpnConnectionDeviceSampleConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetVpnConnectionDeviceSampleConfiguration'].$post(args, options),
  )
}

export async function getActionGetVpnConnectionDeviceTypes(
  args: InferRequestType<(typeof client)['#Action=GetVpnConnectionDeviceTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVpnConnectionDeviceTypes'].$get(args, options))
}

export async function postActionGetVpnConnectionDeviceTypes(
  args: InferRequestType<(typeof client)['#Action=GetVpnConnectionDeviceTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVpnConnectionDeviceTypes'].$post(args, options))
}

export async function getActionGetVpnTunnelReplacementStatus(
  args: InferRequestType<(typeof client)['#Action=GetVpnTunnelReplacementStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVpnTunnelReplacementStatus'].$get(args, options))
}

export async function postActionGetVpnTunnelReplacementStatus(
  args: InferRequestType<(typeof client)['#Action=GetVpnTunnelReplacementStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetVpnTunnelReplacementStatus'].$post(args, options))
}

export async function getActionImportClientVpnClientCertificateRevocationList(
  args: InferRequestType<
    (typeof client)['#Action=ImportClientVpnClientCertificateRevocationList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ImportClientVpnClientCertificateRevocationList'].$get(args, options),
  )
}

export async function postActionImportClientVpnClientCertificateRevocationList(
  args: InferRequestType<
    (typeof client)['#Action=ImportClientVpnClientCertificateRevocationList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ImportClientVpnClientCertificateRevocationList'].$post(args, options),
  )
}

export async function getActionImportImage(
  args: InferRequestType<(typeof client)['#Action=ImportImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportImage'].$get(args, options))
}

export async function postActionImportImage(
  args: InferRequestType<(typeof client)['#Action=ImportImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportImage'].$post(args, options))
}

export async function getActionImportInstance(
  args: InferRequestType<(typeof client)['#Action=ImportInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportInstance'].$get(args, options))
}

export async function postActionImportInstance(
  args: InferRequestType<(typeof client)['#Action=ImportInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportInstance'].$post(args, options))
}

export async function getActionImportKeyPair(
  args: InferRequestType<(typeof client)['#Action=ImportKeyPair']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportKeyPair'].$get(args, options))
}

export async function postActionImportKeyPair(
  args: InferRequestType<(typeof client)['#Action=ImportKeyPair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportKeyPair'].$post(args, options))
}

export async function getActionImportSnapshot(
  args: InferRequestType<(typeof client)['#Action=ImportSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportSnapshot'].$get(args, options))
}

export async function postActionImportSnapshot(
  args: InferRequestType<(typeof client)['#Action=ImportSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportSnapshot'].$post(args, options))
}

export async function getActionImportVolume(
  args: InferRequestType<(typeof client)['#Action=ImportVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportVolume'].$get(args, options))
}

export async function postActionImportVolume(
  args: InferRequestType<(typeof client)['#Action=ImportVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportVolume'].$post(args, options))
}

export async function getActionListImagesInRecycleBin(
  args: InferRequestType<(typeof client)['#Action=ListImagesInRecycleBin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListImagesInRecycleBin'].$get(args, options))
}

export async function postActionListImagesInRecycleBin(
  args: InferRequestType<(typeof client)['#Action=ListImagesInRecycleBin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListImagesInRecycleBin'].$post(args, options))
}

export async function getActionListSnapshotsInRecycleBin(
  args: InferRequestType<(typeof client)['#Action=ListSnapshotsInRecycleBin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSnapshotsInRecycleBin'].$get(args, options))
}

export async function postActionListSnapshotsInRecycleBin(
  args: InferRequestType<(typeof client)['#Action=ListSnapshotsInRecycleBin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSnapshotsInRecycleBin'].$post(args, options))
}

export async function getActionModifyAddressAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyAddressAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAddressAttribute'].$get(args, options))
}

export async function postActionModifyAddressAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyAddressAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAddressAttribute'].$post(args, options))
}

export async function getActionModifyAvailabilityZoneGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyAvailabilityZoneGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAvailabilityZoneGroup'].$get(args, options))
}

export async function postActionModifyAvailabilityZoneGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyAvailabilityZoneGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAvailabilityZoneGroup'].$post(args, options))
}

export async function getActionModifyCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=ModifyCapacityReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCapacityReservation'].$get(args, options))
}

export async function postActionModifyCapacityReservation(
  args: InferRequestType<(typeof client)['#Action=ModifyCapacityReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCapacityReservation'].$post(args, options))
}

export async function getActionModifyCapacityReservationFleet(
  args: InferRequestType<(typeof client)['#Action=ModifyCapacityReservationFleet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCapacityReservationFleet'].$get(args, options))
}

export async function postActionModifyCapacityReservationFleet(
  args: InferRequestType<(typeof client)['#Action=ModifyCapacityReservationFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCapacityReservationFleet'].$post(args, options))
}

export async function getActionModifyClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyClientVpnEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClientVpnEndpoint'].$get(args, options))
}

export async function postActionModifyClientVpnEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyClientVpnEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClientVpnEndpoint'].$post(args, options))
}

export async function getActionModifyDefaultCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=ModifyDefaultCreditSpecification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDefaultCreditSpecification'].$get(args, options))
}

export async function postActionModifyDefaultCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=ModifyDefaultCreditSpecification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyDefaultCreditSpecification'].$post(args, options),
  )
}

export async function getActionModifyEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=ModifyEbsDefaultKmsKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEbsDefaultKmsKeyId'].$get(args, options))
}

export async function postActionModifyEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=ModifyEbsDefaultKmsKeyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEbsDefaultKmsKeyId'].$post(args, options))
}

export async function getActionModifyFleet(
  args: InferRequestType<(typeof client)['#Action=ModifyFleet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyFleet'].$get(args, options))
}

export async function postActionModifyFleet(
  args: InferRequestType<(typeof client)['#Action=ModifyFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyFleet'].$post(args, options))
}

export async function getActionModifyFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyFpgaImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyFpgaImageAttribute'].$get(args, options))
}

export async function postActionModifyFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyFpgaImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyFpgaImageAttribute'].$post(args, options))
}

export async function getActionModifyHosts(
  args: InferRequestType<(typeof client)['#Action=ModifyHosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyHosts'].$get(args, options))
}

export async function postActionModifyHosts(
  args: InferRequestType<(typeof client)['#Action=ModifyHosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyHosts'].$post(args, options))
}

export async function getActionModifyIdFormat(
  args: InferRequestType<(typeof client)['#Action=ModifyIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIdFormat'].$get(args, options))
}

export async function postActionModifyIdFormat(
  args: InferRequestType<(typeof client)['#Action=ModifyIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIdFormat'].$post(args, options))
}

export async function getActionModifyIdentityIdFormat(
  args: InferRequestType<(typeof client)['#Action=ModifyIdentityIdFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIdentityIdFormat'].$get(args, options))
}

export async function postActionModifyIdentityIdFormat(
  args: InferRequestType<(typeof client)['#Action=ModifyIdentityIdFormat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIdentityIdFormat'].$post(args, options))
}

export async function getActionModifyImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyImageAttribute'].$get(args, options))
}

export async function postActionModifyImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyImageAttribute'].$post(args, options))
}

export async function getActionModifyInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceAttribute'].$get(args, options))
}

export async function postActionModifyInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceAttribute'].$post(args, options))
}

export async function getActionModifyInstanceCapacityReservationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=ModifyInstanceCapacityReservationAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyInstanceCapacityReservationAttributes'].$get(args, options),
  )
}

export async function postActionModifyInstanceCapacityReservationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=ModifyInstanceCapacityReservationAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyInstanceCapacityReservationAttributes'].$post(args, options),
  )
}

export async function getActionModifyInstanceCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceCreditSpecification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyInstanceCreditSpecification'].$get(args, options),
  )
}

export async function postActionModifyInstanceCreditSpecification(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceCreditSpecification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyInstanceCreditSpecification'].$post(args, options),
  )
}

export async function getActionModifyInstanceEventStartTime(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceEventStartTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceEventStartTime'].$get(args, options))
}

export async function postActionModifyInstanceEventStartTime(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceEventStartTime']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceEventStartTime'].$post(args, options))
}

export async function getActionModifyInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceEventWindow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceEventWindow'].$get(args, options))
}

export async function postActionModifyInstanceEventWindow(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceEventWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceEventWindow'].$post(args, options))
}

export async function getActionModifyInstanceMaintenanceOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceMaintenanceOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceMaintenanceOptions'].$get(args, options))
}

export async function postActionModifyInstanceMaintenanceOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceMaintenanceOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyInstanceMaintenanceOptions'].$post(args, options),
  )
}

export async function getActionModifyInstanceMetadataOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceMetadataOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceMetadataOptions'].$get(args, options))
}

export async function postActionModifyInstanceMetadataOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyInstanceMetadataOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstanceMetadataOptions'].$post(args, options))
}

export async function getActionModifyInstancePlacement(
  args: InferRequestType<(typeof client)['#Action=ModifyInstancePlacement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstancePlacement'].$get(args, options))
}

export async function postActionModifyInstancePlacement(
  args: InferRequestType<(typeof client)['#Action=ModifyInstancePlacement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyInstancePlacement'].$post(args, options))
}

export async function getActionModifyIpam(
  args: InferRequestType<(typeof client)['#Action=ModifyIpam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpam'].$get(args, options))
}

export async function postActionModifyIpam(
  args: InferRequestType<(typeof client)['#Action=ModifyIpam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpam'].$post(args, options))
}

export async function getActionModifyIpamPool(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamPool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamPool'].$get(args, options))
}

export async function postActionModifyIpamPool(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamPool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamPool'].$post(args, options))
}

export async function getActionModifyIpamResourceCidr(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamResourceCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamResourceCidr'].$get(args, options))
}

export async function postActionModifyIpamResourceCidr(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamResourceCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamResourceCidr'].$post(args, options))
}

export async function getActionModifyIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamResourceDiscovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamResourceDiscovery'].$get(args, options))
}

export async function postActionModifyIpamResourceDiscovery(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamResourceDiscovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamResourceDiscovery'].$post(args, options))
}

export async function getActionModifyIpamScope(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamScope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamScope'].$get(args, options))
}

export async function postActionModifyIpamScope(
  args: InferRequestType<(typeof client)['#Action=ModifyIpamScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyIpamScope'].$post(args, options))
}

export async function getActionModifyLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=ModifyLaunchTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLaunchTemplate'].$get(args, options))
}

export async function postActionModifyLaunchTemplate(
  args: InferRequestType<(typeof client)['#Action=ModifyLaunchTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLaunchTemplate'].$post(args, options))
}

export async function getActionModifyLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=ModifyLocalGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLocalGatewayRoute'].$get(args, options))
}

export async function postActionModifyLocalGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=ModifyLocalGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLocalGatewayRoute'].$post(args, options))
}

export async function getActionModifyManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=ModifyManagedPrefixList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyManagedPrefixList'].$get(args, options))
}

export async function postActionModifyManagedPrefixList(
  args: InferRequestType<(typeof client)['#Action=ModifyManagedPrefixList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyManagedPrefixList'].$post(args, options))
}

export async function getActionModifyNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyNetworkInterfaceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyNetworkInterfaceAttribute'].$get(args, options))
}

export async function postActionModifyNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyNetworkInterfaceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyNetworkInterfaceAttribute'].$post(args, options))
}

export async function getActionModifyPrivateDnsNameOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyPrivateDnsNameOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyPrivateDnsNameOptions'].$get(args, options))
}

export async function postActionModifyPrivateDnsNameOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyPrivateDnsNameOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyPrivateDnsNameOptions'].$post(args, options))
}

export async function getActionModifyReservedInstances(
  args: InferRequestType<(typeof client)['#Action=ModifyReservedInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyReservedInstances'].$get(args, options))
}

export async function postActionModifyReservedInstances(
  args: InferRequestType<(typeof client)['#Action=ModifyReservedInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyReservedInstances'].$post(args, options))
}

export async function getActionModifySecurityGroupRules(
  args: InferRequestType<(typeof client)['#Action=ModifySecurityGroupRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySecurityGroupRules'].$get(args, options))
}

export async function postActionModifySecurityGroupRules(
  args: InferRequestType<(typeof client)['#Action=ModifySecurityGroupRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySecurityGroupRules'].$post(args, options))
}

export async function getActionModifySnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotAttribute'].$get(args, options))
}

export async function postActionModifySnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotAttribute'].$post(args, options))
}

export async function getActionModifySnapshotTier(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotTier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotTier'].$get(args, options))
}

export async function postActionModifySnapshotTier(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotTier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotTier'].$post(args, options))
}

export async function getActionModifySpotFleetRequest(
  args: InferRequestType<(typeof client)['#Action=ModifySpotFleetRequest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySpotFleetRequest'].$get(args, options))
}

export async function postActionModifySpotFleetRequest(
  args: InferRequestType<(typeof client)['#Action=ModifySpotFleetRequest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySpotFleetRequest'].$post(args, options))
}

export async function getActionModifySubnetAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifySubnetAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySubnetAttribute'].$get(args, options))
}

export async function postActionModifySubnetAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifySubnetAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySubnetAttribute'].$post(args, options))
}

export async function getActionModifyTrafficMirrorFilterNetworkServices(
  args: InferRequestType<
    (typeof client)['#Action=ModifyTrafficMirrorFilterNetworkServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTrafficMirrorFilterNetworkServices'].$get(args, options),
  )
}

export async function postActionModifyTrafficMirrorFilterNetworkServices(
  args: InferRequestType<
    (typeof client)['#Action=ModifyTrafficMirrorFilterNetworkServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTrafficMirrorFilterNetworkServices'].$post(args, options),
  )
}

export async function getActionModifyTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=ModifyTrafficMirrorFilterRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTrafficMirrorFilterRule'].$get(args, options))
}

export async function postActionModifyTrafficMirrorFilterRule(
  args: InferRequestType<(typeof client)['#Action=ModifyTrafficMirrorFilterRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTrafficMirrorFilterRule'].$post(args, options))
}

export async function getActionModifyTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=ModifyTrafficMirrorSession']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTrafficMirrorSession'].$get(args, options))
}

export async function postActionModifyTrafficMirrorSession(
  args: InferRequestType<(typeof client)['#Action=ModifyTrafficMirrorSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTrafficMirrorSession'].$post(args, options))
}

export async function getActionModifyTransitGateway(
  args: InferRequestType<(typeof client)['#Action=ModifyTransitGateway']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTransitGateway'].$get(args, options))
}

export async function postActionModifyTransitGateway(
  args: InferRequestType<(typeof client)['#Action=ModifyTransitGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTransitGateway'].$post(args, options))
}

export async function getActionModifyTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=ModifyTransitGatewayPrefixListReference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTransitGatewayPrefixListReference'].$get(args, options),
  )
}

export async function postActionModifyTransitGatewayPrefixListReference(
  args: InferRequestType<
    (typeof client)['#Action=ModifyTransitGatewayPrefixListReference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTransitGatewayPrefixListReference'].$post(args, options),
  )
}

export async function getActionModifyTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=ModifyTransitGatewayVpcAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTransitGatewayVpcAttachment'].$get(args, options),
  )
}

export async function postActionModifyTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=ModifyTransitGatewayVpcAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyTransitGatewayVpcAttachment'].$post(args, options),
  )
}

export async function getActionModifyVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessEndpoint'].$get(args, options))
}

export async function postActionModifyVerifiedAccessEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessEndpoint'].$post(args, options))
}

export async function getActionModifyVerifiedAccessEndpointPolicy(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessEndpointPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessEndpointPolicy'].$get(args, options),
  )
}

export async function postActionModifyVerifiedAccessEndpointPolicy(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessEndpointPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessEndpointPolicy'].$post(args, options),
  )
}

export async function getActionModifyVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessGroup'].$get(args, options))
}

export async function postActionModifyVerifiedAccessGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessGroup'].$post(args, options))
}

export async function getActionModifyVerifiedAccessGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessGroupPolicy'].$get(args, options))
}

export async function postActionModifyVerifiedAccessGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessGroupPolicy'].$post(args, options))
}

export async function getActionModifyVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessInstance'].$get(args, options))
}

export async function postActionModifyVerifiedAccessInstance(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVerifiedAccessInstance'].$post(args, options))
}

export async function getActionModifyVerifiedAccessInstanceLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVerifiedAccessInstanceLoggingConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessInstanceLoggingConfiguration'].$get(args, options),
  )
}

export async function postActionModifyVerifiedAccessInstanceLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVerifiedAccessInstanceLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessInstanceLoggingConfiguration'].$post(args, options),
  )
}

export async function getActionModifyVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessTrustProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessTrustProvider'].$get(args, options),
  )
}

export async function postActionModifyVerifiedAccessTrustProvider(
  args: InferRequestType<(typeof client)['#Action=ModifyVerifiedAccessTrustProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVerifiedAccessTrustProvider'].$post(args, options),
  )
}

export async function getActionModifyVolume(
  args: InferRequestType<(typeof client)['#Action=ModifyVolume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVolume'].$get(args, options))
}

export async function postActionModifyVolume(
  args: InferRequestType<(typeof client)['#Action=ModifyVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVolume'].$post(args, options))
}

export async function getActionModifyVolumeAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyVolumeAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVolumeAttribute'].$get(args, options))
}

export async function postActionModifyVolumeAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyVolumeAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVolumeAttribute'].$post(args, options))
}

export async function getActionModifyVpcAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcAttribute'].$get(args, options))
}

export async function postActionModifyVpcAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcAttribute'].$post(args, options))
}

export async function getActionModifyVpcEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcEndpoint'].$get(args, options))
}

export async function postActionModifyVpcEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcEndpoint'].$post(args, options))
}

export async function getActionModifyVpcEndpointConnectionNotification(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVpcEndpointConnectionNotification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointConnectionNotification'].$get(args, options),
  )
}

export async function postActionModifyVpcEndpointConnectionNotification(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVpcEndpointConnectionNotification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointConnectionNotification'].$post(args, options),
  )
}

export async function getActionModifyVpcEndpointServiceConfiguration(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpointServiceConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServiceConfiguration'].$get(args, options),
  )
}

export async function postActionModifyVpcEndpointServiceConfiguration(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpointServiceConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServiceConfiguration'].$post(args, options),
  )
}

export async function getActionModifyVpcEndpointServicePayerResponsibility(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVpcEndpointServicePayerResponsibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServicePayerResponsibility'].$get(args, options),
  )
}

export async function postActionModifyVpcEndpointServicePayerResponsibility(
  args: InferRequestType<
    (typeof client)['#Action=ModifyVpcEndpointServicePayerResponsibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServicePayerResponsibility'].$post(args, options),
  )
}

export async function getActionModifyVpcEndpointServicePermissions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpointServicePermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServicePermissions'].$get(args, options),
  )
}

export async function postActionModifyVpcEndpointServicePermissions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcEndpointServicePermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcEndpointServicePermissions'].$post(args, options),
  )
}

export async function getActionModifyVpcPeeringConnectionOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcPeeringConnectionOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcPeeringConnectionOptions'].$get(args, options),
  )
}

export async function postActionModifyVpcPeeringConnectionOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcPeeringConnectionOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyVpcPeeringConnectionOptions'].$post(args, options),
  )
}

export async function getActionModifyVpcTenancy(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcTenancy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcTenancy'].$get(args, options))
}

export async function postActionModifyVpcTenancy(
  args: InferRequestType<(typeof client)['#Action=ModifyVpcTenancy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpcTenancy'].$post(args, options))
}

export async function getActionModifyVpnConnection(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnConnection'].$get(args, options))
}

export async function postActionModifyVpnConnection(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnConnection'].$post(args, options))
}

export async function getActionModifyVpnConnectionOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnConnectionOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnConnectionOptions'].$get(args, options))
}

export async function postActionModifyVpnConnectionOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnConnectionOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnConnectionOptions'].$post(args, options))
}

export async function getActionModifyVpnTunnelCertificate(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnTunnelCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnTunnelCertificate'].$get(args, options))
}

export async function postActionModifyVpnTunnelCertificate(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnTunnelCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnTunnelCertificate'].$post(args, options))
}

export async function getActionModifyVpnTunnelOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnTunnelOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnTunnelOptions'].$get(args, options))
}

export async function postActionModifyVpnTunnelOptions(
  args: InferRequestType<(typeof client)['#Action=ModifyVpnTunnelOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyVpnTunnelOptions'].$post(args, options))
}

export async function getActionMonitorInstances(
  args: InferRequestType<(typeof client)['#Action=MonitorInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MonitorInstances'].$get(args, options))
}

export async function postActionMonitorInstances(
  args: InferRequestType<(typeof client)['#Action=MonitorInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MonitorInstances'].$post(args, options))
}

export async function getActionMoveAddressToVpc(
  args: InferRequestType<(typeof client)['#Action=MoveAddressToVpc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MoveAddressToVpc'].$get(args, options))
}

export async function postActionMoveAddressToVpc(
  args: InferRequestType<(typeof client)['#Action=MoveAddressToVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MoveAddressToVpc'].$post(args, options))
}

export async function getActionMoveByoipCidrToIpam(
  args: InferRequestType<(typeof client)['#Action=MoveByoipCidrToIpam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MoveByoipCidrToIpam'].$get(args, options))
}

export async function postActionMoveByoipCidrToIpam(
  args: InferRequestType<(typeof client)['#Action=MoveByoipCidrToIpam']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=MoveByoipCidrToIpam'].$post(args, options))
}

export async function getActionProvisionByoipCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionByoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionByoipCidr'].$get(args, options))
}

export async function postActionProvisionByoipCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionByoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionByoipCidr'].$post(args, options))
}

export async function getActionProvisionIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionIpamPoolCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionIpamPoolCidr'].$get(args, options))
}

export async function postActionProvisionIpamPoolCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionIpamPoolCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionIpamPoolCidr'].$post(args, options))
}

export async function getActionProvisionPublicIpv4PoolCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionPublicIpv4PoolCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionPublicIpv4PoolCidr'].$get(args, options))
}

export async function postActionProvisionPublicIpv4PoolCidr(
  args: InferRequestType<(typeof client)['#Action=ProvisionPublicIpv4PoolCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ProvisionPublicIpv4PoolCidr'].$post(args, options))
}

export async function getActionPurchaseHostReservation(
  args: InferRequestType<(typeof client)['#Action=PurchaseHostReservation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseHostReservation'].$get(args, options))
}

export async function postActionPurchaseHostReservation(
  args: InferRequestType<(typeof client)['#Action=PurchaseHostReservation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseHostReservation'].$post(args, options))
}

export async function getActionPurchaseReservedInstancesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedInstancesOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedInstancesOffering'].$get(args, options),
  )
}

export async function postActionPurchaseReservedInstancesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedInstancesOffering']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedInstancesOffering'].$post(args, options),
  )
}

export async function getActionPurchaseScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=PurchaseScheduledInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseScheduledInstances'].$get(args, options))
}

export async function postActionPurchaseScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=PurchaseScheduledInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseScheduledInstances'].$post(args, options))
}

export async function getActionRebootInstances(
  args: InferRequestType<(typeof client)['#Action=RebootInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootInstances'].$get(args, options))
}

export async function postActionRebootInstances(
  args: InferRequestType<(typeof client)['#Action=RebootInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootInstances'].$post(args, options))
}

export async function getActionRegisterImage(
  args: InferRequestType<(typeof client)['#Action=RegisterImage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterImage'].$get(args, options))
}

export async function postActionRegisterImage(
  args: InferRequestType<(typeof client)['#Action=RegisterImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterImage'].$post(args, options))
}

export async function getActionRegisterInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=RegisterInstanceEventNotificationAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterInstanceEventNotificationAttributes'].$get(args, options),
  )
}

export async function postActionRegisterInstanceEventNotificationAttributes(
  args: InferRequestType<
    (typeof client)['#Action=RegisterInstanceEventNotificationAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterInstanceEventNotificationAttributes'].$post(args, options),
  )
}

export async function getActionRegisterTransitGatewayMulticastGroupMembers(
  args: InferRequestType<
    (typeof client)['#Action=RegisterTransitGatewayMulticastGroupMembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterTransitGatewayMulticastGroupMembers'].$get(args, options),
  )
}

export async function postActionRegisterTransitGatewayMulticastGroupMembers(
  args: InferRequestType<
    (typeof client)['#Action=RegisterTransitGatewayMulticastGroupMembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterTransitGatewayMulticastGroupMembers'].$post(args, options),
  )
}

export async function getActionRegisterTransitGatewayMulticastGroupSources(
  args: InferRequestType<
    (typeof client)['#Action=RegisterTransitGatewayMulticastGroupSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterTransitGatewayMulticastGroupSources'].$get(args, options),
  )
}

export async function postActionRegisterTransitGatewayMulticastGroupSources(
  args: InferRequestType<
    (typeof client)['#Action=RegisterTransitGatewayMulticastGroupSources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterTransitGatewayMulticastGroupSources'].$post(args, options),
  )
}

export async function getActionRejectTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=RejectTransitGatewayMulticastDomainAssociations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayMulticastDomainAssociations'].$get(args, options),
  )
}

export async function postActionRejectTransitGatewayMulticastDomainAssociations(
  args: InferRequestType<
    (typeof client)['#Action=RejectTransitGatewayMulticastDomainAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayMulticastDomainAssociations'].$post(args, options),
  )
}

export async function getActionRejectTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=RejectTransitGatewayPeeringAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayPeeringAttachment'].$get(args, options),
  )
}

export async function postActionRejectTransitGatewayPeeringAttachment(
  args: InferRequestType<(typeof client)['#Action=RejectTransitGatewayPeeringAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayPeeringAttachment'].$post(args, options),
  )
}

export async function getActionRejectTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=RejectTransitGatewayVpcAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayVpcAttachment'].$get(args, options),
  )
}

export async function postActionRejectTransitGatewayVpcAttachment(
  args: InferRequestType<(typeof client)['#Action=RejectTransitGatewayVpcAttachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RejectTransitGatewayVpcAttachment'].$post(args, options),
  )
}

export async function getActionRejectVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=RejectVpcEndpointConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectVpcEndpointConnections'].$get(args, options))
}

export async function postActionRejectVpcEndpointConnections(
  args: InferRequestType<(typeof client)['#Action=RejectVpcEndpointConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectVpcEndpointConnections'].$post(args, options))
}

export async function getActionRejectVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=RejectVpcPeeringConnection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectVpcPeeringConnection'].$get(args, options))
}

export async function postActionRejectVpcPeeringConnection(
  args: InferRequestType<(typeof client)['#Action=RejectVpcPeeringConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectVpcPeeringConnection'].$post(args, options))
}

export async function getActionReleaseAddress(
  args: InferRequestType<(typeof client)['#Action=ReleaseAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseAddress'].$get(args, options))
}

export async function postActionReleaseAddress(
  args: InferRequestType<(typeof client)['#Action=ReleaseAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseAddress'].$post(args, options))
}

export async function getActionReleaseHosts(
  args: InferRequestType<(typeof client)['#Action=ReleaseHosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseHosts'].$get(args, options))
}

export async function postActionReleaseHosts(
  args: InferRequestType<(typeof client)['#Action=ReleaseHosts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseHosts'].$post(args, options))
}

export async function getActionReleaseIpamPoolAllocation(
  args: InferRequestType<(typeof client)['#Action=ReleaseIpamPoolAllocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseIpamPoolAllocation'].$get(args, options))
}

export async function postActionReleaseIpamPoolAllocation(
  args: InferRequestType<(typeof client)['#Action=ReleaseIpamPoolAllocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReleaseIpamPoolAllocation'].$post(args, options))
}

export async function getActionReplaceIamInstanceProfileAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceIamInstanceProfileAssociation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ReplaceIamInstanceProfileAssociation'].$get(args, options),
  )
}

export async function postActionReplaceIamInstanceProfileAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceIamInstanceProfileAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ReplaceIamInstanceProfileAssociation'].$post(args, options),
  )
}

export async function getActionReplaceNetworkAclAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceNetworkAclAssociation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceNetworkAclAssociation'].$get(args, options))
}

export async function postActionReplaceNetworkAclAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceNetworkAclAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceNetworkAclAssociation'].$post(args, options))
}

export async function getActionReplaceNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=ReplaceNetworkAclEntry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceNetworkAclEntry'].$get(args, options))
}

export async function postActionReplaceNetworkAclEntry(
  args: InferRequestType<(typeof client)['#Action=ReplaceNetworkAclEntry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceNetworkAclEntry'].$post(args, options))
}

export async function getActionReplaceRoute(
  args: InferRequestType<(typeof client)['#Action=ReplaceRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceRoute'].$get(args, options))
}

export async function postActionReplaceRoute(
  args: InferRequestType<(typeof client)['#Action=ReplaceRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceRoute'].$post(args, options))
}

export async function getActionReplaceRouteTableAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceRouteTableAssociation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceRouteTableAssociation'].$get(args, options))
}

export async function postActionReplaceRouteTableAssociation(
  args: InferRequestType<(typeof client)['#Action=ReplaceRouteTableAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceRouteTableAssociation'].$post(args, options))
}

export async function getActionReplaceTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=ReplaceTransitGatewayRoute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceTransitGatewayRoute'].$get(args, options))
}

export async function postActionReplaceTransitGatewayRoute(
  args: InferRequestType<(typeof client)['#Action=ReplaceTransitGatewayRoute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceTransitGatewayRoute'].$post(args, options))
}

export async function getActionReplaceVpnTunnel(
  args: InferRequestType<(typeof client)['#Action=ReplaceVpnTunnel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceVpnTunnel'].$get(args, options))
}

export async function postActionReplaceVpnTunnel(
  args: InferRequestType<(typeof client)['#Action=ReplaceVpnTunnel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReplaceVpnTunnel'].$post(args, options))
}

export async function getActionReportInstanceStatus(
  args: InferRequestType<(typeof client)['#Action=ReportInstanceStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReportInstanceStatus'].$get(args, options))
}

export async function postActionReportInstanceStatus(
  args: InferRequestType<(typeof client)['#Action=ReportInstanceStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReportInstanceStatus'].$post(args, options))
}

export async function getActionRequestSpotFleet(
  args: InferRequestType<(typeof client)['#Action=RequestSpotFleet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestSpotFleet'].$get(args, options))
}

export async function postActionRequestSpotFleet(
  args: InferRequestType<(typeof client)['#Action=RequestSpotFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestSpotFleet'].$post(args, options))
}

export async function getActionRequestSpotInstances(
  args: InferRequestType<(typeof client)['#Action=RequestSpotInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestSpotInstances'].$get(args, options))
}

export async function postActionRequestSpotInstances(
  args: InferRequestType<(typeof client)['#Action=RequestSpotInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestSpotInstances'].$post(args, options))
}

export async function getActionResetAddressAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetAddressAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetAddressAttribute'].$get(args, options))
}

export async function postActionResetAddressAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetAddressAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetAddressAttribute'].$post(args, options))
}

export async function getActionResetEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=ResetEbsDefaultKmsKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetEbsDefaultKmsKeyId'].$get(args, options))
}

export async function postActionResetEbsDefaultKmsKeyId(
  args: InferRequestType<(typeof client)['#Action=ResetEbsDefaultKmsKeyId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetEbsDefaultKmsKeyId'].$post(args, options))
}

export async function getActionResetFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetFpgaImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetFpgaImageAttribute'].$get(args, options))
}

export async function postActionResetFpgaImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetFpgaImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetFpgaImageAttribute'].$post(args, options))
}

export async function getActionResetImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetImageAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetImageAttribute'].$get(args, options))
}

export async function postActionResetImageAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetImageAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetImageAttribute'].$post(args, options))
}

export async function getActionResetInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetInstanceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetInstanceAttribute'].$get(args, options))
}

export async function postActionResetInstanceAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetInstanceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetInstanceAttribute'].$post(args, options))
}

export async function getActionResetNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetNetworkInterfaceAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetNetworkInterfaceAttribute'].$get(args, options))
}

export async function postActionResetNetworkInterfaceAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetNetworkInterfaceAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetNetworkInterfaceAttribute'].$post(args, options))
}

export async function getActionResetSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetSnapshotAttribute'].$get(args, options))
}

export async function postActionResetSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ResetSnapshotAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetSnapshotAttribute'].$post(args, options))
}

export async function getActionRestoreAddressToClassic(
  args: InferRequestType<(typeof client)['#Action=RestoreAddressToClassic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreAddressToClassic'].$get(args, options))
}

export async function postActionRestoreAddressToClassic(
  args: InferRequestType<(typeof client)['#Action=RestoreAddressToClassic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreAddressToClassic'].$post(args, options))
}

export async function getActionRestoreImageFromRecycleBin(
  args: InferRequestType<(typeof client)['#Action=RestoreImageFromRecycleBin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreImageFromRecycleBin'].$get(args, options))
}

export async function postActionRestoreImageFromRecycleBin(
  args: InferRequestType<(typeof client)['#Action=RestoreImageFromRecycleBin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreImageFromRecycleBin'].$post(args, options))
}

export async function getActionRestoreManagedPrefixListVersion(
  args: InferRequestType<(typeof client)['#Action=RestoreManagedPrefixListVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreManagedPrefixListVersion'].$get(args, options))
}

export async function postActionRestoreManagedPrefixListVersion(
  args: InferRequestType<(typeof client)['#Action=RestoreManagedPrefixListVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreManagedPrefixListVersion'].$post(args, options))
}

export async function getActionRestoreSnapshotFromRecycleBin(
  args: InferRequestType<(typeof client)['#Action=RestoreSnapshotFromRecycleBin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreSnapshotFromRecycleBin'].$get(args, options))
}

export async function postActionRestoreSnapshotFromRecycleBin(
  args: InferRequestType<(typeof client)['#Action=RestoreSnapshotFromRecycleBin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreSnapshotFromRecycleBin'].$post(args, options))
}

export async function getActionRestoreSnapshotTier(
  args: InferRequestType<(typeof client)['#Action=RestoreSnapshotTier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreSnapshotTier'].$get(args, options))
}

export async function postActionRestoreSnapshotTier(
  args: InferRequestType<(typeof client)['#Action=RestoreSnapshotTier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreSnapshotTier'].$post(args, options))
}

export async function getActionRevokeClientVpnIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeClientVpnIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeClientVpnIngress'].$get(args, options))
}

export async function postActionRevokeClientVpnIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeClientVpnIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeClientVpnIngress'].$post(args, options))
}

export async function getActionRevokeSecurityGroupEgress(
  args: InferRequestType<(typeof client)['#Action=RevokeSecurityGroupEgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSecurityGroupEgress'].$get(args, options))
}

export async function postActionRevokeSecurityGroupEgress(
  args: InferRequestType<(typeof client)['#Action=RevokeSecurityGroupEgress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSecurityGroupEgress'].$post(args, options))
}

export async function getActionRevokeSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSecurityGroupIngress'].$get(args, options))
}

export async function postActionRevokeSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSecurityGroupIngress'].$post(args, options))
}

export async function getActionRunInstances(
  args: InferRequestType<(typeof client)['#Action=RunInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RunInstances'].$get(args, options))
}

export async function postActionRunInstances(
  args: InferRequestType<(typeof client)['#Action=RunInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RunInstances'].$post(args, options))
}

export async function getActionRunScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=RunScheduledInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RunScheduledInstances'].$get(args, options))
}

export async function postActionRunScheduledInstances(
  args: InferRequestType<(typeof client)['#Action=RunScheduledInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RunScheduledInstances'].$post(args, options))
}

export async function getActionSearchLocalGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=SearchLocalGatewayRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SearchLocalGatewayRoutes'].$get(args, options))
}

export async function postActionSearchLocalGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=SearchLocalGatewayRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SearchLocalGatewayRoutes'].$post(args, options))
}

export async function getActionSearchTransitGatewayMulticastGroups(
  args: InferRequestType<(typeof client)['#Action=SearchTransitGatewayMulticastGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SearchTransitGatewayMulticastGroups'].$get(args, options),
  )
}

export async function postActionSearchTransitGatewayMulticastGroups(
  args: InferRequestType<(typeof client)['#Action=SearchTransitGatewayMulticastGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SearchTransitGatewayMulticastGroups'].$post(args, options),
  )
}

export async function getActionSearchTransitGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=SearchTransitGatewayRoutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SearchTransitGatewayRoutes'].$get(args, options))
}

export async function postActionSearchTransitGatewayRoutes(
  args: InferRequestType<(typeof client)['#Action=SearchTransitGatewayRoutes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SearchTransitGatewayRoutes'].$post(args, options))
}

export async function getActionSendDiagnosticInterrupt(
  args: InferRequestType<(typeof client)['#Action=SendDiagnosticInterrupt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendDiagnosticInterrupt'].$get(args, options))
}

export async function postActionSendDiagnosticInterrupt(
  args: InferRequestType<(typeof client)['#Action=SendDiagnosticInterrupt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendDiagnosticInterrupt'].$post(args, options))
}

export async function getActionStartInstances(
  args: InferRequestType<(typeof client)['#Action=StartInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartInstances'].$get(args, options))
}

export async function postActionStartInstances(
  args: InferRequestType<(typeof client)['#Action=StartInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartInstances'].$post(args, options))
}

export async function getActionStartNetworkInsightsAccessScopeAnalysis(
  args: InferRequestType<
    (typeof client)['#Action=StartNetworkInsightsAccessScopeAnalysis']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartNetworkInsightsAccessScopeAnalysis'].$get(args, options),
  )
}

export async function postActionStartNetworkInsightsAccessScopeAnalysis(
  args: InferRequestType<
    (typeof client)['#Action=StartNetworkInsightsAccessScopeAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartNetworkInsightsAccessScopeAnalysis'].$post(args, options),
  )
}

export async function getActionStartNetworkInsightsAnalysis(
  args: InferRequestType<(typeof client)['#Action=StartNetworkInsightsAnalysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartNetworkInsightsAnalysis'].$get(args, options))
}

export async function postActionStartNetworkInsightsAnalysis(
  args: InferRequestType<(typeof client)['#Action=StartNetworkInsightsAnalysis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartNetworkInsightsAnalysis'].$post(args, options))
}

export async function getActionStartVpcEndpointServicePrivateDnsVerification(
  args: InferRequestType<
    (typeof client)['#Action=StartVpcEndpointServicePrivateDnsVerification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartVpcEndpointServicePrivateDnsVerification'].$get(args, options),
  )
}

export async function postActionStartVpcEndpointServicePrivateDnsVerification(
  args: InferRequestType<
    (typeof client)['#Action=StartVpcEndpointServicePrivateDnsVerification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartVpcEndpointServicePrivateDnsVerification'].$post(args, options),
  )
}

export async function getActionStopInstances(
  args: InferRequestType<(typeof client)['#Action=StopInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopInstances'].$get(args, options))
}

export async function postActionStopInstances(
  args: InferRequestType<(typeof client)['#Action=StopInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopInstances'].$post(args, options))
}

export async function getActionTerminateClientVpnConnections(
  args: InferRequestType<(typeof client)['#Action=TerminateClientVpnConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateClientVpnConnections'].$get(args, options))
}

export async function postActionTerminateClientVpnConnections(
  args: InferRequestType<(typeof client)['#Action=TerminateClientVpnConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateClientVpnConnections'].$post(args, options))
}

export async function getActionTerminateInstances(
  args: InferRequestType<(typeof client)['#Action=TerminateInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateInstances'].$get(args, options))
}

export async function postActionTerminateInstances(
  args: InferRequestType<(typeof client)['#Action=TerminateInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateInstances'].$post(args, options))
}

export async function getActionUnassignIpv6Addresses(
  args: InferRequestType<(typeof client)['#Action=UnassignIpv6Addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnassignIpv6Addresses'].$get(args, options))
}

export async function postActionUnassignIpv6Addresses(
  args: InferRequestType<(typeof client)['#Action=UnassignIpv6Addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnassignIpv6Addresses'].$post(args, options))
}

export async function getActionUnassignPrivateIpAddresses(
  args: InferRequestType<(typeof client)['#Action=UnassignPrivateIpAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnassignPrivateIpAddresses'].$get(args, options))
}

export async function postActionUnassignPrivateIpAddresses(
  args: InferRequestType<(typeof client)['#Action=UnassignPrivateIpAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnassignPrivateIpAddresses'].$post(args, options))
}

export async function getActionUnassignPrivateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=UnassignPrivateNatGatewayAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnassignPrivateNatGatewayAddress'].$get(args, options))
}

export async function postActionUnassignPrivateNatGatewayAddress(
  args: InferRequestType<(typeof client)['#Action=UnassignPrivateNatGatewayAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UnassignPrivateNatGatewayAddress'].$post(args, options),
  )
}

export async function getActionUnmonitorInstances(
  args: InferRequestType<(typeof client)['#Action=UnmonitorInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnmonitorInstances'].$get(args, options))
}

export async function postActionUnmonitorInstances(
  args: InferRequestType<(typeof client)['#Action=UnmonitorInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UnmonitorInstances'].$post(args, options))
}

export async function getActionUpdateSecurityGroupRuleDescriptionsEgress(
  args: InferRequestType<
    (typeof client)['#Action=UpdateSecurityGroupRuleDescriptionsEgress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateSecurityGroupRuleDescriptionsEgress'].$get(args, options),
  )
}

export async function postActionUpdateSecurityGroupRuleDescriptionsEgress(
  args: InferRequestType<
    (typeof client)['#Action=UpdateSecurityGroupRuleDescriptionsEgress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateSecurityGroupRuleDescriptionsEgress'].$post(args, options),
  )
}

export async function getActionUpdateSecurityGroupRuleDescriptionsIngress(
  args: InferRequestType<
    (typeof client)['#Action=UpdateSecurityGroupRuleDescriptionsIngress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateSecurityGroupRuleDescriptionsIngress'].$get(args, options),
  )
}

export async function postActionUpdateSecurityGroupRuleDescriptionsIngress(
  args: InferRequestType<
    (typeof client)['#Action=UpdateSecurityGroupRuleDescriptionsIngress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateSecurityGroupRuleDescriptionsIngress'].$post(args, options),
  )
}

export async function getActionWithdrawByoipCidr(
  args: InferRequestType<(typeof client)['#Action=WithdrawByoipCidr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=WithdrawByoipCidr'].$get(args, options))
}

export async function postActionWithdrawByoipCidr(
  args: InferRequestType<(typeof client)['#Action=WithdrawByoipCidr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=WithdrawByoipCidr'].$post(args, options))
}
