import { createRoute, z } from '@hono/zod-openapi'

type AWSAccountIdType = string

type ResourceARNType = string

type AdministrativeActionTypeType =
  | 'FILE_SYSTEM_UPDATE'
  | 'STORAGE_OPTIMIZATION'
  | 'FILE_SYSTEM_ALIAS_ASSOCIATION'
  | 'FILE_SYSTEM_ALIAS_DISASSOCIATION'
  | 'VOLUME_UPDATE'
  | 'SNAPSHOT_UPDATE'
  | 'RELEASE_NFS_V3_LOCKS'
  | 'VOLUME_RESTORE'

type ProgressPercentType = number

type RequestTimeType = string

type StatusType = 'FAILED' | 'IN_PROGRESS' | 'PENDING' | 'COMPLETED' | 'UPDATED_OPTIMIZING'

const AWSAccountIdSchema: z.ZodType<AWSAccountIdType> = z
  .string()
  .regex(/^\d{12}$/)
  .length(12)
  .openapi({
    description:
      'An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.',
  })
  .openapi('AWSAccountId')

type CreationTimeType = string

const CreationTimeSchema: z.ZodType<CreationTimeType> = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.',
  })
  .openapi('CreationTime')

type FileSystemIdType = string

const FileSystemIdSchema: z.ZodType<FileSystemIdType> = z
  .string()
  .regex(/^(fs-[0-9a-f]{8,})$/)
  .min(11)
  .max(21)
  .openapi({ description: 'The globally unique ID of the file system, assigned by Amazon FSx.' })
  .openapi('FileSystemId')

type FileSystemTypeType = 'WINDOWS' | 'LUSTRE' | 'ONTAP' | 'OPENZFS'

const FileSystemTypeSchema: z.ZodType<FileSystemTypeType> = z
  .enum(['WINDOWS', 'LUSTRE', 'ONTAP', 'OPENZFS'])
  .openapi({ description: 'The type of file system.' })
  .openapi('FileSystemType')

type FileSystemLifecycleType =
  | 'AVAILABLE'
  | 'CREATING'
  | 'FAILED'
  | 'DELETING'
  | 'MISCONFIGURED'
  | 'UPDATING'
  | 'MISCONFIGURED_UNAVAILABLE'

const FileSystemLifecycleSchema: z.ZodType<FileSystemLifecycleType> = z
  .enum([
    'AVAILABLE',
    'CREATING',
    'FAILED',
    'DELETING',
    'MISCONFIGURED',
    'UPDATING',
    'MISCONFIGURED_UNAVAILABLE',
  ])
  .openapi({ description: 'The lifecycle status of the file system.' })
  .openapi('FileSystemLifecycle')

const ErrorMessageSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ description: 'A detailed error message.' })
  .openapi('ErrorMessage')

type FileSystemFailureDetailsType = {
  Message?: z.infer<typeof ErrorMessageSchema> & { [key: string]: unknown }
}

const FileSystemFailureDetailsSchema: z.ZodType<FileSystemFailureDetailsType> = z
  .object({
    Message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message describing any failures that occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure providing details of any failures that occurred.',
    required: [],
  })
  .openapi('FileSystemFailureDetails')

type StorageCapacityType = number

const StorageCapacitySchema: z.ZodType<StorageCapacityType> = z
  .int()
  .min(0)
  .max(2147483647)
  .openapi({ description: 'The storage capacity for your Amazon FSx file system, in gibibytes.' })
  .openapi('StorageCapacity')

type StorageTypeType = 'SSD' | 'HDD'

const StorageTypeSchema: z.ZodType<StorageTypeType> = z
  .enum(['SSD', 'HDD'])
  .openapi({ description: 'The storage type for your Amazon FSx file system.' })
  .openapi('StorageType')

type VpcIdType = string

const VpcIdSchema: z.ZodType<VpcIdType> = z
  .string()
  .regex(/^(vpc-[0-9a-f]{8,})$/)
  .min(12)
  .max(21)
  .openapi({
    description:
      'The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.',
  })
  .openapi('VpcId')

const SubnetIdSchema = z
  .string()
  .regex(/^(subnet-[0-9a-f]{8,})$/)
  .min(15)
  .max(24)
  .openapi({
    description:
      'The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide.</i> ',
  })
  .openapi('SubnetId')

type SubnetIdsType = z.infer<typeof SubnetIdSchema>[]

const SubnetIdsSchema: z.ZodType<SubnetIdsType> = z
  .array(SubnetIdSchema)
  .max(50)
  .openapi({
    description:
      'A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.',
  })
  .openapi('SubnetIds')

const NetworkInterfaceIdSchema = z
  .string()
  .regex(/^(eni-[0-9a-f]{8,})$/)
  .min(12)
  .max(21)
  .openapi({
    description:
      'An elastic network interface ID. An elastic network interface is a logical networking component in a virtual private cloud (VPC) that represents a virtual network card. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.',
  })
  .openapi('NetworkInterfaceId')

type NetworkInterfaceIdsType = z.infer<typeof NetworkInterfaceIdSchema>[]

const NetworkInterfaceIdsSchema: z.ZodType<NetworkInterfaceIdsType> = z
  .array(NetworkInterfaceIdSchema)
  .max(50)
  .openapi({ description: 'A list of network interface IDs.' })
  .openapi('NetworkInterfaceIds')

type DNSNameType = string

const DNSNameSchema: z.ZodType<DNSNameType> = z
  .string()
  .regex(/^((fs|fc)i?-[0-9a-f]{8,}\..{4,253})$/)
  .min(16)
  .max(275)
  .openapi({
    description:
      'The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.',
  })
  .openapi('DNSName')

type KmsKeyIdType = string

const KmsKeyIdSchema: z.ZodType<KmsKeyIdType> = z
  .string()
  .regex(/^.{1,2048}$/)
  .min(1)
  .max(2048)
  .openapi({
    description:
      '<p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn\'t specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>',
  })
  .openapi('KmsKeyId')

const ResourceARNSchema: z.ZodType<ResourceARNType> = z
  .string()
  .regex(
    /^arn:(?=[^:]+:fsx:[^:]+:\d{12}:)((|(?=[a-z0-9-.]{1,63})(?!\d{1,3}(\.\d{1,3}){3})(?![^:]*-{2})(?![^:]*-\.)(?![^:]*\.-)[a-z0-9].*(?<!-)):){4}(?!\/).{0,1024}$/,
  )
  .min(8)
  .max(512)
  .openapi({
    description:
      'The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.',
  })
  .openapi('ResourceARN')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi({
    description:
      'A string of 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the resource to which they are attached.',
  })
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi({
    description:
      "A string of 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.",
  })
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies the <code>TagKey</code>, the name of the tag. Tag keys must be unique for the resource to which they are attached.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that specifies the <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of <code>finances : April</code> and also of <code>payroll : April</code>.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'Specifies a key-value pair for a resource tag.',
  })
  .openapi('Tag')

type TagsType = z.infer<typeof TagSchema>[]

const TagsSchema: z.ZodType<TagsType> = z
  .array(TagSchema)
  .min(1)
  .max(50)
  .openapi({ description: 'A list of <code>Tag</code> values, with a maximum of 50 elements.' })
  .openapi('Tags')

const DirectoryIdSchema = z
  .string()
  .regex(/^d-[0-9a-f]{10}$/)
  .length(12)
  .openapi('DirectoryId')

const ActiveDirectoryFullyQualifiedNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$/)
  .min(1)
  .max(255)
  .openapi('ActiveDirectoryFullyQualifiedName')

const OrganizationalUnitDistinguishedNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$/)
  .min(1)
  .max(2000)
  .openapi('OrganizationalUnitDistinguishedName')

const FileSystemAdministratorsGroupNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$/)
  .min(1)
  .max(256)
  .openapi('FileSystemAdministratorsGroupName')

const DirectoryUserNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$/)
  .min(1)
  .max(256)
  .openapi('DirectoryUserName')

const IpAddressSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
  )
  .min(7)
  .max(15)
  .openapi('IpAddress')

const DnsIpsSchema = z.array(IpAddressSchema).min(1).max(3).openapi('DnsIps')

const SelfManagedActiveDirectoryAttributesSchema = z
  .object({
    DomainName: ActiveDirectoryFullyQualifiedNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified domain name of the self-managed AD directory.',
        }),
    ).exactOptional(),
    OrganizationalUnitDistinguishedName: OrganizationalUnitDistinguishedNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.',
        }),
    ).exactOptional(),
    FileSystemAdministratorsGroup: FileSystemAdministratorsGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain group whose members have administrative privileges for the FSx file system.',
        }),
    ).exactOptional(),
    UserName: DirectoryUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.',
        }),
    ).exactOptional(),
    DnsIps: DnsIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.',
    required: [],
  })
  .openapi('SelfManagedActiveDirectoryAttributes')

const WindowsDeploymentTypeSchema = z
  .enum(['MULTI_AZ_1', 'SINGLE_AZ_1', 'SINGLE_AZ_2'])
  .openapi('WindowsDeploymentType')

const MegabytesPerSecondSchema = z
  .int()
  .min(8)
  .max(100000)
  .openapi({
    description:
      'The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).',
  })
  .openapi('MegabytesPerSecond')

const FileSystemMaintenanceOperationSchema = z
  .enum(['PATCHING', 'BACKING_UP'])
  .openapi({
    description: 'An enumeration specifying the currently ongoing maintenance operation.',
  })
  .openapi('FileSystemMaintenanceOperation')

const FileSystemMaintenanceOperationsSchema = z
  .array(FileSystemMaintenanceOperationSchema)
  .max(20)
  .openapi({ description: 'A list of maintenance operations.' })
  .openapi('FileSystemMaintenanceOperations')

const WeeklyTimeSchema = z
  .string()
  .regex(/^[1-7]:([01]\d|2[0-3]):?([0-5]\d)$/)
  .length(7)
  .openapi({
    description:
      '<p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>',
  })
  .openapi('WeeklyTime')

const DailyTimeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
  .length(5)
  .openapi({
    description:
      'A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily. ',
  })
  .openapi('DailyTime')

const AutomaticBackupRetentionDaysSchema = z
  .int()
  .min(0)
  .max(90)
  .openapi({
    description:
      'The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.',
  })
  .openapi('AutomaticBackupRetentionDays')

const FlagSchema = z.boolean().openapi('Flag')

const AlternateDNSNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{4,253}$/)
  .min(4)
  .max(253)
  .openapi('AlternateDNSName')

const AliasLifecycleSchema = z
  .enum(['AVAILABLE', 'CREATING', 'DELETING', 'CREATE_FAILED', 'DELETE_FAILED'])
  .openapi('AliasLifecycle')

const AliasSchema = z
  .object({
    Name: AlternateDNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DNS alias. The alias name has to meet the following requirements:</p> <ul> <li> <p>Formatted as a fully-qualified domain name (FQDN), <code>hostname.domain</code>, for example, <code>accounting.example.com</code>.</p> </li> <li> <p>Can contain alphanumeric characters, the underscore (_), and the hyphen (-).</p> </li> <li> <p>Cannot start or end with a hyphen.</p> </li> <li> <p>Can start with a numeric.</p> </li> </ul> <p>For DNS names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>',
        }),
    ).exactOptional(),
    Lifecycle: AliasLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the state of the DNS alias.</p> <ul> <li> <p>AVAILABLE - The DNS alias is associated with an Amazon FSx file system.</p> </li> <li> <p>CREATING - Amazon FSx is creating the DNS alias and associating it with the file system.</p> </li> <li> <p>CREATE_FAILED - Amazon FSx was unable to associate the DNS alias with the file system.</p> </li> <li> <p>DELETING - Amazon FSx is disassociating the DNS alias from the file system and deleting it.</p> </li> <li> <p>DELETE_FAILED - Amazon FSx was unable to disassociate the DNS alias from the file system.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.',
    required: [],
  })
  .openapi('Alias')

const AliasesSchema = z
  .array(AliasSchema)
  .max(50)
  .openapi({
    description:
      'An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.',
  })
  .openapi('Aliases')

const WindowsAccessAuditLogLevelSchema = z
  .enum(['DISABLED', 'SUCCESS_ONLY', 'FAILURE_ONLY', 'SUCCESS_AND_FAILURE'])
  .openapi('WindowsAccessAuditLogLevel')

const GeneralARNSchema = z
  .string()
  .regex(/^arn:[^:]{1,63}:[^:]{0,63}:[^:]{0,63}:(?:|\d{12}):[^\/].{0,1023}$/)
  .min(8)
  .max(1024)
  .openapi('GeneralARN')

const WindowsAuditLogConfigurationSchema = z
  .object({
    FileAccessAuditLogLevel: WindowsAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets which attempt type is logged by Amazon FSx for file and folder accesses.</p> <ul> <li> <p> <code>SUCCESS_ONLY</code> - only successful attempts to access files or folders are logged.</p> </li> <li> <p> <code>FAILURE_ONLY</code> - only failed attempts to access files or folders are logged.</p> </li> <li> <p> <code>SUCCESS_AND_FAILURE</code> - both successful attempts and failed attempts to access files or folders are logged.</p> </li> <li> <p> <code>DISABLED</code> - access auditing of files and folders is turned off.</p> </li> </ul>',
        }),
    ),
    FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p> <ul> <li> <p> <code>SUCCESS_ONLY</code> - only successful attempts to access file shares are logged.</p> </li> <li> <p> <code>FAILURE_ONLY</code> - only failed attempts to access file shares are logged.</p> </li> <li> <p> <code>SUCCESS_AND_FAILURE</code> - both successful attempts and failed attempts to access file shares are logged.</p> </li> <li> <p> <code>DISABLED</code> - access auditing of file shares is turned off.</p> </li> </ul>',
        }),
    ),
    AuditLogDestination: GeneralARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN.</p> <p>The name of the Amazon CloudWatch Logs log group must begin with the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p> <p>The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileAccessAuditLogLevel', 'FileShareAccessAuditLogLevel'],
    description:
      'The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html"> File access auditing</a>.',
  })
  .openapi('WindowsAuditLogConfiguration')

type WindowsFileSystemConfigurationType = {
  ActiveDirectoryId?: z.infer<typeof DirectoryIdSchema> & { [key: string]: unknown }
  SelfManagedActiveDirectoryConfiguration?: z.infer<
    typeof SelfManagedActiveDirectoryAttributesSchema
  >
  DeploymentType?: z.infer<typeof WindowsDeploymentTypeSchema> & { [key: string]: unknown }
  RemoteAdministrationEndpoint?: z.infer<typeof DNSNameSchema> & { [key: string]: unknown }
  PreferredSubnetId?: z.infer<typeof SubnetIdSchema> & { [key: string]: unknown }
  PreferredFileServerIp?: z.infer<typeof IpAddressSchema> & { [key: string]: unknown }
  ThroughputCapacity?: z.infer<typeof MegabytesPerSecondSchema> & { [key: string]: unknown }
  MaintenanceOperationsInProgress?: z.infer<typeof FileSystemMaintenanceOperationsSchema> & {
    [key: string]: unknown
  }
  WeeklyMaintenanceStartTime?: z.infer<typeof WeeklyTimeSchema> & { [key: string]: unknown }
  DailyAutomaticBackupStartTime?: z.infer<typeof DailyTimeSchema> & { [key: string]: unknown }
  AutomaticBackupRetentionDays?: z.infer<typeof AutomaticBackupRetentionDaysSchema> & {
    [key: string]: unknown
  }
  CopyTagsToBackups?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  Aliases?: z.infer<typeof AliasesSchema>
  AuditLogConfiguration?: z.infer<typeof WindowsAuditLogConfigurationSchema> & {
    [key: string]: unknown
  }
}

const WindowsFileSystemConfigurationSchema: z.ZodType<WindowsFileSystemConfigurationType> = z
  .object({
    ActiveDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for an existing Amazon Web Services Managed Microsoft Active Directory instance that the file system is joined to.',
        }),
    ).exactOptional(),
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryAttributesSchema.exactOptional(),
    DeploymentType: WindowsDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the file system deployment type, valid values are the following:</p> <ul> <li> <p> <code>MULTI_AZ_1</code> - Specifies a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability, and supports SSD and HDD storage.</p> </li> <li> <p> <code>SINGLE_AZ_1</code> - (Default) Specifies a file system that is configured for single AZ redundancy, only supports SSD storage.</p> </li> <li> <p> <code>SINGLE_AZ_2</code> - Latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports SSD and HDD storage.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">Single-AZ and Multi-AZ File Systems</a>.</p>',
        }),
    ).exactOptional(),
    RemoteAdministrationEndpoint: DNSNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using Amazon FSx Remote PowerShell.</p> <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this is the DNS name of the file system.</p> <p>This endpoint is temporarily unavailable when the file system is undergoing maintenance.</p>',
        }),
    ).exactOptional(),
    PreferredSubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located. Must be one of the two subnet IDs specified in <code>SubnetIds</code> property. Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p> <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this value is the same as that for <code>SubnetIDs</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources">Availability and durability: Single-AZ and Multi-AZ file systems</a>.</p>',
        }),
    ).exactOptional(),
    PreferredFileServerIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For <code>MULTI_AZ_1</code> deployment types, the IP address of the primary, or preferred, file server.</p> <p>Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that are not joined to a Microsoft Active Directory. Applicable for all Windows file system deployment types. This IP address is temporarily unavailable when the file system is undergoing maintenance. For Linux and Windows SMB clients that are joined to an Active Directory, use the file system\'s DNSName instead. For more information on mapping and mounting file shares, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/accessing-file-shares.html">Accessing File Shares</a>.</p>',
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'The throughput of the Amazon FSx file system, measured in megabytes per second.',
        }),
    ).exactOptional(),
    MaintenanceOperationsInProgress: FileSystemMaintenanceOperationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of maintenance operations in progress for this file system.',
        }),
    ).exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The preferred time to take daily automatic backups, in the UTC time zone.',
        }),
    ).exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.',
        }),
    ).exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.",
        }),
    ).exactOptional(),
    Aliases: AliasesSchema.exactOptional(),
    AuditLogConfiguration: WindowsAuditLogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration for this Microsoft Windows file system.',
    required: [],
  })
  .openapi('WindowsFileSystemConfiguration')

const DataRepositoryLifecycleSchema = z
  .enum(['CREATING', 'AVAILABLE', 'MISCONFIGURED', 'UPDATING', 'DELETING', 'FAILED'])
  .openapi('DataRepositoryLifecycle')

const ArchivePathSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{3,4357}$/)
  .min(3)
  .max(4357)
  .openapi('ArchivePath')

const MegabytesSchema = z.int().min(1).max(512000).openapi('Megabytes')

const AutoImportPolicyTypeSchema = z
  .enum(['NONE', 'NEW', 'NEW_CHANGED', 'NEW_CHANGED_DELETED'])
  .openapi('AutoImportPolicyType')

const DataRepositoryFailureDetailsSchema = z
  .object({ Message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.',
    required: [],
  })
  .openapi('DataRepositoryFailureDetails')

const DataRepositoryConfigurationSchema = z
  .object({
    Lifecycle: DataRepositoryLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the state of the file system\'s S3 durable data repository, if it is configured with an S3 repository. The lifecycle can have the following values:</p> <ul> <li> <p> <code>CREATING</code> - The data repository configuration between the FSx file system and the linked S3 data repository is being created. The data repository is unavailable.</p> </li> <li> <p> <code>AVAILABLE</code> - The data repository is available for use.</p> </li> <li> <p> <code>MISCONFIGURED</code> - Amazon FSx cannot automatically import updates from the S3 bucket until the data repository configuration is corrected. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/troubleshooting.html#troubleshooting-misconfigured-data-repository">Troubleshooting a Misconfigured linked S3 bucket</a>. </p> </li> <li> <p> <code>UPDATING</code> - The data repository is undergoing a customer initiated update and availability may be impacted.</p> </li> <li> <p> <code>FAILED</code> - The data repository is in a terminal state that cannot be recovered.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ImportPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            "The import path to the Amazon S3 bucket (and optional prefix) that you're using as the data repository for your FSx for Lustre file system, for example <code>s3://import-bucket/optional-prefix</code>. If a prefix is specified after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.",
        }),
    ).exactOptional(),
    ExportPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The export path to the Amazon S3 bucket (and prefix) that you are using to store new and changed Lustre file system files in S3.',
        }),
    ).exactOptional(),
    ImportedFileChunkSize: MegabytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p>',
        }),
    ).exactOptional(),
    AutoImportPolicy: AutoImportPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes the file system's linked S3 data repository's <code>AutoImportPolicy</code>. The AutoImportPolicy configures how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.</p> </li> <li> <p> <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system. </p> </li> <li> <p> <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.</p> </li> <li> <p> <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.</p> </li> </ul>",
        }),
    ).exactOptional(),
    FailureDetails: DataRepositoryFailureDetailsSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported on file systems with a data repository association. For file systems with a data repository association, see .</p>',
    required: [],
  })
  .openapi('DataRepositoryConfiguration')

const LustreDeploymentTypeSchema = z
  .enum(['SCRATCH_1', 'SCRATCH_2', 'PERSISTENT_1', 'PERSISTENT_2'])
  .openapi('LustreDeploymentType')

const PerUnitStorageThroughputSchema = z.int().min(12).max(1000).openapi('PerUnitStorageThroughput')

const LustreFileSystemMountNameSchema = z
  .string()
  .regex(/^([A-Za-z0-9_-]{1,8})$/)
  .min(1)
  .max(8)
  .openapi('LustreFileSystemMountName')

const DriveCacheTypeSchema = z.enum(['NONE', 'READ']).openapi('DriveCacheType')

const DataCompressionTypeSchema = z.enum(['NONE', 'LZ4']).openapi('DataCompressionType')

const LustreAccessAuditLogLevelSchema = z
  .enum(['DISABLED', 'WARN_ONLY', 'ERROR_ONLY', 'WARN_ERROR'])
  .openapi('LustreAccessAuditLogLevel')

const LustreLogConfigurationSchema = z
  .object({
    Level: LustreAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The data repository events that are logged by Amazon FSx.</p> <ul> <li> <p> <code>WARN_ONLY</code> - only warning events are logged.</p> </li> <li> <p> <code>ERROR_ONLY</code> - only error events are logged.</p> </li> <li> <p> <code>WARN_ERROR</code> - both warning events and error events are logged.</p> </li> <li> <p> <code>DISABLED</code> - logging of data repository events is turned off.</p> </li> </ul> <p>Note that Amazon File Cache uses a default setting of <code>WARN_ERROR</code>, which can't be changed.</p>",
        }),
    ),
    Destination: GeneralARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that specifies the destination of the logs. The destination can be any Amazon CloudWatch Logs log group ARN. The destination ARN must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Level'],
    description:
      'The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs.',
  })
  .openapi('LustreLogConfiguration')

const LustreRootSquashSchema = z
  .string()
  .regex(/^([0-9]{1,10}):([0-9]{1,10})$/)
  .min(3)
  .max(21)
  .openapi('LustreRootSquash')

const LustreNoSquashNidSchema = z
  .string()
  .regex(/^([0-9\[\]\-]*\.){3}([0-9\[\]\-]*)@tcp$/)
  .min(11)
  .max(43)
  .openapi('LustreNoSquashNid')

const LustreNoSquashNidsSchema = z
  .array(LustreNoSquashNidSchema)
  .max(64)
  .openapi('LustreNoSquashNids')

const LustreRootSquashConfigurationSchema = z
  .object({
    RootSquash: LustreRootSquashSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You enable root squash by setting a user ID (UID) and group ID (GID) for the file system in the format <code>UID:GID</code> (for example, <code>365534:65534</code>). The UID and GID values can range from <code>0</code> to <code>4294967294</code>:</p> <ul> <li> <p>A non-zero value for UID and GID enables root squash. The UID and GID values can be different, but each must be a non-zero value.</p> </li> <li> <p>A value of <code>0</code> (zero) for UID and GID indicates root, and therefore disables root squash.</p> </li> </ul> <p>When root squash is enabled, the user ID and group ID of a root user accessing the file system are re-mapped to the UID and GID you provide.</p>',
        }),
    ).exactOptional(),
    NoSquashNids: LustreNoSquashNidsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When root squash is enabled, you can optionally specify an array of NIDs of clients for which root squash does not apply. A client NID is a Lustre Network Identifier used to uniquely identify a client. You can specify the NID as either a single address or a range of addresses:</p> <ul> <li> <p>A single address is described in standard Lustre NID format by specifying the client’s IP address followed by the Lustre network ID (for example, <code>10.0.1.6@tcp</code>).</p> </li> <li> <p>An address range is described using a dash to separate the range (for example, <code>10.0.[2-10].[1-255]@tcp</code>).</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The configuration for Lustre root squash used to restrict root-level access from clients that try to access your FSx for Lustre file system as root. Use the <code>RootSquash</code> parameter to enable root squash. To learn more about Lustre root squash, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html">Lustre root squash</a>.</p> <p>You can also use the <code>NoSquashNids</code> parameter to provide an array of clients who are not affected by the root squash setting. These clients will access the file system as root, with unrestricted privileges.</p>',
    required: [],
  })
  .openapi('LustreRootSquashConfiguration')

type LustreFileSystemConfigurationType = {
  WeeklyMaintenanceStartTime?: z.infer<typeof WeeklyTimeSchema> & { [key: string]: unknown }
  DataRepositoryConfiguration?: z.infer<typeof DataRepositoryConfigurationSchema>
  DeploymentType?: z.infer<typeof LustreDeploymentTypeSchema> & { [key: string]: unknown }
  PerUnitStorageThroughput?: z.infer<typeof PerUnitStorageThroughputSchema> & {
    [key: string]: unknown
  }
  MountName?: z.infer<typeof LustreFileSystemMountNameSchema> & { [key: string]: unknown }
  DailyAutomaticBackupStartTime?: z.infer<typeof DailyTimeSchema>
  AutomaticBackupRetentionDays?: z.infer<typeof AutomaticBackupRetentionDaysSchema>
  CopyTagsToBackups?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  DriveCacheType?: z.infer<typeof DriveCacheTypeSchema> & { [key: string]: unknown }
  DataCompressionType?: z.infer<typeof DataCompressionTypeSchema> & { [key: string]: unknown }
  LogConfiguration?: z.infer<typeof LustreLogConfigurationSchema> & { [key: string]: unknown }
  RootSquashConfiguration?: z.infer<typeof LustreRootSquashConfigurationSchema> & {
    [key: string]: unknown
  }
}

const LustreFileSystemConfigurationSchema: z.ZodType<LustreFileSystemConfigurationType> = z
  .object({
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Here, <code>d</code> is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.',
        }),
    ).exactOptional(),
    DataRepositoryConfiguration: DataRepositoryConfigurationSchema.exactOptional(),
    DeploymentType: LustreDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The deployment type of the FSx for Lustre file system. <i>Scratch deployment type</i> is designed for temporary storage and shorter-term processing of data.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment types are best suited for when you need temporary storage and shorter-term processing of data. The <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst throughput capacity than <code>SCRATCH_1</code>.</p> <p>The <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment type is used for longer-term storage and workloads and encryption of data in transit. <code>PERSISTENT_2</code> is built on Lustre v2.12 and offers higher <code>PerUnitStorageThroughput</code> (up to 1000 MB/s/TiB) along with a lower minimum storage capacity requirement (600 GiB). To learn more about FSx for Lustre deployment types, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/lustre-deployment-types.html"> FSx for Lustre deployment options</a>.</p> <p>The default is <code>SCRATCH_1</code>.</p>',
        }),
    ).exactOptional(),
    PerUnitStorageThroughput: PerUnitStorageThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Per unit storage throughput represents the megabytes per second of read or write throughput per 1 tebibyte of storage provisioned. File system throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). This option is only valid for <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types. </p> <p>Valid values:</p> <ul> <li> <p>For <code>PERSISTENT_1</code> SSD storage: 50, 100, 200.</p> </li> <li> <p>For <code>PERSISTENT_1</code> HDD storage: 12, 40.</p> </li> <li> <p>For <code>PERSISTENT_2</code> SSD storage: 125, 250, 500, 1000.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MountName: LustreFileSystemMountNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You use the <code>MountName</code> value when mounting the file system.</p> <p>For the <code>SCRATCH_1</code> deployment type, this value is always "<code>fsx</code>". For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2</code> deployment types, this value is a string that is unique within an Amazon Web Services Region. </p>',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags on the file system are copied to backups. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. (Default = false)",
        }),
    ).exactOptional(),
    DriveCacheType: DriveCacheTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with HDD storage devices. This parameter is required when <code>StorageType</code> is HDD. When set to <code>READ</code> the file system has an SSD storage cache that is sized to 20% of the file system's storage capacity. This improves the performance for frequently accessed files by caching up to 20% of the total storage capacity.</p> <p>This parameter is required when <code>StorageType</code> is set to HDD.</p>",
        }),
    ).exactOptional(),
    DataCompressionType: DataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data compression configuration for the file system. <code>DataCompressionType</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - Data compression is turned off for the file system.</p> </li> <li> <p> <code>LZ4</code> - Data compression is turned on with the LZ4 algorithm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>',
        }),
    ).exactOptional(),
    LogConfiguration: LustreLogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre logging configuration. Lustre logging writes the enabled log events for your file system to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    RootSquashConfiguration: LustreRootSquashConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre root squash configuration for an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration for the Amazon FSx for Lustre file system.',
    required: [],
  })
  .openapi('LustreFileSystemConfiguration')

const AdministrativeActionsSchema: z.ZodType<AdministrativeActionsType> = z
  .lazy(() => z.array(AdministrativeActionSchema).max(50))
  .openapi('AdministrativeActions')

const OntapDeploymentTypeSchema = z
  .enum(['MULTI_AZ_1', 'SINGLE_AZ_1'])
  .openapi('OntapDeploymentType')

const IpAddressRangeSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{9,17}$/)
  .min(9)
  .max(17)
  .openapi('IpAddressRange')

const OntapEndpointIpAddressesSchema = z
  .array(IpAddressSchema)
  .min(1)
  .max(2)
  .openapi('OntapEndpointIpAddresses')

const FileSystemEndpointSchema = z
  .object({
    DNSName: DNSNameSchema.exactOptional(),
    IpAddresses: OntapEndpointIpAddressesSchema.and(
      z.any().openapi({ description: 'IP addresses of the file system endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.',
    required: [],
  })
  .openapi('FileSystemEndpoint')

const FileSystemEndpointsSchema = z
  .object({
    Intercluster: FileSystemEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'An endpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems.',
        }),
    ).exactOptional(),
    Management: FileSystemEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.',
    required: [],
  })
  .openapi('FileSystemEndpoints')

const DiskIopsConfigurationModeSchema = z
  .enum(['AUTOMATIC', 'USER_PROVISIONED'])
  .openapi('DiskIopsConfigurationMode')

const IopsSchema = z.int().min(0).max(1000000).openapi('Iops')

const DiskIopsConfigurationSchema = z
  .object({
    Mode: DiskIopsConfigurationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the number of IOPS for the file system is using the system default (<code>AUTOMATIC</code>) or was provisioned by the customer (<code>USER_PROVISIONED</code>).',
        }),
    ).exactOptional(),
    Iops: IopsSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of SSD IOPS provisioned for the file system.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).',
    required: [],
  })
  .openapi('DiskIopsConfiguration')

const RouteTableIdSchema = z
  .string()
  .regex(/^(rtb-[0-9a-f]{8,})$/)
  .min(12)
  .max(21)
  .openapi('RouteTableId')

const RouteTableIdsSchema = z.array(RouteTableIdSchema).max(50).openapi('RouteTableIds')

type OntapFileSystemConfigurationType = {
  AutomaticBackupRetentionDays?: z.infer<typeof AutomaticBackupRetentionDaysSchema>
  DailyAutomaticBackupStartTime?: z.infer<typeof DailyTimeSchema>
  DeploymentType?: z.infer<typeof OntapDeploymentTypeSchema> & { [key: string]: unknown }
  EndpointIpAddressRange?: z.infer<typeof IpAddressRangeSchema> & { [key: string]: unknown }
  Endpoints?: z.infer<typeof FileSystemEndpointsSchema> & { [key: string]: unknown }
  DiskIopsConfiguration?: z.infer<typeof DiskIopsConfigurationSchema> & { [key: string]: unknown }
  PreferredSubnetId?: z.infer<typeof SubnetIdSchema>
  RouteTableIds?: z.infer<typeof RouteTableIdsSchema> & { [key: string]: unknown }
  ThroughputCapacity?: z.infer<typeof MegabytesPerSecondSchema>
  WeeklyMaintenanceStartTime?: z.infer<typeof WeeklyTimeSchema>
}

const OntapFileSystemConfigurationSchema: z.ZodType<OntapFileSystemConfigurationType> = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    DeploymentType: OntapDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the FSx for ONTAP file system deployment type in use in the file system. </p> <ul> <li> <p> <code>MULTI_AZ_1</code> - (Default) A high availability file system configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. </p> </li> <li> <p> <code>SINGLE_AZ_1</code> - A file system configured for Single-AZ redundancy.</p> </li> </ul> <p>For information about the use cases for Multi-AZ and Single-AZ deployments, refer to <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html">Choosing Multi-AZ or Single-AZ file system deployment</a>. </p>',
        }),
    ).exactOptional(),
    EndpointIpAddressRange: IpAddressRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables.',
        }),
    ).exactOptional(),
    Endpoints: FileSystemEndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Management</code> and <code>Intercluster</code> endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.',
        }),
    ).exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSD IOPS configuration for the ONTAP file system, specifying the number of provisioned IOPS and the provision mode.',
        }),
    ).exactOptional(),
    PreferredSubnetId: SubnetIdSchema.exactOptional(),
    RouteTableIds: RouteTableIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Multi-AZ only) The VPC route tables in which your file system's endpoints are created.",
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
  })
  .openapi({ description: 'Configuration for the FSx for NetApp ONTAP file system.', required: [] })
  .openapi('OntapFileSystemConfiguration')

type FileSystemTypeVersionType = string

const FileSystemTypeVersionSchema: z.ZodType<FileSystemTypeVersionType> = z
  .string()
  .regex(/^[0-9](.[0-9]*)*$/)
  .min(1)
  .max(20)
  .openapi('FileSystemTypeVersion')

const OpenZFSDeploymentTypeSchema = z
  .enum(['SINGLE_AZ_1', 'SINGLE_AZ_2'])
  .openapi('OpenZFSDeploymentType')

type VolumeIdType = string

const VolumeIdSchema: z.ZodType<VolumeIdType> = z
  .string()
  .regex(/^(fsvol-[0-9a-f]{17,})$/)
  .length(23)
  .openapi('VolumeId')

type OpenZFSFileSystemConfigurationType = {
  AutomaticBackupRetentionDays?: z.infer<typeof AutomaticBackupRetentionDaysSchema>
  CopyTagsToBackups?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  CopyTagsToVolumes?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  DailyAutomaticBackupStartTime?: z.infer<typeof DailyTimeSchema>
  DeploymentType?: z.infer<typeof OpenZFSDeploymentTypeSchema> & { [key: string]: unknown }
  ThroughputCapacity?: z.infer<typeof MegabytesPerSecondSchema> & { [key: string]: unknown }
  WeeklyMaintenanceStartTime?: z.infer<typeof WeeklyTimeSchema>
  DiskIopsConfiguration?: z.infer<typeof DiskIopsConfigurationSchema>
  RootVolumeId?: z.infer<typeof VolumeIdSchema> & { [key: string]: unknown }
}

const OpenZFSFileSystemConfigurationSchema: z.ZodType<OpenZFSFileSystemConfigurationType> = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags on the file system should be copied to backups. If it's set to <code>true</code>, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. ",
        }),
    ).exactOptional(),
    CopyTagsToVolumes: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. ",
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    DeploymentType: OpenZFSDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the file-system deployment type. Amazon FSx for OpenZFS supports&#x2028; <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code>.',
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'The throughput of an Amazon FSx file system, measured in megabytes per second (MBps).',
        }),
    ).exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.exactOptional(),
    RootVolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the root volume of the OpenZFS file system. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration for the Amazon FSx for OpenZFS file system. ',
    required: [],
  })
  .openapi('OpenZFSFileSystemConfiguration')

type FileSystemType = {
  OwnerId?: z.infer<typeof AWSAccountIdSchema> & { [key: string]: unknown }
  CreationTime?: z.infer<typeof CreationTimeSchema> & { [key: string]: unknown }
  FileSystemId?: z.infer<typeof FileSystemIdSchema> & { [key: string]: unknown }
  FileSystemType?: z.infer<typeof FileSystemTypeSchema> & { [key: string]: unknown }
  Lifecycle?: z.infer<typeof FileSystemLifecycleSchema> & { [key: string]: unknown }
  FailureDetails?: z.infer<typeof FileSystemFailureDetailsSchema>
  StorageCapacity?: z.infer<typeof StorageCapacitySchema> & { [key: string]: unknown }
  StorageType?: z.infer<typeof StorageTypeSchema> & { [key: string]: unknown }
  VpcId?: z.infer<typeof VpcIdSchema> & { [key: string]: unknown }
  SubnetIds?: z.infer<typeof SubnetIdsSchema> & { [key: string]: unknown }
  NetworkInterfaceIds?: z.infer<typeof NetworkInterfaceIdsSchema> & { [key: string]: unknown }
  DNSName?: z.infer<typeof DNSNameSchema> & { [key: string]: unknown }
  KmsKeyId?: z.infer<typeof KmsKeyIdSchema> & { [key: string]: unknown }
  ResourceARN?: z.infer<typeof ResourceARNSchema> & { [key: string]: unknown }
  Tags?: z.infer<typeof TagsSchema> & { [key: string]: unknown }
  WindowsConfiguration?: z.infer<typeof WindowsFileSystemConfigurationSchema> & {
    [key: string]: unknown
  }
  LustreConfiguration?: z.infer<typeof LustreFileSystemConfigurationSchema>
  AdministrativeActions?: z.infer<typeof AdministrativeActionsSchema> & { [key: string]: unknown }
  OntapConfiguration?: z.infer<typeof OntapFileSystemConfigurationSchema> & {
    [key: string]: unknown
  }
  FileSystemTypeVersion?: z.infer<typeof FileSystemTypeVersionSchema> & { [key: string]: unknown }
  OpenZFSConfiguration?: z.infer<typeof OpenZFSFileSystemConfigurationSchema> & {
    [key: string]: unknown
  }
}

type AdministrativeActionFailureDetailsType = {
  Message?: z.infer<typeof ErrorMessageSchema> & { [key: string]: unknown }
}

type VolumeLifecycleType =
  | 'CREATING'
  | 'CREATED'
  | 'DELETING'
  | 'FAILED'
  | 'MISCONFIGURED'
  | 'PENDING'
  | 'AVAILABLE'

const VolumeLifecycleSchema: z.ZodType<VolumeLifecycleType> = z
  .enum(['CREATING', 'CREATED', 'DELETING', 'FAILED', 'MISCONFIGURED', 'PENDING', 'AVAILABLE'])
  .openapi('VolumeLifecycle')

type VolumeNameType = string

const VolumeNameSchema: z.ZodType<VolumeNameType> = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,203}$/)
  .min(1)
  .max(203)
  .openapi('VolumeName')

const FlexCacheEndpointTypeSchema = z
  .enum(['NONE', 'ORIGIN', 'CACHE'])
  .openapi('FlexCacheEndpointType')

const JunctionPathSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$/)
  .min(1)
  .max(255)
  .openapi('JunctionPath')

const SecurityStyleSchema = z.enum(['UNIX', 'NTFS', 'MIXED']).openapi('SecurityStyle')

const VolumeCapacitySchema = z.int().min(0).max(2147483647).openapi('VolumeCapacity')

const StorageVirtualMachineIdSchema = z
  .string()
  .regex(/^(svm-[0-9a-f]{17,})$/)
  .length(21)
  .openapi('StorageVirtualMachineId')

const CoolingPeriodSchema = z.int().min(2).max(183).openapi('CoolingPeriod')

const TieringPolicyNameSchema = z
  .enum(['SNAPSHOT_ONLY', 'AUTO', 'ALL', 'NONE'])
  .openapi('TieringPolicyName')

const TieringPolicySchema = z
  .object({
    CoolingPeriod: CoolingPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. Used with the <code>AUTO</code> and <code>SNAPSHOT_ONLY</code> tiering policies. Enter a whole number between 2 and 183. Default values are 31 days for <code>AUTO</code> and 2 days for <code>SNAPSHOT_ONLY</code>.',
        }),
    ).exactOptional(),
    Name: TieringPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the tiering policy used to transition data. Default value is <code>SNAPSHOT_ONLY</code>.</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - moves cold snapshots to the capacity pool storage tier.</p> </li> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>",
    required: [],
  })
  .openapi('TieringPolicy')

const UUIDSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,36}$/)
  .max(36)
  .openapi('UUID')

const OntapVolumeTypeSchema = z.enum(['RW', 'DP', 'LS']).openapi('OntapVolumeType')

const SnapshotPolicySchema = z.string().min(1).max(255).openapi('SnapshotPolicy')

type OntapVolumeConfigurationType = {
  FlexCacheEndpointType?: z.infer<typeof FlexCacheEndpointTypeSchema> & { [key: string]: unknown }
  JunctionPath?: z.infer<typeof JunctionPathSchema> & { [key: string]: unknown }
  SecurityStyle?: z.infer<typeof SecurityStyleSchema> & { [key: string]: unknown }
  SizeInMegabytes?: z.infer<typeof VolumeCapacitySchema> & { [key: string]: unknown }
  StorageEfficiencyEnabled?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  StorageVirtualMachineId?: z.infer<typeof StorageVirtualMachineIdSchema> & {
    [key: string]: unknown
  }
  StorageVirtualMachineRoot?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  TieringPolicy?: z.infer<typeof TieringPolicySchema> & { [key: string]: unknown }
  UUID?: z.infer<typeof UUIDSchema> & { [key: string]: unknown }
  OntapVolumeType?: z.infer<typeof OntapVolumeTypeSchema> & { [key: string]: unknown }
  SnapshotPolicy?: z.infer<typeof SnapshotPolicySchema> & { [key: string]: unknown }
  CopyTagsToBackups?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
}

const OntapVolumeConfigurationSchema: z.ZodType<OntapVolumeConfigurationType> = z
  .object({
    FlexCacheEndpointType: FlexCacheEndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the FlexCache endpoint type of the volume. Valid values are the following:</p> <ul> <li> <p> <code>NONE</code> specifies that the volume doesn't have a FlexCache configuration. <code>NONE</code> is the default.</p> </li> <li> <p> <code>ORIGIN</code> specifies that the volume is the origin volume for a FlexCache volume.</p> </li> <li> <p> <code>CACHE</code> specifies that the volume is a FlexCache volume.</p> </li> </ul>",
        }),
    ).exactOptional(),
    JunctionPath: JunctionPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the directory that network-attached storage (NAS) clients use to mount the volume, along with the storage virtual machine (SVM) Domain Name System (DNS) name or IP address. You can create a <code>JunctionPath</code> directly below a parent volume junction or on a directory within a volume. A <code>JunctionPath</code> for a volume named <code>vol3</code> might be <code>/vol1/vol2/vol3</code>, or <code>/vol1/dir2/vol3</code>, or even <code>/dir1/dir2/vol3</code>.',
        }),
    ).exactOptional(),
    SecurityStyle: SecurityStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security style for the volume, which can be <code>UNIX</code>, <code>NTFS</code>, or <code>MIXED</code>.',
        }),
    ).exactOptional(),
    SizeInMegabytes: VolumeCapacitySchema.and(
      z.any().openapi({ description: 'The configured size of the volume, in megabytes (MBs).' }),
    ).exactOptional(),
    StorageEfficiencyEnabled: FlagSchema.and(
      z.any().openapi({ description: "The volume's storage efficiency setting." }),
    ).exactOptional(),
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z.any().openapi({ description: "The ID of the volume's storage virtual machine." }),
    ).exactOptional(),
    StorageVirtualMachineRoot: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A Boolean flag indicating whether this volume is the root volume for its storage virtual machine (SVM). Only one volume on an SVM can be the root volume. This value defaults to <code>false</code>. If this value is <code>true</code>, then this is the SVM root volume.</p> <p>This flag is useful when you're deleting an SVM, because you must first delete all non-root volumes. This flag, when set to <code>false</code>, helps you identify which volumes to delete before you can delete the SVM.</p>",
        }),
    ).exactOptional(),
    TieringPolicy: TieringPolicySchema.and(
      z.any().openapi({ description: "The volume's <code>TieringPolicy</code> setting." }),
    ).exactOptional(),
    UUID: UUIDSchema.and(
      z.any().openapi({ description: "The volume's universally unique identifier (UUID)." }),
    ).exactOptional(),
    OntapVolumeType: OntapVolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of volume. Valid values are the following:</p> <ul> <li> <p> <code>RW</code> specifies a read/write volume. <code>RW</code> is the default.</p> </li> <li> <p> <code>DP</code> specifies a data-protection volume. You can protect data by replicating it to data-protection mirror copies. If a disaster occurs, you can use these data-protection mirror copies to recover data.</p> </li> <li> <p> <code>LS</code> specifies a load-sharing mirror volume. A load-sharing mirror reduces the network traffic to a FlexVol volume by providing additional read-only access to clients.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SnapshotPolicy: SnapshotPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p> <ul> <li> <p> <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p> </li> <li> <p> <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except that it only retains one snapshot from the weekly schedule.</p> </li> <li> <p> <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.</p> </li> </ul> <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>',
        }),
    ).exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration of an Amazon FSx for NetApp ONTAP volume.',
    required: [],
  })
  .openapi('OntapVolumeConfiguration')

type VolumeTypeType = 'ONTAP' | 'OPENZFS'

const VolumeTypeSchema: z.ZodType<VolumeTypeType> = z
  .enum(['ONTAP', 'OPENZFS'])
  .openapi('VolumeType')

type LifecycleTransitionReasonType = { Message?: z.infer<typeof ErrorMessageSchema> }

const LifecycleTransitionReasonSchema: z.ZodType<LifecycleTransitionReasonType> = z
  .object({ Message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'Describes why a resource lifecycle state changed.', required: [] })
  .openapi('LifecycleTransitionReason')

const VolumePathSchema = z
  .string()
  .regex(/^[A-za-z0-9\_\.\:\-\/]*$/)
  .min(1)
  .max(2048)
  .openapi('VolumePath')

const IntegerNoMaxSchema = z.int().min(0).max(2147483647).openapi('IntegerNoMax')

const IntegerRecordSizeKiBSchema = z.int().min(4).max(1024).openapi('IntegerRecordSizeKiB')

const OpenZFSDataCompressionTypeSchema = z
  .enum(['NONE', 'ZSTD', 'LZ4'])
  .openapi('OpenZFSDataCompressionType')

const OpenZFSCopyStrategySchema = z.enum(['CLONE', 'FULL_COPY']).openapi('OpenZFSCopyStrategy')

const OpenZFSOriginSnapshotConfigurationSchema = z
  .object({
    SnapshotARN: ResourceARNSchema.exactOptional(),
    CopyStrategy: OpenZFSCopyStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The strategy used when copying data from the snapshot to the new volume. </p> <ul> <li> <p> <code>CLONE</code> - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying the data from a snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data. </p> </li> <li> <p> <code>FULL_COPY</code> - Copies all data from the snapshot to the new volume. </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The snapshot configuration to use when creating an OpenZFS volume from a snapshot.',
    required: [],
  })
  .openapi('OpenZFSOriginSnapshotConfiguration')

const ReadOnlySchema = z.boolean().openapi('ReadOnly')

const OpenZFSClientsSchema = z
  .string()
  .regex(/^[ -~]{1,128}$/)
  .min(1)
  .max(128)
  .openapi('OpenZFSClients')

const OpenZFSNfsExportOptionSchema = z
  .string()
  .regex(/^[ -~]{1,128}$/)
  .min(1)
  .max(128)
  .openapi('OpenZFSNfsExportOption')

const OpenZFSNfsExportOptionsSchema = z
  .array(OpenZFSNfsExportOptionSchema)
  .min(1)
  .max(20)
  .openapi('OpenZFSNfsExportOptions')

const OpenZFSClientConfigurationSchema = z
  .object({
    Clients: OpenZFSClientsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies who can mount the file system. You can provide a wildcard character (<code>*</code>), an IP address (<code>0.0.0.0</code>), or a CIDR address (<code>192.0.2.0/24</code>). By default, Amazon FSx uses the wildcard character when specifying the client. ',
        }),
    ),
    Options: OpenZFSNfsExportOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The options to use when mounting the file system. For a list of options that you can use with Network File System (NFS), see the <a href=\"https://linux.die.net/man/5/exports\">exports(5) - Linux man page</a>. When choosing your options, consider the following:</p> <ul> <li> <p> <code>crossmnt</code> is used by default. If you don't specify <code>crossmnt</code> when changing the client configuration, you won't be able to see or access snapshots in your file system's snapshot directory.</p> </li> <li> <p> <code>sync</code> is used by default. If you instead specify <code>async</code>, the system acknowledges writes before writing to disk. If the system crashes before the writes are finished, you lose the unwritten data. </p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['Clients', 'Options'],
    description:
      'Specifies who can mount an OpenZFS file system and the options available while mounting the file system.',
  })
  .openapi('OpenZFSClientConfiguration')

const OpenZFSClientConfigurationsSchema = z
  .array(OpenZFSClientConfigurationSchema)
  .max(25)
  .openapi('OpenZFSClientConfigurations')

const OpenZFSNfsExportSchema = z
  .object({
    ClientConfigurations: OpenZFSClientConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of configuration objects that contain the client and options for mounting the OpenZFS file system. ',
        }),
    ),
  })
  .openapi({
    required: ['ClientConfigurations'],
    description:
      'The Network File System (NFS) configurations for mounting an Amazon FSx for OpenZFS file system. ',
  })
  .openapi('OpenZFSNfsExport')

const OpenZFSNfsExportsSchema = z.array(OpenZFSNfsExportSchema).max(1).openapi('OpenZFSNfsExports')

const OpenZFSQuotaTypeSchema = z.enum(['USER', 'GROUP']).openapi('OpenZFSQuotaType')

const OpenZFSUserOrGroupQuotaSchema = z
  .object({
    Type: OpenZFSQuotaTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A value that specifies whether the quota applies to a user or group.',
        }),
    ),
    Id: IntegerNoMaxSchema.and(z.any().openapi({ description: 'The ID of the user or group.' })),
    StorageCapacityQuotaGiB: IntegerNoMaxSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of storage that the user or group can use in gibibytes (GiB).',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Id', 'StorageCapacityQuotaGiB'],
    description: 'The configuration for how much storage a user or group can use on the volume. ',
  })
  .openapi('OpenZFSUserOrGroupQuota')

const OpenZFSUserAndGroupQuotasSchema = z
  .array(OpenZFSUserOrGroupQuotaSchema)
  .max(500)
  .openapi('OpenZFSUserAndGroupQuotas')

type SnapshotIdType = string

const SnapshotIdSchema: z.ZodType<SnapshotIdType> = z
  .string()
  .regex(/^((fs)?volsnap-[0-9a-f]{8,})$/)
  .min(11)
  .max(28)
  .openapi('SnapshotId')

type OpenZFSVolumeConfigurationType = {
  ParentVolumeId?: z.infer<typeof VolumeIdSchema> & { [key: string]: unknown }
  VolumePath?: z.infer<typeof VolumePathSchema> & { [key: string]: unknown }
  StorageCapacityReservationGiB?: z.infer<typeof IntegerNoMaxSchema> & { [key: string]: unknown }
  StorageCapacityQuotaGiB?: z.infer<typeof IntegerNoMaxSchema> & { [key: string]: unknown }
  RecordSizeKiB?: z.infer<typeof IntegerRecordSizeKiBSchema> & { [key: string]: unknown }
  DataCompressionType?: z.infer<typeof OpenZFSDataCompressionTypeSchema> & {
    [key: string]: unknown
  }
  CopyTagsToSnapshots?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  OriginSnapshot?: z.infer<typeof OpenZFSOriginSnapshotConfigurationSchema> & {
    [key: string]: unknown
  }
  ReadOnly?: z.infer<typeof ReadOnlySchema> & { [key: string]: unknown }
  NfsExports?: z.infer<typeof OpenZFSNfsExportsSchema> & { [key: string]: unknown }
  UserAndGroupQuotas?: z.infer<typeof OpenZFSUserAndGroupQuotasSchema> & { [key: string]: unknown }
  RestoreToSnapshot?: z.infer<typeof SnapshotIdSchema> & { [key: string]: unknown }
  DeleteIntermediateSnaphots?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
  DeleteClonedVolumes?: z.infer<typeof FlagSchema> & { [key: string]: unknown }
}

const OpenZFSVolumeConfigurationSchema: z.ZodType<OpenZFSVolumeConfigurationType> = z
  .object({
    ParentVolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the parent volume.' }),
    ).exactOptional(),
    VolumePath: VolumePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the volume from the root volume. For example, <code>fsx/parentVolume/volume1</code>.',
        }),
    ).exactOptional(),
    StorageCapacityReservationGiB: IntegerNoMaxSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved.",
        }),
    ).exactOptional(),
    StorageCapacityQuotaGiB: IntegerNoMaxSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of storage in gibibtyes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume.',
        }),
    ).exactOptional(),
    RecordSizeKiB: IntegerRecordSizeKiBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. For guidance on when to set a custom record size, see the <i>Amazon FSx for OpenZFS User Guide</i>.',
        }),
    ).exactOptional(),
    DataCompressionType: OpenZFSDataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the method used to compress the data on the volume. The compression type is <code>NONE</code> by default.</p> <ul> <li> <p> <code>NONE</code> - Doesn't compress the data on the volume. <code>NONE</code> is the default.</p> </li> <li> <p> <code>ZSTD</code> - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.</p> </li> <li> <p> <code>LZ4</code> - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CopyTagsToSnapshots: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
    OriginSnapshot: OpenZFSOriginSnapshotConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object that specifies the snapshot to use as the origin of the data for the volume.',
        }),
    ).exactOptional(),
    ReadOnly: ReadOnlySchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the volume is read-only.' }),
    ).exactOptional(),
    NfsExports: OpenZFSNfsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object for mounting a Network File System (NFS) file system.',
        }),
    ).exactOptional(),
    UserAndGroupQuotas: OpenZFSUserAndGroupQuotasSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object specifying how much storage users or groups can use on the volume.',
        }),
    ).exactOptional(),
    RestoreToSnapshot: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the ID of the snapshot to which the volume was restored.',
        }),
    ).exactOptional(),
    DeleteIntermediateSnaphots: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether snapshots between the current state and the specified snapshot should be deleted when a volume is restored from snapshot.',
        }),
    ).exactOptional(),
    DeleteClonedVolumes: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether dependent clone volumes created from intermediate snapshots should be deleted when a volume is restored from snapshot.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration of an Amazon FSx for OpenZFS volume.', required: [] })
  .openapi('OpenZFSVolumeConfiguration')

type VolumeType = {
  CreationTime?: z.infer<typeof CreationTimeSchema>
  FileSystemId?: z.infer<typeof FileSystemIdSchema>
  Lifecycle?: z.infer<typeof VolumeLifecycleSchema> & { [key: string]: unknown }
  Name?: z.infer<typeof VolumeNameSchema> & { [key: string]: unknown }
  OntapConfiguration?: z.infer<typeof OntapVolumeConfigurationSchema>
  ResourceARN?: z.infer<typeof ResourceARNSchema>
  Tags?: z.infer<typeof TagsSchema>
  VolumeId?: z.infer<typeof VolumeIdSchema> & { [key: string]: unknown }
  VolumeType?: z.infer<typeof VolumeTypeSchema> & { [key: string]: unknown }
  LifecycleTransitionReason?: z.infer<typeof LifecycleTransitionReasonSchema> & {
    [key: string]: unknown
  }
  AdministrativeActions?: z.infer<typeof AdministrativeActionsSchema> & { [key: string]: unknown }
  OpenZFSConfiguration?: z.infer<typeof OpenZFSVolumeConfigurationSchema> & {
    [key: string]: unknown
  }
}

type SnapshotNameType = string

const SnapshotNameSchema: z.ZodType<SnapshotNameType> = z
  .string()
  .regex(/^[a-zA-Z0-9_:.-]{1,203}$/)
  .min(1)
  .max(203)
  .openapi('SnapshotName')

type SnapshotLifecycleType = 'PENDING' | 'CREATING' | 'DELETING' | 'AVAILABLE'

const SnapshotLifecycleSchema: z.ZodType<SnapshotLifecycleType> = z
  .enum(['PENDING', 'CREATING', 'DELETING', 'AVAILABLE'])
  .openapi('SnapshotLifecycle')

type SnapshotType = {
  ResourceARN?: z.infer<typeof ResourceARNSchema>
  SnapshotId?: z.infer<typeof SnapshotIdSchema> & { [key: string]: unknown }
  Name?: z.infer<typeof SnapshotNameSchema> & { [key: string]: unknown }
  VolumeId?: z.infer<typeof VolumeIdSchema> & { [key: string]: unknown }
  CreationTime?: z.infer<typeof CreationTimeSchema>
  Lifecycle?: z.infer<typeof SnapshotLifecycleSchema> & { [key: string]: unknown }
  LifecycleTransitionReason?: z.infer<typeof LifecycleTransitionReasonSchema>
  Tags?: z.infer<typeof TagsSchema>
  AdministrativeActions?: z.infer<typeof AdministrativeActionsSchema> & { [key: string]: unknown }
}

const AdministrativeActionTypeSchema: z.ZodType<AdministrativeActionTypeType> = z
  .enum([
    'FILE_SYSTEM_UPDATE',
    'STORAGE_OPTIMIZATION',
    'FILE_SYSTEM_ALIAS_ASSOCIATION',
    'FILE_SYSTEM_ALIAS_DISASSOCIATION',
    'VOLUME_UPDATE',
    'SNAPSHOT_UPDATE',
    'RELEASE_NFS_V3_LOCKS',
    'VOLUME_RESTORE',
  ])
  .openapi({
    description:
      '<p>Describes the type of administrative action, as follows:</p> <ul> <li> <p> <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated from the Amazon FSx console, API (<code>UpdateFileSystem</code>), or CLI (<code>update-file-system</code>).</p> </li> <li> <p> <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code> task to increase a file system\'s storage capacity has been completed successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p> <ul> <li> <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data to newer larger disks.</p> </li> <li> <p>For Lustre, storage optimization consists of rebalancing the data across the existing and newly added file servers.</p> </li> </ul> <p>You can track the storage-optimization progress using the <code>ProgressPercent</code> property. When <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the parent <code>FILE_SYSTEM_UPDATE</code> action status changes to <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html"> AssociateFileSystemAliases</a>.</p> </li> <li> <p> <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p> </li> <li> <p> <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateVolume</code>), or CLI (<code>update-volume</code>).</p> </li> <li> <p> <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume is returned to the state saved by the specified snapshot, initiated from an API (<code>RestoreVolumeFromSnapshot</code>) or CLI (<code>restore-volume-from-snapshot</code>).</p> </li> <li> <p> <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for OpenZFS volume initiated from the Amazon FSx console, API (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p> </li> <li> <p> <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p> </li> </ul>',
  })
  .openapi('AdministrativeActionType')

const ProgressPercentSchema: z.ZodType<ProgressPercentType> = z
  .int()
  .min(0)
  .max(100)
  .openapi({ description: 'The current percent of progress of an asynchronous task.' })
  .openapi('ProgressPercent')

const RequestTimeSchema: z.ZodType<RequestTimeType> = z.iso
  .datetime({ offset: true })
  .openapi('RequestTime')

const StatusSchema: z.ZodType<StatusType> = z
  .enum(['FAILED', 'IN_PROGRESS', 'PENDING', 'COMPLETED', 'UPDATED_OPTIMIZING'])
  .openapi('Status')

const FileSystemSchema: z.ZodType<FileSystemType> = z
  .lazy(() =>
    z
      .object({
        OwnerId: AWSAccountIdSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon Web Services account that created the file system. If the file system was created by a user in IAM Identity Center, the Amazon Web Services account to which the IAM user belongs is the owner.',
            }),
        ).exactOptional(),
        CreationTime: CreationTimeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.',
            }),
        ).exactOptional(),
        FileSystemId: FileSystemIdSchema.and(
          z
            .any()
            .openapi({
              description: 'The system-generated, unique 17-digit ID of the file system.',
            }),
        ).exactOptional(),
        FileSystemType: FileSystemTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The type of Amazon FSx file system, which can be <code>LUSTRE</code>, <code>WINDOWS</code>, <code>ONTAP</code>, or <code>OPENZFS</code>.',
            }),
        ).exactOptional(),
        Lifecycle: FileSystemLifecycleSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The lifecycle status of the file system. The following are the possible values and what they mean:</p> <ul> <li> <p> <code>AVAILABLE</code> - The file system is in a healthy state, and is reachable and available for use.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new file system.</p> </li> <li> <p> <code>DELETING</code> - Amazon FSx is deleting an existing file system.</p> </li> <li> <p> <code>FAILED</code> - An existing file system has experienced an unrecoverable failure. When creating a new file system, Amazon FSx was unable to create the file system.</p> </li> <li> <p> <code>MISCONFIGURED</code> - The file system is in a failed but recoverable state.</p> </li> <li> <p> <code>MISCONFIGURED_UNAVAILABLE</code> - (Amazon FSx for Windows File Server only) The file system is currently unavailable due to a change in your Active Directory configuration.</p> </li> <li> <p> <code>UPDATING</code> - The file system is undergoing a customer-initiated update.</p> </li> </ul>',
            }),
        ).exactOptional(),
        FailureDetails: FileSystemFailureDetailsSchema.exactOptional(),
        StorageCapacity: StorageCapacitySchema.and(
          z
            .any()
            .openapi({
              description: 'The storage capacity of the file system in gibibytes (GiB).',
            }),
        ).exactOptional(),
        StorageType: StorageTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The type of storage the file system is using. If set to <code>SSD</code>, the file system uses solid state drive storage. If set to <code>HDD</code>, the file system uses hard disk drive storage. ',
            }),
        ).exactOptional(),
        VpcId: VpcIdSchema.and(
          z
            .any()
            .openapi({
              description: 'The ID of the primary virtual private cloud (VPC) for the file system.',
            }),
        ).exactOptional(),
        SubnetIds: SubnetIdsSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>Specifies the IDs of the subnets that the file system is accessible from. For the Amazon FSx Windows and ONTAP <code>MULTI_AZ_1</code> file system deployment type, there are two subnet IDs, one for the preferred file server and one for the standby file server. The preferred file server subnet identified in the <code>PreferredSubnetID</code> property. All other file systems have only one subnet ID.</p> <p>For FSx for Lustre file systems, and Single-AZ Windows file systems, this is the ID of the subnet that contains the file system's endpoint. For <code>MULTI_AZ_1</code> Windows and ONTAP file systems, the file system endpoint is available in the <code>PreferredSubnetID</code>.</p>",
            }),
        ).exactOptional(),
        NetworkInterfaceIds: NetworkInterfaceIdsSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The IDs of the elastic network interfaces from which a specific file system is accessible. The elastic network interface is automatically created in the same virtual private cloud (VPC) that the Amazon FSx file system was created in. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide.</i> </p> <p>For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.</p>',
            }),
        ).exactOptional(),
        DNSName: DNSNameSchema.and(
          z
            .any()
            .openapi({ description: 'The Domain Name System (DNS) name for the file system.' }),
        ).exactOptional(),
        KmsKeyId: KmsKeyIdSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The ID of the Key Management Service (KMS) key used to encrypt Amazon FSx file system data. Used as follows with Amazon FSx file system types:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul>',
            }),
        ).exactOptional(),
        ResourceARN: ResourceARNSchema.and(
          z
            .any()
            .openapi({
              description: 'The Amazon Resource Name (ARN) of the file system resource.',
            }),
        ).exactOptional(),
        Tags: TagsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.',
            }),
        ).exactOptional(),
        WindowsConfiguration: WindowsFileSystemConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The configuration for this Amazon FSx for Windows File Server file system.',
            }),
        ).exactOptional(),
        LustreConfiguration: LustreFileSystemConfigurationSchema.exactOptional(),
        AdministrativeActions: AdministrativeActionsSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system that you have initiated using the <code>UpdateFileSystem</code> operation.',
            }),
        ).exactOptional(),
        OntapConfiguration: OntapFileSystemConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The configuration for this Amazon FSx for NetApp ONTAP file system.',
            }),
        ).exactOptional(),
        FileSystemTypeVersion: FileSystemTypeVersionSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Lustre version of the Amazon FSx for Lustre file system, either <code>2.10</code> or <code>2.12</code>.',
            }),
        ).exactOptional(),
        OpenZFSConfiguration: OpenZFSFileSystemConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'The configuration for this Amazon FSx for OpenZFS file system.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'A description of a specific Amazon FSx file system.',
        required: [],
      }),
  )
  .openapi('FileSystem')

const AdministrativeActionFailureDetailsSchema: z.ZodType<AdministrativeActionFailureDetailsType> =
  z
    .object({
      Message: ErrorMessageSchema.and(
        z
          .any()
          .openapi({
            description: 'Error message providing details about the failed administrative action.',
          }),
      ).exactOptional(),
    })
    .openapi({
      description: 'Provides information about a failed administrative action.',
      required: [],
    })
    .openapi('AdministrativeActionFailureDetails')

const VolumeSchema: z.ZodType<VolumeType> = z
  .lazy(() =>
    z
      .object({
        CreationTime: CreationTimeSchema.exactOptional(),
        FileSystemId: FileSystemIdSchema.exactOptional(),
        Lifecycle: VolumeLifecycleSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The lifecycle status of the volume.</p> <ul> <li> <p> <code>AVAILABLE</code> - The volume is fully available for use.</p> </li> <li> <p> <code>CREATED</code> - The volume has been created.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new volume.</p> </li> <li> <p> <code>DELETING</code> - Amazon FSx is deleting an existing volume.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx was unable to create the volume.</p> </li> <li> <p> <code>MISCONFIGURED</code> - The volume is in a failed but recoverable state.</p> </li> <li> <p> <code>PENDING</code> - Amazon FSx hasn't started creating the volume.</p> </li> </ul>",
            }),
        ).exactOptional(),
        Name: VolumeNameSchema.and(
          z.any().openapi({ description: 'The name of the volume.' }),
        ).exactOptional(),
        OntapConfiguration: OntapVolumeConfigurationSchema.exactOptional(),
        ResourceARN: ResourceARNSchema.exactOptional(),
        Tags: TagsSchema.exactOptional(),
        VolumeId: VolumeIdSchema.and(
          z.any().openapi({ description: 'The system-generated, unique ID of the volume.' }),
        ).exactOptional(),
        VolumeType: VolumeTypeSchema.and(
          z.any().openapi({ description: 'The type of the volume.' }),
        ).exactOptional(),
        LifecycleTransitionReason: LifecycleTransitionReasonSchema.and(
          z.any().openapi({ description: 'The reason why the volume lifecycle status changed.' }),
        ).exactOptional(),
        AdministrativeActions: AdministrativeActionsSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of administrative actions for the volume that are in process or waiting to be processed. Administrative actions describe changes to the volume that you have initiated using the <code>UpdateVolume</code> action.',
            }),
        ).exactOptional(),
        OpenZFSConfiguration: OpenZFSVolumeConfigurationSchema.and(
          z
            .any()
            .openapi({ description: 'The configuration of an Amazon FSx for OpenZFS volume.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.',
        required: [],
      }),
  )
  .openapi('Volume')

const SnapshotSchema: z.ZodType<SnapshotType> = z
  .lazy(() =>
    z
      .object({
        ResourceARN: ResourceARNSchema.exactOptional(),
        SnapshotId: SnapshotIdSchema.and(
          z.any().openapi({ description: 'The ID of the snapshot.' }),
        ).exactOptional(),
        Name: SnapshotNameSchema.and(
          z.any().openapi({ description: 'The name of the snapshot.' }),
        ).exactOptional(),
        VolumeId: VolumeIdSchema.and(
          z.any().openapi({ description: 'The ID of the volume that the snapshot is of.' }),
        ).exactOptional(),
        CreationTime: CreationTimeSchema.exactOptional(),
        Lifecycle: SnapshotLifecycleSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The lifecycle status of the snapshot.</p> <ul> <li> <p> <code>PENDING</code> - Amazon FSx hasn't started creating the snapshot.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the snapshot.</p> </li> <li> <p> <code>DELETING</code> - Amazon FSx is deleting the snapshot.</p> </li> <li> <p> <code>AVAILABLE</code> - The snapshot is fully available.</p> </li> </ul>",
            }),
        ).exactOptional(),
        LifecycleTransitionReason: LifecycleTransitionReasonSchema.exactOptional(),
        Tags: TagsSchema.exactOptional(),
        AdministrativeActions: AdministrativeActionsSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'A snapshot of an Amazon FSx for OpenZFS volume.', required: [] }),
  )
  .openapi('Snapshot')

type AdministrativeActionType = {
  AdministrativeActionType?: z.infer<typeof AdministrativeActionTypeSchema>
  ProgressPercent?: z.infer<typeof ProgressPercentSchema> & { [key: string]: unknown }
  RequestTime?: z.infer<typeof RequestTimeSchema> & { [key: string]: unknown }
  Status?: z.infer<typeof StatusSchema> & { [key: string]: unknown }
  TargetFileSystemValues?: z.infer<typeof FileSystemSchema> & { [key: string]: unknown }
  FailureDetails?: z.infer<typeof AdministrativeActionFailureDetailsSchema>
  TargetVolumeValues?: z.infer<typeof VolumeSchema>
  TargetSnapshotValues?: z.infer<typeof SnapshotSchema>
}

const AdministrativeActionSchema: z.ZodType<AdministrativeActionType> = z
  .lazy(() =>
    z
      .object({
        AdministrativeActionType: AdministrativeActionTypeSchema.exactOptional(),
        ProgressPercent: ProgressPercentSchema.and(
          z
            .any()
            .openapi({
              description:
                'The percentage-complete status of a <code>STORAGE_OPTIMIZATION</code> administrative action. Does not apply to any other administrative action type.',
            }),
        ).exactOptional(),
        RequestTime: RequestTimeSchema.and(
          z
            .any()
            .openapi({
              description: 'The time that the administrative action request was received.',
            }),
        ).exactOptional(),
        Status: StatusSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Describes the status of the administrative action, as follows:</p> <ul> <li> <p> <code>FAILED</code> - Amazon FSx failed to process the administrative action successfully.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Amazon FSx is processing the administrative action.</p> </li> <li> <p> <code>PENDING</code> - Amazon FSx is waiting to process the administrative action.</p> </li> <li> <p> <code>COMPLETED</code> - Amazon FSx has finished processing the administrative task.</p> </li> <li> <p> <code>UPDATED_OPTIMIZING</code> - For a storage-capacity increase update, Amazon FSx has updated the file system with the new storage capacity, and is now performing the storage-optimization process. </p> </li> </ul>',
            }),
        ).exactOptional(),
        TargetFileSystemValues: FileSystemSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the target value for the administration action, provided in the <code>UpdateFileSystem</code> operation. Returned for <code>FILE_SYSTEM_UPDATE</code> administrative actions. ',
            }),
        ).exactOptional(),
        FailureDetails: AdministrativeActionFailureDetailsSchema.exactOptional(),
        TargetVolumeValues: VolumeSchema.exactOptional(),
        TargetSnapshotValues: SnapshotSchema.exactOptional(),
      })
      .openapi({
        description:
          'Describes a specific Amazon FSx administrative action for the current Windows, Lustre, or OpenZFS file system.',
        required: [],
      }),
  )
  .openapi('AdministrativeAction')

type AdministrativeActionsType = z.infer<typeof AdministrativeActionSchema>[]

const AssociateFileSystemAliasesResponseSchema = z
  .object({
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of the DNS aliases that Amazon FSx is associating with the file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>. ',
    required: [],
  })
  .openapi('AssociateFileSystemAliasesResponse')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[A-za-z0-9_.-]{0,63}$/)
  .min(1)
  .max(63)
  .openapi({
    description:
      '(Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.',
  })
  .openapi('ClientRequestToken')

const AlternateDNSNamesSchema = z.array(AlternateDNSNameSchema).max(50).openapi('AlternateDNSNames')

const AssociateFileSystemAliasesRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the file system with which you want to associate one or more DNS aliases.',
        }),
    ),
    Aliases: AlternateDNSNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of one or more DNS alias names to associate with the file system. The alias name has to comply with the following formatting requirements:</p> <ul> <li> <p>Formatted as a fully-qualified domain name (FQDN), <i> <code>hostname.domain</code> </i>, for example, <code>accounting.corp.example.com</code>.</p> </li> <li> <p>Can contain alphanumeric characters and the hyphen (-).</p> </li> <li> <p>Cannot start or end with a hyphen.</p> </li> <li> <p>Can start with a numeric.</p> </li> </ul> <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>',
        }),
    ),
  })
  .openapi({
    required: ['FileSystemId', 'Aliases'],
    title: 'AssociateFileSystemAliasesRequest',
    description:
      'The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.',
  })
  .openapi('AssociateFileSystemAliasesRequest')

const BadRequestSchema = z.any().openapi('BadRequest')

const FileSystemNotFoundSchema = z.any().openapi('FileSystemNotFound')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const DataRepositoryTaskLifecycleSchema = z
  .enum(['PENDING', 'EXECUTING', 'FAILED', 'SUCCEEDED', 'CANCELED', 'CANCELING'])
  .openapi('DataRepositoryTaskLifecycle')

const TaskIdSchema = z
  .string()
  .regex(/^(task-[0-9a-f]{17,})$/)
  .min(12)
  .max(128)
  .openapi('TaskId')

const CancelDataRepositoryTaskResponseSchema = z
  .object({
    Lifecycle: DataRepositoryTaskLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle status of the data repository task, as follows:</p> <ul> <li> <p> <code>PENDING</code> - Amazon FSx has not started the task.</p> </li> <li> <p> <code>EXECUTING</code> - Amazon FSx is processing the task.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx was not able to complete the task. For example, there may be files the task failed to process. The <a>DataRepositoryTaskFailureDetails</a> property provides more information about task failures.</p> </li> <li> <p> <code>SUCCEEDED</code> - FSx completed the task successfully.</p> </li> <li> <p> <code>CANCELED</code> - Amazon FSx canceled the task and it did not complete.</p> </li> <li> <p> <code>CANCELING</code> - FSx is in process of canceling the task.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TaskId: TaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the task being canceled.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelDataRepositoryTaskResponse')

const CancelDataRepositoryTaskRequestSchema = z
  .object({
    TaskId: TaskIdSchema.and(
      z.any().openapi({ description: 'Specifies the data repository task to cancel.' }),
    ),
  })
  .openapi({
    required: ['TaskId'],
    title: 'CancelDataRepositoryTaskRequest',
    description: 'Cancels a data repository task.',
  })
  .openapi('CancelDataRepositoryTaskRequest')

const UnsupportedOperationSchema = z.any().openapi('UnsupportedOperation')

const DataRepositoryTaskNotFoundSchema = z.any().openapi('DataRepositoryTaskNotFound')

const DataRepositoryTaskEndedSchema = z.any().openapi('DataRepositoryTaskEnded')

const BackupIdSchema = z
  .string()
  .regex(/^(backup-[0-9a-f]{8,})$/)
  .min(12)
  .max(128)
  .openapi({
    description: 'The ID of the source backup. Specifies the backup that you are copying.',
  })
  .openapi('BackupId')

const BackupLifecycleSchema = z
  .enum(['AVAILABLE', 'CREATING', 'TRANSFERRING', 'DELETED', 'FAILED', 'PENDING', 'COPYING'])
  .openapi({
    description:
      "<p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new user-initiated backup.</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is backing up the file system.</p> </li> <li> <p> <code>COPYING</code> - Amazon FSx is copying the backup.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p> </li> </ul>",
  })
  .openapi('BackupLifecycle')

const BackupFailureDetailsSchema = z
  .object({
    Message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message describing the backup-creation failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'If backup creation fails, this structure contains the details of that failure.',
    required: [],
  })
  .openapi('BackupFailureDetails')

const BackupTypeSchema = z
  .enum(['AUTOMATIC', 'USER_INITIATED', 'AWS_BACKUP'])
  .openapi({ description: 'The type of the backup.' })
  .openapi('BackupType')

const ActiveDirectoryBackupAttributesSchema = z
  .object({
    DomainName: ActiveDirectoryFullyQualifiedNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name of the self-managed Active Directory directory.',
        }),
    ).exactOptional(),
    ActiveDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services Managed Microsoft Active Directory instance to which the file system is joined.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
  })
  .openapi({
    description:
      'The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system.',
    required: [],
  })
  .openapi('ActiveDirectoryBackupAttributes')

const RegionSchema = z
  .string()
  .regex(/^[a-z0-9-]{1,20}$/)
  .min(1)
  .max(20)
  .openapi('Region')

const ResourceTypeSchema = z.enum(['FILE_SYSTEM', 'VOLUME']).openapi('ResourceType')

const BackupSchema = z
  .object({
    BackupId: BackupIdSchema.and(z.any().openapi({ description: 'The ID of the backup.' })),
    Lifecycle: BackupLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the backup.</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3.</p> </li> <li> <p> <code>COPYING</code> - Amazon FSx is copying the backup.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p> </li> </ul>",
        }),
    ),
    FailureDetails: BackupFailureDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details explaining any failures that occurred when creating a backup.',
        }),
    ).exactOptional(),
    Type: BackupTypeSchema.and(
      z.any().openapi({ description: 'The type of the file-system backup.' }),
    ),
    ProgressPercent: ProgressPercentSchema.exactOptional(),
    CreationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time when a particular backup was created.' }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the Key Management Service (KMS) key used to encrypt the backup of the Amazon FSx file system's data at rest. ",
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the backup resource.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with a particular file system.' }),
    ).exactOptional(),
    FileSystem: FileSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.',
        }),
    ),
    DirectoryInformation: ActiveDirectoryBackupAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the self-managed Microsoft Active Directory directory to which the Windows File Server instance is joined.',
        }),
    ).exactOptional(),
    OwnerId: AWSAccountIdSchema.exactOptional(),
    SourceBackupId: BackupIdSchema.exactOptional(),
    SourceBackupRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source Region of the backup. Specifies the Region from where this backup is copied.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: "Specifies the resource type that's backed up." }),
    ).exactOptional(),
    Volume: VolumeSchema.exactOptional(),
  })
  .openapi({
    required: ['BackupId', 'Lifecycle', 'Type', 'CreationTime', 'FileSystem'],
    description:
      'A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.',
  })
  .openapi('Backup')

const CopyBackupResponseSchema = z
  .object({ Backup: BackupSchema.exactOptional() })
  .openapi({
    example: {
      Backup: {
        BackupId: 'backup-0a3364eded1014b28',
        CreationTime: 1617954808.068,
        FileSystem: {
          FileSystemId: 'fs-0498eed5fe91001ec',
          FileSystemType: 'LUSTRE',
          LustreConfiguration: {
            AutomaticBackupRetentionDays: 0,
            DeploymentType: 'PERSISTENT_1',
            PerUnitStorageThroughput: 50,
            WeeklyMaintenanceStartTime: '1:05:00',
          },
          ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:file-system/fs-0f5179e395f597e66',
          StorageCapacity: 2400,
          StorageType: 'SSD',
        },
        KmsKeyId: 'arn:aws:fsx:us-east-1:012345678912:key/d1234e22-543a-12b7-a98f-e12c2b54001a',
        Lifecycle: 'COPYING',
        OwnerId: '123456789012',
        ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:backup/backup-0a3364eded1014b28',
        Tags: [{ Key: 'Name', Value: 'MyBackup' }],
        Type: 'USER_INITIATED',
      },
    },
    required: [],
  })
  .openapi('CopyBackupResponse')

const SourceBackupIdSchema = z
  .string()
  .regex(/^(backup-[0-9a-f]{8,})$/)
  .min(12)
  .max(128)
  .openapi('SourceBackupId')

const CopyBackupRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    SourceBackupId: SourceBackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the source backup. Specifies the ID of the backup that's being copied.",
        }),
    ),
    SourceRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination Regions must be in the same Amazon Web Services partition. If you don't specify a Region, <code>SourceRegion</code> defaults to the Region where the request is sent from (in-Region copy).",
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.exactOptional(),
    CopyTags: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A Boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to <code>false</code>.</p> <p>If you set <code>CopyTags</code> to <code>true</code> and the source backup has existing tags, you can use the <code>Tags</code> parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the <code>Tags</code> parameter take precedence.</p>",
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
  })
  .openapi({ required: ['SourceBackupId'], title: 'CopyBackupRequest' })
  .openapi('CopyBackupRequest')

const BackupNotFoundSchema = z.any().openapi('BackupNotFound')

const ServiceLimitExceededSchema = z.any().openapi('ServiceLimitExceeded')

const IncompatibleParameterErrorSchema = z.any().openapi('IncompatibleParameterError')

const InvalidSourceKmsKeySchema = z.any().openapi('InvalidSourceKmsKey')

const InvalidDestinationKmsKeySchema = z.any().openapi('InvalidDestinationKmsKey')

const InvalidRegionSchema = z.any().openapi('InvalidRegion')

const SourceBackupUnavailableSchema = z.any().openapi('SourceBackupUnavailable')

const IncompatibleRegionForMultiAZSchema = z.any().openapi('IncompatibleRegionForMultiAZ')

const CreateBackupResponseSchema = z
  .object({
    Backup: BackupSchema.and(
      z.any().openapi({ description: 'A description of the backup.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Backup: {
        BackupId: 'backup-03e3c82e0183b7b6b',
        CreationTime: '1481841524.0',
        FileSystem: {
          FileSystemId: 'fs-0498eed5fe91001ec',
          OwnerId: 12345678912,
          StorageCapacity: 300,
          WindowsConfiguration: {
            ActiveDirectoryId: 'd-1234abcd12',
            AutomaticBackupRetentionDays: 30,
            DailyAutomaticBackupStartTime: '05:00',
            WeeklyMaintenanceStartTime: '1:05:00',
          },
        },
        Lifecycle: 'CREATING',
        ProgressPercent: 0,
        ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b',
        Tags: [{ Key: 'Name', Value: 'MyBackup' }],
        Type: 'USER_INITIATED',
      },
    },
    description: 'The response object for the <code>CreateBackup</code> operation.',
    required: [],
  })
  .openapi('CreateBackupResponse')

const CreateBackupRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The ID of the file system to back up.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The tags to apply to the backup at backup creation. The key value of the <code>Name</code> tag appears in the console as the backup name. If you have set <code>CopyTagsToBackups</code> to <code>true</code>, and you specify one or more tags using the <code>CreateBackup</code> operation, no existing file system tags are copied from the file system to the backup.',
        }),
    ).exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: '(Optional) The ID of the FSx for ONTAP volume to back up.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateBackupRequest',
    description: 'The request object for the <code>CreateBackup</code> operation.',
    required: [],
  })
  .openapi('CreateBackupRequest')

const VolumeNotFoundSchema = z.any().openapi('VolumeNotFound')

const BackupInProgressSchema = z.any().openapi('BackupInProgress')

const DataRepositoryAssociationIdSchema = z
  .string()
  .regex(/^(dra-[0-9a-f]{8,})$/)
  .min(13)
  .max(23)
  .openapi('DataRepositoryAssociationId')

const NamespaceSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,4096}$/)
  .min(1)
  .max(4096)
  .openapi('Namespace')

const BatchImportMetaDataOnCreateSchema = z.boolean().openapi('BatchImportMetaDataOnCreate')

const EventTypeSchema = z.enum(['NEW', 'CHANGED', 'DELETED']).openapi('EventType')

const EventTypesSchema = z.array(EventTypeSchema).max(3).openapi('EventTypes')

const AutoImportPolicySchema = z
  .object({
    Events: EventTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>AutoImportPolicy</code> can have the following event values:</p> <ul> <li> <p> <code>NEW</code> - Amazon FSx automatically imports metadata of files added to the linked S3 bucket that do not currently exist in the FSx file system.</p> </li> <li> <p> <code>CHANGED</code> - Amazon FSx automatically updates file metadata and invalidates existing file content on the file system as files change in the data repository.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx automatically deletes files on the file system as corresponding files are deleted in the data repository.</p> </li> </ul> <p>You can define any combination of event types for your <code>AutoImportPolicy</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.</p> <p>The <code>AutoImportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p>",
    required: [],
  })
  .openapi('AutoImportPolicy')

const AutoExportPolicySchema = z
  .object({
    Events: EventTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>AutoExportPolicy</code> can have the following event values:</p> <ul> <li> <p> <code>NEW</code> - New files and directories are automatically exported to the data repository as they are added to the file system.</p> </li> <li> <p> <code>CHANGED</code> - Changes to files and directories on the file system are automatically exported to the data repository.</p> </li> <li> <p> <code>DELETED</code> - Files and directories are automatically deleted on the data repository when they are deleted on the file system.</p> </li> </ul> <p>You can define any combination of event types for your <code>AutoExportPolicy</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes a data repository association's automatic export policy. The <code>AutoExportPolicy</code> defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.</p> <p>The <code>AutoExportPolicy</code> is only supported on Amazon FSx for Lustre file systems with a data repository association.</p>",
    required: [],
  })
  .openapi('AutoExportPolicy')

const S3DataRepositoryConfigurationSchema = z
  .object({
    AutoImportPolicy: AutoImportPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.',
        }),
    ).exactOptional(),
    AutoExportPolicy: AutoExportPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association. The configuration consists of an <code>AutoImportPolicy</code> that defines which file events on the data repository are automatically imported to the file system and an <code>AutoExportPolicy</code> that defines which file events on the file system are automatically exported to the data repository. File events are when files or directories are added, changed, or deleted on the file system or the data repository.</p> <note> <p>Data repository associations on Amazon File Cache don't use <code>S3DataRepositoryConfiguration</code> because they don't support automatic import or automatic export.</p> </note>",
    required: [],
  })
  .openapi('S3DataRepositoryConfiguration')

const FileCacheIdSchema = z
  .string()
  .regex(/^(fc-[0-9a-f]{8,})$/)
  .min(11)
  .max(21)
  .openapi('FileCacheId')

const SubDirectoriesPathsSchema = z.array(NamespaceSchema).max(500).openapi('SubDirectoriesPaths')

const NfsVersionSchema = z.literal('NFS3').openapi('NfsVersion')

const RepositoryDnsIpsSchema = z.array(IpAddressSchema).max(10).openapi('RepositoryDnsIps')

const NFSDataRepositoryConfigurationSchema = z
  .object({
    Version: NfsVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the NFS (Network File System) protocol of the NFS data repository. Currently, the only supported value is <code>NFS3</code>, which indicates that the data repository must support the NFSv3 protocol.',
        }),
    ),
    DnsIps: RepositoryDnsIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.',
        }),
    ).exactOptional(),
    AutoExportPolicy: AutoExportPolicySchema.and(
      z.any().openapi({ description: 'This parameter is not supported for Amazon File Cache.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Version'],
    description:
      'The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.',
  })
  .openapi('NFSDataRepositoryConfiguration')

const DataRepositoryAssociationSchema = z
  .object({
    AssociationId: DataRepositoryAssociationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated, unique ID of the data repository association.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema.exactOptional(),
    Lifecycle: DataRepositoryLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the state of a data repository association. The lifecycle can have the following values:</p> <ul> <li> <p> <code>CREATING</code> - The data repository association between the file system or cache and the data repository is being created. The data repository is unavailable.</p> </li> <li> <p> <code>AVAILABLE</code> - The data repository association is available for use.</p> </li> <li> <p> <code>MISCONFIGURED</code> - The data repository association is misconfigured. Until the configuration is corrected, automatic import and automatic export will not work (only for Amazon FSx for Lustre).</p> </li> <li> <p> <code>UPDATING</code> - The data repository association is undergoing a customer initiated update that might affect its availability.</p> </li> <li> <p> <code>DELETING</code> - The data repository association is undergoing a customer initiated deletion.</p> </li> <li> <p> <code>FAILED</code> - The data repository association is in a terminal state that cannot be recovered.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FailureDetails: DataRepositoryFailureDetailsSchema.exactOptional(),
    FileSystemPath: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>) that will be mapped 1-1 with <code>DataRepositoryPath</code>. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path <code>/ns1/</code>, then you cannot link another data repository with file system path <code>/ns1/ns2</code>.</p> <p>This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.</p> <note> <p>If you specify only a forward slash (<code>/</code>) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.</p> </note>',
        }),
    ).exactOptional(),
    DataRepositoryPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to the data repository that will be linked to the cache or file system.</p> <ul> <li> <p>For Amazon File Cache, the path can be an NFS data repository that will be linked to the cache. The path can be in one of two formats:</p> <ul> <li> <p>If you are not using the <code>DataRepositorySubdirectories</code> parameter, the path is to an NFS Export directory (or one of its subdirectories) in the format <code>nsf://nfs-domain-name/exportpath</code>. You can therefore link a single NFS Export to a single data repository association.</p> </li> <li> <p>If you are using the <code>DataRepositorySubdirectories</code> parameter, the path is the domain name of the NFS file system in the format <code>nfs://filer-domain-name</code>, which indicates the root of the subdirectories specified with the <code>DataRepositorySubdirectories</code> parameter.</p> </li> </ul> </li> <li> <p>For Amazon File Cache, the path can be an S3 bucket or prefix in the format <code>s3://myBucket/myPrefix/</code>.</p> </li> <li> <p>For Amazon FSx for Lustre, the path can be an S3 bucket or prefix in the format <code>s3://myBucket/myPrefix/</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    BatchImportMetaDataOnCreate: BatchImportMetaDataOnCreateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to <code>true</code>.</p> <note> <p> <code>BatchImportMetaDataOnCreate</code> is not supported for data repositories linked to an Amazon File Cache resource.</p> </note>',
        }),
    ).exactOptional(),
    ImportedFileChunkSize: MegabytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system or cache.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p>',
        }),
    ).exactOptional(),
    S3: S3DataRepositoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for an Amazon S3 data repository linked to an Amazon FSx for Lustre file system with a data repository association.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
    CreationTime: CreationTimeSchema.exactOptional(),
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: 'The globally unique ID of the Amazon File Cache resource.' }),
    ).exactOptional(),
    FileCachePath: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path on the Amazon File Cache that points to a high-level directory (such as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>) that will be mapped 1-1 with <code>DataRepositoryPath</code>. The leading forward slash in the path is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path <code>/ns1/</code>, then you cannot link another data repository with cache path <code>/ns1/ns2</code>.</p> <p>This path specifies the directory in your cache where files will be exported from. This cache directory can be linked to only one data repository (S3 or NFS) and no other data repository can be linked to the directory.</p> <note> <p>The cache path can only be set to root (/) on an NFS DRA when <code>DataRepositorySubdirectories</code> is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache.</p> <p>The cache path cannot be set to root (/) for an S3 DRA.</p> </note>',
        }),
    ).exactOptional(),
    DataRepositorySubdirectories: SubDirectoriesPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Amazon File Cache, a list of NFS Exports that will be linked with an NFS data repository association. All the subdirectories must be on a single NFS file system. The Export paths are in the format <code>/exportpath1</code>. To use this parameter, you must configure <code>DataRepositoryPath</code> as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that <code>DataRepositorySubdirectories</code> is not supported for S3 data repositories.',
        }),
    ).exactOptional(),
    NFS: NFSDataRepositoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for an NFS data repository linked to an Amazon File Cache resource with a data repository association.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The configuration of a data repository association that links an Amazon FSx for Lustre file system to an Amazon S3 bucket or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system. The data repository association configuration object is returned in the response of the following operations:</p> <ul> <li> <p> <code>CreateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>UpdateDataRepositoryAssociation</code> </p> </li> <li> <p> <code>DescribeDataRepositoryAssociations</code> </p> </li> </ul> <p>Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p>',
    required: [],
  })
  .openapi('DataRepositoryAssociation')

const CreateDataRepositoryAssociationResponseSchema = z
  .object({
    Association: DataRepositoryAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response object returned after the data repository association is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDataRepositoryAssociationResponse')

const CreateDataRepositoryAssociationRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema,
    FileSystemPath: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path on the file system that points to a high-level directory (such as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>) that will be mapped 1-1 with <code>DataRepositoryPath</code>. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path <code>/ns1/</code>, then you cannot link another data repository with file system path <code>/ns1/ns2</code>.</p> <p>This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.</p> <note> <p>If you specify only a forward slash (<code>/</code>) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.</p> </note>',
        }),
    ).exactOptional(),
    DataRepositoryPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format <code>s3://myBucket/myPrefix/</code>. This path specifies where in the S3 data repository files will be imported from or exported to.',
        }),
    ),
    BatchImportMetaDataOnCreate: BatchImportMetaDataOnCreateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is <code>false</code>.',
        }),
    ).exactOptional(),
    ImportedFileChunkSize: MegabytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p>',
        }),
    ).exactOptional(),
    S3: S3DataRepositoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Tags: TagsSchema.exactOptional(),
  })
  .openapi({
    required: ['FileSystemId', 'DataRepositoryPath'],
    title: 'CreateDataRepositoryAssociationRequest',
  })
  .openapi('CreateDataRepositoryAssociationRequest')

const DataRepositoryTaskTypeSchema = z
  .enum([
    'EXPORT_TO_REPOSITORY',
    'IMPORT_METADATA_FROM_REPOSITORY',
    'RELEASE_DATA_FROM_FILESYSTEM',
    'AUTO_RELEASE_DATA',
  ])
  .openapi('DataRepositoryTaskType')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const DataRepositoryTaskPathSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{0,4096}$/)
  .min(0)
  .max(4096)
  .openapi('DataRepositoryTaskPath')

const DataRepositoryTaskPathsSchema = z
  .array(DataRepositoryTaskPathSchema)
  .max(100)
  .openapi('DataRepositoryTaskPaths')

const DataRepositoryTaskFailureDetailsSchema = z
  .object({ Message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.',
    required: [],
  })
  .openapi('DataRepositoryTaskFailureDetails')

const TotalCountSchema = z.int().openapi('TotalCount')

const SucceededCountSchema = z.int().openapi('SucceededCount')

const FailedCountSchema = z.int().openapi('FailedCount')

const LastUpdatedTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdatedTime')

const ReleasedCapacitySchema = z.int().openapi('ReleasedCapacity')

const DataRepositoryTaskStatusSchema = z
  .object({
    TotalCount: TotalCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of files that the task will process. While a task is executing, the sum of <code>SucceededCount</code> plus <code>FailedCount</code> may not equal <code>TotalCount</code>. When the task is complete, <code>TotalCount</code> equals the sum of <code>SucceededCount</code> plus <code>FailedCount</code>.',
        }),
    ).exactOptional(),
    SucceededCount: SucceededCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'A running total of the number of files that the task has successfully processed.',
        }),
    ).exactOptional(),
    FailedCount: FailedCountSchema.and(
      z
        .any()
        .openapi({
          description: 'A running total of the number of files that the task failed to process.',
        }),
    ).exactOptional(),
    LastUpdatedTime: LastUpdatedTimeSchema.and(
      z.any().openapi({ description: 'The time at which the task status was last updated.' }),
    ).exactOptional(),
    ReleasedCapacity: ReleasedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount of data, in GiB, released by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.',
    required: [],
  })
  .openapi('DataRepositoryTaskStatus')

const ReportFormatSchema = z.literal('REPORT_CSV_20191124').openapi('ReportFormat')

const ReportScopeSchema = z.literal('FAILED_FILES_ONLY').openapi('ReportScope')

const CompletionReportSchema = z
  .object({
    Enabled: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set <code>Enabled</code> to <code>True</code> to generate a <code>CompletionReport</code> when the task completes. If set to <code>true</code>, then you need to provide a report <code>Scope</code>, <code>Path</code>, and <code>Format</code>. Set <code>Enabled</code> to <code>False</code> if you do not want a <code>CompletionReport</code> generated when the task completes.',
        }),
    ),
    Path: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required if <code>Enabled</code> is set to <code>true</code>. Specifies the location of the report on the file system\'s linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location. The <code>Path</code> you provide must be located within the file system’s ExportPath. An example <code>Path</code> value is "s3://myBucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report: FilePath, FileStatus, and ErrorCode.',
        }),
    ).exactOptional(),
    Format: ReportFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required if <code>Enabled</code> is set to <code>true</code>. Specifies the format of the <code>CompletionReport</code>. <code>REPORT_CSV_20191124</code> is the only format currently supported. When <code>Format</code> is set to <code>REPORT_CSV_20191124</code>, the <code>CompletionReport</code> is provided in CSV format, and is delivered to <code>{path}/task-{id}/failures.csv</code>. ',
        }),
    ).exactOptional(),
    Scope: ReportScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required if <code>Enabled</code> is set to <code>true</code>. Specifies the scope of the <code>CompletionReport</code>; <code>FAILED_FILES_ONLY</code> is the only scope currently supported. When <code>Scope</code> is set to <code>FAILED_FILES_ONLY</code>, the <code>CompletionReport</code> only contains information about files that the data repository task failed to process.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      "Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.",
  })
  .openapi('CompletionReport')

const CapacityToReleaseSchema = z.int().min(1).max(2147483647).openapi('CapacityToRelease')

const DataRepositoryTaskSchema = z
  .object({
    TaskId: TaskIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated, unique 17-digit ID of the data repository task.',
        }),
    ),
    Lifecycle: DataRepositoryTaskLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle status of the data repository task, as follows:</p> <ul> <li> <p> <code>PENDING</code> - The task has not started.</p> </li> <li> <p> <code>EXECUTING</code> - The task is in process.</p> </li> <li> <p> <code>FAILED</code> - The task was not able to be completed. For example, there may be files the task failed to process. The <a>DataRepositoryTaskFailureDetails</a> property provides more information about task failures.</p> </li> <li> <p> <code>SUCCEEDED</code> - The task has completed successfully.</p> </li> <li> <p> <code>CANCELED</code> - The task was canceled and it did not complete.</p> </li> <li> <p> <code>CANCELING</code> - The task is in process of being canceled.</p> </li> </ul> <note> <p>You cannot delete an FSx for Lustre file system if there are data repository tasks for the file system in the <code>PENDING</code> or <code>EXECUTING</code> states. Please retry when the data repository task is finished (with a status of <code>CANCELED</code>, <code>SUCCEEDED</code>, or <code>FAILED</code>). You can use the DescribeDataRepositoryTask action to monitor the task status. Contact the FSx team if you need to delete your file system immediately.</p> </note>',
        }),
    ),
    Type: DataRepositoryTaskTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of data repository task.</p> <ul> <li> <p> <code>EXPORT_TO_REPOSITORY</code> tasks export from your Amazon FSx for Lustre file system to a linked data repository.</p> </li> <li> <p> <code>IMPORT_METADATA_FROM_REPOSITORY</code> tasks import metadata changes from a linked S3 bucket to your Amazon FSx for Lustre file system.</p> </li> <li> <p> <code>AUTO_RELEASE_DATA</code> tasks automatically release files from an Amazon File Cache resource.</p> </li> <li> <p> <code>RELEASE_DATA_FROM_FILESYSTEM</code> tasks are not supported.</p> </li> </ul>',
        }),
    ),
    CreationTime: CreationTimeSchema,
    StartTime: StartTimeSchema.and(
      z.any().openapi({ description: 'The time the system began processing the task.' }),
    ).exactOptional(),
    EndTime: EndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the system completed processing the task, populated after the task is complete.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
    Tags: TagsSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The globally unique ID of the file system.' }),
    ).exactOptional(),
    Paths: DataRepositoryTaskPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of paths that specify the data for the data repository task to process. For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository.</p> <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>',
        }),
    ).exactOptional(),
    FailureDetails: DataRepositoryTaskFailureDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Failure message describing why the task failed, it is populated only when <code>Lifecycle</code> is set to <code>FAILED</code>.',
        }),
    ).exactOptional(),
    Status: DataRepositoryTaskStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the status of the number of files that the task has processed successfully and failed to process.',
        }),
    ).exactOptional(),
    Report: CompletionReportSchema.exactOptional(),
    CapacityToRelease: CapacityToReleaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of data to release, in GiB, by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache.',
        }),
    ).exactOptional(),
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: 'The system-generated, unique ID of the cache.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TaskId', 'Lifecycle', 'Type', 'CreationTime'],
    description:
      'A description of the data repository task. You use data repository tasks to perform bulk transfer operations between an Amazon FSx for Lustre file system and a linked data repository. An Amazon File Cache resource uses a task to automatically release files from the cache.',
  })
  .openapi('DataRepositoryTask')

const CreateDataRepositoryTaskResponseSchema = z
  .object({
    DataRepositoryTask: DataRepositoryTaskSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of the data repository task that you just created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDataRepositoryTaskResponse')

const CreateDataRepositoryTaskRequestSchema = z
  .object({
    Type: DataRepositoryTaskTypeSchema.and(
      z.any().openapi({ description: 'Specifies the type of data repository task to create.' }),
    ),
    Paths: DataRepositoryTaskPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of paths for the data repository task to use when the task is processed. If a path that you provide isn't valid, the task fails.</p> <ul> <li> <p>For export tasks, the list contains paths on the Amazon FSx file system from which the files are exported to the Amazon S3 bucket. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is <code>/mnt/fsx</code> and <code>/mnt/fsx/path1</code> is a directory or file on the file system you want to export, then the path to provide is <code>path1</code>.</p> </li> <li> <p>For import tasks, the list contains paths in the Amazon S3 bucket from which POSIX metadata changes are imported to the Amazon FSx file system. The path can be an S3 bucket or prefix in the format <code>s3://myBucket/myPrefix</code> (where <code>myPrefix</code> is optional).</p> </li> </ul>",
        }),
    ).exactOptional(),
    FileSystemId: FileSystemIdSchema,
    Report: CompletionReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the <code>Scope</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/task-completion-report.html">Working with Task Completion Reports</a>.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Tags: TagsSchema.exactOptional(),
    CapacityToRelease: CapacityToReleaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of data to release, in GiB, by an Amazon File Cache <code>AUTO_RELEASE_DATA</code> task that automatically releases files from the cache.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type', 'FileSystemId', 'Report'],
    title: 'CreateDataRepositoryTaskRequest',
  })
  .openapi('CreateDataRepositoryTaskRequest')

const DataRepositoryTaskExecutingSchema = z.any().openapi('DataRepositoryTaskExecuting')

const FileCacheTypeSchema = z.literal('LUSTRE').openapi('FileCacheType')

const FileCacheLifecycleSchema = z
  .enum(['AVAILABLE', 'CREATING', 'DELETING', 'UPDATING', 'FAILED'])
  .openapi('FileCacheLifecycle')

const FileCacheFailureDetailsSchema = z
  .object({
    Message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message describing any failures that occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure providing details of any failures that occurred.',
    required: [],
  })
  .openapi('FileCacheFailureDetails')

const CopyTagsToDataRepositoryAssociationsSchema = z
  .boolean()
  .openapi('CopyTagsToDataRepositoryAssociations')

const FileCacheLustreDeploymentTypeSchema = z
  .literal('CACHE_1')
  .openapi('FileCacheLustreDeploymentType')

const MetadataStorageCapacitySchema = z
  .int()
  .min(0)
  .max(2147483647)
  .openapi('MetadataStorageCapacity')

const FileCacheLustreMetadataConfigurationSchema = z
  .object({
    StorageCapacity: MetadataStorageCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The storage capacity of the Lustre MDT (Metadata Target) storage volume in gibibytes (GiB). The only supported value is <code>2400</code> GiB.',
        }),
    ),
  })
  .openapi({
    required: ['StorageCapacity'],
    description:
      'The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT.',
  })
  .openapi('FileCacheLustreMetadataConfiguration')

const FileCacheLustreConfigurationSchema = z
  .object({
    PerUnitStorageThroughput: PerUnitStorageThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Per unit storage throughput represents the megabytes per second of read or write throughput per 1 tebibyte of storage provisioned. Cache throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). The only supported value is <code>1000</code>.',
        }),
    ).exactOptional(),
    DeploymentType: FileCacheLustreDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment type of the Amazon File Cache resource, which must be <code>CACHE_1</code>.',
        }),
    ).exactOptional(),
    MountName: LustreFileSystemMountNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "You use the <code>MountName</code> value when mounting the cache. If you pass a cache ID to the <code>DescribeFileCaches</code> operation, it returns the the <code>MountName</code> value as part of the cache's description.",
        }),
    ).exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    MetadataConfiguration: FileCacheLustreMetadataConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for a Lustre MDT (Metadata Target) storage volume.',
        }),
    ).exactOptional(),
    LogConfiguration: LustreLogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for Lustre logging used to write the enabled logging events for your Amazon File Cache resource to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for the Amazon File Cache resource.', required: [] })
  .openapi('FileCacheLustreConfiguration')

const DataRepositoryAssociationIdsSchema = z
  .array(DataRepositoryAssociationIdSchema)
  .max(50)
  .openapi('DataRepositoryAssociationIds')

const FileCacheCreatingSchema = z
  .object({
    OwnerId: AWSAccountIdSchema.exactOptional(),
    CreationTime: CreationTimeSchema.exactOptional(),
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: 'The system-generated, unique ID of the cache.' }),
    ).exactOptional(),
    FileCacheType: FileCacheTypeSchema.and(
      z.any().openapi({ description: 'The type of cache, which must be <code>LUSTRE</code>.' }),
    ).exactOptional(),
    FileCacheTypeVersion: FileSystemTypeVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lustre version of the cache, which must be <code>2.12</code>.',
        }),
    ).exactOptional(),
    Lifecycle: FileCacheLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle status of the cache. The following are the possible values and what they mean:</p> <ul> <li> <p> <code>AVAILABLE</code> - The cache is in a healthy state, and is reachable and available for use.</p> </li> <li> <p> <code>CREATING</code> - The new cache is being created.</p> </li> <li> <p> <code>DELETING</code> - An existing cache is being deleted.</p> </li> <li> <p> <code>UPDATING</code> - The cache is undergoing a customer-initiated update.</p> </li> <li> <p> <code>FAILED</code> - An existing cache has experienced an unrecoverable failure. When creating a new cache, the cache was unable to be created.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FailureDetails: FileCacheFailureDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'A structure providing details of any failures that occurred.' }),
    ).exactOptional(),
    StorageCapacity: StorageCapacitySchema.and(
      z.any().openapi({ description: 'The storage capacity of the cache in gibibytes (GiB).' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.exactOptional(),
    SubnetIds: SubnetIdsSchema.exactOptional(),
    NetworkInterfaceIds: NetworkInterfaceIdsSchema.exactOptional(),
    DNSName: DNSNameSchema.and(
      z.any().openapi({ description: 'The Domain Name System (DNS) name for the cache.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a <code>KmsKeyId</code> isn\'t specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
    Tags: TagsSchema.exactOptional(),
    CopyTagsToDataRepositoryAssociations: CopyTagsToDataRepositoryAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean flag indicating whether tags for the cache should be copied to data repository associations.',
        }),
    ).exactOptional(),
    LustreConfiguration: FileCacheLustreConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the Amazon File Cache resource.' }),
    ).exactOptional(),
    DataRepositoryAssociationIds: DataRepositoryAssociationIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs of data repository associations that are associated with this cache.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response object for the Amazon File Cache resource being created in the <code>CreateFileCache</code> operation.',
    required: [],
  })
  .openapi('FileCacheCreating')

const CreateFileCacheResponseSchema = z
  .object({
    FileCache: FileCacheCreatingSchema.and(
      z.any().openapi({ description: 'A description of the cache that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFileCacheResponse')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^(sg-[0-9a-f]{8,})$/)
  .min(11)
  .max(20)
  .openapi({
    description:
      'The ID of your Amazon EC2 security group. This ID is used to control network access to the endpoint that Amazon FSx creates on your behalf in each subnet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security groups for Linux instances</a> in the <i>Amazon EC2 User Guide</i>.',
  })
  .openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .max(50)
  .openapi({
    description:
      "A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.",
  })
  .openapi('SecurityGroupIds')

const CreateFileCacheLustreConfigurationSchema = z
  .object({
    PerUnitStorageThroughput: PerUnitStorageThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provisions the amount of read and write throughput for each 1 tebibyte (TiB) of cache storage capacity, in MB/s/TiB. The only supported value is <code>1000</code>.',
        }),
    ),
    DeploymentType: FileCacheLustreDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the cache deployment type, which must be <code>CACHE_1</code>.',
        }),
    ),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    MetadataConfiguration: FileCacheLustreMetadataConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for a Lustre MDT (Metadata Target) storage volume.',
        }),
    ),
  })
  .openapi({
    required: ['PerUnitStorageThroughput', 'DeploymentType', 'MetadataConfiguration'],
    description: 'The Amazon File Cache configuration for the cache that you are creating.',
  })
  .openapi('CreateFileCacheLustreConfiguration')

const FileCacheNFSConfigurationSchema = z
  .object({
    Version: NfsVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the NFS (Network File System) protocol of the NFS data repository. The only supported value is <code>NFS3</code>, which indicates that the data repository must support the NFSv3 protocol.',
        }),
    ),
    DnsIps: RepositoryDnsIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Version'],
    description:
      'The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource.',
  })
  .openapi('FileCacheNFSConfiguration')

const FileCacheDataRepositoryAssociationSchema = z
  .object({
    FileCachePath: NamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A path on the cache that points to a high-level directory (such as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>) that will be mapped 1-1 with <code>DataRepositoryPath</code>. The leading forward slash in the name is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path <code>/ns1/</code>, then you cannot link another data repository with cache path <code>/ns1/ns2</code>.</p> <p>This path specifies where in your cache files will be exported from. This cache directory can be linked to only one data repository, and no data repository other can be linked to the directory.</p> <note> <p>The cache path can only be set to root (/) on an NFS DRA when <code>DataRepositorySubdirectories</code> is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache.</p> <p>The cache path cannot be set to root (/) for an S3 DRA.</p> </note>',
        }),
    ),
    DataRepositoryPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path to the S3 or NFS data repository that links to the cache. You must provide one of the following paths:</p> <ul> <li> <p>The path can be an NFS data repository that links to the cache. The path can be in one of two formats:</p> <ul> <li> <p>If you are not using the <code>DataRepositorySubdirectories</code> parameter, the path is to an NFS Export directory (or one of its subdirectories) in the format <code>nsf://nfs-domain-name/exportpath</code>. You can therefore link a single NFS Export to a single data repository association.</p> </li> <li> <p>If you are using the <code>DataRepositorySubdirectories</code> parameter, the path is the domain name of the NFS file system in the format <code>nfs://filer-domain-name</code>, which indicates the root of the subdirectories specified with the <code>DataRepositorySubdirectories</code> parameter.</p> </li> </ul> </li> <li> <p>The path can be an S3 bucket or prefix in the format <code>s3://myBucket/myPrefix/</code>.</p> </li> </ul>',
        }),
    ),
    DataRepositorySubdirectories: SubDirectoriesPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of NFS Exports that will be linked with this data repository association. The Export paths are in the format <code>/exportpath1</code>. To use this parameter, you must configure <code>DataRepositoryPath</code> as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that <code>DataRepositorySubdirectories</code> is not supported for S3 data repositories.',
        }),
    ).exactOptional(),
    NFS: FileCacheNFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileCachePath', 'DataRepositoryPath'],
    description:
      '<p>The configuration for a data repository association (DRA) to be created during the Amazon File Cache resource creation. The DRA links the cache to either an Amazon S3 bucket or prefix, or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA does not support automatic import or automatic export.</p>',
  })
  .openapi('FileCacheDataRepositoryAssociation')

const CreateFileCacheDataRepositoryAssociationsSchema = z
  .array(FileCacheDataRepositoryAssociationSchema)
  .max(8)
  .openapi('CreateFileCacheDataRepositoryAssociations')

const CreateFileCacheRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileCache</code> operation without the risk of creating an extra cache. This approach can be useful when an initial call fails in a way that makes it unclear whether a cache was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a cache, the client receives success as long as the parameters are the same.</p>',
        }),
    ).exactOptional(),
    FileCacheType: FileCacheTypeSchema.and(
      z
        .any()
        .openapi({
          description: "The type of cache that you're creating, which must be <code>LUSTRE</code>.",
        }),
    ),
    FileCacheTypeVersion: FileSystemTypeVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the Lustre version for the cache that you're creating, which must be <code>2.12</code>.",
        }),
    ),
    StorageCapacity: StorageCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The storage capacity of the cache in gibibytes (GiB). Valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.',
        }),
    ),
    SubnetIds: SubnetIdsSchema,
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access. This list isn't returned in later requests to describe the cache.",
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
    CopyTagsToDataRepositoryAssociations: CopyTagsToDataRepositoryAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a <code>KmsKeyId</code> isn\'t specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.',
        }),
    ).exactOptional(),
    LustreConfiguration: CreateFileCacheLustreConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration for the Amazon File Cache resource being created.',
        }),
    ).exactOptional(),
    DataRepositoryAssociations: CreateFileCacheDataRepositoryAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p> <p>The DRA configurations must meet the following requirements:</p> <ul> <li> <p>All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time.</p> </li> <li> <p>An NFS DRA must link to an NFS file system that supports the NFSv3 protocol.</p> </li> </ul> <p>DRA automatic import and automatic export is not supported.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileCacheType', 'FileCacheTypeVersion', 'StorageCapacity', 'SubnetIds'],
    title: 'CreateFileCacheRequest',
  })
  .openapi('CreateFileCacheRequest')

const InvalidNetworkSettingsSchema = z.any().openapi('InvalidNetworkSettings')

const InvalidPerUnitStorageThroughputSchema = z.any().openapi('InvalidPerUnitStorageThroughput')

const MissingFileCacheConfigurationSchema = z.any().openapi('MissingFileCacheConfiguration')

const CreateFileSystemResponseSchema = z
  .object({
    FileSystem: FileSystemSchema.and(
      z.any().openapi({ description: 'The configuration of the file system that was created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FileSystem: {
        CreationTime: '1481841524.0',
        DNSName: 'fs-0123456789abcdef0.fsx.com',
        FileSystemId: 'fs-0123456789abcdef0',
        KmsKeyId: 'arn:aws:kms:us-east-1:012345678912:key/1111abcd-2222-3333-4444-55556666eeff',
        Lifecycle: 'CREATING',
        OwnerId: 12345678912,
        ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:file-system/fs-0123456789abcdef0',
        StorageCapacity: 3200,
        StorageType: 'HDD',
        SubnetIds: ['subnet-1234abcd'],
        Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
        VpcId: 'vpc-ab1234cd',
        WindowsConfiguration: {
          ActiveDirectoryId: 'd-1234abcd12',
          Aliases: [{ Lifecycle: 'CREATING', Name: 'accounting.corp.example.com' }],
          AutomaticBackupRetentionDays: 30,
          DailyAutomaticBackupStartTime: '05:00',
          ThroughputCapacity: 32,
          WeeklyMaintenanceStartTime: '1:05:00',
        },
      },
    },
    description: 'The response object returned after the file system is created.',
    required: [],
  })
  .openapi('CreateFileSystemResponse')

const DirectoryPasswordSchema = z
  .string()
  .regex(/^.{1,256}$/)
  .min(1)
  .max(256)
  .openapi('DirectoryPassword')

const SelfManagedActiveDirectoryConfigurationSchema = z
  .object({
    DomainName: ActiveDirectoryFullyQualifiedNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified domain name of the self-managed AD directory, such as <code>corp.example.com</code>.',
        }),
    ),
    OrganizationalUnitDistinguishedName: OrganizationalUnitDistinguishedNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Amazon FSx only accepts OU as the direct parent of the file system. An example is <code>OU=FSx,DC=yourdomain,DC=corp,DC=com</code>. To learn more, see <a href="https://tools.ietf.org/html/rfc2253">RFC 2253</a>. If none is provided, the FSx file system is created in the default location of your self-managed AD directory. </p> <important> <p>Only Organizational Unit (OU) objects can be the direct parent of the file system that you\'re creating.</p> </important>',
        }),
    ).exactOptional(),
    FileSystemAdministratorsGroup: FileSystemAdministratorsGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.",
        }),
    ).exactOptional(),
    UserName: DirectoryUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in <code>OrganizationalUnitDistinguishedName</code>, or in the default location of your AD domain.',
        }),
    ),
    Password: DirectoryPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.',
        }),
    ),
    DnsIps: DnsIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'UserName', 'Password', 'DnsIps'],
    description:
      'The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.',
  })
  .openapi('SelfManagedActiveDirectoryConfiguration')

const WindowsAuditLogCreateConfigurationSchema = z
  .object({
    FileAccessAuditLogLevel: WindowsAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets which attempt type is logged by Amazon FSx for file and folder accesses.</p> <ul> <li> <p> <code>SUCCESS_ONLY</code> - only successful attempts to access files or folders are logged.</p> </li> <li> <p> <code>FAILURE_ONLY</code> - only failed attempts to access files or folders are logged.</p> </li> <li> <p> <code>SUCCESS_AND_FAILURE</code> - both successful attempts and failed attempts to access files or folders are logged.</p> </li> <li> <p> <code>DISABLED</code> - access auditing of files and folders is turned off.</p> </li> </ul>',
        }),
    ),
    FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p> <ul> <li> <p> <code>SUCCESS_ONLY</code> - only successful attempts to access file shares are logged.</p> </li> <li> <p> <code>FAILURE_ONLY</code> - only failed attempts to access file shares are logged.</p> </li> <li> <p> <code>SUCCESS_AND_FAILURE</code> - both successful attempts and failed attempts to access file shares are logged.</p> </li> <li> <p> <code>DISABLED</code> - access auditing of file shares is turned off.</p> </li> </ul>',
        }),
    ),
    AuditLogDestination: GeneralARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that specifies the destination of the audit logs.</p> <p>The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN, with the following requirements:</p> <ul> <li> <p>The destination ARN that you provide (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p> </li> <li> <p>The name of the Amazon CloudWatch Logs log group must begin with the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p> </li> <li> <p>If you do not provide a destination in <code>AuditLogDestination</code>, Amazon FSx will create and use a log stream in the CloudWatch Logs <code>/aws/fsx/windows</code> log group.</p> </li> <li> <p>If <code>AuditLogDestination</code> is provided and the resource does not exist, the request will fail with a <code>BadRequest</code> error.</p> </li> <li> <p>If <code>FileAccessAuditLogLevel</code> and <code>FileShareAccessAuditLogLevel</code> are both set to <code>DISABLED</code>, you cannot specify a destination in <code>AuditLogDestination</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileAccessAuditLogLevel', 'FileShareAccessAuditLogLevel'],
    description:
      'The Windows file access auditing configuration used when creating or updating an Amazon FSx for Windows File Server file system.',
  })
  .openapi('WindowsAuditLogCreateConfiguration')

const CreateFileSystemWindowsConfigurationSchema = z
  .object({
    ActiveDirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID for an existing Amazon Web Services Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.",
        }),
    ).exactOptional(),
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryConfigurationSchema.exactOptional(),
    DeploymentType: WindowsDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the file system deployment type, valid values are the following:</p> <ul> <li> <p> <code>MULTI_AZ_1</code> - Deploys a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You can only deploy a Multi-AZ file system in Amazon Web Services Regions that have a minimum of three Availability Zones. Also supports HDD storage type</p> </li> <li> <p> <code>SINGLE_AZ_1</code> - (Default) Choose to deploy a file system that is configured for single AZ redundancy.</p> </li> <li> <p> <code>SINGLE_AZ_2</code> - The latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html"> Availability and Durability: Single-AZ and Multi-AZ File Systems</a>.</p>',
        }),
    ).exactOptional(),
    PreferredSubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet in which you want the preferred file server to be located. For in-Amazon Web Services applications, we recommend that you launch your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ data transfer costs and minimize latency. ',
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).',
        }),
    ),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred time to take daily automatic backups, formatted HH:MM in the UTC time zone.',
        }),
    ).exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain automatic backups. The default is to retain backups for 7 days. Setting this value to 0 disables the creation of automatic backups. The maximum retention period for backups is 90 days.',
        }),
    ).exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.",
        }),
    ).exactOptional(),
    Aliases: AlternateDNSNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of one or more DNS alias names that you want to associate with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>An alias name has to meet the following requirements:</p> <ul> <li> <p>Formatted as a fully-qualified domain name (FQDN), <code>hostname.domain</code>, for example, <code>accounting.example.com</code>.</p> </li> <li> <p>Can contain alphanumeric characters, the underscore (_), and the hyphen (-).</p> </li> <li> <p>Cannot start or end with a hyphen.</p> </li> <li> <p>Can start with a numeric.</p> </li> </ul> <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>',
        }),
    ).exactOptional(),
    AuditLogConfiguration: WindowsAuditLogCreateConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ThroughputCapacity'],
    description:
      'The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.',
  })
  .openapi('CreateFileSystemWindowsConfiguration')

const LustreLogCreateConfigurationSchema = z
  .object({
    Level: LustreAccessAuditLogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets which data repository events are logged by Amazon FSx.</p> <ul> <li> <p> <code>WARN_ONLY</code> - only warning events are logged.</p> </li> <li> <p> <code>ERROR_ONLY</code> - only error events are logged.</p> </li> <li> <p> <code>WARN_ERROR</code> - both warning events and error events are logged.</p> </li> <li> <p> <code>DISABLED</code> - logging of data repository events is turned off.</p> </li> </ul>',
        }),
    ),
    Destination: GeneralARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) that specifies the destination of the logs.</p> <p>The destination can be any Amazon CloudWatch Logs log group ARN, with the following requirements:</p> <ul> <li> <p>The destination ARN that you provide must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p> </li> <li> <p>The name of the Amazon CloudWatch Logs log group must begin with the <code>/aws/fsx</code> prefix.</p> </li> <li> <p>If you do not provide a destination, Amazon FSx will create and use a log stream in the CloudWatch Logs <code>/aws/fsx/lustre</code> log group (for Amazon FSx for Lustre) or <code>/aws/fsx/filecache</code> (for Amazon File Cache).</p> </li> <li> <p>If <code>Destination</code> is provided and the resource does not exist, the request will fail with a <code>BadRequest</code> error.</p> </li> <li> <p>If <code>Level</code> is set to <code>DISABLED</code>, you cannot specify a destination in <code>Destination</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Level'],
    description:
      "<p>The Lustre logging configuration used when creating or updating an Amazon FSx for Lustre file system. An Amazon File Cache is created with Lustre logging enabled by default, with a setting of <code>WARN_ERROR</code> for the logging events. which can't be changed.</p> <p>Lustre logging writes the enabled logging events for your file system or cache to Amazon CloudWatch Logs.</p>",
  })
  .openapi('LustreLogCreateConfiguration')

const CreateFileSystemLustreConfigurationSchema = z
  .object({
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.',
        }),
    ).exactOptional(),
    ImportPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is <code>s3://import-bucket/optional-prefix</code>. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.</p> <note> <p>This parameter is not supported for file systems with a data repository association.</p> </note>",
        }),
    ).exactOptional(),
    ExportPath: ArchivePathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an <code>ExportPath</code> value is not provided, Amazon FSx sets a default export path, <code>s3://import-bucket/FSxLustre[creation-timestamp]</code>. The timestamp is in UTC format, for example <code>s3://import-bucket/FSxLustre20181105T222312Z</code>.</p> <p>The Amazon S3 export bucket must be the same as the import bucket specified by <code>ImportPath</code>. If you specify only a bucket name, such as <code>s3://import-bucket</code>, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as <code>s3://import-bucket/[custom-optional-prefix]</code>, Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.</p> <note> <p>This parameter is not supported for file systems with a data repository association.</p> </note>',
        }),
    ).exactOptional(),
    ImportedFileChunkSize: MegabytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p> <note> <p>This parameter is not supported for file systems with a data repository association.</p> </note>',
        }),
    ).exactOptional(),
    DeploymentType: LustreDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) Choose <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment types when you need temporary storage and shorter-term processing of data. The <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst throughput capacity than <code>SCRATCH_1</code>.</p> <p>Choose <code>PERSISTENT_1</code> for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. <code>PERSISTENT_1</code> supports encryption of data in transit, and is available in all Amazon Web Services Regions in which FSx for Lustre is available.</p> <p>Choose <code>PERSISTENT_2</code> for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. <code>PERSISTENT_2</code> supports SSD storage, and offers higher <code>PerUnitStorageThroughput</code> (up to 1000 MB/s/TiB). <code>PERSISTENT_2</code> is available in a limited number of Amazon Web Services Regions. For more information, and an up-to-date list of Amazon Web Services Regions in which <code>PERSISTENT_2</code> is available, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types">File system deployment options for FSx for Lustre</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p> <note> <p>If you choose <code>PERSISTENT_2</code>, and you set <code>FileSystemTypeVersion</code> to <code>2.10</code>, the <code>CreateFileSystem</code> operation fails.</p> </note> <p>Encryption of data in transit is automatically turned on when you access <code>SCRATCH_2</code>, <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> file systems from Amazon EC2 instances that support automatic encryption in the Amazon Web Services Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html">Encrypting data in transit</a> in the <i>Amazon FSx for Lustre User Guide</i>. </p> <p>(Default = <code>SCRATCH_1</code>)</p>',
        }),
    ).exactOptional(),
    AutoImportPolicy: AutoImportPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this parameter to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.</p> </li> <li> <p> <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system. </p> </li> <li> <p> <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.</p> </li> <li> <p> <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/older-deployment-types.html#legacy-auto-import-from-s3"> Automatically import updates from your S3 bucket</a>.</p> <note> <p>This parameter is not supported for file systems with a data repository association.</p> </note>',
        }),
    ).exactOptional(),
    PerUnitStorageThroughput: PerUnitStorageThroughputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Required with <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the <code>PerUnitStorageThroughput</code> (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of <code>PerUnitStorageThroughput</code> yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision. </p> <p>Valid values:</p> <ul> <li> <p>For <code>PERSISTENT_1</code> SSD storage: 50, 100, 200 MB/s/TiB.</p> </li> <li> <p>For <code>PERSISTENT_1</code> HDD storage: 12, 40 MB/s/TiB.</p> </li> <li> <p>For <code>PERSISTENT_2</code> SSD storage: 125, 250, 500, 1000 MB/s/TiB.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) Not available for use with file systems that are linked to a data repository. A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. If <code>CopyTagsToBackups</code> is set to true, all file system tags are copied to all automatic and user-initiated backups when the user doesn\'t specify any backup-specific tags. If <code>CopyTagsToBackups</code> is set to true and you specify one or more backup tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.</p> <p>(Default = <code>false</code>)</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html"> Working with backups</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p>',
        }),
    ).exactOptional(),
    DriveCacheType: DriveCacheTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with HDD storage devices. This parameter is required when storage type is HDD. Set this property to <code>READ</code> to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system.</p> <p>This parameter is required when <code>StorageType</code> is set to <code>HDD</code>.</p>',
        }),
    ).exactOptional(),
    DataCompressionType: DataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the data compression configuration for the file system. <code>DataCompressionType</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - (Default) Data compression is turned off when the file system is created.</p> </li> <li> <p> <code>LZ4</code> - Data compression is turned on with the LZ4 algorithm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p>',
        }),
    ).exactOptional(),
    LogConfiguration: LustreLogCreateConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre logging configuration used when creating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    RootSquashConfiguration: LustreRootSquashConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre root squash configuration used when creating an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with a data repository association created with .</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>',
    required: [],
  })
  .openapi('CreateFileSystemLustreConfiguration')

const AdminPasswordSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{8,50}$/)
  .min(8)
  .max(50)
  .openapi('AdminPassword')

const CreateFileSystemOntapConfigurationSchema = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    DeploymentType: OntapDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the FSx for ONTAP file system deployment type to use in creating the file system. </p> <ul> <li> <p> <code>MULTI_AZ_1</code> - (Default) A high availability file system configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. </p> </li> <li> <p> <code>SINGLE_AZ_1</code> - A file system configured for Single-AZ redundancy.</p> </li> </ul> <p>For information about the use cases for Multi-AZ and Single-AZ deployments, refer to <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html">Choosing a file system deployment type</a>. </p>',
        }),
    ),
    EndpointIpAddressRange: IpAddressRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.",
        }),
    ).exactOptional(),
    FsxAdminPassword: AdminPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ONTAP administrative password for the <code>fsxadmin</code> user with which you administer your file system using the NetApp ONTAP CLI and REST API.',
        }),
    ).exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The SSD IOPS configuration for the FSx for ONTAP file system.' }),
    ).exactOptional(),
    PreferredSubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet in which you want the preferred file server to be located.',
        }),
    ).exactOptional(),
    RouteTableIds: RouteTableIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Multi-AZ only) Specifies the virtual private cloud (VPC) route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.",
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the throughput capacity for the file system that you're creating. Valid values are 128, 256, 512, 1024, 2048, and 4096 MBps.",
        }),
    ),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
  })
  .openapi({
    required: ['DeploymentType', 'ThroughputCapacity'],
    description:
      'The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.',
  })
  .openapi('CreateFileSystemOntapConfiguration')

const OpenZFSCreateRootVolumeConfigurationSchema = z
  .object({
    RecordSizeKiB: IntegerRecordSizeKiBSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on setting a custom record size, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs"> Tips for maximizing performance</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.',
        }),
    ).exactOptional(),
    DataCompressionType: OpenZFSDataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the method used to compress the data on the volume. The compression type is <code>NONE</code> by default.</p> <ul> <li> <p> <code>NONE</code> - Doesn't compress the data on the volume. <code>NONE</code> is the default.</p> </li> <li> <p> <code>ZSTD</code> - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.</p> </li> <li> <p> <code>LZ4</code> - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.</p> </li> </ul>",
        }),
    ).exactOptional(),
    NfsExports: OpenZFSNfsExportsSchema.and(
      z.any().openapi({ description: 'The configuration object for mounting a file system.' }),
    ).exactOptional(),
    UserAndGroupQuotas: OpenZFSUserAndGroupQuotasSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object specifying how much storage users or groups can use on the volume.',
        }),
    ).exactOptional(),
    CopyTagsToSnapshots: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the volume should be copied to snapshots of the volume. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. ",
        }),
    ).exactOptional(),
    ReadOnly: ReadOnlySchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the volume is read-only. Setting this value to <code>true</code> can be useful after you have completed changes to a volume and no longer want changes to occur. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration of an Amazon FSx for OpenZFS root volume.',
    required: [],
  })
  .openapi('OpenZFSCreateRootVolumeConfiguration')

const CreateFileSystemOpenZFSConfigurationSchema = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is <code>true</code>, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.",
        }),
    ).exactOptional(),
    CopyTagsToVolumes: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the file system should be copied to volumes. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the file system are copied to volumes where the user doesn't specify tags. If this value is <code>true</code>, and you specify one or more tags, only the specified tags are copied to volumes. If you specify one or more tags when creating the volume, no tags are copied from the file system, regardless of this value.",
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    DeploymentType: OpenZFSDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the file system deployment type. Single AZ deployment types are configured for redundancy within a single Availability Zone in an Amazon Web Services Region . Valid values are the following:</p> <ul> <li> <p> <code>SINGLE_AZ_1</code>- (Default) Creates file systems with throughput capacities of 64 - 4,096 MB/s. <code>Single_AZ_1</code> is available in all Amazon Web Services Regions where Amazon FSx for OpenZFS is available, except US West (Oregon).</p> </li> <li> <p> <code>SINGLE_AZ_2</code>- Creates file systems with throughput capacities of 160 - 10,240 MB/s using an NVMe L2ARC cache. <code>Single_AZ_2</code> is available only in the US East (N. Virginia), US East (Ohio), US West (Oregon), and Europe (Ireland) Amazon Web Services Regions.</p> </li> </ul> <p>For more information, see: <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/availability-durability.html#available-aws-regions">Deployment type availability</a> and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#zfs-fs-performance">File system performance</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>',
        }),
    ),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MB/s). Valid values depend on the DeploymentType you choose, as follows:</p> <ul> <li> <p>For <code>SINGLE_AZ_1</code>, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s.</p> </li> <li> <p>For <code>SINGLE_AZ_2</code>, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MB/s.</p> </li> </ul> <p>You pay for additional throughput capacity that you provision.</p>',
        }),
    ),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.exactOptional(),
    RootVolumeConfiguration: OpenZFSCreateRootVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system. All volumes are children of the root volume. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeploymentType', 'ThroughputCapacity'],
    description:
      'The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.',
  })
  .openapi('CreateFileSystemOpenZFSConfiguration')

const CreateFileSystemRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.',
        }),
    ).exactOptional(),
    FileSystemType: FileSystemTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of Amazon FSx file system to create. Valid values are <code>WINDOWS</code>, <code>LUSTRE</code>, <code>ONTAP</code>, and <code>OPENZFS</code>.',
        }),
    ),
    StorageCapacity: StorageCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the storage capacity of the file system that you're creating, in gibibytes (GiB).</p> <p> <b>FSx for Lustre file systems</b> - The amount of storage capacity that you can configure depends on the value that you set for <code>StorageType</code> and the Lustre <code>DeploymentType</code>, as follows:</p> <ul> <li> <p>For <code>SCRATCH_2</code>, <code>PERSISTENT_2</code> and <code>PERSISTENT_1</code> deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.</p> </li> <li> <p>For <code>PERSISTENT_1</code> HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.</p> </li> <li> <p>For <code>SCRATCH_1</code> deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.</p> </li> </ul> <p> <b>FSx for ONTAP file systems</b> - The amount of storage capacity that you can configure is from 1024 GiB up to 196,608 GiB (192 TiB).</p> <p> <b>FSx for OpenZFS file systems</b> - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB).</p> <p> <b>FSx for Windows File Server file systems</b> - The amount of storage capacity that you can configure depends on the value that you set for <code>StorageType</code> as follows:</p> <ul> <li> <p>For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).</p> </li> <li> <p>For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).</p> </li> </ul>",
        }),
    ),
    StorageType: StorageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the storage type for the file system that you\'re creating. Valid values are <code>SSD</code> and <code>HDD</code>.</p> <ul> <li> <p>Set to <code>SSD</code> to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types.</p> </li> <li> <p>Set to <code>HDD</code> to use hard disk drive storage. HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> Windows file system deployment types, and on <code>PERSISTENT_1</code> Lustre file system deployment types. </p> </li> </ul> <p>Default value is <code>SSD</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options"> Storage type options</a> in the <i>FSx for Windows File Server User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html#storage-options">Multiple storage options</a> in the <i>FSx for Lustre User Guide</i>. </p>',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP <code>MULTI_AZ_1</code> deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the <code>WindowsConfiguration &gt; PreferredSubnetID</code> or <code>OntapConfiguration &gt; PreferredSubnetID</code> properties. For more information about Multi-AZ file system configuration, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html"> Availability and durability: Single-AZ and Multi-AZ file systems</a> in the <i>Amazon FSx for Windows User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html"> Availability and durability</a> in the <i>Amazon FSx for ONTAP User Guide</i>.</p> <p>For Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet\'s Availability Zone.</p>',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.",
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The tags to apply to the file system that's being created. The key value of the <code>Name</code> tag appears in the console as the file system name.",
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.exactOptional(),
    WindowsConfiguration: CreateFileSystemWindowsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Microsoft Windows configuration for the file system that's being created. ",
        }),
    ).exactOptional(),
    LustreConfiguration: CreateFileSystemLustreConfigurationSchema.exactOptional(),
    OntapConfiguration: CreateFileSystemOntapConfigurationSchema.exactOptional(),
    FileSystemTypeVersion: FileSystemTypeVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Optional) For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are <code>2.10</code> and <code>2.12</code>:</p> <ul> <li> <p>2.10 is supported by the Scratch and Persistent_1 Lustre deployment types.</p> </li> <li> <p>2.12 is supported by all Lustre deployment types. <code>2.12</code> is required when setting FSx for Lustre <code>DeploymentType</code> to <code>PERSISTENT_2</code>.</p> </li> </ul> <p>Default value = <code>2.10</code>, except when <code>DeploymentType</code> is set to <code>PERSISTENT_2</code>, then the default is <code>2.12</code>.</p> <note> <p>If you set <code>FileSystemTypeVersion</code> to <code>2.10</code> for a <code>PERSISTENT_2</code> Lustre deployment type, the <code>CreateFileSystem</code> operation fails.</p> </note>",
        }),
    ).exactOptional(),
    OpenZFSConfiguration: CreateFileSystemOpenZFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: "The OpenZFS configuration for the file system that's being created.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemType', 'StorageCapacity', 'SubnetIds'],
    title: 'CreateFileSystemRequest',
    description: 'The request object used to create a new Amazon FSx file system.',
  })
  .openapi('CreateFileSystemRequest')

const ActiveDirectoryErrorSchema = z.any().openapi('ActiveDirectoryError')

const InvalidImportPathSchema = z.any().openapi('InvalidImportPath')

const InvalidExportPathSchema = z.any().openapi('InvalidExportPath')

const MissingFileSystemConfigurationSchema = z.any().openapi('MissingFileSystemConfiguration')

const CreateFileSystemFromBackupResponseSchema = z
  .object({
    FileSystem: FileSystemSchema.and(
      z.any().openapi({ description: 'A description of the file system.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FileSystem: {
        CreationTime: '1481841524.0',
        DNSName: 'fs-0498eed5fe91001ec.fsx.com',
        FileSystemId: 'fs-0498eed5fe91001ec',
        KmsKeyId: 'arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6',
        Lifecycle: 'CREATING',
        OwnerId: 12345678912,
        ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec',
        StorageCapacity: 300,
        SubnetIds: ['subnet-1234abcd'],
        Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
        VpcId: 'vpc-ab1234cd',
        WindowsConfiguration: {
          ActiveDirectoryId: 'd-1234abcd12',
          AutomaticBackupRetentionDays: 30,
          DailyAutomaticBackupStartTime: '05:00',
          ThroughputCapacity: 8,
          WeeklyMaintenanceStartTime: '1:05:00',
        },
      },
    },
    description: 'The response object for the <code>CreateFileSystemFromBackup</code> operation.',
    required: [],
  })
  .openapi('CreateFileSystemFromBackupResponse')

const CreateFileSystemFromBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema,
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows <code>MULTI_AZ_1</code> file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the <code>WindowsConfiguration &gt; PreferredSubnetID</code> property.</p> <p>Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> file system deployment types, Lustre file systems, and OpenZFS file systems provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.</p>",
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later <code>DescribeFileSystem</code> requests.",
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to be applied to the file system at file system creation. The key value of the <code>Name</code> tag appears in the console as the file system name.',
        }),
    ).exactOptional(),
    WindowsConfiguration: CreateFileSystemWindowsConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for this Microsoft Windows file system.' }),
    ).exactOptional(),
    LustreConfiguration: CreateFileSystemLustreConfigurationSchema.exactOptional(),
    StorageType: StorageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the storage type for the Windows or OpenZFS file system that you're creating from a backup. Valid values are <code>SSD</code> and <code>HDD</code>.</p> <ul> <li> <p>Set to <code>SSD</code> to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types.</p> </li> <li> <p>Set to <code>HDD</code> to use hard disk drive storage. HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> FSx for Windows File Server file system deployment types.</p> </li> </ul> <p> The default value is <code>SSD</code>. </p> <note> <p>HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB.</p> </note>",
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.exactOptional(),
    FileSystemTypeVersion: FileSystemTypeVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are <code>2.10</code> and <code>2.12</code>.</p> <p>You don't need to specify <code>FileSystemTypeVersion</code> because it will be applied using the backup's <code>FileSystemTypeVersion</code> setting. If you choose to specify <code>FileSystemTypeVersion</code> when creating from backup, the value must match the backup's <code>FileSystemTypeVersion</code> setting.</p>",
        }),
    ).exactOptional(),
    OpenZFSConfiguration: CreateFileSystemOpenZFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: "The OpenZFS configuration for the file system that's being created. ",
        }),
    ).exactOptional(),
    StorageCapacity: StorageCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the storage capacity of the OpenZFS file system that you're creating from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB (512 TiB). However, the value that you specify must be equal to or greater than the backup's storage capacity value. If you don't use the <code>StorageCapacity</code> parameter, the default is the backup's <code>StorageCapacity</code> value.</p> <p>If used to create a file system other than OpenZFS, you must provide a value that matches the backup's <code>StorageCapacity</code> value. If you provide any other value, Amazon FSx responds with a 400 Bad Request. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupId', 'SubnetIds'],
    title: 'CreateFileSystemFromBackupRequest',
    description: 'The request object for the <code>CreateFileSystemFromBackup</code> operation.',
  })
  .openapi('CreateFileSystemFromBackupRequest')

const CreateSnapshotResponseSchema = z
  .object({
    Snapshot: SnapshotSchema.and(
      z.any().openapi({ description: 'A description of the snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSnapshotResponse')

const CreateSnapshotRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Name: SnapshotNameSchema.and(z.any().openapi({ description: 'The name of the snapshot. ' })),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the volume that you are taking a snapshot of.' }),
    ),
    Tags: TagsSchema.exactOptional(),
  })
  .openapi({ required: ['Name', 'VolumeId'], title: 'CreateSnapshotRequest' })
  .openapi('CreateSnapshotRequest')

const NetBiosAliasSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$/)
  .min(1)
  .max(15)
  .openapi('NetBiosAlias')

const SvmActiveDirectoryConfigurationSchema = z
  .object({
    NetBiosName: NetBiosAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The NetBIOS name of the Active Directory computer object that is joined to your SVM.',
        }),
    ).exactOptional(),
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryAttributesSchema.exactOptional(),
  })
  .openapi({
    description:
      'Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.',
    required: [],
  })
  .openapi('SvmActiveDirectoryConfiguration')

const SvmEndpointSchema = z
  .object({
    DNSName: DNSNameSchema.exactOptional(),
    IpAddresses: OntapEndpointIpAddressesSchema.and(
      z.any().openapi({ description: "The SVM endpoint's IP addresses." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.',
    required: [],
  })
  .openapi('SvmEndpoint')

const SvmEndpointsSchema = z
  .object({
    Iscsi: SvmEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'An endpoint for connecting using the Internet Small Computer Systems Interface (iSCSI) protocol.',
        }),
    ).exactOptional(),
    Management: SvmEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager.',
        }),
    ).exactOptional(),
    Nfs: SvmEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'An endpoint for connecting using the Network File System (NFS) protocol.',
        }),
    ).exactOptional(),
    Smb: SvmEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'An endpoint for connecting using the Server Message Block (SMB) protocol.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.',
    required: [],
  })
  .openapi('SvmEndpoints')

const StorageVirtualMachineLifecycleSchema = z
  .enum(['CREATED', 'CREATING', 'DELETING', 'FAILED', 'MISCONFIGURED', 'PENDING'])
  .openapi('StorageVirtualMachineLifecycle')

const StorageVirtualMachineNameSchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$/)
  .min(1)
  .max(47)
  .openapi('StorageVirtualMachineName')

const StorageVirtualMachineSubtypeSchema = z
  .enum(['DEFAULT', 'DP_DESTINATION', 'SYNC_DESTINATION', 'SYNC_SOURCE'])
  .openapi('StorageVirtualMachineSubtype')

const StorageVirtualMachineRootVolumeSecurityStyleSchema = z
  .enum(['UNIX', 'NTFS', 'MIXED'])
  .openapi('StorageVirtualMachineRootVolumeSecurityStyle')

const StorageVirtualMachineSchema = z
  .object({
    ActiveDirectoryConfiguration: SvmActiveDirectoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.',
        }),
    ).exactOptional(),
    CreationTime: CreationTimeSchema.exactOptional(),
    Endpoints: SvmEndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.',
        }),
    ).exactOptional(),
    FileSystemId: FileSystemIdSchema.exactOptional(),
    Lifecycle: StorageVirtualMachineLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes the SVM's lifecycle status.</p> <ul> <li> <p> <code>CREATED</code> - The SVM is fully available for use.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new SVM.</p> </li> <li> <p> <code>DELETING</code> - Amazon FSx is deleting an existing SVM.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx was unable to create the SVM.</p> </li> <li> <p> <code>MISCONFIGURED</code> - The SVM is in a failed but recoverable state.</p> </li> <li> <p> <code>PENDING</code> - Amazon FSx has not started creating the SVM.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Name: StorageVirtualMachineNameSchema.and(
      z.any().openapi({ description: 'The name of the SVM, if provisioned.' }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z.any().openapi({ description: "The SVM's system generated unique ID." }),
    ).exactOptional(),
    Subtype: StorageVirtualMachineSubtypeSchema.and(
      z.any().openapi({ description: "Describes the SVM's subtype." }),
    ).exactOptional(),
    UUID: UUIDSchema.and(
      z.any().openapi({ description: "The SVM's UUID (universally unique identifier)." }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
    LifecycleTransitionReason: LifecycleTransitionReasonSchema.and(
      z.any().openapi({ description: 'Describes why the SVM lifecycle state changed.' }),
    ).exactOptional(),
    RootVolumeSecurityStyle: StorageVirtualMachineRootVolumeSecurityStyleSchema.and(
      z.any().openapi({ description: 'The security style of the root volume of the SVM.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.',
    required: [],
  })
  .openapi('StorageVirtualMachine')

const CreateStorageVirtualMachineResponseSchema = z
  .object({
    StorageVirtualMachine: StorageVirtualMachineSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>CreateStorageVirtualMachine</code> operation; describes the SVM just created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStorageVirtualMachineResponse')

const CreateSvmActiveDirectoryConfigurationSchema = z
  .object({
    NetBiosName: NetBiosAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The NetBIOS name of the Active Directory computer object that will be created for your SVM.',
        }),
    ),
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryConfigurationSchema.exactOptional(),
  })
  .openapi({
    required: ['NetBiosName'],
    description:
      'The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.',
  })
  .openapi('CreateSvmActiveDirectoryConfiguration')

const CreateStorageVirtualMachineRequestSchema = z
  .object({
    ActiveDirectoryConfiguration: CreateSvmActiveDirectoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS client accessing the file system.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema,
    Name: StorageVirtualMachineNameSchema.and(
      z.any().openapi({ description: 'The name of the SVM.' }),
    ),
    SvmAdminPassword: AdminPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            "The password to use when managing the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's <code>fsxadmin</code> user to manage the SVM.",
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
    RootVolumeSecurityStyle: StorageVirtualMachineRootVolumeSecurityStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The security style of the root volume of the SVM. Specify one of the following values:</p> <ul> <li> <p> <code>UNIX</code> if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.</p> </li> <li> <p> <code>NTFS</code> if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.</p> </li> <li> <p> <code>MIXED</code> if the file system is managed by both UNIX and Windows administrators and users consist of both NFS and SMB clients.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FileSystemId', 'Name'], title: 'CreateStorageVirtualMachineRequest' })
  .openapi('CreateStorageVirtualMachineRequest')

const CreateVolumeResponseSchema = z
  .object({
    Volume: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>CreateVolume</code> API operation, describing the volume just created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVolumeResponse')

const InputOntapVolumeTypeSchema = z.enum(['RW', 'DP']).openapi('InputOntapVolumeType')

const CreateOntapVolumeConfigurationSchema = z
  .object({
    JunctionPath: JunctionPathSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.",
        }),
    ).exactOptional(),
    SecurityStyle: SecurityStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the security style for the volume. If a volume\'s security style is not specified, it is automatically set to the root volume\'s security style. The security style determines the type of permissions that FSx for ONTAP uses to control data access. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style">Volume security style</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>. Specify one of the following values:</p> <ul> <li> <p> <code>UNIX</code> if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account. </p> </li> <li> <p> <code>NTFS</code> if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.</p> </li> <li> <p> <code>MIXED</code> if the file system is managed by both UNIX and Windows administrators and users consist of both NFS and SMB clients.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SizeInMegabytes: VolumeCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the size of the volume, in megabytes (MB), that you are creating. Provide any whole number in the range of 20–104857600 to specify the size of the volume.',
        }),
    ),
    StorageEfficiencyEnabled: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. This parameter is required.',
        }),
    ).exactOptional(),
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z.any().openapi({ description: 'Specifies the ONTAP SVM in which to create the volume.' }),
    ),
    TieringPolicy: TieringPolicySchema.exactOptional(),
    OntapVolumeType: InputOntapVolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of volume you are creating. Valid values are the following:</p> <ul> <li> <p> <code>RW</code> specifies a read/write volume. <code>RW</code> is the default.</p> </li> <li> <p> <code>DP</code> specifies a data-protection volume. A <code>DP</code> volume is read-only and can be used as the destination of a NetApp SnapMirror relationship.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-types">Volume types</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>',
        }),
    ).exactOptional(),
    SnapshotPolicy: SnapshotPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p> <ul> <li> <p> <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p> </li> <li> <p> <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except that it only retains one snapshot from the weekly schedule.</p> </li> <li> <p> <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.</p> </li> </ul> <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>',
        }),
    ).exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SizeInMegabytes', 'StorageVirtualMachineId'],
    description: 'Specifies the configuration of the ONTAP volume that you are creating.',
  })
  .openapi('CreateOntapVolumeConfiguration')

const IntegerNoMaxFromNegativeOneSchema = z
  .int()
  .min(-1)
  .max(2147483647)
  .openapi('IntegerNoMaxFromNegativeOne')

const CreateOpenZFSOriginSnapshotConfigurationSchema = z
  .object({
    SnapshotARN: ResourceARNSchema,
    CopyStrategy: OpenZFSCopyStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The strategy used when copying data from the snapshot to the new volume. </p> <ul> <li> <p> <code>CLONE</code> - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying data from the snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data. </p> </li> <li> <p> <code>FULL_COPY</code> - Copies all data from the snapshot to the new volume. </p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['SnapshotARN', 'CopyStrategy'],
    description:
      'The snapshot configuration to use when creating an OpenZFS volume from a snapshot. ',
  })
  .openapi('CreateOpenZFSOriginSnapshotConfiguration')

const CreateOpenZFSVolumeConfigurationSchema = z
  .object({
    ParentVolumeId: VolumeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the volume to use as the parent volume of the volume that you are creating.',
        }),
    ),
    StorageCapacityReservationGiB: IntegerNoMaxFromNegativeOneSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting <code>StorageCapacityReservationGiB</code> guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can\'t reserve more storage than the parent volume has. To <i>not</i> specify a storage capacity reservation, set this to <code>0</code> or <code>-1</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties">Volume properties</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.',
        }),
    ).exactOptional(),
    StorageCapacityQuotaGiB: IntegerNoMaxFromNegativeOneSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set <code>StorageCapacityReservationGiB</code>. To <i>not</i> specify a storage capacity quota, set this to <code>-1</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties">Volume properties</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>',
        }),
    ).exactOptional(),
    RecordSizeKiB: IntegerRecordSizeKiBSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. We recommend using the default setting for the majority of use cases. Generally, workloads that write in fixed small or large record sizes may benefit from setting a custom record size, like database workloads (small record size) or media streaming workloads (large record size). For additional guidance on when to set a custom record size, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance"> ZFS Record size</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.',
        }),
    ).exactOptional(),
    DataCompressionType: OpenZFSDataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the method used to compress the data on the volume. The compression type is <code>NONE</code> by default.</p> <ul> <li> <p> <code>NONE</code> - Doesn\'t compress the data on the volume. <code>NONE</code> is the default.</p> </li> <li> <p> <code>ZSTD</code> - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. ZSTD compression provides a higher level of data compression and higher read throughput performance than LZ4 compression.</p> </li> <li> <p> <code>LZ4</code> - Compresses the data in the volume using the LZ4 compression algorithm. LZ4 compression provides a lower level of compression and higher write throughput performance than ZSTD compression.</p> </li> </ul> <p>For more information about volume compression types and the performance of your Amazon FSx for OpenZFS file system, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs"> Tips for maximizing performance</a> File system and volume settings in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>',
        }),
    ).exactOptional(),
    CopyTagsToSnapshots: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is <code>true</code>, and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
    OriginSnapshot: CreateOpenZFSOriginSnapshotConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object that specifies the snapshot to use as the origin of the data for the volume.',
        }),
    ).exactOptional(),
    ReadOnly: ReadOnlySchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the volume is read-only.' }),
    ).exactOptional(),
    NfsExports: OpenZFSNfsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object for mounting a Network File System (NFS) file system.',
        }),
    ).exactOptional(),
    UserAndGroupQuotas: OpenZFSUserAndGroupQuotasSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object specifying how much storage users or groups can use on the volume.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ParentVolumeId'],
    description:
      'Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.',
  })
  .openapi('CreateOpenZFSVolumeConfiguration')

const CreateVolumeRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    VolumeType: VolumeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of volume to create; <code>ONTAP</code> and <code>OPENZFS</code> are the only valid volume types.',
        }),
    ),
    Name: VolumeNameSchema.and(
      z.any().openapi({ description: "Specifies the name of the volume that you're creating." }),
    ),
    OntapConfiguration: CreateOntapVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the configuration to use when creating the ONTAP volume.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
    OpenZFSConfiguration: CreateOpenZFSVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the configuration to use when creating the OpenZFS volume.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeType', 'Name'], title: 'CreateVolumeRequest' })
  .openapi('CreateVolumeRequest')

const MissingVolumeConfigurationSchema = z.any().openapi('MissingVolumeConfiguration')

const StorageVirtualMachineNotFoundSchema = z.any().openapi('StorageVirtualMachineNotFound')

const CreateVolumeFromBackupResponseSchema = z
  .object({
    Volume: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>CreateVolumeFromBackup</code> API operation, describing the volume just created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVolumeFromBackupResponse')

const CreateVolumeFromBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema,
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Name: VolumeNameSchema.and(
      z.any().openapi({ description: "The name of the new volume you're creating." }),
    ),
    OntapConfiguration: CreateOntapVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the configuration of the ONTAP volume that you are creating.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.exactOptional(),
  })
  .openapi({ required: ['BackupId', 'Name'], title: 'CreateVolumeFromBackupRequest' })
  .openapi('CreateVolumeFromBackupRequest')

const DeleteBackupResponseSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'The ID of the backup that was deleted.' }),
    ).exactOptional(),
    Lifecycle: BackupLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The lifecycle status of the backup. If the <code>DeleteBackup</code> operation is successful, the status is <code>DELETED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { BackupId: 'backup-03e3c82e0183b7b6b', Lifecycle: 'DELETED' },
    description: 'The response object for the <code>DeleteBackup</code> operation.',
    required: [],
  })
  .openapi('DeleteBackupResponse')

const DeleteBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'The ID of the backup that you want to delete.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This parameter is automatically filled on your behalf when using the CLI or SDK.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupId'],
    title: 'DeleteBackupRequest',
    description: 'The request object for the <code>DeleteBackup</code> operation.',
  })
  .openapi('DeleteBackupRequest')

const BackupRestoringSchema = z.any().openapi('BackupRestoring')

const BackupBeingCopiedSchema = z.any().openapi('BackupBeingCopied')

const DeleteDataInFileSystemSchema = z.boolean().openapi('DeleteDataInFileSystem')

const DeleteDataRepositoryAssociationResponseSchema = z
  .object({
    AssociationId: DataRepositoryAssociationIdSchema.and(
      z.any().openapi({ description: 'The ID of the data repository association being deleted.' }),
    ).exactOptional(),
    Lifecycle: DataRepositoryLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the lifecycle state of the data repository association being deleted.',
        }),
    ).exactOptional(),
    DeleteDataInFileSystem: DeleteDataInFileSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether data in the file system that corresponds to the data repository association is being deleted. Default is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDataRepositoryAssociationResponse')

const DeleteDataRepositoryAssociationRequestSchema = z
  .object({
    AssociationId: DataRepositoryAssociationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the data repository association that you want to delete.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    DeleteDataInFileSystem: DeleteDataInFileSystemSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to delete the data in the file system that corresponds to the data repository association.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AssociationId'], title: 'DeleteDataRepositoryAssociationRequest' })
  .openapi('DeleteDataRepositoryAssociationRequest')

const DataRepositoryAssociationNotFoundSchema = z.any().openapi('DataRepositoryAssociationNotFound')

const DeleteFileCacheResponseSchema = z
  .object({
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: "The ID of the cache that's being deleted." }),
    ).exactOptional(),
    Lifecycle: FileCacheLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cache lifecycle for the deletion request. If the <code>DeleteFileCache</code> operation is successful, this status is <code>DELETING</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFileCacheResponse')

const DeleteFileCacheRequestSchema = z
  .object({
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: "The ID of the cache that's being deleted." }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
  })
  .openapi({ required: ['FileCacheId'], title: 'DeleteFileCacheRequest' })
  .openapi('DeleteFileCacheRequest')

const FileCacheNotFoundSchema = z.any().openapi('FileCacheNotFound')

const DeleteFileSystemWindowsResponseSchema = z
  .object({
    FinalBackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'The ID of the final backup for this file system.' }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.and(
      z.any().openapi({ description: 'The set of tags applied to the final backup.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemWindowsResponse')

const DeleteFileSystemLustreResponseSchema = z
  .object({
    FinalBackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'The ID of the final backup for this file system.' }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.and(
      z.any().openapi({ description: 'The set of tags applied to the final backup.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemLustreResponse')

const DeleteFileSystemOpenZFSResponseSchema = z
  .object({
    FinalBackupId: BackupIdSchema.exactOptional(),
    FinalBackupTags: TagsSchema.exactOptional(),
  })
  .openapi({
    description:
      "The response object for the Amazon FSx for OpenZFS file system that's being deleted in the <code>DeleteFileSystem</code> operation.",
    required: [],
  })
  .openapi('DeleteFileSystemOpenZFSResponse')

const DeleteFileSystemResponseSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: "The ID of the file system that's being deleted." }),
    ).exactOptional(),
    Lifecycle: FileSystemLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file system lifecycle for the deletion request. If the <code>DeleteFileSystem</code> operation is successful, this status is <code>DELETING</code>.',
        }),
    ).exactOptional(),
    WindowsResponse: DeleteFileSystemWindowsResponseSchema.exactOptional(),
    LustreResponse: DeleteFileSystemLustreResponseSchema.exactOptional(),
    OpenZFSResponse: DeleteFileSystemOpenZFSResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "The response object for the OpenZFS file system that's being deleted in the <code>DeleteFileSystem</code> operation.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { FileSystemId: 'fs-0498eed5fe91001ec', Lifecycle: 'DELETING' },
    description: 'The response object for the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemResponse')

const DeleteFileSystemWindowsConfigurationSchema = z
  .object({
    SkipFinalBackup: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'By default, Amazon FSx for Windows takes a final backup on your behalf when the <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip this backup, use this flag to do so.',
        }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.and(
      z.any().openapi({ description: 'A set of tags for your final backup.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemWindowsConfiguration')

const DeleteFileSystemLustreConfigurationSchema = z
  .object({
    SkipFinalBackup: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set <code>SkipFinalBackup</code> to false if you want to take a final backup of the file system you are deleting. By default, Amazon FSx will not take a final backup on your behalf when the <code>DeleteFileSystem</code> operation is invoked. (Default = true)</p> <note> <p>The <code>fsx:CreateBackup</code> permission is required if you set <code>SkipFinalBackup</code> to <code>false</code> in order to delete the file system and take a final backup.</p> </note>',
        }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use if <code>SkipFinalBackup</code> is set to <code>false</code>, and you want to apply an array of tags to the final backup. If you have set the file system property <code>CopyTagsToBackups</code> to true, and you specify one or more <code>FinalBackupTags</code> when deleting a file system, Amazon FSx will not copy any existing file system tags to the backup.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemLustreConfiguration')

const DeleteFileSystemOpenZFSOptionSchema = z
  .literal('DELETE_CHILD_VOLUMES_AND_SNAPSHOTS')
  .openapi('DeleteFileSystemOpenZFSOption')

const DeleteFileSystemOpenZFSOptionsSchema = z
  .array(DeleteFileSystemOpenZFSOptionSchema)
  .max(1)
  .openapi('DeleteFileSystemOpenZFSOptions')

const DeleteFileSystemOpenZFSConfigurationSchema = z
  .object({
    SkipFinalBackup: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'By default, Amazon FSx for OpenZFS takes a final backup on your behalf when the <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip taking a final backup, set this value to <code>true</code>.',
        }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.and(
      z
        .any()
        .openapi({ description: "A list of tags to apply to the file system's final backup." }),
    ).exactOptional(),
    Options: DeleteFileSystemOpenZFSOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "To delete a file system if there are child volumes present below the root volume, use the string <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>. If your file system has child volumes and you don't use this option, the delete request will fail.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object for the Amazon FSx for OpenZFS file system used in the <code>DeleteFileSystem</code> operation.',
    required: [],
  })
  .openapi('DeleteFileSystemOpenZFSConfiguration')

const DeleteFileSystemRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The ID of the file system that you want to delete.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This token is automatically filled on your behalf when using the Command Line Interface (CLI) or an Amazon Web Services SDK.',
        }),
    ).exactOptional(),
    WindowsConfiguration: DeleteFileSystemWindowsConfigurationSchema.exactOptional(),
    LustreConfiguration: DeleteFileSystemLustreConfigurationSchema.exactOptional(),
    OpenZFSConfiguration: DeleteFileSystemOpenZFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object for the OpenZFS file system used in the <code>DeleteFileSystem</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemId'],
    title: 'DeleteFileSystemRequest',
    description: 'The request object for <code>DeleteFileSystem</code> operation.',
  })
  .openapi('DeleteFileSystemRequest')

const DeleteSnapshotResponseSchema = z
  .object({
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The ID of the deleted snapshot.' }),
    ).exactOptional(),
    Lifecycle: SnapshotLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The lifecycle status of the snapshot. If the <code>DeleteSnapshot</code> operation is successful, this status is <code>DELETING</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSnapshotResponse')

const DeleteSnapshotRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    SnapshotId: SnapshotIdSchema.and(
      z.any().openapi({ description: 'The ID of the snapshot that you want to delete.' }),
    ),
  })
  .openapi({ required: ['SnapshotId'], title: 'DeleteSnapshotRequest' })
  .openapi('DeleteSnapshotRequest')

const SnapshotNotFoundSchema = z.any().openapi('SnapshotNotFound')

const DeleteStorageVirtualMachineResponseSchema = z
  .object({
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z.any().openapi({ description: 'The ID of the SVM Amazon FSx is deleting.' }),
    ).exactOptional(),
    Lifecycle: StorageVirtualMachineLifecycleSchema.and(
      z.any().openapi({ description: 'Describes the lifecycle state of the SVM being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteStorageVirtualMachineResponse')

const DeleteStorageVirtualMachineRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z.any().openapi({ description: 'The ID of the SVM that you want to delete.' }),
    ),
  })
  .openapi({ required: ['StorageVirtualMachineId'], title: 'DeleteStorageVirtualMachineRequest' })
  .openapi('DeleteStorageVirtualMachineRequest')

const DeleteVolumeOntapResponseSchema = z
  .object({
    FinalBackupId: BackupIdSchema.exactOptional(),
    FinalBackupTags: TagsSchema.exactOptional(),
  })
  .openapi({
    description:
      'The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.',
    required: [],
  })
  .openapi('DeleteVolumeOntapResponse')

const DeleteVolumeResponseSchema = z
  .object({
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: "The ID of the volume that's being deleted." }),
    ).exactOptional(),
    Lifecycle: VolumeLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The lifecycle state of the volume being deleted. If the <code>DeleteVolume</code> operation is successful, this value is <code>DELETING</code>.',
        }),
    ).exactOptional(),
    OntapResponse: DeleteVolumeOntapResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a <code>DeleteVolume</code> request, showing the status of the delete request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteVolumeResponse')

const DeleteVolumeOntapConfigurationSchema = z
  .object({
    SkipFinalBackup: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true if you want to skip taking a final backup of the volume you are deleting.',
        }),
    ).exactOptional(),
    FinalBackupTags: TagsSchema.exactOptional(),
  })
  .openapi({
    description: 'Use to specify skipping a final backup, or to add tags to a final backup.',
    required: [],
  })
  .openapi('DeleteVolumeOntapConfiguration')

const DeleteOpenZFSVolumeOptionSchema = z
  .literal('DELETE_CHILD_VOLUMES_AND_SNAPSHOTS')
  .openapi('DeleteOpenZFSVolumeOption')

const DeleteOpenZFSVolumeOptionsSchema = z
  .array(DeleteOpenZFSVolumeOptionSchema)
  .max(1)
  .openapi('DeleteOpenZFSVolumeOptions')

const DeleteVolumeOpenZFSConfigurationSchema = z
  .object({
    Options: DeleteOpenZFSVolumeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "To delete the volume's child volumes, snapshots, and clones, use the string <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A value that specifies whether to delete all child volumes and snapshots. ',
    required: [],
  })
  .openapi('DeleteVolumeOpenZFSConfiguration')

const DeleteVolumeRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the volume that you are deleting.' }),
    ),
    OntapConfiguration: DeleteVolumeOntapConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Amazon FSx for ONTAP volumes, specify whether to take a final backup of the volume and apply tags to the backup. To apply tags to the backup, you must have the <code>fsx:TagResource</code> permission.',
        }),
    ).exactOptional(),
    OpenZFSConfiguration: DeleteVolumeOpenZFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For Amazon FSx for OpenZFS volumes, specify whether to delete all child volumes and snapshots.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeId'], title: 'DeleteVolumeRequest' })
  .openapi('DeleteVolumeRequest')

const BackupsSchema = z
  .array(BackupSchema)
  .max(50)
  .openapi({ description: 'A list of file system backups.' })
  .openapi('Backups')

const NextTokenSchema = z
  .string()
  .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
  .min(1)
  .max(255)
  .openapi({
    description:
      '(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous <code>NextToken</code> value left off.',
  })
  .openapi('NextToken')

const DescribeBackupsResponseSchema = z
  .object({
    Backups: BackupsSchema.and(
      z.any().openapi({ description: 'An array of backups.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>NextToken</code> value is present if there are more backups than returned in the response. You can use the <code>NextToken</code> value in the subsequent request to fetch the backups. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Backups: [
        {
          BackupId: 'backup-03e3c82e0183b7b6b',
          CreationTime: '1481841524.0',
          FileSystem: {
            FileSystemId: 'fs-0498eed5fe91001ec',
            OwnerId: 12345678912,
            StorageCapacity: 300,
            WindowsConfiguration: {
              ActiveDirectoryId: 'd-1234abcd12',
              AutomaticBackupRetentionDays: 30,
              DailyAutomaticBackupStartTime: '05:00',
              WeeklyMaintenanceStartTime: '1:05:00',
            },
          },
          Lifecycle: 'AVAILABLE',
          ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b',
          Tags: [{ Key: 'Name', Value: 'MyBackup' }],
          Type: 'USER_INITIATED',
        },
      ],
    },
    description: 'Response object for the <code>DescribeBackups</code> operation.',
    required: [],
  })
  .openapi('DescribeBackupsResponse')

const BackupIdsSchema = z
  .array(BackupIdSchema)
  .max(50)
  .openapi({ description: 'A list of backup IDs.' })
  .openapi('BackupIds')

const FilterNameSchema = z
  .enum([
    'file-system-id',
    'backup-type',
    'file-system-type',
    'volume-id',
    'data-repository-type',
    'file-cache-id',
    'file-cache-type',
  ])
  .openapi({ description: 'The name for a filter.' })
  .openapi('FilterName')

const FilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?\-\_]*$/)
  .min(1)
  .max(128)
  .openapi({ description: 'The value for a filter.' })
  .openapi('FilterValue')

const FilterValuesSchema = z
  .array(FilterValueSchema)
  .max(20)
  .openapi({ description: 'A list of filter values.' })
  .openapi('FilterValues')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.and(
      z.any().openapi({ description: 'The name for this filter.' }),
    ).exactOptional(),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values of the filter. These are all the values for any of the applied filters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.',
    required: [],
  })
  .openapi('Filter')

const FiltersSchema = z
  .array(FilterSchema)
  .max(10)
  .openapi({ description: 'A list of <code>Filter</code> elements.' })
  .openapi('Filters')

const MaxResultsSchema = z
  .int()
  .min(1)
  .max(2147483647)
  .openapi({
    description:
      'The maximum number of resources to return in the response. This value must be an integer greater than zero.',
  })
  .openapi('MaxResults')

const DescribeBackupsRequestSchema = z
  .object({
    BackupIds: BackupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IDs of the backups that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a <code>BackupNotFound</code> error occurs.",
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters structure. The supported names are <code>file-system-id</code>, <code>backup-type</code>, <code>file-system-type</code>, and <code>volume-id</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Maximum number of backups to return in the response. This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the <code>MaxResults</code> parameter specified in the request and the service's internal maximum number of items per page.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque pagination token returned from a previous <code>DescribeBackups</code> operation. If a token is present, the operation continues the list from where the returning call left off.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeBackupsRequest',
    description: 'The request object for the <code>DescribeBackups</code> operation.',
    required: [],
  })
  .openapi('DescribeBackupsRequest')

const DataRepositoryAssociationsSchema = z
  .array(DataRepositoryAssociationSchema)
  .max(100)
  .openapi('DataRepositoryAssociations')

const DescribeDataRepositoryAssociationsResponseSchema = z
  .object({
    Associations: DataRepositoryAssociationsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of one or more data repository association descriptions.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDataRepositoryAssociationsResponse')

const LimitedMaxResultsSchema = z.int().min(1).max(25).openapi('LimitedMaxResults')

const DescribeDataRepositoryAssociationsRequestSchema = z
  .object({
    AssociationIds: DataRepositoryAssociationIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'IDs of the data repository associations whose descriptions you want to retrieve (String).',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.exactOptional(),
    MaxResults: LimitedMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resources to return in the response. This value must be an integer greater than zero.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeDataRepositoryAssociationsRequest', required: [] })
  .openapi('DescribeDataRepositoryAssociationsRequest')

const InvalidDataRepositoryTypeSchema = z.any().openapi('InvalidDataRepositoryType')

const DataRepositoryTasksSchema = z
  .array(DataRepositoryTaskSchema)
  .max(50)
  .openapi('DataRepositoryTasks')

const DescribeDataRepositoryTasksResponseSchema = z
  .object({
    DataRepositoryTasks: DataRepositoryTasksSchema.and(
      z
        .any()
        .openapi({ description: 'The collection of data repository task descriptions returned.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDataRepositoryTasksResponse')

const TaskIdsSchema = z.array(TaskIdSchema).max(50).openapi('TaskIds')

const DataRepositoryTaskFilterNameSchema = z
  .enum(['file-system-id', 'task-lifecycle', 'data-repository-association-id', 'file-cache-id'])
  .openapi('DataRepositoryTaskFilterName')

const DataRepositoryTaskFilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?\-\_]*$/)
  .min(1)
  .max(128)
  .openapi('DataRepositoryTaskFilterValue')

const DataRepositoryTaskFilterValuesSchema = z
  .array(DataRepositoryTaskFilterValueSchema)
  .max(20)
  .openapi('DataRepositoryTaskFilterValues')

const DataRepositoryTaskFilterSchema = z
  .object({
    Name: DataRepositoryTaskFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Name of the task property to use in filtering the tasks returned in the response.</p> <ul> <li> <p>Use <code>file-system-id</code> to retrieve data repository tasks for specific file systems.</p> </li> <li> <p>Use <code>task-lifecycle</code> to retrieve data repository tasks with one or more specific lifecycle states, as follows: CANCELED, EXECUTING, FAILED, PENDING, and SUCCEEDED.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Values: DataRepositoryTaskFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use Values to include the specific file system IDs and task lifecycle states for the filters you are using.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.',
    required: [],
  })
  .openapi('DataRepositoryTaskFilter')

const DataRepositoryTaskFiltersSchema = z
  .array(DataRepositoryTaskFilterSchema)
  .max(3)
  .openapi('DataRepositoryTaskFilters')

const DescribeDataRepositoryTasksRequestSchema = z
  .object({
    TaskIds: TaskIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) IDs of the tasks whose descriptions you want to retrieve (String).',
        }),
    ).exactOptional(),
    Filters: DataRepositoryTaskFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) You can use filters to narrow the <code>DescribeDataRepositoryTasks</code> response to include just tasks for specific file systems, or tasks in a specific lifecycle state.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeDataRepositoryTasksRequest', required: [] })
  .openapi('DescribeDataRepositoryTasksRequest')

const FileCacheSchema = z
  .object({
    OwnerId: AWSAccountIdSchema.exactOptional(),
    CreationTime: CreationTimeSchema.exactOptional(),
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: 'The system-generated, unique ID of the cache.' }),
    ).exactOptional(),
    FileCacheType: FileCacheTypeSchema.and(
      z.any().openapi({ description: 'The type of cache, which must be <code>LUSTRE</code>.' }),
    ).exactOptional(),
    FileCacheTypeVersion: FileSystemTypeVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The Lustre version of the cache, which must be <code>2.12</code>.',
        }),
    ).exactOptional(),
    Lifecycle: FileCacheLifecycleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The lifecycle status of the cache. The following are the possible values and what they mean:</p> <ul> <li> <p> <code>AVAILABLE</code> - The cache is in a healthy state, and is reachable and available for use.</p> </li> <li> <p> <code>CREATING</code> - The new cache is being created.</p> </li> <li> <p> <code>DELETING</code> - An existing cache is being deleted.</p> </li> <li> <p> <code>UPDATING</code> - The cache is undergoing a customer-initiated update.</p> </li> <li> <p> <code>FAILED</code> - An existing cache has experienced an unrecoverable failure. When creating a new cache, the cache was unable to be created.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FailureDetails: FileCacheFailureDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'A structure providing details of any failures that occurred.' }),
    ).exactOptional(),
    StorageCapacity: StorageCapacitySchema.and(
      z.any().openapi({ description: 'The storage capacity of the cache in gibibytes (GiB).' }),
    ).exactOptional(),
    VpcId: VpcIdSchema.exactOptional(),
    SubnetIds: SubnetIdsSchema.exactOptional(),
    NetworkInterfaceIds: NetworkInterfaceIdsSchema.exactOptional(),
    DNSName: DNSNameSchema.and(
      z.any().openapi({ description: 'The Domain Name System (DNS) name for the cache.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on an Amazon File Cache. If a <code>KmsKeyId</code> isn\'t specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.exactOptional(),
    LustreConfiguration: FileCacheLustreConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the Amazon File Cache resource.' }),
    ).exactOptional(),
    DataRepositoryAssociationIds: DataRepositoryAssociationIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs of data repository associations that are associated with this cache.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A description of a specific Amazon File Cache resource, which is a response object from the <code>DescribeFileCaches</code> operation.',
    required: [],
  })
  .openapi('FileCache')

const FileCachesSchema = z.array(FileCacheSchema).max(50).openapi('FileCaches')

const DescribeFileCachesResponseSchema = z
  .object({
    FileCaches: FileCachesSchema.and(
      z
        .any()
        .openapi({
          description: 'The response object for the <code>DescribeFileCaches</code> operation.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFileCachesResponse')

const FileCacheIdsSchema = z.array(FileCacheIdSchema).max(50).openapi('FileCacheIds')

const DescribeFileCachesRequestSchema = z
  .object({
    FileCacheIds: FileCacheIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'IDs of the caches whose descriptions you want to retrieve (String).',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeFileCachesRequest', required: [] })
  .openapi('DescribeFileCachesRequest')

const DescribeFileSystemAliasesResponseSchema = z
  .object({
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of one or more DNS aliases currently associated with the specified file system.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Present if there are more DNS aliases than returned in the response (String). You can use the <code>NextToken</code> value in a later request to fetch additional descriptions. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response object for <code>DescribeFileSystemAliases</code> operation.',
    required: [],
  })
  .openapi('DescribeFileSystemAliasesResponse')

const DescribeFileSystemAliasesRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the file system to return the associated DNS aliases for (String).',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Maximum number of DNS aliases to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the <code>MaxResults</code> parameter specified in the request and the service's internal maximum number of items per page.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opaque pagination token returned from a previous <code>DescribeFileSystemAliases</code> operation (String). If a token is included in the request, the action continues the list from where the previous returning call left off.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemId'],
    title: 'DescribeFileSystemAliasesRequest',
    description: 'The request object for <code>DescribeFileSystemAliases</code> operation.',
  })
  .openapi('DescribeFileSystemAliasesRequest')

const FileSystemsSchema = z
  .array(FileSystemSchema)
  .max(50)
  .openapi({ description: 'A list of file system resource descriptions.' })
  .openapi('FileSystems')

const DescribeFileSystemsResponseSchema = z
  .object({
    FileSystems: FileSystemsSchema.and(
      z.any().openapi({ description: 'An array of file system descriptions.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Present if there are more file systems than returned in the response (String). You can use the <code>NextToken</code> value in the later request to fetch the descriptions. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FileSystems: [
        {
          CreationTime: '1481841524.0',
          DNSName: 'fs-0498eed5fe91001ec.fsx.com',
          FileSystemId: 'fs-0498eed5fe91001ec',
          KmsKeyId: 'arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6',
          Lifecycle: 'AVAILABLE',
          NetworkInterfaceIds: ['eni-abcd1234'],
          OwnerId: 12345678912,
          ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec',
          StorageCapacity: 300,
          SubnetIds: ['subnet-1234abcd'],
          Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
          VpcId: 'vpc-ab1234cd',
          WindowsConfiguration: {
            ActiveDirectoryId: 'd-1234abcd12',
            AutomaticBackupRetentionDays: 30,
            DailyAutomaticBackupStartTime: '05:00',
            ThroughputCapacity: 8,
            WeeklyMaintenanceStartTime: '1:05:00',
          },
        },
      ],
    },
    description: 'The response object for <code>DescribeFileSystems</code> operation.',
    required: [],
  })
  .openapi('DescribeFileSystemsResponse')

const FileSystemIdsSchema = z
  .array(FileSystemIdSchema)
  .max(50)
  .openapi({ description: 'A list of file system IDs.' })
  .openapi('FileSystemIds')

const DescribeFileSystemsRequestSchema = z
  .object({
    FileSystemIds: FileSystemIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'IDs of the file systems whose descriptions you want to retrieve (String).',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the <code>MaxResults</code> parameter specified in the request and the service's internal maximum number of items per page.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opaque pagination token returned from a previous <code>DescribeFileSystems</code> operation (String). If a token present, the operation continues the list from where the returning call left off.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeFileSystemsRequest',
    description: 'The request object for <code>DescribeFileSystems</code> operation.',
    required: [],
  })
  .openapi('DescribeFileSystemsRequest')

const SnapshotsSchema = z.array(SnapshotSchema).max(50).openapi('Snapshots')

const DescribeSnapshotsResponseSchema = z
  .object({
    Snapshots: SnapshotsSchema.and(
      z.any().openapi({ description: 'An array of snapshots.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSnapshotsResponse')

const SnapshotIdsSchema = z.array(SnapshotIdSchema).max(50).openapi('SnapshotIds')

const SnapshotFilterNameSchema = z
  .enum(['file-system-id', 'volume-id'])
  .openapi('SnapshotFilterName')

const SnapshotFilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?\-\_]*$/)
  .min(1)
  .max(128)
  .openapi('SnapshotFilterValue')

const SnapshotFilterValuesSchema = z
  .array(SnapshotFilterValueSchema)
  .max(20)
  .openapi('SnapshotFilterValues')

const SnapshotFilterSchema = z
  .object({
    Name: SnapshotFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the filter to use. You can filter by the <code>file-system-id</code> or by <code>volume-id</code>.',
        }),
    ).exactOptional(),
    Values: SnapshotFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>file-system-id</code> or <code>volume-id</code> that you are filtering for.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can use multiple filters to return results that meet all applied filter requirements.',
    required: [],
  })
  .openapi('SnapshotFilter')

const SnapshotFiltersSchema = z.array(SnapshotFilterSchema).max(2).openapi('SnapshotFilters')

const DescribeSnapshotsRequestSchema = z
  .object({
    SnapshotIds: SnapshotIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IDs of the snapshots that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a <code>SnapshotNotFound</code> error occurs.",
        }),
    ).exactOptional(),
    Filters: SnapshotFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filters structure. The supported names are <code>file-system-id</code> or <code>volume-id</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeSnapshotsRequest', required: [] })
  .openapi('DescribeSnapshotsRequest')

const StorageVirtualMachinesSchema = z
  .array(StorageVirtualMachineSchema)
  .max(50)
  .openapi('StorageVirtualMachines')

const DescribeStorageVirtualMachinesResponseSchema = z
  .object({
    StorageVirtualMachines: StorageVirtualMachinesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>DescribeStorageVirtualMachines</code> operation, describing each SVM.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStorageVirtualMachinesResponse')

const StorageVirtualMachineIdsSchema = z
  .array(StorageVirtualMachineIdSchema)
  .max(50)
  .openapi('StorageVirtualMachineIds')

const StorageVirtualMachineFilterNameSchema = z
  .literal('file-system-id')
  .openapi('StorageVirtualMachineFilterName')

const StorageVirtualMachineFilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?\-\_]*$/)
  .min(1)
  .max(128)
  .openapi('StorageVirtualMachineFilterValue')

const StorageVirtualMachineFilterValuesSchema = z
  .array(StorageVirtualMachineFilterValueSchema)
  .max(20)
  .openapi('StorageVirtualMachineFilterValues')

const StorageVirtualMachineFilterSchema = z
  .object({
    Name: StorageVirtualMachineFilterNameSchema.and(
      z.any().openapi({ description: 'The name for this filter.' }),
    ).exactOptional(),
    Values: StorageVirtualMachineFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values of the filter. These are all the values for any of the applied filters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple filters to return results that meet all applied filter requirements.',
    required: [],
  })
  .openapi('StorageVirtualMachineFilter')

const StorageVirtualMachineFiltersSchema = z
  .array(StorageVirtualMachineFilterSchema)
  .max(1)
  .openapi('StorageVirtualMachineFilters')

const DescribeStorageVirtualMachinesRequestSchema = z
  .object({
    StorageVirtualMachineIds: StorageVirtualMachineIdsSchema.and(
      z.any().openapi({ description: 'Enter the ID of one or more SVMs that you want to view.' }),
    ).exactOptional(),
    Filters: StorageVirtualMachineFiltersSchema.and(
      z
        .any()
        .openapi({ description: 'Enter a filter name:value pair to view a select set of SVMs.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeStorageVirtualMachinesRequest', required: [] })
  .openapi('DescribeStorageVirtualMachinesRequest')

const VolumesSchema = z.array(VolumeSchema).max(50).openapi('Volumes')

const DescribeVolumesResponseSchema = z
  .object({
    Volumes: VolumesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>DescribeVolumes</code> operation, describing each volume.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVolumesResponse')

const VolumeIdsSchema = z.array(VolumeIdSchema).max(50).openapi('VolumeIds')

const VolumeFilterNameSchema = z
  .enum(['file-system-id', 'storage-virtual-machine-id'])
  .openapi('VolumeFilterName')

const VolumeFilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z\*\.\\\/\?\-\_]*$/)
  .min(1)
  .max(128)
  .openapi('VolumeFilterValue')

const VolumeFilterValuesSchema = z
  .array(VolumeFilterValueSchema)
  .max(20)
  .openapi('VolumeFilterValues')

const VolumeFilterSchema = z
  .object({
    Name: VolumeFilterNameSchema.and(
      z.any().openapi({ description: 'The name for this filter.' }),
    ).exactOptional(),
    Values: VolumeFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values of the filter. These are all the values for any of the applied filters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to return results that meet all applied filter requirements.',
    required: [],
  })
  .openapi('VolumeFilter')

const VolumeFiltersSchema = z.array(VolumeFilterSchema).max(2).openapi('VolumeFilters')

const DescribeVolumesRequestSchema = z
  .object({
    VolumeIds: VolumeIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'The IDs of the volumes whose descriptions you want to retrieve.',
        }),
    ).exactOptional(),
    Filters: VolumeFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enter a filter <code>Name</code> and <code>Values</code> pair to view a select set of volumes.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ title: 'DescribeVolumesRequest', required: [] })
  .openapi('DescribeVolumesRequest')

const DisassociateFileSystemAliasesResponseSchema = z
  .object({
    Aliases: AliasesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of one or more DNS aliases that Amazon FSx is attempting to disassociate from the file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.',
    required: [],
  })
  .openapi('DisassociateFileSystemAliasesResponse')

const DisassociateFileSystemAliasesRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    FileSystemId: FileSystemIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the file system from which to disassociate the DNS aliases.',
        }),
    ),
    Aliases: AlternateDNSNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of one or more DNS alias names to disassociate, or remove, from the file system.',
        }),
    ),
  })
  .openapi({
    required: ['FileSystemId', 'Aliases'],
    title: 'DisassociateFileSystemAliasesRequest',
    description:
      'The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.',
  })
  .openapi('DisassociateFileSystemAliasesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'A list of tags on the resource.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is present if there are more tags than returned in the response (String). You can use the <code>NextToken</code> value in the later request to fetch the tags. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Tags: [{ Key: 'Name', Value: 'MyFileSystem' }] },
    description: 'The response object for <code>ListTagsForResource</code> operation.',
    required: [],
  })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the Amazon FSx resource that will have its tags listed.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the <code>MaxResults</code> parameter specified in the request and the service's internal maximum number of items per page.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Opaque pagination token returned from a previous <code>ListTagsForResource</code> operation (String). If a token present, the action continues the list from where the returning call left off.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    title: 'ListTagsForResourceRequest',
    description: 'The request object for <code>ListTagsForResource</code> operation.',
  })
  .openapi('ListTagsForResourceRequest')

const ResourceNotFoundSchema = z.any().openapi('ResourceNotFound')

const NotServiceResourceErrorSchema = z.any().openapi('NotServiceResourceError')

const ResourceDoesNotSupportTaggingSchema = z.any().openapi('ResourceDoesNotSupportTagging')

const ReleaseFileSystemNfsV3LocksResponseSchema = z
  .object({ FileSystem: FileSystemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ReleaseFileSystemNfsV3LocksResponse')

const ReleaseFileSystemNfsV3LocksRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema,
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
  })
  .openapi({ required: ['FileSystemId'], title: 'ReleaseFileSystemNfsV3LocksRequest' })
  .openapi('ReleaseFileSystemNfsV3LocksRequest')

const RestoreVolumeFromSnapshotResponseSchema = z
  .object({
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the volume that you restored.' }),
    ).exactOptional(),
    Lifecycle: VolumeLifecycleSchema.and(
      z.any().openapi({ description: 'The lifecycle state of the volume being restored.' }),
    ).exactOptional(),
    AdministrativeActions: AdministrativeActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestoreVolumeFromSnapshotResponse')

const RestoreOpenZFSVolumeOptionSchema = z
  .enum(['DELETE_INTERMEDIATE_SNAPSHOTS', 'DELETE_CLONED_VOLUMES'])
  .openapi('RestoreOpenZFSVolumeOption')

const RestoreOpenZFSVolumeOptionsSchema = z
  .array(RestoreOpenZFSVolumeOptionSchema)
  .max(2)
  .openapi('RestoreOpenZFSVolumeOptions')

const RestoreVolumeFromSnapshotRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z.any().openapi({ description: 'The ID of the volume that you are restoring.' }),
    ),
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the source snapshot. Specifies the snapshot that you are restoring from.',
        }),
    ),
    Options: RestoreOpenZFSVolumeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The settings used when restoring the specified volume from snapshot.</p> <ul> <li> <p> <code>DELETE_INTERMEDIATE_SNAPSHOTS</code> - Deletes snapshots between the current state and the specified snapshot. If there are intermediate snapshots and this option isn't used, <code>RestoreVolumeFromSnapshot</code> fails.</p> </li> <li> <p> <code>DELETE_CLONED_VOLUMES</code> - Deletes any dependent clone volumes created from intermediate snapshots. If there are any dependent clone volumes and this option isn't used, <code>RestoreVolumeFromSnapshot</code> fails.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeId', 'SnapshotId'], title: 'RestoreVolumeFromSnapshotRequest' })
  .openapi('RestoreVolumeFromSnapshotRequest')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ description: 'The response object for the <code>TagResource</code> operation.' })
  .openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to tag.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags for the resource. If a tag with a given key already exists, the value is replaced by the one specified in this parameter.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'Tags'],
    title: 'TagResourceRequest',
    description: 'The request object for the <code>TagResource</code> operation.',
  })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ description: 'The response object for <code>UntagResource</code> action.' })
  .openapi('UntagResourceResponse')

const TagKeysSchema = z
  .array(TagKeySchema)
  .min(1)
  .max(50)
  .openapi({ description: 'A list of <code>TagKey</code> values, with a maximum of 50 elements.' })
  .openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the Amazon FSx resource to untag.' }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of keys of tags on the resource to untag. In case the tag key doesn't exist, the call will still succeed to be idempotent.",
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'TagKeys'],
    title: 'UntagResourceRequest',
    description: 'The request object for <code>UntagResource</code> action.',
  })
  .openapi('UntagResourceRequest')

const UpdateDataRepositoryAssociationResponseSchema = z
  .object({
    Association: DataRepositoryAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response object returned after the data repository association is updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDataRepositoryAssociationResponse')

const UpdateDataRepositoryAssociationRequestSchema = z
  .object({
    AssociationId: DataRepositoryAssociationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the data repository association that you are updating.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    ImportedFileChunkSize: MegabytesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p>',
        }),
    ).exactOptional(),
    S3: S3DataRepositoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AssociationId'], title: 'UpdateDataRepositoryAssociationRequest' })
  .openapi('UpdateDataRepositoryAssociationRequest')

const UpdateFileCacheResponseSchema = z
  .object({
    FileCache: FileCacheSchema.and(
      z.any().openapi({ description: 'A description of the cache that was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFileCacheResponse')

const UpdateFileCacheLustreConfigurationSchema = z
  .object({ WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional() })
  .openapi({
    description: 'The configuration update for an Amazon File Cache resource.',
    required: [],
  })
  .openapi('UpdateFileCacheLustreConfiguration')

const UpdateFileCacheRequestSchema = z
  .object({
    FileCacheId: FileCacheIdSchema.and(
      z.any().openapi({ description: 'The ID of the cache that you are updating.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    LustreConfiguration: UpdateFileCacheLustreConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration updates for an Amazon File Cache resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['FileCacheId'], title: 'UpdateFileCacheRequest' })
  .openapi('UpdateFileCacheRequest')

const UpdateFileSystemResponseSchema = z
  .object({
    FileSystem: FileSystemSchema.and(
      z.any().openapi({ description: 'A description of the file system that was updated.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FileSystem: {
        CreationTime: '1481841524.0',
        DNSName: 'fs-0498eed5fe91001ec.fsx.com',
        FileSystemId: 'fs-0498eed5fe91001ec',
        KmsKeyId: 'arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6',
        Lifecycle: 'AVAILABLE',
        OwnerId: 12345678912,
        ResourceARN: 'arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec',
        StorageCapacity: 300,
        SubnetIds: ['subnet-1234abcd'],
        Tags: [{ Key: 'Name', Value: 'MyFileSystem' }],
        VpcId: 'vpc-ab1234cd',
        WindowsConfiguration: {
          AutomaticBackupRetentionDays: 10,
          DailyAutomaticBackupStartTime: '06:00',
          ThroughputCapacity: 8,
          WeeklyMaintenanceStartTime: '3:06:00',
        },
      },
    },
    description: 'The response object for the <code>UpdateFileSystem</code> operation.',
    required: [],
  })
  .openapi('UpdateFileSystemResponse')

const SelfManagedActiveDirectoryConfigurationUpdatesSchema = z
  .object({
    UserName: DirectoryUserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in <code>OrganizationalUnitDistinguishedName</code>.',
        }),
    ).exactOptional(),
    Password: DirectoryPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.',
        }),
    ).exactOptional(),
    DnsIps: DnsIpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.',
    required: [],
  })
  .openapi('SelfManagedActiveDirectoryConfigurationUpdates')

const UpdateFileSystemWindowsConfigurationSchema = z
  .object({
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred time to start the daily automatic backup, in the UTC time zone, for example, <code>02:00</code> ',
        }),
    ).exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of days to retain automatic daily backups. Setting this to zero (0) disables automatic daily backups. You can retain automatic daily backups for a maximum of 90 days. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#automatic-backups">Working with Automatic Daily Backups</a>.',
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the target value for a file system\'s throughput capacity, in MB/s, that you are updating the file system to. Valid values are 8, 16, 32, 64, 128, 256, 512, 1024, 2048. You cannot make a throughput capacity update request if there is an existing throughput capacity update request in progress. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html">Managing Throughput Capacity</a>.',
        }),
    ).exactOptional(),
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryConfigurationUpdatesSchema.and(
        z
          .any()
          .openapi({
            description:
              'The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory. You cannot make a self-managed Microsoft AD update request if there is an existing self-managed Microsoft AD update request in progress.',
          }),
      ).exactOptional(),
    AuditLogConfiguration: WindowsAuditLogCreateConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system..',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Updates the configuration for an existing Amazon FSx for Windows File Server file system. Amazon FSx only overwrites existing properties with non-null values provided in the request.',
    required: [],
  })
  .openapi('UpdateFileSystemWindowsConfiguration')

const UpdateFileSystemLustreConfigurationSchema = z
  .object({
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.',
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    AutoImportPolicy: AutoImportPolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listing up to date as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update the file and directory listing for any new or changed objects after choosing this option.</p> </li> <li> <p> <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system. </p> </li> <li> <p> <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.</p> </li> <li> <p> <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.</p> </li> </ul> <p>This parameter is not supported for file systems with a data repository association.</p>',
        }),
    ).exactOptional(),
    DataCompressionType: DataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the data compression configuration for the file system. <code>DataCompressionType</code> can have the following values:</p> <ul> <li> <p> <code>NONE</code> - Data compression is turned off for the file system.</p> </li> <li> <p> <code>LZ4</code> - Data compression is turned on with the LZ4 algorithm.</p> </li> </ul> <p>If you don\'t use <code>DataCompressionType</code>, the file system retains its current data compression configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>',
        }),
    ).exactOptional(),
    LogConfiguration: LustreLogCreateConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre logging configuration used when updating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    RootSquashConfiguration: LustreRootSquashConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lustre root squash configuration used when updating an Amazon FSx for Lustre file system. When enabled, root squash restricts root-level access from clients that try to access your file system as a root user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.',
    required: [],
  })
  .openapi('UpdateFileSystemLustreConfiguration')

const UpdateFileSystemOntapConfigurationSchema = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    FsxAdminPassword: AdminPasswordSchema.and(
      z
        .any()
        .openapi({
          description: 'The ONTAP administrative password for the <code>fsxadmin</code> user.',
        }),
    ).exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of an IOPS mode (<code>AUTOMATIC</code> or <code>USER_PROVISIONED</code>), and in the case of <code>USER_PROVISIONED</code> IOPS, the total number of SSD IOPS provisioned.',
        }),
    ).exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the throughput of an FSx for NetApp ONTAP file system, measured in megabytes per second (MBps). Valid values are 128, 256, 512, 1024, 2048, and 4096 MBps.',
        }),
    ).exactOptional(),
    AddRouteTableIds: RouteTableIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables to associate (add) with your Amazon FSx for NetApp ONTAP file system.',
        }),
    ).exactOptional(),
    RemoveRouteTableIds: RouteTableIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Multi-AZ only) A list of IDs of existing virtual private cloud (VPC) route tables to disassociate (remove) from your Amazon FSx for NetApp ONTAP file system. You can use the API operation to retrieve the list of VPC route table IDs for a file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration updates for an Amazon FSx for NetApp ONTAP file system.',
    required: [],
  })
  .openapi('UpdateFileSystemOntapConfiguration')

const UpdateFileSystemOpenZFSConfigurationSchema = z
  .object({
    AutomaticBackupRetentionDays: AutomaticBackupRetentionDaysSchema.exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.",
        }),
    ).exactOptional(),
    CopyTagsToVolumes: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is <code>true</code> and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
    DailyAutomaticBackupStartTime: DailyTimeSchema.exactOptional(),
    ThroughputCapacity: MegabytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second&#x2028; (MB/s). Valid values depend on the DeploymentType you choose, as follows:</p> <ul> <li> <p>For <code>SINGLE_AZ_1</code>, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s.</p> </li> <li> <p>For <code>SINGLE_AZ_2</code>, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MB/s.</p> </li> </ul>',
        }),
    ).exactOptional(),
    WeeklyMaintenanceStartTime: WeeklyTimeSchema.exactOptional(),
    DiskIopsConfiguration: DiskIopsConfigurationSchema.exactOptional(),
  })
  .openapi({
    description: 'The configuration updates for an Amazon FSx for OpenZFS file system.',
    required: [],
  })
  .openapi('UpdateFileSystemOpenZFSConfiguration')

const UpdateFileSystemRequestSchema = z
  .object({
    FileSystemId: FileSystemIdSchema.and(
      z.any().openapi({ description: 'The ID of the file system that you are updating.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string of up to 63 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.',
        }),
    ).exactOptional(),
    StorageCapacity: StorageCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this parameter to increase the storage capacity of an FSx for Windows File Server, FSx for Lustre, FSx for OpenZFS, or FSx for ONTAP file system. Specifies the storage capacity target value, in GiB, to increase the storage capacity for the file system that you\'re updating. </p> <note> <p>You can\'t make a storage capacity increase request if there is an existing storage capacity increase request in progress.</p> </note> <p>For Lustre file systems, the storage capacity target value can be the following:</p> <ul> <li> <p>For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2 SSD</code> deployment types, valid values are in multiples of 2400 GiB. The value must be greater than the current storage capacity.</p> </li> <li> <p>For <code>PERSISTENT HDD</code> file systems, valid values are multiples of 6000 GiB for 12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput per TiB file systems. The values must be greater than the current storage capacity.</p> </li> <li> <p>For <code>SCRATCH_1</code> file systems, you can\'t increase the storage capacity.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>FSx for Lustre User Guide</i>.</p> <p>For FSx for OpenZFS file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>FSx for OpenZFS User Guide</i>.</p> <p>For Windows file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. To increase storage capacity, the file system must have at least 16 MBps of throughput capacity. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>.</p> <p>For ONTAP file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>',
        }),
    ).exactOptional(),
    WindowsConfiguration: UpdateFileSystemWindowsConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration updates for an Amazon FSx for Windows File Server file system.',
        }),
    ).exactOptional(),
    LustreConfiguration: UpdateFileSystemLustreConfigurationSchema.exactOptional(),
    OntapConfiguration: UpdateFileSystemOntapConfigurationSchema.exactOptional(),
    OpenZFSConfiguration: UpdateFileSystemOpenZFSConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration updates for an Amazon FSx for OpenZFS file system.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FileSystemId'],
    title: 'UpdateFileSystemRequest',
    description: 'The request object for the <code>UpdateFileSystem</code> operation.',
  })
  .openapi('UpdateFileSystemRequest')

const UpdateSnapshotResponseSchema = z
  .object({
    Snapshot: SnapshotSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned after a successful <code>UpdateSnapshot</code> operation, describing the snapshot that you updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSnapshotResponse')

const UpdateSnapshotRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Name: SnapshotNameSchema.and(
      z.any().openapi({ description: 'The name of the snapshot to update.' }),
    ),
    SnapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the snapshot that you want to update, in the format <code>fsvolsnap-0123456789abcdef0</code>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'SnapshotId'], title: 'UpdateSnapshotRequest' })
  .openapi('UpdateSnapshotRequest')

const UpdateStorageVirtualMachineResponseSchema = z
  .object({ StorageVirtualMachine: StorageVirtualMachineSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateStorageVirtualMachineResponse')

const UpdateSvmActiveDirectoryConfigurationSchema = z
  .object({
    SelfManagedActiveDirectoryConfiguration:
      SelfManagedActiveDirectoryConfigurationUpdatesSchema.exactOptional(),
  })
  .openapi({
    description:
      'Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Please note, account credentials are not returned in the response payload.',
    required: [],
  })
  .openapi('UpdateSvmActiveDirectoryConfiguration')

const UpdateStorageVirtualMachineRequestSchema = z
  .object({
    ActiveDirectoryConfiguration: UpdateSvmActiveDirectoryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates the Microsoft Active Directory (AD) configuration for an SVM that is joined to an AD.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    StorageVirtualMachineId: StorageVirtualMachineIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the SVM that you want to update, in the format <code>svm-0123456789abcdef0</code>.',
        }),
    ),
    SvmAdminPassword: AdminPasswordSchema.and(
      z.any().openapi({ description: 'Enter a new SvmAdminPassword if you are updating it.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StorageVirtualMachineId'], title: 'UpdateStorageVirtualMachineRequest' })
  .openapi('UpdateStorageVirtualMachineRequest')

const UpdateVolumeResponseSchema = z
  .object({
    Volume: VolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the volume just updated. Returned after a successful <code>UpdateVolume</code> API operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVolumeResponse')

const UpdateOntapVolumeConfigurationSchema = z
  .object({
    JunctionPath: JunctionPathSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the location in the SVM's namespace where the volume is mounted. The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.",
        }),
    ).exactOptional(),
    SecurityStyle: SecurityStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security style for the volume, which can be <code>UNIX</code>. <code>NTFS</code>, or <code>MIXED</code>.',
        }),
    ).exactOptional(),
    SizeInMegabytes: VolumeCapacitySchema.and(
      z.any().openapi({ description: 'Specifies the size of the volume in megabytes.' }),
    ).exactOptional(),
    StorageEfficiencyEnabled: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Default is <code>false</code>. Set to true to enable the deduplication, compression, and compaction storage efficiency features on the volume.',
        }),
    ).exactOptional(),
    TieringPolicy: TieringPolicySchema.and(
      z.any().openapi({ description: "Update the volume's data tiering policy." }),
    ).exactOptional(),
    SnapshotPolicy: SnapshotPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p> <ul> <li> <p> <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p> </li> <li> <p> <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except that it only retains one snapshot from the weekly schedule.</p> </li> <li> <p> <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.</p> </li> </ul> <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>',
        }),
    ).exactOptional(),
    CopyTagsToBackups: FlagSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Used to specify changes to the ONTAP configuration for the volume you are updating.',
    required: [],
  })
  .openapi('UpdateOntapVolumeConfiguration')

const UpdateOpenZFSVolumeConfigurationSchema = z
  .object({
    StorageCapacityReservationGiB: IntegerNoMaxFromNegativeOneSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved. You can specify a value of <code>-1</code> to unset a volume's storage capacity reservation.",
        }),
    ).exactOptional(),
    StorageCapacityQuotaGiB: IntegerNoMaxFromNegativeOneSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume. You can specify a value of <code>-1</code> to unset a volume's storage capacity quota.",
        }),
    ).exactOptional(),
    RecordSizeKiB: IntegerRecordSizeKiBSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on when to set a custom record size, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs"> Tips for maximizing performance</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.',
        }),
    ).exactOptional(),
    DataCompressionType: OpenZFSDataCompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the method used to compress the data on the volume. The compression type is <code>NONE</code> by default.</p> <ul> <li> <p> <code>NONE</code> - Doesn't compress the data on the volume. <code>NONE</code> is the default.</p> </li> <li> <p> <code>ZSTD</code> - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.</p> </li> <li> <p> <code>LZ4</code> - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.</p> </li> </ul>",
        }),
    ).exactOptional(),
    NfsExports: OpenZFSNfsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration object for mounting a Network File System (NFS) file system.',
        }),
    ).exactOptional(),
    UserAndGroupQuotas: OpenZFSUserAndGroupQuotasSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object specifying how much storage users or groups can use on the volume.',
        }),
    ).exactOptional(),
    ReadOnly: ReadOnlySchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the volume is read-only.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Used to specify changes to the OpenZFS configuration for the volume that you are updating.',
    required: [],
  })
  .openapi('UpdateOpenZFSVolumeConfiguration')

const UpdateVolumeRequestSchema = z
  .object({
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    VolumeId: VolumeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the volume that you want to update, in the format <code>fsvol-0123456789abcdef0</code>.',
        }),
    ),
    OntapConfiguration: UpdateOntapVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration of the ONTAP volume that you are updating.' }),
    ).exactOptional(),
    Name: VolumeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the OpenZFS volume. OpenZFS root volumes are automatically named <code>FSX</code>. Child volume names must be unique among their parent volume's children. The name of the volume is part of the mount string for the OpenZFS volume. ",
        }),
    ).exactOptional(),
    OpenZFSConfiguration: UpdateOpenZFSVolumeConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration of the OpenZFS volume that you are updating.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['VolumeId'], title: 'UpdateVolumeRequest' })
  .openapi('UpdateVolumeRequest')

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

export const postXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases',
    description:
      '<p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including additional steps you must take to be able to access your file system using a DNS alias.</p> <p>The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.</p>',
    operationId: 'AssociateFileSystemAliases',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.AssociateFileSystemAliases')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateFileSystemAliasesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateFileSystemAliasesResponseSchema } },
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
    },
  },
)

export const postXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask',
  description:
    '<p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p> <ul> <li> <p>Any files that FSx has already exported are not reverted.</p> </li> <li> <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p> </li> <li> <p>FSx does not export any files that have not yet been exported.</p> </li> </ul>',
  operationId: 'CancelDataRepositoryTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CancelDataRepositoryTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelDataRepositoryTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelDataRepositoryTaskResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    482: {
      description: 'DataRepositoryTaskNotFound',
      content: { 'application/json': { schema: DataRepositoryTaskNotFoundSchema } },
    },
    483: {
      description: 'DataRepositoryTaskEnded',
      content: { 'application/json': { schema: DataRepositoryTaskEndedSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup',
  description:
    '<p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account.</p> <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p> <p>You can also use backup copies to clone your file dataset to another Region or within the same Region.</p> <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code> Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter to make a cross-Region copy. If you don\'t specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy).</p> <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>',
  operationId: 'CopyBackup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CopyBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CopyBackup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CopyBackupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyBackupResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'BackupNotFound',
      content: { 'application/json': { schema: BackupNotFoundSchema } },
    },
    482: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    483: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    484: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'InvalidSourceKmsKey',
      content: { 'application/json': { schema: InvalidSourceKmsKeySchema } },
    },
    487: {
      description: 'InvalidDestinationKmsKey',
      content: { 'application/json': { schema: InvalidDestinationKmsKeySchema } },
    },
    488: {
      description: 'InvalidRegion',
      content: { 'application/json': { schema: InvalidRegionSchema } },
    },
    489: {
      description: 'SourceBackupUnavailable',
      content: { 'application/json': { schema: SourceBackupUnavailableSchema } },
    },
    490: {
      description: 'IncompatibleRegionForMultiAZ',
      content: { 'application/json': { schema: IncompatibleRegionForMultiAZSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup',
  description:
    '<p>Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume.</p> <p>For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:</p> <ul> <li> <p>A Persistent deployment type</p> </li> <li> <p>Are <i>not</i> linked to a data repository</p> </li> </ul> <p>For more information about backups, see the following:</p> <ul> <li> <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p> </li> <li> <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p> </li> <li> <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p> </li> <li> <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p> </li> </ul> <p>If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don\'t match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn\'t exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateBackup</code> operation returns while the backup\'s lifecycle state is still <code>CREATING</code>. You can check the backup creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other information.</p>',
  operationId: 'CreateBackup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CreateBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackupResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
    484: {
      description: 'BackupInProgress',
      content: { 'application/json': { schema: BackupInProgressSchema } },
    },
    485: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    486: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    487: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation',
    description:
      '<p>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.</p> <p>Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p> <note> <p> <code>CreateDataRepositoryAssociation</code> isn\'t supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the <code>CreateFileCache</code> operation.</p> </note>',
    operationId: 'CreateDataRepositoryAssociation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateDataRepositoryAssociationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateDataRepositoryAssociationResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'UnsupportedOperation',
        content: { 'application/json': { schema: UnsupportedOperationSchema } },
      },
      482: {
        description: 'FileSystemNotFound',
        content: { 'application/json': { schema: FileSystemNotFoundSchema } },
      },
      483: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      484: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      485: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask',
  description:
    'Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>. To learn more about linking a data repository to your file system, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.',
  operationId: 'CreateDataRepositoryTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateDataRepositoryTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDataRepositoryTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataRepositoryTaskResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    484: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'DataRepositoryTaskExecuting',
      content: { 'application/json': { schema: DataRepositoryTaskExecutingSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache',
  description:
    "<p>Creates a new Amazon File Cache resource.</p> <p>You can use this operation with a client request token in the request that Amazon File Cache uses to ensure idempotent creation. If a cache with the specified client request token exists and the parameters match, <code>CreateFileCache</code> returns the description of the existing cache. If a cache with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file cache with the specified client request token doesn't exist, <code>CreateFileCache</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the cache in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle state is still <code>CREATING</code>. You can check the cache creation status by calling the <a href=\"https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html\">DescribeFileCaches</a> operation, which returns the cache state along with other information.</p> </note>",
  operationId: 'CreateFileCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateFileCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CreateFileCache'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFileCacheRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFileCacheResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    482: {
      description: 'InvalidNetworkSettings',
      content: { 'application/json': { schema: InvalidNetworkSettingsSchema } },
    },
    483: {
      description: 'InvalidPerUnitStorageThroughput',
      content: { 'application/json': { schema: InvalidPerUnitStorageThroughputSchema } },
    },
    484: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'MissingFileCacheConfiguration',
      content: { 'application/json': { schema: MissingFileCacheConfigurationSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem',
  description:
    "<p>Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p> <ul> <li> <p>Amazon FSx for Lustre</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system in JSON format.</p> </li> </ul> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href=\"https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html\">DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>",
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
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateFileSystem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CreateFileSystem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFileSystemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFileSystemResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'ActiveDirectoryError',
      content: { 'application/json': { schema: ActiveDirectoryErrorSchema } },
    },
    482: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    483: {
      description: 'InvalidImportPath',
      content: { 'application/json': { schema: InvalidImportPathSchema } },
    },
    484: {
      description: 'InvalidExportPath',
      content: { 'application/json': { schema: InvalidExportPathSchema } },
    },
    485: {
      description: 'InvalidNetworkSettings',
      content: { 'application/json': { schema: InvalidNetworkSettingsSchema } },
    },
    486: {
      description: 'InvalidPerUnitStorageThroughput',
      content: { 'application/json': { schema: InvalidPerUnitStorageThroughputSchema } },
    },
    487: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    488: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    489: {
      description: 'MissingFileSystemConfiguration',
      content: { 'application/json': { schema: MissingFileSystemConfigurationSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup',
    description:
      "<p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a file system with the specified client request token exists but the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a href=\"https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html\"> DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>",
    operationId: 'CreateFileSystemFromBackup',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateFileSystemFromBackupRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateFileSystemFromBackupResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'ActiveDirectoryError',
        content: { 'application/json': { schema: ActiveDirectoryErrorSchema } },
      },
      482: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      483: {
        description: 'InvalidNetworkSettings',
        content: { 'application/json': { schema: InvalidNetworkSettingsSchema } },
      },
      484: {
        description: 'InvalidPerUnitStorageThroughput',
        content: { 'application/json': { schema: InvalidPerUnitStorageThroughputSchema } },
      },
      485: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      486: {
        description: 'BackupNotFound',
        content: { 'application/json': { schema: BackupNotFoundSchema } },
      },
      487: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      488: {
        description: 'MissingFileSystemConfiguration',
        content: { 'application/json': { schema: MissingFileSystemConfigurationSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot',
  description:
    "<p>Creates a snapshot of an existing Amazon FSx for OpenZFS volume. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version.</p> <p>If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a snapshot with the specified client request token doesn't exist, <code>CreateSnapshot</code> does the following:</p> <ul> <li> <p>Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the snapshot.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateSnapshot</code> operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateSnapshot</code> operation returns while the snapshot's lifecycle state is still <code>CREATING</code>. You can check the snapshot creation status by calling the <a href=\"https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html\">DescribeSnapshots</a> operation, which returns the snapshot state along with other information.</p>",
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
        .literal('AWSSimbaAPIService_v20180301.CreateSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CreateSnapshot'] },
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
      content: { 'application/json': { schema: CreateSnapshotResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
    482: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine',
    description: 'Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.',
    operationId: 'CreateStorageVirtualMachine',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateStorageVirtualMachineRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateStorageVirtualMachineResponseSchema } },
      },
      480: {
        description: 'ActiveDirectoryError',
        content: { 'application/json': { schema: ActiveDirectoryErrorSchema } },
      },
      481: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      482: {
        description: 'FileSystemNotFound',
        content: { 'application/json': { schema: FileSystemNotFoundSchema } },
      },
      483: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      484: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      485: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      486: {
        description: 'UnsupportedOperation',
        content: { 'application/json': { schema: UnsupportedOperationSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume',
  description: 'Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.',
  operationId: 'CreateVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.CreateVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVolumeResponseSchema } },
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
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'MissingVolumeConfiguration',
      content: { 'application/json': { schema: MissingVolumeConfigurationSchema } },
    },
    485: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    486: {
      description: 'StorageVirtualMachineNotFound',
      content: { 'application/json': { schema: StorageVirtualMachineNotFoundSchema } },
    },
    487: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup',
  description:
    'Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.',
  operationId: 'CreateVolumeFromBackup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.CreateVolumeFromBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVolumeFromBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVolumeFromBackupResponseSchema } },
    },
    480: {
      description: 'BackupNotFound',
      content: { 'application/json': { schema: BackupNotFoundSchema } },
    },
    481: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'MissingVolumeConfiguration',
      content: { 'application/json': { schema: MissingVolumeConfigurationSchema } },
    },
    486: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    487: {
      description: 'StorageVirtualMachineNotFound',
      content: { 'application/json': { schema: StorageVirtualMachineNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup',
  description:
    "<p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>",
  operationId: 'DeleteBackup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DeleteBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DeleteBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackupResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'BackupInProgress',
      content: { 'application/json': { schema: BackupInProgressSchema } },
    },
    482: {
      description: 'BackupNotFound',
      content: { 'application/json': { schema: BackupNotFoundSchema } },
    },
    483: {
      description: 'BackupRestoring',
      content: { 'application/json': { schema: BackupRestoringSchema } },
    },
    484: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'BackupBeingCopied',
      content: { 'application/json': { schema: BackupBeingCopiedSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation',
    description:
      'Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.',
    operationId: 'DeleteDataRepositoryAssociation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteDataRepositoryAssociationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteDataRepositoryAssociationResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      482: {
        description: 'DataRepositoryAssociationNotFound',
        content: { 'application/json': { schema: DataRepositoryAssociationNotFoundSchema } },
      },
      483: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      484: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache',
  description:
    '<p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.</p> <p>The <code>DeleteFileCache</code> operation returns while the cache has the <code>DELETING</code> status. You can check the cache deletion status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code> error.</p> <important> <p>The data in a deleted cache is also deleted and can\'t be recovered by any means.</p> </important>',
  operationId: 'DeleteFileCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DeleteFileCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DeleteFileCache'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFileCacheRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFileCacheResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    482: {
      description: 'FileCacheNotFound',
      content: { 'application/json': { schema: FileCacheNotFoundSchema } },
    },
    483: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem',
  description:
    "<p>Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted.</p> <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a <code>FileSystemId</code> value to the <code>DeleFileSystem</code> operation.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> operation returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a href=\"https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html\">DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <code>DescribeFileSystems</code> operation returns a <code>FileSystemNotFound</code> error.</p> <note> <p>If a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code> state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).</p> </note> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>",
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
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DeleteFileSystem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DeleteFileSystem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFileSystemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFileSystemResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    482: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    483: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot',
  description:
    "<p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup. </p> <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>",
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
        .literal('AWSSimbaAPIService_v20180301.DeleteSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DeleteSnapshot'] },
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
      content: { 'application/json': { schema: DeleteSnapshotResponseSchema } },
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
      description: 'SnapshotNotFound',
      content: { 'application/json': { schema: SnapshotNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine',
    description:
      'Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.',
    operationId: 'DeleteStorageVirtualMachine',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteStorageVirtualMachineRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteStorageVirtualMachineResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      482: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      483: {
        description: 'StorageVirtualMachineNotFound',
        content: { 'application/json': { schema: StorageVirtualMachineNotFoundSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume',
  description: 'Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.',
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
        .literal('AWSSimbaAPIService_v20180301.DeleteVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DeleteVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVolumeResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups',
  description:
    "<p>Returns the description of a specific Amazon FSx backup, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of the <code>NextToken</code> value from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of backup descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of the backups returned in the response of one <code>DescribeBackups</code> call and the order of the backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>",
  operationId: 'DescribeBackups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DescribeBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DescribeBackups'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeBackupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBackupsResponseSchema } },
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
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
    483: {
      description: 'BackupNotFound',
      content: { 'application/json': { schema: BackupNotFoundSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations',
    description:
      "<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository associations, if one or more <code>AssociationIds</code> values are provided in the request, or if filters are used in the request. Data repository associations are supported on Amazon File Cache resources and all Amazon FSx for Lustre file systems excluding <code>Scratch_1</code> deployment types.</p> <p>You can use filters to narrow the response to include just data repository associations for specific file systems (use the <code>file-system-id</code> filter with the ID of the file system) or caches (use the <code>file-cache-id</code> filter with the ID of the cache), or data repository associations for a specific repository type (use the <code>data-repository-type</code> filter with a value of <code>S3</code> or <code>NFS</code>). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all data repository associations, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>",
    operationId: 'DescribeDataRepositoryAssociations',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'],
              },
            },
          }),
      }),
      query: z.object({
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
      body: {
        content: {
          'application/json': { schema: DescribeDataRepositoryAssociationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeDataRepositoryAssociationsResponseSchema },
        },
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
        description: 'DataRepositoryAssociationNotFound',
        content: { 'application/json': { schema: DataRepositoryAssociationNotFoundSchema } },
      },
      483: {
        description: 'InvalidDataRepositoryType',
        content: { 'application/json': { schema: InvalidDataRepositoryTypeSchema } },
      },
      484: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks',
    description:
      "<p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all tasks, you can paginate the response by using the optional <code>MaxResults</code> parameter to limit the number of tasks returned in a response. If more tasks remain, a <code>NextToken</code> value is returned in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p>",
    operationId: 'DescribeDataRepositoryTasks',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'],
              },
            },
          }),
      }),
      query: z.object({
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
      body: {
        content: { 'application/json': { schema: DescribeDataRepositoryTasksRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeDataRepositoryTasksResponseSchema } },
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
        description: 'DataRepositoryTaskNotFound',
        content: { 'application/json': { schema: DataRepositoryTaskNotFoundSchema } },
      },
      483: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches',
  description:
    "<p>Returns the description of a specific Amazon File Cache resource, if a <code>FileCacheIds</code> value is provided for that cache. Otherwise, it returns descriptions of all caches owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all cache descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more cache descriptions remain, the operation returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your cache descriptions. <code>DescribeFileCaches</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> cache descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of caches returned in the response of one <code>DescribeFileCaches</code> call and the order of caches returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>",
  operationId: 'DescribeFileCaches',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DescribeFileCaches')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DescribeFileCaches'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeFileCachesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFileCachesResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'FileCacheNotFound',
      content: { 'application/json': { schema: FileCacheNotFoundSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases',
  description:
    'Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a> provided in the <a>DescribeFileSystems</a> operation response.',
  operationId: 'DescribeFileSystemAliases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DescribeFileSystemAliases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'],
            },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeFileSystemAliasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFileSystemAliasesResponseSchema } },
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
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems',
  description:
    "<p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This operation is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>",
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
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DescribeFileSystems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DescribeFileSystems'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeFileSystemsRequestSchema } },
      required: true,
    },
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
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots',
  description:
    "<p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p> <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code> parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response. </p> <p>Use this operation in an iterative process to retrieve a list of your snapshots. <code>DescribeSnapshots</code> is called first without a <code>NextToken</code> value. Then the operation continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code> value.</p> <p>When using this operation, keep the following in mind:</p> <ul> <li> <p>The operation might return fewer than the <code>MaxResults</code> value of snapshot descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of snapshots returned in the response of one <code>DescribeSnapshots</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified. </p> </li> </ul>",
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
        .literal('AWSSimbaAPIService_v20180301.DescribeSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DescribeSnapshots'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSnapshotsResponseSchema } },
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
      description: 'SnapshotNotFound',
      content: { 'application/json': { schema: SnapshotNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines',
    description:
      'Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).',
    operationId: 'DescribeStorageVirtualMachines',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'],
              },
            },
          }),
      }),
      query: z.object({
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
      body: {
        content: { 'application/json': { schema: DescribeStorageVirtualMachinesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeStorageVirtualMachinesResponseSchema } },
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
        description: 'StorageVirtualMachineNotFound',
        content: { 'application/json': { schema: StorageVirtualMachineNotFoundSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes',
  description:
    'Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.',
  operationId: 'DescribeVolumes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.DescribeVolumes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.DescribeVolumes'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: DescribeVolumesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVolumesResponseSchema } },
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
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases',
    description:
      '<p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p> <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.</p>',
    operationId: 'DisassociateFileSystemAliases',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateFileSystemAliasesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateFileSystemAliasesResponseSchema } },
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
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource',
  description:
    '<p>Lists tags for Amazon FSx resources.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>',
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
        .literal('AWSSimbaAPIService_v20180301.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
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
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
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
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'NotServiceResourceError',
      content: { 'application/json': { schema: NotServiceResourceErrorSchema } },
    },
    484: {
      description: 'ResourceDoesNotSupportTagging',
      content: { 'application/json': { schema: ResourceDoesNotSupportTaggingSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks',
    description: 'Releases the file system lock from an Amazon FSx for OpenZFS file system.',
    operationId: 'ReleaseFileSystemNfsV3Locks',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ReleaseFileSystemNfsV3LocksRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ReleaseFileSystemNfsV3LocksResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      482: {
        description: 'FileSystemNotFound',
        content: { 'application/json': { schema: FileSystemNotFoundSchema } },
      },
      483: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      484: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot',
  description:
    'Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot.',
  operationId: 'RestoreVolumeFromSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreVolumeFromSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreVolumeFromSnapshotResponseSchema } },
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
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource',
  description: 'Tags an Amazon FSx resource.',
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
        .literal('AWSSimbaAPIService_v20180301.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.TagResource'] },
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
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'NotServiceResourceError',
      content: { 'application/json': { schema: NotServiceResourceErrorSchema } },
    },
    484: {
      description: 'ResourceDoesNotSupportTagging',
      content: { 'application/json': { schema: ResourceDoesNotSupportTaggingSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource',
  description: 'This action removes a tag from an Amazon FSx resource.',
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
        .literal('AWSSimbaAPIService_v20180301.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.UntagResource'] },
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
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    483: {
      description: 'NotServiceResourceError',
      content: { 'application/json': { schema: NotServiceResourceErrorSchema } },
    },
    484: {
      description: 'ResourceDoesNotSupportTagging',
      content: { 'application/json': { schema: ResourceDoesNotSupportTaggingSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation',
    description:
      'Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported for all file systems except for <code>Scratch_1</code> deployment type.',
    operationId: 'UpdateDataRepositoryAssociation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateDataRepositoryAssociationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateDataRepositoryAssociationResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      482: {
        description: 'DataRepositoryAssociationNotFound',
        content: { 'application/json': { schema: DataRepositoryAssociationNotFoundSchema } },
      },
      483: {
        description: 'ServiceLimitExceeded',
        content: { 'application/json': { schema: ServiceLimitExceededSchema } },
      },
      484: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache',
  description:
    'Updates the configuration of an existing Amazon File Cache resource. You can update multiple properties in a single request.',
  operationId: 'UpdateFileCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.UpdateFileCache')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.UpdateFileCache'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFileCacheRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFileCacheResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    482: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'FileCacheNotFound',
      content: { 'application/json': { schema: FileCacheNotFoundSchema } },
    },
    485: {
      description: 'MissingFileCacheConfiguration',
      content: { 'application/json': { schema: MissingFileCacheConfigurationSchema } },
    },
    486: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem',
  description:
    '<p>Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request.</p> <p>For FSx for Windows File Server file systems, you can update the following properties:</p> <ul> <li> <p> <code>AuditLogConfiguration</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>SelfManagedActiveDirectoryConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for Lustre file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DataCompressionType</code> </p> </li> <li> <p> <code>LustreRootSquashConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for ONTAP file systems, you can update the following properties:</p> <ul> <li> <p> <code>AddRouteTableIds</code> </p> </li> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>FsxAdminPassword</code> </p> </li> <li> <p> <code>RemoveRouteTableIds</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul> <p>For FSx for OpenZFS file systems, you can update the following properties:</p> <ul> <li> <p> <code>AutomaticBackupRetentionDays</code> </p> </li> <li> <p> <code>CopyTagsToBackups</code> </p> </li> <li> <p> <code>CopyTagsToVolumes</code> </p> </li> <li> <p> <code>DailyAutomaticBackupStartTime</code> </p> </li> <li> <p> <code>DiskIopsConfiguration</code> </p> </li> <li> <p> <code>StorageCapacity</code> </p> </li> <li> <p> <code>ThroughputCapacity</code> </p> </li> <li> <p> <code>WeeklyMaintenanceStartTime</code> </p> </li> </ul>',
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
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.UpdateFileSystem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.UpdateFileSystem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFileSystemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFileSystemResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'UnsupportedOperation',
      content: { 'application/json': { schema: UnsupportedOperationSchema } },
    },
    482: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    483: {
      description: 'InvalidNetworkSettings',
      content: { 'application/json': { schema: InvalidNetworkSettingsSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'FileSystemNotFound',
      content: { 'application/json': { schema: FileSystemNotFoundSchema } },
    },
    486: {
      description: 'MissingFileSystemConfiguration',
      content: { 'application/json': { schema: MissingFileSystemConfigurationSchema } },
    },
    487: {
      description: 'ServiceLimitExceeded',
      content: { 'application/json': { schema: ServiceLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot',
  description: 'Updates the name of an Amazon FSx for OpenZFS snapshot.',
  operationId: 'UpdateSnapshot',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.UpdateSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.UpdateSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSnapshotResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'SnapshotNotFound',
      content: { 'application/json': { schema: SnapshotNotFoundSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine',
    description: 'Updates an Amazon FSx for ONTAP storage virtual machine (SVM).',
    operationId: 'UpdateStorageVirtualMachine',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateStorageVirtualMachineRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateStorageVirtualMachineResponseSchema } },
      },
      480: {
        description: 'BadRequest',
        content: { 'application/json': { schema: BadRequestSchema } },
      },
      481: {
        description: 'IncompatibleParameterError',
        content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
      },
      482: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      483: {
        description: 'StorageVirtualMachineNotFound',
        content: { 'application/json': { schema: StorageVirtualMachineNotFoundSchema } },
      },
      484: {
        description: 'UnsupportedOperation',
        content: { 'application/json': { schema: UnsupportedOperationSchema } },
      },
    },
  })

export const postXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume',
  description:
    'Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.',
  operationId: 'UpdateVolume',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSimbaAPIService_v20180301.UpdateVolume')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSimbaAPIService_v20180301.UpdateVolume'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVolumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVolumeResponseSchema } },
    },
    480: {
      description: 'BadRequest',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    481: {
      description: 'IncompatibleParameterError',
      content: { 'application/json': { schema: IncompatibleParameterErrorSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'MissingVolumeConfiguration',
      content: { 'application/json': { schema: MissingVolumeConfigurationSchema } },
    },
    484: {
      description: 'VolumeNotFound',
      content: { 'application/json': { schema: VolumeNotFoundSchema } },
    },
  },
})
