import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalHandler,
  XAmzTargetOvertureServiceAllocateConnectionOnInterconnectHandler,
  XAmzTargetOvertureServiceAllocateHostedConnectionHandler,
  XAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceHandler,
  XAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler,
  XAmzTargetOvertureServiceAllocateTransitVirtualInterfaceHandler,
  XAmzTargetOvertureServiceAssociateConnectionWithLagHandler,
  XAmzTargetOvertureServiceAssociateHostedConnectionHandler,
  XAmzTargetOvertureServiceAssociateMacSecKeyHandler,
  XAmzTargetOvertureServiceAssociateVirtualInterfaceHandler,
  XAmzTargetOvertureServiceConfirmConnectionHandler,
  XAmzTargetOvertureServiceConfirmCustomerAgreementHandler,
  XAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceHandler,
  XAmzTargetOvertureServiceConfirmPublicVirtualInterfaceHandler,
  XAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler,
  XAmzTargetOvertureServiceCreateBGPPeerHandler,
  XAmzTargetOvertureServiceCreateConnectionHandler,
  XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationHandler,
  XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalHandler,
  XAmzTargetOvertureServiceCreateDirectConnectGatewayHandler,
  XAmzTargetOvertureServiceCreateInterconnectHandler,
  XAmzTargetOvertureServiceCreateLagHandler,
  XAmzTargetOvertureServiceCreatePrivateVirtualInterfaceHandler,
  XAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler,
  XAmzTargetOvertureServiceCreateTransitVirtualInterfaceHandler,
  XAmzTargetOvertureServiceDeleteBGPPeerHandler,
  XAmzTargetOvertureServiceDeleteConnectionHandler,
  XAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationHandler,
  XAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalHandler,
  XAmzTargetOvertureServiceDeleteDirectConnectGatewayHandler,
  XAmzTargetOvertureServiceDeleteInterconnectHandler,
  XAmzTargetOvertureServiceDeleteLagHandler,
  XAmzTargetOvertureServiceDeleteVirtualInterfaceHandler,
  XAmzTargetOvertureServiceDescribeConnectionLoaHandler,
  XAmzTargetOvertureServiceDescribeConnectionsHandler,
  XAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler,
  XAmzTargetOvertureServiceDescribeCustomerMetadataHandler,
  XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler,
  XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler,
  XAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler,
  XAmzTargetOvertureServiceDescribeDirectConnectGatewaysHandler,
  XAmzTargetOvertureServiceDescribeHostedConnectionsHandler,
  XAmzTargetOvertureServiceDescribeInterconnectLoaHandler,
  XAmzTargetOvertureServiceDescribeInterconnectsHandler,
  XAmzTargetOvertureServiceDescribeLagsHandler,
  XAmzTargetOvertureServiceDescribeLoaHandler,
  XAmzTargetOvertureServiceDescribeLocationsHandler,
  XAmzTargetOvertureServiceDescribeRouterConfigurationHandler,
  XAmzTargetOvertureServiceDescribeTagsHandler,
  XAmzTargetOvertureServiceDescribeVirtualGatewaysHandler,
  XAmzTargetOvertureServiceDescribeVirtualInterfacesHandler,
  XAmzTargetOvertureServiceDisassociateConnectionFromLagHandler,
  XAmzTargetOvertureServiceDisassociateMacSecKeyHandler,
  XAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler,
  XAmzTargetOvertureServiceStartBgpFailoverTestHandler,
  XAmzTargetOvertureServiceStopBgpFailoverTestHandler,
  XAmzTargetOvertureServiceTagResourceHandler,
  XAmzTargetOvertureServiceUntagResourceHandler,
  XAmzTargetOvertureServiceUpdateConnectionHandler,
  XAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationHandler,
  XAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler,
  XAmzTargetOvertureServiceUpdateLagHandler,
  XAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalHandler)
  .route('/', XAmzTargetOvertureServiceAllocateConnectionOnInterconnectHandler)
  .route('/', XAmzTargetOvertureServiceAllocateHostedConnectionHandler)
  .route('/', XAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceAllocateTransitVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceAssociateConnectionWithLagHandler)
  .route('/', XAmzTargetOvertureServiceAssociateHostedConnectionHandler)
  .route('/', XAmzTargetOvertureServiceAssociateMacSecKeyHandler)
  .route('/', XAmzTargetOvertureServiceAssociateVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceConfirmConnectionHandler)
  .route('/', XAmzTargetOvertureServiceConfirmCustomerAgreementHandler)
  .route('/', XAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceConfirmPublicVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceCreateBGPPeerHandler)
  .route('/', XAmzTargetOvertureServiceCreateConnectionHandler)
  .route('/', XAmzTargetOvertureServiceCreateDirectConnectGatewayHandler)
  .route('/', XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationHandler)
  .route('/', XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalHandler)
  .route('/', XAmzTargetOvertureServiceCreateInterconnectHandler)
  .route('/', XAmzTargetOvertureServiceCreateLagHandler)
  .route('/', XAmzTargetOvertureServiceCreatePrivateVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceCreateTransitVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceDeleteBGPPeerHandler)
  .route('/', XAmzTargetOvertureServiceDeleteConnectionHandler)
  .route('/', XAmzTargetOvertureServiceDeleteDirectConnectGatewayHandler)
  .route('/', XAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationHandler)
  .route('/', XAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalHandler)
  .route('/', XAmzTargetOvertureServiceDeleteInterconnectHandler)
  .route('/', XAmzTargetOvertureServiceDeleteLagHandler)
  .route('/', XAmzTargetOvertureServiceDeleteVirtualInterfaceHandler)
  .route('/', XAmzTargetOvertureServiceDescribeConnectionLoaHandler)
  .route('/', XAmzTargetOvertureServiceDescribeConnectionsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler)
  .route('/', XAmzTargetOvertureServiceDescribeCustomerMetadataHandler)
  .route('/', XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeDirectConnectGatewaysHandler)
  .route('/', XAmzTargetOvertureServiceDescribeHostedConnectionsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeInterconnectLoaHandler)
  .route('/', XAmzTargetOvertureServiceDescribeInterconnectsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeLagsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeLoaHandler)
  .route('/', XAmzTargetOvertureServiceDescribeLocationsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeRouterConfigurationHandler)
  .route('/', XAmzTargetOvertureServiceDescribeTagsHandler)
  .route('/', XAmzTargetOvertureServiceDescribeVirtualGatewaysHandler)
  .route('/', XAmzTargetOvertureServiceDescribeVirtualInterfacesHandler)
  .route('/', XAmzTargetOvertureServiceDisassociateConnectionFromLagHandler)
  .route('/', XAmzTargetOvertureServiceDisassociateMacSecKeyHandler)
  .route('/', XAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler)
  .route('/', XAmzTargetOvertureServiceStartBgpFailoverTestHandler)
  .route('/', XAmzTargetOvertureServiceStopBgpFailoverTestHandler)
  .route('/', XAmzTargetOvertureServiceTagResourceHandler)
  .route('/', XAmzTargetOvertureServiceUntagResourceHandler)
  .route('/', XAmzTargetOvertureServiceUpdateConnectionHandler)
  .route('/', XAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler)
  .route('/', XAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationHandler)
  .route('/', XAmzTargetOvertureServiceUpdateLagHandler)
  .route('/', XAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler)

export default app
