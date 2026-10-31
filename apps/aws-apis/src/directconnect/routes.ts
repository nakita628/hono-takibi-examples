import { createRoute, z } from '@hono/zod-openapi'

const DirectConnectGatewayIdSchema = z.string().openapi('DirectConnectGatewayId')

const OwnerAccountSchema = z.string().openapi('OwnerAccount')

const DirectConnectGatewayAssociationStateSchema = z
  .enum(['associating', 'associated', 'disassociating', 'disassociated', 'updating'])
  .openapi('DirectConnectGatewayAssociationState')

const StateChangeErrorSchema = z.string().openapi('StateChangeError')

const GatewayIdentifierSchema = z.string().openapi('GatewayIdentifier')

const GatewayTypeSchema = z.enum(['virtualPrivateGateway', 'transitGateway']).openapi('GatewayType')

const RegionSchema = z.string().openapi('Region')

const AssociatedGatewaySchema = z
  .object({
    id: GatewayIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the associated gateway.' }),
    ).exactOptional(),
    type: GatewayTypeSchema.and(
      z.any().openapi({ description: 'The type of associated gateway.' }),
    ).exactOptional(),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway.',
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z.any().openapi({ description: 'The Region where the associated gateway is located.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the associated gateway.', required: [] })
  .openapi('AssociatedGateway')

const DirectConnectGatewayAssociationIdSchema = z
  .string()
  .openapi('DirectConnectGatewayAssociationId')

const CIDRSchema = z.string().openapi('CIDR')

const RouteFilterPrefixSchema = z
  .object({
    cidr: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.',
    required: [],
  })
  .openapi('RouteFilterPrefix')

const RouteFilterPrefixListSchema = z
  .array(RouteFilterPrefixSchema)
  .openapi('RouteFilterPrefixList')

const VirtualGatewayIdSchema = z.string().openapi('VirtualGatewayId')

const VirtualGatewayRegionSchema = z
  .string()
  .openapi({ deprecated: true })
  .openapi('VirtualGatewayRegion')

const DirectConnectGatewayAssociationSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    directConnectGatewayOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the associated gateway.',
        }),
    ).exactOptional(),
    associationState: DirectConnectGatewayAssociationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the association. The following are the possible values:</p> <ul> <li> <p> <code>associating</code>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <code>associated</code>: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic.</p> </li> <li> <p> <code>disassociating</code>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <code>disassociated</code>: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.</p> </li> <li> <p> <code>updating</code>: The CIDR blocks for the virtual private gateway or transit gateway are currently being updated. This could be new CIDR blocks added or current CIDR blocks removed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    stateChangeError: StateChangeErrorSchema.and(
      z
        .any()
        .openapi({ description: 'The error message if the state of an object failed to advance.' }),
    ).exactOptional(),
    associatedGateway: AssociatedGatewaySchema.and(
      z.any().openapi({ description: 'Information about the associated gateway.' }),
    ).exactOptional(),
    associationId: DirectConnectGatewayAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway association.' }),
    ).exactOptional(),
    allowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon VPC prefixes to advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the virtual private gateway. Applies only to private virtual interfaces.',
        }),
    ).exactOptional(),
    virtualGatewayRegion: VirtualGatewayRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region where the virtual private gateway is located.',
        }),
    ).exactOptional(),
    virtualGatewayOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the virtual private gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.',
    required: [],
  })
  .openapi('DirectConnectGatewayAssociation')

const AcceptDirectConnectGatewayAssociationProposalResultSchema = z
  .object({
    directConnectGatewayAssociation: DirectConnectGatewayAssociationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcceptDirectConnectGatewayAssociationProposalResult')

const DirectConnectGatewayAssociationProposalIdSchema = z
  .string()
  .openapi('DirectConnectGatewayAssociationProposalId')

const AcceptDirectConnectGatewayAssociationProposalRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ),
    proposalId: DirectConnectGatewayAssociationProposalIdSchema.and(
      z.any().openapi({ description: 'The ID of the request proposal.' }),
    ),
    associatedGatewayOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.',
        }),
    ),
    overrideAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p> <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['directConnectGatewayId', 'proposalId', 'associatedGatewayOwnerAccount'],
    title: 'AcceptDirectConnectGatewayAssociationProposalRequest',
  })
  .openapi('AcceptDirectConnectGatewayAssociationProposalRequest')

const DirectConnectServerExceptionSchema = z.any().openapi('DirectConnectServerException')

const DirectConnectClientExceptionSchema = z.any().openapi('DirectConnectClientException')

const ConnectionIdSchema = z.string().openapi('ConnectionId')

const ConnectionNameSchema = z.string().openapi('ConnectionName')

const ConnectionStateSchema = z
  .enum([
    'ordering',
    'requested',
    'pending',
    'available',
    'down',
    'deleting',
    'deleted',
    'rejected',
    'unknown',
  ])
  .openapi('ConnectionState')

const LocationCodeSchema = z.string().openapi('LocationCode')

const BandwidthSchema = z.string().openapi('Bandwidth')

const VLANSchema = z.int().openapi('VLAN')

const PartnerNameSchema = z.string().openapi('PartnerName')

const LoaIssueTimeSchema = z.iso.datetime({ offset: true }).openapi('LoaIssueTime')

const LagIdSchema = z.string().openapi('LagId')

const AwsDeviceSchema = z.string().openapi({ deprecated: true }).openapi('AwsDevice')

const JumboFrameCapableSchema = z.boolean().openapi('JumboFrameCapable')

const AwsDeviceV2Schema = z.string().openapi('AwsDeviceV2')

const AwsLogicalDeviceIdSchema = z.string().openapi('AwsLogicalDeviceId')

const HasLogicalRedundancySchema = z.enum(['unknown', 'yes', 'no']).openapi('HasLogicalRedundancy')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: 'The key.' })),
    value: TagValueSchema.and(z.any().openapi({ description: 'The value.' })).exactOptional(),
  })
  .openapi({ required: ['key'], description: 'Information about a tag.' })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).openapi('TagList')

const ProviderNameSchema = z.string().openapi('ProviderName')

const MacSecCapableSchema = z.boolean().openapi('MacSecCapable')

const PortEncryptionStatusSchema = z.string().openapi('PortEncryptionStatus')

const EncryptionModeSchema = z.string().openapi('EncryptionMode')

const SecretARNSchema = z.string().openapi('SecretARN')

const CknSchema = z.string().openapi('Ckn')

const StateSchema = z.string().openapi('State')

const StartOnDateSchema = z.string().openapi('StartOnDate')

const MacSecKeySchema = z
  .object({
    secretARN: SecretARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.',
        }),
    ).exactOptional(),
    ckn: CknSchema.and(
      z
        .any()
        .openapi({ description: 'The Connection Key Name (CKN) for the MAC Security secret key.' }),
    ).exactOptional(),
    state: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the MAC Security (MACsec) secret key.</p> <p>The possible values are:</p> <ul> <li> <p> <code>associating</code>: The MAC Security (MACsec) secret key is being validated and not yet associated with the connection or LAG.</p> </li> <li> <p> <code>associated</code>: The MAC Security (MACsec) secret key is validated and associated with the connection or LAG.</p> </li> <li> <p> <code>disassociating</code>: The MAC Security (MACsec) secret key is being disassociated from the connection or LAG</p> </li> <li> <p> <code>disassociated</code>: The MAC Security (MACsec) secret key is no longer associated with the connection or LAG.</p> </li> </ul>',
        }),
    ).exactOptional(),
    startOn: StartOnDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the MAC Security (MACsec) secret key.', required: [] })
  .openapi('MacSecKey')

const MacSecKeyListSchema = z.array(MacSecKeySchema).openapi('MacSecKeyList')

const ConnectionSchema = z
  .object({
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the connection.',
        }),
    ).exactOptional(),
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ).exactOptional(),
    connectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection.' }),
    ).exactOptional(),
    connectionState: ConnectionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the connection. The following are the possible values:</p> <ul> <li> <p> <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p> </li> <li> <p> <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <code>pending</code>: The connection has been approved and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is up and the connection is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The connection is being deleted.</p> </li> <li> <p> <code>deleted</code>: The connection has been deleted.</p> </li> <li> <p> <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p> </li> <li> <p> <code>unknown</code>: The state of the connection is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the connection is located.',
        }),
    ).exactOptional(),
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the connection.' }),
    ).exactOptional(),
    bandwidth: BandwidthSchema.and(
      z.any().openapi({ description: 'The bandwidth of the connection.' }),
    ).exactOptional(),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })).exactOptional(),
    partnerName: PartnerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Direct Connect service provider associated with the connection.',
        }),
    ).exactOptional(),
    loaIssueTime: LoaIssueTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent call to <a>DescribeLoa</a> for this connection.',
        }),
    ).exactOptional(),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
    awsDevice: AwsDeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'The Direct Connect endpoint on which the physical connection terminates.',
        }),
    ).exactOptional(),
    jumboFrameCapable: JumboFrameCapableSchema.and(
      z.any().openapi({ description: 'Indicates whether jumbo frames (9001 MTU) are supported.' }),
    ).exactOptional(),
    awsDeviceV2: AwsDeviceV2Schema.and(
      z
        .any()
        .openapi({
          description: 'The Direct Connect endpoint that terminates the physical connection.',
        }),
    ).exactOptional(),
    awsLogicalDeviceId: AwsLogicalDeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.',
        }),
    ).exactOptional(),
    hasLogicalRedundancy: HasLogicalRedundancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the connection.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service provider associated with the connection.',
        }),
    ).exactOptional(),
    macSecCapable: MacSecCapableSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the connection supports MAC Security (MACsec).',
        }),
    ).exactOptional(),
    portEncryptionStatus: PortEncryptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MAC Security (MACsec) port link status of the connection.</p> <p>The valid values are <code>Encryption Up</code>, which means that there is an active Connection Key Name, or <code>Encryption Down</code>.</p>',
        }),
    ).exactOptional(),
    encryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MAC Security (MACsec) connection encryption mode.</p> <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>',
        }),
    ).exactOptional(),
    macSecKeys: MacSecKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The MAC Security (MACsec) security keys associated with the connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Direct Connect connection.', required: [] })
  .openapi('Connection')

const InterconnectIdSchema = z.string().openapi('InterconnectId')

const AllocateConnectionOnInterconnectRequestSchema = z
  .object({
    bandwidth: BandwidthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.',
        }),
    ),
    connectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the provisioned connection.' }),
    ),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.',
        }),
    ),
    interconnectId: InterconnectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the interconnect on which the connection will be provisioned.',
        }),
    ),
    vlan: VLANSchema.and(
      z.any().openapi({ description: 'The dedicated VLAN provisioned to the connection.' }),
    ),
  })
  .openapi({
    required: ['bandwidth', 'connectionName', 'ownerAccount', 'interconnectId', 'vlan'],
    title: 'AllocateConnectionOnInterconnectRequest',
  })
  .openapi('AllocateConnectionOnInterconnectRequest')

const AllocateHostedConnectionRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect or LAG.' }),
    ),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account ID of the customer for the connection.',
        }),
    ),
    bandwidth: BandwidthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection. ',
        }),
    ),
    connectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the hosted connection.' }),
    ),
    vlan: VLANSchema.and(
      z.any().openapi({ description: 'The dedicated VLAN provisioned to the hosted connection.' }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the connection.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['connectionId', 'ownerAccount', 'bandwidth', 'connectionName', 'vlan'],
    title: 'AllocateHostedConnectionRequest',
  })
  .openapi('AllocateHostedConnectionRequest')

const DuplicateTagKeysExceptionSchema = z.any().openapi('DuplicateTagKeysException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const VirtualInterfaceIdSchema = z.string().openapi('VirtualInterfaceId')

const VirtualInterfaceTypeSchema = z.string().openapi('VirtualInterfaceType')

const VirtualInterfaceNameSchema = z.string().openapi('VirtualInterfaceName')

const ASNSchema = z.int().openapi('ASN')

const LongAsnSchema = z.int().openapi('LongAsn')

const BGPAuthKeySchema = z.string().openapi('BGPAuthKey')

const AmazonAddressSchema = z.string().openapi('AmazonAddress')

const CustomerAddressSchema = z.string().openapi('CustomerAddress')

const AddressFamilySchema = z.enum(['ipv4', 'ipv6']).openapi('AddressFamily')

const VirtualInterfaceStateSchema = z
  .enum([
    'confirming',
    'verifying',
    'pending',
    'available',
    'down',
    'deleting',
    'deleted',
    'rejected',
    'unknown',
  ])
  .openapi('VirtualInterfaceState')

const RouterConfigSchema = z.string().openapi('RouterConfig')

const MTUSchema = z.int().openapi('MTU')

const BGPPeerIdSchema = z.string().openapi('BGPPeerId')

const BGPPeerStateSchema = z
  .enum(['verifying', 'pending', 'available', 'deleting', 'deleted'])
  .openapi('BGPPeerState')

const BGPStatusSchema = z.enum(['up', 'down', 'unknown']).openapi('BGPStatus')

const BGPPeerSchema = z
  .object({
    bgpPeerId: BGPPeerIdSchema.and(
      z.any().openapi({ description: 'The ID of the BGP peer.' }),
    ).exactOptional(),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    bgpPeerState: BGPPeerStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the BGP peer. The following are the possible values:</p> <ul> <li> <p> <code>verifying</code>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.</p> </li> <li> <p> <code>pending</code>: The BGP peer is created, and remains in this state until it is ready to be established.</p> </li> <li> <p> <code>available</code>: The BGP peer is ready to be established.</p> </li> <li> <p> <code>deleting</code>: The BGP peer is being deleted.</p> </li> <li> <p> <code>deleted</code>: The BGP peer is deleted and cannot be established.</p> </li> </ul>',
        }),
    ).exactOptional(),
    bgpStatus: BGPStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the BGP peer. The following are the possible values:</p> <ul> <li> <p> <code>up</code>: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.</p> </li> <li> <p> <code>down</code>: The BGP peer is down.</p> </li> <li> <p> <code>unknown</code>: The BGP peer status is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    awsDeviceV2: AwsDeviceV2Schema.and(
      z.any().openapi({ description: 'The Direct Connect endpoint that terminates the BGP peer.' }),
    ).exactOptional(),
    awsLogicalDeviceId: AwsLogicalDeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a BGP peer.', required: [] })
  .openapi('BGPPeer')

const BGPPeerListSchema = z.array(BGPPeerSchema).openapi('BGPPeerList')

const SiteLinkEnabledSchema = z.boolean().openapi('SiteLinkEnabled')

const VirtualInterfaceSchema = z
  .object({
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the virtual interface.',
        }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the connection.' }),
    ).exactOptional(),
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ).exactOptional(),
    virtualInterfaceType: VirtualInterfaceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of virtual interface. The possible values are <code>private</code> and <code>public</code>.',
        }),
    ).exactOptional(),
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ).exactOptional(),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })).exactOptional(),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ).exactOptional(),
    amazonSideAsn: LongAsnSchema.and(
      z
        .any()
        .openapi({
          description: 'The autonomous system number (ASN) for the Amazon side of the connection.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    virtualInterfaceState: VirtualInterfaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    customerRouterConfig: RouterConfigSchema.and(
      z.any().openapi({ description: 'The customer router configuration.' }),
    ).exactOptional(),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.',
        }),
    ).exactOptional(),
    jumboFrameCapable: JumboFrameCapableSchema.and(
      z.any().openapi({ description: 'Indicates whether jumbo frames (9001 MTU) are supported.' }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the virtual private gateway. Applies only to private virtual interfaces.',
        }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    routeFilterPrefixes: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.',
        }),
    ).exactOptional(),
    bgpPeers: BGPPeerListSchema.and(
      z.any().openapi({ description: 'The BGP peers configured on this virtual interface.' }),
    ).exactOptional(),
    region: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the virtual interface is located.',
        }),
    ).exactOptional(),
    awsDeviceV2: AwsDeviceV2Schema.and(
      z
        .any()
        .openapi({
          description: 'The Direct Connect endpoint that terminates the physical connection.',
        }),
    ).exactOptional(),
    awsLogicalDeviceId: AwsLogicalDeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the virtual interface.' }),
    ).exactOptional(),
    siteLinkEnabled: SiteLinkEnabledSchema.and(
      z.any().openapi({ description: 'Indicates whether SiteLink is enabled.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a virtual interface.', required: [] })
  .openapi('VirtualInterface')

const NewPrivateVirtualInterfaceAllocationSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the private virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['virtualInterfaceName', 'vlan', 'asn'],
    description: 'Information about a private virtual interface to be provisioned on a connection.',
  })
  .openapi('NewPrivateVirtualInterfaceAllocation')

const AllocatePrivateVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the connection on which the private virtual interface is provisioned.',
        }),
    ),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the virtual private interface.',
        }),
    ),
    newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocationSchema.and(
      z.any().openapi({ description: 'Information about the private virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'ownerAccount', 'newPrivateVirtualInterfaceAllocation'],
    title: 'AllocatePrivateVirtualInterfaceRequest',
  })
  .openapi('AllocatePrivateVirtualInterfaceRequest')

const NewPublicVirtualInterfaceAllocationSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    routeFilterPrefixes: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the public virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['virtualInterfaceName', 'vlan', 'asn'],
    description: 'Information about a public virtual interface to be provisioned on a connection.',
  })
  .openapi('NewPublicVirtualInterfaceAllocation')

const AllocatePublicVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the connection on which the public virtual interface is provisioned.',
        }),
    ),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the public virtual interface.',
        }),
    ),
    newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocationSchema.and(
      z.any().openapi({ description: 'Information about the public virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'ownerAccount', 'newPublicVirtualInterfaceAllocation'],
    title: 'AllocatePublicVirtualInterfaceRequest',
  })
  .openapi('AllocatePublicVirtualInterfaceRequest')

const AllocateTransitVirtualInterfaceResultSchema = z
  .object({ virtualInterface: VirtualInterfaceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AllocateTransitVirtualInterfaceResult')

const NewTransitVirtualInterfaceAllocationSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ).exactOptional(),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })).exactOptional(),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ).exactOptional(),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. ',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags associated with the transitive virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a transit virtual interface to be provisioned on a connection.',
    required: [],
  })
  .openapi('NewTransitVirtualInterfaceAllocation')

const AllocateTransitVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the connection on which the transit virtual interface is provisioned.',
        }),
    ),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the transit virtual interface.',
        }),
    ),
    newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocationSchema.and(
      z.any().openapi({ description: 'Information about the transit virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'ownerAccount', 'newTransitVirtualInterfaceAllocation'],
    title: 'AllocateTransitVirtualInterfaceRequest',
  })
  .openapi('AllocateTransitVirtualInterfaceRequest')

const AssociateConnectionWithLagRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    lagId: LagIdSchema.and(
      z.any().openapi({ description: 'The ID of the LAG with which to associate the connection.' }),
    ),
  })
  .openapi({ required: ['connectionId', 'lagId'], title: 'AssociateConnectionWithLagRequest' })
  .openapi('AssociateConnectionWithLagRequest')

const AssociateHostedConnectionRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the hosted connection.' }),
    ),
    parentConnectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect or the LAG.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'parentConnectionId'],
    title: 'AssociateHostedConnectionRequest',
  })
  .openapi('AssociateHostedConnectionRequest')

const AssociateMacSecKeyResponseSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).',
        }),
    ).exactOptional(),
    macSecKeys: MacSecKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MAC Security (MACsec) security keys associated with the dedicated connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateMacSecKeyResponse')

const CakSchema = z.string().openapi('Cak')

const AssociateMacSecKeyRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p> <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>',
        }),
    ),
    secretARN: SecretARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection.</p> <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve the MAC Security (MACsec) secret key.</p> <p>If you use this request parameter, you do not use the <code>ckn</code> and <code>cak</code> request parameters.</p>',
        }),
    ).exactOptional(),
    ckn: CknSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MAC Security (MACsec) CKN to associate with the dedicated connection.</p> <p>You can create the CKN/CAK pair using an industry standard tool.</p> <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p> <p>If you use this request parameter, you must use the <code>cak</code> request parameter and not use the <code>secretARN</code> request parameter.</p>',
        }),
    ).exactOptional(),
    cak: CakSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MAC Security (MACsec) CAK to associate with the dedicated connection.</p> <p>You can create the CKN/CAK pair using an industry standard tool.</p> <p> The valid values are 64 hexadecimal characters (0-9, A-E).</p> <p>If you use this request parameter, you must use the <code>ckn</code> request parameter and not use the <code>secretARN</code> request parameter.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectionId'], title: 'AssociateMacSecKeyRequest' })
  .openapi('AssociateMacSecKeyRequest')

const AssociateVirtualInterfaceRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the LAG or connection.' }),
    ),
  })
  .openapi({
    required: ['virtualInterfaceId', 'connectionId'],
    title: 'AssociateVirtualInterfaceRequest',
  })
  .openapi('AssociateVirtualInterfaceRequest')

const ConfirmConnectionResponseSchema = z
  .object({
    connectionState: ConnectionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the connection. The following are the possible values:</p> <ul> <li> <p> <code>ordering</code>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p> </li> <li> <p> <code>requested</code>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <code>pending</code>: The connection has been approved and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is up and the connection is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The connection is being deleted.</p> </li> <li> <p> <code>deleted</code>: The connection has been deleted.</p> </li> <li> <p> <code>rejected</code>: A hosted connection in the <code>ordering</code> state enters the <code>rejected</code> state if it is deleted by the customer.</p> </li> <li> <p> <code>unknown</code>: The state of the connection is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmConnectionResponse')

const ConfirmConnectionRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the hosted connection.' }),
    ),
  })
  .openapi({ required: ['connectionId'], title: 'ConfirmConnectionRequest' })
  .openapi('ConfirmConnectionRequest')

const StatusSchema = z.string().max(30).openapi('Status')

const ConfirmCustomerAgreementResponseSchema = z
  .object({
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the customer agreement when the connection was created. This will be either <code>signed</code> or <code>unsigned</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmCustomerAgreementResponse')

const AgreementNameSchema = z.string().max(100).openapi('AgreementName')

const ConfirmCustomerAgreementRequestSchema = z
  .object({
    agreementName: AgreementNameSchema.and(
      z.any().openapi({ description: ' The name of the customer agreement. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ConfirmCustomerAgreementRequest', required: [] })
  .openapi('ConfirmCustomerAgreementRequest')

const ConfirmPrivateVirtualInterfaceResponseSchema = z
  .object({
    virtualInterfaceState: VirtualInterfaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmPrivateVirtualInterfaceResponse')

const ConfirmPrivateVirtualInterfaceRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'ConfirmPrivateVirtualInterfaceRequest' })
  .openapi('ConfirmPrivateVirtualInterfaceRequest')

const ConfirmPublicVirtualInterfaceResponseSchema = z
  .object({
    virtualInterfaceState: VirtualInterfaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmPublicVirtualInterfaceResponse')

const ConfirmPublicVirtualInterfaceRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'ConfirmPublicVirtualInterfaceRequest' })
  .openapi('ConfirmPublicVirtualInterfaceRequest')

const ConfirmTransitVirtualInterfaceResponseSchema = z
  .object({
    virtualInterfaceState: VirtualInterfaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmTransitVirtualInterfaceResponse')

const ConfirmTransitVirtualInterfaceRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ),
  })
  .openapi({
    required: ['virtualInterfaceId', 'directConnectGatewayId'],
    title: 'ConfirmTransitVirtualInterfaceRequest',
  })
  .openapi('ConfirmTransitVirtualInterfaceRequest')

const CreateBGPPeerResponseSchema = z
  .object({
    virtualInterface: VirtualInterfaceSchema.and(
      z.any().openapi({ description: 'The virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBGPPeerResponse')

const NewBGPPeerSchema = z
  .object({
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a new BGP peer.', required: [] })
  .openapi('NewBGPPeer')

const CreateBGPPeerRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
    newBGPPeer: NewBGPPeerSchema.and(
      z.any().openapi({ description: 'Information about the BGP peer.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateBGPPeerRequest', required: [] })
  .openapi('CreateBGPPeerRequest')

const RequestMACSecSchema = z.boolean().openapi('RequestMACSec')

const CreateConnectionRequestSchema = z
  .object({
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the connection.' }),
    ),
    bandwidth: BandwidthSchema.and(
      z.any().openapi({ description: 'The bandwidth of the connection.' }),
    ),
    connectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection.' }),
    ),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with the lag.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service provider associated with the requested connection.',
        }),
    ).exactOptional(),
    requestMACSec: RequestMACSecSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether you want the connection to support MAC Security (MACsec).</p> <p>MAC Security (MACsec) is only available on dedicated connections. For information about MAC Security (MACsec) prerequisties, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['location', 'bandwidth', 'connectionName'],
    title: 'CreateConnectionRequest',
  })
  .openapi('CreateConnectionRequest')

const DirectConnectGatewayNameSchema = z.string().openapi('DirectConnectGatewayName')

const DirectConnectGatewayStateSchema = z
  .enum(['pending', 'available', 'deleting', 'deleted'])
  .openapi('DirectConnectGatewayState')

const DirectConnectGatewaySchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    directConnectGatewayName: DirectConnectGatewayNameSchema.and(
      z.any().openapi({ description: 'The name of the Direct Connect gateway.' }),
    ).exactOptional(),
    amazonSideAsn: LongAsnSchema.and(
      z
        .any()
        .openapi({
          description: 'The autonomous system number (ASN) for the Amazon side of the connection.',
        }),
    ).exactOptional(),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the Direct Connect gateway.',
        }),
    ).exactOptional(),
    directConnectGatewayState: DirectConnectGatewayStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the Direct Connect gateway. The following are the possible values:</p> <ul> <li> <p> <code>pending</code>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p> </li> <li> <p> <code>available</code>: The Direct Connect gateway is ready for use.</p> </li> <li> <p> <code>deleting</code>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p> </li> <li> <p> <code>deleted</code>: The Direct Connect gateway is deleted and cannot pass traffic.</p> </li> </ul>',
        }),
    ).exactOptional(),
    stateChangeError: StateChangeErrorSchema.and(
      z
        .any()
        .openapi({ description: 'The error message if the state of an object failed to advance.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.',
    required: [],
  })
  .openapi('DirectConnectGateway')

const CreateDirectConnectGatewayResultSchema = z
  .object({
    directConnectGateway: DirectConnectGatewaySchema.and(
      z.any().openapi({ description: 'The Direct Connect gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDirectConnectGatewayResult')

const CreateDirectConnectGatewayRequestSchema = z
  .object({
    directConnectGatewayName: DirectConnectGatewayNameSchema.and(
      z.any().openapi({ description: 'The name of the Direct Connect gateway.' }),
    ),
    amazonSideAsn: LongAsnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['directConnectGatewayName'], title: 'CreateDirectConnectGatewayRequest' })
  .openapi('CreateDirectConnectGatewayRequest')

const CreateDirectConnectGatewayAssociationResultSchema = z
  .object({
    directConnectGatewayAssociation: DirectConnectGatewayAssociationSchema.and(
      z.any().openapi({ description: 'The association to be created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDirectConnectGatewayAssociationResult')

const GatewayIdToAssociateSchema = z.string().openapi('GatewayIdToAssociate')

const CreateDirectConnectGatewayAssociationRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ),
    gatewayId: GatewayIdToAssociateSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway or transit gateway.' }),
    ).exactOptional(),
    addAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon VPC prefixes to advertise to the Direct Connect gateway</p> <p>This parameter is required when you create an association to a transit gateway.</p> <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>Direct Connect User Guide</i>.</p>',
        }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['directConnectGatewayId'],
    title: 'CreateDirectConnectGatewayAssociationRequest',
  })
  .openapi('CreateDirectConnectGatewayAssociationRequest')

const DirectConnectGatewayAssociationProposalStateSchema = z
  .enum(['requested', 'accepted', 'deleted'])
  .openapi('DirectConnectGatewayAssociationProposalState')

const DirectConnectGatewayAssociationProposalSchema = z
  .object({
    proposalId: DirectConnectGatewayAssociationProposalIdSchema.and(
      z.any().openapi({ description: 'The ID of the association proposal.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    directConnectGatewayOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the Direct Connect gateway.',
        }),
    ).exactOptional(),
    proposalState: DirectConnectGatewayAssociationProposalStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the proposal. The following are possible values:</p> <ul> <li> <p> <code>accepted</code>: The proposal has been accepted. The Direct Connect gateway association is available to use in this state.</p> </li> <li> <p> <code>deleted</code>: The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway association cannot be used in this state.</p> </li> <li> <p> <code>requested</code>: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.</p> </li> </ul>',
        }),
    ).exactOptional(),
    associatedGateway: AssociatedGatewaySchema.and(
      z.any().openapi({ description: 'Information about the associated gateway.' }),
    ).exactOptional(),
    existingAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description: 'The existing Amazon VPC prefixes advertised to the Direct Connect gateway.',
        }),
    ).exactOptional(),
    requestedAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon VPC prefixes to advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. ',
    required: [],
  })
  .openapi('DirectConnectGatewayAssociationProposal')

const CreateDirectConnectGatewayAssociationProposalResultSchema = z
  .object({
    directConnectGatewayAssociationProposal: DirectConnectGatewayAssociationProposalSchema.and(
      z.any().openapi({ description: 'Information about the Direct Connect gateway proposal.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDirectConnectGatewayAssociationProposalResult')

const CreateDirectConnectGatewayAssociationProposalRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ),
    directConnectGatewayOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services account that owns the Direct Connect gateway.',
        }),
    ),
    gatewayId: GatewayIdToAssociateSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway or transit gateway.' }),
    ),
    addAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon VPC prefixes to advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
    removeAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['directConnectGatewayId', 'directConnectGatewayOwnerAccount', 'gatewayId'],
    title: 'CreateDirectConnectGatewayAssociationProposalRequest',
  })
  .openapi('CreateDirectConnectGatewayAssociationProposalRequest')

const InterconnectNameSchema = z.string().openapi('InterconnectName')

const InterconnectStateSchema = z
  .enum(['requested', 'pending', 'available', 'down', 'deleting', 'deleted', 'unknown'])
  .openapi('InterconnectState')

const InterconnectSchema = z
  .object({
    interconnectId: InterconnectIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect.' }),
    ).exactOptional(),
    interconnectName: InterconnectNameSchema.and(
      z.any().openapi({ description: 'The name of the interconnect.' }),
    ).exactOptional(),
    interconnectState: InterconnectStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the interconnect. The following are the possible values:</p> <ul> <li> <p> <code>requested</code>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <code>pending</code>: The interconnect is approved, and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The interconnect is being deleted.</p> </li> <li> <p> <code>deleted</code>: The interconnect is deleted.</p> </li> <li> <p> <code>unknown</code>: The state of the interconnect is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the connection is located.',
        }),
    ).exactOptional(),
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the connection.' }),
    ).exactOptional(),
    bandwidth: BandwidthSchema.and(
      z.any().openapi({ description: 'The bandwidth of the connection.' }),
    ).exactOptional(),
    loaIssueTime: LoaIssueTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the most recent call to <a>DescribeLoa</a> for this connection.',
        }),
    ).exactOptional(),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
    awsDevice: AwsDeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'The Direct Connect endpoint on which the physical connection terminates.',
        }),
    ).exactOptional(),
    jumboFrameCapable: JumboFrameCapableSchema.and(
      z.any().openapi({ description: 'Indicates whether jumbo frames (9001 MTU) are supported.' }),
    ).exactOptional(),
    awsDeviceV2: AwsDeviceV2Schema.and(
      z
        .any()
        .openapi({
          description: 'The Direct Connect endpoint that terminates the physical connection.',
        }),
    ).exactOptional(),
    awsLogicalDeviceId: AwsLogicalDeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.',
        }),
    ).exactOptional(),
    hasLogicalRedundancy: HasLogicalRedundancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the interconnect.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service provider associated with the interconnect.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an interconnect.', required: [] })
  .openapi('Interconnect')

const CreateInterconnectRequestSchema = z
  .object({
    interconnectName: InterconnectNameSchema.and(
      z.any().openapi({ description: 'The name of the interconnect.' }),
    ),
    bandwidth: BandwidthSchema.and(
      z
        .any()
        .openapi({ description: 'The port bandwidth, in Gbps. The possible values are 1 and 10.' }),
    ),
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the interconnect.' }),
    ),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with the interconnect.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service provider associated with the interconnect.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['interconnectName', 'bandwidth', 'location'],
    title: 'CreateInterconnectRequest',
  })
  .openapi('CreateInterconnectRequest')

const CountSchema = z.int().openapi('Count')

const LagNameSchema = z.string().openapi('LagName')

const LagStateSchema = z
  .enum(['requested', 'pending', 'available', 'down', 'deleting', 'deleted', 'unknown'])
  .openapi('LagState')

const ConnectionListSchema = z.array(ConnectionSchema).openapi('ConnectionList')

const BooleanFlagSchema = z.boolean().openapi('BooleanFlag')

const LagSchema = z
  .object({
    connectionsBandwidth: BandwidthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps and 10Gbps. ',
        }),
    ).exactOptional(),
    numberOfConnections: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of physical dedicated connections bundled by the LAG, up to a maximum of 10.',
        }),
    ).exactOptional(),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
    ownerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services account that owns the LAG.' }),
    ).exactOptional(),
    lagName: LagNameSchema.and(
      z.any().openapi({ description: 'The name of the LAG.' }),
    ).exactOptional(),
    lagState: LagStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the LAG. The following are the possible values:</p> <ul> <li> <p> <code>requested</code>: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.</p> </li> <li> <p> <code>pending</code>: The LAG has been approved and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is established and the LAG is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The LAG is being deleted.</p> </li> <li> <p> <code>deleted</code>: The LAG is deleted.</p> </li> <li> <p> <code>unknown</code>: The state of the LAG is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    location: LocationCodeSchema.and(
      z.any().openapi({ description: 'The location of the LAG.' }),
    ).exactOptional(),
    region: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the connection is located.',
        }),
    ).exactOptional(),
    minimumLinks: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.',
        }),
    ).exactOptional(),
    awsDevice: AwsDeviceSchema.and(
      z.any().openapi({ description: 'The Direct Connect endpoint that hosts the LAG.' }),
    ).exactOptional(),
    awsDeviceV2: AwsDeviceV2Schema.and(
      z.any().openapi({ description: 'The Direct Connect endpoint that hosts the LAG.' }),
    ).exactOptional(),
    awsLogicalDeviceId: AwsLogicalDeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.',
        }),
    ).exactOptional(),
    connections: ConnectionListSchema.and(
      z.any().openapi({ description: 'The connections bundled by the LAG.' }),
    ).exactOptional(),
    allowsHostedConnections: BooleanFlagSchema.and(
      z.any().openapi({ description: 'Indicates whether the LAG can host other connections.' }),
    ).exactOptional(),
    jumboFrameCapable: JumboFrameCapableSchema.and(
      z.any().openapi({ description: 'Indicates whether jumbo frames (9001 MTU) are supported.' }),
    ).exactOptional(),
    hasLogicalRedundancy: HasLogicalRedundancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the LAG.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z.any().openapi({ description: 'The name of the service provider associated with the LAG.' }),
    ).exactOptional(),
    macSecCapable: MacSecCapableSchema.and(
      z.any().openapi({ description: 'Indicates whether the LAG supports MAC Security (MACsec).' }),
    ).exactOptional(),
    encryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The LAG MAC Security (MACsec) encryption mode.</p> <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>',
        }),
    ).exactOptional(),
    macSecKeys: MacSecKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The MAC Security (MACsec) security keys associated with the LAG.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a link aggregation group (LAG).', required: [] })
  .openapi('Lag')

const CreateLagRequestSchema = z
  .object({
    numberOfConnections: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of physical dedicated connections initially provisioned and bundled by the LAG.',
        }),
    ),
    location: LocationCodeSchema.and(z.any().openapi({ description: 'The location for the LAG.' })),
    connectionsBandwidth: BandwidthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible values are 1Gbps and 10Gbps. ',
        }),
    ),
    lagName: LagNameSchema.and(z.any().openapi({ description: 'The name of the LAG.' })),
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of an existing dedicated connection to migrate to the LAG.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with the LAG.' }),
    ).exactOptional(),
    childConnectionTags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with the automtically created LAGs.' }),
    ).exactOptional(),
    providerName: ProviderNameSchema.and(
      z.any().openapi({ description: 'The name of the service provider associated with the LAG.' }),
    ).exactOptional(),
    requestMACSec: RequestMACSecSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the connection will support MAC Security (MACsec).</p> <note> <p>All connections in the LAG must be capable of supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites">MACsec prerequisties</a> in the <i>Direct Connect User Guide</i>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['numberOfConnections', 'location', 'connectionsBandwidth', 'lagName'],
    title: 'CreateLagRequest',
  })
  .openapi('CreateLagRequest')

const EnableSiteLinkSchema = z.boolean().openapi('EnableSiteLink')

const NewPrivateVirtualInterfaceSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the private virtual interface.' }),
    ).exactOptional(),
    enableSiteLink: EnableSiteLinkSchema.and(
      z.any().openapi({ description: 'Indicates whether to enable or disable SiteLink.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['virtualInterfaceName', 'vlan', 'asn'],
    description: 'Information about a private virtual interface.',
  })
  .openapi('NewPrivateVirtualInterface')

const CreatePrivateVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    newPrivateVirtualInterface: NewPrivateVirtualInterfaceSchema.and(
      z.any().openapi({ description: 'Information about the private virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'newPrivateVirtualInterface'],
    title: 'CreatePrivateVirtualInterfaceRequest',
  })
  .openapi('CreatePrivateVirtualInterfaceRequest')

const NewPublicVirtualInterfaceSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    routeFilterPrefixes: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The routes to be advertised to the Amazon Web Services network in this Region. Applies to public virtual interfaces.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the public virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['virtualInterfaceName', 'vlan', 'asn'],
    description: 'Information about a public virtual interface.',
  })
  .openapi('NewPublicVirtualInterface')

const CreatePublicVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    newPublicVirtualInterface: NewPublicVirtualInterfaceSchema.and(
      z.any().openapi({ description: 'Information about the public virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'newPublicVirtualInterface'],
    title: 'CreatePublicVirtualInterfaceRequest',
  })
  .openapi('CreatePublicVirtualInterfaceRequest')

const CreateTransitVirtualInterfaceResultSchema = z
  .object({ virtualInterface: VirtualInterfaceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateTransitVirtualInterfaceResult')

const NewTransitVirtualInterfaceSchema = z
  .object({
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).',
        }),
    ).exactOptional(),
    vlan: VLANSchema.and(z.any().openapi({ description: 'The ID of the VLAN.' })).exactOptional(),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>The valid values are 1-2147483647.</p>',
        }),
    ).exactOptional(),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.',
        }),
    ).exactOptional(),
    authKey: BGPAuthKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximun lenth of 80 characters.',
        }),
    ).exactOptional(),
    amazonAddress: AmazonAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the Amazon interface.' }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    addressFamily: AddressFamilySchema.and(
      z.any().openapi({ description: 'The address family for the BGP peer.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags associated with the transitive virtual interface.' }),
    ).exactOptional(),
    enableSiteLink: EnableSiteLinkSchema.and(
      z.any().openapi({ description: 'Indicates whether to enable or disable SiteLink.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a transit virtual interface.', required: [] })
  .openapi('NewTransitVirtualInterface')

const CreateTransitVirtualInterfaceRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    newTransitVirtualInterface: NewTransitVirtualInterfaceSchema.and(
      z.any().openapi({ description: 'Information about the transit virtual interface.' }),
    ),
  })
  .openapi({
    required: ['connectionId', 'newTransitVirtualInterface'],
    title: 'CreateTransitVirtualInterfaceRequest',
  })
  .openapi('CreateTransitVirtualInterfaceRequest')

const DeleteBGPPeerResponseSchema = z
  .object({
    virtualInterface: VirtualInterfaceSchema.and(
      z.any().openapi({ description: 'The virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBGPPeerResponse')

const DeleteBGPPeerRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
    asn: ASNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.',
        }),
    ).exactOptional(),
    customerAddress: CustomerAddressSchema.and(
      z.any().openapi({ description: 'The IP address assigned to the customer interface.' }),
    ).exactOptional(),
    bgpPeerId: BGPPeerIdSchema.and(
      z.any().openapi({ description: 'The ID of the BGP peer.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteBGPPeerRequest', required: [] })
  .openapi('DeleteBGPPeerRequest')

const DeleteConnectionRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
  })
  .openapi({ required: ['connectionId'], title: 'DeleteConnectionRequest' })
  .openapi('DeleteConnectionRequest')

const DeleteDirectConnectGatewayResultSchema = z
  .object({
    directConnectGateway: DirectConnectGatewaySchema.and(
      z.any().openapi({ description: 'The Direct Connect gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDirectConnectGatewayResult')

const DeleteDirectConnectGatewayRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ),
  })
  .openapi({ required: ['directConnectGatewayId'], title: 'DeleteDirectConnectGatewayRequest' })
  .openapi('DeleteDirectConnectGatewayRequest')

const DeleteDirectConnectGatewayAssociationResultSchema = z
  .object({
    directConnectGatewayAssociation: DirectConnectGatewayAssociationSchema.and(
      z.any().openapi({ description: 'Information about the deleted association.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDirectConnectGatewayAssociationResult')

const DeleteDirectConnectGatewayAssociationRequestSchema = z
  .object({
    associationId: DirectConnectGatewayAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway association.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteDirectConnectGatewayAssociationRequest', required: [] })
  .openapi('DeleteDirectConnectGatewayAssociationRequest')

const DeleteDirectConnectGatewayAssociationProposalResultSchema = z
  .object({
    directConnectGatewayAssociationProposal: DirectConnectGatewayAssociationProposalSchema.and(
      z.any().openapi({ description: 'The ID of the associated gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDirectConnectGatewayAssociationProposalResult')

const DeleteDirectConnectGatewayAssociationProposalRequestSchema = z
  .object({
    proposalId: DirectConnectGatewayAssociationProposalIdSchema.and(
      z.any().openapi({ description: 'The ID of the proposal.' }),
    ),
  })
  .openapi({
    required: ['proposalId'],
    title: 'DeleteDirectConnectGatewayAssociationProposalRequest',
  })
  .openapi('DeleteDirectConnectGatewayAssociationProposalRequest')

const DeleteInterconnectResponseSchema = z
  .object({
    interconnectState: InterconnectStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the interconnect. The following are the possible values:</p> <ul> <li> <p> <code>requested</code>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <code>pending</code>: The interconnect is approved, and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The interconnect is being deleted.</p> </li> <li> <p> <code>deleted</code>: The interconnect is deleted.</p> </li> <li> <p> <code>unknown</code>: The state of the interconnect is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteInterconnectResponse')

const DeleteInterconnectRequestSchema = z
  .object({
    interconnectId: InterconnectIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect.' }),
    ),
  })
  .openapi({ required: ['interconnectId'], title: 'DeleteInterconnectRequest' })
  .openapi('DeleteInterconnectRequest')

const DeleteLagRequestSchema = z
  .object({ lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })) })
  .openapi({ required: ['lagId'], title: 'DeleteLagRequest' })
  .openapi('DeleteLagRequest')

const DeleteVirtualInterfaceResponseSchema = z
  .object({
    virtualInterfaceState: VirtualInterfaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual interface. The following are the possible values:</p> <ul> <li> <p> <code>confirming</code>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <code>verifying</code>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <code>pending</code>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <code>available</code>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <code>down</code>: A virtual interface that is BGP down.</p> </li> <li> <p> <code>deleting</code>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <code>deleted</code>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <code>rejected</code>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the <code>Confirming</code> state is deleted by the virtual interface owner, the virtual interface enters the <code>Rejected</code> state.</p> </li> <li> <p> <code>unknown</code>: The state of the virtual interface is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteVirtualInterfaceResponse')

const DeleteVirtualInterfaceRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'DeleteVirtualInterfaceRequest' })
  .openapi('DeleteVirtualInterfaceRequest')

const LoaContentSchema = z.string().openapi('LoaContent')

const LoaContentTypeSchema = z.literal('application/pdf').openapi('LoaContentType')

const LoaSchema = z
  .object({
    loaContent: LoaContentSchema.and(
      z.any().openapi({ description: 'The binary contents of the LOA-CFA document.' }),
    ).exactOptional(),
    loaContentType: LoaContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The standard media type for the LOA-CFA document. The only supported value is application/pdf.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.',
    required: [],
  })
  .openapi('Loa')

const DescribeConnectionLoaResponseSchema = z
  .object({
    loa: LoaSchema.and(
      z
        .any()
        .openapi({
          description: 'The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectionLoaResponse')

const DescribeConnectionLoaRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.',
        }),
    ).exactOptional(),
    loaContentType: LoaContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The standard media type for the LOA-CFA document. The only supported value is application/pdf.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectionId'], title: 'DescribeConnectionLoaRequest' })
  .openapi('DescribeConnectionLoaRequest')

const ConnectionsSchema = z
  .object({
    connections: ConnectionListSchema.and(
      z.any().openapi({ description: 'The connections.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Connections')

const DescribeConnectionsRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConnectionsRequest', required: [] })
  .openapi('DescribeConnectionsRequest')

const DescribeConnectionsOnInterconnectRequestSchema = z
  .object({
    interconnectId: InterconnectIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect.' }),
    ),
  })
  .openapi({ required: ['interconnectId'], title: 'DescribeConnectionsOnInterconnectRequest' })
  .openapi('DescribeConnectionsOnInterconnectRequest')

const CustomerAgreementSchema = z
  .object({
    agreementName: AgreementNameSchema.and(
      z.any().openapi({ description: 'The name of the agreement.' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the customer agreement. This will be either <code>signed</code> or <code>unsigned</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The name and status of a customer agreement. ', required: [] })
  .openapi('CustomerAgreement')

const AgreementListSchema = z.array(CustomerAgreementSchema).openapi('AgreementList')

const NniPartnerTypeSchema = z.enum(['v1', 'v2', 'nonPartner']).openapi('NniPartnerType')

const DescribeCustomerMetadataResponseSchema = z
  .object({
    agreements: AgreementListSchema.and(
      z.any().openapi({ description: 'The list of customer agreements.' }),
    ).exactOptional(),
    nniPartnerType: NniPartnerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of network-to-network interface (NNI) partner. The partner type will be one of the following:</p> <ul> <li> <p>V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections.</p> </li> <li> <p>V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections.</p> </li> <li> <p>nonPartner: The customer is not a partner.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomerMetadataResponse')

const DirectConnectGatewayAssociationProposalListSchema = z
  .array(DirectConnectGatewayAssociationProposalSchema)
  .openapi('DirectConnectGatewayAssociationProposalList')

const PaginationTokenSchema = z.string().openapi('PaginationToken')

const DescribeDirectConnectGatewayAssociationProposalsResultSchema = z
  .object({
    directConnectGatewayAssociationProposals: DirectConnectGatewayAssociationProposalListSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the Direct Connect gateway association proposals.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDirectConnectGatewayAssociationProposalsResult')

const AssociatedGatewayIdSchema = z.string().openapi('AssociatedGatewayId')

const MaxResultSetSizeSchema = z.int().openapi('MaxResultSetSize')

const DescribeDirectConnectGatewayAssociationProposalsRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    proposalId: DirectConnectGatewayAssociationProposalIdSchema.and(
      z.any().openapi({ description: 'The ID of the proposal.' }),
    ).exactOptional(),
    associatedGatewayId: AssociatedGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the associated gateway.' }),
    ).exactOptional(),
    maxResults: MaxResultSetSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p> <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDirectConnectGatewayAssociationProposalsRequest', required: [] })
  .openapi('DescribeDirectConnectGatewayAssociationProposalsRequest')

const DirectConnectGatewayAssociationListSchema = z
  .array(DirectConnectGatewayAssociationSchema)
  .openapi('DirectConnectGatewayAssociationList')

const DescribeDirectConnectGatewayAssociationsResultSchema = z
  .object({
    directConnectGatewayAssociations: DirectConnectGatewayAssociationListSchema.and(
      z.any().openapi({ description: 'Information about the associations.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDirectConnectGatewayAssociationsResult')

const DescribeDirectConnectGatewayAssociationsRequestSchema = z
  .object({
    associationId: DirectConnectGatewayAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway association.' }),
    ).exactOptional(),
    associatedGatewayId: AssociatedGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the associated gateway.' }),
    ).exactOptional(),
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    maxResults: MaxResultSetSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p> <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token provided in the previous call to retrieve the next page.',
        }),
    ).exactOptional(),
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway or transit gateway.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDirectConnectGatewayAssociationsRequest', required: [] })
  .openapi('DescribeDirectConnectGatewayAssociationsRequest')

const VirtualInterfaceRegionSchema = z.string().openapi('VirtualInterfaceRegion')

const DirectConnectGatewayAttachmentStateSchema = z
  .enum(['attaching', 'attached', 'detaching', 'detached'])
  .openapi('DirectConnectGatewayAttachmentState')

const DirectConnectGatewayAttachmentTypeSchema = z
  .enum(['TransitVirtualInterface', 'PrivateVirtualInterface'])
  .openapi('DirectConnectGatewayAttachmentType')

const DirectConnectGatewayAttachmentSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
    virtualInterfaceRegion: VirtualInterfaceRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the virtual interface is located.',
        }),
    ).exactOptional(),
    virtualInterfaceOwnerAccount: OwnerAccountSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon Web Services account that owns the virtual interface.',
        }),
    ).exactOptional(),
    attachmentState: DirectConnectGatewayAttachmentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the attachment. The following are the possible values:</p> <ul> <li> <p> <code>attaching</code>: The initial state after a virtual interface is created using the Direct Connect gateway.</p> </li> <li> <p> <code>attached</code>: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.</p> </li> <li> <p> <code>detaching</code>: The initial state after calling <a>DeleteVirtualInterface</a>.</p> </li> <li> <p> <code>detached</code>: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.</p> </li> </ul>',
        }),
    ).exactOptional(),
    attachmentType: DirectConnectGatewayAttachmentTypeSchema.and(
      z.any().openapi({ description: 'The type of attachment.' }),
    ).exactOptional(),
    stateChangeError: StateChangeErrorSchema.and(
      z
        .any()
        .openapi({ description: 'The error message if the state of an object failed to advance.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an attachment between a Direct Connect gateway and a virtual interface.',
    required: [],
  })
  .openapi('DirectConnectGatewayAttachment')

const DirectConnectGatewayAttachmentListSchema = z
  .array(DirectConnectGatewayAttachmentSchema)
  .openapi('DirectConnectGatewayAttachmentList')

const DescribeDirectConnectGatewayAttachmentsResultSchema = z
  .object({
    directConnectGatewayAttachments: DirectConnectGatewayAttachmentListSchema.and(
      z.any().openapi({ description: 'The attachments.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDirectConnectGatewayAttachmentsResult')

const DescribeDirectConnectGatewayAttachmentsRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
    maxResults: MaxResultSetSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p> <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token provided in the previous call to retrieve the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDirectConnectGatewayAttachmentsRequest', required: [] })
  .openapi('DescribeDirectConnectGatewayAttachmentsRequest')

const DirectConnectGatewayListSchema = z
  .array(DirectConnectGatewaySchema)
  .openapi('DirectConnectGatewayList')

const DescribeDirectConnectGatewaysResultSchema = z
  .object({
    directConnectGateways: DirectConnectGatewayListSchema.and(
      z.any().openapi({ description: 'The Direct Connect gateways.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to retrieve the next page.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDirectConnectGatewaysResult')

const DescribeDirectConnectGatewaysRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway.' }),
    ).exactOptional(),
    maxResults: MaxResultSetSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p> <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The token provided in the previous call to retrieve the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDirectConnectGatewaysRequest', required: [] })
  .openapi('DescribeDirectConnectGatewaysRequest')

const DescribeHostedConnectionsRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect or LAG.' }),
    ),
  })
  .openapi({ required: ['connectionId'], title: 'DescribeHostedConnectionsRequest' })
  .openapi('DescribeHostedConnectionsRequest')

const DescribeInterconnectLoaResponseSchema = z
  .object({
    loa: LoaSchema.and(
      z
        .any()
        .openapi({
          description: 'The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInterconnectLoaResponse')

const DescribeInterconnectLoaRequestSchema = z
  .object({
    interconnectId: InterconnectIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect.' }),
    ),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.',
        }),
    ).exactOptional(),
    loaContentType: LoaContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The standard media type for the LOA-CFA document. The only supported value is application/pdf.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['interconnectId'], title: 'DescribeInterconnectLoaRequest' })
  .openapi('DescribeInterconnectLoaRequest')

const InterconnectListSchema = z.array(InterconnectSchema).openapi('InterconnectList')

const InterconnectsSchema = z
  .object({
    interconnects: InterconnectListSchema.and(
      z.any().openapi({ description: 'The interconnects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Interconnects')

const DescribeInterconnectsRequestSchema = z
  .object({
    interconnectId: InterconnectIdSchema.and(
      z.any().openapi({ description: 'The ID of the interconnect.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeInterconnectsRequest', required: [] })
  .openapi('DescribeInterconnectsRequest')

const LagListSchema = z.array(LagSchema).openapi('LagList')

const LagsSchema = z
  .object({
    lags: LagListSchema.and(z.any().openapi({ description: 'The LAGs.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Lags')

const DescribeLagsRequestSchema = z
  .object({
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })).exactOptional(),
  })
  .openapi({ title: 'DescribeLagsRequest', required: [] })
  .openapi('DescribeLagsRequest')

const DescribeLoaRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of a connection, LAG, or interconnect.' }),
    ),
    providerName: ProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.',
        }),
    ).exactOptional(),
    loaContentType: LoaContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The standard media type for the LOA-CFA document. The only supported value is application/pdf.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectionId'], title: 'DescribeLoaRequest' })
  .openapi('DescribeLoaRequest')

const LocationNameSchema = z.string().openapi('LocationName')

const PortSpeedSchema = z.string().openapi('PortSpeed')

const AvailablePortSpeedsSchema = z.array(PortSpeedSchema).openapi('AvailablePortSpeeds')

const ProviderListSchema = z.array(ProviderNameSchema).openapi('ProviderList')

const AvailableMacSecPortSpeedsSchema = z
  .array(PortSpeedSchema)
  .openapi('AvailableMacSecPortSpeeds')

const LocationSchema = z
  .object({
    locationCode: LocationCodeSchema.and(
      z.any().openapi({ description: 'The code for the location.' }),
    ).exactOptional(),
    locationName: LocationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the location. This includes the name of the colocation partner and the physical site of the building.',
        }),
    ).exactOptional(),
    region: RegionSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region for the location.' }),
    ).exactOptional(),
    availablePortSpeeds: AvailablePortSpeedsSchema.and(
      z.any().openapi({ description: 'The available port speeds for the location.' }),
    ).exactOptional(),
    availableProviders: ProviderListSchema.and(
      z.any().openapi({ description: 'The name of the service provider for the location.' }),
    ).exactOptional(),
    availableMacSecPortSpeeds: AvailableMacSecPortSpeedsSchema.and(
      z
        .any()
        .openapi({
          description: 'The available MAC Security (MACsec) port speeds for the location.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Direct Connect location.', required: [] })
  .openapi('Location')

const LocationListSchema = z.array(LocationSchema).openapi('LocationList')

const LocationsSchema = z
  .object({
    locations: LocationListSchema.and(
      z.any().openapi({ description: 'The locations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Locations')

const VendorSchema = z.string().openapi('Vendor')

const PlatformSchema = z.string().openapi('Platform')

const SoftwareSchema = z.string().openapi('Software')

const XsltTemplateNameSchema = z.string().openapi('XsltTemplateName')

const XsltTemplateNameForMacSecSchema = z.string().openapi('XsltTemplateNameForMacSec')

const RouterTypeIdentifierSchema = z.string().openapi('RouterTypeIdentifier')

const RouterTypeSchema = z
  .object({
    vendor: VendorSchema.and(
      z.any().openapi({ description: "The vendor for the virtual interface's router." }),
    ).exactOptional(),
    platform: PlatformSchema.and(
      z.any().openapi({ description: 'The virtual interface router platform.' }),
    ).exactOptional(),
    software: SoftwareSchema.and(
      z.any().openapi({ description: 'The router software. ' }),
    ).exactOptional(),
    xsltTemplateName: XsltTemplateNameSchema.and(
      z.any().openapi({ description: "The template for the virtual interface's router." }),
    ).exactOptional(),
    xsltTemplateNameForMacSec: XsltTemplateNameForMacSecSchema.and(
      z
        .any()
        .openapi({
          description: "The MAC Security (MACsec) template for the virtual interface's router.",
        }),
    ).exactOptional(),
    routerTypeIdentifier: RouterTypeIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the virtual router.', required: [] })
  .openapi('RouterType')

const DescribeRouterConfigurationResponseSchema = z
  .object({
    customerRouterConfig: RouterConfigSchema.and(
      z.any().openapi({ description: 'The customer router configuration.' }),
    ).exactOptional(),
    router: RouterTypeSchema.and(
      z.any().openapi({ description: 'The details about the router.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the virtual interface.' }),
    ).exactOptional(),
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z.any().openapi({ description: "Provides the details about a virtual interface's router." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRouterConfigurationResponse')

const DescribeRouterConfigurationRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ),
    routerTypeIdentifier: RouterTypeIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the router by a combination of vendor, platform, and software version. For example, <code>CiscoSystemsInc-2900SeriesRouters-IOS124</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['virtualInterfaceId'],
    title: 'DescribeRouterConfigurationRequest',
    description: "Provides the details about a virtual interface's router.",
  })
  .openapi('DescribeRouterConfigurationRequest')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const ResourceTagSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    tags: TagListSchema.and(z.any().openapi({ description: 'The tags.' })).exactOptional(),
  })
  .openapi({
    description: 'Information about a tag associated with an Direct Connect resource.',
    required: [],
  })
  .openapi('ResourceTag')

const ResourceTagListSchema = z.array(ResourceTagSchema).openapi('ResourceTagList')

const DescribeTagsResponseSchema = z
  .object({
    resourceTags: ResourceTagListSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTagsResponse')

const ResourceArnListSchema = z.array(ResourceArnSchema).openapi('ResourceArnList')

const DescribeTagsRequestSchema = z
  .object({
    resourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) of the resources.' }),
    ),
  })
  .openapi({ required: ['resourceArns'], title: 'DescribeTagsRequest' })
  .openapi('DescribeTagsRequest')

const VirtualGatewayStateSchema = z.string().openapi('VirtualGatewayState')

const VirtualGatewaySchema = z
  .object({
    virtualGatewayId: VirtualGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private gateway.' }),
    ).exactOptional(),
    virtualGatewayState: VirtualGatewayStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the virtual private gateway. The following are the possible values:</p> <ul> <li> <p> <code>pending</code>: Initial state after creating the virtual private gateway.</p> </li> <li> <p> <code>available</code>: Ready for use by a private virtual interface.</p> </li> <li> <p> <code>deleting</code>: Initial state after deleting the virtual private gateway.</p> </li> <li> <p> <code>deleted</code>: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a virtual private gateway for a private virtual interface.',
    required: [],
  })
  .openapi('VirtualGateway')

const VirtualGatewayListSchema = z.array(VirtualGatewaySchema).openapi('VirtualGatewayList')

const VirtualGatewaysSchema = z
  .object({
    virtualGateways: VirtualGatewayListSchema.and(
      z.any().openapi({ description: 'The virtual private gateways.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VirtualGateways')

const VirtualInterfaceListSchema = z.array(VirtualInterfaceSchema).openapi('VirtualInterfaceList')

const VirtualInterfacesSchema = z
  .object({
    virtualInterfaces: VirtualInterfaceListSchema.and(
      z.any().openapi({ description: 'The virtual interfaces' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VirtualInterfaces')

const DescribeVirtualInterfacesRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeVirtualInterfacesRequest', required: [] })
  .openapi('DescribeVirtualInterfacesRequest')

const DisassociateConnectionFromLagRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the connection.' }),
    ),
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })),
  })
  .openapi({ required: ['connectionId', 'lagId'], title: 'DisassociateConnectionFromLagRequest' })
  .openapi('DisassociateConnectionFromLagRequest')

const DisassociateMacSecKeyResponseSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).',
        }),
    ).exactOptional(),
    macSecKeys: MacSecKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MAC Security (MACsec) security keys no longer associated with the dedicated connection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateMacSecKeyResponse')

const DisassociateMacSecKeyRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the dedicated connection (dxcon-xxxx), or the ID of the LAG (dxlag-xxxx).</p> <p>You can use <a>DescribeConnections</a> or <a>DescribeLags</a> to retrieve connection ID.</p>',
        }),
    ),
    secretARN: SecretARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key.</p> <p>You can use <a>DescribeConnections</a> to retrieve the ARN of the MAC Security (MACsec) secret key.</p>',
        }),
    ),
  })
  .openapi({ required: ['connectionId', 'secretARN'], title: 'DisassociateMacSecKeyRequest' })
  .openapi('DisassociateMacSecKeyRequest')

const TestIdSchema = z.string().openapi('TestId')

const BGPPeerIdListSchema = z.array(BGPPeerIdSchema).openapi('BGPPeerIdList')

const FailureTestHistoryStatusSchema = z.string().openapi('FailureTestHistoryStatus')

const TestDurationSchema = z.int().openapi('TestDuration')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const VirtualInterfaceTestHistorySchema = z
  .object({
    testId: TestIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface failover test.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the tested virtual interface.' }),
    ).exactOptional(),
    bgpPeers: BGPPeerIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BGP peers that were put in the DOWN state as part of the virtual interface failover test.',
        }),
    ).exactOptional(),
    status: FailureTestHistoryStatusSchema.and(
      z.any().openapi({ description: 'The status of the virtual interface failover test.' }),
    ).exactOptional(),
    ownerAccount: OwnerAccountSchema.and(
      z.any().openapi({ description: 'The owner ID of the tested virtual interface.' }),
    ).exactOptional(),
    testDurationInMinutes: TestDurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the virtual interface failover test ran in minutes.',
        }),
    ).exactOptional(),
    startTime: StartTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the virtual interface moves to the DOWN state.' }),
    ).exactOptional(),
    endTime: EndTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the virtual interface moves out of the DOWN state.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the virtual interface failover test.', required: [] })
  .openapi('VirtualInterfaceTestHistory')

const VirtualInterfaceTestHistoryListSchema = z
  .array(VirtualInterfaceTestHistorySchema)
  .openapi('VirtualInterfaceTestHistoryList')

const ListVirtualInterfaceTestHistoryResponseSchema = z
  .object({
    virtualInterfaceTestHistory: VirtualInterfaceTestHistoryListSchema.and(
      z.any().openapi({ description: 'The ID of the tested virtual interface.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVirtualInterfaceTestHistoryResponse')

const ListVirtualInterfaceTestHistoryRequestSchema = z
  .object({
    testId: TestIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface failover test.' }),
    ).exactOptional(),
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface that was tested.' }),
    ).exactOptional(),
    bgpPeers: BGPPeerIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BGP peers that were placed in the DOWN state during the virtual interface failover test.',
        }),
    ).exactOptional(),
    status: FailureTestHistoryStatusSchema.and(
      z.any().openapi({ description: 'The status of the virtual interface failover test.' }),
    ).exactOptional(),
    maxResults: MaxResultSetSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p> <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are returned.</p>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListVirtualInterfaceTestHistoryRequest', required: [] })
  .openapi('ListVirtualInterfaceTestHistoryRequest')

const StartBgpFailoverTestResponseSchema = z
  .object({
    virtualInterfaceTest: VirtualInterfaceTestHistorySchema.and(
      z.any().openapi({ description: 'Information about the virtual interface failover test.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBgpFailoverTestResponse')

const StartBgpFailoverTestRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual interface you want to test.' }),
    ),
    bgpPeers: BGPPeerIdListSchema.and(
      z.any().openapi({ description: 'The BGP peers to place in the DOWN state.' }),
    ).exactOptional(),
    testDurationInMinutes: TestDurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time in minutes that the virtual interface failover test will last.</p> <p>Maximum value: 4,320 minutes (72 hours).</p> <p>Default: 180 minutes (3 hours).</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'StartBgpFailoverTestRequest' })
  .openapi('StartBgpFailoverTestRequest')

const StopBgpFailoverTestResponseSchema = z
  .object({
    virtualInterfaceTest: VirtualInterfaceTestHistorySchema.and(
      z.any().openapi({ description: 'Information about the virtual interface failover test.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopBgpFailoverTestResponse')

const StopBgpFailoverTestRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the virtual interface you no longer want to test.' }),
    ),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'StopBgpFailoverTestRequest' })
  .openapi('StopBgpFailoverTestRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    tags: TagListSchema.and(z.any().openapi({ description: 'The tags to add.' })),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The tag keys of the tags to remove.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectionRequestSchema = z
  .object({
    connectionId: ConnectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the dedicated connection.</p> <p>You can use <a>DescribeConnections</a> to retrieve the connection ID.</p>',
        }),
    ),
    connectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The name of the connection.' }),
    ).exactOptional(),
    encryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The connection MAC Security (MACsec) encryption mode.</p> <p>The valid values are <code>no_encrypt</code>, <code>should_encrypt</code>, and <code>must_encrypt</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectionId'], title: 'UpdateConnectionRequest' })
  .openapi('UpdateConnectionRequest')

const UpdateDirectConnectGatewayResponseSchema = z
  .object({ directConnectGateway: DirectConnectGatewaySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateDirectConnectGatewayResponse')

const UpdateDirectConnectGatewayRequestSchema = z
  .object({
    directConnectGatewayId: DirectConnectGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway to update.' }),
    ),
    newDirectConnectGatewayName: DirectConnectGatewayNameSchema.and(
      z.any().openapi({ description: 'The new name for the Direct Connect gateway.' }),
    ),
  })
  .openapi({
    required: ['directConnectGatewayId', 'newDirectConnectGatewayName'],
    title: 'UpdateDirectConnectGatewayRequest',
  })
  .openapi('UpdateDirectConnectGatewayRequest')

const UpdateDirectConnectGatewayAssociationResultSchema = z
  .object({
    directConnectGatewayAssociation: DirectConnectGatewayAssociationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDirectConnectGatewayAssociationResult')

const UpdateDirectConnectGatewayAssociationRequestSchema = z
  .object({
    associationId: DirectConnectGatewayAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the Direct Connect gateway association.' }),
    ).exactOptional(),
    addAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon VPC prefixes to advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
    removeAllowedPrefixesToDirectConnectGateway: RouteFilterPrefixListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDirectConnectGatewayAssociationRequest', required: [] })
  .openapi('UpdateDirectConnectGatewayAssociationRequest')

const UpdateLagRequestSchema = z
  .object({
    lagId: LagIdSchema.and(z.any().openapi({ description: 'The ID of the LAG.' })),
    lagName: LagNameSchema.and(
      z.any().openapi({ description: 'The name of the LAG.' }),
    ).exactOptional(),
    minimumLinks: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of physical connections that must be operational for the LAG itself to be operational.',
        }),
    ).exactOptional(),
    encryptionMode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The LAG MAC Security (MACsec) encryption mode.</p> <p>Amazon Web Services applies the value to all connections which are part of the LAG.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['lagId'], title: 'UpdateLagRequest' })
  .openapi('UpdateLagRequest')

const UpdateVirtualInterfaceAttributesRequestSchema = z
  .object({
    virtualInterfaceId: VirtualInterfaceIdSchema.and(
      z.any().openapi({ description: 'The ID of the virtual private interface.' }),
    ),
    mtu: MTUSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.',
        }),
    ).exactOptional(),
    enableSiteLink: EnableSiteLinkSchema.and(
      z.any().openapi({ description: 'Indicates whether to enable or disable SiteLink.' }),
    ).exactOptional(),
    virtualInterfaceName: VirtualInterfaceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual private interface.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['virtualInterfaceId'], title: 'UpdateVirtualInterfaceAttributesRequest' })
  .openapi('UpdateVirtualInterfaceAttributesRequest')

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

export const postXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal',
    description:
      'Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.',
    operationId: 'AcceptDirectConnectGatewayAssociationProposal',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.AcceptDirectConnectGatewayAssociationProposal')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.AcceptDirectConnectGatewayAssociationProposal'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: AcceptDirectConnectGatewayAssociationProposalRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AcceptDirectConnectGatewayAssociationProposalResultSchema },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceAllocateConnectionOnInterconnectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect',
  description:
    '<p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>',
  operationId: 'AllocateConnectionOnInterconnect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AllocateConnectionOnInterconnect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AllocateConnectionOnInterconnect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocateConnectionOnInterconnectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetOvertureServiceAllocateHostedConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AllocateHostedConnection',
  description:
    '<p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>',
  operationId: 'AllocateHostedConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AllocateHostedConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AllocateHostedConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocateHostedConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface',
  description:
    '<p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>',
  operationId: 'AllocatePrivateVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AllocatePrivateVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AllocatePrivateVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocatePrivateVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface',
  description:
    '<p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>',
  operationId: 'AllocatePublicVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AllocatePublicVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AllocatePublicVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocatePublicVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface',
  description:
    '<p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>',
  operationId: 'AllocateTransitVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AllocateTransitVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AllocateTransitVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllocateTransitVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllocateTransitVirtualInterfaceResultSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAssociateConnectionWithLagRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AssociateConnectionWithLag',
  description:
    "<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>",
  operationId: 'AssociateConnectionWithLag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AssociateConnectionWithLag')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AssociateConnectionWithLag'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateConnectionWithLagRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAssociateHostedConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AssociateHostedConnection',
  description:
    "<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>",
  operationId: 'AssociateHostedConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AssociateHostedConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AssociateHostedConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateHostedConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAssociateMacSecKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AssociateMacSecKey',
  description:
    '<p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>',
  operationId: 'AssociateMacSecKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AssociateMacSecKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AssociateMacSecKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateMacSecKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateMacSecKeyResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceAssociateVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.AssociateVirtualInterface',
  description:
    '<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>',
  operationId: 'AssociateVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.AssociateVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.AssociateVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceConfirmConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ConfirmConnection',
  description:
    '<p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>',
  operationId: 'ConfirmConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ConfirmConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ConfirmConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmConnectionResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceConfirmCustomerAgreementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ConfirmCustomerAgreement',
  description:
    ' The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). ',
  operationId: 'ConfirmCustomerAgreement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ConfirmCustomerAgreement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ConfirmCustomerAgreement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmCustomerAgreementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmCustomerAgreementResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface',
  description:
    '<p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>',
  operationId: 'ConfirmPrivateVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ConfirmPrivateVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ConfirmPrivateVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmPrivateVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmPrivateVirtualInterfaceResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface',
  description:
    '<p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>',
  operationId: 'ConfirmPublicVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ConfirmPublicVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ConfirmPublicVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmPublicVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmPublicVirtualInterfaceResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface',
  description:
    '<p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>',
  operationId: 'ConfirmTransitVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ConfirmTransitVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ConfirmTransitVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConfirmTransitVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfirmTransitVirtualInterfaceResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateBGPPeerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateBGPPeer',
  description:
    '<p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>',
  operationId: 'CreateBGPPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateBGPPeer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateBGPPeer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBGPPeerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBGPPeerResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateConnection',
  description:
    '<p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>',
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
      'X-Amz-Target': z
        .literal('OvertureService.CreateConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateDirectConnectGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateDirectConnectGateway',
  description:
    'Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.',
  operationId: 'CreateDirectConnectGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateDirectConnectGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateDirectConnectGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDirectConnectGatewayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDirectConnectGatewayResultSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation',
  description:
    'Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.',
  operationId: 'CreateDirectConnectGatewayAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateDirectConnectGatewayAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OvertureService.CreateDirectConnectGatewayAssociation'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: CreateDirectConnectGatewayAssociationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateDirectConnectGatewayAssociationResultSchema },
      },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal',
    description:
      '<p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>',
    operationId: 'CreateDirectConnectGatewayAssociationProposal',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.CreateDirectConnectGatewayAssociationProposal')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.CreateDirectConnectGatewayAssociationProposal'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: CreateDirectConnectGatewayAssociationProposalRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CreateDirectConnectGatewayAssociationProposalResultSchema },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceCreateInterconnectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateInterconnect',
  description:
    "<p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>",
  operationId: 'CreateInterconnect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateInterconnect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateInterconnect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInterconnectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InterconnectSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateLagRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateLag',
  description:
    '<p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>',
  operationId: 'CreateLag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateLag')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateLag'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateLagRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LagSchema } } },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface',
  description:
    "<p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>",
  operationId: 'CreatePrivateVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreatePrivateVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreatePrivateVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePrivateVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreatePublicVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreatePublicVirtualInterface',
  description:
    '<p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>',
  operationId: 'CreatePublicVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreatePublicVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreatePublicVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePublicVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceCreateTransitVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.CreateTransitVirtualInterface',
  description:
    "<p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>",
  operationId: 'CreateTransitVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.CreateTransitVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.CreateTransitVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTransitVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTransitVirtualInterfaceResultSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteBGPPeerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteBGPPeer',
  description:
    '<p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>',
  operationId: 'DeleteBGPPeer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteBGPPeer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteBGPPeer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBGPPeerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBGPPeerResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteConnection',
  description:
    '<p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>',
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
      'X-Amz-Target': z
        .literal('OvertureService.DeleteConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteDirectConnectGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteDirectConnectGateway',
  description:
    'Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.',
  operationId: 'DeleteDirectConnectGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteDirectConnectGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteDirectConnectGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDirectConnectGatewayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDirectConnectGatewayResultSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation',
  description:
    '<p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>',
  operationId: 'DeleteDirectConnectGatewayAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteDirectConnectGatewayAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OvertureService.DeleteDirectConnectGatewayAssociation'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DeleteDirectConnectGatewayAssociationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteDirectConnectGatewayAssociationResultSchema },
      },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal',
    description:
      'Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.',
    operationId: 'DeleteDirectConnectGatewayAssociationProposal',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.DeleteDirectConnectGatewayAssociationProposal')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.DeleteDirectConnectGatewayAssociationProposal'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DeleteDirectConnectGatewayAssociationProposalRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteDirectConnectGatewayAssociationProposalResultSchema },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceDeleteInterconnectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteInterconnect',
  description:
    '<p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>',
  operationId: 'DeleteInterconnect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteInterconnect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteInterconnect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteInterconnectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInterconnectResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteLagRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteLag',
  description:
    'Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.',
  operationId: 'DeleteLag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteLag')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteLag'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteLagRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LagSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDeleteVirtualInterfaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DeleteVirtualInterface',
  description: 'Deletes a virtual interface.',
  operationId: 'DeleteVirtualInterface',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DeleteVirtualInterface')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DeleteVirtualInterface'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVirtualInterfaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualInterfaceResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeConnectionLoaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeConnectionLoa',
  description:
    '<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>',
  operationId: 'DescribeConnectionLoa',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeConnectionLoa')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeConnectionLoa'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionLoaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectionLoaResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetOvertureServiceDescribeConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeConnections',
  description: 'Displays the specified connection or all connections in this Region.',
  operationId: 'DescribeConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeConnections'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionsSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeConnectionsOnInterconnectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect',
  description:
    '<p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>',
  operationId: 'DescribeConnectionsOnInterconnect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeConnectionsOnInterconnect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeConnectionsOnInterconnect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionsOnInterconnectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionsSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetOvertureServiceDescribeCustomerMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeCustomerMetadata',
  description:
    'Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. ',
  operationId: 'DescribeCustomerMetadata',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeCustomerMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeCustomerMetadata'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCustomerMetadataResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals',
    description:
      'Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. ',
    operationId: 'DescribeDirectConnectGatewayAssociationProposals',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.DescribeDirectConnectGatewayAssociationProposals')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.DescribeDirectConnectGatewayAssociationProposals'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DescribeDirectConnectGatewayAssociationProposalsRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DescribeDirectConnectGatewayAssociationProposalsResultSchema,
          },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations',
    description:
      '<p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>',
    operationId: 'DescribeDirectConnectGatewayAssociations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.DescribeDirectConnectGatewayAssociations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.DescribeDirectConnectGatewayAssociations'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeDirectConnectGatewayAssociationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeDirectConnectGatewayAssociationsResultSchema },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAttachmentsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments',
    description:
      'Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.',
    operationId: 'DescribeDirectConnectGatewayAttachments',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('OvertureService.DescribeDirectConnectGatewayAttachments')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['OvertureService.DescribeDirectConnectGatewayAttachments'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeDirectConnectGatewayAttachmentsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeDirectConnectGatewayAttachmentsResultSchema },
        },
      },
      480: {
        description: 'DirectConnectServerException',
        content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
      },
      481: {
        description: 'DirectConnectClientException',
        content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
      },
    },
  })

export const postXAmzTargetOvertureServiceDescribeDirectConnectGatewaysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeDirectConnectGateways',
  description:
    'Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.',
  operationId: 'DescribeDirectConnectGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeDirectConnectGateways')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeDirectConnectGateways'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDirectConnectGatewaysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDirectConnectGatewaysResultSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeHostedConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeHostedConnections',
  description:
    '<p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>',
  operationId: 'DescribeHostedConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeHostedConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeHostedConnections'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeHostedConnectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionsSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeInterconnectLoaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeInterconnectLoa',
  description:
    '<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>',
  operationId: 'DescribeInterconnectLoa',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeInterconnectLoa')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeInterconnectLoa'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeInterconnectLoaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInterconnectLoaResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetOvertureServiceDescribeInterconnectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeInterconnects',
  description:
    'Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.',
  operationId: 'DescribeInterconnects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeInterconnects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeInterconnects'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeInterconnectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InterconnectsSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeLagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeLags',
  description: 'Describes all your link aggregation groups (LAG) or the specified LAG.',
  operationId: 'DescribeLags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeLags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeLags'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LagsSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeLoaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeLoa',
  description:
    '<p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>',
  operationId: 'DescribeLoa',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeLoa')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeLoa'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeLoaRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LoaSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeLocationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeLocations',
  description:
    'Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.',
  operationId: 'DescribeLocations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeLocations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeLocations'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LocationsSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeRouterConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeRouterConfiguration',
  description: ' Details about the router. ',
  operationId: 'DescribeRouterConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeRouterConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeRouterConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRouterConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRouterConfigurationResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeTags',
  description: 'Describes the tags associated with the specified Direct Connect resources.',
  operationId: 'DescribeTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeTags'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTagsResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeVirtualGatewaysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeVirtualGateways',
  description:
    '<p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>',
  operationId: 'DescribeVirtualGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeVirtualGateways')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeVirtualGateways'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualGatewaysSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDescribeVirtualInterfacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DescribeVirtualInterfaces',
  description:
    '<p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>',
  operationId: 'DescribeVirtualInterfaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DescribeVirtualInterfaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DescribeVirtualInterfaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVirtualInterfacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfacesSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDisassociateConnectionFromLagRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DisassociateConnectionFromLag',
  description:
    "<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>",
  operationId: 'DisassociateConnectionFromLag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DisassociateConnectionFromLag')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DisassociateConnectionFromLag'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateConnectionFromLagRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceDisassociateMacSecKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.DisassociateMacSecKey',
  description:
    'Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.',
  operationId: 'DisassociateMacSecKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.DisassociateMacSecKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.DisassociateMacSecKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateMacSecKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateMacSecKeyResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory',
  description: 'Lists the virtual interface failover test history.',
  operationId: 'ListVirtualInterfaceTestHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.ListVirtualInterfaceTestHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.ListVirtualInterfaceTestHistory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVirtualInterfaceTestHistoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualInterfaceTestHistoryResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceStartBgpFailoverTestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.StartBgpFailoverTest',
  description:
    '<p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>',
  operationId: 'StartBgpFailoverTest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.StartBgpFailoverTest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.StartBgpFailoverTest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartBgpFailoverTestRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartBgpFailoverTestResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceStopBgpFailoverTestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.StopBgpFailoverTest',
  description: 'Stops the virtual interface failover test.',
  operationId: 'StopBgpFailoverTest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.StopBgpFailoverTest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.StopBgpFailoverTest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopBgpFailoverTestRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopBgpFailoverTestResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.TagResource',
  description:
    '<p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>',
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
      'X-Amz-Target': z
        .literal('OvertureService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'application/json': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    483: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UntagResource',
  description: 'Removes one or more tags from the specified Direct Connect resource.',
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
      'X-Amz-Target': z
        .literal('OvertureService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUpdateConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UpdateConnection',
  description:
    "<p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>",
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
      'X-Amz-Target': z
        .literal('OvertureService.UpdateConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.UpdateConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUpdateDirectConnectGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UpdateDirectConnectGateway',
  description: 'Updates the name of a current Direct Connect gateway.',
  operationId: 'UpdateDirectConnectGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.UpdateDirectConnectGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.UpdateDirectConnectGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDirectConnectGatewayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDirectConnectGatewayResponseSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUpdateDirectConnectGatewayAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation',
  description:
    '<p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>',
  operationId: 'UpdateDirectConnectGatewayAssociation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.UpdateDirectConnectGatewayAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['OvertureService.UpdateDirectConnectGatewayAssociation'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateDirectConnectGatewayAssociationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateDirectConnectGatewayAssociationResultSchema },
      },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUpdateLagRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UpdateLag',
  description:
    "<p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>",
  operationId: 'UpdateLag',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.UpdateLag')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.UpdateLag'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateLagRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LagSchema } } },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})

export const postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes',
  description:
    "<p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>",
  operationId: 'UpdateVirtualInterfaceAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('OvertureService.UpdateVirtualInterfaceAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['OvertureService.UpdateVirtualInterfaceAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVirtualInterfaceAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VirtualInterfaceSchema } },
    },
    480: {
      description: 'DirectConnectServerException',
      content: { 'application/json': { schema: DirectConnectServerExceptionSchema } },
    },
    481: {
      description: 'DirectConnectClientException',
      content: { 'application/json': { schema: DirectConnectClientExceptionSchema } },
    },
  },
})
