import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdStringSchema = z.string().min(1).max(32).openapi('ResourceIdString')

const AccessorBillingTokenStringSchema = z.string().length(42).openapi('AccessorBillingTokenString')

const CreateAccessorOutputSchema = z
  .object({
    AccessorId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the accessor.' }),
    ).exactOptional(),
    BillingToken: AccessorBillingTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The billing token is a property of the Accessor. Use this token to make Ethereum API calls to your Ethereum node. The billing token is used to track your accessor object for billing Ethereum API requests made to your Ethereum nodes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAccessorOutput')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const CreateMemberOutputSchema = z
  .object({
    MemberId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the member.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMemberOutput')

const NetworkMemberNameStringSchema = z
  .string()
  .regex(/^(?!-|[0-9])(?!.*-$)(?!.*?--)[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('NetworkMemberNameString')

const DescriptionStringSchema = z.string().max(128).openapi('DescriptionString')

const UsernameStringSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9]*$/)
  .min(1)
  .max(16)
  .openapi('UsernameString')

const PasswordStringSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[@'\\"\/])[a-zA-Z0-9\S]*$/)
  .min(8)
  .max(32)
  .openapi('PasswordString')

const MemberFabricConfigurationSchema = z
  .object({
    AdminUsername: UsernameStringSchema.and(
      z
        .any()
        .openapi({ description: "The user name for the member's initial administrative user." }),
    ),
    AdminPassword: PasswordStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\\), @, or a space.",
        }),
    ),
  })
  .openapi({
    required: ['AdminUsername', 'AdminPassword'],
    description:
      'Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.',
  })
  .openapi('MemberFabricConfiguration')

const MemberFrameworkConfigurationSchema = z
  .object({
    Fabric: MemberFabricConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.',
    required: [],
  })
  .openapi('MemberFrameworkConfiguration')

const EnabledSchema = z.boolean().openapi('Enabled')

const LogConfigurationSchema = z
  .object({
    Enabled: EnabledSchema.and(
      z.any().openapi({ description: 'Indicates whether logging is enabled.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A configuration for logging events.', required: [] })
  .openapi('LogConfiguration')

const LogConfigurationsSchema = z
  .object({
    Cloudwatch: LogConfigurationSchema.and(
      z.any().openapi({ description: 'Parameters for publishing logs to Amazon CloudWatch Logs.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A collection of log configurations.', required: [] })
  .openapi('LogConfigurations')

const MemberFabricLogPublishingConfigurationSchema = z
  .object({
    CaLogs: LogConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Configuration properties for logging events associated with a member's Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.',
    required: [],
  })
  .openapi('MemberFabricLogPublishingConfiguration')

const MemberLogPublishingConfigurationSchema = z
  .object({
    Fabric: MemberFabricLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration properties for logging events associated with a member of a Managed Blockchain network.',
    required: [],
  })
  .openapi('MemberLogPublishingConfiguration')

const InputTagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('InputTagMap')

const ArnStringSchema = z
  .string()
  .regex(/^arn:.+:.+:.+:.+:.+/)
  .min(1)
  .max(1011)
  .openapi('ArnString')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceNotReadyExceptionSchema = z.any().openapi('ResourceNotReadyException')

const CreateNetworkOutputSchema = z
  .object({
    NetworkId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the network.' }),
    ).exactOptional(),
    MemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the first member within the network.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNetworkOutput')

const EditionSchema = z.enum(['STARTER', 'STANDARD']).openapi('Edition')

const NetworkFabricConfigurationSchema = z
  .object({
    Edition: EditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The edition of Amazon Managed Blockchain that the network uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Edition'],
    description: 'Hyperledger Fabric configuration properties for the network.',
  })
  .openapi('NetworkFabricConfiguration')

const ThresholdPercentageIntSchema = z.int().min(0).max(100).openapi('ThresholdPercentageInt')

const ProposalDurationIntSchema = z.int().min(1).max(168).openapi('ProposalDurationInt')

const ThresholdComparatorSchema = z
  .enum(['GREATER_THAN', 'GREATER_THAN_OR_EQUAL_TO'])
  .openapi('ThresholdComparator')

const ApprovalThresholdPolicySchema = z
  .object({
    ThresholdPercentage: ThresholdPercentageIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of votes among all members that must be <code>YES</code> for a proposal to be approved. For example, a <code>ThresholdPercentage</code> value of <code>50</code> indicates 50%. The <code>ThresholdComparator</code> determines the precise comparison. If a <code>ThresholdPercentage</code> value of <code>50</code> is specified on a network with 10 members, along with a <code>ThresholdComparator</code> value of <code>GREATER_THAN</code>, this indicates that 6 <code>YES</code> votes are required for the proposal to be approved.',
        }),
    ).exactOptional(),
    ProposalDurationInHours: ProposalDurationIntSchema.and(
      z
        .any()
        .openapi({
          description:
            "The duration from the time that a proposal is created until it expires. If members cast neither the required number of <code>YES</code> votes to approve the proposal nor the number of <code>NO</code> votes required to reject it before the duration expires, the proposal is <code>EXPIRED</code> and <code>ProposalActions</code> aren't carried out.",
        }),
    ).exactOptional(),
    ThresholdComparator: ThresholdComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the vote percentage must be greater than the <code>ThresholdPercentage</code> or must be greater than or equal to the <code>ThreholdPercentage</code> to be approved.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('ApprovalThresholdPolicy')

const CreateNodeOutputSchema = z
  .object({
    NodeId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the node.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNodeOutput')

const InstanceTypeStringSchema = z.string().openapi('InstanceTypeString')

const AvailabilityZoneStringSchema = z.string().openapi('AvailabilityZoneString')

const NodeFabricLogPublishingConfigurationSchema = z
  .object({
    ChaincodeLogs: LogConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.',
        }),
    ).exactOptional(),
    PeerLogs: LogConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.',
    required: [],
  })
  .openapi('NodeFabricLogPublishingConfiguration')

const NodeLogPublishingConfigurationSchema = z
  .object({
    Fabric: NodeFabricLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.',
    required: [],
  })
  .openapi('NodeLogPublishingConfiguration')

const StateDBTypeSchema = z.enum(['LevelDB', 'CouchDB']).openapi('StateDBType')

const CreateProposalOutputSchema = z
  .object({
    ProposalId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the proposal.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProposalOutput')

const PrincipalStringSchema = z.string().openapi('PrincipalString')

const InviteActionSchema = z
  .object({
    Principal: PrincipalStringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID to invite.' }),
    ),
  })
  .openapi({
    required: ['Principal'],
    description:
      '<p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p> <p>Applies only to Hyperledger Fabric.</p>',
  })
  .openapi('InviteAction')

const InviteActionListSchema = z.array(InviteActionSchema).openapi('InviteActionList')

const RemoveActionSchema = z
  .object({
    MemberId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the member to remove.' }),
    ),
  })
  .openapi({
    required: ['MemberId'],
    description:
      '<p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p> <p>Applies only to Hyperledger Fabric.</p>',
  })
  .openapi('RemoveAction')

const RemoveActionListSchema = z.array(RemoveActionSchema).openapi('RemoveActionList')

const DeleteAccessorOutputSchema = z.object({}).openapi('DeleteAccessorOutput')

const DeleteMemberOutputSchema = z.object({}).openapi('DeleteMemberOutput')

const DeleteNodeOutputSchema = z.object({}).openapi('DeleteNodeOutput')

const AccessorTypeSchema = z.literal('BILLING_TOKEN').openapi('AccessorType')

const AccessorStatusSchema = z
  .enum(['AVAILABLE', 'PENDING_DELETION', 'DELETED'])
  .openapi('AccessorStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const OutputTagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('OutputTagMap')

const AccessorSchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the accessor.' }),
    ).exactOptional(),
    Type: AccessorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>',
        }),
    ).exactOptional(),
    BillingToken: AccessorBillingTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The billing token is a property of the accessor. Use this token to make Ethereum API calls to your Ethereum node. The billing token is used to track your accessor object for billing Ethereum API requests made to your Ethereum nodes.',
        }),
    ).exactOptional(),
    Status: AccessorStatusSchema.and(
      z.any().openapi({ description: 'The current status of the accessor.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date and time of the accessor.' }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    Tags: OutputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags assigned to the Accessor.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The properties of the Accessor.', required: [] })
  .openapi('Accessor')

const GetAccessorOutputSchema = z
  .object({
    Accessor: AccessorSchema.and(
      z.any().openapi({ description: 'The properties of the accessor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessorOutput')

const StringSchema = z.string().openapi('String')

const MemberFabricAttributesSchema = z
  .object({
    AdminUsername: UsernameStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name for the initial administrator user for the member.',
        }),
    ).exactOptional(),
    CaEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The endpoint used to access the member's certificate authority.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.',
    required: [],
  })
  .openapi('MemberFabricAttributes')

const MemberFrameworkAttributesSchema = z
  .object({
    Fabric: MemberFabricAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.',
    required: [],
  })
  .openapi('MemberFrameworkAttributes')

const MemberStatusSchema = z
  .enum([
    'CREATING',
    'AVAILABLE',
    'CREATE_FAILED',
    'UPDATING',
    'DELETING',
    'DELETED',
    'INACCESSIBLE_ENCRYPTION_KEY',
  ])
  .openapi('MemberStatus')

const MemberSchema = z
  .object({
    NetworkId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the network to which the member belongs.',
        }),
    ).exactOptional(),
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the member.' }),
    ).exactOptional(),
    Name: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: 'The name of the member.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description for the member.' }),
    ).exactOptional(),
    FrameworkAttributes: MemberFrameworkAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.',
        }),
    ).exactOptional(),
    LogPublishingConfiguration: MemberLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration properties for logging events associated with a member.',
        }),
    ).exactOptional(),
    Status: MemberStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of a member.</p> <ul> <li> <p> <code>CREATING</code> - The Amazon Web Services account is in the process of creating a member.</p> </li> <li> <p> <code>AVAILABLE</code> - The member has been created and can participate in the network.</p> </li> <li> <p> <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a member and creation failed.</p> </li> <li> <p> <code>UPDATING</code> - The member is in the process of being updated.</p> </li> <li> <p> <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> <li> <p> <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> <li> <p> <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The member is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p> <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the member was created.' }),
    ).exactOptional(),
    Tags: OutputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags assigned to the member. Tags consist of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    KmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the member uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the member uses an Amazon Web Services owned KMS key for encryption. This parameter is inherited by the nodes that this member owns.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Member configuration properties.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('Member')

const GetMemberOutputSchema = z
  .object({
    Member: MemberSchema.and(
      z.any().openapi({ description: 'The properties of a member.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMemberOutput')

const NameStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('NameString')

const FrameworkSchema = z.enum(['HYPERLEDGER_FABRIC', 'ETHEREUM']).openapi('Framework')

const FrameworkVersionStringSchema = z.string().min(1).max(8).openapi('FrameworkVersionString')

const NetworkFabricAttributesSchema = z
  .object({
    OrderingServiceEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The endpoint of the ordering service for the network.' }),
    ).exactOptional(),
    Edition: EditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of Hyperledger Fabric for a network.', required: [] })
  .openapi('NetworkFabricAttributes')

const NetworkEthereumAttributesSchema = z
  .object({
    ChainId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Ethereum <code>CHAIN_ID</code> associated with the Ethereum network. Chain IDs are as follows:</p> <ul> <li> <p>mainnet = <code>1</code> </p> </li> <li> <p>goerli = <code>5</code> </p> </li> <li> <p>rinkeby = <code>4</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of Ethereum for a network. ', required: [] })
  .openapi('NetworkEthereumAttributes')

const NetworkFrameworkAttributesSchema = z
  .object({
    Fabric: NetworkFabricAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.',
        }),
    ).exactOptional(),
    Ethereum: NetworkEthereumAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of an Ethereum network for Managed Blockchain resources participating in an Ethereum network. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Attributes relevant to the network for the blockchain framework that the network uses.',
    required: [],
  })
  .openapi('NetworkFrameworkAttributes')

const VotingPolicySchema = z
  .object({
    ApprovalThresholdPolicy: ApprovalThresholdPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('VotingPolicy')

const NetworkStatusSchema = z
  .enum(['CREATING', 'AVAILABLE', 'CREATE_FAILED', 'DELETING', 'DELETED'])
  .openapi('NetworkStatus')

const NetworkSchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the network.' }),
    ).exactOptional(),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the network.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'Attributes of the blockchain framework for the network.' }),
    ).exactOptional(),
    Framework: FrameworkSchema.and(
      z.any().openapi({ description: 'The blockchain framework that the network uses.' }),
    ).exactOptional(),
    FrameworkVersion: FrameworkVersionStringSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the blockchain framework that the network uses.' }),
    ).exactOptional(),
    FrameworkAttributes: NetworkFrameworkAttributesSchema.and(
      z
        .any()
        .openapi({ description: 'Attributes of the blockchain framework that the network uses.' }),
    ).exactOptional(),
    VpcEndpointServiceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.',
        }),
    ).exactOptional(),
    VotingPolicy: VotingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The voting rules that the network uses to decide if a proposal is accepted.',
        }),
    ).exactOptional(),
    Status: NetworkStatusSchema.and(
      z.any().openapi({ description: 'The current status of the network.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the network was created.' }),
    ).exactOptional(),
    Tags: OutputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags assigned to the network. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Network configuration properties.', required: [] })
  .openapi('Network')

const GetNetworkOutputSchema = z
  .object({
    Network: NetworkSchema.and(
      z.any().openapi({ description: 'An object containing network configuration parameters.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkOutput')

const NodeFabricAttributesSchema = z
  .object({
    PeerEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint that identifies the peer node for all services except peer channel-based event services.',
        }),
    ).exactOptional(),
    PeerEventEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint that identifies the peer node for peer channel-based event services.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain.',
    required: [],
  })
  .openapi('NodeFabricAttributes')

const NodeEthereumAttributesSchema = z
  .object({
    HttpEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint on which the Ethereum node listens to run Ethereum API methods over HTTP connections from a client. Use this endpoint in client code for smart contracts when using an HTTP connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.',
        }),
    ).exactOptional(),
    WebSocketEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint on which the Ethereum node listens to run Ethereum JSON-RPC methods over WebSocket connections from a client. Use this endpoint in client code for smart contracts when using a WebSocket connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of an Ethereum node.', required: [] })
  .openapi('NodeEthereumAttributes')

const NodeFrameworkAttributesSchema = z
  .object({
    Fabric: NodeFabricAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.',
        }),
    ).exactOptional(),
    Ethereum: NodeEthereumAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes of Ethereum for a node on a Managed Blockchain network that uses Ethereum. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses.',
    required: [],
  })
  .openapi('NodeFrameworkAttributes')

const NodeStatusSchema = z
  .enum([
    'CREATING',
    'AVAILABLE',
    'UNHEALTHY',
    'CREATE_FAILED',
    'UPDATING',
    'DELETING',
    'DELETED',
    'FAILED',
    'INACCESSIBLE_ENCRYPTION_KEY',
  ])
  .openapi('NodeStatus')

const NodeSchema = z
  .object({
    NetworkId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the network that the node is on.' }),
    ).exactOptional(),
    MemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the member to which the node belongs.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the node.' }),
    ).exactOptional(),
    InstanceType: InstanceTypeStringSchema.and(
      z.any().openapi({ description: 'The instance type of the node.' }),
    ).exactOptional(),
    AvailabilityZone: AvailabilityZoneStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone in which the node exists. Required for Ethereum nodes. ',
        }),
    ).exactOptional(),
    FrameworkAttributes: NodeFrameworkAttributesSchema.and(
      z.any().openapi({ description: 'Attributes of the blockchain framework being used.' }),
    ).exactOptional(),
    LogPublishingConfiguration: NodeLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.',
        }),
    ).exactOptional(),
    StateDB: StateDBTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
    Status: NodeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the node.</p> <ul> <li> <p> <code>CREATING</code> - The Amazon Web Services account is in the process of creating a node.</p> </li> <li> <p> <code>AVAILABLE</code> - The node has been created and can participate in the network.</p> </li> <li> <p> <code>UNHEALTHY</code> - The node is impaired and might not function as expected. Amazon Managed Blockchain automatically finds nodes in this state and tries to recover them. If a node is recoverable, it returns to <code>AVAILABLE</code>. Otherwise, it moves to <code>FAILED</code> status.</p> </li> <li> <p> <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a node and creation failed.</p> </li> <li> <p> <code>UPDATING</code> - The node is in the process of being updated.</p> </li> <li> <p> <code>DELETING</code> - The node is in the process of being deleted.</p> </li> <li> <p> <code>DELETED</code> - The node can no longer participate on the network.</p> </li> <li> <p> <code>FAILED</code> - The node is no longer functional, cannot be recovered, and must be deleted.</p> </li> <li> <p> <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The node is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p> <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the node resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the node was created.' }),
    ).exactOptional(),
    Tags: OutputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags assigned to the node. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
    KmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the node uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the node uses an Amazon Web Services owned KMS key for encryption. The node inherits this parameter from the member that it belongs to.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configuration properties of a node.', required: [] })
  .openapi('Node')

const GetNodeOutputSchema = z
  .object({
    Node: NodeSchema.and(
      z.any().openapi({ description: 'Properties of the node configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNodeOutput')

const ProposalActionsSchema = z
  .object({
    Invitations: InviteActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The actions to perform for an <code>APPROVED</code> proposal to invite an Amazon Web Services account to create a member and join the network. ',
        }),
    ).exactOptional(),
    Removals: RemoveActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('ProposalActions')

const ProposalStatusSchema = z
  .enum(['IN_PROGRESS', 'APPROVED', 'REJECTED', 'EXPIRED', 'ACTION_FAILED'])
  .openapi('ProposalStatus')

const VoteCountSchema = z.int().openapi('VoteCount')

const ProposalSchema = z
  .object({
    ProposalId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the proposal.' }),
    ).exactOptional(),
    NetworkId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the network for which the proposal is made.',
        }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the proposal.' }),
    ).exactOptional(),
    Actions: ProposalActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions to perform on the network if the proposal is <code>APPROVED</code>.',
        }),
    ).exactOptional(),
    ProposedByMemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the member that created the proposal.' }),
    ).exactOptional(),
    ProposedByMemberName: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: 'The name of the member that created the proposal.' }),
    ).exactOptional(),
    Status: ProposalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the proposal. Values are as follows:</p> <ul> <li> <p> <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p> </li> <li> <p> <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p> </li> <li> <p> <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> aren't carried out.</p> </li> <li> <p> <code>EXPIRED</code> - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> aren't carried out.</p> </li> <li> <p> <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved couldn't be completed because of an error. The <code>ACTION_FAILED</code> status occurs even if only one ProposalAction fails and other actions are successful.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time that the proposal was created. ' }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            " The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out. ",
        }),
    ).exactOptional(),
    YesVoteCount: VoteCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The current total of <code>YES</code> votes cast on the proposal by members. ',
        }),
    ).exactOptional(),
    NoVoteCount: VoteCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The current total of <code>NO</code> votes cast on the proposal by members. ',
        }),
    ).exactOptional(),
    OutstandingVoteCount: VoteCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of <code>YES</code> votes and <code>NO</code> votes. ',
        }),
    ).exactOptional(),
    Tags: OutputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags assigned to the proposal. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Properties of a proposal on a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('Proposal')

const GetProposalOutputSchema = z
  .object({
    Proposal: ProposalSchema.and(
      z.any().openapi({ description: 'Information about a proposal.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProposalOutput')

const AccessorSummarySchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the accessor.' }),
    ).exactOptional(),
    Type: AccessorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the accessor.</p> <note> <p>Currently accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>',
        }),
    ).exactOptional(),
    Status: AccessorStatusSchema.and(
      z.any().openapi({ description: 'The current status of the accessor.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The creation date and time of the accessor.' }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of accessor properties.', required: [] })
  .openapi('AccessorSummary')

const AccessorSummaryListSchema = z.array(AccessorSummarySchema).openapi('AccessorSummaryList')

const PaginationTokenSchema = z.string().max(128).openapi('PaginationToken')

const ListAccessorsOutputSchema = z
  .object({
    Accessors: AccessorSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of AccessorSummary objects that contain configuration properties for each accessor.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The pagination token that indicates the next set of results to retrieve. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccessorsOutput')

const InvitationStatusSchema = z
  .enum(['PENDING', 'ACCEPTED', 'ACCEPTING', 'REJECTED', 'EXPIRED'])
  .openapi('InvitationStatus')

const NetworkSummarySchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the network.' }),
    ).exactOptional(),
    Name: NameStringSchema.and(
      z.any().openapi({ description: 'The name of the network.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description of the network.' }),
    ).exactOptional(),
    Framework: FrameworkSchema.and(
      z.any().openapi({ description: 'The blockchain framework that the network uses.' }),
    ).exactOptional(),
    FrameworkVersion: FrameworkVersionStringSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the blockchain framework that the network uses.' }),
    ).exactOptional(),
    Status: NetworkStatusSchema.and(
      z.any().openapi({ description: 'The current status of the network.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the network was created.' }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of network configuration properties.', required: [] })
  .openapi('NetworkSummary')

const InvitationSchema = z
  .object({
    InvitationId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the invitation.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the invitation was created.' }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.',
        }),
    ).exactOptional(),
    Status: InvitationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the invitation:</p> <ul> <li> <p> <code>PENDING</code> - The invitee hasn't created a member to join the network, and the invitation hasn't yet expired.</p> </li> <li> <p> <code>ACCEPTING</code> - The invitee has begun creating a member, and creation hasn't yet completed.</p> </li> <li> <p> <code>ACCEPTED</code> - The invitee created a member and joined the network using the <code>InvitationID</code>.</p> </li> <li> <p> <code>REJECTED</code> - The invitee rejected the invitation.</p> </li> <li> <p> <code>EXPIRED</code> - The invitee neither created a member nor rejected the invitation before the <code>ExpirationDate</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    NetworkSummary: NetworkSummarySchema.exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the invitation. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An invitation to an Amazon Web Services account to create a member and join the network.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('Invitation')

const InvitationListSchema = z.array(InvitationSchema).openapi('InvitationList')

const ListInvitationsOutputSchema = z
  .object({
    Invitations: InvitationListSchema.and(
      z.any().openapi({ description: 'The invitations for the network.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInvitationsOutput')

const IsOwnedSchema = z.boolean().openapi('IsOwned')

const MemberSummarySchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the member.' }),
    ).exactOptional(),
    Name: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: 'The name of the member.' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description of the member.' }),
    ).exactOptional(),
    Status: MemberStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the member.</p> <ul> <li> <p> <code>CREATING</code> - The Amazon Web Services account is in the process of creating a member.</p> </li> <li> <p> <code>AVAILABLE</code> - The member has been created and can participate in the network.</p> </li> <li> <p> <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a member and creation failed.</p> </li> <li> <p> <code>UPDATING</code> - The member is in the process of being updated.</p> </li> <li> <p> <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> <li> <p> <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> <li> <p> <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The member is impaired and might not function as expected because it cannot access the specified customer managed key in Key Management Service (KMS) for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p> <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the member was created.' }),
    ).exactOptional(),
    IsOwned: IsOwnedSchema.and(
      z
        .any()
        .openapi({
          description:
            'An indicator of whether the member is owned by your Amazon Web Services account or a different Amazon Web Services account.',
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A summary of configuration properties for a member.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('MemberSummary')

const MemberSummaryListSchema = z.array(MemberSummarySchema).openapi('MemberSummaryList')

const ListMembersOutputSchema = z
  .object({
    Members: MemberSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>MemberSummary</code> objects. Each object contains details about a network member.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMembersOutput')

const NetworkSummaryListSchema = z.array(NetworkSummarySchema).openapi('NetworkSummaryList')

const ListNetworksOutputSchema = z
  .object({
    Networks: NetworkSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>NetworkSummary</code> objects that contain configuration properties for each network.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNetworksOutput')

const NodeSummarySchema = z
  .object({
    Id: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the node.' }),
    ).exactOptional(),
    Status: NodeStatusSchema.and(
      z.any().openapi({ description: 'The status of the node.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the node was created.' }),
    ).exactOptional(),
    AvailabilityZone: AvailabilityZoneStringSchema.and(
      z.any().openapi({ description: 'The Availability Zone in which the node exists.' }),
    ).exactOptional(),
    InstanceType: InstanceTypeStringSchema.and(
      z.any().openapi({ description: 'The EC2 instance type for the node.' }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of configuration properties for a node.', required: [] })
  .openapi('NodeSummary')

const NodeSummaryListSchema = z.array(NodeSummarySchema).openapi('NodeSummaryList')

const ListNodesOutputSchema = z
  .object({
    Nodes: NodeSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>NodeSummary</code> objects that contain configuration properties for each node.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNodesOutput')

const VoteValueSchema = z.enum(['YES', 'NO']).openapi('VoteValue')

const VoteSummarySchema = z
  .object({
    Vote: VoteValueSchema.and(
      z
        .any()
        .openapi({ description: ' The vote value, either <code>YES</code> or <code>NO</code>. ' }),
    ).exactOptional(),
    MemberName: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: ' The name of the member that cast the vote. ' }),
    ).exactOptional(),
    MemberId: ResourceIdStringSchema.and(
      z.any().openapi({ description: ' The unique identifier of the member that cast the vote. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> Properties of an individual vote that a member cast for a proposal. </p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('VoteSummary')

const ProposalVoteListSchema = z.array(VoteSummarySchema).openapi('ProposalVoteList')

const ListProposalVotesOutputSchema = z
  .object({
    ProposalVotes: ProposalVoteListSchema.and(
      z.any().openapi({ description: ' The list of votes. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The pagination token that indicates the next set of results to retrieve. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProposalVotesOutput')

const ProposalSummarySchema = z
  .object({
    ProposalId: ResourceIdStringSchema.and(
      z.any().openapi({ description: ' The unique identifier of the proposal. ' }),
    ).exactOptional(),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: ' The description of the proposal. ' }),
    ).exactOptional(),
    ProposedByMemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description: ' The unique identifier of the member that created the proposal. ',
        }),
    ).exactOptional(),
    ProposedByMemberName: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: ' The name of the member that created the proposal. ' }),
    ).exactOptional(),
    Status: ProposalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the proposal. Values are as follows:</p> <ul> <li> <p> <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p> </li> <li> <p> <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p> </li> <li> <p> <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> aren't carried out.</p> </li> <li> <p> <code>EXPIRED</code> - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> aren't carried out.</p> </li> <li> <p> <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved couldn't be completed because of an error.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time that the proposal was created. ' }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            " The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out. ",
        }),
    ).exactOptional(),
    Arn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: '<p>Properties of a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>',
    required: [],
  })
  .openapi('ProposalSummary')

const ProposalSummaryListSchema = z.array(ProposalSummarySchema).openapi('ProposalSummaryList')

const ListProposalsOutputSchema = z
  .object({
    Proposals: ProposalSummaryListSchema.and(
      z.any().openapi({ description: 'The summary of each proposal made on the network.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The pagination token that indicates the next set of results to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProposalsOutput')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: OutputTagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RejectInvitationOutputSchema = z.object({}).openapi('RejectInvitationOutput')

const IllegalActionExceptionSchema = z.any().openapi('IllegalActionException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateMemberOutputSchema = z.object({}).openapi('UpdateMemberOutput')

const UpdateNodeOutputSchema = z.object({}).openapi('UpdateNodeOutput')

const VoteOnProposalOutputSchema = z.object({}).openapi('VoteOnProposalOutput')

const AccessorListMaxResultsSchema = z.int().min(1).max(50).openapi('AccessorListMaxResults')

const ClientRequestTokenStringSchema = z.string().min(1).max(64).openapi('ClientRequestTokenString')

const CreateAccessorInputSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.',
        }),
    ),
    AccessorType: AccessorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>',
        }),
    ),
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags to assign to the Accessor.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientRequestToken', 'AccessorType'], title: 'CreateAccessorInput' })
  .openapi('CreateAccessorInput')

const MemberConfigurationSchema = z
  .object({
    Name: NetworkMemberNameStringSchema.and(
      z.any().openapi({ description: 'The name of the member.' }),
    ),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description of the member.' }),
    ).exactOptional(),
    FrameworkConfiguration: MemberFrameworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties of the blockchain framework relevant to the member.',
        }),
    ),
    LogPublishingConfiguration: MemberLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with a member of a Managed Blockchain network.',
        }),
    ).exactOptional(),
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags assigned to the member. Tags consist of a key and optional value. </p> <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    KmsKeyArn: ArnStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) to use for encryption at rest in the member. This parameter is inherited by any nodes that this member creates. For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <b>Undefined or empty string</b> - By default, use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b> - Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon Managed Blockchain doesn\'t support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The following is an example of a KMS key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'FrameworkConfiguration'],
    description:
      '<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>',
  })
  .openapi('MemberConfiguration')

const CreateMemberInputSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
        }),
    ),
    InvitationId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the invitation that is sent to the member to join the network.',
        }),
    ),
    MemberConfiguration: MemberConfigurationSchema.and(
      z.any().openapi({ description: 'Member configuration parameters.' }),
    ),
  })
  .openapi({
    required: ['ClientRequestToken', 'InvitationId', 'MemberConfiguration'],
    title: 'CreateMemberInput',
  })
  .openapi('CreateMemberInput')

const NetworkFrameworkConfigurationSchema = z
  .object({
    Fabric: NetworkFabricConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Configuration properties relevant to the network for the blockchain framework that the network uses. ',
    required: [],
  })
  .openapi('NetworkFrameworkConfiguration')

const CreateNetworkInputSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI. ',
        }),
    ),
    Name: NameStringSchema.and(z.any().openapi({ description: 'The name of the network.' })),
    Description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'An optional description for the network.' }),
    ).exactOptional(),
    Framework: FrameworkSchema.and(
      z.any().openapi({ description: 'The blockchain framework that the network uses.' }),
    ),
    FrameworkVersion: FrameworkVersionStringSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the blockchain framework that the network uses.' }),
    ),
    FrameworkConfiguration: NetworkFrameworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configuration properties of the blockchain framework relevant to the network configuration. ',
        }),
    ).exactOptional(),
    VotingPolicy: VotingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The voting rules used by the network to determine if a proposal is approved. ',
        }),
    ),
    MemberConfiguration: MemberConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration properties for the first member within the network.',
        }),
    ),
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags to assign to the network.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ClientRequestToken',
      'Name',
      'Framework',
      'FrameworkVersion',
      'VotingPolicy',
      'MemberConfiguration',
    ],
    title: 'CreateNetworkInput',
  })
  .openapi('CreateNetworkInput')

const NodeConfigurationSchema = z
  .object({
    InstanceType: InstanceTypeStringSchema.and(
      z.any().openapi({ description: 'The Amazon Managed Blockchain instance type for the node.' }),
    ),
    AvailabilityZone: AvailabilityZoneStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone in which the node exists. Required for Ethereum nodes. ',
        }),
    ).exactOptional(),
    LogPublishingConfiguration: NodeLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain. ',
        }),
    ).exactOptional(),
    StateDB: StateDBTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is <code>CouchDB</code>.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['InstanceType'], description: 'Configuration properties of a node.' })
  .openapi('NodeConfiguration')

const CreateNodeInputSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
        }),
    ),
    MemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
    NodeConfiguration: NodeConfigurationSchema.and(
      z.any().openapi({ description: 'The properties of a node configuration.' }),
    ),
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags to assign to the node.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientRequestToken', 'NodeConfiguration'], title: 'CreateNodeInput' })
  .openapi('CreateNodeInput')

const CreateProposalInputSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
        }),
    ),
    MemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.',
        }),
    ),
    Actions: ProposalActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of actions proposed, such as inviting a member or removing a member. The types of <code>Actions</code> in a proposal are mutually exclusive. For example, a proposal with <code>Invitations</code> actions cannot also contain <code>Removals</code> actions.',
        }),
    ),
    Description: DescriptionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."',
        }),
    ).exactOptional(),
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags to assign to the proposal.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientRequestToken', 'MemberId', 'Actions'],
    title: 'CreateProposalInput',
  })
  .openapi('CreateProposalInput')

const DeleteAccessorInputSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessorInput' })
  .openapi('DeleteAccessorInput')

const DeleteMemberInputSchema = z
  .object({})
  .openapi({ title: 'DeleteMemberInput' })
  .openapi('DeleteMemberInput')

const DeleteNodeInputSchema = z
  .object({})
  .openapi({ title: 'DeleteNodeInput' })
  .openapi('DeleteNodeInput')

const GetAccessorInputSchema = z
  .object({})
  .openapi({ title: 'GetAccessorInput' })
  .openapi('GetAccessorInput')

const GetMemberInputSchema = z
  .object({})
  .openapi({ title: 'GetMemberInput' })
  .openapi('GetMemberInput')

const GetNetworkInputSchema = z
  .object({})
  .openapi({ title: 'GetNetworkInput' })
  .openapi('GetNetworkInput')

const GetNodeInputSchema = z.object({}).openapi({ title: 'GetNodeInput' }).openapi('GetNodeInput')

const GetProposalInputSchema = z
  .object({})
  .openapi({ title: 'GetProposalInput' })
  .openapi('GetProposalInput')

const ListAccessorsInputSchema = z
  .object({})
  .openapi({ title: 'ListAccessorsInput' })
  .openapi('ListAccessorsInput')

const ProposalListMaxResultsSchema = z.int().min(1).max(100).openapi('ProposalListMaxResults')

const ListInvitationsInputSchema = z
  .object({})
  .openapi({ title: 'ListInvitationsInput' })
  .openapi('ListInvitationsInput')

const MemberListMaxResultsSchema = z.int().min(1).max(20).openapi('MemberListMaxResults')

const ListMembersInputSchema = z
  .object({})
  .openapi({ title: 'ListMembersInput' })
  .openapi('ListMembersInput')

const NetworkListMaxResultsSchema = z.int().min(1).max(10).openapi('NetworkListMaxResults')

const ListNetworksInputSchema = z
  .object({})
  .openapi({ title: 'ListNetworksInput' })
  .openapi('ListNetworksInput')

const NodeListMaxResultsSchema = z.int().min(1).max(20).openapi('NodeListMaxResults')

const ListNodesInputSchema = z
  .object({})
  .openapi({ title: 'ListNodesInput' })
  .openapi('ListNodesInput')

const ListProposalVotesInputSchema = z
  .object({})
  .openapi({ title: 'ListProposalVotesInput' })
  .openapi('ListProposalVotesInput')

const ListProposalsInputSchema = z
  .object({})
  .openapi({ title: 'ListProposalsInput' })
  .openapi('ListProposalsInput')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RejectInvitationInputSchema = z
  .object({})
  .openapi({ title: 'RejectInvitationInput' })
  .openapi('RejectInvitationInput')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: InputTagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateMemberInputSchema = z
  .object({
    LogPublishingConfiguration: MemberLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration properties for publishing to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateMemberInput', required: [] })
  .openapi('UpdateMemberInput')

const UpdateNodeInputSchema = z
  .object({
    MemberId: ResourceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric.</p>',
        }),
    ).exactOptional(),
    LogPublishingConfiguration: NodeLogPublishingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration properties for publishing to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateNodeInput', required: [] })
  .openapi('UpdateNodeInput')

const VoteOnProposalInputSchema = z
  .object({
    VoterMemberId: ResourceIdStringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the member casting the vote. ' }),
    ),
    Vote: VoteValueSchema.and(z.any().openapi({ description: ' The value of the vote. ' })),
  })
  .openapi({ required: ['VoterMemberId', 'Vote'], title: 'VoteOnProposalInput' })
  .openapi('VoteOnProposalInput')

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

export const getAccessorsRoute = createRoute({
  method: 'get',
  path: '/accessors',
  description:
    'Returns a list of the accessors and their properties. Accessor objects are containers that have the information required for token based access to your Ethereum nodes.',
  operationId: 'ListAccessors',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of accessors to list.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' The pagination token that indicates the next set of results to retrieve. ',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListAccessorsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postAccessorsRoute = createRoute({
  method: 'post',
  path: '/accessors',
  description:
    'Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor contains information required for token based access to your Ethereum nodes.',
  operationId: 'CreateAccessor',
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
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.',
                }),
              AccessorType: z
                .literal('BILLING_TOKEN')
                .openapi({
                  description:
                    '<p>The type of accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Tags to assign to the Accessor.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['ClientRequestToken', 'AccessorType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccessorOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdMembersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/members',
  description:
    '<p>Returns a list of the members in a network and properties of their configurations.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'ListMembers',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network for which to list members.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The optional name of the member to list.',
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum([
          'CREATING',
          'AVAILABLE',
          'CREATE_FAILED',
          'UPDATING',
          'DELETING',
          'DELETED',
          'INACCESSIBLE_ENCRYPTION_KEY',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description:
              'An optional status specifier. If provided, only members currently in this status are listed.',
            schema: {
              type: 'string',
              enum: [
                'CREATING',
                'AVAILABLE',
                'CREATE_FAILED',
                'UPDATING',
                'DELETING',
                'DELETED',
                'INACCESSIBLE_ENCRYPTION_KEY',
              ],
            },
          },
        }),
      isOwned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isOwned',
            in: 'query',
            required: false,
            description:
              'An optional Boolean value. If provided, the request is limited either to members that the current Amazon Web Services account owns (<code>true</code>) or that other Amazon Web Services accountsn own (<code>false</code>). If omitted, all members are listed.',
            schema: { type: 'boolean' },
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
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of members to return in the request.',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The pagination token that indicates the next set of results to retrieve.',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListMembersOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postNetworksNetworkIdMembersRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/members',
  description:
    '<p>Creates a member within a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'CreateMember',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network in which the member is created.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
                }),
              InvitationId: z
                .string()
                .min(1)
                .max(32)
                .openapi({
                  description:
                    'The unique identifier of the invitation that is sent to the member to join the network.',
                }),
              MemberConfiguration: z
                .object({
                  Name: NetworkMemberNameStringSchema.and(
                    z.any().openapi({ description: 'The name of the member.' }),
                  ).exactOptional(),
                  Description: DescriptionStringSchema.and(
                    z.any().openapi({ description: 'An optional description of the member.' }),
                  ).exactOptional(),
                  FrameworkConfiguration: MemberFrameworkConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties of the blockchain framework relevant to the member.',
                      }),
                  ).exactOptional(),
                  LogPublishingConfiguration: MemberLogPublishingConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties for logging events associated with a member of a Managed Blockchain network.',
                      }),
                  ).exactOptional(),
                  Tags: InputTagMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Tags assigned to the member. Tags consist of a key and optional value. </p> <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  KmsKeyArn: ArnStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) to use for encryption at rest in the member. This parameter is inherited by any nodes that this member creates. For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <b>Undefined or empty string</b> - By default, use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b> - Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon Managed Blockchain doesn\'t support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The following is an example of a KMS key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['ClientRequestToken', 'InvitationId', 'MemberConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMemberOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    488: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getNetworksRoute = createRoute({
  method: 'get',
  path: '/networks',
  description:
    '<p>Returns information about the networks in which the current Amazon Web Services account participates.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'ListNetworks',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The name of the network.',
            schema: { type: 'string' },
          },
        }),
      framework: z
        .enum(['HYPERLEDGER_FABRIC', 'ETHEREUM'])
        .exactOptional()
        .openapi({
          param: {
            name: 'framework',
            in: 'query',
            required: false,
            description:
              'An optional framework specifier. If provided, only networks of this framework type are listed.',
            schema: { type: 'string', enum: ['HYPERLEDGER_FABRIC', 'ETHEREUM'] },
          },
        }),
      status: z
        .enum(['CREATING', 'AVAILABLE', 'CREATE_FAILED', 'DELETING', 'DELETED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description:
              '<p>An optional status specifier. If provided, only networks currently in this status are listed.</p> <p>Applies only to Hyperledger Fabric.</p>',
            schema: {
              type: 'string',
              enum: ['CREATING', 'AVAILABLE', 'CREATE_FAILED', 'DELETING', 'DELETED'],
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
          z.int().min(1).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of networks to list.',
            schema: { type: 'integer', minimum: 1, maximum: 10 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The pagination token that indicates the next set of results to retrieve.',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListNetworksOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postNetworksRoute = createRoute({
  method: 'post',
  path: '/networks',
  description:
    '<p>Creates a new blockchain network using Amazon Managed Blockchain.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'CreateNetwork',
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
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI. ',
                }),
              Name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(64)
                .openapi({ description: 'The name of the network.' }),
              Description: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'An optional description for the network.' }),
              Framework: z
                .enum(['HYPERLEDGER_FABRIC', 'ETHEREUM'])
                .openapi({ description: 'The blockchain framework that the network uses.' }),
              FrameworkVersion: z
                .string()
                .min(1)
                .max(8)
                .openapi({
                  description: 'The version of the blockchain framework that the network uses.',
                }),
              FrameworkConfiguration: z
                .object({
                  Fabric: NetworkFabricConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Configuration properties relevant to the network for the blockchain framework that the network uses. ',
                  required: [],
                }),
              VotingPolicy: z
                .object({
                  ApprovalThresholdPolicy: ApprovalThresholdPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p>',
                  required: [],
                }),
              MemberConfiguration: z
                .object({
                  Name: NetworkMemberNameStringSchema.and(
                    z.any().openapi({ description: 'The name of the member.' }),
                  ).exactOptional(),
                  Description: DescriptionStringSchema.and(
                    z.any().openapi({ description: 'An optional description of the member.' }),
                  ).exactOptional(),
                  FrameworkConfiguration: MemberFrameworkConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties of the blockchain framework relevant to the member.',
                      }),
                  ).exactOptional(),
                  LogPublishingConfiguration: MemberLogPublishingConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties for logging events associated with a member of a Managed Blockchain network.',
                      }),
                  ).exactOptional(),
                  Tags: InputTagMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Tags assigned to the member. Tags consist of a key and optional value. </p> <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                      }),
                  ).exactOptional(),
                  KmsKeyArn: ArnStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) to use for encryption at rest in the member. This parameter is inherited by any nodes that this member creates. For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <b>Undefined or empty string</b> - By default, use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b> - Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon Managed Blockchain doesn\'t support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The following is an example of a KMS key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Tags to assign to the network.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                }),
            })
            .openapi({
              required: [
                'ClientRequestToken',
                'Name',
                'Framework',
                'FrameworkVersion',
                'VotingPolicy',
                'MemberConfiguration',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNetworkOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdNodesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/nodes',
  description:
    '<p>Returns information about the nodes within a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'ListNodes',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network for which to list nodes.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      memberId: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberId',
            in: 'query',
            required: false,
            description:
              '<p>The unique identifier of the member who owns the nodes to list.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      status: z
        .enum([
          'CREATING',
          'AVAILABLE',
          'UNHEALTHY',
          'CREATE_FAILED',
          'UPDATING',
          'DELETING',
          'DELETED',
          'FAILED',
          'INACCESSIBLE_ENCRYPTION_KEY',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description:
              'An optional status specifier. If provided, only nodes currently in this status are listed.',
            schema: {
              type: 'string',
              enum: [
                'CREATING',
                'AVAILABLE',
                'UNHEALTHY',
                'CREATE_FAILED',
                'UPDATING',
                'DELETING',
                'DELETED',
                'FAILED',
                'INACCESSIBLE_ENCRYPTION_KEY',
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
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of nodes to list.',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The pagination token that indicates the next set of results to retrieve.',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListNodesOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postNetworksNetworkIdNodesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/nodes',
  description:
    '<p>Creates a node on the specified blockchain network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'CreateNode',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description:
              '<p>The unique identifier of the network for the node.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
                }),
              MemberId: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric.</p>',
                }),
              NodeConfiguration: z
                .object({
                  InstanceType: InstanceTypeStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon Managed Blockchain instance type for the node.',
                      }),
                  ).exactOptional(),
                  AvailabilityZone: AvailabilityZoneStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Availability Zone in which the node exists. Required for Ethereum nodes. ',
                      }),
                  ).exactOptional(),
                  LogPublishingConfiguration: NodeLogPublishingConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain. ',
                      }),
                  ).exactOptional(),
                  StateDB: StateDBTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is <code>CouchDB</code>.</p> <p>Applies only to Hyperledger Fabric.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Configuration properties of a node.', required: [] }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Tags to assign to the node.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['ClientRequestToken', 'NodeConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNodeOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    488: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdProposalsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/proposals',
  description:
    '<p>Returns a list of proposals for the network.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'ListProposals',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the network. ',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of proposals to return. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' The pagination token that indicates the next set of results to retrieve. ',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListProposalsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postNetworksNetworkIdProposalsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/proposals',
  description:
    '<p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'CreateProposal',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the network for which the proposal is made.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ClientRequestToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.',
                }),
              MemberId: z
                .string()
                .min(1)
                .max(32)
                .openapi({
                  description:
                    'The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.',
                }),
              Actions: z
                .object({
                  Invitations: InviteActionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The actions to perform for an <code>APPROVED</code> proposal to invite an Amazon Web Services account to create a member and join the network. ',
                      }),
                  ).exactOptional(),
                  Removals: RemoveActionListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p>',
                  required: [],
                }),
              Description: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Tags to assign to the proposal.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
                }),
            })
            .openapi({ required: ['ClientRequestToken', 'MemberId', 'Actions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProposalOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getAccessorsAccessorIdRoute = createRoute({
  method: 'get',
  path: '/accessors/{AccessorId}',
  description:
    'Returns detailed information about an accessor. An accessor object is a container that has the information required for token based access to your Ethereum nodes.',
  operationId: 'GetAccessor',
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
      AccessorId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'AccessorId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the accessor.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccessorOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteAccessorsAccessorIdRoute = createRoute({
  method: 'delete',
  path: '/accessors/{AccessorId}',
  description:
    'Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the information required for token based access to your Ethereum nodes including, the <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or HTTP requests. However, WebSocket connections that were initiated while the accessor was in the <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).',
  operationId: 'DeleteAccessor',
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
      AccessorId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'AccessorId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the accessor.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAccessorOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/members/{memberId}',
  description:
    '<p>Returns detailed information about a member.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'GetMember',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network to which the member belongs.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      memberId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'memberId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the member.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMemberOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteNetworksNetworkIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/members/{memberId}',
  description:
    '<p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last Amazon Web Services account, the network is deleted also.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'DeleteMember',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network from which the member is removed.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      memberId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'memberId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the member to remove.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMemberOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const patchNetworksNetworkIdMembersMemberIdRoute = createRoute({
  method: 'patch',
  path: '/networks/{networkId}/members/{memberId}',
  description:
    '<p>Updates a member configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'UpdateMember',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the Managed Blockchain network to which the member belongs.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      memberId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'memberId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the member.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LogPublishingConfiguration: z
                .object({
                  Fabric: MemberFabricLogPublishingConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration properties for logging events associated with a member of a Managed Blockchain network.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateMemberOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/nodes/{nodeId}',
  description:
    '<p>Returns detailed information about a node.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'GetNode',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network that the node is on.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      nodeId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'nodeId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the node.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      memberId: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberId',
            in: 'query',
            required: false,
            description:
              '<p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNodeOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteNetworksNetworkIdNodesNodeIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/nodes/{nodeId}',
  description:
    '<p>Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'DeleteNode',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description:
              '<p>The unique identifier of the network that the node is on.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      nodeId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'nodeId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the node.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    query: z.object({
      memberId: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'memberId',
            in: 'query',
            required: false,
            description:
              '<p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNodeOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const patchNetworksNetworkIdNodesNodeIdRoute = createRoute({
  method: 'patch',
  path: '/networks/{networkId}/nodes/{nodeId}',
  description:
    '<p>Updates a node configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'UpdateNode',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network that the node is on.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      nodeId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'nodeId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the node.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MemberId: z
                .string()
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric.</p>',
                }),
              LogPublishingConfiguration: z
                .object({
                  Fabric: NodeFabricLogPublishingConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateNodeOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}',
  description:
    '<p>Returns detailed information about a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>',
  operationId: 'GetNetwork',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network to get information about.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdProposalsProposalIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/proposals/{proposalId}',
  description:
    '<p>Returns detailed information about a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'GetProposal',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the network for which the proposal is made.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      proposalId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'proposalId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the proposal.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProposalOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getInvitationsRoute = createRoute({
  method: 'get',
  path: '/invitations',
  description:
    '<p>Returns a list of all invitations for the current Amazon Web Services account.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'ListInvitations',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of invitations to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The pagination token that indicates the next set of results to retrieve.',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListInvitationsOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getNetworksNetworkIdProposalsProposalIdVotesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/proposals/{proposalId}/votes',
  description:
    '<p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'ListProposalVotes',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the network. ',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      proposalId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'proposalId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the proposal. ',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' The maximum number of votes to return. ',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' The pagination token that indicates the next set of results to retrieve. ',
            schema: { type: 'string', maxLength: 128 },
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
      content: { 'application/json': { schema: ListProposalVotesOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postNetworksNetworkIdProposalsProposalIdVotesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/proposals/{proposalId}/votes',
  description:
    '<p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'VoteOnProposal',
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
      networkId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'networkId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the network. ',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      proposalId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'proposalId',
            in: 'path',
            required: true,
            description: ' The unique identifier of the proposal. ',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VoterMemberId: z
                .string()
                .min(1)
                .max(32)
                .openapi({ description: 'The unique identifier of the member casting the vote. ' }),
              Vote: z.enum(['YES', 'NO']).openapi({ description: ' The value of the vote. ' }),
            })
            .openapi({ required: ['VoterMemberId', 'Vote'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VoteOnProposalOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'IllegalActionException',
      content: { 'application/json': { schema: IllegalActionExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    '<p>Returns a list of tags for the specified resource. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
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
        .regex(/^arn:.+:.+:.+:.+:.+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
            schema: {
              type: 'string',
              pattern: '^arn:.+:.+:.+:.+:.+',
              minLength: 1,
              maxLength: 1011,
            },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value.</p> <p>When you specify a tag key that already exists, the tag value is overwritten with the new value. Use <code>UntagResource</code> to remove tag keys.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
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
        .regex(/^arn:.+:.+:.+:.+:.+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
            schema: {
              type: 'string',
              pattern: '^arn:.+:.+:.+:.+:.+',
              minLength: 1,
              maxLength: 1011,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.',
                }),
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const deleteInvitationsInvitationIdRoute = createRoute({
  method: 'delete',
  path: '/invitations/{invitationId}',
  description:
    '<p>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network.</p> <p>Applies only to Hyperledger Fabric.</p>',
  operationId: 'RejectInvitation',
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
      invitationId: z
        .string()
        .min(1)
        .max(32)
        .openapi({
          param: {
            name: 'invitationId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the invitation to reject.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectInvitationOutputSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'IllegalActionException',
      content: { 'application/json': { schema: IllegalActionExceptionSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes the specified tags from the Amazon Managed Blockchain resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>',
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
        .regex(/^arn:.+:.+:.+:.+:.+/)
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
            schema: {
              type: 'string',
              pattern: '^arn:.+:.+:.+:.+:.+',
              minLength: 1,
              maxLength: 1011,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
            },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})
