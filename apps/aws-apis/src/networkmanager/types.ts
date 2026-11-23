type AcceptAttachmentResponse = {
  Attachment?:
    | {
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        AttachmentId?: {} | undefined
        OwnerAccountId?: {} | undefined
        AttachmentType?: {} | undefined
        State?: {} | undefined
        EdgeLocation?: {} | undefined
        ResourceArn?: {} | undefined
        AttachmentPolicyRuleNumber?: {} | undefined
        SegmentName?: {} | undefined
        Tags?: {} | undefined
        ProposedSegmentChange?:
          | {
              Tags?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        UpdatedAt?: {} | undefined
      }
    | undefined
}
type AssociateConnectPeerResponse = {
  ConnectPeerAssociation?:
    | {
        ConnectPeerId?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type ConnectPeerId = string
type GetConnectPeerAssociationsResponse = {
  ConnectPeerAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type AssociateCustomerGatewayResponse = {
  CustomerGatewayAssociation?:
    | {
        CustomerGatewayArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type CustomerGatewayArn = string
type GetCustomerGatewayAssociationsResponse = {
  CustomerGatewayAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type AssociateLinkResponse = {
  LinkAssociation?:
    | {
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        LinkAssociationState?: {} | undefined
      }
    | undefined
}
type GetLinkAssociationsResponse = { LinkAssociations?: {} | undefined; NextToken?: {} | undefined }
type AssociateTransitGatewayConnectPeerResponse = {
  TransitGatewayConnectPeerAssociation?:
    | {
        TransitGatewayConnectPeerArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type TransitGatewayConnectPeerArn = string
type GetTransitGatewayConnectPeerAssociationsResponse = {
  TransitGatewayConnectPeerAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type Tag = { Key?: {} | undefined; Value?: {} | undefined }
type CreateConnectAttachmentResponse = {
  ConnectAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        TransportAttachmentId?: {} | undefined
        Options?: { Protocol?: {} | undefined } | undefined
      }
    | undefined
}
type ConstrainedString = string
type CreateConnectPeerResponse = {
  ConnectPeer?:
    | {
        CoreNetworkId?: {} | undefined
        ConnectAttachmentId?: {} | undefined
        ConnectPeerId?: {} | undefined
        EdgeLocation?: {} | undefined
        State?: {} | undefined
        CreatedAt?: {} | undefined
        Configuration?:
          | {
              CoreNetworkAddress?: {} | undefined
              PeerAddress?: {} | undefined
              InsideCidrBlocks?: {} | undefined
              Protocol?: {} | undefined
              BgpConfigurations?: {} | undefined
            }
          | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type ListConnectPeersResponse = { ConnectPeers?: {} | undefined; NextToken?: {} | undefined }
type CreateConnectionResponse = {
  Connection?:
    | {
        ConnectionId?: {} | undefined
        ConnectionArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        ConnectedDeviceId?: {} | undefined
        LinkId?: {} | undefined
        ConnectedLinkId?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type ConnectionId = string
type GetConnectionsResponse = { Connections?: {} | undefined; NextToken?: {} | undefined }
type CreateCoreNetworkResponse = {
  CoreNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Segments?: {} | undefined
        Edges?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type ListCoreNetworksResponse = { CoreNetworks?: {} | undefined; NextToken?: {} | undefined }
type CreateDeviceResponse = {
  Device?:
    | {
        DeviceId?: {} | undefined
        DeviceArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        AWSLocation?: { Zone?: {} | undefined; SubnetArn?: {} | undefined } | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Vendor?: {} | undefined
        Model?: {} | undefined
        SerialNumber?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        SiteId?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeviceId = string
type GetDevicesResponse = { Devices?: {} | undefined; NextToken?: {} | undefined }
type CreateGlobalNetworkResponse = {
  GlobalNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        GlobalNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GlobalNetworkId = string
type DescribeGlobalNetworksResponse = {
  GlobalNetworks?: {} | undefined
  NextToken?: {} | undefined
}
type CreateLinkResponse = {
  Link?:
    | {
        LinkId?: {} | undefined
        LinkArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        SiteId?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Bandwidth?: { UploadSpeed?: {} | undefined; DownloadSpeed?: {} | undefined } | undefined
        Provider?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type LinkId = string
type GetLinksResponse = { Links?: {} | undefined; NextToken?: {} | undefined }
type CreateSiteResponse = {
  Site?:
    | {
        SiteId?: {} | undefined
        SiteArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        Description?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type SiteId = string
type GetSitesResponse = { Sites?: {} | undefined; NextToken?: {} | undefined }
type CreateSiteToSiteVpnAttachmentResponse = {
  SiteToSiteVpnAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        VpnConnectionArn?: {} | undefined
      }
    | undefined
}
type CreateTransitGatewayPeeringResponse = {
  TransitGatewayPeering?:
    | {
        Peering?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              PeeringId?: {} | undefined
              OwnerAccountId?: {} | undefined
              PeeringType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              Tags?: {} | undefined
              CreatedAt?: {} | undefined
            }
          | undefined
        TransitGatewayArn?: {} | undefined
        TransitGatewayPeeringAttachmentId?: {} | undefined
      }
    | undefined
}
type Attachment = {
  CoreNetworkId?: {} | undefined
  CoreNetworkArn?: {} | undefined
  AttachmentId?: {} | undefined
  OwnerAccountId?: {} | undefined
  AttachmentType?: {} | undefined
  State?: {} | undefined
  EdgeLocation?: {} | undefined
  ResourceArn?: {} | undefined
  AttachmentPolicyRuleNumber?: {} | undefined
  SegmentName?: {} | undefined
  Tags?: {} | undefined
  ProposedSegmentChange?:
    | {
        Tags?: {} | undefined
        AttachmentPolicyRuleNumber?: {} | undefined
        SegmentName?: {} | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
}
type CreateTransitGatewayRouteTableAttachmentResponse = {
  TransitGatewayRouteTableAttachment?:
    | {
        Attachment?: Attachment | undefined
        PeeringId?: {} | undefined
        TransitGatewayRouteTableArn?: {} | undefined
      }
    | undefined
}
type SubnetArn = string
type CreateVpcAttachmentResponse = {
  VpcAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        SubnetArns?: {} | undefined
        Options?:
          | { Ipv6Support?: {} | undefined; ApplianceModeSupport?: {} | undefined }
          | undefined
      }
    | undefined
}
type DeleteAttachmentResponse = {
  Attachment?:
    | {
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        AttachmentId?: {} | undefined
        OwnerAccountId?: {} | undefined
        AttachmentType?: {} | undefined
        State?: {} | undefined
        EdgeLocation?: {} | undefined
        ResourceArn?: {} | undefined
        AttachmentPolicyRuleNumber?: {} | undefined
        SegmentName?: {} | undefined
        Tags?: {} | undefined
        ProposedSegmentChange?:
          | {
              Tags?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        UpdatedAt?: {} | undefined
      }
    | undefined
}
type DeleteConnectPeerResponse = {
  ConnectPeer?:
    | {
        CoreNetworkId?: {} | undefined
        ConnectAttachmentId?: {} | undefined
        ConnectPeerId?: {} | undefined
        EdgeLocation?: {} | undefined
        State?: {} | undefined
        CreatedAt?: {} | undefined
        Configuration?:
          | {
              CoreNetworkAddress?: {} | undefined
              PeerAddress?: {} | undefined
              InsideCidrBlocks?: {} | undefined
              Protocol?: {} | undefined
              BgpConfigurations?: {} | undefined
            }
          | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetConnectPeerResponse = {
  ConnectPeer?:
    | {
        CoreNetworkId?: {} | undefined
        ConnectAttachmentId?: {} | undefined
        ConnectPeerId?: {} | undefined
        EdgeLocation?: {} | undefined
        State?: {} | undefined
        CreatedAt?: {} | undefined
        Configuration?:
          | {
              CoreNetworkAddress?: {} | undefined
              PeerAddress?: {} | undefined
              InsideCidrBlocks?: {} | undefined
              Protocol?: {} | undefined
              BgpConfigurations?: {} | undefined
            }
          | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteConnectionResponse = {
  Connection?:
    | {
        ConnectionId?: {} | undefined
        ConnectionArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        ConnectedDeviceId?: {} | undefined
        LinkId?: {} | undefined
        ConnectedLinkId?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateConnectionResponse = {
  Connection?:
    | {
        ConnectionId?: {} | undefined
        ConnectionArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        ConnectedDeviceId?: {} | undefined
        LinkId?: {} | undefined
        ConnectedLinkId?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteCoreNetworkResponse = {
  CoreNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Segments?: {} | undefined
        Edges?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetCoreNetworkResponse = {
  CoreNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Segments?: {} | undefined
        Edges?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateCoreNetworkResponse = {
  CoreNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Segments?: {} | undefined
        Edges?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteCoreNetworkPolicyVersionResponse = {
  CoreNetworkPolicy?:
    | {
        CoreNetworkId?: {} | undefined
        PolicyVersionId?: {} | undefined
        Alias?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        ChangeSetState?: {} | undefined
        PolicyErrors?: {} | undefined
        PolicyDocument?: {} | undefined
      }
    | undefined
}
type DeleteDeviceResponse = {
  Device?:
    | {
        DeviceId?: {} | undefined
        DeviceArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        AWSLocation?: { Zone?: {} | undefined; SubnetArn?: {} | undefined } | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Vendor?: {} | undefined
        Model?: {} | undefined
        SerialNumber?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        SiteId?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateDeviceResponse = {
  Device?:
    | {
        DeviceId?: {} | undefined
        DeviceArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        AWSLocation?: { Zone?: {} | undefined; SubnetArn?: {} | undefined } | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Vendor?: {} | undefined
        Model?: {} | undefined
        SerialNumber?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        SiteId?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteGlobalNetworkResponse = {
  GlobalNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        GlobalNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateGlobalNetworkResponse = {
  GlobalNetwork?:
    | {
        GlobalNetworkId?: {} | undefined
        GlobalNetworkArn?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteLinkResponse = {
  Link?:
    | {
        LinkId?: {} | undefined
        LinkArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        SiteId?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Bandwidth?: { UploadSpeed?: {} | undefined; DownloadSpeed?: {} | undefined } | undefined
        Provider?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateLinkResponse = {
  Link?:
    | {
        LinkId?: {} | undefined
        LinkArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        SiteId?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        Bandwidth?: { UploadSpeed?: {} | undefined; DownloadSpeed?: {} | undefined } | undefined
        Provider?: {} | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeletePeeringResponse = {
  Peering?:
    | {
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        PeeringId?: {} | undefined
        OwnerAccountId?: {} | undefined
        PeeringType?: {} | undefined
        State?: {} | undefined
        EdgeLocation?: {} | undefined
        ResourceArn?: {} | undefined
        Tags?: {} | undefined
        CreatedAt?: {} | undefined
      }
    | undefined
}
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type GetResourcePolicyResponse = { PolicyDocument?: {} | undefined }
type PutResourcePolicyResponse = { [x: string]: unknown }
type DeleteSiteResponse = {
  Site?:
    | {
        SiteId?: {} | undefined
        SiteArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        Description?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type UpdateSiteResponse = {
  Site?:
    | {
        SiteId?: {} | undefined
        SiteArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        Description?: {} | undefined
        Location?:
          | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
          | undefined
        CreatedAt?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeregisterTransitGatewayResponse = {
  TransitGatewayRegistration?:
    | {
        GlobalNetworkId?: {} | undefined
        TransitGatewayArn?: {} | undefined
        State?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type DisassociateConnectPeerResponse = {
  ConnectPeerAssociation?:
    | {
        ConnectPeerId?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type DisassociateCustomerGatewayResponse = {
  CustomerGatewayAssociation?:
    | {
        CustomerGatewayArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type DisassociateLinkResponse = {
  LinkAssociation?:
    | {
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        LinkAssociationState?: {} | undefined
      }
    | undefined
}
type DisassociateTransitGatewayConnectPeerResponse = {
  TransitGatewayConnectPeerAssociation?:
    | {
        TransitGatewayConnectPeerArn?: {} | undefined
        GlobalNetworkId?: {} | undefined
        DeviceId?: {} | undefined
        LinkId?: {} | undefined
        State?: {} | undefined
      }
    | undefined
}
type ExecuteCoreNetworkChangeSetResponse = { [x: string]: unknown }
type GetConnectAttachmentResponse = {
  ConnectAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        TransportAttachmentId?: {} | undefined
        Options?: { Protocol?: {} | undefined } | undefined
      }
    | undefined
}
type GetCoreNetworkChangeEventsResponse = {
  CoreNetworkChangeEvents?: {} | undefined
  NextToken?: {} | undefined
}
type GetCoreNetworkChangeSetResponse = {
  CoreNetworkChanges?: {} | undefined
  NextToken?: {} | undefined
}
type GetCoreNetworkPolicyResponse = {
  CoreNetworkPolicy?:
    | {
        CoreNetworkId?: {} | undefined
        PolicyVersionId?: {} | undefined
        Alias?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        ChangeSetState?: {} | undefined
        PolicyErrors?: {} | undefined
        PolicyDocument?: {} | undefined
      }
    | undefined
}
type PutCoreNetworkPolicyResponse = {
  CoreNetworkPolicy?:
    | {
        CoreNetworkId?: {} | undefined
        PolicyVersionId?: {} | undefined
        Alias?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        ChangeSetState?: {} | undefined
        PolicyErrors?: {} | undefined
        PolicyDocument?: {} | undefined
      }
    | undefined
}
type GetNetworkResourceCountsResponse = {
  NetworkResourceCounts?: {} | undefined
  NextToken?: {} | undefined
}
type GetNetworkResourceRelationshipsResponse = {
  Relationships?: {} | undefined
  NextToken?: {} | undefined
}
type GetNetworkResourcesResponse = { NetworkResources?: {} | undefined; NextToken?: {} | undefined }
type RouteState = 'ACTIVE' | 'BLACKHOLE'
type RouteType = 'PROPAGATED' | 'STATIC'
type FilterValue = string
type FilterValues = FilterValue[]
type GetNetworkRoutesResponse = {
  RouteTableArn?: {} | undefined
  CoreNetworkSegmentEdge?:
    | {
        CoreNetworkId?: {} | undefined
        SegmentName?: {} | undefined
        EdgeLocation?: {} | undefined
      }
    | undefined
  RouteTableType?: {} | undefined
  RouteTableTimestamp?: {} | undefined
  NetworkRoutes?: {} | undefined
}
type GetNetworkTelemetryResponse = { NetworkTelemetry?: {} | undefined; NextToken?: {} | undefined }
type GetRouteAnalysisResponse = {
  RouteAnalysis?:
    | {
        GlobalNetworkId?: {} | undefined
        OwnerAccountId?: {} | undefined
        RouteAnalysisId?: {} | undefined
        StartTimestamp?: {} | undefined
        Status?: {} | undefined
        Source?:
          | {
              TransitGatewayAttachmentArn?: {} | undefined
              TransitGatewayArn?: {} | undefined
              IpAddress?: {} | undefined
            }
          | undefined
        Destination?:
          | {
              TransitGatewayAttachmentArn?: {} | undefined
              TransitGatewayArn?: {} | undefined
              IpAddress?: {} | undefined
            }
          | undefined
        IncludeReturnPath?: {} | undefined
        UseMiddleboxes?: {} | undefined
        ForwardPath?:
          | {
              CompletionStatus?:
                | {
                    ResultCode?: {} | undefined
                    ReasonCode?: {} | undefined
                    ReasonContext?: {} | undefined
                  }
                | undefined
              Path?: {} | undefined
            }
          | undefined
        ReturnPath?:
          | {
              CompletionStatus?:
                | {
                    ResultCode?: {} | undefined
                    ReasonCode?: {} | undefined
                    ReasonContext?: {} | undefined
                  }
                | undefined
              Path?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetSiteToSiteVpnAttachmentResponse = {
  SiteToSiteVpnAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        VpnConnectionArn?: {} | undefined
      }
    | undefined
}
type GetTransitGatewayPeeringResponse = {
  TransitGatewayPeering?:
    | {
        Peering?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              PeeringId?: {} | undefined
              OwnerAccountId?: {} | undefined
              PeeringType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              Tags?: {} | undefined
              CreatedAt?: {} | undefined
            }
          | undefined
        TransitGatewayArn?: {} | undefined
        TransitGatewayPeeringAttachmentId?: {} | undefined
      }
    | undefined
}
type TransitGatewayArn = string
type GetTransitGatewayRegistrationsResponse = {
  TransitGatewayRegistrations?: {} | undefined
  NextToken?: {} | undefined
}
type RegisterTransitGatewayResponse = {
  TransitGatewayRegistration?:
    | {
        GlobalNetworkId?: {} | undefined
        TransitGatewayArn?: {} | undefined
        State?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type GetTransitGatewayRouteTableAttachmentResponse = {
  TransitGatewayRouteTableAttachment?:
    | {
        Attachment?: Attachment | undefined
        PeeringId?: {} | undefined
        TransitGatewayRouteTableArn?: {} | undefined
      }
    | undefined
}
type GetVpcAttachmentResponse = {
  VpcAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        SubnetArns?: {} | undefined
        Options?:
          | { Ipv6Support?: {} | undefined; ApplianceModeSupport?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateVpcAttachmentResponse = {
  VpcAttachment?:
    | {
        Attachment?:
          | {
              CoreNetworkId?: {} | undefined
              CoreNetworkArn?: {} | undefined
              AttachmentId?: {} | undefined
              OwnerAccountId?: {} | undefined
              AttachmentType?: {} | undefined
              State?: {} | undefined
              EdgeLocation?: {} | undefined
              ResourceArn?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
              Tags?: {} | undefined
              ProposedSegmentChange?:
                | {
                    Tags?: {} | undefined
                    AttachmentPolicyRuleNumber?: {} | undefined
                    SegmentName?: {} | undefined
                  }
                | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
            }
          | undefined
        SubnetArns?: {} | undefined
        Options?:
          | { Ipv6Support?: {} | undefined; ApplianceModeSupport?: {} | undefined }
          | undefined
      }
    | undefined
}
type ListAttachmentsResponse = { Attachments?: {} | undefined; NextToken?: {} | undefined }
type ListCoreNetworkPolicyVersionsResponse = {
  CoreNetworkPolicyVersions?: {} | undefined
  NextToken?: {} | undefined
}
type ListOrganizationServiceAccessStatusResponse = {
  OrganizationStatus?:
    | {
        OrganizationId?: {} | undefined
        OrganizationAwsServiceAccessStatus?: {} | undefined
        SLRDeploymentStatus?: {} | undefined
        AccountStatusList?: {} | undefined
      }
    | undefined
  NextToken?: {} | undefined
}
type StartOrganizationServiceAccessUpdateResponse = {
  OrganizationStatus?:
    | {
        OrganizationId?: {} | undefined
        OrganizationAwsServiceAccessStatus?: {} | undefined
        SLRDeploymentStatus?: {} | undefined
        AccountStatusList?: {} | undefined
      }
    | undefined
}
type ListPeeringsResponse = { Peerings?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { TagList?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type RejectAttachmentResponse = {
  Attachment?:
    | {
        CoreNetworkId?: {} | undefined
        CoreNetworkArn?: {} | undefined
        AttachmentId?: {} | undefined
        OwnerAccountId?: {} | undefined
        AttachmentType?: {} | undefined
        State?: {} | undefined
        EdgeLocation?: {} | undefined
        ResourceArn?: {} | undefined
        AttachmentPolicyRuleNumber?: {} | undefined
        SegmentName?: {} | undefined
        Tags?: {} | undefined
        ProposedSegmentChange?:
          | {
              Tags?: {} | undefined
              AttachmentPolicyRuleNumber?: {} | undefined
              SegmentName?: {} | undefined
            }
          | undefined
        CreatedAt?: {} | undefined
        UpdatedAt?: {} | undefined
      }
    | undefined
}
type RestoreCoreNetworkPolicyVersionResponse = {
  CoreNetworkPolicy?:
    | {
        CoreNetworkId?: {} | undefined
        PolicyVersionId?: {} | undefined
        Alias?: {} | undefined
        Description?: {} | undefined
        CreatedAt?: {} | undefined
        ChangeSetState?: {} | undefined
        PolicyErrors?: {} | undefined
        PolicyDocument?: {} | undefined
      }
    | undefined
}
type StartRouteAnalysisResponse = {
  RouteAnalysis?:
    | {
        GlobalNetworkId?: {} | undefined
        OwnerAccountId?: {} | undefined
        RouteAnalysisId?: {} | undefined
        StartTimestamp?: {} | undefined
        Status?: {} | undefined
        Source?:
          | {
              TransitGatewayAttachmentArn?: {} | undefined
              TransitGatewayArn?: {} | undefined
              IpAddress?: {} | undefined
            }
          | undefined
        Destination?:
          | {
              TransitGatewayAttachmentArn?: {} | undefined
              TransitGatewayArn?: {} | undefined
              IpAddress?: {} | undefined
            }
          | undefined
        IncludeReturnPath?: {} | undefined
        UseMiddleboxes?: {} | undefined
        ForwardPath?:
          | {
              CompletionStatus?:
                | {
                    ResultCode?: {} | undefined
                    ReasonCode?: {} | undefined
                    ReasonContext?: {} | undefined
                  }
                | undefined
              Path?: {} | undefined
            }
          | undefined
        ReturnPath?:
          | {
              CompletionStatus?:
                | {
                    ResultCode?: {} | undefined
                    ReasonCode?: {} | undefined
                    ReasonContext?: {} | undefined
                  }
                | undefined
              Path?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateNetworkResourceMetadataResponse = {
  ResourceArn?: {} | undefined
  Metadata?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/attachments/:attachmentId/accept': {
      $post: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AcceptAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/connect-peer-associations': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ConnectPeerId: string; DeviceId: string; LinkId?: string | undefined } }
        output: AssociateConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            connectPeerIds?: ConnectPeerId[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectPeerAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/customer-gateway-associations': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { CustomerGatewayArn: string; DeviceId: string; LinkId?: string | undefined } }
        output: AssociateCustomerGatewayResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            customerGatewayArns?: CustomerGatewayArn[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCustomerGatewayAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/link-associations': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DeviceId: string; LinkId: string } }
        output: AssociateLinkResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            deviceId?: string | undefined
            linkId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLinkAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            TransitGatewayConnectPeerArn: string
            DeviceId: string
            LinkId?: string | undefined
          }
        }
        output: AssociateTransitGatewayConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            transitGatewayConnectPeerArns?: TransitGatewayConnectPeerArn[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetTransitGatewayConnectPeerAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connect-attachments': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            CoreNetworkId: string
            EdgeLocation: string
            TransportAttachmentId: string
            Options: { Protocol?: {} | undefined }
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateConnectAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connect-peers': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ConnectAttachmentId: string
            CoreNetworkAddress?: string | undefined
            PeerAddress: string
            BgpOptions?: { PeerAsn?: {} | undefined } | undefined
            InsideCidrBlocks: ConstrainedString[]
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            coreNetworkId?: string | undefined
            connectAttachmentId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListConnectPeersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/connections': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DeviceId: string
            ConnectedDeviceId: string
            LinkId?: string | undefined
            ConnectedLinkId?: string | undefined
            Description?: string | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            connectionIds?: ConnectionId[] | undefined
            deviceId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            GlobalNetworkId: string
            Description?: string | undefined
            Tags?: Tag[] | undefined
            PolicyDocument?: string | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateCoreNetworkResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListCoreNetworksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/devices': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AWSLocation?: { Zone?: {} | undefined; SubnetArn?: {} | undefined } | undefined
            Description?: string | undefined
            Type?: string | undefined
            Vendor?: string | undefined
            Model?: string | undefined
            SerialNumber?: string | undefined
            Location?:
              | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
              | undefined
            SiteId?: string | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateDeviceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            deviceIds?: DeviceId[] | undefined
            siteId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined; Tags?: Tag[] | undefined } }
        output: CreateGlobalNetworkResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            globalNetworkIds?: GlobalNetworkId[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeGlobalNetworksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/links': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            Type?: string | undefined
            Bandwidth: { UploadSpeed?: {} | undefined; DownloadSpeed?: {} | undefined }
            Provider?: string | undefined
            SiteId: string
            Tags?: Tag[] | undefined
          }
        }
        output: CreateLinkResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            linkIds?: LinkId[] | undefined
            siteId?: string | undefined
            type?: string | undefined
            provider?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/sites': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            Location?:
              | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
              | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateSiteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            siteIds?: SiteId[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/site-to-site-vpn-attachments': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            CoreNetworkId: string
            VpnConnectionArn: string
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateSiteToSiteVpnAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transit-gateway-peerings': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            CoreNetworkId: string
            TransitGatewayArn: string
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateTransitGatewayPeeringResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transit-gateway-route-table-attachments': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PeeringId: string
            TransitGatewayRouteTableArn: string
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateTransitGatewayRouteTableAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc-attachments': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            CoreNetworkId: string
            VpcArn: string
            SubnetArns: SubnetArn[]
            Options?:
              | { Ipv6Support?: {} | undefined; ApplianceModeSupport?: {} | undefined }
              | undefined
            Tags?: Tag[] | undefined
            ClientToken?: string | undefined
          }
        }
        output: CreateVpcAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments/:attachmentId': {
      $delete: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connect-peers/:connectPeerId': {
      $delete: {
        input: { param: { connectPeerId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { connectPeerId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/connections/:connectionId': {
      $delete: {
        input: { param: { globalNetworkId: string; connectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteConnectionResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { globalNetworkId: string; connectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            LinkId?: string | undefined
            ConnectedLinkId?: string | undefined
            Description?: string | undefined
          }
        }
        output: UpdateConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId': {
      $delete: {
        input: { param: { coreNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteCoreNetworkResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { coreNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCoreNetworkResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { coreNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined } }
        output: UpdateCoreNetworkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId': {
      $delete: {
        input: { param: { coreNetworkId: string; policyVersionId: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteCoreNetworkPolicyVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/devices/:deviceId': {
      $delete: {
        input: { param: { globalNetworkId: string; deviceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDeviceResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { globalNetworkId: string; deviceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AWSLocation?: { Zone?: {} | undefined; SubnetArn?: {} | undefined } | undefined
            Description?: string | undefined
            Type?: string | undefined
            Vendor?: string | undefined
            Model?: string | undefined
            SerialNumber?: string | undefined
            Location?:
              | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
              | undefined
            SiteId?: string | undefined
          }
        }
        output: UpdateDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId': {
      $delete: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteGlobalNetworkResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined } }
        output: UpdateGlobalNetworkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/links/:linkId': {
      $delete: {
        input: { param: { globalNetworkId: string; linkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteLinkResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { globalNetworkId: string; linkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            Type?: string | undefined
            Bandwidth?: { UploadSpeed?: {} | undefined; DownloadSpeed?: {} | undefined } | undefined
            Provider?: string | undefined
          }
        }
        output: UpdateLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peerings/:peeringId': {
      $delete: {
        input: { param: { peeringId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePeeringResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource-policy/:resourceArn': {
      $delete: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PolicyDocument: string } }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/sites/:siteId': {
      $delete: {
        input: { param: { globalNetworkId: string; siteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteSiteResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { globalNetworkId: string; siteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Description?: string | undefined
            Location?:
              | { Address?: {} | undefined; Latitude?: {} | undefined; Longitude?: {} | undefined }
              | undefined
          }
        }
        output: UpdateSiteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/transit-gateway-registrations/:transitGatewayArn': {
      $delete: {
        input: { param: { globalNetworkId: string; transitGatewayArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeregisterTransitGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/connect-peer-associations/:connectPeerId': {
      $delete: {
        input: { param: { globalNetworkId: string; connectPeerId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/customer-gateway-associations/:customerGatewayArn': {
      $delete: {
        input: { param: { globalNetworkId: string; customerGatewayArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateCustomerGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/link-associations#deviceId&linkId': {
      $delete: {
        input: { param: { globalNetworkId: string } } & {
          query: { deviceId: string; linkId: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/transit-gateway-connect-peer-associations/:transitGatewayConnectPeerArn': {
      $delete: {
        input: { param: { globalNetworkId: string; transitGatewayConnectPeerArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateTransitGatewayConnectPeerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-change-sets/:policyVersionId/execute': {
      $post: {
        input: { param: { coreNetworkId: string; policyVersionId: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExecuteCoreNetworkChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connect-attachments/:attachmentId': {
      $get: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-change-events/:policyVersionId': {
      $get: {
        input: { param: { coreNetworkId: string; policyVersionId: number } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCoreNetworkChangeEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-change-sets/:policyVersionId': {
      $get: {
        input: { param: { coreNetworkId: string; policyVersionId: number } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCoreNetworkChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-policy': {
      $get: {
        input: { param: { coreNetworkId: string } } & {
          query: { policyVersionId?: number | undefined; alias?: 'LIVE' | 'LATEST' | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCoreNetworkPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { coreNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PolicyDocument: string
            Description?: string | undefined
            LatestVersionId?: number | undefined
            ClientToken?: string | undefined
          }
        }
        output: PutCoreNetworkPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-resource-count': {
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            resourceType?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetNetworkResourceCountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-resource-relationships': {
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            coreNetworkId?: string | undefined
            registeredGatewayArn?: string | undefined
            awsRegion?: string | undefined
            accountId?: string | undefined
            resourceType?: string | undefined
            resourceArn?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetNetworkResourceRelationshipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-resources': {
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            coreNetworkId?: string | undefined
            registeredGatewayArn?: string | undefined
            awsRegion?: string | undefined
            accountId?: string | undefined
            resourceType?: string | undefined
            resourceArn?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetNetworkResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-routes': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            RouteTableIdentifier: {
              TransitGatewayRouteTableArn?: {} | undefined
              CoreNetworkSegmentEdge?:
                | {
                    CoreNetworkId?: {} | undefined
                    SegmentName?: {} | undefined
                    EdgeLocation?: {} | undefined
                  }
                | undefined
            }
            ExactCidrMatches?: ConstrainedString[] | undefined
            LongestPrefixMatches?: ConstrainedString[] | undefined
            SubnetOfMatches?: ConstrainedString[] | undefined
            SupernetOfMatches?: ConstrainedString[] | undefined
            PrefixListIds?: ConstrainedString[] | undefined
            States?: RouteState[] | undefined
            Types?: RouteType[] | undefined
            DestinationFilters?: { [x: string]: FilterValues } | undefined
          }
        }
        output: GetNetworkRoutesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-telemetry': {
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            coreNetworkId?: string | undefined
            registeredGatewayArn?: string | undefined
            awsRegion?: string | undefined
            accountId?: string | undefined
            resourceType?: string | undefined
            resourceArn?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetNetworkTelemetryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/route-analyses/:routeAnalysisId': {
      $get: {
        input: { param: { globalNetworkId: string; routeAnalysisId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRouteAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/site-to-site-vpn-attachments/:attachmentId': {
      $get: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSiteToSiteVpnAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transit-gateway-peerings/:peeringId': {
      $get: {
        input: { param: { peeringId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetTransitGatewayPeeringResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/transit-gateway-registrations': {
      $get: {
        input: { param: { globalNetworkId: string } } & {
          query: {
            transitGatewayArns?: TransitGatewayArn[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetTransitGatewayRegistrationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TransitGatewayArn: string } }
        output: RegisterTransitGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transit-gateway-route-table-attachments/:attachmentId': {
      $get: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetTransitGatewayRouteTableAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc-attachments/:attachmentId': {
      $get: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVpcAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AddSubnetArns?: SubnetArn[] | undefined
            RemoveSubnetArns?: SubnetArn[] | undefined
            Options?:
              | { Ipv6Support?: {} | undefined; ApplianceModeSupport?: {} | undefined }
              | undefined
          }
        }
        output: UpdateVpcAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments': {
      $get: {
        input: {
          query: {
            coreNetworkId?: string | undefined
            attachmentType?:
              | 'CONNECT'
              | 'SITE_TO_SITE_VPN'
              | 'VPC'
              | 'TRANSIT_GATEWAY_ROUTE_TABLE'
              | undefined
            edgeLocation?: string | undefined
            state?:
              | 'REJECTED'
              | 'PENDING_ATTACHMENT_ACCEPTANCE'
              | 'CREATING'
              | 'FAILED'
              | 'AVAILABLE'
              | 'UPDATING'
              | 'PENDING_NETWORK_UPDATE'
              | 'PENDING_TAG_ACCEPTANCE'
              | 'DELETING'
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-policy-versions': {
      $get: {
        input: { param: { coreNetworkId: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListCoreNetworkPolicyVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/service-access': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListOrganizationServiceAccessStatusResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Action: string } }
        output: StartOrganizationServiceAccessUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peerings': {
      $get: {
        input: {
          query: {
            coreNetworkId?: string | undefined
            peeringType?: 'TRANSIT_GATEWAY' | undefined
            edgeLocation?: string | undefined
            state?: 'CREATING' | 'FAILED' | 'AVAILABLE' | 'DELETING' | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPeeringsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments/:attachmentId/reject': {
      $post: {
        input: { param: { attachmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RejectAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/core-networks/:coreNetworkId/core-network-policy-versions/:policyVersionId/restore': {
      $post: {
        input: { param: { coreNetworkId: string; policyVersionId: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RestoreCoreNetworkPolicyVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/route-analyses': {
      $post: {
        input: { param: { globalNetworkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Source: { TransitGatewayAttachmentArn?: {} | undefined; IpAddress?: {} | undefined }
            Destination: {
              TransitGatewayAttachmentArn?: {} | undefined
              IpAddress?: {} | undefined
            }
            IncludeReturnPath?: boolean | undefined
            UseMiddleboxes?: boolean | undefined
          }
        }
        output: StartRouteAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/global-networks/:globalNetworkId/network-resources/:resourceArn/metadata': {
      $patch: {
        input: { param: { globalNetworkId: string; resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Metadata: { [x: string]: ConstrainedString } } }
        output: UpdateNetworkResourceMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
