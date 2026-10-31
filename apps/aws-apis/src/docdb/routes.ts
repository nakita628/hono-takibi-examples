import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const PendingMaintenanceActionSchema = z
  .object({
    Action: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of pending maintenance action that is available for the resource.',
        }),
    ).exactOptional(),
    AutoAppliedAfterDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.',
        }),
    ).exactOptional(),
    ForcedApplyDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.',
        }),
    ).exactOptional(),
    OptInStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the type of opt-in request that has been received for the resource.',
        }),
    ).exactOptional(),
    CurrentApplyDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effective date when the pending maintenance action is applied to the resource.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description providing more detail about the maintenance action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a pending maintenance action for a resource.',
    required: [],
  })
  .openapi('PendingMaintenanceAction')

const PendingMaintenanceActionDetailsSchema = z
  .array(
    PendingMaintenanceActionSchema.and(
      z.any().openapi({ xml: { name: 'PendingMaintenanceAction' } }),
    ),
  )
  .openapi('PendingMaintenanceActionDetails')

const ResourcePendingMaintenanceActionsSchema = z
  .object({
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that has pending maintenance actions.',
        }),
    ).exactOptional(),
    PendingMaintenanceActionDetails: PendingMaintenanceActionDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that provides details about the pending maintenance actions for the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>ApplyPendingMaintenanceAction</a>. ',
    required: [],
  })
  .openapi('ResourcePendingMaintenanceActions')

type PendingMaintenanceActionsType = (z.infer<typeof ResourcePendingMaintenanceActionsSchema> & {
  [key: string]: unknown
})[]

const SourceIdsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'SourceId' } })))
  .openapi('SourceIdsList')

const EventCategoriesListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'EventCategory' } })))
  .openapi('EventCategoriesList')

const BooleanSchema = z.boolean().openapi('Boolean')

const EventSubscriptionSchema = z
  .object({
    CustomerAwsId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services customer account that is associated with the Amazon DocumentDB event notification subscription.',
        }),
    ).exactOptional(),
    CustSubscriptionId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon DocumentDB event notification subscription ID.' }),
    ).exactOptional(),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The topic ARN of the Amazon DocumentDB event notification subscription.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Amazon DocumentDB event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: <code>creating</code>, <code>modifying</code>, <code>deleting</code>, <code>active</code>, <code>no-permission</code>, <code>topic-not-exist</code> </p> <p>The <code>no-permission</code> status indicates that Amazon DocumentDB no longer has permission to post to the SNS topic. The <code>topic-not-exist</code> status indicates that the topic was deleted after the subscription was created.</p>',
        }),
    ).exactOptional(),
    SubscriptionCreationTime: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the Amazon DocumentDB event notification subscription was created.',
        }),
    ).exactOptional(),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The source type for the Amazon DocumentDB event notification subscription.',
        }),
    ).exactOptional(),
    SourceIdsList: SourceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of source IDs for the Amazon DocumentDB event notification subscription.',
        }),
    ).exactOptional(),
    EventCategoriesList: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event categories for the Amazon DocumentDB event notification subscription.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether the subscription is enabled. A value of <code>true</code> indicates that the subscription is enabled.',
        }),
    ).exactOptional(),
    EventSubscriptionArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the event subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Detailed information about an event to which you have subscribed.',
    required: [],
  })
  .openapi('EventSubscription')

const AddSourceIdentifierToSubscriptionResultSchema = z
  .object({ EventSubscription: EventSubscriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AddSourceIdentifierToSubscriptionResult')

const SubscriptionNotFoundFaultSchema = z.any().openapi('SubscriptionNotFoundFault')

const SourceNotFoundFaultSchema = z.any().openapi('SourceNotFoundFault')

const TagSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with \"<code>aws:</code>\" or \"<code>rds:</code>\". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with \"<code>aws:</code>\" or \"<code>rds:</code>\". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.',
    required: [],
  })
  .openapi('Tag')

const DBInstanceNotFoundFaultSchema = z.any().openapi('DBInstanceNotFoundFault')

const DBSnapshotNotFoundFaultSchema = z.any().openapi('DBSnapshotNotFoundFault')

const DBClusterNotFoundFaultSchema = z.any().openapi('DBClusterNotFoundFault')

const ApplyPendingMaintenanceActionResultSchema = z
  .object({
    ResourcePendingMaintenanceActions: ResourcePendingMaintenanceActionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplyPendingMaintenanceActionResult')

const ResourceNotFoundFaultSchema = z.any().openapi('ResourceNotFoundFault')

const InvalidDBClusterStateFaultSchema = z.any().openapi('InvalidDBClusterStateFault')

const InvalidDBInstanceStateFaultSchema = z.any().openapi('InvalidDBInstanceStateFault')

const DBClusterParameterGroupSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'Provides the name of the cluster parameter group.' }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the name of the parameter group family that this cluster parameter group is compatible with.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the customer-specified description for this cluster parameter group.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for the cluster parameter group.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about a cluster parameter group. ', required: [] })
  .openapi('DBClusterParameterGroup')

const CopyDBClusterParameterGroupResultSchema = z
  .object({ DBClusterParameterGroup: DBClusterParameterGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CopyDBClusterParameterGroupResult')

const DBParameterGroupNotFoundFaultSchema = z.any().openapi('DBParameterGroupNotFoundFault')

const DBParameterGroupQuotaExceededFaultSchema = z
  .any()
  .openapi('DBParameterGroupQuotaExceededFault')

const DBParameterGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('DBParameterGroupAlreadyExistsFault')

const AvailabilityZonesSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AvailabilityZone' } })))
  .openapi('AvailabilityZones')

const IntegerSchema = z.int().openapi('Integer')

const DBClusterSnapshotSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the list of Amazon EC2 Availability Zones that instances in the cluster snapshot can be restored in.',
        }),
    ).exactOptional(),
    DBClusterSnapshotIdentifier: StringSchema.and(
      z.any().openapi({ description: 'Specifies the identifier for the cluster snapshot.' }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the cluster identifier of the cluster that this cluster snapshot was created from.',
        }),
    ).exactOptional(),
    SnapshotCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'Provides the time when the snapshot was taken, in UTC.' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the database engine.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the status of this cluster snapshot.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the port that the cluster was listening on at the time of the snapshot.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the virtual private cloud (VPC) ID that is associated with the cluster snapshot.',
        }),
    ).exactOptional(),
    ClusterCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time when the cluster was created, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Provides the master user name for the cluster snapshot.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the version of the database engine for this cluster snapshot.',
        }),
    ).exactOptional(),
    SnapshotType: StringSchema.and(
      z.any().openapi({ description: 'Provides the type of the cluster snapshot.' }),
    ).exactOptional(),
    PercentProgress: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the percentage of the estimated data that has been transferred.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the cluster snapshot is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for the encrypted cluster snapshot.',
        }),
    ).exactOptional(),
    DBClusterSnapshotArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the cluster snapshot.' }),
    ).exactOptional(),
    SourceDBClusterSnapshotArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the cluster snapshot was copied from a source cluster snapshot, the ARN for the source cluster snapshot; otherwise, a null value.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about a cluster snapshot. ', required: [] })
  .openapi('DBClusterSnapshot')

const CopyDBClusterSnapshotResultSchema = z
  .object({ DBClusterSnapshot: DBClusterSnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CopyDBClusterSnapshotResult')

const DBClusterSnapshotAlreadyExistsFaultSchema = z
  .any()
  .openapi('DBClusterSnapshotAlreadyExistsFault')

const DBClusterSnapshotNotFoundFaultSchema = z.any().openapi('DBClusterSnapshotNotFoundFault')

const InvalidDBClusterSnapshotStateFaultSchema = z
  .any()
  .openapi('InvalidDBClusterSnapshotStateFault')

const SnapshotQuotaExceededFaultSchema = z.any().openapi('SnapshotQuotaExceededFault')

const KMSKeyNotAccessibleFaultSchema = z.any().openapi('KMSKeyNotAccessibleFault')

const IntegerOptionalSchema = z.int().openapi('IntegerOptional')

const ReadReplicaIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ReadReplicaIdentifier' } })))
  .openapi('ReadReplicaIdentifierList')

const DBClusterMemberSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the instance identifier for this member of the cluster.',
        }),
    ).exactOptional(),
    IsClusterWriter: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that is <code>true</code> if the cluster member is the primary instance for the cluster and <code>false</code> otherwise.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the cluster parameter group for this member of the DB cluster.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about an instance that is part of a cluster.',
    required: [],
  })
  .openapi('DBClusterMember')

const DBClusterMemberListSchema = z
  .array(DBClusterMemberSchema.and(z.any().openapi({ xml: { name: 'DBClusterMember' } })))
  .openapi('DBClusterMemberList')

const VpcSecurityGroupMembershipSchema = z
  .object({
    VpcSecurityGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the VPC security group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the VPC security group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Used as a response element for queries on virtual private cloud (VPC) security group membership.',
    required: [],
  })
  .openapi('VpcSecurityGroupMembership')

const VpcSecurityGroupMembershipListSchema = z
  .array(
    VpcSecurityGroupMembershipSchema.and(
      z.any().openapi({ xml: { name: 'VpcSecurityGroupMembership' } }),
    ),
  )
  .openapi('VpcSecurityGroupMembershipList')

const DBClusterRoleSchema = z
  .object({
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAMrole that is associated with the DB cluster.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the state of association between the IAMrole and the cluster. The <code>Status</code> property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - The IAMrole ARN is associated with the cluster and can be used to access other Amazon Web Services services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - The IAMrole ARN is being associated with the cluster.</p> </li> <li> <p> <code>INVALID</code> - The IAMrole ARN is associated with the cluster, but the cluster cannot assume the IAMrole to access other Amazon Web Services services on your behalf.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an Identity and Access Management (IAM) role that is associated with a cluster.',
    required: [],
  })
  .openapi('DBClusterRole')

const DBClusterRolesSchema = z
  .array(DBClusterRoleSchema.and(z.any().openapi({ xml: { name: 'DBClusterRole' } })))
  .openapi('DBClusterRoles')

const LogTypeListSchema = z.array(StringSchema).openapi('LogTypeList')

const DBClusterSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the list of Amazon EC2 Availability Zones that instances in the cluster can be created in.',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the number of days for which automatic snapshots are retained.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-supplied cluster identifier. This identifier is the unique key that identifies a cluster.',
        }),
    ).exactOptional(),
    DBClusterParameterGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the cluster parameter group for the cluster.',
        }),
    ).exactOptional(),
    DBSubnetGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information on the subnet group that is associated with the cluster, including the name, description, and subnets in the subnet group.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this cluster.' }),
    ).exactOptional(),
    PercentProgress: StringSchema.and(
      z.any().openapi({ description: 'Specifies the progress of the operation as a percentage.' }),
    ).exactOptional(),
    EarliestRestorableTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The earliest time to which a database can be restored with point-in-time restore.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the connection endpoint for the primary instance of the cluster.',
        }),
    ).exactOptional(),
    ReaderEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reader endpoint for the cluster. The reader endpoint for a cluster load balances connections across the Amazon DocumentDB replicas that are available in a cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your cluster. </p> <p>If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.</p>',
        }),
    ).exactOptional(),
    MultiAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the cluster has instances in multiple Availability Zones.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the name of the database engine to be used for this cluster.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    LatestRestorableTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the latest time to which a database can be restored with point-in-time restore.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the port that the database engine is listening on.' }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Contains the master user name for the cluster.' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. ',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    ReplicationSourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the identifier of the source cluster if this cluster is a secondary cluster.',
        }),
    ).exactOptional(),
    ReadReplicaIdentifiers: ReadReplicaIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more identifiers of the secondary clusters that are associated with this cluster.',
        }),
    ).exactOptional(),
    DBClusterMembers: DBClusterMemberListSchema.and(
      z.any().openapi({ description: 'Provides the list of instances that make up the cluster.' }),
    ).exactOptional(),
    VpcSecurityGroups: VpcSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a list of virtual private cloud (VPC) security groups that the cluster belongs to.',
        }),
    ).exactOptional(),
    HostedZoneId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the cluster is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for the encrypted cluster.',
        }),
    ).exactOptional(),
    DbClusterResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region-unique, immutable identifier for the cluster. This identifier is found in CloudTrail log entries whenever the KMS key for the cluster is accessed.',
        }),
    ).exactOptional(),
    DBClusterArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the cluster.' }),
    ).exactOptional(),
    AssociatedRoles: DBClusterRolesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a list of the Identity and Access Management (IAM) roles that are associated with the cluster. (IAM) roles that are associated with a cluster grant permission for the cluster to access other Amazon Web Services services on your behalf.',
        }),
    ).exactOptional(),
    CloneGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the clone group to which the DB cluster is associated.',
        }),
    ).exactOptional(),
    ClusterCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time when the cluster was created, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    EnabledCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that this cluster is configured to export to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about a cluster. ', required: [] })
  .openapi('DBCluster')

const CreateDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBClusterResult')

const DBClusterAlreadyExistsFaultSchema = z.any().openapi('DBClusterAlreadyExistsFault')

const InsufficientStorageClusterCapacityFaultSchema = z
  .any()
  .openapi('InsufficientStorageClusterCapacityFault')

const DBClusterQuotaExceededFaultSchema = z.any().openapi('DBClusterQuotaExceededFault')

const StorageQuotaExceededFaultSchema = z.any().openapi('StorageQuotaExceededFault')

const DBSubnetGroupNotFoundFaultSchema = z.any().openapi('DBSubnetGroupNotFoundFault')

const InvalidVPCNetworkStateFaultSchema = z.any().openapi('InvalidVPCNetworkStateFault')

const InvalidDBSubnetGroupStateFaultSchema = z.any().openapi('InvalidDBSubnetGroupStateFault')

const InvalidSubnetSchema = z.any().openapi('InvalidSubnet')

const DBClusterParameterGroupNotFoundFaultSchema = z
  .any()
  .openapi('DBClusterParameterGroupNotFoundFault')

const DBSubnetGroupDoesNotCoverEnoughAZsSchema = z
  .any()
  .openapi('DBSubnetGroupDoesNotCoverEnoughAZs')

const GlobalClusterNotFoundFaultSchema = z.any().openapi('GlobalClusterNotFoundFault')

const InvalidGlobalClusterStateFaultSchema = z.any().openapi('InvalidGlobalClusterStateFault')

const CreateDBClusterParameterGroupResultSchema = z
  .object({ DBClusterParameterGroup: DBClusterParameterGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBClusterParameterGroupResult')

const CreateDBClusterSnapshotResultSchema = z
  .object({ DBClusterSnapshot: DBClusterSnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBClusterSnapshotResult')

const EndpointSchema = z
  .object({
    Address: StringSchema.and(
      z.any().openapi({ description: 'Specifies the DNS address of the instance.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the port that the database engine is listening on.' }),
    ).exactOptional(),
    HostedZoneId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.',
    required: [],
  })
  .openapi('Endpoint')

const AvailabilityZoneSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the Availability Zone.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Availability Zone.', required: [] })
  .openapi('AvailabilityZone')

const SubnetSchema = z
  .object({
    SubnetIdentifier: StringSchema.and(
      z.any().openapi({ description: 'Specifies the identifier of the subnet.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: AvailabilityZoneSchema.and(
      z.any().openapi({ description: 'Specifies the Availability Zone for the subnet.' }),
    ).exactOptional(),
    SubnetStatus: StringSchema.and(
      z.any().openapi({ description: 'Specifies the status of the subnet.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Detailed information about a subnet. ', required: [] })
  .openapi('Subnet')

const SubnetListSchema = z
  .array(SubnetSchema.and(z.any().openapi({ xml: { name: 'Subnet' } })))
  .openapi('SubnetList')

const DBSubnetGroupSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the subnet group.' }),
    ).exactOptional(),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'Provides the description of the subnet group.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the virtual private cloud (VPC) ID of the subnet group.',
        }),
    ).exactOptional(),
    SubnetGroupStatus: StringSchema.and(
      z.any().openapi({ description: 'Provides the status of the subnet group.' }),
    ).exactOptional(),
    Subnets: SubnetListSchema.and(
      z
        .any()
        .openapi({
          description: 'Detailed information about one or more subnets within a subnet group.',
        }),
    ).exactOptional(),
    DBSubnetGroupArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the DB subnet group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about a subnet group. ', required: [] })
  .openapi('DBSubnetGroup')

const BooleanOptionalSchema = z.boolean().openapi('BooleanOptional')

const PendingCloudwatchLogsExportsSchema = z
  .object({
    LogTypesToEnable: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.",
        }),
    ).exactOptional(),
    LogTypesToDisable: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Log types that are in the process of being enabled. After they are enabled, these log types are exported to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.',
    required: [],
  })
  .openapi('PendingCloudwatchLogsExports')

const PendingModifiedValuesSchema = z
  .object({
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>DBInstanceClass</code> for the instance that will be applied or is currently being applied. ',
        }),
    ).exactOptional(),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>AllocatedStorage</code> size for then instance that will be applied or is currently being applied. ',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the pending or currently in-progress change of the master credentials for the instance.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Specifies the pending port for the instance.' }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the pending number of days for which automated backups are retained.',
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the Single-AZ instance is to change to a Multi-AZ deployment.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The license model for the instance.</p> <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>, <code>general-public-license</code> </p>',
        }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the new Provisioned IOPS value for the instance that will be applied or is currently being applied.',
        }),
    ).exactOptional(),
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>DBInstanceIdentifier</code> for the instance that will be applied or is currently being applied. ',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the storage type to be associated with the instance.' }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the identifier of the certificate authority (CA) certificate for the DB instance.',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The new subnet group for the instance. ' }),
    ).exactOptional(),
    PendingCloudwatchLogsExports: PendingCloudwatchLogsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.",
    required: [],
  })
  .openapi('PendingModifiedValues')

const DBInstanceStatusInfoSchema = z
  .object({
    StatusType: StringSchema.and(
      z.any().openapi({ description: 'This value is currently "<code>read replication</code>."' }),
    ).exactOptional(),
    Normal: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that is <code>true</code> if the instance is operating normally, or <code>false</code> if the instance is in an error state.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status of the instance. For a <code>StatusType</code> of read replica, the values can be <code>replicating</code>, error, <code>stopped</code>, or <code>terminated</code>.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a list of status information for an instance.', required: [] })
  .openapi('DBInstanceStatusInfo')

const DBInstanceStatusInfoListSchema = z
  .array(DBInstanceStatusInfoSchema.and(z.any().openapi({ xml: { name: 'DBInstanceStatusInfo' } })))
  .openapi('DBInstanceStatusInfoList')

const DBInstanceSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-provided database identifier. This identifier is the unique key that identifies an instance.',
        }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the name of the compute and memory capacity class of the instance.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the name of the database engine to be used for this instance.',
        }),
    ).exactOptional(),
    DBInstanceStatus: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this database.' }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'Specifies the connection endpoint.' }),
    ).exactOptional(),
    InstanceCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'Provides the date and time that the instance was created.' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. ',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the number of days for which automatic snapshots are retained.',
        }),
    ).exactOptional(),
    VpcSecurityGroups: VpcSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a list of VPC security group elements that the instance belongs to.',
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the Availability Zone that the instance is located in.',
        }),
    ).exactOptional(),
    DBSubnetGroup: DBSubnetGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information on the subnet group that is associated with the instance, including the name, description, and subnets in the subnet group.',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    PendingModifiedValues: PendingModifiedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that changes to the instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.',
        }),
    ).exactOptional(),
    LatestRestorableTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the latest time to which a database can be restored with point-in-time restore.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Does not apply. This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.',
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Not supported. Amazon DocumentDB does not currently support public endpoints. The value of <code>PubliclyAccessible</code> is always <code>false</code>.',
        }),
    ).exactOptional(),
    StatusInfos: DBInstanceStatusInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of a read replica. If the instance is not a read replica, this is blank.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the name of the cluster that the instance is a member of if the instance is a member of a cluster.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether or not the instance is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for the encrypted instance. ',
        }),
    ).exactOptional(),
    DbiResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region-unique, immutable identifier for the instance. This identifier is found in CloudTrail log entries whenever the KMS key for the instance is accessed.',
        }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the CA certificate for this DB instance.' }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.',
        }),
    ).exactOptional(),
    DBInstanceArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the instance.' }),
    ).exactOptional(),
    EnabledCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that this instance is configured to export to CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about an instance. ', required: [] })
  .openapi('DBInstance')

const CreateDBInstanceResultSchema = z
  .object({ DBInstance: DBInstanceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBInstanceResult')

const DBInstanceAlreadyExistsFaultSchema = z.any().openapi('DBInstanceAlreadyExistsFault')

const InsufficientDBInstanceCapacityFaultSchema = z
  .any()
  .openapi('InsufficientDBInstanceCapacityFault')

const DBSecurityGroupNotFoundFaultSchema = z.any().openapi('DBSecurityGroupNotFoundFault')

const InstanceQuotaExceededFaultSchema = z.any().openapi('InstanceQuotaExceededFault')

const StorageTypeNotSupportedFaultSchema = z.any().openapi('StorageTypeNotSupportedFault')

const AuthorizationNotFoundFaultSchema = z.any().openapi('AuthorizationNotFoundFault')

const CreateDBSubnetGroupResultSchema = z
  .object({ DBSubnetGroup: DBSubnetGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBSubnetGroupResult')

const DBSubnetGroupAlreadyExistsFaultSchema = z.any().openapi('DBSubnetGroupAlreadyExistsFault')

const DBSubnetGroupQuotaExceededFaultSchema = z.any().openapi('DBSubnetGroupQuotaExceededFault')

const DBSubnetQuotaExceededFaultSchema = z.any().openapi('DBSubnetQuotaExceededFault')

const CreateEventSubscriptionResultSchema = z
  .object({ EventSubscription: EventSubscriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateEventSubscriptionResult')

const EventSubscriptionQuotaExceededFaultSchema = z
  .any()
  .openapi('EventSubscriptionQuotaExceededFault')

const SubscriptionAlreadyExistFaultSchema = z.any().openapi('SubscriptionAlreadyExistFault')

const SNSInvalidTopicFaultSchema = z.any().openapi('SNSInvalidTopicFault')

const SNSNoAuthorizationFaultSchema = z.any().openapi('SNSNoAuthorizationFault')

const SNSTopicArnNotFoundFaultSchema = z.any().openapi('SNSTopicArnNotFoundFault')

const SubscriptionCategoryNotFoundFaultSchema = z.any().openapi('SubscriptionCategoryNotFoundFault')

const GlobalClusterIdentifierSchema = z
  .string()
  .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
  .min(1)
  .max(255)
  .openapi('GlobalClusterIdentifier')

const ReadersArnListSchema = z.array(StringSchema).openapi('ReadersArnList')

const GlobalClusterMemberSchema = z
  .object({
    DBClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for each Amazon DocumentDB cluster.',
        }),
    ).exactOptional(),
    Readers: ReadersArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Aurora global cluster.',
        }),
    ).exactOptional(),
    IsWriter: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the Amazon DocumentDB cluster is the primary cluster (that is, has read-write capability) for the Amazon DocumentDB global cluster with which it is associated. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. ',
    required: [],
  })
  .openapi('GlobalClusterMember')

const GlobalClusterMemberListSchema = z
  .array(GlobalClusterMemberSchema.and(z.any().openapi({ xml: { name: 'GlobalClusterMember' } })))
  .openapi('GlobalClusterMemberList')

const GlobalClusterSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-supplied global cluster identifier. This identifier is the unique key that identifies a global cluster. ',
        }),
    ).exactOptional(),
    GlobalClusterResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region-unique, immutable identifier for the global database cluster. This identifier is found in CloudTrail log entries whenever the KMS customer master key (CMK) for the cluster is accessed. ',
        }),
    ).exactOptional(),
    GlobalClusterArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the global cluster.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this global cluster.' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon DocumentDB database engine used by the global cluster. ',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'The default database name within the new global cluster.' }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'The storage encryption setting for the global cluster.' }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'The deletion protection setting for the new global cluster.' }),
    ).exactOptional(),
    GlobalClusterMembers: GlobalClusterMemberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of cluster IDs for secondary clusters within the global cluster. Currently limited to one item. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A data type representing an Amazon DocumentDB global cluster.',
    required: [],
  })
  .openapi('GlobalCluster')

const CreateGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateGlobalClusterResult')

const GlobalClusterAlreadyExistsFaultSchema = z.any().openapi('GlobalClusterAlreadyExistsFault')

const GlobalClusterQuotaExceededFaultSchema = z.any().openapi('GlobalClusterQuotaExceededFault')

const DeleteDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteDBClusterResult')

const InvalidDBParameterGroupStateFaultSchema = z.any().openapi('InvalidDBParameterGroupStateFault')

const DeleteDBClusterSnapshotResultSchema = z
  .object({ DBClusterSnapshot: DBClusterSnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteDBClusterSnapshotResult')

const DeleteDBInstanceResultSchema = z
  .object({ DBInstance: DBInstanceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteDBInstanceResult')

const DBSnapshotAlreadyExistsFaultSchema = z.any().openapi('DBSnapshotAlreadyExistsFault')

const InvalidDBSubnetStateFaultSchema = z.any().openapi('InvalidDBSubnetStateFault')

const DeleteEventSubscriptionResultSchema = z
  .object({ EventSubscription: EventSubscriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteEventSubscriptionResult')

const InvalidEventSubscriptionStateFaultSchema = z
  .any()
  .openapi('InvalidEventSubscriptionStateFault')

const DeleteGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteGlobalClusterResult')

const CertificateSchema = z
  .object({
    CertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique key that identifies a certificate.</p> <p>Example: <code>rds-ca-2019</code> </p>',
        }),
    ).exactOptional(),
    CertificateType: StringSchema.and(
      z
        .any()
        .openapi({
          description: '<p>The type of the certificate.</p> <p>Example: <code>CA</code> </p>',
        }),
    ).exactOptional(),
    Thumbprint: StringSchema.and(
      z.any().openapi({ description: 'The thumbprint of the certificate.' }),
    ).exactOptional(),
    ValidFrom: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The starting date-time from which the certificate is valid.</p> <p>Example: <code>2019-07-31T17:57:09Z</code> </p>',
        }),
    ).exactOptional(),
    ValidTill: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date-time after which the certificate is no longer valid.</p> <p>Example: <code>2024-07-31T17:57:09Z</code> </p>',
        }),
    ).exactOptional(),
    CertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the certificate.</p> <p>Example: <code>arn:aws:rds:us-east-1::cert:rds-ca-2019</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A certificate authority (CA) certificate for an Amazon Web Services account.',
    required: [],
  })
  .openapi('Certificate')

const CertificateListSchema = z
  .array(CertificateSchema.and(z.any().openapi({ xml: { name: 'Certificate' } })))
  .openapi('CertificateList')

const CertificateMessageSchema = z
  .object({
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of certificates for this Amazon Web Services account.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided if the number of records retrieved is greater than <code>MaxRecords</code>. If this parameter is specified, the marker specifies the next record in the list. Including the value of <code>Marker</code> in the next call to <code>DescribeCertificates</code> results in the next page of certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificateMessage')

const FilterValueListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Value' } })))
  .openapi('FilterValueList')

const FilterSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the filter. Filter names are case sensitive.' }),
    ),
    Values: FilterValueListSchema.and(
      z
        .any()
        .openapi({ description: 'One or more filter values. Filter values are case sensitive.' }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      '<p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p>',
  })
  .openapi('Filter')

const CertificateNotFoundFaultSchema = z.any().openapi('CertificateNotFoundFault')

const DBClusterParameterGroupListSchema = z
  .array(
    DBClusterParameterGroupSchema.and(
      z.any().openapi({ xml: { name: 'DBClusterParameterGroup' } }),
    ),
  )
  .openapi('DBClusterParameterGroupList')

const DBClusterParameterGroupsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBClusterParameterGroups: DBClusterParameterGroupListSchema.and(
      z.any().openapi({ description: 'A list of cluster parameter groups.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DBClusterParameterGroups</a>.',
    required: [],
  })
  .openapi('DBClusterParameterGroupsMessage')

const ApplyMethodSchema = z.enum(['immediate', 'pending-reboot']).openapi('ApplyMethod')

const ParameterSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the parameter.' }),
    ).exactOptional(),
    ParameterValue: StringSchema.and(
      z.any().openapi({ description: 'Specifies the value of the parameter.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'Provides a description of the parameter.' }),
    ).exactOptional(),
    Source: StringSchema.and(
      z.any().openapi({ description: 'Indicates the source of the parameter value.' }),
    ).exactOptional(),
    ApplyType: StringSchema.and(
      z.any().openapi({ description: 'Specifies the engine-specific parameters type.' }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z.any().openapi({ description: 'Specifies the valid data type for the parameter.' }),
    ).exactOptional(),
    AllowedValues: StringSchema.and(
      z.any().openapi({ description: 'Specifies the valid range of values for the parameter.' }),
    ).exactOptional(),
    IsModifiable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. ',
        }),
    ).exactOptional(),
    MinimumEngineVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The earliest engine version to which the parameter can apply.' }),
    ).exactOptional(),
    ApplyMethod: ApplyMethodSchema.and(
      z.any().openapi({ description: 'Indicates when to apply parameter updates.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about an individual parameter.', required: [] })
  .openapi('Parameter')

const ParametersListSchema = z
  .array(ParameterSchema.and(z.any().openapi({ xml: { name: 'Parameter' } })))
  .openapi('ParametersList')

const DBClusterParameterGroupDetailsSchema = z
  .object({
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({ description: 'Provides a list of parameters for the cluster parameter group.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DBClusterParameterGroup</a>.',
    required: [],
  })
  .openapi('DBClusterParameterGroupDetails')

const AttributeValueListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AttributeValue' } })))
  .openapi('AttributeValueList')

const DBClusterSnapshotAttributeSchema = z
  .object({
    AttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the manual cluster snapshot attribute.</p> <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual cluster snapshot.</p>',
        }),
    ).exactOptional(),
    AttributeValues: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The values for the manual cluster snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If a value of <code>all</code> is in the list, then the manual cluster snapshot is public and available for any Amazon Web Services account to copy or restore.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p>',
    required: [],
  })
  .openapi('DBClusterSnapshotAttribute')

const DBClusterSnapshotAttributeListSchema = z
  .array(
    DBClusterSnapshotAttributeSchema.and(
      z.any().openapi({ xml: { name: 'DBClusterSnapshotAttribute' } }),
    ),
  )
  .openapi('DBClusterSnapshotAttributeList')

const DBClusterSnapshotAttributesResultSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the cluster snapshot that the attributes apply to.',
        }),
    ).exactOptional(),
    DBClusterSnapshotAttributes: DBClusterSnapshotAttributeListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of attributes and values for the cluster snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Detailed information about the attributes that are associated with a cluster snapshot.',
    required: [],
  })
  .openapi('DBClusterSnapshotAttributesResult')

const DescribeDBClusterSnapshotAttributesResultSchema = z
  .object({
    DBClusterSnapshotAttributesResult: DBClusterSnapshotAttributesResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDBClusterSnapshotAttributesResult')

const DBClusterSnapshotListSchema = z
  .array(DBClusterSnapshotSchema.and(z.any().openapi({ xml: { name: 'DBClusterSnapshot' } })))
  .openapi('DBClusterSnapshotList')

const DBClusterSnapshotMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBClusterSnapshots: DBClusterSnapshotListSchema.and(
      z.any().openapi({ description: 'Provides a list of cluster snapshots.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribeDBClusterSnapshots</a>.',
    required: [],
  })
  .openapi('DBClusterSnapshotMessage')

const DBClusterListSchema = z
  .array(DBClusterSchema.and(z.any().openapi({ xml: { name: 'DBCluster' } })))
  .openapi('DBClusterList')

const DBClusterMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBClusters: DBClusterListSchema.and(
      z.any().openapi({ description: 'A list of clusters.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of <a>DescribeDBClusters</a>.', required: [] })
  .openapi('DBClusterMessage')

const UpgradeTargetSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The name of the upgrade target database engine.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the upgrade target database engine.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the database engine that an instance can be upgraded to.',
        }),
    ).exactOptional(),
    AutoUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to <code>true</code>.',
        }),
    ).exactOptional(),
    IsMajorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether a database engine is upgraded to a major version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The version of the database engine that an instance can be upgraded to.',
    required: [],
  })
  .openapi('UpgradeTarget')

const ValidUpgradeTargetListSchema = z
  .array(UpgradeTargetSchema.and(z.any().openapi({ xml: { name: 'UpgradeTarget' } })))
  .openapi('ValidUpgradeTargetList')

const DBEngineVersionSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The name of the database engine.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the database engine.' }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the parameter group family for the database engine.',
        }),
    ).exactOptional(),
    DBEngineDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the database engine.' }),
    ).exactOptional(),
    DBEngineVersionDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the database engine version.' }),
    ).exactOptional(),
    ValidUpgradeTarget: ValidUpgradeTargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of engine versions that this database engine version can be upgraded to.',
        }),
    ).exactOptional(),
    ExportableLogTypes: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of logs that the database engine has available for export to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    SupportsLogExportsToCloudwatchLogs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether the engine version supports exporting the log types specified by <code>ExportableLogTypes</code> to CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Detailed information about an engine version. ', required: [] })
  .openapi('DBEngineVersion')

const DBEngineVersionListSchema = z
  .array(DBEngineVersionSchema.and(z.any().openapi({ xml: { name: 'DBEngineVersion' } })))
  .openapi('DBEngineVersionList')

const DBEngineVersionMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBEngineVersions: DBEngineVersionListSchema.and(
      z.any().openapi({ description: 'Detailed information about one or more engine versions.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribeDBEngineVersions</a>.',
    required: [],
  })
  .openapi('DBEngineVersionMessage')

const DBInstanceListSchema = z
  .array(DBInstanceSchema.and(z.any().openapi({ xml: { name: 'DBInstance' } })))
  .openapi('DBInstanceList')

const DBInstanceMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBInstances: DBInstanceListSchema.and(
      z.any().openapi({ description: 'Detailed information about one or more instances. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of <a>DescribeDBInstances</a>.', required: [] })
  .openapi('DBInstanceMessage')

const DBSubnetGroupsSchema = z
  .array(DBSubnetGroupSchema.and(z.any().openapi({ xml: { name: 'DBSubnetGroup' } })))
  .openapi('DBSubnetGroups')

const DBSubnetGroupMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBSubnetGroups: DBSubnetGroupsSchema.and(
      z.any().openapi({ description: 'Detailed information about one or more subnet groups.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of <a>DescribeDBSubnetGroups</a>.', required: [] })
  .openapi('DBSubnetGroupMessage')

const EngineDefaultsSchema = z
  .object({
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cluster parameter group family to return the engine parameter information for.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters of a particular cluster parameter group family.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation. ',
    required: [],
  })
  .openapi('EngineDefaults')

const DescribeEngineDefaultClusterParametersResultSchema = z
  .object({ EngineDefaults: EngineDefaultsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeEngineDefaultClusterParametersResult')

const EventCategoriesMapSchema = z
  .object({
    SourceType: StringSchema.and(
      z.any().openapi({ description: 'The source type that the returned categories belong to.' }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z.any().openapi({ description: 'The event categories for the specified source type.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An event source type, accompanied by one or more event category names.',
    required: [],
  })
  .openapi('EventCategoriesMap')

const EventCategoriesMapListSchema = z
  .array(EventCategoriesMapSchema.and(z.any().openapi({ xml: { name: 'EventCategoriesMap' } })))
  .openapi('EventCategoriesMapList')

const EventCategoriesMessageSchema = z
  .object({
    EventCategoriesMapList: EventCategoriesMapListSchema.and(
      z.any().openapi({ description: 'A list of event category maps.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribeEventCategories</a>.',
    required: [],
  })
  .openapi('EventCategoriesMessage')

const EventSubscriptionsListSchema = z
  .array(EventSubscriptionSchema.and(z.any().openapi({ xml: { name: 'EventSubscription' } })))
  .openapi('EventSubscriptionsList')

const EventSubscriptionsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    EventSubscriptionsList: EventSubscriptionsListSchema.and(
      z.any().openapi({ description: 'A list of event subscriptions.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribeEventSubscriptions</a>.',
    required: [],
  })
  .openapi('EventSubscriptionsMessage')

const SourceTypeSchema = z
  .enum([
    'db-instance',
    'db-parameter-group',
    'db-security-group',
    'db-snapshot',
    'db-cluster',
    'db-cluster-snapshot',
  ])
  .openapi('SourceType')

const EventSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z.any().openapi({ description: 'Provides the identifier for the source of the event.' }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z.any().openapi({ description: 'Specifies the source type for this event.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'Provides the text of this event.' }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z.any().openapi({ description: 'Specifies the category for the event.' }),
    ).exactOptional(),
    Date: TStampSchema.and(
      z.any().openapi({ description: 'Specifies the date and time of the event.' }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the event.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about an event.', required: [] })
  .openapi('Event')

const EventListSchema = z
  .array(EventSchema.and(z.any().openapi({ xml: { name: 'Event' } })))
  .openapi('EventList')

const EventsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    Events: EventListSchema.and(
      z.any().openapi({ description: 'Detailed information about one or more events. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of <a>DescribeEvents</a>.', required: [] })
  .openapi('EventsMessage')

const GlobalClusterListSchema = z
  .array(GlobalClusterSchema.and(z.any().openapi({ xml: { name: 'GlobalClusterMember' } })))
  .openapi('GlobalClusterList')

const GlobalClustersMessageSchema = z
  .object({
    Marker: StringSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    GlobalClusters: GlobalClusterListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalClustersMessage')

const AvailabilityZoneListSchema = z
  .array(AvailabilityZoneSchema.and(z.any().openapi({ xml: { name: 'AvailabilityZone' } })))
  .openapi('AvailabilityZoneList')

const OrderableDBInstanceOptionSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The engine type of an instance.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The engine version of an instance.' }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z.any().openapi({ description: 'The instance class for an instance.' }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z.any().openapi({ description: 'The license model for an instance.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z.any().openapi({ description: 'A list of Availability Zones for an instance.' }),
    ).exactOptional(),
    Vpc: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether an instance is in a virtual private cloud (VPC).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The options that are available for an instance.', required: [] })
  .openapi('OrderableDBInstanceOption')

const OrderableDBInstanceOptionsListSchema = z
  .array(
    OrderableDBInstanceOptionSchema.and(
      z.any().openapi({ xml: { name: 'OrderableDBInstanceOption' } }),
    ),
  )
  .openapi('OrderableDBInstanceOptionsList')

const OrderableDBInstanceOptionsMessageSchema = z
  .object({
    OrderableDBInstanceOptions: OrderableDBInstanceOptionsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The options that are available for a particular orderable instance.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.',
    required: [],
  })
  .openapi('OrderableDBInstanceOptionsMessage')

const PendingMaintenanceActionsSchema: z.ZodType<PendingMaintenanceActionsType> = z
  .lazy(() =>
    z.array(
      ResourcePendingMaintenanceActionsSchema.and(
        z.any().openapi({ xml: { name: 'ResourcePendingMaintenanceActions' } }),
      ),
    ),
  )
  .openapi('PendingMaintenanceActions')

const PendingMaintenanceActionsMessageSchema = z
  .object({
    PendingMaintenanceActions: PendingMaintenanceActionsSchema.and(
      z.any().openapi({ description: 'The maintenance actions to be applied.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of <a>DescribePendingMaintenanceActions</a>.',
    required: [],
  })
  .openapi('PendingMaintenanceActionsMessage')

const FailoverDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FailoverDBClusterResult')

const TagListSchema = z
  .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .openapi('TagList')

const TagListMessageSchema = z
  .object({
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'A list of one or more tags.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of <a>ListTagsForResource</a>.', required: [] })
  .openapi('TagListMessage')

const ModifyDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyDBClusterResult')

const InvalidDBSecurityGroupStateFaultSchema = z.any().openapi('InvalidDBSecurityGroupStateFault')

const DBClusterParameterGroupNameMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains the name of a cluster parameter group.', required: [] })
  .openapi('DBClusterParameterGroupNameMessage')

const ModifyDBClusterSnapshotAttributeResultSchema = z
  .object({
    DBClusterSnapshotAttributesResult: DBClusterSnapshotAttributesResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModifyDBClusterSnapshotAttributeResult')

const SharedSnapshotQuotaExceededFaultSchema = z.any().openapi('SharedSnapshotQuotaExceededFault')

const ModifyDBInstanceResultSchema = z
  .object({ DBInstance: DBInstanceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyDBInstanceResult')

const DBUpgradeDependencyFailureFaultSchema = z.any().openapi('DBUpgradeDependencyFailureFault')

const ModifyDBSubnetGroupResultSchema = z
  .object({ DBSubnetGroup: DBSubnetGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyDBSubnetGroupResult')

const SubnetAlreadyInUseSchema = z.any().openapi('SubnetAlreadyInUse')

const ModifyEventSubscriptionResultSchema = z
  .object({ EventSubscription: EventSubscriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyEventSubscriptionResult')

const ModifyGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyGlobalClusterResult')

const RebootDBInstanceResultSchema = z
  .object({ DBInstance: DBInstanceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RebootDBInstanceResult')

const RemoveFromGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RemoveFromGlobalClusterResult')

const RemoveSourceIdentifierFromSubscriptionResultSchema = z
  .object({ EventSubscription: EventSubscriptionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RemoveSourceIdentifierFromSubscriptionResult')

const RestoreDBClusterFromSnapshotResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RestoreDBClusterFromSnapshotResult')

const InsufficientDBClusterCapacityFaultSchema = z
  .any()
  .openapi('InsufficientDBClusterCapacityFault')

const InvalidDBSnapshotStateFaultSchema = z.any().openapi('InvalidDBSnapshotStateFault')

const InvalidRestoreFaultSchema = z.any().openapi('InvalidRestoreFault')

const RestoreDBClusterToPointInTimeResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RestoreDBClusterToPointInTimeResult')

const StartDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StartDBClusterResult')

const StopDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StopDBClusterResult')

const AddSourceIdentifierToSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon DocumentDB event notification subscription that you want to add a source identifier to.',
        }),
    ),
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the event source to be added:</p> <ul> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName', 'SourceIdentifier'],
    title: 'AddSourceIdentifierToSubscriptionMessage',
    description: 'Represents the input to <a>AddSourceIdentifierToSubscription</a>. ',
  })
  .openapi('AddSourceIdentifierToSubscriptionMessage')

const AddTagsToResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name .',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to be assigned to the Amazon DocumentDB resource.' }),
    ),
  })
  .openapi({
    required: ['ResourceName', 'Tags'],
    title: 'AddTagsToResourceMessage',
    description: 'Represents the input to <a>AddTagsToResource</a>. ',
  })
  .openapi('AddTagsToResourceMessage')

const ApplyPendingMaintenanceActionMessageSchema = z
  .object({
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.',
        }),
    ),
    ApplyAction: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>',
        }),
    ),
    OptInType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource. </p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['ResourceIdentifier', 'ApplyAction', 'OptInType'],
    title: 'ApplyPendingMaintenanceActionMessage',
    description: 'Represents the input to <a>ApplyPendingMaintenanceAction</a>. ',
  })
  .openapi('ApplyPendingMaintenanceActionMessage')

const CloudwatchLogsExportConfigurationSchema = z
  .object({
    EnableLogTypes: LogTypeListSchema.and(
      z.any().openapi({ description: 'The list of log types to enable.' }),
    ).exactOptional(),
    DisableLogTypes: LogTypeListSchema.and(
      z.any().openapi({ description: 'The list of log types to disable.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>',
    required: [],
  })
  .openapi('CloudwatchLogsExportConfiguration')

const CopyDBClusterParameterGroupMessageSchema = z
  .object({
    SourceDBClusterParameterGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid cluster parameter group.</p> </li> <li> <p>If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p> </li> </ul>',
        }),
    ),
    TargetDBClusterParameterGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the copied cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>',
        }),
    ),
    TargetDBClusterParameterGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the copied cluster parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags that are to be assigned to the parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'SourceDBClusterParameterGroupIdentifier',
      'TargetDBClusterParameterGroupIdentifier',
      'TargetDBClusterParameterGroupDescription',
    ],
    title: 'CopyDBClusterParameterGroupMessage',
    description: 'Represents the input to <a>CopyDBClusterParameterGroup</a>. ',
  })
  .openapi('CopyDBClusterParameterGroupMessage')

const CopyDBClusterSnapshotMessageSchema = z
  .object({
    SourceDBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the cluster snapshot to copy. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the <i>available</i> state.</p> </li> <li> <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid cluster snapshot ARN.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
        }),
    ),
    TargetDBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>',
        }),
    ),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The KMS key ID for an encrypted cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p> <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p> <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p> <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>",
        }),
    ).exactOptional(),
    PreSignedUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The URL that contains a Signature Version 4 signed request for the<code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter when copying a cluster snapshot from another Amazon Web Services Region.</p> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> <p>The presigned URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values:</p> <ul> <li> <p> <code>SourceRegion</code> - The ID of the region that contains the snapshot to be copied.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks something like the following: <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.</p> </li> </ul>",
        }),
    ).exactOptional(),
    CopyTags: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise <code>false</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the cluster snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceDBClusterSnapshotIdentifier', 'TargetDBClusterSnapshotIdentifier'],
    title: 'CopyDBClusterSnapshotMessage',
    description: 'Represents the input to <a>CopyDBClusterSnapshot</a>. ',
  })
  .openapi('CopyDBClusterSnapshotMessage')

const VpcSecurityGroupIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'VpcSecurityGroupId' } })))
  .openapi('VpcSecurityGroupIdList')

const CreateDBClusterMessageSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster</code> </p>',
        }),
    ),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the cluster parameter group to associate with this cluster.',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of EC2 VPC security groups to associate with this cluster. ',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A subnet group to associate with this cluster.</p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database engine to be used for this cluster.</p> <p>Valid values: <code>docdb</code> </p>',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The port number on which the instances in the cluster accept connections.',
        }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the master user for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine. </p> </li> </ul>',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>',
        }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window. </p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the cluster.' }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Specifies whether the cluster is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>: </p> <ul> <li> <p>If the <code>StorageEncrypted</code> parameter is <code>true</code>, Amazon DocumentDB uses your default encryption key. </p> </li> </ul> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.</p>',
        }),
    ).exactOptional(),
    PreSignedUrl: StringSchema.and(
      z.any().openapi({ description: 'Not currently supported. ' }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html"> Auditing Amazon DocumentDB Events</a> and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html"> Profiling Amazon DocumentDB Operations</a>. ',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
        }),
    ).exactOptional(),
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z.any().openapi({ description: 'The cluster identifier of the new global cluster.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'Engine'],
    title: 'CreateDBClusterMessage',
    description: 'Represents the input to <a>CreateDBCluster</a>. ',
  })
  .openapi('CreateDBClusterMessage')

const CreateDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must not match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
        }),
    ),
    DBParameterGroupFamily: StringSchema.and(
      z.any().openapi({ description: 'The cluster parameter group family name.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description for the cluster parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the cluster parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName', 'DBParameterGroupFamily', 'Description'],
    title: 'CreateDBClusterParameterGroupMessage',
    description: 'Represents the input of <a>CreateDBClusterParameterGroup</a>.',
  })
  .openapi('CreateDBClusterParameterGroupMessage')

const CreateDBClusterSnapshotMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
        }),
    ),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the cluster to create a snapshot for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul> <p>Example: <code>my-cluster</code> </p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the cluster snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier', 'DBClusterIdentifier'],
    title: 'CreateDBClusterSnapshotMessage',
    description: 'Represents the input of <a>CreateDBClusterSnapshot</a>.',
  })
  .openapi('CreateDBClusterSnapshotMessage')

const CreateDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
        }),
    ),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute and memory capacity of the instance; for example, <code>db.r5.large</code>. ',
        }),
    ),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database engine to be used for this instance.</p> <p>Valid value: <code>docdb</code> </p>',
        }),
    ),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon EC2 Availability Zone that the instance is created in. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p> <p>Example: <code>us-east-1d</code> </p>",
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to be assigned to the instance. You can assign up to 10 tags to an instance.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the cluster that the instance will belong to.',
        }),
    ),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>',
        }),
    ).exactOptional(),
    EnablePerformanceInsights: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.',
        }),
    ).exactOptional(),
    PerformanceInsightsKMSKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine', 'DBClusterIdentifier'],
    title: 'CreateDBInstanceMessage',
    description: 'Represents the input to <a>CreateDBInstance</a>.',
  })
  .openapi('CreateDBInstanceMessage')

const SubnetIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'SubnetIdentifier' } })))
  .openapi('SubnetIdentifierList')

const CreateDBSubnetGroupMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description for the subnet group.' }),
    ),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 subnet IDs for the subnet group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the subnet group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBSubnetGroupName', 'DBSubnetGroupDescription', 'SubnetIds'],
    title: 'CreateDBSubnetGroupMessage',
    description: 'Represents the input to <a>CreateDBSubnetGroup</a>.',
  })
  .openapi('CreateDBSubnetGroupMessage')

const CreateEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the subscription.</p> <p>Constraints: The name must be fewer than 255 characters.</p>',
        }),
    ),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.',
        }),
    ),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>, <code>db-parameter-group</code>, <code>db-security-group</code>, <code>db-cluster-snapshot</code> </p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of event categories for a <code>SourceType</code> that you want to subscribe to. ',
        }),
    ).exactOptional(),
    SourceIds: SourceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIds</code> are provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the event subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionName', 'SnsTopicArn'],
    title: 'CreateEventSubscriptionMessage',
    description: 'Represents the input to <a>CreateEventSubscription</a>.',
  })
  .openapi('CreateEventSubscriptionMessage')

const CreateGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z.any().openapi({ description: 'The cluster identifier of the new global cluster.' }),
    ),
    SourceDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the database engine to be used for this cluster.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The engine version of the global cluster.' }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. ",
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'The storage encryption setting for the new global cluster. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GlobalClusterIdentifier'],
    title: 'CreateGlobalClusterMessage',
    description: 'Represents the input to <a>CreateGlobalCluster</a>.',
  })
  .openapi('CreateGlobalClusterMessage')

const DeleteDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>",
        }),
    ),
    SkipFinalSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p> <note> <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p> </note> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    FinalDBSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The cluster snapshot identifier of the new cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to <code>true</code> results in an error. </p> </note> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier'],
    title: 'DeleteDBClusterMessage',
    description: 'Represents the input to <a>DeleteDBCluster</a>.',
  })
  .openapi('DeleteDBClusterMessage')

const DeleteDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>You can't delete a default cluster parameter group.</p> </li> <li> <p>Cannot be associated with any clusters.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'DeleteDBClusterParameterGroupMessage',
    description: 'Represents the input to <a>DeleteDBClusterParameterGroup</a>.',
  })
  .openapi('DeleteDBClusterParameterGroupMessage')

const DeleteDBClusterSnapshotMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>',
        }),
    ),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier'],
    title: 'DeleteDBClusterSnapshotMessage',
    description: 'Represents the input to <a>DeleteDBClusterSnapshot</a>.',
  })
  .openapi('DeleteDBClusterSnapshotMessage')

const DeleteDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The instance identifier for the instance to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing instance.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['DBInstanceIdentifier'],
    title: 'DeleteDBInstanceMessage',
    description: 'Represents the input to <a>DeleteDBInstance</a>.',
  })
  .openapi('DeleteDBInstanceMessage')

const DeleteDBSubnetGroupMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
        }),
    ),
  })
  .openapi({
    required: ['DBSubnetGroupName'],
    title: 'DeleteDBSubnetGroupMessage',
    description: 'Represents the input to <a>DeleteDBSubnetGroup</a>.',
  })
  .openapi('DeleteDBSubnetGroupMessage')

const DeleteEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon DocumentDB event notification subscription that you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName'],
    title: 'DeleteEventSubscriptionMessage',
    description: 'Represents the input to <a>DeleteEventSubscription</a>.',
  })
  .openapi('DeleteEventSubscriptionMessage')

const DeleteGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The cluster identifier of the global cluster being deleted.' }),
    ),
  })
  .openapi({
    required: ['GlobalClusterIdentifier'],
    title: 'DeleteGlobalClusterMessage',
    description: 'Represents the input to <a>DeleteGlobalCluster</a>.',
  })
  .openapi('DeleteGlobalClusterMessage')

const FilterListSchema = z
  .array(FilterSchema.and(z.any().openapi({ xml: { name: 'Filter' } })))
  .openapi('FilterList')

const DescribeCertificatesMessageSchema = z
  .object({
    CertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p> <p>Constraints</p> <ul> <li> <p>Must match an existing <code>CertificateIdentifier</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints:</p> <ul> <li> <p>Minimum: 20</p> </li> <li> <p>Maximum: 100</p> </li> </ul>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCertificatesMessage', required: [] })
  .openapi('DescribeCertificatesMessage')

const DescribeDBClusterParameterGroupsMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBClusterParameterGroupsMessage',
    description: 'Represents the input to <a>DescribeDBClusterParameterGroups</a>.',
    required: [],
  })
  .openapi('DescribeDBClusterParameterGroupsMessage')

const DescribeDBClusterParametersMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>',
        }),
    ),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. ',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'DescribeDBClusterParametersMessage',
    description: 'Represents the input to <a>DescribeDBClusterParameters</a>.',
  })
  .openapi('DescribeDBClusterParametersMessage')

const DescribeDBClusterSnapshotAttributesMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the cluster snapshot to describe the attributes for.',
        }),
    ),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier'],
    title: 'DescribeDBClusterSnapshotAttributesMessage',
    description: 'Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.',
  })
  .openapi('DescribeDBClusterSnapshotAttributesMessage')

const DescribeDBClusterSnapshotsMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A specific cluster snapshot identifier to describe. This parameter can't be used with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBClusterSnapshot</code>.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>",
        }),
    ).exactOptional(),
    SnapshotType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p> </li> <li> <p> <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p> </li> <li> <p> <code>shared</code> - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.</p> </li> <li> <p> <code>public</code> - Return all cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public cluster snapshots with these results by setting the<code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    IncludeShared: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    IncludePublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBClusterSnapshotsMessage',
    description: 'Represents the input to <a>DescribeDBClusterSnapshots</a>.',
    required: [],
  })
  .openapi('DescribeDBClusterSnapshotsMessage')

const DescribeDBClustersMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBClustersMessage',
    description: 'Represents the input to <a>DescribeDBClusters</a>.',
    required: [],
  })
  .openapi('DescribeDBClustersMessage')

const DescribeDBEngineVersionsMessageSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The database engine to return.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The database engine version to return.</p> <p>Example: <code>3.6.0</code> </p>',
        }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBParameterGroupFamily</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DefaultOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that only the default version of the specified engine or engine and major version combination is returned.',
        }),
    ).exactOptional(),
    ListSupportedCharacterSets: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. ',
        }),
    ).exactOptional(),
    ListSupportedTimezones: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBEngineVersionsMessage',
    description: 'Represents the input to <a>DescribeDBEngineVersions</a>.',
    required: [],
  })
  .openapi('DescribeDBEngineVersionsMessage')

const DescribeDBInstancesMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBInstancesMessage',
    description: 'Represents the input to <a>DescribeDBInstances</a>.',
    required: [],
  })
  .openapi('DescribeDBInstancesMessage')

const DescribeDBSubnetGroupsMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the subnet group to return details for.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDBSubnetGroupsMessage',
    description: 'Represents the input to <a>DescribeDBSubnetGroups</a>.',
    required: [],
  })
  .openapi('DescribeDBSubnetGroupsMessage')

const DescribeEngineDefaultClusterParametersMessageSchema = z
  .object({
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cluster parameter group family to return the engine parameter information for.',
        }),
    ),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBParameterGroupFamily'],
    title: 'DescribeEngineDefaultClusterParametersMessage',
    description: 'Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.',
  })
  .openapi('DescribeEngineDefaultClusterParametersMessage')

const DescribeEventCategoriesMessageSchema = z
  .object({
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of source that is generating the events.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventCategoriesMessage',
    description: 'Represents the input to <a>DescribeEventCategories</a>.',
    required: [],
  })
  .openapi('DescribeEventCategoriesMessage')

const DescribeEventSubscriptionsMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon DocumentDB event notification subscription that you want to describe.',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventSubscriptionsMessage',
    description: 'Represents the input to <a>DescribeEventSubscriptions</a>.',
    required: [],
  })
  .openapi('DescribeEventSubscriptionsMessage')

const DescribeEventsMessageSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event source to retrieve events for. If no value is specified, all events are returned.',
        }),
    ).exactOptional(),
    StartTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>',
        }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>',
        }),
    ).exactOptional(),
    Duration: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: '<p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event categories that trigger notifications for an event notification subscription.',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventsMessage',
    description: 'Represents the input to <a>DescribeEvents</a>.',
    required: [],
  })
  .openapi('DescribeEventsMessage')

const DescribeGlobalClustersMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more global DB clusters to describe.</p> <p>Supported filters: <code>db-cluster-id</code> accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGlobalClustersMessage', required: [] })
  .openapi('DescribeGlobalClustersMessage')

const DescribeOrderableDBInstanceOptionsMessageSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The name of the engine to retrieve instance options for.' }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.',
        }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.',
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.',
        }),
    ).exactOptional(),
    Vpc: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Engine'],
    title: 'DescribeOrderableDBInstanceOptionsMessage',
    description: 'Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.',
  })
  .openapi('DescribeOrderableDBInstanceOptionsMessage')

const DescribePendingMaintenanceActionsMessageSchema = z
  .object({
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of a resource to return pending maintenance actions for.',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribePendingMaintenanceActionsMessage',
    description: 'Represents the input to <a>DescribePendingMaintenanceActions</a>.',
    required: [],
  })
  .openapi('DescribePendingMaintenanceActionsMessage')

const FailoverDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TargetDBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For example, <code>mydbcluster-replica1</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'FailoverDBClusterMessage',
    description: 'Represents the input to <a>FailoverDBCluster</a>.',
    required: [],
  })
  .openapi('FailoverDBClusterMessage')

const KeyListSchema = z.array(StringSchema).openapi('KeyList')

const ListTagsForResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'ListTagsForResourceMessage',
    description: 'Represents the input to <a>ListTagsForResource</a>.',
  })
  .openapi('ListTagsForResourceMessage')

const ModifyDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cluster identifier for the cluster that is being modified. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
        }),
    ),
    NewDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster. If this parameter is set to <code>false</code>, changes to the cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter affects only the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set this parameter value to <code>false</code>, the changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the cluster parameter group to use for the cluster.',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of virtual private cloud (VPC) security groups that the cluster will belong to.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The same port as the original cluster.</p>',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>',
        }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    CloudwatchLogsExportConfiguration: CloudwatchLogsExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the database engine to which you want to upgrade. Modifying engine version is not supported on Amazon DocumentDB.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier'],
    title: 'ModifyDBClusterMessage',
    description: 'Represents the input to <a>ModifyDBCluster</a>.',
  })
  .openapi('ModifyDBClusterMessage')

const ModifyDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster parameter group to modify.' }),
    ),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of parameters in the cluster parameter group to modify.' }),
    ),
  })
  .openapi({
    required: ['DBClusterParameterGroupName', 'Parameters'],
    title: 'ModifyDBClusterParameterGroupMessage',
    description: 'Represents the input to <a>ModifyDBClusterParameterGroup</a>.',
  })
  .openapi('ModifyDBClusterParameterGroupMessage')

const ModifyDBClusterSnapshotAttributeMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the cluster snapshot to modify the attributes for.',
        }),
    ),
    AttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this value to <code>restore</code>.</p>',
        }),
    ),
    ValuesToAdd: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>",
        }),
    ).exactOptional(),
    ValuesToRemove: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier', 'AttributeName'],
    title: 'ModifyDBClusterSnapshotAttributeMessage',
    description: 'Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.',
  })
  .openapi('ModifyDBClusterSnapshotAttributeMessage')

const ModifyDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>',
        }),
    ),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p> <p>If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting.</p>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the instance. </p> <p> If this parameter is set to <code>false</code>, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Must be at least 30 minutes.</p>",
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.',
        }),
    ).exactOptional(),
    NewDBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set <code>Apply Immediately</code> to <code>true</code>. It occurs during the next maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
        }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the certificate that needs to be associated with the instance.',
        }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>',
        }),
    ).exactOptional(),
    EnablePerformanceInsights: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.',
        }),
    ).exactOptional(),
    PerformanceInsightsKMSKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBInstanceIdentifier'],
    title: 'ModifyDBInstanceMessage',
    description: 'Represents the input to <a>ModifyDBInstance</a>.',
  })
  .openapi('ModifyDBInstanceMessage')

const ModifyDBSubnetGroupMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
        }),
    ),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description for the subnet group.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 subnet IDs for the subnet group.' }),
    ),
  })
  .openapi({
    required: ['DBSubnetGroupName', 'SubnetIds'],
    title: 'ModifyDBSubnetGroupMessage',
    description: 'Represents the input to <a>ModifyDBSubnetGroup</a>.',
  })
  .openapi('ModifyDBSubnetGroupMessage')

const ModifyEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon DocumentDB event notification subscription.',
        }),
    ),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.',
        }),
    ).exactOptional(),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of event categories for a <code>SourceType</code> that you want to subscribe to.',
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: ' A Boolean value; set to <code>true</code> to activate the subscription. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionName'],
    title: 'ModifyEventSubscriptionMessage',
    description: 'Represents the input to <a>ModifyEventSubscription</a>.',
  })
  .openapi('ModifyEventSubscriptionMessage')

const ModifyGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing global cluster.</p> </li> </ul>",
        }),
    ),
    NewGlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> <p>The first character must be a letter</p> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>",
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GlobalClusterIdentifier'],
    title: 'ModifyGlobalClusterMessage',
    description: 'Represents the input to <a>ModifyGlobalCluster</a>.',
  })
  .openapi('ModifyGlobalClusterMessage')

const RebootDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>',
        }),
    ),
    ForceFailover: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for Multi-AZ.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBInstanceIdentifier'],
    title: 'RebootDBInstanceMessage',
    description: 'Represents the input to <a>RebootDBInstance</a>.',
  })
  .openapi('RebootDBInstanceMessage')

const RemoveFromGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster identifier to detach from the Amazon DocumentDB global cluster. ',
        }),
    ),
    DbClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. ',
        }),
    ),
  })
  .openapi({
    required: ['GlobalClusterIdentifier', 'DbClusterIdentifier'],
    title: 'RemoveFromGlobalClusterMessage',
    description: 'Represents the input to <a>RemoveFromGlobalCluster</a>.',
  })
  .openapi('RemoveFromGlobalClusterMessage')

const RemoveSourceIdentifierFromSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.',
        }),
    ),
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group. ',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName', 'SourceIdentifier'],
    title: 'RemoveSourceIdentifierFromSubscriptionMessage',
    description: 'Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>.',
  })
  .openapi('RemoveSourceIdentifierFromSubscriptionMessage')

const RemoveTagsFromResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    TagKeys: KeyListSchema.and(
      z.any().openapi({ description: 'The tag key (name) of the tag to be removed.' }),
    ),
  })
  .openapi({
    required: ['ResourceName', 'TagKeys'],
    title: 'RemoveTagsFromResourceMessage',
    description: 'Represents the input to <a>RemoveTagsFromResource</a>.',
  })
  .openapi('RemoveTagsFromResourceMessage')

const ResetDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster parameter group to reset.' }),
    ),
    ResetAllParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that is set to <code>true</code> to reset all parameters in the cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.",
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of parameter names in the cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'ResetDBClusterParameterGroupMessage',
    description: 'Represents the input to <a>ResetDBClusterParameterGroup</a>.',
  })
  .openapi('ResetDBClusterParameterGroupMessage')

const RestoreDBClusterFromSnapshotMessageSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the cluster to create from the snapshot or cluster snapshot. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>",
        }),
    ),
    SnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the snapshot or cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing snapshot.</p> </li> </ul>',
        }),
    ),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The database engine to use for the new cluster.</p> <p>Default: The same as source.</p> <p>Constraint: Must be compatible with the engine of the source.</p>',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the database engine to use for the new cluster.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p> <p>Default: The same port as the original cluster.</p>',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the subnet group to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of virtual private cloud (VPC) security groups that the new cluster will belong to.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the restored cluster.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.</p> </li> <li> <p>If the snapshot or the cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster parameter group to associate with this DB cluster.</p> <p> <i>Type:</i> String.       <i>Required:</i> No.</p> <p>If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'SnapshotIdentifier', 'Engine'],
    title: 'RestoreDBClusterFromSnapshotMessage',
    description: 'Represents the input to <a>RestoreDBClusterFromSnapshot</a>.',
  })
  .openapi('RestoreDBClusterFromSnapshotMessage')

const RestoreDBClusterToPointInTimeMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the new cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ),
    RestoreType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>",
        }),
    ).exactOptional(),
    SourceDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the source cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
        }),
    ),
    RestoreToTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time to restore the cluster to.</p> <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the instance.</p> </li> <li> <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not provided.</p> </li> <li> <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is <code>true</code>.</p> </li> <li> <p>Cannot be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>.</p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>',
        }),
    ).exactOptional(),
    UseLatestRestorableTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that is set to <code>true</code> to restore the cluster to the latest restorable backup time, and <code>false</code> otherwise. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is provided.</p>',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The default port for the engine.</p>',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The subnet group name to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of VPC security groups that the new cluster belongs to.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the restored cluster.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.</p> </li> <li> <p>If the cluster is not encrypted, then the restored cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then the restore request is rejected.</p>',
        }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'SourceDBClusterIdentifier'],
    title: 'RestoreDBClusterToPointInTimeMessage',
    description: 'Represents the input to <a>RestoreDBClusterToPointInTime</a>.',
  })
  .openapi('RestoreDBClusterToPointInTimeMessage')

const StartDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the cluster to restart. Example: <code>docdb-2019-05-28-15-24-52</code> ',
        }),
    ),
  })
  .openapi({ required: ['DBClusterIdentifier'], title: 'StartDBClusterMessage' })
  .openapi('StartDBClusterMessage')

const StopDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the cluster to stop. Example: <code>docdb-2019-05-28-15-24-52</code> ',
        }),
    ),
  })
  .openapi({ required: ['DBClusterIdentifier'], title: 'StopDBClusterMessage' })
  .openapi('StopDBClusterMessage')

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

export const getActionAddSourceIdentifierToSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=AddSourceIdentifierToSubscription',
  description: 'Adds a source identifier to an existing event notification subscription.',
  operationId: 'GET_AddSourceIdentifierToSubscription',
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
      SubscriptionName: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: true,
            description:
              'The name of the Amazon DocumentDB event notification subscription that you want to add a source identifier to.',
            schema: { type: 'string' },
          },
        }),
      SourceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the event source to be added:</p> <ul> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('AddSourceIdentifierToSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddSourceIdentifierToSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddSourceIdentifierToSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const postActionAddSourceIdentifierToSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=AddSourceIdentifierToSubscription',
  description: 'Adds a source identifier to an existing event notification subscription.',
  operationId: 'POST_AddSourceIdentifierToSubscription',
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
      Action: z
        .literal('AddSourceIdentifierToSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddSourceIdentifierToSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddSourceIdentifierToSubscriptionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddSourceIdentifierToSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const getActionAddTagsToResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=AddTagsToResource',
  description:
    'Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.',
  operationId: 'GET_AddTagsToResource',
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
      ResourceName: z
        .string()
        .openapi({
          param: {
            name: 'ResourceName',
            in: 'query',
            required: true,
            description:
              'The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name .',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: true,
            description: 'The tags to be assigned to the Amazon DocumentDB resource.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('AddTagsToResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTagsToResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionAddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=AddTagsToResource',
  description:
    'Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.',
  operationId: 'POST_AddTagsToResource',
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
      Action: z
        .literal('AddTagsToResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTagsToResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddTagsToResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionApplyPendingMaintenanceActionRoute = createRoute({
  method: 'get',
  path: '/#Action=ApplyPendingMaintenanceAction',
  description:
    'Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).',
  operationId: 'GET_ApplyPendingMaintenanceAction',
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
      ResourceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.',
            schema: { type: 'string' },
          },
        }),
      ApplyAction: z
        .string()
        .openapi({
          param: {
            name: 'ApplyAction',
            in: 'query',
            required: true,
            description:
              '<p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>',
            schema: { type: 'string' },
          },
        }),
      OptInType: z
        .string()
        .openapi({
          param: {
            name: 'OptInType',
            in: 'query',
            required: true,
            description:
              "<p>A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource. </p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ApplyPendingMaintenanceAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplyPendingMaintenanceAction'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplyPendingMaintenanceActionResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'text/xml': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionApplyPendingMaintenanceActionRoute = createRoute({
  method: 'post',
  path: '/#Action=ApplyPendingMaintenanceAction',
  description:
    'Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).',
  operationId: 'POST_ApplyPendingMaintenanceAction',
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
      Action: z
        .literal('ApplyPendingMaintenanceAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplyPendingMaintenanceAction'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ApplyPendingMaintenanceActionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplyPendingMaintenanceActionResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'text/xml': { schema: ResourceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionCopyDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CopyDBClusterParameterGroup',
  description: 'Copies the specified cluster parameter group.',
  operationId: 'GET_CopyDBClusterParameterGroup',
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
      SourceDBClusterParameterGroupIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceDBClusterParameterGroupIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid cluster parameter group.</p> </li> <li> <p>If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      TargetDBClusterParameterGroupIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'TargetDBClusterParameterGroupIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier for the copied cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>',
            schema: { type: 'string' },
          },
        }),
      TargetDBClusterParameterGroupDescription: z
        .string()
        .openapi({
          param: {
            name: 'TargetDBClusterParameterGroupDescription',
            in: 'query',
            required: true,
            description: 'A description for the copied cluster parameter group.',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags that are to be assigned to the parameter group.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CopyDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CopyDBClusterParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
  },
})

export const postActionCopyDBClusterParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CopyDBClusterParameterGroup',
  description: 'Copies the specified cluster parameter group.',
  operationId: 'POST_CopyDBClusterParameterGroup',
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
      Action: z
        .literal('CopyDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CopyDBClusterParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CopyDBClusterParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
  },
})

export const getActionCopyDBClusterSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=CopyDBClusterSnapshot',
  description:
    '<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>',
  operationId: 'GET_CopyDBClusterSnapshot',
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
      SourceDBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceDBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the cluster snapshot to copy. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the <i>available</i> state.</p> </li> <li> <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.</p> </li> <li> <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid cluster snapshot ARN.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
            schema: { type: 'string' },
          },
        }),
      TargetDBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'TargetDBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>',
            schema: { type: 'string' },
          },
        }),
      KmsKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'KmsKeyId',
            in: 'query',
            required: false,
            description:
              "<p>The KMS key ID for an encrypted cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p> <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p> <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p> <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>",
            schema: { type: 'string' },
          },
        }),
      PreSignedUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreSignedUrl',
            in: 'query',
            required: false,
            description:
              "<p>The URL that contains a Signature Version 4 signed request for the<code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter when copying a cluster snapshot from another Amazon Web Services Region.</p> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> <p>The presigned URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values:</p> <ul> <li> <p> <code>SourceRegion</code> - The ID of the region that contains the snapshot to be copied.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks something like the following: <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      CopyTags: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'CopyTags',
            in: 'query',
            required: false,
            description:
              'Set to <code>true</code> to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise <code>false</code>. The default is <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the cluster snapshot.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CopyDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CopyDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const postActionCopyDBClusterSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=CopyDBClusterSnapshot',
  description:
    '<p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Amazon Web Services Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>',
  operationId: 'POST_CopyDBClusterSnapshot',
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
      Action: z
        .literal('CopyDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CopyDBClusterSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CopyDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const getActionCreateDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBCluster',
  description: 'Creates a new Amazon DocumentDB cluster.',
  operationId: 'GET_CreateDBCluster',
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
      AvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AvailabilityZone' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZones',
            in: 'query',
            required: false,
            description:
              'A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'AvailabilityZone' } },
                ],
              },
            },
          },
        }),
      BackupRetentionPeriod: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'BackupRetentionPeriod',
            in: 'query',
            required: false,
            description:
              '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>',
            schema: { type: 'integer' },
          },
        }),
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens. </p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster</code> </p>',
            schema: { type: 'string' },
          },
        }),
      DBClusterParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: false,
            description: 'The name of the cluster parameter group to associate with this cluster.',
            schema: { type: 'string' },
          },
        }),
      VpcSecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'VpcSecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VpcSecurityGroupIds',
            in: 'query',
            required: false,
            description: 'A list of EC2 VPC security groups to associate with this cluster. ',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'VpcSecurityGroupId' } },
                ],
              },
            },
          },
        }),
      DBSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: false,
            description:
              '<p>A subnet group to associate with this cluster.</p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      Engine: z
        .string()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: true,
            description:
              '<p>The name of the database engine to be used for this cluster.</p> <p>Valid values: <code>docdb</code> </p>',
            schema: { type: 'string' },
          },
        }),
      EngineVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EngineVersion',
            in: 'query',
            required: false,
            description:
              'The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.',
            schema: { type: 'string' },
          },
        }),
      Port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Port',
            in: 'query',
            required: false,
            description:
              'The port number on which the instances in the cluster accept connections.',
            schema: { type: 'integer' },
          },
        }),
      MasterUsername: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MasterUsername',
            in: 'query',
            required: false,
            description:
              '<p>The name of the master user for the cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine. </p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      MasterUserPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MasterUserPassword',
            in: 'query',
            required: false,
            description:
              '<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>',
            schema: { type: 'string' },
          },
        }),
      PreferredBackupWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredBackupWindow',
            in: 'query',
            required: false,
            description:
              '<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window. </p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      PreferredMaintenanceWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredMaintenanceWindow',
            in: 'query',
            required: false,
            description:
              '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the cluster.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      StorageEncrypted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'StorageEncrypted',
            in: 'query',
            required: false,
            description: 'Specifies whether the cluster is encrypted.',
            schema: { type: 'boolean' },
          },
        }),
      KmsKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'KmsKeyId',
            in: 'query',
            required: false,
            description:
              '<p>The KMS key identifier for an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>: </p> <ul> <li> <p>If the <code>StorageEncrypted</code> parameter is <code>true</code>, Amazon DocumentDB uses your default encryption key. </p> </li> </ul> <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.</p>',
            schema: { type: 'string' },
          },
        }),
      PreSignedUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreSignedUrl',
            in: 'query',
            required: false,
            description: 'Not currently supported. ',
            schema: { type: 'string' },
          },
        }),
      EnableCloudwatchLogsExports: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EnableCloudwatchLogsExports',
            in: 'query',
            required: false,
            description:
              'A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html"> Auditing Amazon DocumentDB Events</a> and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html"> Profiling Amazon DocumentDB Operations</a>. ',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      DeletionProtection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeletionProtection',
            in: 'query',
            required: false,
            description:
              'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
            schema: { type: 'boolean' },
          },
        }),
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: false,
            description: 'The cluster identifier of the new global cluster.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      Action: z
        .literal('CreateDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    482: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    483: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    484: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    486: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    487: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    488: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    489: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    490: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    492: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    493: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    494: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    495: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    496: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const postActionCreateDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBCluster',
  description: 'Creates a new Amazon DocumentDB cluster.',
  operationId: 'POST_CreateDBCluster',
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
      Action: z
        .literal('CreateDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    482: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    483: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    484: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    486: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    487: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    488: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    489: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    490: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    492: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    493: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    494: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    495: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    496: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const getActionCreateDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBClusterParameterGroup',
  description:
    '<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>',
  operationId: 'GET_CreateDBClusterParameterGroup',
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
      DBClusterParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must not match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      DBParameterGroupFamily: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupFamily',
            in: 'query',
            required: true,
            description: 'The cluster parameter group family name.',
            schema: { type: 'string' },
          },
        }),
      Description: z
        .string()
        .openapi({
          param: {
            name: 'Description',
            in: 'query',
            required: true,
            description: 'The description for the cluster parameter group.',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the cluster parameter group.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
  },
})

export const postActionCreateDBClusterParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBClusterParameterGroup',
  description:
    '<p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>',
  operationId: 'POST_CreateDBClusterParameterGroup',
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
      Action: z
        .literal('CreateDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDBClusterParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
  },
})

export const getActionCreateDBClusterSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBClusterSnapshot',
  description: 'Creates a snapshot of a cluster. ',
  operationId: 'GET_CreateDBClusterSnapshot',
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
      DBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens. </p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
            schema: { type: 'string' },
          },
        }),
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the cluster to create a snapshot for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul> <p>Example: <code>my-cluster</code> </p>',
            schema: { type: 'string' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the cluster snapshot.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
  },
})

export const postActionCreateDBClusterSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBClusterSnapshot',
  description: 'Creates a snapshot of a cluster. ',
  operationId: 'POST_CreateDBClusterSnapshot',
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
      Action: z
        .literal('CreateDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDBClusterSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
  },
})

export const getActionCreateDBInstanceRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBInstance',
  description: 'Creates a new instance.',
  operationId: 'GET_CreateDBInstance',
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
      DBInstanceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
            schema: { type: 'string' },
          },
        }),
      DBInstanceClass: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceClass',
            in: 'query',
            required: true,
            description:
              'The compute and memory capacity of the instance; for example, <code>db.r5.large</code>. ',
            schema: { type: 'string' },
          },
        }),
      Engine: z
        .string()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: true,
            description:
              '<p>The name of the database engine to be used for this instance.</p> <p>Valid value: <code>docdb</code> </p>',
            schema: { type: 'string' },
          },
        }),
      AvailabilityZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZone',
            in: 'query',
            required: false,
            description:
              "<p>The Amazon EC2 Availability Zone that the instance is created in. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p> <p>Example: <code>us-east-1d</code> </p>",
            schema: { type: 'string' },
          },
        }),
      PreferredMaintenanceWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredMaintenanceWindow',
            in: 'query',
            required: false,
            description:
              '<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
            schema: { type: 'string' },
          },
        }),
      AutoMinorVersionUpgrade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AutoMinorVersionUpgrade',
            in: 'query',
            required: false,
            description:
              '<p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p> <p>Default: <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description:
              'The tags to be assigned to the instance. You can assign up to 10 tags to an instance.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description: 'The identifier of the cluster that the instance will belong to.',
            schema: { type: 'string' },
          },
        }),
      CopyTagsToSnapshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'CopyTagsToSnapshot',
            in: 'query',
            required: false,
            description:
              'A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.',
            schema: { type: 'boolean' },
          },
        }),
      PromotionTier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PromotionTier',
            in: 'query',
            required: false,
            description:
              '<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>',
            schema: { type: 'integer' },
          },
        }),
      EnablePerformanceInsights: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnablePerformanceInsights',
            in: 'query',
            required: false,
            description:
              'A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.',
            schema: { type: 'boolean' },
          },
        }),
      PerformanceInsightsKMSKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PerformanceInsightsKMSKeyId',
            in: 'query',
            required: false,
            description:
              '<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CreateDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBInstanceResultSchema } },
    },
    480: {
      description: 'DBInstanceAlreadyExistsFault',
      content: { 'text/xml': { schema: DBInstanceAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InsufficientDBInstanceCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBInstanceCapacityFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'DBSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSecurityGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InstanceQuotaExceededFault',
      content: { 'text/xml': { schema: InstanceQuotaExceededFaultSchema } },
    },
    485: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    486: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    488: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    489: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    490: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    491: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    492: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    493: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    494: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const postActionCreateDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBInstance',
  description: 'Creates a new instance.',
  operationId: 'POST_CreateDBInstance',
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
      Action: z
        .literal('CreateDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDBInstanceMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBInstanceResultSchema } },
    },
    480: {
      description: 'DBInstanceAlreadyExistsFault',
      content: { 'text/xml': { schema: DBInstanceAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InsufficientDBInstanceCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBInstanceCapacityFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'DBSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSecurityGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InstanceQuotaExceededFault',
      content: { 'text/xml': { schema: InstanceQuotaExceededFaultSchema } },
    },
    485: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    486: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    488: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    489: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    490: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    491: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    492: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    493: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    494: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const getActionCreateDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBSubnetGroup',
  description:
    'Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.',
  operationId: 'GET_CreateDBSubnetGroup',
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
      DBSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name for the subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      DBSubnetGroupDescription: z
        .string()
        .openapi({
          param: {
            name: 'DBSubnetGroupDescription',
            in: 'query',
            required: true,
            description: 'The description for the subnet group.',
            schema: { type: 'string' },
          },
        }),
      SubnetIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SubnetIdentifier' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'SubnetIds',
            in: 'query',
            required: true,
            description: 'The Amazon EC2 subnet IDs for the subnet group.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SubnetIdentifier' } },
                ],
              },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the subnet group.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBSubnetGroupResultSchema } },
    },
    480: {
      description: 'DBSubnetGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBSubnetGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBSubnetGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DBSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
  },
})

export const postActionCreateDBSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBSubnetGroup',
  description:
    'Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.',
  operationId: 'POST_CreateDBSubnetGroup',
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
      Action: z
        .literal('CreateDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateDBSubnetGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBSubnetGroupResultSchema } },
    },
    480: {
      description: 'DBSubnetGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBSubnetGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBSubnetGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DBSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
  },
})

export const getActionCreateEventSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateEventSubscription',
  description:
    '<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>',
  operationId: 'GET_CreateEventSubscription',
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
      SubscriptionName: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the subscription.</p> <p>Constraints: The name must be fewer than 255 characters.</p>',
            schema: { type: 'string' },
          },
        }),
      SnsTopicArn: z
        .string()
        .openapi({
          param: {
            name: 'SnsTopicArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.',
            schema: { type: 'string' },
          },
        }),
      SourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceType',
            in: 'query',
            required: false,
            description:
              '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>, <code>db-parameter-group</code>, <code>db-security-group</code>, <code>db-cluster-snapshot</code> </p>',
            schema: { type: 'string' },
          },
        }),
      EventCategories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'EventCategory' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EventCategories',
            in: 'query',
            required: false,
            description:
              ' A list of event categories for a <code>SourceType</code> that you want to subscribe to. ',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'EventCategory' } },
                ],
              },
            },
          },
        }),
      SourceIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SourceId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceIds',
            in: 'query',
            required: false,
            description:
              "<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIds</code> are provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is a security group, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a parameter group, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> </ul>",
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'SourceId' } }],
              },
            },
          },
        }),
      Enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: false,
            description:
              ' A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. ',
            schema: { type: 'boolean' },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the event subscription.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateEventSubscriptionResultSchema } },
    },
    480: {
      description: 'EventSubscriptionQuotaExceededFault',
      content: { 'text/xml': { schema: EventSubscriptionQuotaExceededFaultSchema } },
    },
    481: {
      description: 'SubscriptionAlreadyExistFault',
      content: { 'text/xml': { schema: SubscriptionAlreadyExistFaultSchema } },
    },
    482: {
      description: 'SNSInvalidTopicFault',
      content: { 'text/xml': { schema: SNSInvalidTopicFaultSchema } },
    },
    483: {
      description: 'SNSNoAuthorizationFault',
      content: { 'text/xml': { schema: SNSNoAuthorizationFaultSchema } },
    },
    484: {
      description: 'SNSTopicArnNotFoundFault',
      content: { 'text/xml': { schema: SNSTopicArnNotFoundFaultSchema } },
    },
    485: {
      description: 'SubscriptionCategoryNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionCategoryNotFoundFaultSchema } },
    },
    486: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const postActionCreateEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateEventSubscription',
  description:
    '<p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>',
  operationId: 'POST_CreateEventSubscription',
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
      Action: z
        .literal('CreateEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateEventSubscriptionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateEventSubscriptionResultSchema } },
    },
    480: {
      description: 'EventSubscriptionQuotaExceededFault',
      content: { 'text/xml': { schema: EventSubscriptionQuotaExceededFaultSchema } },
    },
    481: {
      description: 'SubscriptionAlreadyExistFault',
      content: { 'text/xml': { schema: SubscriptionAlreadyExistFaultSchema } },
    },
    482: {
      description: 'SNSInvalidTopicFault',
      content: { 'text/xml': { schema: SNSInvalidTopicFaultSchema } },
    },
    483: {
      description: 'SNSNoAuthorizationFault',
      content: { 'text/xml': { schema: SNSNoAuthorizationFaultSchema } },
    },
    484: {
      description: 'SNSTopicArnNotFoundFault',
      content: { 'text/xml': { schema: SNSTopicArnNotFoundFaultSchema } },
    },
    485: {
      description: 'SubscriptionCategoryNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionCategoryNotFoundFaultSchema } },
    },
    486: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const getActionCreateGlobalClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateGlobalCluster',
  description:
    '<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'GET_CreateGlobalCluster',
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
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: true,
            description: 'The cluster identifier of the new global cluster.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      SourceDBClusterIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceDBClusterIdentifier',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.',
            schema: { type: 'string' },
          },
        }),
      Engine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: false,
            description: 'The name of the database engine to be used for this cluster.',
            schema: { type: 'string' },
          },
        }),
      EngineVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EngineVersion',
            in: 'query',
            required: false,
            description: 'The engine version of the global cluster.',
            schema: { type: 'string' },
          },
        }),
      DeletionProtection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeletionProtection',
            in: 'query',
            required: false,
            description:
              "The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. ",
            schema: { type: 'boolean' },
          },
        }),
      DatabaseName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DatabaseName',
            in: 'query',
            required: false,
            description:
              'The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.',
            schema: { type: 'string' },
          },
        }),
      StorageEncrypted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'StorageEncrypted',
            in: 'query',
            required: false,
            description: 'The storage encryption setting for the new global cluster. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('CreateGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: GlobalClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'GlobalClusterQuotaExceededFault',
      content: { 'text/xml': { schema: GlobalClusterQuotaExceededFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionCreateGlobalClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateGlobalCluster',
  description:
    '<p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'POST_CreateGlobalCluster',
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
      Action: z
        .literal('CreateGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateGlobalClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: GlobalClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'GlobalClusterQuotaExceededFault',
      content: { 'text/xml': { schema: GlobalClusterQuotaExceededFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionDeleteDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBCluster',
  description:
    "<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>",
  operationId: 'GET_DeleteDBCluster',
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
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              "<p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      SkipFinalSnapshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'SkipFinalSnapshot',
            in: 'query',
            required: false,
            description:
              '<p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p> <note> <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p> </note> <p>Default: <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      FinalDBSnapshotIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FinalDBSnapshotIdentifier',
            in: 'query',
            required: false,
            description:
              '<p> The cluster snapshot identifier of the new cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to <code>true</code> results in an error. </p> </note> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
  },
})

export const postActionDeleteDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBCluster',
  description:
    "<p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>",
  operationId: 'POST_DeleteDBCluster',
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
      Action: z
        .literal('DeleteDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterSnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
  },
})

export const getActionDeleteDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBClusterParameterGroup',
  description:
    "Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.",
  operationId: 'GET_DeleteDBClusterParameterGroup',
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
      DBClusterParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: true,
            description:
              "<p>The name of the cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing cluster parameter group.</p> </li> <li> <p>You can't delete a default cluster parameter group.</p> </li> <li> <p>Cannot be associated with any clusters.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDeleteDBClusterParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBClusterParameterGroup',
  description:
    "Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.",
  operationId: 'POST_DeleteDBClusterParameterGroup',
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
      Action: z
        .literal('DeleteDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDBClusterParameterGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDeleteDBClusterSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBClusterSnapshot',
  description:
    '<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>',
  operationId: 'GET_DeleteDBClusterSnapshot',
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
      DBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    481: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const postActionDeleteDBClusterSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBClusterSnapshot',
  description:
    '<p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>',
  operationId: 'POST_DeleteDBClusterSnapshot',
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
      Action: z
        .literal('DeleteDBClusterSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDBClusterSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBClusterSnapshotResultSchema } },
    },
    480: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    481: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const getActionDeleteDBInstanceRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBInstance',
  description: 'Deletes a previously provisioned instance.',
  operationId: 'GET_DeleteDBInstance',
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
      DBInstanceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: true,
            description:
              "<p>The instance identifier for the instance to be deleted. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing instance.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBInstanceResultSchema } },
    },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    482: {
      description: 'DBSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBSnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const postActionDeleteDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBInstance',
  description: 'Deletes a previously provisioned instance.',
  operationId: 'POST_DeleteDBInstance',
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
      Action: z
        .literal('DeleteDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDBInstanceMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBInstanceResultSchema } },
    },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    482: {
      description: 'DBSnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: DBSnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    484: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const getActionDeleteDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBSubnetGroup',
  description:
    '<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>',
  operationId: 'GET_DeleteDBSubnetGroup',
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
      DBSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: true,
            description:
              "<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBSubnetStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetStateFaultSchema } },
    },
    482: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDeleteDBSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBSubnetGroup',
  description:
    '<p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>',
  operationId: 'POST_DeleteDBSubnetGroup',
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
      Action: z
        .literal('DeleteDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteDBSubnetGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBSubnetStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetStateFaultSchema } },
    },
    482: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDeleteEventSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteEventSubscription',
  description: 'Deletes an Amazon DocumentDB event notification subscription.',
  operationId: 'GET_DeleteEventSubscription',
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
      SubscriptionName: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: true,
            description:
              'The name of the Amazon DocumentDB event notification subscription that you want to delete.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteEventSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidEventSubscriptionStateFault',
      content: { 'text/xml': { schema: InvalidEventSubscriptionStateFaultSchema } },
    },
  },
})

export const postActionDeleteEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteEventSubscription',
  description: 'Deletes an Amazon DocumentDB event notification subscription.',
  operationId: 'POST_DeleteEventSubscription',
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
      Action: z
        .literal('DeleteEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteEventSubscriptionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteEventSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidEventSubscriptionStateFault',
      content: { 'text/xml': { schema: InvalidEventSubscriptionStateFaultSchema } },
    },
  },
})

export const getActionDeleteGlobalClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteGlobalCluster',
  description:
    '<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'GET_DeleteGlobalCluster',
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
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: true,
            description: 'The cluster identifier of the global cluster being deleted.',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      Action: z
        .literal('DeleteGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const postActionDeleteGlobalClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteGlobalCluster',
  description:
    '<p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'POST_DeleteGlobalCluster',
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
      Action: z
        .literal('DeleteGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteGlobalClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const getActionDescribeCertificatesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCertificates',
  description:
    'Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.',
  operationId: 'GET_DescribeCertificates',
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
      CertificateIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CertificateIdentifier',
            in: 'query',
            required: false,
            description:
              '<p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p> <p>Constraints</p> <ul> <li> <p>Must match an existing <code>CertificateIdentifier</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints:</p> <ul> <li> <p>Minimum: 20</p> </li> <li> <p>Maximum: 100</p> </li> </ul>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCertificates'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CertificateMessageSchema } } },
    480: {
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeCertificatesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCertificates',
  description:
    'Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.',
  operationId: 'POST_DescribeCertificates',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCertificates'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCertificatesMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CertificateMessageSchema } } },
    480: {
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClusterParameterGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterParameterGroups',
  description:
    'Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. ',
  operationId: 'GET_DescribeDBClusterParameterGroups',
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
      DBClusterParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of a specific cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBClusterParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterParameterGroups'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupsMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClusterParameterGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusterParameterGroups',
  description:
    'Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. ',
  operationId: 'POST_DescribeDBClusterParameterGroups',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBClusterParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterParameterGroups'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBClusterParameterGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupsMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClusterParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterParameters',
  description: 'Returns the detailed parameter list for a particular cluster parameter group.',
  operationId: 'GET_DescribeDBClusterParameters',
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
      DBClusterParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of a specific cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Source',
            in: 'query',
            required: false,
            description:
              ' A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>. ',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBClusterParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterParameters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupDetailsSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClusterParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusterParameters',
  description: 'Returns the detailed parameter list for a particular cluster parameter group.',
  operationId: 'POST_DescribeDBClusterParameters',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBClusterParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterParameters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBClusterParametersMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupDetailsSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClusterSnapshotAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterSnapshotAttributes',
  description:
    '<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>',
  operationId: 'GET_DescribeDBClusterSnapshotAttributes',
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
      DBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description: 'The identifier for the cluster snapshot to describe the attributes for.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBClusterSnapshotAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterSnapshotAttributes'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDBClusterSnapshotAttributesResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClusterSnapshotAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusterSnapshotAttributes',
  description:
    '<p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>',
  operationId: 'POST_DescribeDBClusterSnapshotAttributes',
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
      Action: z
        .literal('DescribeDBClusterSnapshotAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterSnapshotAttributes'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBClusterSnapshotAttributesMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeDBClusterSnapshotAttributesResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClusterSnapshotsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterSnapshots',
  description:
    'Returns information about cluster snapshots. This API operation supports pagination.',
  operationId: 'GET_DescribeDBClusterSnapshots',
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
      DBClusterIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: false,
            description:
              "<p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      DBClusterSnapshotIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterSnapshotIdentifier',
            in: 'query',
            required: false,
            description:
              "<p>A specific cluster snapshot identifier to describe. This parameter can't be used with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBClusterSnapshot</code>.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      SnapshotType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotType',
            in: 'query',
            required: false,
            description:
              "<p>The type of cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p> </li> <li> <p> <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p> </li> <li> <p> <code>shared</code> - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.</p> </li> <li> <p> <code>public</code> - Return all cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public cluster snapshots with these results by setting the<code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>",
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      IncludeShared: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeShared',
            in: 'query',
            required: false,
            description:
              'Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      IncludePublic: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludePublic',
            in: 'query',
            required: false,
            description:
              'Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeDBClusterSnapshots')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterSnapshots'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterSnapshotMessageSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClusterSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusterSnapshots',
  description:
    'Returns information about cluster snapshots. This API operation supports pagination.',
  operationId: 'POST_DescribeDBClusterSnapshots',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBClusterSnapshots')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterSnapshots'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBClusterSnapshotsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterSnapshotMessageSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClustersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusters',
  description:
    'Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.',
  operationId: 'GET_DescribeDBClusters',
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
      DBClusterIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: false,
            description:
              "<p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              '<p>A filter that specifies one or more clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DBClusterMessageSchema } } },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClustersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusters',
  description:
    'Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.',
  operationId: 'POST_DescribeDBClusters',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBClustersMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DBClusterMessageSchema } } },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBEngineVersionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBEngineVersions',
  description: 'Returns a list of the available engines.',
  operationId: 'GET_DescribeDBEngineVersions',
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
      Engine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: false,
            description: 'The database engine to return.',
            schema: { type: 'string' },
          },
        }),
      EngineVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EngineVersion',
            in: 'query',
            required: false,
            description:
              '<p>The database engine version to return.</p> <p>Example: <code>3.6.0</code> </p>',
            schema: { type: 'string' },
          },
        }),
      DBParameterGroupFamily: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBParameterGroupFamily',
            in: 'query',
            required: false,
            description:
              '<p>The name of a specific parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match an existing <code>DBParameterGroupFamily</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      DefaultOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DefaultOnly',
            in: 'query',
            required: false,
            description:
              'Indicates that only the default version of the specified engine or engine and major version combination is returned.',
            schema: { type: 'boolean' },
          },
        }),
      ListSupportedCharacterSets: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ListSupportedCharacterSets',
            in: 'query',
            required: false,
            description:
              'If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. ',
            schema: { type: 'boolean' },
          },
        }),
      ListSupportedTimezones: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ListSupportedTimezones',
            in: 'query',
            required: false,
            description:
              'If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeDBEngineVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBEngineVersions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBEngineVersionMessageSchema } },
    },
  },
})

export const postActionDescribeDBEngineVersionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBEngineVersions',
  description: 'Returns a list of the available engines.',
  operationId: 'POST_DescribeDBEngineVersions',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBEngineVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBEngineVersions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBEngineVersionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBEngineVersionMessageSchema } },
    },
  },
})

export const getActionDescribeDBInstancesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBInstances',
  description:
    'Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.',
  operationId: 'GET_DescribeDBInstances',
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
      DBInstanceIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: false,
            description:
              "<p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If provided, must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              '<p>A filter that specifies one or more instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBInstances')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBInstances'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DBInstanceMessageSchema } } },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBInstancesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBInstances',
  description:
    'Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.',
  operationId: 'POST_DescribeDBInstances',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBInstances')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBInstances'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBInstancesMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DBInstanceMessageSchema } } },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBSubnetGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBSubnetGroups',
  description:
    'Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.',
  operationId: 'GET_DescribeDBSubnetGroups',
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
      DBSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: false,
            description: 'The name of the subnet group to return details for.',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBSubnetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBSubnetGroups'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBSubnetGroupMessageSchema } },
    },
    480: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBSubnetGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBSubnetGroups',
  description:
    'Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.',
  operationId: 'POST_DescribeDBSubnetGroups',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeDBSubnetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBSubnetGroups'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeDBSubnetGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBSubnetGroupMessageSchema } },
    },
    480: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeEngineDefaultClusterParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEngineDefaultClusterParameters',
  description:
    'Returns the default engine and system parameter information for the cluster database engine.',
  operationId: 'GET_DescribeEngineDefaultClusterParameters',
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
      DBParameterGroupFamily: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupFamily',
            in: 'query',
            required: true,
            description:
              'The name of the cluster parameter group family to return the engine parameter information for.',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEngineDefaultClusterParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEngineDefaultClusterParameters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEngineDefaultClusterParametersResultSchema } },
    },
  },
})

export const postActionDescribeEngineDefaultClusterParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEngineDefaultClusterParameters',
  description:
    'Returns the default engine and system parameter information for the cluster database engine.',
  operationId: 'POST_DescribeEngineDefaultClusterParameters',
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
      Action: z
        .literal('DescribeEngineDefaultClusterParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEngineDefaultClusterParameters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DescribeEngineDefaultClusterParametersMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEngineDefaultClusterParametersResultSchema } },
    },
  },
})

export const getActionDescribeEventCategoriesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEventCategories',
  description:
    'Displays a list of categories for all event source types, or, if specified, for a specified source type. ',
  operationId: 'GET_DescribeEventCategories',
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
      SourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceType',
            in: 'query',
            required: false,
            description:
              '<p>The type of source that is generating the events.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      Action: z
        .literal('DescribeEventCategories')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEventCategories'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventCategoriesMessageSchema } },
    },
  },
})

export const postActionDescribeEventCategoriesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEventCategories',
  description:
    'Displays a list of categories for all event source types, or, if specified, for a specified source type. ',
  operationId: 'POST_DescribeEventCategories',
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
      Action: z
        .literal('DescribeEventCategories')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEventCategories'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEventCategoriesMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventCategoriesMessageSchema } },
    },
  },
})

export const getActionDescribeEventSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEventSubscriptions',
  description:
    '<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>',
  operationId: 'GET_DescribeEventSubscriptions',
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
      SubscriptionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: false,
            description:
              'The name of the Amazon DocumentDB event notification subscription that you want to describe.',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEventSubscriptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEventSubscriptions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventSubscriptionsMessageSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeEventSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEventSubscriptions',
  description:
    '<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>',
  operationId: 'POST_DescribeEventSubscriptions',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeEventSubscriptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEventSubscriptions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEventSubscriptionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventSubscriptionsMessageSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeEventsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEvents',
  description:
    'Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.',
  operationId: 'GET_DescribeEvents',
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
      SourceIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceIdentifier',
            in: 'query',
            required: false,
            description:
              '<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, a <code>DBInstanceIdentifier</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be provided.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be provided.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      SourceType: z
        .enum([
          'db-instance',
          'db-parameter-group',
          'db-security-group',
          'db-snapshot',
          'db-cluster',
          'db-cluster-snapshot',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceType',
            in: 'query',
            required: false,
            description:
              'The event source to retrieve events for. If no value is specified, all events are returned.',
            schema: {
              type: 'string',
              enum: [
                'db-instance',
                'db-parameter-group',
                'db-security-group',
                'db-snapshot',
                'db-cluster',
                'db-cluster-snapshot',
              ],
            },
          },
        }),
      StartTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartTime',
            in: 'query',
            required: false,
            description:
              '<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      EndTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndTime',
            in: 'query',
            required: false,
            description:
              '<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. </p> <p>Example: 2009-07-08T18:00Z</p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      Duration: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Duration',
            in: 'query',
            required: false,
            description: '<p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>',
            schema: { type: 'integer' },
          },
        }),
      EventCategories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'EventCategory' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EventCategories',
            in: 'query',
            required: false,
            description:
              'A list of event categories that trigger notifications for an event notification subscription.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'EventCategory' } },
                ],
              },
            },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEvents')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEvents'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: EventsMessageSchema } } },
  },
})

export const postActionDescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEvents',
  description:
    'Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.',
  operationId: 'POST_DescribeEvents',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeEvents')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEvents'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEventsMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: EventsMessageSchema } } },
  },
})

export const getActionDescribeGlobalClustersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeGlobalClusters',
  description:
    '<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'GET_DescribeGlobalClusters',
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
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: false,
            description:
              "The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.",
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              '<p>A filter that specifies one or more global DB clusters to describe.</p> <p>Supported filters: <code>db-cluster-id</code> accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              'The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. ',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeGlobalClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeGlobalClusters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GlobalClustersMessageSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeGlobalClustersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeGlobalClusters',
  description:
    '<p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'POST_DescribeGlobalClusters',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeGlobalClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeGlobalClusters'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeGlobalClustersMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GlobalClustersMessageSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeOrderableDBInstanceOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeOrderableDBInstanceOptions',
  description: 'Returns a list of orderable instance options for the specified engine.',
  operationId: 'GET_DescribeOrderableDBInstanceOptions',
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
      Engine: z
        .string()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: true,
            description: 'The name of the engine to retrieve instance options for.',
            schema: { type: 'string' },
          },
        }),
      EngineVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EngineVersion',
            in: 'query',
            required: false,
            description:
              'The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.',
            schema: { type: 'string' },
          },
        }),
      DBInstanceClass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBInstanceClass',
            in: 'query',
            required: false,
            description:
              'The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.',
            schema: { type: 'string' },
          },
        }),
      LicenseModel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'LicenseModel',
            in: 'query',
            required: false,
            description:
              'The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.',
            schema: { type: 'string' },
          },
        }),
      Vpc: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Vpc',
            in: 'query',
            required: false,
            description:
              'The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.',
            schema: { type: 'boolean' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeOrderableDBInstanceOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeOrderableDBInstanceOptions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: OrderableDBInstanceOptionsMessageSchema } },
    },
  },
})

export const postActionDescribeOrderableDBInstanceOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeOrderableDBInstanceOptions',
  description: 'Returns a list of orderable instance options for the specified engine.',
  operationId: 'POST_DescribeOrderableDBInstanceOptions',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeOrderableDBInstanceOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeOrderableDBInstanceOptions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeOrderableDBInstanceOptionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: OrderableDBInstanceOptionsMessageSchema } },
    },
  },
})

export const getActionDescribePendingMaintenanceActionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribePendingMaintenanceActions',
  description:
    'Returns a list of resources (for example, instances) that have at least one pending maintenance action.',
  operationId: 'GET_DescribePendingMaintenanceActions',
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
      ResourceIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'query',
            required: false,
            description: 'The ARN of a resource to return pending maintenance actions for.',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              '<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
            schema: { type: 'integer' },
          },
        }),
      Action: z
        .literal('DescribePendingMaintenanceActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribePendingMaintenanceActions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PendingMaintenanceActionsMessageSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'text/xml': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribePendingMaintenanceActionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribePendingMaintenanceActions',
  description:
    'Returns a list of resources (for example, instances) that have at least one pending maintenance action.',
  operationId: 'POST_DescribePendingMaintenanceActions',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribePendingMaintenanceActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribePendingMaintenanceActions'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribePendingMaintenanceActionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PendingMaintenanceActionsMessageSchema } },
    },
    480: {
      description: 'ResourceNotFoundFault',
      content: { 'text/xml': { schema: ResourceNotFoundFaultSchema } },
    },
  },
})

export const getActionFailoverDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=FailoverDBCluster',
  description:
    '<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>',
  operationId: 'GET_FailoverDBCluster',
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
      DBClusterIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: false,
            description:
              '<p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      TargetDBInstanceIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TargetDBInstanceIdentifier',
            in: 'query',
            required: false,
            description:
              '<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For example, <code>mydbcluster-replica1</code>.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('FailoverDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: FailoverDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionFailoverDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=FailoverDBCluster',
  description:
    '<p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>',
  operationId: 'POST_FailoverDBCluster',
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
      Action: z
        .literal('FailoverDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: FailoverDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: FailoverDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description: 'Lists all tags on an Amazon DocumentDB resource.',
  operationId: 'GET_ListTagsForResource',
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
      ResourceName: z
        .string()
        .openapi({
          param: {
            name: 'ResourceName',
            in: 'query',
            required: true,
            description:
              'The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).',
            schema: { type: 'string' },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            FilterSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Filter' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'This parameter is not currently supported.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/Filter' }, { xml: { name: 'Filter' } }],
              },
            },
          },
        }),
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTagsForResource',
  description: 'Lists all tags on an Amazon DocumentDB resource.',
  operationId: 'POST_ListTagsForResource',
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
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTagsForResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionModifyDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBCluster',
  description:
    'Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. ',
  operationId: 'GET_ModifyDBCluster',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['EnableLogTypes', ['CloudwatchLogsExportConfiguration']],
          ['DisableLogTypes', ['CloudwatchLogsExportConfiguration']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          DBClusterIdentifier: z
            .string()
            .openapi({
              param: {
                name: 'DBClusterIdentifier',
                in: 'query',
                required: true,
                description:
                  '<p>The cluster identifier for the cluster that is being modified. This parameter is not case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          NewDBClusterIdentifier: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'NewDBClusterIdentifier',
                in: 'query',
                required: false,
                description:
                  '<p>The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>',
                schema: { type: 'string' },
              },
            }),
          ApplyImmediately: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'ApplyImmediately',
                in: 'query',
                required: false,
                description:
                  '<p>A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster. If this parameter is set to <code>false</code>, changes to the cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter affects only the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set this parameter value to <code>false</code>, the changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
              },
            }),
          BackupRetentionPeriod: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'BackupRetentionPeriod',
                in: 'query',
                required: false,
                description:
                  '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>',
                schema: { type: 'integer' },
              },
            }),
          DBClusterParameterGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'DBClusterParameterGroupName',
                in: 'query',
                required: false,
                description: 'The name of the cluster parameter group to use for the cluster.',
                schema: { type: 'string' },
              },
            }),
          VpcSecurityGroupIds: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                StringSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'VpcSecurityGroupId' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'VpcSecurityGroupIds',
                in: 'query',
                required: false,
                description:
                  'A list of virtual private cloud (VPC) security groups that the cluster will belong to.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [
                      { $ref: '#/components/schemas/String' },
                      { xml: { name: 'VpcSecurityGroupId' } },
                    ],
                  },
                },
              },
            }),
          Port: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Port',
                in: 'query',
                required: false,
                description:
                  '<p>The port number on which the cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The same port as the original cluster.</p>',
                schema: { type: 'integer' },
              },
            }),
          MasterUserPassword: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MasterUserPassword',
                in: 'query',
                required: false,
                description:
                  '<p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 100 characters.</p>',
                schema: { type: 'string' },
              },
            }),
          PreferredBackupWindow: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'PreferredBackupWindow',
                in: 'query',
                required: false,
                description:
                  '<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          PreferredMaintenanceWindow: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'PreferredMaintenanceWindow',
                in: 'query',
                required: false,
                description:
                  '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>',
                schema: { type: 'string' },
              },
            }),
          CloudwatchLogsExportConfiguration: z
            .object({
              EnableLogTypes: LogTypeListSchema.and(
                z.any().openapi({ description: 'The list of log types to enable.' }),
              ).exactOptional(),
              DisableLogTypes: LogTypeListSchema.and(
                z.any().openapi({ description: 'The list of log types to disable.' }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'CloudwatchLogsExportConfiguration',
                in: 'query',
                required: false,
                description:
                  'The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs.',
                schema: {
                  type: 'object',
                  properties: {
                    EnableLogTypes: {
                      allOf: [
                        { $ref: '#/components/schemas/LogTypeList' },
                        { description: 'The list of log types to enable.' },
                      ],
                    },
                    DisableLogTypes: {
                      allOf: [
                        { $ref: '#/components/schemas/LogTypeList' },
                        { description: 'The list of log types to disable.' },
                      ],
                    },
                  },
                  description:
                    '<p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>',
                },
              },
              description:
                '<p>The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.</p>',
              required: [],
            }),
          EngineVersion: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'EngineVersion',
                in: 'query',
                required: false,
                description:
                  'The version number of the database engine to which you want to upgrade. Modifying engine version is not supported on Amazon DocumentDB.',
                schema: { type: 'string' },
              },
            }),
          DeletionProtection: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'DeletionProtection',
                in: 'query',
                required: false,
                description:
                  'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
                schema: { type: 'boolean' },
              },
            }),
          Action: z
            .literal('ModifyDBCluster')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['ModifyDBCluster'] },
              },
            }),
          Version: z
            .literal('2014-10-31')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2014-10-31'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    485: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    486: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    487: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'InvalidDBSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSecurityGroupStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    490: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
  },
})

export const postActionModifyDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBCluster',
  description:
    'Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. ',
  operationId: 'POST_ModifyDBCluster',
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
      Action: z
        .literal('ModifyDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    485: {
      description: 'InvalidDBSubnetGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSubnetGroupStateFaultSchema } },
    },
    486: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    487: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'InvalidDBSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSecurityGroupStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    490: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
  },
})

export const getActionModifyDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBClusterParameterGroup',
  description:
    '<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>',
  operationId: 'GET_ModifyDBClusterParameterGroup',
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
      DBClusterParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: true,
            description: 'The name of the cluster parameter group to modify.',
            schema: { type: 'string' },
          },
        }),
      Parameters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                ParameterName: StringSchema.and(
                  z.any().openapi({ description: 'Specifies the name of the parameter.' }),
                ).exactOptional(),
                ParameterValue: StringSchema.and(
                  z.any().openapi({ description: 'Specifies the value of the parameter.' }),
                ).exactOptional(),
                Description: StringSchema.and(
                  z.any().openapi({ description: 'Provides a description of the parameter.' }),
                ).exactOptional(),
                Source: StringSchema.and(
                  z.any().openapi({ description: 'Indicates the source of the parameter value.' }),
                ).exactOptional(),
                ApplyType: StringSchema.and(
                  z
                    .any()
                    .openapi({ description: 'Specifies the engine-specific parameters type.' }),
                ).exactOptional(),
                DataType: StringSchema.and(
                  z
                    .any()
                    .openapi({ description: 'Specifies the valid data type for the parameter.' }),
                ).exactOptional(),
                AllowedValues: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'Specifies the valid range of values for the parameter.',
                    }),
                ).exactOptional(),
                IsModifiable: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. ',
                      }),
                  )
                  .exactOptional(),
                MinimumEngineVersion: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The earliest engine version to which the parameter can apply.',
                    }),
                ).exactOptional(),
                ApplyMethod: ApplyMethodSchema.and(
                  z.any().openapi({ description: 'Indicates when to apply parameter updates.' }),
                ).exactOptional(),
              })
              .openapi({
                description: 'Detailed information about an individual parameter.',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'Parameter' } }),
              ),
          ),
        )
        .openapi({
          param: {
            name: 'Parameters',
            in: 'query',
            required: true,
            description: 'A list of parameters in the cluster parameter group to modify.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      ParameterName: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the name of the parameter.' },
                        ],
                      },
                      ParameterValue: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the value of the parameter.' },
                        ],
                      },
                      Description: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Provides a description of the parameter.' },
                        ],
                      },
                      Source: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Indicates the source of the parameter value.' },
                        ],
                      },
                      ApplyType: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the engine-specific parameters type.' },
                        ],
                      },
                      DataType: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the valid data type for the parameter.' },
                        ],
                      },
                      AllowedValues: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the valid range of values for the parameter.' },
                        ],
                      },
                      IsModifiable: {
                        allOf: [
                          { $ref: '#/components/schemas/Boolean' },
                          {
                            description:
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. ',
                          },
                        ],
                      },
                      MinimumEngineVersion: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              'The earliest engine version to which the parameter can apply.',
                          },
                        ],
                      },
                      ApplyMethod: {
                        allOf: [
                          { $ref: '#/components/schemas/ApplyMethod' },
                          { description: 'Indicates when to apply parameter updates.' },
                        ],
                      },
                    },
                    description: 'Detailed information about an individual parameter.',
                  },
                  { xml: { name: 'Parameter' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
  },
})

export const postActionModifyDBClusterParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBClusterParameterGroup',
  description:
    '<p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>',
  operationId: 'POST_ModifyDBClusterParameterGroup',
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
      Action: z
        .literal('ModifyDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyDBClusterParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
  },
})

export const getActionModifyDBClusterSnapshotAttributeRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBClusterSnapshotAttribute',
  description:
    "<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>",
  operationId: 'GET_ModifyDBClusterSnapshotAttribute',
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
      DBClusterSnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterSnapshotIdentifier',
            in: 'query',
            required: true,
            description: 'The identifier for the cluster snapshot to modify the attributes for.',
            schema: { type: 'string' },
          },
        }),
      AttributeName: z
        .string()
        .openapi({
          param: {
            name: 'AttributeName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this value to <code>restore</code>.</p>',
            schema: { type: 'string' },
          },
        }),
      ValuesToAdd: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AttributeValue' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ValuesToAdd',
            in: 'query',
            required: false,
            description:
              "<p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>",
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'AttributeValue' } },
                ],
              },
            },
          },
        }),
      ValuesToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AttributeValue' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ValuesToRemove',
            in: 'query',
            required: false,
            description:
              '<p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'AttributeValue' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyDBClusterSnapshotAttribute')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterSnapshotAttribute'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBClusterSnapshotAttributeResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    482: {
      description: 'SharedSnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SharedSnapshotQuotaExceededFaultSchema } },
    },
  },
})

export const postActionModifyDBClusterSnapshotAttributeRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBClusterSnapshotAttribute',
  description:
    "<p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>",
  operationId: 'POST_ModifyDBClusterSnapshotAttribute',
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
      Action: z
        .literal('ModifyDBClusterSnapshotAttribute')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterSnapshotAttribute'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyDBClusterSnapshotAttributeMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBClusterSnapshotAttributeResultSchema } },
    },
    480: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    482: {
      description: 'SharedSnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SharedSnapshotQuotaExceededFaultSchema } },
    },
  },
})

export const getActionModifyDBInstanceRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBInstance',
  description:
    'Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.',
  operationId: 'GET_ModifyDBInstance',
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
      DBInstanceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      DBInstanceClass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBInstanceClass',
            in: 'query',
            required: false,
            description:
              '<p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p> <p>If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request. </p> <p>Default: Uses existing setting.</p>',
            schema: { type: 'string' },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: false,
            description:
              '<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the instance. </p> <p> If this parameter is set to <code>false</code>, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot.</p> <p>Default: <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      PreferredMaintenanceWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredMaintenanceWindow',
            in: 'query',
            required: false,
            description:
              "<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied.</p> <p>Default: Uses existing setting.</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Must be at least 30 minutes.</p>",
            schema: { type: 'string' },
          },
        }),
      AutoMinorVersionUpgrade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AutoMinorVersionUpgrade',
            in: 'query',
            required: false,
            description:
              'This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.',
            schema: { type: 'boolean' },
          },
        }),
      NewDBInstanceIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NewDBInstanceIdentifier',
            in: 'query',
            required: false,
            description:
              '<p> The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set <code>Apply Immediately</code> to <code>true</code>. It occurs during the next maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This value is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
            schema: { type: 'string' },
          },
        }),
      CACertificateIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CACertificateIdentifier',
            in: 'query',
            required: false,
            description: 'Indicates the certificate that needs to be associated with the instance.',
            schema: { type: 'string' },
          },
        }),
      CopyTagsToSnapshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'CopyTagsToSnapshot',
            in: 'query',
            required: false,
            description:
              'A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.',
            schema: { type: 'boolean' },
          },
        }),
      PromotionTier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PromotionTier',
            in: 'query',
            required: false,
            description:
              '<p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid values: 0-15</p>',
            schema: { type: 'integer' },
          },
        }),
      EnablePerformanceInsights: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnablePerformanceInsights',
            in: 'query',
            required: false,
            description:
              'A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon Performance Insights</a>.',
            schema: { type: 'boolean' },
          },
        }),
      PerformanceInsightsKMSKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PerformanceInsightsKMSKeyId',
            in: 'query',
            required: false,
            description:
              '<p>The KMS key identifier for encryption of Performance Insights data.</p> <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p> <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ModifyDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBInstanceResultSchema } },
    },
    480: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'DBInstanceAlreadyExistsFault',
      content: { 'text/xml': { schema: DBInstanceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSecurityGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'InsufficientDBInstanceCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBInstanceCapacityFaultSchema } },
    },
    487: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    488: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    489: {
      description: 'DBUpgradeDependencyFailureFault',
      content: { 'text/xml': { schema: DBUpgradeDependencyFailureFaultSchema } },
    },
    490: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    491: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    492: {
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
  },
})

export const postActionModifyDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBInstance',
  description:
    'Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.',
  operationId: 'POST_ModifyDBInstance',
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
      Action: z
        .literal('ModifyDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyDBInstanceMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBInstanceResultSchema } },
    },
    480: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'DBInstanceAlreadyExistsFault',
      content: { 'text/xml': { schema: DBInstanceAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSecurityGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'InsufficientDBInstanceCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBInstanceCapacityFaultSchema } },
    },
    487: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    488: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    489: {
      description: 'DBUpgradeDependencyFailureFault',
      content: { 'text/xml': { schema: DBUpgradeDependencyFailureFaultSchema } },
    },
    490: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    491: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    492: {
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
  },
})

export const getActionModifyDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBSubnetGroup',
  description:
    'Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.',
  operationId: 'GET_ModifyDBSubnetGroup',
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
      DBSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: true,
            description:
              "<p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
            schema: { type: 'string' },
          },
        }),
      DBSubnetGroupDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSubnetGroupDescription',
            in: 'query',
            required: false,
            description: 'The description for the subnet group.',
            schema: { type: 'string' },
          },
        }),
      SubnetIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SubnetIdentifier' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'SubnetIds',
            in: 'query',
            required: true,
            description: 'The Amazon EC2 subnet IDs for the subnet group.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SubnetIdentifier' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBSubnetGroupResultSchema } },
    },
    480: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetQuotaExceededFaultSchema } },
    },
    482: {
      description: 'SubnetAlreadyInUse',
      content: { 'text/xml': { schema: SubnetAlreadyInUseSchema } },
    },
    483: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
  },
})

export const postActionModifyDBSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBSubnetGroup',
  description:
    'Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.',
  operationId: 'POST_ModifyDBSubnetGroup',
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
      Action: z
        .literal('ModifyDBSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyDBSubnetGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBSubnetGroupResultSchema } },
    },
    480: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: DBSubnetQuotaExceededFaultSchema } },
    },
    482: {
      description: 'SubnetAlreadyInUse',
      content: { 'text/xml': { schema: SubnetAlreadyInUseSchema } },
    },
    483: {
      description: 'DBSubnetGroupDoesNotCoverEnoughAZs',
      content: { 'text/xml': { schema: DBSubnetGroupDoesNotCoverEnoughAZsSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
  },
})

export const getActionModifyEventSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyEventSubscription',
  description: 'Modifies an existing Amazon DocumentDB event notification subscription.',
  operationId: 'GET_ModifyEventSubscription',
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
      SubscriptionName: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: true,
            description: 'The name of the Amazon DocumentDB event notification subscription.',
            schema: { type: 'string' },
          },
        }),
      SnsTopicArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnsTopicArn',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.',
            schema: { type: 'string' },
          },
        }),
      SourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceType',
            in: 'query',
            required: false,
            description:
              '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code> </p>',
            schema: { type: 'string' },
          },
        }),
      EventCategories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'EventCategory' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EventCategories',
            in: 'query',
            required: false,
            description:
              ' A list of event categories for a <code>SourceType</code> that you want to subscribe to.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'EventCategory' } },
                ],
              },
            },
          },
        }),
      Enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Enabled',
            in: 'query',
            required: false,
            description:
              ' A Boolean value; set to <code>true</code> to activate the subscription. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('ModifyEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyEventSubscriptionResultSchema } },
    },
    480: {
      description: 'EventSubscriptionQuotaExceededFault',
      content: { 'text/xml': { schema: EventSubscriptionQuotaExceededFaultSchema } },
    },
    481: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    482: {
      description: 'SNSInvalidTopicFault',
      content: { 'text/xml': { schema: SNSInvalidTopicFaultSchema } },
    },
    483: {
      description: 'SNSNoAuthorizationFault',
      content: { 'text/xml': { schema: SNSNoAuthorizationFaultSchema } },
    },
    484: {
      description: 'SNSTopicArnNotFoundFault',
      content: { 'text/xml': { schema: SNSTopicArnNotFoundFaultSchema } },
    },
    485: {
      description: 'SubscriptionCategoryNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionCategoryNotFoundFaultSchema } },
    },
  },
})

export const postActionModifyEventSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyEventSubscription',
  description: 'Modifies an existing Amazon DocumentDB event notification subscription.',
  operationId: 'POST_ModifyEventSubscription',
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
      Action: z
        .literal('ModifyEventSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyEventSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyEventSubscriptionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyEventSubscriptionResultSchema } },
    },
    480: {
      description: 'EventSubscriptionQuotaExceededFault',
      content: { 'text/xml': { schema: EventSubscriptionQuotaExceededFaultSchema } },
    },
    481: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    482: {
      description: 'SNSInvalidTopicFault',
      content: { 'text/xml': { schema: SNSInvalidTopicFaultSchema } },
    },
    483: {
      description: 'SNSNoAuthorizationFault',
      content: { 'text/xml': { schema: SNSNoAuthorizationFaultSchema } },
    },
    484: {
      description: 'SNSTopicArnNotFoundFault',
      content: { 'text/xml': { schema: SNSTopicArnNotFoundFaultSchema } },
    },
    485: {
      description: 'SubscriptionCategoryNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionCategoryNotFoundFaultSchema } },
    },
  },
})

export const getActionModifyGlobalClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyGlobalCluster',
  description:
    '<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'GET_ModifyGlobalCluster',
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
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: true,
            description:
              "<p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing global cluster.</p> </li> </ul>",
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      NewGlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'NewGlobalClusterIdentifier',
            in: 'query',
            required: false,
            description:
              "<p>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> <p>The first character must be a letter</p> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>",
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      DeletionProtection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeletionProtection',
            in: 'query',
            required: false,
            description:
              "Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. ",
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('ModifyGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const postActionModifyGlobalClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyGlobalCluster',
  description:
    '<p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'POST_ModifyGlobalCluster',
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
      Action: z
        .literal('ModifyGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyGlobalClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
  },
})

export const getActionRebootDBInstanceRoute = createRoute({
  method: 'get',
  path: '/#Action=RebootDBInstance',
  description:
    '<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>',
  operationId: 'GET_RebootDBInstance',
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
      DBInstanceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBInstance</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      ForceFailover: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ForceFailover',
            in: 'query',
            required: false,
            description:
              "<p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for Multi-AZ.</p>",
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('RebootDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebootDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebootDBInstanceResultSchema } },
    },
    480: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    481: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
  },
})

export const postActionRebootDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=RebootDBInstance',
  description:
    '<p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>',
  operationId: 'POST_RebootDBInstance',
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
      Action: z
        .literal('RebootDBInstance')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebootDBInstance'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RebootDBInstanceMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebootDBInstanceResultSchema } },
    },
    480: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
    481: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
  },
})

export const getActionRemoveFromGlobalClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveFromGlobalCluster',
  description:
    '<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'GET_RemoveFromGlobalCluster',
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
      GlobalClusterIdentifier: z
        .string()
        .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'GlobalClusterIdentifier',
            in: 'query',
            required: true,
            description:
              'The cluster identifier to detach from the Amazon DocumentDB global cluster. ',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      DbClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DbClusterIdentifier',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RemoveFromGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveFromGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveFromGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionRemoveFromGlobalClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveFromGlobalCluster',
  description:
    '<p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>',
  operationId: 'POST_RemoveFromGlobalCluster',
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
      Action: z
        .literal('RemoveFromGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveFromGlobalCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveFromGlobalClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveFromGlobalClusterResultSchema } },
    },
    480: {
      description: 'GlobalClusterNotFoundFault',
      content: { 'text/xml': { schema: GlobalClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalClusterStateFault',
      content: { 'text/xml': { schema: InvalidGlobalClusterStateFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionRemoveSourceIdentifierFromSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveSourceIdentifierFromSubscription',
  description:
    'Removes a source identifier from an existing Amazon DocumentDB event notification subscription.',
  operationId: 'GET_RemoveSourceIdentifierFromSubscription',
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
      SubscriptionName: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionName',
            in: 'query',
            required: true,
            description:
              'The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.',
            schema: { type: 'string' },
          },
        }),
      SourceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceIdentifier',
            in: 'query',
            required: true,
            description:
              ' The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group. ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RemoveSourceIdentifierFromSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveSourceIdentifierFromSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveSourceIdentifierFromSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const postActionRemoveSourceIdentifierFromSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveSourceIdentifierFromSubscription',
  description:
    'Removes a source identifier from an existing Amazon DocumentDB event notification subscription.',
  operationId: 'POST_RemoveSourceIdentifierFromSubscription',
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
      Action: z
        .literal('RemoveSourceIdentifierFromSubscription')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveSourceIdentifierFromSubscription'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: RemoveSourceIdentifierFromSubscriptionMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveSourceIdentifierFromSubscriptionResultSchema } },
    },
    480: {
      description: 'SubscriptionNotFoundFault',
      content: { 'text/xml': { schema: SubscriptionNotFoundFaultSchema } },
    },
    481: {
      description: 'SourceNotFoundFault',
      content: { 'text/xml': { schema: SourceNotFoundFaultSchema } },
    },
  },
})

export const getActionRemoveTagsFromResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveTagsFromResource',
  description: 'Removes metadata tags from an Amazon DocumentDB resource.',
  operationId: 'GET_RemoveTagsFromResource',
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
      ResourceName: z
        .string()
        .openapi({
          param: {
            name: 'ResourceName',
            in: 'query',
            required: true,
            description:
              'The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).',
            schema: { type: 'string' },
          },
        }),
      TagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'TagKeys',
            in: 'query',
            required: true,
            description: 'The tag key (name) of the tag to be removed.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      Action: z
        .literal('RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTagsFromResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionRemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveTagsFromResource',
  description: 'Removes metadata tags from an Amazon DocumentDB resource.',
  operationId: 'POST_RemoveTagsFromResource',
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
      Action: z
        .literal('RemoveTagsFromResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTagsFromResource'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveTagsFromResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionResetDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ResetDBClusterParameterGroup',
  description:
    '<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>',
  operationId: 'GET_ResetDBClusterParameterGroup',
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
      DBClusterParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: true,
            description: 'The name of the cluster parameter group to reset.',
            schema: { type: 'string' },
          },
        }),
      ResetAllParameters: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ResetAllParameters',
            in: 'query',
            required: false,
            description:
              "A value that is set to <code>true</code> to reset all parameters in the cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.",
            schema: { type: 'boolean' },
          },
        }),
      Parameters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                ParameterName: StringSchema.and(
                  z.any().openapi({ description: 'Specifies the name of the parameter.' }),
                ).exactOptional(),
                ParameterValue: StringSchema.and(
                  z.any().openapi({ description: 'Specifies the value of the parameter.' }),
                ).exactOptional(),
                Description: StringSchema.and(
                  z.any().openapi({ description: 'Provides a description of the parameter.' }),
                ).exactOptional(),
                Source: StringSchema.and(
                  z.any().openapi({ description: 'Indicates the source of the parameter value.' }),
                ).exactOptional(),
                ApplyType: StringSchema.and(
                  z
                    .any()
                    .openapi({ description: 'Specifies the engine-specific parameters type.' }),
                ).exactOptional(),
                DataType: StringSchema.and(
                  z
                    .any()
                    .openapi({ description: 'Specifies the valid data type for the parameter.' }),
                ).exactOptional(),
                AllowedValues: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'Specifies the valid range of values for the parameter.',
                    }),
                ).exactOptional(),
                IsModifiable: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. ',
                      }),
                  )
                  .exactOptional(),
                MinimumEngineVersion: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The earliest engine version to which the parameter can apply.',
                    }),
                ).exactOptional(),
                ApplyMethod: ApplyMethodSchema.and(
                  z.any().openapi({ description: 'Indicates when to apply parameter updates.' }),
                ).exactOptional(),
              })
              .openapi({
                description: 'Detailed information about an individual parameter.',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'Parameter' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Parameters',
            in: 'query',
            required: false,
            description:
              "A list of parameter names in the cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.",
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      ParameterName: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the name of the parameter.' },
                        ],
                      },
                      ParameterValue: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the value of the parameter.' },
                        ],
                      },
                      Description: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Provides a description of the parameter.' },
                        ],
                      },
                      Source: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Indicates the source of the parameter value.' },
                        ],
                      },
                      ApplyType: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the engine-specific parameters type.' },
                        ],
                      },
                      DataType: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the valid data type for the parameter.' },
                        ],
                      },
                      AllowedValues: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'Specifies the valid range of values for the parameter.' },
                        ],
                      },
                      IsModifiable: {
                        allOf: [
                          { $ref: '#/components/schemas/Boolean' },
                          {
                            description:
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. ',
                          },
                        ],
                      },
                      MinimumEngineVersion: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              'The earliest engine version to which the parameter can apply.',
                          },
                        ],
                      },
                      ApplyMethod: {
                        allOf: [
                          { $ref: '#/components/schemas/ApplyMethod' },
                          { description: 'Indicates when to apply parameter updates.' },
                        ],
                      },
                    },
                    description: 'Detailed information about an individual parameter.',
                  },
                  { xml: { name: 'Parameter' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ResetDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionResetDBClusterParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ResetDBClusterParameterGroup',
  description:
    '<p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>',
  operationId: 'POST_ResetDBClusterParameterGroup',
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
      Action: z
        .literal('ResetDBClusterParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetDBClusterParameterGroup'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ResetDBClusterParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'InvalidDBParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidDBParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionRestoreDBClusterFromSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=RestoreDBClusterFromSnapshot',
  description:
    '<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>',
  operationId: 'GET_RestoreDBClusterFromSnapshot',
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
      AvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'AvailabilityZone' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZones',
            in: 'query',
            required: false,
            description:
              'Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'AvailabilityZone' } },
                ],
              },
            },
          },
        }),
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              "<p>The name of the cluster to create from the snapshot or cluster snapshot. This parameter isn't case sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>",
            schema: { type: 'string' },
          },
        }),
      SnapshotIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SnapshotIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier for the snapshot or cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing snapshot.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Engine: z
        .string()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: true,
            description:
              '<p>The database engine to use for the new cluster.</p> <p>Default: The same as source.</p> <p>Constraint: Must be compatible with the engine of the source.</p>',
            schema: { type: 'string' },
          },
        }),
      EngineVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EngineVersion',
            in: 'query',
            required: false,
            description: 'The version of the database engine to use for the new cluster.',
            schema: { type: 'string' },
          },
        }),
      Port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Port',
            in: 'query',
            required: false,
            description:
              '<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p> <p>Default: The same port as the original cluster.</p>',
            schema: { type: 'integer' },
          },
        }),
      DBSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the subnet group to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      VpcSecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'VpcSecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VpcSecurityGroupIds',
            in: 'query',
            required: false,
            description:
              'A list of virtual private cloud (VPC) security groups that the new cluster will belong to.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'VpcSecurityGroupId' } },
                ],
              },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the restored cluster.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      KmsKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'KmsKeyId',
            in: 'query',
            required: false,
            description:
              '<p>The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.</p> </li> <li> <p>If the snapshot or the cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      EnableCloudwatchLogsExports: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EnableCloudwatchLogsExports',
            in: 'query',
            required: false,
            description:
              'A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      DeletionProtection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeletionProtection',
            in: 'query',
            required: false,
            description:
              'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
            schema: { type: 'boolean' },
          },
        }),
      DBClusterParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterParameterGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the DB cluster parameter group to associate with this DB cluster.</p> <p> <i>Type:</i> String.       <i>Required:</i> No.</p> <p>If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RestoreDBClusterFromSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestoreDBClusterFromSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RestoreDBClusterFromSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    482: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    485: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    486: {
      description: 'InsufficientDBClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBClusterCapacityFaultSchema } },
    },
    487: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    488: {
      description: 'InvalidDBSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBSnapshotStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    490: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    491: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    492: {
      description: 'InvalidRestoreFault',
      content: { 'text/xml': { schema: InvalidRestoreFaultSchema } },
    },
    493: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    494: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    495: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const postActionRestoreDBClusterFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=RestoreDBClusterFromSnapshot',
  description:
    '<p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>',
  operationId: 'POST_RestoreDBClusterFromSnapshot',
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
      Action: z
        .literal('RestoreDBClusterFromSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestoreDBClusterFromSnapshot'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RestoreDBClusterFromSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RestoreDBClusterFromSnapshotResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    482: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBSnapshotNotFoundFaultSchema } },
    },
    485: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    486: {
      description: 'InsufficientDBClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBClusterCapacityFaultSchema } },
    },
    487: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    488: {
      description: 'InvalidDBSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBSnapshotStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    490: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    491: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    492: {
      description: 'InvalidRestoreFault',
      content: { 'text/xml': { schema: InvalidRestoreFaultSchema } },
    },
    493: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    494: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    495: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
  },
})

export const getActionRestoreDBClusterToPointInTimeRoute = createRoute({
  method: 'get',
  path: '/#Action=RestoreDBClusterToPointInTime',
  description:
    'Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. ',
  operationId: 'GET_RestoreDBClusterToPointInTime',
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
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The name of the new cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      RestoreType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RestoreType',
            in: 'query',
            required: false,
            description:
              "<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>",
            schema: { type: 'string' },
          },
        }),
      SourceDBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceDBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier of the source cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing <code>DBCluster</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      RestoreToTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'RestoreToTime',
            in: 'query',
            required: false,
            description:
              '<p>The date and time to restore the cluster to.</p> <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the instance.</p> </li> <li> <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not provided.</p> </li> <li> <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is <code>true</code>.</p> </li> <li> <p>Cannot be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>.</p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      UseLatestRestorableTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'UseLatestRestorableTime',
            in: 'query',
            required: false,
            description:
              '<p>A value that is set to <code>true</code> to restore the cluster to the latest restorable backup time, and <code>false</code> otherwise. </p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is provided.</p>',
            schema: { type: 'boolean' },
          },
        }),
      Port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Port',
            in: 'query',
            required: false,
            description:
              '<p>The port number on which the new cluster accepts connections.</p> <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p> <p>Default: The default port for the engine.</p>',
            schema: { type: 'integer' },
          },
        }),
      DBSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSubnetGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The subnet group name to use for the new cluster.</p> <p>Constraints: If provided, must match the name of an existing <code>DBSubnetGroup</code>.</p> <p>Example: <code>mySubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      VpcSecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'VpcSecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VpcSecurityGroupIds',
            in: 'query',
            required: false,
            description: 'A list of VPC security groups that the new cluster belongs to.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'VpcSecurityGroupId' } },
                ],
              },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            TagSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'Tag' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to be assigned to the restored cluster.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      KmsKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'KmsKeyId',
            in: 'query',
            required: false,
            description:
              '<p>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p> <ul> <li> <p>If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.</p> </li> <li> <p>If the cluster is not encrypted, then the restored cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then the restore request is rejected.</p>',
            schema: { type: 'string' },
          },
        }),
      EnableCloudwatchLogsExports: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EnableCloudwatchLogsExports',
            in: 'query',
            required: false,
            description:
              'A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      DeletionProtection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeletionProtection',
            in: 'query',
            required: false,
            description:
              'Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('RestoreDBClusterToPointInTime')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestoreDBClusterToPointInTime'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RestoreDBClusterToPointInTimeResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InsufficientDBClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBClusterCapacityFaultSchema } },
    },
    486: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    487: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    488: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBSnapshotStateFaultSchema } },
    },
    490: {
      description: 'InvalidRestoreFault',
      content: { 'text/xml': { schema: InvalidRestoreFaultSchema } },
    },
    491: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    494: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
  },
})

export const postActionRestoreDBClusterToPointInTimeRoute = createRoute({
  method: 'post',
  path: '/#Action=RestoreDBClusterToPointInTime',
  description:
    'Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. ',
  operationId: 'POST_RestoreDBClusterToPointInTime',
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
      Action: z
        .literal('RestoreDBClusterToPointInTime')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestoreDBClusterToPointInTime'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RestoreDBClusterToPointInTimeMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RestoreDBClusterToPointInTimeResultSchema } },
    },
    480: {
      description: 'DBClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    482: {
      description: 'DBClusterQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterQuotaExceededFaultSchema } },
    },
    483: {
      description: 'DBClusterSnapshotNotFoundFault',
      content: { 'text/xml': { schema: DBClusterSnapshotNotFoundFaultSchema } },
    },
    484: {
      description: 'DBSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: DBSubnetGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InsufficientDBClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientDBClusterCapacityFaultSchema } },
    },
    486: {
      description: 'InsufficientStorageClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientStorageClusterCapacityFaultSchema } },
    },
    487: {
      description: 'InvalidDBClusterSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterSnapshotStateFaultSchema } },
    },
    488: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    489: {
      description: 'InvalidDBSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidDBSnapshotStateFaultSchema } },
    },
    490: {
      description: 'InvalidRestoreFault',
      content: { 'text/xml': { schema: InvalidRestoreFaultSchema } },
    },
    491: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    494: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
  },
})

export const getActionStartDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=StartDBCluster',
  description:
    'Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.',
  operationId: 'GET_StartDBCluster',
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
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              'The identifier of the cluster to restart. Example: <code>docdb-2019-05-28-15-24-52</code> ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('StartDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionStartDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=StartDBCluster',
  description:
    'Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.',
  operationId: 'POST_StartDBCluster',
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
      Action: z
        .literal('StartDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StartDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionStopDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=StopDBCluster',
  description:
    'Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.',
  operationId: 'GET_StopDBCluster',
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
      DBClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterIdentifier',
            in: 'query',
            required: true,
            description:
              'The identifier of the cluster to stop. Example: <code>docdb-2019-05-28-15-24-52</code> ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('StopDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StopDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: StopDBClusterResultSchema } } },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionStopDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=StopDBCluster',
  description:
    'Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.',
  operationId: 'POST_StopDBCluster',
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
      Action: z
        .literal('StopDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StopDBCluster'] },
          },
        }),
      Version: z
        .literal('2014-10-31')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2014-10-31'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StopDBClusterMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: StopDBClusterResultSchema } } },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})
