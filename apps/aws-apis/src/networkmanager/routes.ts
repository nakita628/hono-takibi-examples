import { createRoute, z } from '@hono/zod-openapi'

const CoreNetworkIdSchema = z
  .string()
  .regex(/^core-network-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('CoreNetworkId')

const CoreNetworkArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('CoreNetworkArn')

const AttachmentIdSchema = z
  .string()
  .regex(/^attachment-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('AttachmentId')

const AWSAccountIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .length(12)
  .openapi('AWSAccountId')

const AttachmentTypeSchema = z
  .enum(['CONNECT', 'SITE_TO_SITE_VPN', 'VPC', 'TRANSIT_GATEWAY_ROUTE_TABLE'])
  .openapi('AttachmentType')

const AttachmentStateSchema = z
  .enum([
    'REJECTED',
    'PENDING_ATTACHMENT_ACCEPTANCE',
    'CREATING',
    'FAILED',
    'AVAILABLE',
    'UPDATING',
    'PENDING_NETWORK_UPDATE',
    'PENDING_TAG_ACCEPTANCE',
    'DELETING',
  ])
  .openapi('AttachmentState')

const ExternalRegionCodeSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(63)
  .openapi('ExternalRegionCode')

const ResourceArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(1500)
  .openapi('ResourceArn')

const IntegerSchema = z.int().openapi('Integer')

const ConstrainedStringSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(256)
  .openapi('ConstrainedString')

const TagKeySchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.exactOptional().openapi({
      description: '<p>The tag key.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Value: TagValueSchema.exactOptional().openapi({
      description: '<p>The tag value.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
  })
  .openapi({ description: 'Describes a tag.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ProposedSegmentChangeSchema = z
  .object({
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags that changed for the segment.',
    }),
    AttachmentPolicyRuleNumber: IntegerSchema.exactOptional().openapi({
      description: 'The rule number in the policy document that applies to this change.',
    }),
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The name of the segment to change.',
    }),
  })
  .openapi({
    description:
      'Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted. ',
    required: [],
  })
  .openapi('ProposedSegmentChange')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const AttachmentSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    CoreNetworkArn: CoreNetworkArnSchema.exactOptional().openapi({
      description: 'The ARN of a core network.',
    }),
    AttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of the attachment.',
    }),
    OwnerAccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The ID of the attachment account owner.',
    }),
    AttachmentType: AttachmentTypeSchema.exactOptional().openapi({
      description: 'The type of attachment.',
    }),
    State: AttachmentStateSchema.exactOptional().openapi({
      description: 'The state of the attachment.',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Region where the edge is located.',
    }),
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The attachment resource ARN.',
    }),
    AttachmentPolicyRuleNumber: IntegerSchema.exactOptional().openapi({
      description: 'The policy rule number associated with the attachment.',
    }),
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The name of the segment attachment.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags associated with the attachment.',
    }),
    ProposedSegmentChange: ProposedSegmentChangeSchema.exactOptional().openapi({
      description: 'The attachment to move from one segment to another.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the attachment was created.',
    }),
    UpdatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the attachment was last updated.',
    }),
  })
  .openapi({ description: 'Describes a core network attachment.', required: [] })
  .openapi('Attachment')

const AcceptAttachmentResponseSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'The response to the attachment request. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('AcceptAttachmentResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ConnectPeerIdSchema = z
  .string()
  .regex(/^connect-peer-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('ConnectPeerId')

const GlobalNetworkIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('GlobalNetworkId')

const DeviceIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('DeviceId')

const LinkIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('LinkId')

const ConnectPeerAssociationStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'DELETED'])
  .openapi('ConnectPeerAssociationState')

const ConnectPeerAssociationSchema = z
  .object({
    ConnectPeerId: ConnectPeerIdSchema.exactOptional().openapi({
      description: 'The ID of the Connect peer.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    DeviceId: DeviceIdSchema.exactOptional().openapi({
      description: 'The ID of the device to connect to.',
    }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
    State: ConnectPeerAssociationStateSchema.exactOptional().openapi({
      description: 'The state of the Connect peer association.',
    }),
  })
  .openapi({ description: 'Describes a core network Connect peer association.', required: [] })
  .openapi('ConnectPeerAssociation')

const AssociateConnectPeerResponseSchema = z
  .object({
    ConnectPeerAssociation: ConnectPeerAssociationSchema.exactOptional().openapi({
      description: 'The response to the Connect peer request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateConnectPeerResponse')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CustomerGatewayArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('CustomerGatewayArn')

const CustomerGatewayAssociationStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'DELETED'])
  .openapi('CustomerGatewayAssociationState')

const CustomerGatewayAssociationSchema = z
  .object({
    CustomerGatewayArn: CustomerGatewayArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the customer gateway.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    DeviceId: DeviceIdSchema.exactOptional().openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
    State: CustomerGatewayAssociationStateSchema.exactOptional().openapi({
      description: 'The association state.',
    }),
  })
  .openapi({
    description: 'Describes the association between a customer gateway, a device, and a link.',
    required: [],
  })
  .openapi('CustomerGatewayAssociation')

const AssociateCustomerGatewayResponseSchema = z
  .object({
    CustomerGatewayAssociation: CustomerGatewayAssociationSchema.exactOptional().openapi({
      description: 'The customer gateway association.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateCustomerGatewayResponse')

const LinkAssociationStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'DELETED'])
  .openapi('LinkAssociationState')

const LinkAssociationSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    DeviceId: DeviceIdSchema.exactOptional().openapi({
      description: 'The device ID for the link association.',
    }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
    LinkAssociationState: LinkAssociationStateSchema.exactOptional().openapi({
      description: 'The state of the association.',
    }),
  })
  .openapi({ description: 'Describes the association between a device and a link.', required: [] })
  .openapi('LinkAssociation')

const AssociateLinkResponseSchema = z
  .object({
    LinkAssociation: LinkAssociationSchema.exactOptional().openapi({
      description: 'The link association.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateLinkResponse')

const TransitGatewayConnectPeerArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('TransitGatewayConnectPeerArn')

const TransitGatewayConnectPeerAssociationStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'DELETED'])
  .openapi('TransitGatewayConnectPeerAssociationState')

const TransitGatewayConnectPeerAssociationSchema = z
  .object({
    TransitGatewayConnectPeerArn: TransitGatewayConnectPeerArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the transit gateway Connect peer.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    DeviceId: DeviceIdSchema.exactOptional().openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
    State: TransitGatewayConnectPeerAssociationStateSchema.exactOptional().openapi({
      description: 'The state of the association.',
    }),
  })
  .openapi({ description: 'Describes a transit gateway Connect peer association.', required: [] })
  .openapi('TransitGatewayConnectPeerAssociation')

const AssociateTransitGatewayConnectPeerResponseSchema = z
  .object({
    TransitGatewayConnectPeerAssociation:
      TransitGatewayConnectPeerAssociationSchema.exactOptional().openapi({
        description: 'The transit gateway Connect peer association.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AssociateTransitGatewayConnectPeerResponse')

const TunnelProtocolSchema = z.literal('GRE').openapi('TunnelProtocol')

const ConnectAttachmentOptionsSchema = z
  .object({
    Protocol: TunnelProtocolSchema.exactOptional().openapi({
      description: 'The protocol used for the attachment connection.',
    }),
  })
  .openapi({ description: 'Describes a core network Connect attachment options.', required: [] })
  .openapi('ConnectAttachmentOptions')

const ConnectAttachmentSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'The attachment details.',
    }),
    TransportAttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of the transport attachment.',
    }),
    Options: ConnectAttachmentOptionsSchema.exactOptional().openapi({
      description: 'Options for connecting an attachment.',
    }),
  })
  .openapi({ description: 'Describes a core network Connect attachment.', required: [] })
  .openapi('ConnectAttachment')

const CreateConnectAttachmentResponseSchema = z
  .object({
    ConnectAttachment: ConnectAttachmentSchema.exactOptional().openapi({
      description: 'The response to a Connect attachment request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectAttachmentResponse')

const ConnectPeerStateSchema = z
  .enum(['CREATING', 'FAILED', 'AVAILABLE', 'DELETING'])
  .openapi('ConnectPeerState')

const IPAddressSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(50)
  .openapi('IPAddress')

const ConstrainedStringListSchema = z
  .array(ConstrainedStringSchema)
  .openapi('ConstrainedStringList')

const LongSchema = z.int().openapi('Long')

const ConnectPeerBgpConfigurationSchema = z
  .object({
    CoreNetworkAsn: LongSchema.exactOptional().openapi({
      description: 'The ASN of the Coret Network.',
    }),
    PeerAsn: LongSchema.exactOptional().openapi({ description: 'The ASN of the Connect peer.' }),
    CoreNetworkAddress: IPAddressSchema.exactOptional().openapi({
      description: 'The address of a core network.',
    }),
    PeerAddress: IPAddressSchema.exactOptional().openapi({
      description: 'The address of a core network Connect peer.',
    }),
  })
  .openapi({ description: 'Describes a core network BGP configuration.', required: [] })
  .openapi('ConnectPeerBgpConfiguration')

const ConnectPeerBgpConfigurationListSchema = z
  .array(ConnectPeerBgpConfigurationSchema)
  .openapi('ConnectPeerBgpConfigurationList')

const ConnectPeerConfigurationSchema = z
  .object({
    CoreNetworkAddress: IPAddressSchema.exactOptional().openapi({
      description: 'The IP address of a core network.',
    }),
    PeerAddress: IPAddressSchema.exactOptional().openapi({
      description: 'The IP address of the Connect peer.',
    }),
    InsideCidrBlocks: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The inside IP addresses used for a Connect peer configuration.',
    }),
    Protocol: TunnelProtocolSchema.exactOptional().openapi({
      description: 'The protocol used for a Connect peer configuration.',
    }),
    BgpConfigurations: ConnectPeerBgpConfigurationListSchema.exactOptional().openapi({
      description: 'The Connect peer BGP configurations.',
    }),
  })
  .openapi({ description: 'Describes a core network Connect peer configuration.', required: [] })
  .openapi('ConnectPeerConfiguration')

const ConnectPeerSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    ConnectAttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of the attachment to connect.',
    }),
    ConnectPeerId: ConnectPeerIdSchema.exactOptional().openapi({
      description: 'The ID of the Connect peer.',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Connect peer Regions where edges are located.',
    }),
    State: ConnectPeerStateSchema.exactOptional().openapi({
      description: 'The state of the Connect peer.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the Connect peer was created.',
    }),
    Configuration: ConnectPeerConfigurationSchema.exactOptional().openapi({
      description: 'The configuration of the Connect peer.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the Connect peer.',
    }),
  })
  .openapi({ description: 'Describes a core network Connect peer.', required: [] })
  .openapi('ConnectPeer')

const CreateConnectPeerResponseSchema = z
  .object({
    ConnectPeer: ConnectPeerSchema.exactOptional().openapi({
      description: 'The response to the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectPeerResponse')

const ConnectionIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('ConnectionId')

const ConnectionArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('ConnectionArn')

const ConnectionStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'UPDATING'])
  .openapi('ConnectionState')

const ConnectionSchema = z
  .object({
    ConnectionId: ConnectionIdSchema.exactOptional().openapi({
      description: 'The ID of the connection.',
    }),
    ConnectionArn: ConnectionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the connection.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    DeviceId: DeviceIdSchema.exactOptional().openapi({
      description: 'The ID of the first device in the connection.',
    }),
    ConnectedDeviceId: DeviceIdSchema.exactOptional().openapi({
      description: 'The ID of the second device in the connection.',
    }),
    LinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the first device in the connection.',
    }),
    ConnectedLinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the second device in the connection.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the connection.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the connection was created.',
    }),
    State: ConnectionStateSchema.exactOptional().openapi({
      description: 'The state of the connection.',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the connection.' }),
  })
  .openapi({ description: 'Describes a connection.', required: [] })
  .openapi('Connection')

const CreateConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.exactOptional().openapi({
      description: 'Information about the connection.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectionResponse')

const CoreNetworkStateSchema = z
  .enum(['CREATING', 'UPDATING', 'AVAILABLE', 'DELETING'])
  .openapi('CoreNetworkState')

const ExternalRegionCodeListSchema = z
  .array(ExternalRegionCodeSchema)
  .openapi('ExternalRegionCodeList')

const CoreNetworkSegmentSchema = z
  .object({
    Name: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The name of a core network segment.',
    }),
    EdgeLocations: ExternalRegionCodeListSchema.exactOptional().openapi({
      description: 'The Regions where the edges are located.',
    }),
    SharedSegments: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The shared segments of a core network.',
    }),
  })
  .openapi({
    description:
      'Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.',
    required: [],
  })
  .openapi('CoreNetworkSegment')

const CoreNetworkSegmentListSchema = z
  .array(CoreNetworkSegmentSchema)
  .openapi('CoreNetworkSegmentList')

const CoreNetworkEdgeSchema = z
  .object({
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Region where a core network edge is located.',
    }),
    Asn: LongSchema.exactOptional().openapi({ description: 'The ASN of a core network edge.' }),
    InsideCidrBlocks: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The inside IP addresses used for core network edges.',
    }),
  })
  .openapi({ description: 'Describes a core network edge.', required: [] })
  .openapi('CoreNetworkEdge')

const CoreNetworkEdgeListSchema = z.array(CoreNetworkEdgeSchema).openapi('CoreNetworkEdgeList')

const CoreNetworkSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network that your core network is a part of. ',
    }),
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    CoreNetworkArn: CoreNetworkArnSchema.exactOptional().openapi({
      description: 'The ARN of a core network.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of a core network.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when a core network was created.',
    }),
    State: CoreNetworkStateSchema.exactOptional().openapi({
      description: 'The current state of a core network.',
    }),
    Segments: CoreNetworkSegmentListSchema.exactOptional().openapi({
      description: 'The segments within a core network.',
    }),
    Edges: CoreNetworkEdgeListSchema.exactOptional().openapi({
      description: 'The edges within a core network.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with a core network.',
    }),
  })
  .openapi({ description: 'Describes a core network.', required: [] })
  .openapi('CoreNetwork')

const CreateCoreNetworkResponseSchema = z
  .object({
    CoreNetwork: CoreNetworkSchema.exactOptional().openapi({
      description: 'Returns details about a core network.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateCoreNetworkResponse')

const CoreNetworkPolicyExceptionSchema = z.any().openapi('CoreNetworkPolicyException')

const DeviceArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('DeviceArn')

const SubnetArnSchema = z
  .string()
  .regex(/^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:subnet\/subnet-[0-9a-f]{8,17}$|^$/)
  .min(0)
  .max(500)
  .openapi('SubnetArn')

const AWSLocationSchema = z
  .object({
    Zone: ConstrainedStringSchema.exactOptional().openapi({
      description:
        'The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.',
    }),
    SubnetArn: SubnetArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the subnet that the device is located in.',
    }),
  })
  .openapi({ description: 'Specifies a location in Amazon Web Services.', required: [] })
  .openapi('AWSLocation')

const LocationSchema = z
  .object({
    Address: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The physical address.',
    }),
    Latitude: ConstrainedStringSchema.exactOptional().openapi({ description: 'The latitude.' }),
    Longitude: ConstrainedStringSchema.exactOptional().openapi({ description: 'The longitude.' }),
  })
  .openapi({ description: 'Describes a location.', required: [] })
  .openapi('Location')

const SiteIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('SiteId')

const DeviceStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'UPDATING'])
  .openapi('DeviceState')

const DeviceSchema = z
  .object({
    DeviceId: DeviceIdSchema.exactOptional().openapi({ description: 'The ID of the device.' }),
    DeviceArn: DeviceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the device.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    AWSLocation: AWSLocationSchema.exactOptional().openapi({
      description: 'The Amazon Web Services location of the device.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the device.',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({ description: 'The device type.' }),
    Vendor: ConstrainedStringSchema.exactOptional().openapi({ description: 'The device vendor.' }),
    Model: ConstrainedStringSchema.exactOptional().openapi({ description: 'The device model.' }),
    SerialNumber: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The device serial number.',
    }),
    Location: LocationSchema.exactOptional().openapi({ description: 'The site location.' }),
    SiteId: SiteIdSchema.exactOptional().openapi({ description: 'The site ID.' }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the site was created.',
    }),
    State: DeviceStateSchema.exactOptional().openapi({ description: 'The device state.' }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the device.' }),
  })
  .openapi({ description: 'Describes a device.', required: [] })
  .openapi('Device')

const CreateDeviceResponseSchema = z
  .object({
    Device: DeviceSchema.exactOptional().openapi({ description: 'Information about the device.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDeviceResponse')

const GlobalNetworkArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('GlobalNetworkArn')

const GlobalNetworkStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'UPDATING'])
  .openapi('GlobalNetworkState')

const GlobalNetworkSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    GlobalNetworkArn: GlobalNetworkArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the global network.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the global network.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the global network was created.',
    }),
    State: GlobalNetworkStateSchema.exactOptional().openapi({
      description: 'The state of the global network.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags for the global network.',
    }),
  })
  .openapi({
    description:
      'Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.',
    required: [],
  })
  .openapi('GlobalNetwork')

const CreateGlobalNetworkResponseSchema = z
  .object({
    GlobalNetwork: GlobalNetworkSchema.exactOptional().openapi({
      description: 'Information about the global network object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateGlobalNetworkResponse')

const LinkArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('LinkArn')

const BandwidthSchema = z
  .object({
    UploadSpeed: IntegerSchema.exactOptional().openapi({ description: 'Upload speed in Mbps.' }),
    DownloadSpeed: IntegerSchema.exactOptional().openapi({
      description: 'Download speed in Mbps.',
    }),
  })
  .openapi({ description: 'Describes bandwidth information.', required: [] })
  .openapi('Bandwidth')

const LinkStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'UPDATING'])
  .openapi('LinkState')

const LinkSchema = z
  .object({
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
    LinkArn: LinkArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the link.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    SiteId: SiteIdSchema.exactOptional().openapi({ description: 'The ID of the site.' }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the link.',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({ description: 'The type of the link.' }),
    Bandwidth: BandwidthSchema.exactOptional().openapi({
      description: 'The bandwidth for the link.',
    }),
    Provider: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The provider of the link.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the link was created.',
    }),
    State: LinkStateSchema.exactOptional().openapi({ description: 'The state of the link.' }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the link.' }),
  })
  .openapi({ description: 'Describes a link.', required: [] })
  .openapi('Link')

const CreateLinkResponseSchema = z
  .object({
    Link: LinkSchema.exactOptional().openapi({ description: 'Information about the link.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLinkResponse')

const SiteArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('SiteArn')

const SiteStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'UPDATING'])
  .openapi('SiteState')

const SiteSchema = z
  .object({
    SiteId: SiteIdSchema.exactOptional().openapi({ description: 'The ID of the site.' }),
    SiteArn: SiteArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the site.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the site.',
    }),
    Location: LocationSchema.exactOptional().openapi({ description: 'The location of the site.' }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the site was created.',
    }),
    State: SiteStateSchema.exactOptional().openapi({ description: 'The state of the site.' }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the site.' }),
  })
  .openapi({ description: 'Describes a site.', required: [] })
  .openapi('Site')

const CreateSiteResponseSchema = z
  .object({
    Site: SiteSchema.exactOptional().openapi({ description: 'Information about the site.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSiteResponse')

const VpnConnectionArnSchema = z
  .string()
  .regex(/^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpn-connection\/vpn-[0-9a-f]{8,17}$/)
  .min(0)
  .max(500)
  .openapi('VpnConnectionArn')

const SiteToSiteVpnAttachmentSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'Provides details about a site-to-site VPN attachment.',
    }),
    VpnConnectionArn: VpnConnectionArnSchema.exactOptional().openapi({
      description: 'The ARN of the site-to-site VPN attachment. ',
    }),
  })
  .openapi({ description: 'Creates a site-to-site VPN attachment.', required: [] })
  .openapi('SiteToSiteVpnAttachment')

const CreateSiteToSiteVpnAttachmentResponseSchema = z
  .object({
    SiteToSiteVpnAttachment: SiteToSiteVpnAttachmentSchema.exactOptional().openapi({
      description: 'Details about a site-to-site VPN attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSiteToSiteVpnAttachmentResponse')

const PeeringIdSchema = z
  .string()
  .regex(/^peering-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('PeeringId')

const PeeringTypeSchema = z.literal('TRANSIT_GATEWAY').openapi('PeeringType')

const PeeringStateSchema = z
  .enum(['CREATING', 'FAILED', 'AVAILABLE', 'DELETING'])
  .openapi('PeeringState')

const PeeringSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the core network for the peering request.',
    }),
    CoreNetworkArn: CoreNetworkArnSchema.exactOptional().openapi({
      description: 'The ARN of a core network.',
    }),
    PeeringId: PeeringIdSchema.exactOptional().openapi({
      description: 'The ID of the peering attachment. ',
    }),
    OwnerAccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The ID of the account owner.',
    }),
    PeeringType: PeeringTypeSchema.exactOptional().openapi({
      description: 'The type of peering. This will be <code>TRANSIT_GATEWAY</code>.',
    }),
    State: PeeringStateSchema.exactOptional().openapi({
      description: 'The current state of the peering connection. ',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The edge location for the peer.',
    }),
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The resource ARN of the peer.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the peering.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the attachment peer was created.',
    }),
  })
  .openapi({ description: 'Describes a peering connection.', required: [] })
  .openapi('Peering')

const TransitGatewayArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('TransitGatewayArn')

const TransitGatewayPeeringAttachmentIdSchema = z
  .string()
  .regex(/^tgw-attach-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('TransitGatewayPeeringAttachmentId')

const TransitGatewayPeeringSchema = z
  .object({
    Peering: PeeringSchema.exactOptional().openapi({
      description: 'Describes a transit gateway peer connection.',
    }),
    TransitGatewayArn: TransitGatewayArnSchema.exactOptional().openapi({
      description: 'The ARN of the transit gateway.',
    }),
    TransitGatewayPeeringAttachmentId:
      TransitGatewayPeeringAttachmentIdSchema.exactOptional().openapi({
        description: 'The ID of the transit gateway peering attachment.',
      }),
  })
  .openapi({ description: 'Describes a transit gateway peering attachment.', required: [] })
  .openapi('TransitGatewayPeering')

const CreateTransitGatewayPeeringResponseSchema = z
  .object({
    TransitGatewayPeering: TransitGatewayPeeringSchema.exactOptional().openapi({
      description: 'Returns information about the transit gateway peering connection request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateTransitGatewayPeeringResponse')

const TransitGatewayRouteTableArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('TransitGatewayRouteTableArn')

const TransitGatewayRouteTableAttachmentSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional(),
    PeeringId: PeeringIdSchema.exactOptional().openapi({
      description: 'The ID of the peering attachment.',
    }),
    TransitGatewayRouteTableArn: TransitGatewayRouteTableArnSchema.exactOptional().openapi({
      description:
        'The ARN of the transit gateway attachment route table. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.',
    }),
  })
  .openapi({ description: 'Describes a transit gateway route table attachment.', required: [] })
  .openapi('TransitGatewayRouteTableAttachment')

const CreateTransitGatewayRouteTableAttachmentResponseSchema = z
  .object({
    TransitGatewayRouteTableAttachment:
      TransitGatewayRouteTableAttachmentSchema.exactOptional().openapi({
        description:
          'The route table associated with the create transit gateway route table attachment request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateTransitGatewayRouteTableAttachmentResponse')

const SubnetArnListSchema = z.array(SubnetArnSchema).openapi('SubnetArnList')

const BooleanSchema = z.boolean().openapi('Boolean')

const VpcOptionsSchema = z
  .object({
    Ipv6Support: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether IPv6 is supported.',
    }),
    ApplianceModeSupport: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.',
    }),
  })
  .openapi({ description: 'Describes the VPC options.', required: [] })
  .openapi('VpcOptions')

const VpcAttachmentSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'Provides details about the VPC attachment.',
    }),
    SubnetArns: SubnetArnListSchema.exactOptional().openapi({ description: 'The subnet ARNs.' }),
    Options: VpcOptionsSchema.exactOptional().openapi({
      description: 'Provides details about the VPC attachment.',
    }),
  })
  .openapi({ description: 'Describes a VPC attachment.', required: [] })
  .openapi('VpcAttachment')

const CreateVpcAttachmentResponseSchema = z
  .object({
    VpcAttachment: VpcAttachmentSchema.exactOptional().openapi({
      description: 'Provides details about the VPC attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateVpcAttachmentResponse')

const DeleteAttachmentResponseSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'Information about the deleted attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteAttachmentResponse')

const DeleteConnectPeerResponseSchema = z
  .object({
    ConnectPeer: ConnectPeerSchema.exactOptional().openapi({
      description: 'Information about the deleted Connect peer.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteConnectPeerResponse')

const DeleteConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.exactOptional().openapi({
      description: 'Information about the connection.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteConnectionResponse')

const DeleteCoreNetworkResponseSchema = z
  .object({
    CoreNetwork: CoreNetworkSchema.exactOptional().openapi({
      description: 'Information about the deleted core network.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteCoreNetworkResponse')

const CoreNetworkPolicyAliasSchema = z.enum(['LIVE', 'LATEST']).openapi('CoreNetworkPolicyAlias')

const ChangeSetStateSchema = z
  .enum([
    'PENDING_GENERATION',
    'FAILED_GENERATION',
    'READY_TO_EXECUTE',
    'EXECUTING',
    'EXECUTION_SUCCEEDED',
    'OUT_OF_DATE',
  ])
  .openapi('ChangeSetState')

const ServerSideStringSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('ServerSideString')

const CoreNetworkPolicyErrorSchema = z
  .object({
    ErrorCode: ServerSideStringSchema.openapi({
      description: 'The error code associated with a core network policy error.',
    }),
    Message: ServerSideStringSchema.openapi({
      description: 'The message associated with a core network policy error code.',
    }),
    Path: ServerSideStringSchema.exactOptional().openapi({
      description: 'The JSON path where the error was discovered in the policy document.',
    }),
  })
  .openapi({
    required: ['ErrorCode', 'Message'],
    description: 'Provides details about an error in a core network policy.',
  })
  .openapi('CoreNetworkPolicyError')

const CoreNetworkPolicyErrorListSchema = z
  .array(CoreNetworkPolicyErrorSchema)
  .openapi('CoreNetworkPolicyErrorList')

const CoreNetworkPolicyDocumentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('CoreNetworkPolicyDocument')

const CoreNetworkPolicySchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    PolicyVersionId: IntegerSchema.exactOptional().openapi({
      description: 'The ID of the policy version.',
    }),
    Alias: CoreNetworkPolicyAliasSchema.exactOptional().openapi({
      description:
        'Whether a core network policy is the current LIVE policy or the most recently submitted policy.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of a core network policy.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when a core network policy was created.',
    }),
    ChangeSetState: ChangeSetStateSchema.exactOptional().openapi({
      description: 'The state of a core network policy.',
    }),
    PolicyErrors: CoreNetworkPolicyErrorListSchema.exactOptional().openapi({
      description: 'Describes any errors in a core network policy.',
    }),
    PolicyDocument: CoreNetworkPolicyDocumentSchema.exactOptional().openapi({
      description: 'Describes a core network policy.',
    }),
  })
  .openapi({
    description: 'Describes a core network policy. You can have only one LIVE Core Policy.',
    required: [],
  })
  .openapi('CoreNetworkPolicy')

const DeleteCoreNetworkPolicyVersionResponseSchema = z
  .object({
    CoreNetworkPolicy: CoreNetworkPolicySchema.exactOptional().openapi({
      description: 'Returns information about the deleted policy version. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteCoreNetworkPolicyVersionResponse')

const DeleteDeviceResponseSchema = z
  .object({
    Device: DeviceSchema.exactOptional().openapi({ description: 'Information about the device.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteDeviceResponse')

const DeleteGlobalNetworkResponseSchema = z
  .object({
    GlobalNetwork: GlobalNetworkSchema.exactOptional().openapi({
      description: 'Information about the global network.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteGlobalNetworkResponse')

const DeleteLinkResponseSchema = z
  .object({
    Link: LinkSchema.exactOptional().openapi({ description: 'Information about the link.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteLinkResponse')

const DeletePeeringResponseSchema = z
  .object({
    Peering: PeeringSchema.exactOptional().openapi({
      description: 'Information about a deleted peering connection.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeletePeeringResponse')

const DeleteResourcePolicyResponseSchema = z.looseObject({}).openapi('DeleteResourcePolicyResponse')

const DeleteSiteResponseSchema = z
  .object({
    Site: SiteSchema.exactOptional().openapi({ description: 'Information about the site.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteSiteResponse')

const TransitGatewayRegistrationStateSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'DELETED', 'FAILED'])
  .openapi('TransitGatewayRegistrationState')

const TransitGatewayRegistrationStateReasonSchema = z
  .object({
    Code: TransitGatewayRegistrationStateSchema.exactOptional().openapi({
      description: 'The code for the state reason.',
    }),
    Message: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The message for the state reason.',
    }),
  })
  .openapi({ description: 'Describes the status of a transit gateway registration.', required: [] })
  .openapi('TransitGatewayRegistrationStateReason')

const TransitGatewayRegistrationSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    TransitGatewayArn: TransitGatewayArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the transit gateway.',
    }),
    State: TransitGatewayRegistrationStateReasonSchema.exactOptional().openapi({
      description: 'The state of the transit gateway registration.',
    }),
  })
  .openapi({
    description: 'Describes the registration of a transit gateway to a global network.',
    required: [],
  })
  .openapi('TransitGatewayRegistration')

const DeregisterTransitGatewayResponseSchema = z
  .object({
    TransitGatewayRegistration: TransitGatewayRegistrationSchema.exactOptional().openapi({
      description: 'The transit gateway registration information.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeregisterTransitGatewayResponse')

const GlobalNetworkListSchema = z.array(GlobalNetworkSchema).openapi('GlobalNetworkList')

const NextTokenSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(2048)
  .openapi('NextToken')

const DescribeGlobalNetworksResponseSchema = z
  .object({
    GlobalNetworks: GlobalNetworkListSchema.exactOptional().openapi({
      description: 'Information about the global networks.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeGlobalNetworksResponse')

const DisassociateConnectPeerResponseSchema = z
  .object({
    ConnectPeerAssociation: ConnectPeerAssociationSchema.exactOptional().openapi({
      description: 'Describes the Connect peer association.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateConnectPeerResponse')

const DisassociateCustomerGatewayResponseSchema = z
  .object({
    CustomerGatewayAssociation: CustomerGatewayAssociationSchema.exactOptional().openapi({
      description: 'Information about the customer gateway association.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateCustomerGatewayResponse')

const DisassociateLinkResponseSchema = z
  .object({
    LinkAssociation: LinkAssociationSchema.exactOptional().openapi({
      description: 'Information about the link association.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateLinkResponse')

const DisassociateTransitGatewayConnectPeerResponseSchema = z
  .object({
    TransitGatewayConnectPeerAssociation:
      TransitGatewayConnectPeerAssociationSchema.exactOptional().openapi({
        description: 'The transit gateway Connect peer association.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateTransitGatewayConnectPeerResponse')

const ExecuteCoreNetworkChangeSetResponseSchema = z
  .looseObject({})
  .openapi('ExecuteCoreNetworkChangeSetResponse')

const GetConnectAttachmentResponseSchema = z
  .object({
    ConnectAttachment: ConnectAttachmentSchema.exactOptional().openapi({
      description: 'Details about the Connect attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectAttachmentResponse')

const GetConnectPeerResponseSchema = z
  .object({
    ConnectPeer: ConnectPeerSchema.exactOptional().openapi({
      description: 'Returns information about a core network Connect peer.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectPeerResponse')

const ConnectPeerAssociationListSchema = z
  .array(ConnectPeerAssociationSchema)
  .openapi('ConnectPeerAssociationList')

const GetConnectPeerAssociationsResponseSchema = z
  .object({
    ConnectPeerAssociations: ConnectPeerAssociationListSchema.exactOptional().openapi({
      description: 'Displays a list of Connect peer associations.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectPeerAssociationsResponse')

const ConnectionListSchema = z.array(ConnectionSchema).openapi('ConnectionList')

const GetConnectionsResponseSchema = z
  .object({
    Connections: ConnectionListSchema.exactOptional().openapi({
      description: 'Information about the connections.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token to use for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectionsResponse')

const GetCoreNetworkResponseSchema = z
  .object({
    CoreNetwork: CoreNetworkSchema.exactOptional().openapi({
      description: 'Details about a core network.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreNetworkResponse')

const ChangeTypeSchema = z
  .enum([
    'CORE_NETWORK_SEGMENT',
    'CORE_NETWORK_EDGE',
    'ATTACHMENT_MAPPING',
    'ATTACHMENT_ROUTE_PROPAGATION',
    'ATTACHMENT_ROUTE_STATIC',
    'CORE_NETWORK_CONFIGURATION',
    'SEGMENTS_CONFIGURATION',
    'SEGMENT_ACTIONS_CONFIGURATION',
    'ATTACHMENT_POLICIES_CONFIGURATION',
  ])
  .openapi('ChangeType')

const ChangeActionSchema = z.enum(['ADD', 'MODIFY', 'REMOVE']).openapi('ChangeAction')

const ChangeStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETE', 'FAILED'])
  .openapi('ChangeStatus')

const CoreNetworkChangeEventValuesSchema = z
  .object({
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The edge location for the core network change event.',
    }),
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The segment name if the change event is associated with a segment.',
    }),
    AttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description:
        'The ID of the attachment if the change event is associated with an attachment. ',
    }),
    Cidr: ConstrainedStringSchema.exactOptional().openapi({
      description: 'For a <code>STATIC_ROUTE</code> event, this is the IP address.',
    }),
  })
  .openapi({ description: 'Describes a core network change event.', required: [] })
  .openapi('CoreNetworkChangeEventValues')

const CoreNetworkChangeEventSchema = z
  .object({
    Type: ChangeTypeSchema.exactOptional().openapi({
      description: 'Describes the type of change event. ',
    }),
    Action: ChangeActionSchema.exactOptional().openapi({
      description: 'The action taken for the change event.',
    }),
    IdentifierPath: ConstrainedStringSchema.exactOptional().openapi({
      description:
        'Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.',
    }),
    EventTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp for an event change in status.',
    }),
    Status: ChangeStatusSchema.exactOptional().openapi({
      description: 'The status of the core network change event.',
    }),
    Values: CoreNetworkChangeEventValuesSchema.exactOptional().openapi({
      description: 'Details of the change event.',
    }),
  })
  .openapi({
    description:
      'Describes a core network change event. This can be a change to a segment, attachment, route, etc.',
    required: [],
  })
  .openapi('CoreNetworkChangeEvent')

const CoreNetworkChangeEventListSchema = z
  .array(CoreNetworkChangeEventSchema)
  .openapi('CoreNetworkChangeEventList')

const GetCoreNetworkChangeEventsResponseSchema = z
  .object({
    CoreNetworkChangeEvents: CoreNetworkChangeEventListSchema.exactOptional().openapi({
      description: 'The response to <code>GetCoreNetworkChangeEventsRequest</code>.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreNetworkChangeEventsResponse')

const CoreNetworkChangeValuesSchema = z
  .object({
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The names of the segments in a core network.',
    }),
    EdgeLocations: ExternalRegionCodeListSchema.exactOptional().openapi({
      description: 'The Regions where edges are located in a core network. ',
    }),
    Asn: LongSchema.exactOptional().openapi({ description: 'The ASN of a core network.' }),
    Cidr: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The IP addresses used for a core network.',
    }),
    DestinationIdentifier: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the destination.',
    }),
    InsideCidrBlocks: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The inside IP addresses used for core network change values.',
    }),
    SharedSegments: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The shared segments for a core network change value. ',
    }),
  })
  .openapi({ description: 'Describes a core network change.', required: [] })
  .openapi('CoreNetworkChangeValues')

const CoreNetworkChangeSchema = z
  .object({
    Type: ChangeTypeSchema.exactOptional().openapi({ description: 'The type of change.' }),
    Action: ChangeActionSchema.exactOptional().openapi({
      description: 'The action to take for a core network.',
    }),
    Identifier: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The resource identifier.',
    }),
    PreviousValues: CoreNetworkChangeValuesSchema.exactOptional().openapi({
      description: 'The previous values for a core network.',
    }),
    NewValues: CoreNetworkChangeValuesSchema.exactOptional().openapi({
      description: 'The new value for a core network',
    }),
    IdentifierPath: ConstrainedStringSchema.exactOptional().openapi({
      description:
        'Uniquely identifies the path for a change within the changeset. For example, the <code>IdentifierPath</code> for a core network segment change might be <code>"CORE_NETWORK_SEGMENT/us-east-1/devsegment"</code>.',
    }),
  })
  .openapi({ description: 'Details describing a core network change.', required: [] })
  .openapi('CoreNetworkChange')

const CoreNetworkChangeListSchema = z
  .array(CoreNetworkChangeSchema)
  .openapi('CoreNetworkChangeList')

const GetCoreNetworkChangeSetResponseSchema = z
  .object({
    CoreNetworkChanges: CoreNetworkChangeListSchema.exactOptional().openapi({
      description: 'Describes a core network changes.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreNetworkChangeSetResponse')

const GetCoreNetworkPolicyResponseSchema = z
  .object({
    CoreNetworkPolicy: CoreNetworkPolicySchema.exactOptional().openapi({
      description: 'The details about a core network policy.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreNetworkPolicyResponse')

const CustomerGatewayAssociationListSchema = z
  .array(CustomerGatewayAssociationSchema)
  .openapi('CustomerGatewayAssociationList')

const GetCustomerGatewayAssociationsResponseSchema = z
  .object({
    CustomerGatewayAssociations: CustomerGatewayAssociationListSchema.exactOptional().openapi({
      description: 'The customer gateway associations.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCustomerGatewayAssociationsResponse')

const DeviceListSchema = z.array(DeviceSchema).openapi('DeviceList')

const GetDevicesResponseSchema = z
  .object({
    Devices: DeviceListSchema.exactOptional().openapi({ description: 'The devices.' }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDevicesResponse')

const LinkAssociationListSchema = z.array(LinkAssociationSchema).openapi('LinkAssociationList')

const GetLinkAssociationsResponseSchema = z
  .object({
    LinkAssociations: LinkAssociationListSchema.exactOptional().openapi({
      description: 'The link associations.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLinkAssociationsResponse')

const LinkListSchema = z.array(LinkSchema).openapi('LinkList')

const GetLinksResponseSchema = z
  .object({
    Links: LinkListSchema.exactOptional().openapi({ description: 'The links.' }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLinksResponse')

const NetworkResourceCountSchema = z
  .object({
    ResourceType: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The resource type.',
    }),
    Count: IntegerSchema.exactOptional().openapi({ description: 'The resource count.' }),
  })
  .openapi({ description: 'Describes a resource count.', required: [] })
  .openapi('NetworkResourceCount')

const NetworkResourceCountListSchema = z
  .array(NetworkResourceCountSchema)
  .openapi('NetworkResourceCountList')

const GetNetworkResourceCountsResponseSchema = z
  .object({
    NetworkResourceCounts: NetworkResourceCountListSchema.exactOptional().openapi({
      description: 'The count of resources.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkResourceCountsResponse')

const RelationshipSchema = z
  .object({
    From: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
    To: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
  })
  .openapi({ description: 'Describes a resource relationship.', required: [] })
  .openapi('Relationship')

const RelationshipListSchema = z.array(RelationshipSchema).openapi('RelationshipList')

const GetNetworkResourceRelationshipsResponseSchema = z
  .object({
    Relationships: RelationshipListSchema.exactOptional().openapi({
      description: 'The resource relationships.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkResourceRelationshipsResponse')

const NetworkResourceMetadataMapSchema = z
  .record(z.string(), ConstrainedStringSchema)
  .openapi('NetworkResourceMetadataMap')

const NetworkResourceSchema = z
  .object({
    RegisteredGatewayArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the gateway.',
    }),
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    AwsRegion: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Amazon Web Services Region.',
    }),
    AccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The Amazon Web Services account ID.',
    }),
    ResourceType: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>',
    }),
    ResourceId: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the resource.',
    }),
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
    Definition: ConstrainedStringSchema.exactOptional().openapi({
      description:
        'Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.',
    }),
    DefinitionTimestamp: DateTimeSchema.exactOptional().openapi({
      description: 'The time that the resource definition was retrieved.',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags.' }),
    Metadata: NetworkResourceMetadataMapSchema.exactOptional().openapi({
      description: 'The resource metadata.',
    }),
  })
  .openapi({ description: 'Describes a network resource.', required: [] })
  .openapi('NetworkResource')

const NetworkResourceListSchema = z.array(NetworkResourceSchema).openapi('NetworkResourceList')

const GetNetworkResourcesResponseSchema = z
  .object({
    NetworkResources: NetworkResourceListSchema.exactOptional().openapi({
      description: 'The network resources.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkResourcesResponse')

const CoreNetworkSegmentEdgeIdentifierSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The name of the segment edge.',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Region where the segment edge is located.',
    }),
  })
  .openapi({ description: 'Returns details about a core network edge.', required: [] })
  .openapi('CoreNetworkSegmentEdgeIdentifier')

const RouteTableTypeSchema = z
  .enum(['TRANSIT_GATEWAY_ROUTE_TABLE', 'CORE_NETWORK_SEGMENT'])
  .openapi('RouteTableType')

const TransitGatewayAttachmentIdSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(50)
  .openapi('TransitGatewayAttachmentId')

const NetworkRouteDestinationSchema = z
  .object({
    CoreNetworkAttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of a core network attachment.',
    }),
    TransitGatewayAttachmentId: TransitGatewayAttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of the transit gateway attachment.',
    }),
    SegmentName: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The name of the segment.',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The edge location for the network destination.',
    }),
    ResourceType: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The resource type.',
    }),
    ResourceId: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the resource.',
    }),
  })
  .openapi({ description: 'Describes the destination of a network route.', required: [] })
  .openapi('NetworkRouteDestination')

const NetworkRouteDestinationListSchema = z
  .array(NetworkRouteDestinationSchema)
  .openapi('NetworkRouteDestinationList')

const RouteStateSchema = z.enum(['ACTIVE', 'BLACKHOLE']).openapi('RouteState')

const RouteTypeSchema = z.enum(['PROPAGATED', 'STATIC']).openapi('RouteType')

const NetworkRouteSchema = z
  .object({
    DestinationCidrBlock: ConstrainedStringSchema.exactOptional().openapi({
      description: 'A unique identifier for the route, such as a CIDR block.',
    }),
    Destinations: NetworkRouteDestinationListSchema.exactOptional().openapi({
      description: 'The destinations.',
    }),
    PrefixListId: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the prefix list.',
    }),
    State: RouteStateSchema.exactOptional().openapi({
      description:
        'The route state. The possible values are <code>active</code> and <code>blackhole</code>.',
    }),
    Type: RouteTypeSchema.exactOptional().openapi({
      description:
        'The route type. The possible values are <code>propagated</code> and <code>static</code>.',
    }),
  })
  .openapi({ description: 'Describes a network route.', required: [] })
  .openapi('NetworkRoute')

const NetworkRouteListSchema = z.array(NetworkRouteSchema).openapi('NetworkRouteList')

const GetNetworkRoutesResponseSchema = z
  .object({
    RouteTableArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the route table.',
    }),
    CoreNetworkSegmentEdge: CoreNetworkSegmentEdgeIdentifierSchema.exactOptional().openapi({
      description: 'Describes a core network segment edge.',
    }),
    RouteTableType: RouteTableTypeSchema.exactOptional().openapi({
      description: 'The route table type.',
    }),
    RouteTableTimestamp: DateTimeSchema.exactOptional().openapi({
      description: 'The route table creation time.',
    }),
    NetworkRoutes: NetworkRouteListSchema.exactOptional().openapi({
      description: 'The network routes.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkRoutesResponse')

const FilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?-]*$/)
  .max(255)
  .openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const ConnectionTypeSchema = z.enum(['BGP', 'IPSEC']).openapi('ConnectionType')

const ConnectionStatusSchema = z.enum(['UP', 'DOWN']).openapi('ConnectionStatus')

const ConnectionHealthSchema = z
  .object({
    Type: ConnectionTypeSchema.exactOptional().openapi({ description: 'The connection type.' }),
    Status: ConnectionStatusSchema.exactOptional().openapi({
      description: 'The connection status.',
    }),
    Timestamp: DateTimeSchema.exactOptional().openapi({
      description: 'The time the status was last updated.',
    }),
  })
  .openapi({ description: 'Describes connection health.', required: [] })
  .openapi('ConnectionHealth')

const NetworkTelemetrySchema = z
  .object({
    RegisteredGatewayArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the gateway.',
    }),
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    AwsRegion: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Amazon Web Services Region.',
    }),
    AccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The Amazon Web Services account ID.',
    }),
    ResourceType: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The resource type.',
    }),
    ResourceId: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the resource.',
    }),
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
    Address: ConstrainedStringSchema.exactOptional().openapi({ description: 'The address.' }),
    Health: ConnectionHealthSchema.exactOptional().openapi({
      description: 'The connection health.',
    }),
  })
  .openapi({ description: 'Describes the telemetry information for a resource.', required: [] })
  .openapi('NetworkTelemetry')

const NetworkTelemetryListSchema = z.array(NetworkTelemetrySchema).openapi('NetworkTelemetryList')

const GetNetworkTelemetryResponseSchema = z
  .object({
    NetworkTelemetry: NetworkTelemetryListSchema.exactOptional().openapi({
      description: 'The network telemetry.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkTelemetryResponse')

const ResourcePolicyDocumentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('ResourcePolicyDocument')

const GetResourcePolicyResponseSchema = z
  .object({
    PolicyDocument: ResourcePolicyDocumentSchema.exactOptional().openapi({
      description: 'The resource policy document.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePolicyResponse')

const RouteAnalysisStatusSchema = z
  .enum(['RUNNING', 'COMPLETED', 'FAILED'])
  .openapi('RouteAnalysisStatus')

const TransitGatewayAttachmentArnSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(500)
  .openapi('TransitGatewayAttachmentArn')

const RouteAnalysisEndpointOptionsSchema = z
  .object({
    TransitGatewayAttachmentArn: TransitGatewayAttachmentArnSchema.exactOptional().openapi({
      description: 'The ARN of the transit gateway attachment.',
    }),
    TransitGatewayArn: TransitGatewayArnSchema.exactOptional().openapi({
      description: 'The ARN of the transit gateway.',
    }),
    IpAddress: IPAddressSchema.exactOptional().openapi({ description: 'The IP address.' }),
  })
  .openapi({ description: 'Describes a source or a destination.', required: [] })
  .openapi('RouteAnalysisEndpointOptions')

const RouteAnalysisCompletionResultCodeSchema = z
  .enum(['CONNECTED', 'NOT_CONNECTED'])
  .openapi('RouteAnalysisCompletionResultCode')

const RouteAnalysisCompletionReasonCodeSchema = z
  .enum([
    'TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND',
    'TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY',
    'CYCLIC_PATH_DETECTED',
    'TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND',
    'ROUTE_NOT_FOUND',
    'BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND',
    'INACTIVE_ROUTE_FOR_DESTINATION_FOUND',
    'TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH',
    'MAX_HOPS_EXCEEDED',
    'POSSIBLE_MIDDLEBOX',
    'NO_DESTINATION_ARN_PROVIDED',
  ])
  .openapi('RouteAnalysisCompletionReasonCode')

const ReasonContextValueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('ReasonContextValue')

const ReasonContextMapSchema = z
  .record(z.string(), ReasonContextValueSchema)
  .openapi('ReasonContextMap')

const RouteAnalysisCompletionSchema = z
  .object({
    ResultCode: RouteAnalysisCompletionResultCodeSchema.exactOptional().openapi({
      description:
        'The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the reason code.',
    }),
    ReasonCode: RouteAnalysisCompletionReasonCodeSchema.exactOptional().openapi({
      description:
        '<p>The reason code. Available only if a connection is not found.</p> <ul> <li> <p> <code>BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND</code> - Found a black hole route with the destination CIDR block.</p> </li> <li> <p> <code>CYCLIC_PATH_DETECTED</code> - Found the same resource multiple times while traversing the path.</p> </li> <li> <p> <code>INACTIVE_ROUTE_FOR_DESTINATION_FOUND</code> - Found an inactive route with the destination CIDR block.</p> </li> <li> <p> <code>MAX_HOPS_EXCEEDED</code> - Analysis exceeded 64 hops without finding the destination.</p> </li> <li> <p> <code>ROUTE_NOT_FOUND</code> - Cannot find a route table with the destination CIDR block.</p> </li> <li> <p> <code>TGW_ATTACH_ARN_NO_MATCH</code> - Found an attachment, but not with the correct destination ARN.</p> </li> <li> <p> <code>TGW_ATTACH_NOT_FOUND</code> - Cannot find an attachment.</p> </li> <li> <p> <code>TGW_ATTACH_NOT_IN_TGW</code> - Found an attachment, but not to the correct transit gateway.</p> </li> <li> <p> <code>TGW_ATTACH_STABLE_ROUTE_TABLE_NOT_FOUND</code> - The state of the route table association is not associated.</p> </li> </ul>',
    }),
    ReasonContext: ReasonContextMapSchema.exactOptional().openapi({
      description:
        'Additional information about the path. Available only if a connection is not found.',
    }),
  })
  .openapi({ description: 'Describes the status of an analysis at completion.', required: [] })
  .openapi('RouteAnalysisCompletion')

const NetworkResourceSummarySchema = z
  .object({
    RegisteredGatewayArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the gateway.',
    }),
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
    ResourceType: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The resource type.',
    }),
    Definition: ConstrainedStringSchema.exactOptional().openapi({
      description:
        'Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.',
    }),
    NameTag: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The value for the Name tag.',
    }),
    IsMiddlebox: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether this is a middlebox appliance.',
    }),
  })
  .openapi({ description: 'Describes a network resource.', required: [] })
  .openapi('NetworkResourceSummary')

const PathComponentSchema = z
  .object({
    Sequence: IntegerSchema.exactOptional().openapi({
      description: 'The sequence number in the path. The destination is 0.',
    }),
    Resource: NetworkResourceSummarySchema.exactOptional().openapi({
      description: 'The resource.',
    }),
    DestinationCidrBlock: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The destination CIDR block in the route table.',
    }),
  })
  .openapi({ description: 'Describes a path component.', required: [] })
  .openapi('PathComponent')

const PathComponentListSchema = z.array(PathComponentSchema).openapi('PathComponentList')

const RouteAnalysisPathSchema = z
  .object({
    CompletionStatus: RouteAnalysisCompletionSchema.exactOptional().openapi({
      description: 'The status of the analysis at completion.',
    }),
    Path: PathComponentListSchema.exactOptional().openapi({
      description: 'The route analysis path.',
    }),
  })
  .openapi({ description: 'Describes a route analysis path.', required: [] })
  .openapi('RouteAnalysisPath')

const RouteAnalysisSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of the global network.',
    }),
    OwnerAccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The ID of the AWS account that created the route analysis.',
    }),
    RouteAnalysisId: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The ID of the route analysis.',
    }),
    StartTimestamp: DateTimeSchema.exactOptional().openapi({
      description: 'The time that the analysis started.',
    }),
    Status: RouteAnalysisStatusSchema.exactOptional().openapi({
      description: 'The status of the route analysis.',
    }),
    Source: RouteAnalysisEndpointOptionsSchema.exactOptional().openapi({
      description: 'The source.',
    }),
    Destination: RouteAnalysisEndpointOptionsSchema.exactOptional().openapi({
      description: 'The destination.',
    }),
    IncludeReturnPath: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether to analyze the return path. The return path is not analyzed if the forward path analysis does not succeed.',
    }),
    UseMiddleboxes: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether to include the location of middlebox appliances in the route analysis.',
    }),
    ForwardPath: RouteAnalysisPathSchema.exactOptional().openapi({
      description: 'The forward path.',
    }),
    ReturnPath: RouteAnalysisPathSchema.exactOptional().openapi({
      description: 'The return path.',
    }),
  })
  .openapi({ description: 'Describes a route analysis.', required: [] })
  .openapi('RouteAnalysis')

const GetRouteAnalysisResponseSchema = z
  .object({
    RouteAnalysis: RouteAnalysisSchema.exactOptional().openapi({
      description: 'The route analysis.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetRouteAnalysisResponse')

const GetSiteToSiteVpnAttachmentResponseSchema = z
  .object({
    SiteToSiteVpnAttachment: SiteToSiteVpnAttachmentSchema.exactOptional().openapi({
      description: 'Describes the site-to-site attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSiteToSiteVpnAttachmentResponse')

const SiteListSchema = z.array(SiteSchema).openapi('SiteList')

const GetSitesResponseSchema = z
  .object({
    Sites: SiteListSchema.exactOptional().openapi({ description: 'The sites.' }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSitesResponse')

const TransitGatewayConnectPeerAssociationListSchema = z
  .array(TransitGatewayConnectPeerAssociationSchema)
  .openapi('TransitGatewayConnectPeerAssociationList')

const GetTransitGatewayConnectPeerAssociationsResponseSchema = z
  .object({
    TransitGatewayConnectPeerAssociations:
      TransitGatewayConnectPeerAssociationListSchema.exactOptional().openapi({
        description: 'Information about the transit gateway Connect peer associations.',
      }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token to use for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetTransitGatewayConnectPeerAssociationsResponse')

const GetTransitGatewayPeeringResponseSchema = z
  .object({
    TransitGatewayPeering: TransitGatewayPeeringSchema.exactOptional().openapi({
      description: 'Returns information about a transit gateway peering. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetTransitGatewayPeeringResponse')

const TransitGatewayRegistrationListSchema = z
  .array(TransitGatewayRegistrationSchema)
  .openapi('TransitGatewayRegistrationList')

const GetTransitGatewayRegistrationsResponseSchema = z
  .object({
    TransitGatewayRegistrations: TransitGatewayRegistrationListSchema.exactOptional().openapi({
      description: 'The transit gateway registrations.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetTransitGatewayRegistrationsResponse')

const GetTransitGatewayRouteTableAttachmentResponseSchema = z
  .object({
    TransitGatewayRouteTableAttachment:
      TransitGatewayRouteTableAttachmentSchema.exactOptional().openapi({
        description: 'Returns information about the transit gateway route table attachment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetTransitGatewayRouteTableAttachmentResponse')

const GetVpcAttachmentResponseSchema = z
  .object({
    VpcAttachment: VpcAttachmentSchema.exactOptional().openapi({
      description: 'Returns details about a VPC attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetVpcAttachmentResponse')

const AttachmentListSchema = z.array(AttachmentSchema).openapi('AttachmentList')

const ListAttachmentsResponseSchema = z
  .object({
    Attachments: AttachmentListSchema.exactOptional().openapi({
      description: 'Describes the list of attachments.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAttachmentsResponse')

const ConnectPeerSummarySchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    ConnectAttachmentId: AttachmentIdSchema.exactOptional().openapi({
      description: 'The ID of a Connect peer attachment.',
    }),
    ConnectPeerId: ConnectPeerIdSchema.exactOptional().openapi({
      description: 'The ID of a Connect peer.',
    }),
    EdgeLocation: ExternalRegionCodeSchema.exactOptional().openapi({
      description: 'The Region where the edge is located.',
    }),
    ConnectPeerState: ConnectPeerStateSchema.exactOptional().openapi({
      description: 'The state of a Connect peer.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when a Connect peer was created.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the Connect peer summary.',
    }),
  })
  .openapi({ description: 'Summary description of a Connect peer.', required: [] })
  .openapi('ConnectPeerSummary')

const ConnectPeerSummaryListSchema = z
  .array(ConnectPeerSummarySchema)
  .openapi('ConnectPeerSummaryList')

const ListConnectPeersResponseSchema = z
  .object({
    ConnectPeers: ConnectPeerSummaryListSchema.exactOptional().openapi({
      description: 'Describes the Connect peers.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListConnectPeersResponse')

const CoreNetworkPolicyVersionSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    PolicyVersionId: IntegerSchema.exactOptional().openapi({
      description: 'The ID of the policy version.',
    }),
    Alias: CoreNetworkPolicyAliasSchema.exactOptional().openapi({
      description:
        'Whether a core network policy is the current policy or the most recently submitted policy.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of a core network policy version.',
    }),
    CreatedAt: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when a core network policy version was created.',
    }),
    ChangeSetState: ChangeSetStateSchema.exactOptional().openapi({
      description: 'The status of the policy version change set.',
    }),
  })
  .openapi({ description: 'Describes a core network policy version.', required: [] })
  .openapi('CoreNetworkPolicyVersion')

const CoreNetworkPolicyVersionListSchema = z
  .array(CoreNetworkPolicyVersionSchema)
  .openapi('CoreNetworkPolicyVersionList')

const ListCoreNetworkPolicyVersionsResponseSchema = z
  .object({
    CoreNetworkPolicyVersions: CoreNetworkPolicyVersionListSchema.exactOptional().openapi({
      description: 'Describes core network policy versions.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListCoreNetworkPolicyVersionsResponse')

const CoreNetworkSummarySchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.exactOptional().openapi({
      description: 'The ID of a core network.',
    }),
    CoreNetworkArn: CoreNetworkArnSchema.exactOptional().openapi({
      description: 'a core network ARN.',
    }),
    GlobalNetworkId: GlobalNetworkIdSchema.exactOptional().openapi({
      description: 'The global network ID.',
    }),
    OwnerAccountId: AWSAccountIdSchema.exactOptional().openapi({
      description: 'The ID of the account owner.',
    }),
    State: CoreNetworkStateSchema.exactOptional().openapi({
      description: 'The state of a core network.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of a core network.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key-value tags associated with a core network summary.',
    }),
  })
  .openapi({ description: 'Returns summary information about a core network.', required: [] })
  .openapi('CoreNetworkSummary')

const CoreNetworkSummaryListSchema = z
  .array(CoreNetworkSummarySchema)
  .openapi('CoreNetworkSummaryList')

const ListCoreNetworksResponseSchema = z
  .object({
    CoreNetworks: CoreNetworkSummaryListSchema.exactOptional().openapi({
      description: 'Describes the list of core networks.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListCoreNetworksResponse')

const OrganizationIdSchema = z
  .string()
  .regex(/^o-([0-9a-f]{8,17})$/)
  .min(0)
  .max(50)
  .openapi('OrganizationId')

const OrganizationAwsServiceAccessStatusSchema = z
  .string()
  .min(0)
  .max(50)
  .openapi('OrganizationAwsServiceAccessStatus')

const SLRDeploymentStatusSchema = z.string().min(0).max(50).openapi('SLRDeploymentStatus')

const AccountIdSchema = z.string().min(0).max(50).openapi('AccountId')

const AccountStatusSchema = z
  .object({
    AccountId: AccountIdSchema.exactOptional().openapi({
      description: 'The ID of an account within the Amazon Web Services Organization.',
    }),
    SLRDeploymentStatus: SLRDeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of SLR deployment for the account.',
    }),
  })
  .openapi({
    description:
      'Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs).',
    required: [],
  })
  .openapi('AccountStatus')

const AccountStatusListSchema = z.array(AccountStatusSchema).openapi('AccountStatusList')

const OrganizationStatusSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.exactOptional().openapi({
      description: 'The ID of an Amazon Web Services Organization.',
    }),
    OrganizationAwsServiceAccessStatus:
      OrganizationAwsServiceAccessStatusSchema.exactOptional().openapi({
        description:
          "The status of the organization's AWS service access. This will be <code>ENABLED</code> or <code>DISABLED</code>.",
      }),
    SLRDeploymentStatus: SLRDeploymentStatusSchema.exactOptional().openapi({
      description:
        'The status of the SLR deployment for the account. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.',
    }),
    AccountStatusList: AccountStatusListSchema.exactOptional().openapi({
      description:
        "The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either <code>SUCCEEDED</code> or <code>IN_PROGRESS</code>.",
    }),
  })
  .openapi({
    description:
      'The status of an Amazon Web Services Organization and the accounts within that organization.',
    required: [],
  })
  .openapi('OrganizationStatus')

const ListOrganizationServiceAccessStatusResponseSchema = z
  .object({
    OrganizationStatus: OrganizationStatusSchema.exactOptional().openapi({
      description: 'Displays the status of an Amazon Web Services Organization.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationServiceAccessStatusResponse')

const PeeringListSchema = z.array(PeeringSchema).openapi('PeeringList')

const ListPeeringsResponseSchema = z
  .object({
    Peerings: PeeringListSchema.exactOptional().openapi({
      description: 'Lists the transit gateway peerings for the <code>ListPeerings</code> request.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next page of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListPeeringsResponse')

const ListTagsForResourceResponseSchema = z
  .object({ TagList: TagListSchema.exactOptional().openapi({ description: 'The list of tags.' }) })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutCoreNetworkPolicyResponseSchema = z
  .object({
    CoreNetworkPolicy: CoreNetworkPolicySchema.exactOptional().openapi({
      description: 'Describes the changed core network policy.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutCoreNetworkPolicyResponse')

const PutResourcePolicyResponseSchema = z.looseObject({}).openapi('PutResourcePolicyResponse')

const RegisterTransitGatewayResponseSchema = z
  .object({
    TransitGatewayRegistration: TransitGatewayRegistrationSchema.exactOptional().openapi({
      description: 'Information about the transit gateway registration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RegisterTransitGatewayResponse')

const RejectAttachmentResponseSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description: 'Describes the rejected attachment request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RejectAttachmentResponse')

const RestoreCoreNetworkPolicyVersionResponseSchema = z
  .object({
    CoreNetworkPolicy: CoreNetworkPolicySchema.exactOptional().openapi({
      description: 'Describes the restored core network policy.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RestoreCoreNetworkPolicyVersionResponse')

const StartOrganizationServiceAccessUpdateResponseSchema = z
  .object({
    OrganizationStatus: OrganizationStatusSchema.exactOptional().openapi({
      description:
        'The status of the service access update request for an Amazon Web Services Organization.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartOrganizationServiceAccessUpdateResponse')

const StartRouteAnalysisResponseSchema = z
  .object({
    RouteAnalysis: RouteAnalysisSchema.exactOptional().openapi({
      description: 'The route analysis.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartRouteAnalysisResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const UpdateConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.exactOptional().openapi({
      description: 'Information about the connection.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectionResponse')

const UpdateCoreNetworkResponseSchema = z
  .object({
    CoreNetwork: CoreNetworkSchema.exactOptional().openapi({
      description: 'Returns information about a core network update.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateCoreNetworkResponse')

const UpdateDeviceResponseSchema = z
  .object({
    Device: DeviceSchema.exactOptional().openapi({ description: 'Information about the device.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDeviceResponse')

const UpdateGlobalNetworkResponseSchema = z
  .object({
    GlobalNetwork: GlobalNetworkSchema.exactOptional().openapi({
      description: 'Information about the global network object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateGlobalNetworkResponse')

const UpdateLinkResponseSchema = z
  .object({
    Link: LinkSchema.exactOptional().openapi({ description: 'Information about the link.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateLinkResponse')

const UpdateNetworkResourceMetadataResponseSchema = z
  .object({
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The ARN of the resource.',
    }),
    Metadata: NetworkResourceMetadataMapSchema.exactOptional().openapi({
      description: 'The updated resource metadata.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateNetworkResourceMetadataResponse')

const UpdateSiteResponseSchema = z
  .object({
    Site: SiteSchema.exactOptional().openapi({ description: 'Information about the site.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSiteResponse')

const UpdateVpcAttachmentResponseSchema = z
  .object({
    VpcAttachment: VpcAttachmentSchema.exactOptional().openapi({
      description: 'Describes the updated VPC attachment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateVpcAttachmentResponse')

const AcceptAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'AcceptAttachmentRequest' })
  .openapi('AcceptAttachmentRequest')

const ActionSchema = z.string().min(0).max(50).openapi('Action')

const AssociateConnectPeerRequestSchema = z
  .object({
    ConnectPeerId: ConnectPeerIdSchema.openapi({ description: 'The ID of the Connect peer.' }),
    DeviceId: DeviceIdSchema.openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
  })
  .openapi({ required: ['ConnectPeerId', 'DeviceId'], title: 'AssociateConnectPeerRequest' })
  .openapi('AssociateConnectPeerRequest')

const AssociateCustomerGatewayRequestSchema = z
  .object({
    CustomerGatewayArn: CustomerGatewayArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the customer gateway.',
    }),
    DeviceId: DeviceIdSchema.openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
  })
  .openapi({
    required: ['CustomerGatewayArn', 'DeviceId'],
    title: 'AssociateCustomerGatewayRequest',
  })
  .openapi('AssociateCustomerGatewayRequest')

const AssociateLinkRequestSchema = z
  .object({
    DeviceId: DeviceIdSchema.openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.openapi({ description: 'The ID of the link.' }),
  })
  .openapi({ required: ['DeviceId', 'LinkId'], title: 'AssociateLinkRequest' })
  .openapi('AssociateLinkRequest')

const AssociateTransitGatewayConnectPeerRequestSchema = z
  .object({
    TransitGatewayConnectPeerArn: TransitGatewayConnectPeerArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the Connect peer.',
    }),
    DeviceId: DeviceIdSchema.openapi({ description: 'The ID of the device.' }),
    LinkId: LinkIdSchema.exactOptional().openapi({ description: 'The ID of the link.' }),
  })
  .openapi({
    required: ['TransitGatewayConnectPeerArn', 'DeviceId'],
    title: 'AssociateTransitGatewayConnectPeerRequest',
  })
  .openapi('AssociateTransitGatewayConnectPeerRequest')

const BgpOptionsSchema = z
  .object({
    PeerAsn: LongSchema.exactOptional().openapi({ description: 'The Peer ASN of the BGP.' }),
  })
  .openapi({ description: 'Describes the BGP options.', required: [] })
  .openapi('BgpOptions')

const ClientTokenSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(256)
  .openapi('ClientToken')

const ConnectPeerIdListSchema = z.array(ConnectPeerIdSchema).openapi('ConnectPeerIdList')

const ConnectionIdListSchema = z.array(ConnectionIdSchema).openapi('ConnectionIdList')

const CreateConnectAttachmentRequestSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.openapi({
      description: 'The ID of a core network where you want to create the attachment. ',
    }),
    EdgeLocation: ExternalRegionCodeSchema.openapi({
      description: 'The Region where the edge is located.',
    }),
    TransportAttachmentId: AttachmentIdSchema.openapi({
      description: 'The ID of the attachment between the two connections.',
    }),
    Options: ConnectAttachmentOptionsSchema.openapi({
      description: 'Options for creating an attachment.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['CoreNetworkId', 'EdgeLocation', 'TransportAttachmentId', 'Options'],
    title: 'CreateConnectAttachmentRequest',
  })
  .openapi('CreateConnectAttachmentRequest')

const CreateConnectPeerRequestSchema = z
  .object({
    ConnectAttachmentId: AttachmentIdSchema.openapi({
      description: 'The ID of the connection attachment.',
    }),
    CoreNetworkAddress: IPAddressSchema.exactOptional().openapi({
      description: 'A Connect peer core network address.',
    }),
    PeerAddress: IPAddressSchema.openapi({ description: 'The Connect peer address.' }),
    BgpOptions: BgpOptionsSchema.exactOptional().openapi({
      description: 'The Connect peer BGP options.',
    }),
    InsideCidrBlocks: ConstrainedStringListSchema.openapi({
      description: 'The inside IP addresses used for BGP peering.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags associated with the peer request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['ConnectAttachmentId', 'PeerAddress', 'InsideCidrBlocks'],
    title: 'CreateConnectPeerRequest',
  })
  .openapi('CreateConnectPeerRequest')

const CreateConnectionRequestSchema = z
  .object({
    DeviceId: DeviceIdSchema.openapi({
      description: 'The ID of the first device in the connection.',
    }),
    ConnectedDeviceId: DeviceIdSchema.openapi({
      description: 'The ID of the second device in the connection.',
    }),
    LinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the first device.',
    }),
    ConnectedLinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the second device.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to apply to the resource during creation.',
    }),
  })
  .openapi({ required: ['DeviceId', 'ConnectedDeviceId'], title: 'CreateConnectionRequest' })
  .openapi('CreateConnectionRequest')

const CreateCoreNetworkRequestSchema = z
  .object({
    GlobalNetworkId: GlobalNetworkIdSchema.openapi({
      description: 'The ID of the global network that a core network will be a part of. ',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of a core network.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Key-value tags associated with a core network request.',
    }),
    PolicyDocument: CoreNetworkPolicyDocumentSchema.exactOptional().openapi({
      description: 'The policy document for creating a core network.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with a core network request.',
    }),
  })
  .openapi({ required: ['GlobalNetworkId'], title: 'CreateCoreNetworkRequest' })
  .openapi('CreateCoreNetworkRequest')

const CreateDeviceRequestSchema = z
  .object({
    AWSLocation: AWSLocationSchema.exactOptional().openapi({
      description:
        'The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The type of the device.',
    }),
    Vendor: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Model: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    SerialNumber: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Location: LocationSchema.exactOptional().openapi({
      description: 'The location of the device.',
    }),
    SiteId: SiteIdSchema.exactOptional().openapi({ description: 'The ID of the site.' }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to apply to the resource during creation.',
    }),
  })
  .openapi({ title: 'CreateDeviceRequest', required: [] })
  .openapi('CreateDeviceRequest')

const CreateGlobalNetworkRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to apply to the resource during creation.',
    }),
  })
  .openapi({ title: 'CreateGlobalNetworkRequest', required: [] })
  .openapi('CreateGlobalNetworkRequest')

const CreateLinkRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \\ ^</p>',
    }),
    Bandwidth: BandwidthSchema.openapi({
      description: ' The upload speed and download speed in Mbps. ',
    }),
    Provider: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \\ ^</p>',
    }),
    SiteId: SiteIdSchema.openapi({ description: 'The ID of the site.' }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to apply to the resource during creation.',
    }),
  })
  .openapi({ required: ['Bandwidth', 'SiteId'], title: 'CreateLinkRequest' })
  .openapi('CreateLinkRequest')

const CreateSiteRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Location: LocationSchema.exactOptional().openapi({
      description:
        '<p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p> <ul> <li> <p> <code>Address</code>: The physical address of the site.</p> </li> <li> <p> <code>Latitude</code>: The latitude of the site. </p> </li> <li> <p> <code>Longitude</code>: The longitude of the site.</p> </li> </ul>',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to apply to the resource during creation.',
    }),
  })
  .openapi({ title: 'CreateSiteRequest', required: [] })
  .openapi('CreateSiteRequest')

const CreateSiteToSiteVpnAttachmentRequestSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.openapi({
      description: "The ID of a core network where you're creating a site-to-site VPN attachment.",
    }),
    VpnConnectionArn: VpnConnectionArnSchema.openapi({
      description: 'The ARN identifying the VPN attachment.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags associated with the request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['CoreNetworkId', 'VpnConnectionArn'],
    title: 'CreateSiteToSiteVpnAttachmentRequest',
  })
  .openapi('CreateSiteToSiteVpnAttachmentRequest')

const CreateTransitGatewayPeeringRequestSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.openapi({ description: 'The ID of a core network.' }),
    TransitGatewayArn: TransitGatewayArnSchema.openapi({
      description: 'The ARN of the transit gateway for the peering request.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['CoreNetworkId', 'TransitGatewayArn'],
    title: 'CreateTransitGatewayPeeringRequest',
  })
  .openapi('CreateTransitGatewayPeeringRequest')

const CreateTransitGatewayRouteTableAttachmentRequestSchema = z
  .object({
    PeeringId: PeeringIdSchema.openapi({ description: 'The ID of the peer for the ' }),
    TransitGatewayRouteTableArn: TransitGatewayRouteTableArnSchema.openapi({
      description:
        'The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The list of key-value tags associated with the request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['PeeringId', 'TransitGatewayRouteTableArn'],
    title: 'CreateTransitGatewayRouteTableAttachmentRequest',
  })
  .openapi('CreateTransitGatewayRouteTableAttachmentRequest')

const VpcArnSchema = z
  .string()
  .regex(/^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpc\/vpc-[0-9a-f]{8,17}$/)
  .min(0)
  .max(500)
  .openapi('VpcArn')

const CreateVpcAttachmentRequestSchema = z
  .object({
    CoreNetworkId: CoreNetworkIdSchema.openapi({
      description: 'The ID of a core network for the VPC attachment.',
    }),
    VpcArn: VpcArnSchema.openapi({ description: 'The ARN of the VPC.' }),
    SubnetArns: SubnetArnListSchema.openapi({
      description: 'The subnet ARN of the VPC attachment.',
    }),
    Options: VpcOptionsSchema.exactOptional().openapi({
      description: 'Options for the VPC attachment.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key-value tags associated with the request.',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({
    required: ['CoreNetworkId', 'VpcArn', 'SubnetArns'],
    title: 'CreateVpcAttachmentRequest',
  })
  .openapi('CreateVpcAttachmentRequest')

const CustomerGatewayArnListSchema = z
  .array(CustomerGatewayArnSchema)
  .openapi('CustomerGatewayArnList')

const DeleteAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAttachmentRequest' })
  .openapi('DeleteAttachmentRequest')

const DeleteConnectPeerRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteConnectPeerRequest' })
  .openapi('DeleteConnectPeerRequest')

const DeleteConnectionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteConnectionRequest' })
  .openapi('DeleteConnectionRequest')

const DeleteCoreNetworkPolicyVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteCoreNetworkPolicyVersionRequest' })
  .openapi('DeleteCoreNetworkPolicyVersionRequest')

const DeleteCoreNetworkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteCoreNetworkRequest' })
  .openapi('DeleteCoreNetworkRequest')

const DeleteDeviceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteDeviceRequest' })
  .openapi('DeleteDeviceRequest')

const DeleteGlobalNetworkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteGlobalNetworkRequest' })
  .openapi('DeleteGlobalNetworkRequest')

const DeleteLinkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteLinkRequest' })
  .openapi('DeleteLinkRequest')

const DeletePeeringRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePeeringRequest' })
  .openapi('DeletePeeringRequest')

const DeleteResourcePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DeleteSiteRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteSiteRequest' })
  .openapi('DeleteSiteRequest')

const DeregisterTransitGatewayRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeregisterTransitGatewayRequest' })
  .openapi('DeregisterTransitGatewayRequest')

const GlobalNetworkIdListSchema = z.array(GlobalNetworkIdSchema).openapi('GlobalNetworkIdList')

const MaxResultsSchema = z.int().min(1).max(500).openapi('MaxResults')

const DescribeGlobalNetworksRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribeGlobalNetworksRequest' })
  .openapi('DescribeGlobalNetworksRequest')

const DeviceIdListSchema = z.array(DeviceIdSchema).openapi('DeviceIdList')

const DisassociateConnectPeerRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateConnectPeerRequest' })
  .openapi('DisassociateConnectPeerRequest')

const DisassociateCustomerGatewayRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateCustomerGatewayRequest' })
  .openapi('DisassociateCustomerGatewayRequest')

const DisassociateLinkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateLinkRequest' })
  .openapi('DisassociateLinkRequest')

const DisassociateTransitGatewayConnectPeerRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateTransitGatewayConnectPeerRequest' })
  .openapi('DisassociateTransitGatewayConnectPeerRequest')

const ExecuteCoreNetworkChangeSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ExecuteCoreNetworkChangeSetRequest' })
  .openapi('ExecuteCoreNetworkChangeSetRequest')

const FilterMapSchema = z.record(z.string(), FilterValuesSchema).openapi('FilterMap')

const FilterNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\.-]*$/)
  .max(128)
  .openapi('FilterName')

const GetConnectAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectAttachmentRequest' })
  .openapi('GetConnectAttachmentRequest')

const GetConnectPeerAssociationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectPeerAssociationsRequest' })
  .openapi('GetConnectPeerAssociationsRequest')

const GetConnectPeerRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectPeerRequest' })
  .openapi('GetConnectPeerRequest')

const GetConnectionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectionsRequest' })
  .openapi('GetConnectionsRequest')

const GetCoreNetworkChangeEventsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreNetworkChangeEventsRequest' })
  .openapi('GetCoreNetworkChangeEventsRequest')

const GetCoreNetworkChangeSetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreNetworkChangeSetRequest' })
  .openapi('GetCoreNetworkChangeSetRequest')

const GetCoreNetworkPolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreNetworkPolicyRequest' })
  .openapi('GetCoreNetworkPolicyRequest')

const GetCoreNetworkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreNetworkRequest' })
  .openapi('GetCoreNetworkRequest')

const GetCustomerGatewayAssociationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCustomerGatewayAssociationsRequest' })
  .openapi('GetCustomerGatewayAssociationsRequest')

const GetDevicesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDevicesRequest' })
  .openapi('GetDevicesRequest')

const GetLinkAssociationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetLinkAssociationsRequest' })
  .openapi('GetLinkAssociationsRequest')

const LinkIdListSchema = z.array(LinkIdSchema).openapi('LinkIdList')

const GetLinksRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetLinksRequest' })
  .openapi('GetLinksRequest')

const GetNetworkResourceCountsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetNetworkResourceCountsRequest' })
  .openapi('GetNetworkResourceCountsRequest')

const GetNetworkResourceRelationshipsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetNetworkResourceRelationshipsRequest' })
  .openapi('GetNetworkResourceRelationshipsRequest')

const GetNetworkResourcesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetNetworkResourcesRequest' })
  .openapi('GetNetworkResourcesRequest')

const RouteTableIdentifierSchema = z
  .object({
    TransitGatewayRouteTableArn: TransitGatewayRouteTableArnSchema.exactOptional().openapi({
      description: 'The ARN of the transit gateway route table.',
    }),
    CoreNetworkSegmentEdge: CoreNetworkSegmentEdgeIdentifierSchema.exactOptional().openapi({
      description: 'The segment edge in a core network.',
    }),
  })
  .openapi({ description: 'Describes a route table.', required: [] })
  .openapi('RouteTableIdentifier')

const RouteStateListSchema = z.array(RouteStateSchema).openapi('RouteStateList')

const RouteTypeListSchema = z.array(RouteTypeSchema).openapi('RouteTypeList')

const GetNetworkRoutesRequestSchema = z
  .object({
    RouteTableIdentifier: RouteTableIdentifierSchema.openapi({
      description: 'The ID of the route table.',
    }),
    ExactCidrMatches: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'An exact CIDR block.',
    }),
    LongestPrefixMatches: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The most specific route that matches the traffic (longest prefix match).',
    }),
    SubnetOfMatches: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The routes with a subnet that match the specified CIDR filter.',
    }),
    SupernetOfMatches: ConstrainedStringListSchema.exactOptional().openapi({
      description:
        'The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.',
    }),
    PrefixListIds: ConstrainedStringListSchema.exactOptional().openapi({
      description: 'The IDs of the prefix lists.',
    }),
    States: RouteStateListSchema.exactOptional().openapi({ description: 'The route states.' }),
    Types: RouteTypeListSchema.exactOptional().openapi({ description: 'The route types.' }),
    DestinationFilters: FilterMapSchema.exactOptional().openapi({
      description:
        'Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.',
    }),
  })
  .openapi({ required: ['RouteTableIdentifier'], title: 'GetNetworkRoutesRequest' })
  .openapi('GetNetworkRoutesRequest')

const GetNetworkTelemetryRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetNetworkTelemetryRequest' })
  .openapi('GetNetworkTelemetryRequest')

const GetResourcePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetResourcePolicyRequest' })
  .openapi('GetResourcePolicyRequest')

const GetRouteAnalysisRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetRouteAnalysisRequest' })
  .openapi('GetRouteAnalysisRequest')

const GetSiteToSiteVpnAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSiteToSiteVpnAttachmentRequest' })
  .openapi('GetSiteToSiteVpnAttachmentRequest')

const SiteIdListSchema = z.array(SiteIdSchema).openapi('SiteIdList')

const GetSitesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSitesRequest' })
  .openapi('GetSitesRequest')

const TransitGatewayConnectPeerArnListSchema = z
  .array(TransitGatewayConnectPeerArnSchema)
  .openapi('TransitGatewayConnectPeerArnList')

const GetTransitGatewayConnectPeerAssociationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetTransitGatewayConnectPeerAssociationsRequest' })
  .openapi('GetTransitGatewayConnectPeerAssociationsRequest')

const GetTransitGatewayPeeringRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetTransitGatewayPeeringRequest' })
  .openapi('GetTransitGatewayPeeringRequest')

const TransitGatewayArnListSchema = z
  .array(TransitGatewayArnSchema)
  .openapi('TransitGatewayArnList')

const GetTransitGatewayRegistrationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetTransitGatewayRegistrationsRequest' })
  .openapi('GetTransitGatewayRegistrationsRequest')

const GetTransitGatewayRouteTableAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetTransitGatewayRouteTableAttachmentRequest' })
  .openapi('GetTransitGatewayRouteTableAttachmentRequest')

const GetVpcAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetVpcAttachmentRequest' })
  .openapi('GetVpcAttachmentRequest')

const ListAttachmentsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAttachmentsRequest' })
  .openapi('ListAttachmentsRequest')

const ListConnectPeersRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListConnectPeersRequest' })
  .openapi('ListConnectPeersRequest')

const ListCoreNetworkPolicyVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListCoreNetworkPolicyVersionsRequest' })
  .openapi('ListCoreNetworkPolicyVersionsRequest')

const ListCoreNetworksRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListCoreNetworksRequest' })
  .openapi('ListCoreNetworksRequest')

const ListOrganizationServiceAccessStatusRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListOrganizationServiceAccessStatusRequest' })
  .openapi('ListOrganizationServiceAccessStatusRequest')

const ListPeeringsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListPeeringsRequest' })
  .openapi('ListPeeringsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutCoreNetworkPolicyRequestSchema = z
  .object({
    PolicyDocument: CoreNetworkPolicyDocumentSchema.openapi({
      description: 'The policy document.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'a core network policy description.',
    }),
    LatestVersionId: IntegerSchema.exactOptional().openapi({
      description: 'The ID of a core network policy. ',
    }),
    ClientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token associated with the request.',
    }),
  })
  .openapi({ required: ['PolicyDocument'], title: 'PutCoreNetworkPolicyRequest' })
  .openapi('PutCoreNetworkPolicyRequest')

const PutResourcePolicyRequestSchema = z
  .object({
    PolicyDocument: ResourcePolicyDocumentSchema.openapi({
      description: 'The JSON resource policy document.',
    }),
  })
  .openapi({ required: ['PolicyDocument'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const ReasonContextKeySchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(10000000)
  .openapi('ReasonContextKey')

const RegisterTransitGatewayRequestSchema = z
  .object({
    TransitGatewayArn: TransitGatewayArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the transit gateway.',
    }),
  })
  .openapi({ required: ['TransitGatewayArn'], title: 'RegisterTransitGatewayRequest' })
  .openapi('RegisterTransitGatewayRequest')

const RejectAttachmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'RejectAttachmentRequest' })
  .openapi('RejectAttachmentRequest')

const RestoreCoreNetworkPolicyVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'RestoreCoreNetworkPolicyVersionRequest' })
  .openapi('RestoreCoreNetworkPolicyVersionRequest')

const RouteAnalysisEndpointOptionsSpecificationSchema = z
  .object({
    TransitGatewayAttachmentArn: TransitGatewayAttachmentArnSchema.exactOptional().openapi({
      description: 'The ARN of the transit gateway attachment.',
    }),
    IpAddress: IPAddressSchema.exactOptional().openapi({ description: 'The IP address.' }),
  })
  .openapi({ description: 'Describes a source or a destination.', required: [] })
  .openapi('RouteAnalysisEndpointOptionsSpecification')

const StartOrganizationServiceAccessUpdateRequestSchema = z
  .object({
    Action: ActionSchema.openapi({
      description:
        'The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.',
    }),
  })
  .openapi({ required: ['Action'], title: 'StartOrganizationServiceAccessUpdateRequest' })
  .openapi('StartOrganizationServiceAccessUpdateRequest')

const StartRouteAnalysisRequestSchema = z
  .object({
    Source: RouteAnalysisEndpointOptionsSpecificationSchema.openapi({
      description: 'The source from which traffic originates.',
    }),
    Destination: RouteAnalysisEndpointOptionsSpecificationSchema.openapi({
      description: 'The destination.',
    }),
    IncludeReturnPath: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether to analyze the return path. The default is <code>false</code>.',
    }),
    UseMiddleboxes: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether to include the location of middlebox appliances in the route analysis. The default is <code>false</code>.',
    }),
  })
  .openapi({ required: ['Source', 'Destination'], title: 'StartRouteAnalysisRequest' })
  .openapi('StartRouteAnalysisRequest')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagListSchema.openapi({ description: 'The tags to apply to the specified resource.' }),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectionRequestSchema = z
  .object({
    LinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the first device in the connection.',
    }),
    ConnectedLinkId: LinkIdSchema.exactOptional().openapi({
      description: 'The ID of the link for the second device in the connection.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>',
    }),
  })
  .openapi({ title: 'UpdateConnectionRequest', required: [] })
  .openapi('UpdateConnectionRequest')

const UpdateCoreNetworkRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The description of the update.',
    }),
  })
  .openapi({ title: 'UpdateCoreNetworkRequest', required: [] })
  .openapi('UpdateCoreNetworkRequest')

const UpdateDeviceRequestSchema = z
  .object({
    AWSLocation: AWSLocationSchema.exactOptional().openapi({
      description:
        'The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.',
    }),
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({
      description: 'The type of the device.',
    }),
    Vendor: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Model: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    SerialNumber: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Location: LocationSchema.exactOptional(),
    SiteId: SiteIdSchema.exactOptional().openapi({ description: 'The ID of the site.' }),
  })
  .openapi({ title: 'UpdateDeviceRequest', required: [] })
  .openapi('UpdateDeviceRequest')

const UpdateGlobalNetworkRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
  })
  .openapi({ title: 'UpdateGlobalNetworkRequest', required: [] })
  .openapi('UpdateGlobalNetworkRequest')

const UpdateLinkRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Type: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
    Bandwidth: BandwidthSchema.exactOptional().openapi({
      description: 'The upload and download speed in Mbps. ',
    }),
    Provider: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>',
    }),
  })
  .openapi({ title: 'UpdateLinkRequest', required: [] })
  .openapi('UpdateLinkRequest')

const UpdateNetworkResourceMetadataRequestSchema = z
  .object({
    Metadata: NetworkResourceMetadataMapSchema.openapi({ description: 'The resource metadata.' }),
  })
  .openapi({ required: ['Metadata'], title: 'UpdateNetworkResourceMetadataRequest' })
  .openapi('UpdateNetworkResourceMetadataRequest')

const UpdateSiteRequestSchema = z
  .object({
    Description: ConstrainedStringSchema.exactOptional().openapi({
      description:
        '<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>',
    }),
    Location: LocationSchema.exactOptional().openapi({
      description:
        '<p>The site location:</p> <ul> <li> <p> <code>Address</code>: The physical address of the site.</p> </li> <li> <p> <code>Latitude</code>: The latitude of the site. </p> </li> <li> <p> <code>Longitude</code>: The longitude of the site.</p> </li> </ul>',
    }),
  })
  .openapi({ title: 'UpdateSiteRequest', required: [] })
  .openapi('UpdateSiteRequest')

const UpdateVpcAttachmentRequestSchema = z
  .object({
    AddSubnetArns: SubnetArnListSchema.exactOptional().openapi({
      description: 'Adds a subnet ARN to the VPC attachment.',
    }),
    RemoveSubnetArns: SubnetArnListSchema.exactOptional().openapi({
      description: 'Removes a subnet ARN from the attachment.',
    }),
    Options: VpcOptionsSchema.exactOptional().openapi({
      description: 'Additional options for updating the VPC attachment. ',
    }),
  })
  .openapi({ title: 'UpdateVpcAttachmentRequest', required: [] })
  .openapi('UpdateVpcAttachmentRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postAttachmentsAttachmentIdAcceptRoute = createRoute({
  method: 'post',
  path: '/attachments/{attachmentId}/accept',
  description:
    '<p>Accepts a core network attachment request. </p> <p>Once the attachment request is accepted by a core network owner, the attachment is created and connected to a core network.</p>',
  operationId: 'AcceptAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment. ',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/connect-peer-associations',
  description: 'Returns information about a core network Connect peer associations.',
  operationId: 'GetConnectPeerAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      connectPeerIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConnectPeerIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'connectPeerIds',
            in: 'query',
            required: false,
            description: 'The IDs of the Connect peers.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ConnectPeerId' } },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectPeerAssociationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/connect-peer-associations',
  description:
    '<p>Associates a core network Connect peer with a device and optionally, with a link. </p> <p>If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network. </p>',
  operationId: 'AssociateConnectPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of your global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConnectPeerId: z
                .string()
                .regex(/^connect-peer-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the Connect peer.' }),
              DeviceId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the device.' }),
              LinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the link.' }),
            })
            .openapi({ required: ['ConnectPeerId', 'DeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateConnectPeerResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/customer-gateway-associations',
  description:
    'Gets the association information for customer gateways that are associated with devices and links in your global network.',
  operationId: 'GetCustomerGatewayAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      customerGatewayArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CustomerGatewayArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'customerGatewayArns',
            in: 'query',
            required: false,
            description:
              'One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/CustomerGatewayArn' } },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCustomerGatewayAssociationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/customer-gateway-associations',
  description:
    '<p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway or core network registered in your global network. When you register a transit gateway or core network, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>',
  operationId: 'AssociateCustomerGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CustomerGatewayArn: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(500)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the customer gateway.',
                }),
              DeviceId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the device.' }),
              LinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the link.' }),
            })
            .openapi({ required: ['CustomerGatewayArn', 'DeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateCustomerGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdLinkAssociationsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/link-associations',
  description:
    'Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.',
  operationId: 'GetLinkAssociations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      deviceId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'query',
            required: false,
            description: 'The ID of the device.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      linkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'linkId',
            in: 'query',
            required: false,
            description: 'The ID of the link.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLinkAssociationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdLinkAssociationsRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/link-associations',
  description:
    'Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.',
  operationId: 'AssociateLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the device.' }),
              LinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the link.' }),
            })
            .openapi({ required: ['DeviceId', 'LinkId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateLinkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute =
  createRoute({
    method: 'get',
    path: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations',
    description:
      'Gets information about one or more of your transit gateway Connect peer associations in a global network.',
    operationId: 'GetTransitGatewayConnectPeerAssociations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
      }),
      query: z.object({
        transitGatewayConnectPeerArns: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(TransitGatewayConnectPeerArnSchema),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'transitGatewayConnectPeerArns',
              in: 'query',
              required: false,
              description: 'One or more transit gateway Connect peer Amazon Resource Names (ARNs).',
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/TransitGatewayConnectPeerArn' },
              },
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(500),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description: 'The maximum number of results to return.',
              schema: { type: 'integer', minimum: 1, maximum: 500 },
            },
          }),
        nextToken: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(2048)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: 'The token for the next page of results.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
            },
          }),
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetTransitGatewayConnectPeerAssociationsResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute =
  createRoute({
    method: 'post',
    path: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations',
    description:
      "<p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate transit gateway Connect peers that have been created on a transit gateway that's registered in your global network.</p> <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>",
    operationId: 'AssociateTransitGatewayConnectPeer',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                TransitGatewayConnectPeerArn: z
                  .string()
                  .regex(/[\s\S]*/)
                  .min(0)
                  .max(500)
                  .openapi({ description: 'The Amazon Resource Name (ARN) of the Connect peer.' }),
                DeviceId: z
                  .string()
                  .regex(/[\s\S]*/)
                  .min(0)
                  .max(50)
                  .openapi({ description: 'The ID of the device.' }),
                LinkId: z
                  .string()
                  .regex(/[\s\S]*/)
                  .min(0)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The ID of the link.' }),
              })
              .openapi({ required: ['TransitGatewayConnectPeerArn', 'DeviceId'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AssociateTransitGatewayConnectPeerResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postConnectAttachmentsRoute = createRoute({
  method: 'post',
  path: '/connect-attachments',
  description:
    '<p>Creates a core network Connect attachment from a specified core network attachment. </p> <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.</p>',
  operationId: 'CreateConnectAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CoreNetworkId: z
                .string()
                .regex(/^core-network-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({
                  description: 'The ID of a core network where you want to create the attachment. ',
                }),
              EdgeLocation: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .max(63)
                .openapi({ description: 'The Region where the edge is located.' }),
              TransportAttachmentId: z
                .string()
                .regex(/^attachment-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the attachment between the two connections.' }),
              Options: z
                .object({
                  Protocol: TunnelProtocolSchema.exactOptional().openapi({
                    description: 'The protocol used for the attachment connection.',
                  }),
                })
                .openapi({
                  description: 'Describes a core network Connect attachment options.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description: 'The list of key-value tags associated with the request.',
                }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({
              required: ['CoreNetworkId', 'EdgeLocation', 'TransportAttachmentId', 'Options'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getConnectPeersRoute = createRoute({
  method: 'get',
  path: '/connect-peers',
  description: 'Returns a list of core network Connect peers.',
  operationId: 'ListConnectPeers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      connectAttachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'connectAttachmentId',
            in: 'query',
            required: false,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectPeersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postConnectPeersRoute = createRoute({
  method: 'post',
  path: '/connect-peers',
  description:
    'Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).',
  operationId: 'CreateConnectPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConnectAttachmentId: z
                .string()
                .regex(/^attachment-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the connection attachment.' }),
              CoreNetworkAddress: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'A Connect peer core network address.' }),
              PeerAddress: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .max(50)
                .openapi({ description: 'The Connect peer address.' }),
              BgpOptions: z
                .object({
                  PeerAsn: LongSchema.exactOptional().openapi({
                    description: 'The Peer ASN of the BGP.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes the BGP options.', required: [] }),
              InsideCidrBlocks: z
                .array(ConstrainedStringSchema)
                .openapi({ description: 'The inside IP addresses used for BGP peering.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags associated with the peer request.' }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['ConnectAttachmentId', 'PeerAddress', 'InsideCidrBlocks'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectPeerResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdConnectionsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/connections',
  description: 'Gets information about one or more of your connections in a global network.',
  operationId: 'GetConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      connectionIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConnectionIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'connectionIds',
            in: 'query',
            required: false,
            description: 'One or more connection IDs.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ConnectionId' } },
          },
        }),
      deviceId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'query',
            required: false,
            description: 'The ID of the device.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdConnectionsRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/connections',
  description:
    'Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.',
  operationId: 'CreateConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the first device in the connection.' }),
              ConnectedDeviceId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the second device in the connection.' }),
              LinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the link for the first device.' }),
              ConnectedLinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the link for the second device.' }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the resource during creation.' }),
            })
            .openapi({ required: ['DeviceId', 'ConnectedDeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksRoute = createRoute({
  method: 'get',
  path: '/core-networks',
  description: 'Returns a list of owned and shared core networks.',
  operationId: 'ListCoreNetworks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCoreNetworksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCoreNetworksRoute = createRoute({
  method: 'post',
  path: '/core-networks',
  description:
    'Creates a core network as part of your global network, and optionally, with a core network policy.',
  operationId: 'CreateCoreNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GlobalNetworkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({
                  description:
                    'The ID of the global network that a core network will be a part of. ',
                }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of a core network.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'Key-value tags associated with a core network request.' }),
              PolicyDocument: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(10000000)
                .exactOptional()
                .openapi({ description: 'The policy document for creating a core network.' }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'The client token associated with a core network request.',
                }),
            })
            .openapi({ required: ['GlobalNetworkId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCoreNetworkResponseSchema } },
    },
    480: {
      description: 'CoreNetworkPolicyException',
      content: { 'application/json': { schema: CoreNetworkPolicyExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdDevicesRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/devices',
  description: 'Gets information about one or more of your devices in a global network.',
  operationId: 'GetDevices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      deviceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DeviceIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceIds',
            in: 'query',
            required: false,
            description: 'One or more device IDs. The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/DeviceId' } },
          },
        }),
      siteId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'siteId',
            in: 'query',
            required: false,
            description: 'The ID of the site.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdDevicesRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/devices',
  description:
    'Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.',
  operationId: 'CreateDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AWSLocation: z
                .object({
                  Zone: ConstrainedStringSchema.exactOptional().openapi({
                    description:
                      'The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.',
                  }),
                  SubnetArn: SubnetArnSchema.exactOptional().openapi({
                    description:
                      'The Amazon Resource Name (ARN) of the subnet that the device is located in.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies a location in Amazon Web Services.',
                  required: [],
                }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Type: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The type of the device.' }),
              Vendor: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              Model: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              SerialNumber: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              Location: z
                .object({
                  Address: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The physical address.',
                  }),
                  Latitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The latitude.',
                  }),
                  Longitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The longitude.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes a location.', required: [] }),
              SiteId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the site.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the resource during creation.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksRoute = createRoute({
  method: 'get',
  path: '/global-networks',
  description:
    'Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.',
  operationId: 'DescribeGlobalNetworks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      globalNetworkIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(GlobalNetworkIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'globalNetworkIds',
            in: 'query',
            required: false,
            description: 'The IDs of one or more global networks. The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/GlobalNetworkId' } },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGlobalNetworksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksRoute = createRoute({
  method: 'post',
  path: '/global-networks',
  description: 'Creates a new, empty global network.',
  operationId: 'CreateGlobalNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the resource during creation.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGlobalNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdLinksRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/links',
  description:
    '<p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>',
  operationId: 'GetLinks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      linkIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LinkIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'linkIds',
            in: 'query',
            required: false,
            description: 'One or more link IDs. The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/LinkId' } },
          },
        }),
      siteId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'siteId',
            in: 'query',
            required: false,
            description: 'The ID of the site.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      type: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'The link type.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      provider: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            required: false,
            description: 'The link provider.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLinksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdLinksRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/links',
  description: 'Creates a new link for a specified site.',
  operationId: 'CreateLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Type: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \\ ^</p>',
                }),
              Bandwidth: z
                .object({
                  UploadSpeed: IntegerSchema.exactOptional().openapi({
                    description: 'Upload speed in Mbps.',
                  }),
                  DownloadSpeed: IntegerSchema.exactOptional().openapi({
                    description: 'Download speed in Mbps.',
                  }),
                })
                .openapi({ description: 'Describes bandwidth information.', required: [] }),
              Provider: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \\ ^</p>',
                }),
              SiteId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the site.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the resource during creation.' }),
            })
            .openapi({ required: ['Bandwidth', 'SiteId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLinkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdSitesRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/sites',
  description: 'Gets information about one or more of your sites in a global network.',
  operationId: 'GetSites',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      siteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SiteIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'siteIds',
            in: 'query',
            required: false,
            description: 'One or more site IDs. The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SiteId' } },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSitesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdSitesRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/sites',
  description: 'Creates a new site in a global network.',
  operationId: 'CreateSite',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Location: z
                .object({
                  Address: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The physical address.',
                  }),
                  Latitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The latitude.',
                  }),
                  Longitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The longitude.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes a location.', required: [] }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the resource during creation.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSiteResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postSiteToSiteVpnAttachmentsRoute = createRoute({
  method: 'post',
  path: '/site-to-site-vpn-attachments',
  description:
    'Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.',
  operationId: 'CreateSiteToSiteVpnAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CoreNetworkId: z
                .string()
                .regex(/^core-network-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({
                  description:
                    "The ID of a core network where you're creating a site-to-site VPN attachment.",
                }),
              VpnConnectionArn: z
                .string()
                .regex(
                  /^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpn-connection\/vpn-[0-9a-f]{8,17}$/,
                )
                .min(0)
                .max(500)
                .openapi({ description: 'The ARN identifying the VPN attachment.' }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The tags associated with the request.' }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['CoreNetworkId', 'VpnConnectionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSiteToSiteVpnAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTransitGatewayPeeringsRoute = createRoute({
  method: 'post',
  path: '/transit-gateway-peerings',
  description: 'Creates a transit gateway peering connection.',
  operationId: 'CreateTransitGatewayPeering',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CoreNetworkId: z
                .string()
                .regex(/^core-network-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of a core network.' }),
              TransitGatewayArn: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(500)
                .openapi({
                  description: 'The ARN of the transit gateway for the peering request.',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description: 'The list of key-value tags associated with the request.',
                }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['CoreNetworkId', 'TransitGatewayArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTransitGatewayPeeringResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTransitGatewayRouteTableAttachmentsRoute = createRoute({
  method: 'post',
  path: '/transit-gateway-route-table-attachments',
  description: 'Creates a transit gateway route table attachment.',
  operationId: 'CreateTransitGatewayRouteTableAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PeeringId: z
                .string()
                .regex(/^peering-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of the peer for the ' }),
              TransitGatewayRouteTableArn: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(500)
                .openapi({
                  description:
                    'The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description: 'The list of key-value tags associated with the request.',
                }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['PeeringId', 'TransitGatewayRouteTableArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateTransitGatewayRouteTableAttachmentResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postVpcAttachmentsRoute = createRoute({
  method: 'post',
  path: '/vpc-attachments',
  description: 'Creates a VPC attachment on an edge location of a core network.',
  operationId: 'CreateVpcAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CoreNetworkId: z
                .string()
                .regex(/^core-network-([0-9a-f]{8,17})$/)
                .min(0)
                .max(50)
                .openapi({ description: 'The ID of a core network for the VPC attachment.' }),
              VpcArn: z
                .string()
                .regex(/^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpc\/vpc-[0-9a-f]{8,17}$/)
                .min(0)
                .max(500)
                .openapi({ description: 'The ARN of the VPC.' }),
              SubnetArns: z
                .array(SubnetArnSchema)
                .openapi({ description: 'The subnet ARN of the VPC attachment.' }),
              Options: z
                .object({
                  Ipv6Support: BooleanSchema.exactOptional().openapi({
                    description: 'Indicates whether IPv6 is supported.',
                  }),
                  ApplianceModeSupport: BooleanSchema.exactOptional().openapi({
                    description:
                      'Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes the VPC options.', required: [] }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({ description: 'The key-value tags associated with the request.' }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['CoreNetworkId', 'VpcArn', 'SubnetArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteAttachmentsAttachmentIdRoute = createRoute({
  method: 'delete',
  path: '/attachments/{attachmentId}',
  description: 'Deletes an attachment. Supports all attachment types.',
  operationId: 'DeleteAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment to delete.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getConnectPeersConnectPeerIdRoute = createRoute({
  method: 'get',
  path: '/connect-peers/{connectPeerId}',
  description: 'Returns information about a core network Connect peer.',
  operationId: 'GetConnectPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      connectPeerId: z
        .string()
        .regex(/^connect-peer-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'connectPeerId',
            in: 'path',
            required: true,
            description: 'The ID of the Connect peer.',
            schema: {
              type: 'string',
              pattern: '^connect-peer-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectPeerResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteConnectPeersConnectPeerIdRoute = createRoute({
  method: 'delete',
  path: '/connect-peers/{connectPeerId}',
  description: 'Deletes a Connect peer.',
  operationId: 'DeleteConnectPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      connectPeerId: z
        .string()
        .regex(/^connect-peer-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'connectPeerId',
            in: 'path',
            required: true,
            description: 'The ID of the deleted Connect peer.',
            schema: {
              type: 'string',
              pattern: '^connect-peer-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectPeerResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}/connections/{connectionId}',
  description: 'Deletes the specified connection in your global network.',
  operationId: 'DeleteConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      connectionId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            description: 'The ID of the connection.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/global-networks/{globalNetworkId}/connections/{connectionId}',
  description:
    'Updates the information for an existing connection. To remove information for any of the parameters, specify an empty string.',
  operationId: 'UpdateConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      connectionId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            description: 'The ID of the connection.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The ID of the link for the first device in the connection.',
                }),
              ConnectedLinkId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The ID of the link for the second device in the connection.',
                }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksCoreNetworkIdRoute = createRoute({
  method: 'get',
  path: '/core-networks/{coreNetworkId}',
  description: 'Returns information about the LIVE policy for a core network.',
  operationId: 'GetCoreNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteCoreNetworksCoreNetworkIdRoute = createRoute({
  method: 'delete',
  path: '/core-networks/{coreNetworkId}',
  description:
    'Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.',
  operationId: 'DeleteCoreNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The network ID of the deleted core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCoreNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchCoreNetworksCoreNetworkIdRoute = createRoute({
  method: 'patch',
  path: '/core-networks/{coreNetworkId}',
  description: 'Updates the description of a core network.',
  operationId: 'UpdateCoreNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The description of the update.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCoreNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRoute =
  createRoute({
    method: 'delete',
    path: '/core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}',
    description:
      "Deletes a policy version from a core network. You can't delete the current LIVE policy.",
    operationId: 'DeleteCoreNetworkPolicyVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        coreNetworkId: z
          .string()
          .regex(/^core-network-([0-9a-f]{8,17})$/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'coreNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of a core network for the deleted policy.',
              schema: {
                type: 'string',
                pattern: '^core-network-([0-9a-f]{8,17})$',
                minLength: 0,
                maxLength: 50,
              },
            },
          }),
        policyVersionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'policyVersionId',
              in: 'path',
              required: true,
              description: 'The version ID of the deleted policy.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteCoreNetworkPolicyVersionResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const deleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}/devices/{deviceId}',
  description:
    'Deletes an existing device. You must first disassociate the device from any links and customer gateways.',
  operationId: 'DeleteDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      deviceId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The ID of the device.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute = createRoute({
  method: 'patch',
  path: '/global-networks/{globalNetworkId}/devices/{deviceId}',
  description:
    'Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.',
  operationId: 'UpdateDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      deviceId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The ID of the device.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AWSLocation: z
                .object({
                  Zone: ConstrainedStringSchema.exactOptional().openapi({
                    description:
                      'The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.',
                  }),
                  SubnetArn: SubnetArnSchema.exactOptional().openapi({
                    description:
                      'The Amazon Resource Name (ARN) of the subnet that the device is located in.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies a location in Amazon Web Services.',
                  required: [],
                }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Type: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The type of the device.' }),
              Vendor: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              Model: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              SerialNumber: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              Location: z
                .object({
                  Address: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The physical address.',
                  }),
                  Latitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The latitude.',
                  }),
                  Longitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The longitude.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes a location.', required: [] }),
              SiteId: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The ID of the site.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}',
  description:
    'Deletes an existing global network. You must first delete all global network objects (devices, links, and sites), deregister all transit gateways, and delete any core networks.',
  operationId: 'DeleteGlobalNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGlobalNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdRoute = createRoute({
  method: 'patch',
  path: '/global-networks/{globalNetworkId}',
  description:
    'Updates an existing global network. To remove information for any of the parameters, specify an empty string.',
  operationId: 'UpdateGlobalNetwork',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of your global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGlobalNetworkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdLinksLinkIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}/links/{linkId}',
  description:
    'Deletes an existing link. You must first disassociate the link from any devices and customer gateways.',
  operationId: 'DeleteLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      linkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'linkId',
            in: 'path',
            required: true,
            description: 'The ID of the link.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLinkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdLinksLinkIdRoute = createRoute({
  method: 'patch',
  path: '/global-networks/{globalNetworkId}/links/{linkId}',
  description:
    'Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.',
  operationId: 'UpdateLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      linkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'linkId',
            in: 'path',
            required: true,
            description: 'The ID of the link.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Type: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
              Bandwidth: z
                .object({
                  UploadSpeed: IntegerSchema.exactOptional().openapi({
                    description: 'Upload speed in Mbps.',
                  }),
                  DownloadSpeed: IntegerSchema.exactOptional().openapi({
                    description: 'Download speed in Mbps.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes bandwidth information.', required: [] }),
              Provider: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLinkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deletePeeringsPeeringIdRoute = createRoute({
  method: 'delete',
  path: '/peerings/{peeringId}',
  description: 'Deletes an existing peering connection.',
  operationId: 'DeletePeering',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      peeringId: z
        .string()
        .regex(/^peering-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'peeringId',
            in: 'path',
            required: true,
            description: 'The ID of the peering connection to delete.',
            schema: {
              type: 'string',
              pattern: '^peering-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePeeringResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getResourcePolicyResourceArnRoute = createRoute({
  method: 'get',
  path: '/resource-policy/{resourceArn}',
  description: 'Returns information about a resource policy.',
  operationId: 'GetResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postResourcePolicyResourceArnRoute = createRoute({
  method: 'post',
  path: '/resource-policy/{resourceArn}',
  description: 'Creates or updates a resource policy.',
  operationId: 'PutResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource policy. ',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyDocument: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(10000000)
                .openapi({ description: 'The JSON resource policy document.' }),
            })
            .openapi({ required: ['PolicyDocument'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteResourcePolicyResourceArnRoute = createRoute({
  method: 'delete',
  path: '/resource-policy/{resourceArn}',
  description:
    'Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.',
  operationId: 'DeleteResourcePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the policy to delete.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdSitesSiteIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}/sites/{siteId}',
  description: 'Deletes an existing site. The site cannot be associated with any device or link.',
  operationId: 'DeleteSite',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      siteId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'siteId',
            in: 'path',
            required: true,
            description: 'The ID of the site.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSiteResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdSitesSiteIdRoute = createRoute({
  method: 'patch',
  path: '/global-networks/{globalNetworkId}/sites/{siteId}',
  description:
    'Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.',
  operationId: 'UpdateSite',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      siteId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'siteId',
            in: 'path',
            required: true,
            description: 'The ID of your site.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>',
                }),
              Location: z
                .object({
                  Address: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The physical address.',
                  }),
                  Latitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The latitude.',
                  }),
                  Longitude: ConstrainedStringSchema.exactOptional().openapi({
                    description: 'The longitude.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes a location.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSiteResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnRoute =
  createRoute({
    method: 'delete',
    path: '/global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}',
    description:
      'Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.',
    operationId: 'DeregisterTransitGateway',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
        transitGatewayArn: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(500)
          .openapi({
            param: {
              name: 'transitGatewayArn',
              in: 'path',
              required: true,
              description: 'The Amazon Resource Name (ARN) of the transit gateway.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 500 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeregisterTransitGatewayResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdRoute =
  createRoute({
    method: 'delete',
    path: '/global-networks/{globalNetworkId}/connect-peer-associations/{connectPeerId}',
    description: 'Disassociates a core network Connect peer from a device and a link. ',
    operationId: 'DisassociateConnectPeer',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
        connectPeerId: z
          .string()
          .regex(/^connect-peer-([0-9a-f]{8,17})$/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'connectPeerId',
              in: 'path',
              required: true,
              description: 'The ID of the Connect peer to disassociate from a device.',
              schema: {
                type: 'string',
                pattern: '^connect-peer-([0-9a-f]{8,17})$',
                minLength: 0,
                maxLength: 50,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateConnectPeerResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnRoute =
  createRoute({
    method: 'delete',
    path: '/global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}',
    description: 'Disassociates a customer gateway from a device and a link.',
    operationId: 'DisassociateCustomerGateway',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
        customerGatewayArn: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(500)
          .openapi({
            param: {
              name: 'customerGatewayArn',
              in: 'path',
              required: true,
              description: 'The Amazon Resource Name (ARN) of the customer gateway.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 500 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateCustomerGatewayResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdRoute = createRoute({
  method: 'delete',
  path: '/global-networks/{globalNetworkId}/link-associations#deviceId&linkId',
  description:
    'Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.',
  operationId: 'DisassociateLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      deviceId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'query',
            required: true,
            description: 'The ID of the device.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      linkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'linkId',
            in: 'query',
            required: true,
            description: 'The ID of the link.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateLinkResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnRoute =
  createRoute({
    method: 'delete',
    path: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations/{transitGatewayConnectPeerArn}',
    description: 'Disassociates a transit gateway Connect peer from a device and link.',
    operationId: 'DisassociateTransitGatewayConnectPeer',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
        transitGatewayConnectPeerArn: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(500)
          .openapi({
            param: {
              name: 'transitGatewayConnectPeerArn',
              in: 'path',
              required: true,
              description: 'The Amazon Resource Name (ARN) of the transit gateway Connect peer.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 500 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociateTransitGatewayConnectPeerResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRoute =
  createRoute({
    method: 'post',
    path: '/core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}/execute',
    description:
      'Executes a change set on your core network. Deploys changes globally based on the policy submitted..',
    operationId: 'ExecuteCoreNetworkChangeSet',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        coreNetworkId: z
          .string()
          .regex(/^core-network-([0-9a-f]{8,17})$/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'coreNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of a core network.',
              schema: {
                type: 'string',
                pattern: '^core-network-([0-9a-f]{8,17})$',
                minLength: 0,
                maxLength: 50,
              },
            },
          }),
        policyVersionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'policyVersionId',
              in: 'path',
              required: true,
              description: 'The ID of the policy version.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ExecuteCoreNetworkChangeSetResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const getConnectAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/connect-attachments/{attachmentId}',
  description: 'Returns information about a core network Connect attachment.',
  operationId: 'GetConnectAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRoute = createRoute({
  method: 'get',
  path: '/core-networks/{coreNetworkId}/core-network-change-events/{policyVersionId}',
  description: 'Returns information about a core network change event.',
  operationId: 'GetCoreNetworkChangeEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      policyVersionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'policyVersionId',
            in: 'path',
            required: true,
            description: 'The ID of the policy version.',
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreNetworkChangeEventsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRoute = createRoute({
  method: 'get',
  path: '/core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}',
  description: 'Returns a change set between the LIVE core network policy and a submitted policy.',
  operationId: 'GetCoreNetworkChangeSet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      policyVersionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'policyVersionId',
            in: 'path',
            required: true,
            description: 'The ID of the policy version.',
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreNetworkChangeSetResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute = createRoute({
  method: 'get',
  path: '/core-networks/{coreNetworkId}/core-network-policy',
  description:
    'Returns details about a core network policy. You can get details about your current live policy or any previous policy version.',
  operationId: 'GetCoreNetworkPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
    query: z.object({
      policyVersionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'policyVersionId',
            in: 'query',
            required: false,
            description: 'The ID of a core network policy version.',
            schema: { type: 'integer' },
          },
        }),
      alias: z
        .enum(['LIVE', 'LATEST'])
        .exactOptional()
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: false,
            description: 'The alias of a core network policy ',
            schema: { type: 'string', enum: ['LIVE', 'LATEST'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreNetworkPolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute = createRoute({
  method: 'post',
  path: '/core-networks/{coreNetworkId}/core-network-policy',
  description:
    'Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.',
  operationId: 'PutCoreNetworkPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyDocument: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(10000000)
                .openapi({ description: 'The policy document.' }),
              Description: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'a core network policy description.' }),
              LatestVersionId: z
                .int()
                .exactOptional()
                .openapi({ description: 'The ID of a core network policy. ' }),
              ClientToken: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['PolicyDocument'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutCoreNetworkPolicyResponseSchema } },
    },
    480: {
      description: 'CoreNetworkPolicyException',
      content: { 'application/json': { schema: CoreNetworkPolicyExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdNetworkResourceCountRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/network-resource-count',
  description:
    'Gets the count of network resources, by resource type, for the specified global network.',
  operationId: 'GetNetworkResourceCounts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkResourceCountsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/network-resource-relationships',
  description: 'Gets the network resource relationships for the specified global network.',
  operationId: 'GetNetworkResourceRelationships',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      registeredGatewayArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'registeredGatewayArn',
            in: 'query',
            required: false,
            description: 'The ARN of the registered gateway.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      awsRegion: z
        .string()
        .regex(/[\s\S]*/)
        .min(1)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'awsRegion',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services Region.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 1, maxLength: 63 },
          },
        }),
      accountId: z
        .string()
        .regex(/[\s\S]*/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services account ID.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 12, maxLength: 12 },
          },
        }),
      resourceType: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description: 'The ARN of the gateway.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkResourceRelationshipsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdNetworkResourcesRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/network-resources',
  description:
    '<p>Describes the network resources for the specified global network.</p> <p>The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</p>',
  operationId: 'GetNetworkResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      registeredGatewayArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'registeredGatewayArn',
            in: 'query',
            required: false,
            description: 'The ARN of the gateway.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      awsRegion: z
        .string()
        .regex(/[\s\S]*/)
        .min(1)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'awsRegion',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services Region.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 1, maxLength: 63 },
          },
        }),
      accountId: z
        .string()
        .regex(/[\s\S]*/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services account ID.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 12, maxLength: 12 },
          },
        }),
      resourceType: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>dx-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p> </li> <li> <p> <code>dx-vif</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>device</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p> </li> <li> <p> <code>link</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p> </li> <li> <p> <code>site</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p> </li> <li> <p> <code>transit-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p> </li> <li> <p> <code>transit-gateway-attachment</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p> </li> <li> <p> <code>transit-gateway-connect-peer</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p> </li> <li> <p> <code>transit-gateway-route-table</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p> </li> <li> <p> <code>vpn-connection</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p> </li> </ul>',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description: 'The ARN of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkResourcesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdNetworkRoutesRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/network-routes',
  description: 'Gets the network routes of the specified global network.',
  operationId: 'GetNetworkRoutes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RouteTableIdentifier: z
                .object({
                  TransitGatewayRouteTableArn:
                    TransitGatewayRouteTableArnSchema.exactOptional().openapi({
                      description: 'The ARN of the transit gateway route table.',
                    }),
                  CoreNetworkSegmentEdge:
                    CoreNetworkSegmentEdgeIdentifierSchema.exactOptional().openapi({
                      description: 'The segment edge in a core network.',
                    }),
                })
                .openapi({ description: 'Describes a route table.', required: [] }),
              ExactCidrMatches: z
                .array(ConstrainedStringSchema)
                .exactOptional()
                .openapi({ description: 'An exact CIDR block.' }),
              LongestPrefixMatches: z
                .array(ConstrainedStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The most specific route that matches the traffic (longest prefix match).',
                }),
              SubnetOfMatches: z
                .array(ConstrainedStringSchema)
                .exactOptional()
                .openapi({
                  description: 'The routes with a subnet that match the specified CIDR filter.',
                }),
              SupernetOfMatches: z
                .array(ConstrainedStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.',
                }),
              PrefixListIds: z
                .array(ConstrainedStringSchema)
                .exactOptional()
                .openapi({ description: 'The IDs of the prefix lists.' }),
              States: z
                .array(RouteStateSchema)
                .exactOptional()
                .openapi({ description: 'The route states.' }),
              Types: z
                .array(RouteTypeSchema)
                .exactOptional()
                .openapi({ description: 'The route types.' }),
              DestinationFilters: z
                .record(z.string(), FilterValuesSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.',
                }),
            })
            .openapi({ required: ['RouteTableIdentifier'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkRoutesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdNetworkTelemetryRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/network-telemetry',
  description: 'Gets the network telemetry of the specified global network.',
  operationId: 'GetNetworkTelemetry',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      registeredGatewayArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'registeredGatewayArn',
            in: 'query',
            required: false,
            description: 'The ARN of the gateway.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      awsRegion: z
        .string()
        .regex(/[\s\S]*/)
        .min(1)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'awsRegion',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services Region.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 1, maxLength: 63 },
          },
        }),
      accountId: z
        .string()
        .regex(/[\s\S]*/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'accountId',
            in: 'query',
            required: false,
            description: 'The Amazon Web Services account ID.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 12, maxLength: 12 },
          },
        }),
      resourceType: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              '<p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: false,
            description: 'The ARN of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkTelemetryResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/route-analyses/{routeAnalysisId}',
  description: 'Gets information about the specified route analysis.',
  operationId: 'GetRouteAnalysis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
      routeAnalysisId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(256)
        .openapi({
          param: {
            name: 'routeAnalysisId',
            in: 'path',
            required: true,
            description: 'The ID of the route analysis.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRouteAnalysisResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSiteToSiteVpnAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/site-to-site-vpn-attachments/{attachmentId}',
  description: 'Returns information about a site-to-site VPN attachment.',
  operationId: 'GetSiteToSiteVpnAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSiteToSiteVpnAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTransitGatewayPeeringsPeeringIdRoute = createRoute({
  method: 'get',
  path: '/transit-gateway-peerings/{peeringId}',
  description: 'Returns information about a transit gateway peer.',
  operationId: 'GetTransitGatewayPeering',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      peeringId: z
        .string()
        .regex(/^peering-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'peeringId',
            in: 'path',
            required: true,
            description: 'The ID of the peering request.',
            schema: {
              type: 'string',
              pattern: '^peering-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTransitGatewayPeeringResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute = createRoute({
  method: 'get',
  path: '/global-networks/{globalNetworkId}/transit-gateway-registrations',
  description:
    'Gets information about the transit gateway registrations in a specified global network.',
  operationId: 'GetTransitGatewayRegistrations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      transitGatewayArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TransitGatewayArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'transitGatewayArns',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TransitGatewayArn' } },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTransitGatewayRegistrationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/transit-gateway-registrations',
  description:
    'Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see <a href="https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions">Region Availability</a> in the <i>Amazon Web Services Transit Gateways for Global Networks User Guide</i>. The transit gateway can be in any of the supported Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global network. You cannot register a transit gateway in more than one global network.',
  operationId: 'RegisterTransitGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransitGatewayArn: z
                .string()
                .regex(/[\s\S]*/)
                .min(0)
                .max(500)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the transit gateway.' }),
            })
            .openapi({ required: ['TransitGatewayArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterTransitGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTransitGatewayRouteTableAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/transit-gateway-route-table-attachments/{attachmentId}',
  description: 'Returns information about a transit gateway route table attachment.',
  operationId: 'GetTransitGatewayRouteTableAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the transit gateway route table attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetTransitGatewayRouteTableAttachmentResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getVpcAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/vpc-attachments/{attachmentId}',
  description: 'Returns information about a VPC attachment.',
  operationId: 'GetVpcAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVpcAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchVpcAttachmentsAttachmentIdRoute = createRoute({
  method: 'patch',
  path: '/vpc-attachments/{attachmentId}',
  description: 'Updates a VPC attachment.',
  operationId: 'UpdateVpcAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AddSubnetArns: z
                .array(SubnetArnSchema)
                .exactOptional()
                .openapi({ description: 'Adds a subnet ARN to the VPC attachment.' }),
              RemoveSubnetArns: z
                .array(SubnetArnSchema)
                .exactOptional()
                .openapi({ description: 'Removes a subnet ARN from the attachment.' }),
              Options: z
                .object({
                  Ipv6Support: BooleanSchema.exactOptional().openapi({
                    description: 'Indicates whether IPv6 is supported.',
                  }),
                  ApplianceModeSupport: BooleanSchema.exactOptional().openapi({
                    description:
                      'Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is <code>false</code>.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Describes the VPC options.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVpcAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAttachmentsRoute = createRoute({
  method: 'get',
  path: '/attachments',
  description: 'Returns a list of core network attachments.',
  operationId: 'ListAttachments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      attachmentType: z
        .enum(['CONNECT', 'SITE_TO_SITE_VPN', 'VPC', 'TRANSIT_GATEWAY_ROUTE_TABLE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'attachmentType',
            in: 'query',
            required: false,
            description: 'The type of attachment.',
            schema: {
              type: 'string',
              enum: ['CONNECT', 'SITE_TO_SITE_VPN', 'VPC', 'TRANSIT_GATEWAY_ROUTE_TABLE'],
            },
          },
        }),
      edgeLocation: z
        .string()
        .regex(/[\s\S]*/)
        .min(1)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'edgeLocation',
            in: 'query',
            required: false,
            description: 'The Region where the edge is located.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 1, maxLength: 63 },
          },
        }),
      state: z
        .enum([
          'REJECTED',
          'PENDING_ATTACHMENT_ACCEPTANCE',
          'CREATING',
          'FAILED',
          'AVAILABLE',
          'UPDATING',
          'PENDING_NETWORK_UPDATE',
          'PENDING_TAG_ACCEPTANCE',
          'DELETING',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description: 'The state of the attachment.',
            schema: {
              type: 'string',
              enum: [
                'REJECTED',
                'PENDING_ATTACHMENT_ACCEPTANCE',
                'CREATING',
                'FAILED',
                'AVAILABLE',
                'UPDATING',
                'PENDING_NETWORK_UPDATE',
                'PENDING_TAG_ACCEPTANCE',
                'DELETING',
              ],
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttachmentsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRoute = createRoute({
  method: 'get',
  path: '/core-networks/{coreNetworkId}/core-network-policy-versions',
  description: 'Returns a list of core network policy versions.',
  operationId: 'ListCoreNetworkPolicyVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCoreNetworkPolicyVersionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getOrganizationsServiceAccessRoute = createRoute({
  method: 'get',
  path: '/organizations/service-access',
  description:
    'Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.',
  operationId: 'ListOrganizationServiceAccessStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListOrganizationServiceAccessStatusResponseSchema },
      },
    },
  },
})

export const postOrganizationsServiceAccessRoute = createRoute({
  method: 'post',
  path: '/organizations/service-access',
  description:
    'Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. ',
  operationId: 'StartOrganizationServiceAccessUpdate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Action: z
                .string()
                .min(0)
                .max(50)
                .openapi({
                  description:
                    'The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.',
                }),
            })
            .openapi({ required: ['Action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: StartOrganizationServiceAccessUpdateResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getPeeringsRoute = createRoute({
  method: 'get',
  path: '/peerings',
  description: 'Lists the peerings for a core network.',
  operationId: 'ListPeerings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      coreNetworkId: z
        .string()
        .regex(/^core-network-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'coreNetworkId',
            in: 'query',
            required: false,
            description: 'The ID of a core network.',
            schema: {
              type: 'string',
              pattern: '^core-network-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
      peeringType: z
        .literal('TRANSIT_GATEWAY')
        .exactOptional()
        .openapi({
          param: {
            name: 'peeringType',
            in: 'query',
            required: false,
            description: 'Returns a list of a peering requests.',
            schema: { type: 'string', enum: ['TRANSIT_GATEWAY'] },
          },
        }),
      edgeLocation: z
        .string()
        .regex(/[\s\S]*/)
        .min(1)
        .max(63)
        .exactOptional()
        .openapi({
          param: {
            name: 'edgeLocation',
            in: 'query',
            required: false,
            description: 'Returns a list edge locations for the ',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 1, maxLength: 63 },
          },
        }),
      state: z
        .enum(['CREATING', 'FAILED', 'AVAILABLE', 'DELETING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description: 'Returns a list of the peering request states.',
            schema: { type: 'string', enum: ['CREATING', 'FAILED', 'AVAILABLE', 'DELETING'] },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token for the next page of results.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 2048 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPeeringsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags for a specified resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Tags a specified resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .array(TagSchema)
                .openapi({ description: 'The tags to apply to the specified resource.' }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postAttachmentsAttachmentIdRejectRoute = createRoute({
  method: 'post',
  path: '/attachments/{attachmentId}/reject',
  description: 'Rejects a core network attachment request.',
  operationId: 'RejectAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      attachmentId: z
        .string()
        .regex(/^attachment-([0-9a-f]{8,17})$/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'path',
            required: true,
            description: 'The ID of the attachment.',
            schema: {
              type: 'string',
              pattern: '^attachment-([0-9a-f]{8,17})$',
              minLength: 0,
              maxLength: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectAttachmentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRoute =
  createRoute({
    method: 'post',
    path: '/core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}/restore',
    description:
      'Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.',
    operationId: 'RestoreCoreNetworkPolicyVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        coreNetworkId: z
          .string()
          .regex(/^core-network-([0-9a-f]{8,17})$/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'coreNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of a core network.',
              schema: {
                type: 'string',
                pattern: '^core-network-([0-9a-f]{8,17})$',
                minLength: 0,
                maxLength: 50,
              },
            },
          }),
        policyVersionId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              name: 'policyVersionId',
              in: 'path',
              required: true,
              description: 'The ID of the policy version to restore.',
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RestoreCoreNetworkPolicyVersionResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postGlobalNetworksGlobalNetworkIdRouteAnalysesRoute = createRoute({
  method: 'post',
  path: '/global-networks/{globalNetworkId}/route-analyses',
  description:
    'Starts analyzing the routing path between the specified source and destination. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.',
  operationId: 'StartRouteAnalysis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      globalNetworkId: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'globalNetworkId',
            in: 'path',
            required: true,
            description: 'The ID of the global network.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Source: z
                .object({
                  TransitGatewayAttachmentArn:
                    TransitGatewayAttachmentArnSchema.exactOptional().openapi({
                      description: 'The ARN of the transit gateway attachment.',
                    }),
                  IpAddress: IPAddressSchema.exactOptional().openapi({
                    description: 'The IP address.',
                  }),
                })
                .openapi({ description: 'Describes a source or a destination.', required: [] }),
              Destination: z
                .object({
                  TransitGatewayAttachmentArn:
                    TransitGatewayAttachmentArnSchema.exactOptional().openapi({
                      description: 'The ARN of the transit gateway attachment.',
                    }),
                  IpAddress: IPAddressSchema.exactOptional().openapi({
                    description: 'The IP address.',
                  }),
                })
                .openapi({ description: 'Describes a source or a destination.', required: [] }),
              IncludeReturnPath: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether to analyze the return path. The default is <code>false</code>.',
                }),
              UseMiddleboxes: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether to include the location of middlebox appliances in the route analysis. The default is <code>false</code>.',
                }),
            })
            .openapi({ required: ['Source', 'Destination'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRouteAnalysisResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes tags from a specified resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/[\s\S]*/)
        .min(0)
        .max(1500)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys to remove from the specified resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataRoute =
  createRoute({
    method: 'patch',
    path: '/global-networks/{globalNetworkId}/network-resources/{resourceArn}/metadata',
    description: 'Updates the resource metadata for the specified global network.',
    operationId: 'UpdateNetworkResourceMetadata',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        globalNetworkId: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(50)
          .openapi({
            param: {
              name: 'globalNetworkId',
              in: 'path',
              required: true,
              description: 'The ID of the global network.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 50 },
            },
          }),
        resourceArn: z
          .string()
          .regex(/[\s\S]*/)
          .min(0)
          .max(1500)
          .openapi({
            param: {
              name: 'resourceArn',
              in: 'path',
              required: true,
              description: 'The ARN of the resource.',
              schema: { type: 'string', pattern: '[\\s\\S]*', minLength: 0, maxLength: 1500 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Metadata: z
                  .record(z.string(), ConstrainedStringSchema)
                  .openapi({ description: 'The resource metadata.' }),
              })
              .openapi({ required: ['Metadata'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateNetworkResourceMetadataResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })
