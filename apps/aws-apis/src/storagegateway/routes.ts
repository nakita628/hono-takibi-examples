import { createRoute, z } from '@hono/zod-openapi'

const GatewayARNSchema = z
  .string()
  .min(50)
  .max(500)
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
  })
  .openapi('GatewayARN')

const ActivateGatewayOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B' },
    description:
      '<p>Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and Amazon Web Services Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>',
    required: [],
  })
  .openapi('ActivateGatewayOutput')

const ActivationKeySchema = z.string().min(1).max(50).openapi('ActivationKey')

const GatewayNameSchema = z
  .string()
  .regex(/^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$/)
  .min(2)
  .max(255)
  .openapi({ description: 'The name you configured for your gateway.' })
  .openapi('GatewayName')

const GatewayTimezoneSchema = z.string().min(3).max(10).openapi('GatewayTimezone')

const RegionIdSchema = z.string().min(1).max(25).openapi('RegionId')

const GatewayTypeSchema = z.string().min(2).max(20).openapi('GatewayType')

const TapeDriveTypeSchema = z.string().min(2).max(50).openapi('TapeDriveType')

const MediumChangerTypeSchema = z.string().min(2).max(50).openapi('MediumChangerType')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: "Tag key. The key can't start with aws:." }),
    ),
    Value: TagValueSchema.and(z.any().openapi({ description: 'Value of the tag key.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const ActivateGatewayInputSchema = z
  .object({
    ActivationKey: ActivationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Your gateway activation key. You can obtain the activation key by sending an HTTP GET request with redirects enabled to the gateway IP address (port 80). The redirect URL returned in the response provides you the activation key for your gateway in the query string parameter <code>activationKey</code>. It may also include other activation-related parameters, however, these are merely defaults -- the arguments you pass to the <code>ActivateGateway</code> API call determine the actual configuration of your gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html">Getting activation key</a> in the <i>Storage Gateway User Guide</i>.</p>',
        }),
    ),
    GatewayName: GatewayNameSchema.and(
      z.any().openapi({ description: 'The name you configured for your gateway.' }),
    ),
    GatewayTimezone: GatewayTimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates the time zone you want to set for the gateway. The time zone is of the format "GMT-hr:mm" or "GMT+hr:mm". For example, GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for scheduling snapshots and your gateway\'s maintenance schedule.',
        }),
    ),
    GatewayRegion: RegionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates the Amazon Web Services Region where you want to store your data. The gateway Amazon Web Services Region specified must be the same Amazon Web Services Region as the Amazon Web Services Region in your <code>Host</code> header in the request. For more information about available Amazon Web Services Regions and endpoints for Storage Gateway, see <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html"> Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Valid Values: See <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html"> Storage Gateway endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>. </p>',
        }),
    ),
    GatewayType: GatewayTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that defines the type of gateway to activate. The type specified is critical to all later functions of the gateway and cannot be changed after activation. The default value is <code>CACHED</code>.</p> <p>Valid Values: <code>STORED</code> | <code>CACHED</code> | <code>VTL</code> | <code>VTL_SNOW</code> | <code>FILE_S3</code> | <code>FILE_FSX_SMB</code> </p>',
        }),
    ).exactOptional(),
    TapeDriveType: TapeDriveTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that indicates the type of tape drive to use for tape gateway. This field is optional.</p> <p>Valid Values: <code>IBM-ULT3580-TD5</code> </p>',
        }),
    ).exactOptional(),
    MediumChangerType: MediumChangerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value that indicates the type of medium changer to use for tape gateway. This field is optional.</p> <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> | <code>IBM-03584L32-0402</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers that can be represented in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ActivationKey', 'GatewayName', 'GatewayTimezone', 'GatewayRegion'],
    title: 'ActivateGatewayInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> </ul>',
  })
  .openapi('ActivateGatewayInput')

const InvalidGatewayRequestExceptionSchema = z.any().openapi('InvalidGatewayRequestException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const AddCacheOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    required: [],
  })
  .openapi('AddCacheOutput')

const DiskIdSchema = z.string().min(1).max(300).openapi('DiskId')

const DiskIdsSchema = z.array(DiskIdSchema).openapi('DiskIds')

const AddCacheInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.',
        }),
    ),
  })
  .openapi({ required: ['GatewayARN', 'DiskIds'], title: 'AddCacheInput' })
  .openapi('AddCacheInput')

const ResourceARNSchema = z.string().min(50).max(500).openapi('ResourceARN')

const AddTagsToResourceOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource you want to add tags to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ResourceARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B' },
    description: 'AddTagsToResourceOutput',
    required: [],
  })
  .openapi('AddTagsToResourceOutput')

const AddTagsToResourceInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource you want to add tags to.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The key-value pair that represents the tag you want to add to the resource. The value can be an empty string.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'Tags'],
    title: 'AddTagsToResourceInput',
    description: 'AddTagsToResourceInput',
  })
  .openapi('AddTagsToResourceInput')

const AddUploadBufferOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    required: [],
  })
  .openapi('AddUploadBufferOutput')

const AddUploadBufferInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.',
        }),
    ),
  })
  .openapi({ required: ['GatewayARN', 'DiskIds'], title: 'AddUploadBufferInput' })
  .openapi('AddUploadBufferInput')

const AddWorkingStorageOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured.',
    required: [],
  })
  .openapi('AddWorkingStorageOutput')

const AddWorkingStorageInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'DiskIds'],
    title: 'AddWorkingStorageInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>',
  })
  .openapi('AddWorkingStorageInput')

const TapeARNSchema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov):storagegateway:[a-z\-0-9]+:[0-9]+:tape\/[0-9A-Z]{5,16}$/)
  .min(50)
  .max(500)
  .openapi('TapeARN')

const AssignTapePoolOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssignTapePoolOutput')

const PoolIdSchema = z.string().min(1).max(100).openapi('PoolId')

const BooleanSchema = z.boolean().openapi('Boolean')

const AssignTapePoolInputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape pool.',
        }),
    ),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ),
    BypassGovernanceRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set permissions to bypass governance retention. If the lock type of the archived tape is <code>Governance</code>, the tape's archived age is not older than <code>RetentionLockInDays</code>, and the user does not already have <code>BypassGovernanceRetention</code>, setting this to TRUE enables the user to bypass the retention lock. This parameter is set to true by default for calls from the console.</p> <p>Valid values: <code>TRUE</code> | <code>FALSE</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TapeARN', 'PoolId'], title: 'AssignTapePoolInput' })
  .openapi('AssignTapePoolInput')

const FileSystemAssociationARNSchema = z
  .string()
  .min(50)
  .max(500)
  .openapi('FileSystemAssociationARN')

const AssociateFileSystemOutputSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z.any().openapi({ description: 'The ARN of the newly created file system association.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateFileSystemOutput')

const DomainUserNameSchema = z
  .string()
  .regex(/^\w[\w\.\- ]*$/)
  .min(1)
  .max(1024)
  .openapi('DomainUserName')

const DomainUserPasswordSchema = z
  .string()
  .regex(/^[ -~]+$/)
  .min(1)
  .max(1024)
  .openapi('DomainUserPassword')

const ClientTokenSchema = z.string().min(5).max(100).openapi('ClientToken')

const FileSystemLocationARNSchema = z.string().min(8).max(512).openapi('FileSystemLocationARN')

const AuditDestinationARNSchema = z.string().max(1024).openapi('AuditDestinationARN')

const CacheStaleTimeoutInSecondsSchema = z.int().openapi('CacheStaleTimeoutInSeconds')

const CacheAttributesSchema = z
  .object({
    CacheStaleTimeoutInSeconds: CacheStaleTimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of time since the last refresh after which access to the directory would cause the file gateway to first refresh that directory's contents from the Amazon S3 bucket or Amazon FSx file system. The TTL duration is in seconds.</p> <p>Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The refresh cache information for the file share or FSx file systems.',
    required: [],
  })
  .openapi('CacheAttributes')

const IPV4AddressSchema = z
  .string()
  .regex(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}/)
  .min(7)
  .max(15)
  .openapi('IPV4Address')

const IpAddressListSchema = z.array(IPV4AddressSchema).min(0).max(1).openapi('IpAddressList')

const EndpointNetworkConfigurationSchema = z
  .object({
    IpAddresses: IpAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of gateway IP addresses on which the associated Amazon FSx file system is available.</p> <note> <p>If multiple file systems are associated with this gateway, this field is required.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies network configuration information for the gateway associated with the Amazon FSx file system.',
    required: [],
  })
  .openapi('EndpointNetworkConfiguration')

const AssociateFileSystemInputSchema = z
  .object({
    UserName: DomainUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.',
        }),
    ),
    Password: DomainUserPasswordSchema.and(
      z.any().openapi({ description: 'The password of the user credential.' }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string value that you supply that is used by the FSx File Gateway to ensure idempotent file system association creation.',
        }),
    ),
    GatewayARN: GatewayARNSchema,
    LocationARN: FileSystemLocationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags that can be assigned to the file system association. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for the audit logs.',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.exactOptional(),
    EndpointNetworkConfiguration: EndpointNetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the network configuration information for the gateway associated with the Amazon FSx file system.</p> <note> <p>If multiple file systems are associated with this gateway, this parameter's <code>IpAddresses</code> field is required.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserName', 'Password', 'ClientToken', 'GatewayARN', 'LocationARN'],
    title: 'AssociateFileSystemInput',
  })
  .openapi('AssociateFileSystemInput')

const VolumeARNSchema = z.string().min(50).max(500).openapi('VolumeARN')

const TargetARNSchema = z.string().min(50).max(800).openapi('TargetARN')

const AttachVolumeOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume that was attached to the gateway.',
        }),
    ).exactOptional(),
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for the initiator that was used to connect to the target.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'AttachVolumeOutput', required: [] })
  .openapi('AttachVolumeOutput')

const TargetNameSchema = z
  .string()
  .regex(/^[-\.;a-z0-9]+$/)
  .min(1)
  .max(200)
  .openapi('TargetName')

const NetworkInterfaceIdSchema = z
  .string()
  .regex(/\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z/)
  .openapi('NetworkInterfaceId')

const AttachVolumeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to.',
        }),
    ),
    TargetName: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>",
        }),
    ).exactOptional(),
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.',
        }),
    ),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p>Valid Values: A valid IP address.</p>',
        }),
    ),
    DiskId: DiskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique device ID or other distinguishing data that identifies the local disk used to create the volume. This value is only required when you are attaching a stored volume.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN', 'VolumeARN', 'NetworkInterfaceId'],
    title: 'AttachVolumeInput',
    description: 'AttachVolumeInput',
  })
  .openapi('AttachVolumeInput')

const CancelArchivalOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape for which archiving was canceled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4' },
    description: 'CancelArchivalOutput',
    required: [],
  })
  .openapi('CancelArchivalOutput')

const CancelArchivalInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'TapeARN'],
    title: 'CancelArchivalInput',
    description: 'CancelArchivalInput',
  })
  .openapi('CancelArchivalInput')

const CancelRetrievalOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4' },
    description: 'CancelRetrievalOutput',
    required: [],
  })
  .openapi('CancelRetrievalOutput')

const CancelRetrievalInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval for.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'TapeARN'],
    title: 'CancelRetrievalInput',
    description: 'CancelRetrievalInput',
  })
  .openapi('CancelRetrievalInput')

const CreateCachediSCSIVolumeOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the configured volume.' }),
    ).exactOptional(),
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    required: [],
  })
  .openapi('CreateCachediSCSIVolumeOutput')

const LongSchema = z.int().openapi('Long')

const SnapshotIdSchema = z
  .string()
  .regex(/\Asnap-([0-9A-Fa-f]{8}|[0-9A-Fa-f]{17})\z/)
  .openapi('SnapshotId')

const Boolean2Schema = z.boolean().openapi('Boolean2')

const KMSKeySchema = z
  .string()
  .regex(
    /(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)\/(\S+)$)|(^alias\/(\S+)$)/,
  )
  .min(7)
  .max(2048)
  .openapi({
    description:
      'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
  })
  .openapi('KMSKey')

const CreateCachediSCSIVolumeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    VolumeSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the volume in bytes.' }),
    ),
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.',
        }),
    ).exactOptional(),
    TargetName: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>",
        }),
    ),
    SourceVolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than the size of the existing volume, in bytes.",
        }),
    ).exactOptional(),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p>Valid Values: A valid IP address.</p>',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier that you use to retry a request. If you retry a request, use the same <code>ClientToken</code> you specified in the initial request.',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers that you can represent in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'GatewayARN',
      'VolumeSizeInBytes',
      'TargetName',
      'NetworkInterfaceId',
      'ClientToken',
    ],
    title: 'CreateCachediSCSIVolumeInput',
  })
  .openapi('CreateCachediSCSIVolumeInput')

const FileShareARNSchema = z
  .string()
  .min(50)
  .max(500)
  .openapi({ description: 'The Amazon Resource Name (ARN) of the file share.' })
  .openapi('FileShareARN')

const CreateNFSFileShareOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the newly created file share.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateNFSFileShareOutput', required: [] })
  .openapi('CreateNFSFileShareOutput')

const PermissionModeSchema = z
  .string()
  .regex(/^[0-7]{4}$/)
  .min(1)
  .max(4)
  .openapi('PermissionMode')

const PermissionIdSchema = z.int().min(0).max(4294967294).openapi('PermissionId')

const NFSFileShareDefaultsSchema = z
  .object({
    FileMode: PermissionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix file mode in the form "nnnn". For example, <code>0666</code> represents the default file mode inside the file share. The default value is <code>0666</code>.',
        }),
    ).exactOptional(),
    DirectoryMode: PermissionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix directory mode in the form "nnnn". For example, <code>0666</code> represents the default access mode for all directories inside the file share. The default value is <code>0777</code>.',
        }),
    ).exactOptional(),
    GroupId: PermissionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default group ID for the file share (unless the files have another group ID specified). The default value is <code>nfsnobody</code>.',
        }),
    ).exactOptional(),
    OwnerId: PermissionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is <code>nfsnobody</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for S3 File Gateways.",
    required: [],
  })
  .openapi('NFSFileShareDefaults')

const RoleSchema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov):iam::([0-9]+):role\/(\S+)$/)
  .min(20)
  .max(2048)
  .openapi({
    description:
      'The ARN of the IAM role that an S3 File Gateway assumes when it accesses the underlying storage.',
  })
  .openapi('Role')

const LocationARNSchema = z
  .string()
  .min(16)
  .max(1400)
  .openapi({
    description:
      '<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>',
  })
  .openapi('LocationARN')

const StorageClassSchema = z
  .string()
  .min(5)
  .max(50)
  .openapi({ description: '<p/>' })
  .openapi('StorageClass')

const ObjectACLSchema = z
  .enum([
    'private',
    'public-read',
    'public-read-write',
    'authenticated-read',
    'bucket-owner-read',
    'bucket-owner-full-control',
    'aws-exec-read',
  ])
  .openapi({
    description:
      'A value that sets the access control list (ACL) permission for objects in the S3 bucket that an S3 File Gateway puts objects into. The default value is <code>private</code>.',
  })
  .openapi('ObjectACL')

const IPV4AddressCIDRSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
  )
  .openapi('IPV4AddressCIDR')

const FileShareClientListSchema = z
  .array(IPV4AddressCIDRSchema)
  .min(1)
  .max(100)
  .openapi({
    description:
      'The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.',
  })
  .openapi('FileShareClientList')

const SquashSchema = z
  .string()
  .min(5)
  .max(15)
  .openapi({
    description:
      '<p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>',
  })
  .openapi('Squash')

const FileShareNameSchema = z.string().min(1).max(255).openapi('FileShareName')

const NotificationPolicySchema = z
  .string()
  .regex(/^\{[\w\s:\{\}\[\]"]*}$/)
  .min(2)
  .max(100)
  .openapi('NotificationPolicy')

const DNSHostNameSchema = z
  .string()
  .regex(/^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$/)
  .min(1)
  .max(255)
  .openapi('DNSHostName')

const CreateNFSFileShareInputSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.',
        }),
    ),
    NFSFileShareDefaults: NFSFileShareDefaultsSchema.and(
      z.any().openapi({ description: 'File share default values. Optional.' }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file share.',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.',
        }),
    ),
    LocationARN: LocationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>',
        }),
    ),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is <code>private</code>.',
        }),
    ).exactOptional(),
    ClientList: FileShareClientListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.',
        }),
    ).exactOptional(),
    Squash: SquashSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that maps a user to anonymous user.</p> <p>Valid values are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set the write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Specifies refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    VPCEndpointDNSName: DNSHostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3.</p> <note> <p>This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    BucketRegion: RegionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p> <note> <p>This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientToken', 'GatewayARN', 'Role', 'LocationARN'],
    title: 'CreateNFSFileShareInput',
    description: 'CreateNFSFileShareInput',
  })
  .openapi('CreateNFSFileShareInput')

const CreateSMBFileShareOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the newly created file share.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateSMBFileShareOutput', required: [] })
  .openapi('CreateSMBFileShareOutput')

const UserListUserSchema = z.string().min(1).max(64).openapi('UserListUser')

const UserListSchema = z.array(UserListUserSchema).min(0).max(100).openapi('UserList')

const AuthenticationSchema = z
  .string()
  .min(5)
  .max(15)
  .openapi({
    description:
      '<p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>',
  })
  .openapi('Authentication')

const CaseSensitivitySchema = z
  .enum(['ClientSpecified', 'CaseSensitive'])
  .openapi('CaseSensitivity')

const CreateSMBFileShareInputSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.',
        }),
    ),
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the S3 File Gateway on which you want to create a file share.',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.',
        }),
    ),
    LocationARN: LocationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/).</p> <note> <p>You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples.</p> <p>Bucket ARN:</p> <p> <code>arn:aws:s3:::my-bucket/prefix/</code> </p> <p>Access point ARN:</p> <p> <code>arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/</code> </p> <p>If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html#access-points-delegating-control">Delegating access control to access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Access point alias:</p> <p> <code>test-ap-ab123cdef4gehijklmn5opqrstuvuse1a-s3alias</code> </p> </note>',
        }),
    ),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is <code>private</code>.',
        }),
    ).exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set the write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    SMBACLEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file share. Set it to <code>false</code> to map file and directory permissions to the POSIX permissions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to control access to an SMB file share</a> in the <i>Storage Gateway User Guide</i>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    AccessBasedEnumeration: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The files and folders on this share will only be visible to users with read access.',
        }),
    ).exactOptional(),
    AdminUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of users or groups in the Active Directory that will be granted administrator privileges on the file share. These users can do all file operations as the super-user. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>.</p> <important> <p>Use this option very carefully, because any user in this list can do anything they like on the file share, regardless of file permissions.</p> </important>',
        }),
    ).exactOptional(),
    ValidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are allowed to access the file <a href=""/> share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    InvalidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
    Authentication: AuthenticationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The authentication method that users use to access the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>',
        }),
    ).exactOptional(),
    CaseSensitivity: CaseSensitivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default value is <code>ClientSpecified</code>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Specifies refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    VPCEndpointDNSName: DNSHostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3.</p> <note> <p>This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    BucketRegion: RegionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p> <note> <p>This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    OplocksEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether opportunistic locking is enabled for the SMB file share.</p> <note> <p>Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClientToken', 'GatewayARN', 'Role', 'LocationARN'],
    title: 'CreateSMBFileShareInput',
    description: 'CreateSMBFileShareInput',
  })
  .openapi('CreateSMBFileShareInput')

const CreateSnapshotOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.',
        }),
    ).exactOptional(),
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The snapshot ID that is used to refer to the snapshot in future operations such as describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SnapshotId: 'snap-78e22663',
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('CreateSnapshotOutput')

const SnapshotDescriptionSchema = z.string().min(1).max(255).openapi('SnapshotDescription')

const CreateSnapshotInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.',
        }),
    ),
    SnapshotDescription: SnapshotDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the <b>Description</b> field, and in the Storage Gateway snapshot <b>Details</b> pane, <b>Description</b> field.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeARN', 'SnapshotDescription'],
    title: 'CreateSnapshotInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>',
  })
  .openapi('CreateSnapshotInput')

const ServiceUnavailableErrorSchema = z.any().openapi('ServiceUnavailableError')

const StringSchema = z.string().openapi('String')

const CreateSnapshotFromVolumeRecoveryPointOutputSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The ID of the snapshot.' }),
    ).exactOptional(),
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.',
        }),
    ).exactOptional(),
    VolumeRecoveryPointTime: StringSchema.and(
      z.any().openapi({ description: 'The time the volume was created from the recovery point.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SnapshotId: 'snap-78e22663',
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
      VolumeRecoveryPointTime: '2017-06-30T10:10:10.000Z',
    },
    required: [],
  })
  .openapi('CreateSnapshotFromVolumeRecoveryPointOutput')

const CreateSnapshotFromVolumeRecoveryPointInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.',
        }),
    ),
    SnapshotDescription: SnapshotDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the <b>Description</b> field, and in the Storage Gateway snapshot <b>Details</b> pane, <b>Description</b> field.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeARN', 'SnapshotDescription'],
    title: 'CreateSnapshotFromVolumeRecoveryPointInput',
  })
  .openapi('CreateSnapshotFromVolumeRecoveryPointInput')

const CreateStorediSCSIVolumeOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the configured volume.' }),
    ).exactOptional(),
    VolumeSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the volume in bytes.' }),
    ).exactOptional(),
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
      VolumeSizeInBytes: 1099511627776,
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('CreateStorediSCSIVolumeOutput')

const CreateStorediSCSIVolumeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    DiskId: DiskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the gateway local disk that is configured as a stored volume. Use <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html">ListLocalDisks</a> to list disk IDs for a gateway.',
        }),
    ),
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.',
        }),
    ).exactOptional(),
    PreserveExistingData: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> if you want to preserve the data on the local disk. Otherwise, set to <code>false</code> to create an empty volume.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ),
    TargetName: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>",
        }),
    ),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p>Valid Values: A valid IP address.</p>',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN', 'DiskId', 'PreserveExistingData', 'TargetName', 'NetworkInterfaceId'],
    title: 'CreateStorediSCSIVolumeInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>',
  })
  .openapi('CreateStorediSCSIVolumeInput')

const PoolARNSchema = z.string().min(50).max(500).openapi('PoolARN')

const CreateTapePoolOutputSchema = z
  .object({
    PoolARN: PoolARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the <a>ListTapePools</a> operation to return a list of tape pools for your account and Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTapePoolOutput')

const PoolNameSchema = z
  .string()
  .regex(/^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$/)
  .min(1)
  .max(100)
  .openapi('PoolName')

const TapeStorageClassSchema = z.enum(['DEEP_ARCHIVE', 'GLACIER']).openapi('TapeStorageClass')

const RetentionLockTypeSchema = z
  .enum(['COMPLIANCE', 'GOVERNANCE', 'NONE'])
  .openapi('RetentionLockType')

const RetentionLockTimeInDaysSchema = z.int().min(0).max(36500).openapi('RetentionLockTimeInDays')

const CreateTapePoolInputSchema = z
  .object({
    PoolName: PoolNameSchema.and(
      z.any().openapi({ description: 'The name of the new custom tape pool.' }),
    ),
    StorageClass: TapeStorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ),
    RetentionLockType: RetentionLockTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.',
        }),
    ).exactOptional(),
    RetentionLockTimeInDays: RetentionLockTimeInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PoolName', 'StorageClass'], title: 'CreateTapePoolInput' })
  .openapi('CreateTapePoolInput')

const CreateTapeWithBarcodeOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique Amazon Resource Name (ARN) that represents the virtual tape that was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST12345' },
    description: 'CreateTapeOutput',
    required: [],
  })
  .openapi('CreateTapeWithBarcodeOutput')

const TapeSizeSchema = z.int().openapi('TapeSize')

const TapeBarcodeSchema = z
  .string()
  .regex(/^[A-Z0-9]*$/)
  .min(5)
  .max(16)
  .openapi('TapeBarcode')

const CreateTapeWithBarcodeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tape with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ),
    TapeSizeInBytes: TapeSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of the virtual tape that you want to create.</p> <note> <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p> </note>',
        }),
    ),
    TapeBarcode: TapeBarcodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The barcode that you want to assign to the tape.</p> <note> <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted.</p> </note>',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.',
        }),
    ).exactOptional(),
    Worm: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>TRUE</code> if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN', 'TapeSizeInBytes', 'TapeBarcode'],
    title: 'CreateTapeWithBarcodeInput',
    description: 'CreateTapeWithBarcodeInput',
  })
  .openapi('CreateTapeWithBarcodeInput')

const TapeARNsSchema = z
  .array(TapeARNSchema)
  .openapi({
    description:
      "The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.",
  })
  .openapi('TapeARNs')

const CreateTapesOutputSchema = z
  .object({
    TapeARNs: TapeARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TapeARNs: [
        'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST38A29D',
        'arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3AA29F',
        'arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3BA29E',
      ],
    },
    description: 'CreateTapeOutput',
    required: [],
  })
  .openapi('CreateTapesOutput')

const NumTapesToCreateSchema = z.int().min(1).max(10).openapi('NumTapesToCreate')

const TapeBarcodePrefixSchema = z
  .string()
  .regex(/^[A-Z]*$/)
  .min(1)
  .max(4)
  .openapi('TapeBarcodePrefix')

const CreateTapesInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ),
    TapeSizeInBytes: TapeSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of the virtual tapes that you want to create.</p> <note> <p>The size must be aligned by gigabyte (1024*1024*1024 bytes).</p> </note>',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that you use to retry a request. If you retry a request, use the same <code>ClientToken</code> you specified in the initial request.</p> <note> <p>Using the same <code>ClientToken</code> prevents creating the tape multiple times.</p> </note>',
        }),
    ),
    NumTapesToCreate: NumTapesToCreateSchema.and(
      z.any().openapi({ description: 'The number of virtual tapes that you want to create.' }),
    ),
    TapeBarcodePrefix: TapeBarcodePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique.</p> <note> <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.</p> </note>',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ).exactOptional(),
    Worm: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>TRUE</code> if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'GatewayARN',
      'TapeSizeInBytes',
      'ClientToken',
      'NumTapesToCreate',
      'TapeBarcodePrefix',
    ],
    title: 'CreateTapesInput',
    description: 'CreateTapesInput',
  })
  .openapi('CreateTapesInput')

const DeleteAutomaticTapeCreationPolicyOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteAutomaticTapeCreationPolicyOutput')

const DeleteAutomaticTapeCreationPolicyInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DeleteAutomaticTapeCreationPolicyInput' })
  .openapi('DeleteAutomaticTapeCreationPolicyInput')

const DeleteBandwidthRateLimitOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted.',
    required: [],
  })
  .openapi('DeleteBandwidthRateLimitOutput')

const BandwidthTypeSchema = z.string().min(3).max(25).openapi('BandwidthType')

const DeleteBandwidthRateLimitInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    BandwidthType: BandwidthTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete.</p> <p>Valid Values: <code>UPLOAD</code> | <code>DOWNLOAD</code> | <code>ALL</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'BandwidthType'],
    title: 'DeleteBandwidthRateLimitInput',
    description:
      '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>',
  })
  .openapi('DeleteBandwidthRateLimitInput')

const IqnNameSchema = z
  .string()
  .regex(/[0-9a-z:.-]+/)
  .min(1)
  .max(255)
  .openapi('IqnName')

const DeleteChapCredentialsOutputSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target.' }),
    ).exactOptional(),
    InitiatorName: IqnNameSchema.and(
      z.any().openapi({ description: 'The iSCSI initiator that connects to the target.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      InitiatorName: 'iqn.1991-05.com.microsoft:computername.domain.example.com',
      TargetARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DeleteChapCredentialsOutput')

const DeleteChapCredentialsInputSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.',
        }),
    ),
    InitiatorName: IqnNameSchema.and(
      z.any().openapi({ description: 'The iSCSI initiator that connects to the target.' }),
    ),
  })
  .openapi({
    required: ['TargetARN', 'InitiatorName'],
    title: 'DeleteChapCredentialsInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>',
  })
  .openapi('DeleteChapCredentialsInput')

const DeleteFileShareOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the deleted file share.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'DeleteFileShareOutput', required: [] })
  .openapi('DeleteFileShareOutput')

const DeleteFileShareInputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the file share to be deleted.',
        }),
    ),
    ForceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If this value is set to <code>true</code>, the operation deletes a file share immediately and aborts all data uploads to Amazon Web Services. Otherwise, the file share is not deleted until all data is uploaded to Amazon Web Services. This process aborts the data upload process, and the file share enters the <code>FORCE_DELETING</code> status.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileShareARN'],
    title: 'DeleteFileShareInput',
    description: 'DeleteFileShareInput',
  })
  .openapi('DeleteFileShareInput')

const DeleteGatewayOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description: 'A JSON object containing the ID of the deleted gateway.',
    required: [],
  })
  .openapi('DeleteGatewayOutput')

const DeleteGatewayInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DeleteGatewayInput',
    description: 'A JSON object containing the ID of the gateway to delete.',
  })
  .openapi('DeleteGatewayInput')

const DeleteSnapshotScheduleOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The volume which snapshot schedule was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    required: [],
  })
  .openapi('DeleteSnapshotScheduleOutput')

const DeleteSnapshotScheduleInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The volume which snapshot schedule to delete.' }),
    ),
  })
  .openapi({ required: ['VolumeARN'], title: 'DeleteSnapshotScheduleInput' })
  .openapi('DeleteSnapshotScheduleInput')

const DeleteTapeOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the deleted virtual tape.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0' },
    description: 'DeleteTapeOutput',
    required: [],
  })
  .openapi('DeleteTapeOutput')

const DeleteTapeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is associated with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ),
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the virtual tape to delete.' }),
    ),
    BypassGovernanceRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived tapes with tape retention lock set to <code>governance</code> can be deleted. Archived tapes with tape retention lock set to <code>compliance</code> can't be deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN', 'TapeARN'],
    title: 'DeleteTapeInput',
    description: 'DeleteTapeInput',
  })
  .openapi('DeleteTapeInput')

const DeleteTapeArchiveOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0' },
    description: 'DeleteTapeArchiveOutput',
    required: [],
  })
  .openapi('DeleteTapeArchiveOutput')

const DeleteTapeArchiveInputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).',
        }),
    ),
    BypassGovernanceRetention: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>TRUE</code> to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived tapes with tape retention lock set to <code>governance</code> can be deleted. Archived tapes with tape retention lock set to <code>compliance</code> can't be deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TapeARN'],
    title: 'DeleteTapeArchiveInput',
    description: 'DeleteTapeArchiveInput',
  })
  .openapi('DeleteTapeArchiveInput')

const DeleteTapePoolOutputSchema = z
  .object({
    PoolARN: PoolARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the custom tape pool being deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteTapePoolOutput')

const DeleteTapePoolInputSchema = z
  .object({
    PoolARN: PoolARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the custom tape pool to delete.',
        }),
    ),
  })
  .openapi({ required: ['PoolARN'], title: 'DeleteTapePoolInput' })
  .openapi('DeleteTapePoolInput')

const DeleteVolumeOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted.',
    required: [],
  })
  .openapi('DeleteVolumeOutput')

const DeleteVolumeInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.',
        }),
    ),
  })
  .openapi({
    required: ['VolumeARN'],
    title: 'DeleteVolumeInput',
    description: 'A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.',
  })
  .openapi('DeleteVolumeInput')

const AvailabilityMonitorTestStatusSchema = z
  .enum(['COMPLETE', 'FAILED', 'PENDING'])
  .openapi('AvailabilityMonitorTestStatus')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const DescribeAvailabilityMonitorTestOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    Status: AvailabilityMonitorTestStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the high availability monitoring test. If a test hasn't been performed, the value of this field is null.",
        }),
    ).exactOptional(),
    StartTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time the high availability monitoring test was started. If a test hasn't been performed, the value of this field is null.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAvailabilityMonitorTestOutput')

const DescribeAvailabilityMonitorTestInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DescribeAvailabilityMonitorTestInput' })
  .openapi('DescribeAvailabilityMonitorTestInput')

const BandwidthUploadRateLimitSchema = z.int().min(51200).openapi('BandwidthUploadRateLimit')

const BandwidthDownloadRateLimitSchema = z.int().min(102400).openapi('BandwidthDownloadRateLimit')

const DescribeBandwidthRateLimitOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    AverageUploadRateLimitInBitsPerSec: BandwidthUploadRateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.',
        }),
    ).exactOptional(),
    AverageDownloadRateLimitInBitsPerSec: BandwidthDownloadRateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AverageDownloadRateLimitInBitsPerSec: 204800,
      AverageUploadRateLimitInBitsPerSec: 102400,
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DescribeBandwidthRateLimitOutput')

const DescribeBandwidthRateLimitInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeBandwidthRateLimitInput',
    description: 'A JSON object containing the Amazon Resource Name (ARN) of the gateway.',
  })
  .openapi('DescribeBandwidthRateLimitInput')

const HourOfDaySchema = z.int().min(0).max(23).openapi('HourOfDay')

const MinuteOfHourSchema = z.int().min(0).max(59).openapi('MinuteOfHour')

const DayOfWeekSchema = z.int().min(0).max(6).openapi('DayOfWeek')

const DaysOfWeekSchema = z.array(DayOfWeekSchema).min(1).max(7).openapi('DaysOfWeek')

const BandwidthRateLimitIntervalSchema = z
  .object({
    StartHourOfDay: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description: ' The hour of the day to start the bandwidth rate limit interval. ',
        }),
    ),
    StartMinuteOfHour: MinuteOfHourSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The minute of the hour to start the bandwidth rate limit interval. The interval begins at the start of that minute. To begin an interval exactly at the start of the hour, use the value <code>0</code>. ',
        }),
    ),
    EndHourOfDay: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description: ' The hour of the day to end the bandwidth rate limit interval. ',
        }),
    ),
    EndMinuteOfHour: MinuteOfHourSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The minute of the hour to end the bandwidth rate limit interval. </p> <important> <p> The bandwidth rate limit interval ends at the end of the minute. To end an interval at the end of an hour, use the value <code>59</code>. </p> </important>',
        }),
    ),
    DaysOfWeek: DaysOfWeekSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The days of the week component of the bandwidth rate limit interval, represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday. ',
        }),
    ),
    AverageUploadRateLimitInBitsPerSec: BandwidthUploadRateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The average upload rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the upload rate limit is not set. ',
        }),
    ).exactOptional(),
    AverageDownloadRateLimitInBitsPerSec: BandwidthDownloadRateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The average download rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the download rate limit is not set. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'StartHourOfDay',
      'StartMinuteOfHour',
      'EndHourOfDay',
      'EndMinuteOfHour',
      'DaysOfWeek',
    ],
    description:
      ' Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. ',
  })
  .openapi('BandwidthRateLimitInterval')

const BandwidthRateLimitIntervalsSchema = z
  .array(BandwidthRateLimitIntervalSchema)
  .min(0)
  .max(20)
  .openapi('BandwidthRateLimitIntervals')

const DescribeBandwidthRateLimitScheduleOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    BandwidthRateLimitIntervals: BandwidthRateLimitIntervalsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array that contains the bandwidth rate limit intervals for a tape or volume gateway. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBandwidthRateLimitScheduleOutput')

const DescribeBandwidthRateLimitScheduleInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DescribeBandwidthRateLimitScheduleInput' })
  .openapi('DescribeBandwidthRateLimitScheduleInput')

const DoubleSchema = z.float64().openapi('Double')

const DescribeCacheOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that identify disks that are to be configured as working storage. Each string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.',
        }),
    ).exactOptional(),
    CacheAllocatedInBytes: LongSchema.and(
      z.any().openapi({ description: 'The amount of cache in bytes allocated to a gateway.' }),
    ).exactOptional(),
    CacheUsedPercentage: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.",
        }),
    ).exactOptional(),
    CacheDirtyPercentage: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to Amazon Web Services. The sample is taken at the end of the reporting period.",
        }),
    ).exactOptional(),
    CacheHitPercentage: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.',
        }),
    ).exactOptional(),
    CacheMissPercentage: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CacheAllocatedInBytes: 2199023255552,
      CacheDirtyPercentage: 0.07,
      CacheHitPercentage: 99.68,
      CacheMissPercentage: 0.32,
      CacheUsedPercentage: 0.07,
      DiskIds: ['pci-0000:03:00.0-scsi-0:0:0:0', 'pci-0000:04:00.0-scsi-0:1:0:0'],
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
    },
    required: [],
  })
  .openapi('DescribeCacheOutput')

const DescribeCacheInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DescribeCacheInput' })
  .openapi('DescribeCacheInput')

const VolumeIdSchema = z.string().min(12).max(30).openapi('VolumeId')

const VolumeTypeSchema = z.string().min(3).max(100).openapi('VolumeType')

const VolumeStatusSchema = z.string().min(3).max(50).openapi('VolumeStatus')

const VolumeAttachmentStatusSchema = z.string().min(3).max(50).openapi('VolumeAttachmentStatus')

const DoubleObjectSchema = z.float64().openapi('DoubleObject')

const IntegerSchema = z.int().openapi('Integer')

const PositiveIntObjectSchema = z.int().min(1).openapi('PositiveIntObject')

const VolumeiSCSIAttributesSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the volume target.' }),
    ).exactOptional(),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z.any().openapi({ description: 'The network interface identifier.' }),
    ).exactOptional(),
    NetworkInterfacePort: IntegerSchema.and(
      z.any().openapi({ description: 'The port used to communicate with iSCSI targets.' }),
    ).exactOptional(),
    LunNumber: PositiveIntObjectSchema.and(
      z.any().openapi({ description: 'The logical disk number.' }),
    ).exactOptional(),
    ChapEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether mutual CHAP is enabled for the iSCSI target.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lists iSCSI information about a volume.', required: [] })
  .openapi('VolumeiSCSIAttributes')

const CreatedDateSchema = z.iso.datetime({ offset: true }).openapi('CreatedDate')

const VolumeUsedInBytesSchema = z.int().openapi('VolumeUsedInBytes')

const CachediSCSIVolumeSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the storage volume.' }),
    ).exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the volume, e.g., vol-AE4B946D.' }),
    ).exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeType enumeration values that describes the type of the volume.',
        }),
    ).exactOptional(),
    VolumeStatus: VolumeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeStatus values that indicates the state of the storage volume.',
        }),
    ).exactOptional(),
    VolumeAttachmentStatus: VolumeAttachmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether a storage volume is attached to or detached from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving your volumes to a different gateway</a>.',
        }),
    ).exactOptional(),
    VolumeSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the volume capacity.' }),
    ).exactOptional(),
    VolumeProgress: DoubleObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the cached volume is not restoring or bootstrapping.',
        }),
    ).exactOptional(),
    SourceSnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g., snap-78e22663. Otherwise, this field is not included.',
        }),
    ).exactOptional(),
    VolumeiSCSIAttributes: VolumeiSCSIAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.',
        }),
    ).exactOptional(),
    CreatedDate: CreatedDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp.',
        }),
    ).exactOptional(),
    VolumeUsedInBytes: VolumeUsedInBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the volume, which is the value that is used to calculate your bill.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> <p>If you use a delete tool that overwrites the data on your volume with random data, your usage will not be reduced. This is because the random data is not compressible. If you want to reduce the amount of billed storage on your volume, we recommend overwriting your files with zeros to compress the data to a negligible amount of actual storage.</p> </note>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    TargetName: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an iSCSI cached volume.', required: [] })
  .openapi('CachediSCSIVolume')

const CachediSCSIVolumesSchema = z.array(CachediSCSIVolumeSchema).openapi('CachediSCSIVolumes')

const DescribeCachediSCSIVolumesOutputSchema = z
  .object({
    CachediSCSIVolumes: CachediSCSIVolumesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects where each object contains metadata about one cached volume.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CachediSCSIVolumes: [
        {
          VolumeARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
          VolumeId: 'vol-1122AABB',
          VolumeSizeInBytes: 1099511627776,
          VolumeStatus: 'AVAILABLE',
          VolumeType: 'CACHED iSCSI',
          VolumeiSCSIAttributes: {
            ChapEnabled: true,
            LunNumber: 1,
            NetworkInterfaceId: '10.243.43.207',
            NetworkInterfacePort: 3260,
            TargetARN:
              'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
          },
        },
      ],
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DescribeCachediSCSIVolumesOutput')

const VolumeARNsSchema = z.array(VolumeARNSchema).openapi('VolumeARNs')

const DescribeCachediSCSIVolumesInputSchema = z
  .object({
    VolumeARNs: VolumeARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings where each string represents the Amazon Resource Name (ARN) of a cached volume. All of the specified cached volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.',
        }),
    ),
  })
  .openapi({ required: ['VolumeARNs'], title: 'DescribeCachediSCSIVolumesInput' })
  .openapi('DescribeCachediSCSIVolumesInput')

const ChapSecretSchema = z.string().min(1).max(100).openapi('ChapSecret')

const ChapInfoSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the volume.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>',
        }),
    ).exactOptional(),
    SecretToAuthenticateInitiator: ChapSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.',
        }),
    ).exactOptional(),
    InitiatorName: IqnNameSchema.and(
      z.any().openapi({ description: 'The iSCSI initiator that connects to the target.' }),
    ).exactOptional(),
    SecretToAuthenticateTarget: ChapSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g., Windows client).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.',
    required: [],
  })
  .openapi('ChapInfo')

const ChapCredentialsSchema = z.array(ChapInfoSchema).openapi('ChapCredentials')

const DescribeChapCredentialsOutputSchema = z
  .object({
    ChapCredentials: ChapCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <a>ChapInfo</a> objects that represent CHAP credentials. Each object in the array contains CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP credential information is provided in a JSON object with the following fields:</p> <ul> <li> <p> <b>InitiatorName</b>: The iSCSI initiator that connects to the target.</p> </li> <li> <p> <b>SecretToAuthenticateInitiator</b>: The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p> </li> <li> <p> <b>SecretToAuthenticateTarget</b>: The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p> </li> <li> <p> <b>TargetARN</b>: The Amazon Resource Name (ARN) of the storage volume.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChapCredentials: [
        {
          InitiatorName: 'iqn.1991-05.com.microsoft:computername.domain.example.com',
          SecretToAuthenticateInitiator: '111111111111',
          SecretToAuthenticateTarget: '222222222222',
          TargetARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
        },
      ],
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DescribeChapCredentialsOutput')

const DescribeChapCredentialsInputSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.',
        }),
    ),
  })
  .openapi({
    required: ['TargetARN'],
    title: 'DescribeChapCredentialsInput',
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.',
  })
  .openapi('DescribeChapCredentialsInput')

const FileSystemAssociationStatusSchema = z
  .string()
  .min(3)
  .max(50)
  .openapi('FileSystemAssociationStatus')

const FileSystemAssociationSyncErrorCodeSchema = z
  .string()
  .openapi('FileSystemAssociationSyncErrorCode')

const FileSystemAssociationStatusDetailSchema = z
  .object({
    ErrorCode: FileSystemAssociationSyncErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The error code for a given file system association status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information on file system association status.', required: [] })
  .openapi('FileSystemAssociationStatusDetail')

const FileSystemAssociationStatusDetailsSchema = z
  .array(FileSystemAssociationStatusDetailSchema)
  .openapi('FileSystemAssociationStatusDetails')

const FileSystemAssociationInfoSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the file system association.' }),
    ).exactOptional(),
    LocationARN: FileSystemLocationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the backend Amazon FSx file system used for storing file data. For information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_FileSystem.html">FileSystem</a> in the <i>Amazon FSx API Reference</i>.',
        }),
    ).exactOptional(),
    FileSystemAssociationStatus: FileSystemAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the file system association. Valid Values: <code>AVAILABLE</code> | <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> | <code>UPDATING</code> | <code>ERROR</code> ',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for the audit logs.',
        }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair.',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.exactOptional(),
    EndpointNetworkConfiguration: EndpointNetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies network configuration information for the gateway associated with the Amazon FSx file system.</p> <note> <p>If multiple file systems are associated with this gateway, this parameter's <code>IpAddresses</code> field is required.</p> </note>",
        }),
    ).exactOptional(),
    FileSystemAssociationStatusDetails: FileSystemAssociationStatusDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the FileSystemAssociationStatusDetail data type, which provides detailed information on file system association status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the object returned by <code>DescribeFileSystemAssociations</code> that describes a created file system association.',
    required: [],
  })
  .openapi('FileSystemAssociationInfo')

const FileSystemAssociationInfoListSchema = z
  .array(FileSystemAssociationInfoSchema)
  .openapi('FileSystemAssociationInfoList')

const DescribeFileSystemAssociationsOutputSchema = z
  .object({
    FileSystemAssociationInfoList: FileSystemAssociationInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the <code>FileSystemAssociationInfo</code> data type of each file system association to be described. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFileSystemAssociationsOutput')

const FileSystemAssociationARNListSchema = z
  .array(FileSystemAssociationARNSchema)
  .min(1)
  .max(10)
  .openapi('FileSystemAssociationARNList')

const DescribeFileSystemAssociationsInputSchema = z
  .object({
    FileSystemAssociationARNList: FileSystemAssociationARNListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the Amazon Resource Name (ARN) of each file system association to be described.',
        }),
    ),
  })
  .openapi({
    required: ['FileSystemAssociationARNList'],
    title: 'DescribeFileSystemAssociationsInput',
  })
  .openapi('DescribeFileSystemAssociationsInput')

const GatewayIdSchema = z.string().min(12).max(30).openapi('GatewayId')

const GatewayStateSchema = z.string().min(2).max(25).openapi('GatewayState')

const NetworkInterfaceSchema = z
  .object({
    Ipv4Address: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Internet Protocol version 4 (IPv4) address of the interface.',
        }),
    ).exactOptional(),
    MacAddress: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Media Access Control (MAC) address of the interface.</p> <note> <p>This is currently unsupported and will not be returned in output.</p> </note>',
        }),
    ).exactOptional(),
    Ipv6Address: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently not supported</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes a gateway's network interface.", required: [] })
  .openapi('NetworkInterface')

const GatewayNetworkInterfacesSchema = z
  .array(NetworkInterfaceSchema)
  .openapi('GatewayNetworkInterfaces')

const NextUpdateAvailabilityDateSchema = z
  .string()
  .min(1)
  .max(25)
  .openapi('NextUpdateAvailabilityDate')

const LastSoftwareUpdateSchema = z.string().min(1).max(25).openapi('LastSoftwareUpdate')

const Ec2InstanceIdSchema = z.string().openapi('Ec2InstanceId')

const Ec2InstanceRegionSchema = z.string().openapi('Ec2InstanceRegion')

const CloudWatchLogGroupARNSchema = z.string().max(562).openapi('CloudWatchLogGroupARN')

const HostEnvironmentSchema = z
  .enum(['VMWARE', 'HYPER-V', 'EC2', 'KVM', 'OTHER', 'SNOWBALL'])
  .openapi('HostEnvironment')

const EndpointTypeSchema = z.string().min(4).max(8).openapi('EndpointType')

const SoftwareUpdatesEndDateSchema = z.string().min(1).max(25).openapi('SoftwareUpdatesEndDate')

const DeprecationDateSchema = z.string().min(1).max(25).openapi('DeprecationDate')

const GatewayCapacitySchema = z.enum(['Small', 'Medium', 'Large']).openapi('GatewayCapacity')

const SupportedGatewayCapacitiesSchema = z
  .array(GatewayCapacitySchema)
  .openapi('SupportedGatewayCapacities')

const HostEnvironmentIdSchema = z.string().min(1).max(1024).openapi('HostEnvironmentId')

const DescribeGatewayInformationOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    GatewayId: GatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.',
        }),
    ).exactOptional(),
    GatewayName: StringSchema.and(
      z.any().openapi({ description: 'The name you configured for your gateway.' }),
    ).exactOptional(),
    GatewayTimezone: GatewayTimezoneSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that indicates the time zone configured for the gateway.',
        }),
    ).exactOptional(),
    GatewayState: GatewayStateSchema.and(
      z
        .any()
        .openapi({ description: 'A value that indicates the operating state of the gateway.' }),
    ).exactOptional(),
    GatewayNetworkInterfaces: GatewayNetworkInterfacesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>NetworkInterface</a> array that contains descriptions of the gateway network interfaces.',
        }),
    ).exactOptional(),
    GatewayType: GatewayTypeSchema.and(
      z.any().openapi({ description: 'The type of the gateway.' }),
    ).exactOptional(),
    NextUpdateAvailabilityDate: NextUpdateAvailabilityDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.',
        }),
    ).exactOptional(),
    LastSoftwareUpdate: LastSoftwareUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response. This only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM',
        }),
    ).exactOptional(),
    Ec2InstanceId: Ec2InstanceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon EC2 instance that was used to launch the gateway.',
        }),
    ).exactOptional(),
    Ec2InstanceRegion: Ec2InstanceRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the Amazon EC2 instance is located.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.',
        }),
    ).exactOptional(),
    VPCEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings for the virtual private cloud (VPC) endpoint for your gateway.',
        }),
    ).exactOptional(),
    CloudWatchLogGroupARN: CloudWatchLogGroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor events in the gateway. This field only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM',
        }),
    ).exactOptional(),
    HostEnvironment: HostEnvironmentSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of hardware or software platform on which the gateway is running.',
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of endpoint for your gateway.</p> <p>Valid Values: <code>STANDARD</code> | <code>FIPS</code> </p>',
        }),
    ).exactOptional(),
    SoftwareUpdatesEndDate: SoftwareUpdatesEndDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date after which this gateway will not receive software updates for new features.',
        }),
    ).exactOptional(),
    DeprecationDate: DeprecationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Date after which this gateway will not receive software updates for new features and bug fixes.',
        }),
    ).exactOptional(),
    GatewayCapacity: GatewayCapacitySchema.and(
      z.any().openapi({ description: "Specifies the size of the gateway's metadata cache." }),
    ).exactOptional(),
    SupportedGatewayCapacities: SupportedGatewayCapacitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the metadata cache sizes that the gateway can support based on its current hardware specifications.',
        }),
    ).exactOptional(),
    HostEnvironmentId: HostEnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      GatewayId: 'sgw-AABB1122',
      GatewayName: 'My_Gateway',
      GatewayNetworkInterfaces: [{ Ipv4Address: '10.35.69.216' }],
      GatewayState: 'STATE_RUNNING',
      GatewayTimezone: 'GMT-8:00',
      GatewayType: 'STORED',
      LastSoftwareUpdate: '2016-01-02T16:00:00',
      NextUpdateAvailabilityDate: '2017-01-02T16:00:00',
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DescribeGatewayInformationOutput')

const DescribeGatewayInformationInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeGatewayInformationInput',
    description: 'A JSON object containing the ID of the gateway.',
  })
  .openapi('DescribeGatewayInformationInput')

const DayOfMonthSchema = z.int().min(1).max(28).openapi('DayOfMonth')

const DescribeMaintenanceStartTimeOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    HourOfDay: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hour component of the maintenance start time represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.',
        }),
    ).exactOptional(),
    MinuteOfHour: MinuteOfHourSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minute component of the maintenance start time represented as <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.',
        }),
    ).exactOptional(),
    DayOfWeek: DayOfWeekSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.',
        }),
    ).exactOptional(),
    DayOfMonth: DayOfMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.',
        }),
    ).exactOptional(),
    Timezone: GatewayTimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates the time zone that is set for the gateway. The start time and day of week specified should be in the time zone of the gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DayOfWeek: 2,
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      HourOfDay: 15,
      MinuteOfHour: 35,
      Timezone: 'GMT+7:00',
    },
    description:
      '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('DescribeMaintenanceStartTimeOutput')

const DescribeMaintenanceStartTimeInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeMaintenanceStartTimeInput',
    description: 'A JSON object containing the Amazon Resource Name (ARN) of the gateway.',
  })
  .openapi('DescribeMaintenanceStartTimeInput')

const FileShareIdSchema = z
  .string()
  .min(12)
  .max(30)
  .openapi({ description: 'The ID of the file share.' })
  .openapi('FileShareId')

const FileShareStatusSchema = z
  .string()
  .min(3)
  .max(50)
  .openapi({
    description:
      '<p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>',
  })
  .openapi('FileShareStatus')

const PathSchema = z
  .string()
  .openapi({
    description: 'The file share path used by the NFS client to identify the mount point.',
  })
  .openapi('Path')

const NFSFileShareInfoSchema = z
  .object({
    NFSFileShareDefaults: NFSFileShareDefaultsSchema.exactOptional(),
    FileShareARN: FileShareARNSchema.exactOptional(),
    FileShareId: FileShareIdSchema.exactOptional(),
    FileShareStatus: FileShareStatusSchema.exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
    KMSEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    Path: PathSchema.exactOptional(),
    Role: RoleSchema.exactOptional(),
    LocationARN: LocationARNSchema.exactOptional(),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.exactOptional(),
    ClientList: FileShareClientListSchema.exactOptional(),
    Squash: SquashSchema.exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set the write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.',
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    VPCEndpointDNSName: DNSHostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3.</p> <note> <p>This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    BucketRegion: RegionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Region of the S3 bucket where the NFS file share stores files.</p> <note> <p>This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Unix file permissions and ownership information assigned, by default, to native S3 objects when an S3 File Gateway discovers them in S3 buckets. This operation is only supported in S3 File Gateways.',
    required: [],
  })
  .openapi('NFSFileShareInfo')

const NFSFileShareInfoListSchema = z.array(NFSFileShareInfoSchema).openapi('NFSFileShareInfoList')

const DescribeNFSFileSharesOutputSchema = z
  .object({
    NFSFileShareInfoList: NFSFileShareInfoListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array containing a description for each requested file share.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeNFSFileSharesOutput', required: [] })
  .openapi('DescribeNFSFileSharesOutput')

const FileShareARNListSchema = z
  .array(FileShareARNSchema)
  .min(1)
  .max(10)
  .openapi('FileShareARNList')

const DescribeNFSFileSharesInputSchema = z
  .object({
    FileShareARNList: FileShareARNListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the Amazon Resource Name (ARN) of each file share to be described.',
        }),
    ),
  })
  .openapi({
    required: ['FileShareARNList'],
    title: 'DescribeNFSFileSharesInput',
    description: 'DescribeNFSFileSharesInput',
  })
  .openapi('DescribeNFSFileSharesInput')

const SMBFileShareInfoSchema = z
  .object({
    FileShareARN: FileShareARNSchema.exactOptional(),
    FileShareId: FileShareIdSchema.exactOptional(),
    FileShareStatus: FileShareStatusSchema.exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
    KMSEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    Path: PathSchema.and(
      z
        .any()
        .openapi({
          description: 'The file share path used by the SMB client to identify the mount point.',
        }),
    ).exactOptional(),
    Role: RoleSchema.exactOptional(),
    LocationARN: LocationARNSchema.exactOptional(),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set the write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    SMBACLEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If this value is set to <code>true</code>, it indicates that access control list (ACL) is enabled on the SMB file share. If it is set to <code>false</code>, it indicates that file and directory permissions are mapped to the POSIX permission.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to control access to an SMB file share</a> in the <i>Storage Gateway User Guide</i>.</p>',
        }),
    ).exactOptional(),
    AccessBasedEnumeration: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether <code>AccessBasedEnumeration</code> is enabled.',
        }),
    ).exactOptional(),
    AdminUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    ValidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    InvalidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
    Authentication: AuthenticationSchema.exactOptional(),
    CaseSensitivity: CaseSensitivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default value is <code>ClientSpecified</code>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.',
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    VPCEndpointDNSName: DNSHostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3.</p> <note> <p>This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    BucketRegion: RegionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Region of the S3 bucket where the SMB file share stores files.</p> <note> <p>This parameter is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.</p> </note>',
        }),
    ).exactOptional(),
    OplocksEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether opportunistic locking is enabled for the SMB file share.</p> <note> <p>Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Windows file permissions and ownership information assigned, by default, to native S3 objects when S3 File Gateway discovers them in S3 buckets. This operation is only supported for S3 File Gateways.',
    required: [],
  })
  .openapi('SMBFileShareInfo')

const SMBFileShareInfoListSchema = z.array(SMBFileShareInfoSchema).openapi('SMBFileShareInfoList')

const DescribeSMBFileSharesOutputSchema = z
  .object({
    SMBFileShareInfoList: SMBFileShareInfoListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array containing a description for each requested file share.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeSMBFileSharesOutput', required: [] })
  .openapi('DescribeSMBFileSharesOutput')

const DescribeSMBFileSharesInputSchema = z
  .object({
    FileShareARNList: FileShareARNListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the Amazon Resource Name (ARN) of each file share to be described.',
        }),
    ),
  })
  .openapi({
    required: ['FileShareARNList'],
    title: 'DescribeSMBFileSharesInput',
    description: 'DescribeSMBFileSharesInput',
  })
  .openapi('DescribeSMBFileSharesInput')

const DomainNameSchema = z
  .string()
  .regex(/^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+$/)
  .min(1)
  .max(1024)
  .openapi('DomainName')

const ActiveDirectoryStatusSchema = z
  .enum([
    'ACCESS_DENIED',
    'DETACHED',
    'JOINED',
    'JOINING',
    'NETWORK_ERROR',
    'TIMEOUT',
    'UNKNOWN_ERROR',
  ])
  .openapi('ActiveDirectoryStatus')

const SMBSecurityStrategySchema = z
  .enum(['ClientSpecified', 'MandatorySigning', 'MandatoryEncryption'])
  .openapi('SMBSecurityStrategy')

const SMBLocalGroupsSchema = z
  .object({
    GatewayAdmins: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Active Directory users and groups that have local Gateway Admin permissions. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>DOMAIN\\group1</code>, and <code>group1</code>.</p> <p>Gateway Admins can use the Shared Folders Microsoft Management Console snap-in to force-close files that are open and locked.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.',
    required: [],
  })
  .openapi('SMBLocalGroups')

const DescribeSMBSettingsOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain that the gateway is joined to.' }),
    ).exactOptional(),
    ActiveDirectoryStatus: ActiveDirectoryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates the status of a gateway that is a member of the Active Directory domain.</p> <ul> <li> <p> <code>ACCESS_DENIED</code>: Indicates that the <code>JoinDomain</code> operation failed due to an authentication error.</p> </li> <li> <p> <code>DETACHED</code>: Indicates that gateway is not joined to a domain.</p> </li> <li> <p> <code>JOINED</code>: Indicates that the gateway has successfully joined a domain.</p> </li> <li> <p> <code>JOINING</code>: Indicates that a <code>JoinDomain</code> operation is in progress.</p> </li> <li> <p> <code>NETWORK_ERROR</code>: Indicates that <code>JoinDomain</code> operation failed due to a network or connectivity error.</p> </li> <li> <p> <code>TIMEOUT</code>: Indicates that the <code>JoinDomain</code> operation failed because the operation didn't complete within the allotted time.</p> </li> <li> <p> <code>UNKNOWN_ERROR</code>: Indicates that the <code>JoinDomain</code> operation failed due to another type of error.</p> </li> </ul>",
        }),
    ).exactOptional(),
    SMBGuestPasswordSet: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This value is <code>true</code> if a password for the guest user <code>smbguest</code> is set, otherwise <code>false</code>. Only supported for S3 File Gateways.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    SMBSecurityStrategy: SMBSecurityStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of security strategy that was specified for file gateway.</p> <ul> <li> <p> <code>ClientSpecified</code>: If you use this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Only supported for S3 File Gateways.</p> </li> <li> <p> <code>MandatorySigning</code>: If you use this option, file gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.</p> </li> <li> <p> <code>MandatoryEncryption</code>: If you use this option, file gateway only allows connections from SMBv3 clients that have encryption enabled. This option is highly recommended for environments that handle sensitive data. This option works with SMB clients on Microsoft Windows 8, Windows Server 2012 or newer.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FileSharesVisible: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The shares on this gateway appear when listing shares. Only supported for S3 File Gateways. ',
        }),
    ).exactOptional(),
    SMBLocalGroups: SMBLocalGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSMBSettingsOutput')

const DescribeSMBSettingsInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DescribeSMBSettingsInput' })
  .openapi('DescribeSMBSettingsInput')

const RecurrenceInHoursSchema = z.int().min(1).max(24).openapi('RecurrenceInHours')

const DescriptionSchema = z.string().min(1).max(255).openapi('Description')

const DescribeSnapshotScheduleOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume that was specified in the request.',
        }),
    ).exactOptional(),
    StartAt: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hour of the day at which the snapshot schedule begins represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.',
        }),
    ).exactOptional(),
    RecurrenceInHours: RecurrenceInHoursSchema.and(
      z.any().openapi({ description: 'The number of hours between snapshots.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The snapshot description.' }),
    ).exactOptional(),
    Timezone: GatewayTimezoneSchema.and(
      z.any().openapi({ description: 'A value that indicates the time zone of the gateway.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Description: 'sgw-AABB1122:vol-AABB1122:Schedule',
      RecurrenceInHours: 24,
      StartAt: 6,
      Timezone: 'GMT+7:00',
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    required: [],
  })
  .openapi('DescribeSnapshotScheduleOutput')

const DescribeSnapshotScheduleInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.',
        }),
    ),
  })
  .openapi({
    required: ['VolumeARN'],
    title: 'DescribeSnapshotScheduleInput',
    description:
      'A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.',
  })
  .openapi('DescribeSnapshotScheduleInput')

const StorediSCSIVolumeSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the storage volume.' }),
    ).exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the volume, e.g., vol-AE4B946D.' }),
    ).exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeType enumeration values describing the type of the volume.',
        }),
    ).exactOptional(),
    VolumeStatus: VolumeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeStatus values that indicates the state of the storage volume.',
        }),
    ).exactOptional(),
    VolumeAttachmentStatus: VolumeAttachmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving your volumes to a different gateway</a>.',
        }),
    ).exactOptional(),
    VolumeSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the volume in bytes.' }),
    ).exactOptional(),
    VolumeProgress: DoubleObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.',
        }),
    ).exactOptional(),
    VolumeDiskId: DiskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.',
        }),
    ).exactOptional(),
    SourceSnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.',
        }),
    ).exactOptional(),
    PreservedExistingData: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    VolumeiSCSIAttributes: VolumeiSCSIAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.',
        }),
    ).exactOptional(),
    CreatedDate: CreatedDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp.',
        }),
    ).exactOptional(),
    VolumeUsedInBytes: VolumeUsedInBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the volume, which is the value that is used to calculate your bill.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    TargetName: TargetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an iSCSI stored volume.', required: [] })
  .openapi('StorediSCSIVolume')

const StorediSCSIVolumesSchema = z.array(StorediSCSIVolumeSchema).openapi('StorediSCSIVolumes')

const DescribeStorediSCSIVolumesOutputSchema = z
  .object({
    StorediSCSIVolumes: StorediSCSIVolumesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes a single unit of output from <a>DescribeStorediSCSIVolumes</a>. The following fields are returned:</p> <ul> <li> <p> <code>ChapEnabled</code>: Indicates whether mutual CHAP is enabled for the iSCSI target.</p> </li> <li> <p> <code>LunNumber</code>: The logical disk number.</p> </li> <li> <p> <code>NetworkInterfaceId</code>: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target.</p> </li> <li> <p> <code>NetworkInterfacePort</code>: The port used to communicate with iSCSI targets.</p> </li> <li> <p> <code>PreservedExistingData</code>: Indicates when the stored volume was created, existing data on the underlying local disk was preserved.</p> </li> <li> <p> <code>SourceSnapshotId</code>: If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. <code>snap-1122aabb</code>. Otherwise, this field is not included.</p> </li> <li> <p> <code>StorediSCSIVolumes</code>: An array of StorediSCSIVolume objects where each object contains metadata about one stored volume.</p> </li> <li> <p> <code>TargetARN</code>: The Amazon Resource Name (ARN) of the volume target.</p> </li> <li> <p> <code>VolumeARN</code>: The Amazon Resource Name (ARN) of the stored volume.</p> </li> <li> <p> <code>VolumeDiskId</code>: The disk ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p> </li> <li> <p> <code>VolumeId</code>: The unique identifier of the storage volume, e.g. <code>vol-1122AABB</code>.</p> </li> <li> <p> <code>VolumeiSCSIAttributes</code>: An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p> </li> <li> <p> <code>VolumeProgress</code>: Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.</p> </li> <li> <p> <code>VolumeSizeInBytes</code>: The size of the volume in bytes.</p> </li> <li> <p> <code>VolumeStatus</code>: One of the <code>VolumeStatus</code> values that indicates the state of the volume.</p> </li> <li> <p> <code>VolumeType</code>: One of the enumeration values describing the type of the volume. Currently, only <code>STORED</code> volumes are supported.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      StorediSCSIVolumes: [
        {
          PreservedExistingData: false,
          VolumeARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
          VolumeDiskId: 'pci-0000:03:00.0-scsi-0:0:0:0',
          VolumeId: 'vol-1122AABB',
          VolumeProgress: 23.7,
          VolumeSizeInBytes: 1099511627776,
          VolumeStatus: 'BOOTSTRAPPING',
          VolumeiSCSIAttributes: {
            ChapEnabled: true,
            NetworkInterfaceId: '10.243.43.207',
            NetworkInterfacePort: 3260,
            TargetARN:
              'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
          },
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeStorediSCSIVolumesOutput')

const DescribeStorediSCSIVolumesInputSchema = z
  .object({
    VolumeARNs: VolumeARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must be from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.',
        }),
    ),
  })
  .openapi({
    required: ['VolumeARNs'],
    title: 'DescribeStorediSCSIVolumesInput',
    description:
      'A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.',
  })
  .openapi('DescribeStorediSCSIVolumesInput')

const TapeArchiveStatusSchema = z.string().openapi('TapeArchiveStatus')

const TapeUsageSchema = z.int().openapi('TapeUsage')

const TapeArchiveSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of an archived virtual tape.' }),
    ).exactOptional(),
    TapeBarcode: TapeBarcodeSchema.and(
      z.any().openapi({ description: 'The barcode that identifies the archived virtual tape.' }),
    ).exactOptional(),
    TapeCreatedDate: TimeSchema.and(
      z.any().openapi({ description: 'The date the virtual tape was created.' }),
    ).exactOptional(),
    TapeSizeInBytes: TapeSizeSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the archived virtual tape.' }),
    ).exactOptional(),
    CompletionTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time that the archiving of the virtual tape was completed.</p> <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>",
        }),
    ).exactOptional(),
    RetrievedTo: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to.</p> <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>',
        }),
    ).exactOptional(),
    TapeStatus: TapeArchiveStatusSchema.and(
      z.any().openapi({ description: 'The current state of the archived virtual tape.' }),
    ).exactOptional(),
    TapeUsedInBytes: TapeUsageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.',
        }),
    ).exactOptional(),
    Worm: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> if the archived tape is stored as write-once-read-many (WORM).',
        }),
    ).exactOptional(),
    RetentionStartDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the archived tape is subject to tape retention lock, the date that the archived tape started being retained.',
        }),
    ).exactOptional(),
    PoolEntryDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time that the tape entered the custom tape pool.</p> <p>The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a virtual tape that is archived in the virtual tape shelf (VTS).',
    required: [],
  })
  .openapi('TapeArchive')

const TapeArchivesSchema = z.array(TapeArchiveSchema).openapi('TapeArchives')

const MarkerSchema = z.string().min(1).max(1000).openapi('Marker')

const DescribeTapeArchivesOutputSchema = z
  .object({
    TapeArchives: TapeArchivesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of the description, and tape barcode.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which the virtual tapes that were fetched for description ended. Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field does not appear in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Marker: '1',
      TapeArchives: [
        {
          CompletionTime: '2016-12-16T13:50Z',
          TapeARN: 'arn:aws:storagegateway:us-east-1:999999999:tape/AM08A1AD',
          TapeBarcode: 'AM08A1AD',
          TapeSizeInBytes: 107374182400,
          TapeStatus: 'ARCHIVED',
        },
        {
          CompletionTime: '2016-12-16T13:59Z',
          TapeARN: 'arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4',
          TapeBarcode: 'AMZN01A2A4',
          TapeSizeInBytes: 429496729600,
          TapeStatus: 'ARCHIVED',
        },
      ],
    },
    description: 'DescribeTapeArchivesOutput',
    required: [],
  })
  .openapi('DescribeTapeArchivesOutput')

const DescribeTapeArchivesInputSchema = z
  .object({
    TapeARNs: TapeARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin describing virtual tapes.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the number of virtual tapes described be limited to the specified number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeTapeArchivesInput',
    description: 'DescribeTapeArchivesInput',
    required: [],
  })
  .openapi('DescribeTapeArchivesInput')

const TapeRecoveryPointStatusSchema = z.string().openapi('TapeRecoveryPointStatus')

const TapeRecoveryPointInfoSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the virtual tape.' }),
    ).exactOptional(),
    TapeRecoveryPointTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the point-in-time view of the virtual tape was replicated for later recovery.</p> <p>The default timestamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>",
        }),
    ).exactOptional(),
    TapeSizeInBytes: TapeSizeSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the virtual tapes to recover.' }),
    ).exactOptional(),
    TapeStatus: TapeRecoveryPointStatusSchema.and(
      z.any().openapi({ description: 'The status of the virtual tapes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a recovery point.', required: [] })
  .openapi('TapeRecoveryPointInfo')

const TapeRecoveryPointInfosSchema = z
  .array(TapeRecoveryPointInfoSchema)
  .openapi('TapeRecoveryPointInfos')

const DescribeTapeRecoveryPointsOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    TapeRecoveryPointInfos: TapeRecoveryPointInfosSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of TapeRecoveryPointInfos that are available for the specified gateway.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended.</p> <p>Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      Marker: '1',
      TapeRecoveryPointInfos: [
        {
          TapeARN: 'arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4',
          TapeRecoveryPointTime: '2016-12-16T13:50Z',
          TapeSizeInBytes: 1471550497,
          TapeStatus: 'AVAILABLE',
        },
      ],
    },
    description: 'DescribeTapeRecoveryPointsOutput',
    required: [],
  })
  .openapi('DescribeTapeRecoveryPointsOutput')

const DescribeTapeRecoveryPointsInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin describing the virtual tape recovery points.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the number of virtual tape recovery points that are described be limited to the specified number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeTapeRecoveryPointsInput',
    description: 'DescribeTapeRecoveryPointsInput',
  })
  .openapi('DescribeTapeRecoveryPointsInput')

const TapeStatusSchema = z.string().openapi('TapeStatus')

const VTLDeviceARNSchema = z.string().min(50).max(500).openapi('VTLDeviceARN')

const TapeSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the virtual tape.' }),
    ).exactOptional(),
    TapeBarcode: TapeBarcodeSchema.and(
      z.any().openapi({ description: 'The barcode that identifies a specific virtual tape.' }),
    ).exactOptional(),
    TapeCreatedDate: TimeSchema.and(
      z.any().openapi({ description: 'The date the virtual tape was created.' }),
    ).exactOptional(),
    TapeSizeInBytes: TapeSizeSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the virtual tape capacity.' }),
    ).exactOptional(),
    TapeStatus: TapeStatusSchema.and(
      z.any().openapi({ description: 'The current state of the virtual tape.' }),
    ).exactOptional(),
    VTLDevice: VTLDeviceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The virtual tape library (VTL) device that the virtual tape is associated with.',
        }),
    ).exactOptional(),
    Progress: DoubleObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete.</p> <p>Range: 0 (not started) to 100 (complete).</p>',
        }),
    ).exactOptional(),
    TapeUsedInBytes: TapeUsageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.exactOptional(),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ).exactOptional(),
    Worm: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the tape is archived as write-once-read-many (WORM), this value is <code>true</code>.',
        }),
    ).exactOptional(),
    RetentionStartDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date that the tape is first archived with tape retention lock enabled.',
        }),
    ).exactOptional(),
    PoolEntryDate: TimeSchema.and(
      z.any().openapi({ description: 'The date that the tape enters a custom tape pool.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a virtual tape object.', required: [] })
  .openapi('Tape')

const TapesSchema = z.array(TapeSchema).openapi('Tapes')

const DescribeTapesOutputSchema = z
  .object({
    Tapes: TapesSchema.and(
      z.any().openapi({ description: 'An array of virtual tape descriptions.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An opaque string that can be used as part of a subsequent <code>DescribeTapes</code> call to retrieve the next page of results.</p> <p>If a response does not contain a marker, then there are no more results to be retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Marker: '1',
      Tapes: [
        {
          TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1',
          TapeBarcode: 'TEST04A2A1',
          TapeSizeInBytes: 107374182400,
          TapeStatus: 'AVAILABLE',
        },
        {
          TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0',
          TapeBarcode: 'TEST05A2A0',
          TapeSizeInBytes: 107374182400,
          TapeStatus: 'AVAILABLE',
        },
      ],
    },
    description: 'DescribeTapesOutput',
    required: [],
  })
  .openapi('DescribeTapesOutput')

const DescribeTapesInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    TapeARNs: TapeARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe. If this parameter is not specified, Tape gateway returns a description of all virtual tapes associated with the specified gateway.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This marker indicates which page of results to retrieve.</p> <p>If not specified, the first page of results is retrieved.</p>',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that the number of virtual tapes described be limited to the specified number.</p> <note> <p>Amazon Web Services may impose its own limit, if this field is not set.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeTapesInput',
    description: 'DescribeTapesInput',
  })
  .openapi('DescribeTapesInput')

const DescribeUploadBufferOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.",
        }),
    ).exactOptional(),
    UploadBufferUsedInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description: "The total number of bytes being used in the gateway's upload buffer.",
        }),
    ).exactOptional(),
    UploadBufferAllocatedInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description: "The total number of bytes allocated in the gateway's as upload buffer.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DiskIds: ['pci-0000:03:00.0-scsi-0:0:0:0', 'pci-0000:04:00.0-scsi-0:1:0:0'],
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      UploadBufferAllocatedInBytes: 161061273600,
      UploadBufferUsedInBytes: 0,
    },
    required: [],
  })
  .openapi('DescribeUploadBufferOutput')

const DescribeUploadBufferInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'DescribeUploadBufferInput' })
  .openapi('DescribeUploadBufferInput')

const VTLDeviceTypeSchema = z.string().openapi('VTLDeviceType')

const VTLDeviceVendorSchema = z.string().openapi('VTLDeviceVendor')

const VTLDeviceProductIdentifierSchema = z.string().openapi('VTLDeviceProductIdentifier')

const DeviceiSCSIAttributesSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.',
        }),
    ).exactOptional(),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z.any().openapi({ description: 'The network interface identifier of the VTL device.' }),
    ).exactOptional(),
    NetworkInterfacePort: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The port used to communicate with iSCSI VTL device targets.' }),
    ).exactOptional(),
    ChapEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether mutual CHAP is enabled for the iSCSI target.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lists iSCSI information about a VTL device.', required: [] })
  .openapi('DeviceiSCSIAttributes')

const VTLDeviceSchema = z
  .object({
    VTLDeviceARN: VTLDeviceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).',
        }),
    ).exactOptional(),
    VTLDeviceType: VTLDeviceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the type of device that the VTL device emulates.' }),
    ).exactOptional(),
    VTLDeviceVendor: VTLDeviceVendorSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the vendor of the device that the VTL device object emulates.',
        }),
    ).exactOptional(),
    VTLDeviceProductIdentifier: VTLDeviceProductIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the model number of device that the VTL device emulates.',
        }),
    ).exactOptional(),
    DeviceiSCSIAttributes: DeviceiSCSIAttributesSchema.and(
      z.any().openapi({ description: 'A list of iSCSI information about a VTL device.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a device object associated with a tape gateway.',
    required: [],
  })
  .openapi('VTLDevice')

const VTLDevicesSchema = z.array(VTLDeviceSchema).openapi('VTLDevices')

const DescribeVTLDevicesOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    VTLDevices: VTLDevicesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL devices.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which the VTL devices that were fetched for description ended. Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL devices to describe, this field does not appear in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B',
      Marker: '1',
      VTLDevices: [
        {
          DeviceiSCSIAttributes: {
            ChapEnabled: false,
            NetworkInterfaceId: '10.243.43.207',
            NetworkInterfacePort: 3260,
            TargetARN:
              'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-mediachanger',
          },
          VTLDeviceARN:
            'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001',
          VTLDeviceProductIdentifier: 'L700',
          VTLDeviceType: 'Medium Changer',
          VTLDeviceVendor: 'STK',
        },
        {
          DeviceiSCSIAttributes: {
            ChapEnabled: false,
            NetworkInterfaceId: '10.243.43.209',
            NetworkInterfacePort: 3260,
            TargetARN:
              'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-01',
          },
          VTLDeviceARN:
            'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00001',
          VTLDeviceProductIdentifier: 'ULT3580-TD5',
          VTLDeviceType: 'Tape Drive',
          VTLDeviceVendor: 'IBM',
        },
        {
          DeviceiSCSIAttributes: {
            ChapEnabled: false,
            NetworkInterfaceId: '10.243.43.209',
            NetworkInterfacePort: 3260,
            TargetARN:
              'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-02',
          },
          VTLDeviceARN:
            'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00002',
          VTLDeviceProductIdentifier: 'ULT3580-TD5',
          VTLDeviceType: 'Tape Drive',
          VTLDeviceVendor: 'IBM',
        },
      ],
    },
    description: 'DescribeVTLDevicesOutput',
    required: [],
  })
  .openapi('DescribeVTLDevicesOutput')

const VTLDeviceARNsSchema = z.array(VTLDeviceARNSchema).openapi('VTLDeviceARNs')

const DescribeVTLDevicesInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    VTLDeviceARNs: VTLDeviceARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL device.</p> <note> <p>All of the specified VTL devices must be from the same gateway. If no VTL devices are specified, the result will contain all devices on the specified gateway.</p> </note>',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin describing the VTL devices.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the number of VTL devices described be limited to the specified number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeVTLDevicesInput',
    description: 'DescribeVTLDevicesInput',
  })
  .openapi('DescribeVTLDevicesInput')

const DescribeWorkingStorageOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    DiskIds: DiskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.",
        }),
    ).exactOptional(),
    WorkingStorageUsedInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.',
        }),
    ).exactOptional(),
    WorkingStorageAllocatedInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DiskIds: ['pci-0000:03:00.0-scsi-0:0:0:0', 'pci-0000:03:00.0-scsi-0:0:1:0'],
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      WorkingStorageAllocatedInBytes: 2199023255552,
      WorkingStorageUsedInBytes: 789207040,
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('DescribeWorkingStorageOutput')

const DescribeWorkingStorageInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DescribeWorkingStorageInput',
    description: 'A JSON object containing the Amazon Resource Name (ARN) of the gateway.',
  })
  .openapi('DescribeWorkingStorageInput')

const DetachVolumeOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the volume that was detached.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'AttachVolumeOutput', required: [] })
  .openapi('DetachVolumeOutput')

const DetachVolumeInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the volume to detach from the gateway.',
        }),
    ),
    ForceDetach: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to forcibly remove the iSCSI connection of the target volume and detach the volume. The default is <code>false</code>. If this value is set to <code>false</code>, you must manually disconnect the iSCSI connection from the target volume.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeARN'],
    title: 'DetachVolumeInput',
    description: 'AttachVolumeInput',
  })
  .openapi('DetachVolumeInput')

const DisableGatewayOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({ description: 'The unique Amazon Resource Name (ARN) of the disabled gateway.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description: 'DisableGatewayOutput',
    required: [],
  })
  .openapi('DisableGatewayOutput')

const DisableGatewayInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'DisableGatewayInput',
    description: 'DisableGatewayInput',
  })
  .openapi('DisableGatewayInput')

const DisassociateFileSystemOutputSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the deleted file system association.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateFileSystemOutput')

const DisassociateFileSystemInputSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the file system association to be deleted.',
        }),
    ),
    ForceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is set to true, the operation disassociates an Amazon FSx file system immediately. It ends all data uploads to the file system, and the file system association enters the <code>FORCE_DELETING</code> status. If this value is set to false, the Amazon FSx file system does not disassociate until all data is uploaded.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FileSystemAssociationARN'], title: 'DisassociateFileSystemInput' })
  .openapi('DisassociateFileSystemInput')

const JoinDomainOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique Amazon Resource Name (ARN) of the gateway that joined the domain.',
        }),
    ).exactOptional(),
    ActiveDirectoryStatus: ActiveDirectoryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates the status of the gateway as a member of the Active Directory domain.</p> <ul> <li> <p> <code>ACCESS_DENIED</code>: Indicates that the <code>JoinDomain</code> operation failed due to an authentication error.</p> </li> <li> <p> <code>DETACHED</code>: Indicates that gateway is not joined to a domain.</p> </li> <li> <p> <code>JOINED</code>: Indicates that the gateway has successfully joined a domain.</p> </li> <li> <p> <code>JOINING</code>: Indicates that a <code>JoinDomain</code> operation is in progress.</p> </li> <li> <p> <code>NETWORK_ERROR</code>: Indicates that <code>JoinDomain</code> operation failed due to a network or connectivity error.</p> </li> <li> <p> <code>TIMEOUT</code>: Indicates that the <code>JoinDomain</code> operation failed because the operation didn't complete within the allotted time.</p> </li> <li> <p> <code>UNKNOWN_ERROR</code>: Indicates that the <code>JoinDomain</code> operation failed due to another type of error.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'JoinDomainOutput', required: [] })
  .openapi('JoinDomainOutput')

const OrganizationalUnitSchema = z.string().min(1).max(1024).openapi('OrganizationalUnit')

const HostSchema = z
  .string()
  .regex(/^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])(:(\d+))?$/)
  .min(6)
  .max(1024)
  .openapi('Host')

const HostsSchema = z.array(HostSchema).openapi('Hosts')

const TimeoutInSecondsSchema = z.int().min(0).max(3600).openapi('TimeoutInSeconds')

const JoinDomainInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain that you want the gateway to join.' }),
    ),
    OrganizationalUnit: OrganizationalUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The organizational unit (OU) is a container in an Active Directory that can hold users, groups, computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.',
        }),
    ).exactOptional(),
    DomainControllers: HostsSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number include it after the colon (“:”). For example, <code>mydc.mydomain.com:389</code>.',
        }),
    ).exactOptional(),
    TimeoutInSeconds: TimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time in seconds, in which the <code>JoinDomain</code> operation must complete. The default is 20 seconds.',
        }),
    ).exactOptional(),
    UserName: DomainUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the user name of user who has permission to add the gateway to the Active Directory domain. The domain user account should be enabled to join computers to the domain. For example, you can use the domain administrator account or an account with delegated permissions to join computers to the domain.',
        }),
    ),
    Password: DomainUserPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the password of the user who has permission to add the gateway to the Active Directory domain.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'DomainName', 'UserName', 'Password'],
    title: 'JoinDomainInput',
    description: 'JoinDomainInput',
  })
  .openapi('JoinDomainInput')

const MinimumNumTapesSchema = z.int().min(1).max(10).openapi('MinimumNumTapes')

const AutomaticTapeCreationRuleSchema = z
  .object({
    TapeBarcodePrefix: TapeBarcodePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A prefix that you append to the barcode of the virtual tape that you are creating. This prefix makes the barcode unique.</p> <note> <p>The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.</p> </note>',
        }),
    ),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the Amazon S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ),
    TapeSizeInBytes: TapeSizeSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of the virtual tape capacity.' }),
    ),
    MinimumNumTapes: MinimumNumTapesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of available virtual tapes that the gateway maintains at all times. If the number of tapes on the gateway goes below this value, the gateway creates as many new tapes as are needed to have <code>MinimumNumTapes</code> on the gateway. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.',
        }),
    ),
    Worm: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to indicate that tapes are to be archived as write-once-read-many (WORM). Set to <code>false</code> when WORM is not enabled for tapes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TapeBarcodePrefix', 'PoolId', 'TapeSizeInBytes', 'MinimumNumTapes'],
    description:
      'An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.',
  })
  .openapi('AutomaticTapeCreationRule')

const AutomaticTapeCreationRulesSchema = z
  .array(AutomaticTapeCreationRuleSchema)
  .min(1)
  .max(10)
  .openapi('AutomaticTapeCreationRules')

const AutomaticTapeCreationPolicyInfoSchema = z
  .object({
    AutomaticTapeCreationRules: AutomaticTapeCreationRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An automatic tape creation policy consists of a list of automatic tape creation rules. This returns the rules that determine when and how to automatically create new tapes.',
        }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
  })
  .openapi({
    description:
      "Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.",
    required: [],
  })
  .openapi('AutomaticTapeCreationPolicyInfo')

const AutomaticTapeCreationPolicyInfosSchema = z
  .array(AutomaticTapeCreationPolicyInfoSchema)
  .openapi('AutomaticTapeCreationPolicyInfos')

const ListAutomaticTapeCreationPoliciesOutputSchema = z
  .object({
    AutomaticTapeCreationPolicyInfos: AutomaticTapeCreationPolicyInfosSchema.and(
      z
        .any()
        .openapi({
          description:
            "Gets a listing of information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAutomaticTapeCreationPoliciesOutput')

const ListAutomaticTapeCreationPoliciesInputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ title: 'ListAutomaticTapeCreationPoliciesInput', required: [] })
  .openapi('ListAutomaticTapeCreationPoliciesInput')

const FileShareTypeSchema = z
  .enum(['NFS', 'SMB'])
  .openapi({ description: 'The type of the file share.' })
  .openapi('FileShareType')

const FileShareInfoSchema = z
  .object({
    FileShareType: FileShareTypeSchema.exactOptional(),
    FileShareARN: FileShareARNSchema.exactOptional(),
    FileShareId: FileShareIdSchema.exactOptional(),
    FileShareStatus: FileShareStatusSchema.exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
  })
  .openapi({ description: 'Describes a file share. Only supported S3 File Gateway.', required: [] })
  .openapi('FileShareInfo')

const FileShareInfoListSchema = z.array(FileShareInfoSchema).openapi('FileShareInfoList')

const ListFileSharesOutputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the request includes <code>Marker</code>, the response returns that value in this field.',
        }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a value is present, there are more file shares to return. In a subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set of file shares.',
        }),
    ).exactOptional(),
    FileShareInfoList: FileShareInfoListSchema.and(
      z
        .any()
        .openapi({
          description: "An array of information about the S3 File Gateway's file shares.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListFileShareOutput', required: [] })
  .openapi('ListFileSharesOutput')

const ListFileSharesInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present, all file shares under your account are listed.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of file shares to return in the response. The value must be an integer with a value greater than zero. Optional.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opaque pagination token returned from a previous ListFileShares operation. If present, <code>Marker</code> specifies where to continue the list from after a previous call to ListFileShares. Optional.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFileSharesInput', description: 'ListFileShareInput', required: [] })
  .openapi('ListFileSharesInput')

const FileSystemAssociationIdSchema = z.string().min(10).max(30).openapi('FileSystemAssociationId')

const FileSystemAssociationSummarySchema = z
  .object({
    FileSystemAssociationId: FileSystemAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the file system association.' }),
    ).exactOptional(),
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the file system association.' }),
    ).exactOptional(),
    FileSystemAssociationStatus: FileSystemAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the file share. Valid Values: <code>AVAILABLE</code> | <code>CREATING</code> | <code>DELETING</code> | <code>FORCE_DELETING</code> | <code>UPDATING</code> | <code>ERROR</code> ',
        }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
  })
  .openapi({
    description:
      'Gets the summary returned by <code>ListFileSystemAssociation</code>, which is a summary of a created file system association.',
    required: [],
  })
  .openapi('FileSystemAssociationSummary')

const FileSystemAssociationSummaryListSchema = z
  .array(FileSystemAssociationSummarySchema)
  .openapi('FileSystemAssociationSummaryList')

const ListFileSystemAssociationsOutputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the request includes <code>Marker</code>, the response returns that value in this field.',
        }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a value is present, there are more file system associations to return. In a subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set of file system associations.',
        }),
    ).exactOptional(),
    FileSystemAssociationSummaryList: FileSystemAssociationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of information about the Amazon FSx gateway's file system associations.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFileSystemAssociationsOutput')

const ListFileSystemAssociationsInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of file system associations to return in the response. If present, <code>Limit</code> must be an integer with a value greater than zero. Optional.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opaque pagination token returned from a previous <code>ListFileSystemAssociations</code> operation. If present, <code>Marker</code> specifies where to continue the list from after a previous call to <code>ListFileSystemAssociations</code>. Optional.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFileSystemAssociationsInput', required: [] })
  .openapi('ListFileSystemAssociationsInput')

const GatewayOperationalStateSchema = z.string().min(2).max(25).openapi('GatewayOperationalState')

const GatewayInfoSchema = z
  .object({
    GatewayId: GatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.',
        }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ).exactOptional(),
    GatewayType: GatewayTypeSchema.and(
      z.any().openapi({ description: 'The type of the gateway.' }),
    ).exactOptional(),
    GatewayOperationalState: GatewayOperationalStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The state of the gateway.</p> <p>Valid Values: <code>DISABLED</code> | <code>ACTIVE</code> </p>',
        }),
    ).exactOptional(),
    GatewayName: StringSchema.and(
      z.any().openapi({ description: 'The name of the gateway.' }),
    ).exactOptional(),
    Ec2InstanceId: Ec2InstanceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Amazon EC2 instance that was used to launch the gateway.',
        }),
    ).exactOptional(),
    Ec2InstanceRegion: Ec2InstanceRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the Amazon EC2 instance is located.',
        }),
    ).exactOptional(),
    HostEnvironment: HostEnvironmentSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of hardware or software platform on which the gateway is running.',
        }),
    ).exactOptional(),
    HostEnvironmentId: HostEnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a gateway object.', required: [] })
  .openapi('GatewayInfo')

const GatewaysSchema = z.array(GatewayInfoSchema).openapi('Gateways')

const ListGatewaysOutputSchema = z
  .object({
    Gateways: GatewaysSchema.and(
      z.any().openapi({ description: 'An array of <a>GatewayInfo</a> objects.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the marker in your next request to fetch the next set of gateways in the list. If there are no more gateways to list, this field does not appear in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Gateways: [
        { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
        { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-23A4567C' },
      ],
      Marker: '1',
    },
    required: [],
  })
  .openapi('ListGatewaysOutput')

const ListGatewaysInputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin the returned list of gateways.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the list of gateways returned be limited to the specified number of items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListGatewaysInput',
    description:
      '<p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('ListGatewaysInput')

const DiskAllocationTypeSchema = z
  .string()
  .min(3)
  .max(100)
  .openapi({
    description:
      '<p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code> </p>',
  })
  .openapi('DiskAllocationType')

const DiskAttributeSchema = z.string().min(1).max(64).openapi('DiskAttribute')

const DiskAttributeListSchema = z
  .array(DiskAttributeSchema)
  .min(0)
  .max(10)
  .openapi({ description: 'A list of values that represents attributes of a local disk.' })
  .openapi('DiskAttributeList')

const DiskSchema = z
  .object({
    DiskId: DiskIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique device ID or other distinguishing data that identifies a local disk.',
        }),
    ).exactOptional(),
    DiskPath: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The path of a local disk in the gateway virtual machine (VM).' }),
    ).exactOptional(),
    DiskNode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The device node of a local disk as assigned by the virtualization environment.',
        }),
    ).exactOptional(),
    DiskStatus: StringSchema.and(
      z.any().openapi({ description: 'A value that represents the status of a local disk.' }),
    ).exactOptional(),
    DiskSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The local disk size in bytes.' }),
    ).exactOptional(),
    DiskAllocationType: DiskAllocationTypeSchema.exactOptional(),
    DiskAllocationResource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the local disk is not defined as an iSCSI target. The format of this field is <i>targetIqn::LUNNumber::region-volumeId</i>.',
        }),
    ).exactOptional(),
    DiskAttributeList: DiskAttributeListSchema.exactOptional(),
  })
  .openapi({ description: "Represents a gateway's local disk.", required: [] })
  .openapi('Disk')

const DisksSchema = z.array(DiskSchema).openapi('Disks')

const ListLocalDisksOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    Disks: DisksSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListLocalDisksOutput$Disks</a> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Disks: [
        {
          DiskAllocationType: 'CACHE_STORAGE',
          DiskId: 'pci-0000:03:00.0-scsi-0:0:0:0',
          DiskNode: 'SCSI(0:0)',
          DiskPath: '/dev/sda',
          DiskSizeInBytes: 1099511627776,
          DiskStatus: 'missing',
        },
        {
          DiskAllocationResource: '',
          DiskAllocationType: 'UPLOAD_BUFFER',
          DiskId: 'pci-0000:03:00.0-scsi-0:0:1:0',
          DiskNode: 'SCSI(0:1)',
          DiskPath: '/dev/sdb',
          DiskSizeInBytes: 1099511627776,
          DiskStatus: 'present',
        },
      ],
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
    },
    required: [],
  })
  .openapi('ListLocalDisksOutput')

const ListLocalDisksInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'ListLocalDisksInput',
    description: 'A JSON object containing the Amazon Resource Name (ARN) of the gateway.',
  })
  .openapi('ListLocalDisksInput')

const ListTagsForResourceOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which you want to list tags.',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to stop returning the list of tags.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'An array that contains the tags for the specified resource.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Marker: '1',
      ResourceARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B',
      Tags: [{ Key: 'Dev Gatgeway Region', Value: 'East Coast' }],
    },
    description: 'ListTagsForResourceOutput',
    required: [],
  })
  .openapi('ListTagsForResourceOutput')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which you want to list tags.',
        }),
    ),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin returning the list of tags.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the list of tags returned be limited to the specified number of items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    title: 'ListTagsForResourceInput',
    description: 'ListTagsForResourceInput',
  })
  .openapi('ListTagsForResourceInput')

const PoolStatusSchema = z.enum(['ACTIVE', 'DELETED']).openapi('PoolStatus')

const PoolInfoSchema = z
  .object({
    PoolARN: PoolARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom tape pool. Use the <a>ListTapePools</a> operation to return a list of custom tape pools for your account and Amazon Web Services Region.',
        }),
    ).exactOptional(),
    PoolName: PoolNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the custom tape pool. <code>PoolName</code> can use all ASCII characters, except '/' and '\\'.",
        }),
    ).exactOptional(),
    StorageClass: TapeStorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The storage class that is associated with the custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ).exactOptional(),
    RetentionLockType: RetentionLockTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tape retention lock type, which can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.',
        }),
    ).exactOptional(),
    RetentionLockTimeInDays: RetentionLockTimeInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).',
        }),
    ).exactOptional(),
    PoolStatus: PoolStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status of the custom tape pool. Pool can be <code>ACTIVE</code> or <code>DELETED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a custom tape pool.', required: [] })
  .openapi('PoolInfo')

const PoolInfosSchema = z.array(PoolInfoSchema).openapi('PoolInfos')

const ListTapePoolsOutputSchema = z
  .object({
    PoolInfos: PoolInfosSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>PoolInfo</code> objects, where each object describes a single custom tape pool. If there are no custom tape pools, the <code>PoolInfos</code> is an empty array. ',
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates the position at which to begin the returned list of tape pools. Use the marker in your next request to continue pagination of tape pools. If there are no more tape pools to list, this element does not appear in the response body. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTapePoolsOutput')

const PoolARNsSchema = z.array(PoolARNSchema).openapi('PoolARNs')

const ListTapePoolsInputSchema = z
  .object({
    PoolARNs: PoolARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you don't specify a custom tape pool ARN, the response lists all custom tape pools. ",
        }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates the position at which to begin the returned list of tape pools.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional number limit for the tape pools in the list returned by this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTapePoolsInput', required: [] })
  .openapi('ListTapePoolsInput')

const TapeInfoSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a virtual tape.' }),
    ).exactOptional(),
    TapeBarcode: TapeBarcodeSchema.and(
      z.any().openapi({ description: 'The barcode that identifies a specific virtual tape.' }),
    ).exactOptional(),
    TapeSizeInBytes: TapeSizeSchema.and(
      z.any().openapi({ description: 'The size, in bytes, of a virtual tape.' }),
    ).exactOptional(),
    TapeStatus: TapeStatusSchema.and(
      z.any().openapi({ description: 'The status of the tape.' }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.',
        }),
    ).exactOptional(),
    PoolId: PoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
        }),
    ).exactOptional(),
    RetentionStartDate: TimeSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the tape became subject to tape retention lock.' }),
    ).exactOptional(),
    PoolEntryDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the tape entered the custom tape pool with tape retention lock enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a virtual tape.', required: [] })
  .openapi('TapeInfo')

const TapeInfosSchema = z
  .array(TapeInfoSchema)
  .openapi({
    description:
      'An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.',
  })
  .openapi('TapeInfos')

const ListTapesOutputSchema = z
  .object({
    TapeInfos: TapeInfosSchema.exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates the position at which to begin returning the next list of tapes. Use the marker in your next request to continue pagination of tapes. If there are no more tapes to list, this element does not appear in the response body.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('ListTapesOutput')

const ListTapesInputSchema = z
  .object({
    TapeARNs: TapeARNsSchema.exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates the position at which to begin the returned list of tapes.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional number limit for the tapes in the list returned by this call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListTapesInput',
    description:
      '<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('ListTapesInput')

const InitiatorSchema = z.string().min(1).max(50).openapi('Initiator')

const InitiatorsSchema = z.array(InitiatorSchema).openapi('Initiators')

const ListVolumeInitiatorsOutputSchema = z
  .object({
    Initiators: InitiatorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The host names and port numbers of all iSCSI initiators that are connected to the gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListVolumeInitiatorsOutput', required: [] })
  .openapi('ListVolumeInitiatorsOutput')

const ListVolumeInitiatorsInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes for the gateway.',
        }),
    ),
  })
  .openapi({
    required: ['VolumeARN'],
    title: 'ListVolumeInitiatorsInput',
    description: 'ListVolumeInitiatorsInput',
  })
  .openapi('ListVolumeInitiatorsInput')

const VolumeRecoveryPointInfoSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the volume target.' }),
    ).exactOptional(),
    VolumeSizeInBytes: LongSchema.and(
      z.any().openapi({ description: 'The size of the volume in bytes.' }),
    ).exactOptional(),
    VolumeUsageInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size of the data stored on the volume in bytes.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>',
        }),
    ).exactOptional(),
    VolumeRecoveryPointTime: StringSchema.and(
      z.any().openapi({ description: 'The time the recovery point was taken.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a storage volume recovery point object.', required: [] })
  .openapi('VolumeRecoveryPointInfo')

const VolumeRecoveryPointInfosSchema = z
  .array(VolumeRecoveryPointInfoSchema)
  .openapi('VolumeRecoveryPointInfos')

const ListVolumeRecoveryPointsOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    VolumeRecoveryPointInfos: VolumeRecoveryPointInfosSchema.and(
      z.any().openapi({ description: 'An array of <a>VolumeRecoveryPointInfo</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      VolumeRecoveryPointInfos: [
        {
          VolumeARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
          VolumeRecoveryPointTime: '2012-09-04T21:08:44.627Z',
          VolumeSizeInBytes: 536870912000,
        },
      ],
    },
    required: [],
  })
  .openapi('ListVolumeRecoveryPointsOutput')

const ListVolumeRecoveryPointsInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'ListVolumeRecoveryPointsInput' })
  .openapi('ListVolumeRecoveryPointsInput')

const VolumeInfoSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:</p> <p> <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code> </p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>',
        }),
    ).exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>',
        }),
    ).exactOptional(),
    GatewayARN: GatewayARNSchema.exactOptional(),
    GatewayId: GatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>',
        }),
    ).exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeType enumeration values describing the type of the volume.',
        }),
    ).exactOptional(),
    VolumeSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size of the volume in bytes.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>',
        }),
    ).exactOptional(),
    VolumeAttachmentStatus: VolumeAttachmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'One of the VolumeStatus values that indicates the state of the storage volume.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a storage volume object.', required: [] })
  .openapi('VolumeInfo')

const VolumeInfosSchema = z.array(VolumeInfoSchema).openapi('VolumeInfos')

const ListVolumesOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the marker in your next request to continue pagination of iSCSI volumes. If there are no more volumes to list, this field does not appear in the response body.',
        }),
    ).exactOptional(),
    VolumeInfos: VolumeInfosSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <a>VolumeInfo</a> objects, where each object describes an iSCSI volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is an empty array "[]".',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      Marker: '1',
      VolumeInfos: [
        {
          GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
          GatewayId: 'sgw-12A3456B',
          VolumeARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
          VolumeId: 'vol-1122AABB',
          VolumeSizeInBytes: 107374182400,
          VolumeType: 'STORED',
        },
        {
          GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C',
          GatewayId: 'sgw-gw-13B4567C',
          VolumeARN:
            'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C/volume/vol-3344CCDD',
          VolumeId: 'vol-1122AABB',
          VolumeSizeInBytes: 107374182400,
          VolumeType: 'STORED',
        },
      ],
    },
    description:
      '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('ListVolumesOutput')

const ListVolumesInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the response of a previous List iSCSI Volumes request.',
        }),
    ).exactOptional(),
    Limit: PositiveIntObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the list of volumes returned be limited to the specified number of items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListVolumesInput',
    description:
      '<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('ListVolumesInput')

const NotificationIdSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({
    description:
      'The randomly generated ID of the notification that was sent. This ID is in UUID format.',
  })
  .openapi('NotificationId')

const NotifyWhenUploadedOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.exactOptional(),
    NotificationId: NotificationIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotifyWhenUploadedOutput')

const NotifyWhenUploadedInputSchema = z
  .object({ FileShareARN: FileShareARNSchema })
  .openapi({ required: ['FileShareARN'], title: 'NotifyWhenUploadedInput' })
  .openapi('NotifyWhenUploadedInput')

const RefreshCacheOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.exactOptional(),
    NotificationId: NotificationIdSchema.exactOptional(),
  })
  .openapi({ description: 'RefreshCacheOutput', required: [] })
  .openapi('RefreshCacheOutput')

const FolderSchema = z.string().min(1).max(1024).openapi('Folder')

const FolderListSchema = z.array(FolderSchema).min(1).max(50).openapi('FolderList')

const RefreshCacheInputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the file share you want to refresh.',
        }),
    ),
    FolderList: FolderListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of the paths of folders to refresh in the cache. The default is [<code>"/"</code>]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If <code>Recursive</code> is set to <code>true</code>, the entire S3 bucket that the file share has access to is refreshed.',
        }),
    ).exactOptional(),
    Recursive: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that specifies whether to recursively refresh folders in the cache. The refresh includes folders that were in the cache the last time the gateway listed the folder's contents. If this value set to <code>true</code>, each folder that is listed in <code>FolderList</code> is recursively updated. Otherwise, subfolders listed in <code>FolderList</code> are not refreshed. Only objects that are in folders listed directly under <code>FolderList</code> are found and used for the update. The default is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileShareARN'],
    title: 'RefreshCacheInput',
    description: 'RefreshCacheInput',
  })
  .openapi('RefreshCacheInput')

const RemoveTagsFromResourceOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that the tags were removed from.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ResourceARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B' },
    description: 'RemoveTagsFromResourceOutput',
    required: [],
  })
  .openapi('RemoveTagsFromResourceOutput')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const RemoveTagsFromResourceInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource you want to remove the tags from.',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The keys of the tags you want to remove from the specified resource. A tag is composed of a key-value pair.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'TagKeys'],
    title: 'RemoveTagsFromResourceInput',
    description: 'RemoveTagsFromResourceInput',
  })
  .openapi('RemoveTagsFromResourceInput')

const ResetCacheOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C' },
    required: [],
  })
  .openapi('ResetCacheOutput')

const ResetCacheInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'ResetCacheInput' })
  .openapi('ResetCacheInput')

const RetrieveTapeArchiveOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the retrieved virtual tape.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF' },
    description: 'RetrieveTapeArchiveOutput',
    required: [],
  })
  .openapi('RetrieveTapeArchiveOutput')

const RetrieveTapeArchiveInputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape shelf (VTS).',
        }),
    ),
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the <a>ListGateways</a> operation to return a list of gateways for your account and Amazon Web Services Region.</p> <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a tape gateway.</p>',
        }),
    ),
  })
  .openapi({
    required: ['TapeARN', 'GatewayARN'],
    title: 'RetrieveTapeArchiveInput',
    description: 'RetrieveTapeArchiveInput',
  })
  .openapi('RetrieveTapeArchiveInput')

const RetrieveTapeRecoveryPointOutputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { TapeARN: 'arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF' },
    description: 'RetrieveTapeRecoveryPointOutput',
    required: [],
  })
  .openapi('RetrieveTapeRecoveryPointOutput')

const RetrieveTapeRecoveryPointInputSchema = z
  .object({
    TapeARN: TapeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point.',
        }),
    ),
    GatewayARN: GatewayARNSchema,
  })
  .openapi({
    required: ['TapeARN', 'GatewayARN'],
    title: 'RetrieveTapeRecoveryPointInput',
    description: 'RetrieveTapeRecoveryPointInput',
  })
  .openapi('RetrieveTapeRecoveryPointInput')

const SetLocalConsolePasswordOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B' },
    required: [],
  })
  .openapi('SetLocalConsolePasswordOutput')

const LocalConsolePasswordSchema = z
  .string()
  .regex(/^[ -~]+$/)
  .min(6)
  .max(512)
  .openapi('LocalConsolePassword')

const SetLocalConsolePasswordInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    LocalConsolePassword: LocalConsolePasswordSchema.and(
      z.any().openapi({ description: 'The password you want to set for your VM local console.' }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'LocalConsolePassword'],
    title: 'SetLocalConsolePasswordInput',
    description: 'SetLocalConsolePasswordInput',
  })
  .openapi('SetLocalConsolePasswordInput')

const SetSMBGuestPasswordOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SetSMBGuestPasswordOutput')

const SMBGuestPasswordSchema = z
  .string()
  .regex(/^[ -~]+$/)
  .min(6)
  .max(512)
  .openapi('SMBGuestPassword')

const SetSMBGuestPasswordInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated with.',
        }),
    ),
    Password: SMBGuestPasswordSchema.and(
      z.any().openapi({ description: 'The password that you want to set for your SMB server.' }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'Password'],
    title: 'SetSMBGuestPasswordInput',
    description: 'SetSMBGuestPasswordInput',
  })
  .openapi('SetSMBGuestPasswordInput')

const ShutdownGatewayOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down.',
    required: [],
  })
  .openapi('ShutdownGatewayOutput')

const ShutdownGatewayInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'ShutdownGatewayInput',
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down.',
  })
  .openapi('ShutdownGatewayInput')

const StartAvailabilityMonitorTestOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StartAvailabilityMonitorTestOutput')

const StartAvailabilityMonitorTestInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({ required: ['GatewayARN'], title: 'StartAvailabilityMonitorTestInput' })
  .openapi('StartAvailabilityMonitorTestInput')

const StartGatewayOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted.',
    required: [],
  })
  .openapi('StartGatewayOutput')

const StartGatewayInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'StartGatewayInput',
    description: 'A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.',
  })
  .openapi('StartGatewayInput')

const UpdateAutomaticTapeCreationPolicyOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateAutomaticTapeCreationPolicyOutput')

const UpdateAutomaticTapeCreationPolicyInputSchema = z
  .object({
    AutomaticTapeCreationRules: AutomaticTapeCreationRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An automatic tape creation policy consists of a list of automatic tape creation rules. The rules determine when and how to automatically create new tapes.',
        }),
    ),
    GatewayARN: GatewayARNSchema,
  })
  .openapi({
    required: ['AutomaticTapeCreationRules', 'GatewayARN'],
    title: 'UpdateAutomaticTapeCreationPolicyInput',
  })
  .openapi('UpdateAutomaticTapeCreationPolicyInput')

const UpdateBandwidthRateLimitOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated.',
    required: [],
  })
  .openapi('UpdateBandwidthRateLimitOutput')

const UpdateBandwidthRateLimitInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    AverageUploadRateLimitInBitsPerSec: BandwidthUploadRateLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The average upload bandwidth rate limit in bits per second.' }),
    ).exactOptional(),
    AverageDownloadRateLimitInBitsPerSec: BandwidthDownloadRateLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The average download bandwidth rate limit in bits per second.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN'],
    title: 'UpdateBandwidthRateLimitInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>',
  })
  .openapi('UpdateBandwidthRateLimitInput')

const UpdateBandwidthRateLimitScheduleOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateBandwidthRateLimitScheduleOutput')

const UpdateBandwidthRateLimitScheduleInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    BandwidthRateLimitIntervals: BandwidthRateLimitIntervalsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals have been scheduled, the array is empty. ',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'BandwidthRateLimitIntervals'],
    title: 'UpdateBandwidthRateLimitScheduleInput',
  })
  .openapi('UpdateBandwidthRateLimitScheduleInput')

const UpdateChapCredentialsOutputSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.',
        }),
    ).exactOptional(),
    InitiatorName: IqnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The iSCSI initiator that connects to the target. This is the same initiator name specified in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      InitiatorName: 'iqn.1991-05.com.microsoft:computername.domain.example.com',
      TargetARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume',
    },
    description: 'A JSON object containing the following fields:',
    required: [],
  })
  .openapi('UpdateChapCredentialsOutput')

const UpdateChapCredentialsInputSchema = z
  .object({
    TargetARN: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified VolumeARN.',
        }),
    ),
    SecretToAuthenticateInitiator: ChapSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p> <note> <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p> </note>',
        }),
    ),
    InitiatorName: IqnNameSchema.and(
      z.any().openapi({ description: 'The iSCSI initiator that connects to the target.' }),
    ),
    SecretToAuthenticateTarget: ChapSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p> <p>Byte constraints: Minimum bytes of 12. Maximum bytes of 16.</p> <note> <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetARN', 'SecretToAuthenticateInitiator', 'InitiatorName'],
    title: 'UpdateChapCredentialsInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>',
  })
  .openapi('UpdateChapCredentialsInput')

const UpdateFileSystemAssociationOutputSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z.any().openapi({ description: 'The ARN of the updated file system association.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFileSystemAssociationOutput')

const UpdateFileSystemAssociationInputSchema = z
  .object({
    FileSystemAssociationARN: FileSystemAssociationARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the file system association that you want to update.',
        }),
    ),
    UserName: DomainUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.',
        }),
    ).exactOptional(),
    Password: DomainUserPasswordSchema.and(
      z.any().openapi({ description: 'The password of the user credential.' }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for the audit logs.',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.exactOptional(),
  })
  .openapi({ required: ['FileSystemAssociationARN'], title: 'UpdateFileSystemAssociationInput' })
  .openapi('UpdateFileSystemAssociationInput')

const UpdateGatewayInformationOutputSchema = z
  .object({
    GatewayARN: GatewayARNSchema.exactOptional(),
    GatewayName: StringSchema.and(
      z.any().openapi({ description: 'The name you configured for your gateway.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B',
      GatewayName: '',
    },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.',
    required: [],
  })
  .openapi('UpdateGatewayInformationOutput')

const UpdateGatewayInformationInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    GatewayName: GatewayNameSchema.exactOptional(),
    GatewayTimezone: GatewayTimezoneSchema.and(
      z.any().openapi({ description: 'A value that indicates the time zone of the gateway.' }),
    ).exactOptional(),
    CloudWatchLogGroupARN: CloudWatchLogGroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to monitor and log events in the gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html">What is Amazon CloudWatch Logs?</a> </p>',
        }),
    ).exactOptional(),
    GatewayCapacity: GatewayCapacitySchema.and(
      z.any().openapi({ description: "Specifies the size of the gateway's metadata cache." }),
    ).exactOptional(),
  })
  .openapi({ required: ['GatewayARN'], title: 'UpdateGatewayInformationInput' })
  .openapi('UpdateGatewayInformationInput')

const UpdateGatewaySoftwareNowOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.',
    required: [],
  })
  .openapi('UpdateGatewaySoftwareNowOutput')

const UpdateGatewaySoftwareNowInputSchema = z
  .object({ GatewayARN: GatewayARNSchema })
  .openapi({
    required: ['GatewayARN'],
    title: 'UpdateGatewaySoftwareNowInput',
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.',
  })
  .openapi('UpdateGatewaySoftwareNowInput')

const UpdateMaintenanceStartTimeOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({
    example: { GatewayARN: 'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B' },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated.',
    required: [],
  })
  .openapi('UpdateMaintenanceStartTimeOutput')

const UpdateMaintenanceStartTimeInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    HourOfDay: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hour component of the maintenance start time represented as <i>hh</i>, where <i>hh</i> is the hour (00 to 23). The hour of the day is in the time zone of the gateway.',
        }),
    ),
    MinuteOfHour: MinuteOfHourSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minute component of the maintenance start time represented as <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.',
        }),
    ),
    DayOfWeek: DayOfWeekSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.',
        }),
    ).exactOptional(),
    DayOfMonth: DayOfMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayARN', 'HourOfDay', 'MinuteOfHour'],
    title: 'UpdateMaintenanceStartTimeInput',
    description:
      '<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>',
  })
  .openapi('UpdateMaintenanceStartTimeInput')

const UpdateNFSFileShareOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the updated file share.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'UpdateNFSFileShareOutput', required: [] })
  .openapi('UpdateNFSFileShareOutput')

const UpdateNFSFileShareInputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the file share to be updated.',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    NFSFileShareDefaults: NFSFileShareDefaultsSchema.and(
      z.any().openapi({ description: 'The default values for the file share. Optional.' }),
    ).exactOptional(),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is <code>private</code>.',
        }),
    ).exactOptional(),
    ClientList: FileShareClientListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IP addresses or valid CIDR blocks.',
        }),
    ).exactOptional(),
    Squash: SquashSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user mapped to anonymous user.</p> <p>Valid values are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set the write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Specifies refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileShareARN'],
    title: 'UpdateNFSFileShareInput',
    description: 'UpdateNFSFileShareInput',
  })
  .openapi('UpdateNFSFileShareInput')

const UpdateSMBFileShareOutputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the updated SMB file share.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'UpdateSMBFileShareOutput', required: [] })
  .openapi('UpdateSMBFileShareOutput')

const UpdateSMBFileShareInputSchema = z
  .object({
    FileShareARN: FileShareARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SMB file share that you want to update.',
        }),
    ),
    KMSEncrypted: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to use Amazon S3 server-side encryption with your own KMS key, or <code>false</code> to use a key managed by Amazon S3. Optional.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.',
        }),
    ).exactOptional(),
    DefaultStorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is <code>S3_STANDARD</code>. Optional.</p> <p>Valid Values: <code>S3_STANDARD</code> | <code>S3_INTELLIGENT_TIERING</code> | <code>S3_STANDARD_IA</code> | <code>S3_ONEZONE_IA</code> </p>',
        }),
    ).exactOptional(),
    ObjectACL: ObjectACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is <code>private</code>.',
        }),
    ).exactOptional(),
    ReadOnly: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets the write status of a file share. Set this value to <code>true</code> to set write status to read-only, otherwise set to <code>false</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    GuessMIMETypeEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to <code>true</code> to enable MIME type guessing, otherwise set to <code>false</code>. The default value is <code>true</code>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    RequesterPays: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to <code>true</code>, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    SMBACLEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set this value to <code>true</code> to enable access control list (ACL) on the SMB file share. Set it to <code>false</code> to map file and directory permissions to the POSIX permissions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html">Using Microsoft Windows ACLs to control access to an SMB file share</a> in the <i>Storage Gateway User Guide</i>.</p> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    AccessBasedEnumeration: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The files and folders on this share will only be visible to users with read access.',
        }),
    ).exactOptional(),
    AdminUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    ValidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    InvalidUserList: UserListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. Acceptable formats include: <code>DOMAIN\\User1</code>, <code>user1</code>, <code>@group1</code>, and <code>@DOMAIN\\group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.',
        }),
    ).exactOptional(),
    AuditDestinationARN: AuditDestinationARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the storage used for audit logs.',
        }),
    ).exactOptional(),
    CaseSensitivity: CaseSensitivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The case of an object name in an Amazon S3 bucket. For <code>ClientSpecified</code>, the client determines the case sensitivity. For <code>CaseSensitive</code>, the gateway determines the case sensitivity. The default value is <code>ClientSpecified</code>.',
        }),
    ).exactOptional(),
    FileShareName: FileShareNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file share. Optional.</p> <note> <p> <code>FileShareName</code> must be set if an S3 prefix name is set in <code>LocationARN</code>, or if an access point or access point alias is used.</p> </note>',
        }),
    ).exactOptional(),
    CacheAttributes: CacheAttributesSchema.and(
      z.any().openapi({ description: 'Specifies refresh cache information for the file share.' }),
    ).exactOptional(),
    NotificationPolicy: NotificationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The notification policy of the file share. <code>SettlingTimeInSeconds</code> controls the number of seconds to wait after the last point in time a client wrote to a file before generating an <code>ObjectUploaded</code> notification. Because clients can make many small writes to files, it\'s best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period.</p> <note> <p> <code>SettlingTimeInSeconds</code> has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification.</p> </note> <p>The following example sets <code>NotificationPolicy</code> on with <code>SettlingTimeInSeconds</code> set to 60.</p> <p> <code>{\\"Upload\\": {\\"SettlingTimeInSeconds\\": 60}}</code> </p> <p>The following example sets <code>NotificationPolicy</code> off.</p> <p> <code>{}</code> </p>',
        }),
    ).exactOptional(),
    OplocksEnabled: Boolean2Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether opportunistic locking is enabled for the SMB file share.</p> <note> <p>Enabling opportunistic locking on case-sensitive shares is not recommended for workloads that involve access to files with the same name in different case.</p> </note> <p>Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileShareARN'],
    title: 'UpdateSMBFileShareInput',
    description: 'UpdateSMBFileShareInput',
  })
  .openapi('UpdateSMBFileShareInput')

const UpdateSMBFileShareVisibilityOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSMBFileShareVisibilityOutput')

const UpdateSMBFileShareVisibilityInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    FileSharesVisible: Boolean2Schema.and(
      z.any().openapi({ description: 'The shares on this gateway appear when listing shares.' }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'FileSharesVisible'],
    title: 'UpdateSMBFileShareVisibilityInput',
  })
  .openapi('UpdateSMBFileShareVisibilityInput')

const UpdateSMBLocalGroupsOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSMBLocalGroupsOutput')

const UpdateSMBLocalGroupsInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    SMBLocalGroups: SMBLocalGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Active Directory users and groups that you want to grant special permissions for SMB file shares on the gateway.',
        }),
    ),
  })
  .openapi({ required: ['GatewayARN', 'SMBLocalGroups'], title: 'UpdateSMBLocalGroupsInput' })
  .openapi('UpdateSMBLocalGroupsInput')

const UpdateSMBSecurityStrategyOutputSchema = z
  .object({ GatewayARN: GatewayARNSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSMBSecurityStrategyOutput')

const UpdateSMBSecurityStrategyInputSchema = z
  .object({
    GatewayARN: GatewayARNSchema,
    SMBSecurityStrategy: SMBSecurityStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of security strategy.</p> <p>ClientSpecified: if you use this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only in S3 File Gateway.</p> <p>MandatorySigning: if you use this option, file gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.</p> <p>MandatoryEncryption: if you use this option, file gateway only allows connections from SMBv3 clients that have encryption enabled. This option is highly recommended for environments that handle sensitive data. This option works with SMB clients on Microsoft Windows 8, Windows Server 2012 or newer.</p>',
        }),
    ),
  })
  .openapi({
    required: ['GatewayARN', 'SMBSecurityStrategy'],
    title: 'UpdateSMBSecurityStrategyInput',
  })
  .openapi('UpdateSMBSecurityStrategyInput')

const UpdateSnapshotScheduleOutputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      VolumeARN:
        'arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB',
    },
    description:
      'A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume.',
    required: [],
  })
  .openapi('UpdateSnapshotScheduleOutput')

const UpdateSnapshotScheduleInputSchema = z
  .object({
    VolumeARN: VolumeARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.',
        }),
    ),
    StartAt: HourOfDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The hour of the day at which the snapshot schedule begins represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.',
        }),
    ),
    RecurrenceInHours: RecurrenceInHoursSchema.and(
      z
        .any()
        .openapi({
          description: 'Frequency of snapshots. Specify the number of hours between snapshots.',
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional description of the snapshot that overwrites the existing description.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VolumeARN', 'StartAt', 'RecurrenceInHours'],
    title: 'UpdateSnapshotScheduleInput',
    description:
      '<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>',
  })
  .openapi('UpdateSnapshotScheduleInput')

const UpdateVTLDeviceTypeOutputSchema = z
  .object({
    VTLDeviceARN: VTLDeviceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the medium changer you have selected.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      VTLDeviceARN:
        'arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001',
    },
    description: 'UpdateVTLDeviceTypeOutput',
    required: [],
  })
  .openapi('UpdateVTLDeviceTypeOutput')

const DeviceTypeSchema = z.string().min(2).max(50).openapi('DeviceType')

const UpdateVTLDeviceTypeInputSchema = z
  .object({
    VTLDeviceARN: VTLDeviceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the medium changer you want to select.',
        }),
    ),
    DeviceType: DeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of medium changer you want to select.</p> <p>Valid Values: <code>STK-L700</code> | <code>AWS-Gateway-VTL</code> | <code>IBM-03584L32-0402</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['VTLDeviceARN', 'DeviceType'], title: 'UpdateVTLDeviceTypeInput' })
  .openapi('UpdateVTLDeviceTypeInput')

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

export const postXAmzTargetStorageGateway20130630ActivateGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ActivateGateway',
  description:
    '<p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>',
  operationId: 'ActivateGateway',
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
        .literal('StorageGateway_20130630.ActivateGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ActivateGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ActivateGatewayInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivateGatewayOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AddCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AddCache',
  description:
    '<p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>',
  operationId: 'AddCache',
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
        .literal('StorageGateway_20130630.AddCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AddCache'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddCacheInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddCacheOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AddTagsToResource',
  description:
    '<p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> <li> <p>Storage volumes</p> </li> <li> <p>Virtual tapes</p> </li> <li> <p>NFS and SMB file shares</p> </li> <li> <p>File System associations</p> </li> </ul> <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>',
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
        .literal('StorageGateway_20130630.AddTagsToResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AddTagsToResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTagsToResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddTagsToResourceOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AddUploadBufferRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer',
  description:
    '<p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>',
  operationId: 'AddUploadBuffer',
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
        .literal('StorageGateway_20130630.AddUploadBuffer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AddUploadBuffer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddUploadBufferInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddUploadBufferOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AddWorkingStorageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage',
  description:
    '<p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>',
  operationId: 'AddWorkingStorage',
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
        .literal('StorageGateway_20130630.AddWorkingStorage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AddWorkingStorage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddWorkingStorageInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddWorkingStorageOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AssignTapePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AssignTapePool',
  description:
    'Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.',
  operationId: 'AssignTapePool',
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
        .literal('StorageGateway_20130630.AssignTapePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AssignTapePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssignTapePoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssignTapePoolOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AssociateFileSystemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem',
  description:
    'Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.',
  operationId: 'AssociateFileSystem',
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
        .literal('StorageGateway_20130630.AssociateFileSystem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AssociateFileSystem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateFileSystemInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateFileSystemOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630AttachVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.AttachVolume',
  description:
    'Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.',
  operationId: 'AttachVolume',
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
        .literal('StorageGateway_20130630.AttachVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.AttachVolume'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttachVolumeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachVolumeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CancelArchivalRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CancelArchival',
  description:
    'Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.',
  operationId: 'CancelArchival',
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
        .literal('StorageGateway_20130630.CancelArchival')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CancelArchival'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelArchivalInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelArchivalOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CancelRetrievalRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CancelRetrieval',
  description:
    'Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.',
  operationId: 'CancelRetrieval',
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
        .literal('StorageGateway_20130630.CancelRetrieval')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CancelRetrieval'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelRetrievalInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelRetrievalOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume',
  description:
    '<p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>',
  operationId: 'CreateCachediSCSIVolume',
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
        .literal('StorageGateway_20130630.CreateCachediSCSIVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateCachediSCSIVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCachediSCSIVolumeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCachediSCSIVolumeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateNFSFileShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare',
  description:
    '<p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>S3 File Gateways do not support creating hard or symbolic links on a file share.</p> </important>',
  operationId: 'CreateNFSFileShare',
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
        .literal('StorageGateway_20130630.CreateNFSFileShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateNFSFileShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNFSFileShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNFSFileShareOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateSMBFileShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare',
  description:
    '<p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways.</p> <important> <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don\'t support creating hard or symbolic links on a file share.</p> </important>',
  operationId: 'CreateSMBFileShare',
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
        .literal('StorageGateway_20130630.CreateSMBFileShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateSMBFileShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSMBFileShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSMBFileShareOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshot',
  description:
    '<p>Initiates a snapshot of a volume.</p> <p>Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a snapshot schedule</a>.</p> <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>',
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
        .literal('StorageGateway_20130630.CreateSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSnapshotInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSnapshotOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ServiceUnavailableError',
      content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint',
    description:
      '<p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>',
    operationId: 'CreateSnapshotFromVolumeRecoveryPoint',
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
          .literal('StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: CreateSnapshotFromVolumeRecoveryPointInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CreateSnapshotFromVolumeRecoveryPointOutputSchema },
        },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ServiceUnavailableError',
        content: { 'application/json': { schema: ServiceUnavailableErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume',
  description:
    '<p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>',
  operationId: 'CreateStorediSCSIVolume',
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
        .literal('StorageGateway_20130630.CreateStorediSCSIVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateStorediSCSIVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStorediSCSIVolumeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStorediSCSIVolumeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateTapePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateTapePool',
  description:
    'Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.',
  operationId: 'CreateTapePool',
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
        .literal('StorageGateway_20130630.CreateTapePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateTapePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTapePoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTapePoolOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateTapeWithBarcodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode',
  description:
    '<p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>',
  operationId: 'CreateTapeWithBarcode',
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
        .literal('StorageGateway_20130630.CreateTapeWithBarcode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateTapeWithBarcode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTapeWithBarcodeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTapeWithBarcodeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630CreateTapesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.CreateTapes',
  description:
    '<p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>',
  operationId: 'CreateTapes',
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
        .literal('StorageGateway_20130630.CreateTapes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.CreateTapes'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTapesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTapesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy',
    description:
      'Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.',
    operationId: 'DeleteAutomaticTapeCreationPolicy',
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
          .literal('StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteAutomaticTapeCreationPolicyInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteAutomaticTapeCreationPolicyOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit',
  description:
    'Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.',
  operationId: 'DeleteBandwidthRateLimit',
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
        .literal('StorageGateway_20130630.DeleteBandwidthRateLimit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteBandwidthRateLimit'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBandwidthRateLimitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBandwidthRateLimitOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteChapCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials',
  description:
    'Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.',
  operationId: 'DeleteChapCredentials',
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
        .literal('StorageGateway_20130630.DeleteChapCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteChapCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteChapCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteChapCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteFileShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteFileShare',
  description:
    'Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.',
  operationId: 'DeleteFileShare',
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
        .literal('StorageGateway_20130630.DeleteFileShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteFileShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFileShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFileShareOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteGateway',
  description:
    '<p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail page</a>.</p> </important>',
  operationId: 'DeleteGateway',
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
        .literal('StorageGateway_20130630.DeleteGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteGateway'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteGatewayInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGatewayOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteSnapshotScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule',
  description:
    '<p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>',
  operationId: 'DeleteSnapshotSchedule',
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
        .literal('StorageGateway_20130630.DeleteSnapshotSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteSnapshotSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSnapshotScheduleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSnapshotScheduleOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteTapeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteTape',
  description:
    'Deletes the specified virtual tape. This operation is only supported in the tape gateway type.',
  operationId: 'DeleteTape',
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
        .literal('StorageGateway_20130630.DeleteTape')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteTape'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTapeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTapeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteTapeArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive',
  description:
    'Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.',
  operationId: 'DeleteTapeArchive',
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
        .literal('StorageGateway_20130630.DeleteTapeArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteTapeArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTapeArchiveInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTapeArchiveOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteTapePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteTapePool',
  description:
    'Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.',
  operationId: 'DeleteTapePool',
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
        .literal('StorageGateway_20130630.DeleteTapePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteTapePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTapePoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTapePoolOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DeleteVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DeleteVolume',
  description:
    '<p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume.</p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>',
  operationId: 'DeleteVolume',
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
        .literal('StorageGateway_20130630.DeleteVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DeleteVolume'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteVolumeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVolumeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest',
    description:
      "Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.",
    operationId: 'DescribeAvailabilityMonitorTest',
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
          .literal('StorageGateway_20130630.DescribeAvailabilityMonitorTest')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.DescribeAvailabilityMonitorTest'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeAvailabilityMonitorTestInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeAvailabilityMonitorTestOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  },
)

export const postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit',
  description:
    '<p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p> <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>',
  operationId: 'DescribeBandwidthRateLimit',
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
        .literal('StorageGateway_20130630.DescribeBandwidthRateLimit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeBandwidthRateLimit'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBandwidthRateLimitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBandwidthRateLimitOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule',
    description:
      "<p> Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.</p> <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. </p> <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading </p> <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>",
    operationId: 'DescribeBandwidthRateLimitSchedule',
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
          .literal('StorageGateway_20130630.DescribeBandwidthRateLimitSchedule')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeBandwidthRateLimitScheduleInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeBandwidthRateLimitScheduleOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630DescribeCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeCache',
  description:
    '<p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>',
  operationId: 'DescribeCache',
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
        .literal('StorageGateway_20130630.DescribeCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeCache'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeCacheInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCacheOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes',
  description:
    '<p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>',
  operationId: 'DescribeCachediSCSIVolumes',
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
        .literal('StorageGateway_20130630.DescribeCachediSCSIVolumes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeCachediSCSIVolumes'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCachediSCSIVolumesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCachediSCSIVolumesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeChapCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials',
  description:
    'Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.',
  operationId: 'DescribeChapCredentials',
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
        .literal('StorageGateway_20130630.DescribeChapCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeChapCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeChapCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChapCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations',
  description:
    'Gets the file system association information. This operation is only supported for FSx File Gateways.',
  operationId: 'DescribeFileSystemAssociations',
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
        .literal('StorageGateway_20130630.DescribeFileSystemAssociations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeFileSystemAssociations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFileSystemAssociationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFileSystemAssociationsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeGatewayInformationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation',
  description:
    'Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.',
  operationId: 'DescribeGatewayInformation',
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
        .literal('StorageGateway_20130630.DescribeGatewayInformation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeGatewayInformation'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGatewayInformationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGatewayInformationOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime',
  description:
    "Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.",
  operationId: 'DescribeMaintenanceStartTime',
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
        .literal('StorageGateway_20130630.DescribeMaintenanceStartTime')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeMaintenanceStartTime'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMaintenanceStartTimeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMaintenanceStartTimeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeNFSFileSharesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares',
  description:
    'Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.',
  operationId: 'DescribeNFSFileShares',
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
        .literal('StorageGateway_20130630.DescribeNFSFileShares')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeNFSFileShares'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeNFSFileSharesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNFSFileSharesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeSMBFileSharesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares',
  description:
    'Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.',
  operationId: 'DescribeSMBFileShares',
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
        .literal('StorageGateway_20130630.DescribeSMBFileShares')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeSMBFileShares'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSMBFileSharesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSMBFileSharesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeSMBSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings',
  description:
    'Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.',
  operationId: 'DescribeSMBSettings',
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
        .literal('StorageGateway_20130630.DescribeSMBSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeSMBSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSMBSettingsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSMBSettingsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeSnapshotScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule',
  description:
    'Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.',
  operationId: 'DescribeSnapshotSchedule',
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
        .literal('StorageGateway_20130630.DescribeSnapshotSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeSnapshotSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSnapshotScheduleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSnapshotScheduleOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes',
  description:
    'Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.',
  operationId: 'DescribeStorediSCSIVolumes',
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
        .literal('StorageGateway_20130630.DescribeStorediSCSIVolumes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeStorediSCSIVolumes'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStorediSCSIVolumesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStorediSCSIVolumesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeTapeArchivesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives',
  description:
    '<p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>',
  operationId: 'DescribeTapeArchives',
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
        .literal('StorageGateway_20130630.DescribeTapeArchives')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeTapeArchives'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTapeArchivesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTapeArchivesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints',
  description:
    '<p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>',
  operationId: 'DescribeTapeRecoveryPoints',
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
        .literal('StorageGateway_20130630.DescribeTapeRecoveryPoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.DescribeTapeRecoveryPoints'],
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTapeRecoveryPointsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTapeRecoveryPointsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeTapesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeTapes',
  description:
    'Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.',
  operationId: 'DescribeTapes',
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
        .literal('StorageGateway_20130630.DescribeTapes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeTapes'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DescribeTapesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTapesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeUploadBufferRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer',
  description:
    '<p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>',
  operationId: 'DescribeUploadBuffer',
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
        .literal('StorageGateway_20130630.DescribeUploadBuffer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeUploadBuffer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUploadBufferInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUploadBufferOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeVTLDevicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices',
  description:
    '<p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>',
  operationId: 'DescribeVTLDevices',
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
        .literal('StorageGateway_20130630.DescribeVTLDevices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeVTLDevices'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVTLDevicesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVTLDevicesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DescribeWorkingStorageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage',
  description:
    '<p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>',
  operationId: 'DescribeWorkingStorage',
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
        .literal('StorageGateway_20130630.DescribeWorkingStorage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DescribeWorkingStorage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkingStorageInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkingStorageOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DetachVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DetachVolume',
  description:
    'Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.',
  operationId: 'DetachVolume',
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
        .literal('StorageGateway_20130630.DetachVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DetachVolume'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetachVolumeInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachVolumeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DisableGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DisableGateway',
  description:
    '<p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>After a gateway is disabled, it cannot be enabled.</p> </important>',
  operationId: 'DisableGateway',
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
        .literal('StorageGateway_20130630.DisableGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DisableGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableGatewayInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableGatewayOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630DisassociateFileSystemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem',
  description:
    'Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.',
  operationId: 'DisassociateFileSystem',
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
        .literal('StorageGateway_20130630.DisassociateFileSystem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.DisassociateFileSystem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateFileSystemInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateFileSystemOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630JoinDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.JoinDomain',
  description:
    'Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.',
  operationId: 'JoinDomain',
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
        .literal('StorageGateway_20130630.JoinDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.JoinDomain'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JoinDomainInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: JoinDomainOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies',
    description:
      '<p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list.</p> <p>This operation is only supported for tape gateways.</p>',
    operationId: 'ListAutomaticTapeCreationPolicies',
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
          .literal('StorageGateway_20130630.ListAutomaticTapeCreationPolicies')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.ListAutomaticTapeCreationPolicies'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListAutomaticTapeCreationPoliciesInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListAutomaticTapeCreationPoliciesOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630ListFileSharesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListFileShares',
  description:
    'Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling user account. This operation is only supported for S3 File Gateways.',
  operationId: 'ListFileShares',
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
        .literal('StorageGateway_20130630.ListFileShares')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListFileShares'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFileSharesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFileSharesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListFileSystemAssociationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations',
  description:
    'Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.',
  operationId: 'ListFileSystemAssociations',
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
        .literal('StorageGateway_20130630.ListFileSystemAssociations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.ListFileSystemAssociations'],
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFileSystemAssociationsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFileSystemAssociationsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListGatewaysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListGateways',
  description:
    '<p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>',
  operationId: 'ListGateways',
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
        .literal('StorageGateway_20130630.ListGateways')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListGateways'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListGatewaysInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGatewaysOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListLocalDisksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListLocalDisks',
  description:
    "<p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>",
  operationId: 'ListLocalDisks',
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
        .literal('StorageGateway_20130630.ListLocalDisks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListLocalDisks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLocalDisksInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLocalDisksOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListTagsForResource',
  description:
    'Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.',
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
        .literal('StorageGateway_20130630.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListTagsForResource'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListTapePoolsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListTapePools',
  description:
    "<p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools.</p> <p>This operation supports pagination. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tape pools.</p>",
  operationId: 'ListTapePools',
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
        .literal('StorageGateway_20130630.ListTapePools')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListTapePools'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTapePoolsInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTapePoolsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListTapesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListTapes',
  description:
    "<p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>",
  operationId: 'ListTapes',
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
        .literal('StorageGateway_20130630.ListTapes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListTapes'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTapesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTapesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListVolumeInitiatorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators',
  description:
    'Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.',
  operationId: 'ListVolumeInitiators',
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
        .literal('StorageGateway_20130630.ListVolumeInitiators')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListVolumeInitiators'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVolumeInitiatorsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVolumeInitiatorsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints',
  description:
    '<p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>',
  operationId: 'ListVolumeRecoveryPoints',
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
        .literal('StorageGateway_20130630.ListVolumeRecoveryPoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListVolumeRecoveryPoints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVolumeRecoveryPointsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVolumeRecoveryPointsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ListVolumesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ListVolumes',
  description:
    '<p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>',
  operationId: 'ListVolumes',
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
        .literal('StorageGateway_20130630.ListVolumes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ListVolumes'] },
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
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListVolumesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVolumesOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630NotifyWhenUploadedRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded',
  description:
    '<p>Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to S3. Amazon S3.</p> <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>Storage Gateway User Guide</i>.</p>',
  operationId: 'NotifyWhenUploaded',
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
        .literal('StorageGateway_20130630.NotifyWhenUploaded')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.NotifyWhenUploaded'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NotifyWhenUploadedInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotifyWhenUploadedOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630RefreshCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.RefreshCache',
  description:
    '<p>Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket\'s contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types.</p> <p>You can subscribe to be notified through an Amazon CloudWatch event when your <code>RefreshCache</code> operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>. This operation is Only supported for S3 File Gateways.</p> <p>When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn\'t necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your <code>RefreshCache</code> operation completes.</p> <p>Throttle limit: This API is asynchronous, so the gateway will accept no more than two refreshes at any time. We recommend using the refresh-complete CloudWatch event notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p> <important> <ul> <li> <p>Wait at least 60 seconds between consecutive RefreshCache API requests.</p> </li> <li> <p>RefreshCache does not evict cache entries if invoked consecutively within 60 seconds of a previous RefreshCache request.</p> </li> <li> <p>If you invoke the RefreshCache API when two requests are already being processed, any new request will cause an <code>InvalidGatewayRequestException</code> error because too many requests were sent to the server.</p> </li> </ul> </important> <note> <p>The S3 bucket name does not need to be included when entering the list of folders in the FolderList parameter.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting notified about file operations</a> in the <i>Storage Gateway User Guide</i>.</p>',
  operationId: 'RefreshCache',
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
        .literal('StorageGateway_20130630.RefreshCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.RefreshCache'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RefreshCacheInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RefreshCacheOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630RemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource',
  description:
    'Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.',
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
        .literal('StorageGateway_20130630.RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.RemoveTagsFromResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveTagsFromResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTagsFromResourceOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ResetCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ResetCache',
  description:
    '<p>Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>',
  operationId: 'ResetCache',
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
        .literal('StorageGateway_20130630.ResetCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ResetCache'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetCacheInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResetCacheOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630RetrieveTapeArchiveRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive',
  description:
    '<p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>',
  operationId: 'RetrieveTapeArchive',
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
        .literal('StorageGateway_20130630.RetrieveTapeArchive')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.RetrieveTapeArchive'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RetrieveTapeArchiveInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetrieveTapeArchiveOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint',
  description:
    '<p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>',
  operationId: 'RetrieveTapeRecoveryPoint',
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
        .literal('StorageGateway_20130630.RetrieveTapeRecoveryPoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.RetrieveTapeRecoveryPoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RetrieveTapeRecoveryPointInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetrieveTapeRecoveryPointOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630SetLocalConsolePasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword',
  description:
    "Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.",
  operationId: 'SetLocalConsolePassword',
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
        .literal('StorageGateway_20130630.SetLocalConsolePassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.SetLocalConsolePassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetLocalConsolePasswordInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetLocalConsolePasswordOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630SetSMBGuestPasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword',
  description:
    'Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>. This operation only supported for S3 File Gateways',
  operationId: 'SetSMBGuestPassword',
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
        .literal('StorageGateway_20130630.SetSMBGuestPassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.SetSMBGuestPassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetSMBGuestPasswordInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetSMBGuestPasswordOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630ShutdownGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.ShutdownGateway',
  description:
    "<p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>",
  operationId: 'ShutdownGateway',
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
        .literal('StorageGateway_20130630.ShutdownGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.ShutdownGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ShutdownGatewayInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ShutdownGatewayOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest',
  description:
    "<p>Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the <code>DescribeAvailabilityMonitorTest</code> API.</p> <note> <p>Starting this test will cause your gateway to go offline for a brief period.</p> </note>",
  operationId: 'StartAvailabilityMonitorTest',
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
        .literal('StorageGateway_20130630.StartAvailabilityMonitorTest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.StartAvailabilityMonitorTest'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartAvailabilityMonitorTestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartAvailabilityMonitorTestOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630StartGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.StartGateway',
  description:
    "<p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>",
  operationId: 'StartGateway',
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
        .literal('StorageGateway_20130630.StartGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.StartGateway'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartGatewayInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartGatewayOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy',
    description:
      '<p>Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways.</p> <p>By default, there is no automatic tape creation policy.</p> <note> <p>A gateway can have only one automatic tape creation policy.</p> </note>',
    operationId: 'UpdateAutomaticTapeCreationPolicy',
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
          .literal('StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateAutomaticTapeCreationPolicyInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateAutomaticTapeCreationPolicyOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit',
  description:
    "<p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use <a>UpdateBandwidthRateLimitSchedule</a>.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>",
  operationId: 'UpdateBandwidthRateLimit',
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
        .literal('StorageGateway_20130630.UpdateBandwidthRateLimit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateBandwidthRateLimit'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBandwidthRateLimitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBandwidthRateLimitOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule',
    description:
      " Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits.",
    operationId: 'UpdateBandwidthRateLimitSchedule',
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
          .literal('StorageGateway_20130630.UpdateBandwidthRateLimitSchedule')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateBandwidthRateLimitScheduleInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateBandwidthRateLimitScheduleOutputSchema } },
      },
      480: {
        description: 'InvalidGatewayRequestException',
        content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetStorageGateway20130630UpdateChapCredentialsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials',
  description:
    '<p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>',
  operationId: 'UpdateChapCredentials',
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
        .literal('StorageGateway_20130630.UpdateChapCredentials')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateChapCredentials'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateChapCredentialsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateChapCredentialsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateFileSystemAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation',
  description:
    'Updates a file system association. This operation is only supported in the FSx File Gateways.',
  operationId: 'UpdateFileSystemAssociation',
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
        .literal('StorageGateway_20130630.UpdateFileSystemAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.UpdateFileSystemAssociation'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFileSystemAssociationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFileSystemAssociationOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateGatewayInformationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation',
  description:
    "<p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>",
  operationId: 'UpdateGatewayInformation',
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
        .literal('StorageGateway_20130630.UpdateGatewayInformation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateGatewayInformation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGatewayInformationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGatewayInformationOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow',
  description:
    '<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators\' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p> </important>',
  operationId: 'UpdateGatewaySoftwareNow',
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
        .literal('StorageGateway_20130630.UpdateGatewaySoftwareNow')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateGatewaySoftwareNow'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGatewaySoftwareNowInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGatewaySoftwareNowOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime',
  description:
    "Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.",
  operationId: 'UpdateMaintenanceStartTime',
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
        .literal('StorageGateway_20130630.UpdateMaintenanceStartTime')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.UpdateMaintenanceStartTime'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMaintenanceStartTimeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMaintenanceStartTimeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateNFSFileShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare',
  description:
    '<p>Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share settings:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul>',
  operationId: 'UpdateNFSFileShare',
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
        .literal('StorageGateway_20130630.UpdateNFSFileShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateNFSFileShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNFSFileShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNFSFileShareOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateSMBFileShareRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare',
  description:
    '<p>Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <important> <p>File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>File gateways don\'t support creating hard or symbolic links on a file share.</p> </important>',
  operationId: 'UpdateSMBFileShare',
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
        .literal('StorageGateway_20130630.UpdateSMBFileShare')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateSMBFileShare'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSMBFileShareInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSMBFileShareOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility',
  description:
    'Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.',
  operationId: 'UpdateSMBFileShareVisibility',
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
        .literal('StorageGateway_20130630.UpdateSMBFileShareVisibility')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StorageGateway_20130630.UpdateSMBFileShareVisibility'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSMBFileShareVisibilityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSMBFileShareVisibilityOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups',
  description:
    'Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.',
  operationId: 'UpdateSMBLocalGroups',
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
        .literal('StorageGateway_20130630.UpdateSMBLocalGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateSMBLocalGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSMBLocalGroupsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSMBLocalGroupsOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy',
  description:
    '<p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p> <note> <p>This API is called Security level in the User Guide.</p> <p>A higher security level can affect performance of the gateway.</p> </note>',
  operationId: 'UpdateSMBSecurityStrategy',
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
        .literal('StorageGateway_20130630.UpdateSMBSecurityStrategy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateSMBSecurityStrategy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSMBSecurityStrategyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSMBSecurityStrategyOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateSnapshotScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule',
  description:
    '<p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>',
  operationId: 'UpdateSnapshotSchedule',
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
        .literal('StorageGateway_20130630.UpdateSnapshotSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateSnapshotSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSnapshotScheduleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSnapshotScheduleOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType',
  description:
    'Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.',
  operationId: 'UpdateVTLDeviceType',
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
        .literal('StorageGateway_20130630.UpdateVTLDeviceType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StorageGateway_20130630.UpdateVTLDeviceType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVTLDeviceTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVTLDeviceTypeOutputSchema } },
    },
    480: {
      description: 'InvalidGatewayRequestException',
      content: { 'application/json': { schema: InvalidGatewayRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})
