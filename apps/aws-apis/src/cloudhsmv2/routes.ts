import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const RegionSchema = z
  .string()
  .regex(/[a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d/)
  .openapi('Region')

const BackupIdSchema = z
  .string()
  .regex(/backup-[2-7a-zA-Z]{11,16}/)
  .openapi('BackupId')

const ClusterIdSchema = z
  .string()
  .regex(/cluster-[2-7a-zA-Z]{11,16}/)
  .openapi('ClusterId')

const DestinationBackupSchema = z
  .object({
    CreateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when both the source backup was created.' }),
    ).exactOptional(),
    SourceRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS region that contains the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
    SourceBackup: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
    SourceCluster: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster containing the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.',
    required: [],
  })
  .openapi('DestinationBackup')

const CopyBackupToRegionResponseSchema = z
  .object({
    DestinationBackup: DestinationBackupSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information on the backup that will be copied to the destination region, including CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the destination backup will be the same as that of the source backup.</p> <p>You will need to use the <code>sourceBackupID</code> returned in this operation to use the <a>DescribeBackups</a> operation on the backup that will be copied to the destination region.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopyBackupToRegionResponse')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'Contains a tag. A tag is a key-value pair.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const CopyBackupToRegionRequestSchema = z
  .object({
    DestinationRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS region that will contain your copied CloudHSM cluster backup.',
        }),
    ),
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the backup that will be copied to the destination region. ',
        }),
    ),
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DestinationRegion', 'BackupId'], title: 'CopyBackupToRegionRequest' })
  .openapi('CopyBackupToRegionRequest')

const CloudHsmAccessDeniedExceptionSchema = z.any().openapi('CloudHsmAccessDeniedException')

const CloudHsmInternalFailureExceptionSchema = z.any().openapi('CloudHsmInternalFailureException')

const CloudHsmInvalidRequestExceptionSchema = z.any().openapi('CloudHsmInvalidRequestException')

const CloudHsmResourceNotFoundExceptionSchema = z.any().openapi('CloudHsmResourceNotFoundException')

const CloudHsmServiceExceptionSchema = z.any().openapi('CloudHsmServiceException')

const CloudHsmTagExceptionSchema = z.any().openapi('CloudHsmTagException')

const BackupPolicySchema = z.literal('DEFAULT').openapi('BackupPolicy')

const BackupRetentionTypeSchema = z.literal('DAYS').openapi('BackupRetentionType')

const BackupRetentionValueSchema = z
  .string()
  .regex(/[0-9]+/)
  .min(1)
  .max(3)
  .openapi('BackupRetentionValue')

const BackupRetentionPolicySchema = z
  .object({
    Type: BackupRetentionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of backup retention policy. For the <code>DAYS</code> type, the value is the number of days to retain backups.',
        }),
    ).exactOptional(),
    Value: BackupRetentionValueSchema.and(
      z.any().openapi({ description: 'Use a value between 7 - 379.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A policy that defines the number of days to retain backups.',
    required: [],
  })
  .openapi('BackupRetentionPolicy')

const ExternalAzSchema = z
  .string()
  .regex(/[a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d[a-z]/)
  .openapi('ExternalAz')

const SubnetIdSchema = z
  .string()
  .regex(/subnet-[0-9a-fA-F]{8,17}/)
  .openapi('SubnetId')

const EniIdSchema = z
  .string()
  .regex(/eni-[0-9a-fA-F]{8,17}/)
  .openapi('EniId')

const IpAddressSchema = z
  .string()
  .regex(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
  .openapi('IpAddress')

const HsmIdSchema = z
  .string()
  .regex(/hsm-[2-7a-zA-Z]{11,16}/)
  .openapi('HsmId')

const HsmStateSchema = z
  .enum(['CREATE_IN_PROGRESS', 'ACTIVE', 'DEGRADED', 'DELETE_IN_PROGRESS', 'DELETED'])
  .openapi('HsmState')

const StringSchema = z.string().openapi('String')

const HsmSchema = z
  .object({
    AvailabilityZone: ExternalAzSchema.and(
      z.any().openapi({ description: 'The Availability Zone that contains the HSM.' }),
    ).exactOptional(),
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The identifier (ID) of the cluster that contains the HSM.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description: "The subnet that contains the HSM's elastic network interface (ENI).",
        }),
    ).exactOptional(),
    EniId: EniIdSchema.and(
      z
        .any()
        .openapi({
          description: "The identifier (ID) of the HSM's elastic network interface (ENI).",
        }),
    ).exactOptional(),
    EniIp: IpAddressSchema.and(
      z
        .any()
        .openapi({ description: "The IP address of the HSM's elastic network interface (ENI)." }),
    ).exactOptional(),
    HsmId: HsmIdSchema.and(z.any().openapi({ description: "The HSM's identifier (ID)." })),
    State: HsmStateSchema.and(z.any().openapi({ description: "The HSM's state." })).exactOptional(),
    StateMessage: StringSchema.and(
      z.any().openapi({ description: "A description of the HSM's state." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HsmId'],
    description:
      'Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.',
  })
  .openapi('Hsm')

const HsmsSchema = z.array(HsmSchema).openapi('Hsms')

const HsmTypeSchema = z
  .string()
  .regex(/(hsm1\.medium)/)
  .openapi('HsmType')

const PreCoPasswordSchema = z.string().min(7).max(32).openapi('PreCoPassword')

const SecurityGroupSchema = z
  .string()
  .regex(/sg-[0-9a-fA-F]{8,17}/)
  .openapi('SecurityGroup')

const ClusterStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'UNINITIALIZED',
    'INITIALIZE_IN_PROGRESS',
    'INITIALIZED',
    'ACTIVE',
    'UPDATE_IN_PROGRESS',
    'DELETE_IN_PROGRESS',
    'DELETED',
    'DEGRADED',
  ])
  .openapi('ClusterState')

const StateMessageSchema = z.string().regex(/.*/).max(300).openapi('StateMessage')

const ExternalSubnetMappingSchema = z
  .record(z.string(), SubnetIdSchema)
  .openapi('ExternalSubnetMapping')

const VpcIdSchema = z
  .string()
  .regex(/vpc-[0-9a-fA-F]/)
  .openapi('VpcId')

const CertSchema = z
  .string()
  .regex(/[a-zA-Z0-9+-\/=\s]*/)
  .max(5000)
  .openapi('Cert')

const CertificatesSchema = z
  .object({
    ClusterCsr: CertSchema.and(
      z
        .any()
        .openapi({
          description:
            "The cluster's certificate signing request (CSR). The CSR exists only when the cluster's state is <code>UNINITIALIZED</code>.",
        }),
    ).exactOptional(),
    HsmCertificate: CertSchema.and(
      z.any().openapi({ description: 'The HSM certificate issued (signed) by the HSM hardware.' }),
    ).exactOptional(),
    AwsHardwareCertificate: CertSchema.and(
      z
        .any()
        .openapi({ description: 'The HSM hardware certificate issued (signed) by AWS CloudHSM.' }),
    ).exactOptional(),
    ManufacturerHardwareCertificate: CertSchema.and(
      z
        .any()
        .openapi({
          description: 'The HSM hardware certificate issued (signed) by the hardware manufacturer.',
        }),
    ).exactOptional(),
    ClusterCertificate: CertSchema.and(
      z
        .any()
        .openapi({
          description:
            "The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains one or more certificates or a certificate signing request (CSR).',
    required: [],
  })
  .openapi('Certificates')

const ClusterSchema = z
  .object({
    BackupPolicy: BackupPolicySchema.and(
      z.any().openapi({ description: "The cluster's backup policy." }),
    ).exactOptional(),
    BackupRetentionPolicy: BackupRetentionPolicySchema.and(
      z.any().openapi({ description: 'A policy that defines how the service retains backups.' }),
    ).exactOptional(),
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: "The cluster's identifier (ID)." }),
    ).exactOptional(),
    CreateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the cluster was created.' }),
    ).exactOptional(),
    Hsms: HsmsSchema.and(
      z.any().openapi({ description: 'Contains information about the HSMs in the cluster.' }),
    ).exactOptional(),
    HsmType: HsmTypeSchema.and(
      z.any().openapi({ description: 'The type of HSM that the cluster contains.' }),
    ).exactOptional(),
    PreCoPassword: PreCoPasswordSchema.and(
      z
        .any()
        .openapi({
          description: "The default password for the cluster's Pre-Crypto Officer (PRECO) user.",
        }),
    ).exactOptional(),
    SecurityGroup: SecurityGroupSchema.and(
      z.any().openapi({ description: "The identifier (ID) of the cluster's security group." }),
    ).exactOptional(),
    SourceBackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup.',
        }),
    ).exactOptional(),
    State: ClusterStateSchema.and(
      z.any().openapi({ description: "The cluster's state." }),
    ).exactOptional(),
    StateMessage: StateMessageSchema.and(
      z.any().openapi({ description: "A description of the cluster's state." }),
    ).exactOptional(),
    SubnetMapping: ExternalSubnetMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map from availability zone to the cluster’s subnet in that availability zone.',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.',
        }),
    ).exactOptional(),
    Certificates: CertificatesSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains one or more certificates or a certificate signing request (CSR).',
        }),
    ).exactOptional(),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The list of tags for the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an AWS CloudHSM cluster.', required: [] })
  .openapi('Cluster')

const CreateClusterResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z.any().openapi({ description: 'Information about the cluster that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateClusterResponse')

const SubnetIdsSchema = z.array(SubnetIdSchema).min(1).max(10).openapi('SubnetIds')

const CreateClusterRequestSchema = z
  .object({
    BackupRetentionPolicy: BackupRetentionPolicySchema.and(
      z.any().openapi({ description: 'A policy that defines how the service retains backups.' }),
    ).exactOptional(),
    HsmType: HsmTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of HSM to use in the cluster. Currently the only allowed value is <code>hsm1.medium</code>.',
        }),
    ),
    SourceBackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID, use <a>DescribeBackups</a>.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria:</p> <ul> <li> <p>All subnets must be in the same virtual private cloud (VPC).</p> </li> <li> <p>You can specify only one subnet per Availability Zone.</p> </li> </ul>',
        }),
    ),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'Tags to apply to the CloudHSM cluster during creation.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['HsmType', 'SubnetIds'], title: 'CreateClusterRequest' })
  .openapi('CreateClusterRequest')

const CreateHsmResponseSchema = z
  .object({
    Hsm: HsmSchema.and(
      z.any().openapi({ description: 'Information about the HSM that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHsmResponse')

const CreateHsmRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier (ID) of the HSM's cluster. To find the cluster ID, use <a>DescribeClusters</a>.",
        }),
    ),
    AvailabilityZone: ExternalAzSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use <a>DescribeClusters</a>.",
        }),
    ),
    IpAddress: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId', 'AvailabilityZone'], title: 'CreateHsmRequest' })
  .openapi('CreateHsmRequest')

const BackupStateSchema = z
  .enum(['CREATE_IN_PROGRESS', 'READY', 'DELETED', 'PENDING_DELETION'])
  .openapi('BackupState')

const BooleanSchema = z.boolean().openapi('Boolean')

const BackupSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z.any().openapi({ description: 'The identifier (ID) of the backup.' }),
    ),
    BackupState: BackupStateSchema.and(
      z.any().openapi({ description: 'The state of the backup.' }),
    ).exactOptional(),
    ClusterId: ClusterIdSchema.and(
      z.any().openapi({ description: 'The identifier (ID) of the cluster that was backed up.' }),
    ).exactOptional(),
    CreateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time when the backup was created.' }),
    ).exactOptional(),
    CopyTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the backup was copied from a source backup.',
        }),
    ).exactOptional(),
    NeverExpires: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.',
        }),
    ).exactOptional(),
    SourceRegion: RegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region that contains the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
    SourceBackup: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
    SourceCluster: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster containing the source backup from which the new backup was copied.',
        }),
    ).exactOptional(),
    DeleteTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the backup will be permanently deleted.' }),
    ).exactOptional(),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The list of tags for the backup.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BackupId'],
    description:
      'Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.',
  })
  .openapi('Backup')

const DeleteBackupResponseSchema = z
  .object({
    Backup: BackupSchema.and(
      z.any().openapi({ description: 'Information on the <code>Backup</code> object deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackupResponse')

const DeleteBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the backup to be deleted. To find the ID of a backup, use the <a>DescribeBackups</a> operation.',
        }),
    ),
  })
  .openapi({ required: ['BackupId'], title: 'DeleteBackupRequest' })
  .openapi('DeleteBackupRequest')

const DeleteClusterResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z.any().openapi({ description: 'Information about the cluster that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteClusterResponse')

const DeleteClusterRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
  })
  .openapi({ required: ['ClusterId'], title: 'DeleteClusterRequest' })
  .openapi('DeleteClusterRequest')

const DeleteHsmResponseSchema = z
  .object({
    HsmId: HsmIdSchema.and(
      z.any().openapi({ description: 'The identifier (ID) of the HSM that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteHsmResponse')

const DeleteHsmRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster that contains the HSM that you are deleting.',
        }),
    ),
    HsmId: HsmIdSchema.and(
      z.any().openapi({ description: 'The identifier (ID) of the HSM that you are deleting.' }),
    ).exactOptional(),
    EniId: EniIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the elastic network interface (ENI) of the HSM that you are deleting.',
        }),
    ).exactOptional(),
    EniIp: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the elastic network interface (ENI) of the HSM that you are deleting.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterId'], title: 'DeleteHsmRequest' })
  .openapi('DeleteHsmRequest')

const BackupsSchema = z.array(BackupSchema).openapi('Backups')

const NextTokenSchema = z.string().regex(/.*/).max(256).openapi('NextToken')

const DescribeBackupsResponseSchema = z
  .object({
    Backups: BackupsSchema.and(
      z.any().openapi({ description: 'A list of backups.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates that the response contains only a subset of backups. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBackupsResponse')

const BackupsMaxSizeSchema = z.int().min(1).max(50).openapi('BackupsMaxSize')

const StringsSchema = z.array(StringSchema).openapi('Strings')

const FiltersSchema = z.record(z.string(), StringsSchema).openapi('Filters')

const DescribeBackupsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value that you received in the previous response. Use this value to get more backups.',
        }),
    ).exactOptional(),
    MaxResults: BackupsMaxSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of backups to return in the response. When there are more backups than the number you specify, the response contains a <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters to limit the items returned in the response.</p> <p>Use the <code>backupIds</code> filter to return only the specified backups. Specify backups by their backup identifier (ID).</p> <p>Use the <code>sourceBackupIds</code> filter to return only the backups created from a source backup. The <code>sourceBackupID</code> of a source backup is returned by the <a>CopyBackupToRegion</a> operation.</p> <p>Use the <code>clusterIds</code> filter to return only the backups for the specified clusters. Specify clusters by their cluster identifier (ID).</p> <p>Use the <code>states</code> filter to return only backups that match the specified state.</p> <p>Use the <code>neverExpires</code> filter to return backups filtered by the value in the <code>neverExpires</code> parameter. <code>True</code> returns all backups exempt from the backup retention policy. <code>False</code> returns all backups with a backup retention policy defined at the cluster.</p>',
        }),
    ).exactOptional(),
    SortAscending: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Designates whether or not to sort the return backups by ascending chronological order of generation.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeBackupsRequest', required: [] })
  .openapi('DescribeBackupsRequest')

const ClustersSchema = z.array(ClusterSchema).openapi('Clusters')

const DescribeClustersResponseSchema = z
  .object({
    Clusters: ClustersSchema.and(
      z.any().openapi({ description: 'A list of clusters.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates that the response contains only a subset of clusters. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClustersResponse')

const ClustersMaxSizeSchema = z.int().min(1).max(25).openapi('ClustersMaxSize')

const DescribeClustersRequestSchema = z
  .object({
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more filters to limit the items returned in the response.</p> <p>Use the <code>clusterIds</code> filter to return only the specified clusters. Specify clusters by their cluster identifier (ID).</p> <p>Use the <code>vpcIds</code> filter to return only the clusters in the specified virtual private clouds (VPCs). Specify VPCs by their VPC identifier (ID).</p> <p>Use the <code>states</code> filter to return only clusters that match the specified state.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value that you received in the previous response. Use this value to get more clusters.',
        }),
    ).exactOptional(),
    MaxResults: ClustersMaxSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of clusters to return in the response. When there are more clusters than the number you specify, the response contains a <code>NextToken</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeClustersRequest', required: [] })
  .openapi('DescribeClustersRequest')

const InitializeClusterResponseSchema = z
  .object({
    State: ClusterStateSchema.and(
      z.any().openapi({ description: "The cluster's state." }),
    ).exactOptional(),
    StateMessage: StateMessageSchema.and(
      z.any().openapi({ description: "A description of the cluster's state." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InitializeClusterResponse')

const InitializeClusterRequestSchema = z
  .object({
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
    SignedCert: CertSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster certificate issued (signed) by your issuing certificate authority (CA). The certificate must be in PEM format and can contain a maximum of 5000 characters.',
        }),
    ),
    TrustAnchor: CertSchema.and(
      z
        .any()
        .openapi({
          description:
            'The issuing certificate of the issuing certificate authority (CA) that issued (signed) the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the root certificate. The certificate must be in PEM format and can contain a maximum of 5000 characters.',
        }),
    ),
  })
  .openapi({
    required: ['ClusterId', 'SignedCert', 'TrustAnchor'],
    title: 'InitializeClusterRequest',
  })
  .openapi('InitializeClusterRequest')

const ListTagsResponseSchema = z
  .object({
    TagList: TagListSchema.and(z.any().openapi({ description: 'A list of tags.' })),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque string that indicates that the response contains only a subset of tags. Use this value in a subsequent <code>ListTags</code> request to get more tags.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TagList'] })
  .openapi('ListTagsResponse')

const ResourceIdSchema = z
  .string()
  .regex(/(?:cluster|backup)-[2-7a-zA-Z]{11,16}/)
  .openapi('ResourceId')

const MaxSizeSchema = z.int().min(1).max(100).openapi('MaxSize')

const ListTagsRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value that you received in the previous response. Use this value to get more tags.',
        }),
    ).exactOptional(),
    MaxResults: MaxSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a <code>NextToken</code> value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceId'], title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const ModifyBackupAttributesResponseSchema = z
  .object({ Backup: BackupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyBackupAttributesResponse')

const ModifyBackupAttributesRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the backup to modify. To find the ID of a backup, use the <a>DescribeBackups</a> operation.',
        }),
    ),
    NeverExpires: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.',
        }),
    ),
  })
  .openapi({ required: ['BackupId', 'NeverExpires'], title: 'ModifyBackupAttributesRequest' })
  .openapi('ModifyBackupAttributesRequest')

const ModifyClusterResponseSchema = z
  .object({ Cluster: ClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyClusterResponse')

const ModifyClusterRequestSchema = z
  .object({
    BackupRetentionPolicy: BackupRetentionPolicySchema.and(
      z.any().openapi({ description: 'A policy that defines how the service retains backups.' }),
    ),
    ClusterId: ClusterIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
  })
  .openapi({ required: ['BackupRetentionPolicy', 'ClusterId'], title: 'ModifyClusterRequest' })
  .openapi('ModifyClusterRequest')

const RestoreBackupResponseSchema = z
  .object({
    Backup: BackupSchema.and(
      z.any().openapi({ description: 'Information on the <code>Backup</code> object created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestoreBackupResponse')

const RestoreBackupRequestSchema = z
  .object({
    BackupId: BackupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the backup to be restored. To find the ID of a backup, use the <a>DescribeBackups</a> operation.',
        }),
    ),
  })
  .openapi({ required: ['BackupId'], title: 'RestoreBackupRequest' })
  .openapi('RestoreBackupRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster identifier (ID) for the cluster that you are tagging. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
    TagList: TagListSchema.and(z.any().openapi({ description: 'A list of one or more tags.' })),
  })
  .openapi({ required: ['ResourceId', 'TagList'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster identifier (ID) for the cluster whose tags you are removing. To find the cluster ID, use <a>DescribeClusters</a>.',
        }),
    ),
    TagKeyList: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tag keys for the tags that you are removing. Specify only the tag keys, not the tag values.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'TagKeyList'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const FieldSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .openapi('Field')

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

export const postXAmzTargetBaldrApiServiceCopyBackupToRegionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.CopyBackupToRegion',
  description: 'Copy an AWS CloudHSM cluster backup to a different region.',
  operationId: 'CopyBackupToRegion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.CopyBackupToRegion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.CopyBackupToRegion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CopyBackupToRegionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyBackupToRegionResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceCreateClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.CreateCluster',
  description: 'Creates a new AWS CloudHSM cluster.',
  operationId: 'CreateCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.CreateCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.CreateCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClusterResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceCreateHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.CreateHsm',
  description:
    'Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.',
  operationId: 'CreateHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.CreateHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.CreateHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    481: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceDeleteBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.DeleteBackup',
  description:
    'Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.',
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
        .literal('BaldrApiService.DeleteBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.DeleteBackup'] },
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
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceDeleteClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.DeleteCluster',
  description:
    'Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.',
  operationId: 'DeleteCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.DeleteCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.DeleteCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteClusterResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceDeleteHsmRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.DeleteHsm',
  description:
    "Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.",
  operationId: 'DeleteHsm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.DeleteHsm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.DeleteHsm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteHsmRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteHsmResponseSchema } },
    },
    480: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    481: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    482: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    484: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceDescribeBackupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.DescribeBackups',
  description:
    '<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>',
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
        .literal('BaldrApiService.DescribeBackups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.DescribeBackups'] },
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
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceDescribeClustersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.DescribeClusters',
  description:
    '<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>',
  operationId: 'DescribeClusters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.DescribeClusters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.DescribeClusters'] },
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
      content: { 'application/json': { schema: DescribeClustersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClustersResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    484: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceInitializeClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.InitializeCluster',
  description:
    "Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.",
  operationId: 'InitializeCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.InitializeCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.InitializeCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InitializeClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InitializeClusterResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceListTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.ListTags',
  description:
    '<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>',
  operationId: 'ListTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.ListTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.ListTags'] },
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
    body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceModifyBackupAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes',
  description: 'Modifies attributes for AWS CloudHSM backup.',
  operationId: 'ModifyBackupAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.ModifyBackupAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.ModifyBackupAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyBackupAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyBackupAttributesResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceModifyClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.ModifyCluster',
  description: 'Modifies AWS CloudHSM cluster.',
  operationId: 'ModifyCluster',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.ModifyCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.ModifyCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifyClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ModifyClusterResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceRestoreBackupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.RestoreBackup',
  description:
    'Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.',
  operationId: 'RestoreBackup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('BaldrApiService.RestoreBackup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.RestoreBackup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreBackupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestoreBackupResponseSchema } },
    },
    480: {
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.TagResource',
  description: 'Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.',
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
        .literal('BaldrApiService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.TagResource'] },
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
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})

export const postXAmzTargetBaldrApiServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=BaldrApiService.UntagResource',
  description: 'Removes the specified tag or tags from the specified AWS CloudHSM cluster.',
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
        .literal('BaldrApiService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['BaldrApiService.UntagResource'] },
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
      description: 'CloudHsmAccessDeniedException',
      content: { 'application/json': { schema: CloudHsmAccessDeniedExceptionSchema } },
    },
    481: {
      description: 'CloudHsmInternalFailureException',
      content: { 'application/json': { schema: CloudHsmInternalFailureExceptionSchema } },
    },
    482: {
      description: 'CloudHsmInvalidRequestException',
      content: { 'application/json': { schema: CloudHsmInvalidRequestExceptionSchema } },
    },
    483: {
      description: 'CloudHsmResourceNotFoundException',
      content: { 'application/json': { schema: CloudHsmResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'CloudHsmServiceException',
      content: { 'application/json': { schema: CloudHsmServiceExceptionSchema } },
    },
    485: {
      description: 'CloudHsmTagException',
      content: { 'application/json': { schema: CloudHsmTagExceptionSchema } },
    },
  },
})
