import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalHandler,
  xAmzTargetOvertureServiceAllocateConnectionOnInterconnectHandler,
  xAmzTargetOvertureServiceAllocateHostedConnectionHandler,
  xAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceHandler,
  xAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler,
  xAmzTargetOvertureServiceAllocateTransitVirtualInterfaceHandler,
  xAmzTargetOvertureServiceAssociateConnectionWithLagHandler,
  xAmzTargetOvertureServiceAssociateHostedConnectionHandler,
  xAmzTargetOvertureServiceAssociateMacSecKeyHandler,
  xAmzTargetOvertureServiceAssociateVirtualInterfaceHandler,
  xAmzTargetOvertureServiceConfirmConnectionHandler,
  xAmzTargetOvertureServiceConfirmCustomerAgreementHandler,
  xAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceHandler,
  xAmzTargetOvertureServiceConfirmPublicVirtualInterfaceHandler,
  xAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler,
  xAmzTargetOvertureServiceCreateBgpPeerHandler,
  xAmzTargetOvertureServiceCreateConnectionHandler,
  xAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationHandler,
  xAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalHandler,
  xAmzTargetOvertureServiceCreateDirectConnectGatewayHandler,
  xAmzTargetOvertureServiceCreateInterconnectHandler,
  xAmzTargetOvertureServiceCreateLagHandler,
  xAmzTargetOvertureServiceCreatePrivateVirtualInterfaceHandler,
  xAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler,
  xAmzTargetOvertureServiceCreateTransitVirtualInterfaceHandler,
  xAmzTargetOvertureServiceDeleteBgpPeerHandler,
  xAmzTargetOvertureServiceDeleteConnectionHandler,
  xAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationHandler,
  xAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalHandler,
  xAmzTargetOvertureServiceDeleteDirectConnectGatewayHandler,
  xAmzTargetOvertureServiceDeleteInterconnectHandler,
  xAmzTargetOvertureServiceDeleteLagHandler,
  xAmzTargetOvertureServiceDeleteVirtualInterfaceHandler,
  xAmzTargetOvertureServiceDescribeConnectionLoaHandler,
  xAmzTargetOvertureServiceDescribeConnectionsHandler,
  xAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler,
  xAmzTargetOvertureServiceDescribeCustomerMetadataHandler,
  xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler,
  xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler,
  xAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler,
  xAmzTargetOvertureServiceDescribeDirectConnectGatewaysHandler,
  xAmzTargetOvertureServiceDescribeHostedConnectionsHandler,
  xAmzTargetOvertureServiceDescribeInterconnectLoaHandler,
  xAmzTargetOvertureServiceDescribeInterconnectsHandler,
  xAmzTargetOvertureServiceDescribeLagsHandler,
  xAmzTargetOvertureServiceDescribeLoaHandler,
  xAmzTargetOvertureServiceDescribeLocationsHandler,
  xAmzTargetOvertureServiceDescribeRouterConfigurationHandler,
  xAmzTargetOvertureServiceDescribeTagsHandler,
  xAmzTargetOvertureServiceDescribeVirtualGatewaysHandler,
  xAmzTargetOvertureServiceDescribeVirtualInterfacesHandler,
  xAmzTargetOvertureServiceDisassociateConnectionFromLagHandler,
  xAmzTargetOvertureServiceDisassociateMacSecKeyHandler,
  xAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler,
  xAmzTargetOvertureServiceStartBgpFailoverTestHandler,
  xAmzTargetOvertureServiceStopBgpFailoverTestHandler,
  xAmzTargetOvertureServiceTagResourceHandler,
  xAmzTargetOvertureServiceUntagResourceHandler,
  xAmzTargetOvertureServiceUpdateConnectionHandler,
  xAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationHandler,
  xAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler,
  xAmzTargetOvertureServiceUpdateLagHandler,
  xAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalHandler)
  .route('/', xAmzTargetOvertureServiceAllocateConnectionOnInterconnectHandler)
  .route('/', xAmzTargetOvertureServiceAllocateHostedConnectionHandler)
  .route('/', xAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceAllocateTransitVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceAssociateConnectionWithLagHandler)
  .route('/', xAmzTargetOvertureServiceAssociateHostedConnectionHandler)
  .route('/', xAmzTargetOvertureServiceAssociateMacSecKeyHandler)
  .route('/', xAmzTargetOvertureServiceAssociateVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceConfirmConnectionHandler)
  .route('/', xAmzTargetOvertureServiceConfirmCustomerAgreementHandler)
  .route('/', xAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceConfirmPublicVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceCreateBgpPeerHandler)
  .route('/', xAmzTargetOvertureServiceCreateConnectionHandler)
  .route('/', xAmzTargetOvertureServiceCreateDirectConnectGatewayHandler)
  .route('/', xAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationHandler)
  .route('/', xAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalHandler)
  .route('/', xAmzTargetOvertureServiceCreateInterconnectHandler)
  .route('/', xAmzTargetOvertureServiceCreateLagHandler)
  .route('/', xAmzTargetOvertureServiceCreatePrivateVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceCreateTransitVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceDeleteBgpPeerHandler)
  .route('/', xAmzTargetOvertureServiceDeleteConnectionHandler)
  .route('/', xAmzTargetOvertureServiceDeleteDirectConnectGatewayHandler)
  .route('/', xAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationHandler)
  .route('/', xAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalHandler)
  .route('/', xAmzTargetOvertureServiceDeleteInterconnectHandler)
  .route('/', xAmzTargetOvertureServiceDeleteLagHandler)
  .route('/', xAmzTargetOvertureServiceDeleteVirtualInterfaceHandler)
  .route('/', xAmzTargetOvertureServiceDescribeConnectionLoaHandler)
  .route('/', xAmzTargetOvertureServiceDescribeConnectionsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeConnectionsOnInterconnectHandler)
  .route('/', xAmzTargetOvertureServiceDescribeCustomerMetadataHandler)
  .route('/', xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeDirectConnectGatewaysHandler)
  .route('/', xAmzTargetOvertureServiceDescribeHostedConnectionsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeInterconnectLoaHandler)
  .route('/', xAmzTargetOvertureServiceDescribeInterconnectsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeLagsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeLoaHandler)
  .route('/', xAmzTargetOvertureServiceDescribeLocationsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeRouterConfigurationHandler)
  .route('/', xAmzTargetOvertureServiceDescribeTagsHandler)
  .route('/', xAmzTargetOvertureServiceDescribeVirtualGatewaysHandler)
  .route('/', xAmzTargetOvertureServiceDescribeVirtualInterfacesHandler)
  .route('/', xAmzTargetOvertureServiceDisassociateConnectionFromLagHandler)
  .route('/', xAmzTargetOvertureServiceDisassociateMacSecKeyHandler)
  .route('/', xAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler)
  .route('/', xAmzTargetOvertureServiceStartBgpFailoverTestHandler)
  .route('/', xAmzTargetOvertureServiceStopBgpFailoverTestHandler)
  .route('/', xAmzTargetOvertureServiceTagResourceHandler)
  .route('/', xAmzTargetOvertureServiceUntagResourceHandler)
  .route('/', xAmzTargetOvertureServiceUpdateConnectionHandler)
  .route('/', xAmzTargetOvertureServiceUpdateDirectConnectGatewayHandler)
  .route('/', xAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationHandler)
  .route('/', xAmzTargetOvertureServiceUpdateLagHandler)
  .route('/', xAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler)

export default app
