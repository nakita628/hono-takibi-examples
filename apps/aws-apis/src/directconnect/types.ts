type AcceptDirectConnectGatewayAssociationProposalRequest = {
  directConnectGatewayId: {}
  proposalId: {}
  associatedGatewayOwnerAccount: {}
  overrideAllowedPrefixesToDirectConnectGateway?: {} | undefined
}
type DirectConnectGatewayAssociation = {
  directConnectGatewayId?: {} | undefined
  directConnectGatewayOwnerAccount?: {} | undefined
  associationState?: {} | undefined
  stateChangeError?: {} | undefined
  associatedGateway?:
    | {
        id?: {} | undefined
        type?: {} | undefined
        ownerAccount?: {} | undefined
        region?: {} | undefined
      }
    | undefined
  associationId?: {} | undefined
  allowedPrefixesToDirectConnectGateway?: {} | undefined
  virtualGatewayId?: {} | undefined
  virtualGatewayRegion?: {} | undefined
  virtualGatewayOwnerAccount?: {} | undefined
}
type AcceptDirectConnectGatewayAssociationProposalResult = {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined
}
type DirectConnectServerException = { [x: string]: unknown }
type DirectConnectClientException = { [x: string]: unknown }
type AllocateConnectionOnInterconnectRequest = {
  bandwidth: {}
  connectionName: {}
  ownerAccount: {}
  interconnectId: {}
  vlan: {}
}
type Connection = {
  ownerAccount?: {} | undefined
  connectionId?: {} | undefined
  connectionName?: {} | undefined
  connectionState?: {} | undefined
  region?: {} | undefined
  location?: {} | undefined
  bandwidth?: {} | undefined
  vlan?: {} | undefined
  partnerName?: {} | undefined
  loaIssueTime?: {} | undefined
  lagId?: {} | undefined
  awsDevice?: {} | undefined
  jumboFrameCapable?: {} | undefined
  awsDeviceV2?: {} | undefined
  awsLogicalDeviceId?: {} | undefined
  hasLogicalRedundancy?: {} | undefined
  tags?: {} | undefined
  providerName?: {} | undefined
  macSecCapable?: {} | undefined
  portEncryptionStatus?: {} | undefined
  encryptionMode?: {} | undefined
  macSecKeys?: {} | undefined
}
type AllocateHostedConnectionRequest = {
  connectionId: {}
  ownerAccount: {}
  bandwidth: {}
  connectionName: {}
  vlan: {}
  tags?: {} | undefined
}
type DuplicateTagKeysException = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type AllocatePrivateVirtualInterfaceRequest = {
  connectionId: {}
  ownerAccount: {}
  newPrivateVirtualInterfaceAllocation: {
    virtualInterfaceName: {}
    vlan: {}
    asn: {}
    mtu?: {} | undefined
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    addressFamily?: {} | undefined
    customerAddress?: {} | undefined
    tags?: {} | undefined
  }
}
type VirtualInterface = {
  ownerAccount?: {} | undefined
  virtualInterfaceId?: {} | undefined
  location?: {} | undefined
  connectionId?: {} | undefined
  virtualInterfaceType?: {} | undefined
  virtualInterfaceName?: {} | undefined
  vlan?: {} | undefined
  asn?: {} | undefined
  amazonSideAsn?: {} | undefined
  authKey?: {} | undefined
  amazonAddress?: {} | undefined
  customerAddress?: {} | undefined
  addressFamily?: {} | undefined
  virtualInterfaceState?: {} | undefined
  customerRouterConfig?: {} | undefined
  mtu?: {} | undefined
  jumboFrameCapable?: {} | undefined
  virtualGatewayId?: {} | undefined
  directConnectGatewayId?: {} | undefined
  routeFilterPrefixes?: {} | undefined
  bgpPeers?: {} | undefined
  region?: {} | undefined
  awsDeviceV2?: {} | undefined
  awsLogicalDeviceId?: {} | undefined
  tags?: {} | undefined
  siteLinkEnabled?: {} | undefined
}
type AllocatePublicVirtualInterfaceRequest = {
  connectionId: {}
  ownerAccount: {}
  newPublicVirtualInterfaceAllocation: {
    virtualInterfaceName: {}
    vlan: {}
    asn: {}
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    customerAddress?: {} | undefined
    addressFamily?: {} | undefined
    routeFilterPrefixes?: {} | undefined
    tags?: {} | undefined
  }
}
type AllocateTransitVirtualInterfaceRequest = {
  connectionId: {}
  ownerAccount: {}
  newTransitVirtualInterfaceAllocation: {
    virtualInterfaceName?: {} | undefined
    vlan?: {} | undefined
    asn?: {} | undefined
    mtu?: {} | undefined
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    customerAddress?: {} | undefined
    addressFamily?: {} | undefined
    tags?: {} | undefined
  }
}
type AllocateTransitVirtualInterfaceResult = { virtualInterface?: VirtualInterface | undefined }
type AssociateConnectionWithLagRequest = { connectionId: {}; lagId: {} }
type AssociateHostedConnectionRequest = { connectionId: {}; parentConnectionId: {} }
type AssociateMacSecKeyRequest = {
  connectionId: {}
  secretARN?: {} | undefined
  ckn?: {} | undefined
  cak?: {} | undefined
}
type AssociateMacSecKeyResponse = { connectionId?: {} | undefined; macSecKeys?: {} | undefined }
type AssociateVirtualInterfaceRequest = { virtualInterfaceId: {}; connectionId: {} }
type ConfirmConnectionRequest = { connectionId: {} }
type ConfirmConnectionResponse = { connectionState?: {} | undefined }
type ConfirmCustomerAgreementRequest = { agreementName?: {} | undefined }
type ConfirmCustomerAgreementResponse = { status?: {} | undefined }
type ConfirmPrivateVirtualInterfaceRequest = {
  virtualInterfaceId: {}
  virtualGatewayId?: {} | undefined
  directConnectGatewayId?: {} | undefined
}
type ConfirmPrivateVirtualInterfaceResponse = { virtualInterfaceState?: {} | undefined }
type ConfirmPublicVirtualInterfaceRequest = { virtualInterfaceId: {} }
type ConfirmPublicVirtualInterfaceResponse = { virtualInterfaceState?: {} | undefined }
type ConfirmTransitVirtualInterfaceRequest = { virtualInterfaceId: {}; directConnectGatewayId: {} }
type ConfirmTransitVirtualInterfaceResponse = { virtualInterfaceState?: {} | undefined }
type CreateBGPPeerRequest = {
  virtualInterfaceId?: {} | undefined
  newBGPPeer?:
    | {
        asn?: {} | undefined
        authKey?: {} | undefined
        addressFamily?: {} | undefined
        amazonAddress?: {} | undefined
        customerAddress?: {} | undefined
      }
    | undefined
}
type CreateBGPPeerResponse = {
  virtualInterface?:
    | {
        ownerAccount?: {} | undefined
        virtualInterfaceId?: {} | undefined
        location?: {} | undefined
        connectionId?: {} | undefined
        virtualInterfaceType?: {} | undefined
        virtualInterfaceName?: {} | undefined
        vlan?: {} | undefined
        asn?: {} | undefined
        amazonSideAsn?: {} | undefined
        authKey?: {} | undefined
        amazonAddress?: {} | undefined
        customerAddress?: {} | undefined
        addressFamily?: {} | undefined
        virtualInterfaceState?: {} | undefined
        customerRouterConfig?: {} | undefined
        mtu?: {} | undefined
        jumboFrameCapable?: {} | undefined
        virtualGatewayId?: {} | undefined
        directConnectGatewayId?: {} | undefined
        routeFilterPrefixes?: {} | undefined
        bgpPeers?: {} | undefined
        region?: {} | undefined
        awsDeviceV2?: {} | undefined
        awsLogicalDeviceId?: {} | undefined
        tags?: {} | undefined
        siteLinkEnabled?: {} | undefined
      }
    | undefined
}
type CreateConnectionRequest = {
  location: {}
  bandwidth: {}
  connectionName: {}
  lagId?: {} | undefined
  tags?: {} | undefined
  providerName?: {} | undefined
  requestMACSec?: {} | undefined
}
type CreateDirectConnectGatewayRequest = {
  directConnectGatewayName: {}
  amazonSideAsn?: {} | undefined
}
type CreateDirectConnectGatewayResult = {
  directConnectGateway?:
    | {
        directConnectGatewayId?: {} | undefined
        directConnectGatewayName?: {} | undefined
        amazonSideAsn?: {} | undefined
        ownerAccount?: {} | undefined
        directConnectGatewayState?: {} | undefined
        stateChangeError?: {} | undefined
      }
    | undefined
}
type CreateDirectConnectGatewayAssociationRequest = {
  directConnectGatewayId: {}
  gatewayId?: {} | undefined
  addAllowedPrefixesToDirectConnectGateway?: {} | undefined
  virtualGatewayId?: {} | undefined
}
type CreateDirectConnectGatewayAssociationResult = {
  directConnectGatewayAssociation?:
    | {
        directConnectGatewayId?: {} | undefined
        directConnectGatewayOwnerAccount?: {} | undefined
        associationState?: {} | undefined
        stateChangeError?: {} | undefined
        associatedGateway?:
          | {
              id?: {} | undefined
              type?: {} | undefined
              ownerAccount?: {} | undefined
              region?: {} | undefined
            }
          | undefined
        associationId?: {} | undefined
        allowedPrefixesToDirectConnectGateway?: {} | undefined
        virtualGatewayId?: {} | undefined
        virtualGatewayRegion?: {} | undefined
        virtualGatewayOwnerAccount?: {} | undefined
      }
    | undefined
}
type CreateDirectConnectGatewayAssociationProposalRequest = {
  directConnectGatewayId: {}
  directConnectGatewayOwnerAccount: {}
  gatewayId: {}
  addAllowedPrefixesToDirectConnectGateway?: {} | undefined
  removeAllowedPrefixesToDirectConnectGateway?: {} | undefined
}
type CreateDirectConnectGatewayAssociationProposalResult = {
  directConnectGatewayAssociationProposal?:
    | {
        proposalId?: {} | undefined
        directConnectGatewayId?: {} | undefined
        directConnectGatewayOwnerAccount?: {} | undefined
        proposalState?: {} | undefined
        associatedGateway?:
          | {
              id?: {} | undefined
              type?: {} | undefined
              ownerAccount?: {} | undefined
              region?: {} | undefined
            }
          | undefined
        existingAllowedPrefixesToDirectConnectGateway?: {} | undefined
        requestedAllowedPrefixesToDirectConnectGateway?: {} | undefined
      }
    | undefined
}
type CreateInterconnectRequest = {
  interconnectName: {}
  bandwidth: {}
  location: {}
  lagId?: {} | undefined
  tags?: {} | undefined
  providerName?: {} | undefined
}
type Interconnect = {
  interconnectId?: {} | undefined
  interconnectName?: {} | undefined
  interconnectState?: {} | undefined
  region?: {} | undefined
  location?: {} | undefined
  bandwidth?: {} | undefined
  loaIssueTime?: {} | undefined
  lagId?: {} | undefined
  awsDevice?: {} | undefined
  jumboFrameCapable?: {} | undefined
  awsDeviceV2?: {} | undefined
  awsLogicalDeviceId?: {} | undefined
  hasLogicalRedundancy?: {} | undefined
  tags?: {} | undefined
  providerName?: {} | undefined
}
type CreateLagRequest = {
  numberOfConnections: {}
  location: {}
  connectionsBandwidth: {}
  lagName: {}
  connectionId?: {} | undefined
  tags?: {} | undefined
  childConnectionTags?: {} | undefined
  providerName?: {} | undefined
  requestMACSec?: {} | undefined
}
type Lag = {
  connectionsBandwidth?: {} | undefined
  numberOfConnections?: {} | undefined
  lagId?: {} | undefined
  ownerAccount?: {} | undefined
  lagName?: {} | undefined
  lagState?: {} | undefined
  location?: {} | undefined
  region?: {} | undefined
  minimumLinks?: {} | undefined
  awsDevice?: {} | undefined
  awsDeviceV2?: {} | undefined
  awsLogicalDeviceId?: {} | undefined
  connections?: {} | undefined
  allowsHostedConnections?: {} | undefined
  jumboFrameCapable?: {} | undefined
  hasLogicalRedundancy?: {} | undefined
  tags?: {} | undefined
  providerName?: {} | undefined
  macSecCapable?: {} | undefined
  encryptionMode?: {} | undefined
  macSecKeys?: {} | undefined
}
type CreatePrivateVirtualInterfaceRequest = {
  connectionId: {}
  newPrivateVirtualInterface: {
    virtualInterfaceName: {}
    vlan: {}
    asn: {}
    mtu?: {} | undefined
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    customerAddress?: {} | undefined
    addressFamily?: {} | undefined
    virtualGatewayId?: {} | undefined
    directConnectGatewayId?: {} | undefined
    tags?: {} | undefined
    enableSiteLink?: {} | undefined
  }
}
type CreatePublicVirtualInterfaceRequest = {
  connectionId: {}
  newPublicVirtualInterface: {
    virtualInterfaceName: {}
    vlan: {}
    asn: {}
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    customerAddress?: {} | undefined
    addressFamily?: {} | undefined
    routeFilterPrefixes?: {} | undefined
    tags?: {} | undefined
  }
}
type CreateTransitVirtualInterfaceRequest = {
  connectionId: {}
  newTransitVirtualInterface: {
    virtualInterfaceName?: {} | undefined
    vlan?: {} | undefined
    asn?: {} | undefined
    mtu?: {} | undefined
    authKey?: {} | undefined
    amazonAddress?: {} | undefined
    customerAddress?: {} | undefined
    addressFamily?: {} | undefined
    directConnectGatewayId?: {} | undefined
    tags?: {} | undefined
    enableSiteLink?: {} | undefined
  }
}
type CreateTransitVirtualInterfaceResult = { virtualInterface?: VirtualInterface | undefined }
type DeleteBGPPeerRequest = {
  virtualInterfaceId?: {} | undefined
  asn?: {} | undefined
  customerAddress?: {} | undefined
  bgpPeerId?: {} | undefined
}
type DeleteBGPPeerResponse = {
  virtualInterface?:
    | {
        ownerAccount?: {} | undefined
        virtualInterfaceId?: {} | undefined
        location?: {} | undefined
        connectionId?: {} | undefined
        virtualInterfaceType?: {} | undefined
        virtualInterfaceName?: {} | undefined
        vlan?: {} | undefined
        asn?: {} | undefined
        amazonSideAsn?: {} | undefined
        authKey?: {} | undefined
        amazonAddress?: {} | undefined
        customerAddress?: {} | undefined
        addressFamily?: {} | undefined
        virtualInterfaceState?: {} | undefined
        customerRouterConfig?: {} | undefined
        mtu?: {} | undefined
        jumboFrameCapable?: {} | undefined
        virtualGatewayId?: {} | undefined
        directConnectGatewayId?: {} | undefined
        routeFilterPrefixes?: {} | undefined
        bgpPeers?: {} | undefined
        region?: {} | undefined
        awsDeviceV2?: {} | undefined
        awsLogicalDeviceId?: {} | undefined
        tags?: {} | undefined
        siteLinkEnabled?: {} | undefined
      }
    | undefined
}
type DeleteConnectionRequest = { connectionId: {} }
type DeleteDirectConnectGatewayRequest = { directConnectGatewayId: {} }
type DeleteDirectConnectGatewayResult = {
  directConnectGateway?:
    | {
        directConnectGatewayId?: {} | undefined
        directConnectGatewayName?: {} | undefined
        amazonSideAsn?: {} | undefined
        ownerAccount?: {} | undefined
        directConnectGatewayState?: {} | undefined
        stateChangeError?: {} | undefined
      }
    | undefined
}
type DeleteDirectConnectGatewayAssociationRequest = {
  associationId?: {} | undefined
  directConnectGatewayId?: {} | undefined
  virtualGatewayId?: {} | undefined
}
type DeleteDirectConnectGatewayAssociationResult = {
  directConnectGatewayAssociation?:
    | {
        directConnectGatewayId?: {} | undefined
        directConnectGatewayOwnerAccount?: {} | undefined
        associationState?: {} | undefined
        stateChangeError?: {} | undefined
        associatedGateway?:
          | {
              id?: {} | undefined
              type?: {} | undefined
              ownerAccount?: {} | undefined
              region?: {} | undefined
            }
          | undefined
        associationId?: {} | undefined
        allowedPrefixesToDirectConnectGateway?: {} | undefined
        virtualGatewayId?: {} | undefined
        virtualGatewayRegion?: {} | undefined
        virtualGatewayOwnerAccount?: {} | undefined
      }
    | undefined
}
type DeleteDirectConnectGatewayAssociationProposalRequest = { proposalId: {} }
type DeleteDirectConnectGatewayAssociationProposalResult = {
  directConnectGatewayAssociationProposal?:
    | {
        proposalId?: {} | undefined
        directConnectGatewayId?: {} | undefined
        directConnectGatewayOwnerAccount?: {} | undefined
        proposalState?: {} | undefined
        associatedGateway?:
          | {
              id?: {} | undefined
              type?: {} | undefined
              ownerAccount?: {} | undefined
              region?: {} | undefined
            }
          | undefined
        existingAllowedPrefixesToDirectConnectGateway?: {} | undefined
        requestedAllowedPrefixesToDirectConnectGateway?: {} | undefined
      }
    | undefined
}
type DeleteInterconnectRequest = { interconnectId: {} }
type DeleteInterconnectResponse = { interconnectState?: {} | undefined }
type DeleteLagRequest = { lagId: {} }
type DeleteVirtualInterfaceRequest = { virtualInterfaceId: {} }
type DeleteVirtualInterfaceResponse = { virtualInterfaceState?: {} | undefined }
type DescribeConnectionLoaRequest = {
  connectionId: {}
  providerName?: {} | undefined
  loaContentType?: {} | undefined
}
type DescribeConnectionLoaResponse = {
  loa?: { loaContent?: {} | undefined; loaContentType?: {} | undefined } | undefined
}
type DescribeConnectionsRequest = { connectionId?: {} | undefined }
type Connections = { connections?: {} | undefined }
type DescribeConnectionsOnInterconnectRequest = { interconnectId: {} }
type DescribeCustomerMetadataResponse = {
  agreements?: {} | undefined
  nniPartnerType?: {} | undefined
}
type DescribeDirectConnectGatewayAssociationProposalsRequest = {
  directConnectGatewayId?: {} | undefined
  proposalId?: {} | undefined
  associatedGatewayId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewayAssociationProposalsResult = {
  directConnectGatewayAssociationProposals?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewayAssociationsRequest = {
  associationId?: {} | undefined
  associatedGatewayId?: {} | undefined
  directConnectGatewayId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
  virtualGatewayId?: {} | undefined
}
type DescribeDirectConnectGatewayAssociationsResult = {
  directConnectGatewayAssociations?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewayAttachmentsRequest = {
  directConnectGatewayId?: {} | undefined
  virtualInterfaceId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewayAttachmentsResult = {
  directConnectGatewayAttachments?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewaysRequest = {
  directConnectGatewayId?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeDirectConnectGatewaysResult = {
  directConnectGateways?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeHostedConnectionsRequest = { connectionId: {} }
type DescribeInterconnectLoaRequest = {
  interconnectId: {}
  providerName?: {} | undefined
  loaContentType?: {} | undefined
}
type DescribeInterconnectLoaResponse = {
  loa?: { loaContent?: {} | undefined; loaContentType?: {} | undefined } | undefined
}
type DescribeInterconnectsRequest = { interconnectId?: {} | undefined }
type Interconnects = { interconnects?: {} | undefined }
type DescribeLagsRequest = { lagId?: {} | undefined }
type Lags = { lags?: {} | undefined }
type DescribeLoaRequest = {
  connectionId: {}
  providerName?: {} | undefined
  loaContentType?: {} | undefined
}
type Loa = { loaContent?: {} | undefined; loaContentType?: {} | undefined }
type Locations = { locations?: {} | undefined }
type DescribeRouterConfigurationRequest = {
  virtualInterfaceId: {}
  routerTypeIdentifier?: {} | undefined
}
type DescribeRouterConfigurationResponse = {
  customerRouterConfig?: {} | undefined
  router?:
    | {
        vendor?: {} | undefined
        platform?: {} | undefined
        software?: {} | undefined
        xsltTemplateName?: {} | undefined
        xsltTemplateNameForMacSec?: {} | undefined
        routerTypeIdentifier?: {} | undefined
      }
    | undefined
  virtualInterfaceId?: {} | undefined
  virtualInterfaceName?: {} | undefined
}
type DescribeTagsRequest = { resourceArns: {} }
type DescribeTagsResponse = { resourceTags?: {} | undefined }
type VirtualGateways = { virtualGateways?: {} | undefined }
type DescribeVirtualInterfacesRequest = {
  connectionId?: {} | undefined
  virtualInterfaceId?: {} | undefined
}
type VirtualInterfaces = { virtualInterfaces?: {} | undefined }
type DisassociateConnectionFromLagRequest = { connectionId: {}; lagId: {} }
type DisassociateMacSecKeyRequest = { connectionId: {}; secretARN: {} }
type DisassociateMacSecKeyResponse = { connectionId?: {} | undefined; macSecKeys?: {} | undefined }
type ListVirtualInterfaceTestHistoryRequest = {
  testId?: {} | undefined
  virtualInterfaceId?: {} | undefined
  bgpPeers?: {} | undefined
  status?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListVirtualInterfaceTestHistoryResponse = {
  virtualInterfaceTestHistory?: {} | undefined
  nextToken?: {} | undefined
}
type StartBgpFailoverTestRequest = {
  virtualInterfaceId: {}
  bgpPeers?: {} | undefined
  testDurationInMinutes?: {} | undefined
}
type StartBgpFailoverTestResponse = {
  virtualInterfaceTest?:
    | {
        testId?: {} | undefined
        virtualInterfaceId?: {} | undefined
        bgpPeers?: {} | undefined
        status?: {} | undefined
        ownerAccount?: {} | undefined
        testDurationInMinutes?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
      }
    | undefined
}
type StopBgpFailoverTestRequest = { virtualInterfaceId: {} }
type StopBgpFailoverTestResponse = {
  virtualInterfaceTest?:
    | {
        testId?: {} | undefined
        virtualInterfaceId?: {} | undefined
        bgpPeers?: {} | undefined
        status?: {} | undefined
        ownerAccount?: {} | undefined
        testDurationInMinutes?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateConnectionRequest = {
  connectionId: {}
  connectionName?: {} | undefined
  encryptionMode?: {} | undefined
}
type UpdateDirectConnectGatewayRequest = {
  directConnectGatewayId: {}
  newDirectConnectGatewayName: {}
}
type DirectConnectGateway = {
  directConnectGatewayId?: {} | undefined
  directConnectGatewayName?: {} | undefined
  amazonSideAsn?: {} | undefined
  ownerAccount?: {} | undefined
  directConnectGatewayState?: {} | undefined
  stateChangeError?: {} | undefined
}
type UpdateDirectConnectGatewayResponse = {
  directConnectGateway?: DirectConnectGateway | undefined
}
type UpdateDirectConnectGatewayAssociationRequest = {
  associationId?: {} | undefined
  addAllowedPrefixesToDirectConnectGateway?: {} | undefined
  removeAllowedPrefixesToDirectConnectGateway?: {} | undefined
}
type UpdateDirectConnectGatewayAssociationResult = {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation | undefined
}
type UpdateLagRequest = {
  lagId: {}
  lagName?: {} | undefined
  minimumLinks?: {} | undefined
  encryptionMode?: {} | undefined
}
type UpdateVirtualInterfaceAttributesRequest = {
  virtualInterfaceId: {}
  mtu?: {} | undefined
  enableSiteLink?: {} | undefined
  virtualInterfaceName?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AcceptDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDirectConnectGatewayAssociationProposalRequest }
            output: AcceptDirectConnectGatewayAssociationProposalResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AcceptDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AcceptDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateConnectionOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateConnectionOnInterconnectRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateConnectionOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateConnectionOnInterconnectRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateConnectionOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateConnectionOnInterconnectRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AllocateHostedConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateHostedConnectionRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateHostedConnectionRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateHostedConnectionRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateHostedConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateHostedConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePrivateVirtualInterfaceRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePrivateVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePrivateVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePrivateVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePrivateVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePublicVirtualInterfaceRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePublicVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePublicVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePublicVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocatePublicVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateTransitVirtualInterfaceRequest }
            output: AllocateTransitVirtualInterfaceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateTransitVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateTransitVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateTransitVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AllocateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AllocateTransitVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AssociateConnectionWithLag': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateConnectionWithLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateConnectionWithLagRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateConnectionWithLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateConnectionWithLagRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateConnectionWithLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateConnectionWithLagRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AssociateHostedConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateHostedConnectionRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateHostedConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateHostedConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateHostedConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AssociateMacSecKey': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateMacSecKeyRequest }
            output: AssociateMacSecKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateMacSecKeyRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateMacSecKeyRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.AssociateVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateVirtualInterfaceRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.AssociateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ConfirmConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmConnectionRequest }
            output: ConfirmConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ConfirmCustomerAgreement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmCustomerAgreement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmCustomerAgreementRequest }
            output: ConfirmCustomerAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmCustomerAgreement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmCustomerAgreementRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmCustomerAgreement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmCustomerAgreementRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPrivateVirtualInterfaceRequest }
            output: ConfirmPrivateVirtualInterfaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPrivateVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPrivateVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPublicVirtualInterfaceRequest }
            output: ConfirmPublicVirtualInterfaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPublicVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmPublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmPublicVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmTransitVirtualInterfaceRequest }
            output: ConfirmTransitVirtualInterfaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmTransitVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ConfirmTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfirmTransitVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateBGPPeer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBGPPeerRequest }
            output: CreateBGPPeerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBGPPeerRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBGPPeerRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConnectionRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConnectionRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConnectionRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGateway': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayRequest }
            output: CreateDirectConnectGatewayResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationRequest }
            output: CreateDirectConnectGatewayAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationProposalRequest }
            output: CreateDirectConnectGatewayAssociationProposalResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateInterconnect': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInterconnectRequest }
            output: Interconnect
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInterconnectRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInterconnectRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInterconnectRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInterconnectRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateLag': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLagRequest }
            output: Lag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLagRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLagRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLagRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLagRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePrivateVirtualInterfaceRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePrivateVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePrivateVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePrivateVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePrivateVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePrivateVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePublicVirtualInterfaceRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePublicVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePublicVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePublicVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreatePublicVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePublicVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransitVirtualInterfaceRequest }
            output: CreateTransitVirtualInterfaceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransitVirtualInterfaceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransitVirtualInterfaceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransitVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.CreateTransitVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTransitVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteBGPPeer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBGPPeerRequest }
            output: DeleteBGPPeerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBGPPeerRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteBGPPeer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBGPPeerRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayRequest }
            output: DeleteDirectConnectGatewayResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationRequest }
            output: DeleteDirectConnectGatewayAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationProposalRequest }
            output: DeleteDirectConnectGatewayAssociationProposalResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteDirectConnectGatewayAssociationProposal'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDirectConnectGatewayAssociationProposalRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteInterconnect': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInterconnectRequest }
            output: DeleteInterconnectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInterconnectRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInterconnectRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteLag': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLagRequest }
            output: Lag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLagRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLagRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DeleteVirtualInterface': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVirtualInterfaceRequest }
            output: DeleteVirtualInterfaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVirtualInterfaceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DeleteVirtualInterface'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVirtualInterfaceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeConnectionLoa': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionLoaRequest }
            output: DescribeConnectionLoaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionLoaRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionLoaRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeConnections': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsRequest }
            output: Connections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionsOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsOnInterconnectRequest }
            output: Connections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionsOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsOnInterconnectRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeConnectionsOnInterconnect'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeConnectionsOnInterconnectRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeCustomerMetadata': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeCustomerMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeCustomerMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeCustomerMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeCustomerMetadata'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociationProposals'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationProposalsRequest }
            output: DescribeDirectConnectGatewayAssociationProposalsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociationProposals'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationProposalsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociationProposals'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationProposalsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationsRequest }
            output: DescribeDirectConnectGatewayAssociationsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAssociations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAssociationsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAttachments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAttachmentsRequest }
            output: DescribeDirectConnectGatewayAttachmentsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAttachments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAttachmentsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGatewayAttachments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewayAttachmentsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewaysRequest }
            output: DescribeDirectConnectGatewaysResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewaysRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeDirectConnectGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDirectConnectGatewaysRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeHostedConnections': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeHostedConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHostedConnectionsRequest }
            output: Connections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeHostedConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHostedConnectionsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeHostedConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeHostedConnectionsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeInterconnectLoa': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnectLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectLoaRequest }
            output: DescribeInterconnectLoaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnectLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectLoaRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnectLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectLoaRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeInterconnects': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectsRequest }
            output: Interconnects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeInterconnects'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInterconnectsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeLags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLagsRequest }
            output: Lags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLagsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLagsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeLoa': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoaRequest }
            output: Loa
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoaRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLoa'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoaRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeLocations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: Locations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeRouterConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeRouterConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRouterConfigurationRequest }
            output: DescribeRouterConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeRouterConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRouterConfigurationRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeRouterConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRouterConfigurationRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeTags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsRequest }
            output: DescribeTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeVirtualGateways': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: VirtualGateways
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualGateways'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualInterfaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVirtualInterfacesRequest }
            output: VirtualInterfaces
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualInterfaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVirtualInterfacesRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DescribeVirtualInterfaces'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVirtualInterfacesRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateConnectionFromLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateConnectionFromLagRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateConnectionFromLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateConnectionFromLagRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateConnectionFromLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateConnectionFromLagRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.DisassociateMacSecKey': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateMacSecKeyRequest }
            output: DisassociateMacSecKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateMacSecKeyRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.DisassociateMacSecKey'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateMacSecKeyRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ListVirtualInterfaceTestHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVirtualInterfaceTestHistoryRequest }
            output: ListVirtualInterfaceTestHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ListVirtualInterfaceTestHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVirtualInterfaceTestHistoryRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.ListVirtualInterfaceTestHistory'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListVirtualInterfaceTestHistoryRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.StartBgpFailoverTest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StartBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartBgpFailoverTestRequest }
            output: StartBgpFailoverTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StartBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartBgpFailoverTestRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StartBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartBgpFailoverTestRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.StopBgpFailoverTest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StopBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopBgpFailoverTestRequest }
            output: StopBgpFailoverTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StopBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopBgpFailoverTestRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.StopBgpFailoverTest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopBgpFailoverTestRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: DuplicateTagKeysException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UpdateConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConnectionRequest }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConnectionRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateConnectionRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGateway': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayRequest }
            output: UpdateDirectConnectGatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGateway'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayAssociationRequest }
            output: UpdateDirectConnectGatewayAssociationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayAssociationRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateDirectConnectGatewayAssociation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateDirectConnectGatewayAssociationRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UpdateLag': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLagRequest }
            output: Lag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLagRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateLag'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLagRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateVirtualInterfaceAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVirtualInterfaceAttributesRequest }
            output: VirtualInterface
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateVirtualInterfaceAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVirtualInterfaceAttributesRequest }
            output: DirectConnectServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OvertureService.UpdateVirtualInterfaceAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVirtualInterfaceAttributesRequest }
            output: DirectConnectClientException
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
