import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposal(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceAllocateConnectionOnInterconnect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAllocateHostedConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AllocateHostedConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AllocateHostedConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAllocatePrivateVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAllocatePublicVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAllocateTransitVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAssociateConnectionWithLag(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AssociateConnectionWithLag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AssociateConnectionWithLag'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAssociateHostedConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AssociateHostedConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AssociateHostedConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAssociateMacSecKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AssociateMacSecKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AssociateMacSecKey'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceAssociateVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.AssociateVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.AssociateVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceConfirmConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ConfirmConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ConfirmConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceConfirmCustomerAgreement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ConfirmCustomerAgreement'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceConfirmPrivateVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceConfirmPublicVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceConfirmTransitVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateBGPPeer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateBGPPeer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateBGPPeer'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateDirectConnectGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateDirectConnectGateway'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposal(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceCreateInterconnect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateInterconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateInterconnect'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateLag(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.CreateLag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=OvertureService.CreateLag'].$post(args, options))
}

export async function postXAmzTargetOvertureServiceCreatePrivateVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreatePublicVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreatePublicVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceCreateTransitVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.CreateTransitVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDeleteBGPPeer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteBGPPeer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteBGPPeer'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDeleteConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDeleteDirectConnectGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteDirectConnectGateway'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposal(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceDeleteInterconnect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteInterconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteInterconnect'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDeleteLag(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DeleteLag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=OvertureService.DeleteLag'].$post(args, options))
}

export async function postXAmzTargetOvertureServiceDeleteVirtualInterface(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DeleteVirtualInterface']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DeleteVirtualInterface'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeConnectionLoa(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionLoa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeConnectionLoa'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeConnections'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeCustomerMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeCustomerMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeCustomerMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposals(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceDescribeDirectConnectGateways(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeDirectConnectGateways'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeHostedConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeHostedConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeHostedConnections'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeInterconnectLoa(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnectLoa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeInterconnectLoa'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeInterconnects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeInterconnects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeInterconnects'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeLags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeLags'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeLoa(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeLoa']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeLoa'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeLocations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeLocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeLocations'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeRouterConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeRouterConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeRouterConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeTags'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeVirtualGateways(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeVirtualGateways'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDescribeVirtualInterfaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DescribeVirtualInterfaces'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDisassociateConnectionFromLag(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DisassociateConnectionFromLag'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceDisassociateMacSecKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.DisassociateMacSecKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.DisassociateMacSecKey'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceListVirtualInterfaceTestHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceStartBgpFailoverTest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.StartBgpFailoverTest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.StartBgpFailoverTest'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceStopBgpFailoverTest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.StopBgpFailoverTest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.StopBgpFailoverTest'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceUpdateConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.UpdateConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.UpdateConnection'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceUpdateDirectConnectGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.UpdateDirectConnectGateway'].$post(args, options),
  )
}

export async function postXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOvertureServiceUpdateLag(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OvertureService.UpdateLag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=OvertureService.UpdateLag'].$post(args, options))
}

export async function postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes'].$post(args, options),
  )
}
