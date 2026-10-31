import { createRoute, z } from '@hono/zod-openapi'

const S3BucketSchema = z
  .string()
  .regex(/^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z
  .string()
  .regex(/[\P{M}\p{M}]*/u)
  .max(1024)
  .openapi('S3Key')

const S3InputFileLocationSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'Specifies the S3 bucket for the customer input file.' }),
    ).exactOptional(),
    Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies the customer input Amazon S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p>',
    required: [],
  })
  .openapi('S3InputFileLocation')

const EfsFileSystemIdSchema = z
  .string()
  .regex(
    /^(arn:aws[-a-z]*:elasticfilesystem:[0-9a-z-:]+:(access-point\/fsap|file-system\/fs)-[0-9a-f]{8,40}|fs(ap)?-[0-9a-f]{8,40})$/,
  )
  .max(128)
  .openapi('EfsFileSystemId')

const EfsPathSchema = z
  .string()
  .regex(/^[^\x00]+$/)
  .min(1)
  .max(65536)
  .openapi('EfsPath')

const EfsFileLocationSchema = z
  .object({
    FileSystemId: EfsFileSystemIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the file system, assigned by Amazon EFS.' }),
    ).exactOptional(),
    Path: EfsPathSchema.and(
      z.any().openapi({ description: 'The pathname for the folder being used by a workflow.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.</p> <p> </p>",
    required: [],
  })
  .openapi('EfsFileLocation')

type InputFileLocationType = {
  S3FileLocation?: z.infer<typeof S3InputFileLocationSchema> & { [key: string]: unknown }
  EfsFileLocation?: z.infer<typeof EfsFileLocationSchema> & { [key: string]: unknown }
}

const WorkflowIdSchema = z
  .string()
  .regex(/^w-([a-z0-9]{17})$/)
  .length(19)
  .openapi('WorkflowId')

const RoleSchema = z
  .string()
  .regex(/arn:.*role\/.*/)
  .min(20)
  .max(2048)
  .openapi('Role')

const WorkflowDetailSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
    ExecutionRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources',
        }),
    ),
  })
  .openapi({
    required: ['WorkflowId', 'ExecutionRole'],
    description:
      "<p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p>",
  })
  .openapi('WorkflowDetail')

const OnUploadWorkflowDetailsSchema = z
  .array(WorkflowDetailSchema)
  .max(1)
  .openapi('OnUploadWorkflowDetails')

const OnPartialUploadWorkflowDetailsSchema = z
  .array(WorkflowDetailSchema)
  .max(1)
  .openapi('OnPartialUploadWorkflowDetails')

type WorkflowDetailsType = {
  OnUpload?: z.infer<typeof OnUploadWorkflowDetailsSchema> & { [key: string]: unknown }
  OnPartialUpload?: z.infer<typeof OnPartialUploadWorkflowDetailsSchema> & {
    [key: string]: unknown
  }
}

const S3VersionIdSchema = z.string().regex(/^.+$/).min(1).max(1024).openapi('S3VersionId')

const S3EtagSchema = z.string().regex(/^.+$/).min(1).max(65536).openapi('S3Etag')

const S3FileLocationSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the S3 bucket that contains the file being used.' }),
    ).exactOptional(),
    Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.',
        }),
    ).exactOptional(),
    VersionId: S3VersionIdSchema.and(
      z.any().openapi({ description: 'Specifies the file version.' }),
    ).exactOptional(),
    Etag: S3EtagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.",
    required: [],
  })
  .openapi('S3FileLocation')

type FileLocationType = {
  S3FileLocation?: z.infer<typeof S3FileLocationSchema> & { [key: string]: unknown }
  EfsFileLocation?: z.infer<typeof EfsFileLocationSchema> & { [key: string]: unknown }
}

const ServerIdSchema = z
  .string()
  .regex(/^s-([0-9a-f]{17})$/)
  .length(19)
  .openapi('ServerId')

const ExternalIdSchema = z
  .string()
  .regex(/^S-1-[\d-]+$/)
  .min(1)
  .max(256)
  .openapi('ExternalId')

const CreateAccessResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the server that the user is attached to.' }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external identifier of the group whose users have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'ExternalId'] })
  .openapi('CreateAccessResponse')

const HomeDirectorySchema = z
  .string()
  .regex(/^$|\/.*/)
  .max(1024)
  .openapi('HomeDirectory')

const HomeDirectoryTypeSchema = z.enum(['PATH', 'LOGICAL']).openapi('HomeDirectoryType')

const MapEntrySchema = z.string().regex(/^\/.*/).max(1024).openapi('MapEntry')

const MapTargetSchema = z.string().regex(/^\/.*/).max(1024).openapi('MapTarget')

const HomeDirectoryMapEntrySchema = z
  .object({
    Entry: MapEntrySchema.and(
      z
        .any()
        .openapi({ description: 'Represents an entry for <code>HomeDirectoryMappings</code>.' }),
    ),
    Target: MapTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the map target that is used in a <code>HomeDirectorymapEntry</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Entry', 'Target'],
    description:
      '<p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>',
  })
  .openapi('HomeDirectoryMapEntry')

const HomeDirectoryMappingsSchema = z
  .array(HomeDirectoryMapEntrySchema)
  .min(1)
  .max(50)
  .openapi('HomeDirectoryMappings')

const PolicySchema = z.string().max(2048).openapi('Policy')

const PosixIdSchema = z.int().min(0).max(4294967295).openapi('PosixId')

const SecondaryGidsSchema = z.array(PosixIdSchema).min(0).max(16).openapi('SecondaryGids')

const PosixProfileSchema = z
  .object({
    Uid: PosixIdSchema.and(
      z
        .any()
        .openapi({ description: 'The POSIX user ID used for all EFS operations by this user.' }),
    ),
    Gid: PosixIdSchema.and(
      z
        .any()
        .openapi({ description: 'The POSIX group ID used for all EFS operations by this user.' }),
    ),
    SecondaryGids: SecondaryGidsSchema.and(
      z
        .any()
        .openapi({
          description: 'The secondary POSIX group IDs used for all EFS operations by this user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uid', 'Gid'],
    description:
      "The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.",
  })
  .openapi('PosixProfile')

const CreateAccessRequestSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p> <p> <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <p>In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to <code>/</code> and set <code>Target</code> to the <code>HomeDirectory</code> parameter value.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>',
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user\'s access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p> <note> <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p> <p>For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p> <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example session policy</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Security Token Service API Reference</i>.</p> </note>',
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.',
        }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ),
  })
  .openapi({ required: ['Role', 'ServerId', 'ExternalId'], title: 'CreateAccessRequest' })
  .openapi('CreateAccessRequest')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const InternalServiceErrorSchema = z.any().openapi('InternalServiceError')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceExistsExceptionSchema = z.any().openapi('ResourceExistsException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AgreementIdSchema = z
  .string()
  .regex(/^a-([0-9a-f]{17})$/)
  .length(19)
  .openapi('AgreementId')

const CreateAgreementResponseSchema = z
  .object({
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the agreement. Use this ID for deleting, or updating an agreement, as well as in any other API calls that require that you specify the agreement ID.',
        }),
    ),
  })
  .openapi({ required: ['AgreementId'] })
  .openapi('CreateAgreementResponse')

const DescriptionSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi({ pattern: '^[\\p{Graph}]+' })
  .openapi('Description')

const ProfileIdSchema = z
  .string()
  .regex(/^p-([0-9a-f]{17})$/)
  .length(19)
  .openapi('ProfileId')

const AgreementStatusTypeSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('AgreementStatusType')

const TagKeySchema = z.string().max(128).openapi('TagKey')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'The name assigned to the tag that you create.' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains one or more values that you assigned to the key name you create.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).min(1).max(50).openapi('Tags')

const CreateAgreementRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A name or short description to identify the agreement. ' }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.',
        }),
    ),
    LocalProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the AS2 local profile.' }),
    ),
    PartnerProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the partner profile used in the agreement.',
        }),
    ),
    BaseDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for files transferred by using the AS2 protocol.</p> <p>A <code>BaseDirectory</code> example is <code>/DOC-EXAMPLE-BUCKET/home/mydirectory</code>.</p>',
        }),
    ),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ),
    Status: AgreementStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the agreement. The agreement can be either <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for agreements.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerId', 'LocalProfileId', 'PartnerProfileId', 'BaseDirectory', 'AccessRole'],
    title: 'CreateAgreementRequest',
  })
  .openapi('CreateAgreementRequest')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConnectorIdSchema = z
  .string()
  .regex(/^c-([0-9a-f]{17})$/)
  .length(19)
  .openapi('ConnectorId')

const CreateConnectorResponseSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the connector, returned after the API call succeeds.',
        }),
    ),
  })
  .openapi({ required: ['ConnectorId'] })
  .openapi('CreateConnectorResponse')

const UrlSchema = z.string().max(255).openapi('Url')

const MessageSubjectSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ pattern: '^[\\p{Print}\\p{Blank}]+' })
  .openapi('MessageSubject')

const CompressionEnumSchema = z.enum(['ZLIB', 'DISABLED']).openapi('CompressionEnum')

const EncryptionAlgSchema = z
  .enum(['AES128_CBC', 'AES192_CBC', 'AES256_CBC', 'NONE'])
  .openapi('EncryptionAlg')

const SigningAlgSchema = z
  .enum(['SHA256', 'SHA384', 'SHA512', 'SHA1', 'NONE'])
  .openapi('SigningAlg')

const MdnSigningAlgSchema = z
  .enum(['SHA256', 'SHA384', 'SHA512', 'SHA1', 'NONE', 'DEFAULT'])
  .openapi('MdnSigningAlg')

const MdnResponseSchema = z.enum(['SYNC', 'NONE']).openapi('MdnResponse')

const As2ConnectorConfigSchema = z
  .object({
    LocalProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the AS2 local profile.' }),
    ).exactOptional(),
    PartnerProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for the partner profile for the connector.' }),
    ).exactOptional(),
    MessageSubject: MessageSubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used as the <code>Subject</code> HTTP header attribute in AS2 messages that are being sent with the connector.',
        }),
    ).exactOptional(),
    Compression: CompressionEnumSchema.and(
      z.any().openapi({ description: 'Specifies whether the AS2 file is compressed.' }),
    ).exactOptional(),
    EncryptionAlgorithm: EncryptionAlgSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The algorithm that is used to encrypt the file.</p> <note> <p>You can only specify <code>NONE</code> if the URL for your connector uses HTTPS. This ensures that no traffic is sent in clear text.</p> </note>',
        }),
    ).exactOptional(),
    SigningAlgorithm: SigningAlgSchema.and(
      z
        .any()
        .openapi({
          description:
            'The algorithm that is used to sign the AS2 messages sent with the connector.',
        }),
    ).exactOptional(),
    MdnSigningAlgorithm: MdnSigningAlgSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The signing algorithm for the MDN response.</p> <note> <p>If set to DEFAULT (or not set at all), the value for <code>SigningAlgorithm</code> is used.</p> </note>',
        }),
    ).exactOptional(),
    MdnResponse: MdnResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Used for outbound requests (from an Transfer Family server to a partner AS2 server) to determine whether the partner response for transfers is synchronous or asynchronous. Specify either of the following values:</p> <ul> <li> <p> <code>SYNC</code>: The system expects a synchronous MDN response, confirming that the file was transferred successfully (or not).</p> </li> <li> <p> <code>NONE</code>: Specifies that no MDN response is required.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the details for a connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner.',
    required: [],
  })
  .openapi('As2ConnectorConfig')

const CreateConnectorRequestSchema = z
  .object({
    Url: UrlSchema.and(z.any().openapi({ description: "The URL of the partner's AS2 endpoint." })),
    As2Config: As2ConnectorConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains the parameters for a connector object.',
        }),
    ),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Url', 'As2Config', 'AccessRole'], title: 'CreateConnectorRequest' })
  .openapi('CreateConnectorRequest')

const CreateProfileResponseSchema = z
  .object({
    ProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the AS2 profile, returned after the API call succeeds.',
        }),
    ),
  })
  .openapi({ required: ['ProfileId'] })
  .openapi('CreateProfileResponse')

const As2IdSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ pattern: '^[\\p{Print}\\s]*' })
  .openapi('As2Id')

const ProfileTypeSchema = z.enum(['LOCAL', 'PARTNER']).openapi('ProfileType')

const CertificateIdSchema = z
  .string()
  .regex(/^cert-([0-9a-f]{17})$/)
  .length(22)
  .openapi('CertificateId')

const CertificateIdsSchema = z.array(CertificateIdSchema).openapi('CertificateIds')

const CreateProfileRequestSchema = z
  .object({
    As2Id: As2IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.',
        }),
    ),
    ProfileType: ProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the type of profile to create:</p> <ul> <li> <p>Specify <code>LOCAL</code> to create a local profile. A local profile represents the AS2-enabled Transfer Family server organization or party.</p> </li> <li> <p>Specify <code>PARTNER</code> to create a partner profile. A partner profile represents a remote organization, external to Transfer Family.</p> </li> </ul>',
        }),
    ),
    CertificateIds: CertificateIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for AS2 profiles.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['As2Id', 'ProfileType'], title: 'CreateProfileRequest' })
  .openapi('CreateProfileRequest')

const CreateServerResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'The service-assigned identifier of the server that is created.' }),
    ),
  })
  .openapi({ required: ['ServerId'] })
  .openapi('CreateServerResponse')

const CertificateSchema = z.string().max(1600).openapi('Certificate')

const DomainSchema = z.enum(['S3', 'EFS']).openapi('Domain')

const AddressAllocationIdSchema = z.string().openapi('AddressAllocationId')

const AddressAllocationIdsSchema = z
  .array(AddressAllocationIdSchema)
  .openapi('AddressAllocationIds')

const SubnetIdSchema = z.string().openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).openapi('SubnetIds')

const VpcEndpointIdSchema = z
  .string()
  .regex(/^vpce-[0-9a-f]{17}$/)
  .length(22)
  .openapi('VpcEndpointId')

const VpcIdSchema = z.string().openapi('VpcId')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^sg-[0-9a-f]{8,17}$/)
  .min(11)
  .max(20)
  .openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z.array(SecurityGroupIdSchema).openapi('SecurityGroupIds')

const EndpointDetailsSchema = z
  .object({
    AddressAllocationIds: AddressAllocationIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of address allocation IDs that are required to attach an Elastic IP address to your server's endpoint.</p> <note> <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code> and it is only valid in the <code>UpdateServer</code> API.</p> </note>",
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of subnet IDs that are required to host your server endpoint in your VPC.</p> <note> <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code>.</p> </note>',
        }),
    ).exactOptional(),
    VpcEndpointId: VpcEndpointIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the VPC endpoint.</p> <note> <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC_ENDPOINT</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The VPC identifier of the VPC in which a server's endpoint will be hosted.</p> <note> <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code>.</p> </note>",
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of security groups IDs that are available to attach to your server\'s endpoint.</p> <note> <p>This property can only be set when <code>EndpointType</code> is set to <code>VPC</code>.</p> <p>You can edit the <code>SecurityGroupIds</code> property in the <a href="https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html">UpdateServer</a> API only if you are changing the <code>EndpointType</code> from <code>PUBLIC</code> or <code>VPC_ENDPOINT</code> to <code>VPC</code>. To change security groups associated with your server\'s VPC endpoint after creation, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html">ModifyVpcEndpoint</a> API.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>",
    required: [],
  })
  .openapi('EndpointDetails')

const EndpointTypeSchema = z.enum(['PUBLIC', 'VPC', 'VPC_ENDPOINT']).openapi('EndpointType')

const HostKeySchema = z.string().max(4096).openapi('HostKey')

const DirectoryIdSchema = z
  .string()
  .regex(/^d-[0-9a-f]{10}$/)
  .length(12)
  .openapi('DirectoryId')

const FunctionSchema = z
  .string()
  .regex(/^arn:[a-z-]+:lambda:.*$/)
  .min(1)
  .max(170)
  .openapi('Function')

const IdentityProviderDetailsSchema = z
  .object({
    Url: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the location of the service endpoint used to authenticate users.',
        }),
    ).exactOptional(),
    InvocationRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the type of <code>InvocationRole</code> used to authenticate the user account.',
        }),
    ).exactOptional(),
    DirectoryId: DirectoryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Directory Service directory that you want to stop sharing.',
        }),
    ).exactOptional(),
    Function: FunctionSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN for a lambda function to use for the Identity provider.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.",
    required: [],
  })
  .openapi('IdentityProviderDetails')

const IdentityProviderTypeSchema = z
  .enum(['SERVICE_MANAGED', 'API_GATEWAY', 'AWS_DIRECTORY_SERVICE', 'AWS_LAMBDA'])
  .openapi({
    description:
      "Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication.",
  })
  .openapi('IdentityProviderType')

const PostAuthenticationLoginBannerSchema = z
  .string()
  .regex(/[\x09-\x0D\x20-\x7E]*/)
  .max(512)
  .openapi('PostAuthenticationLoginBanner')

const PreAuthenticationLoginBannerSchema = z
  .string()
  .regex(/[\x09-\x0D\x20-\x7E]*/)
  .max(512)
  .openapi('PreAuthenticationLoginBanner')

const ProtocolSchema = z.enum(['SFTP', 'FTP', 'FTPS', 'AS2']).openapi('Protocol')

const ProtocolsSchema = z.array(ProtocolSchema).min(1).max(4).openapi('Protocols')

const PassiveIpSchema = z.string().max(15).openapi('PassiveIp')

const TlsSessionResumptionModeSchema = z
  .enum(['DISABLED', 'ENABLED', 'ENFORCED'])
  .openapi('TlsSessionResumptionMode')

const SetStatOptionSchema = z.enum(['DEFAULT', 'ENABLE_NO_OP']).openapi('SetStatOption')

const As2TransportSchema = z.literal('HTTP').openapi('As2Transport')

const As2TransportsSchema = z.array(As2TransportSchema).length(1).openapi('As2Transports')

const ProtocolDetailsSchema = z
  .object({
    PassiveIp: PassiveIpSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Indicates passive mode, for FTP and FTPS protocols. Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer. For example: </p> <p> <code>aws transfer update-server --protocol-details PassiveIp=0.0.0.0</code> </p> <p>Replace <code>0.0.0.0</code> in the example above with the actual IP address you want to use.</p> <note> <p> If you change the <code>PassiveIp</code> value, you must stop and then restart your Transfer Family server for the change to take effect. For details on using passive mode (PASV) in a NAT environment, see <a href="http://aws.amazon.com/blogs/storage/configuring-your-ftps-server-behind-a-firewall-or-nat-with-aws-transfer-family/">Configuring your FTPS server behind a firewall or NAT with Transfer Family</a>. </p> </note> <p> <i>Special values</i> </p> <p>The <code>AUTO</code> and <code>0.0.0.0</code> are special values for the <code>PassiveIp</code> parameter. The value <code>PassiveIp=AUTO</code> is assigned by default to FTP and FTPS type servers. In this case, the server automatically responds with one of the endpoint IPs within the PASV response. <code>PassiveIp=0.0.0.0</code> has a more unique application for its usage. For example, if you have a High Availability (HA) Network Load Balancer (NLB) environment, where you have 3 subnets, you can only specify a single IP address using the <code>PassiveIp</code> parameter. This reduces the effectiveness of having High Availability. In this case, you can specify <code>PassiveIp=0.0.0.0</code>. This tells the client to use the same IP address as the Control connection and utilize all AZs for their connections. Note, however, that not all FTP clients support the <code>PassiveIp=0.0.0.0</code> response. FileZilla and WinSCP do support it. If you are using other clients, check to see if your client supports the <code>PassiveIp=0.0.0.0</code> response.</p>',
        }),
    ).exactOptional(),
    TlsSessionResumptionMode: TlsSessionResumptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A property used with Transfer Family servers that use the FTPS protocol. TLS Session Resumption provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. <code>TlsSessionResumptionMode</code> determines whether or not the server resumes recent, negotiated sessions through a unique session ID. This property is available during <code>CreateServer</code> and <code>UpdateServer</code> calls. If a <code>TlsSessionResumptionMode</code> value is not specified during <code>CreateServer</code>, it is set to <code>ENFORCED</code> by default.</p> <ul> <li> <p> <code>DISABLED</code>: the server does not process TLS session resumption client requests and creates a new TLS session for each request. </p> </li> <li> <p> <code>ENABLED</code>: the server processes and accepts clients that are performing TLS session resumption. The server doesn't reject client data connections that do not perform the TLS session resumption client processing.</p> </li> <li> <p> <code>ENFORCED</code>: the server processes and accepts clients that are performing TLS session resumption. The server rejects client data connections that do not perform the TLS session resumption client processing. Before you set the value to <code>ENFORCED</code>, test your clients.</p> <note> <p>Not all FTPS clients perform TLS session resumption. So, if you choose to enforce TLS session resumption, you prevent any connections from FTPS clients that don't perform the protocol negotiation. To determine whether or not you can use the <code>ENFORCED</code> value, you need to test your clients.</p> </note> </li> </ul>",
        }),
    ).exactOptional(),
    SetStatOption: SetStatOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use the <code>SetStatOption</code> to ignore the error that is generated when the client attempts to use <code>SETSTAT</code> on a file you are uploading to an S3 bucket.</p> <p>Some SFTP file transfer clients can attempt to change the attributes of remote files, including timestamp and permissions, using commands, such as <code>SETSTAT</code> when uploading the file. However, these commands are not compatible with object storage systems, such as Amazon S3. Due to this incompatibility, file uploads from these clients can result in errors even when the file is otherwise successfully uploaded.</p> <p>Set the value to <code>ENABLE_NO_OP</code> to have the Transfer Family server ignore the <code>SETSTAT</code> command, and upload files without needing to make any changes to your SFTP client. While the <code>SetStatOption</code> <code>ENABLE_NO_OP</code> setting ignores the error, it does generate a log entry in Amazon CloudWatch Logs, so you can determine when the client is making a <code>SETSTAT</code> call.</p> <note> <p>If you want to preserve the original timestamp for your file, and modify other file attributes using <code>SETSTAT</code>, you can use Amazon EFS as backend storage with Transfer Family.</p> </note>',
        }),
    ).exactOptional(),
    As2Transports: As2TransportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the transport method for the AS2 messages. Currently, only HTTP is supported.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The protocol settings that are configured for your server. ',
    required: [],
  })
  .openapi('ProtocolDetails')

const SecurityPolicyNameSchema = z
  .string()
  .regex(/TransferSecurityPolicy-.+/)
  .max(100)
  .openapi('SecurityPolicyName')

const WorkflowDetailsSchema: z.ZodType<WorkflowDetailsType> = z
  .lazy(() =>
    z
      .object({
        OnUpload: OnUploadWorkflowDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.</p> <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p> <p> <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details \'{"OnUpload":[]}\'</code> </p>',
            }),
        ).exactOptional(),
        OnPartialUpload: OnPartialUploadWorkflowDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A trigger that starts a workflow if a file is only partially uploaded. You can attach a workflow to a server that executes whenever there is a partial upload.</p> <p>A <i>partial upload</i> occurs when a file is open when the session disconnects.</p>',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.',
        required: [],
      }),
  )
  .openapi('WorkflowDetails')

const CreateServerRequestSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate. Required when <code>Protocols</code> is set to <code>FTPS</code>.</p> <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a> in the <i>Certificate Manager User Guide</i>.</p> <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a> in the <i>Certificate Manager User Guide</i>.</p> <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a private certificate</a> in the <i>Certificate Manager User Guide</i>.</p> <p>Certificates with the following cryptographic algorithms and key sizes are supported:</p> <ul> <li> <p>2048-bit RSA (RSA_2048)</p> </li> <li> <p>4096-bit RSA (RSA_4096)</p> </li> <li> <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p> </li> <li> <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p> </li> <li> <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p> </li> </ul> <note> <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.</p> </note>',
        }),
    ).exactOptional(),
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.</p> <note> <p>After the server is created, the domain cannot be changed.</p> </note>',
        }),
    ).exactOptional(),
    EndpointDetails: EndpointDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.",
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p> </note>",
        }),
    ).exactOptional(),
    HostKey: HostKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms.</p> <p>Use the following command to generate an RSA 2048 bit key with no passphrase:</p> <p> <code>ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key</code>.</p> <p>Use a minimum value of 2048 for the <code>-b</code> option. You can create a stronger key by using 3072 or 4096.</p> <p>Use the following command to generate an ECDSA 256 bit key with no passphrase:</p> <p> <code>ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key</code>.</p> <p>Valid values for the <code>-b</code> option for ECDSA are 256, 384, and 521.</p> <p>Use the following command to generate an ED25519 key with no passphrase:</p> <p> <code>ssh-keygen -t ed25519 -N "" -f my-new-server-key</code>.</p> <p>For all of these commands, you can replace <i>my-new-server-key</i> with a string of your choice.</p> <important> <p>If you aren\'t planning to migrate existing users from an existing SFTP-enabled server to a new server, don\'t update the host key. Accidentally changing a server\'s host key can be disruptive.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Manage host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>',
        }),
    ).exactOptional(),
    IdentityProviderDetails: IdentityProviderDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required when <code>IdentityProviderType</code> is set to <code>AWS_DIRECTORY_SERVICE</code> or <code>API_GATEWAY</code>. Accepts an array containing all of the information required to use a directory in <code>AWS_DIRECTORY_SERVICE</code> or invoke a customer-supplied authentication API, including the API Gateway URL. Not required when <code>IdentityProviderType</code> is set to <code>SERVICE_MANAGED</code>.',
        }),
    ).exactOptional(),
    IdentityProviderType: IdentityProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The mode of authentication for a server. The default value is <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within the Transfer Family service.</p> <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter or the <code>IdentityProviderDetails</code> data type.</p>',
        }),
    ).exactOptional(),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    PostAuthenticationLoginBanner: PostAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p> <note> <p>The SFTP protocol does not support post-authentication display banners.</p> </note>',
        }),
    ).exactOptional(),
    PreAuthenticationLoginBanner: PreAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:</p> <p> <code>This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.</code> </p>',
        }),
    ).exactOptional(),
    Protocols: ProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:</p> <ul> <li> <p> <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH</p> </li> <li> <p> <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS encryption</p> </li> <li> <p> <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p> </li> <li> <p> <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p> </li> </ul> <note> <ul> <li> <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.</p> </li> <li> <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the <code>EndpointType</code> must be <code>VPC</code> and the <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>FTP</code>, then <code>AddressAllocationIds</code> cannot be associated.</p> </li> <li> <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code> can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types: <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>AS2</code>, then the <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    ProtocolDetails: ProtocolDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol settings that are configured for your server.</p> <ul> <li> <p> To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer. </p> </li> <li> <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code> call.</p> </li> <li> <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the <code>TlsSessionResumptionMode</code> parameter.</p> </li> <li> <p> <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SecurityPolicyName: SecurityPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for servers.',
        }),
    ).exactOptional(),
    WorkflowDetails: WorkflowDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateServerRequest', required: [] })
  .openapi('CreateServerRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const UserNameSchema = z
  .string()
  .regex(/^[\w][\w@.-]{2,99}$/)
  .min(3)
  .max(100)
  .openapi('UserName')

const CreateUserResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the server that the user is attached to.' }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that identifies a user account associated with a server.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'UserName'] })
  .openapi('CreateUserResponse')

const SshPublicKeyBodySchema = z.string().max(2048).openapi('SshPublicKeyBody')

const CreateUserRequestSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p> <p> <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <p>In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to <code>/</code> and set <code>Target</code> to the HomeDirectory parameter value.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>',
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user\'s access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p> <note> <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p> <p>For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p> <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example session policy</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services Security Token Service API Reference</i>.</p> </note>',
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in Amazon EFS determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.',
        }),
    ),
    SshPublicKeyBody: SshPublicKeyBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The public portion of the Secure Shell (SSH) key used to authenticate the user to the server.</p> <p>The three standard SSH public key format elements are <code>&lt;key type&gt;</code>, <code>&lt;body base64&gt;</code>, and an optional <code>&lt;comment&gt;</code>, with spaces between each element.</p> <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p> <ul> <li> <p>For RSA keys, the key type is <code>ssh-rsa</code>.</p> </li> <li> <p>For ED25519 keys, the key type is <code>ssh-ed25519</code>.</p> </li> <li> <p>For ECDSA keys, the key type is either <code>ecdsa-sha2-nistp256</code>, <code>ecdsa-sha2-nistp384</code>, or <code>ecdsa-sha2-nistp521</code>, depending on the size of the key you generated.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.',
        }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique string that identifies a user and is associated with a <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.",
        }),
    ),
  })
  .openapi({ required: ['Role', 'ServerId', 'UserName'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const CreateWorkflowResponseSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
  })
  .openapi({ required: ['WorkflowId'] })
  .openapi('CreateWorkflowResponse')

const WorkflowDescriptionSchema = z
  .string()
  .regex(/^[\w- ]*$/)
  .max(256)
  .openapi('WorkflowDescription')

const WorkflowStepTypeSchema = z
  .enum(['COPY', 'CUSTOM', 'TAG', 'DELETE', 'DECRYPT'])
  .openapi('WorkflowStepType')

const WorkflowStepNameSchema = z
  .string()
  .regex(/^[\w-]*$/)
  .max(30)
  .openapi('WorkflowStepName')

const InputFileLocationSchema: z.ZodType<InputFileLocationType> = z
  .lazy(() =>
    z
      .object({
        S3FileLocation: S3InputFileLocationSchema.and(
          z
            .any()
            .openapi({
              description:
                "Specifies the details for the Amazon S3 file that's being copied or decrypted.",
            }),
        ).exactOptional(),
        EfsFileLocation: EfsFileLocationSchema.and(
          z
            .any()
            .openapi({
              description:
                "Specifies the details for the Amazon Elastic File System (Amazon EFS) file that's being decrypted.",
            }),
        ).exactOptional(),
      })
      .openapi({
        description: "Specifies the location for the file that's being processed.",
        required: [],
      }),
  )
  .openapi('InputFileLocation')

const OverwriteExistingSchema = z.enum(['TRUE', 'FALSE']).openapi('OverwriteExisting')

const SourceFileLocationSchema = z
  .string()
  .regex(/^\$\{(\w+.)+\w+\}$/)
  .max(256)
  .openapi('SourceFileLocation')

const CopyStepDetailsSchema = z
  .object({
    Name: WorkflowStepNameSchema.and(
      z.any().openapi({ description: 'The name of the step, used as an identifier.' }),
    ).exactOptional(),
    DestinationFileLocation: InputFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the location for the file being copied. Use <code>${Transfer:username}</code> or <code>${Transfer:UploadDate}</code> in this field to parametrize the destination prefix by username or uploaded date.</p> <ul> <li> <p>Set the value of <code>DestinationFileLocation</code> to <code>${Transfer:username}</code> to copy uploaded files to an Amazon S3 bucket that is prefixed with the name of the Transfer Family user that uploaded the file.</p> </li> <li> <p>Set the value of <code>DestinationFileLocation</code> to <code>${Transfer:UploadDate}</code> to copy uploaded files to an Amazon S3 bucket that is prefixed with the date of the upload.</p> <note> <p>The system resolves <code>UploadDate</code> to a date format of <i>YYYY-MM-DD</i>, based on the date the file is uploaded.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
    OverwriteExisting: OverwriteExistingSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether to overwrite an existing file of the same name. The default is <code>FALSE</code>.',
        }),
    ).exactOptional(),
    SourceFileLocation: SourceFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.</p> <ul> <li> <p>To use the previous file as the input, enter <code>${previous.file}</code>. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.</p> </li> <li> <p>To use the originally uploaded file location as input for this step, enter <code>${original.file}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Each step type has its own <code>StepDetails</code> structure.',
    required: [],
  })
  .openapi('CopyStepDetails')

const CustomStepTargetSchema = z
  .string()
  .regex(/arn:[a-z-]+:lambda:.*$/)
  .max(170)
  .openapi('CustomStepTarget')

const CustomStepTimeoutSecondsSchema = z.int().min(1).max(1800).openapi('CustomStepTimeoutSeconds')

const CustomStepDetailsSchema = z
  .object({
    Name: WorkflowStepNameSchema.and(
      z.any().openapi({ description: 'The name of the step, used as an identifier.' }),
    ).exactOptional(),
    Target: CustomStepTargetSchema.and(
      z.any().openapi({ description: 'The ARN for the lambda function that is being called.' }),
    ).exactOptional(),
    TimeoutSeconds: CustomStepTimeoutSecondsSchema.and(
      z.any().openapi({ description: 'Timeout, in seconds, for the step.' }),
    ).exactOptional(),
    SourceFileLocation: SourceFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.</p> <ul> <li> <p>To use the previous file as the input, enter <code>${previous.file}</code>. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.</p> </li> <li> <p>To use the originally uploaded file location as input for this step, enter <code>${original.file}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Each step type has its own <code>StepDetails</code> structure.',
    required: [],
  })
  .openapi('CustomStepDetails')

const DeleteStepDetailsSchema = z
  .object({
    Name: WorkflowStepNameSchema.and(
      z.any().openapi({ description: 'The name of the step, used as an identifier.' }),
    ).exactOptional(),
    SourceFileLocation: SourceFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.</p> <ul> <li> <p>To use the previous file as the input, enter <code>${previous.file}</code>. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.</p> </li> <li> <p>To use the originally uploaded file location as input for this step, enter <code>${original.file}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The name of the step, used to identify the delete step.', required: [] })
  .openapi('DeleteStepDetails')

const S3TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('S3TagKey')

const S3TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('S3TagValue')

const S3TagSchema = z
  .object({
    Key: S3TagKeySchema.and(
      z.any().openapi({ description: 'The name assigned to the tag that you create.' }),
    ),
    Value: S3TagValueSchema.and(
      z.any().openapi({ description: 'The value that corresponds to the key.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.',
  })
  .openapi('S3Tag')

const S3TagsSchema = z.array(S3TagSchema).min(1).max(10).openapi('S3Tags')

const TagStepDetailsSchema = z
  .object({
    Name: WorkflowStepNameSchema.and(
      z.any().openapi({ description: 'The name of the step, used as an identifier.' }),
    ).exactOptional(),
    Tags: S3TagsSchema.and(
      z.any().openapi({ description: 'Array that contains from 1 to 10 key/value pairs.' }),
    ).exactOptional(),
    SourceFileLocation: SourceFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.</p> <ul> <li> <p>To use the previous file as the input, enter <code>${previous.file}</code>. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.</p> </li> <li> <p>To use the originally uploaded file location as input for this step, enter <code>${original.file}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>',
    required: [],
  })
  .openapi('TagStepDetails')

const EncryptionTypeSchema = z.literal('PGP').openapi('EncryptionType')

const DecryptStepDetailsSchema = z
  .object({
    Name: WorkflowStepNameSchema.and(
      z.any().openapi({ description: 'The name of the step, used as an identifier.' }),
    ).exactOptional(),
    Type: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of encryption used. Currently, this value must be <code>PGP</code>.',
        }),
    ),
    SourceFileLocation: SourceFileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.</p> <ul> <li> <p>To use the previous file as the input, enter <code>${previous.file}</code>. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.</p> </li> <li> <p>To use the originally uploaded file location as input for this step, enter <code>${original.file}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OverwriteExisting: OverwriteExistingSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that indicates whether to overwrite an existing file of the same name. The default is <code>FALSE</code>.',
        }),
    ).exactOptional(),
    DestinationFileLocation: InputFileLocationSchema,
  })
  .openapi({
    required: ['Type', 'DestinationFileLocation'],
    description: 'Each step type has its own <code>StepDetails</code> structure.',
  })
  .openapi('DecryptStepDetails')

const WorkflowStepSchema = z
  .object({
    Type: WorkflowStepTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Currently, the following step types are supported. </p> <ul> <li> <p> <b> <code>COPY</code> </b> - Copy the file to another location.</p> </li> <li> <p> <b> <code>CUSTOM</code> </b> - Perform a custom step with an Lambda function target.</p> </li> <li> <p> <b> <code>DECRYPT</code> </b> - Decrypt a file that was encrypted before it was uploaded.</p> </li> <li> <p> <b> <code>DELETE</code> </b> - Delete the file.</p> </li> <li> <p> <b> <code>TAG</code> </b> - Add a tag to the file.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CopyStepDetails: CopyStepDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details for a step that performs a file copy.</p> <p> Consists of the following values: </p> <ul> <li> <p>A description</p> </li> <li> <p>An Amazon S3 location for the destination of the file copy.</p> </li> <li> <p>A flag that indicates whether to overwrite an existing file of the same name. The default is <code>FALSE</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CustomStepDetails: CustomStepDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Details for a step that invokes an Lambda function.</p> <p>Consists of the Lambda function's name, target, and timeout (in seconds). </p>",
        }),
    ).exactOptional(),
    DeleteStepDetails: DeleteStepDetailsSchema.and(
      z.any().openapi({ description: 'Details for a step that deletes the file.' }),
    ).exactOptional(),
    TagStepDetails: TagStepDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details for a step that creates one or more tags.</p> <p>You specify one or more tags. Each tag contains a key-value pair.</p>',
        }),
    ).exactOptional(),
    DecryptStepDetails: DecryptStepDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Details for a step that decrypts an encrypted file.</p> <p>Consists of the following values:</p> <ul> <li> <p>A descriptive name</p> </li> <li> <p>An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to decrypt.</p> </li> <li> <p>An S3 or Amazon EFS location for the destination of the file decryption.</p> </li> <li> <p>A flag that indicates whether to overwrite an existing file of the same name. The default is <code>FALSE</code>.</p> </li> <li> <p>The type of encryption that's used. Currently, only PGP encryption is supported.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The basic building block of a workflow.', required: [] })
  .openapi('WorkflowStep')

const WorkflowStepsSchema = z.array(WorkflowStepSchema).max(8).openapi('WorkflowSteps')

const CreateWorkflowRequestSchema = z
  .object({
    Description: WorkflowDescriptionSchema.and(
      z.any().openapi({ description: 'A textual description for the workflow.' }),
    ).exactOptional(),
    Steps: WorkflowStepsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the details for the steps that are in the specified workflow.</p> <p> The <code>TYPE</code> specifies which of the following actions is being taken for this step. </p> <ul> <li> <p> <b> <code>COPY</code> </b> - Copy the file to another location.</p> </li> <li> <p> <b> <code>CUSTOM</code> </b> - Perform a custom step with an Lambda function target.</p> </li> <li> <p> <b> <code>DECRYPT</code> </b> - Decrypt a file that was encrypted before it was uploaded.</p> </li> <li> <p> <b> <code>DELETE</code> </b> - Delete the file.</p> </li> <li> <p> <b> <code>TAG</code> </b> - Add a tag to the file.</p> </li> </ul> <note> <p> Currently, copying and tagging are supported only on S3. </p> </note> <p> For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID and path. </p>',
        }),
    ),
    OnExceptionSteps: WorkflowStepsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</p> <note> <p>For custom steps, the lambda function needs to send <code>FAILURE</code> to the call back API to kick off the exception steps. Additionally, if the lambda does not send <code>SUCCESS</code> before it times out, the exception steps are executed.</p> </note>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Steps'], title: 'CreateWorkflowRequest' })
  .openapi('CreateWorkflowRequest')

const DeleteAccessRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has this user assigned.',
        }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'ExternalId'], title: 'DeleteAccessRequest' })
  .openapi('DeleteAccessRequest')

const DeleteAgreementRequestSchema = z
  .object({
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The server identifier associated with the agreement that you are deleting.',
        }),
    ),
  })
  .openapi({ required: ['AgreementId', 'ServerId'], title: 'DeleteAgreementRequest' })
  .openapi('DeleteAgreementRequest')

const DeleteCertificateRequestSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the certificate object that you are deleting.',
        }),
    ),
  })
  .openapi({ required: ['CertificateId'], title: 'DeleteCertificateRequest' })
  .openapi('DeleteCertificateRequest')

const DeleteConnectorRequestSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector.' }),
    ),
  })
  .openapi({ required: ['ConnectorId'], title: 'DeleteConnectorRequest' })
  .openapi('DeleteConnectorRequest')

const HostKeyIdSchema = z
  .string()
  .regex(/^hostkey-[0-9a-f]{17}$/)
  .length(25)
  .openapi('HostKeyId')

const DeleteHostKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the server that contains the host key that you are deleting.',
        }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the host key that you are deleting.' }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeyId'], title: 'DeleteHostKeyRequest' })
  .openapi('DeleteHostKeyRequest')

const DeleteProfileRequestSchema = z
  .object({
    ProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'The identifier of the profile that you are deleting.' }),
    ),
  })
  .openapi({ required: ['ProfileId'], title: 'DeleteProfileRequest' })
  .openapi('DeleteProfileRequest')

const DeleteServerRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'A unique system-assigned identifier for a server instance.' }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'DeleteServerRequest' })
  .openapi('DeleteServerRequest')

const SshPublicKeyIdSchema = z
  .string()
  .regex(/^key-[0-9a-f]{17}$/)
  .length(21)
  .openapi('SshPublicKeyId')

const DeleteSshPublicKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a file transfer protocol-enabled server instance that has the user assigned to it.',
        }),
    ),
    SshPublicKeyId: SshPublicKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: "A unique identifier used to reference your user's specific SSH key.",
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that identifies a user whose public key is being deleted.',
        }),
    ),
  })
  .openapi({
    required: ['ServerId', 'SshPublicKeyId', 'UserName'],
    title: 'DeleteSshPublicKeyRequest',
  })
  .openapi('DeleteSshPublicKeyRequest')

const DeleteUserRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance that has the user assigned to it.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies a user that is being deleted from a server.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'UserName'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const DeleteWorkflowRequestSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
  })
  .openapi({ required: ['WorkflowId'], title: 'DeleteWorkflowRequest' })
  .openapi('DeleteWorkflowRequest')

const DescribedAccessSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>In most cases, you can use this value instead of the session policy to lock down the associated access to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to \'/\' and set <code>Target</code> to the <code>HomeDirectory</code> parameter value.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.",
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ).exactOptional(),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the properties of the access that was specified.',
    required: [],
  })
  .openapi('DescribedAccess')

const DescribeAccessResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has this access assigned.',
        }),
    ),
    Access: DescribedAccessSchema.and(
      z
        .any()
        .openapi({
          description: 'The external identifier of the server that the access is attached to.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'Access'] })
  .openapi('DescribeAccessResponse')

const DescribeAccessRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has this access assigned.',
        }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'ExternalId'], title: 'DescribeAccessRequest' })
  .openapi('DescribeAccessRequest')

const ArnSchema = z
  .string()
  .regex(/arn:.*/)
  .min(20)
  .max(1600)
  .openapi('Arn')

const DescribedAgreementSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the agreement.' }),
    ),
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "The name or short description that's used to identify the agreement.",
        }),
    ).exactOptional(),
    Status: AgreementStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the agreement, either <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This identifier indicates the specific server that the agreement uses.',
        }),
    ).exactOptional(),
    LocalProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the AS2 local profile.' }),
    ).exactOptional(),
    PartnerProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the partner profile used in the agreement.',
        }),
    ).exactOptional(),
    BaseDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The landing directory (folder) for files that are transferred by using the AS2 protocol.',
        }),
    ).exactOptional(),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for agreements.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'Describes the properties of an agreement.' })
  .openapi('DescribedAgreement')

const DescribeAgreementResponseSchema = z
  .object({
    Agreement: DescribedAgreementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details for the specified agreement, returned as a <code>DescribedAgreement</code> object.',
        }),
    ),
  })
  .openapi({ required: ['Agreement'] })
  .openapi('DescribeAgreementResponse')

const DescribeAgreementRequestSchema = z
  .object({
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: "The server identifier that's associated with the agreement." }),
    ),
  })
  .openapi({ required: ['AgreementId', 'ServerId'], title: 'DescribeAgreementRequest' })
  .openapi('DescribeAgreementRequest')

const CertificateUsageTypeSchema = z.enum(['SIGNING', 'ENCRYPTION']).openapi('CertificateUsageType')

const CertificateStatusTypeSchema = z
  .enum(['ACTIVE', 'PENDING_ROTATION', 'INACTIVE'])
  .openapi('CertificateStatusType')

const CertificateBodyTypeSchema = z
  .string()
  .regex(/^[\u0009\u000A\u000D\u0020-\u00FF]*/)
  .min(1)
  .max(16384)
  .openapi('CertificateBodyType')

const CertificateChainTypeSchema = z
  .string()
  .regex(/^[\u0009\u000A\u000D\u0020-\u00FF]*/)
  .min(1)
  .max(2097152)
  .openapi('CertificateChainType')

const CertDateSchema = z.iso.datetime({ offset: true }).openapi('CertDate')

const CertSerialSchema = z
  .string()
  .min(0)
  .max(48)
  .openapi({ pattern: '^[\\p{XDigit}{2}:?]*' })
  .openapi('CertSerial')

const CertificateTypeSchema = z
  .enum(['CERTIFICATE', 'CERTIFICATE_WITH_PRIVATE_KEY'])
  .openapi('CertificateType')

const DescribedCertificateSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The unique Amazon Resource Name (ARN) for the certificate.' }),
    ),
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ).exactOptional(),
    Usage: CertificateUsageTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether this certificate is used for signing or encryption.',
        }),
    ).exactOptional(),
    Status: CertificateStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate can be either <code>ACTIVE</code>, <code>PENDING_ROTATION</code>, or <code>INACTIVE</code>. <code>PENDING_ROTATION</code> means that this certificate will replace the current certificate when it expires.',
        }),
    ).exactOptional(),
    Certificate: CertificateBodyTypeSchema.and(
      z.any().openapi({ description: 'The file name for the certificate.' }),
    ).exactOptional(),
    CertificateChain: CertificateChainTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of certificates that make up the chain for the certificate.',
        }),
    ).exactOptional(),
    ActiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes active.',
        }),
    ).exactOptional(),
    InactiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes inactive.',
        }),
    ).exactOptional(),
    Serial: CertSerialSchema.and(
      z.any().openapi({ description: 'The serial number for the certificate.' }),
    ).exactOptional(),
    NotBeforeDate: CertDateSchema.and(
      z.any().openapi({ description: 'The earliest date that the certificate is valid.' }),
    ).exactOptional(),
    NotAfterDate: CertDateSchema.and(
      z.any().openapi({ description: 'The final date that the certificate is valid.' }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a private key has been specified for the certificate, its type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is <code>CERTIFICATE</code>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "The name or description that's used to identity the certificate. ",
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'Describes the properties of a certificate.' })
  .openapi('DescribedCertificate')

const DescribeCertificateResponseSchema = z
  .object({
    Certificate: DescribedCertificateSchema.and(
      z
        .any()
        .openapi({
          description: 'The details for the specified certificate, returned as an object.',
        }),
    ),
  })
  .openapi({ required: ['Certificate'] })
  .openapi('DescribeCertificateResponse')

const DescribeCertificateRequestSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ),
  })
  .openapi({ required: ['CertificateId'], title: 'DescribeCertificateRequest' })
  .openapi('DescribeCertificateRequest')

const DescribedConnectorSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the connector.' }),
    ),
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector.' }),
    ).exactOptional(),
    Url: UrlSchema.and(
      z.any().openapi({ description: "The URL of the partner's AS2 endpoint." }),
    ).exactOptional(),
    As2Config: As2ConnectorConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains the parameters for a connector object.',
        }),
    ).exactOptional(),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ).exactOptional(),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for connectors.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description:
      'Describes the parameters for the connector, as identified by the <code>ConnectorId</code>.',
  })
  .openapi('DescribedConnector')

const DescribeConnectorResponseSchema = z
  .object({
    Connector: DescribedConnectorSchema.and(
      z.any().openapi({ description: 'The structure that contains the details of the connector.' }),
    ),
  })
  .openapi({ required: ['Connector'] })
  .openapi('DescribeConnectorResponse')

const DescribeConnectorRequestSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector.' }),
    ),
  })
  .openapi({ required: ['ConnectorId'], title: 'DescribeConnectorRequest' })
  .openapi('DescribeConnectorRequest')

const ExecutionIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/)
  .length(36)
  .openapi('ExecutionId')

const FileLocationSchema: z.ZodType<FileLocationType> = z
  .lazy(() =>
    z
      .object({
        S3FileLocation: S3FileLocationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Specifies the S3 details for the file being used, such as bucket, ETag, and so forth.',
            }),
        ).exactOptional(),
        EfsFileLocation: EfsFileLocationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Specifies the Amazon EFS identifier and the path for the file being used.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Specifies the Amazon S3 or EFS file details to be used in the step.',
        required: [],
      }),
  )
  .openapi('FileLocation')

const SessionIdSchema = z
  .string()
  .regex(/^[\w-]*$/)
  .min(3)
  .max(32)
  .openapi('SessionId')

const UserDetailsSchema = z
  .object({
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique string that identifies a user account associated with a server.',
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-assigned unique identifier for a Transfer server instance. ',
        }),
    ),
    SessionId: SessionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-assigned unique identifier for a session that corresponds to the workflow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserName', 'ServerId'],
    description: 'Specifies the user name, server ID, and session ID for a workflow.',
  })
  .openapi('UserDetails')

const ServiceMetadataSchema = z
  .object({
    UserDetails: UserDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Server ID (<code>ServerId</code>), Session ID (<code>SessionId</code>) and user (<code>UserName</code>) make up the <code>UserDetails</code>.',
        }),
    ),
  })
  .openapi({
    required: ['UserDetails'],
    description: 'A container object for the session details that are associated with a workflow.',
  })
  .openapi('ServiceMetadata')

const LogGroupNameSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]*/)
  .min(1)
  .max(512)
  .openapi('LogGroupName')

const LoggingConfigurationSchema = z
  .object({
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    LogGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the CloudWatch logging group for the Transfer Family server to which this workflow belongs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Consists of the logging role and the log group name.', required: [] })
  .openapi('LoggingConfiguration')

const ExecutionStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETED', 'EXCEPTION', 'HANDLING_EXCEPTION'])
  .openapi('ExecutionStatus')

const StepResultOutputsJsonSchema = z.string().max(65536).openapi('StepResultOutputsJson')

const ExecutionErrorTypeSchema = z
  .enum([
    'PERMISSION_DENIED',
    'CUSTOM_STEP_FAILED',
    'THROTTLED',
    'ALREADY_EXISTS',
    'NOT_FOUND',
    'BAD_REQUEST',
    'TIMEOUT',
    'INTERNAL_SERVER_ERROR',
  ])
  .openapi('ExecutionErrorType')

const ExecutionErrorMessageSchema = z.string().openapi('ExecutionErrorMessage')

const ExecutionErrorSchema = z
  .object({
    Type: ExecutionErrorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the error type.</p> <ul> <li> <p> <code>ALREADY_EXISTS</code>: occurs for a copy step, if the overwrite option is not selected and a file with the same name already exists in the target location.</p> </li> <li> <p> <code>BAD_REQUEST</code>: a general bad request: for example, a step that attempts to tag an EFS file returns <code>BAD_REQUEST</code>, as only S3 files can be tagged.</p> </li> <li> <p> <code>CUSTOM_STEP_FAILED</code>: occurs when the custom step provided a callback that indicates failure.</p> </li> <li> <p> <code>INTERNAL_SERVER_ERROR</code>: a catch-all error that can occur for a variety of reasons.</p> </li> <li> <p> <code>NOT_FOUND</code>: occurs when a requested entity, for example a source file for a copy step, does not exist.</p> </li> <li> <p> <code>PERMISSION_DENIED</code>: occurs if your policy does not contain the correct permissions to complete one or more of the steps in the workflow.</p> </li> <li> <p> <code>TIMEOUT</code>: occurs when the execution times out.</p> <note> <p> You can set the <code>TimeoutSeconds</code> for a custom step, anywhere from 1 second to 1800 seconds (30 minutes). </p> </note> </li> <li> <p> <code>THROTTLED</code>: occurs if you exceed the new execution refill rate of one workflow per second.</p> </li> </ul>',
        }),
    ),
    Message: ExecutionErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the descriptive message that corresponds to the <code>ErrorType</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Message'],
    description:
      'Specifies the error message and type, for an error that occurs during the execution of the workflow.',
  })
  .openapi('ExecutionError')

const ExecutionStepResultSchema = z
  .object({
    StepType: WorkflowStepTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One of the available step types.</p> <ul> <li> <p> <b> <code>COPY</code> </b> - Copy the file to another location.</p> </li> <li> <p> <b> <code>CUSTOM</code> </b> - Perform a custom step with an Lambda function target.</p> </li> <li> <p> <b> <code>DECRYPT</code> </b> - Decrypt a file that was encrypted before it was uploaded.</p> </li> <li> <p> <b> <code>DELETE</code> </b> - Delete the file.</p> </li> <li> <p> <b> <code>TAG</code> </b> - Add a tag to the file.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Outputs: StepResultOutputsJsonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values for the key/value pair applied as a tag to the file. Only applicable if the step type is <code>TAG</code>.',
        }),
    ).exactOptional(),
    Error: ExecutionErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the details for an error, if it occurred during execution of the specified workflow step.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the following details for the step: error (if any), outputs (if any), and the step type.',
    required: [],
  })
  .openapi('ExecutionStepResult')

const ExecutionStepResultsSchema = z
  .array(ExecutionStepResultSchema)
  .min(1)
  .max(50)
  .openapi('ExecutionStepResults')

const ExecutionResultsSchema = z
  .object({
    Steps: ExecutionStepResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the details for the steps that are in the specified workflow.',
        }),
    ).exactOptional(),
    OnExceptionSteps: ExecutionStepResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the steps (actions) to take if errors are encountered during execution of the workflow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.',
    required: [],
  })
  .openapi('ExecutionResults')

const DescribedExecutionSchema = z
  .object({
    ExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the execution of a workflow.' }),
    ).exactOptional(),
    InitialFileLocation: FileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that describes the Amazon S3 or EFS file location. This is the file location when the execution begins: if the file is being copied, this is the initial (as opposed to destination) file location.',
        }),
    ).exactOptional(),
    ServiceMetadata: ServiceMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container object for the session details that are associated with a workflow.',
        }),
    ).exactOptional(),
    ExecutionRole: RoleSchema.and(
      z.any().openapi({ description: 'The IAM role associated with the execution.' }),
    ).exactOptional(),
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: 'The IAM logging role associated with the execution.' }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.exactOptional(),
    Status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception. ',
        }),
    ).exactOptional(),
    Results: ExecutionResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that describes the execution results. This includes a list of the steps along with the details of each step, error type and message (if any), and the <code>OnExceptionSteps</code> structure.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details for an execution object.', required: [] })
  .openapi('DescribedExecution')

const DescribeExecutionResponseSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
    Execution: DescribedExecutionSchema.and(
      z
        .any()
        .openapi({
          description: "The structure that contains the details of the workflow' execution.",
        }),
    ),
  })
  .openapi({ required: ['WorkflowId', 'Execution'] })
  .openapi('DescribeExecutionResponse')

const DescribeExecutionRequestSchema = z
  .object({
    ExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the execution of a workflow.' }),
    ),
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
  })
  .openapi({ required: ['ExecutionId', 'WorkflowId'], title: 'DescribeExecutionRequest' })
  .openapi('DescribeExecutionRequest')

const HostKeyFingerprintSchema = z.string().openapi('HostKeyFingerprint')

const HostKeyDescriptionSchema = z
  .string()
  .min(0)
  .max(200)
  .openapi({ pattern: '^[\\p{Print}]*$' })
  .openapi('HostKeyDescription')

const HostKeyTypeSchema = z.string().openapi('HostKeyType')

const DateImportedSchema = z.iso.datetime({ offset: true }).openapi('DateImported')

const DescribedHostKeySchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the host key.' }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the host key.' }),
    ).exactOptional(),
    HostKeyFingerprint: HostKeyFingerprintSchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.',
        }),
    ).exactOptional(),
    Description: HostKeyDescriptionSchema.and(
      z.any().openapi({ description: 'The text description for this host key.' }),
    ).exactOptional(),
    Type: HostKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption algorithm that is used for the host key. The <code>Type</code> parameter is specified by using one of the following values:</p> <ul> <li> <p> <code>ssh-rsa</code> </p> </li> <li> <p> <code>ssh-ed25519</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp256</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp384</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp521</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DateImported: DateImportedSchema.and(
      z.any().openapi({ description: 'The date on which the host key was added to the server.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for host keys.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'The details for a server host key.' })
  .openapi('DescribedHostKey')

const DescribeHostKeyResponseSchema = z
  .object({
    HostKey: DescribedHostKeySchema.and(
      z.any().openapi({ description: 'Returns the details for the specified host key.' }),
    ),
  })
  .openapi({ required: ['HostKey'] })
  .openapi('DescribeHostKeyResponse')

const DescribeHostKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the server that contains the host key that you want described.',
        }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the host key that you want described.' }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeyId'], title: 'DescribeHostKeyRequest' })
  .openapi('DescribeHostKeyRequest')

const DescribedProfileSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) for the profile.' }),
    ),
    ProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the local or partner AS2 profile.' }),
    ).exactOptional(),
    ProfileType: ProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles. If not supplied in the request, the command lists all types of profiles.',
        }),
    ).exactOptional(),
    As2Id: As2IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.',
        }),
    ).exactOptional(),
    CertificateIds: CertificateIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for profiles.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'The details for a local or partner AS2 profile. ' })
  .openapi('DescribedProfile')

const DescribeProfileResponseSchema = z
  .object({
    Profile: DescribedProfileSchema.and(
      z
        .any()
        .openapi({ description: 'The details of the specified profile, returned as an object.' }),
    ),
  })
  .openapi({ required: ['Profile'] })
  .openapi('DescribeProfileResponse')

const DescribeProfileRequestSchema = z
  .object({
    ProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'The identifier of the profile that you want described.' }),
    ),
  })
  .openapi({ required: ['ProfileId'], title: 'DescribeProfileRequest' })
  .openapi('DescribeProfileRequest')

const FipsSchema = z.boolean().openapi('Fips')

const SecurityPolicyOptionSchema = z.string().max(50).openapi('SecurityPolicyOption')

const SecurityPolicyOptionsSchema = z
  .array(SecurityPolicyOptionSchema)
  .openapi('SecurityPolicyOptions')

const DescribedSecurityPolicySchema = z
  .object({
    Fips: FipsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this policy enables Federal Information Processing Standards (FIPS).',
        }),
    ).exactOptional(),
    SecurityPolicyName: SecurityPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the security policy that is attached to the server.',
        }),
    ),
    SshCiphers: SecurityPolicyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the enabled Secure Shell (SSH) cipher encryption algorithms in the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    SshKexs: SecurityPolicyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the enabled SSH key exchange (KEX) encryption algorithms in the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    SshMacs: SecurityPolicyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the enabled SSH message authentication code (MAC) encryption algorithms in the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    TlsCiphers: SecurityPolicyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the enabled Transport Layer Security (TLS) cipher encryption algorithms in the security policy that is attached to the server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SecurityPolicyName'],
    description:
      'Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.',
  })
  .openapi('DescribedSecurityPolicy')

const DescribeSecurityPolicyResponseSchema = z
  .object({
    SecurityPolicy: DescribedSecurityPolicySchema.and(
      z
        .any()
        .openapi({ description: 'An array containing the properties of the security policy.' }),
    ),
  })
  .openapi({ required: ['SecurityPolicy'] })
  .openapi('DescribeSecurityPolicyResponse')

const DescribeSecurityPolicyRequestSchema = z
  .object({
    SecurityPolicyName: SecurityPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the security policy that is attached to the server.',
        }),
    ),
  })
  .openapi({ required: ['SecurityPolicyName'], title: 'DescribeSecurityPolicyRequest' })
  .openapi('DescribeSecurityPolicyRequest')

const StateSchema = z
  .enum(['OFFLINE', 'ONLINE', 'STARTING', 'STOPPING', 'START_FAILED', 'STOP_FAILED'])
  .openapi({
    description:
      "<p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p>",
  })
  .openapi('State')

const UserCountSchema = z.int().openapi('UserCount')

const DescribedServerSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the unique Amazon Resource Name (ARN) of the server.' }),
    ),
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when <code>Protocols</code> is set to <code>FTPS</code>.',
        }),
    ).exactOptional(),
    ProtocolDetails: ProtocolDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol settings that are configured for your server.</p> <ul> <li> <p> To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer. </p> </li> <li> <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code> call.</p> </li> <li> <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the <code>TlsSessionResumptionMode</code> parameter.</p> </li> <li> <p> <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the domain of the storage system that is used for file transfers.',
        }),
    ).exactOptional(),
    EndpointDetails: EndpointDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.",
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Defines the type of endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.",
        }),
    ).exactOptional(),
    HostKeyFingerprint: HostKeyFingerprintSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value is equivalent to the output of the <code>ssh-keygen -l -f my-new-server-key</code> command.",
        }),
    ).exactOptional(),
    IdentityProviderDetails: IdentityProviderDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information to call a customer-supplied authentication API. This field is not populated when the <code>IdentityProviderType</code> of a server is <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code>.',
        }),
    ).exactOptional(),
    IdentityProviderType: IdentityProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The mode of authentication for a server. The default value is <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within the Transfer Family service.</p> <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter or the <code>IdentityProviderDetails</code> data type.</p>',
        }),
    ).exactOptional(),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    PostAuthenticationLoginBanner: PostAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p> <note> <p>The SFTP protocol does not support post-authentication display banners.</p> </note>',
        }),
    ).exactOptional(),
    PreAuthenticationLoginBanner: PreAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:</p> <p> <code>This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.</code> </p>',
        }),
    ).exactOptional(),
    Protocols: ProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:</p> <ul> <li> <p> <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH</p> </li> <li> <p> <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS encryption</p> </li> <li> <p> <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p> </li> <li> <p> <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p> </li> </ul> <note> <ul> <li> <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.</p> </li> <li> <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the <code>EndpointType</code> must be <code>VPC</code> and the <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>FTP</code>, then <code>AddressAllocationIds</code> cannot be associated.</p> </li> <li> <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code> can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types: <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>AS2</code>, then the <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SecurityPolicyName: SecurityPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unique system-assigned identifier for a server that you instantiate.',
        }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The condition of the server that was described. A value of <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file transfer operations.</p> <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error condition.</p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.',
        }),
    ).exactOptional(),
    UserCount: UserCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of users that are assigned to a server you specified with the <code>ServerId</code>.',
        }),
    ).exactOptional(),
    WorkflowDetails: WorkflowDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description:
      'Describes the properties of a file transfer protocol-enabled server that was specified.',
  })
  .openapi('DescribedServer')

const DescribeServerResponseSchema = z
  .object({
    Server: DescribedServerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the properties of a server with the <code>ServerID</code> you specified.',
        }),
    ),
  })
  .openapi({ required: ['Server'] })
  .openapi('DescribeServerResponse')

const DescribeServerRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z.any().openapi({ description: 'A system-assigned unique identifier for a server.' }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'DescribeServerRequest' })
  .openapi('DescribeServerRequest')

const SshPublicKeySchema = z
  .object({
    DateImported: DateImportedSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the date that the public key was added to the user account.',
        }),
    ),
    SshPublicKeyBody: SshPublicKeyBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the content of the SSH public key as specified by the <code>PublicKeyId</code>.</p> <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>',
        }),
    ),
    SshPublicKeyId: SshPublicKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>SshPublicKeyId</code> parameter contains the identifier of the public key.',
        }),
    ),
  })
  .openapi({
    required: ['DateImported', 'SshPublicKeyBody', 'SshPublicKeyId'],
    description:
      'Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.',
  })
  .openapi('SshPublicKey')

const SshPublicKeysSchema = z.array(SshPublicKeySchema).max(5).openapi('SshPublicKeys')

const DescribedUserSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be described.',
        }),
    ),
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to \'/\' and set <code>Target</code> to the HomeDirectory parameter value.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.",
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ).exactOptional(),
    SshPublicKeys: SshPublicKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.',
        }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the user that was requested to be described. User names are used for authentication purposes. This is the string that will be used by your user when they log in to your server.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description: 'Describes the properties of a user that was specified.',
  })
  .openapi('DescribedUser')

const DescribeUserResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has this user assigned.',
        }),
    ),
    User: DescribedUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the properties of the user account for the <code>ServerID</code> value that you specified.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'User'] })
  .openapi('DescribeUserResponse')

const DescribeUserRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has this user assigned.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the user assigned to one or more servers. User names are part of the sign-in credentials to use the Transfer Family service and perform file transfer tasks.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'UserName'], title: 'DescribeUserRequest' })
  .openapi('DescribeUserRequest')

const DescribedWorkflowSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the unique Amazon Resource Name (ARN) for the workflow.',
        }),
    ),
    Description: WorkflowDescriptionSchema.and(
      z.any().openapi({ description: 'Specifies the text description for the workflow.' }),
    ).exactOptional(),
    Steps: WorkflowStepsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the details for the steps that are in the specified workflow.',
        }),
    ).exactOptional(),
    OnExceptionSteps: WorkflowStepsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the steps (actions) to take if errors are encountered during execution of the workflow.',
        }),
    ).exactOptional(),
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'Describes the properties of the specified workflow' })
  .openapi('DescribedWorkflow')

const DescribeWorkflowResponseSchema = z
  .object({
    Workflow: DescribedWorkflowSchema.and(
      z.any().openapi({ description: 'The structure that contains the details of the workflow.' }),
    ),
  })
  .openapi({ required: ['Workflow'] })
  .openapi('DescribeWorkflowResponse')

const DescribeWorkflowRequestSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
  })
  .openapi({ required: ['WorkflowId'], title: 'DescribeWorkflowRequest' })
  .openapi('DescribeWorkflowRequest')

const ImportCertificateResponseSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ),
  })
  .openapi({ required: ['CertificateId'] })
  .openapi('ImportCertificateResponse')

const PrivateKeyTypeSchema = z
  .string()
  .regex(/^[\u0009\u000A\u000D\u0020-\u00FF]*/)
  .min(1)
  .max(16384)
  .openapi('PrivateKeyType')

const ImportCertificateRequestSchema = z
  .object({
    Usage: CertificateUsageTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether this certificate is used for signing or encryption.',
        }),
    ),
    Certificate: CertificateBodyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p>For the CLI, provide a file path for a certificate in URI format. For example, <code>--certificate file://encryption-cert.pem</code>. Alternatively, you can provide the raw content.</p> </li> <li> <p>For the SDK, specify the raw content of a certificate file. For example, <code>--certificate "`cat encryption-cert.pem`"</code>.</p> </li> </ul>',
        }),
    ),
    CertificateChain: CertificateChainTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "An optional list of certificates that make up the chain for the certificate that's being imported.",
        }),
    ).exactOptional(),
    PrivateKey: PrivateKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p>For the CLI, provide a file path for a private key in URI format.For example, <code>--private-key file://encryption-key.pem</code>. Alternatively, you can provide the raw content of the private key file.</p> </li> <li> <p>For the SDK, specify the raw content of a private key file. For example, <code>--private-key "`cat encryption-key.pem`"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    ActiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes active.',
        }),
    ).exactOptional(),
    InactiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes inactive.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A short description that helps identify the certificate. ' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Usage', 'Certificate'], title: 'ImportCertificateRequest' })
  .openapi('ImportCertificateRequest')

const ImportHostKeyResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'Returns the server identifier that contains the imported key.' }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'Returns the host key identifier for the imported key.' }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeyId'] })
  .openapi('ImportHostKeyResponse')

const ImportHostKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the server that contains the host key that you are importing.',
        }),
    ),
    HostKeyBody: HostKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The private key portion of an SSH key pair.</p> <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>',
        }),
    ),
    Description: HostKeyDescriptionSchema.and(
      z.any().openapi({ description: 'The text description that identifies this host key.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Key-value pairs that can be used to group and search for host keys.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerId', 'HostKeyBody'], title: 'ImportHostKeyRequest' })
  .openapi('ImportHostKeyRequest')

const ImportSshPublicKeyResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z.any().openapi({ description: 'A system-assigned unique identifier for a server.' }),
    ),
    SshPublicKeyId: SshPublicKeyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The name given to a public key by the system that was imported.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user name assigned to the <code>ServerID</code> value that you specified.',
        }),
    ),
  })
  .openapi({
    required: ['ServerId', 'SshPublicKeyId', 'UserName'],
    description:
      'Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.',
  })
  .openapi('ImportSshPublicKeyResponse')

const ImportSshPublicKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z.any().openapi({ description: 'A system-assigned unique identifier for a server.' }),
    ),
    SshPublicKeyBody: SshPublicKeyBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The public key portion of an SSH key pair.</p> <p>Transfer Family accepts RSA, ECDSA, and ED25519 keys.</p>',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the user account that is assigned to one or more servers.',
        }),
    ),
  })
  .openapi({
    required: ['ServerId', 'SshPublicKeyBody', 'UserName'],
    title: 'ImportSshPublicKeyRequest',
  })
  .openapi('ImportSshPublicKeyRequest')

const NextTokenSchema = z.string().min(1).max(6144).openapi('NextToken')

const ListedAccessSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ).exactOptional(),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Lists the properties for one or more specified associated accesses.',
    required: [],
  })
  .openapi('ListedAccess')

const ListedAccessesSchema = z.array(ListedAccessSchema).openapi('ListedAccesses')

const ListAccessesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListAccesses</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional accesses.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has users assigned to it.',
        }),
    ),
    Accesses: ListedAccessesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the accesses and their properties for the <code>ServerId</code> value that you specify.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'Accesses'] })
  .openapi('ListAccessesResponse')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ListAccessesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of access SIDs to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListAccesses</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional accesses.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has users assigned to it.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'ListAccessesRequest' })
  .openapi('ListAccessesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ListedAgreementSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the specified agreement.' }),
    ).exactOptional(),
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current description for the agreement. You can change it by calling the <code>UpdateAgreement</code> operation and providing a new description. ',
        }),
    ).exactOptional(),
    Status: AgreementStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The agreement can be either <code>ACTIVE</code> or <code>INACTIVE</code>.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the agreement.' }),
    ).exactOptional(),
    LocalProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the AS2 local profile.' }),
    ).exactOptional(),
    PartnerProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the partner profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the properties of an agreement.', required: [] })
  .openapi('ListedAgreement')

const ListedAgreementsSchema = z.array(ListedAgreementSchema).openapi('ListedAgreements')

const ListAgreementsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a token that you can use to call <code>ListAgreements</code> again and receive additional results, if there are any.',
        }),
    ).exactOptional(),
    Agreements: ListedAgreementsSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns an array, where each item contains the details of an agreement.',
        }),
    ),
  })
  .openapi({ required: ['Agreements'] })
  .openapi('ListAgreementsResponse')

const ListAgreementsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of agreements to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListAgreements</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional agreements.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the server for which you want a list of agreements.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'ListAgreementsRequest' })
  .openapi('ListAgreementsRequest')

const ListedCertificateSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the specified certificate.' }),
    ).exactOptional(),
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ).exactOptional(),
    Usage: CertificateUsageTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether this certificate is used for signing or encryption.',
        }),
    ).exactOptional(),
    Status: CertificateStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate can be either <code>ACTIVE</code>, <code>PENDING_ROTATION</code>, or <code>INACTIVE</code>. <code>PENDING_ROTATION</code> means that this certificate will replace the current certificate when it expires.',
        }),
    ).exactOptional(),
    ActiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes active.',
        }),
    ).exactOptional(),
    InactiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes inactive.',
        }),
    ).exactOptional(),
    Type: CertificateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type for the certificate. If a private key has been specified for the certificate, its type is <code>CERTIFICATE_WITH_PRIVATE_KEY</code>. If there is no private key, the type is <code>CERTIFICATE</code>.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "The name or short description that's used to identify the certificate.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the properties of a certificate.', required: [] })
  .openapi('ListedCertificate')

const ListedCertificatesSchema = z.array(ListedCertificateSchema).openapi('ListedCertificates')

const ListCertificatesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the next token, which you can use to list the next certificate.',
        }),
    ).exactOptional(),
    Certificates: ListedCertificatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns an array of the certificates that are specified in the <code>ListCertificates</code> call.',
        }),
    ),
  })
  .openapi({ required: ['Certificates'] })
  .openapi('ListCertificatesResponse')

const ListCertificatesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of certificates to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListCertificates</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCertificatesRequest', required: [] })
  .openapi('ListCertificatesRequest')

const ListedConnectorSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the specified connector.' }),
    ).exactOptional(),
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector.' }),
    ).exactOptional(),
    Url: UrlSchema.and(
      z.any().openapi({ description: "The URL of the partner's AS2 endpoint." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns details of the connector that is specified.', required: [] })
  .openapi('ListedConnector')

const ListedConnectorsSchema = z.array(ListedConnectorSchema).openapi('ListedConnectors')

const ListConnectorsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a token that you can use to call <code>ListConnectors</code> again and receive additional results, if there are any.',
        }),
    ).exactOptional(),
    Connectors: ListedConnectorsSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns an array, where each item contains the details of a connector.',
        }),
    ),
  })
  .openapi({ required: ['Connectors'] })
  .openapi('ListConnectorsResponse')

const ListConnectorsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of connectors to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListConnectors</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional connectors.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectorsRequest', required: [] })
  .openapi('ListConnectorsRequest')

const ListedExecutionSchema = z
  .object({
    ExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the execution of a workflow.' }),
    ).exactOptional(),
    InitialFileLocation: FileLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that describes the Amazon S3 or EFS file location. This is the file location when the execution begins: if the file is being copied, this is the initial (as opposed to destination) file location.',
        }),
    ).exactOptional(),
    ServiceMetadata: ServiceMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container object for the session details that are associated with a workflow.',
        }),
    ).exactOptional(),
    Status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns properties of the execution that is specified.', required: [] })
  .openapi('ListedExecution')

const ListedExecutionsSchema = z.array(ListedExecutionSchema).openapi('ListedExecutions')

const ListExecutionsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>ListExecutions</code> returns the <code>NextToken</code> parameter in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional executions.',
        }),
    ).exactOptional(),
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
    Executions: ListedExecutionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Returns the details for each execution.</p> <ul> <li> <p> <b>NextToken</b>: returned from a call to several APIs, you can use pass it to a subsequent command to continue listing additional executions.</p> </li> <li> <p> <b>StartTime</b>: timestamp indicating when the execution began.</p> </li> <li> <p> <b>Executions</b>: details of the execution, including the execution ID, initial file location, and Service metadata.</p> </li> <li> <p> <b>Status</b>: one of the following values: <code>IN_PROGRESS</code>, <code>COMPLETED</code>, <code>EXCEPTION</code>, <code>HANDLING_EXEPTION</code>. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['WorkflowId', 'Executions'] })
  .openapi('ListExecutionsResponse')

const ListExecutionsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of executions to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>ListExecutions</code> returns the <code>NextToken</code> parameter in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional executions.</p> <p> This is useful for pagination, for instance. If you have 100 executions for a workflow, you might only want to list first 10. If so, call the API by specifying the <code>max-results</code>: </p> <p> <code>aws transfer list-executions --max-results 10</code> </p> <p> This returns details for the first 10 executions, as well as the pointer (<code>NextToken</code>) to the eleventh execution. You can now call the API again, supplying the <code>NextToken</code> value you received: </p> <p> <code>aws transfer list-executions --max-results 10 --next-token $somePointerReturnedFromPreviousListResult</code> </p> <p> This call returns the next 10 executions, the 11th through the 20th. You can then repeat the call until the details for all 100 executions have been returned. </p>',
        }),
    ).exactOptional(),
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
  })
  .openapi({ required: ['WorkflowId'], title: 'ListExecutionsRequest' })
  .openapi('ListExecutionsRequest')

const ListedHostKeySchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The unique Amazon Resource Name (ARN) of the host key.' }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the host key.' }),
    ).exactOptional(),
    Fingerprint: HostKeyFingerprintSchema.and(
      z
        .any()
        .openapi({
          description:
            'The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.',
        }),
    ).exactOptional(),
    Description: HostKeyDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current description for the host key. You can change it by calling the <code>UpdateHostKey</code> operation and providing a new description.',
        }),
    ).exactOptional(),
    Type: HostKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encryption algorithm that is used for the host key. The <code>Type</code> parameter is specified by using one of the following values:</p> <ul> <li> <p> <code>ssh-rsa</code> </p> </li> <li> <p> <code>ssh-ed25519</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp256</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp384</code> </p> </li> <li> <p> <code>ecdsa-sha2-nistp521</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DateImported: DateImportedSchema.and(
      z.any().openapi({ description: 'The date on which the host key was added to the server.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description: "Returns properties of the host key that's specified.",
  })
  .openapi('ListedHostKey')

const ListedHostKeysSchema = z.array(ListedHostKeySchema).openapi('ListedHostKeys')

const ListHostKeysResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a token that you can use to call <code>ListHostKeys</code> again and receive additional results, if there are any.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the server identifier that contains the listed host keys.',
        }),
    ),
    HostKeys: ListedHostKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns an array, where each item contains the details of a host key.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeys'] })
  .openapi('ListHostKeysResponse')

const ListHostKeysRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of host keys to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When there are additional results that were not returned, a <code>NextToken</code> parameter is returned. You can use that value for a subsequent call to <code>ListHostKeys</code> to continue listing results.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the server that contains the host keys that you want to view.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'ListHostKeysRequest' })
  .openapi('ListHostKeysRequest')

const ListedProfileSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the specified profile.' }),
    ).exactOptional(),
    ProfileId: ProfileIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the local or partner AS2 profile.' }),
    ).exactOptional(),
    As2Id: As2IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>As2Id</code> is the <i>AS2-name</i>, as defined in the <a href="https://datatracker.ietf.org/doc/html/rfc4130">RFC 4130</a>. For inbound transfers, this is the <code>AS2-From</code> header for the AS2 messages sent from the partner. For outbound connectors, this is the <code>AS2-To</code> header for the AS2 messages sent to the partner using the <code>StartFileTransfer</code> API operation. This ID cannot include spaces.',
        }),
    ).exactOptional(),
    ProfileType: ProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles. If not supplied in the request, the command lists all types of profiles.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns the properties of the profile that was specified.',
    required: [],
  })
  .openapi('ListedProfile')

const ListedProfilesSchema = z.array(ListedProfileSchema).openapi('ListedProfiles')

const ListProfilesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a token that you can use to call <code>ListProfiles</code> again and receive additional results, if there are any.',
        }),
    ).exactOptional(),
    Profiles: ListedProfilesSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns an array, where each item contains the details of a profile.',
        }),
    ),
  })
  .openapi({ required: ['Profiles'] })
  .openapi('ListProfilesResponse')

const ListProfilesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of profiles to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When there are additional results that were not returned, a <code>NextToken</code> parameter is returned. You can use that value for a subsequent call to <code>ListProfiles</code> to continue listing results.',
        }),
    ).exactOptional(),
    ProfileType: ProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to list only <code>LOCAL</code> type profiles or only <code>PARTNER</code> type profiles. If not supplied in the request, the command lists all types of profiles.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProfilesRequest', required: [] })
  .openapi('ListProfilesRequest')

const SecurityPolicyNamesSchema = z.array(SecurityPolicyNameSchema).openapi('SecurityPolicyNames')

const ListSecurityPoliciesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListSecurityPolicies</code> operation, a <code>NextToken</code> parameter is returned in the output. In a following command, you can pass in the <code>NextToken</code> parameter to continue listing security policies.',
        }),
    ).exactOptional(),
    SecurityPolicyNames: SecurityPolicyNamesSchema.and(
      z.any().openapi({ description: 'An array of security policies that were listed.' }),
    ),
  })
  .openapi({ required: ['SecurityPolicyNames'] })
  .openapi('ListSecurityPoliciesResponse')

const ListSecurityPoliciesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of security policies to return as a response to the <code>ListSecurityPolicies</code> query.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When additional results are obtained from the <code>ListSecurityPolicies</code> command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional security policies.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSecurityPoliciesRequest', required: [] })
  .openapi('ListSecurityPoliciesRequest')

const ListedServerSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the unique Amazon Resource Name (ARN) for a server to be listed.',
        }),
    ),
    Domain: DomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the domain of the storage system that is used for file transfers.',
        }),
    ).exactOptional(),
    IdentityProviderType: IdentityProviderTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The mode of authentication for a server. The default value is <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within the Transfer Family service.</p> <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter or the <code>IdentityProviderDetails</code> data type.</p>',
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the type of VPC endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.",
        }),
    ).exactOptional(),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the unique system assigned identifier for the servers that were listed.',
        }),
    ).exactOptional(),
    State: StateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The condition of the server that was described. A value of <code>ONLINE</code> indicates that the server can accept jobs and transfer files. A <code>State</code> value of <code>OFFLINE</code> means that the server cannot perform file transfer operations.</p> <p>The states of <code>STARTING</code> and <code>STOPPING</code> indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>START_FAILED</code> or <code>STOP_FAILED</code> can indicate an error condition.</p>',
        }),
    ).exactOptional(),
    UserCount: UserCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of users that are assigned to a server you specified with the <code>ServerId</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn'],
    description:
      'Returns properties of a file transfer protocol-enabled server that was specified.',
  })
  .openapi('ListedServer')

const ListedServersSchema = z.array(ListedServerSchema).openapi('ListedServers')

const ListServersResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListServers</code> operation, a <code>NextToken</code> parameter is returned in the output. In a following command, you can pass in the <code>NextToken</code> parameter to continue listing additional servers.',
        }),
    ).exactOptional(),
    Servers: ListedServersSchema.and(
      z.any().openapi({ description: 'An array of servers that were listed.' }),
    ),
  })
  .openapi({ required: ['Servers'] })
  .openapi('ListServersResponse')

const ListServersRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of servers to return as a response to the <code>ListServers</code> query.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When additional results are obtained from the <code>ListServers</code> command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional servers.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServersRequest', required: [] })
  .openapi('ListServersRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN you specified to list the tags of.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListTagsForResource</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional tags.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a server, user, or role.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of tags to return as a response to the <code>ListTagsForResource</code> request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request additional results from the <code>ListTagsForResource</code> operation, a <code>NextToken</code> parameter is returned in the input. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional tags.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SshPublicKeyCountSchema = z.int().openapi('SshPublicKeyCount')

const ListedUserSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the unique Amazon Resource Name (ARN) for the user that you want to learn about.',
        }),
    ),
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.</p> <note> <p>The IAM role that controls your users' access to your Amazon S3 bucket for servers with <code>Domain=S3</code>, or your EFS file system for servers with <code>Domain=EFS</code>. </p> <p>The policies attached to this role determine the level of access you want to provide your users when transferring files into and out of your S3 buckets or EFS file systems.</p> </note>",
        }),
    ).exactOptional(),
    SshPublicKeyCount: SshPublicKeyCountSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the number of SSH public keys stored for the user you specified.',
        }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the user whose ARN was specified. User names are used for authentication purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], description: 'Returns properties of the user that you specify.' })
  .openapi('ListedUser')

const ListedUsersSchema = z.array(ListedUserSchema).openapi('ListedUsers')

const ListUsersResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListUsers</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional users.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that the users are assigned to.',
        }),
    ),
    Users: ListedUsersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the user accounts and their properties for the <code>ServerId</code> value that you specify.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'Users'] })
  .openapi('ListUsersResponse')

const ListUsersRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of users to return as a response to the <code>ListUsers</code> request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you can get additional results from the <code>ListUsers</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command to the <code>NextToken</code> parameter to continue listing additional users.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that has users assigned to it.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const ListedWorkflowSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ).exactOptional(),
    Description: WorkflowDescriptionSchema.and(
      z.any().openapi({ description: 'Specifies the text description for the workflow.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the unique Amazon Resource Name (ARN) for the workflow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the identifier, text description, and Amazon Resource Name (ARN) for the workflow.',
    required: [],
  })
  .openapi('ListedWorkflow')

const ListedWorkflowsSchema = z.array(ListedWorkflowSchema).openapi('ListedWorkflows')

const ListWorkflowsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional workflows.',
        }),
    ).exactOptional(),
    Workflows: ListedWorkflowsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the <code>Arn</code>, <code>WorkflowId</code>, and <code>Description</code> for each workflow.',
        }),
    ),
  })
  .openapi({ required: ['Workflows'] })
  .openapi('ListWorkflowsResponse')

const ListWorkflowsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Specifies the maximum number of workflows to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>ListWorkflows</code> returns the <code>NextToken</code> parameter in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional workflows.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWorkflowsRequest', required: [] })
  .openapi('ListWorkflowsRequest')

const SendWorkflowStepStateResponseSchema = z.object({}).openapi('SendWorkflowStepStateResponse')

const CallbackTokenSchema = z.string().regex(/\w+/).min(1).max(64).openapi('CallbackToken')

const CustomStepStatusSchema = z.enum(['SUCCESS', 'FAILURE']).openapi('CustomStepStatus')

const SendWorkflowStepStateRequestSchema = z
  .object({
    WorkflowId: WorkflowIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the workflow.' }),
    ),
    ExecutionId: ExecutionIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the execution of a workflow.' }),
    ),
    Token: CallbackTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to distinguish between multiple callbacks for multiple Lambda steps within the same execution.',
        }),
    ),
    Status: CustomStepStatusSchema.and(
      z.any().openapi({ description: 'Indicates whether the specified step succeeded or failed.' }),
    ),
  })
  .openapi({
    required: ['WorkflowId', 'ExecutionId', 'Token', 'Status'],
    title: 'SendWorkflowStepStateRequest',
  })
  .openapi('SendWorkflowStepStateRequest')

const TransferIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z.\/-]+$/)
  .min(1)
  .max(512)
  .openapi('TransferId')

const StartFileTransferResponseSchema = z
  .object({
    TransferId: TransferIdSchema.and(
      z.any().openapi({ description: 'Returns the unique identifier for this file transfer. ' }),
    ),
  })
  .openapi({ required: ['TransferId'] })
  .openapi('StartFileTransferResponse')

const FilePathSchema = z.string().regex(/^(.)+/).min(1).max(1024).openapi('FilePath')

const FilePathsSchema = z.array(FilePathSchema).min(1).max(10).openapi('FilePaths')

const StartFileTransferRequestSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector. ' }),
    ),
    SendFilePaths: FilePathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings. Each string represents the absolute path for one outbound file transfer. For example, <code> <i>DOC-EXAMPLE-BUCKET</i>/<i>myfile.txt</i> </code>. ',
        }),
    ),
  })
  .openapi({ required: ['ConnectorId', 'SendFilePaths'], title: 'StartFileTransferRequest' })
  .openapi('StartFileTransferRequest')

const StartServerRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A system-assigned unique identifier for a server that you start.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'StartServerRequest' })
  .openapi('StartServerRequest')

const StopServerRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A system-assigned unique identifier for a server that you stopped.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'], title: 'StopServerRequest' })
  .openapi('StopServerRequest')

const TagResourceRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or role.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to user accounts for any purpose.',
        }),
    ),
  })
  .openapi({ required: ['Arn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const ResponseSchema = z.string().openapi('Response')

const StatusCodeSchema = z.int().openapi('StatusCode')

const MessageSchema = z.string().openapi('Message')

const TestIdentityProviderResponseSchema = z
  .object({
    Response: ResponseSchema.and(
      z.any().openapi({ description: 'The response that is returned from your API Gateway.' }),
    ).exactOptional(),
    StatusCode: StatusCodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The HTTP status code that is the response from your API Gateway.',
        }),
    ),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A message that indicates whether the test was successful or not.</p> <note> <p>If an empty string is returned, the most likely cause is that the authentication failed due to an incorrect username or password.</p> </note>',
        }),
    ).exactOptional(),
    Url: UrlSchema.and(
      z.any().openapi({ description: 'The endpoint of the service used to authenticate a user.' }),
    ),
  })
  .openapi({ required: ['StatusCode', 'Url'] })
  .openapi('TestIdentityProviderResponse')

const SourceIpSchema = z
  .string()
  .regex(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
  .max(32)
  .openapi('SourceIp')

const UserPasswordSchema = z.string().max(1024).openapi('UserPassword')

const TestIdentityProviderRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A system-assigned identifier for a specific server. That server's user authentication method is tested with a user name and password.",
        }),
    ),
    ServerProtocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of file transfer protocol to be tested.</p> <p>The available protocols are:</p> <ul> <li> <p>Secure Shell (SSH) File Transfer Protocol (SFTP)</p> </li> <li> <p>File Transfer Protocol Secure (FTPS)</p> </li> <li> <p>File Transfer Protocol (FTP)</p> </li> </ul>',
        }),
    ).exactOptional(),
    SourceIp: SourceIpSchema.and(
      z.any().openapi({ description: 'The source IP address of the user account to be tested.' }),
    ).exactOptional(),
    UserName: UserNameSchema.and(
      z.any().openapi({ description: 'The name of the user account to be tested.' }),
    ),
    UserPassword: UserPasswordSchema.and(
      z.any().openapi({ description: 'The password of the user account to be tested.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerId', 'UserName'], title: 'TestIdentityProviderRequest' })
  .openapi('TestIdentityProviderRequest')

const TagKeysSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific Amazon Web Services resource, such as a server, user, or role.',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.',
        }),
    ),
  })
  .openapi({ required: ['Arn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAccessResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the server that the user is attached to.' }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The external identifier of the group whose users have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Amazon Web ServicesTransfer Family.',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'ExternalId'] })
  .openapi('UpdateAccessResponse')

const UpdateAccessRequestSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p> <p> <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <p>In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to <code>/</code> and set <code>Target</code> to the <code>HomeDirectory</code> parameter value.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>',
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user\'s access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p> <note> <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p> <p>For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p> <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html">Example session policy</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web ServicesSecurity Token Service API Reference</i>.</p> </note>',
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.',
        }),
    ),
    ExternalId: ExternalIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.</p> <p> <code>Get-ADGroup -Filter {samAccountName -like "<i>YourGroupName</i>*"} -Properties * | Select SamAccountName,ObjectSid</code> </p> <p>In that command, replace <i>YourGroupName</i> with the name of your Active Directory group.</p> <p>The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>',
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'ExternalId'], title: 'UpdateAccessRequest' })
  .openapi('UpdateAccessRequest')

const UpdateAgreementResponseSchema = z
  .object({
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ),
  })
  .openapi({ required: ['AgreementId'] })
  .openapi('UpdateAgreementResponse')

const UpdateAgreementRequestSchema = z
  .object({
    AgreementId: AgreementIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the agreement. This identifier is returned when you create an agreement.',
        }),
    ),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.',
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'To replace the existing description, provide a short description for the agreement. ',
        }),
    ).exactOptional(),
    Status: AgreementStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can update the status for the agreement, either activating an inactive agreement or the reverse.',
        }),
    ).exactOptional(),
    LocalProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for the AS2 local profile.</p> <p>To change the local profile identifier, provide a new value here.</p>',
        }),
    ).exactOptional(),
    PartnerProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the partner profile. To change the partner profile identifier, provide a new value here.',
        }),
    ).exactOptional(),
    BaseDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'To change the landing directory (folder) for files that are transferred, provide the bucket folder that you want to use; for example, <code>/<i>DOC-EXAMPLE-BUCKET</i>/<i>home</i>/<i>mydirectory</i> </code>.',
        }),
    ).exactOptional(),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AgreementId', 'ServerId'], title: 'UpdateAgreementRequest' })
  .openapi('UpdateAgreementRequest')

const UpdateCertificateResponseSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the identifier of the certificate object that you are updating.',
        }),
    ),
  })
  .openapi({ required: ['CertificateId'] })
  .openapi('UpdateCertificateResponse')

const UpdateCertificateRequestSchema = z
  .object({
    CertificateId: CertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the certificate object that you are updating.',
        }),
    ),
    ActiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes active.',
        }),
    ).exactOptional(),
    InactiveDate: CertDateSchema.and(
      z
        .any()
        .openapi({
          description: 'An optional date that specifies when the certificate becomes inactive.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A short description to help identify the certificate.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CertificateId'], title: 'UpdateCertificateRequest' })
  .openapi('UpdateCertificateRequest')

const UpdateConnectorResponseSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the identifier of the connector object that you are updating.',
        }),
    ),
  })
  .openapi({ required: ['ConnectorId'] })
  .openapi('UpdateConnectorResponse')

const UpdateConnectorRequestSchema = z
  .object({
    ConnectorId: ConnectorIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the connector.' }),
    ),
    Url: UrlSchema.and(
      z.any().openapi({ description: "The URL of the partner's AS2 endpoint." }),
    ).exactOptional(),
    As2Config: As2ConnectorConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'A structure that contains the parameters for a connector object.',
        }),
    ).exactOptional(),
    AccessRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'With AS2, you can send files by calling <code>StartFileTransfer</code> and specifying the file paths in the request parameter, <code>SendFilePaths</code>. We use the file’s parent directory (for example, for <code>--send-file-paths /bucket/dir/file.txt</code>, parent directory is <code>/bucket/dir/</code>) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the <code>AccessRole</code> needs to provide read and write access to the parent directory of the file location used in the <code>StartFileTransfer</code> request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with <code>StartFileTransfer</code>.',
        }),
    ).exactOptional(),
    LoggingRole: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectorId'], title: 'UpdateConnectorRequest' })
  .openapi('UpdateConnectorRequest')

const UpdateHostKeyResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the server identifier for the server that contains the updated host key.',
        }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'Returns the host key identifier for the updated host key.' }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeyId'] })
  .openapi('UpdateHostKeyResponse')

const UpdateHostKeyRequestSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the server that contains the host key that you are updating.',
        }),
    ),
    HostKeyId: HostKeyIdSchema.and(
      z.any().openapi({ description: 'The identifier of the host key that you are updating.' }),
    ),
    Description: HostKeyDescriptionSchema.and(
      z.any().openapi({ description: 'An updated description for the host key.' }),
    ),
  })
  .openapi({ required: ['ServerId', 'HostKeyId', 'Description'], title: 'UpdateHostKeyRequest' })
  .openapi('UpdateHostKeyRequest')

const UpdateProfileResponseSchema = z
  .object({
    ProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({ description: "Returns the identifier for the profile that's being updated." }),
    ),
  })
  .openapi({ required: ['ProfileId'] })
  .openapi('UpdateProfileResponse')

const UpdateProfileRequestSchema = z
  .object({
    ProfileId: ProfileIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the profile object that you are updating.' }),
    ),
    CertificateIds: CertificateIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProfileId'], title: 'UpdateProfileRequest' })
  .openapi('UpdateProfileRequest')

const UpdateServerResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server that the user account is assigned to.',
        }),
    ),
  })
  .openapi({ required: ['ServerId'] })
  .openapi('UpdateServerResponse')

const NullableRoleSchema = z
  .string()
  .regex(/^$|arn:.*role\/.*/)
  .max(2048)
  .openapi('NullableRole')

const UpdateServerRequestSchema = z
  .object({
    Certificate: CertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when <code>Protocols</code> is set to <code>FTPS</code>.</p> <p>To request a new public certificate, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate</a> in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p> <p>To import an existing certificate into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates into ACM</a> in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p> <p>To request a private certificate to use FTPS through private IP addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html">Request a private certificate</a> in the <i> Amazon Web ServicesCertificate Manager User Guide</i>.</p> <p>Certificates with the following cryptographic algorithms and key sizes are supported:</p> <ul> <li> <p>2048-bit RSA (RSA_2048)</p> </li> <li> <p>4096-bit RSA (RSA_4096)</p> </li> <li> <p>Elliptic Prime Curve 256 bit (EC_prime256v1)</p> </li> <li> <p>Elliptic Prime Curve 384 bit (EC_secp384r1)</p> </li> <li> <p>Elliptic Prime Curve 521 bit (EC_secp521r1)</p> </li> </ul> <note> <p>The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.</p> </note>',
        }),
    ).exactOptional(),
    ProtocolDetails: ProtocolDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The protocol settings that are configured for your server.</p> <ul> <li> <p> To indicate passive mode (for FTP and FTPS protocols), use the <code>PassiveIp</code> parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer. </p> </li> <li> <p>To ignore the error that is generated when the client attempts to use the <code>SETSTAT</code> command on a file that you are uploading to an Amazon S3 bucket, use the <code>SetStatOption</code> parameter. To have the Transfer Family server ignore the <code>SETSTAT</code> command and upload files without needing to make any changes to your SFTP client, set the value to <code>ENABLE_NO_OP</code>. If you set the <code>SetStatOption</code> parameter to <code>ENABLE_NO_OP</code>, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a <code>SETSTAT</code> call.</p> </li> <li> <p>To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the <code>TlsSessionResumptionMode</code> parameter.</p> </li> <li> <p> <code>As2Transports</code> indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EndpointDetails: EndpointDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.",
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> <p>It is recommended that you use <code>VPC</code> as the <code>EndpointType</code>. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with <code>EndpointType</code> set to <code>VPC_ENDPOINT</code>.</p> </note>",
        }),
    ).exactOptional(),
    HostKey: HostKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms.</p> <p>Use the following command to generate an RSA 2048 bit key with no passphrase:</p> <p> <code>ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key</code>.</p> <p>Use a minimum value of 2048 for the <code>-b</code> option. You can create a stronger key by using 3072 or 4096.</p> <p>Use the following command to generate an ECDSA 256 bit key with no passphrase:</p> <p> <code>ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key</code>.</p> <p>Valid values for the <code>-b</code> option for ECDSA are 256, 384, and 521.</p> <p>Use the following command to generate an ED25519 key with no passphrase:</p> <p> <code>ssh-keygen -t ed25519 -N "" -f my-new-server-key</code>.</p> <p>For all of these commands, you can replace <i>my-new-server-key</i> with a string of your choice.</p> <important> <p>If you aren\'t planning to migrate existing users from an existing SFTP-enabled server to a new server, don\'t update the host key. Accidentally changing a server\'s host key can be disruptive.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key">Manage host keys for your SFTP-enabled server</a> in the <i>Transfer Family User Guide</i>.</p>',
        }),
    ).exactOptional(),
    IdentityProviderDetails: IdentityProviderDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array containing all of the information required to call a customer's authentication API method.",
        }),
    ).exactOptional(),
    LoggingRole: NullableRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.',
        }),
    ).exactOptional(),
    PostAuthenticationLoginBanner: PostAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.</p> <note> <p>The SFTP protocol does not support post-authentication display banners.</p> </note>',
        }),
    ).exactOptional(),
    PreAuthenticationLoginBanner: PreAuthenticationLoginBannerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:</p> <p> <code>This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.</code> </p>',
        }),
    ).exactOptional(),
    Protocols: ProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:</p> <ul> <li> <p> <code>SFTP</code> (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH</p> </li> <li> <p> <code>FTPS</code> (File Transfer Protocol Secure): File transfer with TLS encryption</p> </li> <li> <p> <code>FTP</code> (File Transfer Protocol): Unencrypted file transfer</p> </li> <li> <p> <code>AS2</code> (Applicability Statement 2): used for transporting structured business-to-business data</p> </li> </ul> <note> <ul> <li> <p>If you select <code>FTPS</code>, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.</p> </li> <li> <p>If <code>Protocol</code> includes either <code>FTP</code> or <code>FTPS</code>, then the <code>EndpointType</code> must be <code>VPC</code> and the <code>IdentityProviderType</code> must be either <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>FTP</code>, then <code>AddressAllocationIds</code> cannot be associated.</p> </li> <li> <p>If <code>Protocol</code> is set only to <code>SFTP</code>, the <code>EndpointType</code> can be set to <code>PUBLIC</code> and the <code>IdentityProviderType</code> can be set any of the supported identity types: <code>SERVICE_MANAGED</code>, <code>AWS_DIRECTORY_SERVICE</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> </li> <li> <p>If <code>Protocol</code> includes <code>AS2</code>, then the <code>EndpointType</code> must be <code>VPC</code>, and domain must be Amazon S3.</p> </li> </ul> </note>",
        }),
    ).exactOptional(),
    SecurityPolicyName: SecurityPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the security policy that is attached to the server.',
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance that the user account is assigned to.',
        }),
    ),
    WorkflowDetails: WorkflowDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.</p> <p>To remove an associated workflow from a server, you can provide an empty <code>OnUpload</code> object, as in the following example.</p> <p> <code>aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{\"OnUpload\":[]}'</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServerId'], title: 'UpdateServerRequest' })
  .openapi('UpdateServerRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const UpdateUserResponseSchema = z
  .object({
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance that the user account is assigned to.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for a user that is assigned to a server instance that was specified in the request.',
        }),
    ),
  })
  .openapi({
    required: ['ServerId', 'UserName'],
    description:
      " <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.",
  })
  .openapi('UpdateUserResponse')

const UpdateUserRequestSchema = z
  .object({
    HomeDirectory: HomeDirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The landing directory (folder) for a user when they log in to the server using the client.</p> <p>A <code>HomeDirectory</code> example is <code>/bucket_name/home/mydirectory</code>.</p>',
        }),
    ).exactOptional(),
    HomeDirectoryType: HomeDirectoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to <code>PATH</code>, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it <code>LOGICAL</code>, you need to provide mappings in the <code>HomeDirectoryMappings</code> for how you want to make Amazon S3 or Amazon EFS paths visible to your users.",
        }),
    ).exactOptional(),
    HomeDirectoryMappings: HomeDirectoryMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the <code>Entry</code> and <code>Target</code> pair, where <code>Entry</code> shows how the path is made visible and <code>Target</code> is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in <code>Target</code>. This value can be set only when <code>HomeDirectoryType</code> is set to <i>LOGICAL</i>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example.</p> <p> <code>[ { "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <p>In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("<code>chroot</code>"). To do this, you can set <code>Entry</code> to \'/\' and set <code>Target</code> to the HomeDirectory parameter value.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p>',
        }),
    ).exactOptional(),
    Policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user\'s access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p> <note> <p>This policy applies only when the domain of <code>ServerId</code> is Amazon S3. Amazon EFS does not use session policies.</p> <p>For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the <code>Policy</code> argument.</p> <p>For an example of a session policy, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/session-policy">Creating a session policy</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">AssumeRole</a> in the <i>Amazon Web Services Security Token Service API Reference</i>.</p> </note>',
        }),
    ).exactOptional(),
    PosixProfile: PosixProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions that are set on files and directories in your file system determines the level of access your users get when transferring files into and out of your Amazon EFS file systems.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.",
        }),
    ).exactOptional(),
    ServerId: ServerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A system-assigned unique identifier for a server instance that the user account is assigned to.',
        }),
    ),
    UserName: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique string that identifies a user and is associated with a server as specified by the <code>ServerId</code>. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.",
        }),
    ),
  })
  .openapi({ required: ['ServerId', 'UserName'], title: 'UpdateUserRequest' })
  .openapi('UpdateUserRequest')

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

export const postXAmzTargetTransferServiceCreateAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateAccess',
  description:
    'Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.',
  operationId: 'CreateAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccessResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateAgreementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateAgreement',
  description:
    '<p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>',
  operationId: 'CreateAgreement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateAgreement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateAgreement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAgreementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAgreementResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateConnector',
  description:
    'Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.',
  operationId: 'CreateConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectorResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateProfile',
  description: 'Creates the local or partner profile to use for AS2 transfers.',
  operationId: 'CreateProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProfileResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateServer',
  description:
    'Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.',
  operationId: 'CreateServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServerResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateUser',
  description:
    "Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.",
  operationId: 'CreateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceCreateWorkflowRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.CreateWorkflow',
  description:
    ' Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. ',
  operationId: 'CreateWorkflow',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.CreateWorkflow')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.CreateWorkflow'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkflowResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteAccess',
  description:
    'Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.',
  operationId: 'DeleteAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteAgreementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteAgreement',
  description: "Delete the agreement that's specified in the provided <code>AgreementId</code>.",
  operationId: 'DeleteAgreement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteAgreement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteAgreement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAgreementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteCertificate',
  description:
    "Deletes the certificate that's specified in the <code>CertificateId</code> parameter.",
  operationId: 'DeleteCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteConnector',
  description: "Deletes the agreement that's specified in the provided <code>ConnectorId</code>.",
  operationId: 'DeleteConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteHostKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteHostKey',
  description: "Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.",
  operationId: 'DeleteHostKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteHostKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteHostKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteHostKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteProfile',
  description: "Deletes the profile that's specified in the <code>ProfileId</code> parameter.",
  operationId: 'DeleteProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteServer',
  description:
    '<p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>',
  operationId: 'DeleteServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteSshPublicKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteSshPublicKey',
  description: "Deletes a user's Secure Shell (SSH) public key.",
  operationId: 'DeleteSshPublicKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteSshPublicKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteSshPublicKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSshPublicKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteUser',
  description:
    "<p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>",
  operationId: 'DeleteUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDeleteWorkflowRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DeleteWorkflow',
  description: 'Deletes the specified workflow.',
  operationId: 'DeleteWorkflow',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DeleteWorkflow')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DeleteWorkflow'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeAccess',
  description:
    '<p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>',
  operationId: 'DescribeAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccessResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeAgreementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeAgreement',
  description: "Describes the agreement that's identified by the <code>AgreementId</code>.",
  operationId: 'DescribeAgreement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeAgreement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeAgreement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAgreementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAgreementResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeCertificate',
  description: "Describes the certificate that's identified by the <code>CertificateId</code>.",
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
        .literal('TransferService.DescribeCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeCertificate'] },
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
      content: { 'application/json': { schema: DescribeCertificateResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeConnector',
  description: "Describes the connector that's identified by the <code>ConnectorId.</code> ",
  operationId: 'DescribeConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectorResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeExecution',
  description:
    'You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.',
  operationId: 'DescribeExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExecutionResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeHostKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeHostKey',
  description:
    "Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.",
  operationId: 'DescribeHostKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeHostKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeHostKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeHostKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHostKeyResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeProfile',
  description: "Returns the details of the profile that's specified by the <code>ProfileId</code>.",
  operationId: 'DescribeProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProfileResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeSecurityPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeSecurityPolicy',
  description:
    'Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy\'s properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.',
  operationId: 'DescribeSecurityPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeSecurityPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeSecurityPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSecurityPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSecurityPolicyResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeServer',
  description:
    "<p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>",
  operationId: 'DescribeServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServerResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeUser',
  description:
    '<p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>',
  operationId: 'DescribeUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceDescribeWorkflowRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.DescribeWorkflow',
  description: 'Describes the specified workflow.',
  operationId: 'DescribeWorkflow',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.DescribeWorkflow')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.DescribeWorkflow'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeWorkflowResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceImportCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ImportCertificate',
  description:
    'Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.',
  operationId: 'ImportCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ImportCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ImportCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportCertificateResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceImportHostKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ImportHostKey',
  description:
    "Adds a host key to the server that's specified by the <code>ServerId</code> parameter.",
  operationId: 'ImportHostKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ImportHostKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ImportHostKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportHostKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportHostKeyResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceImportSshPublicKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ImportSshPublicKey',
  description:
    '<p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>',
  operationId: 'ImportSshPublicKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ImportSshPublicKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ImportSshPublicKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportSshPublicKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportSshPublicKeyResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListAccessesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListAccesses',
  description: 'Lists the details for all the accesses you have on your server.',
  operationId: 'ListAccesses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListAccesses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListAccesses'] },
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
      content: { 'application/json': { schema: ListAccessesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccessesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListAgreementsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListAgreements',
  description:
    "Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.",
  operationId: 'ListAgreements',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListAgreements')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListAgreements'] },
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
      content: { 'application/json': { schema: ListAgreementsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAgreementsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListCertificatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListCertificates',
  description:
    'Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.',
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
        .literal('TransferService.ListCertificates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListCertificates'] },
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
      content: { 'application/json': { schema: ListCertificatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCertificatesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListConnectorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListConnectors',
  description: 'Lists the connectors for the specified Region.',
  operationId: 'ListConnectors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListConnectors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListConnectors'] },
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
      content: { 'application/json': { schema: ListConnectorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectorsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListExecutions',
  description: 'Lists all executions for the specified workflow.',
  operationId: 'ListExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListExecutions'] },
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
      content: { 'application/json': { schema: ListExecutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExecutionsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListHostKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListHostKeys',
  description:
    "Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.",
  operationId: 'ListHostKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListHostKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListHostKeys'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListHostKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHostKeysResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListProfiles',
  description:
    'Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.',
  operationId: 'ListProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListProfiles'] },
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
      content: { 'application/json': { schema: ListProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfilesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListSecurityPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListSecurityPolicies',
  description:
    'Lists the security policies that are attached to your file transfer protocol-enabled servers.',
  operationId: 'ListSecurityPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListSecurityPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListSecurityPolicies'] },
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
      content: { 'application/json': { schema: ListSecurityPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSecurityPoliciesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListServersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListServers',
  description:
    'Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.',
  operationId: 'ListServers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListServers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListServers'] },
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
    body: { content: { 'application/json': { schema: ListServersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServersResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListTagsForResource',
  description:
    'Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.',
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
        .literal('TransferService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListTagsForResource'] },
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
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListUsers',
  description:
    'Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.',
  operationId: 'ListUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListUsers'] },
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
    body: { content: { 'application/json': { schema: ListUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceListWorkflowsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.ListWorkflows',
  description: 'Lists all of your workflows.',
  operationId: 'ListWorkflows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.ListWorkflows')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.ListWorkflows'] },
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
      content: { 'application/json': { schema: ListWorkflowsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkflowsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceSendWorkflowStepStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.SendWorkflowStepState',
  description:
    '<p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>',
  operationId: 'SendWorkflowStepState',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.SendWorkflowStepState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.SendWorkflowStepState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendWorkflowStepStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendWorkflowStepStateResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceStartFileTransferRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.StartFileTransfer',
  description:
    'Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. ',
  operationId: 'StartFileTransfer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.StartFileTransfer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.StartFileTransfer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFileTransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFileTransferResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceStartServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.StartServer',
  description:
    '<p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>',
  operationId: 'StartServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.StartServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.StartServer'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartServerRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceStopServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.StopServer',
  description:
    '<p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>',
  operationId: 'StopServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.StopServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.StopServer'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopServerRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.TagResource',
  description:
    '<p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>',
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
        .literal('TransferService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceTestIdentityProviderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.TestIdentityProvider',
  description:
    '<p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>',
  operationId: 'TestIdentityProvider',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.TestIdentityProvider')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.TestIdentityProvider'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestIdentityProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestIdentityProviderResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UntagResource',
  description:
    '<p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>',
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
        .literal('TransferService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateAccess',
  description:
    'Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.',
  operationId: 'UpdateAccess',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAccessResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateAgreementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateAgreement',
  description:
    'Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.',
  operationId: 'UpdateAgreement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateAgreement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateAgreement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAgreementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAgreementResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateCertificateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateCertificate',
  description: 'Updates the active and inactive dates for a certificate.',
  operationId: 'UpdateCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateCertificate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateCertificate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCertificateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCertificateResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateConnector',
  description:
    'Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.',
  operationId: 'UpdateConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectorResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateHostKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateHostKey',
  description:
    "Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.",
  operationId: 'UpdateHostKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateHostKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateHostKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateHostKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateHostKeyResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateProfile',
  description:
    'Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.',
  operationId: 'UpdateProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProfileResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateServerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateServer',
  description:
    "<p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>",
  operationId: 'UpdateServer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateServer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateServer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServerResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetTransferServiceUpdateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=TransferService.UpdateUser',
  description:
    '<p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>',
  operationId: 'UpdateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('TransferService.UpdateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['TransferService.UpdateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'InternalServiceError',
      content: { 'application/json': { schema: InternalServiceErrorSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
