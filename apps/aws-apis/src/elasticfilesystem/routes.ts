import { createRoute, z } from '@hono/zod-openapi'

const ClientTokenSchema = z.string().regex(/.+/).min(1).max(64).openapi('ClientToken')

const NameSchema = z.string().openapi('Name')

const TagKeySchema = z
  .string()
  .regex(/^(?![aA]{1}[wW]{1}[sS]{1}:)([\p{L}\p{Z}\p{N}_.:\/=+\-@]+)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description: "The tag key (String). The key can't start with <code>aws:</code>.",
        }),
    ),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag key.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const AccessPointIdSchema = z
  .string()
  .regex(
    /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point\/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$/,
  )
  .max(128)
  .openapi('AccessPointId')

const AccessPointArnSchema = z
  .string()
  .regex(/^arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point\/fsap-[0-9a-f]{8,40}$/)
  .max(128)
  .openapi('AccessPointArn')

const FileSystemIdSchema = z
  .string()
  .regex(
    /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
  )
  .max(128)
  .openapi('FileSystemId')

const UidSchema = z.int().min(0).max(4294967295).openapi('Uid')

const GidSchema = z.int().min(0).max(4294967295).openapi('Gid')

const SecondaryGidsSchema = z.array(GidSchema).min(0).max(16).openapi('SecondaryGids')

const PosixUserSchema = z
  .object({
    Uid: UidSchema.and(
      z
        .any()
        .openapi({
          description:
            'The POSIX user ID used for all file system operations using this access point.',
        }),
    ),
    Gid: GidSchema.and(
      z
        .any()
        .openapi({
          description:
            'The POSIX group ID used for all file system operations using this access point.',
        }),
    ),
    SecondaryGids: SecondaryGidsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Secondary POSIX group IDs used for all file system operations using this access point.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uid', 'Gid'],
    description:
      'The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.',
  })
  .openapi('PosixUser')

const PathSchema = z
  .string()
  .regex(/^(\/|(\/(?!\.)+[^$#<>;`|&?{}^*\/\n]+){1,4})$/)
  .min(1)
  .max(100)
  .openapi('Path')

const OwnerUidSchema = z.int().min(0).max(4294967295).openapi('OwnerUid')

const OwnerGidSchema = z.int().min(0).max(4294967295).openapi('OwnerGid')

const PermissionsSchema = z
  .string()
  .regex(/^[0-7]{3,4}$/)
  .min(3)
  .max(4)
  .openapi('Permissions')

const CreationInfoSchema = z
  .object({
    OwnerUid: OwnerUidSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the POSIX user ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).',
        }),
    ),
    OwnerGid: OwnerGidSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the POSIX group ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295).',
        }),
    ),
    Permissions: PermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the POSIX permissions to apply to the <code>RootDirectory</code>, in the format of an octal number representing the file's mode bits.",
        }),
    ),
  })
  .openapi({
    required: ['OwnerUid', 'OwnerGid', 'Permissions'],
    description:
      "<p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>",
  })
  .openapi('CreationInfo')

const RootDirectorySchema = z
  .object({
    Path: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the <code>CreationInfo</code>.',
        }),
    ).exactOptional(),
    CreationInfo: CreationInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Optional) Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code>. If the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist, EFS creates the root directory using the <code>CreationInfo</code> settings when a client connects to an access point. When specifying the <code>CreationInfo</code>, you must provide values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> &gt; <code>Path</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.",
    required: [],
  })
  .openapi('RootDirectory')

const AwsAccountIdSchema = z
  .string()
  .regex(/^(\d{12})|(\d{4}-\d{4}-\d{4})$/)
  .max(14)
  .openapi('AwsAccountId')

const LifeCycleStateSchema = z
  .enum(['creating', 'available', 'updating', 'deleting', 'deleted', 'error'])
  .openapi('LifeCycleState')

const AccessPointDescriptionSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The opaque string specified in the request to ensure idempotent creation.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the access point. This is the value of the <code>Name</code> tag.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags associated with the access point, presented as an array of Tag objects.',
        }),
    ).exactOptional(),
    AccessPointId: AccessPointIdSchema.and(
      z.any().openapi({ description: 'The ID of the access point, assigned by Amazon EFS.' }),
    ).exactOptional(),
    AccessPointArn: AccessPointArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique Amazon Resource Name (ARN) associated with the access point.',
        }),
    ).exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the EFS file system that the access point applies to.',
        }),
    ).exactOptional(),
    PosixUser: PosixUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.',
        }),
    ).exactOptional(),
    RootDirectory: RootDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.',
        }),
    ).exactOptional(),
    OwnerId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the Amazon Web Services account that owns the access point resource.',
        }),
    ).exactOptional(),
    LifeCycleState: LifeCycleStateSchema.and(
      z.any().openapi({ description: 'Identifies the lifecycle phase of the access point.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides a description of an EFS file system access point.',
    required: [],
  })
  .openapi('AccessPointDescription')

const BadRequestSchema = z.any().openapi('BadRequest')

const AccessPointAlreadyExistsSchema = z.any().openapi('AccessPointAlreadyExists')

const IncorrectFileSystemLifeCycleStateSchema = z.any().openapi('IncorrectFileSystemLifeCycleState')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const FileSystemNotFoundSchema = z.any().openapi('FileSystemNotFound')

const AccessPointLimitExceededSchema = z.any().openapi('AccessPointLimitExceeded')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const CreationTokenSchema = z.string().regex(/.+/).min(1).max(64).openapi('CreationToken')

const FileSystemArnSchema = z.string().openapi('FileSystemArn')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const MountTargetCountSchema = z.int().min(0).openapi('MountTargetCount')

const FileSystemSizeValueSchema = z.int().min(0).openapi('FileSystemSizeValue')

const FileSystemNullableSizeValueSchema = z.int().min(0).openapi('FileSystemNullableSizeValue')

const FileSystemSizeSchema = z
  .object({
    Value: FileSystemSizeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest known metered size (in bytes) of data stored in the file system.',
        }),
    ),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the size of data, returned in the <code>Value</code> field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.',
        }),
    ).exactOptional(),
    ValueInIA: FileSystemNullableSizeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.',
        }),
    ).exactOptional(),
    ValueInStandard: FileSystemNullableSizeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest known metered size (in bytes) of data stored in the Standard storage class.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Value'],
    description:
      "The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.",
  })
  .openapi('FileSystemSize')

const PerformanceModeSchema = z.enum(['generalPurpose', 'maxIO']).openapi('PerformanceMode')

const EncryptedSchema = z.boolean().openapi('Encrypted')

const KmsKeyIdSchema = z
  .string()
  .regex(
    /^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|mrk-[0-9a-f]{32}|alias\/[a-zA-Z0-9\/_-]+|(arn:aws[-a-z]*:kms:[a-z0-9-]+:\d{12}:((key\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(key\/mrk-[0-9a-f]{32})|(alias\/[a-zA-Z0-9\/_-]+))))$/,
  )
  .max(2048)
  .openapi('KmsKeyId')

const ThroughputModeSchema = z
  .enum(['bursting', 'provisioned', 'elastic'])
  .openapi('ThroughputMode')

const ProvisionedThroughputInMibpsSchema = z
  .float64()
  .min(1)
  .openapi('ProvisionedThroughputInMibps')

const AvailabilityZoneNameSchema = z
  .string()
  .regex(/.+/)
  .min(1)
  .max(64)
  .openapi('AvailabilityZoneName')

const AvailabilityZoneIdSchema = z.string().openapi('AvailabilityZoneId')

const FileSystemDescriptionSchema = z
  .object({
    OwnerId: AwsAccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services account that created the file system.' }),
    ),
    CreationToken: CreationTokenSchema.and(
      z.any().openapi({ description: 'The opaque string specified in the request.' }),
    ),
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The ID of the file system, assigned by Amazon EFS.' }),
    ),
    FileSystemArn: FileSystemArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the EFS file system, in the format <code>arn:aws:elasticfilesystem:<i>region</i>:<i>account-id</i>:file-system/<i>file-system-id</i> </code>. Example with sample data: <code>arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-01234567</code> ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).',
        }),
    ),
    LifeCycleState: LifeCycleStateSchema.and(
      z.any().openapi({ description: 'The lifecycle phase of the file system.' }),
    ),
    Name: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can add tags to a file system, including a <code>Name</code> tag. For more information, see <a>CreateFileSystem</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns the value in this field. ',
        }),
    ).exactOptional(),
    NumberOfMountTargets: MountTargetCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.',
        }),
    ),
    SizeInBytes: FileSystemSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The <code>Timestamp</code> value is the integer number of seconds since 1970-01-01T00:00:00Z. The <code>SizeInBytes</code> value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, <code>SizeInBytes</code> represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time. ",
        }),
    ),
    PerformanceMode: PerformanceModeSchema.and(
      z.any().openapi({ description: 'The performance mode of the file system.' }),
    ),
    Encrypted: EncryptedSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that, if true, indicates that the file system is encrypted.',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of an KMS key used to protect the encrypted file system.',
        }),
    ).exactOptional(),
    ThroughputMode: ThroughputModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Displays the file system\'s throughput mode. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes">Throughput modes</a> in the <i>Amazon EFS User Guide</i>. ',
        }),
    ).exactOptional(),
    ProvisionedThroughputInMibps: ProvisionedThroughputInMibpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of provisioned throughput, measured in MiB/s, for the file system. Valid for file systems using <code>ThroughputMode</code> set to <code>provisioned</code>.',
        }),
    ).exactOptional(),
    AvailabilityZoneName: AvailabilityZoneNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the Amazon Web Services Availability Zone in which the file system is located, and is valid only for file systems using One Zone storage classes. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.',
        }),
    ).exactOptional(),
    AvailabilityZoneId: AvailabilityZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique and consistent identifier of the Availability Zone in which the file system's One Zone storage classes exist. For example, <code>use1-az1</code> is an Availability Zone ID for the us-east-1 Amazon Web Services Region, and it has the same location in every Amazon Web Services account.",
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags associated with the file system, presented as an array of <code>Tag</code> objects.',
        }),
    ),
  })
  .openapi({
    required: [
      'OwnerId',
      'CreationToken',
      'FileSystemId',
      'CreationTime',
      'LifeCycleState',
      'NumberOfMountTargets',
      'SizeInBytes',
      'PerformanceMode',
      'Tags',
    ],
    example: {
      CreationTime: '1481841524.0',
      CreationToken: 'tokenstring',
      Encrypted: true,
      FileSystemId: 'fs-01234567',
      LifeCycleState: 'creating',
      NumberOfMountTargets: 0,
      OwnerId: 12345678912,
      PerformanceMode: 'generalPurpose',
      SizeInBytes: { Value: 0 },
      Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
    },
    description: 'A description of the file system.',
  })
  .openapi('FileSystemDescription')

const FileSystemAlreadyExistsSchema = z.any().openapi('FileSystemAlreadyExists')

const FileSystemLimitExceededSchema = z.any().openapi('FileSystemLimitExceeded')

const InsufficientThroughputCapacitySchema = z.any().openapi('InsufficientThroughputCapacity')

const ThroughputLimitExceededSchema = z.any().openapi('ThroughputLimitExceeded')

const UnsupportedAvailabilityZoneSchema = z.any().openapi('UnsupportedAvailabilityZone')

const MountTargetIdSchema = z
  .string()
  .regex(/^fsmt-[0-9a-f]{8,40}$/)
  .min(13)
  .max(45)
  .openapi('MountTargetId')

const SubnetIdSchema = z
  .string()
  .regex(/^subnet-[0-9a-f]{8,40}$/)
  .min(15)
  .max(47)
  .openapi('SubnetId')

const IpAddressSchema = z
  .string()
  .regex(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
  .min(7)
  .max(15)
  .openapi('IpAddress')

const NetworkInterfaceIdSchema = z.string().openapi('NetworkInterfaceId')

const VpcIdSchema = z.string().openapi('VpcId')

const MountTargetDescriptionSchema = z
  .object({
    OwnerId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'Amazon Web Services account ID that owns the resource.' }),
    ).exactOptional(),
    MountTargetId: MountTargetIdSchema.and(
      z.any().openapi({ description: 'System-assigned mount target ID.' }),
    ),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the file system for which the mount target is intended.',
        }),
    ),
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: "The ID of the mount target's subnet." }),
    ),
    LifeCycleState: LifeCycleStateSchema.and(
      z.any().openapi({ description: 'Lifecycle state of the mount target.' }),
    ),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'Address at which the file system can be mounted by using the mount target.',
        }),
    ).exactOptional(),
    NetworkInterfaceId: NetworkInterfaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the network interface that Amazon EFS created when it created the mount target.',
        }),
    ).exactOptional(),
    AvailabilityZoneId: AvailabilityZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique and consistent identifier of the Availability Zone that the mount target resides in. For example, <code>use1-az1</code> is an AZ ID for the us-east-1 Region and it has the same location in every Amazon Web Services account.',
        }),
    ).exactOptional(),
    AvailabilityZoneName: AvailabilityZoneNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Availability Zone in which the mount target is located. Availability Zones are independently mapped to names for each Amazon Web Services account. For example, the Availability Zone <code>us-east-1a</code> for your Amazon Web Services account might not be the same location as <code>us-east-1a</code> for another Amazon Web Services account.',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The virtual private cloud (VPC) ID that the mount target is configured in.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MountTargetId', 'FileSystemId', 'SubnetId', 'LifeCycleState'],
    example: {
      FileSystemId: 'fs-01234567',
      IpAddress: '192.0.0.2',
      LifeCycleState: 'creating',
      MountTargetId: 'fsmt-12340abc',
      NetworkInterfaceId: 'eni-cedf6789',
      OwnerId: 12345678912,
      SubnetId: 'subnet-1234abcd',
    },
    description: 'Provides a description of a mount target.',
  })
  .openapi('MountTargetDescription')

const SecurityGroupSchema = z
  .string()
  .regex(/^sg-[0-9a-f]{8,40}/)
  .min(11)
  .max(43)
  .openapi('SecurityGroup')

const MountTargetConflictSchema = z.any().openapi('MountTargetConflict')

const SubnetNotFoundSchema = z.any().openapi('SubnetNotFound')

const NoFreeAddressesInSubnetSchema = z.any().openapi('NoFreeAddressesInSubnet')

const IpAddressInUseSchema = z.any().openapi('IpAddressInUse')

const NetworkInterfaceLimitExceededSchema = z.any().openapi('NetworkInterfaceLimitExceeded')

const SecurityGroupLimitExceededSchema = z.any().openapi('SecurityGroupLimitExceeded')

const SecurityGroupNotFoundSchema = z.any().openapi('SecurityGroupNotFound')

const AvailabilityZonesMismatchSchema = z.any().openapi('AvailabilityZonesMismatch')

const RegionNameSchema = z
  .string()
  .regex(/^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-{0,1}[0-9]{0,1}$/)
  .min(1)
  .max(64)
  .openapi('RegionName')

const ReplicationStatusSchema = z
  .enum(['ENABLED', 'ENABLING', 'DELETING', 'ERROR'])
  .openapi('ReplicationStatus')

const DestinationSchema = z
  .object({
    Status: ReplicationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the status of the destination Amazon EFS file system. If the status is <code>ERROR</code>, the destination file system in the replication configuration is in a failed state and is unrecoverable. To access the file system data, restore a backup of the failed file system to a new file system.',
        }),
    ),
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The ID of the destination Amazon EFS file system.' }),
    ),
    Region: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region in which the destination file system is located.',
        }),
    ),
    LastReplicatedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the most recent sync was successfully completed on the destination file system. Any changes to data on the source file system that occurred before this time have been successfully replicated to the destination file system. Any changes that occurred after this time might not be fully replicated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status', 'FileSystemId', 'Region'],
    description: 'Describes the destination file system in the replication configuration.',
  })
  .openapi('Destination')

const DestinationsSchema = z.array(DestinationSchema).openapi('Destinations')

const ReplicationConfigurationDescriptionSchema = z
  .object({
    SourceFileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the source Amazon EFS file system that is being replicated.',
        }),
    ),
    SourceFileSystemRegion: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region in which the source Amazon EFS file system is located.',
        }),
    ),
    SourceFileSystemArn: FileSystemArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the current source file system in the replication configuration.',
        }),
    ),
    OriginalSourceFileSystemArn: FileSystemArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the original source Amazon EFS file system in the replication configuration.',
        }),
    ),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'Describes when the replication configuration was created.' }),
    ),
    Destinations: DestinationsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of destination objects. Only one destination object is supported.',
        }),
    ),
  })
  .openapi({
    required: [
      'SourceFileSystemId',
      'SourceFileSystemRegion',
      'SourceFileSystemArn',
      'OriginalSourceFileSystemArn',
      'CreationTime',
      'Destinations',
    ],
  })
  .openapi('ReplicationConfigurationDescription')

const DestinationToCreateSchema = z
  .object({
    Region: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create a file system that uses Regional storage, specify the Amazon Web Services Region in which to create the destination file system.',
        }),
    ).exactOptional(),
    AvailabilityZoneName: AvailabilityZoneNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create a file system that uses EFS One Zone storage, specify the name of the Availability Zone in which to create the destination file system.',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Key Management Service (KMS) key that you want to use to encrypt the destination file system. If you do not specify a KMS key, Amazon EFS uses your default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>. This ID can be in one of the following formats:</p> <ul> <li> <p>Key ID - The unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - The Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - The ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the destination file system to create in the replication configuration.',
    required: [],
  })
  .openapi('DestinationToCreate')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ReplicationNotFoundSchema = z.any().openapi('ReplicationNotFound')

const AccessPointNotFoundSchema = z.any().openapi('AccessPointNotFound')

const FileSystemInUseSchema = z.any().openapi('FileSystemInUse')

const DependencyTimeoutSchema = z.any().openapi('DependencyTimeout')

const MountTargetNotFoundSchema = z.any().openapi('MountTargetNotFound')

const AccessPointDescriptionsSchema = z
  .array(AccessPointDescriptionSchema)
  .openapi('AccessPointDescriptions')

const TokenSchema = z
  .string()
  .regex(/.+/)
  .min(1)
  .max(128)
  .openapi({ description: 'Token used for pagination.' })
  .openapi('Token')

const DescribeAccessPointsResponseSchema = z
  .object({
    AccessPoints: AccessPointDescriptionsSchema.and(
      z.any().openapi({ description: 'An array of access point descriptions.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Present if there are more access points than returned in the response. You can use the NextMarker in the subsequent request to fetch the additional descriptions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccessPointsResponse')

const ResourceIdTypeSchema = z
  .enum(['LONG_ID', 'SHORT_ID'])
  .openapi({
    description:
      'A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.',
  })
  .openapi('ResourceIdType')

const ResourceSchema = z
  .enum(['FILE_SYSTEM', 'MOUNT_TARGET'])
  .openapi({ description: 'An EFS resource, for example a file system or a mount target.' })
  .openapi('Resource')

const ResourcesSchema = z
  .array(ResourceSchema)
  .openapi({ description: 'EFS resources to which a preference applies to.' })
  .openapi('Resources')

const ResourceIdPreferenceSchema = z
  .object({
    ResourceIdType: ResourceIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the EFS resource ID preference, either <code>LONG_ID</code> (17 characters) or <code>SHORT_ID</code> (8 characters).',
        }),
    ).exactOptional(),
    Resources: ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the Amazon EFS resources to which the ID preference setting applies, <code>FILE_SYSTEM</code> and <code>MOUNT_TARGET</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.",
    required: [],
  })
  .openapi('ResourceIdPreference')

const DescribeAccountPreferencesResponseSchema = z
  .object({
    ResourceIdPreference: ResourceIdPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the resource ID preference setting for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Present if there are more records than returned in the response. You can use the <code>NextToken</code> in the subsequent request to fetch the additional descriptions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountPreferencesResponse')

const StatusSchema = z.enum(['ENABLED', 'ENABLING', 'DISABLED', 'DISABLING']).openapi('Status')

const BackupPolicySchema = z
  .object({
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes the status of the file system's backup policy.</p> <ul> <li> <p> <b> <code>ENABLED</code> </b> - EFS is automatically backing up the file system.</p> </li> <li> <p> <b> <code>ENABLING</code> </b> - EFS is turning on automatic backups for the file system.</p> </li> <li> <p> <b> <code>DISABLED</code> </b> - Automatic back ups are turned off for the file system.</p> </li> <li> <p> <b> <code>DISABLING</code> </b> - EFS is turning off automatic backups for the file system.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      'The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.',
  })
  .openapi('BackupPolicy')

const BackupPolicyDescriptionSchema = z
  .object({
    BackupPolicy: BackupPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the file system's backup policy, indicating whether automatic backups are turned on or off.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BackupPolicyDescription')

const PolicyNotFoundSchema = z.any().openapi('PolicyNotFound')

const PolicySchema = z
  .string()
  .regex(/[\s\S]+/)
  .min(1)
  .max(20000)
  .openapi('Policy')

const FileSystemPolicyDescriptionSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the EFS file system to which the <code>FileSystemPolicy</code> applies.',
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The JSON formatted <code>FileSystemPolicy</code> for the EFS file system.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileSystemPolicyDescription')

const MarkerSchema = z.string().regex(/.+/).min(1).max(128).openapi('Marker')

const FileSystemDescriptionsSchema = z
  .array(FileSystemDescriptionSchema)
  .openapi('FileSystemDescriptions')

const DescribeFileSystemsResponseSchema = z
  .object({
    Marker: MarkerSchema.and(
      z.any().openapi({ description: 'Present if provided by caller in the request (String).' }),
    ).exactOptional(),
    FileSystems: FileSystemDescriptionsSchema.and(
      z.any().openapi({ description: 'An array of file system descriptions.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Present if there are more file systems than returned in the response (String). You can use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FileSystems: [
        {
          CreationTime: '1481841524.0',
          CreationToken: 'tokenstring',
          FileSystemId: 'fs-01234567',
          LifeCycleState: 'available',
          Name: 'MyFileSystem',
          NumberOfMountTargets: 1,
          OwnerId: 12345678912,
          PerformanceMode: 'generalPurpose',
          SizeInBytes: { Value: 6144 },
          Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeFileSystemsResponse')

const TransitionToIARulesSchema = z
  .enum([
    'AFTER_7_DAYS',
    'AFTER_14_DAYS',
    'AFTER_30_DAYS',
    'AFTER_60_DAYS',
    'AFTER_90_DAYS',
    'AFTER_1_DAY',
  ])
  .openapi('TransitionToIARules')

const TransitionToPrimaryStorageClassRulesSchema = z
  .literal('AFTER_1_ACCESS')
  .openapi('TransitionToPrimaryStorageClassRules')

const LifecyclePolicySchema = z
  .object({
    TransitionToIA: TransitionToIARulesSchema.and(
      z
        .any()
        .openapi({
          description:
            " Describes the period of time that a file is not accessed, after which it transitions to IA storage. Metadata operations such as listing the contents of a directory don't count as file access events.",
        }),
    ).exactOptional(),
    TransitionToPrimaryStorageClass: TransitionToPrimaryStorageClassRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes when to transition a file from IA storage to primary storage. Metadata operations such as listing the contents of a directory don't count as file access events.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system\'s Infrequent Access (IA) storage class. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Intelligent‐Tiering and EFS Lifecycle Management</a>.</p> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. For more information, see the request examples in <a>PutLifecycleConfiguration</a>.</p> </note>',
    required: [],
  })
  .openapi('LifecyclePolicy')

const LifecyclePoliciesSchema = z.array(LifecyclePolicySchema).max(2).openapi('LifecyclePolicies')

const LifecycleConfigurationDescriptionSchema = z
  .object({
    LifecyclePolicies: LifecyclePoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of lifecycle management policies. EFS supports a maximum of one policy per file system.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { LifecyclePolicies: [{ TransitionToIA: 'AFTER_30_DAYS' }] }, required: [] })
  .openapi('LifecycleConfigurationDescription')

const SecurityGroupsSchema = z.array(SecurityGroupSchema).max(100).openapi('SecurityGroups')

const DescribeMountTargetSecurityGroupsResponseSchema = z
  .object({
    SecurityGroups: SecurityGroupsSchema.and(
      z.any().openapi({ description: 'An array of security groups.' }),
    ),
  })
  .openapi({ required: ['SecurityGroups'], example: { SecurityGroups: ['sg-4567abcd'] } })
  .openapi('DescribeMountTargetSecurityGroupsResponse')

const IncorrectMountTargetStateSchema = z.any().openapi('IncorrectMountTargetState')

const MountTargetDescriptionsSchema = z
  .array(MountTargetDescriptionSchema)
  .openapi('MountTargetDescriptions')

const DescribeMountTargetsResponseSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the request included the <code>Marker</code>, the response returns that value in this field.',
        }),
    ).exactOptional(),
    MountTargets: MountTargetDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Returns the file system's mount targets as an array of <code>MountTargetDescription</code> objects.",
        }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a value is present, there are more mount targets to return. In a subsequent request, you can provide <code>Marker</code> in your request with this value to retrieve the next set of mount targets.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      MountTargets: [
        {
          FileSystemId: 'fs-01234567',
          IpAddress: '192.0.0.2',
          LifeCycleState: 'available',
          MountTargetId: 'fsmt-12340abc',
          NetworkInterfaceId: 'eni-cedf6789',
          OwnerId: 12345678912,
          SubnetId: 'subnet-1234abcd',
        },
      ],
    },
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeMountTargetsResponse')

const ReplicationConfigurationDescriptionsSchema = z
  .array(ReplicationConfigurationDescriptionSchema)
  .openapi('ReplicationConfigurationDescriptions')

const DescribeReplicationConfigurationsResponseSchema = z
  .object({
    Replications: ReplicationConfigurationDescriptionsSchema.and(
      z
        .any()
        .openapi({ description: 'The collection of replication configurations that is returned.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use the <code>NextToken</code> from the previous response in a subsequent request to fetch the additional descriptions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReplicationConfigurationsResponse')

const DescribeTagsResponseSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the request included a <code>Marker</code>, the response returns that value in this field.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns tags associated with the file system as an array of <code>Tag</code> objects. ',
        }),
    ),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a value is present, there are more tags to return. In a subsequent request, you can provide the value of <code>NextMarker</code> as the value of the <code>Marker</code> parameter in your next request to retrieve the next set of tags.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Tags'],
    example: { Tags: [{ Key: 'Name', Value: 'MyFileSystem' }] },
    description: '<p/>',
  })
  .openapi('DescribeTagsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'An array of the tags for the specified EFS resource.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>NextToken</code> is present if the response payload is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutAccountPreferencesResponseSchema = z
  .object({ ResourceIdPreference: ResourceIdPreferenceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PutAccountPreferencesResponse')

const InvalidPolicyExceptionSchema = z.any().openapi('InvalidPolicyException')

const TooManyRequestsSchema = z.any().openapi('TooManyRequests')

const BackupSchema = z.boolean().openapi('Backup')

const BypassPolicyLockoutSafetyCheckSchema = z.boolean().openapi('BypassPolicyLockoutSafetyCheck')

const CreateAccessPointRequestSchema = z
  .object({
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.',
        }),
    ).exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the EFS file system that the access point provides access to.',
        }),
    ),
    PosixUser: PosixUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operating system user and group applied to all file system requests made using the access point.',
        }),
    ).exactOptional(),
    RootDirectory: RootDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist, EFS creates it and applies the <code>CreationInfo</code> settings when a client connects to an access point. When specifying a <code>RootDirectory</code>, you must provide the <code>Path</code>, and the <code>CreationInfo</code>.</p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClientToken', 'FileSystemId'], title: 'CreateAccessPointRequest' })
  .openapi('CreateAccessPointRequest')

const CreateFileSystemRequestSchema = z
  .object({
    CreationToken: CreationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.',
        }),
    ),
    PerformanceMode: PerformanceModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.</p> <note> <p>The <code>maxIO</code> mode is not supported on file systems using One Zone storage classes.</p> </note>",
        }),
    ).exactOptional(),
    Encrypted: EncryptedSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. ",
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a> parameter to true.</p> <important> <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.</p> </important>',
        }),
    ).exactOptional(),
    ThroughputMode: ThroughputModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system\'s throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>. </p> <p>Default is <code>bursting</code>.</p>',
        }),
    ).exactOptional(),
    ProvisionedThroughputInMibps: ProvisionedThroughputInMibpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The throughput, measured in MiB/s, that you want to provision for a file system that you\'re creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact Amazon Web Services Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>.',
        }),
    ).exactOptional(),
    AvailabilityZoneName: AvailabilityZoneNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Used to create a file system that uses One Zone storage classes. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>One Zone storage classes are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p> </note>',
        }),
    ).exactOptional(),
    Backup: BackupSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to <code>true</code> to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the <i>Amazon EFS User Guide</i>.</p> <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>, the default is <code>true</code>.</p> <note> <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p> </note>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair. Each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CreationToken'], title: 'CreateFileSystemRequest' })
  .openapi('CreateFileSystemRequest')

const CreateMountTargetRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the file system for which to create the mount target.',
        }),
    ),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.",
        }),
    ),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'Valid IPv4 address within the address range of the specified subnet.',
        }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemId', 'SubnetId'],
    title: 'CreateMountTargetRequest',
    description: '<p/>',
  })
  .openapi('CreateMountTargetRequest')

const DestinationsToCreateSchema = z
  .array(DestinationToCreateSchema)
  .openapi('DestinationsToCreate')

const CreateReplicationConfigurationRequestSchema = z
  .object({
    Destinations: DestinationsToCreateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of destination configuration objects. Only one destination configuration object is supported.',
        }),
    ),
  })
  .openapi({ required: ['Destinations'], title: 'CreateReplicationConfigurationRequest' })
  .openapi('CreateReplicationConfigurationRequest')

const CreateTagsRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair. ',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'CreateTagsRequest', description: '<p/>' })
  .openapi('CreateTagsRequest')

const DeleteAccessPointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPointRequest' })
  .openapi('DeleteAccessPointRequest')

const DeleteFileSystemPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFileSystemPolicyRequest' })
  .openapi('DeleteFileSystemPolicyRequest')

const DeleteFileSystemRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFileSystemRequest', description: '<p/>' })
  .openapi('DeleteFileSystemRequest')

const DeleteMountTargetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMountTargetRequest', description: '<p/>' })
  .openapi('DeleteMountTargetRequest')

const DeleteReplicationConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteReplicationConfigurationRequest' })
  .openapi('DeleteReplicationConfigurationRequest')

const TagKeysSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeys')

const DeleteTagsRequestSchema = z
  .object({
    TagKeys: TagKeysSchema.and(z.any().openapi({ description: 'A list of tag keys to delete.' })),
  })
  .openapi({ required: ['TagKeys'], title: 'DeleteTagsRequest', description: '<p/>' })
  .openapi('DeleteTagsRequest')

const MaxResultsSchema = z
  .int()
  .min(1)
  .openapi({ description: 'Max results used for pagination.' })
  .openapi('MaxResults')

const DescribeAccessPointsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAccessPointsRequest' })
  .openapi('DescribeAccessPointsRequest')

const DescribeAccountPreferencesRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of Amazon Web Services account preferences if the response payload was paginated.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) When retrieving account preferences, you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAccountPreferencesRequest', required: [] })
  .openapi('DescribeAccountPreferencesRequest')

const DescribeBackupPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBackupPolicyRequest' })
  .openapi('DescribeBackupPolicyRequest')

const DescribeFileSystemPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFileSystemPolicyRequest' })
  .openapi('DescribeFileSystemPolicyRequest')

const MaxItemsSchema = z.int().min(1).openapi('MaxItems')

const DescribeFileSystemsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFileSystemsRequest', description: '<p/>' })
  .openapi('DescribeFileSystemsRequest')

const DescribeLifecycleConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLifecycleConfigurationRequest' })
  .openapi('DescribeLifecycleConfigurationRequest')

const DescribeMountTargetSecurityGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeMountTargetSecurityGroupsRequest', description: '<p/>' })
  .openapi('DescribeMountTargetSecurityGroupsRequest')

const DescribeMountTargetsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeMountTargetsRequest', description: '<p/>' })
  .openapi('DescribeMountTargetsRequest')

const DescribeReplicationConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeReplicationConfigurationsRequest' })
  .openapi('DescribeReplicationConfigurationsRequest')

const DescribeTagsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeTagsRequest', description: '<p/>' })
  .openapi('DescribeTagsRequest')

const ResourceIdSchema = z
  .string()
  .regex(
    /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point\/fsap|file-system\/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$/,
  )
  .max(128)
  .openapi('ResourceId')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ModifyMountTargetSecurityGroupsRequestSchema = z
  .object({
    SecurityGroups: SecurityGroupsSchema.and(
      z.any().openapi({ description: 'An array of up to five VPC security group IDs.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ModifyMountTargetSecurityGroupsRequest', description: '<p/>', required: [] })
  .openapi('ModifyMountTargetSecurityGroupsRequest')

const PutAccountPreferencesRequestSchema = z
  .object({
    ResourceIdType: ResourceIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the EFS resource ID preference to set for the user's Amazon Web Services account, in the current Amazon Web Services Region, either <code>LONG_ID</code> (17 characters), or <code>SHORT_ID</code> (8 characters).</p> <note> <p>Starting in October, 2021, you will receive an error when setting the account preference to <code>SHORT_ID</code>. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>",
        }),
    ),
  })
  .openapi({ required: ['ResourceIdType'], title: 'PutAccountPreferencesRequest' })
  .openapi('PutAccountPreferencesRequest')

const PutBackupPolicyRequestSchema = z
  .object({
    BackupPolicy: BackupPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The backup policy included in the <code>PutBackupPolicy</code> request.',
        }),
    ),
  })
  .openapi({ required: ['BackupPolicy'], title: 'PutBackupPolicyRequest' })
  .openapi('PutBackupPolicyRequest')

const PutFileSystemPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>FileSystemPolicy</code> that you\'re creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>. ',
        }),
    ),
    BypassPolicyLockoutSafetyCheck: BypassPolicyLockoutSafetyCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Policy'], title: 'PutFileSystemPolicyRequest' })
  .openapi('PutFileSystemPolicyRequest')

const PutLifecycleConfigurationRequestSchema = z
  .object({
    LifecyclePolicies: LifecyclePoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs EFS lifecycle management and EFS Intelligent-Tiering of the following:</p> <ul> <li> <p>When to move files in the file system from primary storage to the IA storage class.</p> </li> <li> <p>When to move files that are in IA storage to primary storage.</p> </li> </ul> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</p> </note>",
        }),
    ),
  })
  .openapi({ required: ['LifecyclePolicies'], title: 'PutLifecycleConfigurationRequest' })
  .openapi('PutLifecycleConfigurationRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateFileSystemRequestSchema = z
  .object({
    ThroughputMode: ThroughputModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.",
        }),
    ).exactOptional(),
    ProvisionedThroughputInMibps: ProvisionedThroughputInMibpsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFileSystemRequest', required: [] })
  .openapi('UpdateFileSystemRequest')

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

export const get20150201AccessPointsRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/access-points',
  description:
    '<p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided. If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>',
  operationId: 'DescribeAccessPoints',
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
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              '(Optional) When retrieving all access points for a file system, you can optionally specify the <code>MaxItems</code> parameter to limit the number of objects returned in a response. The default value is 100. ',
            schema: {
              type: 'integer',
              description: 'Max results used for pagination.',
              minimum: 1,
            },
          },
          description: 'Max results used for pagination.',
        }),
      NextToken: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              ' <code>NextToken</code> is present if the response is paginated. You can use <code>NextMarker</code> in the subsequent request to fetch the next page of access point descriptions.',
            schema: {
              type: 'string',
              pattern: '.+',
              description: 'Token used for pagination.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Token used for pagination.',
        }),
      AccessPointId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point\/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'AccessPointId',
            in: 'query',
            required: false,
            description:
              '(Optional) Specifies an EFS access point to describe in the response; mutually exclusive with <code>FileSystemId</code>.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'query',
            required: false,
            description:
              '(Optional) If you provide a <code>FileSystemId</code>, EFS returns all access points for that file system; mutually exclusive with <code>AccessPointId</code>.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccessPointsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})

export const post20150201AccessPointsRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/access-points',
  description:
    '<p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point\'s root directory. Applications using the access point can only access data in the application\'s own directory and any subdirectories. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</p> <note> <p>If multiple requests to create access points on the same file system are sent in quick succession, and the file system is near the limit of 1000 access points, you may experience a throttling response for these requests. This is to ensure that the file system does not exceed the stated access point limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>',
  operationId: 'CreateAccessPoint',
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
              ClientToken: z
                .string()
                .regex(/.+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.',
                }),
              FileSystemId: z
                .string()
                .regex(
                  /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
                )
                .max(128)
                .openapi({
                  description:
                    'The ID of the EFS file system that the access point provides access to.',
                }),
              PosixUser: z
                .object({
                  Uid: UidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The POSIX user ID used for all file system operations using this access point.',
                      }),
                  ).exactOptional(),
                  Gid: GidSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The POSIX group ID used for all file system operations using this access point.',
                      }),
                  ).exactOptional(),
                  SecondaryGids: SecondaryGidsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Secondary POSIX group IDs used for all file system operations using this access point.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.',
                  required: [],
                }),
              RootDirectory: z
                .object({
                  Path: PathSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the <code>CreationInfo</code>.',
                      }),
                  ).exactOptional(),
                  CreationInfo: CreationInfoSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>(Optional) Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code>. If the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist, EFS creates the root directory using the <code>CreationInfo</code> settings when a client connects to an access point. When specifying the <code>CreationInfo</code>, you must provide values for all properties. </p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> &gt; <code>Path</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.",
                  required: [],
                }),
            })
            .openapi({ required: ['ClientToken', 'FileSystemId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AccessPointDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'AccessPointAlreadyExists',
      content: { 'application/json': { schema: AccessPointAlreadyExistsSchema } },
    },
    482: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    485: {
      description: 'AccessPointLimitExceeded',
      content: { 'application/json': { schema: AccessPointLimitExceededSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20150201FileSystemsRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/file-systems',
  description:
    "<p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. This number is automatically set to 100. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>",
  operationId: 'DescribeFileSystems',
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
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              '(Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems. ',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Marker: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              '(Optional) Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the list from where the returning call had left off. ',
            schema: { type: 'string', pattern: '.+', minLength: 1, maxLength: 128 },
          },
        }),
      CreationToken: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'CreationToken',
            in: 'query',
            required: false,
            description:
              '(Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.',
            schema: { type: 'string', pattern: '.+', minLength: 1, maxLength: 64 },
          },
        }),
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'query',
            required: false,
            description:
              '(Optional) ID of the file system whose description you want to retrieve (String).',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFileSystemsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
  },
})

export const post20150201FileSystemsRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/file-systems',
  description:
    '<p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller\'s Amazon Web Services account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system\'s lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can\'t be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance modes</a>.</p> <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>',
  operationId: 'CreateFileSystem',
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
              CreationToken: z
                .string()
                .regex(/.+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.',
                }),
              PerformanceMode: z
                .enum(['generalPurpose', 'maxIO'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>The performance mode of the file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.</p> <note> <p>The <code>maxIO</code> mode is not supported on file systems using One Zone storage classes.</p> </note>",
                }),
              Encrypted: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system. ",
                }),
              KmsKeyId: z
                .string()
                .regex(
                  /^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|mrk-[0-9a-f]{32}|alias\/[a-zA-Z0-9\/_-]+|(arn:aws[-a-z]*:kms:[a-z0-9-]+:\d{12}:((key\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(key\/mrk-[0-9a-f]{32})|(alias\/[a-zA-Z0-9\/_-]+))))$/,
                )
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats:</p> <ul> <li> <p>Key ID - A unique identifier of the key, for example <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>ARN - An Amazon Resource Name (ARN) for the key, for example <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p> </li> <li> <p>Key alias - A previously created display name for a key, for example <code>alias/projectKey1</code>.</p> </li> <li> <p>Key alias ARN - An ARN for a key alias, for example <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p> </li> </ul> <p>If you use <code>KmsKeyId</code>, you must set the <a>CreateFileSystemRequest$Encrypted</a> parameter to true.</p> <important> <p>EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.</p> </important>',
                }),
              ThroughputMode: z
                .enum(['bursting', 'provisioned', 'elastic'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the throughput mode for the file system. The mode can be <code>bursting</code>, <code>provisioned</code>, or <code>elastic</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>. After you create the file system, you can decrease your file system\'s throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying throughput with provisioned mode</a> in the <i>Amazon EFS User Guide</i>. </p> <p>Default is <code>bursting</code>.</p>',
                }),
              ProvisionedThroughputInMibps: z
                .float64()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The throughput, measured in MiB/s, that you want to provision for a file system that you\'re creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact Amazon Web Services Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS quotas that you can increase</a> in the <i>Amazon EFS User Guide</i>.',
                }),
              AvailabilityZoneName: z
                .string()
                .regex(/.+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Used to create a file system that uses One Zone storage classes. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format <code>us-east-1a</code> to specify the Availability Zone. For more information about One Zone storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">Using EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> <note> <p>One Zone storage classes are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.</p> </note>',
                }),
              Backup: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to <code>true</code> to enable automatic backups. If you are creating a file system that uses One Zone storage classes, automatic backups are enabled by default. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a> in the <i>Amazon EFS User Guide</i>.</p> <p>Default is <code>false</code>. However, if you specify an <code>AvailabilityZoneName</code>, the default is <code>true</code>.</p> <note> <p>Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.</p> </note>',
                }),
              Tags: z
                .array(TagSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a <code>"Key":"Name","Value":"{value}"</code> key-value pair. Each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.',
                }),
            })
            .openapi({ required: ['CreationToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: FileSystemDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemAlreadyExists',
      content: { 'application/json': { schema: FileSystemAlreadyExistsSchema } },
    },
    483: {
      description: 'FileSystemLimitExceeded',
      content: { 'application/json': { schema: FileSystemLimitExceededSchema } },
    },
    484: {
      description: 'InsufficientThroughputCapacity',
      content: { 'application/json': { schema: InsufficientThroughputCapacitySchema } },
    },
    485: {
      description: 'ThroughputLimitExceeded',
      content: { 'application/json': { schema: ThroughputLimitExceededSchema } },
    },
    486: {
      description: 'UnsupportedAvailabilityZone',
      content: { 'application/json': { schema: UnsupportedAvailabilityZoneSchema } },
    },
  },
})

export const get20150201MountTargetsRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/mount-targets',
  description:
    '<p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>',
  operationId: 'DescribeMountTargets',
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
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              '(Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Marker: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              '(Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.',
            schema: { type: 'string', pattern: '.+', minLength: 1, maxLength: 128 },
          },
        }),
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'query',
            required: false,
            description:
              '(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
      MountTargetId: z
        .string()
        .regex(/^fsmt-[0-9a-f]{8,40}$/)
        .min(13)
        .max(45)
        .exactOptional()
        .openapi({
          param: {
            name: 'MountTargetId',
            in: 'query',
            required: false,
            description:
              '(Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.',
            schema: {
              type: 'string',
              pattern: '^fsmt-[0-9a-f]{8,40}$',
              minLength: 13,
              maxLength: 45,
            },
          },
        }),
      AccessPointId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point\/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'AccessPointId',
            in: 'query',
            required: false,
            description:
              '(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMountTargetsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'MountTargetNotFound',
      content: { 'application/json': { schema: MountTargetNotFoundSchema } },
    },
    484: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})

export const post20150201MountTargetsRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/mount-targets',
  description:
    "<p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.</p> <p>You can create only one mount target for an EFS file system using One Zone storage classes. You must create that mount target in the same Availability Zone in which the file system is located. Use the <code>AvailabilityZoneName</code> and <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a> response object to get this information. Use the <code>subnetId</code> associated with the file system's Availability Zone when creating the mount target.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html\">Amazon EFS: How it Works</a>. </p> <p>To create a mount target for a file system, the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, provide the following:</p> <ul> <li> <p>The file system ID for which you are creating the mount target.</p> </li> <li> <p>A subnet ID, which determines the following:</p> <ul> <li> <p>The VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>The Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation\">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href=\"http://aws.amazon.com/efs/\">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>",
  operationId: 'CreateMountTarget',
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
              FileSystemId: z
                .string()
                .regex(
                  /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
                )
                .max(128)
                .openapi({
                  description: 'The ID of the file system for which to create the mount target.',
                }),
              SubnetId: z
                .string()
                .regex(/^subnet-[0-9a-f]{8,40}$/)
                .min(15)
                .max(47)
                .openapi({
                  description:
                    "The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.",
                }),
              IpAddress: z
                .string()
                .regex(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/)
                .min(7)
                .max(15)
                .exactOptional()
                .openapi({
                  description:
                    'Valid IPv4 address within the address range of the specified subnet.',
                }),
              SecurityGroups: z
                .array(SecurityGroupSchema)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.',
                }),
            })
            .openapi({ required: ['FileSystemId', 'SubnetId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MountTargetDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
    484: {
      description: 'MountTargetConflict',
      content: { 'application/json': { schema: MountTargetConflictSchema } },
    },
    485: {
      description: 'SubnetNotFound',
      content: { 'application/json': { schema: SubnetNotFoundSchema } },
    },
    486: {
      description: 'NoFreeAddressesInSubnet',
      content: { 'application/json': { schema: NoFreeAddressesInSubnetSchema } },
    },
    487: {
      description: 'IpAddressInUse',
      content: { 'application/json': { schema: IpAddressInUseSchema } },
    },
    488: {
      description: 'NetworkInterfaceLimitExceeded',
      content: { 'application/json': { schema: NetworkInterfaceLimitExceededSchema } },
    },
    489: {
      description: 'SecurityGroupLimitExceeded',
      content: { 'application/json': { schema: SecurityGroupLimitExceededSchema } },
    },
    490: {
      description: 'SecurityGroupNotFound',
      content: { 'application/json': { schema: SecurityGroupNotFoundSchema } },
    },
    491: {
      description: 'UnsupportedAvailabilityZone',
      content: { 'application/json': { schema: UnsupportedAvailabilityZoneSchema } },
    },
    492: {
      description: 'AvailabilityZonesMismatch',
      content: { 'application/json': { schema: AvailabilityZonesMismatchSchema } },
    },
  },
})

export const post20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration',
  description:
    '<p>Creates a replication configuration that replicates an existing EFS file system to a new, read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>. The replication configuration specifies the following:</p> <ul> <li> <p> <b>Source file system</b> - An existing EFS file system that you want replicated. The source file system cannot be a destination file system in an existing replication configuration.</p> </li> <li> <p> <b>Destination file system configuration</b> - The configuration of the destination file system to which the source file system will be replicated. There can only be one destination file system in a replication configuration. The destination file system configuration consists of the following properties:</p> <ul> <li> <p> <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions that Amazon EFS is available in, except Africa (Cape Town), Asia Pacific (Hong Kong), Asia Pacific (Jakarta), Europe (Milan), and Middle East (Bahrain).</p> </li> <li> <p> <b>Availability Zone</b> - If you want the destination file system to use EFS One Zone availability and durability, you must specify the Availability Zone to create the file system in. For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html"> Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p> </li> <li> <p> <b>Encryption</b> - All destination file systems are created with encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don\'t specify a KMS key, your service-managed KMS key for Amazon EFS is used. </p> <note> <p>After the file system is created, you cannot change the KMS key.</p> </note> </li> </ul> </li> </ul> <p>The following properties are set by default:</p> <ul> <li> <p> <b>Performance mode</b> - The destination file system\'s performance mode matches that of the source file system, unless the destination file system uses EFS One Zone storage. In that case, the General Purpose performance mode is used. The performance mode cannot be changed.</p> </li> <li> <p> <b>Throughput mode</b> - The destination file system\'s throughput mode matches that of the source file system. After the file system is created, you can modify the throughput mode.</p> </li> </ul> <p>The following properties are turned off by default:</p> <ul> <li> <p> <b>Lifecycle management</b> - EFS lifecycle management and EFS Intelligent-Tiering are not enabled on the destination file system. After the destination file system is created, you can enable EFS lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p> <b>Automatic backups</b> - Automatic daily backups not enabled on the destination file system. After the file system is created, you can change this setting.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User Guide</i>.</p>',
  operationId: 'CreateReplicationConfiguration',
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
      SourceFileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'SourceFileSystemId',
            in: 'path',
            required: true,
            description:
              'Specifies the Amazon EFS file system that you want to replicate. This file system cannot already be a source or destination file system in another replication configuration.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Destinations: z
                .array(DestinationToCreateSchema)
                .openapi({
                  description:
                    'An array of destination configuration objects. Only one destination configuration object is supported.',
                }),
            })
            .openapi({ required: ['Destinations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplicationConfigurationDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ReplicationNotFound',
      content: { 'application/json': { schema: ReplicationNotFoundSchema } },
    },
    484: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    485: {
      description: 'UnsupportedAvailabilityZone',
      content: { 'application/json': { schema: UnsupportedAvailabilityZoneSchema } },
    },
    486: {
      description: 'FileSystemLimitExceeded',
      content: { 'application/json': { schema: FileSystemLimitExceededSchema } },
    },
    487: {
      description: 'InsufficientThroughputCapacity',
      content: { 'application/json': { schema: InsufficientThroughputCapacitySchema } },
    },
    488: {
      description: 'ThroughputLimitExceeded',
      content: { 'application/json': { schema: ThroughputLimitExceededSchema } },
    },
    489: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const delete20150201FileSystemsSourceFileSystemIdReplicationConfigurationRoute = createRoute(
  {
    method: 'delete',
    path: '/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration',
    description:
      'Deletes an existing replication configuration. To delete a replication configuration, you must make the request from the Amazon Web Services Region in which the destination file system is located. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system is no longer read-only. You can write to the destination file system after its status becomes <code>Writeable</code>.',
    operationId: 'DeleteReplicationConfiguration',
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
        SourceFileSystemId: z
          .string()
          .regex(
            /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
          )
          .max(128)
          .openapi({
            param: {
              name: 'SourceFileSystemId',
              in: 'path',
              required: true,
              description: 'The ID of the source file system in the replication configuration.',
              schema: {
                type: 'string',
                pattern:
                  '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
                maxLength: 128,
              },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'FileSystemNotFound',
        content: { 'application/json': { schema: FileSystemNotFoundSchema } },
      },
      483: {
        description: 'ReplicationNotFound',
        content: { 'application/json': { schema: ReplicationNotFoundSchema } },
      },
    },
  },
)

export const post20150201CreateTagsFileSystemIdRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/create-tags/{FileSystemId}',
  description:
    '<note> <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS resources, use the API action.</p> </note> <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>',
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
    }),
    params: z.object({
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
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
                .array(TagSchema)
                .openapi({
                  description:
                    'An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair. ',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
  },
  deprecated: true,
})

export const delete20150201AccessPointsAccessPointIdRoute = createRoute({
  method: 'delete',
  path: '/2015-02-01/access-points/{AccessPointId}',
  description:
    '<p>Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>',
  operationId: 'DeleteAccessPoint',
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
      AccessPointId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point\/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'AccessPointId',
            in: 'path',
            required: true,
            description: 'The ID of the access point that you want to delete.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:access-point/fsap-[0-9a-f]{8,40}|fsap-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})

export const put20150201FileSystemsFileSystemIdRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/file-systems/{FileSystemId}',
  description:
    'Updates the throughput mode or the amount of provisioned throughput of an existing file system.',
  operationId: 'UpdateFileSystem',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description: 'The ID of the file system that you want to update.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ThroughputMode: z
                .enum(['bursting', 'provisioned', 'elastic'])
                .exactOptional()
                .openapi({
                  description:
                    "(Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.",
                }),
              ProvisionedThroughputInMibps: z
                .float64()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '(Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: FileSystemDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    482: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
    483: {
      description: 'InsufficientThroughputCapacity',
      content: { 'application/json': { schema: InsufficientThroughputCapacitySchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThroughputLimitExceeded',
      content: { 'application/json': { schema: ThroughputLimitExceededSchema } },
    },
    486: {
      description: 'TooManyRequests',
      content: { 'application/json': { schema: TooManyRequestsSchema } },
    },
  },
})

export const delete20150201FileSystemsFileSystemIdRoute = createRoute({
  method: 'delete',
  path: '/2015-02-01/file-systems/{FileSystemId}',
  description:
    "<p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p>You need to manually delete mount targets attached to a file system before you can delete an EFS file system. This step is performed for you when you use the Amazon Web Services console to delete a file system.</p> <note> <p>You cannot delete a file system that is part of an EFS Replication configuration. You need to delete the replication configuration first.</p> </note> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>",
  operationId: 'DeleteFileSystem',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description: 'The ID of the file system you want to delete.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'FileSystemInUse',
      content: { 'application/json': { schema: FileSystemInUseSchema } },
    },
  },
})

export const get20150201FileSystemsFileSystemIdPolicyRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/file-systems/{FileSystemId}/policy',
  description:
    '<p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>',
  operationId: 'DescribeFileSystemPolicy',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FileSystemPolicyDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'PolicyNotFound',
      content: { 'application/json': { schema: PolicyNotFoundSchema } },
    },
  },
})

export const put20150201FileSystemsFileSystemIdPolicyRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/file-systems/{FileSystemId}/policy',
  description:
    '<p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. EFS file system policies have a 20,000 character limit. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>. </p> <note> <p>EFS file system policies have a 20,000 character limit.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>',
  operationId: 'PutFileSystemPolicy',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .string()
                .regex(/[\s\S]+/)
                .min(1)
                .max(20000)
                .openapi({
                  description:
                    'The <code>FileSystemPolicy</code> that you\'re creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>. ',
                }),
              BypassPolicyLockoutSafetyCheck: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '(Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>. ',
                }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FileSystemPolicyDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'InvalidPolicyException',
      content: { 'application/json': { schema: InvalidPolicyExceptionSchema } },
    },
    484: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
  },
})

export const delete20150201FileSystemsFileSystemIdPolicyRoute = createRoute({
  method: 'delete',
  path: '/2015-02-01/file-systems/{FileSystemId}/policy',
  description:
    '<p>Deletes the <code>FileSystemPolicy</code> for the specified file system. The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted. For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>',
  operationId: 'DeleteFileSystemPolicy',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'Specifies the EFS file system for which to delete the <code>FileSystemPolicy</code>.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
  },
})

export const delete20150201MountTargetsMountTargetIdRoute = createRoute({
  method: 'delete',
  path: '/2015-02-01/mount-targets/{MountTargetId}',
  description:
    "<p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>",
  operationId: 'DeleteMountTarget',
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
      MountTargetId: z
        .string()
        .regex(/^fsmt-[0-9a-f]{8,40}$/)
        .min(13)
        .max(45)
        .openapi({
          param: {
            name: 'MountTargetId',
            in: 'path',
            required: true,
            description: 'The ID of the mount target to delete (String).',
            schema: {
              type: 'string',
              pattern: '^fsmt-[0-9a-f]{8,40}$',
              minLength: 13,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'DependencyTimeout',
      content: { 'application/json': { schema: DependencyTimeoutSchema } },
    },
    483: {
      description: 'MountTargetNotFound',
      content: { 'application/json': { schema: MountTargetNotFoundSchema } },
    },
  },
})

export const post20150201DeleteTagsFileSystemIdRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/delete-tags/{FileSystemId}',
  description:
    '<note> <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS resources, use the API action.</p> </note> <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn\'t exist, Amazon EFS ignores it and doesn\'t cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>',
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
    }),
    params: z.object({
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description: 'The ID of the file system whose tags you want to delete (String).',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TagKeys: z
                .array(TagKeySchema)
                .min(1)
                .max(50)
                .openapi({ description: 'A list of tag keys to delete.' }),
            })
            .openapi({ required: ['TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
  },
  deprecated: true,
})

export const get20150201AccountPreferencesRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/account-preferences',
  description:
    'Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region. For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.',
  operationId: 'DescribeAccountPreferences',
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
              NextToken: z
                .string()
                .regex(/.+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Token used for pagination.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Max results used for pagination.' }),
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
      content: { 'application/json': { schema: DescribeAccountPreferencesResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const put20150201AccountPreferencesRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/account-preferences',
  description:
    '<p>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p> <note> <p>Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</p> </note>',
  operationId: 'PutAccountPreferences',
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
              ResourceIdType: z
                .enum(['LONG_ID', 'SHORT_ID'])
                .openapi({
                  description:
                    'A preference indicating a choice to use 63bit/32bit IDs for all applicable resources.',
                }),
            })
            .openapi({ required: ['ResourceIdType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAccountPreferencesResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const get20150201FileSystemsFileSystemIdBackupPolicyRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/file-systems/{FileSystemId}/backup-policy',
  description: 'Returns the backup policy for the specified EFS file system.',
  operationId: 'DescribeBackupPolicy',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'Specifies which EFS file system to retrieve the <code>BackupPolicy</code> for.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BackupPolicyDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'PolicyNotFound',
      content: { 'application/json': { schema: PolicyNotFoundSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const put20150201FileSystemsFileSystemIdBackupPolicyRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/file-systems/{FileSystemId}/backup-policy',
  description:
    "Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. ",
  operationId: 'PutBackupPolicy',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description: 'Specifies which EFS file system to update the backup policy for.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BackupPolicy: z
                .object({
                  Status: StatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Describes the status of the file system's backup policy.</p> <ul> <li> <p> <b> <code>ENABLED</code> </b> - EFS is automatically backing up the file system.</p> </li> <li> <p> <b> <code>ENABLING</code> </b> - EFS is turning on automatic backups for the file system.</p> </li> <li> <p> <b> <code>DISABLED</code> </b> - Automatic back ups are turned off for the file system.</p> </li> <li> <p> <b> <code>DISABLING</code> </b> - EFS is turning off automatic backups for the file system.</p> </li> </ul>",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.',
                  required: [],
                }),
            })
            .openapi({ required: ['BackupPolicy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BackupPolicyDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    482: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150201FileSystemsFileSystemIdLifecycleConfigurationRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration',
  description:
    '<p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>When EFS Intelligent-Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>',
  operationId: 'DescribeLifecycleConfiguration',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'The ID of the file system whose <code>LifecycleConfiguration</code> object you want to retrieve (String).',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LifecycleConfigurationDescriptionSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
  },
})

export const put20150201FileSystemsFileSystemIdLifecycleConfigurationRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration',
  description:
    '<p>Use this action to manage EFS lifecycle management and EFS Intelligent-Tiering. A <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code> objects that define the following:</p> <ul> <li> <p> <b>EFS Lifecycle management</b> - When Amazon EFS automatically transitions files in a file system into the lower-cost EFS Infrequent Access (IA) storage class.</p> <p>To enable EFS Lifecycle management, set the value of <code>TransitionToIA</code> to one of the available options.</p> </li> <li> <p> <b>EFS Intelligent-Tiering</b> - When Amazon EFS automatically transitions files from IA back into the file system\'s primary storage class (EFS Standard or EFS One Zone Standard).</p> <p>To enable EFS Intelligent-Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and turns off lifecycle management and EFS Intelligent-Tiering for the file system.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management and EFS Intelligent-Tiering.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved into IA storage, and when they are moved back to Standard storage.</p> <note> <p>Amazon EFS requires that each <code>LifecyclePolicy</code> object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p> </note> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</p>',
  operationId: 'PutLifecycleConfiguration',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description:
              'The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LifecyclePolicies: z
                .array(LifecyclePolicySchema)
                .max(2)
                .openapi({
                  description:
                    "<p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs EFS lifecycle management and EFS Intelligent-Tiering of the following:</p> <ul> <li> <p>When to move files in the file system from primary storage to the IA storage class.</p> </li> <li> <p>When to move files that are in IA storage to primary storage.</p> </li> </ul> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</p> </note>",
                }),
            })
            .openapi({ required: ['LifecyclePolicies'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LifecycleConfigurationDescriptionSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'IncorrectFileSystemLifeCycleState',
      content: { 'application/json': { schema: IncorrectFileSystemLifeCycleStateSchema } },
    },
  },
})

export const get20150201MountTargetsMountTargetIdSecurityGroupsRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/mount-targets/{MountTargetId}/security-groups',
  description:
    "<p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>",
  operationId: 'DescribeMountTargetSecurityGroups',
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
      MountTargetId: z
        .string()
        .regex(/^fsmt-[0-9a-f]{8,40}$/)
        .min(13)
        .max(45)
        .openapi({
          param: {
            name: 'MountTargetId',
            in: 'path',
            required: true,
            description: 'The ID of the mount target whose security groups you want to retrieve.',
            schema: {
              type: 'string',
              pattern: '^fsmt-[0-9a-f]{8,40}$',
              minLength: 13,
              maxLength: 45,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMountTargetSecurityGroupsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'MountTargetNotFound',
      content: { 'application/json': { schema: MountTargetNotFoundSchema } },
    },
    483: {
      description: 'IncorrectMountTargetState',
      content: { 'application/json': { schema: IncorrectMountTargetStateSchema } },
    },
  },
})

export const put20150201MountTargetsMountTargetIdSecurityGroupsRoute = createRoute({
  method: 'put',
  path: '/2015-02-01/mount-targets/{MountTargetId}/security-groups',
  description:
    "<p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>",
  operationId: 'ModifyMountTargetSecurityGroups',
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
      MountTargetId: z
        .string()
        .regex(/^fsmt-[0-9a-f]{8,40}$/)
        .min(13)
        .max(45)
        .openapi({
          param: {
            name: 'MountTargetId',
            in: 'path',
            required: true,
            description: 'The ID of the mount target whose security groups you want to modify.',
            schema: {
              type: 'string',
              pattern: '^fsmt-[0-9a-f]{8,40}$',
              minLength: 13,
              maxLength: 45,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SecurityGroups: z
                .array(SecurityGroupSchema)
                .max(100)
                .exactOptional()
                .openapi({ description: 'An array of up to five VPC security group IDs.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'MountTargetNotFound',
      content: { 'application/json': { schema: MountTargetNotFoundSchema } },
    },
    483: {
      description: 'IncorrectMountTargetState',
      content: { 'application/json': { schema: IncorrectMountTargetStateSchema } },
    },
    484: {
      description: 'SecurityGroupLimitExceeded',
      content: { 'application/json': { schema: SecurityGroupLimitExceededSchema } },
    },
    485: {
      description: 'SecurityGroupNotFound',
      content: { 'application/json': { schema: SecurityGroupNotFoundSchema } },
    },
  },
})

export const get20150201FileSystemsReplicationConfigurationsRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/file-systems/replication-configurations',
  description:
    'Retrieves the replication configuration for a specific file system. If a file system is not specified, all of the replication configurations for the Amazon Web Services account in an Amazon Web Services Region are retrieved.',
  operationId: 'DescribeReplicationConfigurations',
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
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'query',
            required: false,
            description:
              'You can retrieve the replication configuration for a specific file system by providing its file system ID.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
      NextToken: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              ' <code>NextToken</code> is present if the response is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of output.',
            schema: {
              type: 'string',
              pattern: '.+',
              description: 'Token used for pagination.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Token used for pagination.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              '(Optional) To limit the number of objects returned in a response, you can specify the <code>MaxItems</code> parameter. The default value is 100. ',
            schema: {
              type: 'integer',
              description: 'Max results used for pagination.',
              minimum: 1,
            },
          },
          description: 'Max results used for pagination.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReplicationConfigurationsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ReplicationNotFound',
      content: { 'application/json': { schema: ReplicationNotFoundSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const get20150201TagsFileSystemIdIndexRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/tags/{FileSystemId}/',
  description:
    '<note> <p>DEPRECATED - The <code>DescribeTags</code> action is deprecated and not maintained. To view tags associated with EFS resources, use the <code>ListTagsForResource</code> API action.</p> </note> <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>',
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
    }),
    query: z.object({
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description:
              '(Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Marker: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              '(Optional) An opaque pagination token returned from a previous <code>DescribeTags</code> operation (String). If present, it specifies to continue the list from where the previous call left off.',
            schema: { type: 'string', pattern: '.+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    params: z.object({
      FileSystemId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system\/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'FileSystemId',
            in: 'path',
            required: true,
            description: 'The ID of the file system whose tag set you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:file-system/fs-[0-9a-f]{8,40}|fs-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTagsResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
  },
  deprecated: true,
})

export const get20150201ResourceTagsResourceIdRoute = createRoute({
  method: 'get',
  path: '/2015-02-01/resource-tags/{ResourceId}',
  description:
    '<p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>',
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
      ResourceId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point\/fsap|file-system\/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description:
              'Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point/fsap|file-system/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              '(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.',
            schema: {
              type: 'integer',
              description: 'Max results used for pagination.',
              minimum: 1,
            },
          },
          description: 'Max results used for pagination.',
        }),
      NextToken: z
        .string()
        .regex(/.+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '(Optional) You can use <code>NextToken</code> in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.',
            schema: {
              type: 'string',
              pattern: '.+',
              description: 'Token used for pagination.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Token used for pagination.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})

export const post20150201ResourceTagsResourceIdRoute = createRoute({
  method: 'post',
  path: '/2015-02-01/resource-tags/{ResourceId}',
  description:
    '<p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>',
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
      ResourceId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point\/fsap|file-system\/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID specifying the EFS resource that you want to create a tag for.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point/fsap|file-system/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$',
              maxLength: 128,
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
                .array(TagSchema)
                .openapi({
                  description:
                    'An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})

export const delete20150201ResourceTagsResourceIdTagKeysRoute = createRoute({
  method: 'delete',
  path: '/2015-02-01/resource-tags/{ResourceId}#tagKeys',
  description:
    '<p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p> <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>',
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
      ResourceId: z
        .string()
        .regex(
          /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point\/fsap|file-system\/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$/,
        )
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'Specifies the EFS resource that you want to remove tags from.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point/fsap|file-system/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$',
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'The keys of the key-value tag pairs that you want to remove from the specified EFS resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'AccessPointNotFound',
      content: { 'application/json': { schema: AccessPointNotFoundSchema } },
    },
  },
})
