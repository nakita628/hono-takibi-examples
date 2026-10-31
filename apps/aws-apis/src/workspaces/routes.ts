import { createRoute, z } from '@hono/zod-openapi'

const ClientLoginMessageSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2000)
  .openapi('ClientLoginMessage')

type LoginMessageType = { [key: string]: z.infer<typeof ClientLoginMessageSchema> }

const ConnectionIdentifierSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/)
  .min(1)
  .max(20)
  .openapi('ConnectionIdentifier')

const AssociateConnectionAliasResultSchema = z
  .object({
    ConnectionIdentifier: ConnectionIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateConnectionAliasResult')

const ConnectionAliasIdSchema = z
  .string()
  .regex(/^wsca-[0-9a-z]{8,63}$/)
  .min(13)
  .max(68)
  .openapi('ConnectionAliasId')

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

const AssociateConnectionAliasRequestSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias.' }),
    ),
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory to associate the connection alias with.',
        }),
    ),
  })
  .openapi({ required: ['AliasId', 'ResourceId'], title: 'AssociateConnectionAliasRequest' })
  .openapi('AssociateConnectionAliasRequest')

const ResourceAssociatedExceptionSchema = z.any().openapi('ResourceAssociatedException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidParameterValuesExceptionSchema = z.any().openapi('InvalidParameterValuesException')

const InvalidResourceStateExceptionSchema = z.any().openapi('InvalidResourceStateException')

const OperationNotSupportedExceptionSchema = z.any().openapi('OperationNotSupportedException')

const AssociateIpGroupsResultSchema = z.object({}).openapi('AssociateIpGroupsResult')

const DirectoryIdSchema = z
  .string()
  .regex(/^d-[0-9a-f]{8,63}$/)
  .min(10)
  .max(65)
  .openapi('DirectoryId')

const IpGroupIdSchema = z
  .string()
  .regex(/wsipg-[0-9a-z]{8,63}$/)
  .openapi('IpGroupId')

const IpGroupIdListSchema = z.array(IpGroupIdSchema).openapi('IpGroupIdList')

const AssociateIpGroupsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    GroupIds: IpGroupIdListSchema.and(
      z.any().openapi({ description: 'The identifiers of one or more IP access control groups.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'GroupIds'], title: 'AssociateIpGroupsRequest' })
  .openapi('AssociateIpGroupsRequest')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const AuthorizeIpRulesResultSchema = z.object({}).openapi('AuthorizeIpRulesResult')

const IpRuleSchema = z.string().openapi('IpRule')

const IpRuleDescSchema = z.string().openapi('IpRuleDesc')

const IpRuleItemSchema = z
  .object({
    ipRule: IpRuleSchema.and(
      z.any().openapi({ description: 'The IP address range, in CIDR notation.' }),
    ).exactOptional(),
    ruleDesc: IpRuleDescSchema.and(
      z.any().openapi({ description: 'The description.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a rule for an IP access control group.', required: [] })
  .openapi('IpRuleItem')

const IpRuleListSchema = z.array(IpRuleItemSchema).openapi('IpRuleList')

const AuthorizeIpRulesRequestSchema = z
  .object({
    GroupId: IpGroupIdSchema.and(z.any().openapi({ description: 'The identifier of the group.' })),
    UserRules: IpRuleListSchema.and(
      z.any().openapi({ description: 'The rules to add to the group.' }),
    ),
  })
  .openapi({ required: ['GroupId', 'UserRules'], title: 'AuthorizeIpRulesRequest' })
  .openapi('AuthorizeIpRulesRequest')

const WorkspaceImageIdSchema = z
  .string()
  .regex(/wsi-[0-9a-z]{9,63}$/)
  .openapi('WorkspaceImageId')

const CopyWorkspaceImageResultSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopyWorkspaceImageResult')

const WorkspaceImageNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_.\/()\\-]+$/)
  .min(1)
  .max(64)
  .openapi('WorkspaceImageName')

const WorkspaceImageDescriptionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_.\/() -]+$/)
  .min(1)
  .max(256)
  .openapi('WorkspaceImageDescription')

const RegionSchema = z
  .string()
  .regex(/^[-0-9a-z]{1,31}$/)
  .min(1)
  .max(31)
  .openapi('Region')

const TagKeySchema = z.string().min(1).max(127).openapi('TagKey')

const TagValueSchema = z.string().max(255).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Key'], description: 'Describes a tag.' })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CopyWorkspaceImageRequestSchema = z
  .object({
    Name: WorkspaceImageNameSchema.and(z.any().openapi({ description: 'The name of the image.' })),
    Description: WorkspaceImageDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the image.' }),
    ).exactOptional(),
    SourceImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the source image.' }),
    ),
    SourceRegion: RegionSchema.and(
      z.any().openapi({ description: 'The identifier of the source Region.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the image.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'SourceImageId', 'SourceRegion'],
    title: 'CopyWorkspaceImageRequest',
  })
  .openapi('CopyWorkspaceImageRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const AmazonUuidSchema = z
  .string()
  .regex(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/)
  .length(36)
  .openapi('AmazonUuid')

const CreateConnectClientAddInResultSchema = z
  .object({
    AddInId: AmazonUuidSchema.and(
      z.any().openapi({ description: 'The client add-in identifier.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectClientAddInResult')

const AddInNameSchema = z.string().regex(/^.*$/).min(1).max(64).openapi('AddInName')

const AddInUrlSchema = z
  .string()
  .regex(/^(http|https)\:\/\/\S+/)
  .min(1)
  .max(1024)
  .openapi('AddInUrl')

const CreateConnectClientAddInRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which to configure the client add-in.',
        }),
    ),
    Name: AddInNameSchema.and(z.any().openapi({ description: 'The name of the client add-in.' })),
    URL: AddInUrlSchema.and(
      z.any().openapi({ description: 'The endpoint URL of the Amazon Connect client add-in.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Name', 'URL'], title: 'CreateConnectClientAddInRequest' })
  .openapi('CreateConnectClientAddInRequest')

const ResourceCreationFailedExceptionSchema = z.any().openapi('ResourceCreationFailedException')

const CreateConnectionAliasResultSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectionAliasResult')

const ConnectionStringSchema = z
  .string()
  .regex(/^[.0-9a-zA-Z\-]{1,255}$/)
  .min(1)
  .max(255)
  .openapi('ConnectionString')

const CreateConnectionAliasRequestSchema = z
  .object({
    ConnectionString: ConnectionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A connection string in the form of a fully qualified domain name (FQDN), such as <code>www.example.com</code>.</p> <important> <p>After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different account, even if you delete all instances of it from the original account. The connection string is globally reserved for your account.</p> </important>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to associate with the connection alias.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectionString'], title: 'CreateConnectionAliasRequest' })
  .openapi('CreateConnectionAliasRequest')

const CreateIpGroupResultSchema = z
  .object({
    GroupId: IpGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIpGroupResult')

const IpGroupNameSchema = z.string().openapi('IpGroupName')

const IpGroupDescSchema = z.string().openapi('IpGroupDesc')

const CreateIpGroupRequestSchema = z
  .object({
    GroupName: IpGroupNameSchema.and(z.any().openapi({ description: 'The name of the group.' })),
    GroupDesc: IpGroupDescSchema.and(
      z.any().openapi({ description: 'The description of the group.' }),
    ).exactOptional(),
    UserRules: IpRuleListSchema.and(
      z.any().openapi({ description: 'The rules to add to the group.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags. Each WorkSpaces resource can have a maximum of 50 tags.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GroupName'], title: 'CreateIpGroupRequest' })
  .openapi('CreateIpGroupRequest')

const WorkspaceIdSchema = z
  .string()
  .regex(/^ws-[0-9a-z]{8,63}$/)
  .openapi('WorkspaceId')

const VolumeEncryptionKeySchema = z.string().openapi('VolumeEncryptionKey')

const StandbyWorkspaceSchema = z
  .object({
    PrimaryWorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the standby WorkSpace.' }),
    ),
    VolumeEncryptionKey: VolumeEncryptionKeySchema.and(
      z.any().openapi({ description: 'The volume encryption key of the standby WorkSpace.' }),
    ).exactOptional(),
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory for the standby WorkSpace.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the standby WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PrimaryWorkspaceId', 'DirectoryId'],
    description: 'Describes a standby WorkSpace.',
  })
  .openapi('StandbyWorkspace')

const WorkspaceErrorCodeSchema = z.string().openapi('WorkspaceErrorCode')

const DescriptionSchema = z.string().openapi('Description')

const FailedCreateStandbyWorkspacesRequestSchema = z
  .object({
    StandbyWorkspaceRequest: StandbyWorkspaceSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the standby WorkSpace that could not be created.',
        }),
    ).exactOptional(),
    ErrorCode: WorkspaceErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code that is returned if the standby WorkSpace could not be created.',
        }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the error message that is returned if the standby WorkSpace could not be created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the standby WorkSpace that could not be created.',
    required: [],
  })
  .openapi('FailedCreateStandbyWorkspacesRequest')

const FailedCreateStandbyWorkspacesRequestListSchema = z
  .array(FailedCreateStandbyWorkspacesRequestSchema)
  .openapi('FailedCreateStandbyWorkspacesRequestList')

const UserNameSchema = z.string().min(1).max(63).openapi('UserName')

const WorkspaceStateSchema = z
  .enum([
    'PENDING',
    'AVAILABLE',
    'IMPAIRED',
    'UNHEALTHY',
    'REBOOTING',
    'STARTING',
    'REBUILDING',
    'RESTORING',
    'MAINTENANCE',
    'ADMIN_MAINTENANCE',
    'TERMINATING',
    'TERMINATED',
    'SUSPENDED',
    'UPDATING',
    'STOPPING',
    'STOPPED',
    'ERROR',
  ])
  .openapi('WorkspaceState')

const PendingCreateStandbyWorkspacesRequestSchema = z
  .object({
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the standby WorkSpace that was created.</p> <p>Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkspaces</a> before the WorkSpace is created, the information returned can be incomplete. </p>',
        }),
    ).exactOptional(),
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the directory for the standby WorkSpace.' }),
    ).exactOptional(),
    State: WorkspaceStateSchema.and(
      z.any().openapi({ description: 'The operational state of the standby WorkSpace.' }),
    ).exactOptional(),
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the standby WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the standby WorkSpace.', required: [] })
  .openapi('PendingCreateStandbyWorkspacesRequest')

const PendingCreateStandbyWorkspacesRequestListSchema = z
  .array(PendingCreateStandbyWorkspacesRequestSchema)
  .openapi('PendingCreateStandbyWorkspacesRequestList')

const CreateStandbyWorkspacesResultSchema = z
  .object({
    FailedStandbyRequests: FailedCreateStandbyWorkspacesRequestListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the standby WorkSpace that could not be created. ',
        }),
    ).exactOptional(),
    PendingStandbyRequests: PendingCreateStandbyWorkspacesRequestListSchema.and(
      z.any().openapi({ description: 'Information about the standby WorkSpace that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStandbyWorkspacesResult')

const StandbyWorkspacesListSchema = z.array(StandbyWorkspaceSchema).openapi('StandbyWorkspacesList')

const CreateStandbyWorkspacesRequestSchema = z
  .object({
    PrimaryRegion: RegionSchema.and(
      z.any().openapi({ description: 'The Region of the primary WorkSpace.' }),
    ),
    StandbyWorkspaces: StandbyWorkspacesListSchema.and(
      z.any().openapi({ description: 'Information about the standby WorkSpace to be created.' }),
    ),
  })
  .openapi({
    required: ['PrimaryRegion', 'StandbyWorkspaces'],
    title: 'CreateStandbyWorkspacesRequest',
  })
  .openapi('CreateStandbyWorkspacesRequest')

const CreateTagsResultSchema = z.object({}).openapi('CreateTagsResult')

const CreateTagsRequestSchema = z
  .object({
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags. Each WorkSpaces resource can have a maximum of 50 tags.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Tags'], title: 'CreateTagsRequest' })
  .openapi('CreateTagsRequest')

const CreateUpdatedWorkspaceImageResultSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the new updated WorkSpace image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUpdatedWorkspaceImageResult')

const CreateUpdatedWorkspaceImageRequestSchema = z
  .object({
    Name: WorkspaceImageNameSchema.and(
      z.any().openapi({ description: 'The name of the new updated WorkSpace image.' }),
    ),
    Description: WorkspaceImageDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of whether updates for the WorkSpace image are available.',
        }),
    ),
    SourceImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the source WorkSpace image.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tags that you want to add to the new updated WorkSpace image.</p> <note> <p>To add tags at the same time when you're creating the updated image, you must create an IAM policy that grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Description', 'SourceImageId'],
    title: 'CreateUpdatedWorkspaceImageRequest',
  })
  .openapi('CreateUpdatedWorkspaceImageRequest')

const BundleIdSchema = z
  .string()
  .regex(/^wsb-[0-9a-z]{8,63}$/)
  .openapi('BundleId')

const BundleOwnerSchema = z.string().openapi('BundleOwner')

const RootStorageSchema = z
  .object({
    Capacity: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The size of the root volume.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the root volume for a WorkSpace bundle.', required: [] })
  .openapi('RootStorage')

const UserStorageSchema = z
  .object({
    Capacity: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The size of the user volume.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the user volume for a WorkSpace bundle.', required: [] })
  .openapi('UserStorage')

const ComputeSchema = z
  .enum([
    'VALUE',
    'STANDARD',
    'PERFORMANCE',
    'POWER',
    'GRAPHICS',
    'POWERPRO',
    'GRAPHICSPRO',
    'GRAPHICS_G4DN',
    'GRAPHICSPRO_G4DN',
  ])
  .openapi('Compute')

const ComputeTypeSchema = z
  .object({
    Name: ComputeSchema.and(z.any().openapi({ description: 'The compute type.' })).exactOptional(),
  })
  .openapi({ description: 'Describes the compute type of the bundle.', required: [] })
  .openapi('ComputeType')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const WorkspaceBundleStateSchema = z
  .enum(['AVAILABLE', 'PENDING', 'ERROR'])
  .openapi('WorkspaceBundleState')

const BundleTypeSchema = z.enum(['REGULAR', 'STANDBY']).openapi('BundleType')

const WorkspaceBundleSchema = z
  .object({
    BundleId: BundleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the bundle.' }),
    ).exactOptional(),
    Name: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the bundle.' }),
    ).exactOptional(),
    Owner: BundleOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the bundle. This is the account identifier of the owner, or <code>AMAZON</code> if the bundle is provided by Amazon Web Services.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bundle.' }),
    ).exactOptional(),
    ImageId: WorkspaceImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the image that was used to create the bundle.',
        }),
    ).exactOptional(),
    RootStorage: RootStorageSchema.and(
      z.any().openapi({ description: 'The size of the root volume.' }),
    ).exactOptional(),
    UserStorage: UserStorageSchema.and(
      z.any().openapi({ description: 'The size of the user volume.' }),
    ).exactOptional(),
    ComputeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute type of the bundle. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.',
        }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time that the bundle was updated.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the bundle was created.' }),
    ).exactOptional(),
    State: WorkspaceBundleStateSchema.and(
      z.any().openapi({ description: 'The state of the WorkSpace bundle.' }),
    ).exactOptional(),
    BundleType: BundleTypeSchema.and(
      z.any().openapi({ description: 'The type of WorkSpace bundle.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace bundle.', required: [] })
  .openapi('WorkspaceBundle')

const CreateWorkspaceBundleResultSchema = z
  .object({ WorkspaceBundle: WorkspaceBundleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateWorkspaceBundleResult')

const WorkspaceBundleNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_.\/()\\-]+$/)
  .min(1)
  .max(64)
  .openapi('WorkspaceBundleName')

const WorkspaceBundleDescriptionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_.\/() -]+$/)
  .min(1)
  .max(255)
  .openapi('WorkspaceBundleDescription')

const CreateWorkspaceBundleRequestSchema = z
  .object({
    BundleName: WorkspaceBundleNameSchema.and(
      z.any().openapi({ description: 'The name of the bundle.' }),
    ),
    BundleDescription: WorkspaceBundleDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bundle.' }),
    ),
    ImageId: WorkspaceImageIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the image that is used to create the bundle.' }),
    ),
    ComputeType: ComputeTypeSchema,
    UserStorage: UserStorageSchema,
    RootStorage: RootStorageSchema.exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The tags associated with the bundle.</p> <note> <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BundleName', 'BundleDescription', 'ImageId', 'ComputeType', 'UserStorage'],
    title: 'CreateWorkspaceBundleRequest',
  })
  .openapi('CreateWorkspaceBundleRequest')

const OperatingSystemTypeSchema = z.enum(['WINDOWS', 'LINUX']).openapi('OperatingSystemType')

const OperatingSystemSchema = z
  .object({
    Type: OperatingSystemTypeSchema.and(
      z.any().openapi({ description: 'The operating system.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The operating system that the image is running.', required: [] })
  .openapi('OperatingSystem')

const WorkspaceImageStateSchema = z
  .enum(['AVAILABLE', 'PENDING', 'ERROR'])
  .openapi('WorkspaceImageState')

const WorkspaceImageRequiredTenancySchema = z
  .enum(['DEFAULT', 'DEDICATED'])
  .openapi('WorkspaceImageRequiredTenancy')

const AwsAccountSchema = z
  .string()
  .regex(/^\d{12}$/)
  .openapi('AwsAccount')

const CreateWorkspaceImageResultSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the new WorkSpace image.' }),
    ).exactOptional(),
    Name: WorkspaceImageNameSchema.and(
      z.any().openapi({ description: 'The name of the image.' }),
    ).exactOptional(),
    Description: WorkspaceImageDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the image.' }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z.any().openapi({ description: 'The operating system that the image is running.' }),
    ).exactOptional(),
    State: WorkspaceImageStateSchema.and(
      z.any().openapi({ description: 'The availability status of the image.' }),
    ).exactOptional(),
    RequiredTenancy: WorkspaceImageRequiredTenancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to DEDICATED. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm"> Bring Your Own Windows Desktop Images.</a>.',
        }),
    ).exactOptional(),
    Created: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the image was created.' }),
    ).exactOptional(),
    OwnerAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Amazon Web Services account that owns the image.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkspaceImageResult')

const CreateWorkspaceImageRequestSchema = z
  .object({
    Name: WorkspaceImageNameSchema.and(
      z.any().openapi({ description: 'The name of the new WorkSpace image.' }),
    ),
    Description: WorkspaceImageDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the new WorkSpace image.' }),
    ),
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the source WorkSpace' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The tags that you want to add to the new WorkSpace image. To add tags when you're creating the image, you must create an IAM policy that grants your IAM user permission to use <code>workspaces:CreateTags</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Description', 'WorkspaceId'],
    title: 'CreateWorkspaceImageRequest',
  })
  .openapi('CreateWorkspaceImageRequest')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const RunningModeSchema = z.enum(['AUTO_STOP', 'ALWAYS_ON', 'MANUAL']).openapi('RunningMode')

const RunningModeAutoStopTimeoutInMinutesSchema = z
  .int()
  .openapi('RunningModeAutoStopTimeoutInMinutes')

const RootVolumeSizeGibSchema = z.int().openapi('RootVolumeSizeGib')

const UserVolumeSizeGibSchema = z.int().openapi('UserVolumeSizeGib')

const ProtocolSchema = z.enum(['PCOIP', 'WSP']).openapi('Protocol')

const ProtocolListSchema = z.array(ProtocolSchema).openapi('ProtocolList')

const WorkspacePropertiesSchema = z
  .object({
    RunningMode: RunningModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running Mode</a>.</p> <note> <p>The <code>MANUAL</code> value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>',
        }),
    ).exactOptional(),
    RunningModeAutoStopTimeoutInMinutes: RunningModeAutoStopTimeoutInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.',
        }),
    ).exactOptional(),
    RootVolumeSizeGib: RootVolumeSizeGibSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the root volume. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.',
        }),
    ).exactOptional(),
    UserVolumeSizeGib: UserVolumeSizeGibSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of the user storage. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.',
        }),
    ).exactOptional(),
    ComputeTypeName: ComputeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.',
        }),
    ).exactOptional(),
    Protocols: ProtocolListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-protocols.html"> Protocols for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Only available for WorkSpaces created with PCoIP bundles.</p> </li> <li> <p>The <code>Protocols</code> property is case sensitive. Ensure you use <code>PCOIP</code> or <code>WSP</code>.</p> </li> <li> <p>Unavailable for Windows 7 WorkSpaces and WorkSpaces using GPU-based bundles (Graphics, GraphicsPro, Graphics.g4dn, and GraphicsPro.g4dn).</p> </li> </ul> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace.', required: [] })
  .openapi('WorkspaceProperties')

const WorkspaceRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.',
        }),
    ),
    BundleId: BundleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.',
        }),
    ),
    VolumeEncryptionKey: VolumeEncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The symmetric KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.',
        }),
    ).exactOptional(),
    UserVolumeEncryptionEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the data stored on the user volume is encrypted.',
        }),
    ).exactOptional(),
    RootVolumeEncryptionEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the data stored on the root volume is encrypted.',
        }),
    ).exactOptional(),
    WorkspaceProperties: WorkspacePropertiesSchema.and(
      z.any().openapi({ description: 'The WorkSpace properties.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId', 'UserName', 'BundleId'],
    description: 'Describes the information used to create a WorkSpace.',
  })
  .openapi('WorkspaceRequest')

const ErrorTypeSchema = z.string().openapi('ErrorType')

const FailedCreateWorkspaceRequestSchema = z
  .object({
    WorkspaceRequest: WorkspaceRequestSchema.and(
      z.any().openapi({ description: 'Information about the WorkSpace.' }),
    ).exactOptional(),
    ErrorCode: ErrorTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The error code that is returned if the WorkSpace cannot be created.',
        }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the error message that is returned if the WorkSpace cannot be created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace that cannot be created.', required: [] })
  .openapi('FailedCreateWorkspaceRequest')

const FailedCreateWorkspaceRequestsSchema = z
  .array(FailedCreateWorkspaceRequestSchema)
  .openapi('FailedCreateWorkspaceRequests')

const IpAddressSchema = z.string().openapi('IpAddress')

const SubnetIdSchema = z
  .string()
  .regex(/^(subnet-([0-9a-f]{8}|[0-9a-f]{17}))$/)
  .min(15)
  .max(24)
  .openapi('SubnetId')

const ComputerNameSchema = z.string().openapi('ComputerName')

const ModificationResourceEnumSchema = z
  .enum(['ROOT_VOLUME', 'USER_VOLUME', 'COMPUTE_TYPE'])
  .openapi('ModificationResourceEnum')

const ModificationStateEnumSchema = z
  .enum(['UPDATE_INITIATED', 'UPDATE_IN_PROGRESS'])
  .openapi('ModificationStateEnum')

const ModificationStateSchema = z
  .object({
    Resource: ModificationResourceEnumSchema.and(
      z.any().openapi({ description: 'The resource.' }),
    ).exactOptional(),
    State: ModificationStateEnumSchema.and(
      z.any().openapi({ description: 'The modification state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace modification.', required: [] })
  .openapi('ModificationState')

const ModificationStateListSchema = z
  .array(ModificationStateSchema)
  .openapi('ModificationStateList')

const StandbyWorkspaceRelationshipTypeSchema = z
  .enum(['PRIMARY', 'STANDBY'])
  .openapi('StandbyWorkspaceRelationshipType')

const RelatedWorkspacePropertiesSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the related WorkSpace.' }),
    ).exactOptional(),
    Region: RegionSchema.and(
      z.any().openapi({ description: 'The Region of the related WorkSpace.' }),
    ).exactOptional(),
    State: WorkspaceStateSchema.and(
      z.any().openapi({ description: 'Indicates the state of the WorkSpace.' }),
    ).exactOptional(),
    Type: StandbyWorkspaceRelationshipTypeSchema.and(
      z.any().openapi({ description: 'Indicates the type of WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace.',
    required: [],
  })
  .openapi('RelatedWorkspaceProperties')

const RelatedWorkspacesSchema = z
  .array(RelatedWorkspacePropertiesSchema)
  .openapi('RelatedWorkspaces')

const WorkspaceSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ).exactOptional(),
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Directory Service directory for the WorkSpace.',
        }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z.any().openapi({ description: 'The user for the WorkSpace.' }),
    ).exactOptional(),
    IpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The IP address of the WorkSpace.' }),
    ).exactOptional(),
    State: WorkspaceStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operational state of the WorkSpace.</p> <note> <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn\'t returned, then the WorkSpace has been successfully terminated.</p> </note>',
        }),
    ).exactOptional(),
    BundleId: BundleIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bundle used to create the WorkSpace.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The identifier of the subnet for the WorkSpace.' }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the error message that is returned if the WorkSpace cannot be created.',
        }),
    ).exactOptional(),
    ErrorCode: WorkspaceErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The error code that is returned if the WorkSpace cannot be created.',
        }),
    ).exactOptional(),
    ComputerName: ComputerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the WorkSpace, as seen by the operating system. The format of this name varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a WorkSpace</a>. ',
        }),
    ).exactOptional(),
    VolumeEncryptionKey: VolumeEncryptionKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The symmetric KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.',
        }),
    ).exactOptional(),
    UserVolumeEncryptionEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the data stored on the user volume is encrypted.',
        }),
    ).exactOptional(),
    RootVolumeEncryptionEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the data stored on the root volume is encrypted.',
        }),
    ).exactOptional(),
    WorkspaceProperties: WorkspacePropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the WorkSpace.' }),
    ).exactOptional(),
    ModificationStates: ModificationStateListSchema.and(
      z.any().openapi({ description: 'The modification states of the WorkSpace.' }),
    ).exactOptional(),
    RelatedWorkspaces: RelatedWorkspacesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace.', required: [] })
  .openapi('Workspace')

const WorkspaceListSchema = z.array(WorkspaceSchema).openapi('WorkspaceList')

const CreateWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedCreateWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpaces that could not be created.' }),
    ).exactOptional(),
    PendingRequests: WorkspaceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the WorkSpaces that were created.</p> <p>Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned can be incomplete.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkspacesResult')

const WorkspaceRequestListSchema = z
  .array(WorkspaceRequestSchema)
  .min(1)
  .max(25)
  .openapi('WorkspaceRequestList')

const CreateWorkspacesRequestSchema = z
  .object({
    Workspaces: WorkspaceRequestListSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkSpaces to create. You can specify up to 25 WorkSpaces.' }),
    ),
  })
  .openapi({ required: ['Workspaces'], title: 'CreateWorkspacesRequest' })
  .openapi('CreateWorkspacesRequest')

const DeleteClientBrandingResultSchema = z.object({}).openapi('DeleteClientBrandingResult')

const ClientDeviceTypeSchema = z
  .enum([
    'DeviceTypeWindows',
    'DeviceTypeOsx',
    'DeviceTypeAndroid',
    'DeviceTypeIos',
    'DeviceTypeLinux',
    'DeviceTypeWeb',
  ])
  .openapi('ClientDeviceType')

const ClientDeviceTypeListSchema = z
  .array(ClientDeviceTypeSchema)
  .min(1)
  .max(6)
  .openapi('ClientDeviceTypeList')

const DeleteClientBrandingRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory identifier of the WorkSpace for which you want to delete client branding.',
        }),
    ),
    Platforms: ClientDeviceTypeListSchema.and(
      z
        .any()
        .openapi({ description: 'The device type for which you want to delete client branding.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Platforms'], title: 'DeleteClientBrandingRequest' })
  .openapi('DeleteClientBrandingRequest')

const DeleteConnectClientAddInResultSchema = z.object({}).openapi('DeleteConnectClientAddInResult')

const DeleteConnectClientAddInRequestSchema = z
  .object({
    AddInId: AmazonUuidSchema.and(
      z.any().openapi({ description: 'The identifier of the client add-in to delete.' }),
    ),
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which the client add-in is configured.',
        }),
    ),
  })
  .openapi({ required: ['AddInId', 'ResourceId'], title: 'DeleteConnectClientAddInRequest' })
  .openapi('DeleteConnectClientAddInRequest')

const DeleteConnectionAliasResultSchema = z.object({}).openapi('DeleteConnectionAliasResult')

const DeleteConnectionAliasRequestSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias to delete.' }),
    ),
  })
  .openapi({ required: ['AliasId'], title: 'DeleteConnectionAliasRequest' })
  .openapi('DeleteConnectionAliasRequest')

const DeleteIpGroupResultSchema = z.object({}).openapi('DeleteIpGroupResult')

const DeleteIpGroupRequestSchema = z
  .object({
    GroupId: IpGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the IP access control group.' }),
    ),
  })
  .openapi({ required: ['GroupId'], title: 'DeleteIpGroupRequest' })
  .openapi('DeleteIpGroupRequest')

const DeleteTagsResultSchema = z.object({}).openapi('DeleteTagsResult')

const TagKeyListSchema = z.array(NonEmptyStringSchema).openapi('TagKeyList')

const DeleteTagsRequestSchema = z
  .object({
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['ResourceId', 'TagKeys'], title: 'DeleteTagsRequest' })
  .openapi('DeleteTagsRequest')

const DeleteWorkspaceBundleResultSchema = z.object({}).openapi('DeleteWorkspaceBundleResult')

const DeleteWorkspaceBundleRequestSchema = z
  .object({
    BundleId: BundleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the bundle.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteWorkspaceBundleRequest', required: [] })
  .openapi('DeleteWorkspaceBundleRequest')

const DeleteWorkspaceImageResultSchema = z.object({}).openapi('DeleteWorkspaceImageResult')

const DeleteWorkspaceImageRequestSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ),
  })
  .openapi({ required: ['ImageId'], title: 'DeleteWorkspaceImageRequest' })
  .openapi('DeleteWorkspaceImageRequest')

const DeregisterWorkspaceDirectoryResultSchema = z
  .object({})
  .openapi('DeregisterWorkspaceDirectoryResult')

const DeregisterWorkspaceDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory. If any WorkSpaces are registered to this directory, you must remove them before you deregister the directory, or you will receive an OperationNotSupportedException error.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryId'], title: 'DeregisterWorkspaceDirectoryRequest' })
  .openapi('DeregisterWorkspaceDirectoryRequest')

const DedicatedTenancySupportResultEnumSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('DedicatedTenancySupportResultEnum')

const DedicatedTenancyManagementCidrRangeSchema = z
  .string()
  .regex(
    /(^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.0\.0)(\/(16$))$/,
  )
  .openapi('DedicatedTenancyManagementCidrRange')

const DescribeAccountResultSchema = z
  .object({
    DedicatedTenancySupport: DedicatedTenancySupportResultEnumSchema.and(
      z.any().openapi({ description: 'The status of BYOL (whether BYOL is enabled or disabled).' }),
    ).exactOptional(),
    DedicatedTenancyManagementCidrRange: DedicatedTenancyManagementCidrRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address range, specified as an IPv4 CIDR block, used for the management network interface.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountResult')

const DescribeAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAccountRequest' })
  .openapi('DescribeAccountRequest')

const DedicatedTenancyModificationStateEnumSchema = z
  .enum(['PENDING', 'COMPLETED', 'FAILED'])
  .openapi('DedicatedTenancyModificationStateEnum')

const AccountModificationSchema = z
  .object({
    ModificationState: DedicatedTenancyModificationStateEnumSchema.and(
      z
        .any()
        .openapi({ description: 'The state of the modification to the configuration of BYOL.' }),
    ).exactOptional(),
    DedicatedTenancySupport: DedicatedTenancySupportResultEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of BYOL (whether BYOL is being enabled or disabled).',
        }),
    ).exactOptional(),
    DedicatedTenancyManagementCidrRange: DedicatedTenancyManagementCidrRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address range, specified as an IPv4 CIDR block, for the management network interface used for the account.',
        }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the modification of the BYOL configuration was started.',
        }),
    ).exactOptional(),
    ErrorCode: WorkspaceErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code that is returned if the configuration of BYOL cannot be modified.',
        }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the error message that is returned if the configuration of BYOL cannot be modified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. ',
    required: [],
  })
  .openapi('AccountModification')

const AccountModificationListSchema = z
  .array(AccountModificationSchema)
  .openapi('AccountModificationList')

const PaginationTokenSchema = z.string().min(1).max(2048).openapi('PaginationToken')

const DescribeAccountModificationsResultSchema = z
  .object({
    AccountModifications: AccountModificationListSchema.and(
      z.any().openapi({ description: 'The list of modifications to the configuration of BYOL.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountModificationsResult')

const DescribeAccountModificationsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAccountModificationsRequest', required: [] })
  .openapi('DescribeAccountModificationsRequest')

const ClientUrlSchema = z
  .string()
  .regex(/^(http|https)\:\/\/\S+/)
  .min(1)
  .max(200)
  .openapi('ClientUrl')

const ClientEmailSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  .min(6)
  .max(64)
  .openapi('ClientEmail')

const LoginMessageSchema: z.ZodType<LoginMessageType> = z
  .lazy(() => z.record(z.string(), ClientLoginMessageSchema))
  .openapi('LoginMessage')

const DefaultClientBrandingAttributesSchema = z
  .object({
    LogoUrl: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.',
        }),
    ).exactOptional(),
    SupportEmail: ClientEmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support email. The company's customer support email address.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SupportLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support link. The link for the company's customer support page for their WorkSpace.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive.You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ForgotPasswordLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.',
        }),
    ).exactOptional(),
    LoginMessage: LoginMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Returns default client branding attributes that were imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you don't include sensitive information.</p> </important>",
    required: [],
  })
  .openapi('DefaultClientBrandingAttributes')

const IosClientBrandingAttributesSchema = z
  .object({
    LogoUrl: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The logo. This is the standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal to one point. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.',
        }),
    ).exactOptional(),
    Logo2xUrl: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The @2x version of the logo. This is the higher resolution display that offers a scale factor of 2.0 (or @2x). The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p> <note> <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface Guidelines</i>.</p> </note>',
        }),
    ).exactOptional(),
    Logo3xUrl: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The @3x version of the logo. This is the higher resolution display that offers a scale factor of 3.0 (or @3x).The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p> <note> <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface Guidelines</i>.</p> </note>',
        }),
    ).exactOptional(),
    SupportEmail: ClientEmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support email. The company's customer support email address.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SupportLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support link. The link for the company's customer support page for their WorkSpace.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ForgotPasswordLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.',
        }),
    ).exactOptional(),
    LoginMessage: LoginMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>',
    required: [],
  })
  .openapi('IosClientBrandingAttributes')

const DescribeClientBrandingResultSchema = z
  .object({
    DeviceTypeWindows: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for Windows devices.' }),
    ).exactOptional(),
    DeviceTypeOsx: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for macOS devices.' }),
    ).exactOptional(),
    DeviceTypeAndroid: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for Android devices.' }),
    ).exactOptional(),
    DeviceTypeIos: IosClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for iOS devices.' }),
    ).exactOptional(),
    DeviceTypeLinux: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for Linux devices.' }),
    ).exactOptional(),
    DeviceTypeWeb: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information for Web access.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClientBrandingResult')

const DescribeClientBrandingRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory identifier of the WorkSpace for which you want to view client branding information.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId'], title: 'DescribeClientBrandingRequest' })
  .openapi('DescribeClientBrandingRequest')

const ReconnectEnumSchema = z.enum(['ENABLED', 'DISABLED']).openapi('ReconnectEnum')

const LogUploadEnumSchema = z.enum(['ENABLED', 'DISABLED']).openapi('LogUploadEnum')

const ClientPropertiesSchema = z
  .object({
    ReconnectEnabled: ReconnectEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether users can cache their credentials on the Amazon WorkSpaces client. When enabled, users can choose to reconnect to their WorkSpaces without re-entering their credentials. ',
        }),
    ).exactOptional(),
    LogUploadEnabled: LogUploadEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to WorkSpaces to troubleshoot issues when using the WorkSpaces client. When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all users in the specified directory.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon WorkSpaces client.', required: [] })
  .openapi('ClientProperties')

const ClientPropertiesResultSchema = z
  .object({
    ResourceId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The resource identifier, in the form of a directory ID.' }),
    ).exactOptional(),
    ClientProperties: ClientPropertiesSchema.and(
      z.any().openapi({ description: 'Information about the Amazon WorkSpaces client.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the Amazon WorkSpaces client.', required: [] })
  .openapi('ClientPropertiesResult')

const ClientPropertiesListSchema = z
  .array(ClientPropertiesResultSchema)
  .openapi('ClientPropertiesList')

const DescribeClientPropertiesResultSchema = z
  .object({
    ClientPropertiesList: ClientPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the specified Amazon WorkSpaces clients.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClientPropertiesResult')

const ResourceIdListSchema = z.array(NonEmptyStringSchema).min(1).max(25).openapi('ResourceIdList')

const DescribeClientPropertiesRequestSchema = z
  .object({
    ResourceIds: ResourceIdListSchema.and(
      z.any().openapi({ description: 'The resource identifier, in the form of directory IDs.' }),
    ),
  })
  .openapi({ required: ['ResourceIds'], title: 'DescribeClientPropertiesRequest' })
  .openapi('DescribeClientPropertiesRequest')

const ConnectClientAddInSchema = z
  .object({
    AddInId: AmazonUuidSchema.and(
      z.any().openapi({ description: 'The client add-in identifier.' }),
    ).exactOptional(),
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which the client add-in is configured.',
        }),
    ).exactOptional(),
    Name: AddInNameSchema.and(
      z.any().openapi({ description: 'The name of the client add in.' }),
    ).exactOptional(),
    URL: AddInUrlSchema.and(
      z.any().openapi({ description: 'The endpoint URL of the client add-in.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon Connect client add-in.', required: [] })
  .openapi('ConnectClientAddIn')

const ConnectClientAddInListSchema = z
  .array(ConnectClientAddInSchema)
  .openapi('ConnectClientAddInList')

const DescribeConnectClientAddInsResultSchema = z
  .object({
    AddIns: ConnectClientAddInListSchema.and(
      z.any().openapi({ description: 'Information about client add-ins.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectClientAddInsResult')

const LimitSchema = z.int().min(1).max(25).openapi('Limit')

const DescribeConnectClientAddInsRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which the client add-in is configured.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'DescribeConnectClientAddInsRequest' })
  .openapi('DescribeConnectClientAddInsRequest')

const ConnectionAliasPermissionSchema = z
  .object({
    SharedAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon Web Services account that the connection alias is shared with.',
        }),
    ),
    AllowAssociation: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the specified Amazon Web Services account is allowed to associate the connection alias with a directory.',
        }),
    ),
  })
  .openapi({
    required: ['SharedAccountId', 'AllowAssociation'],
    description:
      'Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
  })
  .openapi('ConnectionAliasPermission')

const ConnectionAliasPermissionsSchema = z
  .array(ConnectionAliasPermissionSchema)
  .min(1)
  .max(25)
  .openapi('ConnectionAliasPermissions')

const DescribeConnectionAliasPermissionsResultSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias.' }),
    ).exactOptional(),
    ConnectionAliasPermissions: ConnectionAliasPermissionsSchema.and(
      z.any().openapi({ description: 'The permissions associated with a connection alias.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectionAliasPermissionsResult')

const DescribeConnectionAliasPermissionsRequestSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['AliasId'], title: 'DescribeConnectionAliasPermissionsRequest' })
  .openapi('DescribeConnectionAliasPermissionsRequest')

const ConnectionAliasStateSchema = z
  .enum(['CREATING', 'CREATED', 'DELETING'])
  .openapi('ConnectionAliasState')

const AssociationStatusSchema = z
  .enum([
    'NOT_ASSOCIATED',
    'ASSOCIATED_WITH_OWNER_ACCOUNT',
    'ASSOCIATED_WITH_SHARED_ACCOUNT',
    'PENDING_ASSOCIATION',
    'PENDING_DISASSOCIATION',
  ])
  .openapi('AssociationStatus')

const ConnectionAliasAssociationSchema = z
  .object({
    AssociationStatus: AssociationStatusSchema.and(
      z.any().openapi({ description: 'The association status of the connection alias.' }),
    ).exactOptional(),
    AssociatedAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon Web Services account that associated the connection alias with a directory.',
        }),
    ).exactOptional(),
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory associated with a connection alias.',
        }),
    ).exactOptional(),
    ConnectionIdentifier: ConnectionIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
    required: [],
  })
  .openapi('ConnectionAliasAssociation')

const ConnectionAliasAssociationListSchema = z
  .array(ConnectionAliasAssociationSchema)
  .min(1)
  .max(25)
  .openapi('ConnectionAliasAssociationList')

const ConnectionAliasSchema = z
  .object({
    ConnectionString: ConnectionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connection string specified for the connection alias. The connection string must be in the form of a fully qualified domain name (FQDN), such as <code>www.example.com</code>.',
        }),
    ).exactOptional(),
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias.' }),
    ).exactOptional(),
    State: ConnectionAliasStateSchema.and(
      z.any().openapi({ description: 'The current state of the connection alias.' }),
    ).exactOptional(),
    OwnerAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon Web Services account that owns the connection alias.',
        }),
    ).exactOptional(),
    Associations: ConnectionAliasAssociationListSchema.and(
      z.any().openapi({ description: 'The association status of the connection alias.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
    required: [],
  })
  .openapi('ConnectionAlias')

const ConnectionAliasListSchema = z
  .array(ConnectionAliasSchema)
  .min(1)
  .max(25)
  .openapi('ConnectionAliasList')

const DescribeConnectionAliasesResultSchema = z
  .object({
    ConnectionAliases: ConnectionAliasListSchema.and(
      z.any().openapi({ description: 'Information about the specified connection aliases.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectionAliasesResult')

const ConnectionAliasIdListSchema = z
  .array(ConnectionAliasIdSchema)
  .min(1)
  .max(25)
  .openapi('ConnectionAliasIdList')

const DescribeConnectionAliasesRequestSchema = z
  .object({
    AliasIds: ConnectionAliasIdListSchema.and(
      z.any().openapi({ description: 'The identifiers of the connection aliases to describe.' }),
    ).exactOptional(),
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the directory associated with the connection alias.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of connection aliases to return.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConnectionAliasesRequest', required: [] })
  .openapi('DescribeConnectionAliasesRequest')

const WorkspacesIpGroupSchema = z
  .object({
    groupId: IpGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of the group.' }),
    ).exactOptional(),
    groupName: IpGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    groupDesc: IpGroupDescSchema.and(
      z.any().openapi({ description: 'The description of the group.' }),
    ).exactOptional(),
    userRules: IpRuleListSchema.and(z.any().openapi({ description: 'The rules.' })).exactOptional(),
  })
  .openapi({ description: 'Describes an IP access control group.', required: [] })
  .openapi('WorkspacesIpGroup')

const WorkspacesIpGroupsListSchema = z
  .array(WorkspacesIpGroupSchema)
  .openapi('WorkspacesIpGroupsList')

const DescribeIpGroupsResultSchema = z
  .object({
    Result: WorkspacesIpGroupsListSchema.and(
      z.any().openapi({ description: 'Information about the IP access control groups.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeIpGroupsResult')

const DescribeIpGroupsRequestSchema = z
  .object({
    GroupIds: IpGroupIdListSchema.and(
      z.any().openapi({ description: 'The identifiers of one or more IP access control groups.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeIpGroupsRequest', required: [] })
  .openapi('DescribeIpGroupsRequest')

const DescribeTagsResultSchema = z
  .object({
    TagList: TagListSchema.and(z.any().openapi({ description: 'The tags.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTagsResult')

const DescribeTagsRequestSchema = z
  .object({
    ResourceId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId'], title: 'DescribeTagsRequest' })
  .openapi('DescribeTagsRequest')

const BundleListSchema = z.array(WorkspaceBundleSchema).openapi('BundleList')

const DescribeWorkspaceBundlesResultSchema = z
  .object({
    Bundles: BundleListSchema.and(
      z.any().openapi({ description: 'Information about the bundles.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. This token is valid for one day and must be used within that time frame.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspaceBundlesResult')

const BundleIdListSchema = z.array(BundleIdSchema).min(1).max(25).openapi('BundleIdList')

const DescribeWorkspaceBundlesRequestSchema = z
  .object({
    BundleIds: BundleIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the bundles. You cannot combine this parameter with any other filter.',
        }),
    ).exactOptional(),
    Owner: BundleOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The owner of the bundles. You cannot combine this parameter with any other filter.</p> <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>. To describe the bundles that belong to your account, don't specify a value.</p>",
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. (You received this token from a previous call.)',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeWorkspaceBundlesRequest', required: [] })
  .openapi('DescribeWorkspaceBundlesRequest')

const AliasSchema = z.string().openapi('Alias')

const DirectoryNameSchema = z.string().openapi('DirectoryName')

const RegistrationCodeSchema = z.string().min(1).max(20).openapi('RegistrationCode')

const SubnetIdsSchema = z.array(SubnetIdSchema).max(2).openapi('SubnetIds')

const DnsIpAddressesSchema = z.array(IpAddressSchema).openapi('DnsIpAddresses')

const ARNSchema = z
  .string()
  .regex(
    /^arn:aws:[A-Za-z0-9][A-za-z0-9_\/.-]{0,62}:[A-za-z0-9_\/.-]{0,63}:[A-za-z0-9_\/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_\/.-]{0,127}$/,
  )
  .openapi('ARN')

const WorkspaceDirectoryTypeSchema = z
  .enum(['SIMPLE_AD', 'AD_CONNECTOR'])
  .openapi('WorkspaceDirectoryType')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^(sg-([0-9a-f]{8}|[0-9a-f]{17}))$/)
  .min(11)
  .max(20)
  .openapi('SecurityGroupId')

const WorkspaceDirectoryStateSchema = z
  .enum(['REGISTERING', 'REGISTERED', 'DEREGISTERING', 'DEREGISTERED', 'ERROR'])
  .openapi('WorkspaceDirectoryState')

const DefaultOuSchema = z.string().openapi('DefaultOu')

const DefaultWorkspaceCreationPropertiesSchema = z
  .object({
    EnableWorkDocs: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the directory is enabled for Amazon WorkDocs.',
        }),
    ).exactOptional(),
    EnableInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. If enabled, the Elastic public IP address allows outbound internet access from your WorkSpaces when you’re using an internet gateway in the Amazon VPC in which your WorkSpaces are located. If you\'re using a Network Address Translation (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in public subnets and you manually assign them Elastic IP addresses, you should disable this setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces that you rebuild. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html"> Configure a VPC for Amazon WorkSpaces</a>.',
        }),
    ).exactOptional(),
    DefaultOu: DefaultOuSchema.and(
      z
        .any()
        .openapi({
          description:
            'The organizational unit (OU) in the directory for the WorkSpace machine accounts.',
        }),
    ).exactOptional(),
    CustomSecurityGroupId: SecurityGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the default security group to apply to WorkSpaces when they are created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security Groups for Your WorkSpaces</a>.',
        }),
    ).exactOptional(),
    UserEnabledAsLocalAdministrator: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether WorkSpace users are local administrators on their WorkSpaces.',
        }),
    ).exactOptional(),
    EnableMaintenanceMode: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace Maintenance</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.',
    required: [],
  })
  .openapi('DefaultWorkspaceCreationProperties')

const AccessPropertyValueSchema = z.enum(['ALLOW', 'DENY']).openapi('AccessPropertyValue')

const WorkspaceAccessPropertiesSchema = z
  .object({
    DeviceTypeWindows: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether users can use Windows clients to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeOsx: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users can use macOS clients to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeWeb: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users can access their WorkSpaces through a web browser.',
        }),
    ).exactOptional(),
    DeviceTypeIos: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users can use iOS devices to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeAndroid: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeChromeOs: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users can use Chromebooks to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeZeroClient: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether users can use zero client devices to access their WorkSpaces.',
        }),
    ).exactOptional(),
    DeviceTypeLinux: AccessPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users can use Linux clients to access their WorkSpaces.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.',
    required: [],
  })
  .openapi('WorkspaceAccessProperties')

const TenancySchema = z.enum(['DEDICATED', 'SHARED']).openapi('Tenancy')

const SelfservicePermissionsSchema = z
  .object({
    RestartWorkspace: ReconnectEnumSchema.and(
      z.any().openapi({ description: 'Specifies whether users can restart their WorkSpace.' }),
    ).exactOptional(),
    IncreaseVolumeSize: ReconnectEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether users can increase the volume size of the drives on their WorkSpace.',
        }),
    ).exactOptional(),
    ChangeComputeType: ReconnectEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether users can change the compute type (bundle) for their WorkSpace.',
        }),
    ).exactOptional(),
    SwitchRunningMode: ReconnectEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether users can switch the running mode of their WorkSpace.',
        }),
    ).exactOptional(),
    RebuildWorkspace: ReconnectEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether users can rebuild the operating system of a WorkSpace to its original state.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.',
    required: [],
  })
  .openapi('SelfservicePermissions')

const SamlStatusEnumSchema = z
  .enum(['DISABLED', 'ENABLED', 'ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK'])
  .openapi('SamlStatusEnum')

const SamlUserAccessUrlSchema = z
  .string()
  .regex(/^(http|https)\:\/\/\S+$/)
  .min(8)
  .max(200)
  .openapi('SamlUserAccessUrl')

const SamlPropertiesSchema = z
  .object({
    Status: SamlStatusEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the status of SAML 2.0 authentication. These statuses include the following.</p> <ul> <li> <p>If the setting is <code>DISABLED</code>, end users will be directed to login with their directory credentials.</p> </li> <li> <p>If the setting is <code>ENABLED</code>, end users will be directed to login via the user access URL. Users attempting to connect to WorkSpaces from a client application that does not support SAML 2.0 authentication will not be able to connect.</p> </li> <li> <p>If the setting is <code>ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK</code>, end users will be directed to login via the user access URL on supported client applications, but will not prevent clients that do not support SAML 2.0 authentication from connecting as if SAML 2.0 authentication was disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
    UserAccessUrl: SamlUserAccessUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP) bindings.',
        }),
    ).exactOptional(),
    RelayStateParameterName: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query parameter to the URL along with the relay state endpoint to return the user to the client application session.</p> <p>To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state URL. Consult your IdP documentation for more information.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.',
    required: [],
  })
  .openapi('SamlProperties')

const CertificateBasedAuthStatusEnumSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi('CertificateBasedAuthStatusEnum')

const CertificateAuthorityArnSchema = z
  .string()
  .regex(/arn:[\w+=\/,.@-]+:[\w+=\/,.@-]+:[\w+=\/,.@-]*:[0-9]*:[\w+=,.@-]+(\/[\w+=,.@-]+)*/)
  .min(5)
  .max(200)
  .openapi('CertificateAuthorityArn')

const CertificateBasedAuthPropertiesSchema = z
  .object({
    Status: CertificateBasedAuthStatusEnumSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the certificate-based authentication properties.' }),
    ).exactOptional(),
    CertificateAuthorityArn: CertificateAuthorityArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.',
    required: [],
  })
  .openapi('CertificateBasedAuthProperties')

const WorkspaceDirectorySchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The directory identifier.' }),
    ).exactOptional(),
    Alias: AliasSchema.and(
      z.any().openapi({ description: 'The directory alias.' }),
    ).exactOptional(),
    DirectoryName: DirectoryNameSchema.and(
      z.any().openapi({ description: 'The name of the directory.' }),
    ).exactOptional(),
    RegistrationCode: RegistrationCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'The identifiers of the subnets used with the directory.' }),
    ).exactOptional(),
    DnsIpAddresses: DnsIpAddressesSchema.and(
      z.any().openapi({ description: 'The IP addresses of the DNS servers for the directory.' }),
    ).exactOptional(),
    CustomerUserName: UserNameSchema.and(
      z.any().openapi({ description: 'The user name for the service account.' }),
    ).exactOptional(),
    IamRoleId: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.',
        }),
    ).exactOptional(),
    DirectoryType: WorkspaceDirectoryTypeSchema.and(
      z.any().openapi({ description: 'The directory type.' }),
    ).exactOptional(),
    WorkspaceSecurityGroupId: SecurityGroupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the security group that is assigned to new WorkSpaces.',
        }),
    ).exactOptional(),
    State: WorkspaceDirectoryStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the directory\'s registration with Amazon WorkSpaces. After a directory is deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the directory metadata is cleaned up, so this state is rarely returned. To confirm that a directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html"> DescribeWorkspaceDirectories</a>. If the directory ID isn\'t returned, then the directory has been successfully deregistered.',
        }),
    ).exactOptional(),
    WorkspaceCreationProperties: DefaultWorkspaceCreationPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The default creation properties for all WorkSpaces in the directory.',
        }),
    ).exactOptional(),
    ipGroupIds: IpGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the IP access control groups associated with the directory.',
        }),
    ).exactOptional(),
    WorkspaceAccessProperties: WorkspaceAccessPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The devices and operating systems that users can use to access WorkSpaces.',
        }),
    ).exactOptional(),
    Tenancy: TenancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the directory is dedicated or shared. To use Bring Your Own License (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.',
        }),
    ).exactOptional(),
    SelfservicePermissions: SelfservicePermissionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The default self-service permissions for WorkSpaces in the directory.',
        }),
    ).exactOptional(),
    SamlProperties: SamlPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.',
        }),
    ).exactOptional(),
    CertificateBasedAuthProperties: CertificateBasedAuthPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory for WorkSpaces login.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a directory that is used with Amazon WorkSpaces.',
    required: [],
  })
  .openapi('WorkspaceDirectory')

const DirectoryListSchema = z.array(WorkspaceDirectorySchema).openapi('DirectoryList')

const DescribeWorkspaceDirectoriesResultSchema = z
  .object({
    Directories: DirectoryListSchema.and(
      z.any().openapi({ description: 'Information about the directories.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspaceDirectoriesResult')

const DirectoryIdListSchema = z.array(DirectoryIdSchema).min(1).max(25).openapi('DirectoryIdList')

const DescribeWorkspaceDirectoriesRequestSchema = z
  .object({
    DirectoryIds: DirectoryIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the directories. If the value is null, all directories are retrieved.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of directories to return.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeWorkspaceDirectoriesRequest', required: [] })
  .openapi('DescribeWorkspaceDirectoriesRequest')

const ImagePermissionSchema = z
  .object({
    SharedAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Amazon Web Services account that an image has been shared with.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the Amazon Web Services accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.',
    required: [],
  })
  .openapi('ImagePermission')

const ImagePermissionsSchema = z.array(ImagePermissionSchema).openapi('ImagePermissions')

const DescribeWorkspaceImagePermissionsResultSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ).exactOptional(),
    ImagePermissions: ImagePermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the Amazon Web Services accounts that the image has been shared with.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspaceImagePermissionsResult')

const DescribeWorkspaceImagePermissionsRequestSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ImageId'], title: 'DescribeWorkspaceImagePermissionsRequest' })
  .openapi('DescribeWorkspaceImagePermissionsRequest')

const WorkspaceImageErrorCodeSchema = z.string().openapi('WorkspaceImageErrorCode')

const UpdateDescriptionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_.\/() -]+$/)
  .min(1)
  .max(255)
  .openapi('UpdateDescription')

const UpdateResultSchema = z
  .object({
    UpdateAvailable: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether updated drivers or other components are available for the specified WorkSpace image.',
        }),
    ).exactOptional(),
    Description: UpdateDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of whether updates for the WorkSpace image are pending or available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.</p> <note> <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p> </note>',
    required: [],
  })
  .openapi('UpdateResult')

const WorkspaceImageSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ).exactOptional(),
    Name: WorkspaceImageNameSchema.and(
      z.any().openapi({ description: 'The name of the image.' }),
    ).exactOptional(),
    Description: WorkspaceImageDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the image.' }),
    ).exactOptional(),
    OperatingSystem: OperatingSystemSchema.and(
      z.any().openapi({ description: 'The operating system that the image is running. ' }),
    ).exactOptional(),
    State: WorkspaceImageStateSchema.and(
      z.any().openapi({ description: 'The status of the image.' }),
    ).exactOptional(),
    RequiredTenancy: WorkspaceImageRequiredTenancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.',
        }),
    ).exactOptional(),
    ErrorCode: WorkspaceImageErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code that is returned for the image.' }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The text of the error message that is returned for the image.' }),
    ).exactOptional(),
    Created: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date of the image.',
        }),
    ).exactOptional(),
    OwnerAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Amazon Web Services account that owns the image.',
        }),
    ).exactOptional(),
    Updates: UpdateResultSchema.and(
      z
        .any()
        .openapi({
          description: 'The updates (if any) that are available for the specified image.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a WorkSpace image.', required: [] })
  .openapi('WorkspaceImage')

const WorkspaceImageListSchema = z.array(WorkspaceImageSchema).openapi('WorkspaceImageList')

const DescribeWorkspaceImagesResultSchema = z
  .object({
    Images: WorkspaceImageListSchema.and(
      z.any().openapi({ description: 'Information about the images.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspaceImagesResult')

const WorkspaceImageIdListSchema = z
  .array(WorkspaceImageIdSchema)
  .min(1)
  .max(25)
  .openapi('WorkspaceImageIdList')

const ImageTypeSchema = z.enum(['OWNED', 'SHARED']).openapi('ImageType')

const DescribeWorkspaceImagesRequestSchema = z
  .object({
    ImageIds: WorkspaceImageIdListSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ).exactOptional(),
    ImageType: ImageTypeSchema.and(
      z.any().openapi({ description: 'The type (owned or shared) of the image.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeWorkspaceImagesRequest', required: [] })
  .openapi('DescribeWorkspaceImagesRequest')

const SnapshotSchema = z
  .object({
    SnapshotTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the snapshot was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a snapshot.', required: [] })
  .openapi('Snapshot')

const SnapshotListSchema = z.array(SnapshotSchema).openapi('SnapshotList')

const DescribeWorkspaceSnapshotsResultSchema = z
  .object({
    RebuildSnapshots: SnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include the user volume.',
        }),
    ).exactOptional(),
    RestoreSnapshots: SnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the snapshots that can be used to restore a WorkSpace. These snapshots include both the root volume and the user volume.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspaceSnapshotsResult')

const DescribeWorkspaceSnapshotsRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
  })
  .openapi({ required: ['WorkspaceId'], title: 'DescribeWorkspaceSnapshotsRequest' })
  .openapi('DescribeWorkspaceSnapshotsRequest')

const DescribeWorkspacesResultSchema = z
  .object({
    Workspaces: WorkspaceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the WorkSpaces.</p> <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the returned information could be incomplete.</p>',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspacesResult')

const WorkspaceIdListSchema = z.array(WorkspaceIdSchema).min(1).max(25).openapi('WorkspaceIdList')

const DescribeWorkspacesRequestSchema = z
  .object({
    WorkspaceIds: WorkspaceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other filter.</p> <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>',
        }),
    ).exactOptional(),
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory. In addition, you can optionally specify a specific directory user (see <code>UserName</code>). You cannot combine this parameter with any other filter.',
        }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the directory user. You must specify this parameter with <code>DirectoryId</code>.',
        }),
    ).exactOptional(),
    BundleId: BundleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the bundle. All WorkSpaces that are created from this bundle are retrieved. You cannot combine this parameter with any other filter.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeWorkspacesRequest', required: [] })
  .openapi('DescribeWorkspacesRequest')

const ConnectionStateSchema = z
  .enum(['CONNECTED', 'DISCONNECTED', 'UNKNOWN'])
  .openapi('ConnectionState')

const WorkspaceConnectionStatusSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ).exactOptional(),
    ConnectionState: ConnectionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.',
        }),
    ).exactOptional(),
    ConnectionStateCheckTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the connection status check.' }),
    ).exactOptional(),
    LastKnownUserConnectionTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the last known user connection.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the connection status of a WorkSpace.', required: [] })
  .openapi('WorkspaceConnectionStatus')

const WorkspaceConnectionStatusListSchema = z
  .array(WorkspaceConnectionStatusSchema)
  .openapi('WorkspaceConnectionStatusList')

const DescribeWorkspacesConnectionStatusResultSchema = z
  .object({
    WorkspacesConnectionStatus: WorkspaceConnectionStatusListSchema.and(
      z.any().openapi({ description: 'Information about the connection status of the WorkSpace.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkspacesConnectionStatusResult')

const DescribeWorkspacesConnectionStatusRequestSchema = z
  .object({
    WorkspaceIds: WorkspaceIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeWorkspacesConnectionStatusRequest', required: [] })
  .openapi('DescribeWorkspacesConnectionStatusRequest')

const DisassociateConnectionAliasResultSchema = z
  .object({})
  .openapi('DisassociateConnectionAliasResult')

const DisassociateConnectionAliasRequestSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the connection alias to disassociate.' }),
    ),
  })
  .openapi({ required: ['AliasId'], title: 'DisassociateConnectionAliasRequest' })
  .openapi('DisassociateConnectionAliasRequest')

const DisassociateIpGroupsResultSchema = z.object({}).openapi('DisassociateIpGroupsResult')

const DisassociateIpGroupsRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    GroupIds: IpGroupIdListSchema.and(
      z.any().openapi({ description: 'The identifiers of one or more IP access control groups.' }),
    ),
  })
  .openapi({ required: ['DirectoryId', 'GroupIds'], title: 'DisassociateIpGroupsRequest' })
  .openapi('DisassociateIpGroupsRequest')

const ImportClientBrandingResultSchema = z
  .object({
    DeviceTypeWindows: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for Windows devices.' }),
    ).exactOptional(),
    DeviceTypeOsx: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for macOS devices.' }),
    ).exactOptional(),
    DeviceTypeAndroid: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for Android devices.' }),
    ).exactOptional(),
    DeviceTypeIos: IosClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for iOS devices.' }),
    ).exactOptional(),
    DeviceTypeLinux: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for Linux devices.' }),
    ).exactOptional(),
    DeviceTypeWeb: DefaultClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information configured for web access.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportClientBrandingResult')

const DefaultLogoSchema = z.string().min(1).max(1500000).openapi('DefaultLogo')

const DefaultImportClientBrandingAttributesSchema = z
  .object({
    Logo: DefaultLogoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.',
        }),
    ).exactOptional(),
    SupportEmail: ClientEmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support email. The company's customer support email address.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SupportLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support link. The link for the company's customer support page for their WorkSpace.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ForgotPasswordLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.',
        }),
    ).exactOptional(),
    LoginMessage: LoginMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The default client branding attributes to be imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you do not include sensitive information.</p> </important>',
    required: [],
  })
  .openapi('DefaultImportClientBrandingAttributes')

const IosLogoSchema = z.string().min(1).max(447000).openapi('IosLogo')

const Ios2XLogoSchema = z.string().min(1).max(1770000).openapi('Ios2XLogo')

const Ios3XLogoSchema = z.string().min(1).max(1770000).openapi('Ios3XLogo')

const IosImportClientBrandingAttributesSchema = z
  .object({
    Logo: IosLogoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The logo. This is the standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal to one point. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.',
        }),
    ).exactOptional(),
    Logo2x: Ios2XLogoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The @2x version of the logo. This is the higher resolution display that offers a scale factor of 2.0 (or @2x). The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p> <note> <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface Guidelines</i>.</p> </note>',
        }),
    ).exactOptional(),
    Logo3x: Ios3XLogoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The @3x version of the logo. This is the higher resolution display that offers a scale factor of 3.0 (or @3x). The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p> <note> <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface Guidelines</i>.</p> </note>',
        }),
    ).exactOptional(),
    SupportEmail: ClientEmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support email. The company's customer support email address.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SupportLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The support link. The link for the company's customer support page for their WorkSpace.</p> <note> <ul> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.</p> </li> <li> <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ForgotPasswordLink: ClientUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.',
        }),
    ).exactOptional(),
    LoginMessage: LoginMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>',
    required: [],
  })
  .openapi('IosImportClientBrandingAttributes')

const ImportClientBrandingRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory identifier of the WorkSpace for which you want to import client branding.',
        }),
    ),
    DeviceTypeWindows: DefaultImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for Windows devices.' }),
    ).exactOptional(),
    DeviceTypeOsx: DefaultImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for macOS devices.' }),
    ).exactOptional(),
    DeviceTypeAndroid: DefaultImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for Android devices.' }),
    ).exactOptional(),
    DeviceTypeIos: IosImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for iOS devices.' }),
    ).exactOptional(),
    DeviceTypeLinux: DefaultImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for Linux devices.' }),
    ).exactOptional(),
    DeviceTypeWeb: DefaultImportClientBrandingAttributesSchema.and(
      z.any().openapi({ description: 'The branding information to import for web access.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ImportClientBrandingRequest' })
  .openapi('ImportClientBrandingRequest')

const ImportWorkspaceImageResultSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace image.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportWorkspaceImageResult')

const Ec2ImageIdSchema = z
  .string()
  .regex(/^ami\-([a-f0-9]{8}|[a-f0-9]{17})$/)
  .openapi('Ec2ImageId')

const WorkspaceImageIngestionProcessSchema = z
  .enum([
    'BYOL_REGULAR',
    'BYOL_GRAPHICS',
    'BYOL_GRAPHICSPRO',
    'BYOL_GRAPHICS_G4DN',
    'BYOL_REGULAR_WSP',
    'BYOL_REGULAR_BYOP',
    'BYOL_GRAPHICS_G4DN_BYOP',
  ])
  .openapi('WorkspaceImageIngestionProcess')

const ApplicationSchema = z
  .enum(['Microsoft_Office_2016', 'Microsoft_Office_2019'])
  .openapi('Application')

const ApplicationListSchema = z.array(ApplicationSchema).min(1).max(5).openapi('ApplicationList')

const ImportWorkspaceImageRequestSchema = z
  .object({
    Ec2ImageId: Ec2ImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the EC2 image.' }),
    ),
    IngestionProcess: WorkspaceImageIngestionProcessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ingestion process to be used when importing the image, depending on which protocol you want to use for your BYOL Workspace image, either PCoIP, WorkSpaces Streaming Protocol (WSP), or bring your own protocol (BYOP). To use WSP, specify a value that ends in <code>_WSP</code>. To use PCoIP, specify a value that does not end in <code>_WSP</code>. To use BYOP, specify a value that ends in <code>_BYOP</code>.</p> <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify <code>BYOL_REGULAR</code>, <code>BYOL_REGULAR_WSP</code>, or <code>BYOL_REGULAR_BYOP</code>, depending on the protocol.</p> <note> <p>The <code>BYOL_REGULAR_BYOP</code> and <code>BYOL_GRAPHICS_G4DN_BYOP</code> values are only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use these values. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>',
        }),
    ),
    ImageName: WorkspaceImageNameSchema.and(
      z.any().openapi({ description: 'The name of the WorkSpace image.' }),
    ),
    ImageDescription: WorkspaceImageDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the WorkSpace image.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags. Each WorkSpaces resource can have a maximum of 50 tags.',
        }),
    ).exactOptional(),
    Applications: ApplicationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10 BYOL images. For more information about subscribing to Office for BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.</p> <note> <p>Although this parameter is an array, only one item is allowed at this time.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Ec2ImageId', 'IngestionProcess', 'ImageName', 'ImageDescription'],
    title: 'ImportWorkspaceImageRequest',
  })
  .openapi('ImportWorkspaceImageRequest')

const DedicatedTenancyCidrRangeListSchema = z
  .array(DedicatedTenancyManagementCidrRangeSchema)
  .openapi('DedicatedTenancyCidrRangeList')

const ListAvailableManagementCidrRangesResultSchema = z
  .object({
    ManagementCidrRanges: DedicatedTenancyCidrRangeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of available IP address ranges, specified as IPv4 CIDR blocks.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableManagementCidrRangesResult')

const ManagementCidrRangeConstraintSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/(3[0-2]|[1-2][0-9]|[0-9]))$/,
  )
  .openapi('ManagementCidrRangeConstraint')

const ManagementCidrRangeMaxResultsSchema = z
  .int()
  .min(1)
  .max(5)
  .openapi('ManagementCidrRangeMaxResults')

const ListAvailableManagementCidrRangesRequestSchema = z
  .object({
    ManagementCidrRangeConstraint: ManagementCidrRangeConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address range to search. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).',
        }),
    ),
    MaxResults: ManagementCidrRangeMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of items to return.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ManagementCidrRangeConstraint'],
    title: 'ListAvailableManagementCidrRangesRequest',
  })
  .openapi('ListAvailableManagementCidrRangesRequest')

const MigrateWorkspaceResultSchema = z
  .object({
    SourceWorkspaceId: WorkspaceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The original identifier of the WorkSpace that is being migrated.',
        }),
    ).exactOptional(),
    TargetWorkspaceId: WorkspaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new identifier of the WorkSpace that is being migrated. If the migration does not succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MigrateWorkspaceResult')

const MigrateWorkspaceRequestSchema = z
  .object({
    SourceWorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace to migrate from.' }),
    ),
    BundleId: BundleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the target bundle type to migrate the WorkSpace to.',
        }),
    ),
  })
  .openapi({ required: ['SourceWorkspaceId', 'BundleId'], title: 'MigrateWorkspaceRequest' })
  .openapi('MigrateWorkspaceRequest')

const OperationInProgressExceptionSchema = z.any().openapi('OperationInProgressException')

const ModifyAccountResultSchema = z.object({}).openapi('ModifyAccountResult')

const DedicatedTenancySupportEnumSchema = z
  .literal('ENABLED')
  .openapi('DedicatedTenancySupportEnum')

const ModifyAccountRequestSchema = z
  .object({
    DedicatedTenancySupport: DedicatedTenancySupportEnumSchema.and(
      z.any().openapi({ description: 'The status of BYOL.' }),
    ).exactOptional(),
    DedicatedTenancyManagementCidrRange: DedicatedTenancyManagementCidrRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address range, specified as an IPv4 CIDR block, for the management network interface. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be /16 (for example, 203.0.113.25/16). It must also be specified as available by the <code>ListAvailableManagementCidrRanges</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ModifyAccountRequest', required: [] })
  .openapi('ModifyAccountRequest')

const ModifyCertificateBasedAuthPropertiesResultSchema = z
  .object({})
  .openapi('ModifyCertificateBasedAuthPropertiesResult')

const DeletableCertificateBasedAuthPropertySchema = z
  .literal('CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN')
  .openapi('DeletableCertificateBasedAuthProperty')

const DeletableCertificateBasedAuthPropertiesListSchema = z
  .array(DeletableCertificateBasedAuthPropertySchema)
  .openapi('DeletableCertificateBasedAuthPropertiesList')

const ModifyCertificateBasedAuthPropertiesRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The resource identifiers, in the form of directory IDs.' }),
    ),
    CertificateBasedAuthProperties: CertificateBasedAuthPropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the certificate-based authentication.' }),
    ).exactOptional(),
    PropertiesToDelete: DeletableCertificateBasedAuthPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties of the certificate-based authentication you want to delete.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ModifyCertificateBasedAuthPropertiesRequest' })
  .openapi('ModifyCertificateBasedAuthPropertiesRequest')

const ModifyClientPropertiesResultSchema = z.object({}).openapi('ModifyClientPropertiesResult')

const ModifyClientPropertiesRequestSchema = z
  .object({
    ResourceId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The resource identifiers, in the form of directory IDs.' }),
    ),
    ClientProperties: ClientPropertiesSchema.and(
      z.any().openapi({ description: 'Information about the Amazon WorkSpaces client.' }),
    ),
  })
  .openapi({ required: ['ResourceId', 'ClientProperties'], title: 'ModifyClientPropertiesRequest' })
  .openapi('ModifyClientPropertiesRequest')

const ModifySamlPropertiesResultSchema = z.object({}).openapi('ModifySamlPropertiesResult')

const DeletableSamlPropertySchema = z
  .enum(['SAML_PROPERTIES_USER_ACCESS_URL', 'SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME'])
  .openapi('DeletableSamlProperty')

const DeletableSamlPropertiesListSchema = z
  .array(DeletableSamlPropertySchema)
  .openapi('DeletableSamlPropertiesList')

const ModifySamlPropertiesRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which you want to configure SAML properties.',
        }),
    ),
    SamlProperties: SamlPropertiesSchema.and(
      z.any().openapi({ description: 'The properties for configuring SAML 2.0 authentication.' }),
    ).exactOptional(),
    PropertiesToDelete: DeletableSamlPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The SAML properties to delete as part of your request.</p> <p>Specify one of the following options:</p> <ul> <li> <p> <code>SAML_PROPERTIES_USER_ACCESS_URL</code> to delete the user access URL.</p> </li> <li> <p> <code>SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME</code> to delete the relay state parameter name.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ModifySamlPropertiesRequest' })
  .openapi('ModifySamlPropertiesRequest')

const ModifySelfservicePermissionsResultSchema = z
  .object({})
  .openapi('ModifySelfservicePermissionsResult')

const ModifySelfservicePermissionsRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    SelfservicePermissions: SelfservicePermissionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The permissions to enable or disable self-service capabilities.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'SelfservicePermissions'],
    title: 'ModifySelfservicePermissionsRequest',
  })
  .openapi('ModifySelfservicePermissionsRequest')

const ModifyWorkspaceAccessPropertiesResultSchema = z
  .object({})
  .openapi('ModifyWorkspaceAccessPropertiesResult')

const ModifyWorkspaceAccessPropertiesRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    WorkspaceAccessProperties: WorkspaceAccessPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The device types and operating systems to enable or disable for access.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'WorkspaceAccessProperties'],
    title: 'ModifyWorkspaceAccessPropertiesRequest',
  })
  .openapi('ModifyWorkspaceAccessPropertiesRequest')

const ModifyWorkspaceCreationPropertiesResultSchema = z
  .object({})
  .openapi('ModifyWorkspaceCreationPropertiesResult')

const WorkspaceCreationPropertiesSchema = z
  .object({
    EnableWorkDocs: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p> <note> <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new WorkSpaces launched in the directory will not have WorkDocs enabled. However, WorkDocs remains enabled for any existing WorkSpaces, unless you either disable users\' access to WorkDocs or you delete the WorkDocs site. To disable users\' access to WorkDocs, see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the <i>Amazon WorkDocs Administration Guide</i>. To delete a WorkDocs site, see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the <i>Amazon WorkDocs Administration Guide</i>.</p> <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the existing WorkSpaces and any new WorkSpaces that are launched in the directory will have WorkDocs enabled.</p> </note>',
        }),
    ).exactOptional(),
    EnableInternetAccess: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether internet access is enabled for your WorkSpaces.',
        }),
    ).exactOptional(),
    DefaultOu: DefaultOuSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default organizational unit (OU) for your WorkSpaces directories. This string must be the full Lightweight Directory Access Protocol (LDAP) distinguished name for the target domain and OU. It must be in the form <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>, where <i>value</i> is any string of characters, and the number of domain components (DCs) is two or more. For example, <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p> <important> <ul> <li> <p>To avoid errors, certain characters in the distinguished name must be escaped. For more information, see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names"> Distinguished Names</a> in the Microsoft documentation.</p> </li> <li> <p>The API doesn\'t validate whether the OU exists.</p> </li> </ul> </important>',
        }),
    ).exactOptional(),
    CustomSecurityGroupId: SecurityGroupIdSchema.and(
      z.any().openapi({ description: 'The identifier of your custom security group.' }),
    ).exactOptional(),
    UserEnabledAsLocalAdministrator: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether users are local administrators of their WorkSpaces.',
        }),
    ).exactOptional(),
    EnableMaintenanceMode: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace Maintenance</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. ',
    required: [],
  })
  .openapi('WorkspaceCreationProperties')

const ModifyWorkspaceCreationPropertiesRequestSchema = z
  .object({
    ResourceId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The identifier of the directory.' }),
    ),
    WorkspaceCreationProperties: WorkspaceCreationPropertiesSchema.and(
      z.any().openapi({ description: 'The default properties for creating WorkSpaces.' }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'WorkspaceCreationProperties'],
    title: 'ModifyWorkspaceCreationPropertiesRequest',
  })
  .openapi('ModifyWorkspaceCreationPropertiesRequest')

const ModifyWorkspacePropertiesResultSchema = z
  .object({})
  .openapi('ModifyWorkspacePropertiesResult')

const ModifyWorkspacePropertiesRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
    WorkspaceProperties: WorkspacePropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the WorkSpace.' }),
    ),
  })
  .openapi({
    required: ['WorkspaceId', 'WorkspaceProperties'],
    title: 'ModifyWorkspacePropertiesRequest',
  })
  .openapi('ModifyWorkspacePropertiesRequest')

const UnsupportedWorkspaceConfigurationExceptionSchema = z
  .any()
  .openapi('UnsupportedWorkspaceConfigurationException')

const ModifyWorkspaceStateResultSchema = z.object({}).openapi('ModifyWorkspaceStateResult')

const TargetWorkspaceStateSchema = z
  .enum(['AVAILABLE', 'ADMIN_MAINTENANCE'])
  .openapi('TargetWorkspaceState')

const ModifyWorkspaceStateRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
    WorkspaceState: TargetWorkspaceStateSchema.and(
      z.any().openapi({ description: 'The WorkSpace state.' }),
    ),
  })
  .openapi({ required: ['WorkspaceId', 'WorkspaceState'], title: 'ModifyWorkspaceStateRequest' })
  .openapi('ModifyWorkspaceStateRequest')

const FailedWorkspaceChangeRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ).exactOptional(),
    ErrorCode: ErrorTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The error code that is returned if the WorkSpace cannot be rebooted.',
        }),
    ).exactOptional(),
    ErrorMessage: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the error message that is returned if the WorkSpace cannot be rebooted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).',
    required: [],
  })
  .openapi('FailedWorkspaceChangeRequest')

const FailedRebootWorkspaceRequestsSchema = z
  .array(FailedWorkspaceChangeRequestSchema)
  .openapi('FailedRebootWorkspaceRequests')

const RebootWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedRebootWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpaces that could not be rebooted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootWorkspacesResult')

const RebootRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
  })
  .openapi({
    required: ['WorkspaceId'],
    description: 'Describes the information used to reboot a WorkSpace.',
  })
  .openapi('RebootRequest')

const RebootWorkspaceRequestsSchema = z
  .array(RebootRequestSchema)
  .min(1)
  .max(25)
  .openapi('RebootWorkspaceRequests')

const RebootWorkspacesRequestSchema = z
  .object({
    RebootWorkspaceRequests: RebootWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.' }),
    ),
  })
  .openapi({ required: ['RebootWorkspaceRequests'], title: 'RebootWorkspacesRequest' })
  .openapi('RebootWorkspacesRequest')

const FailedRebuildWorkspaceRequestsSchema = z
  .array(FailedWorkspaceChangeRequestSchema)
  .openapi('FailedRebuildWorkspaceRequests')

const RebuildWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedRebuildWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpace that could not be rebuilt.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebuildWorkspacesResult')

const RebuildRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
  })
  .openapi({
    required: ['WorkspaceId'],
    description: 'Describes the information used to rebuild a WorkSpace.',
  })
  .openapi('RebuildRequest')

const RebuildWorkspaceRequestsSchema = z
  .array(RebuildRequestSchema)
  .length(1)
  .openapi('RebuildWorkspaceRequests')

const RebuildWorkspacesRequestSchema = z
  .object({
    RebuildWorkspaceRequests: RebuildWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkSpace to rebuild. You can specify a single WorkSpace.' }),
    ),
  })
  .openapi({ required: ['RebuildWorkspaceRequests'], title: 'RebuildWorkspacesRequest' })
  .openapi('RebuildWorkspacesRequest')

const RegisterWorkspaceDirectoryResultSchema = z
  .object({})
  .openapi('RegisterWorkspaceDirectoryResult')

const RegisterWorkspaceDirectoryRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the directory. You cannot register a directory if it does not have a status of Active. If the directory does not have a status of Active, you will receive an InvalidResourceStateException error. If you have already registered the maximum number of directories that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error. Deregister directories that you are not using for WorkSpaces, and try again.',
        }),
    ),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these conditions are not met, you will receive an OperationNotSupportedException error.',
        }),
    ).exactOptional(),
    EnableWorkDocs: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this parameter and WorkDocs is not available in the Region, you will receive an OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try again.',
        }),
    ),
    EnableSelfService: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether self-service capabilities are enabled or disabled.',
        }),
    ).exactOptional(),
    Tenancy: TenancySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for BYOL, you will receive an InvalidParameterValuesException error. For more information about BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the directory.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DirectoryId', 'EnableWorkDocs'],
    title: 'RegisterWorkspaceDirectoryRequest',
  })
  .openapi('RegisterWorkspaceDirectoryRequest')

const WorkspacesDefaultRoleNotFoundExceptionSchema = z
  .any()
  .openapi('WorkspacesDefaultRoleNotFoundException')

const UnsupportedNetworkConfigurationExceptionSchema = z
  .any()
  .openapi('UnsupportedNetworkConfigurationException')

const RestoreWorkspaceResultSchema = z.object({}).openapi('RestoreWorkspaceResult')

const RestoreWorkspaceRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
  })
  .openapi({ required: ['WorkspaceId'], title: 'RestoreWorkspaceRequest' })
  .openapi('RestoreWorkspaceRequest')

const RevokeIpRulesResultSchema = z.object({}).openapi('RevokeIpRulesResult')

const IpRevokedRuleListSchema = z.array(IpRuleSchema).openapi('IpRevokedRuleList')

const RevokeIpRulesRequestSchema = z
  .object({
    GroupId: IpGroupIdSchema.and(z.any().openapi({ description: 'The identifier of the group.' })),
    UserRules: IpRevokedRuleListSchema.and(
      z.any().openapi({ description: 'The rules to remove from the group.' }),
    ),
  })
  .openapi({ required: ['GroupId', 'UserRules'], title: 'RevokeIpRulesRequest' })
  .openapi('RevokeIpRulesRequest')

const FailedStartWorkspaceRequestsSchema = z
  .array(FailedWorkspaceChangeRequestSchema)
  .openapi('FailedStartWorkspaceRequests')

const StartWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedStartWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpaces that could not be started.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartWorkspacesResult')

const StartRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information used to start a WorkSpace.', required: [] })
  .openapi('StartRequest')

const StartWorkspaceRequestsSchema = z
  .array(StartRequestSchema)
  .min(1)
  .max(25)
  .openapi('StartWorkspaceRequests')

const StartWorkspacesRequestSchema = z
  .object({
    StartWorkspaceRequests: StartWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkSpaces to start. You can specify up to 25 WorkSpaces.' }),
    ),
  })
  .openapi({ required: ['StartWorkspaceRequests'], title: 'StartWorkspacesRequest' })
  .openapi('StartWorkspacesRequest')

const FailedStopWorkspaceRequestsSchema = z
  .array(FailedWorkspaceChangeRequestSchema)
  .openapi('FailedStopWorkspaceRequests')

const StopWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedStopWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpaces that could not be stopped.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopWorkspacesResult')

const StopRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the information used to stop a WorkSpace.', required: [] })
  .openapi('StopRequest')

const StopWorkspaceRequestsSchema = z
  .array(StopRequestSchema)
  .min(1)
  .max(25)
  .openapi('StopWorkspaceRequests')

const StopWorkspacesRequestSchema = z
  .object({
    StopWorkspaceRequests: StopWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkSpaces to stop. You can specify up to 25 WorkSpaces.' }),
    ),
  })
  .openapi({ required: ['StopWorkspaceRequests'], title: 'StopWorkspacesRequest' })
  .openapi('StopWorkspacesRequest')

const FailedTerminateWorkspaceRequestsSchema = z
  .array(FailedWorkspaceChangeRequestSchema)
  .openapi('FailedTerminateWorkspaceRequests')

const TerminateWorkspacesResultSchema = z
  .object({
    FailedRequests: FailedTerminateWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the WorkSpaces that could not be terminated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TerminateWorkspacesResult')

const TerminateRequestSchema = z
  .object({
    WorkspaceId: WorkspaceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the WorkSpace.' }),
    ),
  })
  .openapi({
    required: ['WorkspaceId'],
    description: 'Describes the information used to terminate a WorkSpace.',
  })
  .openapi('TerminateRequest')

const TerminateWorkspaceRequestsSchema = z
  .array(TerminateRequestSchema)
  .min(1)
  .max(25)
  .openapi('TerminateWorkspaceRequests')

const TerminateWorkspacesRequestSchema = z
  .object({
    TerminateWorkspaceRequests: TerminateWorkspaceRequestsSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.',
        }),
    ),
  })
  .openapi({ required: ['TerminateWorkspaceRequests'], title: 'TerminateWorkspacesRequest' })
  .openapi('TerminateWorkspacesRequest')

const UpdateConnectClientAddInResultSchema = z.object({}).openapi('UpdateConnectClientAddInResult')

const UpdateConnectClientAddInRequestSchema = z
  .object({
    AddInId: AmazonUuidSchema.and(
      z.any().openapi({ description: 'The identifier of the client add-in to update.' }),
    ),
    ResourceId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The directory identifier for which the client add-in is configured.',
        }),
    ),
    Name: AddInNameSchema.and(
      z.any().openapi({ description: 'The name of the client add-in.' }),
    ).exactOptional(),
    URL: AddInUrlSchema.and(
      z.any().openapi({ description: 'The endpoint URL of the Amazon Connect client add-in.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['AddInId', 'ResourceId'], title: 'UpdateConnectClientAddInRequest' })
  .openapi('UpdateConnectClientAddInRequest')

const UpdateConnectionAliasPermissionResultSchema = z
  .object({})
  .openapi('UpdateConnectionAliasPermissionResult')

const UpdateConnectionAliasPermissionRequestSchema = z
  .object({
    AliasId: ConnectionAliasIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the connection alias that you want to update permissions for.',
        }),
    ),
    ConnectionAliasPermission: ConnectionAliasPermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['AliasId', 'ConnectionAliasPermission'],
    title: 'UpdateConnectionAliasPermissionRequest',
  })
  .openapi('UpdateConnectionAliasPermissionRequest')

const UpdateRulesOfIpGroupResultSchema = z.object({}).openapi('UpdateRulesOfIpGroupResult')

const UpdateRulesOfIpGroupRequestSchema = z
  .object({
    GroupId: IpGroupIdSchema.and(z.any().openapi({ description: 'The identifier of the group.' })),
    UserRules: IpRuleListSchema.and(z.any().openapi({ description: 'One or more rules.' })),
  })
  .openapi({ required: ['GroupId', 'UserRules'], title: 'UpdateRulesOfIpGroupRequest' })
  .openapi('UpdateRulesOfIpGroupRequest')

const UpdateWorkspaceBundleResultSchema = z.object({}).openapi('UpdateWorkspaceBundleResult')

const UpdateWorkspaceBundleRequestSchema = z
  .object({
    BundleId: BundleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the bundle.' }),
    ).exactOptional(),
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateWorkspaceBundleRequest', required: [] })
  .openapi('UpdateWorkspaceBundleRequest')

const UpdateWorkspaceImagePermissionResultSchema = z
  .object({})
  .openapi('UpdateWorkspaceImagePermissionResult')

const UpdateWorkspaceImagePermissionRequestSchema = z
  .object({
    ImageId: WorkspaceImageIdSchema.and(
      z.any().openapi({ description: 'The identifier of the image.' }),
    ),
    AllowCopyImage: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permission to copy the image. This permission can be revoked only after an image has been shared.',
        }),
    ),
    SharedAccountId: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the Amazon Web Services account to share or unshare the image with.</p> <important> <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p> </important>',
        }),
    ),
  })
  .openapi({
    required: ['ImageId', 'AllowCopyImage', 'SharedAccountId'],
    title: 'UpdateWorkspaceImagePermissionRequest',
  })
  .openapi('UpdateWorkspaceImagePermissionRequest')

const ClientLocaleSchema = z
  .string()
  .regex(/^[a-z]{2}_[A-Z]{2}$/)
  .length(5)
  .openapi('ClientLocale')

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

export const postXAmzTargetWorkspacesServiceAssociateConnectionAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias',
  description:
    '<p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>',
  operationId: 'AssociateConnectionAlias',
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
        .literal('WorkspacesService.AssociateConnectionAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.AssociateConnectionAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateConnectionAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateConnectionAliasResultSchema } },
    },
    480: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
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
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    485: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceAssociateIpGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.AssociateIpGroups',
  description: 'Associates the specified IP access control group with the specified directory.',
  operationId: 'AssociateIpGroups',
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
        .literal('WorkspacesService.AssociateIpGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.AssociateIpGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateIpGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateIpGroupsResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceAuthorizeIpRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.AuthorizeIpRules',
  description:
    '<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>',
  operationId: 'AuthorizeIpRules',
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
        .literal('WorkspacesService.AuthorizeIpRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.AuthorizeIpRules'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AuthorizeIpRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuthorizeIpRulesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCopyWorkspaceImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage',
  description:
    '<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>',
  operationId: 'CopyWorkspaceImage',
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
        .literal('WorkspacesService.CopyWorkspaceImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CopyWorkspaceImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CopyWorkspaceImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyWorkspaceImageResultSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateConnectClientAddInRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn',
  description:
    '<p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>',
  operationId: 'CreateConnectClientAddIn',
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
        .literal('WorkspacesService.CreateConnectClientAddIn')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateConnectClientAddIn'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectClientAddInRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectClientAddInResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceCreationFailedException',
      content: { 'application/json': { schema: ResourceCreationFailedExceptionSchema } },
    },
    483: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateConnectionAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateConnectionAlias',
  description:
    'Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
  operationId: 'CreateConnectionAlias',
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
        .literal('WorkspacesService.CreateConnectionAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateConnectionAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectionAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectionAliasResultSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    483: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    485: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateIpGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateIpGroup',
  description:
    "<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>",
  operationId: 'CreateIpGroup',
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
        .literal('WorkspacesService.CreateIpGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateIpGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateIpGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIpGroupResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ResourceCreationFailedException',
      content: { 'application/json': { schema: ResourceCreationFailedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateStandbyWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces',
  description: 'Creates a standby WorkSpace in a secondary Region.',
  operationId: 'CreateStandbyWorkspaces',
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
        .literal('WorkspacesService.CreateStandbyWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateStandbyWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStandbyWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStandbyWorkspacesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateTags',
  description: 'Creates the specified tags for the specified WorkSpaces resource.',
  operationId: 'CreateTags',
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
        .literal('WorkspacesService.CreateTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTagsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage',
  description:
    '<p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you\'ve verified your new updated image and created a new bundle. </p> </li> </ul> </note>',
  operationId: 'CreateUpdatedWorkspaceImage',
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
        .literal('WorkspacesService.CreateUpdatedWorkspaceImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateUpdatedWorkspaceImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUpdatedWorkspaceImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUpdatedWorkspaceImageResultSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateWorkspaceBundleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle',
  description:
    'Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.',
  operationId: 'CreateWorkspaceBundle',
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
        .literal('WorkspacesService.CreateWorkspaceBundle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateWorkspaceBundle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkspaceBundleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkspaceBundleResultSchema } },
    },
    480: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateWorkspaceImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateWorkspaceImage',
  description: 'Creates a new WorkSpace image from an existing WorkSpace.',
  operationId: 'CreateWorkspaceImage',
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
        .literal('WorkspacesService.CreateWorkspaceImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateWorkspaceImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkspaceImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkspaceImageResultSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceCreateWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.CreateWorkspaces',
  description:
    '<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>',
  operationId: 'CreateWorkspaces',
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
        .literal('WorkspacesService.CreateWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.CreateWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkspacesResultSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteClientBrandingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteClientBranding',
  description:
    "<p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>",
  operationId: 'DeleteClientBranding',
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
        .literal('WorkspacesService.DeleteClientBranding')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteClientBranding'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteClientBrandingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteClientBrandingResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteConnectClientAddInRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn',
  description: 'Deletes a client-add-in for Amazon Connect that is configured within a directory.',
  operationId: 'DeleteConnectClientAddIn',
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
        .literal('WorkspacesService.DeleteConnectClientAddIn')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteConnectClientAddIn'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectClientAddInRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectClientAddInResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteConnectionAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias',
  description:
    '<p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>',
  operationId: 'DeleteConnectionAlias',
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
        .literal('WorkspacesService.DeleteConnectionAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteConnectionAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectionAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectionAliasResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    485: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteIpGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteIpGroup',
  description:
    '<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>',
  operationId: 'DeleteIpGroup',
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
        .literal('WorkspacesService.DeleteIpGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteIpGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteIpGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIpGroupResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteTags',
  description: 'Deletes the specified tags from the specified WorkSpaces resource.',
  operationId: 'DeleteTags',
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
        .literal('WorkspacesService.DeleteTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTagsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteWorkspaceBundleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle',
  description:
    'Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.',
  operationId: 'DeleteWorkspaceBundle',
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
        .literal('WorkspacesService.DeleteWorkspaceBundle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteWorkspaceBundle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWorkspaceBundleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorkspaceBundleResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeleteWorkspaceImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage',
  description:
    'Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. ',
  operationId: 'DeleteWorkspaceImage',
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
        .literal('WorkspacesService.DeleteWorkspaceImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeleteWorkspaceImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWorkspaceImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorkspaceImageResultSchema } },
    },
    480: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory',
  description:
    '<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>',
  operationId: 'DeregisterWorkspaceDirectory',
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
        .literal('WorkspacesService.DeregisterWorkspaceDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DeregisterWorkspaceDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterWorkspaceDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterWorkspaceDirectoryResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeAccount',
  description:
    'Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.',
  operationId: 'DescribeAccount',
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
        .literal('WorkspacesService.DescribeAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeAccountModificationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeAccountModifications',
  description:
    'Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.',
  operationId: 'DescribeAccountModifications',
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
        .literal('WorkspacesService.DescribeAccountModifications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeAccountModifications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccountModificationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccountModificationsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeClientBrandingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeClientBranding',
  description:
    '<p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>',
  operationId: 'DescribeClientBranding',
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
        .literal('WorkspacesService.DescribeClientBranding')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeClientBranding'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeClientBrandingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClientBrandingResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeClientPropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeClientProperties',
  description: 'Retrieves a list that describes one or more specified Amazon WorkSpaces clients.',
  operationId: 'DescribeClientProperties',
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
        .literal('WorkspacesService.DescribeClientProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeClientProperties'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeClientPropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClientPropertiesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeConnectClientAddInsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns',
  description: 'Retrieves a list of Amazon Connect client add-ins that have been created.',
  operationId: 'DescribeConnectClientAddIns',
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
        .literal('WorkspacesService.DescribeConnectClientAddIns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeConnectClientAddIns'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectClientAddInsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectClientAddInsResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions',
  description:
    'Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
  operationId: 'DescribeConnectionAliasPermissions',
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
        .literal('WorkspacesService.DescribeConnectionAliasPermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkspacesService.DescribeConnectionAliasPermissions'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionAliasPermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectionAliasPermissionsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeConnectionAliasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases',
  description:
    'Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.',
  operationId: 'DescribeConnectionAliases',
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
        .literal('WorkspacesService.DescribeConnectionAliases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeConnectionAliases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectionAliasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectionAliasesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeIpGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeIpGroups',
  description: 'Describes one or more of your IP access control groups.',
  operationId: 'DescribeIpGroups',
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
        .literal('WorkspacesService.DescribeIpGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeIpGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeIpGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeIpGroupsResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeTags',
  description: 'Describes the specified tags for the specified WorkSpaces resource.',
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
        .literal('WorkspacesService.DescribeTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeTags'] },
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
      content: { 'application/json': { schema: DescribeTagsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles',
  description:
    '<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>',
  operationId: 'DescribeWorkspaceBundles',
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
        .literal('WorkspacesService.DescribeWorkspaceBundles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeWorkspaceBundles'] },
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
      content: { 'application/json': { schema: DescribeWorkspaceBundlesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceBundlesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories',
  description: 'Describes the available directories that are registered with Amazon WorkSpaces.',
  operationId: 'DescribeWorkspaceDirectories',
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
        .literal('WorkspacesService.DescribeWorkspaceDirectories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeWorkspaceDirectories'] },
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
      content: { 'application/json': { schema: DescribeWorkspaceDirectoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceDirectoriesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions',
  description:
    'Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.',
  operationId: 'DescribeWorkspaceImagePermissions',
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
        .literal('WorkspacesService.DescribeWorkspaceImagePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkspacesService.DescribeWorkspaceImagePermissions'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkspaceImagePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceImagePermissionsResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspaceImagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages',
  description:
    'Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. ',
  operationId: 'DescribeWorkspaceImages',
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
        .literal('WorkspacesService.DescribeWorkspaceImages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeWorkspaceImages'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkspaceImagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceImagesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots',
  description: 'Describes the snapshots for the specified WorkSpace.',
  operationId: 'DescribeWorkspaceSnapshots',
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
        .literal('WorkspacesService.DescribeWorkspaceSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeWorkspaceSnapshots'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkspaceSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspaceSnapshotsResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspaces',
  description:
    '<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>',
  operationId: 'DescribeWorkspaces',
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
        .literal('WorkspacesService.DescribeWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DescribeWorkspaces'] },
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
      content: { 'application/json': { schema: DescribeWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspacesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus',
  description: 'Describes the connection status of the specified WorkSpaces.',
  operationId: 'DescribeWorkspacesConnectionStatus',
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
        .literal('WorkspacesService.DescribeWorkspacesConnectionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkspacesService.DescribeWorkspacesConnectionStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkspacesConnectionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkspacesConnectionStatusResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDisassociateConnectionAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias',
  description:
    '<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>',
  operationId: 'DisassociateConnectionAlias',
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
        .literal('WorkspacesService.DisassociateConnectionAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DisassociateConnectionAlias'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateConnectionAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateConnectionAliasResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    484: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceDisassociateIpGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.DisassociateIpGroups',
  description: 'Disassociates the specified IP access control group from the specified directory.',
  operationId: 'DisassociateIpGroups',
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
        .literal('WorkspacesService.DisassociateIpGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.DisassociateIpGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateIpGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateIpGroupsResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceImportClientBrandingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ImportClientBranding',
  description:
    "<p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>",
  operationId: 'ImportClientBranding',
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
        .literal('WorkspacesService.ImportClientBranding')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ImportClientBranding'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportClientBrandingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportClientBrandingResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceImportWorkspaceImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage',
  description:
    'Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.',
  operationId: 'ImportWorkspaceImage',
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
        .literal('WorkspacesService.ImportWorkspaceImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ImportWorkspaceImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportWorkspaceImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportWorkspaceImageResultSchema } },
    },
    480: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges',
  description:
    "<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>",
  operationId: 'ListAvailableManagementCidrRanges',
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
        .literal('WorkspacesService.ListAvailableManagementCidrRanges')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkspacesService.ListAvailableManagementCidrRanges'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAvailableManagementCidrRangesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAvailableManagementCidrRangesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceMigrateWorkspaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.MigrateWorkspace',
  description:
    '<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\\Users\\%USERNAME%</code> user profile folder is renamed to <code>D:\\Users\\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\\Users\\%USERNAME%\\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>',
  operationId: 'MigrateWorkspace',
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
        .literal('WorkspacesService.MigrateWorkspace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.MigrateWorkspace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MigrateWorkspaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MigrateWorkspaceResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
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
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    484: {
      description: 'OperationInProgressException',
      content: { 'application/json': { schema: OperationInProgressExceptionSchema } },
    },
    485: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyAccount',
  description:
    'Modifies the configuration of Bring Your Own License (BYOL) for the specified account.',
  operationId: 'ModifyAccount',
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
        .literal('WorkspacesService.ModifyAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifyAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyAccountResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties',
    description:
      'Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.',
    operationId: 'ModifyCertificateBasedAuthProperties',
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
          .literal('WorkspacesService.ModifyCertificateBasedAuthProperties')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['WorkspacesService.ModifyCertificateBasedAuthProperties'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ModifyCertificateBasedAuthPropertiesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ModifyCertificateBasedAuthPropertiesResultSchema },
        },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterValuesException',
        content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
      },
      482: {
        description: 'OperationNotSupportedException',
        content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetWorkspacesServiceModifyClientPropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyClientProperties',
  description: 'Modifies the properties of the specified Amazon WorkSpaces clients.',
  operationId: 'ModifyClientProperties',
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
        .literal('WorkspacesService.ModifyClientProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifyClientProperties'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyClientPropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyClientPropertiesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifySamlPropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifySamlProperties',
  description:
    'Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.',
  operationId: 'ModifySamlProperties',
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
        .literal('WorkspacesService.ModifySamlProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifySamlProperties'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifySamlPropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifySamlPropertiesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifySelfservicePermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions',
  description:
    'Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.',
  operationId: 'ModifySelfservicePermissions',
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
        .literal('WorkspacesService.ModifySelfservicePermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifySelfservicePermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifySelfservicePermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifySelfservicePermissionsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties',
  description:
    'Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.',
  operationId: 'ModifyWorkspaceAccessProperties',
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
        .literal('WorkspacesService.ModifyWorkspaceAccessProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifyWorkspaceAccessProperties'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyWorkspaceAccessPropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyWorkspaceAccessPropertiesResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties',
  description: 'Modify the default properties used to create WorkSpaces.',
  operationId: 'ModifyWorkspaceCreationProperties',
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
        .literal('WorkspacesService.ModifyWorkspaceCreationProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkspacesService.ModifyWorkspaceCreationProperties'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyWorkspaceCreationPropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyWorkspaceCreationPropertiesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyWorkspacePropertiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties',
  description:
    '<p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>',
  operationId: 'ModifyWorkspaceProperties',
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
        .literal('WorkspacesService.ModifyWorkspaceProperties')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifyWorkspaceProperties'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyWorkspacePropertiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyWorkspacePropertiesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    482: {
      description: 'OperationInProgressException',
      content: { 'application/json': { schema: OperationInProgressExceptionSchema } },
    },
    483: {
      description: 'UnsupportedWorkspaceConfigurationException',
      content: { 'application/json': { schema: UnsupportedWorkspaceConfigurationExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceModifyWorkspaceStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState',
  description:
    '<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>',
  operationId: 'ModifyWorkspaceState',
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
        .literal('WorkspacesService.ModifyWorkspaceState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.ModifyWorkspaceState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyWorkspaceStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyWorkspaceStateResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceRebootWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.RebootWorkspaces',
  description:
    '<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>',
  operationId: 'RebootWorkspaces',
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
        .literal('WorkspacesService.RebootWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.RebootWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebootWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootWorkspacesResultSchema } },
    },
    480: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceRebuildWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.RebuildWorkspaces',
  description:
    '<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>',
  operationId: 'RebuildWorkspaces',
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
        .literal('WorkspacesService.RebuildWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.RebuildWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RebuildWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebuildWorkspacesResultSchema } },
    },
    480: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory',
  description:
    'Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.',
  operationId: 'RegisterWorkspaceDirectory',
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
        .literal('WorkspacesService.RegisterWorkspaceDirectory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.RegisterWorkspaceDirectory'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterWorkspaceDirectoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterWorkspaceDirectoryResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'WorkspacesDefaultRoleNotFoundException',
      content: { 'application/json': { schema: WorkspacesDefaultRoleNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    486: {
      description: 'UnsupportedNetworkConfigurationException',
      content: { 'application/json': { schema: UnsupportedNetworkConfigurationExceptionSchema } },
    },
    487: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceRestoreWorkspaceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.RestoreWorkspace',
  description:
    '<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>',
  operationId: 'RestoreWorkspace',
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
        .literal('WorkspacesService.RestoreWorkspace')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.RestoreWorkspace'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreWorkspaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreWorkspaceResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
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
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceRevokeIpRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.RevokeIpRules',
  description: 'Removes one or more rules from the specified IP access control group.',
  operationId: 'RevokeIpRules',
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
        .literal('WorkspacesService.RevokeIpRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.RevokeIpRules'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RevokeIpRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeIpRulesResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceStartWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.StartWorkspaces',
  description:
    '<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>',
  operationId: 'StartWorkspaces',
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
        .literal('WorkspacesService.StartWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.StartWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartWorkspacesResultSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceStopWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.StopWorkspaces',
  description:
    '<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>',
  operationId: 'StopWorkspaces',
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
        .literal('WorkspacesService.StopWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.StopWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopWorkspacesResultSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceTerminateWorkspacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.TerminateWorkspaces',
  description:
    '<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user\'s data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn\'t returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>',
  operationId: 'TerminateWorkspaces',
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
        .literal('WorkspacesService.TerminateWorkspaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.TerminateWorkspaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateWorkspacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TerminateWorkspacesResultSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceUpdateConnectClientAddInRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn',
  description:
    'Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.',
  operationId: 'UpdateConnectClientAddIn',
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
        .literal('WorkspacesService.UpdateConnectClientAddIn')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.UpdateConnectClientAddIn'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConnectClientAddInRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectClientAddInResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission',
  description:
    '<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>',
  operationId: 'UpdateConnectionAliasPermission',
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
        .literal('WorkspacesService.UpdateConnectionAliasPermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.UpdateConnectionAliasPermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConnectionAliasPermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectionAliasPermissionResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
    485: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    486: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup',
  description:
    'Replaces the current rules of the specified IP access control group with the specified rules.',
  operationId: 'UpdateRulesOfIpGroup',
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
        .literal('WorkspacesService.UpdateRulesOfIpGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.UpdateRulesOfIpGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRulesOfIpGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRulesOfIpGroupResultSchema } },
    },
    480: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceStateException',
      content: { 'application/json': { schema: InvalidResourceStateExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceUpdateWorkspaceBundleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle',
  description:
    "<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html\"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>",
  operationId: 'UpdateWorkspaceBundle',
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
        .literal('WorkspacesService.UpdateWorkspaceBundle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.UpdateWorkspaceBundle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkspaceBundleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWorkspaceBundleResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission',
  description:
    '<p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn\'t supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>',
  operationId: 'UpdateWorkspaceImagePermission',
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
        .literal('WorkspacesService.UpdateWorkspaceImagePermission')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkspacesService.UpdateWorkspaceImagePermission'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkspaceImagePermissionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWorkspaceImagePermissionResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValuesException',
      content: { 'application/json': { schema: InvalidParameterValuesExceptionSchema } },
    },
    484: {
      description: 'OperationNotSupportedException',
      content: { 'application/json': { schema: OperationNotSupportedExceptionSchema } },
    },
  },
})
