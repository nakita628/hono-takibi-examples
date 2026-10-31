import { createRoute, z } from '@hono/zod-openapi'

const DirectoryIdSchema = z
  .string()
  .regex(/^d-[0-9a-f]{10}$/)
  .openapi('DirectoryId')

const DirectoryNameSchema = z
  .string()
  .regex(/^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+$/)
  .openapi('DirectoryName')

const DirectoryShortNameSchema = z
  .string()
  .regex(/^[^\\\/:*?"<>|.]+[^\\\/:*?"<>|]*$/)
  .openapi('DirectoryShortName')

const DirectorySizeSchema = z.enum(['Small', 'Large']).openapi('DirectorySize')

const DirectoryEditionSchema = z.enum(['Enterprise', 'Standard']).openapi('DirectoryEdition')

const AliasNameSchema = z
  .string()
  .regex(/^(?!D-|d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*/)
  .min(1)
  .max(62)
  .openapi('AliasName')

const AccessUrlSchema = z.string().min(1).max(128).openapi('AccessUrl')

const DescriptionSchema = z
  .string()
  .regex(/^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?.\/!\s-]*$/)
  .min(0)
  .max(128)
  .openapi('Description')

const IpAddrSchema = z
  .string()
  .regex(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  )
  .openapi('IpAddr')

const DnsIpAddrsSchema = z.array(IpAddrSchema).openapi('DnsIpAddrs')

const DirectoryStageSchema = z
  .enum([
    'Requested',
    'Creating',
    'Created',
    'Active',
    'Inoperable',
    'Impaired',
    'Restoring',
    'RestoreFailed',
    'Deleting',
    'Deleted',
    'Failed',
  ])
  .openapi('DirectoryStage')

const ShareStatusSchema = z
  .enum([
    'Shared',
    'PendingAcceptance',
    'Rejected',
    'Rejecting',
    'RejectFailed',
    'Sharing',
    'ShareFailed',
    'Deleted',
    'Deleting',
  ])
  .openapi('ShareStatus')

const ShareMethodSchema = z.enum(['ORGANIZATIONS', 'HANDSHAKE']).openapi('ShareMethod')

const NotesSchema = z.string().max(1024).openapi('Notes')

const LaunchTimeSchema = z.iso.datetime({ offset: true }).openapi('LaunchTime')

const LastUpdatedDateTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdatedDateTime')

const DirectoryTypeSchema = z
  .enum(['SimpleAD', 'ADConnector', 'MicrosoftAD', 'SharedMicrosoftAD'])
  .openapi('DirectoryType')

const VpcIdSchema = z
  .string()
  .regex(/^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$/)
  .openapi('VpcId')

const SubnetIdSchema = z
  .string()
  .regex(/^(subnet-[0-9a-f]{8}|subnet-[0-9a-f]{17})$/)
  .openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).openapi('SubnetIds')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^(sg-[0-9a-f]{8}|sg-[0-9a-f]{17})$/)
  .openapi('SecurityGroupId')

const AvailabilityZoneSchema = z.string().openapi('AvailabilityZone')

const AvailabilityZonesSchema = z.array(AvailabilityZoneSchema).openapi('AvailabilityZones')

const DirectoryVpcSettingsDescriptionSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The identifier of the VPC that the directory is in.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'The identifiers of the subnets for the directory servers.' }),
    ).exactOptional(),
    SecurityGroupId: SecurityGroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain controller security group identifier for the directory.',
        }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'The list of Availability Zones that the directory is in.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about the directory.', required: [] })
  .openapi('DirectoryVpcSettingsDescription')

const UserNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9._-]+/)
  .min(1)
  .openapi('UserName')

const IpAddrsSchema = z.array(IpAddrSchema).openapi('IpAddrs')

const DirectoryConnectSettingsDescriptionSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The identifier of the VPC that the AD Connector is in.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of subnet identifiers in the VPC that the AD Connector is in.',
        }),
    ).exactOptional(),
    CustomerUserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name of the service account in your self-managed directory.',
        }),
    ).exactOptional(),
    SecurityGroupId: SecurityGroupIdSchema.and(
      z
        .any()
        .openapi({ description: 'The security group identifier for the AD Connector directory.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of the Availability Zones that the directory is in.' }),
    ).exactOptional(),
    ConnectIps: IpAddrsSchema.and(
      z.any().openapi({ description: 'The IP addresses of the AD Connector servers.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an AD Connector directory.', required: [] })
  .openapi('DirectoryConnectSettingsDescription')

const ServerSchema = z.string().min(1).max(256).openapi('Server')

const ServersSchema = z.array(ServerSchema).openapi('Servers')

const PortNumberSchema = z.int().min(1025).max(65535).openapi('PortNumber')

const RadiusTimeoutSchema = z.int().min(1).max(20).openapi('RadiusTimeout')

const RadiusRetriesSchema = z.int().min(0).max(10).openapi('RadiusRetries')

const RadiusSharedSecretSchema = z
  .string()
  .min(8)
  .max(512)
  .openapi({ pattern: '^(\\p{LD}|\\p{Punct}| )+$' })
  .openapi('RadiusSharedSecret')

const RadiusAuthenticationProtocolSchema = z
  .enum(['PAP', 'CHAP', 'MS-CHAPv1', 'MS-CHAPv2'])
  .openapi('RadiusAuthenticationProtocol')

const RadiusDisplayLabelSchema = z.string().min(1).max(64).openapi('RadiusDisplayLabel')

const UseSameUsernameSchema = z.boolean().openapi('UseSameUsername')

const RadiusSettingsSchema = z
  .object({
    RadiusServers: ServersSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.',
        }),
    ).exactOptional(),
    RadiusPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the Directory Service servers.',
        }),
    ).exactOptional(),
    RadiusTimeout: RadiusTimeoutSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of time, in seconds, to wait for the RADIUS server to respond.',
        }),
    ).exactOptional(),
    RadiusRetries: RadiusRetriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of times that communication with the RADIUS server is attempted.',
        }),
    ).exactOptional(),
    SharedSecret: RadiusSharedSecretSchema.and(
      z.any().openapi({ description: 'Required for enabling RADIUS on the directory.' }),
    ).exactOptional(),
    AuthenticationProtocol: RadiusAuthenticationProtocolSchema.and(
      z.any().openapi({ description: 'The protocol specified for your RADIUS endpoints.' }),
    ).exactOptional(),
    DisplayLabel: RadiusDisplayLabelSchema.and(
      z.any().openapi({ description: 'Not currently used.' }),
    ).exactOptional(),
    UseSameUsername: UseSameUsernameSchema.and(
      z.any().openapi({ description: 'Not currently used.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a Remote Authentication Dial In User Service (RADIUS) server.',
    required: [],
  })
  .openapi('RadiusSettings')

const RadiusStatusSchema = z.enum(['Creating', 'Completed', 'Failed']).openapi('RadiusStatus')

const StageReasonSchema = z.string().openapi('StageReason')

const SsoEnabledSchema = z.boolean().openapi('SsoEnabled')

const DesiredNumberOfDomainControllersSchema = z
  .int()
  .min(2)
  .openapi('DesiredNumberOfDomainControllers')

const CustomerIdSchema = z
  .string()
  .regex(/^(\d{12})$/)
  .openapi('CustomerId')

const OwnerDirectoryDescriptionSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the Managed Microsoft AD directory in the directory owner account.',
        }),
    ).exactOptional(),
    AccountId: CustomerIdSchema.and(
      z.any().openapi({ description: 'Identifier of the directory owner account.' }),
    ).exactOptional(),
    DnsIpAddrs: DnsIpAddrsSchema.and(
      z.any().openapi({ description: 'IP address of the directory’s domain controllers.' }),
    ).exactOptional(),
    VpcSettings: DirectoryVpcSettingsDescriptionSchema.and(
      z.any().openapi({ description: 'Information about the VPC settings for the directory.' }),
    ).exactOptional(),
    RadiusSettings: RadiusSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>RadiusSettings</a> object that contains information about the RADIUS server.',
        }),
    ).exactOptional(),
    RadiusStatus: RadiusStatusSchema.and(
      z.any().openapi({ description: 'Information about the status of the RADIUS server.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the directory owner account details that have been shared to the directory consumer account.',
    required: [],
  })
  .openapi('OwnerDirectoryDescription')

const RegionNameSchema = z.string().min(8).max(32).openapi('RegionName')

const AdditionalRegionsSchema = z.array(RegionNameSchema).openapi('AdditionalRegions')

const RegionsInfoSchema = z
  .object({
    PrimaryRegion: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Region where the Managed Microsoft AD directory was originally created.',
        }),
    ).exactOptional(),
    AdditionalRegions: AdditionalRegionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the Regions where the directory has been replicated, excluding the primary Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the Regions that are configured for multi-Region replication.',
    required: [],
  })
  .openapi('RegionsInfo')

const OSVersionSchema = z.enum(['SERVER_2012', 'SERVER_2019']).openapi('OSVersion')

type DirectoryDescriptionType = {
  DirectoryId?: z.infer<typeof DirectoryIdSchema> & { [key: string]: unknown }
  Name?: z.infer<typeof DirectoryNameSchema> & { [key: string]: unknown }
  ShortName?: z.infer<typeof DirectoryShortNameSchema> & { [key: string]: unknown }
  Size?: z.infer<typeof DirectorySizeSchema> & { [key: string]: unknown }
  Edition?: z.infer<typeof DirectoryEditionSchema> & { [key: string]: unknown }
  Alias?: z.infer<typeof AliasNameSchema> & { [key: string]: unknown }
  AccessUrl?: z.infer<typeof AccessUrlSchema> & { [key: string]: unknown }
  Description?: z.infer<typeof DescriptionSchema> & { [key: string]: unknown }
  DnsIpAddrs?: z.infer<typeof DnsIpAddrsSchema> & { [key: string]: unknown }
  Stage?: z.infer<typeof DirectoryStageSchema> & { [key: string]: unknown }
  ShareStatus?: z.infer<typeof ShareStatusSchema> & { [key: string]: unknown }
  ShareMethod?: z.infer<typeof ShareMethodSchema> & { [key: string]: unknown }
  ShareNotes?: z.infer<typeof NotesSchema> & { [key: string]: unknown }
  LaunchTime?: z.infer<typeof LaunchTimeSchema> & { [key: string]: unknown }
  StageLastUpdatedDateTime?: z.infer<typeof LastUpdatedDateTimeSchema> & { [key: string]: unknown }
  Type?: z.infer<typeof DirectoryTypeSchema> & { [key: string]: unknown }
  VpcSettings?: z.infer<typeof DirectoryVpcSettingsDescriptionSchema> & { [key: string]: unknown }
  ConnectSettings?: z.infer<typeof DirectoryConnectSettingsDescriptionSchema> & {
    [key: string]: unknown
  }
  RadiusSettings?: z.infer<typeof RadiusSettingsSchema> & { [key: string]: unknown }
  RadiusStatus?: z.infer<typeof RadiusStatusSchema> & { [key: string]: unknown }
  StageReason?: z.infer<typeof StageReasonSchema> & { [key: string]: unknown }
  SsoEnabled?: z.infer<typeof SsoEnabledSchema> & { [key: string]: unknown }
  DesiredNumberOfDomainControllers?: z.infer<typeof DesiredNumberOfDomainControllersSchema> & {
    [key: string]: unknown
  }
  OwnerDirectoryDescription?: z.infer<typeof OwnerDirectoryDescriptionSchema> & {
    [key: string]: unknown
  }
  RegionsInfo?: z.infer<typeof RegionsInfoSchema> & { [key: string]: unknown }
  OsVersion?: z.infer<typeof OSVersionSchema> & { [key: string]: unknown }
}

const CreatedDateTimeSchema = z.iso.datetime({ offset: true }).openapi('CreatedDateTime')

const SharedDirectorySchema = z
  .object({
    OwnerAccountId: CustomerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory owner account, which contains the directory that has been shared to the consumer account.',
        }),
    ).exactOptional(),
    OwnerDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'Identifier of the directory in the directory owner account. ' }),
    ).exactOptional(),
    ShareMethod: ShareMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by sending a shared directory request (<code>HANDSHAKE</code>).',
        }),
    ).exactOptional(),
    SharedAccountId: CustomerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory consumer account that has access to the shared directory (<code>OwnerDirectoryId</code>) in the directory owner account.',
        }),
    ).exactOptional(),
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.',
        }),
    ).exactOptional(),
    ShareStatus: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Current directory status of the shared Managed Microsoft AD directory.',
        }),
    ).exactOptional(),
    ShareNotes: NotesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.',
        }),
    ).exactOptional(),
    CreatedDateTime: CreatedDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the shared directory was created.' }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the shared directory was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.',
    required: [],
  })
  .openapi('SharedDirectory')

const AcceptSharedDirectoryResultSchema = z
  .object({
    SharedDirectory: SharedDirectorySchema.and(
      z.any().openapi({ description: 'The shared directory in the directory consumer account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcceptSharedDirectoryResult')

const AcceptSharedDirectoryRequestSchema = z
  .object({
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account. ',
        }),
    ),
  })
  .openapi({ required: ['SharedDirectoryId'], title: 'AcceptSharedDirectoryRequest' })
  .openapi('AcceptSharedDirectoryRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const EntityDoesNotExistExceptionSchema = z.any().openapi('EntityDoesNotExistException')

const DirectoryAlreadySharedExceptionSchema = z.any().openapi('DirectoryAlreadySharedException')

const ClientExceptionSchema = z.any().openapi('ClientException')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const AddIpRoutesResultSchema = z.object({}).openapi('AddIpRoutesResult')

const CidrIpSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([1-9]|[1-2][0-9]|3[0-2]))$/,
  )
  .openapi('CidrIp')

const IpRouteSchema = z
  .object({
    CidrIp: CidrIpSchema.and(
      z
        .any()
        .openapi({
          description:
            'IP address block using CIDR format, for example 10.0.0.0/24. This is often the address block of the DNS server used for your self-managed domain. For a single IP address use a CIDR address block with /32. For example 10.0.0.0/32.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Description of the address block.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'IP address block. This is often the address block of the DNS server used for your self-managed domain. ',
    required: [],
  })
  .openapi('IpRoute')

const IpRoutesSchema = z.array(IpRouteSchema).openapi('IpRoutes')

const UpdateSecurityGroupForDirectoryControllersSchema = z
  .boolean()
  .openapi('UpdateSecurityGroupForDirectoryControllers')

const AddIpRoutesRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier (ID) of the directory to which to add the address block.',
        }),
    ),
    IpRoutes: IpRoutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'IP address blocks, using CIDR format, of the traffic to route. This is often the IP address block of the DNS server used for your self-managed domain.',
        }),
    ),
    UpdateSecurityGroupForDirectoryControllers:
      UpdateSecurityGroupForDirectoryControllersSchema.and(
        z
          .any()
          .openapi({
            description:
              '<p>If set to true, updates the inbound and outbound rules of the security group that has the description: "Amazon Web Services created security group for <i>directory ID</i> directory controllers." Following are the new rules: </p> <p>Inbound:</p> <ul> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: 0.0.0.0/0</p> </li> <li> <p>Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: 0.0.0.0/0</p> </li> <li> <p>Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0</p> </li> <li> <p>Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0</p> </li> <li> <p>Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0</p> </li> <li> <p>Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0</p> </li> </ul> <p/> <p>Outbound:</p> <ul> <li> <p>Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0</p> </li> </ul> <p>These security rules impact an internal network interface that is not exposed publicly.</p>',
          }),
      ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId', 'IpRoutes'], title: 'AddIpRoutesRequest' })
  .openapi('AddIpRoutesRequest')

const EntityAlreadyExistsExceptionSchema = z.any().openapi('EntityAlreadyExistsException')

const DirectoryUnavailableExceptionSchema = z.any().openapi('DirectoryUnavailableException')

const IpRouteLimitExceededExceptionSchema = z.any().openapi('IpRouteLimitExceededException')

const AddRegionResultSchema = z.object({}).openapi('AddRegionResult')

const DirectoryVpcSettingsSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the VPC in which to create the directory.' }),
    ),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. Directory Service creates a directory server and a DNS server in each of these subnets.',
        }),
    ),
  })
  .openapi({
    required: ['VpcId', 'SubnetIds'],
    description:
      'Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.',
  })
  .openapi('DirectoryVpcSettings')

const AddRegionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory to which you want to add Region replication.',
        }),
    ),
    RegionName: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Region where you want to add domain controllers for replication. For example, <code>us-east-1</code>.',
        }),
    ),
    VPCSettings: DirectoryVpcSettingsSchema,
  })
  .openapi({ required: ['DirectoryId', 'RegionName', 'VPCSettings'], title: 'AddRegionRequest' })
  .openapi('AddRegionRequest')

const DirectoryAlreadyInRegionExceptionSchema = z.any().openapi('DirectoryAlreadyInRegionException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const DirectoryDoesNotExistExceptionSchema = z.any().openapi('DirectoryDoesNotExistException')

const RegionLimitExceededExceptionSchema = z.any().openapi('RegionLimitExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const AddTagsToResourceResultSchema = z.object({}).openapi('AddTagsToResourceResult')

const ResourceIdSchema = z
  .string()
  .regex(/^[d]-[0-9a-f]{10}$/)
  .openapi('ResourceId')

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
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "Required name of the tag. The string value can be Unicode characters and cannot be prefixed with \"aws:\". The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The optional value of the tag. The string value can be Unicode characters. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'Metadata assigned to a directory consisting of a key-value pair.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const AddTagsToResourceRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'Identifier (ID) for the directory to which to add the tag.' }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the directory.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Tags'], title: 'AddTagsToResourceRequest' })
  .openapi('AddTagsToResourceRequest')

const TagLimitExceededExceptionSchema = z.any().openapi('TagLimitExceededException')

const CancelSchemaExtensionResultSchema = z.object({}).openapi('CancelSchemaExtensionResult')

const SchemaExtensionIdSchema = z
  .string()
  .regex(/^e-[0-9a-f]{10}$/)
  .openapi('SchemaExtensionId')

const CancelSchemaExtensionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory whose schema extension will be canceled.',
        }),
    ),
    SchemaExtensionId: SchemaExtensionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the schema extension that will be canceled.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'SchemaExtensionId'],
    title: 'CancelSchemaExtensionRequest',
  })
  .openapi('CancelSchemaExtensionRequest')

const ConnectDirectoryResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the new directory.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>ConnectDirectory</a> operation.',
    required: [],
  })
  .openapi('ConnectDirectoryResult')

const ConnectPasswordSchema = z.string().min(1).max(128).openapi('ConnectPassword')

const DirectoryConnectSettingsSchema = z
  .object({
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the VPC in which the AD Connector is created.',
        }),
    ),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subnet identifiers in the VPC in which the AD Connector is created.',
        }),
    ),
    CustomerDnsIps: DnsIpAddrsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more IP addresses of DNS servers or domain controllers in your self-managed directory.',
        }),
    ),
    CustomerUserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user name of an account in your self-managed directory that is used to connect to the directory. This account must have the following permissions:</p> <ul> <li> <p>Read users and groups</p> </li> <li> <p>Create computer objects</p> </li> <li> <p>Join computers to the domain</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['VpcId', 'SubnetIds', 'CustomerDnsIps', 'CustomerUserName'],
    description:
      'Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.',
  })
  .openapi('DirectoryConnectSettings')

const ConnectDirectoryRequestSchema = z
  .object({
    Name: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified name of your self-managed directory, such as <code>corp.example.com</code>.',
        }),
    ),
    ShortName: DirectoryShortNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The NetBIOS name of your self-managed directory, such as <code>CORP</code>.',
        }),
    ).exactOptional(),
    Password: ConnectPasswordSchema.and(
      z.any().openapi({ description: 'The password for your self-managed user account.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the directory.' }),
    ).exactOptional(),
    Size: DirectorySizeSchema.and(z.any().openapi({ description: 'The size of the directory.' })),
    ConnectSettings: DirectoryConnectSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>DirectoryConnectSettings</a> object that contains additional information for the operation.',
        }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to AD Connector.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Password', 'Size', 'ConnectSettings'],
    title: 'ConnectDirectoryRequest',
    description: 'Contains the inputs for the <a>ConnectDirectory</a> operation.',
  })
  .openapi('ConnectDirectoryRequest')

const DirectoryLimitExceededExceptionSchema = z.any().openapi('DirectoryLimitExceededException')

const CreateAliasResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ).exactOptional(),
    Alias: AliasNameSchema.and(
      z.any().openapi({ description: 'The alias for the directory.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>CreateAlias</a> operation.',
    required: [],
  })
  .openapi('CreateAliasResult')

const CreateAliasRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory for which to create the alias.' }),
    ),
    Alias: AliasNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The requested alias.</p> <p>The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'Alias'],
    title: 'CreateAliasRequest',
    description: 'Contains the inputs for the <a>CreateAlias</a> operation.',
  })
  .openapi('CreateAliasRequest')

const SIDSchema = z
  .string()
  .regex(/[&\w+-.@]+/)
  .min(1)
  .max(256)
  .openapi('SID')

const ComputerNameSchema = z.string().min(1).max(15).openapi('ComputerName')

const AttributeNameSchema = z.string().min(1).openapi('AttributeName')

const AttributeValueSchema = z.string().openapi('AttributeValue')

const AttributeSchema = z
  .object({
    Name: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute.' }),
    ).exactOptional(),
    Value: AttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a named directory attribute.', required: [] })
  .openapi('Attribute')

const AttributesSchema = z.array(AttributeSchema).openapi('Attributes')

const ComputerSchema = z
  .object({
    ComputerId: SIDSchema.and(
      z.any().openapi({ description: 'The identifier of the computer.' }),
    ).exactOptional(),
    ComputerName: ComputerNameSchema.and(
      z.any().openapi({ description: 'The computer name.' }),
    ).exactOptional(),
    ComputerAttributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the computer account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a computer account in a directory.',
    required: [],
  })
  .openapi('Computer')

const CreateComputerResultSchema = z
  .object({
    Computer: ComputerSchema.and(
      z
        .any()
        .openapi({ description: 'A <a>Computer</a> object that represents the computer account.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results for the <a>CreateComputer</a> operation.',
    required: [],
  })
  .openapi('CreateComputerResult')

const ComputerPasswordSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(8)
  .max(64)
  .openapi('ComputerPassword')

const OrganizationalUnitDNSchema = z.string().min(1).max(2000).openapi('OrganizationalUnitDN')

const CreateComputerRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory in which to create the computer account.',
        }),
    ),
    ComputerName: ComputerNameSchema.and(
      z.any().openapi({ description: 'The name of the computer account.' }),
    ),
    Password: ComputerPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.',
        }),
    ),
    OrganizationalUnitDistinguishedName: OrganizationalUnitDNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully-qualified distinguished name of the organizational unit to place the computer account in.',
        }),
    ).exactOptional(),
    ComputerAttributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the computer account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId', 'ComputerName', 'Password'],
    title: 'CreateComputerRequest',
    description: 'Contains the inputs for the <a>CreateComputer</a> operation.',
  })
  .openapi('CreateComputerRequest')

const AuthenticationFailedExceptionSchema = z.any().openapi('AuthenticationFailedException')

const CreateConditionalForwarderResultSchema = z
  .object({})
  .openapi({ description: 'The result of a CreateConditinalForwarder request.' })
  .openapi('CreateConditionalForwarderResult')

const RemoteDomainNameSchema = z
  .string()
  .regex(/^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+[.]?$/)
  .openapi('RemoteDomainName')

const CreateConditionalForwarderRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory ID of the Amazon Web Services directory for which you are creating the conditional forwarder.',
        }),
    ),
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.',
        }),
    ),
    DnsIpAddrs: DnsIpAddrsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP addresses of the remote DNS server associated with RemoteDomainName.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'RemoteDomainName', 'DnsIpAddrs'],
    title: 'CreateConditionalForwarderRequest',
    description:
      'Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.',
  })
  .openapi('CreateConditionalForwarderRequest')

const CreateDirectoryResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>CreateDirectory</a> operation.',
    required: [],
  })
  .openapi('CreateDirectoryResult')

const PasswordSchema = z
  .string()
  .regex(
    /(?=^.{8,64}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])|(?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]))^.*/,
  )
  .openapi('Password')

const CreateDirectoryRequestSchema = z
  .object({
    Name: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified name for the directory, such as <code>corp.example.com</code>.',
        }),
    ),
    ShortName: DirectoryShortNameSchema.and(
      z
        .any()
        .openapi({ description: 'The NetBIOS name of the directory, such as <code>CORP</code>.' }),
    ).exactOptional(),
    Password: PasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the directory administrator. The directory creation process creates a directory administrator account with the user name <code>Administrator</code> and this password.</p> <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p> <p>The regex pattern for this string is made up of the following conditions:</p> <ul> <li> <p>Length (?=^.{8,64}$) – Must be between 8 and 64 characters</p> </li> </ul> <p>AND any 3 of the following password complexity rules required by Active Directory:</p> <ul> <li> <p>Numbers and upper case and lowercase (?=.*\\d)(?=.*[A-Z])(?=.*[a-z])</p> </li> <li> <p>Numbers and special characters and lower case (?=.*\\d)(?=.*[^A-Za-z0-9\\s])(?=.*[a-z])</p> </li> <li> <p>Special characters and upper case and lower case (?=.*[^A-Za-z0-9\\s])(?=.*[A-Z])(?=.*[a-z])</p> </li> <li> <p>Numbers and upper case and special characters (?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\\s])</p> </li> </ul> <p>For additional information about how Active Directory passwords are enforced, see <a href="https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements">Password must meet complexity requirements</a> on the Microsoft website.</p>',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the directory.' }),
    ).exactOptional(),
    Size: DirectorySizeSchema.and(z.any().openapi({ description: 'The size of the directory.' })),
    VpcSettings: DirectoryVpcSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>DirectoryVpcSettings</a> object that contains additional information for the operation.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the Simple AD directory.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Password', 'Size'],
    title: 'CreateDirectoryRequest',
    description: 'Contains the inputs for the <a>CreateDirectory</a> operation. ',
  })
  .openapi('CreateDirectoryRequest')

const CreateLogSubscriptionResultSchema = z.object({}).openapi('CreateLogSubscriptionResult')

const LogGroupNameSchema = z
  .string()
  .regex(/[-._\/#A-Za-z0-9]+/)
  .min(1)
  .max(512)
  .openapi('LogGroupName')

const CreateLogSubscriptionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory to which you want to subscribe and receive real-time logs to your specified CloudWatch log group.',
        }),
    ),
    LogGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the CloudWatch log group where the real-time domain controller logs are forwarded.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'LogGroupName'], title: 'CreateLogSubscriptionRequest' })
  .openapi('CreateLogSubscriptionRequest')

const InsufficientPermissionsExceptionSchema = z.any().openapi('InsufficientPermissionsException')

const CreateMicrosoftADResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory that was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Result of a CreateMicrosoftAD request.', required: [] })
  .openapi('CreateMicrosoftADResult')

const CreateMicrosoftADRequestSchema = z
  .object({
    Name: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name for the Managed Microsoft AD directory, such as <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need to be publicly resolvable.',
        }),
    ),
    ShortName: DirectoryShortNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, <code>CORP</code> for the directory DNS <code>corp.example.com</code>. ",
        }),
    ).exactOptional(),
    Password: PasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the default administrative user named <code>Admin</code>.</p> <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>',
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description for the directory. This label will appear on the Amazon Web Services console <code>Directory Details</code> page after the directory is created.',
        }),
    ).exactOptional(),
    VpcSettings: DirectoryVpcSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.',
        }),
    ),
    Edition: DirectoryEditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Managed Microsoft AD is available in two editions: <code>Standard</code> and <code>Enterprise</code>. <code>Enterprise</code> is the default.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to be assigned to the Managed Microsoft AD directory.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Password', 'VpcSettings'],
    title: 'CreateMicrosoftADRequest',
    description: 'Creates an Managed Microsoft AD directory.',
  })
  .openapi('CreateMicrosoftADRequest')

const SnapshotIdSchema = z
  .string()
  .regex(/^s-[0-9a-f]{10}$/)
  .openapi('SnapshotId')

const CreateSnapshotResultSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The identifier of the snapshot that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>CreateSnapshot</a> operation.',
    required: [],
  })
  .openapi('CreateSnapshotResult')

const SnapshotNameSchema = z
  .string()
  .regex(/^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?.\/!\s-]*$/)
  .min(0)
  .max(128)
  .openapi('SnapshotName')

const CreateSnapshotRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory of which to take a snapshot.' }),
    ),
    Name: SnapshotNameSchema.and(
      z.any().openapi({ description: 'The descriptive name to apply to the snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'CreateSnapshotRequest',
    description: 'Contains the inputs for the <a>CreateSnapshot</a> operation.',
  })
  .openapi('CreateSnapshotRequest')

const SnapshotLimitExceededExceptionSchema = z.any().openapi('SnapshotLimitExceededException')

const TrustIdSchema = z
  .string()
  .regex(/^t-[0-9a-f]{10}$/)
  .openapi('TrustId')

const CreateTrustResultSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the trust relationship that was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a CreateTrust request.', required: [] })
  .openapi('CreateTrustResult')

const TrustPasswordSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ pattern: '^(\\p{LD}|\\p{Punct}| )+$' })
  .openapi('TrustPassword')

const TrustDirectionSchema = z
  .enum(['One-Way: Outgoing', 'One-Way: Incoming', 'Two-Way'])
  .openapi('TrustDirection')

const TrustTypeSchema = z.enum(['Forest', 'External']).openapi('TrustType')

const SelectiveAuthSchema = z.enum(['Enabled', 'Disabled']).openapi('SelectiveAuth')

const CreateTrustRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID of the Managed Microsoft AD directory for which to establish the trust relationship.',
        }),
    ),
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.',
        }),
    ),
    TrustPassword: TrustPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The trust password. The must be the same password that was used when creating the trust relationship on the external domain.',
        }),
    ),
    TrustDirection: TrustDirectionSchema.and(
      z.any().openapi({ description: 'The direction of the trust relationship.' }),
    ),
    TrustType: TrustTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The trust relationship type. <code>Forest</code> is the default.',
        }),
    ).exactOptional(),
    ConditionalForwarderIpAddrs: DnsIpAddrsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP addresses of the remote DNS server associated with RemoteDomainName.',
        }),
    ).exactOptional(),
    SelectiveAuth: SelectiveAuthSchema.and(
      z
        .any()
        .openapi({
          description: 'Optional parameter to enable selective authentication for the trust.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId', 'RemoteDomainName', 'TrustPassword', 'TrustDirection'],
    title: 'CreateTrustRequest',
    description:
      '<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>',
  })
  .openapi('CreateTrustRequest')

const DeleteConditionalForwarderResultSchema = z
  .object({})
  .openapi({ description: 'The result of a DeleteConditionalForwarder request.' })
  .openapi('DeleteConditionalForwarderResult')

const DeleteConditionalForwarderRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory ID for which you are deleting the conditional forwarder.',
        }),
    ),
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name (FQDN) of the remote domain with which you are deleting the conditional forwarder.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'RemoteDomainName'],
    title: 'DeleteConditionalForwarderRequest',
    description: 'Deletes a conditional forwarder.',
  })
  .openapi('DeleteConditionalForwarderRequest')

const DeleteDirectoryResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The directory identifier.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>DeleteDirectory</a> operation.',
    required: [],
  })
  .openapi('DeleteDirectoryResult')

const DeleteDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory to delete.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'DeleteDirectoryRequest',
    description: 'Contains the inputs for the <a>DeleteDirectory</a> operation.',
  })
  .openapi('DeleteDirectoryRequest')

const DeleteLogSubscriptionResultSchema = z.object({}).openapi('DeleteLogSubscriptionResult')

const DeleteLogSubscriptionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the directory whose log subscription you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId'], title: 'DeleteLogSubscriptionRequest' })
  .openapi('DeleteLogSubscriptionRequest')

const DeleteSnapshotResultSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory snapshot that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>DeleteSnapshot</a> operation.',
    required: [],
  })
  .openapi('DeleteSnapshotResult')

const DeleteSnapshotRequestSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory snapshot to be deleted.' }),
    ),
  })
  .openapi({
    required: ['SnapshotId'],
    title: 'DeleteSnapshotRequest',
    description: 'Contains the inputs for the <a>DeleteSnapshot</a> operation.',
  })
  .openapi('DeleteSnapshotRequest')

const DeleteTrustResultSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'The Trust ID of the trust relationship that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a DeleteTrust request.', required: [] })
  .openapi('DeleteTrustResult')

const DeleteAssociatedConditionalForwarderSchema = z
  .boolean()
  .openapi('DeleteAssociatedConditionalForwarder')

const DeleteTrustRequestSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'The Trust ID of the trust relationship to be deleted.' }),
    ),
    DeleteAssociatedConditionalForwarder: DeleteAssociatedConditionalForwarderSchema.and(
      z
        .any()
        .openapi({
          description: 'Delete a conditional forwarder as part of a DeleteTrustRequest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TrustId'],
    title: 'DeleteTrustRequest',
    description:
      'Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.',
  })
  .openapi('DeleteTrustRequest')

const DeregisterCertificateResultSchema = z.object({}).openapi('DeregisterCertificateResult')

const CertificateIdSchema = z
  .string()
  .regex(/^c-[0-9a-f]{10}$/)
  .openapi('CertificateId')

const DeregisterCertificateRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    CertificateId: CertificateIdSchema.and(
      z.any().openapi({ description: 'The identifier of the certificate.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'CertificateId'], title: 'DeregisterCertificateRequest' })
  .openapi('DeregisterCertificateRequest')

const CertificateDoesNotExistExceptionSchema = z.any().openapi('CertificateDoesNotExistException')

const CertificateInUseExceptionSchema = z.any().openapi('CertificateInUseException')

const DeregisterEventTopicResultSchema = z
  .object({})
  .openapi({ description: 'The result of a DeregisterEventTopic request.' })
  .openapi('DeregisterEventTopicResult')

const TopicNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(256)
  .openapi('TopicName')

const DeregisterEventTopicRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID to remove as a publisher. This directory will no longer send messages to the specified Amazon SNS topic.',
        }),
    ),
    TopicName: TopicNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon SNS topic from which to remove the directory as a publisher.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'TopicName'],
    title: 'DeregisterEventTopicRequest',
    description:
      'Removes the specified directory as a publisher to the specified Amazon SNS topic.',
  })
  .openapi('DeregisterEventTopicRequest')

const CertificateStateSchema = z
  .enum([
    'Registering',
    'Registered',
    'RegisterFailed',
    'Deregistering',
    'Deregistered',
    'DeregisterFailed',
  ])
  .openapi('CertificateState')

const CertificateStateReasonSchema = z.string().openapi('CertificateStateReason')

const CertificateCNSchema = z.string().openapi('CertificateCN')

const CertificateRegisteredDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('CertificateRegisteredDateTime')

const CertificateExpiryDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('CertificateExpiryDateTime')

const CertificateTypeSchema = z.enum(['ClientCertAuth', 'ClientLDAPS']).openapi('CertificateType')

const OCSPUrlSchema = z
  .string()
  .regex(/^(https?|ftp|file|ldaps?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;()]*[-a-zA-Z0-9+&@#\/%=~_|()]/)
  .min(1)
  .max(1024)
  .openapi('OCSPUrl')

const ClientCertAuthSettingsSchema = z
  .object({
    OCSPUrl: OCSPUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. ',
    required: [],
  })
  .openapi('ClientCertAuthSettings')

const CertificateSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z.any().openapi({ description: 'The identifier of the certificate.' }),
    ).exactOptional(),
    State: CertificateStateSchema.and(
      z.any().openapi({ description: 'The state of the certificate.' }),
    ).exactOptional(),
    StateReason: CertificateStateReasonSchema.and(
      z.any().openapi({ description: 'Describes a state change for the certificate.' }),
    ).exactOptional(),
    CommonName: CertificateCNSchema.and(
      z.any().openapi({ description: 'The common name for the certificate.' }),
    ).exactOptional(),
    RegisteredDateTime: CertificateRegisteredDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the certificate was registered.' }),
    ).exactOptional(),
    ExpiryDateTime: CertificateExpiryDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the certificate will expire.' }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.',
        }),
    ).exactOptional(),
    ClientCertAuthSettings: ClientCertAuthSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the certificate.', required: [] })
  .openapi('Certificate')

const DescribeCertificateResultSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the certificate, including registered date time, certificate state, the reason for the state, expiration date time, and certificate common name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCertificateResult')

const DescribeCertificateRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    CertificateId: CertificateIdSchema.and(
      z.any().openapi({ description: 'The identifier of the certificate.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'CertificateId'], title: 'DescribeCertificateRequest' })
  .openapi('DescribeCertificateRequest')

const ClientAuthenticationTypeSchema = z
  .enum(['SmartCard', 'SmartCardOrPassword'])
  .openapi('ClientAuthenticationType')

const ClientAuthenticationStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('ClientAuthenticationStatus')

const ClientAuthenticationSettingInfoSchema = z
  .object({
    Type: ClientAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of client authentication for the specified directory. If no type is specified, a list of all client authentication types that are supported for the directory is retrieved. ',
        }),
    ).exactOptional(),
    Status: ClientAuthenticationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the client authentication type is enabled or disabled for the specified directory.',
        }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the status of the client authentication type was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a client authentication method for a directory.',
    required: [],
  })
  .openapi('ClientAuthenticationSettingInfo')

const ClientAuthenticationSettingsInfoSchema = z
  .array(ClientAuthenticationSettingInfoSchema)
  .openapi('ClientAuthenticationSettingsInfo')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeClientAuthenticationSettingsResultSchema = z
  .object({
    ClientAuthenticationSettingsInfo: ClientAuthenticationSettingsInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the type of client authentication for the specified directory. The following information is retrieved: The date and time when the status of the client authentication type was last updated, whether the client authentication type is enabled or disabled, and the type of client authentication.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next token used to retrieve the client authentication settings if the number of setting types exceeds page limit and there is another page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClientAuthenticationSettingsResult')

const PageLimitSchema = z.int().min(1).max(50).openapi('PageLimit')

const DescribeClientAuthenticationSettingsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory for which to retrieve information.',
        }),
    ),
    Type: ClientAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of client authentication for which to retrieve information. If no type is specified, a list of all client authentication types that are supported for the specified directory is retrieved.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <i>DescribeClientAuthenticationSettingsResult.NextToken</i> value from a previous call to <a>DescribeClientAuthenticationSettings</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'DescribeClientAuthenticationSettingsRequest' })
  .openapi('DescribeClientAuthenticationSettingsRequest')

const ReplicationScopeSchema = z.literal('Domain').openapi('ReplicationScope')

const ConditionalForwarderSchema = z
  .object({
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.',
        }),
    ).exactOptional(),
    DnsIpAddrs: DnsIpAddrsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.',
        }),
    ).exactOptional(),
    ReplicationScope: ReplicationScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replication scope of the conditional forwarder. The only allowed value is <code>Domain</code>, which will replicate the conditional forwarder to all of the domain controllers for your Amazon Web Services directory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.',
    required: [],
  })
  .openapi('ConditionalForwarder')

const ConditionalForwardersSchema = z
  .array(ConditionalForwarderSchema)
  .openapi('ConditionalForwarders')

const DescribeConditionalForwardersResultSchema = z
  .object({
    ConditionalForwarders: ConditionalForwardersSchema.and(
      z
        .any()
        .openapi({ description: 'The list of conditional forwarders that have been created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a DescribeConditionalForwarder request.', required: [] })
  .openapi('DescribeConditionalForwardersResult')

const RemoteDomainNamesSchema = z.array(RemoteDomainNameSchema).openapi('RemoteDomainNames')

const DescribeConditionalForwardersRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory ID for which to get the list of associated conditional forwarders.',
        }),
    ),
    RemoteDomainNames: RemoteDomainNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain names (FQDN) of the remote domains for which to get the list of associated conditional forwarders. If this member is null, all conditional forwarders are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'DescribeConditionalForwardersRequest',
    description: 'Describes a conditional forwarder.',
  })
  .openapi('DescribeConditionalForwardersRequest')

const DirectoryDescriptionSchema: z.ZodType<DirectoryDescriptionType> = z
  .lazy(() =>
    z
      .object({
        DirectoryId: DirectoryIdSchema.and(
          z.any().openapi({ description: 'The directory identifier.' }),
        ).exactOptional(),
        Name: DirectoryNameSchema.and(
          z.any().openapi({ description: 'The fully qualified name of the directory.' }),
        ).exactOptional(),
        ShortName: DirectoryShortNameSchema.and(
          z.any().openapi({ description: 'The short name of the directory.' }),
        ).exactOptional(),
        Size: DirectorySizeSchema.and(
          z.any().openapi({ description: 'The directory size.' }),
        ).exactOptional(),
        Edition: DirectoryEditionSchema.and(
          z.any().openapi({ description: 'The edition associated with this directory.' }),
        ).exactOptional(),
        Alias: AliasNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The alias for the directory. If no alias has been created for the directory, the alias is the directory identifier, such as <code>d-XXXXXXXXXX</code>.',
            }),
        ).exactOptional(),
        AccessUrl: AccessUrlSchema.and(
          z
            .any()
            .openapi({
              description:
                'The access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>. If no alias has been created for the directory, <code>&lt;alias&gt;</code> is the directory identifier, such as <code>d-XXXXXXXXXX</code>.',
            }),
        ).exactOptional(),
        Description: DescriptionSchema.and(
          z.any().openapi({ description: 'The description for the directory.' }),
        ).exactOptional(),
        DnsIpAddrs: DnsIpAddrsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers in your self-managed directory to which the AD Connector is connected.',
            }),
        ).exactOptional(),
        Stage: DirectoryStageSchema.and(
          z.any().openapi({ description: 'The current stage of the directory.' }),
        ).exactOptional(),
        ShareStatus: ShareStatusSchema.and(
          z
            .any()
            .openapi({
              description: 'Current directory status of the shared Managed Microsoft AD directory.',
            }),
        ).exactOptional(),
        ShareMethod: ShareMethodSchema.and(
          z
            .any()
            .openapi({
              description:
                'The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by sending a shared directory request (<code>HANDSHAKE</code>).',
            }),
        ).exactOptional(),
        ShareNotes: NotesSchema.and(
          z
            .any()
            .openapi({
              description:
                'A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.',
            }),
        ).exactOptional(),
        LaunchTime: LaunchTimeSchema.and(
          z.any().openapi({ description: 'Specifies when the directory was created.' }),
        ).exactOptional(),
        StageLastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
          z.any().openapi({ description: 'The date and time that the stage was last updated.' }),
        ).exactOptional(),
        Type: DirectoryTypeSchema.and(
          z.any().openapi({ description: 'The directory size.' }),
        ).exactOptional(),
        VpcSettings: DirectoryVpcSettingsDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'A <a>DirectoryVpcSettingsDescription</a> object that contains additional information about a directory. This member is only present if the directory is a Simple AD or Managed Microsoft AD directory.',
            }),
        ).exactOptional(),
        ConnectSettings: DirectoryConnectSettingsDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'A <a>DirectoryConnectSettingsDescription</a> object that contains additional information about an AD Connector directory. This member is only present if the directory is an AD Connector directory.',
            }),
        ).exactOptional(),
        RadiusSettings: RadiusSettingsSchema.and(
          z
            .any()
            .openapi({
              description:
                'A <a>RadiusSettings</a> object that contains information about the RADIUS server configured for this directory.',
            }),
        ).exactOptional(),
        RadiusStatus: RadiusStatusSchema.and(
          z.any().openapi({ description: 'The status of the RADIUS MFA server connection.' }),
        ).exactOptional(),
        StageReason: StageReasonSchema.and(
          z.any().openapi({ description: 'Additional information about the directory stage.' }),
        ).exactOptional(),
        SsoEnabled: SsoEnabledSchema.and(
          z
            .any()
            .openapi({
              description:
                'Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.',
            }),
        ).exactOptional(),
        DesiredNumberOfDomainControllers: DesiredNumberOfDomainControllersSchema.and(
          z
            .any()
            .openapi({
              description:
                'The desired number of domain controllers in the directory if the directory is Microsoft AD.',
            }),
        ).exactOptional(),
        OwnerDirectoryDescription: OwnerDirectoryDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the Managed Microsoft AD directory in the directory owner account.',
            }),
        ).exactOptional(),
        RegionsInfo: RegionsInfoSchema.and(
          z.any().openapi({ description: 'Lists the Regions where the directory has replicated.' }),
        ).exactOptional(),
        OsVersion: OSVersionSchema.and(
          z.any().openapi({ description: 'The operating system (OS) version of the directory.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Contains information about an Directory Service directory.',
        required: [],
      }),
  )
  .openapi('DirectoryDescription')

const DirectoryDescriptionsSchema = z
  .array(DirectoryDescriptionSchema)
  .openapi({ description: 'A list of directory descriptions.' })
  .openapi('DirectoryDescriptions')

const DescribeDirectoriesResultSchema = z
  .object({
    DirectoryDescriptions: DirectoryDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of <a>DirectoryDescription</a> objects that were retrieved.</p> <p>It is possible that this list contains less than the number of items specified in the <code>Limit</code> member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeDirectories</a> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>DescribeDirectories</a> operation.',
    required: [],
  })
  .openapi('DescribeDirectoriesResult')

const DirectoryIdsSchema = z
  .array(DirectoryIdSchema)
  .openapi({ description: 'A list of directory identifiers.' })
  .openapi('DirectoryIds')

const LimitSchema = z.int().min(0).openapi('Limit')

const DescribeDirectoriesRequestSchema = z
  .object({
    DirectoryIds: DirectoryIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of identifiers of the directories for which to obtain the information. If this member is null, all directories that belong to the current account are returned.</p> <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDirectoriesRequest',
    description: 'Contains the inputs for the <a>DescribeDirectories</a> operation.',
    required: [],
  })
  .openapi('DescribeDirectoriesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const DomainControllerIdSchema = z
  .string()
  .regex(/^dc-[0-9a-f]{10}$/)
  .openapi('DomainControllerId')

const DomainControllerStatusSchema = z
  .enum(['Creating', 'Active', 'Impaired', 'Restoring', 'Deleting', 'Deleted', 'Failed'])
  .openapi('DomainControllerStatus')

const DomainControllerStatusReasonSchema = z.string().openapi('DomainControllerStatusReason')

const DomainControllerSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the directory where the domain controller resides.',
        }),
    ).exactOptional(),
    DomainControllerId: DomainControllerIdSchema.and(
      z.any().openapi({ description: 'Identifies a specific domain controller in the directory.' }),
    ).exactOptional(),
    DnsIpAddr: IpAddrSchema.and(
      z.any().openapi({ description: 'The IP address of the domain controller.' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the VPC that contains the domain controller.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the subnet in the VPC that contains the domain controller.',
        }),
    ).exactOptional(),
    AvailabilityZone: AvailabilityZoneSchema.and(
      z
        .any()
        .openapi({ description: 'The Availability Zone where the domain controller is located.' }),
    ).exactOptional(),
    Status: DomainControllerStatusSchema.and(
      z.any().openapi({ description: 'The status of the domain controller.' }),
    ).exactOptional(),
    StatusReason: DomainControllerStatusReasonSchema.and(
      z.any().openapi({ description: 'A description of the domain controller state.' }),
    ).exactOptional(),
    LaunchTime: LaunchTimeSchema.and(
      z.any().openapi({ description: 'Specifies when the domain controller was created.' }),
    ).exactOptional(),
    StatusLastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the status was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the domain controllers for a specified directory.',
    required: [],
  })
  .openapi('DomainController')

const DomainControllersSchema = z.array(DomainControllerSchema).openapi('DomainControllers')

const DescribeDomainControllersResultSchema = z
  .object({
    DomainControllers: DomainControllersSchema.and(
      z
        .any()
        .openapi({
          description: 'List of the <a>DomainController</a> objects that were retrieved.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDomainControllersResult')

const DomainControllerIdsSchema = z.array(DomainControllerIdSchema).openapi('DomainControllerIds')

const DescribeDomainControllersRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory for which to retrieve the domain controller information.',
        }),
    ),
    DomainControllerIds: DomainControllerIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of identifiers for the domain controllers whose information will be provided.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <i>DescribeDomainControllers.NextToken</i> value from a previous call to <a>DescribeDomainControllers</a>. Pass null if this is the first call. ',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'DescribeDomainControllersRequest' })
  .openapi('DescribeDomainControllersRequest')

const TopicArnSchema = z.string().openapi('TopicArn')

const TopicStatusSchema = z
  .enum(['Registered', 'Topic not found', 'Failed', 'Deleted'])
  .openapi('TopicStatus')

const EventTopicSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID of an Directory Service directory that will publish status messages to an Amazon SNS topic.',
        }),
    ).exactOptional(),
    TopicName: TopicNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Amazon SNS topic the receives status messages from the directory.',
        }),
    ).exactOptional(),
    TopicArn: TopicArnSchema.and(
      z.any().openapi({ description: 'The Amazon SNS topic ARN (Amazon Resource Name).' }),
    ).exactOptional(),
    CreatedDateTime: CreatedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time of when you associated your directory with the Amazon SNS topic.',
        }),
    ).exactOptional(),
    Status: TopicStatusSchema.and(
      z.any().openapi({ description: 'The topic registration status.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about Amazon SNS topic and Directory Service directory associations.',
    required: [],
  })
  .openapi('EventTopic')

const EventTopicsSchema = z.array(EventTopicSchema).openapi('EventTopics')

const DescribeEventTopicsResultSchema = z
  .object({
    EventTopics: EventTopicsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon SNS topic names that receive status messages from the specified Directory ID.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a DescribeEventTopic request.', required: [] })
  .openapi('DescribeEventTopicsResult')

const TopicNamesSchema = z.array(TopicNameSchema).openapi('TopicNames')

const DescribeEventTopicsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID for which to get the list of associated Amazon SNS topics. If this member is null, associations for all Directory IDs are returned.',
        }),
    ).exactOptional(),
    TopicNames: TopicNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Amazon SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned.</p> <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventTopicsRequest',
    description: 'Describes event topics.',
    required: [],
  })
  .openapi('DescribeEventTopicsRequest')

const LDAPSStatusSchema = z
  .enum(['Enabling', 'Enabled', 'EnableFailed', 'Disabled'])
  .openapi('LDAPSStatus')

const LDAPSStatusReasonSchema = z.string().openapi('LDAPSStatusReason')

const LDAPSSettingInfoSchema = z
  .object({
    LDAPSStatus: LDAPSStatusSchema.and(
      z.any().openapi({ description: 'The state of the LDAPS settings.' }),
    ).exactOptional(),
    LDAPSStatusReason: LDAPSStatusReasonSchema.and(
      z.any().openapi({ description: 'Describes a state change for LDAPS.' }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the LDAPS settings were last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains general information about the LDAPS settings.', required: [] })
  .openapi('LDAPSSettingInfo')

const LDAPSSettingsInfoSchema = z.array(LDAPSSettingInfoSchema).openapi('LDAPSSettingsInfo')

const DescribeLDAPSSettingsResultSchema = z
  .object({
    LDAPSSettingsInfo: LDAPSSettingsInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about LDAP security for the specified directory, including status of enablement, state last updated date time, and the reason for the state.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next token used to retrieve the LDAPS settings if the number of setting types exceeds page limit and there is another page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLDAPSSettingsResult')

const LDAPSTypeSchema = z.literal('Client').openapi('LDAPSType')

const DescribeLDAPSSettingsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    Type: LDAPSTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of LDAP security to enable. Currently only the value <code>Client</code> is supported.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The type of next token used for pagination.' }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the number of items that should be displayed on one page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'DescribeLDAPSSettingsRequest' })
  .openapi('DescribeLDAPSSettingsRequest')

const RegionTypeSchema = z.enum(['Primary', 'Additional']).openapi('RegionType')

const StateLastUpdatedDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('StateLastUpdatedDateTime')

const RegionDescriptionSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ).exactOptional(),
    RegionName: RegionNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Region. For example, <code>us-east-1</code>.' }),
    ).exactOptional(),
    RegionType: RegionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Region is the primary Region or an additional Region.',
        }),
    ).exactOptional(),
    Status: DirectoryStageSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the replication process for the specified Region.',
        }),
    ).exactOptional(),
    VpcSettings: DirectoryVpcSettingsSchema.exactOptional(),
    DesiredNumberOfDomainControllers: DesiredNumberOfDomainControllersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired number of domain controllers in the specified Region for the specified directory.',
        }),
    ).exactOptional(),
    LaunchTime: LaunchTimeSchema.and(
      z.any().openapi({ description: 'Specifies when the Region replication began.' }),
    ).exactOptional(),
    StatusLastUpdatedDateTime: StateLastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the Region status was last updated.' }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the Region description was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The replicated Region information for a directory.', required: [] })
  .openapi('RegionDescription')

const RegionsDescriptionSchema = z.array(RegionDescriptionSchema).openapi('RegionsDescription')

const DescribeRegionsResultSchema = z
  .object({
    RegionsDescription: RegionsDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of Region information related to the directory for each replicated Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeRegions</a> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRegionsResult')

const DescribeRegionsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    RegionName: RegionNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Region. For example, <code>us-east-1</code>.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DescribeRegionsResult.NextToken</code> value from a previous call to <a>DescribeRegions</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'DescribeRegionsRequest' })
  .openapi('DescribeRegionsRequest')

const DirectoryConfigurationSettingTypeSchema = z
  .string()
  .openapi('DirectoryConfigurationSettingType')

const DirectoryConfigurationSettingNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-\/. _]*$/)
  .min(1)
  .max(255)
  .openapi('DirectoryConfigurationSettingName')

const DirectoryConfigurationSettingAllowedValuesSchema = z
  .string()
  .openapi('DirectoryConfigurationSettingAllowedValues')

const DirectoryConfigurationSettingValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]*$/)
  .min(1)
  .max(255)
  .openapi('DirectoryConfigurationSettingValue')

const DirectoryConfigurationStatusSchema = z
  .enum(['Requested', 'Updating', 'Updated', 'Failed', 'Default'])
  .openapi('DirectoryConfigurationStatus')

const DirectoryConfigurationSettingRequestDetailedStatusSchema = z
  .record(z.string(), DirectoryConfigurationStatusSchema)
  .openapi('DirectoryConfigurationSettingRequestDetailedStatus')

const DirectoryConfigurationSettingRequestStatusMessageSchema = z
  .string()
  .openapi('DirectoryConfigurationSettingRequestStatusMessage')

const DirectoryConfigurationSettingLastUpdatedDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('DirectoryConfigurationSettingLastUpdatedDateTime')

const DirectoryConfigurationSettingLastRequestedDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('DirectoryConfigurationSettingLastRequestedDateTime')

const SettingEntrySchema = z
  .object({
    Type: DirectoryConfigurationSettingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of directory setting. For example, <code>Protocol</code> or <code>Cipher</code>.',
        }),
    ).exactOptional(),
    Name: DirectoryConfigurationSettingNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the directory setting. For example:</p> <p> <code>TLS_1_0</code> </p>',
        }),
    ).exactOptional(),
    AllowedValues: DirectoryConfigurationSettingAllowedValuesSchema.and(
      z.any().openapi({ description: 'The valid range of values for the directory setting.' }),
    ).exactOptional(),
    AppliedValue: DirectoryConfigurationSettingValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the directory setting that is applied to the directory.',
        }),
    ).exactOptional(),
    RequestedValue: DirectoryConfigurationSettingValueSchema.and(
      z
        .any()
        .openapi({ description: 'The value that was last requested for the directory setting.' }),
    ).exactOptional(),
    RequestStatus: DirectoryConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The overall status of the request to update the directory setting request. If the directory setting is deployed in more than one region, and the request fails in any region, the overall status is <code>Failed</code>.',
        }),
    ).exactOptional(),
    RequestDetailedStatus: DirectoryConfigurationSettingRequestDetailedStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the status of the request to update the directory setting. If the directory setting is deployed in more than one region, status is returned for the request in each region where the setting is deployed.',
        }),
    ).exactOptional(),
    RequestStatusMessage: DirectoryConfigurationSettingRequestStatusMessageSchema.and(
      z.any().openapi({ description: 'The last status message for the directory status request.' }),
    ).exactOptional(),
    LastUpdatedDateTime: DirectoryConfigurationSettingLastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the directory setting was last updated.' }),
    ).exactOptional(),
    LastRequestedDateTime: DirectoryConfigurationSettingLastRequestedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the request to update a directory setting was last submitted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the specified configurable setting for a directory.',
    required: [],
  })
  .openapi('SettingEntry')

const SettingEntriesSchema = z.array(SettingEntrySchema).openapi('SettingEntries')

const DescribeSettingsResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ).exactOptional(),
    SettingEntries: SettingEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of <a>SettingEntry</a> objects that were retrieved.</p> <p>It is possible that this list contains less than the number of items specified in the <code>Limit</code> member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>DescribeSettings</code> to retrieve the next set of items. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSettingsResult')

const DescribeSettingsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory for which to retrieve information.',
        }),
    ),
    Status: DirectoryConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the directory settings for which to retrieve information.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DescribeSettingsResult.NextToken</code> value from a previous call to <a>DescribeSettings</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'DescribeSettingsRequest' })
  .openapi('DescribeSettingsRequest')

const SharedDirectoriesSchema = z.array(SharedDirectorySchema).openapi('SharedDirectories')

const DescribeSharedDirectoriesResultSchema = z
  .object({
    SharedDirectories: SharedDirectoriesSchema.and(
      z.any().openapi({ description: 'A list of all shared directories in your account.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSharedDirectoriesResult')

const DescribeSharedDirectoriesRequestSchema = z
  .object({
    OwnerDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the identifier of the directory in the directory owner account. ',
        }),
    ),
    SharedDirectoryIds: DirectoryIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of identifiers of all shared directories in your account. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeSharedDirectories</a>. Pass null if this is the first call. ',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of shared directories to return in the response object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OwnerDirectoryId'], title: 'DescribeSharedDirectoriesRequest' })
  .openapi('DescribeSharedDirectoriesRequest')

const SnapshotTypeSchema = z.enum(['Auto', 'Manual']).openapi('SnapshotType')

const SnapshotStatusSchema = z.enum(['Creating', 'Completed', 'Failed']).openapi('SnapshotStatus')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const SnapshotSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The directory identifier.' }),
    ).exactOptional(),
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The snapshot identifier.' }),
    ).exactOptional(),
    Type: SnapshotTypeSchema.and(
      z.any().openapi({ description: 'The snapshot type.' }),
    ).exactOptional(),
    Name: SnapshotNameSchema.and(
      z.any().openapi({ description: 'The descriptive name of the snapshot.' }),
    ).exactOptional(),
    Status: SnapshotStatusSchema.and(
      z.any().openapi({ description: 'The snapshot status.' }),
    ).exactOptional(),
    StartTime: StartTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the snapshot was taken.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a directory snapshot.', required: [] })
  .openapi('Snapshot')

const SnapshotsSchema = z
  .array(SnapshotSchema)
  .openapi({ description: 'A list of descriptions of directory snapshots.' })
  .openapi('Snapshots')

const DescribeSnapshotsResultSchema = z
  .object({
    Snapshots: SnapshotsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of <a>Snapshot</a> objects that were retrieved.</p> <p>It is possible that this list contains less than the number of items specified in the <i>Limit</i> member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value in the <i>NextToken</i> member of a subsequent call to <a>DescribeSnapshots</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>DescribeSnapshots</a> operation.',
    required: [],
  })
  .openapi('DescribeSnapshotsResult')

const SnapshotIdsSchema = z
  .array(SnapshotIdSchema)
  .openapi({ description: 'A list of directory snapshot identifiers.' })
  .openapi('SnapshotIds')

const DescribeSnapshotsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory for which to retrieve snapshot information.',
        }),
    ).exactOptional(),
    SnapshotIds: SnapshotIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of identifiers of the snapshots to obtain the information for. If this member is null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i> members.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to <a>DescribeSnapshots</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeSnapshotsRequest',
    description: 'Contains the inputs for the <a>DescribeSnapshots</a> operation.',
    required: [],
  })
  .openapi('DescribeSnapshotsRequest')

const TrustStateSchema = z
  .enum([
    'Creating',
    'Created',
    'Verifying',
    'VerifyFailed',
    'Verified',
    'Updating',
    'UpdateFailed',
    'Updated',
    'Deleting',
    'Deleted',
    'Failed',
  ])
  .openapi('TrustState')

const TrustStateReasonSchema = z.string().openapi('TrustStateReason')

const TrustSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID of the Amazon Web Services directory involved in the trust relationship.',
        }),
    ).exactOptional(),
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the trust relationship.' }),
    ).exactOptional(),
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.',
        }),
    ).exactOptional(),
    TrustType: TrustTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The trust relationship type. <code>Forest</code> is the default.',
        }),
    ).exactOptional(),
    TrustDirection: TrustDirectionSchema.and(
      z.any().openapi({ description: 'The trust relationship direction.' }),
    ).exactOptional(),
    TrustState: TrustStateSchema.and(
      z.any().openapi({ description: 'The trust relationship state.' }),
    ).exactOptional(),
    CreatedDateTime: CreatedDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the trust relationship was created.' }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the trust relationship was last updated.',
        }),
    ).exactOptional(),
    StateLastUpdatedDateTime: StateLastUpdatedDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the TrustState was last updated.' }),
    ).exactOptional(),
    TrustStateReason: TrustStateReasonSchema.and(
      z.any().openapi({ description: 'The reason for the TrustState.' }),
    ).exactOptional(),
    SelectiveAuth: SelectiveAuthSchema.and(
      z.any().openapi({ description: 'Current state of selective authentication for the trust.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a trust relationship between an Managed Microsoft AD directory and an external domain.',
    required: [],
  })
  .openapi('Trust')

const TrustsSchema = z.array(TrustSchema).openapi('Trusts')

const DescribeTrustsResultSchema = z
  .object({
    Trusts: TrustsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of Trust objects that were retrieved.</p> <p>It is possible that this list contains less than the number of items specified in the <i>Limit</i> member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <i>NextToken</i> parameter in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a DescribeTrust request.', required: [] })
  .openapi('DescribeTrustsResult')

const TrustIdsSchema = z.array(TrustIdSchema).openapi('TrustIds')

const DescribeTrustsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID of the Amazon Web Services directory that is a part of the requested trust relationship.',
        }),
    ).exactOptional(),
    TrustIds: TrustIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of identifiers of the trust relationships for which to obtain the information. If this member is null, all trust relationships that belong to the current account are returned.</p> <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <i>DescribeTrustsResult.NextToken</i> value from a previous call to <a>DescribeTrusts</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of objects to return.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeTrustsRequest',
    description:
      'Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.',
    required: [],
  })
  .openapi('DescribeTrustsRequest')

const UpdateStatusSchema = z.enum(['Updated', 'Updating', 'UpdateFailed']).openapi('UpdateStatus')

const UpdateStatusReasonSchema = z.string().openapi('UpdateStatusReason')

const InitiatedBySchema = z.string().openapi('InitiatedBy')

const OSUpdateSettingsSchema = z
  .object({
    OSVersion: OSVersionSchema.and(
      z.any().openapi({ description: ' OS version that the directory needs to be updated to. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' OS version that the directory needs to be updated to. ', required: [] })
  .openapi('OSUpdateSettings')

const UpdateValueSchema = z
  .object({
    OSUpdateSettings: OSUpdateSettingsSchema.and(
      z.any().openapi({ description: ' The OS update related settings. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The value for a given type of <code>UpdateSettings</code>. ',
    required: [],
  })
  .openapi('UpdateValue')

const StartDateTimeSchema = z.iso.datetime({ offset: true }).openapi('StartDateTime')

const UpdateInfoEntrySchema = z
  .object({
    Region: RegionNameSchema.and(
      z.any().openapi({ description: ' The name of the Region. ' }),
    ).exactOptional(),
    Status: UpdateStatusSchema.and(
      z.any().openapi({ description: ' The status of the update performed on the directory. ' }),
    ).exactOptional(),
    StatusReason: UpdateStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description: ' The reason for the current status of the update type activity. ',
        }),
    ).exactOptional(),
    InitiatedBy: InitiatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            ' This specifies if the update was initiated by the customer or by the service team. ',
        }),
    ).exactOptional(),
    NewValue: UpdateValueSchema.and(
      z.any().openapi({ description: ' The new value of the target setting. ' }),
    ).exactOptional(),
    PreviousValue: UpdateValueSchema.and(
      z.any().openapi({ description: ' The old value of the target setting. ' }),
    ).exactOptional(),
    StartTime: StartDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The start time of the <code>UpdateDirectorySetup</code> for the particular type. ',
        }),
    ).exactOptional(),
    LastUpdatedDateTime: LastUpdatedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The last updated date and time of a particular directory setting. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' An entry of update information related to a requested update type. ',
    required: [],
  })
  .openapi('UpdateInfoEntry')

const UpdateActivitiesSchema = z.array(UpdateInfoEntrySchema).openapi('UpdateActivities')

const DescribeUpdateDirectoryResultSchema = z
  .object({
    UpdateActivities: UpdateActivitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of update activities on a directory for the requested update type. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If not null, more results are available. Pass this value for the <code>NextToken</code> parameter. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUpdateDirectoryResult')

const UpdateTypeSchema = z.literal('OS').openapi('UpdateType')

const DescribeUpdateDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: ' The unique identifier of the directory. ' }),
    ),
    UpdateType: UpdateTypeSchema.and(
      z
        .any()
        .openapi({ description: ' The type of updates you want to describe for the directory. ' }),
    ),
    RegionName: RegionNameSchema.and(
      z.any().openapi({ description: ' The name of the Region. ' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The <code>DescribeUpdateDirectoryResult</code>. NextToken value from a previous call to <a>DescribeUpdateDirectory</a>. Pass null if this is the first call. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId', 'UpdateType'], title: 'DescribeUpdateDirectoryRequest' })
  .openapi('DescribeUpdateDirectoryRequest')

const DisableClientAuthenticationResultSchema = z
  .object({})
  .openapi('DisableClientAuthenticationResult')

const DisableClientAuthenticationRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory ' }),
    ),
    Type: ClientAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of client authentication to disable. Currently, only the parameter, <code>SmartCard</code> is supported.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'Type'], title: 'DisableClientAuthenticationRequest' })
  .openapi('DisableClientAuthenticationRequest')

const InvalidClientAuthStatusExceptionSchema = z.any().openapi('InvalidClientAuthStatusException')

const DisableLDAPSResultSchema = z.object({}).openapi('DisableLDAPSResult')

const DisableLDAPSRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    Type: LDAPSTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of LDAP security to enable. Currently only the value <code>Client</code> is supported.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'Type'], title: 'DisableLDAPSRequest' })
  .openapi('DisableLDAPSRequest')

const InvalidLDAPSStatusExceptionSchema = z.any().openapi('InvalidLDAPSStatusException')

const DisableRadiusResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>DisableRadius</a> operation.' })
  .openapi('DisableRadiusResult')

const DisableRadiusRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory for which to disable MFA.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'DisableRadiusRequest',
    description: 'Contains the inputs for the <a>DisableRadius</a> operation.',
  })
  .openapi('DisableRadiusRequest')

const DisableSsoResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>DisableSso</a> operation.' })
  .openapi('DisableSsoResult')

const DisableSsoRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory for which to disable single-sign on.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The username of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. This account must have privileges to remove a service principal name.</p> <p>If the AD Connector service account does not have privileges to remove a service principal name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i> parameters. These credentials are only used to disable single sign-on and are not stored by the service. The AD Connector service account is not changed.</p>',
        }),
    ).exactOptional(),
    Password: ConnectPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. For more information, see the <i>UserName</i> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'DisableSsoRequest',
    description: 'Contains the inputs for the <a>DisableSso</a> operation.',
  })
  .openapi('DisableSsoRequest')

const EnableClientAuthenticationResultSchema = z
  .object({})
  .openapi('EnableClientAuthenticationResult')

const EnableClientAuthenticationRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the specified directory. ' }),
    ),
    Type: ClientAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of client authentication to enable. Currently only the value <code>SmartCard</code> is supported. Smart card authentication in AD Connector requires that you enable Kerberos Constrained Delegation for the Service User to the LDAP service in your self-managed AD. ',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'Type'], title: 'EnableClientAuthenticationRequest' })
  .openapi('EnableClientAuthenticationRequest')

const NoAvailableCertificateExceptionSchema = z.any().openapi('NoAvailableCertificateException')

const EnableLDAPSResultSchema = z.object({}).openapi('EnableLDAPSResult')

const EnableLDAPSRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    Type: LDAPSTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of LDAP security to enable. Currently only the value <code>Client</code> is supported.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'Type'], title: 'EnableLDAPSRequest' })
  .openapi('EnableLDAPSRequest')

const EnableRadiusResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>EnableRadius</a> operation.' })
  .openapi('EnableRadiusResult')

const EnableRadiusRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory for which to enable MFA.' }),
    ),
    RadiusSettings: RadiusSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>RadiusSettings</a> object that contains information about the RADIUS server.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'RadiusSettings'],
    title: 'EnableRadiusRequest',
    description: 'Contains the inputs for the <a>EnableRadius</a> operation.',
  })
  .openapi('EnableRadiusRequest')

const EnableSsoResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>EnableSso</a> operation.' })
  .openapi('EnableSsoResult')

const EnableSsoRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory for which to enable single-sign on.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The username of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. This account must have privileges to add a service principal name.</p> <p>If the AD Connector service account does not have privileges to add a service principal name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i> parameters. These credentials are only used to enable single sign-on and are not stored by the service. The AD Connector service account is not changed.</p>',
        }),
    ).exactOptional(),
    Password: ConnectPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. For more information, see the <i>UserName</i> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'EnableSsoRequest',
    description: 'Contains the inputs for the <a>EnableSso</a> operation.',
  })
  .openapi('EnableSsoRequest')

const CloudOnlyDirectoriesLimitReachedSchema = z
  .boolean()
  .openapi('CloudOnlyDirectoriesLimitReached')

const ConnectedDirectoriesLimitReachedSchema = z
  .boolean()
  .openapi('ConnectedDirectoriesLimitReached')

const DirectoryLimitsSchema = z
  .object({
    CloudOnlyDirectoriesLimit: LimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of cloud directories allowed in the Region.' }),
    ).exactOptional(),
    CloudOnlyDirectoriesCurrentCount: LimitSchema.and(
      z.any().openapi({ description: 'The current number of cloud directories in the Region.' }),
    ).exactOptional(),
    CloudOnlyDirectoriesLimitReached: CloudOnlyDirectoriesLimitReachedSchema.and(
      z.any().openapi({ description: 'Indicates if the cloud directory limit has been reached.' }),
    ).exactOptional(),
    CloudOnlyMicrosoftADLimit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of Managed Microsoft AD directories allowed in the region.',
        }),
    ).exactOptional(),
    CloudOnlyMicrosoftADCurrentCount: LimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The current number of Managed Microsoft AD directories in the region.',
        }),
    ).exactOptional(),
    CloudOnlyMicrosoftADLimitReached: CloudOnlyDirectoriesLimitReachedSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates if the Managed Microsoft AD directory limit has been reached.',
        }),
    ).exactOptional(),
    ConnectedDirectoriesLimit: LimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of connected directories allowed in the Region.',
        }),
    ).exactOptional(),
    ConnectedDirectoriesCurrentCount: LimitSchema.and(
      z
        .any()
        .openapi({ description: 'The current number of connected directories in the Region.' }),
    ).exactOptional(),
    ConnectedDirectoriesLimitReached: ConnectedDirectoriesLimitReachedSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates if the connected directory limit has been reached.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains directory limit information for a Region.', required: [] })
  .openapi('DirectoryLimits')

const GetDirectoryLimitsResultSchema = z
  .object({
    DirectoryLimits: DirectoryLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>DirectoryLimits</a> object that contains the directory limits for the current Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>GetDirectoryLimits</a> operation.',
    required: [],
  })
  .openapi('GetDirectoryLimitsResult')

const GetDirectoryLimitsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDirectoryLimitsRequest',
    description: 'Contains the inputs for the <a>GetDirectoryLimits</a> operation.',
  })
  .openapi('GetDirectoryLimitsRequest')

const ManualSnapshotsLimitReachedSchema = z.boolean().openapi('ManualSnapshotsLimitReached')

const SnapshotLimitsSchema = z
  .object({
    ManualSnapshotsLimit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of manual snapshots allowed.' }),
    ).exactOptional(),
    ManualSnapshotsCurrentCount: LimitSchema.and(
      z.any().openapi({ description: 'The current number of manual snapshots of the directory.' }),
    ).exactOptional(),
    ManualSnapshotsLimitReached: ManualSnapshotsLimitReachedSchema.and(
      z.any().openapi({ description: 'Indicates if the manual snapshot limit has been reached.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains manual snapshot limit information for a directory.',
    required: [],
  })
  .openapi('SnapshotLimits')

const GetSnapshotLimitsResultSchema = z
  .object({
    SnapshotLimits: SnapshotLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified directory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the results of the <a>GetSnapshotLimits</a> operation.',
    required: [],
  })
  .openapi('GetSnapshotLimitsResult')

const GetSnapshotLimitsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the identifier of the directory to obtain the limits for.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId'],
    title: 'GetSnapshotLimitsRequest',
    description: 'Contains the inputs for the <a>GetSnapshotLimits</a> operation.',
  })
  .openapi('GetSnapshotLimitsRequest')

const CertificateInfoSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z.any().openapi({ description: 'The identifier of the certificate.' }),
    ).exactOptional(),
    CommonName: CertificateCNSchema.and(
      z.any().openapi({ description: 'The common name for the certificate.' }),
    ).exactOptional(),
    State: CertificateStateSchema.and(
      z.any().openapi({ description: 'The state of the certificate.' }),
    ).exactOptional(),
    ExpiryDateTime: CertificateExpiryDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time when the certificate will expire.' }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains general information about a certificate.', required: [] })
  .openapi('CertificateInfo')

const CertificatesInfoSchema = z.array(CertificateInfoSchema).openapi('CertificatesInfo')

const ListCertificatesResultSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether another page of certificates is available when the number of available certificates exceeds the page limit.',
        }),
    ).exactOptional(),
    CertificatesInfo: CertificatesInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of certificates with basic details including certificate ID, certificate common name, certificate state.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCertificatesResult')

const ListCertificatesRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token for requesting another page of certificates if the <code>NextToken</code> response element indicates that more certificates are available. Use the value of the returned <code>NextToken</code> element in your request until the token comes back as <code>null</code>. Pass <code>null</code> if this is the first call.',
        }),
    ).exactOptional(),
    Limit: PageLimitSchema.and(
      z.any().openapi({ description: 'The number of items that should show up on one page' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'ListCertificatesRequest' })
  .openapi('ListCertificatesRequest')

const IpRouteStatusMsgSchema = z
  .enum(['Adding', 'Added', 'Removing', 'Removed', 'AddFailed', 'RemoveFailed'])
  .openapi('IpRouteStatusMsg')

const AddedDateTimeSchema = z.iso.datetime({ offset: true }).openapi('AddedDateTime')

const IpRouteStatusReasonSchema = z.string().openapi('IpRouteStatusReason')

const IpRouteInfoSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier (ID) of the directory associated with the IP addresses.',
        }),
    ).exactOptional(),
    CidrIp: CidrIpSchema.and(
      z.any().openapi({ description: 'IP address block in the <a>IpRoute</a>.' }),
    ).exactOptional(),
    IpRouteStatusMsg: IpRouteStatusMsgSchema.and(
      z.any().openapi({ description: 'The status of the IP address block.' }),
    ).exactOptional(),
    AddedDateTime: AddedDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the address block was added to the directory.',
        }),
    ).exactOptional(),
    IpRouteStatusReason: IpRouteStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason for the IpRouteStatusMsg.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Description of the <a>IpRouteInfo</a>.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about one or more IP address blocks.', required: [] })
  .openapi('IpRouteInfo')

const IpRoutesInfoSchema = z.array(IpRouteInfoSchema).openapi('IpRoutesInfo')

const ListIpRoutesResultSchema = z
  .object({
    IpRoutesInfo: IpRoutesInfoSchema.and(
      z.any().openapi({ description: 'A list of <a>IpRoute</a>s.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <i>NextToken</i> parameter in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIpRoutesResult')

const ListIpRoutesRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier (ID) of the directory for which you want to retrieve the IP addresses.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <i>ListIpRoutes.NextToken</i> value from a previous call to <a>ListIpRoutes</a>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'ListIpRoutesRequest' })
  .openapi('ListIpRoutesRequest')

const SubscriptionCreatedDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('SubscriptionCreatedDateTime')

const LogSubscriptionSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier (ID) of the directory that you want to associate with the log subscription.',
        }),
    ).exactOptional(),
    LogGroupName: LogGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the log group.' }),
    ).exactOptional(),
    SubscriptionCreatedDateTime: SubscriptionCreatedDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the log subscription was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.',
    required: [],
  })
  .openapi('LogSubscription')

const LogSubscriptionsSchema = z.array(LogSubscriptionSchema).openapi('LogSubscriptions')

const ListLogSubscriptionsResultSchema = z
  .object({
    LogSubscriptions: LogSubscriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of active <a>LogSubscription</a> objects for calling the Amazon Web Services account.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next set of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLogSubscriptionsResult')

const ListLogSubscriptionsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <i>DirectoryID</i> is provided, lists only the log subscription associated with that directory. If no <i>DirectoryId</i> is provided, lists all log subscriptions associated with your Amazon Web Services account. If there are no log subscriptions for the Amazon Web Services account or the directory, an empty list will be returned.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next set of items to return.' }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items returned.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLogSubscriptionsRequest', required: [] })
  .openapi('ListLogSubscriptionsRequest')

const SchemaExtensionStatusSchema = z
  .enum([
    'Initializing',
    'CreatingSnapshot',
    'UpdatingSchema',
    'Replicating',
    'CancelInProgress',
    'RollbackInProgress',
    'Cancelled',
    'Failed',
    'Completed',
  ])
  .openapi('SchemaExtensionStatus')

const SchemaExtensionStatusReasonSchema = z.string().openapi('SchemaExtensionStatusReason')

const EndDateTimeSchema = z.iso.datetime({ offset: true }).openapi('EndDateTime')

const SchemaExtensionInfoSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory to which the schema extension is applied.',
        }),
    ).exactOptional(),
    SchemaExtensionId: SchemaExtensionIdSchema.and(
      z.any().openapi({ description: 'The identifier of the schema extension.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the schema extension.' }),
    ).exactOptional(),
    SchemaExtensionStatus: SchemaExtensionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the schema extension.' }),
    ).exactOptional(),
    SchemaExtensionStatusReason: SchemaExtensionStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason for the <code>SchemaExtensionStatus</code>.' }),
    ).exactOptional(),
    StartDateTime: StartDateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the schema extension started being applied to the directory.',
        }),
    ).exactOptional(),
    EndDateTime: EndDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the schema extension was completed.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a schema extension.', required: [] })
  .openapi('SchemaExtensionInfo')

const SchemaExtensionsInfoSchema = z
  .array(SchemaExtensionInfoSchema)
  .openapi('SchemaExtensionsInfo')

const ListSchemaExtensionsResultSchema = z
  .object({
    SchemaExtensionsInfo: SchemaExtensionsInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the schema extensions applied to the directory.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set of items.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSchemaExtensionsResult')

const ListSchemaExtensionsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory from which to retrieve the schema extension information.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ListSchemaExtensions.NextToken</code> value from a previous call to <code>ListSchemaExtensions</code>. Pass null if this is the first call.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId'], title: 'ListSchemaExtensionsRequest' })
  .openapi('ListSchemaExtensionsRequest')

const ListTagsForResourceResultSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'List of tags returned by the ListTagsForResource operation.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier (ID) of the directory for which you want to retrieve tags.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RegisterCertificateResultSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z.any().openapi({ description: 'The identifier of the certificate.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterCertificateResult')

const CertificateDataSchema = z.string().min(1).max(8192).openapi('CertificateData')

const RegisterCertificateRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    CertificateData: CertificateDataSchema.and(
      z.any().openapi({ description: 'The certificate PEM string that needs to be registered.' }),
    ),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.',
        }),
    ).exactOptional(),
    ClientCertAuthSettings: ClientCertAuthSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId', 'CertificateData'], title: 'RegisterCertificateRequest' })
  .openapi('RegisterCertificateRequest')

const InvalidCertificateExceptionSchema = z.any().openapi('InvalidCertificateException')

const CertificateLimitExceededExceptionSchema = z.any().openapi('CertificateLimitExceededException')

const CertificateAlreadyExistsExceptionSchema = z.any().openapi('CertificateAlreadyExistsException')

const RegisterEventTopicResultSchema = z
  .object({})
  .openapi({ description: 'The result of a RegisterEventTopic request.' })
  .openapi('RegisterEventTopicResult')

const RegisterEventTopicRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Directory ID that will publish status messages to the Amazon SNS topic.',
        }),
    ),
    TopicName: TopicNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS topic must be in the same region as the specified Directory ID.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'TopicName'],
    title: 'RegisterEventTopicRequest',
    description: 'Registers a new event topic.',
  })
  .openapi('RegisterEventTopicRequest')

const RejectSharedDirectoryResultSchema = z
  .object({
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier of the shared directory in the directory consumer account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RejectSharedDirectoryResult')

const RejectSharedDirectoryRequestSchema = z
  .object({
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.',
        }),
    ),
  })
  .openapi({ required: ['SharedDirectoryId'], title: 'RejectSharedDirectoryRequest' })
  .openapi('RejectSharedDirectoryRequest')

const RemoveIpRoutesResultSchema = z.object({}).openapi('RemoveIpRoutesResult')

const CidrIpsSchema = z.array(CidrIpSchema).openapi('CidrIps')

const RemoveIpRoutesRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier (ID) of the directory from which you want to remove the IP addresses.',
        }),
    ),
    CidrIps: CidrIpsSchema.and(
      z.any().openapi({ description: 'IP address blocks that you want to remove.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'CidrIps'], title: 'RemoveIpRoutesRequest' })
  .openapi('RemoveIpRoutesRequest')

const RemoveRegionResultSchema = z.object({}).openapi('RemoveRegionResult')

const RemoveRegionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory for which you want to remove Region replication.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId'], title: 'RemoveRegionRequest' })
  .openapi('RemoveRegionRequest')

const RemoveTagsFromResourceResultSchema = z.object({}).openapi('RemoveTagsFromResourceResult')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const RemoveTagsFromResourceRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'Identifier (ID) of the directory from which to remove the tag.' }),
    ),
    TagKeys: TagKeysSchema.and(
      z.any().openapi({ description: 'The tag key (name) of the tag to be removed.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'TagKeys'], title: 'RemoveTagsFromResourceRequest' })
  .openapi('RemoveTagsFromResourceRequest')

const ResetUserPasswordResultSchema = z.object({}).openapi('ResetUserPasswordResult')

const CustomerUserNameSchema = z
  .string()
  .regex(/^(?!.*\\|.*"|.*\/|.*\[|.*\]|.*:|.*;|.*\||.*=|.*,|.*\+|.*\*|.*\?|.*<|.*>|.*@).*$/)
  .min(1)
  .max(64)
  .openapi('CustomerUserName')

const UserPasswordSchema = z.string().min(1).max(127).openapi('UserPassword')

const ResetUserPasswordRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the Managed Microsoft AD or Simple AD directory in which the user resides.',
        }),
    ),
    UserName: CustomerUserNameSchema.and(
      z.any().openapi({ description: 'The user name of the user whose password will be reset.' }),
    ),
    NewPassword: UserPasswordSchema.and(
      z.any().openapi({ description: 'The new password that will be reset.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'UserName', 'NewPassword'],
    title: 'ResetUserPasswordRequest',
  })
  .openapi('ResetUserPasswordRequest')

const UserDoesNotExistExceptionSchema = z.any().openapi('UserDoesNotExistException')

const InvalidPasswordExceptionSchema = z.any().openapi('InvalidPasswordException')

const RestoreFromSnapshotResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>RestoreFromSnapshot</a> operation.' })
  .openapi('RestoreFromSnapshotResult')

const RestoreFromSnapshotRequestSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The identifier of the snapshot to restore from.' }),
    ),
  })
  .openapi({
    required: ['SnapshotId'],
    title: 'RestoreFromSnapshotRequest',
    description: 'An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.',
  })
  .openapi('RestoreFromSnapshotRequest')

const ShareDirectoryResultSchema = z
  .object({
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory that is stored in the directory consumer account that is shared from the specified directory (<code>DirectoryId</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShareDirectoryResult')

const TargetIdSchema = z.string().min(1).max(64).openapi('TargetId')

const TargetTypeSchema = z.literal('ACCOUNT').openapi('TargetType')

const ShareTargetSchema = z
  .object({
    Id: TargetIdSchema.and(
      z.any().openapi({ description: 'Identifier of the directory consumer account.' }),
    ),
    Type: TargetTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Type of identifier to be used in the <code>Id</code> field.' }),
    ),
  })
  .openapi({
    required: ['Id', 'Type'],
    description: 'Identifier that contains details about the directory consumer account.',
  })
  .openapi('ShareTarget')

const ShareDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the Managed Microsoft AD directory that you want to share with other Amazon Web Services accounts.',
        }),
    ),
    ShareNotes: NotesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.',
        }),
    ).exactOptional(),
    ShareTarget: ShareTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the directory consumer account with whom the directory is to be shared.',
        }),
    ),
    ShareMethod: ShareMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by sending a directory sharing request (<code>HANDSHAKE</code>).',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'ShareTarget', 'ShareMethod'],
    title: 'ShareDirectoryRequest',
  })
  .openapi('ShareDirectoryRequest')

const InvalidTargetExceptionSchema = z.any().openapi('InvalidTargetException')

const ShareLimitExceededExceptionSchema = z.any().openapi('ShareLimitExceededException')

const OrganizationsExceptionSchema = z.any().openapi('OrganizationsException')

const StartSchemaExtensionResultSchema = z
  .object({
    SchemaExtensionId: SchemaExtensionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the schema extension that will be applied.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSchemaExtensionResult')

const CreateSnapshotBeforeSchemaExtensionSchema = z
  .boolean()
  .openapi('CreateSnapshotBeforeSchemaExtension')

const LdifContentSchema = z.string().min(1).max(500000).openapi('LdifContent')

const StartSchemaExtensionRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory for which the schema extension will be applied to.',
        }),
    ),
    CreateSnapshotBeforeSchemaExtension: CreateSnapshotBeforeSchemaExtensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, creates a snapshot of the directory before applying the schema extension.',
        }),
    ),
    LdifContent: LdifContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \\n. See the example request below for more details. The file size can be no larger than 1MB.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the schema extension.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'CreateSnapshotBeforeSchemaExtension', 'LdifContent', 'Description'],
    title: 'StartSchemaExtensionRequest',
  })
  .openapi('StartSchemaExtensionRequest')

const UnshareDirectoryResultSchema = z
  .object({
    SharedDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory stored in the directory consumer account that is to be unshared from the specified directory (<code>DirectoryId</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnshareDirectoryResult')

const UnshareTargetSchema = z
  .object({
    Id: TargetIdSchema.and(
      z.any().openapi({ description: 'Identifier of the directory consumer account.' }),
    ),
    Type: TargetTypeSchema.and(
      z.any().openapi({ description: 'Type of identifier to be used in the <i>Id</i> field.' }),
    ),
  })
  .openapi({
    required: ['Id', 'Type'],
    description:
      'Identifier that contains details about the directory consumer account with whom the directory is being unshared.',
  })
  .openapi('UnshareTarget')

const UnshareDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Managed Microsoft AD directory that you want to stop sharing.',
        }),
    ),
    UnshareTarget: UnshareTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the directory consumer account with whom the directory has to be unshared.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'UnshareTarget'], title: 'UnshareDirectoryRequest' })
  .openapi('UnshareDirectoryRequest')

const DirectoryNotSharedExceptionSchema = z.any().openapi('DirectoryNotSharedException')

const UpdateConditionalForwarderResultSchema = z
  .object({})
  .openapi({ description: 'The result of an UpdateConditionalForwarder request.' })
  .openapi('UpdateConditionalForwarderResult')

const UpdateConditionalForwarderRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory ID of the Amazon Web Services directory for which to update the conditional forwarder.',
        }),
    ),
    RemoteDomainName: RemoteDomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.',
        }),
    ),
    DnsIpAddrs: DnsIpAddrsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated IP addresses of the remote DNS server associated with the conditional forwarder.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'RemoteDomainName', 'DnsIpAddrs'],
    title: 'UpdateConditionalForwarderRequest',
    description: 'Updates a conditional forwarder.',
  })
  .openapi('UpdateConditionalForwarderRequest')

const UpdateDirectorySetupResultSchema = z.object({}).openapi('UpdateDirectorySetupResult')

const CreateSnapshotBeforeUpdateSchema = z.boolean().openapi('CreateSnapshotBeforeUpdate')

const UpdateDirectorySetupRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The identifier of the directory on which you want to perform the update. ',
        }),
    ),
    UpdateType: UpdateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of update that needs to be performed on the directory. For example, OS. ',
        }),
    ),
    OSUpdateSettings: OSUpdateSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The settings for the OS update that needs to be performed on the directory. ',
        }),
    ).exactOptional(),
    CreateSnapshotBeforeUpdate: CreateSnapshotBeforeUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The boolean that specifies if a snapshot for the directory needs to be taken before updating the directory. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryId', 'UpdateType'], title: 'UpdateDirectorySetupRequest' })
  .openapi('UpdateDirectorySetupRequest')

const DirectoryInDesiredStateExceptionSchema = z.any().openapi('DirectoryInDesiredStateException')

const UpdateNumberOfDomainControllersResultSchema = z
  .object({})
  .openapi('UpdateNumberOfDomainControllersResult')

const UpdateNumberOfDomainControllersRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier of the directory to which the domain controllers will be added or removed.',
        }),
    ),
    DesiredNumber: DesiredNumberOfDomainControllersSchema.and(
      z
        .any()
        .openapi({ description: 'The number of domain controllers desired in the directory.' }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'DesiredNumber'],
    title: 'UpdateNumberOfDomainControllersRequest',
  })
  .openapi('UpdateNumberOfDomainControllersRequest')

const DomainControllerLimitExceededExceptionSchema = z
  .any()
  .openapi('DomainControllerLimitExceededException')

const UpdateRadiusResultSchema = z
  .object({})
  .openapi({ description: 'Contains the results of the <a>UpdateRadius</a> operation.' })
  .openapi('UpdateRadiusResult')

const UpdateRadiusRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory for which to update the RADIUS server information.',
        }),
    ),
    RadiusSettings: RadiusSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>RadiusSettings</a> object that contains information about the RADIUS server.',
        }),
    ),
  })
  .openapi({
    required: ['DirectoryId', 'RadiusSettings'],
    title: 'UpdateRadiusRequest',
    description: 'Contains the inputs for the <a>UpdateRadius</a> operation.',
  })
  .openapi('UpdateRadiusRequest')

const UpdateSettingsResultSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSettingsResult')

const SettingSchema = z
  .object({
    Name: DirectoryConfigurationSettingNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the directory setting. For example:</p> <p> <code>TLS_1_0</code> </p>',
        }),
    ),
    Value: DirectoryConfigurationSettingValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the directory setting for which to retrieve information. For example, for <code>TLS_1_0</code>, the valid values are: <code>Enable</code> and <code>Disable</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description: 'Contains information about the configurable settings for a directory.',
  })
  .openapi('Setting')

const SettingsSchema = z.array(SettingSchema).openapi('Settings')

const UpdateSettingsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory for which to update settings.' }),
    ),
    Settings: SettingsSchema.and(
      z.any().openapi({ description: 'The list of <a>Setting</a> objects.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'Settings'], title: 'UpdateSettingsRequest' })
  .openapi('UpdateSettingsRequest')

const IncompatibleSettingsExceptionSchema = z.any().openapi('IncompatibleSettingsException')

const UnsupportedSettingsExceptionSchema = z.any().openapi('UnsupportedSettingsException')

const RequestIdSchema = z
  .string()
  .regex(/^([A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12})$/)
  .openapi({ description: 'The Amazon Web Services request identifier.' })
  .openapi('RequestId')

const UpdateTrustResultSchema = z
  .object({
    RequestId: RequestIdSchema.exactOptional(),
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'Identifier of the trust relationship.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTrustResult')

const UpdateTrustRequestSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'Identifier of the trust relationship.' }),
    ),
    SelectiveAuth: SelectiveAuthSchema.and(
      z.any().openapi({ description: 'Updates selective authentication for the trust.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TrustId'], title: 'UpdateTrustRequest' })
  .openapi('UpdateTrustRequest')

const VerifyTrustResultSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique Trust ID of the trust relationship that was verified.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Result of a VerifyTrust request.', required: [] })
  .openapi('VerifyTrustResult')

const VerifyTrustRequestSchema = z
  .object({
    TrustId: TrustIdSchema.and(
      z.any().openapi({ description: 'The unique Trust ID of the trust relationship to verify.' }),
    ),
  })
  .openapi({
    required: ['TrustId'],
    title: 'VerifyTrustRequest',
    description:
      'Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.',
  })
  .openapi('VerifyTrustRequest')

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

export const postXAmzTargetDirectoryService20150416AcceptSharedDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory',
  description:
    'Accepts a directory sharing request that was sent from the directory owner account.',
  operationId: 'AcceptSharedDirectory',
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
        .literal('DirectoryService_20150416.AcceptSharedDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.AcceptSharedDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptSharedDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptSharedDirectoryResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DirectoryAlreadySharedException',
      content: { 'application/json': { schema: DirectoryAlreadySharedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416AddIpRoutesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes',
  description:
    '<p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>',
  operationId: 'AddIpRoutes',
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
        .literal('DirectoryService_20150416.AddIpRoutes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.AddIpRoutes'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddIpRoutesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddIpRoutesResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    484: {
      description: 'IpRouteLimitExceededException',
      content: { 'application/json': { schema: IpRouteLimitExceededExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416AddRegionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.AddRegion',
  description: 'Adds two domain controllers in the specified Region for the specified directory.',
  operationId: 'AddRegion',
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
        .literal('DirectoryService_20150416.AddRegion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.AddRegion'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddRegionRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddRegionResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'DirectoryAlreadyInRegionException',
      content: { 'application/json': { schema: DirectoryAlreadyInRegionExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'RegionLimitExceededException',
      content: { 'application/json': { schema: RegionLimitExceededExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    488: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    489: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416AddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource',
  description:
    'Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.',
  operationId: 'AddTagsToResource',
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
        .literal('DirectoryService_20150416.AddTagsToResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.AddTagsToResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsToResourceResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'TagLimitExceededException',
      content: { 'application/json': { schema: TagLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CancelSchemaExtensionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension',
  description:
    'Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.',
  operationId: 'CancelSchemaExtension',
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
        .literal('DirectoryService_20150416.CancelSchemaExtension')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CancelSchemaExtension'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelSchemaExtensionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelSchemaExtensionResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ConnectDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory',
  description:
    '<p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>',
  operationId: 'ConnectDirectory',
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
        .literal('DirectoryService_20150416.ConnectDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ConnectDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConnectDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectDirectoryResultSchema } },
    },
    480: {
      description: 'DirectoryLimitExceededException',
      content: { 'application/json': { schema: DirectoryLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateAlias',
  description:
    '<p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>',
  operationId: 'CreateAlias',
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
        .literal('DirectoryService_20150416.CreateAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAliasRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAliasResultSchema } },
    },
    480: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateComputerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateComputer',
  description: 'Creates an Active Directory computer object in the specified directory.',
  operationId: 'CreateComputer',
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
        .literal('DirectoryService_20150416.CreateComputer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateComputer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateComputerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateComputerResultSchema } },
    },
    480: {
      description: 'AuthenticationFailedException',
      content: { 'application/json': { schema: AuthenticationFailedExceptionSchema } },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    486: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateConditionalForwarderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder',
  description:
    'Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.',
  operationId: 'CreateConditionalForwarder',
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
        .literal('DirectoryService_20150416.CreateConditionalForwarder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.CreateConditionalForwarder'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConditionalForwarderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConditionalForwarderResultSchema } },
    },
    480: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateDirectory',
  description:
    '<p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>',
  operationId: 'CreateDirectory',
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
        .literal('DirectoryService_20150416.CreateDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDirectoryResultSchema } },
    },
    480: {
      description: 'DirectoryLimitExceededException',
      content: { 'application/json': { schema: DirectoryLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateLogSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription',
  description:
    'Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.',
  operationId: 'CreateLogSubscription',
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
        .literal('DirectoryService_20150416.CreateLogSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateLogSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLogSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLogSubscriptionResultSchema } },
    },
    480: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    483: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateMicrosoftADRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD',
  description:
    '<p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>',
  operationId: 'CreateMicrosoftAD',
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
        .literal('DirectoryService_20150416.CreateMicrosoftAD')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateMicrosoftAD'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMicrosoftADRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMicrosoftADResultSchema } },
    },
    480: {
      description: 'DirectoryLimitExceededException',
      content: { 'application/json': { schema: DirectoryLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot',
  description:
    '<p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>',
  operationId: 'CreateSnapshot',
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
        .literal('DirectoryService_20150416.CreateSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSnapshotResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'SnapshotLimitExceededException',
      content: { 'application/json': { schema: SnapshotLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416CreateTrustRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.CreateTrust',
  description:
    '<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>',
  operationId: 'CreateTrust',
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
        .literal('DirectoryService_20150416.CreateTrust')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.CreateTrust'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTrustRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTrustResultSchema } },
    },
    480: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeleteConditionalForwarderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder',
  description:
    'Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.',
  operationId: 'DeleteConditionalForwarder',
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
        .literal('DirectoryService_20150416.DeleteConditionalForwarder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.DeleteConditionalForwarder'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConditionalForwarderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConditionalForwarderResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeleteDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory',
  description:
    '<p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>',
  operationId: 'DeleteDirectory',
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
        .literal('DirectoryService_20150416.DeleteDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeleteDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDirectoryResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeleteLogSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription',
  description: 'Deletes the specified log subscription.',
  operationId: 'DeleteLogSubscription',
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
        .literal('DirectoryService_20150416.DeleteLogSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeleteLogSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLogSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLogSubscriptionResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeleteSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot',
  description: 'Deletes a directory snapshot.',
  operationId: 'DeleteSnapshot',
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
        .literal('DirectoryService_20150416.DeleteSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeleteSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSnapshotResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeleteTrustRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeleteTrust',
  description:
    'Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.',
  operationId: 'DeleteTrust',
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
        .literal('DirectoryService_20150416.DeleteTrust')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeleteTrust'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTrustRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTrustResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeregisterCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate',
  description:
    'Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.',
  operationId: 'DeregisterCertificate',
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
        .literal('DirectoryService_20150416.DeregisterCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeregisterCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterCertificateResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'CertificateDoesNotExistException',
      content: { 'application/json': { schema: CertificateDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'CertificateInUseException',
      content: { 'application/json': { schema: CertificateInUseExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DeregisterEventTopicRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic',
  description: 'Removes the specified directory as a publisher to the specified Amazon SNS topic.',
  operationId: 'DeregisterEventTopic',
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
        .literal('DirectoryService_20150416.DeregisterEventTopic')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DeregisterEventTopic'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterEventTopicRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterEventTopicResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate',
  description:
    'Displays information about the certificate registered for secure LDAP or client certificate authentication.',
  operationId: 'DescribeCertificate',
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
        .literal('DirectoryService_20150416.DescribeCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCertificateResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'CertificateDoesNotExistException',
      content: { 'application/json': { schema: CertificateDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings',
    description:
      'Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. ',
    operationId: 'DescribeClientAuthenticationSettings',
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
          .literal('DirectoryService_20150416.DescribeClientAuthenticationSettings')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['DirectoryService_20150416.DescribeClientAuthenticationSettings'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
      body: {
        content: {
          'application/json': { schema: DescribeClientAuthenticationSettingsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeClientAuthenticationSettingsResultSchema },
        },
      },
      480: {
        description: 'DirectoryDoesNotExistException',
        content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
      },
      481: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'ClientException',
        content: { 'application/json': { schema: ClientExceptionSchema } },
      },
      485: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetDirectoryService20150416DescribeConditionalForwardersRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders',
    description:
      '<p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>',
    operationId: 'DescribeConditionalForwarders',
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
          .literal('DirectoryService_20150416.DescribeConditionalForwarders')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['DirectoryService_20150416.DescribeConditionalForwarders'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeConditionalForwardersRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeConditionalForwardersResultSchema } },
      },
      480: {
        description: 'EntityDoesNotExistException',
        content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
      },
      481: {
        description: 'DirectoryUnavailableException',
        content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      484: {
        description: 'ClientException',
        content: { 'application/json': { schema: ClientExceptionSchema } },
      },
      485: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetDirectoryService20150416DescribeDirectoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories',
  description:
    '<p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>',
  operationId: 'DescribeDirectories',
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
        .literal('DirectoryService_20150416.DescribeDirectories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeDirectories'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeDirectoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDirectoriesResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeDomainControllersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers',
  description: 'Provides information about any domain controllers in your directory.',
  operationId: 'DescribeDomainControllers',
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
        .literal('DirectoryService_20150416.DescribeDomainControllers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.DescribeDomainControllers'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeDomainControllersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDomainControllersResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeEventTopicsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics',
  description:
    '<p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>',
  operationId: 'DescribeEventTopics',
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
        .literal('DirectoryService_20150416.DescribeEventTopics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeEventTopics'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventTopicsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventTopicsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeLDAPSSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings',
  description: 'Describes the status of LDAP security for the specified directory.',
  operationId: 'DescribeLDAPSSettings',
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
        .literal('DirectoryService_20150416.DescribeLDAPSSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeLDAPSSettings'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeLDAPSSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLDAPSSettingsResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeRegionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeRegions',
  description:
    'Provides information about the Regions that are configured for multi-Region replication.',
  operationId: 'DescribeRegions',
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
        .literal('DirectoryService_20150416.DescribeRegions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeRegions'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeRegionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRegionsResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeSettings',
  description: 'Retrieves information about the configurable settings for the specified directory.',
  operationId: 'DescribeSettings',
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
        .literal('DirectoryService_20150416.DescribeSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSettingsResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeSharedDirectoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories',
  description: 'Returns the shared directories in your account. ',
  operationId: 'DescribeSharedDirectories',
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
        .literal('DirectoryService_20150416.DescribeSharedDirectories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.DescribeSharedDirectories'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeSharedDirectoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSharedDirectoriesResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots',
  description:
    '<p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>',
  operationId: 'DescribeSnapshots',
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
        .literal('DirectoryService_20150416.DescribeSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeSnapshots'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSnapshotsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeTrustsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts',
  description:
    '<p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>',
  operationId: 'DescribeTrusts',
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
        .literal('DirectoryService_20150416.DescribeTrusts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeTrusts'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: DescribeTrustsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTrustsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DescribeUpdateDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory',
  description: ' Describes the updates of a directory for a particular update type. ',
  operationId: 'DescribeUpdateDirectory',
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
        .literal('DirectoryService_20150416.DescribeUpdateDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DescribeUpdateDirectory'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeUpdateDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUpdateDirectoryResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    485: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DisableClientAuthenticationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication',
  description: 'Disables alternative client authentication methods for the specified directory. ',
  operationId: 'DisableClientAuthentication',
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
        .literal('DirectoryService_20150416.DisableClientAuthentication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.DisableClientAuthentication'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableClientAuthenticationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableClientAuthenticationResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidClientAuthStatusException',
      content: { 'application/json': { schema: InvalidClientAuthStatusExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DisableLDAPSRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS',
  description: 'Deactivates LDAP secure calls for the specified directory.',
  operationId: 'DisableLDAPS',
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
        .literal('DirectoryService_20150416.DisableLDAPS')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DisableLDAPS'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableLDAPSRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableLDAPSResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidLDAPSStatusException',
      content: { 'application/json': { schema: InvalidLDAPSStatusExceptionSchema } },
    },
    483: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DisableRadiusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DisableRadius',
  description:
    'Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.',
  operationId: 'DisableRadius',
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
        .literal('DirectoryService_20150416.DisableRadius')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DisableRadius'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableRadiusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableRadiusResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416DisableSsoRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.DisableSso',
  description: 'Disables single-sign on for a directory.',
  operationId: 'DisableSso',
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
        .literal('DirectoryService_20150416.DisableSso')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.DisableSso'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DisableSsoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableSsoResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    482: {
      description: 'AuthenticationFailedException',
      content: { 'application/json': { schema: AuthenticationFailedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416EnableClientAuthenticationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication',
  description: 'Enables alternative client authentication methods for the specified directory.',
  operationId: 'EnableClientAuthentication',
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
        .literal('DirectoryService_20150416.EnableClientAuthentication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.EnableClientAuthentication'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableClientAuthenticationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableClientAuthenticationResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidClientAuthStatusException',
      content: { 'application/json': { schema: InvalidClientAuthStatusExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoAvailableCertificateException',
      content: { 'application/json': { schema: NoAvailableCertificateExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416EnableLDAPSRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS',
  description: 'Activates the switch for the specific directory to always use LDAP secure calls.',
  operationId: 'EnableLDAPS',
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
        .literal('DirectoryService_20150416.EnableLDAPS')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.EnableLDAPS'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableLDAPSRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableLDAPSResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'NoAvailableCertificateException',
      content: { 'application/json': { schema: NoAvailableCertificateExceptionSchema } },
    },
    483: {
      description: 'InvalidLDAPSStatusException',
      content: { 'application/json': { schema: InvalidLDAPSStatusExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416EnableRadiusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.EnableRadius',
  description:
    'Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.',
  operationId: 'EnableRadius',
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
        .literal('DirectoryService_20150416.EnableRadius')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.EnableRadius'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableRadiusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableRadiusResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416EnableSsoRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.EnableSso',
  description:
    'Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.',
  operationId: 'EnableSso',
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
        .literal('DirectoryService_20150416.EnableSso')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.EnableSso'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnableSsoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableSsoResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    482: {
      description: 'AuthenticationFailedException',
      content: { 'application/json': { schema: AuthenticationFailedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416GetDirectoryLimitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits',
  description: 'Obtains directory limit information for the current Region.',
  operationId: 'GetDirectoryLimits',
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
        .literal('DirectoryService_20150416.GetDirectoryLimits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.GetDirectoryLimits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDirectoryLimitsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDirectoryLimitsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416GetSnapshotLimitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits',
  description: 'Obtains the manual snapshot limits for a directory.',
  operationId: 'GetSnapshotLimits',
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
        .literal('DirectoryService_20150416.GetSnapshotLimits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.GetSnapshotLimits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSnapshotLimitsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSnapshotLimitsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ListCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ListCertificates',
  description:
    'For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.',
  operationId: 'ListCertificates',
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
        .literal('DirectoryService_20150416.ListCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ListCertificates'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: ListCertificatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCertificatesResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ListIpRoutesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes',
  description: 'Lists the address blocks that you have added to a directory.',
  operationId: 'ListIpRoutes',
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
        .literal('DirectoryService_20150416.ListIpRoutes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ListIpRoutes'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: ListIpRoutesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIpRoutesResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ListLogSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions',
  description: 'Lists the active log subscriptions for the Amazon Web Services account.',
  operationId: 'ListLogSubscriptions',
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
        .literal('DirectoryService_20150416.ListLogSubscriptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ListLogSubscriptions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: ListLogSubscriptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLogSubscriptionsResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ListSchemaExtensionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions',
  description: 'Lists all schema extensions applied to a Microsoft AD Directory.',
  operationId: 'ListSchemaExtensions',
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
        .literal('DirectoryService_20150416.ListSchemaExtensions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ListSchemaExtensions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: ListSchemaExtensionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSchemaExtensionsResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource',
  description: 'Lists all tags on a directory.',
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
      'X-Amz-Target': z
        .literal('DirectoryService_20150416.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RegisterCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate',
  description: 'Registers a certificate for a secure LDAP or client certificate authentication.',
  operationId: 'RegisterCertificate',
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
        .literal('DirectoryService_20150416.RegisterCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RegisterCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterCertificateResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidCertificateException',
      content: { 'application/json': { schema: InvalidCertificateExceptionSchema } },
    },
    483: {
      description: 'CertificateLimitExceededException',
      content: { 'application/json': { schema: CertificateLimitExceededExceptionSchema } },
    },
    484: {
      description: 'CertificateAlreadyExistsException',
      content: { 'application/json': { schema: CertificateAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    487: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RegisterEventTopicRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic',
  description:
    'Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.',
  operationId: 'RegisterEventTopic',
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
        .literal('DirectoryService_20150416.RegisterEventTopic')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RegisterEventTopic'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterEventTopicRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterEventTopicResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RejectSharedDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory',
  description:
    'Rejects a directory sharing request that was sent from the directory owner account.',
  operationId: 'RejectSharedDirectory',
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
        .literal('DirectoryService_20150416.RejectSharedDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RejectSharedDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RejectSharedDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectSharedDirectoryResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'DirectoryAlreadySharedException',
      content: { 'application/json': { schema: DirectoryAlreadySharedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RemoveIpRoutesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes',
  description: 'Removes IP address blocks from a directory.',
  operationId: 'RemoveIpRoutes',
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
        .literal('DirectoryService_20150416.RemoveIpRoutes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RemoveIpRoutes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveIpRoutesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveIpRoutesResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RemoveRegionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RemoveRegion',
  description:
    'Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.',
  operationId: 'RemoveRegion',
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
        .literal('DirectoryService_20150416.RemoveRegion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RemoveRegion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveRegionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveRegionResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource',
  description: 'Removes tags from a directory.',
  operationId: 'RemoveTagsFromResource',
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
        .literal('DirectoryService_20150416.RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RemoveTagsFromResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsFromResourceResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ResetUserPasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword',
  description:
    '<p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>',
  operationId: 'ResetUserPassword',
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
        .literal('DirectoryService_20150416.ResetUserPassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ResetUserPassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetUserPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResetUserPasswordResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'UserDoesNotExistException',
      content: { 'application/json': { schema: UserDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    483: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    484: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    486: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416RestoreFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot',
  description:
    '<p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>',
  operationId: 'RestoreFromSnapshot',
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
        .literal('DirectoryService_20150416.RestoreFromSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.RestoreFromSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreFromSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreFromSnapshotResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416ShareDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.ShareDirectory',
  description:
    '<p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>',
  operationId: 'ShareDirectory',
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
        .literal('DirectoryService_20150416.ShareDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.ShareDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ShareDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ShareDirectoryResultSchema } },
    },
    480: {
      description: 'DirectoryAlreadySharedException',
      content: { 'application/json': { schema: DirectoryAlreadySharedExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidTargetException',
      content: { 'application/json': { schema: InvalidTargetExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ShareLimitExceededException',
      content: { 'application/json': { schema: ShareLimitExceededExceptionSchema } },
    },
    486: {
      description: 'OrganizationsException',
      content: { 'application/json': { schema: OrganizationsExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    488: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    489: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416StartSchemaExtensionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension',
  description: 'Applies a schema extension to a Microsoft AD directory.',
  operationId: 'StartSchemaExtension',
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
        .literal('DirectoryService_20150416.StartSchemaExtension')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.StartSchemaExtension'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSchemaExtensionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSchemaExtensionResultSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'SnapshotLimitExceededException',
      content: { 'application/json': { schema: SnapshotLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UnshareDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory',
  description: 'Stops the directory sharing between the directory owner and consumer accounts. ',
  operationId: 'UnshareDirectory',
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
        .literal('DirectoryService_20150416.UnshareDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.UnshareDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnshareDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnshareDirectoryResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidTargetException',
      content: { 'application/json': { schema: InvalidTargetExceptionSchema } },
    },
    482: {
      description: 'DirectoryNotSharedException',
      content: { 'application/json': { schema: DirectoryNotSharedExceptionSchema } },
    },
    483: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    484: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UpdateConditionalForwarderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder',
  description:
    'Updates a conditional forwarder that has been set up for your Amazon Web Services directory.',
  operationId: 'UpdateConditionalForwarder',
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
        .literal('DirectoryService_20150416.UpdateConditionalForwarder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['DirectoryService_20150416.UpdateConditionalForwarder'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConditionalForwarderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConditionalForwarderResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    484: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    485: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UpdateDirectorySetupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup',
  description: ' Updates the directory for a particular update type. ',
  operationId: 'UpdateDirectorySetup',
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
        .literal('DirectoryService_20150416.UpdateDirectorySetup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.UpdateDirectorySetup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDirectorySetupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDirectorySetupResultSchema } },
    },
    480: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    481: {
      description: 'DirectoryInDesiredStateException',
      content: { 'application/json': { schema: DirectoryInDesiredStateExceptionSchema } },
    },
    482: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    483: {
      description: 'SnapshotLimitExceededException',
      content: { 'application/json': { schema: SnapshotLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    488: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers',
    description:
      'Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.',
    operationId: 'UpdateNumberOfDomainControllers',
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
          .literal('DirectoryService_20150416.UpdateNumberOfDomainControllers')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['DirectoryService_20150416.UpdateNumberOfDomainControllers'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateNumberOfDomainControllersRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateNumberOfDomainControllersResultSchema } },
      },
      480: {
        description: 'EntityDoesNotExistException',
        content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
      },
      481: {
        description: 'DirectoryUnavailableException',
        content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
      },
      482: {
        description: 'DomainControllerLimitExceededException',
        content: { 'application/json': { schema: DomainControllerLimitExceededExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
      485: {
        description: 'ClientException',
        content: { 'application/json': { schema: ClientExceptionSchema } },
      },
      486: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetDirectoryService20150416UpdateRadiusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UpdateRadius',
  description:
    'Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.',
  operationId: 'UpdateRadius',
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
        .literal('DirectoryService_20150416.UpdateRadius')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.UpdateRadius'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRadiusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRadiusResultSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UpdateSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UpdateSettings',
  description: 'Updates the configurable settings for the specified directory.',
  operationId: 'UpdateSettings',
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
        .literal('DirectoryService_20150416.UpdateSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.UpdateSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSettingsResultSchema } },
    },
    480: {
      description: 'DirectoryDoesNotExistException',
      content: { 'application/json': { schema: DirectoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    482: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    483: {
      description: 'IncompatibleSettingsException',
      content: { 'application/json': { schema: IncompatibleSettingsExceptionSchema } },
    },
    484: {
      description: 'UnsupportedSettingsException',
      content: { 'application/json': { schema: UnsupportedSettingsExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    487: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416UpdateTrustRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.UpdateTrust',
  description:
    'Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.',
  operationId: 'UpdateTrust',
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
        .literal('DirectoryService_20150416.UpdateTrust')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.UpdateTrust'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTrustRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTrustResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDirectoryService20150416VerifyTrustRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DirectoryService_20150416.VerifyTrust',
  description:
    '<p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>',
  operationId: 'VerifyTrust',
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
        .literal('DirectoryService_20150416.VerifyTrust')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DirectoryService_20150416.VerifyTrust'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyTrustRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyTrustResultSchema } },
    },
    480: {
      description: 'EntityDoesNotExistException',
      content: { 'application/json': { schema: EntityDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    483: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})
