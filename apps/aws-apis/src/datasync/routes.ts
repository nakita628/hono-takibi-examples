import { createRoute, z } from '@hono/zod-openapi'

const CancelTaskExecutionResponseSchema = z.object({}).openapi('CancelTaskExecutionResponse')

const TaskExecutionArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task\/task-[0-9a-f]{17}\/execution\/exec-[0-9a-f]{17}$/,
  )
  .max(128)
  .openapi('TaskExecutionArn')

const CancelTaskExecutionRequestSchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the task execution to stop.' }),
    ),
  })
  .openapi({
    required: ['TaskExecutionArn'],
    title: 'CancelTaskExecutionRequest',
    description: 'CancelTaskExecutionRequest',
  })
  .openapi('CancelTaskExecutionRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalExceptionSchema = z.any().openapi('InternalException')

const AgentArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent\/agent-[0-9a-z]{17}$/,
  )
  .max(128)
  .openapi('AgentArn')

const CreateAgentResponseSchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the agent. Use the <code>ListAgents</code> operation to return a list of agents for your account and Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateAgentResponse', required: [] })
  .openapi('CreateAgentResponse')

const ActivationKeySchema = z
  .string()
  .regex(/[A-Z0-9]{5}(-[A-Z0-9]{5}){4}/)
  .max(29)
  .openapi('ActivationKey')

const TagValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s+=._:@\/-]+$/)
  .min(1)
  .max(256)
  .openapi('TagValue')

const TagKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s+=._:\/-]+$/)
  .min(1)
  .max(256)
  .openapi('TagKey')

const TagListEntrySchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'The key for an Amazon Web Services resource tag.' }),
    ),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value for an Amazon Web Services resource tag.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      "A key-value pair representing a single tag that's been applied to an Amazon Web Services resource.",
  })
  .openapi('TagListEntry')

const InputTagListSchema = z.array(TagListEntrySchema).min(0).max(50).openapi('InputTagList')

const VpcEndpointIdSchema = z
  .string()
  .regex(/^vpce-[0-9a-f]{17}$/)
  .openapi('VpcEndpointId')

const Ec2SubnetArnSchema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:subnet\/.*$/)
  .max(128)
  .openapi('Ec2SubnetArn')

const PLSubnetArnListSchema = z.array(Ec2SubnetArnSchema).length(1).openapi('PLSubnetArnList')

const Ec2SecurityGroupArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group\/.*$/,
  )
  .max(128)
  .openapi('Ec2SecurityGroupArn')

const PLSecurityGroupArnListSchema = z
  .array(Ec2SecurityGroupArnSchema)
  .length(1)
  .openapi('PLSecurityGroupArnList')

const CreateAgentRequestSchema = z
  .object({
    ActivationKey: ActivationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the DataSync console.</p> <p>The redirect URL returned in the response provides you the activation key for your agent in the query string parameter <code>activationKey</code>. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent.</p> <p>For more information, see Activating an Agent in the <i>DataSync User Guide.</i> </p>',
        }),
    ),
    AgentName: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name you configured for your agent. This value is a text reference that is used to identify the agent in the console.',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key-value pair that represents the tag that you want to associate with the agent. The value can be an empty string. This value helps you manage, filter, and search for your agents.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. </p> </note>',
        }),
    ).exactOptional(),
    VpcEndpointId: VpcEndpointIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the VPC (virtual private cloud) endpoint that the agent has access to. This is the client-side VPC endpoint, also called a PrivateLink. If you don\'t have a PrivateLink VPC endpoint, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#create-endpoint-service">Creating a VPC Endpoint Service Configuration</a> in the Amazon VPC User Guide.</p> <p>VPC endpoint ID looks like this: <code>vpce-01234d5aff67890e1</code>.</p>',
        }),
    ).exactOptional(),
    SubnetArns: PLSubnetArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task. The agent that runs a task must be private. When you start a task that is associated with an agent created in a VPC, or one that has access to an IP address in a VPC, then the task is also private. In this case, DataSync creates four network interfaces for each task in your subnet. For a data transfer to work, the agent must be able to route to all these four network interfaces.',
        }),
    ).exactOptional(),
    SecurityGroupArns: PLSecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of the security groups used to protect your data transfer task subnets. See <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Ec2Config.html#DataSync-Type-Ec2Config-SecurityGroupArns">SecurityGroupArns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ActivationKey'],
    title: 'CreateAgentRequest',
    description: 'CreateAgentRequest',
  })
  .openapi('CreateAgentRequest')

const LocationArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location\/loc-[0-9a-z]{17}$/,
  )
  .max(128)
  .openapi('LocationArn')

const CreateLocationEfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon EFS file system location that you create.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateLocationEfs', required: [] })
  .openapi('CreateLocationEfsResponse')

const EfsSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\p{Zs}]*$/u)
  .max(4096)
  .openapi('EfsSubdirectory')

const EfsFilesystemArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\-0-9]*:[0-9]{12}:file-system\/fs-.*$/,
  )
  .max(128)
  .openapi('EfsFilesystemArn')

const Ec2SecurityGroupArnListSchema = z
  .array(Ec2SecurityGroupArnSchema)
  .min(1)
  .max(5)
  .openapi('Ec2SecurityGroupArnList')

const Ec2ConfigSchema = z
  .object({
    SubnetArn: Ec2SubnetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the ARN of a subnet where DataSync creates the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">network interfaces</a> for managing traffic during your transfer.</p> <p>The subnet must be located:</p> <ul> <li> <p>In the same virtual private cloud (VPC) as the Amazon EFS file system.</p> </li> <li> <p>In the same Availability Zone as at least one mount target for the Amazon EFS file system.</p> </li> </ul> <note> <p>You don\'t need to specify a subnet that includes a file system mount target.</p> </note>',
        }),
    ),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Amazon Resource Names (ARNs) of the security groups associated with an Amazon EFS file system's mount target.",
        }),
    ),
  })
  .openapi({
    required: ['SubnetArn', 'SecurityGroupArns'],
    description:
      'The subnet and security groups that DataSync uses to access your Amazon EFS file system.',
  })
  .openapi('Ec2Config')

const EfsAccessPointArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\-0-9]+:[0-9]{12}:access-point\/fsap-[0-9a-f]{8,40}$/,
  )
  .max(128)
  .openapi('EfsAccessPointArn')

const IamRoleArnSchema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role\/.*$/)
  .max(2048)
  .openapi('IamRoleArn')

const EfsInTransitEncryptionSchema = z.enum(['NONE', 'TLS1_2']).openapi('EfsInTransitEncryption')

const CreateLocationEfsRequestSchema = z
  .object({
    Subdirectory: EfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location). By default, DataSync uses the root directory, but you can also include subdirectories.</p> <note> <p>You must specify a value with forward slashes (for example, <code>/path/to/folder</code>).</p> </note>',
        }),
    ).exactOptional(),
    EfsFilesystemArn: EfsFilesystemArnSchema.and(
      z.any().openapi({ description: 'Specifies the ARN for the Amazon EFS file system.' }),
    ),
    Ec2Config: Ec2ConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.',
        }),
    ),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.',
        }),
    ).exactOptional(),
    AccessPointArn: EfsAccessPointArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.',
        }),
    ).exactOptional(),
    FileSystemAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.',
        }),
    ).exactOptional(),
    InTransitEncryption: EfsInTransitEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to or from the Amazon EFS file system.</p> <p>If you specify an access point using <code>AccessPointArn</code> or an IAM role using <code>FileSystemAccessRoleArn</code>, you must set this parameter to <code>TLS1_2</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EfsFilesystemArn', 'Ec2Config'],
    title: 'CreateLocationEfsRequest',
    description: 'CreateLocationEfsRequest',
  })
  .openapi('CreateLocationEfsRequest')

const CreateLocationFsxLustreResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the FSx for Lustre file system location that's created. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationFsxLustreResponse')

const FsxFilesystemArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]*:[0-9]{12}:file-system\/fs-.*$/,
  )
  .max(128)
  .openapi('FsxFilesystemArn')

const FsxLustreSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\$\p{Zs}]+$/u)
  .max(4096)
  .openapi('FsxLustreSubdirectory')

const CreateLocationFsxLustreRequestSchema = z
  .object({
    FsxFilesystemArn: FsxFilesystemArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for the FSx for Lustre file system.',
        }),
    ),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Lustre file system.',
        }),
    ),
    Subdirectory: FsxLustreSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A subdirectory in the location's path. This subdirectory in the FSx for Lustre file system is used to read data from the FSx for Lustre source location or write data to the FSx for Lustre destination.",
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FsxFilesystemArn', 'SecurityGroupArns'],
    title: 'CreateLocationFsxLustreRequest',
  })
  .openapi('CreateLocationFsxLustreRequest')

const CreateLocationFsxOntapResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ARN of the FSx for ONTAP file system location that you create.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationFsxOntapResponse')

const NfsVersionSchema = z.enum(['AUTOMATIC', 'NFS3', 'NFS4_0', 'NFS4_1']).openapi('NfsVersion')

const NfsMountOptionsSchema = z
  .object({
    Version: NfsVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails.</p> <p>You can specify the following options:</p> <ul> <li> <p> <code>AUTOMATIC</code> (default): DataSync chooses NFS version 4.1.</p> </li> <li> <p> <code>NFS3</code>: Stateless protocol version that allows for asynchronous writes on the server.</p> </li> <li> <p> <code>NFSv4_0</code>: Stateful, firewall-friendly protocol version that supports delegations and pseudo file systems.</p> </li> <li> <p> <code>NFSv4_1</code>: Stateful protocol version that supports sessions, directory delegations, and parallel data processing. NFS version 4.1 also includes all features available in version 4.0.</p> </li> </ul> <note> <p>DataSync currently only supports NFS version 3 with Amazon FSx for NetApp ONTAP locations.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies how DataSync can access a location using the NFS protocol.',
    required: [],
  })
  .openapi('NfsMountOptions')

const FsxProtocolNfsSchema = z
  .object({ MountOptions: NfsMountOptionsSchema.exactOptional() })
  .openapi({
    description:
      'Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system.',
    required: [],
  })
  .openapi('FsxProtocolNfs')

const SmbDomainSchema = z
  .string()
  .regex(/^[A-Za-z0-9]((\.|-+)?[A-Za-z0-9]){0,252}$/)
  .max(253)
  .openapi('SmbDomain')

const SmbVersionSchema = z
  .enum(['AUTOMATIC', 'SMB2', 'SMB3', 'SMB1', 'SMB2_0'])
  .openapi('SmbVersion')

const SmbMountOptionsSchema = z
  .object({
    Version: SmbVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.</p> <p>These are the following options for configuring the SMB version:</p> <ul> <li> <p> <code>AUTOMATIC</code> (default): DataSync and the SMB file server negotiate a protocol version that they mutually support. (DataSync supports SMB versions 1.0 and later.)</p> <p>This is the recommended option. If you instead choose a specific version that your file server doesn\'t support, you may get an <code>Operation Not Supported</code> error.</p> </li> <li> <p> <code>SMB3</code>: Restricts the protocol negotiation to only SMB version 3.0.2.</p> </li> <li> <p> <code>SMB2</code>: Restricts the protocol negotiation to only SMB version 2.1.</p> </li> <li> <p> <code>SMB2_0</code>: Restricts the protocol negotiation to only SMB version 2.0.</p> </li> <li> <p> <code>SMB1</code>: Restricts the protocol negotiation to only SMB version 1.0.</p> <note> <p>The <code>SMB1</code> option isn\'t available when <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOntap.html">creating an Amazon FSx for NetApp ONTAP location</a>.</p> </note> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.',
    required: [],
  })
  .openapi('SmbMountOptions')

const SmbPasswordSchema = z
  .string()
  .regex(/^.{0,104}$/)
  .max(104)
  .openapi('SmbPassword')

const SmbUserSchema = z
  .string()
  .regex(/^[^\x5B\x5D\\\/:;|=,+*?]{1,104}$/)
  .max(104)
  .openapi('SmbUser')

const FsxProtocolSmbSchema = z
  .object({
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that your storage virtual machine (SVM) belongs to.',
        }),
    ).exactOptional(),
    MountOptions: SmbMountOptionsSchema.exactOptional(),
    Password: SmbPasswordSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the password of a user who has permission to access your SVM.',
        }),
    ),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM.</p> <p>If you provide a user in your Active Directory, note the following:</p> <ul> <li> <p>If you\'re using Directory Service for Microsoft Active Directory, the user must be a member of the Amazon Web Services Delegated FSx Administrators group.</p> </li> <li> <p>If you\'re using a self-managed Active Directory, the user must be a member of either the Domain Admins group or a custom group that you specified for file system administration when you created your file system.</p> </li> </ul> <p>Make sure that the user has the permissions it needs to copy the data you want:</p> <ul> <li> <p> <code>SE_TCB_NAME</code>: Required to set object ownership and file metadata. With this privilege, you also can copy NTFS discretionary access lists (DACLs).</p> </li> <li> <p> <code>SE_SECURITY_NAME</code>: May be needed to copy NTFS system access control lists (SACLs). This operation specifically requires the Windows privilege, which is granted to members of the Domain Admins group. If you configure your task to copy SACLs, make sure that the user has the required privileges. For information about copying SACLs, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html#configure-ownership-and-permissions">Ownership and permissions-related options</a>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Password', 'User'],
    description:
      'Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>.',
  })
  .openapi('FsxProtocolSmb')

const FsxProtocolSchema = z
  .object({
    NFS: FsxProtocolNfsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for OpenZFS file system or FSx for ONTAP file system's storage virtual machine (SVM).",
        }),
    ).exactOptional(),
    SMB: FsxProtocolSmbSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.',
    required: [],
  })
  .openapi('FsxProtocol')

const StorageVirtualMachineArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:storage-virtual-machine\/fs-[0-9a-f]+\/svm-[0-9a-f]{17,}$/,
  )
  .max(162)
  .openapi('StorageVirtualMachineArn')

const FsxOntapSubdirectorySchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$/)
  .max(255)
  .openapi('FsxOntapSubdirectory')

const CreateLocationFsxOntapRequestSchema = z
  .object({
    Protocol: FsxProtocolSchema,
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the Amazon EC2 security groups that provide access to your file system's preferred subnet.</p> <p>The security groups must allow outbound traffic on the following ports (depending on the protocol you use):</p> <ul> <li> <p> <b>Network File System (NFS)</b>: TCP ports 111, 635, and 2049</p> </li> <li> <p> <b>Server Message Block (SMB)</b>: TCP port 445</p> </li> </ul> <p>Your file system's security groups must also allow inbound traffic on the same ports.</p>",
        }),
    ),
    StorageVirtualMachineArn: StorageVirtualMachineArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.',
        }),
    ),
    Subdirectory: FsxOntapSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a path to the file share in the SVM where you'll copy your data.</p> <p>You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be <code>/vol1</code>, <code>/vol1/tree1</code>, or <code>/share1</code>.</p> <note> <p>Don't specify a junction path in the SVM's root volume. For more information, see <a href=\"https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html\">Managing FSx for ONTAP storage virtual machines</a> in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p> </note>",
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Protocol', 'SecurityGroupArns', 'StorageVirtualMachineArn'],
    title: 'CreateLocationFsxOntapRequest',
  })
  .openapi('CreateLocationFsxOntapRequest')

const CreateLocationFsxOpenZfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the FSx for OpenZFS file system location that you created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationFsxOpenZfsResponse')

const FsxOpenZfsSubdirectorySchema = z
  .string()
  .regex(/^[^\u0000\u0085\u2028\u2029\r\n]{1,4096}$/)
  .max(4096)
  .openapi('FsxOpenZfsSubdirectory')

const CreateLocationFsxOpenZfsRequestSchema = z
  .object({
    FsxFilesystemArn: FsxFilesystemArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.',
        }),
    ),
    Protocol: FsxProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of protocol that DataSync uses to access your file system.',
        }),
    ),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.',
        }),
    ),
    Subdirectory: FsxOpenZfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A subdirectory in the location's path that must begin with <code>/fsx</code>. DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location).",
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FsxFilesystemArn', 'Protocol', 'SecurityGroupArns'],
    title: 'CreateLocationFsxOpenZfsRequest',
  })
  .openapi('CreateLocationFsxOpenZfsRequest')

const CreateLocationFsxWindowsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the FSx for Windows File Server file system location you created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationFsxWindowsResponse')

const FsxWindowsSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\$\p{Zs}]+$/u)
  .max(4096)
  .openapi('FsxWindowsSubdirectory')

const CreateLocationFsxWindowsRequestSchema = z
  .object({
    Subdirectory: FsxWindowsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination location).',
        }),
    ).exactOptional(),
    FsxFilesystemArn: FsxFilesystemArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.',
        }),
    ),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the ARNs of the security groups that provide access to your file system's preferred subnet.</p> <note> <p>If you choose a security group that doesn't allow connections from within itself, do one of the following:</p> <ul> <li> <p>Configure the security group to allow it to communicate within itself.</p> </li> <li> <p>Choose a different security group that can communicate with the mount target's security group.</p> </li> </ul> </note>",
        }),
    ),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.',
        }),
    ).exactOptional(),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the user who has the permissions to access files and folders in the file system.</p> <p>For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see <a href="create-fsx-location.html#FSxWuser">user</a>.</p>',
        }),
    ),
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Windows domain that the FSx for Windows File Server belongs to.',
        }),
    ).exactOptional(),
    Password: SmbPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the password of the user who has the permissions to access files and folders in the file system.',
        }),
    ),
  })
  .openapi({
    required: ['FsxFilesystemArn', 'SecurityGroupArns', 'User', 'Password'],
    title: 'CreateLocationFsxWindowsRequest',
  })
  .openapi('CreateLocationFsxWindowsRequest')

const CreateLocationHdfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({ description: "The ARN of the source HDFS cluster location that's created. " }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocationHdfsResponse')

const HdfsSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\$\p{Zs}]+$/u)
  .max(4096)
  .openapi('HdfsSubdirectory')

const HdfsServerHostnameSchema = z
  .string()
  .regex(/^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$/)
  .min(1)
  .max(255)
  .openapi('HdfsServerHostname')

const HdfsServerPortSchema = z.int().min(1).max(65536).openapi('HdfsServerPort')

const HdfsNameNodeSchema = z
  .object({
    Hostname: HdfsServerHostnameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this hostname to communicate with the NameNode in the network.",
        }),
    ),
    Port: HdfsServerPortSchema.and(
      z
        .any()
        .openapi({ description: 'The port that the NameNode uses to listen to client requests.' }),
    ),
  })
  .openapi({
    required: ['Hostname', 'Port'],
    description:
      "The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes.",
  })
  .openapi('HdfsNameNode')

const HdfsNameNodeListSchema = z.array(HdfsNameNodeSchema).min(1).openapi('HdfsNameNodeList')

const HdfsBlockSizeSchema = z.int().min(1048576).max(1073741824).openapi('HdfsBlockSize')

const HdfsReplicationFactorSchema = z.int().min(1).max(512).openapi('HdfsReplicationFactor')

const KmsKeyProviderUriSchema = z
  .string()
  .regex(
    /^kms:\/\/http[s]?@(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])(;(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9]))*:[0-9]{1,5}\/kms$/,
  )
  .min(1)
  .max(255)
  .openapi('KmsKeyProviderUri')

const HdfsRpcProtectionSchema = z
  .enum(['DISABLED', 'AUTHENTICATION', 'INTEGRITY', 'PRIVACY'])
  .openapi('HdfsRpcProtection')

const HdfsDataTransferProtectionSchema = z
  .enum(['DISABLED', 'AUTHENTICATION', 'INTEGRITY', 'PRIVACY'])
  .openapi('HdfsDataTransferProtection')

const QopConfigurationSchema = z
  .object({
    RpcProtection: HdfsRpcProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RPC protection setting configured on the HDFS cluster. This setting corresponds to your <code>hadoop.rpc.protection</code> setting in your <code>core-site.xml</code> file on your Hadoop cluster.',
        }),
    ).exactOptional(),
    DataTransferProtection: HdfsDataTransferProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data transfer protection setting configured on the HDFS cluster. This setting corresponds to your <code>dfs.data.transfer.protection</code> setting in the <code>hdfs-site.xml</code> file on your Hadoop cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster.',
    required: [],
  })
  .openapi('QopConfiguration')

const HdfsAuthenticationTypeSchema = z
  .enum(['SIMPLE', 'KERBEROS'])
  .openapi('HdfsAuthenticationType')

const HdfsUserSchema = z
  .string()
  .regex(/^[_.A-Za-z0-9][-_.A-Za-z0-9]*$/)
  .min(1)
  .max(256)
  .openapi('HdfsUser')

const KerberosPrincipalSchema = z
  .string()
  .regex(/^.+$/)
  .min(1)
  .max(256)
  .openapi('KerberosPrincipal')

const KerberosKeytabFileSchema = z.string().max(65536).openapi('KerberosKeytabFile')

const KerberosKrb5ConfFileSchema = z.string().max(131072).openapi('KerberosKrb5ConfFile')

const AgentArnListSchema = z.array(AgentArnSchema).min(1).max(4).openapi('AgentArnList')

const CreateLocationHdfsRequestSchema = z
  .object({
    Subdirectory: HdfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            "A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to <code>/</code>.",
        }),
    ).exactOptional(),
    NameNodes: HdfsNameNodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.',
        }),
    ),
    BlockSize: HdfsBlockSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).',
        }),
    ).exactOptional(),
    ReplicationFactor: HdfsReplicationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.',
        }),
    ).exactOptional(),
    KmsKeyProviderUri: KmsKeyProviderUriSchema.and(
      z
        .any()
        .openapi({ description: "The URI of the HDFS cluster's Key Management Server (KMS). " }),
    ).exactOptional(),
    QopConfiguration: QopConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If <code>QopConfiguration</code> isn't specified, <code>RpcProtection</code> and <code>DataTransferProtection</code> default to <code>PRIVACY</code>. If you set <code>RpcProtection</code> or <code>DataTransferProtection</code>, the other parameter assumes the same value. ",
        }),
    ).exactOptional(),
    AuthenticationType: HdfsAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of authentication used to determine the identity of the user. ',
        }),
    ),
    SimpleUser: HdfsUserSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user name used to identify the client on the host operating system. </p> <note> <p>If <code>SIMPLE</code> is specified for <code>AuthenticationType</code>, this parameter is required. </p> </note>',
        }),
    ).exactOptional(),
    KerberosPrincipal: KerberosPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Kerberos principal with access to the files and folders on the HDFS cluster. </p> <note> <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this parameter is required.</p> </note>',
        }),
    ).exactOptional(),
    KerberosKeytab: KerberosKeytabFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you're using the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text. </p> <note> <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this parameter is required. </p> </note>",
        }),
    ).exactOptional(),
    KerberosKrb5Conf: KerberosKrb5ConfFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>krb5.conf</code> file that contains the Kerberos configuration information. You can load the <code>krb5.conf</code> file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text. </p> <note> <p>If <code>KERBEROS</code> is specified for <code>AuthenticationType</code>, this parameter is required.</p> </note>",
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS cluster.',
        }),
    ),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['NameNodes', 'AuthenticationType', 'AgentArns'],
    title: 'CreateLocationHdfsRequest',
  })
  .openapi('CreateLocationHdfsRequest')

const CreateLocationNfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source NFS file system location that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateLocationNfsResponse', required: [] })
  .openapi('CreateLocationNfsResponse')

const NfsSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\p{Zs}]+$/u)
  .max(4096)
  .openapi('NfsSubdirectory')

const ServerHostnameSchema = z
  .string()
  .regex(/^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$/)
  .max(255)
  .openapi('ServerHostname')

const OnPremConfigSchema = z
  .object({
    AgentArns: AgentArnListSchema.and(
      z.any().openapi({ description: 'ARNs of the agents to use for an NFS location.' }),
    ),
  })
  .openapi({
    required: ['AgentArns'],
    description:
      'A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.',
  })
  .openapi('OnPremConfig')

const CreateLocationNfsRequestSchema = z
  .object({
    Subdirectory: NfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that\'s exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network. </p> <p>To see all the paths exported by your NFS server, run "<code>showmount -e nfs-server-name</code>" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication. </p> <p>To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with <code>no_root_squash,</code> or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access.</p> <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p> <p>For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.</p>',
        }),
    ),
    ServerHostname: ServerHostnameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this hostname to mount the NFS server in a network. </p> <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p> <note> <p>This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.</p> </note>',
        }),
    ),
    OnPremConfig: OnPremConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server. </p> <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p>',
        }),
    ),
    MountOptions: NfsMountOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The NFS mount options that DataSync can use to mount your NFS share.',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Subdirectory', 'ServerHostname', 'OnPremConfig'],
    title: 'CreateLocationNfsRequest',
    description: 'CreateLocationNfsRequest',
  })
  .openapi('CreateLocationNfsRequest')

const CreateLocationObjectStorageResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the ARN of the object storage system location that you create.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateLocationObjectStorageResponse', required: [] })
  .openapi('CreateLocationObjectStorageResponse')

const ObjectStorageServerPortSchema = z.int().min(1).max(65536).openapi('ObjectStorageServerPort')

const ObjectStorageServerProtocolSchema = z
  .enum(['HTTPS', 'HTTP'])
  .openapi('ObjectStorageServerProtocol')

const S3SubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\p{Zs}]*$/u)
  .max(4096)
  .openapi('S3Subdirectory')

const ObjectStorageBucketNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\$\p{Zs}]+$/u)
  .min(3)
  .max(63)
  .openapi('ObjectStorageBucketName')

const ObjectStorageAccessKeySchema = z
  .string()
  .regex(/^.+$/)
  .min(1)
  .max(200)
  .openapi('ObjectStorageAccessKey')

const ObjectStorageSecretKeySchema = z
  .string()
  .regex(/^.+$/)
  .min(1)
  .max(200)
  .openapi('ObjectStorageSecretKey')

const ObjectStorageCertificateSchema = z.string().max(32768).openapi('ObjectStorageCertificate')

const CreateLocationObjectStorageRequestSchema = z
  .object({
    ServerHostname: ServerHostnameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the domain name or IP address of the object storage server. A DataSync agent uses this hostname to mount the object storage server in a network.',
        }),
    ),
    ServerPort: ObjectStorageServerPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).',
        }),
    ).exactOptional(),
    ServerProtocol: ObjectStorageServerProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the protocol that your object storage server uses to communicate.',
        }),
    ).exactOptional(),
    Subdirectory: S3SubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix. ',
        }),
    ).exactOptional(),
    BucketName: ObjectStorageBucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the object storage bucket involved in the transfer.',
        }),
    ),
    AccessKey: ObjectStorageAccessKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.',
        }),
    ).exactOptional(),
    SecretKey: ObjectStorageSecretKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.',
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.',
        }),
    ),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the key-value pair that represents a tag that you want to add to the resource. Tags can help you manage, filter, and search for your resources. We recommend creating a name tag for your location.',
        }),
    ).exactOptional(),
    ServerCertificate: ObjectStorageCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded <code>.pem</code> file (for example, <code>file:///home/user/.ssh/storage_sys_certificate.pem</code>). The certificate can be up to 32768 bytes (before Base64 encoding).</p> <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServerHostname', 'BucketName', 'AgentArns'],
    title: 'CreateLocationObjectStorageRequest',
    description: 'CreateLocationObjectStorageRequest',
  })
  .openapi('CreateLocationObjectStorageRequest')

const CreateLocationS3ResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source Amazon S3 bucket location that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateLocationS3Response', required: [] })
  .openapi('CreateLocationS3Response')

const S3BucketArnSchema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(s3|s3-outposts):[a-z\-0-9]*:[0-9]*:.*$/)
  .max(156)
  .openapi('S3BucketArn')

const S3StorageClassSchema = z
  .enum([
    'STANDARD',
    'STANDARD_IA',
    'ONEZONE_IA',
    'INTELLIGENT_TIERING',
    'GLACIER',
    'DEEP_ARCHIVE',
    'OUTPOSTS',
    'GLACIER_INSTANT_RETRIEVAL',
  ])
  .openapi('S3StorageClass')

const S3ConfigSchema = z
  .object({
    BucketAccessRoleArn: IamRoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM role for accessing the S3 bucket. ' }),
    ),
  })
  .openapi({
    required: ['BucketAccessRoleArn'],
    description:
      '<p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>',
  })
  .openapi('S3Config')

const CreateLocationS3RequestSchema = z
  .object({
    Subdirectory: S3SubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.',
        }),
    ).exactOptional(),
    S3BucketArn: S3BucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon S3 bucket. If the bucket is on an Amazon Web Services Outpost, this must be an access point ARN.',
        }),
    ),
    S3StorageClass: S3StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. For buckets in Amazon Web Services Regions, the storage class defaults to Standard. For buckets on Outposts, the storage class defaults to Amazon Web Services S3 Outposts.</p> <p>For more information about S3 storage classes, see <a href="http://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a>. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with S3 storage classes in DataSync</a>.</p>',
        }),
    ).exactOptional(),
    S3Config: S3ConfigSchema,
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you\'re using DataSync on an Amazon Web Services Outpost, specify the Amazon Resource Names (ARNs) of the DataSync agents deployed on your Outpost. For more information about launching a DataSync agent on an Amazon Web Services Outpost, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent on Outposts</a>.',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3BucketArn', 'S3Config'],
    title: 'CreateLocationS3Request',
    description: 'CreateLocationS3Request',
  })
  .openapi('CreateLocationS3Request')

const CreateLocationSmbResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the SMB location that you created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateLocationSmbResponse', required: [] })
  .openapi('CreateLocationSmbResponse')

const SmbSubdirectorySchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-\+\.\/\(\)\$\p{Zs}]+$/u)
  .max(4096)
  .openapi('SmbSubdirectory')

const CreateLocationSmbRequestSchema = z
  .object({
    Subdirectory: SmbSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the share exported by your SMB file server where DataSync will read or write data. You can include a subdirectory in the share path (for example, <code>/path/to/subdirectory</code>). Make sure that other SMB clients in your network can also mount this path.</p> <p>To copy all data in the specified subdirectory, DataSync must be able to mount the SMB share and access all of its data. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>',
        }),
    ),
    ServerHostname: ServerHostnameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.</p> <note> <p>You can't specify an IP version 6 (IPv6) address.</p> </note>",
        }),
    ),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the user name that can mount your SMB file server and has permission to access the files and folders involved in your transfer.</p> <p>For information about choosing a user with the right level of access for your transfer, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>',
        }),
    ),
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Windows domain name that your SMB file server belongs to. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>',
        }),
    ).exactOptional(),
    Password: SmbPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the password of the user who can mount your SMB file server and has permission to access the files and folders involved in your transfer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions">required permissions</a> for SMB locations.</p>',
        }),
    ),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the DataSync agent (or agents) which you want to connect to your SMB file server. You specify an agent by using its Amazon Resource Name (ARN).',
        }),
    ),
    MountOptions: SmbMountOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your location.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Subdirectory', 'ServerHostname', 'User', 'Password', 'AgentArns'],
    title: 'CreateLocationSmbRequest',
    description: 'CreateLocationSmbRequest',
  })
  .openapi('CreateLocationSmbRequest')

const TaskArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task\/task-[0-9a-f]{17}$/,
  )
  .max(128)
  .openapi('TaskArn')

const CreateTaskResponseSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the task.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'CreateTaskResponse', required: [] })
  .openapi('CreateTaskResponse')

const LogGroupArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)(:\*)?$/,
  )
  .max(562)
  .openapi('LogGroupArn')

const VerifyModeSchema = z
  .enum(['POINT_IN_TIME_CONSISTENT', 'ONLY_FILES_TRANSFERRED', 'NONE'])
  .openapi('VerifyMode')

const OverwriteModeSchema = z.enum(['ALWAYS', 'NEVER']).openapi('OverwriteMode')

const AtimeSchema = z.enum(['NONE', 'BEST_EFFORT']).openapi('Atime')

const MtimeSchema = z.enum(['NONE', 'PRESERVE']).openapi('Mtime')

const UidSchema = z.enum(['NONE', 'INT_VALUE', 'NAME', 'BOTH']).openapi('Uid')

const GidSchema = z.enum(['NONE', 'INT_VALUE', 'NAME', 'BOTH']).openapi('Gid')

const PreserveDeletedFilesSchema = z.enum(['PRESERVE', 'REMOVE']).openapi('PreserveDeletedFiles')

const PreserveDevicesSchema = z.enum(['NONE', 'PRESERVE']).openapi('PreserveDevices')

const PosixPermissionsSchema = z.enum(['NONE', 'PRESERVE']).openapi('PosixPermissions')

const BytesPerSecondSchema = z.int().min(-1).openapi('BytesPerSecond')

const TaskQueueingSchema = z.enum(['ENABLED', 'DISABLED']).openapi('TaskQueueing')

const LogLevelSchema = z.enum(['OFF', 'BASIC', 'TRANSFER']).openapi('LogLevel')

const TransferModeSchema = z.enum(['CHANGED', 'ALL']).openapi('TransferMode')

const SmbSecurityDescriptorCopyFlagsSchema = z
  .enum(['NONE', 'OWNER_DACL', 'OWNER_DACL_SACL'])
  .openapi('SmbSecurityDescriptorCopyFlags')

const ObjectTagsSchema = z.enum(['PRESERVE', 'NONE']).openapi('ObjectTags')

const OptionsSchema = z
  .object({
    VerifyMode: VerifyModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how and when DataSync checks the integrity of your data during a transfer. </p> <p>Default value: <code>POINT_IN_TIME_CONSISTENT</code> </p> <p> <code>ONLY_FILES_TRANSFERRED</code> (recommended): DataSync calculates the checksum of transferred files and metadata at the source location. At the end of the transfer, DataSync then compares this checksum to the checksum calculated on those files at the destination.</p> <p>We recommend this option when transferring to S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a>.</p> <p> <code>POINT_IN_TIME_CONSISTENT</code>: At the end of the transfer, DataSync scans the entire source and destination to verify that both locations are fully synchronized.</p> <p>You can\'t use this option when transferring to S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a>.</p> <p> <code>NONE</code>: DataSync doesn\'t run additional verification at the end of the transfer. All data transmissions are still integrity-checked with checksum verification during the transfer.</p>',
        }),
    ).exactOptional(),
    OverwriteMode: OverwriteModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether data at the destination location should be overwritten or preserved. If set to <code>NEVER</code>, a destination file for example will not be replaced by a source file (even if the destination file differs from the source file). If you modify files in the destination and you sync the files, you can use this value to protect against overwriting those changes. </p> <p>Some storage classes have specific behaviors that can affect your Amazon S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with Amazon S3 storage classes in DataSync</a>.</p>',
        }),
    ).exactOptional(),
    Atime: AtimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether to preserve metadata indicating the last time a file was read or written to. If you set <code>Atime</code> to <code>BEST_EFFORT</code>, DataSync attempts to preserve the original <code>Atime</code> attribute on all source files (that is, the version before the <code>PREPARING</code> phase of the task execution).</p> <note> <p>The behavior of <code>Atime</code> isn't fully standard across platforms, so DataSync can only do this on a best-effort basis.</p> </note> <p>Default value: <code>BEST_EFFORT</code> </p> <p> <code>BEST_EFFORT</code>: Attempt to preserve the per-file <code>Atime</code> value (recommended).</p> <p> <code>NONE</code>: Ignore <code>Atime</code>.</p> <note> <p>If <code>Atime</code> is set to <code>BEST_EFFORT</code>, <code>Mtime</code> must be set to <code>PRESERVE</code>. </p> <p>If <code>Atime</code> is set to <code>NONE</code>, <code>Mtime</code> must also be <code>NONE</code>. </p> </note>",
        }),
    ).exactOptional(),
    Mtime: MtimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to preserve metadata indicating the last time that a file was written to before the <code>PREPARING</code> phase of your task execution. This option is required when you need to run the a task more than once.</p> <p>Default Value: <code>PRESERVE</code> </p> <p> <code>PRESERVE</code>: Preserve original <code>Mtime</code> (recommended)</p> <p> <code>NONE</code>: Ignore <code>Mtime</code>. </p> <note> <p>If <code>Mtime</code> is set to <code>PRESERVE</code>, <code>Atime</code> must be set to <code>BEST_EFFORT</code>.</p> <p>If <code>Mtime</code> is set to <code>NONE</code>, <code>Atime</code> must also be set to <code>NONE</code>. </p> </note>',
        }),
    ).exactOptional(),
    Uid: UidSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the POSIX user ID (UID) of the file\'s owner.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p> <p>Default value: <code>INT_VALUE</code>. This preserves the integer value of the ID.</p> <p> <code>INT_VALUE</code>: Preserve the integer value of UID and group ID (GID) (recommended).</p> <p> <code>NONE</code>: Ignore UID and GID. </p>',
        }),
    ).exactOptional(),
    Gid: GidSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the POSIX group ID (GID) of the file\'s owners.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p> <p>Default value: <code>INT_VALUE</code>. This preserves the integer value of the ID.</p> <p> <code>INT_VALUE</code>: Preserve the integer value of user ID (UID) and GID (recommended).</p> <p> <code>NONE</code>: Ignore UID and GID.</p>',
        }),
    ).exactOptional(),
    PreserveDeletedFiles: PreserveDeletedFilesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether files in the destination location that don't exist in the source should be preserved. This option can affect your Amazon S3 storage cost. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes\">Considerations when working with Amazon S3 storage classes in DataSync</a>.</p> <p>Default value: <code>PRESERVE</code> </p> <p> <code>PRESERVE</code>: Ignore such destination files (recommended). </p> <p> <code>REMOVE</code>: Delete destination files that aren’t present in the source.</p> <note> <p>If you set this parameter to <code>REMOVE</code>, you can't set <code>TransferMode</code> to <code>ALL</code>. When you transfer all data, DataSync doesn't scan your destination location and doesn't know what to delete.</p> </note>",
        }),
    ).exactOptional(),
    PreserveDevices: PreserveDevicesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether DataSync should preserve the metadata of block and character devices in the source location and recreate the files with that device name and metadata on the destination. DataSync copies only the name and metadata of such devices.</p> <note> <p>DataSync can't copy the actual contents of these devices because they're nonterminal and don't return an end-of-file (EOF) marker.</p> </note> <p>Default value: <code>NONE</code> </p> <p> <code>NONE</code>: Ignore special devices (recommended). </p> <p> <code>PRESERVE</code>: Preserve character and block device metadata. This option currently isn't supported for Amazon EFS. </p>",
        }),
    ).exactOptional(),
    PosixPermissions: PosixPermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied">Metadata copied by DataSync</a>.</p> <p>Default value: <code>PRESERVE</code> </p> <p> <code>PRESERVE</code>: Preserve POSIX-style permissions (recommended).</p> <p> <code>NONE</code>: Ignore permissions. </p> <note> <p>DataSync can preserve extant permissions of a source location.</p> </note>',
        }),
    ).exactOptional(),
    BytesPerSecond: BytesPerSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits the bandwidth used by a DataSync task. For example, if you want DataSync to use a maximum of 1 MB, set this value to <code>1048576</code> (<code>=1024*1024</code>).',
        }),
    ).exactOptional(),
    TaskQueueing: TaskQueueingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether tasks should be queued before executing the tasks. The default is <code>ENABLED</code>, which means the tasks will be queued.</p> <p>If you use the same agent to run multiple tasks, you can enable the tasks to run in series. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#queue-task-execution">Queueing task executions</a>.</p>',
        }),
    ).exactOptional(),
    LogLevel: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log group. To specify the log group, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn">CloudWatchLogGroupArn</a>.</p> <p>If you set <code>LogLevel</code> to <code>OFF</code>, no logs are published. <code>BASIC</code> publishes logs on errors for individual files transferred. <code>TRANSFER</code> publishes logs for every file or object that is transferred and integrity checked.</p>',
        }),
    ).exactOptional(),
    TransferMode: TransferModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Determines whether DataSync transfers only the data and metadata that differ between the source and the destination location or transfers all the content from the source (without comparing what's in the destination).</p> <p> <code>CHANGED</code>: DataSync copies only data or metadata that is new or different content from the source location to the destination location.</p> <p> <code>ALL</code>: DataSync copies all source location content to the destination (without comparing what's in the destination).</p>",
        }),
    ).exactOptional(),
    SecurityDescriptorCopyFlags: SmbSecurityDescriptorCopyFlagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which components of the SMB security descriptor are copied from source to destination objects. </p> <p>This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations or between two FSx for Windows File Server locations. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html">how DataSync handles metadata</a>.</p> <p>Default value: <code>OWNER_DACL</code> </p> <p> <code>OWNER_DACL</code>: For each copied object, DataSync copies the following metadata:</p> <ul> <li> <p>The object owner.</p> </li> <li> <p>NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object.</p> <p>DataSync won\'t copy NTFS system access control lists (SACLs) with this option.</p> </li> </ul> <p> <code>OWNER_DACL_SACL</code>: For each copied object, DataSync copies the following metadata:</p> <ul> <li> <p>The object owner.</p> </li> <li> <p>NTFS discretionary access control lists (DACLs), which determine whether to grant access to an object.</p> </li> <li> <p>SACLs, which are used by administrators to log attempts to access a secured object.</p> <p>Copying SACLs requires granting additional permissions to the Windows user that DataSync uses to access your SMB location. For information about choosing a user that ensures sufficient permissions to files, folders, and metadata, see <a href="create-smb-location.html#SMBuser">user</a>.</p> </li> </ul> <p> <code>NONE</code>: None of the SMB security descriptor components are copied. Destination objects are owned by the user that was provided for accessing the destination location. DACLs and SACLs are set based on the destination server’s configuration. </p>',
        }),
    ).exactOptional(),
    ObjectTags: ObjectTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether object tags are preserved when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the <code>NONE</code> value.</p> <p>Default Value: <code>PRESERVE</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>",
    required: [],
  })
  .openapi('Options')

const FilterTypeSchema = z.literal('SIMPLE_PATTERN').openapi('FilterType')

const FilterValueSchema = z
  .string()
  .regex(/^[^\x00]+$/)
  .max(102400)
  .openapi('FilterValue')

const FilterRuleSchema = z
  .object({
    FilterType: FilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of filter rule to apply. DataSync only supports the SIMPLE_PATTERN rule type.',
        }),
    ).exactOptional(),
    Value: FilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|" (that is, a pipe), for example: <code>/folder1|/folder2</code> </p> <p> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.',
    required: [],
  })
  .openapi('FilterRule')

const FilterListSchema = z.array(FilterRuleSchema).min(0).max(1).openapi('FilterList')

const ScheduleExpressionCronSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\ \_\*\?\,\|\^\-\/\#\s\(\)\+]*$/)
  .max(256)
  .openapi('ScheduleExpressionCron')

const TaskScheduleSchema = z
  .object({
    ScheduleExpression: ScheduleExpressionCronSchema.and(
      z
        .any()
        .openapi({
          description:
            'A cron expression that specifies when DataSync initiates a scheduled transfer from a source to a destination location. ',
        }),
    ),
  })
  .openapi({
    required: ['ScheduleExpression'],
    description:
      'Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.',
  })
  .openapi('TaskSchedule')

const CreateTaskRequestSchema = z
  .object({
    SourceLocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the source location for the task.',
        }),
    ),
    DestinationLocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of an Amazon Web Services storage resource's location. ",
        }),
    ),
    CloudWatchLogGroupArn: LogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor and log events in the task. ',
        }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a task. This value is a text reference that is used to identify the task in the console. ',
        }),
    ).exactOptional(),
    Options: OptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the configuration options for a task. Some options include preserving file or object metadata and verifying data integrity.</p> <p>You can also override these options before starting an individual run of a task (also known as a <i>task execution</i>). For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>',
        }),
    ).exactOptional(),
    Excludes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
    Schedule: TaskScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a schedule used to periodically transfer files from a source to a destination location. The schedule should be specified in UTC time. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your task</a>.',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task.</p> <p> <i>Tags</i> are key-value pairs that help you manage, filter, and search for your DataSync resources.</p>',
        }),
    ).exactOptional(),
    Includes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceLocationArn', 'DestinationLocationArn'],
    title: 'CreateTaskRequest',
    description: 'CreateTaskRequest',
  })
  .openapi('CreateTaskRequest')

const DeleteAgentResponseSchema = z.object({}).openapi('DeleteAgentResponse')

const DeleteAgentRequestSchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the agent to delete. Use the <code>ListAgents</code> operation to return a list of agents for your account and Amazon Web Services Region.',
        }),
    ),
  })
  .openapi({
    required: ['AgentArn'],
    title: 'DeleteAgentRequest',
    description: 'DeleteAgentRequest',
  })
  .openapi('DeleteAgentRequest')

const DeleteLocationResponseSchema = z.object({}).openapi('DeleteLocationResponse')

const DeleteLocationRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the location to delete.' }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DeleteLocationRequest',
    description: 'DeleteLocation',
  })
  .openapi('DeleteLocationRequest')

const DeleteTaskResponseSchema = z.object({}).openapi('DeleteTaskResponse')

const DeleteTaskRequestSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the task that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['TaskArn'], title: 'DeleteTaskRequest', description: 'DeleteTask' })
  .openapi('DeleteTaskRequest')

const AgentStatusSchema = z.enum(['ONLINE', 'OFFLINE']).openapi('AgentStatus')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const EndpointTypeSchema = z.enum(['PUBLIC', 'PRIVATE_LINK', 'FIPS']).openapi('EndpointType')

const EndpointSchema = z
  .string()
  .regex(/\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z/)
  .min(7)
  .max(15)
  .openapi('Endpoint')

const PrivateLinkConfigSchema = z
  .object({
    VpcEndpointId: VpcEndpointIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the VPC endpoint that is configured for an agent. An agent that is configured with a VPC endpoint will not be accessible over the public internet.',
        }),
    ).exactOptional(),
    PrivateLinkEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private endpoint that is configured for an agent that has access to IP addresses in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">PrivateLink</a>. An agent that is configured with this endpoint will not be accessible over the public internet.',
        }),
    ).exactOptional(),
    SubnetArns: PLSubnetArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the subnets that are configured for an agent activated in a VPC or an agent that has access to a VPC endpoint.',
        }),
    ).exactOptional(),
    SecurityGroupArns: PLSecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the security groups that are configured for the EC2 resource that hosts an agent activated in a VPC or an agent that has access to a VPC endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).',
    required: [],
  })
  .openapi('PrivateLinkConfig')

const DescribeAgentResponseSchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z.any().openapi({ description: 'The ARN of the agent.' }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name of the agent.' }),
    ).exactOptional(),
    Status: AgentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the agent. If the status is ONLINE, then the agent is configured properly and is available to use. The Running status is the normal running status for an agent. If the status is OFFLINE, the agent's VM is turned off or the agent is in an unhealthy state. When the issue that caused the unhealthy state is resolved, the agent returns to ONLINE status.",
        }),
    ).exactOptional(),
    LastConnectionTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the agent last connected to DataSync.' }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the agent was activated (that is, created in your account).',
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint, the agent is not accessible over the public internet. ',
        }),
    ).exactOptional(),
    PrivateLinkConfig: PrivateLinkConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnet and the security group that DataSync used to access a VPC endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeAgentResponse', required: [] })
  .openapi('DescribeAgentResponse')

const DescribeAgentRequestSchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the DataSync agent to describe.',
        }),
    ),
  })
  .openapi({ required: ['AgentArn'], title: 'DescribeAgentRequest', description: 'DescribeAgent' })
  .openapi('DescribeAgentRequest')

const LocationUriSchema = z
  .string()
  .regex(/^(efs|nfs|s3|smb|hdfs|fsx[a-z0-9-]+):\/\/[a-zA-Z0-9.:\/\-]+$/)
  .max(4360)
  .openapi('LocationUri')

const DescribeLocationEfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the Amazon EFS file system location.' }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URL of the Amazon EFS file system location.' }),
    ).exactOptional(),
    Ec2Config: Ec2ConfigSchema.exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the location was created.' }),
    ).exactOptional(),
    AccessPointArn: EfsAccessPointArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the access point that DataSync uses to access the Amazon EFS file system.',
        }),
    ).exactOptional(),
    FileSystemAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.',
        }),
    ).exactOptional(),
    InTransitEncryption: EfsInTransitEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether DataSync uses Transport Layer Security (TLS) encryption when copying data to or from the Amazon EFS file system.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeLocationEfsResponse', required: [] })
  .openapi('DescribeLocationEfsResponse')

const DescribeLocationEfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon EFS file system location that you want information about.',
        }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DescribeLocationEfsRequest',
    description: 'DescribeLocationEfsRequest',
  })
  .openapi('DescribeLocationEfsRequest')

const DescribeLocationFsxLustreResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the FSx for Lustre location that was described.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z
        .any()
        .openapi({ description: 'The URI of the FSx for Lustre location that was described.' }),
    ).exactOptional(),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Lustre file system.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the FSx for Lustre location was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLocationFsxLustreResponse')

const DescribeLocationFsxLustreRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the FSx for Lustre location to describe. ',
        }),
    ),
  })
  .openapi({ required: ['LocationArn'], title: 'DescribeLocationFsxLustreRequest' })
  .openapi('DescribeLocationFsxLustreRequest')

const DescribeLocationFsxOntapResponseSchema = z
  .object({
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the location was created.' }),
    ).exactOptional(),
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the FSx for ONTAP file system location.' }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The uniform resource identifier (URI) of the FSx for ONTAP file system location.',
        }),
    ).exactOptional(),
    Protocol: FsxProtocolSchema.exactOptional(),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The security groups that DataSync uses to access your FSx for ONTAP file system.',
        }),
    ).exactOptional(),
    StorageVirtualMachineArn: StorageVirtualMachineArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the storage virtual machine (SVM) on your FSx for ONTAP file system where you're copying data to or from.",
        }),
    ).exactOptional(),
    FsxFilesystemArn: FsxFilesystemArnSchema.and(
      z.any().openapi({ description: 'The ARN of the FSx for ONTAP file system.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLocationFsxOntapResponse')

const DescribeLocationFsxOntapRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the FSx for ONTAP file system location that you want information about.',
        }),
    ),
  })
  .openapi({ required: ['LocationArn'], title: 'DescribeLocationFsxOntapRequest' })
  .openapi('DescribeLocationFsxOntapRequest')

const DescribeLocationFsxOpenZfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the FSx for OpenZFS location that was described.' }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The uniform resource identifier (URI) of the FSx for OpenZFS location that was described.</p> <p>Example: <code>fsxz://us-west-2.fs-1234567890abcdef02/fsx/folderA/folder</code> </p>',
        }),
    ).exactOptional(),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of the security groups that are configured for the FSx for OpenZFS file system.',
        }),
    ).exactOptional(),
    Protocol: FsxProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of protocol that DataSync uses to access your file system.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the FSx for OpenZFS location was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLocationFsxOpenZfsResponse')

const DescribeLocationFsxOpenZfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the FSx for OpenZFS location to describe.',
        }),
    ),
  })
  .openapi({ required: ['LocationArn'], title: 'DescribeLocationFsxOpenZfsRequest' })
  .openapi('DescribeLocationFsxOpenZfsRequest')

const DescribeLocationFsxWindowsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the FSx for Windows File Server location that was described.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL of the FSx for Windows File Server location that was described.',
        }),
    ).exactOptional(),
    SecurityGroupArns: Ec2SecurityGroupArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the security groups that are configured for the FSx for Windows File Server file system.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the FSx for Windows File Server location was created.',
        }),
    ).exactOptional(),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user who has the permissions to access files and folders in the FSx for Windows File Server file system.',
        }),
    ).exactOptional(),
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Windows domain that the FSx for Windows File Server belongs to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLocationFsxWindowsResponse')

const DescribeLocationFsxWindowsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the FSx for Windows File Server location to describe.',
        }),
    ),
  })
  .openapi({ required: ['LocationArn'], title: 'DescribeLocationFsxWindowsRequest' })
  .openapi('DescribeLocationFsxWindowsRequest')

const DescribeLocationHdfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the HDFS cluster location.' }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URI of the HDFS cluster location.' }),
    ).exactOptional(),
    NameNodes: HdfsNameNodeListSchema.and(
      z.any().openapi({ description: 'The NameNode that manage the HDFS namespace. ' }),
    ).exactOptional(),
    BlockSize: HdfsBlockSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The size of the data blocks to write into the HDFS cluster. ' }),
    ).exactOptional(),
    ReplicationFactor: HdfsReplicationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of DataNodes to replicate the data to when writing to the HDFS cluster. ',
        }),
    ).exactOptional(),
    KmsKeyProviderUri: KmsKeyProviderUriSchema.and(
      z
        .any()
        .openapi({ description: " The URI of the HDFS cluster's Key Management Server (KMS). " }),
    ).exactOptional(),
    QopConfiguration: QopConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. ',
        }),
    ).exactOptional(),
    AuthenticationType: HdfsAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of authentication used to determine the identity of the user. ',
        }),
    ).exactOptional(),
    SimpleUser: HdfsUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user name used to identify the client on the host operating system. This parameter is used if the <code>AuthenticationType</code> is defined as <code>SIMPLE</code>.',
        }),
    ).exactOptional(),
    KerberosPrincipal: KerberosPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kerberos principal with access to the files and folders on the HDFS cluster. This parameter is used if the <code>AuthenticationType</code> is defined as <code>KERBEROS</code>.',
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARNs of the agents that are used to connect to the HDFS cluster. ',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the HDFS location was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLocationHdfsResponse')

const DescribeLocationHdfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the HDFS cluster location to describe.',
        }),
    ),
  })
  .openapi({ required: ['LocationArn'], title: 'DescribeLocationHdfsRequest' })
  .openapi('DescribeLocationHdfsRequest')

const DescribeLocationNfsResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the NFS location that was described.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URL of the source NFS location that was described.' }),
    ).exactOptional(),
    OnPremConfig: OnPremConfigSchema.exactOptional(),
    MountOptions: NfsMountOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The NFS mount options that DataSync used to mount your NFS share.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the NFS location was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeLocationNfsResponse', required: [] })
  .openapi('DescribeLocationNfsResponse')

const DescribeLocationNfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the NFS location to describe.',
        }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DescribeLocationNfsRequest',
    description: 'DescribeLocationNfsRequest',
  })
  .openapi('DescribeLocationNfsRequest')

const DescribeLocationObjectStorageResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z.any().openapi({ description: 'The ARN of the object storage system location.' }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URL of the object storage system location.' }),
    ).exactOptional(),
    AccessKey: ObjectStorageAccessKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The access key (for example, a user name) required to authenticate with the object storage system.',
        }),
    ).exactOptional(),
    ServerPort: ObjectStorageServerPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port that your object storage server accepts inbound network traffic on (for example, port 443).',
        }),
    ).exactOptional(),
    ServerProtocol: ObjectStorageServerProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The protocol that your object storage system uses to communicate.',
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of the DataSync agents that can securely connect with your location.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the location was created.' }),
    ).exactOptional(),
    ServerCertificate: ObjectStorageCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The self-signed certificate that DataSync uses to securely authenticate with your object storage system.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeLocationObjectStorageResponse', required: [] })
  .openapi('DescribeLocationObjectStorageResponse')

const DescribeLocationObjectStorageRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the object storage system location that you want information about.',
        }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DescribeLocationObjectStorageRequest',
    description: 'DescribeLocationObjectStorageRequest',
  })
  .openapi('DescribeLocationObjectStorageRequest')

const DescribeLocationS3ResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Amazon S3 bucket or access point.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URL of the Amazon S3 location that was described.' }),
    ).exactOptional(),
    S3StorageClass: S3StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 storage class that you chose to store your files in when this location is used as a task destination. For more information about S3 storage classes, see <a href="http://aws.amazon.com/s3/storage-classes/">Amazon S3 Storage Classes</a>. Some storage classes have behaviors that can affect your S3 storage cost. For detailed information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Considerations when working with S3 storage classes in DataSync</a>.',
        }),
    ).exactOptional(),
    S3Config: S3ConfigSchema.exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you are using DataSync on an Amazon Web Services Outpost, the Amazon Resource Name (ARNs) of the EC2 agents deployed on your Outpost. For more information about launching a DataSync agent on an Amazon Web Services Outpost, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/deploy-agents.html#outposts-agent">Deploy your DataSync agent on Outposts</a>.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the Amazon S3 bucket location was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeLocationS3Response', required: [] })
  .openapi('DescribeLocationS3Response')

const DescribeLocationS3RequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon S3 bucket location to describe.',
        }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DescribeLocationS3Request',
    description: 'DescribeLocationS3Request',
  })
  .openapi('DescribeLocationS3Request')

const DescribeLocationSmbResponseSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the SMB location that was described.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z.any().openapi({ description: 'The URL of the source SMB location that was described.' }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source SMB file system location that is created.',
        }),
    ).exactOptional(),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user who can mount the share, has the permissions to access files and folders in the SMB share.',
        }),
    ).exactOptional(),
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Windows domain that the SMB server belongs to.' }),
    ).exactOptional(),
    MountOptions: SmbMountOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mount options that are available for DataSync to use to access an SMB location.',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the SMB location was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeLocationSmbResponse', required: [] })
  .openapi('DescribeLocationSmbResponse')

const DescribeLocationSmbRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the SMB location to describe.',
        }),
    ),
  })
  .openapi({
    required: ['LocationArn'],
    title: 'DescribeLocationSmbRequest',
    description: 'DescribeLocationSmbRequest',
  })
  .openapi('DescribeLocationSmbRequest')

const TaskStatusSchema = z
  .enum(['AVAILABLE', 'CREATING', 'QUEUED', 'RUNNING', 'UNAVAILABLE'])
  .openapi('TaskStatus')

const NetworkInterfaceArnSchema = z
  .string()
  .regex(/^arn:aws[\-a-z]{0,}:ec2:[a-z\-0-9]*:[0-9]{12}:network-interface\/eni-[0-9a-f]+$/)
  .max(128)
  .openapi('NetworkInterfaceArn')

const SourceNetworkInterfaceArnsSchema = z
  .array(NetworkInterfaceArnSchema)
  .openapi('SourceNetworkInterfaceArns')

const DestinationNetworkInterfaceArnsSchema = z
  .array(NetworkInterfaceArnSchema)
  .openapi('DestinationNetworkInterfaceArns')

const StringSchema = z.string().openapi('String')

const DescribeTaskResponseSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the task that was described.' }),
    ).exactOptional(),
    Status: TaskStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the task that was described.</p> <p>For detailed information about task execution statuses, see Understanding Task Statuses in the <i>DataSync User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name of the task that was described.' }),
    ).exactOptional(),
    CurrentTaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the task execution that is transferring files.',
        }),
    ).exactOptional(),
    SourceLocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the source file system's location.",
        }),
    ).exactOptional(),
    DestinationLocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Amazon Web Services storage resource's location.",
        }),
    ).exactOptional(),
    CloudWatchLogGroupArn: LogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that was used to monitor and log events in the task.</p> <p>For more information on these groups, see Working with Log Groups and Log Streams in the <i>Amazon CloudWatch User Guide</i>.</p>',
        }),
    ).exactOptional(),
    SourceNetworkInterfaceArns: SourceNetworkInterfaceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the network interfaces created for your source location. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">Network interface requirements</a>.',
        }),
    ).exactOptional(),
    DestinationNetworkInterfaceArns: DestinationNetworkInterfaceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the network interfaces created for your destination location. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-network.html#required-network-interfaces">Network interface requirements</a>.',
        }),
    ).exactOptional(),
    Options: OptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration options that control the behavior of the <code>StartTaskExecution</code> operation. Some options include preserving file or object metadata and verifying data integrity.</p> <p>You can override these options for each task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>',
        }),
    ).exactOptional(),
    Excludes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
    Schedule: TaskScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schedule used to periodically transfer files from a source to a destination location.',
        }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Errors that DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.',
        }),
    ).exactOptional(),
    ErrorDetail: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. ',
        }),
    ).exactOptional(),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the task was created.' }),
    ).exactOptional(),
    Includes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeTaskResponse', required: [] })
  .openapi('DescribeTaskResponse')

const DescribeTaskRequestSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the task to describe.' }),
    ),
  })
  .openapi({
    required: ['TaskArn'],
    title: 'DescribeTaskRequest',
    description: 'DescribeTaskRequest',
  })
  .openapi('DescribeTaskRequest')

const TaskExecutionStatusSchema = z
  .enum(['QUEUED', 'LAUNCHING', 'PREPARING', 'TRANSFERRING', 'VERIFYING', 'SUCCESS', 'ERROR'])
  .openapi('TaskExecutionStatus')

const LongSchema = z.int().openapi('Long')

const DurationSchema = z.int().min(0).openapi('Duration')

const PhaseStatusSchema = z.enum(['PENDING', 'SUCCESS', 'ERROR']).openapi('PhaseStatus')

const TaskExecutionResultDetailSchema = z
  .object({
    PrepareDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total time in milliseconds that DataSync spent in the PREPARING phase. ',
        }),
    ).exactOptional(),
    PrepareStatus: PhaseStatusSchema.and(
      z.any().openapi({ description: 'The status of the PREPARING phase.' }),
    ).exactOptional(),
    TotalDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total time in milliseconds that DataSync took to transfer the file from the source to the destination location.',
        }),
    ).exactOptional(),
    TransferDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total time in milliseconds that DataSync spent in the TRANSFERRING phase.',
        }),
    ).exactOptional(),
    TransferStatus: PhaseStatusSchema.and(
      z.any().openapi({ description: 'The status of the TRANSFERRING phase.' }),
    ).exactOptional(),
    VerifyDuration: DurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The total time in milliseconds that DataSync spent in the VERIFYING phase.',
        }),
    ).exactOptional(),
    VerifyStatus: PhaseStatusSchema.and(
      z.any().openapi({ description: 'The status of the VERIFYING phase.' }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Errors that DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.',
        }),
    ).exactOptional(),
    ErrorDetail: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.',
    required: [],
  })
  .openapi('TaskExecutionResultDetail')

const DescribeTaskExecutionResponseSchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the task execution that was described. <code>TaskExecutionArn</code> is hierarchical and includes <code>TaskArn</code> for the task that was executed. </p> <p>For example, a <code>TaskExecution</code> value with the ARN <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b</code> executed the task with the ARN <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2</code>. </p>',
        }),
    ).exactOptional(),
    Status: TaskExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the task execution. </p> <p>For detailed information about task execution statuses, see Understanding Task Statuses in the <i>DataSync User Guide.</i> </p>',
        }),
    ).exactOptional(),
    Options: OptionsSchema.exactOptional(),
    Excludes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
    Includes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
    StartTime: TimeSchema.and(
      z.any().openapi({ description: 'The time that the task execution was started.' }),
    ).exactOptional(),
    EstimatedFilesToTransfer: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The expected number of files that is to be transferred over the network. This value is calculated during the <code>PREPARING</code> phase before the <code>TRANSFERRING</code> phase of the task execution. This value is the expected number of files to be transferred. It's calculated based on comparing the content of the source and destination locations and finding the delta that needs to be transferred. ",
        }),
    ).exactOptional(),
    EstimatedBytesToTransfer: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated physical number of bytes that is to be transferred over the network.',
        }),
    ).exactOptional(),
    FilesTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The actual number of files that was transferred over the network. This value is calculated and updated on an ongoing basis during the <code>TRANSFERRING</code> phase of the task execution. It's updated periodically when each file is read from the source and sent over the network. </p> <p>If failures occur during a transfer, this value can be less than <code>EstimatedFilesToTransfer</code>. In some cases, this value can also be greater than <code>EstimatedFilesToTransfer</code>. This element is implementation-specific for some location types, so don't use it as an indicator for a correct file number or to monitor your task execution.</p>",
        }),
    ).exactOptional(),
    BytesWritten: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of logical bytes written to the destination Amazon Web Services storage resource.',
        }),
    ).exactOptional(),
    BytesTransferred: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of bytes that are involved in the transfer. For the number of bytes sent over the network, see <code>BytesCompressed</code>. ',
        }),
    ).exactOptional(),
    Result: TaskExecutionResultDetailSchema.and(
      z.any().openapi({ description: 'The result of the task execution.' }),
    ).exactOptional(),
    BytesCompressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The physical number of bytes transferred over the network after compression was applied. In most cases, this number is less than <code>BytesTransferred</code> unless the data isn't compressible.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'DescribeTaskExecutionResponse', required: [] })
  .openapi('DescribeTaskExecutionResponse')

const DescribeTaskExecutionRequestSchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the task that is being executed.',
        }),
    ),
  })
  .openapi({
    required: ['TaskExecutionArn'],
    title: 'DescribeTaskExecutionRequest',
    description: 'DescribeTaskExecutionRequest',
  })
  .openapi('DescribeTaskExecutionRequest')

const AgentListEntrySchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of a DataSync agent.' }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name of an agent.' }),
    ).exactOptional(),
    Status: AgentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an agent. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/understand-agent-statuses.html">DataSync agent statuses</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single entry in a list (or array) of DataSync agents when you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation.',
    required: [],
  })
  .openapi('AgentListEntry')

const AgentListSchema = z.array(AgentListEntrySchema).openapi('AgentList')

const NextTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9=_-]+/)
  .max(65535)
  .openapi('NextToken')

const ListAgentsResponseSchema = z
  .object({
    Agents: AgentListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of DataSync agents in your Amazon Web Services account in the Amazon Web Services Region specified in the request. The list is ordered by the agents' Amazon Resource Names (ARNs).",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The opaque string that indicates the position to begin the next list of results in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListAgentsResponse', required: [] })
  .openapi('ListAgentsResponse')

const MaxResultsSchema = z.int().min(0).max(100).openapi('MaxResults')

const ListAgentsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of DataSync agents to list in a response. By default, a response shows a maximum of 100 agents.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an opaque string that indicates the position to begin the next list of results in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAgentsRequest', description: 'ListAgentsRequest', required: [] })
  .openapi('ListAgentsRequest')

const LocationListEntrySchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon EFS, the location is the export path. For Amazon S3, the location is the prefix path that you want to mount and use as the root of the location.',
        }),
    ).exactOptional(),
    LocationUri: LocationUriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents a list of URIs of a location. <code>LocationUri</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called.</p> <p>Format: <code>TYPE://GLOBAL_ID/SUBDIR</code>.</p> <p>TYPE designates the type of location (for example, <code>nfs</code> or <code>s3</code>).</p> <p>GLOBAL_ID is the globally unique identifier of the resource that backs the location. An example for EFS is <code>us-east-2.fs-abcd1234</code>. An example for Amazon S3 is the bucket name, such as <code>myBucket</code>. An example for NFS is a valid IPv4 address or a hostname that is compliant with Domain Name Service (DNS).</p> <p>SUBDIR is a valid file system path, delimited by forward slashes as is the *nix convention. For NFS and Amazon EFS, it\'s the export path to mount the location. For Amazon S3, it\'s the prefix path that you mount to and treat as the root of the location.</p> <p/>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called.',
    required: [],
  })
  .openapi('LocationListEntry')

const LocationListSchema = z.array(LocationListEntrySchema).openapi('LocationList')

const ListLocationsResponseSchema = z
  .object({
    Locations: LocationListSchema.and(
      z.any().openapi({ description: 'An array that contains a list of locations.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin returning the next list of locations.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListLocationsResponse', required: [] })
  .openapi('ListLocationsResponse')

const LocationFilterNameSchema = z
  .enum(['LocationUri', 'LocationType', 'CreationTime'])
  .openapi('LocationFilterName')

const FilterAttributeValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_\ \-\:\*\.\\\/\?-]*$/)
  .min(1)
  .max(255)
  .openapi('FilterAttributeValue')

const FilterValuesSchema = z.array(FilterAttributeValueSchema).openapi('FilterValues')

const OperatorSchema = z
  .enum([
    'Equals',
    'NotEquals',
    'In',
    'LessThanOrEqual',
    'LessThan',
    'GreaterThanOrEqual',
    'GreaterThan',
    'Contains',
    'NotContains',
    'BeginsWith',
  ])
  .openapi('Operator')

const LocationFilterSchema = z
  .object({
    Name: LocationFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the filter being used. Each API call supports a list of filters that are available for it (for example, <code>LocationType</code> for <code>ListLocations</code>).',
        }),
    ),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values that you want to filter for. For example, you might want to display only Amazon S3 locations.',
        }),
    ),
    Operator: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator that is used to compare filter values (for example, <code>Equals</code> or <code>Contains</code>).',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Values', 'Operator'],
    description:
      '<p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to see all your Amazon S3 locations, create a filter using <code>"Name": "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values": "S3"</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p>',
  })
  .openapi('LocationFilter')

const LocationFiltersSchema = z.array(LocationFilterSchema).openapi('LocationFilters')

const ListLocationsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of locations to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin the next list of locations.',
        }),
    ).exactOptional(),
    Filters: LocationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all tasks on a specific source location, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLocationsRequest', description: 'ListLocationsRequest', required: [] })
  .openapi('ListLocationsRequest')

const OutputTagListSchema = z.array(TagListEntrySchema).min(0).max(55).openapi('OutputTagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: OutputTagListSchema.and(
      z.any().openapi({ description: 'An array of tags applied to the specified resource.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The opaque string that indicates the position to begin the next list of results in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListTagsForResourceResponse', required: [] })
  .openapi('ListTagsForResourceResponse')

const TaggableResourceArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:(agent|task|location)\/(agent|task|loc)-[a-f0-9]{17}(\/execution\/exec-[a-f0-9]{17})?$/,
  )
  .max(128)
  .openapi('TaggableResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: TaggableResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the resource that you want tag information on.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Specifies how many results that you want in the response.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an opaque string that indicates the position to begin the next list of results in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceArn'],
    title: 'ListTagsForResourceRequest',
    description: 'ListTagsForResourceRequest',
  })
  .openapi('ListTagsForResourceRequest')

const TaskExecutionListEntrySchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the task that was executed.' }),
    ).exactOptional(),
    Status: TaskExecutionStatusSchema.and(
      z.any().openapi({ description: 'The status of a task execution.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.',
    required: [],
  })
  .openapi('TaskExecutionListEntry')

const TaskExecutionListSchema = z.array(TaskExecutionListEntrySchema).openapi('TaskExecutionList')

const ListTaskExecutionsResponseSchema = z
  .object({
    TaskExecutions: TaskExecutionListSchema.and(
      z.any().openapi({ description: 'A list of executed tasks.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin returning the next list of executed tasks.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListTaskExecutionsResponse', required: [] })
  .openapi('ListTaskExecutionsResponse')

const ListTaskExecutionsRequestSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the task whose tasks you want to list.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of executed tasks to list.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin the next list of the executed tasks.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTaskExecutionsRequest', description: 'ListTaskExecutions', required: [] })
  .openapi('ListTaskExecutionsRequest')

const TaskListEntrySchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the task.' }),
    ).exactOptional(),
    Status: TaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the task.' }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name of the task.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.',
    required: [],
  })
  .openapi('TaskListEntry')

const TaskListSchema = z.array(TaskListEntrySchema).openapi('TaskList')

const ListTasksResponseSchema = z
  .object({
    Tasks: TaskListSchema.and(
      z.any().openapi({ description: 'A list of all the tasks that are returned.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin returning the next list of tasks.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ListTasksResponse', required: [] })
  .openapi('ListTasksResponse')

const TaskFilterNameSchema = z.enum(['LocationId', 'CreationTime']).openapi('TaskFilterName')

const TaskFilterSchema = z
  .object({
    Name: TaskFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the filter being used. Each API call supports a list of filters that are available for it. For example, <code>LocationId</code> for <code>ListTasks</code>.',
        }),
    ),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values that you want to filter for. For example, you might want to display only tasks for a specific destination location.',
        }),
    ),
    Operator: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator that is used to compare filter values (for example, <code>Equals</code> or <code>Contains</code>).',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Values', 'Operator'],
    description:
      '<p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync resources</a>.</p>',
  })
  .openapi('TaskFilter')

const TaskFiltersSchema = z.array(TaskFilterSchema).openapi('TaskFilters')

const ListTasksRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of tasks to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates the position at which to begin the next list of tasks.',
        }),
    ).exactOptional(),
    Filters: TaskFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a specific source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTasksRequest', description: 'ListTasksRequest', required: [] })
  .openapi('ListTasksRequest')

const StartTaskExecutionResponseSchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the running task execution.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'StartTaskExecutionResponse', required: [] })
  .openapi('StartTaskExecutionResponse')

const StartTaskExecutionRequestSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the task that you want to start.',
        }),
    ),
    OverrideOptions: OptionsSchema.exactOptional(),
    Includes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that determines which files to include when running a task. The pattern should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>. ',
        }),
    ).exactOptional(),
    Excludes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that determines which files to exclude from a task. The list contains a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code>. ',
        }),
    ).exactOptional(),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task execution.</p> <p> <i>Tags</i> are key-value pairs that help you manage, filter, and search for your DataSync resources.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TaskArn'],
    title: 'StartTaskExecutionRequest',
    description: 'StartTaskExecutionRequest',
  })
  .openapi('StartTaskExecutionRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: TaggableResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the resource to apply the tag to.',
        }),
    ),
    Tags: InputTagListSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the tags that you want to apply to the resource.' }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'Tags'],
    title: 'TagResourceRequest',
    description: 'TagResourceRequest',
  })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: TaggableResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Name (ARN) of the resource to remove the tags from.',
        }),
    ),
    Keys: TagKeyListSchema.and(
      z.any().openapi({ description: 'Specifies the keys in the tags that you want to remove.' }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'Keys'],
    title: 'UntagResourceRequest',
    description: 'UntagResourceRequest',
  })
  .openapi('UntagResourceRequest')

const UpdateAgentResponseSchema = z.object({}).openapi('UpdateAgentResponse')

const UpdateAgentRequestSchema = z
  .object({
    AgentArn: AgentArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the agent to update.' }),
    ),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name that you want to use to configure the agent.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AgentArn'],
    title: 'UpdateAgentRequest',
    description: 'UpdateAgentRequest',
  })
  .openapi('UpdateAgentRequest')

const UpdateLocationHdfsResponseSchema = z.object({}).openapi('UpdateLocationHdfsResponse')

const UpdateLocationHdfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the source HDFS cluster location.',
        }),
    ),
    Subdirectory: HdfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster.',
        }),
    ).exactOptional(),
    NameNodes: HdfsNameNodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.',
        }),
    ).exactOptional(),
    BlockSize: HdfsBlockSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The size of the data blocks to write into the HDFS cluster. ' }),
    ).exactOptional(),
    ReplicationFactor: HdfsReplicationFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of DataNodes to replicate the data to when writing to the HDFS cluster. ',
        }),
    ).exactOptional(),
    KmsKeyProviderUri: KmsKeyProviderUriSchema.and(
      z
        .any()
        .openapi({ description: "The URI of the HDFS cluster's Key Management Server (KMS). " }),
    ).exactOptional(),
    QopConfiguration: QopConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster. ',
        }),
    ).exactOptional(),
    AuthenticationType: HdfsAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of authentication used to determine the identity of the user. ',
        }),
    ).exactOptional(),
    SimpleUser: HdfsUserSchema.and(
      z
        .any()
        .openapi({
          description: 'The user name used to identify the client on the host operating system.',
        }),
    ).exactOptional(),
    KerberosPrincipal: KerberosPrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Kerberos principal with access to the files and folders on the HDFS cluster. ',
        }),
    ).exactOptional(),
    KerberosKeytab: KerberosKeytabFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. You can load the keytab from a file by providing the file's address. If you use the CLI, it performs base64 encoding for you. Otherwise, provide the base64-encoded text.",
        }),
    ).exactOptional(),
    KerberosKrb5Conf: KerberosKrb5ConfFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "The <code>krb5.conf</code> file that contains the Kerberos configuration information. You can load the <code>krb5.conf</code> file by providing the file's address. If you're using the CLI, it performs the base64 encoding for you. Otherwise, provide the base64-encoded text.",
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARNs of the agents that are used to connect to the HDFS cluster. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LocationArn'], title: 'UpdateLocationHdfsRequest' })
  .openapi('UpdateLocationHdfsRequest')

const UpdateLocationNfsResponseSchema = z.object({}).openapi('UpdateLocationNfsResponse')

const UpdateLocationNfsRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the NFS location to update.' }),
    ),
    Subdirectory: NfsSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that\'s exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network.</p> <p>To see all the paths exported by your NFS server, run "<code>showmount -e nfs-server-name</code>" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication. </p> <p>To transfer all the data in the folder that you specified, DataSync must have permissions to read all the data. To ensure this, either configure the NFS export with <code>no_root_squash</code>, or ensure that the files you want DataSync to access have permissions that allow read access for all users. Doing either option enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access.</p> <p>If you are copying data to or from your Snowcone device, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone">NFS Server on Snowcone</a> for more information.</p> <p>For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.</p>',
        }),
    ).exactOptional(),
    OnPremConfig: OnPremConfigSchema.exactOptional(),
    MountOptions: NfsMountOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['LocationArn'], title: 'UpdateLocationNfsRequest' })
  .openapi('UpdateLocationNfsRequest')

const UpdateLocationObjectStorageResponseSchema = z
  .object({})
  .openapi('UpdateLocationObjectStorageResponse')

const UpdateLocationObjectStorageRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the ARN of the object storage system location that you're updating.",
        }),
    ),
    ServerPort: ObjectStorageServerPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the port that your object storage server accepts inbound network traffic on (for example, port 443).',
        }),
    ).exactOptional(),
    ServerProtocol: ObjectStorageServerProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the protocol that your object storage server uses to communicate.',
        }),
    ).exactOptional(),
    Subdirectory: S3SubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the object prefix for your object storage server. If this is a source location, DataSync only copies objects with this prefix. If this is a destination location, DataSync writes all objects with this prefix.',
        }),
    ).exactOptional(),
    AccessKey: ObjectStorageAccessKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the access key (for example, a user name) if credentials are required to authenticate with the object storage server.',
        }),
    ).exactOptional(),
    SecretKey: ObjectStorageSecretKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the secret key (for example, a password) if credentials are required to authenticate with the object storage server.',
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can securely connect with your location.',
        }),
    ).exactOptional(),
    ServerCertificate: ObjectStorageCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded <code>.pem</code> file (for example, <code>file:///home/user/.ssh/storage_sys_certificate.pem</code>). The certificate can be up to 32768 bytes (before Base64 encoding).</p> <p>To use this parameter, configure <code>ServerProtocol</code> to <code>HTTPS</code>.</p> <p>Updating the certificate doesn't interfere with tasks that you have in progress.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LocationArn'], title: 'UpdateLocationObjectStorageRequest' })
  .openapi('UpdateLocationObjectStorageRequest')

const UpdateLocationSmbResponseSchema = z.object({}).openapi('UpdateLocationSmbResponse')

const UpdateLocationSmbRequestSchema = z
  .object({
    LocationArn: LocationArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the SMB location to update.' }),
    ),
    Subdirectory: SmbSubdirectorySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.</p> <note> <p> <code>Subdirectory</code> must be specified with forward slashes. For example, <code>/path/to/folder</code>.</p> </note> <p>To transfer all the data in the folder that you specified, DataSync must have permissions to mount the SMB share and to access all the data in that share. To ensure this, do either of the following:</p> <ul> <li> <p>Ensure that the user/password specified belongs to the user who can mount the share and who has the appropriate permissions for all of the files and directories that you want DataSync to access.</p> </li> <li> <p>Use credentials of a member of the Backup Operators group to mount the share. </p> </li> </ul> <p>Doing either of these options enables the agent to access the data. For the agent to access directories, you must also enable all execute access.</p>",
        }),
    ).exactOptional(),
    User: SmbUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user who can mount the share has the permissions to access files and folders in the SMB share.',
        }),
    ).exactOptional(),
    Domain: SmbDomainSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Windows domain that the SMB server belongs to.' }),
    ).exactOptional(),
    Password: SmbPasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password of the user who can mount the share has the permissions to access files and folders in the SMB share.',
        }),
    ).exactOptional(),
    AgentArns: AgentArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.',
        }),
    ).exactOptional(),
    MountOptions: SmbMountOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['LocationArn'], title: 'UpdateLocationSmbRequest' })
  .openapi('UpdateLocationSmbRequest')

const UpdateTaskResponseSchema = z.object({}).openapi('UpdateTaskResponse')

const UpdateTaskRequestSchema = z
  .object({
    TaskArn: TaskArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource name of the task to update.',
        }),
    ),
    Options: OptionsSchema.exactOptional(),
    Excludes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
    Schedule: TaskScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a schedule used to periodically transfer files from a source to a destination location. You can configure your task to execute hourly, daily, weekly or on specific days of the week. You control when in the day or hour you want the task to execute. The time you specify is UTC time. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html">Scheduling your task</a>.',
        }),
    ).exactOptional(),
    Name: TagValueSchema.and(
      z.any().openapi({ description: 'The name of the task to update.' }),
    ).exactOptional(),
    CloudWatchLogGroupArn: LogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource name of the Amazon CloudWatch log group.',
        }),
    ).exactOptional(),
    Includes: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html">Filtering data transferred by DataSync</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TaskArn'], title: 'UpdateTaskRequest', description: 'UpdateTaskResponse' })
  .openapi('UpdateTaskRequest')

const UpdateTaskExecutionResponseSchema = z.object({}).openapi('UpdateTaskExecutionResponse')

const UpdateTaskExecutionRequestSchema = z
  .object({
    TaskExecutionArn: TaskExecutionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the specific task execution that is being updated. ',
        }),
    ),
    Options: OptionsSchema,
  })
  .openapi({ required: ['TaskExecutionArn', 'Options'], title: 'UpdateTaskExecutionRequest' })
  .openapi('UpdateTaskExecutionRequest')

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

export const postXAmzTargetFmrsServiceCancelTaskExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CancelTaskExecution',
  description:
    "<p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>",
  operationId: 'CancelTaskExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CancelTaskExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CancelTaskExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelTaskExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelTaskExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateAgentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateAgent',
  description:
    '<p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>',
  operationId: 'CreateAgent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateAgent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateAgent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAgentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAgentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationEfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationEfs',
  description:
    'Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.',
  operationId: 'CreateLocationEfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationEfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationEfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationEfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationEfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationFsxLustreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationFsxLustre',
  description: 'Creates an endpoint for an Amazon FSx for Lustre file system.',
  operationId: 'CreateLocationFsxLustre',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationFsxLustre')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationFsxLustre'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationFsxLustreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationFsxLustreResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationFsxOntapRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationFsxOntap',
  description:
    'Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.',
  operationId: 'CreateLocationFsxOntap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationFsxOntap')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationFsxOntap'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationFsxOntapRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationFsxOntapResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationFsxOpenZfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs',
  description:
    '<p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren\'t supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>',
  operationId: 'CreateLocationFsxOpenZfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationFsxOpenZfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationFsxOpenZfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationFsxOpenZfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationFsxOpenZfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationFsxWindowsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationFsxWindows',
  description: 'Creates an endpoint for an Amazon FSx for Windows File Server file system.',
  operationId: 'CreateLocationFsxWindows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationFsxWindows')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationFsxWindows'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationFsxWindowsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationFsxWindowsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationHdfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationHdfs',
  description: 'Creates an endpoint for a Hadoop Distributed File System (HDFS). ',
  operationId: 'CreateLocationHdfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationHdfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationHdfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationHdfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationHdfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationNfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationNfs',
  description:
    'Defines a file system on a Network File System (NFS) server that can be read from or written to.',
  operationId: 'CreateLocationNfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationNfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationNfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationNfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationNfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationObjectStorageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationObjectStorage',
  description:
    'Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.',
  operationId: 'CreateLocationObjectStorage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationObjectStorage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationObjectStorage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationObjectStorageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationObjectStorageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationS3Route = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationS3',
  description:
    'Creates an endpoint for an Amazon S3 bucket that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a>.',
  operationId: 'CreateLocationS3',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationS3')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationS3'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationS3RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationS3ResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateLocationSmbRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateLocationSmb',
  description:
    'Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.',
  operationId: 'CreateLocationSmb',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateLocationSmb')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateLocationSmb'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLocationSmbRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLocationSmbResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceCreateTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.CreateTask',
  description:
    '<p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p>',
  operationId: 'CreateTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.CreateTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.CreateTask'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTaskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTaskResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDeleteAgentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DeleteAgent',
  description:
    "Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.",
  operationId: 'DeleteAgent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DeleteAgent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DeleteAgent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAgentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAgentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDeleteLocationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DeleteLocation',
  description: 'Deletes the configuration of a location used by DataSync. ',
  operationId: 'DeleteLocation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DeleteLocation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DeleteLocation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLocationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLocationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDeleteTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DeleteTask',
  description: 'Deletes an DataSync task.',
  operationId: 'DeleteTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DeleteTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DeleteTask'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTaskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTaskResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeAgentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeAgent',
  description:
    'Returns metadata about an DataSync agent, such as its name, endpoint type, and status.',
  operationId: 'DescribeAgent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeAgent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeAgent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAgentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAgentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationEfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationEfs',
  description: 'Returns metadata about your DataSync location for an Amazon EFS file system.',
  operationId: 'DescribeLocationEfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationEfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationEfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationEfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationEfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationFsxLustreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationFsxLustre',
  description:
    'Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.',
  operationId: 'DescribeLocationFsxLustre',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationFsxLustre')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationFsxLustre'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationFsxLustreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationFsxLustreResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationFsxOntapRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationFsxOntap',
  description:
    "<p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>",
  operationId: 'DescribeLocationFsxOntap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationFsxOntap')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationFsxOntap'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationFsxOntapRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationFsxOntapResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs',
  description:
    "<p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>",
  operationId: 'DescribeLocationFsxOpenZfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationFsxOpenZfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationFsxOpenZfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationFsxOpenZfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationFsxOpenZfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationFsxWindowsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationFsxWindows',
  description:
    'Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.',
  operationId: 'DescribeLocationFsxWindows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationFsxWindows')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationFsxWindows'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationFsxWindowsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationFsxWindowsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationHdfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationHdfs',
  description:
    'Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. ',
  operationId: 'DescribeLocationHdfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationHdfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationHdfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationHdfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationHdfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationNfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationNfs',
  description: 'Returns metadata, such as the path information, about an NFS location.',
  operationId: 'DescribeLocationNfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationNfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationNfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationNfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationNfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationObjectStorageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationObjectStorage',
  description: 'Returns metadata about your DataSync location for an object storage system.',
  operationId: 'DescribeLocationObjectStorage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationObjectStorage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationObjectStorage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationObjectStorageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationObjectStorageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationS3Route = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationS3',
  description: 'Returns metadata, such as bucket name, about an Amazon S3 bucket location.',
  operationId: 'DescribeLocationS3',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationS3')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationS3'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationS3RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationS3ResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeLocationSmbRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeLocationSmb',
  description: 'Returns metadata, such as the path and user information about an SMB location.',
  operationId: 'DescribeLocationSmb',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeLocationSmb')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeLocationSmb'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLocationSmbRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLocationSmbResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeTask',
  description: 'Returns metadata about a task.',
  operationId: 'DescribeTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTaskResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceDescribeTaskExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.DescribeTaskExecution',
  description: 'Returns detailed metadata about a task that is being executed.',
  operationId: 'DescribeTaskExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.DescribeTaskExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.DescribeTaskExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTaskExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTaskExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceListAgentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.ListAgents',
  description:
    '<p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>',
  operationId: 'ListAgents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.ListAgents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.ListAgents'] },
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
    body: { content: { 'application/json': { schema: ListAgentsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAgentsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceListLocationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.ListLocations',
  description:
    '<p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>',
  operationId: 'ListLocations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.ListLocations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.ListLocations'] },
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
      content: { 'application/json': { schema: ListLocationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.ListTagsForResource',
  description: 'Returns all the tags associated with an Amazon Web Services resource.',
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
        .literal('FmrsService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.ListTagsForResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceListTaskExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.ListTaskExecutions',
  description: 'Returns a list of executed tasks.',
  operationId: 'ListTaskExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.ListTaskExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.ListTaskExecutions'] },
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
      content: { 'application/json': { schema: ListTaskExecutionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTaskExecutionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceListTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.ListTasks',
  description: 'Returns a list of the DataSync tasks you created.',
  operationId: 'ListTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.ListTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.ListTasks'] },
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
    body: { content: { 'application/json': { schema: ListTasksRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTasksResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceStartTaskExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.StartTaskExecution',
  description:
    '<p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>',
  operationId: 'StartTaskExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.StartTaskExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.StartTaskExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartTaskExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTaskExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.TagResource',
  description:
    '<p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>',
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
        .literal('FmrsService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.TagResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UntagResource',
  description: 'Removes tags from an Amazon Web Services resource.',
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
        .literal('FmrsService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UntagResource'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateAgentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateAgent',
  description: 'Updates the name of an agent.',
  operationId: 'UpdateAgent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateAgent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateAgent'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAgentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAgentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateLocationHdfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateLocationHdfs',
  description:
    'Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.',
  operationId: 'UpdateLocationHdfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateLocationHdfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateLocationHdfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLocationHdfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLocationHdfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateLocationNfsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateLocationNfs',
  description:
    'Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.',
  operationId: 'UpdateLocationNfs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateLocationNfs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateLocationNfs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLocationNfsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLocationNfsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateLocationObjectStorageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateLocationObjectStorage',
  description:
    'Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.',
  operationId: 'UpdateLocationObjectStorage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateLocationObjectStorage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateLocationObjectStorage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLocationObjectStorageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLocationObjectStorageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateLocationSmbRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateLocationSmb',
  description:
    'Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.',
  operationId: 'UpdateLocationSmb',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateLocationSmb')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateLocationSmb'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLocationSmbRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLocationSmbResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateTask',
  description: 'Updates the metadata associated with a task.',
  operationId: 'UpdateTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateTask'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTaskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTaskResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetFmrsServiceUpdateTaskExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=FmrsService.UpdateTaskExecution',
  description:
    '<p>Updates execution of a task.</p> <p>You can modify bandwidth throttling for a task execution that is running or queued. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p> <note> <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>.</p> </note>',
  operationId: 'UpdateTaskExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('FmrsService.UpdateTaskExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['FmrsService.UpdateTaskExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTaskExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTaskExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})
